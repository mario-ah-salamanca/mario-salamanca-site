# REVIEW_CHECKLIST.md

## Purpose

This checklist is the quality gate for Mario Salamanca’s personal website.

Use it before merging, committing, deploying, or accepting AI-generated changes.

The goal is to protect:

* Brand quality
* UX clarity
* Technical stability
* Accessibility
* SEO
* Performance
* Lead generation
* Long-term maintainability

Do not ship changes only because they compile. The website must also remain clear, trustworthy, and aligned with the brand.

---

## Review Summary

Before approving a change, answer:

1. What changed?
2. Why was it changed?
3. Who benefits from the change?
4. What files were modified?
5. What checks were run?
6. What risks remain?
7. What should happen next?

---

## Brand Review

Check that the change supports the brand direction.

### Must Pass

* The change makes Mario look more trustworthy, capable, or clear.
* The tone remains premium, technical, human, and practical.
* The site does not feel like a generic developer portfolio.
* The change supports career growth, consulting leads, founder credibility, or long-term reputation.
* The copy is specific and honest.
* The visual style matches the existing dark premium identity.

### Watch For

* Generic phrases like “passionate developer” or “scalable solutions”
* Overly flashy visuals
* Fake agency language
* Overused AI/startup buzzwords
* Overstated experience
* Unclear positioning
* Design choices that feel disconnected from the rest of the site

### Brand Questions

* Does this still feel like Mario?
* Does this strengthen the “Software Engineer. Systems Builder. Creative Founder.” positioning?
* Does this communicate reliability and execution?
* Would this still make sense in 5–10 years?

---

## Content Review

### Must Pass

* The content has a clear purpose.
* The intended audience is obvious.
* The main message is understandable within a few seconds.
* Claims are concrete and honest.
* Confidential work details are not exposed.
* The content has a next step where appropriate.
* Headings are clear and scannable.
* The content avoids filler.

### Watch For

* Long paragraphs with no structure
* Claims without proof
* Too many ideas in one section
* Copy that sounds impressive but says little
* Missing CTAs
* Missing context
* Weak section titles

### Content Questions

* What question does this content answer?
* Does it build trust?
* Does it show proof?
* Does it help someone take action?
* Is anything exaggerated?

---

## UX Review

### Must Pass

* The user can understand the page quickly.
* Navigation remains clear.
* CTAs are visible and meaningful.
* The layout works on mobile, tablet, and desktop.
* Important content is not hidden or hard to reach.
* Sections have clear hierarchy.
* The page has enough whitespace.
* Interactive elements behave predictably.

### Watch For

* Too many CTAs competing with each other
* Sections that look nice but do not serve a purpose
* Mobile layout issues
* Text that is too small
* Cards or panels with inconsistent spacing
* Confusing navigation
* Repeated sections with no new value

### UX Questions

* Who is this for?
* What should the visitor do next?
* Is the next step obvious?
* Is the page easier to understand after this change?

---

## Accessibility Review

### Must Pass

* Semantic HTML is used where appropriate.
* Heading order is logical.
* Form fields have labels.
* Buttons and links are keyboard accessible.
* Focus states are visible.
* Text contrast is readable.
* Images have meaningful alt text when needed.
* Decorative images are handled appropriately.
* Motion does not block usability.
* Reduced-motion preferences are respected when relevant.

### Manual Checks

Use keyboard only:

* Can you tab through interactive elements?
* Is the focus indicator visible?
* Can you activate buttons and links?
* Can you use forms without a mouse?

Check headings:

* Is there one clear main heading?
* Do sections follow a logical hierarchy?
* Are headings descriptive?

---

## Mobile Review

### Must Pass

* The site is readable on small screens.
* No horizontal scrolling.
* Navigation works on mobile.
* CTAs are easy to tap.
* Forms are usable.
* Text sizes are comfortable.
* Visual effects do not overwhelm the screen.
* Spacing feels intentional.

### Mobile Questions

* Can a recruiter quickly find work, resume, and contact?
* Can a client quickly understand services and send a message?
* Does the page still feel premium on a phone?

---

## Form and Lead Capture Review

### Must Pass

