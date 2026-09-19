# Academic Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a standalone, search-ready academic portfolio at `/academic-portfolio` for Saheed Shittu.

**Architecture:** Keep academic facts in `lib/academic-portfolio.ts`, separate from the professional `lib/portfolio.ts`. Add a route-specific layout for academic metadata and structured data, a server-rendered page, and a CSS module scoped exclusively to that page. Add the route to the static sitemap and assert the exported HTML contract in the existing Node test suite.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, CSS Modules, Node.js built-in test runner.

**Spec:** `docs/superpowers/specs/2026-09-19-academic-portfolio-design.md`

## Global Constraints

- The public route is exactly `/academic-portfolio`.
- Use `Saheed Shittu` as the public name and the 18 September 2026 Academic CV as the source of record.
- Do not import academic data from `lib/portfolio.ts` or add a professional-to-academic navigation link.
- Publish only completed credentials: Embedded Systems (Arduino), 2019; and Renewable Power and Electricity Systems, University of Colorado Boulder via Coursera, 2026.
- Exclude application statements, recommendation letters, referee details, identification material, scholarship plans, application deadlines, and courses in progress.
- The page must be static, keyboard accessible, responsive at 375 px/768 px/1024 px/1440 px, and respect `prefers-reduced-motion`.
- The route needs its own canonical URL: `https://shittusaheed01.github.io/academic-portfolio/`.

## Review Focus

- Direct static-export request: `out/academic-portfolio/index.html` exists and contains readable academic content without JavaScript; tested in Task 3.
- Route isolation: the academic page has academic metadata and does not render the professional portfolio navigation; tested in Task 3.
- Source boundaries: page markup never contains private application/referee material or incomplete-course language; tested in Task 3.
- Search identity: canonical URL, Open Graph URL, `ProfilePage`, and `Person` structured data agree on the academic route and Saheed Shittu; tested in Task 3.
- Responsive accessibility: navigation anchors have matching section IDs, visual contrast remains readable, focus indicators are visible, and motion is disabled for users who request it; tested in Task 2 and Task 3.

---

## File Structure

- Create `lib/academic-portfolio.ts`: academic-only content types, public profile facts, completed certificates, publication, project, and teaching record.
- Create `app/academic-portfolio/layout.tsx`: route metadata and academic JSON-LD.
- Create `app/academic-portfolio/page.tsx`: semantic, server-rendered academic profile sections and internal navigation.
- Create `app/academic-portfolio/academic-portfolio.module.css`: page-scoped light editorial visual system and responsive behavior.
- Modify `app/sitemap.ts`: emit both the existing root URL and the academic URL.
- Modify `tests/export.test.mjs`: verify the academic static export, metadata, structured data, source boundaries, certificates, anchors, and sitemap entry.

### Task 1: Define the academic content contract and export tests

**Files:**
- Create: `lib/academic-portfolio.ts`
- Modify: `tests/export.test.mjs`

**Interfaces:**
- Produces: `academicProfile`, `academicNavigation`, `academicMetrics`, `academicResearchInterests`, `academicPublication`, `academicProject`, `academicTeaching`, and `academicCertificates` exports used by the academic route.
- Consumes: the static directory `out/academic-portfolio/index.html` produced by `pnpm build`.

- [ ] **Step 1: Add the failing academic export contract**

Append this helper and test to `tests/export.test.mjs`:

```js
const academicPath = resolve(root, 'academic-portfolio', 'index.html');

test('the academic portfolio exports its verified public profile', () => {
  assert.ok(existsSync(academicPath), 'Missing academic portfolio export');
  const academicHtml = readFileSync(academicPath, 'utf8');
  const markup = academicHtml.replace(/<script[\\s\\S]*?<\\/script>/g, '');
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
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `pnpm build && node --test --test-name-pattern="academic portfolio exports" tests/export.test.mjs`  
Expected: FAIL with `Missing academic portfolio export`.

- [ ] **Step 3: Define the verified academic data module**

Create `lib/academic-portfolio.ts` with readonly records and these exact public facts:

```ts
export const academicProfile = {
  name: 'Saheed Shittu',
  email: 'shittusaheed01@gmail.com',
  location: 'Nigeria',
  discipline: 'Electrical and Electronics Engineering',
  summary: 'First-class electrical engineering graduate researching stable, resilient electricity systems.',
  canonicalUrl: 'https://shittusaheed01.github.io/academic-portfolio/',
} as const;

