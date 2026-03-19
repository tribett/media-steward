# Media Steward — Browser Extension

A Manifest V3 Chrome/Firefox extension that surgically fixes YouTube:

- **Subscriptions as home** — `youtube.com` redirects to your subscriptions feed, not the algorithm's homepage
- **Remove Shorts** — Shorts shelves disappear from homepage, search results, and channel pages
- **Hide recommendations** — The "Up Next" sidebar on watch pages is removed. Just the video.
- **Hide Trending** — Trending & Explore removed from the navigation sidebar

## Install (local / sideload)

1. Open Chrome → `chrome://extensions`
2. Enable **Developer mode** (top right toggle)
3. Click **Load unpacked**
4. Select this `apps/extension` folder

For Firefox: `about:debugging` → This Firefox → Load Temporary Add-on → select `manifest.json`

## Chrome Web Store

To submit to the Chrome Web Store you need:
1. A [Chrome Developer account](https://chrome.google.com/webstore/devconsole) ($5 one-time fee)
2. PNG icons at all four sizes (already pre-generated in `icons/`)
3. Screenshots (1280×800 or 640×400)
4. Privacy practice declaration — select "This extension does not collect or use user data"

Review typically takes 1-3 business days.

## Firefox Add-ons (AMO)

Firefox supports Manifest V3 since v109. Submit at [addons.mozilla.org](https://addons.mozilla.org/developers/) — free account, same extension files work.

For a stable extension ID (needed for signing), add to `manifest.json`:
```json
"browser_specific_settings": {
  "gecko": {
    "id": "media-steward@tribett.com"
  }
}
```

## Generating icons

PNG icons are pre-generated and committed. To regenerate from `icons/icon.svg`:

```bash
cd apps/extension/icons
node generate-icons.js   # requires: npm install sharp
```

Or with ImageMagick:
```bash
for size in 16 32 48 128; do
  convert -background none -resize ${size}x${size} icons/icon.svg icons/icon${size}.png
done
```

## How it works

The extension is pure JavaScript — no build step, no framework, no external dependencies.

- **`manifest.json`** — Declares permissions (`storage`, `activeTab`) and `youtube.com` host access
- **`content.js`** — Runs at `document_start` on every YouTube page. Injects CSS to hide algorithmic elements and redirects the homepage via `window.location.replace`
- **`popup.html`/`popup.js`** — The settings panel. Reads/writes `chrome.storage.sync` (syncs across the user's devices)

YouTube is a Single Page App, so the content script also listens for `yt-navigate-finish` (YouTube's custom navigation event) to re-apply CSS and check for redirects on every client-side navigation.

Settings sync across devices via `chrome.storage.sync`.

## Privacy

- Runs **only on youtube.com**
- Makes **no network requests**
- Stores only your toggle preferences in `chrome.storage.sync` (synced by Google, not us)
- No telemetry, no analytics, no tracking
