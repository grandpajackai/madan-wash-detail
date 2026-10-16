# Independent live browser release check

Date: 16 October 2026. Site: [Madan Wash & Detail on GitHub Pages](https://grandpajackai.github.io/madan-wash-detail/). Reviewer: independent QA/design agent using Chrome through CUA.

**Verdict: approved to share for owner feedback. No unresolved defects found in the tested live scope.** The published result preserves the premium, restrained editorial design reviewed locally, with the owner’s logo, authentic portfolio imagery and functioning estimate paths.

## Live route coverage

Every generated HTML route was directly loaded at **1365×900 desktop** and **390×844 phone** dimensions: home, services, all five service details, work, about, service areas, contact, FAQs, privacy, HTML sitemap and `404.html`. All 30 route/viewport checks passed, with correct page titles/headings, no horizontal overflow and no broken loaded images. Raw observations are saved in [qa-live-results.json](qa-live-results.json).

The nested engine-bay service URL was reloaded directly on the live host. Its page content, local font, styles and responsive heading loaded correctly. A deliberately nonexistent route served the branded 404 page with working styles; selecting “Back to home” recovered to the live homepage.

## Live flow verification

- Phone menu opens/closes, updates its expanded state, closes with Escape, and navigates to Our work with the menu closed.
- Portfolio filtering correctly reports “1 photograph” for the interior selection. The dialog displays the selected photo and the corrected caption, handles next/previous and arrow-key navigation within a filtered selection, closes with Escape, and restores focus to the original image button.
- FAQ answers open by click and close with Space.
- Empty text preparation is blocked by native validation. Valid synthetic vehicle/location details produce the expected encoded SMS URL and focus its action. Editing those details hides the stale link and ready message. No native messaging action was opened and no message was sent.
- Mobile form fields render at 16px. The contact-page sticky estimate action uses the verified Jobber request destination instead of looping back to the current page. That same external form was separately confirmed to load during the local gauntlet; no request was submitted.
- Both published portfolio videos loaded and played using their native controls. Tesla: 6.4 seconds; interior: 8 seconds. Both reached `readyState=4`, playback time advanced, and neither reported a media error.
- No application JavaScript console warnings/errors were observed during normal route and flow checks. Browser extension logs were excluded by their extension source. The intentional missing-route test correctly exercises an HTTP 404 response.

## Evidence and limits

- [Live desktop homepage](screenshots/live-home-desktop.jpg)
- [Live phone homepage](screenshots/live-home-mobile.jpg)
- [Earlier detailed design review and corrected findings](qa-browser.md)

This is a verified release check, not a guarantee covering every device, native phone/SMS/email app, network condition, future hosting change or third-party outage. Actual business communications were deliberately not sent. The remaining design opportunity is richer owner-approved project stories and service-specific photography; those are future content improvements, not functionality defects.

Browser viewport override was reset and browser ownership returned to the parent agent after testing.