export const academicCertificates = [
  { title: 'Embedded Systems (Arduino)', issuer: 'Professional development', year: '2019' },
  { title: 'Renewable Power and Electricity Systems', issuer: 'University of Colorado Boulder via Coursera', year: '2026' },
] as const;
```

Add the CV-backed education, research interests, publication, inverter project, teaching/research-assistant record, metrics, and internal anchors as typed readonly data. Do not include any private or incomplete items.

- [ ] **Step 4: Run type checking**

Run: `pnpm run typecheck`  
Expected: PASS.

- [ ] **Step 5: Commit the contract and source-of-record data**

```bash
git add lib/academic-portfolio.ts tests/export.test.mjs
git commit -m "test: define academic portfolio export contract"
```

### Task 2: Build the independent academic route and scoped visual system

**Files:**
- Create: `app/academic-portfolio/layout.tsx`
- Create: `app/academic-portfolio/page.tsx`
- Create: `app/academic-portfolio/academic-portfolio.module.css`

**Interfaces:**
- Consumes: the named exports from `lib/academic-portfolio.ts`.
- Produces: server-rendered `app/academic-portfolio/page.tsx` with semantic sections whose IDs exactly equal `academicNavigation[].href` without the leading `#`.

- [ ] **Step 1: Add route metadata and academic structured data**

Implement `app/academic-portfolio/layout.tsx` with `Metadata` that has this identity:

```ts
export const metadata: Metadata = {
  title: 'Saheed Shittu | Electrical Engineering Research Portfolio',
  description: 'Academic portfolio of Saheed Shittu, an electrical engineering graduate researching power-system stability, renewable-energy integration, smart grids, and sustainable electricity systems.',
  alternates: { canonical: academicProfile.canonicalUrl },
  openGraph: {
    type: 'website',
    url: academicProfile.canonicalUrl,
    title: 'Saheed Shittu | Electrical Engineering Research Portfolio',
    description: 'Research, publication, teaching, projects, and academic credentials.',
  },
};
```

Render a route-local `application/ld+json` script containing a `ProfilePage` whose `url` is `academicProfile.canonicalUrl` and whose `mainEntity` is a `Person` named `Saheed Shittu`. Escape `<` before injecting JSON. Do not import `profile` or `site` from the professional portfolio.

- [ ] **Step 2: Implement semantic, static academic sections**

Use data from `lib/academic-portfolio.ts` to render this exact outline:

```tsx
<main className={styles.page}>
  <a className={styles.skipLink} href="#main-content">Skip to content</a>
  <header className={styles.siteHeader}>...</header>
  <section id="main-content" className={styles.hero}>...</section>
  <section id="research" aria-labelledby="research-title">...</section>
  <section id="publication" aria-labelledby="publication-title">...</section>
  <section id="projects" aria-labelledby="projects-title">...</section>
  <section id="teaching" aria-labelledby="teaching-title">...</section>
  <section id="education" aria-labelledby="education-title">...</section>
  <section id="certifications" aria-labelledby="certifications-title">...</section>
  <footer id="contact">...</footer>
</main>
```

Use one visible `<h1>`, heading levels in order, a DOI link for the verified publication, and a `mailto:shittusaheed01@gmail.com` contact link. Internal navigation must only use the defined academic section IDs. Do not add any link to the professional portfolio.

- [ ] **Step 3: Implement the academic CSS module**

Create `academic-portfolio.module.css` using local tokens and these foundation rules:

```css
.page {
  --ink: #18181b;
  --paper: #fafafa;
  --muted: #475569;
  --rule: #e4e4e7;
  --accent: #2563eb;
  min-height: 100vh;
  background: var(--paper);
  color: var(--ink);
}

.skipLink:focus-visible,
.siteHeader a:focus-visible,
.contactLink:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .page *, .page *::before, .page *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
```

