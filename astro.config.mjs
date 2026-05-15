// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://solasinghar.github.io',
  base: '/solasinghar_uzma',
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ['images.unsplash.com'],
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
});
