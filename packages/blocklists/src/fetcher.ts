/**
 * Fetches a remote blocklist (hosts file or plain domain list) over HTTP.
 * Times out after 30 seconds.
 */
export async function fetchBlocklist(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'media-steward/1.0 (https://github.com/media-steward)' },
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch blocklist from ${url}: HTTP ${res.status}`);
  }
  return res.text();
}
