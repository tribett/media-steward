'use strict';

/**
 * Media Steward — Background Service Worker
 *
 * Responsible for fetching the selector config from the local dashboard
 * (http://localhost:3000/api/extension-config) and storing it in
 * chrome.storage.local so content.js can use AI-patched selectors
 * without needing its own network permission.
 *
 * Flow:
 *   1. On install/update: fetch config immediately, schedule hourly refresh.
 *   2. On alarm: refresh config.
 *   3. On REFRESH_CONFIG message from popup: refresh and reply.
 *   4. Content.js reads chrome.storage.local.msConfig on startup.
 */

const CONFIG_URL = 'http://localhost:3000/api/extension-config';
const ALARM_NAME  = 'ms-config-refresh';

// ─── Config fetch ──────────────────────────────────────────────────────────────
async function refreshConfig() {
  try {
    const res = await fetch(CONFIG_URL, { signal: AbortSignal.timeout(3_000) });
    if (!res.ok) return;

    const config = await res.json();

    // Store both the config payload and a timestamp so the popup can show
    // when the dashboard was last seen running.
    await chrome.storage.local.set({
      msConfig:   config,
      msConfigAt: Date.now(),
    });

    console.log('[Media Steward] Selector config refreshed from dashboard.');
  } catch {
    // Dashboard is not running — content.js will fall back to built-in selectors.
    // This is the normal state when the user hasn't started the dashboard.
  }
}

// ─── Lifecycle ────────────────────────────────────────────────────────────────
chrome.runtime.onInstalled.addListener(() => {
  refreshConfig();
  // Refresh every hour so config updates from the AI repair page propagate
  // to the extension without requiring a manual reload.
  chrome.alarms.create(ALARM_NAME, { periodInMinutes: 60 });
});

// Also refresh once when the browser/extension starts up (service worker wake)
chrome.runtime.onStartup.addListener(() => {
  refreshConfig();
});

// ─── Alarm ────────────────────────────────────────────────────────────────────
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === ALARM_NAME) refreshConfig();
});

// ─── Message API ──────────────────────────────────────────────────────────────
// popup.js sends REFRESH_CONFIG when the user clicks the "Refresh" button so
// the extension picks up new AI-generated selectors without waiting an hour.
chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.type === 'REFRESH_CONFIG') {
    refreshConfig().then(() => sendResponse({ ok: true }));
    return true; // Keep the message channel open for the async sendResponse
  }
});
