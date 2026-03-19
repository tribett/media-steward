/**
 * Regression tests for /api/extension-config
 *
 * Tests run against the live Next.js dev server on localhost:3000.
 * Run: vitest run (or pnpm test inside apps/web)
 */

import { describe, it, expect, beforeEach } from 'vitest';

const BASE = 'http://localhost:3000';

// ─── helpers ──────────────────────────────────────────────────────────────────
async function getConfig() {
  const res = await fetch(`${BASE}/api/extension-config`);
  expect(res.ok).toBe(true);
  return res.json() as Promise<{ version: number; selectors: Record<string, string[]> }>;
}

async function postSelector(feature: string, selectors: string[]) {
  return fetch(`${BASE}/api/extension-config`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ feature, selectors }),
  });
}

async function deleteSelector(feature: string) {
  return fetch(`${BASE}/api/extension-config?feature=${feature}`, {
    method: 'DELETE',
  });
}

// ─── tests ────────────────────────────────────────────────────────────────────
describe('GET /api/extension-config', () => {
  it('returns built-in selectors for all three features', async () => {
    const config = await getConfig();

    expect(config.version).toBe(1);
    expect(config.selectors).toHaveProperty('blockShorts');
    expect(config.selectors).toHaveProperty('hideSidebar');
    expect(config.selectors).toHaveProperty('hideTrending');
  });

  it('includes at least one selector per feature', async () => {
    const config = await getConfig();

    for (const feature of ['blockShorts', 'hideSidebar', 'hideTrending']) {
      expect(Array.isArray(config.selectors[feature])).toBe(true);
      expect(config.selectors[feature].length).toBeGreaterThan(0);
    }
  });

  it('sets Cache-Control max-age', async () => {
    const res = await fetch(`${BASE}/api/extension-config`);
    const cc = res.headers.get('Cache-Control') ?? '';
    expect(cc).toContain('max-age=');
  });

  it('sets CORS header for extension origin', async () => {
    const res = await fetch(`${BASE}/api/extension-config`);
    const acao = res.headers.get('Access-Control-Allow-Origin');
    expect(acao).toBe('*');
  });
});

describe('POST /api/extension-config', () => {
  const TEST_FEATURE = 'blockShorts';
  const TEST_SELECTORS = ['ytd-test-el-1', 'ytd-test-el-2'];

  beforeEach(async () => {
    // Clean state: remove any override left from a previous test run
    await deleteSelector(TEST_FEATURE);
  });

  it('saves custom selectors and GET returns them', async () => {
    const postRes = await postSelector(TEST_FEATURE, TEST_SELECTORS);
    expect(postRes.ok).toBe(true);
    const body = await postRes.json();
    expect(body.ok).toBe(true);

    // GET must now return the custom selectors (not built-in)
    const config = await getConfig();
    expect(config.selectors[TEST_FEATURE]).toEqual(TEST_SELECTORS);
  });

  it('rejects a request with missing selectors field', async () => {
    const res = await fetch(`${BASE}/api/extension-config`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ feature: TEST_FEATURE }), // no selectors
    });
    expect(res.status).toBe(400);
  });

  it('rejects a request with an unknown feature name', async () => {
    const res = await postSelector('unknownFeature', ['ytd-test']);
    expect(res.status).toBe(400);
  });
});

describe('DELETE /api/extension-config', () => {
  const TEST_FEATURE = 'hideSidebar';
  const TEST_SELECTORS = ['ytd-delete-test'];

  it('resets feature to built-in selectors after DELETE', async () => {
    // First save a custom override
    await postSelector(TEST_FEATURE, TEST_SELECTORS);
    const afterPost = await getConfig();
    expect(afterPost.selectors[TEST_FEATURE]).toEqual(TEST_SELECTORS);

    // Delete the override
    const delRes = await deleteSelector(TEST_FEATURE);
    expect(delRes.ok).toBe(true);

    // GET must now return the built-in selectors again
    const afterDelete = await getConfig();
    expect(afterDelete.selectors[TEST_FEATURE]).not.toEqual(TEST_SELECTORS);
    expect(afterDelete.selectors[TEST_FEATURE].length).toBeGreaterThan(0);
  });
});
