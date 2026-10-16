# Independent browser gauntlet — local release review

Date: 16 October 2026. Reviewer: independent QA/design agent. Preview: `http://127.0.0.1:4173/madan-wash-detail/`. Browser: Chrome through CUA. Desktop checks at 1365×900, with the home hero also inspected at the normal 1918px desktop width. Phone checks at 390×844 and 320×740.

## Verdict

**Approved for owner feedback after the live GitHub Pages smoke check.** The final local build has no unresolved P0/P1/P2 defects in the tested scope. It feels like a coherent, premium automotive portfolio: clear type hierarchy, restrained aqua/navy brand treatment, purposeful image scale, authentic work, legible mobile layouts, and a direct estimate path. The desktop BMW crop now includes more of the front of the car and its emblem; it is substantially stronger than the original crop.

This approval is based on observed behavior and design judgment, not a claim that every possible browser, native messaging app, network condition, or future third-party outage has been tested. Native phone/SMS/email handoff delivery was not performed. No real enquiry or business contact was submitted.

## Route sweep

Each of the following 15 HTML pages was loaded directly in the browser at desktop, 390px and 320px widths. Checks included the rendered main heading, page landmarks, document width and loaded-image errors. All desktop/390px checks passed on the first sweep. The narrow service-page defects below were fixed and retested.

| Page | Desktop | 390px | Final 320px |
| --- | --- | --- | --- |
| Home | Pass | Pass | Pass |
| Services | Pass | Pass | Pass |
| Interior detailing | Pass | Pass | Pass |
| Exterior detailing | Pass | Pass | Pass |
| Leather care | Pass | Pass | Pass after fix |
| Engine bay / specialist cleaning | Pass | Pass | Pass after fix |
| Vehicle rejuvenation | Pass | Pass | Pass after fix |
| Our work | Pass | Pass | Pass |
| About | Pass | Pass | Pass |
| Service areas | Pass | Pass | Pass |
| Contact / estimate | Pass | Pass | Pass |
| FAQs | Pass | Pass | Pass |
| Privacy | Pass | Pass | Pass |
| HTML sitemap | Pass | Pass | Pass |
| 404 recovery page | Pass | Pass | Pass |

No loaded-image errors remained. No application console warnings or errors were observed. Chrome extension console warnings were identified by their `chrome-extension://` source and excluded from application findings.

## Functional checks

- Phone navigation opens with correctly updated `aria-expanded`, exposes comfortable full-width links, closes on Escape, and returns focus to its button. Choosing Our work closes the menu and reaches the correct route.
- Portfolio filters update visible cards, pressed state and live count. Final gallery contains 10 photographs: 7 exterior, 1 interior, 2 details. Interior correctly reports “1 photograph.”
- Portfolio dialog opens the selected photograph, handles next/previous navigation and arrow keys, wraps within the filtered selection, closes on Escape or Close, restores the opener’s focus, and unlocks page scrolling. At 320px, the dialog and controls remain inside the viewport.
- FAQ disclosure opens by click and toggles with the Space key. Answers remain readable.
- Empty text preparation blocks submission, exposes required-field validation, and focuses the missing service field. Valid synthetic details reveal an encoded SMS link and move focus to its action. No message is sent by this step. Editing a field after preparation hides both the stale link and ready instruction.
- The final contact-page header and sticky estimate actions point directly to the verified Jobber URL in a new tab instead of reloading the current contact page.
- Jobber destination loaded its actual contact-information form and three-stage progress indicator. No information was entered or submitted there. Its own nonblocking GraphQL fragment warning is third-party behavior.
- Both local portfolio videos were played using their native controls. Tesla: 6.4 seconds; interior: 8 seconds. Both reached media `readyState=4`, advanced playback time, and had no media error. They remain muted and do not autoplay.
- Telephone, email, service navigation, footer destinations, service-area anchors and the 404 recovery action use the expected destinations. The separate static audit covers every internal route/fragment/asset reference.

## Defects caught and resolved

| Severity | Finding | Final result |
| --- | --- | --- |
| P2 | At 320px, “contamination” expanded the service hero to 371px and clipped the heading. Leather and rejuvenation also had a 1px overflow. | Narrow responsive title sizing, zero grid-item minimum width and safe wrapping. All three retested at 320px with document width exactly 320px. |
| P2 | Contact-page sticky estimate action returned to the current contact route instead of progressing to a request. | Direct Jobber request URL in a new tab. Verified final header and sticky link attributes. |
| P2 | Prepared text could remain visible after its source fields changed. | Input changes hide the prepared link and instruction. Verified before/after state. |
| P3 | Single interior result displayed “1 photographs.” | Correct singular count. |
| P3 | Lightbox label and vehicle type were glued together. | Caption components separated by “ · ”. |

## Design observations

The restrained palette, repeated typography and considered spacing give the site a recognizable identity. The work is the main visual story and the owner’s material is more credible than generated luxury-car imagery. Mobile maintains the same hierarchy, and the sticky call/estimate actions make the next step easy.

The best future content upgrade is a small set of photographed, verified project stories: vehicle, requested service, condition, actual work and outcome, with owner-approved details. Dedicated engine-bay and leather-care photographs would also make their service pages more specific; the current engine/specialist hero is an authentic wheel-detail photograph, clearly described as such. These are content improvements, not current functionality blockers. Native iOS form focus zoom was not tested; using 16px form text would be a sensible preventive polish adjustment if not already applied.

## Evidence

- [Desktop homepage](screenshots/home-desktop.jpg)
- [Phone homepage](screenshots/home-mobile.jpg)
- [Phone service page](screenshots/service-mobile.jpg)

Browser viewport override was reset after testing. Live GitHub Pages routing, direct nested navigation, media requests and 404 behavior still require the post-deployment smoke check.
