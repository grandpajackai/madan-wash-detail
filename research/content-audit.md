# Madan Wash & Detail — content and local SEO audit

Audit date: October 16, 2026. Sources are the business's public website, its live Jobber form and Google Search Central. Website content is evidence of the current offering, not independent verification of training, insurance, environmental performance or guaranteed outcomes. The owner explicitly described the old copy as AI-generated; the rewrite retains practical business facts and avoids amplifying unsupported claims.

## Verified business essentials

| Item | Existing public evidence | Rebuild decision |
| --- | --- | --- |
| Business name | Madan Wash & Detail | Preserve consistently |
| Phone | (305) 904-5114 | Display consistently; use `tel:+13059045114` |
| Email | madan.detail95@gmail.com | Display and use a direct mailto link |
| Model / base | Mobile detailing, based in Miami Lakes | No invented storefront or street address |
| Coverage | Miami-Dade and Broward; Miami Lakes, Miami, Hialeah, Doral, Coral Gables, Pembroke Pines, Fort Lauderdale | One useful coverage page with seven anchored sections |
| Hours | Tuesday–Saturday 10 AM–5 PM; Sunday/Monday closed | Use consistent hours; avoid unreliable live “open now” widgets |
| Vehicles | Sedans, SUVs, trucks | No invented marine, aircraft or RV offering |
| Booking | Existing Jobber estimate request, three steps | Real link plus phone/email fallback; no dummy form |
| Customer access | Existing Jobber client login | Preserve as a secondary utility link |

