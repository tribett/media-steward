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
      const res = await fetch(source.url);
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
    await refreshBlocklists();
  }
  return cachedBlockedSet!;
}

export async function checkDomain(domain: string): Promise<boolean> {
  const fenceEnabledSetting = await prisma.settings.findUnique({ where: { key: 'fence_enabled' } });
  if (fenceEnabledSetting?.value !== 'true') return false;
  const blocked = await getBlockedSet();
  return isBlocked(domain, blocked);
}