* Contact form still submits correctly.
* Required fields are intentional.
* Labels are clear.
* The user understands what to write.
* There is a success or confirmation path.
* Error handling is considered.
* Privacy reassurance is present where appropriate.
* No secrets are exposed.
* The form does not feel too long or intimidating.

### Watch For

* Broken Formspree endpoint
* Missing `name` attributes
* Required fields that block users unnecessarily
* No confirmation after submit
* No alternative contact method
* No spam protection plan

---

## SEO Review

### Must Pass

* Page has a clear title.
* Page has a useful meta description where appropriate.
* Headings describe the content.
* URLs are human-readable.
* Internal links are meaningful.
* Images are optimized or intentionally handled.
* Content has a clear search or audience intent.
* No accidental noindex behavior unless intentional.

### For New Pages

Check for:

* Metadata
* Open Graph readiness
* Canonical strategy if needed
* Sitemap compatibility
* Clear H1
* Internal links back to relevant pages
* CTA or next step

---

## Performance Review

### Must Pass

* No unnecessary heavy dependency added.
* Large visual effects are justified.
* Images are optimized where possible.
* Layout shift is avoided.
* JavaScript remains reasonable.
* Homepage remains fast.
* Static export still works.
* GitHub Pages deployment is not broken.

### Watch For

* Unnecessary client components
* Large animation libraries
* Overuse of `three` or WebGL
* Heavy images
* Blocking scripts
* Layout shift from late-loading content

---

## Technical Review

### Must Pass

* TypeScript is valid.
* Lint passes.
* Production build passes.
* Components follow existing patterns.
* No secrets are committed.
* No unnecessary dependency added.
* Static export remains compatible.
* GitHub Pages base path behavior is preserved.
* Code is readable and maintainable.

### Required Commands

Run before final approval:

```bash
npm run lint
npm run build
```

If available later, also run:

```bash
npm run typecheck
npm run test
```

### Technical Questions

* Is this change small and reviewable?
* Does it reuse existing components and tokens?
* Is the abstraction justified?
* Would this be easy to modify later?
* Did we avoid breaking deployment?

---

## Design Review

### Must Pass

* Visual hierarchy is clear.
* Typography matches the existing system.
* Colors use existing design tokens where possible.
* Spacing is consistent.
* Cards, buttons, and sections feel cohesive.
* The design feels premium but not decorative.
* The design supports the content.

### Watch For

* Random color additions
* Overly bright accents
* Excessive glow
* Too many borders
* Too many font styles
* Misaligned spacing
* Components that feel copied from another design system

---

## Documentation Review

Update documentation when the change affects:

* Strategy
* Roadmap
* Brand direction
* Content direction
* Technical architecture
* Reusable workflow
* Major decisions
* Completed progress

Relevant docs:

* `docs/ROADMAP.md`
* `docs/PROGRESS_LOG.md`
* `docs/DECISIONS.md`
* `docs/BRAND_STRATEGY.md`
* `docs/CONTENT_STRATEGY.md`
* `docs/PROJECT_BRIEF.md`

### Progress Log Entry Should Include

* Date
* Task completed
* Files changed
* Why it matters
* Checks run
* Known issues
* Next recommended task

### Decision Log Entry Should Include

* Decision
* Context
* Options considered
* Reasoning
* Consequences

---

## Final Review Template

Use this before committing or accepting a Codex change:

```md
## Review Summary

### What Changed

### Why It Matters

### Files Changed

### Brand Impact

### UX Impact

### Technical Impact

### Checks Run

- [ ] npm run lint
- [ ] npm run build

### Manual Checks

- [ ] Desktop layout reviewed
- [ ] Mobile layout reviewed
- [ ] Keyboard navigation reviewed
- [ ] Contact form reviewed
- [ ] Links reviewed

### Risks / Known Issues

### Next Recommended Task
```

---

## Approval Standard

A change is ready to ship only if:

* It improves the website’s clarity, trust, proof, or conversion.
* It does not weaken the brand.
* It does not break mobile usability.
* It does not reduce accessibility.
* It does not harm performance.
* It does not break static export or GitHub Pages deployment.
* It passes required checks.
* It is documented when documentation is required.

If a change is visually impressive but strategically weak, do not ship it.

If a change compiles but damages trust, do not ship it.

If a change is useful but too large, split it into smaller tasks.
