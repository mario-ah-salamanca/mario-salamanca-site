# Progress Log

## 2026-06-19

### Completed

- Resolved GitHub issue #32 by completing a recruiter and hiring-team path across the existing navigation, resume page, and contact flow.
- Resolved subissue #42 with a scan-friendly engineering profile on `/resume`, clear role openness, CV actions, and public GitHub, LinkedIn, email, and job-conversation links.
- Resolved subissue #15 with an inquiry-type choice that reveals concise, optional job or freelance-project prompts while keeping collaboration and general messages low-friction.
- Preserved Formspree AJAX success and protected native POST fallback behavior; the fallback payload now sends only fields relevant to the selected inquiry type.

### Files Changed

- `app/resume/page.tsx`
- `components/sections/contact-form.tsx`
- `data/site.ts`
- `tests/resume.spec.ts`
- `tests/contact-form.spec.ts`
- `docs/PROGRESS_LOG.md`

### Why It Matters

Recruiters can now reach a focused public profile from primary navigation, verify relevant engineering strengths and professional links, and start a job conversation without encountering a freelance-only form. Project leads retain a focused qualification path without adding irrelevant requirements for every visitor.

### Checks Run

- Passed: `npm run lint`
- Passed: `npm run build`
- Passed: `npm run test:e2e -- --reporter=line` (9 Chromium tests)
- Passed: `git diff --check`
- Passed: desktop `/resume` and mobile `/#contact` rendered QA with no application console warnings or errors.

### Known Issues

- The public CV remains the source of record for detailed work history and skills; it should be updated alongside future role or experience changes.
- Production Formspree behavior still depends on the existing hosted form settings and may redirect protected submissions to Formspree's verification flow.

### Next Recommended Task

- Create the dedicated work and services pages before adding more homepage detail, then route the existing overview cards to those pages.

## 2026-06-19

### Completed

- Repositioned the homepage around software-engineering roles and select project work, resolving the implementation scope of GitHub issues #37 through #41 under parent issue #31.
- Made `View Resume` the primary hero action, retained the established `Software Engineer. Systems Builder. Creative Founder.` positioning, and added evidence-based engineering proof in the first viewport.
- Added clear paths for hiring teams and founders/small teams, routing visitors to the existing resume or service/contact paths.
- Reframed homepage work as `Selected Engineering & Product Work` and services as `Work With Me`, with engineering roles presented before selective freelance offers.
- Added practical technical-team proof around systems thinking, building through ambiguity, and clear communication.
- Reordered the homepage into a concise professional overview and removed unfinished resources/build-log previews from the homepage path.
- Resolved GitHub issue #29 in code by adding responsive hash-navigation offsets for the fixed header and covering `#work` and `#contact` on desktop and mobile with Playwright.
- Corrected the existing scheduling test expectation to match the configured Playwright scheduler URL.

### Files Changed

- `app/globals.css`
- `app/page.tsx`
- `components/sections/audience-paths-section.tsx`
- `components/sections/hero-section.tsx`
- `components/sections/services-section.tsx`
- `components/sections/technical-team-section.tsx`
- `components/sections/work-section.tsx`
- `data/site.ts`
- `tests/contact-form.spec.ts`
- `tests/homepage.spec.ts`
- `docs/PROGRESS_LOG.md`

### Why It Matters

The homepage now gives recruiters and hiring managers a direct resume path and immediate engineering context, while keeping an explicit, secondary route for suitable project work. Visitors arriving through in-page navigation can now see their destination heading below the fixed header.

### Checks Run

- Passed: `npm run lint`
- Passed: `npm run build`
- Passed: `npm run test:e2e -- --reporter=line`
- Passed: desktop and mobile Chromium rendered checks for hero CTA fit, hash navigation, page identity, and runtime errors.

### Known Issues

