<div align="center">

# The Media Steward

**Self-hosted family media stewardship — DNS blocking, curated RSS, and intentional media rhythms.**

*One command. Covers every device on your WiFi.*

---

![License](https://img.shields.io/badge/license-MIT-amber?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=flat-square&logo=docker)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript)
![Raspberry Pi](https://img.shields.io/badge/Raspberry%20Pi-4%2F5-C51A4A?style=flat-square&logo=raspberrypi)

</div>

---

## What is this?

The Media Steward is a self-hosted household tool that runs on any old computer and gives your family three things:

- **🛡️ Fence** — DNS-level content blocking. Configure presets (Light / Balanced / Intentional), toggle blocklist sources, and schedule time blocks when all internet is cut off. Because it runs at the DNS layer, it covers *every device on your WiFi* automatically — phones, tablets, smart TVs, everything — with a single router setting change.

- **🌱 Cultivate** — A curated RSS feed reader. Add only the sources you've chosen. No algorithmic feeds, no recommendations, no infinite scroll. Just your articles, in order.

- **📖 Steward** — Track your household's intentional media rhythms — practices you've committed to, like "no screens before breakfast" or "Friday family movie at 7 PM". Shown on the dashboard each day.

The interface uses a warm amber aesthetic designed to feel calm and purposeful, not addictive.

---

## Quick Start

**Requirements:** Docker, macOS or Linux (including Raspberry Pi 4/5).

```bash
git clone https://github.com/tribett/media-steward.git
cd media-steward
./start.sh
```

Then open **http://localhost:3000** and complete the 4-step setup wizard.

Finally, point your router's Primary DNS to this machine's IP address. Every device on your network is now covered.

> **BrightSpeed routers:** Router Settings → Internet → DNS Settings → Primary DNS

---

## Raspberry Pi

Media Steward runs great on a Raspberry Pi 4 or 5 (64-bit Raspberry Pi OS). The `node:22-alpine` Docker image is multi-arch and pulls the right `arm64` layer automatically.

**One gotcha:** Raspberry Pi OS (and Ubuntu) bind a stub resolver to port 53 via `systemd-resolved`. You need to free that port before starting:

```bash
sudo systemctl disable --now systemd-resolved
sudo rm -f /etc/resolv.conf
echo 'nameserver 8.8.8.8' | sudo tee /etc/resolv.conf
```

Then run `./start.sh` as normal. The script will warn you automatically if port 53 is still occupied.

**Install Docker on Pi:**
```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER   # log out and back in after this
```

---

## Architecture

```
media-steward/
├── apps/
│   ├── dns/          # UDP + TCP DNS server (dns2, port 53)
│   └── web/          # Next.js 15 App Router dashboard (port 3000)
├── packages/
│   ├── db/           # Prisma + SQLite schema & client
│   ├── blocklists/   # Steven Black host-file blocklist loader
│   └── types/        # Shared TypeScript types
├── docker-compose.yml
└── start.sh
```

**Stack:**
- [Next.js 15](https://nextjs.org) — App Router, Server Actions, Server Components
- [Prisma 6](https://prisma.io) + SQLite — zero-config embedded database
- [dns2](https://github.com/song940/node-dns) — Node.js DNS server (UDP + TCP)
- [Tailwind v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) — styling
- [Turborepo](https://turbo.build) — monorepo build orchestration
- [Docker Compose](https://docs.docker.com/compose/) — one-command deployment

**How DNS blocking works:**

```
Device DNS query → DNS server (port 53)
                 ↓
         Check fence_enabled (DB cache, 30s TTL)
                 ↓
         Check schedule blocks (is this a blocked hour?)
                 ↓
         Check domain against blocklist (6h cache)
                 ↓
         NXDOMAIN (blocked) or upstream forward (allowed)
```

The DNS server caches the blocklist in memory (refreshed every 6 hours) and deduplicates concurrent refresh requests. Cold queries add ~1ms latency; cached queries are negligible.

---

## Fence Presets

| Preset | What's blocked |
|--------|---------------|
| **Light** | Ads & tracking domains |
| **Balanced** | + Algorithmic feeds (YouTube home, TikTok, Reels, Twitter/X feed) |
| **Intentional** | + Social media entirely (Facebook, Instagram, Reddit, etc.) |

Each preset is powered by [Steven Black's unified hosts](https://github.com/StevenBlack/hosts) list with category filters applied.

---

## Schedule Blocks

Add time blocks when *all* internet access is cut off regardless of fence preset. Useful for:
- Bedtime (e.g., Mon–Fri 9 PM – 7 AM)
- Dinner (e.g., every day 6 PM – 7 PM)
- School hours (e.g., weekdays 8 AM – 3 PM)

Configured per-day with AM/PM time selectors.

---

## Development

```bash
# Install dependencies
npm install

# Run database migrations
npm run db:push --workspace=packages/db

# Seed example data
npm run db:seed --workspace=packages/db

# Start the web app (dev server)
cd apps/web && DATABASE_URL=file:../../dev.db npm run dev

# Start the DNS server (separate terminal)
cd apps/dns && DATABASE_URL=file:../../dev.db npm run dev

# Run all tests
npm test
```

**Testing:**
- DNS logic: Vitest unit tests (`apps/dns/src/__tests__/`)
- Blocklists: Vitest unit tests (`packages/blocklists/`)
- E2E: Playwright (`apps/web/e2e/`)

```bash
npm test                    # all tests
npm run test --workspace=apps/dns   # DNS only
```

---

## Configuration

| Environment variable | Default | Description |
|---|---|---|
| `DATABASE_URL` | `file:/app/data/dev.db` | SQLite database path |
| `UPSTREAM_DNS` | `8.8.8.8` | Upstream DNS server for non-blocked queries |

Set in `.env` (copy from `.env.example`) for local dev, or via Docker Compose environment block for production.

---

## Router Setup

After running `./start.sh`, find your machine's IP (printed by the script) and set it as your router's primary DNS:

- **BrightSpeed:** Router Settings → Internet → DNS Settings → Primary DNS
- **Most routers:** Advanced → DNS → Primary DNS Server

Your secondary DNS can remain your ISP's default (e.g., `8.8.4.4`) for fallback. The media steward machine must stay on and connected to your network.

---

## Why self-hosted?

- **No subscription** — runs on hardware you already own (old laptop, Raspberry Pi, NUC)
- **No telemetry** — your DNS queries never leave your home network
- **No app to install on every device** — one DNS change covers everything
- **Fully auditable** — read the source, modify it, make it yours

---

## License

MIT — do whatever you want with it.

---

<div align="center">
Built for intentional households. ◈
</div>
