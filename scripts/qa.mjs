import fs from 'node:fs';
import path from 'node:path';

// Dependency-free audit of the built, public site. Never crawls source/private files.
// Usage: node scripts/qa.mjs [dist] [/repository-path/] [--report=research/qa-static.json]
const outputDir = path.resolve(process.argv[2] || 'dist');
const baseArg = process.argv[3] && !process.argv[3].startsWith('--') ? process.argv[3] : '/';
const basePath = '/' + baseArg.split('/').filter(Boolean).join('/') + (baseArg === '/' ? '' : '/');
const reportArg = process.argv.find(v => v.startsWith('--report='));
const failures = [], warnings = [];
const fail = (file, message) => failures.push({ file, message });
const warn = (file, message) => warnings.push({ file, message });
if (!fs.existsSync(outputDir)) {
  console.error(`Output directory missing: ${outputDir}`);
  process.exit(1);
}
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(item => {
  const p = path.join(dir, item.name);
  return item.isDirectory() ? walk(p) : [p];
});
const all = walk(outputDir);
const htmlFiles = all.filter(p => p.endsWith('.html'));
const relative = p => path.relative(outputDir, p).split(path.sep).join('/');
const attrs = source => {
  const result = {};
  const re = /([^\s=<>"']+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
  let match;
  while ((match = re.exec(source))) result[match[1].toLowerCase()] = match[2] ?? match[3] ?? match[4] ?? '';
  return result;
};
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b([^>]*)>`, 'gi'))].map(m => attrs(m[1]));
const clean = s => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const pages = new Map(htmlFiles.map(file => {
  const html = fs.readFileSync(file, 'utf8');
  return [file, { html, ids: [...html.matchAll(/\bid\s*=\s*["']([^"']+)["']/gi)].map(m => m[1]) }];
}));
const titles = new Map(), descriptions = new Map();
let localReferences = 0;
let canonicalHost = '';
for (const [file, { html }] of pages) {
  const canonical = tags(html, 'link').find(t => t.rel?.split(/\s+/).includes('canonical'))?.href;
  if (canonical) try { canonicalHost = new URL(canonical).origin; break; } catch {}
}
function resolveLocal(ref, file) {
  if (!ref || /^(data:|tel:|sms:|mailto:|javascript:|blob:)/i.test(ref)) return null;
  let raw = ref.replace(/&amp;/g, '&');
  if (/^(https?:)?\/\//i.test(raw)) {
    try { const u = new URL(raw, canonicalHost || 'https://local.invalid'); if (u.origin !== canonicalHost) return null; raw = u.pathname + u.search + u.hash; }
    catch { return null; }
  }
  const [preHash, fragment = ''] = raw.split('#');
  const pathname = preHash.split('?')[0];
  let decoded;
  try { decoded = decodeURIComponent(pathname); } catch { fail(relative(file), `Malformed URL: ${ref}`); return null; }
  if (decoded.startsWith('/') && basePath !== '/' && !decoded.startsWith(basePath)) {
    fail(relative(file), `Root-relative URL escapes deployment base ${basePath}: ${ref}`);
    return null;
  }
  const target = decoded.startsWith('/')
    ? path.join(outputDir, decoded.slice(basePath.length))
    : decoded ? path.resolve(path.dirname(file), decoded) : file;
  if (!target.startsWith(outputDir + path.sep) && target !== outputDir) {
    fail(relative(file), `URL escapes public output directory: ${ref}`); return null;
  }
  const candidates = [target, path.join(target, 'index.html'), target + '.html'];
  const resolved = candidates.find(p => fs.existsSync(p) && fs.statSync(p).isFile());
  return { target: resolved, fragment, ref };
}
function verifyRef(ref, file) {
  const local = resolveLocal(ref, file);
  if (!local) return;
  localReferences++;
  if (!local.target) return fail(relative(file), `Missing local URL: ${ref}`);
  if (local.fragment && pages.has(local.target)) {
    let fragment; try { fragment = decodeURIComponent(local.fragment); } catch { fragment = local.fragment; }
    if (!pages.get(local.target).ids.includes(fragment)) fail(relative(file), `Missing fragment #${fragment} in ${relative(local.target)}`);
  }
}
if (!htmlFiles.length) fail('.', 'No generated HTML pages');
for (const [file, { html, ids }] of pages) {
  const name = relative(file);
  if (!/^<!doctype html>/i.test(html.trimStart())) fail(name, 'Missing HTML5 doctype');
  if (!/<html\b[^>]*\blang=["'][^"']+["']/i.test(html)) fail(name, 'Missing document language');
  if (tags(html, 'h1').length !== 1) fail(name, `Expected one H1, found ${tags(html, 'h1').length}`);
  const title = clean(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '');
  if (!title) fail(name, 'Missing title');
  else if (titles.has(title)) fail(name, `Duplicate title with ${titles.get(title)}`);
  else titles.set(title, name);
  const meta = tags(html, 'meta');
  const description = meta.find(t => t.name?.toLowerCase() === 'description')?.content?.trim();
  if (!description) fail(name, 'Missing meta description');
  else if (descriptions.has(description)) warn(name, `Duplicate description with ${descriptions.get(description)}`);
  else descriptions.set(description, name);
  if (!meta.some(t => t.name?.toLowerCase() === 'viewport')) fail(name, 'Missing viewport meta');
  const canonical = tags(html, 'link').filter(t => t.rel?.split(/\s+/).includes('canonical'));
  if (canonical.length !== 1 || !/^https:\/\//.test(canonical[0]?.href || '')) fail(name, 'Expected one absolute HTTPS canonical');
  const seen = new Set();
  for (const id of ids) { if (seen.has(id)) fail(name, `Duplicate ID: ${id}`); seen.add(id); }
  for (const t of tags(html, '(?:a|area)')) {
    if (t.href === '#' || /^javascript:/i.test(t.href || '')) fail(name, `Placeholder/nonfunctional link: ${t.href}`);
    if (t.href) verifyRef(t.href, file);
    if (t.target === '_blank' && !/\bnoopener\b/.test(t.rel || '')) warn(name, `New-tab link missing noopener: ${t.href}`);
  }
  for (const t of tags(html, '(?:img|script|source|video|audio|iframe)')) {
    if (t.src) verifyRef(t.src, file);
    if (t.poster) verifyRef(t.poster, file);
    if (t.srcset && !t.srcset.startsWith('data:')) t.srcset.split(',').forEach(s => verifyRef(s.trim().split(/\s+/)[0], file));
  }
  for (const t of tags(html, 'link')) if (t.href && /\b(?:stylesheet|icon|preload|modulepreload)\b/.test(t.rel || '')) verifyRef(t.href, file);
  for (const img of tags(html, 'img')) {
    if (!Object.hasOwn(img, 'alt')) fail(name, `Image missing alt attribute: ${img.src}`);
    if (!img.width || !img.height) warn(name, `Image dimensions missing: ${img.src}`);
  }
  for (const t of tags(html, '[a-z][a-z0-9-]*')) {
    for (const attribute of ['aria-controls', 'aria-labelledby', 'aria-describedby']) {
      for (const id of (t[attribute] || '').split(/\s+/).filter(Boolean)) if (!seen.has(id)) fail(name, `${attribute} references missing #${id}`);
    }
  }
  const jsonLD = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)].filter(m => attrs(m[1]).type === 'application/ld+json');
  for (const m of jsonLD) try { JSON.parse(m[2]); } catch (e) { fail(name, `Invalid JSON-LD: ${e.message}`); }
  if (/\b(?:TODO|Lorem ipsum|Your company name|example@example\.com)\b/i.test(clean(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')))) fail(name, 'Placeholder copy detected');
}
for (const file of all.filter(p => p.endsWith('.css'))) {
  const css = fs.readFileSync(file, 'utf8');
  for (const match of css.matchAll(/url\(\s*["']?([^\s"')]+)["']?\s*\)/g)) verifyRef(match[1], file);
}
const sitemap = path.join(outputDir, 'sitemap.xml');
if (!fs.existsSync(sitemap)) warn('sitemap.xml', 'Sitemap missing');
else for (const m of fs.readFileSync(sitemap, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)) verifyRef(m[1], path.join(outputDir, 'index.html'));
if (!fs.existsSync(path.join(outputDir, 'robots.txt'))) warn('robots.txt', 'Robots file missing');
const assets = all.filter(p => /\.(?:avif|webp|png|jpe?g|gif|svg|mp4|webm|css|js)$/i.test(p)).map(p => ({ file: relative(p), bytes: fs.statSync(p).size }));
for (const asset of assets) if (asset.bytes > 2 * 1024 * 1024) warn(asset.file, `Large asset: ${(asset.bytes / 1024 / 1024).toFixed(2)} MB`);
const report = { generatedAt: new Date().toISOString(), outputDir, basePath, pages: htmlFiles.length, localReferences, publicBytes: all.reduce((sum, p) => sum + fs.statSync(p).size, 0), failures, warnings, largestAssets: assets.sort((a, b) => b.bytes - a.bytes).slice(0, 10) };
if (reportArg) { const reportPath = path.resolve(reportArg.slice('--report='.length)); fs.mkdirSync(path.dirname(reportPath), { recursive: true }); fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n'); }
for (const issue of failures) console.error(`FAIL ${issue.file}: ${issue.message}`);
for (const issue of warnings) console.warn(`WARN ${issue.file}: ${issue.message}`);
console.log(`${htmlFiles.length} pages; ${localReferences} local references; ${failures.length} failures; ${warnings.length} warnings; ${(report.publicBytes / 1024 / 1024).toFixed(2)} MB public output.`);
process.exitCode = failures.length ? 1 : 0;
