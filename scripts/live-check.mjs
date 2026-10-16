import fs from 'node:fs';
const base = new URL(process.argv[2] || 'https://grandpajackai.github.io/madan-wash-detail/');
const failures = [], checked = [];
const started = new Date().toISOString();
async function request(url, expected=200) {
  try {
    const response = await fetch(url, { signal:AbortSignal.timeout(30000) });
    const body = await response.text();
    checked.push({ url:String(url), status:response.status, bytes:body.length });
    if (response.status !== expected) failures.push(`${url}: expected ${expected}, received ${response.status}`);
    return { response,body };
  } catch(error) { failures.push(`${url}: ${error.message}`); return {body:''}; }
}
const { body:sitemap } = await request(new URL('sitemap.xml',base));
const pages = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
if(pages.length!==14) failures.push(`Expected 14 indexed pages, got ${pages.length}`);
const assets = new Set([new URL('robots.txt',base).href]);
for(const url of pages) {
 const { body } = await request(url);
 if(!/<h1\b/i.test(body)) failures.push(`${url}: missing heading`);
 if(body.includes('A small detour')) failures.push(`${url}: custom 404 rendered for an indexed page`);
 for(const match of body.matchAll(/(?:src|href|poster)="([^"]+)"/g)) {
   const ref = match[1].replace(/&amp;/g,'&');
   if(/^(mailto:|tel:|sms:|#)/.test(ref)) continue;
   const target = new URL(ref,url);
   if(target.origin===base.origin && !target.hash && target.pathname.startsWith(base.pathname) && /\.(?:webp|png|ttf|css|js|mp4|txt)$/.test(target.pathname)) assets.add(target.href);
 }
 for(const match of body.matchAll(/srcset="([^"]+)"/g)) for(const ref of match[1].split(',')) assets.add(new URL(ref.trim().split(/\s+/)[0],url).href);
}
const queue=[...assets];
await Promise.all(Array.from({length:5},async()=>{ while(queue.length) {const url=queue.shift();try{const r=await fetch(url,{method:'HEAD',signal:AbortSignal.timeout(30000)});checked.push({url,status:r.status});if(!r.ok)failures.push(`${url}: ${r.status}`);}catch(e){failures.push(`${url}: ${e.message}`);}}}));
const {body:notFound}=await request(new URL('this-page-does-not-exist/',base),404);
if(!notFound.includes('Let’s get you')) failures.push('Missing custom 404 recovery page');
// Original source links omit a trailing slash; Pages should redirect to the real page.
const nested=new URL('services/interior-car-detailing',base);
const {body:direct,response:directResponse}=await request(nested);
if(!direct.includes('Interior car detailing')||!directResponse?.url.endsWith('/interior-car-detailing/')) failures.push('Nested no-slash route did not resolve correctly');
const result={started,finished:new Date().toISOString(),base:String(base),pages:pages.length,checks:checked.length,failures,checked};
fs.writeFileSync('research/qa-live.json',JSON.stringify(result,null,2));
console.log(`${pages.length} indexed pages; ${checked.length} live requests; ${failures.length} failures`);
failures.forEach(f=>console.error(f));
process.exitCode=failures.length?1:0;