Sources: [Home](https://madanwashanddetail.com/), [Interior](https://madanwashanddetail.com/services/interior-car-detailing), [Rejuvenation](https://madanwashanddetail.com/services/vehicle-rejuvenation-services). These identity and coverage facts are the total factual summary of the homepage used here; the new product copy is editorially rewritten.

The Jobber form was visibly loaded in the in-app browser. It asks for contact and address information and has a three-step progress indicator. No data was entered or submitted. The existing iframe includes a generated `instance_id`; the rebuild should use the same route with that transient parameter removed:

- [Estimate request](https://clienthub.getjobber.com/hubs/2f2b106b-0f8b-497e-aedb-493e2366e05b/public/requests/4940126/embedded_new?source=sp_website)
- [Client login](https://clienthub.getjobber.com/client_hubs/2f2b106b-0f8b-497e-aedb-493e2366e05b/login/new?source=share_login)

## Services and factual boundaries

| Preserve original route | Grounded offering | Rewrite boundary |
| --- | --- | --- |
| `/services/interior-car-detailing/` | Deep cabin cleaning, shampooing, stain/odor concerns, recurring care; existing typical duration 1–3 hours | No universal stain removal, allergy or sanitization promise |
| `/services/exterior-car-detailing/` | Exterior cleaning; homepage mentions clay bar and steam; optional waxes/sealants; typical duration 1–3 hours | Do not turn optional protection into an included ceramic-coating or paint-correction package |
| `/services/leather-care-and-conditioning/` | Leather cleaning/conditioning | No claim to repair tears, cracking or failed coatings |
| `/services/engine-bay-and-heavy-contamination-cleaning/` | Engine-bay cleaning; heavy contamination and severe odor enquiries; existing typical time 1–2 hours | Individually assess contamination; no pathogen-removal or mechanical repair promise |
| `/services/vehicle-rejuvenation-services/` | Interior/exterior cleaning considered together | No automatic fixed bundle, factory-new result or resale-value guarantee |

Service sources: [Interior](https://madanwashanddetail.com/services/interior-car-detailing), [Exterior](https://madanwashanddetail.com/services/exterior-car-detailing), [Leather](https://madanwashanddetail.com/services/leather-care-and-conditioning), [Specialist cleaning](https://madanwashanddetail.com/services/engine-bay-and-heavy-contamination-cleaning), [Rejuvenation](https://madanwashanddetail.com/services/vehicle-rejuvenation-services).

The website contains broader AI-style claims about safety for all materials, environmental friendliness, restoration to like-new condition, vehicle longevity, and safe handling of biohazards. These are not independently substantiated. The copy module reduces them to service scope, case-by-case assessment and useful customer preparation. There are no verified prices, ratings, testimonials, certifications, insurance details or review counts. Do not invent any.

The original engine-bay FAQ tells customers to remove personal items from the engine bay. That is poor preparation guidance and has deliberately not been carried forward. New copy asks customers to share known faults/modifications and vehicle condition instead.

## Information architecture

Recommended main navigation: Work, Services, About, Service areas, Contact, plus a prominent estimate CTA. A mobile visitor should be able to reach the real estimate request, call or portfolio within one action. Customer login belongs in utility navigation/footer rather than competing with the estimate.

1. Home: precise mobile-detailing proposition, strong authentic portfolio image/video, representative project selection, all five service links, compact three-step enquiry process, genuine base/coverage, helpful FAQ, estimate/contact routes.
2. Services index: a clear chooser by need—cabin, finish, leather, specialist issue, whole vehicle—with concise scope and links to the original service slugs.
3. Five service pages: distinctive purpose, real related visuals, inclusion discussion, best-fit use case, realistic limits, three relevant FAQs and an estimate link. Each should work as a direct landing page.
4. Work: authentic supplied imagery/video, filters that reflect the visible assets, accessible full-image viewing, honest captions. Do not invent a vehicle model, treatment, location or before/after chronology just to make a case study sound specific.
5. Service areas: one useful page with seven city anchors. Distinct practical planning paragraphs, address-specific availability language, and no implied city offices.
6. About: mobile model, attention to work and local base. Add an owner biography only when directly supplied or confirmed; no generic years-of-experience claim.
7. Contact: phone, email, hours, coverage, direct Jobber estimate request, customer login, and what to include in an enquiry.
8. FAQ: useful questions grouped around booking, service choice, conditions and care. Do not invent water/power independence, same-day availability, cancellation policies, payment methods or drying times.
9. Privacy: plain account of the static website and third-party Jobber/GitHub services; do not claim “we collect nothing” if an external form collects contact data.
10. 404: clear recovery links, and working assets from any depth under the GitHub repository base path.

## Search implementation

Use static HTML for substantive content, unique titles/descriptions, one H1, semantic headings, crawlable normal links, descriptive image alt text, local asset paths, a sitemap, robots.txt and self-consistent canonical URLs. Preserve the five original route slugs for a future domain migration. GitHub Pages project hosting adds a repository base path; test deep links directly and after reload.

Use the actual GitHub URL as canonical while this is the live review host. Once the owner connects the domain, regenerate sitemap, canonical, social URLs and structured-data IDs together; configure the domain and redirect behavior deliberately. Do not publish a CNAME before DNS is ready.

Avoid seven thin city landing pages. Google explicitly identifies substantially similar regional pages that funnel to a common destination as a doorway pattern. The seven areas in `content.mjs` are intended as useful sections of one page. Create individual city pages later only when unique local projects, customer proof, logistics or service context make them independently useful. [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies#doorway-abuse)

Prioritize genuine work and first-hand information: annotated projects with treatment/condition details supplied by the business will be more useful than extra generic paragraphs. Good local search architecture creates clarity and relevance; it cannot guarantee a rank or substitute for real business evidence. [Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

Structured data should reflect visible verified facts. Use an Organization entity plus Service/BreadcrumbList where appropriate, and service-area values for coverage. Google’s LocalBusiness rich-result requirements include a physical address; the public website does not supply a storefront address. Do not invent one or copy a residential registry address into the site. LocalBusiness markup without required fields may be descriptive schema but must not be described as eligible for rich results. No fabricated Review/AggregateRating. [Google LocalBusiness documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business)

## Instagram and remaining source limitations

Focused searches for the business name, domain, public phone and email did not establish a verified Instagram profile. The existing public website's exposed navigation did not supply an Instagram link. Do not guess a handle or link to a similarly named business. Owner-supplied Drive media and original website imagery can anchor the portfolio without that dependency. Asset review is handled separately in this build.

Shell fetching was blocked by network policy initially and then returned HTTP 403 from the website. The in-app browser successfully loaded the exterior page and live Jobber form; the web research tool supplied the other service pages. A web-tool cache miss is not evidence that a public page is broken.

## Review gauntlet gates

- Every service route has a distinct title/H1, service scope, practical FAQ, relevant imagery and real enquiry link.
- Phone, email, hours and the seven areas match the source facts everywhere.
- No invented packages, prices, claims, credentials, reviews or owner identity.
- No dead menu item, fake contact confirmation, empty carousel, inaccessible lightbox or guessed social link.
- Shared property permissions and address-specific availability are discussed without inventing operational requirements.
- Every image/video loads from the public host; captions describe what can actually be seen.
- Desktop/mobile navigation, keyboard focus, FAQ disclosure, gallery filters, photo viewing, video controls, estimate routes and 404 recovery are independently checked.
- All normal URLs and service deep links load directly on GitHub Pages, have the correct base path and return usable content.

## Delivered copy

`content.mjs` exports `business`, five `services`, and seven `areas`. The original route slugs are retained. The copy deliberately tells customers how to choose, what to send with an estimate and which results require assessment. It is designed to support a portfolio-first presentation while retaining meaningful, crawlable service content.
