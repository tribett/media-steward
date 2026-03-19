FROM node:22-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
COPY packages/types/package.json packages/types/package.json
COPY packages/db/package.json packages/db/package.json
COPY packages/blocklists/package.json packages/blocklists/package.json
COPY apps/dns/package.json apps/dns/package.json
RUN npm ci --workspace=apps/dns --include-workspace-root

# Type-check stage: catches TypeScript errors at build time (fails image build on error)
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY tsconfig.base.json ./tsconfig.base.json
COPY packages/types ./packages/types
COPY packages/db ./packages/db
COPY packages/blocklists ./packages/blocklists
COPY apps/dns ./apps/dns
WORKDIR /app/apps/dns
RUN npx tsc --noEmit

FROM base AS runner
WORKDIR /app
# Run as non-root — CAP_NET_BIND_SERVICE in compose grants port 53 to this user
RUN addgroup --system --gid 1001 dnsapp && \
    adduser --system --uid 1001 dnsapp
COPY --from=deps /app/node_modules ./node_modules
COPY tsconfig.base.json ./tsconfig.base.json
COPY packages/types ./packages/types
COPY packages/db ./packages/db
COPY packages/blocklists ./packages/blocklists
COPY apps/dns ./apps/dns
WORKDIR /app/apps/dns
ENV NODE_ENV=production
USER dnsapp
EXPOSE 53/udp
EXPOSE 53/tcp
CMD ["npx", "tsx", "src/index.ts"]