Complete the module with a fluid content container, grid-to-single-column breakpoints at 768 px and 1024 px, readable body line length, visible text links, and restrained 200 ms hover transitions. Do not modify `app/globals.css`.

- [ ] **Step 4: Run the route contract after implementation**

Run: `pnpm build && node --test --test-name-pattern="academic portfolio exports" tests/export.test.mjs`  
Expected: PASS.

- [ ] **Step 5: Commit the independent academic route**

```bash
git add app/academic-portfolio
git commit -m "feat: add standalone academic portfolio"
```

### Task 3: Publish the route in search discovery and complete its regression coverage

**Files:**
- Modify: `app/sitemap.ts`
- Modify: `tests/export.test.mjs`

**Interfaces:**
- Consumes: `academicProfile.canonicalUrl` from `lib/academic-portfolio.ts` and the static academic HTML export.
- Produces: `out/sitemap.xml` with the canonical academic URL and tests that protect route metadata, anchors, and academic content boundaries.

- [ ] **Step 1: Add failing sitemap and metadata assertions**

Append this test to `tests/export.test.mjs`:

```js
test('the academic route has isolated search metadata and discoverable sitemap entry', () => {
  const academicHtml = readFileSync(academicPath, 'utf8');
  const academicCanonical = 'https://shittusaheed01.github.io/academic-portfolio/';
  assert.equal(new URL(academicHtml.match(/rel="canonical" href="([^"]+)"/)?.[1]).href, academicCanonical);
  assert.equal(new URL(academicHtml.match(/property="og:url" content="([^"]+)"/)?.[1]).href, academicCanonical);
  assert.ok(academicHtml.includes('Electrical Engineering Research Portfolio'));
  assert.ok(academicHtml.includes('application/ld+json'));
  assert.ok(!academicHtml.includes('SmartCare'));
  const ids = new Set([...academicHtml.matchAll(/\\bid="([^"]+)"/g)].map(match => match[1]));
  for (const anchor of [...academicHtml.matchAll(/href="#([^"]+)"/g)].map(match => match[1])) {
    assert.ok(ids.has(anchor), `Broken academic anchor: #${anchor}`);
  }
  assert.ok(readFileSync(resolve(root, 'sitemap.xml'), 'utf8').includes(`<loc>${academicCanonical}</loc>`));
});
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `pnpm build && node --test --test-name-pattern="academic route has isolated" tests/export.test.mjs`  
Expected: FAIL because the sitemap does not contain the academic canonical URL.

- [ ] **Step 3: Add the academic page to the sitemap**

Update `app/sitemap.ts` to return both static routes:

```ts
import { academicProfile } from '@/lib/academic-portfolio';
import { site } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url },
    { url: academicProfile.canonicalUrl },
  ];
}
```

Keep the root entry unchanged. The sitemap entry is search discovery metadata; it must not introduce a visible navigation link between the two portfolio experiences.

- [ ] **Step 4: Run full verification**

Run: `pnpm run check`  
Expected: TypeScript check, static export, and all Node export tests PASS.

Run: `pnpm start` and inspect `http://localhost:3033/academic-portfolio/` at 375 px and 1440 px.  
Expected: readable light editorial layout, working academic anchors, keyboard-visible focus, completed certifications, and no professional navigation.

- [ ] **Step 5: Commit the search-discovery integration**

```bash
git add app/sitemap.ts tests/export.test.mjs
git commit -m "feat: publish academic portfolio in sitemap"
```

## Self-review

- **Spec coverage:** Tasks 1–3 cover the new route, verified education/publication/project/teaching/certifications, responsive route-local design, isolated metadata/structured data, sitemap discovery, source boundaries, and checks. No gaps found.
- **Placeholder scan:** No `TODO`, `TBD`, vague testing directions, or undefined interfaces remain.
- **Type consistency:** Task 1 defines `academicProfile` and the named data exports consumed by Tasks 2–3. The canonical URL is supplied by one field throughout.
- **Review focus:** Each of the five risks is assigned to the focused assertions in Task 3 or the accessibility implementation and visual check in Task 2.
