import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Copy,
  Mail,
  Phone,
} from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from '@/i18n'

type ContactLinkProps = {
  href: string
  label: string
  value: string
  icon: typeof Mail
  external?: boolean
  featured?: boolean
}

type ContactCopyProps = Omit<ContactLinkProps, 'href' | 'external'> & {
  copyLabel: string
  copiedLabel: string
}

async function copyToClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value)
    return
  }

  const input = document.createElement('textarea')
  input.value = value
  input.style.position = 'fixed'
  input.style.opacity = '0'
  document.body.append(input)
  input.select()
  document.execCommand('copy')
  input.remove()
}

function ContactLink({
  href,
  label,
  value,
  icon: Icon,
  external = false,
  featured = false,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`group flex min-h-24 items-center gap-4 border-b border-[var(--portfolio-line)] px-7 py-5 no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring max-md:px-5 ${featured ? 'bg-foreground text-background hover:bg-[var(--portfolio-accent)]' : 'text-foreground hover:bg-[color-mix(in_oklch,var(--portfolio-accent)_7%,transparent)]'}`}
    >
      <span
        className={`grid size-10 shrink-0 place-items-center border ${featured ? 'border-background/30' : 'border-[var(--portfolio-line)] text-[var(--portfolio-accent)]'}`}
      >
        <Icon aria-hidden="true" className="size-4" />
      </span>
      <span className="min-w-0">
        <span
          className={`block text-xs font-semibold tracking-[0.13em] uppercase ${featured ? 'text-background/65' : 'text-[var(--portfolio-text-soft)]'}`}
        >
          {label}
        </span>
        <span className="mt-1 block truncate text-base font-medium">
          {value}
        </span>
      </span>
      <ArrowUpRight
        aria-hidden="true"
        className="ml-auto size-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  )
}

function ContactCopy({
  label,
  value,
  icon: Icon,
  featured = false,
  copyLabel,
  copiedLabel,
}: ContactCopyProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await copyToClipboard(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`group flex min-h-24 w-full items-center gap-4 border-b border-[var(--portfolio-line)] px-7 py-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring max-md:px-5 ${featured ? 'bg-foreground text-background hover:bg-[var(--portfolio-accent)]' : 'text-foreground hover:bg-[color-mix(in_oklch,var(--portfolio-accent)_7%,transparent)]'}`}
    >
      <span
        className={`grid size-10 shrink-0 place-items-center border ${featured ? 'border-background/30' : 'border-[var(--portfolio-line)] text-[var(--portfolio-accent)]'}`}
      >
        <Icon aria-hidden="true" className="size-4" />
      </span>
      <span className="min-w-0">
        <span
          className={`block text-xs font-semibold tracking-[0.13em] uppercase ${featured ? 'text-background/65' : 'text-[var(--portfolio-text-soft)]'}`}
        >
          {label}
        </span>
        <span className="mt-1 block truncate text-base font-medium">
          {value}
        </span>
      </span>
      <span className="ml-auto inline-flex shrink-0 items-center gap-2 text-xs font-semibold">
        {copied ? copiedLabel : copyLabel}
        {copied ? (
          <Check aria-hidden="true" className="size-4" />
        ) : (
          <Copy aria-hidden="true" className="size-4" />
        )}
      </span>
    </button>
  )
}

export function ContactSection() {
  const { copy } = useTranslation()

  return (
    <section id="contact" className="mt-24 max-md:mt-14">
      <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(21rem,1.1fr)] border-y border-[var(--portfolio-line)] max-lg:grid-cols-1">
        <div className="flex flex-col justify-between px-10 py-12 max-lg:border-b max-lg:border-[var(--portfolio-line)] max-md:px-6 max-md:py-9">
          <div data-reveal>
            <p className="m-0 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[var(--portfolio-accent)] uppercase">
              <Mail className="size-4" aria-hidden="true" />
              {copy.contact.kicker}
            </p>
            <h2 className="mt-5 max-w-xl text-balance text-[clamp(3rem,5.8vw,5.8rem)] leading-[0.9] font-semibold tracking-[-0.07em] text-foreground">
              {copy.contact.title}
            </h2>
            <p className="mt-7 max-w-md text-lg leading-8 text-[var(--portfolio-text-soft)]">
              {copy.contact.intro}
            </p>
          </div>
          <p className="mt-14 max-w-sm border-l-2 border-[var(--portfolio-accent)] pl-4 text-sm leading-6 text-[var(--portfolio-text-soft)] max-lg:mt-9">
            {copy.contact.note}
          </p>
        </div>

        <div
          className="border-l border-[var(--portfolio-line)] max-lg:border-l-0"
          data-reveal
        >
          <ContactCopy
            label={copy.contact.emailLabel}
            value={copy.contact.email}
            icon={Mail}
            featured
            copyLabel={copy.contact.copy}
            copiedLabel={copy.contact.copied}
          />
          <ContactCopy
            label={copy.contact.phoneLabel}
            value={copy.contact.phone}
            icon={Phone}
            copyLabel={copy.contact.copy}
            copiedLabel={copy.contact.copied}
          />
          <ContactLink
            href="https://github.com/laflut3"
            label={copy.contact.github}
            value={copy.contact.githubHandle}
            icon={Code2}
            external
          />
          <ContactLink
            href="https://www.linkedin.com/in/leo-torres-804687264/"
            label={copy.contact.linkedin}
            value={copy.contact.linkedinHandle}
            icon={BriefcaseBusiness}
            external
          />
        </div>
      </div>
    </section>
  )
}
