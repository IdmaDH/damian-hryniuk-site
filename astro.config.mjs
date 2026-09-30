import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://damianhryniuk.pl',
  output: 'static',
  build: {
    format: 'directory'
  },
  vite: {
    build: {
      cssMinify: 'esbuild'
    }
  }
});
