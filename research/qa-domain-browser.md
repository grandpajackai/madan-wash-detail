# Custom-domain browser release check

Date: 16 October 2026. Deployment reviewed: `b82bf33`. Live site: [madanwashanddetail.com](https://madanwashanddetail.com/). Reviewer: independent QA/design agent using Chrome through CUA.

**Browser verdict: approved. No unresolved defects were found in the tested custom-domain scope.** The published design, responsive behavior and customer flows match the reviewed release. No website files were changed during this audit and no real business communication was sent.

## Domain and route checks

- All 15 generated HTML routes were directly loaded at **1365×900** and **390×844**, for 30 route/viewport checks: home, services, five service details, work, about, service areas, contact, FAQs, privacy, sitemap and `404.html`.
- Every page had its expected title and heading. Document width matched viewport width; no horizontal overflow or broken loaded images were observed.
- Every page canonical uses `https://madanwashanddetail.com/`. No inspected link/image source retained the old GitHub hostname or `/madan-wash-detail/` project prefix.
- The nested engine-bay service URL was directly reloaded. Content, Manrope typography, layout and root-path assets loaded correctly.
- Opening `https://www.madanwashanddetail.com/` redirected to `https://madanwashanddetail.com/` and displayed the new homepage.
- Opening the previous review URL, `https://grandpajackai.github.io/madan-wash-detail/`, redirected to the same custom-domain homepage.
- Normal browser route/flow checks produced no application console warnings or errors. Browser-extension logs were excluded by their extension source.

## Customer flow checks

- Phone menu opens, updates `aria-expanded`, closes with Escape, and navigates to Our work with the menu closed.
- Portfolio filters report 7 exterior, 1 interior, 2 details and 10 total photographs. Each of the 10 image buttons was opened and closed to exercise gallery loading. Every inspected gallery `currentSrc` completed with nonzero natural width and no image error, including the selected small-image variants.
- Portfolio dialog advances within the filtered set using the next control and ArrowRight, closes with Escape, and returns focus to its original image button. Correct caption punctuation and singular count are present.
- FAQ disclosure opens by click and closes with Space.
- Contact-page email links use `mailto:info@madanwashanddetail.com`. Telephone links use `tel:+13059045114`. Estimate and contact-page sticky actions point to the verified Jobber form. Email delivery, phone calls and business requests were not initiated.
- Empty text preparation triggers required-field validation and keeps the messaging action hidden. Valid synthetic vehicle/location details create the expected encoded SMS URL. Editing the details hides the stale action and ready instruction. No message was sent.

## Portfolio media verification

Both video posters displayed successfully. Both published MP4s were played using their native controls from the custom domain:

| Video | Observed playback | Ready state | Media error |
| --- | --- | --- | --- |
| Tesla exterior | Reached 6.4-second end | 4 | None |
| Interior carpet | Advanced to 6.95 seconds of 8 | 4 | None |

The parent agent reported transient transport failures during an initial concurrent HTTP HEAD sweep. Those failures did not reproduce as missing media or playback errors in the browser. The parent subsequently completed a repeated 48-request HTTP crawl with zero failures and individual media rechecks returning HTTP 200, without source changes. Its [separate domain review](../DOMAIN-REVIEW.md) records certificate approval for apex and www, HTTPS enforcement and infrastructure evidence.

## Evidence and limits

- [Domain desktop homepage](screenshots/domain-home-desktop.jpg)
- [Domain phone homepage](screenshots/domain-home-mobile.jpg)
- [Raw route, redirect and media observations](qa-domain-results.json)

This check covers observed browser behavior at the stated widths. It does not test delivery through native messaging/email apps, every device, every network condition, or future third-party availability. The premium visual direction remains approved; richer verified project stories and dedicated service photography remain optional content improvements.

Browser viewport override was reset and browser ownership returned after testing.
