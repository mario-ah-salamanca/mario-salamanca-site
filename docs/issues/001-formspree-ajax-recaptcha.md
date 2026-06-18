# Issue 001 - Make Formspree AJAX and reCAPTCHA Work Elegantly

## Status

Implemented in code and docs on 2026-06-18. The selected production policy is
to keep Formspree hosted spam protection as the default fallback, preserve
in-page AJAX success when Formspree accepts it, and avoid exposing private
Formspree or reCAPTCHA secrets in the static GitHub Pages build.

## Task Name

Make Formspree AJAX and reCAPTCHA work elegantly

## Goal

Restore a fully in-page contact-form submission flow that works with Formspree's AJAX requirements and reCAPTCHA/custom-key protection, without losing the current native POST fallback.

## Why This Matters

The contact form is the main lead-capture path. The current fallback keeps submissions working, but it can redirect visitors to Formspree's hosted flow when Formspree blocks AJAX. A polished personal brand site should ideally keep visitors on the page, show clear success and error states, and still respect spam protection.

## Audience Impact

Visitors can submit an inquiry with confidence, receive immediate feedback, and avoid confusing redirects or unexplained errors.

## Files Likely Involved

- `components/sections/contact-form.tsx`
- `components/sections/contact-section.tsx`
- `tests/contact-form.spec.ts`
- `.env.example`
- `README.md`
- `docs/DECISIONS.md`
- `docs/PROGRESS_LOG.md`

## Constraints

- Preserve static GitHub Pages export compatibility.
- Do not add server-only features unless hosting strategy changes.
- Do not expose private Formspree keys or secrets in client code.
- Keep the native HTML POST fallback available unless AJAX is proven reliable.
- Keep form fields accessible and low-friction.
- Keep privacy copy appropriate for a Germany-operated site.

## Implementation Steps

1. Done - Reviewed the current code path and Formspree protection response.
2. Done - Selected native hosted Formspree verification as the default protected path.
3. Done - Updated the contact form so success, error, and fallback states are explicit.
4. Done - Updated Playwright coverage for AJAX success and AJAX-blocked fallback behavior.
5. Done - Verified the export includes only the intended public endpoint and no private secret values.
6. Done - Updated README and decision/progress docs with the selected Formspree policy.

## Risks

- Formspree dashboard settings may be required; code alone may not complete the fix.
- Disabling reCAPTCHA may increase spam risk.
- A custom key may be unsuitable if it must remain private.
- Native fallback redirects away from the site, which is reliable but less polished.

## Definition of Done

- The preferred Formspree submission path is documented.
- The contact form works in production for real submissions.
- In-page success appears when AJAX is accepted.
- Fallback behavior remains available and tested.
- Playwright covers the critical submission states.
- No secrets are exposed in the browser bundle.

## Verification

Required commands:

```bash
npm run lint
npm run build
npm run test:e2e
```

Additional checks:

```bash
rg "xlgknwgg|NEXT_PUBLIC_FORMSPREE_ENDPOINT|formspree" out components tests README.md .env.example
```

## Documentation Updates Required

- Update `docs/PROGRESS_LOG.md` with the tested production behavior.
- Update `docs/DECISIONS.md` with the selected Formspree/reCAPTCHA policy.
- Update `README.md` if environment or Formspree dashboard setup changes.
