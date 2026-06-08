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

The `public/.nojekyll` file is included so GitHub Pages serves the exported
Next.js assets correctly.

## Environment Variables

Set this for Formspree-powered static forms:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

Without the variable, forms still render and fall back to `#`.

## Future Roadmap

- Supabase leads table
- Resources download system
- Build Log pages
- Client profiles
- Private client portal
