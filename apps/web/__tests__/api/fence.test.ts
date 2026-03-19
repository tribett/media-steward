/**
 * TDD: Fence API route — unit tests
 *
 * Run: npm test --workspace=apps/web
 *
 * RED tests (before fix):
 *   - 'returns 400 for malformed JSON' → currently 500 (no try/catch)
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';

// Hoist mocks so they run before any static imports
vi.mock('next/cache', () => ({ revalidatePath: vi.fn() }));
vi.mock('@media-steward/db', () => ({
  prisma: {
    settings: {
      upsert: vi.fn().mockResolvedValue({ key: 'fence_enabled', value: 'true' }),
    },
  },
}));

// Import route handler AFTER mock declarations (vi.mock is hoisted but
// the factory is evaluated before module resolution)
const { POST } = await import('../../app/api/fence/route');

// ── helpers ──────────────────────────────────────────────────────────────────

function postRequest(body: unknown) {
  const raw = typeof body === 'string' ? body : JSON.stringify(body);
  return new Request('http://localhost/api/fence', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: raw,
  });
}

// ── tests ─────────────────────────────────────────────────────────────────────

describe('POST /api/fence', () => {
  beforeEach(() => vi.clearAllMocks());

  // ── happy path ──────────────────────────────────────────────────────────────
  it('returns 200 for { enabled: true }', async () => {
    const res = await POST(postRequest({ enabled: true }) as any);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toEqual({ ok: true });
  });

  it('returns 200 for { enabled: false }', async () => {
    const res = await POST(postRequest({ enabled: false }) as any);
    expect(res.status).toBe(200);
  });

  // ── validation ──────────────────────────────────────────────────────────────
  it('returns 400 when enabled is a string', async () => {
    const res = await POST(postRequest({ enabled: 'yes' }) as any);
    expect(res.status).toBe(400);
  });

  it('returns 400 when enabled is a number', async () => {
    const res = await POST(postRequest({ enabled: 1 }) as any);
    expect(res.status).toBe(400);
  });

  it('returns 400 when enabled is null', async () => {
    const res = await POST(postRequest({ enabled: null }) as any);
    expect(res.status).toBe(400);
  });

  it('returns 400 when enabled field is missing', async () => {
    const res = await POST(postRequest({}) as any);
    expect(res.status).toBe(400);
  });

  // ★ this was 500 before the try/catch fix ────────────────────────────────
  it('★ returns 400 (not 500) for malformed JSON body', async () => {
    const res = await POST(postRequest('not valid json {{') as any);
    expect(res.status).toBe(400);
  });

  it('★ returns 400 (not 500) for empty body', async () => {
    const req = new Request('http://localhost/api/fence', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '',
    });
    const res = await POST(req as any);
    expect(res.status).toBe(400);
  });
});
