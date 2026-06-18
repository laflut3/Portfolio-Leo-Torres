# syntax=docker/dockerfile:1

FROM node:22.13.1-alpine3.21 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.27.3-alpine3.20

LABEL org.opencontainers.image.title="Portfolio Leo Torres" \
  org.opencontainers.image.description="React portfolio built with Vite" \
  org.opencontainers.image.source="https://github.com/ltorres/Portfolio-Leo-Torres" \
  org.opencontainers.image.licenses="UNLICENSED"

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
