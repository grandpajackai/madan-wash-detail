# Release review — Madan Wash & Detail

Released October 16, 2026.

- Live: https://madanwashanddetail.com/
- Original review link: https://grandpajackai.github.io/madan-wash-detail/ (redirects to the custom domain)
- Repository: https://github.com/grandpajackai/madan-wash-detail
- Host: free public GitHub Pages, `main` branch / `docs` directory; HTTPS enabled.

## Delivered

15 HTML pages: homepage, services index, all five original service routes, work, about, consolidated seven-city service-area guide, contact, FAQs, privacy, HTML sitemap and custom 404. The XML sitemap contains the 14 indexable pages.

Branding follows the supplied logo. Ten original portfolio photos, two optional videos and an authentic BMW hero replace the original site's generic imagery. Copy is grounded in the existing business offering, phone, email, hours and coverage. The Jobber estimate form and client login are retained. Text preparation is local and clearly requires the visitor to send the message.

## Review loop

Separate content/SEO, media and UI/QA agents audited the sources and implementation. Findings were fixed and retested: narrow mobile title overflow, stale prepared texts, a contact-page estimate action that reloaded the current route, singular gallery counts, lightbox caption spacing, photo description accuracy, repetitive service headings and weaker portfolio imagery.

Local browser review covered every page at desktop, 390px and 320px widths. Menus, keyboard behavior, FAQ disclosures, portfolio filters, dialog navigation/focus, contact validation, Jobber rendering and both videos passed. Form text was raised to 16px on phones to avoid common iOS focus zoom. No unresolved P0/P1/P2 defects remained in the tested local scope.

Static release audit: **15 pages, 549 local references, zero failures, zero warnings.**

Public HTTP crawl: **14 indexed pages, 48 requests, zero failures**, including media availability, direct nested routing without a trailing slash and the real HTTP 404 recovery page.

Post-deployment browser evidence is recorded in `research/qa-live-browser.md`. Source and review detail is in `research/qa-content.md`, `research/qa-media.md`, `research/qa-browser.md` and the machine-readable static/live reports.

## Known limits

Three supplied Drive folders required Google sign-in, and the Instagram identity was not verified. The site uses accessible original media and contains no broken social embeds or placeholders. No AI hero was needed.

No real estimate, call, email or text was submitted during QA. Native application handoff depends on the visitor's device; external Jobber uptime is outside this website. Review covers the observed browsers, sizes and release state, not every possible future device or outage. SEO structure is ready for discoverability, but no ranking is promised. The owner configured Namecheap DNS and the GitHub custom domain. The custom-domain cutover is complete; production build settings and the ongoing update workflow are documented in README.md and DOMAIN-REVIEW.md.
