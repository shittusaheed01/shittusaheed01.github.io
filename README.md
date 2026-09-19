# Saheed Shittu’s portfolio

A responsive backend engineering portfolio built with Next.js, TypeScript, and Tailwind CSS. It exports to static files for GitHub Pages.

## Development

Use Node.js 20 or later and pnpm 9.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Checks and preview

```sh
pnpm typecheck
pnpm build
pnpm test
pnpm start
```

The preview serves the `out` directory at http://localhost:3033. Set `PORT` to use another port. `pnpm check` runs the type check, production build, and export tests. `pnpm lint` is a compatibility alias for the TypeScript check; ESLint is not configured.

## Content and design

- `lib/portfolio.ts` holds project information, career history, skills, and contact links.
- `components/sections` contains the page sections. Static sections render on the server; the mobile navigation is interactive.
- `app/globals.css` defines the dark theme, responsive layouts, keyboard focus states, and reduced-motion behavior.
- `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` define search metadata. The canonical production URL and shared metadata live in `lib/seo.ts`; update that file when changing domains.

Project diagrams are illustrations of the work, not product screenshots or live system monitors. Career dates and performance figures come from the supplied portfolio and should be reviewed when updating its content.

The GitHub Pages workflow builds and tests changes before publishing from `main`.

## Search visibility

See [the search launch guide](docs/search-visibility.md) for publishing, Google Search Console, and name consistency. SEO checks run against the actual exported HTML as part of `pnpm test`.
