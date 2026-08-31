import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const galleryCollection = defineCollection({
  // Use the glob loader to load all Markdown files in src/content/gallery/
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      type: z.enum(['photo', 'video']),
      coverImage: image(),
      videoUrl: z.string().optional(),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = {
  gallery: galleryCollection,
};