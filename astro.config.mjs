// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import node from '@astrojs/node';

// URL pubblico: canonical, sitemap, OG. Sovrascrivibile con l'env SITE
// quando il dominio definitivo del lancio sarà registrato.
const site = process.env.SITE ?? 'https://paco.alpacode.it';
const siteHostname = new URL(site).hostname;

export default defineConfig({
  site,
  // L'hardening SSRF di Astro non si fida dell'header Host se il dominio
  // non è dichiarato: senza questa lista l'endpoint /api/waitlist
  // rifiuterebbe ogni POST same-origin (403) dietro l'adapter Node.
  security: {
    checkOrigin: true,
    allowedDomains: [
      { hostname: siteHostname, protocol: 'https' },
      { hostname: 'localhost' },
      { hostname: '127.0.0.1' },
    ],
  },
  // Tutto il sito è statico; solo /api/waitlist gira on-demand
  // (prerender = false). Su Vercel usa l'adapter Vercel, in locale
  // l'adapter Node così `astro preview` funziona.
  output: 'static',
  adapter: process.env.VERCEL ? vercel() : node({ mode: 'standalone' }),
  integrations: [
    mdx(),
    sitemap({
      // /grazie è una pagina post-azione: fuori dalla sitemap.
      filter: (page) => !page.includes('/grazie'),
    }),
  ],
  // Predisposizione EN: l'italiano resta senza prefisso (/), l'inglese
  // arriverà sotto /en/ senza toccare le route esistenti.
  i18n: {
    locales: ['it', 'en'],
    defaultLocale: 'it',
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: 'auto' },
});
