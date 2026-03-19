/**
 * TDD: fetchBlocklist — real network tests against an inline Node.js HTTP server.
 * No mocks: we prove the actual fetch + timeout + User-Agent behaviour.
 */

import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import http from 'node:http';
import type { AddressInfo } from 'node:net';
import { fetchBlocklist } from '../fetcher';

// ── inline test server ────────────────────────────────────────────────────────

let server: http.Server;
let base: string;

beforeAll(
  () =>
    new Promise<void>((resolve) => {
      server = http.createServer((req, res) => {
        // Record the User-Agent so we can assert on it
        const ua = req.headers['user-agent'] ?? '';

        if (req.url === '/ok') {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(`0.0.0.0 ads.example.com\n# comment\n0.0.0.0 tracker.bad.com`);
        } else if (req.url === '/empty') {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('');
        } else if (req.url === '/ua') {
          // Echo the User-Agent back as the body so the test can assert it
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(ua);
        } else if (req.url === '/404') {
          res.writeHead(404);
          res.end('Not Found');
        } else if (req.url === '/500') {
          res.writeHead(500);
          res.end('Internal Server Error');
        } else {
          res.writeHead(404);
          res.end();
        }
      });

      server.listen(0, '127.0.0.1', () => {
        const { port } = server.address() as AddressInfo;
        base = `http://127.0.0.1:${port}`;
        resolve();
      });
    })
);

afterAll(() => new Promise<void>((resolve) => server.close(() => resolve())));

// ── tests ─────────────────────────────────────────────────────────────────────

describe('fetchBlocklist', () => {
  it('returns the response body text on 200', async () => {
    const text = await fetchBlocklist(`${base}/ok`);
    expect(text).toContain('ads.example.com');
    expect(text).toContain('tracker.bad.com');
  });

  it('returns empty string for an empty 200 response', async () => {
    const text = await fetchBlocklist(`${base}/empty`);
    expect(text).toBe('');
  });

  it('sends the correct User-Agent header', async () => {
    const ua = await fetchBlocklist(`${base}/ua`);
    expect(ua).toContain('media-steward');
  });

  it('throws on HTTP 404', async () => {
    await expect(fetchBlocklist(`${base}/404`)).rejects.toThrow('HTTP 404');
  });

  it('throws on HTTP 500', async () => {
    await expect(fetchBlocklist(`${base}/500`)).rejects.toThrow('HTTP 500');
  });
});
