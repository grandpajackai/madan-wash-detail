# Independent release gauntlet

Reviewer: QA/design agent. Research checked 16 October 2026. Approval requires evidence; visual enthusiasm is not a substitute for functioning pages.

## Source baseline

- [Current website](https://madanwashanddetail.com/): mobile detailing based around Miami Lakes; Miami-Dade and Broward coverage, with Miami, Hialeah, Doral, Coral Gables, Pembroke Pines, and Fort Lauderdale named. Phone: (305) 904-5114. Hours: Tuesday–Saturday, 10am–5pm; Sunday and Monday closed. Existing conversion uses Jobber estimate and client-login links.
- Current navigation exposes interior, exterior, leather, engine-bay/heavy-contamination, and vehicle-rejuvenation services. Preserve these distinct customer needs rather than silently replacing them with unverified packages or pricing.
- Direct browser inspection also verified `madan.detail95@gmail.com`, the [Jobber request destination](https://clienthub.getjobber.com/hubs/2f2b106b-0f8b-497e-aedb-493e2366e05b/public/requests/4940126/embedded_new?source=sp_website), and the [Jobber client-login destination](https://clienthub.getjobber.com/client_hubs/2f2b106b-0f8b-497e-aedb-493e2366e05b/login/new?source=share_login). Test handoff loading without sending a real enquiry.
- [Vehicle rejuvenation page](https://madanwashanddetail.com/services/vehicle-rejuvenation-services): restoration and deep-cleaning positioning. Do not infer paint-correction, coating, certification, guaranteed odor removal, or medical/biohazard claims beyond business-confirmed scope.
- Supplied circular logo establishes pale aqua, bright blue, and deep navy. Preserve the actual logo, allow legibility at phone sizes, and draw restrained page accents from it.
- Browser extraction did not expose all existing service-page bodies or FAQ answers. Missing content should be rewritten around confirmed scope, not presented as sourced facts.

## Release blockers

1. A broken local route, asset, navigation element, image, or misleading contact/estimate action.
2. Invented reviews, prices, guarantees, certifications, results, staff names, physical address, or unsupported service-area promises.
3. A placeholder, fake submit success, hidden server requirement, or frontend-only contact form that appears to deliver a request.
4. Phone-width overflow, unreadable text, covered controls, unusable menu, inaccessible keyboard flow, or missing focus feedback.
5. Public publishing of unrelated workspace files, private contact/customer data, credentials, or unlicensed material.
6. GitHub Pages root-relative paths that break beneath the repository path; nested direct links failing after refresh.

## Design standard

- Strong first screen: recognizable brand, mobile-detailing proposition, meaningful authentic vehicle imagery, named geography, and an obvious next step.
- Restrained hierarchy: one main heading per page, clear section rhythm, purposeful white space, readable line lengths, and consistent button language. Content and photography do the work.
- Editorial portfolio: actual work gets generous space and useful context. No unsupported before/after pairing or invented outcome caption.
- Brand specificity: aqua/navy treatment and the supplied logo create identity without large neon gradients, generic icon grids, or repetitive sales slogans.
- Decisions feel easy: visitors can compare service intentions, inspect work, confirm coverage and hours, and reach the real estimate flow in one or two meaningful actions.
- Mobile is a full design, not a collapsed desktop: sufficient touch targets, balanced crops, readable service copy, and no menu/CTA collisions.
- Motion is optional: respect reduced motion, avoid autoplay audio, keep controls operable, and provide stable image/video fallbacks.

## Automated audit contract

Audit the generated output directory (expected `dist/` unless root specifies another) and every HTML page. Check one H1, unique title and description, canonical/robots, valid JSON-LD, image alt attributes, dimensions, local asset existence, unique IDs, internal link targets and fragments, no placeholder links, and sane asset sizes. Validate sitemap against actual routes. Test repository-subpath deployment rather than only `/` hosting. Record image weight, JS/CSS weight, route count, and all failures with paths.

## Browser flow matrix

At desktop and phone width, visit home, services index, every service detail, work/portfolio, about if present, areas index, every area detail if present, contact/estimate, and 404. On each page inspect real rendering, image crops, layout, contrast, active nav, all route links, footer, sticky elements, and direct refresh.

Exercise menu open/close, keyboard navigation, Escape behavior, accordions, portfolio filters/lightbox if present, and contact/estimate handoffs. Verify telephone is `tel:+13059045114`; check verified email and Jobber endpoints against source. Do not submit real requests or contact the business. Check external Instagram destination instead of assuming social media embeds load.

Inspect browser console/network for application errors, missing resources, and unstable loading. Repeat the critical paths on the live GitHub Pages URL after deployment, including a nested direct link and 404 recovery.

## SEO/content gate

- Search-oriented titles and descriptions read naturally and differ meaningfully by intent.
- Service pages explain who the service is for, what is included or assessed, process, limitations, common questions, and a useful next step without padded copy.
- Local pages offer useful distinct geography/availability guidance; do not generate a city-name doorway-page matrix.
- Structured data contains only verifiable business details; no fabricated review rating or location.
- Crawlable ordinary links, sitemap, correct canonical base, descriptive filenames/alt text, and useful 404 recovery.
- No promise of a particular ranking. Google cannot be guaranteed by design or metadata.

## Loop and exit criteria

Run static audit → independent browser/design review → fix high-impact defects → repeat affected tests → deploy → live smoke review. Keep a release report with concrete findings, corrections, and remaining limitations. Exit only with no P0/P1/P2 unresolved defects in tested scope and a candid assessment of aesthetic quality. Record untestable third-party or infrastructure behavior rather than claiming universal perfection.
