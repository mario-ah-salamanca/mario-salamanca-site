# AGENTS.md

## Project Overview

This repository contains Mario Salamanca’s personal website and brand platform.

The site is not a generic developer portfolio. It is intended to function as:

* A professional portfolio
* A digital business card
* A personal brand platform
* A future consulting/freelance lead generator
* A startup/founder credibility platform
* A long-term career asset

The website should communicate:

* Technical competence
* Systems thinking
* Reliability
* Curiosity
* Ambition
* Creativity
* Professionalism
* Human warmth

The brand direction should feel premium, modern, technical, trustworthy, and personal. Avoid generic “developer portfolio” aesthetics, vague startup clichés, and overused hacker/cyberpunk tropes.

## Core Positioning

Mario Salamanca is a software developer and systems builder with a Computer Science background, aerospace/embedded systems experience, and interests in infrastructure, DevOps, SRE, cloud, cybersecurity, AI, automation, startups, music, and personal growth.

The site should position Mario as someone who can:

* Turn messy ideas into clear digital systems
* Build reliable websites, workflows, and prototypes
* Apply engineering discipline to creative and business problems
* Bridge technical execution with brand, product, and founder thinking

Preferred positioning language:

> Software Engineer. Systems Builder. Creative Founder.

Do not replace this positioning casually. If changing it, preserve the combination of engineering reliability, systems thinking, and creative/founder ambition.

## Repository Context

This is a Next.js project using:

* Next.js
* React
* TypeScript
* Tailwind CSS
* Static export for GitHub Pages
* GitHub Actions deployment
* Formspree for the contact form

Important project files and folders:

* `app/` — Next.js app router pages and layout
* `components/` — reusable UI, layout, and section components
* `components/sections/` — homepage sections
* `components/layouts/` — site shell and layout structure
* `components/ui/` — shared UI primitives
* `data/site.ts` — main content source for navigation, hero, services, proof, work, resources, build log, and contact copy
* `app/globals.css` — global styles, design tokens, and theme rules
* `next.config.ts` — static export and GitHub Pages configuration
* `.github/workflows/deploy.yml` — GitHub Pages deployment workflow

## Local Development Commands

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

Use npm unless the repository is intentionally migrated to another package manager.

Install dependencies:

```bash
npm ci
```

Run the development server:

```bash
npm run dev
```

Run lint checks:

```bash
npm run lint
```

Build the static site:

```bash
npm run build
```

Before finishing any code change, run:

```bash
npm run lint
npm run build
```

If a task only changes copy in `data/site.ts`, still run `npm run build` to catch TypeScript or static export issues.

## Deployment Notes

The site is deployed to GitHub Pages.

Do not remove or casually modify the GitHub Pages settings in `next.config.ts`.

The project currently uses static export:

```ts
output: "export"
```

The site may use a `basePath` and `assetPrefix` during GitHub Actions deployment. Preserve this behavior unless the project is intentionally moved to a custom domain or different hosting provider.

If adding image functionality, remember that static export uses:

```ts
images: {
  unoptimized: true,
}
```

Do not introduce server-only functionality unless the deployment target changes away from static GitHub Pages.

## Code Style

General rules:

* Use TypeScript.
* Prefer explicit, readable code over clever abstractions.
* Keep components small and purposeful.
* Prefer composition over large monolithic components.
* Keep content-driven sections connected to `data/site.ts` when practical.
* Use semantic HTML whenever possible.
* Use accessible labels for forms and interactive controls.
* Avoid unnecessary dependencies.
* Do not add production dependencies without a clear reason.

React and Next.js rules:

* Prefer server components unless client-side interactivity is required.
* Only add `"use client"` when necessary.
* Keep layout structure stable.
* Use `next/link` for internal navigation.
* Avoid hardcoding repeated content inside components when it belongs in `data/site.ts`.

Tailwind and CSS rules:

* Use existing design tokens from `app/globals.css`.
* Prefer existing color variables over raw hex values.
* Preserve the premium dark visual identity.
* Do not introduce random colors, gradients, or typography choices without aligning them with the brand.
* Maintain responsive spacing and readable text sizes.
* Keep hover/focus states visible and accessible.

## Brand and Content Rules

This website should sound like Mario: thoughtful, ambitious, technical, warm, and practical.

When editing copy:

* Be clear before being clever.
* Avoid buzzwords without proof.
* Avoid generic phrases like “passionate developer” or “I build scalable solutions” unless backed by specifics.
* Prefer concrete language about systems, workflows, prototypes, reliability, engineering discipline, and execution.
* Keep the tone professional but human.
* Do not overstate experience.
* Do not invent companies, metrics, credentials, or project outcomes.
* If a case study lacks measurable impact, describe the work honestly using context, constraints, responsibilities, and lessons learned.

The site should attract:

* Recruiters
* Hiring managers
* Startup founders
* Small business owners
* Creators
* Freelance/consulting leads
* Technical collaborators

Every major content addition should support at least one of these goals:

* Build trust
* Demonstrate proof
* Explain services
* Show technical judgment
* Generate leads
* Improve long-term reputation

## UX Rules

Prioritize:

* Clear navigation
* Strong first impression
* Mobile readability
* Accessible contrast
* Clear call-to-actions
* Fast loading
* Trust-building content
* Easy contact flow

Do not add visual effects that reduce readability.

Do not hide important content behind animation.

Do not create sections that only look nice but do not support positioning, proof, trust, or conversion.

When adding a new section, define its job:

* Who is this for?
* What question does it answer?
* What action should the visitor take?
* What proof does it provide?

