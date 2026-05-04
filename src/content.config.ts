import { defineCollection } from 'astro:content';

import { glob } from 'astro/loaders';

import z from 'astro/zod';

const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.json' }),
    schema: z.object({
        name: z.string(),
        tagline: z.string(),
        problem: z.string(),
        status: z.enum(['Active', 'WIP', 'Archived']),
        featured: z.boolean().optional(),
        repository: z.string(),
        links: z.array(
            z.object({
                label: z.string(),
                href: z.string(),
            })
        ),
        stack: z.array(z.string()),
    }),
});

const projectChallenges = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        order: z.number().optional(),
    }),
});

export const collections = { projects, projectChallenges };
