'use strict';

// ─── Defaults ─────────────────────────────────────────────────────────────────
const DEFAULT_SETTINGS = {
  redirectHomepage: true,   // youtube.com → subscriptions feed
  blockShorts:      true,   // hide Shorts everywhere
  hideSidebar:      true,   // hide "Up Next" recommendations on watch pages
  hideTrending:     true,   // hide Trending from the guide sidebar
};

const STYLE_ID = 'media-steward-fence';

// ─── Selector registry ────────────────────────────────────────────────────────
//
// MAINTENANCE NOTE: If YouTube changes its element structure, update the
// selectors below. Each feature has multiple overlapping selectors — primary
// (most specific), secondary (broader fallback), and semantic (content-based).
//
// To verify selectors still work: open YouTube, press F12, run in the console:
//   MS_DEBUG = true; location.reload();
// The extension will log which selectors matched.
//
// The GitHub Action in .github/workflows/extension-health.yml runs this
// check automatically every Monday and opens an issue if something breaks.
//
const SELECTORS = {

  blockShorts: [
    // Primary: stable attribute markers on the shelf element (since 2021)
    'ytd-rich-shelf-renderer[is-shorts]',
    'ytd-rich-shelf-renderer[is-shorts-column]',

    // Secondary: the reel shelf variant used in search + subscriptions
    'ytd-reel-shelf-renderer',

    // Tertiary: individual Short tiles (channel Shorts tab grid)
    'ytd-rich-grid-slim-media',
    'ytd-reel-item-renderer',

    // Semantic fallbacks: target by the Shorts icon aria-label
    // (YouTube is unlikely to remove accessibility labels)
    'ytd-rich-section-renderer:has(ytd-rich-shelf-renderer[is-shorts])',
    '#shorts-container',

    // Future-proofing: any shelf that YouTube marks with a shorts role
    '[page-subtype="shorts"]',
  ],

  hideSidebar: [
    // Primary: the secondary column on watch pages (stable layout ID since ~2018)
    '#secondary.ytd-watch-flexy',
    '#secondary-inner.ytd-watch-flexy',

    // Secondary: the recommendations renderer itself
    'ytd-watch-next-secondary-results-renderer',

    // Tertiary: catch new theater/full-bleed layouts
    'ytd-watch-flexy #secondary',
  ],

  hideTrending: [
    // Primary: guide entries that link to trending/explore
    // (href-based selectors survive element renames)
    'ytd-guide-entry-renderer:has(a[href="/feed/trending"])',
    'ytd-guide-entry-renderer:has(a[href="/feed/explore"])',
    'ytd-mini-guide-entry-renderer:has(a[href="/feed/trending"])',
    'ytd-mini-guide-entry-renderer:has(a[href="/feed/explore"])',

    // Secondary: the "What to Watch" / Explore section in the guide
    'ytd-guide-section-renderer:has(a[href="/feed/explore"])',
  ],

};

// ─── Custom selectors (AI-patched via dashboard) ──────────────────────────────
// background.js fetches /api/extension-config from the local dashboard and
// stores the result here.  If the dashboard isn't running, this stays empty
// and we fall back to the built-in SELECTORS above.
let customSelectors = {};

chrome.storage.local.get(['msConfig'], (result) => {
  if (result.msConfig?.selectors) {
    customSelectors = result.msConfig.selectors;
    // Re-apply immediately so the new selectors take effect without a reload.
    applyStyles();
  }
});

// Pick up config changes pushed by background.js (e.g. after hourly refresh or
// the user clicked Refresh in the popup) without requiring a page reload.
chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'local' && changes.msConfig?.newValue?.selectors) {
    customSelectors = changes.msConfig.newValue.selectors;
    applyStyles();
  }
});

// ─── CSS builder ──────────────────────────────────────────────────────────────
// Builds a CSS rule for each enabled feature.
// Uses AI-patched selectors from the dashboard if available, falls back to
// the built-in SELECTORS registry above.
function buildCSS(activeSettings) {
  const blocks = [];

  for (const [key, builtIn] of Object.entries(SELECTORS)) {
    if (!activeSettings[key]) continue;
    const selectors = customSelectors[key] ?? builtIn;
    blocks.push(`${selectors.join(',\n')} { display: none !important; }`);
  }

  return blocks.join('\n\n');
}

// ─── Debug / health check ─────────────────────────────────────────────────────
// Set MS_DEBUG=true in the console and reload to see which selectors matched.
function debugReport() {
  if (!window.MS_DEBUG) return;

  console.group('[Media Steward] Selector health report');
  for (const [feature, selectors] of Object.entries(SELECTORS)) {
    console.group(feature);
    for (const sel of selectors) {
      try {
        const count = document.querySelectorAll(sel).length;
        console.log(`${count > 0 ? '✅' : '—'} ${sel} (${count} elements)`);
      } catch {
        console.warn(`⚠️  Invalid selector: ${sel}`);
      }
    }
    console.groupEnd();
  }
  console.groupEnd();
}

// ─── State ────────────────────────────────────────────────────────────────────
let settings = { ...DEFAULT_SETTINGS };

// ─── Style injection ──────────────────────────────────────────────────────────
function applyStyles() {
  let el = document.getElementById(STYLE_ID);
  if (!el) {
    el = document.createElement('style');
    el.id = STYLE_ID;
    (document.head || document.documentElement).appendChild(el);
  }
  el.textContent = buildCSS(settings);
}

// ─── Navigation handling ──────────────────────────────────────────────────────
const REDIRECT_PATHS = new Set(['/', '/feed/trending', '/feed/explore']);
const SHORTS_RE = /^\/shorts(\/|$)/;

function checkRedirect() {
  if (!settings.redirectHomepage) return;
  const { pathname } = window.location;
  if (REDIRECT_PATHS.has(pathname) || SHORTS_RE.test(pathname)) {
    window.location.replace('https://www.youtube.com/feed/subscriptions');
  }
}

// ─── Boot sequence ────────────────────────────────────────────────────────────
chrome.storage.sync.get(DEFAULT_SETTINGS, (stored) => {
  settings = { ...DEFAULT_SETTINGS, ...stored };
  applyStyles();
  checkRedirect();
});

// YouTube SPA navigation — re-apply after every client-side page transition
document.addEventListener('yt-navigate-finish', () => {
  checkRedirect();
  applyStyles();
  debugReport();
});

// Early redirect before storage resolves (document_start fires very early)
if (settings.redirectHomepage) {
  checkRedirect();
}

// ─── Live settings sync ───────────────────────────────────────────────────────
chrome.storage.onChanged.addListener((changes) => {
  let changed = false;
  for (const [key, { newValue }] of Object.entries(changes)) {
    if (key in settings) {
      settings[key] = newValue;
      changed = true;
    }
  }
  if (changed) {
    applyStyles();
    checkRedirect();
  }
});
