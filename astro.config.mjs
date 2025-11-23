// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://YOUR_USER.github.io/YOUR_REPO',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()]
  }
});
