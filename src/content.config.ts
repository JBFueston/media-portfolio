import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const galleryCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      type: z.enum(['photo', 'video']),
      device: z.string().optional(),
      location: z.string().optional(),
      coverImage: image(),
      videoUrl: z.string().optional(),
      tags: z.array(z.string()).default([]),
    }),
});

const journalCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      location: z.string().optional(),
      device: z.string().optional(),
      coverImage: image(),
      summary: z.string(),
      gallery: z.array(image()).optional(), // Extra photos for this story
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = {
  gallery: galleryCollection,
  journal: journalCollection,
};