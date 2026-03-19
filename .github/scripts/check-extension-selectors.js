/**
 * Media Steward — Extension Selector Health Check
 *
 * Visits YouTube using a headless Chromium browser and verifies that the CSS
 * selectors in apps/extension/content.js still match real DOM elements.
 *
 * Exits 0 if everything looks healthy.
 * Exits 1 if any required selector has zero matches, writes a report to
 * /tmp/ms-health-report.txt for the GitHub Actions issue-opener to read.
 *
 * Run locally:  node .github/scripts/check-extension-selectors.js
 */

const { chromium } = require('@playwright/test');
const fs = require('fs');

// ─── Selector registry (mirrors apps/extension/content.js SELECTORS) ──────────
// Keep these in sync. When you update content.js, update these too.
const CHECKS = [
  {
    feature: 'blockShorts (homepage shelf)',
    url: 'https://www.youtube.com/',
    // At least one of these must match on the YouTube homepage
    selectors: [
      'ytd-rich-shelf-renderer[is-shorts]',
      'ytd-rich-shelf-renderer[is-shorts-column]',
      'ytd-reel-shelf-renderer',
      'ytd-rich-grid-slim-media',
      '[page-subtype="shorts"]',
    ],
    required: false, // homepage might not always show Shorts (A/B tests)
  },
  {
    feature: 'blockShorts (search results)',
    url: 'https://www.youtube.com/results?search_query=shorts+compilation',
    selectors: [
      'ytd-reel-shelf-renderer',
      'ytd-rich-shelf-renderer[is-shorts]',
      'ytd-reel-item-renderer',
    ],
    required: true, // search reliably returns Shorts shelves
  },
  {
    feature: 'hideSidebar (watch page)',
    // "Me at the zoo" — the first YouTube video, always exists
    url: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    selectors: [
      '#secondary.ytd-watch-flexy',
      '#secondary-inner.ytd-watch-flexy',
      'ytd-watch-next-secondary-results-renderer',
    ],
    required: true,
  },
  {
    feature: 'hideTrending (guide nav)',
    url: 'https://www.youtube.com/',
    selectors: [
      'ytd-guide-entry-renderer:has(a[href="/feed/trending"])',
      'ytd-mini-guide-entry-renderer:has(a[href="/feed/trending"])',
      'ytd-guide-entry-renderer a[href="/feed/trending"]',
    ],
    required: false, // trending link presence varies by region
  },
];

// ─── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  const browser = await chromium.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled',
    ],
  });

  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
      'AppleWebKit/537.36 (KHTML, like Gecko) ' +
      'Chrome/124.0.0.0 Safari/537.36',
    locale: 'en-US',
    viewport: { width: 1280, height: 800 },
  });

  const lines = [];
  const failures = [];

  function log(msg) {
    console.log(msg);
    lines.push(msg);
  }

  log(`Media Steward — Extension Selector Health Check`);
  log(`Run at: ${new Date().toISOString()}`);
  log('');

  for (const check of CHECKS) {
    log(`▶ ${check.feature}`);
    log(`  URL: ${check.url}`);

    const page = await context.newPage();

    try {
      await page.goto(check.url, { waitUntil: 'domcontentloaded', timeout: 30_000 });
      // Give YouTube's custom elements time to register and render
      await page.waitForTimeout(4_000);

      let anyMatched = false;

      for (const sel of check.selectors) {
        let count = 0;
        try {
          count = await page.locator(sel).count();
        } catch {
          log(`  ⚠  Invalid selector syntax: ${sel}`);
          continue;
        }

        const mark = count > 0 ? '✅' : '—';
        log(`  ${mark} [${count}] ${sel}`);

        if (count > 0) anyMatched = true;
      }

      if (!anyMatched && check.required) {
        log(`  ❌ REQUIRED — no selectors matched. YouTube may have changed its structure.`);
        failures.push(check.feature);
      } else if (!anyMatched) {
        log(`  ⚠  No selectors matched (not required — may be an A/B or regional variation)`);
      }
    } catch (err) {
      log(`  ❌ Page load failed: ${err.message}`);
      if (check.required) failures.push(check.feature);
    } finally {
      await page.close();
    }

    log('');
  }

  await browser.close();

  // ─── Summary ────────────────────────────────────────────────────────────────
  if (failures.length === 0) {
    log('✅ All required selectors matched. Extension is healthy.');
  } else {
    log(`❌ ${failures.length} required check(s) failed:`);
    for (const f of failures) log(`   - ${f}`);
    log('');
    log('Update SELECTORS in apps/extension/content.js and re-run to verify.');
  }

  // Write report file for the GitHub Actions issue-opener
  fs.writeFileSync('/tmp/ms-health-report.txt', lines.join('\n'), 'utf8');

  if (failures.length > 0) process.exit(1);
}

main().catch((err) => {
  console.error('Health check script crashed:', err);
  fs.writeFileSync('/tmp/ms-health-report.txt', `Script error: ${err.message}`, 'utf8');
  process.exit(1);
});
