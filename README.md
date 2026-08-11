# Philippine Arena Visitor Guide

Isang one-page Astro site para sa Philippine Arena sa Bulacan. Ang visitor-facing content ay Filipino.

## Stack

- Astro 7.2.0
- Tailwind CSS 4.3.3 via `@tailwindcss/vite`
- TypeScript 6.0.3 (sakop ng peer range ng `@astrojs/check` 0.9.10)
- pnpm 9.15.5
- Node.js 24.19.0
- Cloudflare Workers Static Assets deployment
- GA4: `G-HXM22WWPKP`

## Domain configuration

**Isang lugar lang ang production domain:** `SITE` sa `astro.config.mjs`.

Habang blanko ang `SITE`, normal pa rin ang build:
- walang canonical/og:url absolute tag;
- relative ang OG image;
- walang `url`/absolute `image` sa attraction JSON-LD;
- hindi isinasama ang sitemap integration.

Kapag mayroon nang domain, ilagay lamang ito sa `SITE` at muling mag-build. Awtomatikong gagamitin ito ng canonical, OG, JSON-LD at `@astrojs/sitemap`.

## Local development

```bash
corepack enable
corepack prepare pnpm@9.15.5 --activate
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Cloudflare Workers deploy

Static ang site; `wrangler.jsonc` points Workers Static Assets to `./dist`.

```bash
pnpm build
pnpm deploy
```

Ang deploy script ay gumagamit ng eksaktong `wrangler@4.120.1` sa `pnpm dlx`.

## Photo licensing

Ang local photos sa `public/images` ay mula sa Wikimedia Commons at may attribution sa footer/source strip ng page. Panatilihin ang attribution kung ire-reuse o ire-release ang site.
