import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';
import { ogPages, type OgPage } from '../../data/og-pages';

/**
 * Card Open Graph generate a build, in stile brand (fondo scuro a tinta
 * verde, bordo accento, Archivo Black + JetBrains Mono). Le pagine
 * statiche arrivano da src/data/og-pages.ts; i post del blog vengono
 * aggiunti automaticamente.
 */

const posts = await getCollection('blog', ({ data }) => !data.draft);
const blogPages: Record<string, OgPage> = Object.fromEntries(
  posts.map((post) => [
    `blog/${post.id}.png`,
    { title: post.data.title, description: 'Il blog di Paco — paco, un prodotto Alpacode' },
  ]),
);

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages: { ...ogPages, ...blogPages },
  getImageOptions: (_path, page: OgPage) => ({
    title: page.title,
    description: page.description,
    bgGradient: [[10, 15, 12]],
    border: { color: [37, 211, 102], width: 24, side: 'inline-start' },
    padding: 72,
    font: {
      title: {
        size: 60,
        families: ['Archivo Black'],
        color: [233, 242, 235],
        lineHeight: 1.15,
        weight: 'Normal',
      },
      description: {
        size: 26,
        families: ['JetBrains Mono'],
        color: [164, 184, 170],
        lineHeight: 1.5,
        weight: 'Normal',
      },
    },
    fonts: [
      './src/assets/og/ArchivoBlack-Regular.ttf',
      './src/assets/og/JetBrainsMono-Regular.ttf',
      './src/assets/og/JetBrainsMono-Bold.ttf',
    ],
  }),
});
