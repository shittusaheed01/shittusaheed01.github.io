import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve('out');
const html = readFileSync(resolve(root, 'index.html'), 'utf8');

test('the exported page contains readable portfolio content without JavaScript', () => {
  const markup = html.replace(/<script[\s\S]*?<\/script>/g, '');
  for (const text of ['Saheed Shittu', 'SmartCare', 'Bookum', 'Ifako-Ijaiye', 'Sunsystems']) assert.ok(markup.includes(text), `Missing visible content: ${text}`);
  assert.equal((markup.match(/<h1[ >]/g) || []).length, 1, 'Expected one main heading');
  assert.ok(!markup.includes('opacity:0'), 'Content must not depend on animation to become visible');
});

test('every in-page navigation link has a real destination', () => {
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
  const links = [...html.matchAll(/href="#([^"]*)"/g)].map(match => match[1]);
  assert.ok(links.length > 0);
  for (const id of links) assert.ok(ids.has(id), `Broken anchor: #${id}`);
});

test('all local page assets exist in the static export', () => {
  const paths = [...html.matchAll(/(?:src|href)="(\/[^"?#]+)(?:[?#][^"]*)?"/g)].map(match => match[1]);
  for (const path of paths) assert.ok(existsSync(resolve(root, '.' + decodeURIComponent(path))), `Missing exported asset: ${path}`);
});

test('search metadata and contact routes are present', () => {
  assert.ok(html.includes('rel="canonical"'));
  assert.ok(html.includes('application/ld+json'));
  assert.ok(html.includes('href="mailto:shittusaheed01@gmail.com"'));
  assert.ok(html.includes('href="tel:+2348133023119"'));
  for (const name of ['robots.txt', 'sitemap.xml', 'og-image.jpg', 'favicon.svg']) assert.ok(existsSync(resolve(root, name)), `Missing ${name}`);
});


const preferredName = 'Saheed Shittu';
const canonical = 'https://shittusaheed01.github.io/';
const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  .map(match => JSON.parse(match[1]));
const entities = scripts.flatMap(script => script['@graph'] ?? [script]);

test('the preferred public name is in the search title, description, and visible main heading', () => {
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const heading = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]
    .replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  assert.ok(title?.startsWith(preferredName), `Name missing from title: ${title}`);
  assert.ok(heading?.includes(preferredName), `Name missing from h1: ${heading}`);
  assert.ok(description?.includes(preferredName), 'Name missing from search description');
});

test('the profile connects one named person to the website and existing professional accounts', () => {
  const page = entities.find(entity => entity['@type'] === 'ProfilePage');
  assert.ok(page, 'Missing ProfilePage structured data');
  assert.equal(page.url, canonical);
  assert.equal(page.mainEntity['@type'], 'Person');
  assert.equal(page.mainEntity.name, preferredName);
  assert.ok(page.mainEntity.alternateName.includes('Saheed Ademola Shittu'));
  assert.ok(page.mainEntity.alternateName.includes('Saheed Shittu'));
  assert.ok(page.mainEntity.alternateName.includes('Saheed Shittu Ademola'));
  assert.ok(page.mainEntity.sameAs.includes('https://github.com/shittusaheed01'));
  assert.ok(page.mainEntity.sameAs.includes('https://www.linkedin.com/in/shittusaheed01/'));
  const website = entities.find(entity => entity['@type'] === 'WebSite');
  assert.equal(website?.url, canonical);
  assert.equal(website?.publisher['@id'], page.mainEntity['@id']);
  assert.equal(page.isPartOf['@id'], website['@id']);
});

test('canonical, social previews, sitemap, and robots agree on the public URL', () => {
  // Next.js omits the trailing slash on an origin URL; URL normalization
  // treats https://example.com and https://example.com/ as the same address.
  const canonicalHref = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  const socialHref = html.match(/property="og:url" content="([^"]+)"/)?.[1];
  assert.ok(canonicalHref, 'Missing canonical URL');
  assert.ok(socialHref, 'Missing Open Graph URL');
  assert.equal(new URL(canonicalHref).href, canonical);
  assert.equal(new URL(socialHref).href, canonical);
  assert.ok(html.includes(`property="og:title" content="${preferredName}`));
  assert.ok(html.includes(`name="twitter:title" content="${preferredName}`));
  const sitemap = readFileSync(resolve(root, 'sitemap.xml'), 'utf8');
  assert.ok(sitemap.includes(`<loc>${canonical}</loc>`));
  const robots = readFileSync(resolve(root, 'robots.txt'), 'utf8');
  assert.ok(robots.includes('Allow: /'));
  assert.ok(robots.includes(`Sitemap: ${canonical}sitemap.xml`));
  assert.ok(!html.match(/<meta\b[^>]*(?:robots|googlebot)[^>]*noindex/i));
  assert.equal(readFileSync(resolve(root, 'google493186a87c1e16f8.html'), 'utf8').trim(),
    'google-site-verification: google493186a87c1e16f8.html');
});

const academicPath = resolve(root, 'academic-portfolio.html');

test('the academic portfolio exports its verified public profile', () => {
  assert.ok(existsSync(academicPath), 'Missing academic portfolio export');
  const academicHtml = readFileSync(academicPath, 'utf8');
  const markup = academicHtml.replace(/<script[\s\S]*?<\/script>/g, '');
  for (const text of [
    'Saheed Shittu',
    'Electrical and Electronics Engineering',
    'Comprehensive eigenvalue-based assessment',
    'Embedded Systems (Arduino)',
    'Renewable Power and Electricity Systems',
  ]) assert.ok(markup.includes(text), `Missing academic content: ${text}`);
  for (const privateText of ['Recommendation Letter', 'Statement of Purpose', 'referee', 'in progress']) {
    assert.ok(!markup.toLowerCase().includes(privateText.toLowerCase()), `Private or incomplete content found: ${privateText}`);
  }
});

