import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const failures = [];
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
const npmrc = readFileSync(join(root, '.npmrc'), 'utf8').trim();
const nodeVersion = readFileSync(join(root, '.node-version'), 'utf8').trim();
const config = readFileSync(join(root, 'astro.config.mjs'), 'utf8');
const lock = readFileSync(join(root, 'pnpm-lock.yaml'), 'utf8');

if (pkg.packageManager !== 'pnpm@9.15.5') failures.push('packageManager must be pnpm@9.15.5');
if (pkg.engines?.pnpm !== '9.15.5') failures.push('engines.pnpm must be 9.15.5');
if (pkg.engines?.node !== '24.19.0' || nodeVersion !== '24.19.0') failures.push('Node version mismatch');
if (npmrc !== 'only-built-dependencies=esbuild') failures.push('.npmrc build allowlist mismatch');
if (existsSync(join(root, 'pnpm-workspace.yaml'))) failures.push('pnpm-workspace.yaml should not exist for this single-package project');
if (!lock.includes("lockfileVersion: '9.0'")) failures.push('pnpm lockfile must use lockfile v9');

for (const [group, deps] of Object.entries({dependencies: pkg.dependencies ?? {}, devDependencies: pkg.devDependencies ?? {}})) {
  for (const [name, version] of Object.entries(deps)) {
    if (!lock.includes(`${name.includes('@') ? `'${name}'` : name}:`) || !lock.includes(`specifier: ${version}`)) {
      failures.push(`lockfile importer does not visibly pin ${name}@${version}`);
    }
  }
}

const skip = new Set(['node_modules', '.git']);
const forbidden = new RegExp(['example', '\\.com|local', 'host|chrome-extension:', '\\/\\/'].join(''), 'i');
function scan(dir) {
  for (const name of readdirSync(dir)) {
    if (skip.has(name)) continue;
    const path = join(dir, name);
    const st = statSync(path);
    if (st.isDirectory()) scan(path);
    else if (!path.endsWith('pnpm-lock.yaml') && !/\.(png|jpg|jpeg|webp|gif|ico)$/i.test(path)) {
      const text = readFileSync(path, 'utf8');
      if (forbidden.test(text)) failures.push(`forbidden placeholder/protocol in ${relative(root, path)}`);
    }
  }
}
scan(root);

const siteMatch = config.match(/const SITE = '([^']*)';/);
const site = siteMatch?.[1] ?? '';
const dist = join(root, 'dist');
if (existsSync(dist)) {
  scan(dist);
  const sitemap = join(dist, 'sitemap-index.xml');
  if (!site && existsSync(sitemap)) failures.push('sitemap exists even though SITE is empty');
  if (site && existsSync(sitemap)) {
    const xml = readFileSync(sitemap, 'utf8');
    if (/<lastmod>/i.test(xml)) failures.push('sitemap contains lastmod');
    if (!xml.includes(site)) failures.push('sitemap URLs do not derive from configured SITE');
  }
}

if (failures.length) {
  console.error('AUDIT FAILED');
  for (const item of failures) console.error(`- ${item}`);
  process.exit(1);
}
console.log('AUDIT OK');
console.log(`SITE: ${site || '(empty; sitemap integration disabled)'}`);