## Accessibility Requirements

Maintain accessibility by default.

Rules:

* Use semantic sectioning where appropriate.
* Use proper heading hierarchy.
* Every form input must have a label.
* Interactive elements must be keyboard accessible.
* Focus states must remain visible.
* Text contrast must be readable.
* Do not rely on color alone to communicate meaning.
* Respect reduced-motion preferences when adding animation.
* Avoid tiny text on mobile.

Before finishing UI work, review:

* Mobile layout
* Keyboard navigation
* Form labels
* Focus states
* Contrast
* Heading order

## Forms and Lead Capture

The contact form is important because the site is a lead-generation asset.

When modifying forms:

* Preserve required fields unless there is a strong UX reason to change them.
* Keep the form clear and low-friction.
* Do not break the Formspree integration.
* Add success and error states when possible.
* Add spam protection carefully.
* Add privacy reassurance where appropriate.
* Never expose secrets in client-side code.

The form should help qualify leads without making the visitor feel blocked.

Useful fields include:

* Name
* Email
* Project type
* Budget range
* Timeline
* Message

## SEO Rules

When adding pages, include metadata.

Important SEO priorities:

* Clear page titles
* Strong meta descriptions
* Open Graph metadata
* Canonical URLs where appropriate
* Sitemap support
* Robots support
* Descriptive headings
* Human-readable URLs
* Meaningful internal links

The site should eventually support pages such as:

* `/work`
* `/work/[slug]`
* `/services`
* `/services/[slug]`
* `/about`
* `/build-log`
* `/build-log/[slug]`
* `/resources`
* `/contact`
* `/resume`

Do not create thin pages. Each page should have a clear purpose.

## Portfolio and Case Study Rules

Case studies should follow this structure when possible:

1. Title
2. One-line outcome
3. Context
4. Problem
5. Constraints
6. Mario’s role
7. Architecture or approach
8. Technologies used
9. Implementation highlights
10. Result or current status
11. Lessons learned
12. What could be improved next

Do not fabricate confidential details from aerospace, embedded, or client work.

If details are sensitive, describe the work at a safe abstraction level.

Good project themes for this site include:

* Aerospace test tooling
* Validation workflows
* CAN communication
* Data modeling and ETL
* Automation scripts
* AI-ready documentation systems
* Personal website and design system
* Workflow/productivity tooling
* Cybersecurity learning projects
* Homelab or infrastructure projects

## Services Rules

The services should be concrete and understandable.

Current service themes:

* Website Clarity Sprint
* AI-Ready Workflow Setup
* Technical Prototype Blueprint

When editing services, clarify:

* Who it is for
* What problem it solves
* What is delivered
* What the client gets at the end
* What information is needed to start
* What the next step is

Do not make the services sound bigger than Mario can currently deliver. Position them as focused, practical, high-clarity offers.

## Performance Rules

The site should feel premium but remain fast.

Rules:

* Avoid large unnecessary JavaScript.
* Lazy-load heavy visual effects where possible.
* Be careful with `three` or `ogl` usage.
* Do not add large assets without optimization.
* Keep the homepage fast on mobile.
* Avoid layout shift.
* Prefer CSS effects over heavy JavaScript when possible.

Before finishing visual work, run a production build.

## Security Rules

Do not commit secrets.

Never expose:

* API keys
* Formspree private settings
* Supabase service-role keys
* Tokens
* Personal private emails unless explicitly intended as public contact info
* Private client data
* Confidential work details

Only environment variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Use them carefully.

For GitHub Actions:

* Do not remove secret checks unless replacing them with a safer mechanism.
* Do not print secrets in logs.
* Keep deployment permissions minimal.

## Git and PR Rules

Before proposing a final change:

1. Explain what changed.
2. Mention files changed.
3. Mention checks run.
4. Mention any checks not run and why.
5. Call out risks or follow-up work.

Commit message style:

```txt
Add clear imperative message
```

Examples:

```txt
Add Codex project instructions
Improve contact form validation
Create work case study structure
Add SEO metadata for homepage
Refine service positioning copy
```

Avoid vague commit messages like:

```txt
updates
fix stuff
changes
```

## Codex Working Behavior

When working in this repo, Codex should:

* Read this file before making changes.
* Inspect existing components before creating new ones.
* Reuse existing patterns.
* Preserve the brand direction.
* Prefer small, reviewable changes.
* Avoid unnecessary rewrites.
* Ask for clarification only when the task is genuinely ambiguous.
* Make a reasonable best effort when the requested direction is clear.
* Run lint and build checks before finishing.
* Report failures honestly.
* Never claim a check passed if it was not run.

## What Not To Do

Do not:

* Turn the site into a generic resume template.
* Add fake metrics or fake client results.
* Overuse trendy AI/startup language.
* Add complex animations that hurt readability.
* Break GitHub Pages static export.
* Add backend/server-only features without changing deployment strategy.
* Add dependencies without justification.
* Hide important content on mobile.
* Remove accessibility features.
* Commit secrets.
* Replace the brand voice with corporate filler.

## Long-Term Product Direction

This website should evolve into a personal operating system for Mario’s career.

Future improvements may include:

* Dedicated work/case-study pages
* Dedicated service pages
* Real downloadable resources
* Build log articles
* Resume page
* Custom domain
* Analytics
* Lead capture dashboard
* Supabase-backed content or leads
* Newsletter signup
* Project changelog
* SEO and structured data
* Multilingual touches in Spanish, English, and eventually German

Prioritize improvements that compound Mario’s reputation over the next 5–10 years.
