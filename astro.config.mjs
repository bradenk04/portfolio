import tailwindcss from '@tailwindcss/vite';
// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://bradenkennedy.com',
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        sitemap(),
        solidJs({
            include: ['**/solid/*', '**/node_modules/@suid/material/**'],
        }),
    ],
});
