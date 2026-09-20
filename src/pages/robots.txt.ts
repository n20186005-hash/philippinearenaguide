import type { APIRoute } from 'astro';

// Ang production domain ay nasa `SITE` sa astro.config.mjs; dito lang ito binabasa.
export const GET: APIRoute = ({ site }) => {
  const lines = ['User-agent: *', 'Allow: /', ''];
  if (site) lines.push(`Sitemap: ${new URL('sitemap-index.xml', site).href}`, '');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
