# Independent content and SEO gauntlet

Reviewed October 16, 2026. Scope: all 15 generated HTML pages in `dist`, source copy, page metadata and JSON-LD, sitemap/robots, internal link and anchor targets, business facts, and asset descriptions. Browser interaction and public-host behavior are separate QA gates.

## Verdict

Content and SEO structure pass for publication after rebuilding the latest source changes. No invented prices, reviews, credentials, staff biographies or guaranteed cleaning outcomes were found. The site gives each service a purpose, helps visitors choose care, showcases authentic owner-supplied work and offers real contact routes.

The current `dist` inspected at the first pass predates three generator fixes and the clearer specialist short name. The fixes were verified in source. Rebuild and run the existing release checks before publishing.

## Concrete findings and resolution

| Finding | Resolution |
| --- | --- |
| Gallery alt text identified a white Lexus GX as gray | Root corrected generator to “White Lexus GX”; white paint independently verified from the actual asset |
| 404 canonical pointed to `/404/` while the actual artifact is `404.html` | Root corrected canonical generation to the actual file URL |
| Each service repeated its hero tagline immediately as its content H2 | Root added five distinct, meaningful service headings |
| Service chooser called engine-bay/heavy-contamination work only “Specialist cleaning” | Updated `content.mjs` short name to “Engine bay & specialist care” |
| Several portfolio picks were weaker than available alternatives | Media reviewer and root are replacing rear-plate/dark/weak shots with Mercedes exterior, Toyota Tacoma and Ford pickup photos; original models were nevertheless correctly described |

## Factual checks

- Phone `(305) 904-5114`, email `madan.detail95@gmail.com`, Miami Lakes base and hours Tuesday–Saturday 10 AM–5 PM agree with the public business website. Sunday and Monday are closed.
- Seven coverage cities agree with the original offering: Miami Lakes, Miami, Hialeah, Doral, Coral Gables, Pembroke Pines and Fort Lauderdale. County labels are correct: the first five are Miami-Dade; the final two are Broward.
- All five original service slugs are retained. The new copy distinguishes interior, exterior, leather, specialist work and rejuvenation instead of giving every page interchangeable promises.
- Optional wax/sealant language is grounded in the original exterior service. No invented ceramic-coating, paint-correction or repair package appears.
- Interior/exterior typical 1–3 hour guidance is from the original service FAQs and is appropriately qualified by vehicle condition.
- Recurring interior maintenance is grounded in the existing offering. No invented maintenance price, frequency commitment or membership program appears.
- Heavy contamination language calls for assessment and avoids a health/sanitization guarantee.
- Jobber estimate and login links use the existing business hub IDs. The request form was visibly loaded during source research; no test customer data was submitted.
- Instagram is omitted because identity was not verified. No guessed social profile or borrowed social content appears.
- No street address or implied city-specific offices were invented.

## Editorial review

The homepage has a concise proposition, authentic visual evidence and distinct next steps. Services are easy to choose by need; the service pages offer useful detail without fabricated packages. Contact copy clearly distinguishes requesting an estimate from a confirmed appointment. The SMS tool is accurately described as preparing a message that the visitor chooses to send.

The consolidated area page gives practical planning information in seven anchored sections. This is preferable to generating seven near-duplicate city pages with no local project evidence. A small amount of repeat booking guidance is useful because visitors may arrive directly at a service or area section. No repetitive keyword blocks or city lists disguised as editorial paragraphs were found.

The privacy page accurately describes the observed implementation: local media, static hosting, separate Jobber forms, no advertising trackers and a client-side SMS handoff. It links to the actual GitHub and Jobber privacy pages, both retrieved successfully in the web check.

Portfolio model descriptions were checked against `research/media-audit.md`, the manifest and the media reviewer's full-size inspection. BMW, Mercedes-Benz console/emblem, Lexus GX, Infiniti, GMC wheel, Nissan Altima, Hyundai, Audi and white Tesla labels match the supplied assets. Captions do not invent a project location, customer, coating, treatment package or before/after sequence.

## Technical content checks

Automated independent file inspection found:

- 15 HTML pages, each with one H1.
- Unique document titles and meta descriptions on all 15 pages.
- Parseable JSON-LD on every page, with Organization and appropriate BreadcrumbList/Service entities.
- Zero broken internal page, asset or fragment targets.
- Correct `/madan-wash-detail/` base path throughout local page and asset references.
- An XML sitemap containing the 14 indexable routes, excluding the noindex 404.
- Valid robots.txt line endings and a sitemap reference.
- Absolute canonical/social/schema URLs consistently using the intended GitHub Pages origin and repository path.
- Original service paths work as ordinary static directory routes; substantive content exists in HTML without requiring JavaScript.

Organization schema is an appropriate conservative choice because no public storefront address was established. There is no fabricated AggregateRating/Review markup or claim to LocalBusiness rich-result eligibility.

## Deployment notes

The public host must still be checked for actual HTTP status, direct deep-link loading, videos, mobile interaction and console errors. These file-level checks cannot prove external form submission or native phone/SMS behavior. The release QA agent owns those browser checks.

For a GitHub Pages project site, this repository’s robots.txt is below the origin root. The origin-root robots file controls crawling; the project file is useful documentation and ready for a later custom-domain move, but should not be presented as an independent ranking improvement. Normal crawlable links and the accessible sitemap provide the current structure.

When the owner connects the custom domain, regenerate origin/base paths in canonical, social, sitemap and schema URLs together. Preserve service slugs and test redirects. Google ranking depends on broader business/search evidence and is not guaranteed by this implementation.