- Draft PR [#48](https://github.com/mario-ah-salamanca/mario-salamanca-site/pull/48) is open against `main`; linked issues will close when it merges.
- The existing homepage metadata description and social-sharing description still lead with founders and creators. Align that copy with the engineering-first homepage in a dedicated SEO metadata task.
- Desktop Chromium reports existing WebGL GPU `ReadPixels` performance warnings from the decorative background; no application errors were observed.

### Next Recommended Task

- Create the dedicated work and services pages before adding more homepage detail, then route the existing overview cards to those pages.

## 2026-06-19

### Completed

- Resolved GitHub issue #28 by removing duplicate responsive hero text from the crawlable/accessibility layer.
- Replaced separate mobile/desktop hero title, intro, and CTA strings with one semantic hero heading, one intro paragraph, and one primary/secondary CTA pair.
- Consolidated the duplicate header "Start a project" links into one responsive link.
- Added canonical homepage metadata for `https://mario-ah-salamanca.com/`.
- Added Open Graph and Twitter card metadata with a real 1200x630 social preview image.
- Added a static social preview source SVG and generated PNG under `public/og/`.
- Closed GitHub issue #7 because the Open Graph image asset is now present and wired into metadata.
- Created GitHub issue #29 for the remaining anchor-navigation viewport jump around section headings.

### Files Changed

- `app/layout.tsx`
- `components/sections/hero-section.tsx`
- `components/layouts/site-shell.tsx`
- `data/site.ts`
- `public/og/mario-salamanca-og.svg`
- `public/og/mario-salamanca-og.png`
- `README.md`
- `docs/DECISIONS.md`
- `docs/PROGRESS_LOG.md`

### Why It Matters

The homepage now presents a cleaner semantic surface to screen readers and crawlers before social metadata is evaluated. Shared links also have an intentional title, description, canonical URL, and preview image for recruiter, hiring-manager, founder, and collaborator traffic.

### Checks Run

- Passed: `npm run lint`
- Passed: `npm run build`
- Passed: `rg "metadataBase|openGraph|twitter|alternates" app`
- Passed: `rg "og:image|twitter:image|canonical|mario-salamanca-og" out/index.html`
- Passed after stripping Next.js script payloads from `out/index.html`: duplicate checks for `Start a projectStart a project`, repeated hero name concatenation, and repeated hero intro concatenation.
- Passed after localhost escalation: Playwright desktop and mobile CTA interaction from `/` to `#contact`.

### Known Issues

- `mario-ah-salamanca.com` is now the canonical metadata domain in code, but production DNS/HTTPS verification remains part of issue #8.
- The secondary `.eu` domain still needs redirect or fallback behavior defined outside this code change.
- Rendered QA surfaced existing WebGL GPU performance warnings on desktop.
- A separate follow-up issue (#29) tracks anchor navigation landing too close to or past section headings with the fixed header.
- First-viewport hero screenshot capture was not completed after the final interaction check because the follow-up screenshot run was not approved.

### Next Recommended Task

- Fix issue #29 by tuning hash-navigation scroll offsets for the fixed header, then complete sitemap, robots, and 404 support.

## 2026-06-18

### Completed

- Added a configurable scheduling CTA to the contact section through `NEXT_PUBLIC_SCHEDULING_URL`.
- Kept the scheduling action secondary to the existing Formspree contact form.
- Added fallback copy for the state where no public scheduler URL is configured.
- Wired `NEXT_PUBLIC_SCHEDULING_URL` into the GitHub Pages build and added a deployment-time presence check.
- Documented the external scheduler-link decision for static GitHub Pages compatibility.
- Added e2e coverage for the configured scheduling entry point.
- Added the scheduling task to the lead-generation roadmap.

### Files Changed

- `components/sections/contact-section.tsx`
- `data/site.ts`
- `.env.example`
- `.github/workflows/deploy.yml`
- `playwright.config.ts`
- `tests/contact-form.spec.ts`
- `docs/ROADMAP.md`
- `docs/issues/002-google-calendar-call-scheduling.md`
- `docs/DECISIONS.md`
- `docs/PROGRESS_LOG.md`

### Why It Matters

Qualified visitors now have a clear path toward scheduling a call once a Google Calendar-compatible public booking link is configured, without adding a backend, exposing calendar secrets, or embedding heavier third-party scheduling scripts. Production deployments now fail clearly if the public scheduler URL is missing.

### Checks Run

- Passed: `npm run lint`
- Passed: `npm run build`
- Passed: `npm run test:e2e -- --reporter=line`
- Passed: `git diff --check`
- Passed: `rg "calendar|schedule|Google|Appointment|Calendly|Cal.com|NEXT_PUBLIC_SCHEDULING_URL" app components data docs tests .env.example playwright.config.ts .github/workflows/deploy.yml`

### Known Issues

- Production call booking still depends on adding a real public booking URL to the GitHub Pages `NEXT_PUBLIC_SCHEDULING_URL` environment variable.

### Next Recommended Task

- Configure the real public scheduler URL, then add the Open Graph image for stronger sharing previews.

## 2026-06-18

### Completed

- Resolved Issue 001 by making the Formspree AJAX/reCAPTCHA policy explicit.
- Kept hosted Formspree spam protection as the default fallback when AJAX submissions are rejected.
- Added a contact-form verification handoff state before the native Formspree POST fallback.
- Fixed the reviewed fallback edge case so native POST still includes enabled form controls.
- Preserved in-page success behavior for Formspree configurations that accept AJAX.
- Updated Playwright coverage to verify the fallback handoff message and submitted fallback request body before the hosted Formspree page is reached.
- Documented the selected policy and the no-client-secrets constraint in README, decisions, and the issue file.

### Files Changed

- `components/sections/contact-form.tsx`
- `data/site.ts`
- `tests/contact-form.spec.ts`
- `README.md`
- `docs/issues/001-formspree-ajax-recaptcha.md`
- `docs/DECISIONS.md`
- `docs/PROGRESS_LOG.md`

### Why It Matters

The contact flow now treats Formspree's hosted protection as an intentional trust and spam-prevention path instead of a surprising failure mode, while still keeping the smoother in-page success state available when Formspree allows AJAX.

### Checks Run

- Passed: `npm run lint`
- Passed: `npm run build`
- Passed after localhost escalation: `npm run test:e2e -- --reporter=line`
- Passed: `git diff --check`
- Passed with only expected public endpoint/config and documentation references: `rg "xlgknwgg|NEXT_PUBLIC_FORMSPREE_ENDPOINT|formspree|reCAPTCHA|g-recaptcha|secret" out components tests README.md .env.example docs`

### Known Issues

- The live production path still depends on the actual Formspree dashboard configuration for `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.
- Protected submissions can leave the site for Formspree's hosted verification page.

### Next Recommended Task

- Add an Open Graph image for stronger job-application and social sharing previews.

## 2026-06-18

### Completed

- Initialized Playwright for the project with `npm init playwright@latest`.
- Added `@playwright/test`, `playwright.config.ts`, and an `npm run test:e2e` script.
- Configured Playwright to run Chromium tests against a dedicated Next dev server on `localhost:3100`.
- Added contact-form e2e coverage for Formspree AJAX success and AJAX-blocked native POST fallback.
- Added a non-visual hydration marker to the contact form so tests wait for enhanced client behavior before submitting.
- Created issue/task files for polishing Formspree AJAX/reCAPTCHA behavior and planning a Google Calendar-connected scheduling flow.

### Files Changed

- `.gitignore`
- `package.json`
- `package-lock.json`
- `playwright.config.ts`
- `components/sections/contact-form.tsx`
- `tests/contact-form.spec.ts`
- `docs/issues/001-formspree-ajax-recaptcha.md`
- `docs/issues/002-google-calendar-call-scheduling.md`
- `docs/PROGRESS_LOG.md`

### Why It Matters

The project now has real browser coverage for the contact form's critical lead-capture behavior, and the next lead-generation improvements are captured as scoped, reviewable tasks.

### Checks Run

- Passed: `npm run test:e2e -- --reporter=line`
- Passed: `npm run lint`
- Passed: `git diff --check`
- Passed: `npm run build`

### Known Issues

- Playwright local-server tests require access to bind and connect to `localhost:3100`; the sandboxed run needed escalation because local connection probes returned `EPERM`.
- The Formspree AJAX/reCAPTCHA production policy still needs a decision in the Formspree dashboard.

### Next Recommended Task

- Resolve Issue 001 by choosing the preferred Formspree AJAX/reCAPTCHA policy, then update the contact form and docs accordingly.

## 2026-06-18

### Completed

- Debugged the Formspree contact-form regression against the real endpoint.
- Confirmed `https://formspree.io/f/xlgknwgg` returns HTTP 403 for AJAX submissions when the form requires a custom key or reCAPTCHA settings change.
- Added a native HTML POST fallback when Formspree rejects the client-side AJAX path for that specific protection response.
- Preserved the existing in-page success state for Formspree configurations that accept AJAX.
- Removed the stale contact-form endpoint TODO because the endpoint is now configured.

### Files Changed

- `components/sections/contact-form.tsx`
- `docs/PROGRESS_LOG.md`

### Why It Matters

This restores the contact form's ability to use Formspree's standard submission flow while keeping the static GitHub Pages deployment and existing form fields intact.

### Checks Run

- Passed: direct Formspree POST returned the expected diagnostic response: HTTP 403 with the AJAX/reCAPTCHA settings message.
- Passed: `npm run lint`
- Passed: `git diff --check`
- Passed: `npm run build`
- Passed: `rg "xlgknwgg|submit via AJAX|reCAPTCHA must be disabled" out components docs .env .env.example README.md .github/workflows/deploy.yml`
- Not completed: rendered Playwright interaction QA. `npx playwright` is available, but this repo does not have `@playwright/test` installed and transient `npm exec --package=playwright` did not complete without adding a project dependency.

### Known Issues

- Native fallback redirects the visitor to Formspree's hosted flow when AJAX is blocked, so the in-page success message is only available if Formspree is configured to accept AJAX submissions.

### Next Recommended Task

- Decide whether to disable reCAPTCHA/custom-key protection in Formspree for in-page AJAX success, or keep the safer hosted Formspree fallback behavior.

## 2026-06-18

### Completed

- Added a static `/resume` page for recruiters and hiring managers.
- Rendered the public CV from `public/CV/mario-salamanca-cv.md` using `remark` and `remark-html`.
- Added download and open-PDF actions for the public CV PDF.
- Replaced the footer Resume placeholder with a real `/resume` link.
- Added a restrained homepage hero link to the resume and CV download path.
- Preserved static GitHub Pages export compatibility.

### Files Changed

- `app/resume/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `components/sections/resume-markdown.tsx`
- `components/sections/hero-section.tsx`
- `components/layouts/site-shell.tsx`
- `data/site.ts`
- `package.json`
- `package-lock.json`
- `public/CV/mario-salamanca-cv.pdf`
- `public/CV/mario-salamanca-cv.md`
- `public/brand/CV_PIC.JPG`
- `docs/PROGRESS_LOG.md`
- `docs/DECISIONS.md`

### Why It Matters

This closes the urgent resume-access gap for the Job Application Readiness Sprint: visitors can now read the CV on-site, open the PDF, or download it from a stable public path.

### Checks Run

- Passed: `npm run lint`
- Passed: `git diff --check`
- Passed: `npm run build`
- Passed: `rg "resume|cv|mario-salamanca-cv.pdf|mario-salamanca" out data public app components`
- Passed: `find out -maxdepth 3 -type f | sort | rg "resume|CV|cv|brand/CV|index.html"`
- Not fixed: `npm install` reported two moderate dependency vulnerabilities; no forced audit fix was applied because that can make broad dependency changes.

### Known Issues

- The public CV content includes the contact and location details present in `public/CV/mario-salamanca-cv.md` and `public/CV/mario-salamanca-cv.pdf`; review those before deployment if any detail should not be public.
- The resume page uses a build-time `remark` pipeline for Markdown-to-HTML. A broader blog/content pipeline should still be planned separately.

### Next Recommended Task

- Add an Open Graph image for stronger job-application and social sharing previews.

## 2026-06-18

### Completed

- Added accessible pending, success, and error states to the contact form.
- Kept the Formspree endpoint as the submission target while handling the submit request client-side for in-page feedback.
- Disabled contact form fields during submission to avoid duplicate sends.
- Added an `aria-live` status region for confirmation and failure messages.
- Preserved the existing required fields and privacy note.

### Files Changed

- `components/sections/contact-section.tsx`
- `components/sections/contact-form.tsx`
- `components/ui/button.tsx`
- `data/site.ts`
- `docs/PROGRESS_LOG.md`

### Why It Matters

This closes the main contact-flow trust gap in Phase 1: visitors now know when their message is sending, whether it was received, and what to do if submission fails.

### Checks Run

- Passed: `npm run lint`
- Passed: `git diff --check`
- Passed: `npm run build`
- Passed: mocked browser QA against `http://localhost:3000/#contact` using Playwright from `/tmp/contact-form-qa.cjs`

### Known Issues

- The live success path still depends on a configured `NEXT_PUBLIC_FORMSPREE_ENDPOINT` and Formspree accepting the request.
- Browser QA surfaced existing WebGL GPU performance warnings from the background effect; no contact-form console errors were observed.
- On mobile, direct `#contact` anchor navigation can leave the top of the contact heading close to or partly under the sticky header.

### Next Recommended Task

- Add an Open Graph image.

## 2026-06-09

### Completed

- Removed the GitHub Actions-derived Next.js `basePath` and `assetPrefix` so production exports serve from the custom-domain root.
- Replaced favicon metadata paths and MAHS logo image paths with root-relative public asset paths.
- Updated README deployment notes for custom-domain GitHub Pages hosting.
- Added a decision-log entry for the custom-domain root-path migration.
- Verified a GitHub Actions-style build no longer emits root-relative `/mario-salamanca-site/` asset or link paths.

### Files Changed

- `next.config.ts`
- `app/layout.tsx`
- `components/layouts/site-shell.tsx`
- `README.md`
- `docs/DECISIONS.md`
- `docs/PROGRESS_LOG.md`

### Why It Matters

This prepares the site for `mario-ah-salamanca.com` or `mario-ah-salamanca.eu` so exported CSS, JavaScript, logo, favicon, and manifest paths resolve from `/` instead of the old GitHub project-page path.

### Checks Run

- Passed: `npm run lint`
- Passed: `npm run build`
- Failed in sandbox, then passed after approving network access for Google Fonts: `GITHUB_ACTIONS=true GITHUB_REPOSITORY=mario-ah-salamanca/mario-salamanca-site npm run build`
- Passed with no matches: `rg "/mario-salamanca-site/" out`
- Passed with no matches: `rg "href=\"/mario-salamanca-site|src=\"/mario-salamanca-site|url\(/mario-salamanca-site" out`

### Known Issues

- A primary domain decision is still needed between `mario-ah-salamanca.com` and `mario-ah-salamanca.eu`.
- GitHub Pages custom-domain settings, DNS records, and HTTPS enforcement still need to be configured outside this codebase.

### Next Recommended Task

- Configure the chosen custom domain in GitHub Pages settings and DNS, then verify HTTPS.

## 2026-06-09

### Completed

- Fixed the Aurora WebGL background lint failures by removing the render-time ref mutation, tightening effect dependencies, and replacing the mutable `program` binding with a stable constant.
- Restored reduced-motion support inside the Aurora effect by rendering a static frame when `prefers-reduced-motion: reduce` is active and cancelling the animation loop.
- Cleaned the hero Aurora markup and renamed the color constant away from the old Liquid Ether terminology.
- Removed the rectangular `deep-glow` box shadow from the hero content wrapper so the desktop first viewport reads cleaner against the aurora.
- Rechecked desktop and mobile first-viewport screenshots against the local dev server.

### Files Changed

- `components/backgrounds/aurora.tsx`
- `components/sections/hero-section.tsx`
- `docs/PROGRESS_LOG.md`

### Why It Matters

This makes the new Aurora hero implementation shippable for the production landing page: lint is clean, reduced-motion users are respected, and the first viewport better matches the premium, calm brand direction.

### Checks Run

- Passed: `npm run lint`
- Passed: `git diff --check`
- Passed: `npm run build`
- Passed: desktop screenshot check with Playwright CLI at `1440x900` from `http://localhost:3000/`
- Passed: mobile screenshot check with Playwright CLI at `390x844` from `http://localhost:3000/`
- Passed: contact-anchor screenshot check with Playwright CLI from `http://localhost:3000/#contact`
- Blocked: richer temporary Playwright interaction/console test because the CLI package did not expose `@playwright/test` to a spec outside the project dependency graph.

### Known Issues

- Existing dev-server hydration warnings still appear for form fields with injected `caret-color: transparent` styles; this predates and appears unrelated to the Aurora cleanup.
- Reduced-motion behavior was verified by code path, lint, build, and static screenshot compatibility; the blocked temporary Playwright spec prevented automated runtime assertion of the reduced-motion media emulation.

### Next Recommended Task

- Add contact form success and error states.

## 2026-06-09

### Completed

- Reviewed the staged replacement of the Liquid Ether hero background with the new Aurora WebGL background.
- Verified the change keeps the homepage static-export compatible.
- Captured desktop and mobile rendered screenshots for first-viewport readability.
- Identified blocking lint issues, a reduced-motion regression, desktop visual polish concerns, and whitespace cleanup.
- Did not edit implementation files because the review task explicitly requested no fixes without approval.

### Files Changed

- `components/backgrounds/aurora.tsx`
- `components/backgrounds/liquid-ether.tsx`
- `components/backgrounds/responsive-liquid-ether.tsx`
- `components/sections/hero-section.tsx`
- `docs/PROGRESS_LOG.md`

### Why It Matters

The new aurora direction better matches the premium, calm brand direction than the heavier liquid simulation, but the implementation still needs accessibility and lint cleanup before it is ready to ship.

### Checks Run

- Failed: `npm run lint`
- Passed: `npm run build`
- Passed: desktop screenshot check with Playwright at `1440x900`
- Passed: mobile screenshot check with Playwright at `390x844`
- Passed with warnings/issues noted: rendered dev smoke check at `http://localhost:3000`
- Failed: first Playwright screenshot attempt against `http://localhost:3001` after the temporary dev server exited because another Next dev server was already running on port 3000.

### Known Issues

- `components/backgrounds/aurora.tsx` fails lint because it updates a ref during render, uses a `let` that can be `const`, and has a hook dependency warning.
- The new Aurora path no longer respects `prefers-reduced-motion`; the previous `ResponsiveLiquidEther` guard was removed.
- Desktop screenshot QA shows a hard-edged dark rectangle behind the hero content that weakens the intended elegant aurora effect.
- `git diff --cached --check` reports trailing whitespace in the new Aurora shader and hero markup.
- Existing browser automation surfaced unrelated hydration warnings on form fields in the dev server log.

### Next Recommended Task

- Fix the Aurora lint and reduced-motion issues, then retest desktop and mobile hero rendering.

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
