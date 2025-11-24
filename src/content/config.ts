import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional()
  })
});

const games = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    releaseDate: z.coerce.date().optional(),
    platforms: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    coverHorizontal: image(),
    coverVertical: image(),
    link: z.string().optional(),
    steam: z.string().optional(),
    switch: z.string().optional()
  })
});

export const collections = { pages, games };
