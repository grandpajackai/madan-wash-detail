# Independent media and visual QA

Reviewed 16 October 2026 against the actual delivered media, `scripts/build.mjs`, and `public/styles.css`. This review did not use the browser; browser composition, responsive behavior, and interaction checks belong to the separate QA reviewer.

## Result

The authentic BMW hero, alternating exterior/interior home selection, pale aqua accent, warm off-white canvas and deep navy create a coherent visual direction from the owner's logo. The actual-work photography is materially more credible than the original site's apparently generated imagery. The gallery captions describe visible vehicles and details without inventing package names, testimonials, client identities, quantified outcomes, coatings or paint correction. The videos play on request with native controls and posters; this is appropriate for performance and browsing comfort.

I approve the selected media direction once the single factual alt-text correction and three gallery substitutions below are applied. A neutral full-vehicle crop in the gallery provides useful contrast to the close, tilted BMW hero. No supplied original is a polished wide cinematic hero, so the split layout is a sensible way to make the real portrait photography feel intentional.

## Exact source corrections

In `scripts/build.mjs`, replace this string:

```js
alt:'Gray Lexus GX photographed outdoors in the Madan portfolio'
```

with:

```js
alt:'White Lexus GX photographed outdoors in the Madan portfolio'
```

The image is a white Lexus GX. The earlier `hero-lexus` working filename was already corrected to `hero-altima`; the gray sedan is a Nissan Altima. No obsolete filename remains in the delivered media.

Other descriptions were checked against the full-size files: blue BMW, Mercedes-Benz console, black Infiniti, chrome GMC wheel, gray Nissan Altima, Mercedes emblem, black Hyundai SUV, red Audi and white Tesla all match the imagery. The silver Ford pickup and gray Toyota Tacoma replacements below also match.

## Exact gallery substitutions

These substitutions remove the rear plate visible at the right edge of the Infiniti frame, the dark Audi image with a rear plate, and the weaker Mercedes emblem close-up. The emblem image itself contains a Mercedes-Benz dealer frame at its bottom edge, but no legible vehicle registration; its visual weakness, rather than privacy, is the reason to replace it.

Replace the current Infiniti object:

```js
{file:'infiniti-black-paint-finish.webp',label:'A finish worth a closer look.',category:'exterior',type:'Infiniti · Exterior',alt:'Black Infiniti with reflections visible in the exterior paint'},
```

with:

```js
{file:'mercedes-exterior-finish.webp',label:'A finish worth a closer look.',category:'exterior',type:'Mercedes-Benz · Exterior',alt:'Gray Mercedes-Benz photographed from the front in a residential driveway'},
```

Replace the current emblem object:

```js
{file:'mercedes-emblem-detail.webp',label:'Small details. Lasting impression.',category:'details',type:'Mercedes-Benz · Detail',alt:'Close photograph of the Mercedes-Benz emblem and surrounding finish'},
```

with:

```js
{file:'toyota-tacoma-exterior.webp',label:'Ready for the road ahead.',category:'exterior',type:'Toyota Tacoma · Exterior',alt:'Dark gray Toyota Tacoma photographed from the front outside a home'},
```

Replace the current Audi object:

```js
{file:'audi-evening-detail.webp',label:'The final look.',category:'exterior',type:'Audi · Exterior',alt:'Audi exterior photographed outdoors in evening light'}
```

with:

```js
{file:'ford-pickup-exterior.webp',label:'The final look.',category:'exterior',type:'Ford · Exterior',alt:'Silver Ford pickup photographed outside a home'}
```

All replacement files and corresponding `-small.webp` thumbnails already exist. The gallery retains two dedicated detail photographs (GMC wheel and BMW paint), one interior photo, and seven exteriors. The separate clean-carpet video supplies additional interior proof. Gallery counts are generated from `photos.length` and do not require manual adjustment.

Root has also replaced the rejuvenation service hero's Infiniti rear view with `chevrolet-suv-exterior.webp`. The visible Chevrolet SUV has glossy black paint and no prominent plate. Its alt should describe a black Chevrolet SUV, not an Infiniti.

## Hero crop refinement

Current source is `.hero-image>img { object-position:center 56% }`, with a separate mobile value of 58%. At a representative 710×650 desktop image area, 56% crops the BMW grille/emblem near the bottom. A quick direct photo crop comparison suggests `object-position:center 85%` or `90%` on desktop gives a more complete headlamp and grille while retaining the rich navy reflections. Keep the existing mobile position; its taller photo area reveals most of the portrait already. This is a composition suggestion for browser review, not a claimed rendering defect.

## Video optimization completed

`public/assets/interior-carpet-recovery.mp4` was overwritten with an optimized encoding of the same first eight seconds of the original source. Filename and pixel dimensions are unchanged.

- Before: 2,563,993 bytes.
- After: 1,393,973 bytes (1.33 MiB), a 45.6% reduction.
- 720×1280, H.264/yuv420p MP4, no audio, faststart, metadata removed.
- Encoded directly from the source MOV with CRF 29 and the slow preset.
- The optimized file decoded successfully; frames at 0, 4 and 7 seconds were visually checked. Carpet texture and seat-rail detail remain clear at the gallery's presentation size.
- `research/media-audit.md` now records the optimized size.

`tesla-exterior-reveal.mp4` remains 1,436,776 bytes, already under 2 MB. Both videos are local assets with posters and `preload="none"`; neither needs a third-party embed or an autoplay download.

## Source limitations retained honestly

Only the first Drive folder was publicly accessible. The other three returned sign-in pages. No official Instagram handle was verified. These limitations are recorded in the media audit and do not cause broken embeds or placeholders on the website. Original photo metadata does not independently establish the exact treatment, date or city for each vehicle, so neither captions nor alt text should invent those details. The machine-readable media manifest was updated to remove unsupported “after detailing” stage claims from descriptive alt text.
