# Progress Log

## 2026-06-09

### Completed

- Added the MAHS logo asset to the shared site data model.
- Replaced the main navigation text brand with the MAHS SVG logo.
- Added a smaller footer logo on the left side while preserving aspect ratio.
- Increased both header and footer logo sizes so the mark is more distinguishable.
- Kept text identity available through `siteData.name`, `siteData.fullName`, and logo alt text.
- Preserved GitHub Pages asset paths for the static logo file.

### Files Changed

- `data/site.ts`
- `components/layouts/site-shell.tsx`
- `public/brand/mahs-logo.svg`
- `docs/PROGRESS_LOG.md`

### Why It Matters

This gives the site a stronger branded first impression in the header and a consistent visual signature in the footer without hardcoding the logo outside the central content model.

### Checks Run

- Passed: `npm run lint`
- Passed: `npm run build`
- Passed: desktop screenshot check with Playwright at `1440x900`
- Passed: mobile screenshot check with Playwright at `390x844`
- Passed after size adjustment: `npm run lint`
- Passed after size adjustment: `npm run build`
- Not run: GitHub Pages-style build after the logo change because approval was declined after the sandbox blocked Google font fetching.

### Known Issues

- GitHub Pages base-path output was not reverified after the logo change, though the logo uses the same base-path helper pattern as the favicon metadata.
- Rendered QA surfaced existing console warnings unrelated to the logo task: a React hydration mismatch on form fields during browser automation and a `THREE.Clock` deprecation warning in the background effect.
- Fresh screenshots after the size adjustment were blocked by the local dev server's stale Next lock; the final size adjustment was verified through lint/build and code inspection.

### Follow-up Todo

- Move the page header into its own dedicated layout section/component.

### Next Recommended Task

- Add contact form success and error states.

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
