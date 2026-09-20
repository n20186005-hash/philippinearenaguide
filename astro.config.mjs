import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ITO LANG ANG LUGAR PARA SA PRODUCTION DOMAIN.
// Iwanang walang laman habang wala pang domain; hindi nito pipigilan ang build.
const SITE = 'https://philippinearenaguide.com';

export default defineConfig({
  ...(SITE ? { site: SITE } : {}),
  integrations: SITE ? [sitemap()] : [],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
