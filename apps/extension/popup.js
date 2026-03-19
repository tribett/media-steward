'use strict';

const DEFAULT_SETTINGS = {
  redirectHomepage: true,
  blockShorts:      true,
  hideSidebar:      true,
  hideTrending:     true,
};

const checkboxes = document.querySelectorAll('input[data-key]');

// ─── Reflect stored settings into the UI ──────────────────────────────────────
function applyToUI(stored) {
  let anyOn = false;

  for (const cb of checkboxes) {
    const key = cb.dataset.key;
    const value = stored[key] ?? DEFAULT_SETTINGS[key];
    cb.checked = value;

    const row = document.getElementById(`row-${key}`);
    if (row) row.classList.toggle('is-on', value);

    if (value) anyOn = true;
  }

  // Status dot dims when everything is disabled
  const dot = document.getElementById('statusDot');
  if (dot) {
    dot.style.opacity = anyOn ? '1' : '0.3';
    dot.title = anyOn ? 'Active' : 'All paused';
  }
}

// ─── Show AI config banner when custom selectors are loaded ───────────────────
function applyConfigBanner(local) {
  const banner = document.getElementById('configBanner');
  if (!banner) return;

  const hasCustom =
    local.msConfig?.selectors &&
    Object.keys(local.msConfig.selectors).length > 0;

  banner.style.display = hasCustom ? 'flex' : 'none';
}

// ─── Load ─────────────────────────────────────────────────────────────────────
chrome.storage.sync.get(DEFAULT_SETTINGS, applyToUI);
chrome.storage.local.get(['msConfig', 'msConfigAt'], applyConfigBanner);

// ─── Save on toggle ───────────────────────────────────────────────────────────
for (const cb of checkboxes) {
  cb.addEventListener('change', () => {
    const key = cb.dataset.key;
    const value = cb.checked;

    // Save to storage (content script will react via onChanged listener)
    chrome.storage.sync.set({ [key]: value });

    // Update row class immediately for snappy feedback
    const row = document.getElementById(`row-${key}`);
    if (row) row.classList.toggle('is-on', value);

    // Reload current YouTube tab so redirect takes effect right away
    // (style changes are live via onChanged, but redirect needs a navigation)
    if (key === 'redirectHomepage') {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];
        if (tab && tab.url && tab.url.includes('youtube.com')) {
          chrome.tabs.reload(tab.id);
        }
      });
    }

    // Refresh status dot
    chrome.storage.sync.get(DEFAULT_SETTINGS, applyToUI);
  });
}

// ─── Manual config refresh button ─────────────────────────────────────────────
// Asks background.js to re-fetch selector config from the local dashboard so
// AI-generated selector updates take effect without waiting an hour.
const refreshBtn = document.getElementById('refreshConfig');
if (refreshBtn) {
  refreshBtn.addEventListener('click', () => {
    refreshBtn.textContent = '↻ Syncing…';
    refreshBtn.disabled = true;

    chrome.runtime.sendMessage({ type: 'REFRESH_CONFIG' }, () => {
      // Re-read local storage to update the banner
      chrome.storage.local.get(['msConfig', 'msConfigAt'], (local) => {
        applyConfigBanner(local);
        refreshBtn.textContent = '↻ Sync';
        refreshBtn.disabled = false;
      });
    });
  });
}
