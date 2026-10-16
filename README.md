# Madan Wash & Detail

A portfolio-led mobile detailing website for Miami Lakes, Miami-Dade and Broward County.

**Live website:** https://grandpajackai.github.io/madan-wash-detail/

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

Preview: http://127.0.0.1:4173/madan-wash-detail/

- `content.mjs`: verified business details and service/area copy.
- `scripts/build.mjs`: static HTML generator.
- `public/`: styles, minimal interaction JavaScript and selected media.
- `dist/`: local build output, ignored by Git.
- `docs/`: identical deployable output, published by GitHub Pages.
- `scripts/qa.mjs`: route, asset, accessibility markup and SEO metadata checks.
- `scripts/live-check.mjs`: live routes/assets and custom-404 checks.
- `research/`: source evidence and release review findings.

Rebuild and commit `docs/` whenever source content changes. GitHub Pages deploys `main` → `/docs` automatically.

## Custom domain later

The current deployment intentionally uses the free GitHub Pages address. No DNS or existing-domain settings were changed.

When ready to move the domain, rebuild with:

```sh
SITE_ORIGIN=https://madanwashanddetail.com BASE_PATH=/ npm run build
node scripts/qa.mjs docs /
```

Commit the rebuilt `docs/`, configure the custom domain in the repository's Pages settings, and update DNS using GitHub's current instructions. Enable HTTPS after the domain certificate is ready. Test the root homepage, all five existing service URLs, estimates, client login and custom 404. Submit the domain's `/sitemap.xml` in Google Search Console and verify the business profile link. Redirect any retired paths at the origin if necessary; GitHub Pages does not support server redirect rules.

## Media and access

All deployed photographs and videos come from the owner's accessible Drive folder. The supplied logo is retained. No AI-generated hero or third-party social embed is used. Three additional supplied folders required Google sign-in; Instagram identity could not be verified. Source mappings are in `research/media-audit.md`.

## Scope of verification

Release checks cover the routes and interactions documented in `research/`. External Jobber pages were inspected without submitting a customer request. Calling, sending a text/email and operating-system app handoff depend on the visitor's device. SEO markup and architecture support discoverability; rankings and third-party uptime cannot be guaranteed.
