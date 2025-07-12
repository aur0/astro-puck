import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import compressor from 'astro-compressor';

export default defineConfig({
  integrations: [react(), compressor()],

  vite: {
    plugins: [tailwindcss()],
  },
});