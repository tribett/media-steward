import { NextResponse } from 'next/server';
import { prisma } from '@media-steward/db';

export const dynamic = 'force-dynamic';

/**
 * Built-in selectors — the fallback when no AI override has been saved.
 * Keep these in sync with apps/extension/content.js SELECTORS.
 */
const BUILTIN_SELECTORS = {
  blockShorts: [
    'ytd-rich-shelf-renderer[is-shorts]',
    'ytd-rich-shelf-renderer[is-shorts-column]',
    'ytd-reel-shelf-renderer',
    'ytd-rich-grid-slim-media',
    'ytd-reel-item-renderer',
    'ytd-rich-section-renderer:has(ytd-rich-shelf-renderer[is-shorts])',
    '#shorts-container',
    '[page-subtype="shorts"]',
  ],
  hideSidebar: [
    '#secondary.ytd-watch-flexy',
    '#secondary-inner.ytd-watch-flexy',
    'ytd-watch-next-secondary-results-renderer',
    'ytd-watch-flexy #secondary',
  ],
  hideTrending: [
    'ytd-guide-entry-renderer:has(a[href="/feed/trending"])',
    'ytd-guide-entry-renderer:has(a[href="/feed/explore"])',
    'ytd-mini-guide-entry-renderer:has(a[href="/feed/trending"])',
    'ytd-mini-guide-entry-renderer:has(a[href="/feed/explore"])',
    'ytd-guide-section-renderer:has(a[href="/feed/explore"])',
  ],
};

/**
 * GET /api/extension-config
 *
 * The browser extension calls this endpoint on startup to get the current
 * selector config. Returns built-in selectors merged with any AI-updated
 * overrides stored in the database.
 *
 * The response is intentionally simple JSON — the extension reads it directly.
 */
export async function GET() {
  const overrides = await prisma.settings.findMany({
    where: { key: { startsWith: 'ext_selectors_' } },
  });

  const selectors = { ...BUILTIN_SELECTORS } as Record<string, string[]>;

  for (const row of overrides) {
    const feature = row.key.replace('ext_selectors_', '');
    if (feature in selectors) {
      try {
        selectors[feature] = JSON.parse(row.value);
      } catch {
        // malformed override — keep built-in
      }
    }
  }

  return NextResponse.json(
    {
      version:   1,
      updatedAt: new Date().toISOString(),
      selectors,
    },
    {
      headers: {
        // The extension fetches this from the background service worker —
        // CORS is not required for extension fetch requests but included
        // in case the dashboard page itself needs to read it.
        'Access-Control-Allow-Origin': '*',
        // Cache for 60s so rapid tab opens don't hammer the server
        'Cache-Control': 'max-age=60',
      },
    },
  );
}

/**
 * POST /api/extension-config
 *
 * Saves AI-updated selectors for a specific feature.
 * Called by the dashboard repair UI after the user approves a suggestion.
 *
 * Body: { feature: string, selectors: string[] }
 */
export async function POST(req: Request) {
  const body = await req.json() as { feature?: string; selectors?: string[] };
  const { feature, selectors } = body;

  if (
    !feature ||
    typeof feature !== 'string' ||
    !Array.isArray(selectors) ||
    selectors.some((s) => typeof s !== 'string')
  ) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  if (!(feature in BUILTIN_SELECTORS)) {
    return NextResponse.json({ error: 'Unknown feature' }, { status: 400 });
  }

  await prisma.settings.upsert({
    where:  { key: `ext_selectors_${feature}` },
    update: { value: JSON.stringify(selectors) },
    create: { key: `ext_selectors_${feature}`, value: JSON.stringify(selectors) },
  });

  return NextResponse.json({ ok: true });
}

/**
 * DELETE /api/extension-config?feature=blockShorts
 *
 * Resets a feature back to built-in selectors by removing the AI override.
 */
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const feature = searchParams.get('feature');

  if (!feature || !(feature in BUILTIN_SELECTORS)) {
    return NextResponse.json({ error: 'Unknown feature' }, { status: 400 });
  }

  await prisma.settings.deleteMany({
    where: { key: `ext_selectors_${feature}` },
  });

  return NextResponse.json({ ok: true });
}
