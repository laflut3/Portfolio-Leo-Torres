import { createReadStream, existsSync } from 'node:fs'
import { stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, resolve, sep } from 'node:path'
import nodemailer from 'nodemailer'

try {
  process.loadEnvFile('.env')
} catch (error) {
  if (error?.code !== 'ENOENT') throw error
}

const port = Number(process.env.PORT ?? 8080)
const distDirectory = resolve('dist')
const maxRequestSize = 20_000
const rateLimitWindowMs = 15 * 60 * 1000
const rateLimitMaxRequests = 5
const attemptsByIp = new Map()

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
}

function sendJson(response, status, body) {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  })
  response.end(JSON.stringify(body))
}

function getTransporter() {
  const { SMTP_APP_PASSWORD, SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER } =
    process.env

  if (!SMTP_APP_PASSWORD || !SMTP_HOST || !SMTP_USER) return null

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 465),
    secure: SMTP_SECURE !== 'false',
    auth: { user: SMTP_USER, pass: SMTP_APP_PASSWORD },
  })
}

function canSendFrom(ip) {
  const now = Date.now()
  const attempts = attemptsByIp.get(ip) ?? []
  const recentAttempts = attempts.filter(
    (timestamp) => now - timestamp < rateLimitWindowMs,
  )

  if (recentAttempts.length >= rateLimitMaxRequests) return false

  recentAttempts.push(now)
  attemptsByIp.set(ip, recentAttempts)
  return true
}

async function readJson(request) {
  const chunks = []
  let length = 0

  for await (const chunk of request) {
    length += chunk.length
    if (length > maxRequestSize) throw new Error('Payload too large')
    chunks.push(chunk)
  }

  return JSON.parse(Buffer.concat(chunks).toString('utf8'))
}

function isValidMessage({ name, email, message }) {
  return (
    typeof name === 'string' &&
    name.trim().length >= 2 &&
    name.trim().length <= 120 &&
    typeof email === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    email.length <= 254 &&
    typeof message === 'string' &&
    message.trim().length >= 10 &&
    message.trim().length <= 10_000
  )
}

async function handleContactRequest(request, response) {
  const ip = request.socket.remoteAddress ?? 'unknown'

  if (!canSendFrom(ip)) {
    sendJson(response, 429, { error: 'Too many requests' })
    return
  }

  const transporter = getTransporter()
  const recipient = process.env.CONTACT_RECIPIENT ?? process.env.SMTP_USER

  if (!transporter || !recipient) {
    sendJson(response, 503, { error: 'Mail service is not configured' })
    return
  }

  try {
    const payload = await readJson(request)

    if (!isValidMessage(payload)) {
      sendJson(response, 400, { error: 'Invalid contact message' })
      return
    }

    const name = payload.name.trim()
    const email = payload.email.trim()
    const message = payload.message.trim()

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: recipient,
      replyTo: email,
      subject: `Portfolio contact — ${name}`,
      text: `Nom : ${name}\nE-mail : ${email}\n\n${message}`,
    })

    sendJson(response, 200, { ok: true })
  } catch (error) {
    const status = error instanceof SyntaxError ? 400 : 500
    sendJson(response, status, { error: 'Unable to send contact message' })
  }
}

async function serveStatic(request, response) {
  const url = new URL(request.url ?? '/', `http://${request.headers.host}`)
  const requestedPath = url.pathname === '/' ? '/index.html' : url.pathname
  const filePath = resolve(distDirectory, `.${requestedPath}`)
  const isWithinDist = filePath.startsWith(`${distDirectory}${sep}`)
  const hasExtension = Boolean(extname(requestedPath))

  if (!isWithinDist) {
    response.writeHead(403).end()
    return
  }

  const fallbackPath = resolve(distDirectory, 'index.html')
  const targetPath = existsSync(filePath)
    ? filePath
    : hasExtension
      ? null
      : fallbackPath

  if (!targetPath) {
    response.writeHead(404).end()
    return
  }

  const fileStat = await stat(targetPath)
  if (!fileStat.isFile()) {
    response.writeHead(404).end()
    return
  }

  const extension = extname(targetPath)
  response.writeHead(200, {
    'Content-Type': mimeTypes[extension] ?? 'application/octet-stream',
    'Cache-Control':
      extension && extension !== '.html'
        ? 'public, max-age=31536000, immutable'
        : 'no-cache',
  })
  createReadStream(targetPath).pipe(response)
}

createServer(async (request, response) => {
  if (request.method === 'POST' && request.url === '/api/contact') {
    await handleContactRequest(request, response)
    return
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD, POST' }).end()
    return
  }

  await serveStatic(request, response)
}).listen(port, () => {
  console.log(`Portfolio server listening on port ${port}`)
})
