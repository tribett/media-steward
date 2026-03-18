export { ALGORITHMIC_FEEDS, SHORT_FORM_CONTENT, SOCIAL_MEDIA, PRESETS } from './curated';
export { fetchBlocklist } from './fetcher';

/**
 * Parses a hosts file or plain domain list into an array of domain strings.
 *
 * Supports:
 *   - 0.0.0.0 example.com   (hosts file format)
 *   - 127.0.0.1 example.com (hosts file format)
 *   - example.com           (plain list format)
 *   - # comment lines       (ignored)
 */
export function parseHostsFile(raw: string): string[] {
  const domains: string[] = [];
  for (const line of raw.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const parts = trimmed.split(/\s+/);

    if (parts.length >= 2 && (parts[0] === '0.0.0.0' || parts[0] === '127.0.0.1')) {
      const domain = parts[1].toLowerCase();
      if (domain && domain !== 'localhost' && domain !== '0.0.0.0') {
        domains.push(domain);
      }
    } else if (parts.length === 1 && !parts[0].includes(' ')) {
      domains.push(parts[0].toLowerCase());
    }
  }
  return domains;
}

/**
 * Checks if a DNS query domain should be blocked.
 *
 * Supports:
 *   - Exact domain match: 'ads.example.com' matches 'ads.example.com'
 *   - Subdomain match: 'sub.ads.example.com' matches 'ads.example.com'
 *   - Trailing dot normalization (DNS wire format)
 *   - Case-insensitive matching
 */
export function isBlocked(domain: string, blockedSet: Set<string>): boolean {
  const lower = domain.toLowerCase().replace(/\.$/, '');

  // Exact match
  if (blockedSet.has(lower)) return true;

  // Subdomain match — check progressively shorter suffixes
  // Skip www-only prefix: www.X is not treated as a subdomain of X
  const parts = lower.split('.');
  for (let i = 1; i < parts.length - 1; i++) {
    if (i === 1 && parts[0] === 'www') continue;
    const parent = parts.slice(i).join('.');
    if (blockedSet.has(parent)) return true;
  }

  return false;
}

/**
 * Builds a unified Set of blocked domains from multiple domain arrays.
 * All domains are lowercased for consistent matching.
 */
export function buildBlockedSet(domainArrays: string[][]): Set<string> {
  const set = new Set<string>();
  for (const arr of domainArrays) {
    for (const domain of arr) {
      set.add(domain.toLowerCase());
    }
  }
  return set;
}
