# Mario Salamanca Site

Static personal brand website for Mario Salamanca, built to present software
development, systems-building, creative founder work, and lead capture in a
GitHub Pages friendly V1.

## Tech Stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS v4
- Static export for GitHub Pages

## Local Development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

```bash
npm run lint
npm run build
```

The production build uses `output: "export"` and writes the static site to
`out/`.

## GitHub Pages Deployment

Deployment is handled by `.github/workflows/deploy.yml` on pushes to `main`.
The workflow installs dependencies with `npm ci`, builds the static export, and
uploads `./out` as the GitHub Pages artifact.

Before the first successful deploy, enable Pages once in the repository:
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions.

The `public/.nojekyll` file is included so GitHub Pages serves the exported
Next.js assets correctly.

The site is prepared for a custom GitHub Pages domain, so production builds use
the domain root (`/`) instead of the repository project path. Keep `basePath`
and `assetPrefix` unset unless the site is intentionally moved back to a
sub-path deployment.

Configure the custom domain in GitHub repository settings under
Settings -> Pages -> Custom domain, then set the required DNS records with the
domain provider. For GitHub Actions Pages deployments, a committed `CNAME` file
is not required.

## Environment Variables

Set this for Formspree-powered static forms:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

For GitHub Pages, add this value as a secret in the `github-pages` environment.
The deploy workflow reads it during the build job so the exported static forms
submit to Formspree instead of posting back to the GitHub Pages HTML route.

The contact form intentionally supports two Formspree paths:

- If Formspree accepts AJAX submissions, the visitor stays on the site and sees
  the in-page success state.
- If Formspree blocks AJAX because hosted spam protection is required, the form
  opens Formspree's verification flow through a native POST fallback.

Keep Formspree reCAPTCHA or hosted verification enabled unless a future decision
accepts the spam and privacy tradeoffs of disabling it. Do not add private
Formspree or reCAPTCHA secrets to client-side environment variables.

## Future Roadmap

- Supabase leads table
- Resources download system
- Build Log pages
- Client profiles
- Private client portal
