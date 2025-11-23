// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://YOUR_USER.github.io/YOUR_REPO',
  vite: {
    plugins: [tailwindcss()]
  }
});
