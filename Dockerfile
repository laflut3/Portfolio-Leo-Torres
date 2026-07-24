# syntax=docker/dockerfile:1

FROM node:22.13.1-alpine3.21 AS build

WORKDIR /app

RUN npm install --global pnpm@11.9.0
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

FROM node:22.13.1-alpine3.21 AS runtime

WORKDIR /app

RUN npm install --global pnpm@11.9.0
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

LABEL org.opencontainers.image.title="Portfolio Leo Torres" \
  org.opencontainers.image.description="Portfolio React with a private contact mail API" \
  org.opencontainers.image.source="https://github.com/laflut3/Portfolio-Leo-Torres" \
  org.opencontainers.image.licenses="UNLICENSED"

ENV NODE_ENV=production
ENV PORT=8080

COPY --from=build /app/dist ./dist
COPY server ./server
USER node
EXPOSE 8080
CMD ["node", "server/index.mjs"]
