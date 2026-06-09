# Progress Log

## 2026-06-09

### Completed

- Added explicit favicon metadata for browser icon sizes from 16x16 through 512x512.
- Added an Apple touch icon path for mobile home-screen saves.
- Added a static web manifest for installable/mobile contexts.
- Copied the favicon PNG set into `public/icons` so exported static files are served predictably.
- Removed the default template `favicon.ico` so the site uses the custom favicon assets.
- Verified GitHub Pages base-path output for icon and manifest links.

### Files Changed

- `app/layout.tsx`
- `app/manifest.ts`
- `app/favicon.ico`
- `public/icons/`
- `docs/PROGRESS_LOG.md`
- `docs/DECISIONS.md`

### Why It Matters

This ensures the site's brand icon is available across browser tabs, bookmarks, Apple touch icons, and Android/installable contexts without breaking static GitHub Pages deployment.

### Checks Run

- Passed: `npm run lint`
- Passed: `npm run build`
- Passed: `GITHUB_ACTIONS=true GITHUB_REPOSITORY=mario-ah-salamanca/mario-salamanca-site npm run build`

### Known Issues

- Duplicate `app/favicon-*.png` files remain as inactive source assets unless `public/icons/` is accepted as the canonical icon location.

### Next Recommended Task

- Add contact form success and error states.

## 2026-06-09

### Completed

- Added the Phase 1 trust link structure for GitHub, source code, LinkedIn, email/contact, and resume.
- Added safe placeholder handling for LinkedIn and resume without fake URLs.
- Routed public email interest to the contact form until a verified public address is ready.
- Preserved the contact form privacy note.
- Improved the footer trust link layout.

### Files Changed

- `data/site.ts`
- `components/layouts/site-shell.tsx`
- `docs/PROGRESS_LOG.md`

### Why It Matters

This makes the production landing page feel more complete and trustworthy while keeping unverified professional links honest.

### Checks Run

- Passed: `npm run lint`
- Passed: `npm run build`

### Known Issues

- LinkedIn URL, public email, and resume destination are still placeholders until verified.

### Next Recommended Task

- Add contact form success and error states.

## Template

### Completed

### Files Changed

### Why It Matters

### Checks Run

### Known Issues

### Next Recommended Task
