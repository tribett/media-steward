import { prisma } from '@media-steward/db';
import {
  isBlocked,
  buildBlockedSet,
  parseHostsFile,
  ALGORITHMIC_FEEDS,
  SHORT_FORM_CONTENT,
  SOCIAL_MEDIA,
} from '@media-steward/blocklists';

let cachedBlockedSet: Set<string> | null = null;
let lastRefresh = 0;
const REFRESH_INTERVAL = 6 * 60 * 60 * 1000; // 6 hours

let cachedFenceEnabled: boolean | null = null;
let fenceEnabledLastFetch = 0;
const SETTINGS_TTL = 30_000; // 30 seconds

export async function getFenceEnabled(): Promise<boolean> {
  if (cachedFenceEnabled === null || Date.now() - fenceEnabledLastFetch > SETTINGS_TTL) {
    const setting = await prisma.settings.findUnique({ where: { key: 'fence_enabled' } });
    cachedFenceEnabled = setting?.value === 'true';
    fenceEnabledLastFetch = Date.now();
  }
  return cachedFenceEnabled;
}

export function invalidateFenceEnabled(): void {
  cachedFenceEnabled = null;
}

let refreshPromise: Promise<void> | null = null;

export async function refreshBlocklists(): Promise<void> {
  const domains: string[][] = [];

  // Get current preset from settings
  const presetSetting = await prisma.settings.findUnique({ where: { key: 'fence_preset' } });
  const preset = (presetSetting?.value ?? 'balanced') as 'light' | 'balanced' | 'intentional';

  // Load curated lists based on preset
  // light: ads only (no curated social lists — remote blocklists handle ads)
  // balanced: ads + algorithmic feeds + short-form content
  // intentional: all including social media
  if (preset === 'balanced' || preset === 'intentional') {
    domains.push(ALGORITHMIC_FEEDS);
    domains.push(SHORT_FORM_CONTENT);
  }
  if (preset === 'intentional') {
    domains.push(SOCIAL_MEDIA);
  }

  // Fetch remote blocklists for enabled sources
  const sources = await prisma.blocklistSource.findMany({ where: { enabled: true } });
  for (const source of sources) {
    if (!source.url) continue;
    try {
      const res = await fetch(source.url, {
        signal: AbortSignal.timeout(30_000),
        headers: { 'User-Agent': 'media-steward/1.0 (https://github.com/media-steward)' },
      });
      if (res.ok) {
        const text = await res.text();
        domains.push(parseHostsFile(text));
      }
    } catch {
      console.warn(`[resolver] Failed to fetch blocklist: ${source.url}`);
    }
  }

  cachedBlockedSet = buildBlockedSet(domains);
  lastRefresh = Date.now();
  console.log(`[resolver] Blocklist refreshed: ${cachedBlockedSet.size} domains blocked`);
}

async function getBlockedSet(): Promise<Set<string>> {
  if (!cachedBlockedSet || Date.now() - lastRefresh > REFRESH_INTERVAL) {
    if (!refreshPromise) {
      refreshPromise = refreshBlocklists().finally(() => { refreshPromise = null; });
    }
    await refreshPromise;
  }
  return cachedBlockedSet!;
}

export async function checkDomain(domain: string): Promise<boolean> {
  if (!(await getFenceEnabled())) return false;
  const blocked = await getBlockedSet();
  return isBlocked(domain, blocked);
}
