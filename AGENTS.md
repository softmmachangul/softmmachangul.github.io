# Repository Guidelines

## Project Structure & Module Organization
The site is a static GitHub Pages project rooted in HTML documents. `index.html` is the primary entry point, while the `MacHangul_*.html` files archive alternative UI or SEO variants; keep new experiments alongside them with clear suffixes describing purpose and version. Assets live in the root (`icon-192.png`, `icon-512.png`, `service-worker.js`, `manifest.webmanifest`) so reference them with relative paths and update all pages if you change filenames.

## Build, Test, and Development Commands
No build step is required; open the HTML files directly or serve the folder locally for PWA features.

```bash
python3 -m http.server 4000
# or
npx serve .
```

Launch your browser at the matching localhost URL to verify routing, service worker registration, and manifest behaviour.

## Coding Style & Naming Conventions
Keep HTML readable with two-space indentation and wrap content lines under 120 characters. Inline styles and scripts are acceptable, but group reusable CSS into the existing `:root` variable palette and prefer modern semantic elements (`header`, `main`, `section`). When creating additional tool variants, follow the established `MacHangul_Tool_<descriptor>[_v#].html` pattern and mirror the bilingual (Korean·English) labels used elsewhere for consistency.

## Testing Guidelines
Use the browser DevTools console for quick checks—there is no automated test suite yet. After each change, run through core flows: paste NFD text, convert to NFC, toggle light/dark, drag-and-drop files, and use the inspector panels if present. Confirm that PWA install prompts still appear, the service worker caches assets, and the manifest icons render crisply on both desktop and mobile viewports.

## Commit & Pull Request Guidelines
Write short, imperative commit messages (e.g., “Add safe-mode conversion helper”) and keep related changes together. Pull requests should explain user-visible effects, list manual test steps, and link any tracking issues; include screenshots or GIFs when UI changes. Request review before merging, wait for GitHub Pages to redeploy, and spot-check the live site afterward.

## Security & Maintenance Tips
Only include trusted third-party scripts and document their origin at the top of the HTML file. Keep the service worker lean—remove unused caches when upgrading—and bump icon sizes if new platforms require them. Before pushing, validate that user-submitted text never leaves the client and that default HTTPS links are preserved for external references.
