'use strict';

// ─── Defaults ────────────────────────────────────────────────────────────────
const DEFAULT_SETTINGS = {
  redirectHomepage: true,   // youtube.com → subscriptions feed
  blockShorts:      true,   // hide Shorts everywhere
  hideSidebar:      true,   // hide "Up Next" recommendations on watch pages
  hideTrending:     true,   // hide Trending from the guide sidebar
};

const STYLE_ID = 'media-steward-fence';

// ─── CSS injected per-setting ─────────────────────────────────────────────────
//
// YouTube is built on custom elements (ytd-*). These selectors have been stable
// since 2021; YouTube rarely changes element names. The MutationObserver below
// re-injects after SPA navigation in case YouTube clears the <head>.
//
const CSS = {
  blockShorts: `
    /* Shorts shelf on homepage and subscriptions feed */
    ytd-rich-shelf-renderer[is-shorts],
    ytd-rich-shelf-renderer[is-shorts-column],

    /* Shorts in search results */
    ytd-reel-shelf-renderer,

    /* Individual Short tiles in grid (e.g. channel Shorts tab) */
    ytd-rich-grid-slim-media,

    /* Shorts in sidebar "related" panel */
    ytd-reel-item-renderer {
      display: none !important;
    }
  `,

  hideSidebar: `
    /* "Up Next" / recommendations column on watch pages */
    #secondary.ytd-watch-flexy,
    #secondary-inner.ytd-watch-flexy {
      display: none !important;
    }
  `,

  hideTrending: `
    /* Trending & Explore entries in the left guide nav */
    ytd-guide-entry-renderer:has(a[href="/feed/trending"]),
    ytd-guide-entry-renderer:has(a[href="/feed/explore"]),
    ytd-mini-guide-entry-renderer:has(a[href="/feed/trending"]),
    ytd-mini-guide-entry-renderer:has(a[href="/feed/explore"]) {
      display: none !important;
    }
  `,
};

// ─── State ────────────────────────────────────────────────────────────────────
let settings = { ...DEFAULT_SETTINGS };

// ─── Style injection ──────────────────────────────────────────────────────────
function applyStyles() {
  let el = document.getElementById(STYLE_ID);
  if (!el) {
    el = document.createElement('style');
    el.id = STYLE_ID;
    // Attach to <head> if ready, otherwise <html> root (document_start runs early)
    (document.head || document.documentElement).appendChild(el);
  }

  const active = Object.entries(CSS)
    .filter(([key]) => settings[key])
    .map(([, css]) => css)
    .join('\n');

  el.textContent = active;
}

// ─── Navigation handling ──────────────────────────────────────────────────────
//
// Only redirect when the user lands on the algorithm-driven pages.
// We never redirect if the user is navigating to a specific video or channel
// — those are intentional choices.
//
const REDIRECT_PATHS = new Set(['/', '/feed/trending', '/feed/explore']);
const SHORTS_RE = /^\/shorts(\/|$)/;

function checkRedirect() {
  if (!settings.redirectHomepage) return;

  const { pathname } = window.location;

  if (REDIRECT_PATHS.has(pathname) || SHORTS_RE.test(pathname)) {
    // Replace so the back button doesn't loop
    window.location.replace('https://www.youtube.com/feed/subscriptions');
  }
}

// ─── Boot sequence ────────────────────────────────────────────────────────────
//
// 1. document_start: redirect fires immediately, before YouTube renders.
// 2. After storage load: inject CSS.
// 3. yt-navigate-finish: YouTube SPA navigation — re-check redirect + styles.
//
chrome.storage.sync.get(DEFAULT_SETTINGS, (stored) => {
  settings = { ...DEFAULT_SETTINGS, ...stored };
  applyStyles();
  checkRedirect();
});

// YouTube fires this on every client-side navigation
document.addEventListener('yt-navigate-finish', () => {
  checkRedirect();
  applyStyles(); // re-inject in case YouTube nuked our style element
});

// Also catch early redirects before storage responds (document_start is very early)
if (settings.redirectHomepage) {
  checkRedirect();
}

// ─── Live settings sync ───────────────────────────────────────────────────────
// When the popup changes a toggle, reflect it instantly on the open tab.
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
