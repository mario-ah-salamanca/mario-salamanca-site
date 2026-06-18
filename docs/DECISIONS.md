# Decision Log

### 2026-06-18 — Serve Resume From a Static Markdown Source

**Decision:**
Add `/resume` as the permanent public resume page, read `public/CV/mario-salamanca-cv.md` at build time, render it with `remark` and `remark-html`, and link the page to the public PDF at `/CV/mario-salamanca-cv.pdf`.

**Files Changed:**
- `app/resume/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `components/sections/resume-markdown.tsx`
- `components/sections/hero-section.tsx`
- `components/layouts/site-shell.tsx`
- `data/site.ts`
- `package.json`
- `package-lock.json`
- `docs/PROGRESS_LOG.md`
- `docs/DECISIONS.md`

**Context:**
Issue #4 needed a public CV download and a real resume link before increased recruiter and hiring-manager traffic. Mario also wanted the CV page to be readable from the Markdown source instead of hand-built HTML.

**Options Considered:**
- Link directly to the PDF only.
- Add a full Markdown dependency or MDX pipeline.
- Render the existing CV Markdown through `remark` and `remark-html` during static build.

**Reasoning:**
A static `/resume` route gives recruiters a readable page and a stable PDF download path without changing the GitHub Pages deployment model. `remark` keeps Markdown handling on a proven ecosystem path that can later support blog or resource content more naturally than a hand-rolled parser.

**Consequences:**
The CV page now depends on `public/CV/mario-salamanca-cv.md`, `remark`, and `remark-html`. The renderer uses the default sanitized HTML output from `remark-html` and normalizes the current Pandoc-style CV attributes before conversion. A future database-backed blog or Markdown upload workflow should be handled as a separate architecture task because it affects content storage, rendering security, SEO, and deployment assumptions.

**Checks Run:**
- Passed: `npm run lint`
- Passed: `git diff --check`
- Passed: `npm run build`
- Passed: `rg "resume|cv|mario-salamanca-cv.pdf|mario-salamanca" out data public app components`
- Passed: `find out -maxdepth 3 -type f | sort | rg "resume|CV|cv|brand/CV|index.html"`
- Not fixed: `npm install` reported two moderate dependency vulnerabilities; no forced audit fix was applied because that can make broad dependency changes.

**Known Issues:**
- The published CV content should be reviewed before deployment if address, phone, or other personal details should be removed.

**Next Recommended Task:**
Add an Open Graph image for stronger sharing previews.

### 2026-06-18 — Handle Contact Form Feedback Client-Side

**Decision:**
Keep Formspree as the contact form destination, but handle the contact form submit in a small client component so the page can show pending, success, and error states without leaving the site.

**Files Changed:**
- `components/sections/contact-section.tsx`
- `components/sections/contact-form.tsx`
- `components/ui/button.tsx`
- `data/site.ts`
- `docs/PROGRESS_LOG.md`
- `docs/DECISIONS.md`

**Context:**
The production landing page needed a clear confirmation path for contact submissions. The site is still deployed as a static GitHub Pages export, so server actions, API routes, and backend-only behavior were not appropriate for this task.

**Options Considered:**
- Keep the existing plain HTML POST and let Formspree show the result page.
- Add a Next.js server action or route handler to proxy the submit.
- Submit directly to Formspree from a small client component and render in-page status feedback.

**Reasoning:**
Client-side Formspree submission gives visitors immediate feedback while preserving static export compatibility and avoiding new dependencies or backend infrastructure. Keeping the client boundary limited to the form also avoids turning the whole contact section into client-rendered UI.

**Consequences:**
The live success path depends on `NEXT_PUBLIC_FORMSPREE_ENDPOINT` being configured at build time and on Formspree accepting the request. If the site later moves to server-backed lead capture, this client component can be replaced or adapted without changing the rest of the section.

**Checks Run:**
- Passed: `npm run lint`
- Passed: `git diff --check`
- Passed: `npm run build`
- Passed: mocked browser QA against `http://localhost:3000/#contact` using Playwright from `/tmp/contact-form-qa.cjs`

**Known Issues:**
- Browser QA surfaced existing WebGL GPU performance warnings from the background effect; no contact-form console errors were observed.
- On mobile, direct `#contact` anchor navigation can leave the top of the contact heading close to or partly under the sticky header.

**Next Recommended Task:**
Add an Open Graph image.

### 2026-06-09 — Serve GitHub Pages From Custom-Domain Root

**Decision:**
Remove the GitHub Actions-derived Next.js `basePath` and `assetPrefix` so the exported site serves from `/` for the custom domains.

**Files Changed:**
- `next.config.ts`
- `app/layout.tsx`
- `components/layouts/site-shell.tsx`
- `README.md`
- `docs/DECISIONS.md`
- `docs/PROGRESS_LOG.md`

**Context:**
The site was originally deployed as a GitHub Pages project site at `/mario-salamanca-site/`. Mario has purchased `mario-ah-salamanca.com` and `mario-ah-salamanca.eu`, so the production site should no longer emit repository-prefixed asset or metadata paths.

