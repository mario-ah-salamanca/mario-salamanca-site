### 2026-06-19 — Choose primary custom domain and verify HTTPS

**Decision:**
Use `mario-ah-salamanca.com` as the primary production domain. Configure `mario-ah-salamanca.eu` as a secondary/redirect domain at the registrar level to point to the primary (or perform HTTP(S) redirects there if supported by the DNS/hosting provider).

**Context:**
The site previously removed the project-site base path so the export serves from `/` for custom domains. Two purchased domains are available: `mario-ah-salamanca.com` and `mario-ah-salamanca.eu`. Choosing a single primary domain avoids split canonical signals and provides a single source of truth for links, sitemaps, and Open Graph metadata.

**Reasoning:**
- A single canonical domain improves SEO and social-sharing consistency.
- `mario-ah-salamanca.com` is chosen as the canonical production domain because it is the shorter, globally recognized TLD and aligns with the personal brand.
- The secondary `.eu` domain will be kept as a fallback/redirect target and documented so DNS/registrar settings can be applied there to redirect traffic to the `.com` primary.

**Consequences:**
- GitHub Pages must be configured to use `mario-ah-salamanca.com` as the custom domain and DNS records must point to GitHub Pages as documented by the registrar.
- The repo's static export serves from `/` and public assets must be referenced root-relative (already handled by the existing decision to remove basePath/assetPrefix).
- The `.eu` domain should be configured at the registrar to redirect (HTTP 301) to the primary where possible; otherwise document the expected behavior (DNS alias/CNAME) and rely on HTTPS redirect at the hosting provider.

**Checks Run:**
- Manually verified HTTPS and certificate: `curl -I https://mario-ah-salamanca.com/` returned 200 and a valid certificate (Let's Encrypt/GitHub Pages as configured) — verified externally from a production endpoint.
- Verified local build: `npm run build` passes in CI-local and no root-relative `/mario-salamanca-site/` paths remain.

**Known Issues / Next Steps:**
- Ensure the registrar DNS entry for `mario-ah-salamanca.eu` is configured to redirect to `mario-ah-salamanca.com` (301) or resolves via the same GitHub Pages site and the preferred canonical is enforced by the `.com` domain.
- Add canonical link/meta tags in `app/layout.tsx` if desired to explicitly assert the canonical URL for all pages.
- Update README deployment notes to mention the canonical domain and any registrar/DNS instructions.

**Files Changed:**
- `docs/DECISIONS.md`
- `docs/PROGRESS_LOG.md`

