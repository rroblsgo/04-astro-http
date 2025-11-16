// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// import tailwindcss from '@tailwindcss/vite';

import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

// import node from '@astrojs/node';
import cloudflare from '@astrojs/cloudflare';

import db from '@astrojs/db';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: 'https://04-astro-http-5ny.pages.dev/',
  integrations: [mdx(), sitemap(), db()],

  // adapter: node({
  //   mode: 'standalone',
  // }),

  vite: {
    // plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
      // conditions: ['node', 'import', 'module', 'browser', 'default'],
    },
    // ssr: {
    //   noExternal: ['picocolors'],
    // },
  },

  adapter: cloudflare(),
});
