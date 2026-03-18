FROM node:22-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
COPY packages/types/package.json packages/types/package.json
COPY packages/db/package.json packages/db/package.json
COPY packages/blocklists/package.json packages/blocklists/package.json
COPY apps/dns/package.json apps/dns/package.json
RUN npm ci --workspace=apps/dns --include-workspace-root

FROM base AS runner
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY packages/types ./packages/types
COPY packages/db ./packages/db
COPY packages/blocklists ./packages/blocklists
COPY apps/dns ./apps/dns
WORKDIR /app/apps/dns
ENV NODE_ENV=production
EXPOSE 53/udp
EXPOSE 53/tcp
CMD ["npx", "tsx", "src/index.ts"]
