FROM node:22-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
# Copy root workspace files
COPY package.json package-lock.json* ./
# Copy all package.json files for workspace install
COPY apps/web/package.json apps/web/package.json
COPY packages/db/package.json packages/db/package.json
COPY packages/types/package.json packages/types/package.json
COPY packages/blocklists/package.json packages/blocklists/package.json
RUN npm ci

# Build stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
# Copy all source files needed
COPY packages/types ./packages/types
COPY packages/db ./packages/db
COPY packages/blocklists ./packages/blocklists
COPY apps/web ./apps/web
COPY turbo.json ./turbo.json
COPY tsconfig.base.json ./tsconfig.base.json
# Generate Prisma client
WORKDIR /app/packages/db
ENV DATABASE_URL=file:/data/media-steward.db
RUN npx prisma generate
# Build Next.js app
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
RUN cd apps/web && npx next build

# Production runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy standalone output
# In a monorepo, Next.js standalone output mirrors the monorepo structure.
# The standalone dir contains apps/web/server.js and node_modules at the root.
COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder /app/apps/web/public ./apps/web/public

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# In monorepo standalone output, server.js lives at apps/web/server.js
# relative to the standalone root (which we copied to /app)
CMD ["node", "apps/web/server.js"]