**Options Considered:**
- Keep the existing project-page base path for GitHub Actions builds.
- Add another environment flag to switch between project-page and custom-domain builds.
- Make the custom-domain root the default deployment target.

**Reasoning:**
The custom domains should serve the site from the URL root. Leaving the repository slug in production builds would risk broken CSS, JavaScript, logo, favicon, and manifest paths after the domain migration.

**Consequences:**
GitHub Pages repository settings and DNS must be configured for the chosen custom domain. If the site is ever intentionally moved back to a GitHub project-page URL, `basePath` and root-relative public asset paths will need to be revisited.

**Checks Run:**
- Passed: `npm run lint`
- Passed: `npm run build`
- Passed after approving network access for Google Fonts: `GITHUB_ACTIONS=true GITHUB_REPOSITORY=mario-ah-salamanca/mario-salamanca-site npm run build`
- Passed with no matches: `rg "/mario-salamanca-site/" out`
- Passed with no matches: `rg "href=\"/mario-salamanca-site|src=\"/mario-salamanca-site|url\(/mario-salamanca-site" out`

**Known Issues:**
- A primary domain decision is still needed between `mario-ah-salamanca.com` and `mario-ah-salamanca.eu`; the other domain should likely redirect to the primary through DNS/registrar or hosting configuration.

**Next Recommended Task:**
Configure the chosen custom domain in GitHub Pages settings and DNS, then verify HTTPS.

### 2026-06-09 — Use Custom PNG Favicons Across Devices

**Decision:**  
Use the custom PNG favicon set from `public/icons/` as the active icon source, remove the default template `app/favicon.ico`, and add a static web manifest for mobile/installable contexts.

**Files Changed:**  
- `app/layout.tsx`
- `app/manifest.ts`
- `app/favicon.ico`
- `public/icons/`
- `docs/PROGRESS_LOG.md`
- `docs/DECISIONS.md`

**Context:**  
The site had newly added favicon PNGs, but Next.js only auto-detects specific app icon conventions. The default `favicon.ico` was still present and could make the browser tab use the template icon instead of Mario's custom brand asset.

**Options Considered:**  
- Keep `app/favicon.ico` and rely on browser fallback behavior.
- Rename PNGs to Next.js file-convention names in `app/`.
- Serve the PNG set from `public/icons/` and wire explicit metadata plus a manifest.

**Reasoning:**  
Explicit metadata keeps browser icon behavior predictable, `public/icons/` makes static export paths easy to verify, and the manifest covers Android/installable contexts. Removing the template `.ico` prevents the default asset from competing with the custom favicon set.

**Consequences:**  
The active favicon source is now `public/icons/`. The original `app/favicon-*.png` files remain as duplicate source assets until a cleanup task removes or relocates them.

**Checks Run:**  
- Passed: `npm run lint`
- Passed: `npm run build`
- Passed: `GITHUB_ACTIONS=true GITHUB_REPOSITORY=mario-ah-salamanca/mario-salamanca-site npm run build`

**Known Issues:**  
- Duplicate `app/favicon-*.png` files remain and should be cleaned up if `public/icons/` is accepted as the canonical icon source.

**Next Recommended Task:**  
Add contact form success and error states.

### 2026-06-09 — Add Phase 1 Trust Link Structure

**Decision:**  
Completed the first Phase 1 production polish task by adding a structured footer trust-link model for GitHub, source code, LinkedIn, email/contact, and resume.

**Files Changed:**  
- `data/site.ts`
- `components/layouts/site-shell.tsx`
- `docs/PROGRESS_LOG.md`
- `docs/DECISIONS.md`

**Context:**  
The production V1 landing page needed clearer professional trust links without inventing or exposing unverified contact details.

**Options Considered:**  
- Add only active links and hide LinkedIn, email, and resume until ready.
- Add fake or placeholder URLs for LinkedIn, email, and resume.
- Add visible but honest placeholders for unavailable items while routing email interest to the contact form.

**Reasoning:**  
Visible placeholders communicate the intended professional surface area while protecting trust, privacy, and accuracy. Routing email interest to the contact form keeps lead capture clear without exposing a private or unverified public email.

**Why It Matters:**  
This makes the footer feel more complete for recruiters, founders, collaborators, and potential clients while preserving the site’s honest, systems-minded brand voice.

**Checks Run:**  
- Passed: `npm run lint`
- Passed: `npm run build`

**Known Issues:**  
- LinkedIn URL, public email, and resume destination are still placeholders until verified.
- Favicon PNG files exist in the working tree and should be handled in a separate favicon setup task.

**Next Recommended Task:**  
Add contact form success and error states.

## Format

### YYYY-MM-DD — Decision Title

**Decision:**  
What was decided.

**Context:**  
Why the decision was needed.

**Options Considered:**  
- Option A
- Option B
- Option C

**Reasoning:**  
Why this decision supports the long-term website.

**Consequences:**  
What this enables or limits.
