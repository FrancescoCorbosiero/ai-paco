import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_NAME } from '../config';

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: `Blog di ${SITE_NAME}`,
    description:
      'Siti vivi, piccole attività, WhatsApp: guide concrete e ragionamenti onesti dal team di Paco.',
    site: context.site ?? 'https://paco.alpacode.it',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
    customData: '<language>it-IT</language>',
  });
};
