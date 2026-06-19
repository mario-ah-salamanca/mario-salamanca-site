# Issue 002 - Add Google Calendar Call Scheduling Flow

## Task Name

Add a Google Calendar-connected call scheduling flow

## Status

Implemented V1 site support through a configurable public scheduler link.

The contact section now renders a secondary scheduling CTA when `NEXT_PUBLIC_SCHEDULING_URL` is configured. The URL should point to a Google Calendar-compatible public booking flow, such as Google Appointment Schedule, Cal.com, or Calendly. The GitHub Pages workflow now requires this variable for production builds so the deployed site does not silently lose the scheduling entry point.

## Goal

Add a clear, trustworthy way for qualified visitors to request or schedule a call, with calendar availability connected to Google Calendar and enough context captured to prepare for the conversation.

## Why This Matters

The site is intended to become a consulting and professional opportunity platform. A scheduling flow reduces friction for serious leads while keeping the contact path organized and professional.

## Audience Impact

Founders, recruiters, collaborators, and potential clients can move from interest to a scheduled conversation without back-and-forth email.

## Files Likely Involved

- `data/site.ts`
- `components/sections/contact-section.tsx`
- `components/sections/contact-form.tsx`
- A new scheduling component or section under `components/sections/`
- Possibly a new `/contact` or `/schedule` page later
- `docs/DECISIONS.md`
- `docs/PROGRESS_LOG.md`
- `docs/ROADMAP.md`

## Constraints

- Preserve static GitHub Pages export compatibility unless the hosting strategy changes.
- Do not expose Google OAuth secrets or private calendar credentials in client code.
- Avoid collecting unnecessary personal data.
- Keep the first scheduling version elegant and low-friction.
- Make the flow clear for both project inquiries and recruiter/collaboration calls.
- Respect privacy expectations for a Germany-operated site.

## Implementation Steps

1. Choose the scheduling approach:
   - External scheduler link connected to Google Calendar, such as Calendly, Cal.com, or Google Appointment Schedule.
   - Embedded scheduler widget if it is lightweight and privacy-acceptable.
   - Custom Google Calendar API integration only if the site moves beyond static hosting or uses a secure backend.
2. Define the call types, such as project discovery, recruiter conversation, collaboration, or general intro.
3. Define required pre-call fields: name, email, reason for call, rough context, timeline, and optional links.
4. Add a scheduling CTA near the contact form without competing with the main contact path.
5. Add Playwright coverage for the scheduling CTA and any embedded form behavior.
6. Document the privacy and integration decision.

## Risks

- Direct Google Calendar API integration requires OAuth handling and a secure backend; it is not a good fit for pure static GitHub Pages by itself.
- Embedded third-party schedulers can add script weight and privacy implications.
- Too many lead-capture options can make the contact section feel cluttered.
- Calendar availability must not expose private calendar details.

## Definition of Done

- The selected scheduling approach is documented.
- Visitors have a clear scheduling CTA.
- Calendar availability is connected through a safe Google Calendar-compatible path.
- The flow captures enough context to make calls useful.
- Privacy implications are addressed in copy or docs.
- Playwright verifies the scheduling entry point.

## Verification

Required commands:

```bash
npm run lint
npm run build
npm run test:e2e
```

Additional checks:

```bash
rg "calendar|schedule|Google|Appointment|Calendly|Cal.com" app components data docs
```

## Documentation Updates Required

- Update `docs/ROADMAP.md` with scheduling under lead generation or service clarity.
- Update `docs/DECISIONS.md` with the selected calendar integration approach.
- Update `docs/PROGRESS_LOG.md` after implementation and QA.

## Implementation Notes

- Selected approach: external public scheduler link.
- Rejected for V1: embedded scheduler widget and custom Google Calendar API integration.
- Reason: the site remains a static GitHub Pages export, so OAuth credentials, private calendar IDs, and server-side availability handling do not belong in the client.
- Remaining external setup: configure the real `NEXT_PUBLIC_SCHEDULING_URL` as a GitHub Pages environment variable before the next production deployment.
