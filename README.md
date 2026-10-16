# Madan Wash & Detail

A portfolio-led mobile detailing website for Miami Lakes, Miami-Dade and Broward County.

**Live website:** https://madanwashanddetail.com/

## Design and content

The supplied Madan logo anchors a restrained navy, aqua and warm-white palette. Original owner-supplied photographs and click-to-play video take the lead. Five service pages preserve the original website URLs. A consolidated service-area guide helps visitors plan appointments without generating repetitive city landing pages.

The site preserves the verified business phone, email, hours, Jobber estimate form and client login. There are no fabricated prices, testimonials, ratings, certifications or appointment confirmations. The optional text tool prepares a message on the visitor's device; it does not send or store it.

## Build and verify

Node.js 20.11+ is required. No packages need installing.

```sh
npm run build
npm run check
npm run preview
```

Preview: http://127.0.0.1:4173/

- `content.mjs`: verified business details and service/area copy.
- `scripts/build.mjs`: static HTML generator.
- `public/`: styles, minimal interaction JavaScript and selected media.
- `dist/`: local build output, ignored by Git.
- `docs/`: identical deployable output, published by GitHub Pages.
- `scripts/qa.mjs`: route, asset, accessibility markup and SEO metadata checks.
- `scripts/live-check.mjs`: live routes/assets and custom-404 checks.
- `research/`: source evidence and release review findings.

Rebuild and commit `docs/` whenever source content changes. GitHub Pages deploys `main` → `/docs` automatically.

## Custom domain

Production builds default to `https://madanwashanddetail.com` and the root path `/`. The domain remains registered with Namecheap and the site is hosted on free GitHub Pages. The owner configured the website DNS records and GitHub custom domain; HTTPS is enabled.

The normal update workflow is:

```sh
npm run build
npm run check
```

Commit the rebuilt `docs/` and push to `main`. `public/CNAME` is copied to `docs/CNAME` on every build, preserving the custom domain. Keep the domain configuration in GitHub Pages and the existing email DNS records in Namecheap. `SITE_ORIGIN` and `BASE_PATH` remain available as explicit build overrides.

After a deployment, run `node scripts/live-check.mjs` and inspect the homepage, service pages, media, contact links, `www` redirect and custom 404. The production sitemap is `https://madanwashanddetail.com/sitemap.xml`; submit it in Google Search Console and update the business profile website link when ready. GitHub Pages does not support server redirect rules for arbitrary retired paths.

## Media and access

All deployed photographs and videos come from the owner's accessible Drive folder. The supplied logo is retained. No AI-generated hero or third-party social embed is used. Three additional supplied folders required Google sign-in; Instagram identity could not be verified. Source mappings are in `research/media-audit.md`.

## Scope of verification

Release checks cover the routes and interactions documented in `research/`. External Jobber pages were inspected without submitting a customer request. Calling, sending a text/email and operating-system app handoff depend on the visitor's device. SEO markup and architecture support discoverability; rankings and third-party uptime cannot be guaranteed.
