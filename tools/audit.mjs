// Static site audit — link + model-path + consistency checker. Report only.
// Usage: node tools/audit.mjs   (run from repo root)
import { readFileSync, existsSync, statSync, readdirSync } from 'fs';
import { join, dirname, resolve, extname } from 'path';

const ROOT = resolve(process.cwd());
const PAGES = [
  'index.html', 'about.html', 'webelves.html', 'docs/index.html',
  'open/notebook/index.html', 'open/ide/index.html',
  'open/webelves/index.html', 'open/forge/index.html',
];
const APPS = ['open/notebook', 'open/ide', 'open/webelves', 'open/forge'];

const skip = h => !h || h.startsWith('http') || h.startsWith('//') || h.startsWith('data:')
  || h.startsWith('mailto:') || h.startsWith('#') || h.startsWith('javascript:') || h.startsWith('tel:');

function resolveLink(pageRel, href) {
  href = href.split('#')[0].split('?')[0];
  if (!href) return null;
  let p = href.startsWith('/') ? join(ROOT, href) : join(ROOT, dirname(pageRel), href);
  if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html');
  return p;
}

console.log('=== LINK CHECK (local href/src per page) ===');
let totalDead = 0;
for (const page of PAGES) {
  const abs = join(ROOT, page);
  if (!existsSync(abs)) { console.log(`\n[MISSING PAGE] ${page}`); totalDead++; continue; }
  const html = readFileSync(abs, 'utf8');
  const links = [...html.matchAll(/(?:href|src)\s*=\s*["']([^"']+)["']/gi)].map(m => m[1]);
  const dead = [];
  for (const l of new Set(links)) {
    if (skip(l)) continue;
    const t = resolveLink(page, l);
    if (t && !existsSync(t)) dead.push(l);
  }
  console.log(`\n${page}  (${links.length} refs)`);
  if (dead.length) { dead.forEach(d => console.log(`   DEAD → ${d}`)); totalDead += dead.length; }
  else console.log('   ok');
}

console.log('\n=== MODEL PATH CHECK (.gguf referenced by each app bundle) ===');
let modelIssues = 0;
for (const app of APPS) {
  const dir = join(ROOT, app, 'assets');
  if (!existsSync(dir)) { console.log(`\n${app}: no assets dir`); continue; }
  const ggufRefs = new Set();
  for (const f of readdirSync(dir)) {
    if (extname(f) !== '.js') continue;
    const txt = readFileSync(join(dir, f), 'utf8');
    for (const m of txt.matchAll(/["'`]([^"'`]*\.gguf)["'`]/gi)) ggufRefs.add(m[1]);
  }
  console.log(`\n${app}  (${ggufRefs.size} gguf refs)`);
  if (!ggufRefs.size) { console.log('   (none in bundle — may be configured at runtime)'); continue; }
  for (const ref of ggufRefs) {
    if (ref.startsWith('http')) { console.log(`   REMOTE → ${ref}`); continue; }
    // skip runtime-constructed / non-literal refs
    if (ref.includes('${') || ref.startsWith('res:') || ref === '.gguf' || !ref.includes('/') && ref.split('.').length < 2) {
      console.log(`   templ → ${ref}  (runtime string, not a static path)`); continue;
    }
    const cand = ref.startsWith('/') ? join(ROOT, ref) : join(ROOT, app, ref.replace(/^\.\//, ''));
    const ok = existsSync(cand);
    console.log(`   ${ok ? 'ok  ' : 'MISS'} → ${ref}  ${ok ? '' : '→ tried ' + cand.replace(ROOT, '')}`);
    if (!ok) modelIssues++;
  }
}

console.log('\n=== MODELS ON DISK ===');
for (const app of [...APPS, '.']) {
  const md = join(ROOT, app, 'models');
  if (!existsSync(md)) continue;
  const files = readdirSync(md).filter(f => f.endsWith('.gguf'));
  if (files.length) console.log(`${app}/models: ${files.join(', ')}`);
}

console.log('\n=== CONSISTENCY (brand strings in marketing pages) ===');
for (const page of ['index.html', 'about.html', 'webelves.html', 'docs/index.html']) {
  const abs = join(ROOT, page);
  if (!existsSync(abs)) continue;
  const h = readFileSync(abs, 'utf8');
  const css = (h.match(/(landing|site)\.css/g) || [])[0] || 'none';
  console.log(`${page}: theme=${css}  webelves=${(h.match(/webelves/gi)||[]).length}  codelves=${(h.match(/codelves/gi)||[]).length}`);
}

console.log(`\n=== SUMMARY ===\nDead local links: ${totalDead}\nMissing model paths: ${modelIssues}`);
console.log('Manual (browser) checks still needed: live inference, console errors, offline network leaks, a11y, responsive.');
