# Decision Log

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
