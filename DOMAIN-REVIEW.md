# Custom-domain release review

Completed October 16, 2026.

Production: https://madanwashanddetail.com/

## Configuration

The owner connected Namecheap DNS and the GitHub Pages custom domain. The domain's four apex A records match GitHub Pages and `www` points to `grandpajackai.github.io`. GitHub reports an approved certificate covering the apex and `www`, with HTTPS enforced.

The generator now defaults to the production domain and root path `/`. Navigation, image/video/font paths, canonical and social URLs, schema, sitemap and robots are generated consistently. `public/CNAME` preserves the domain in `docs/CNAME` on every build. The normal `npm run build` and `npm run check` commands now target production settings. The repository homepage and README point to the custom domain.

The original five service slugs, `info@madanwashanddetail.com`, telephone and external Jobber estimate/client-login URLs are preserved. Existing Namecheap email-forwarding MX and SPF records were inspected and remain in place; no email DNS changes were made by this task. Native contact delivery was not performed.

## Verification

- Static audit: 15 HTML pages, 549 local references, zero failures and zero warnings.
- Independent domain metadata audit: all 15 pages use root paths and the correct domain, with valid canonicals, social data, 33 schemas, 14 sitemap entries, robots and CNAME files. No old GitHub project path or old Gmail address remains in public output.
- Final live HTTP crawl: 14 indexed pages, 48 requests, zero failures. Includes assets/media availability, nested no-slash routing and the branded HTTP 404 page.
- Redirect checks: `www` and HTTP redirect to the HTTPS apex domain. Original GitHub review URLs for home and contact resolve to the matching custom-domain pages.
- Independent browser review: all 15 pages at desktop and phone widths; nested reload, portfolio filters/dialog, FAQ, menu and contact preparation. All 10 photographs and both published videos loaded successfully. No application console errors or unresolved functionality defects were found in tested scope.

An initial concurrent asset probe encountered eight transport timeouts without HTTP error responses. Individual rechecks returned 200, the complete repeat crawl passed unchanged, and browser checks confirmed the images/posters/videos. No website resource was missing.

Detailed browser evidence: `research/qa-domain-browser.md`. Current HTTP results: `research/qa-live.json`.
