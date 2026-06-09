# Decision Log

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
