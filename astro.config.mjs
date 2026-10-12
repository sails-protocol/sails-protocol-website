import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sails.org',
  output: 'static',
  trailingSlash: 'always',
  vite: {
    optimizeDeps: {
      noDiscovery: true,
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR', 'es'],
    routing: { prefixDefaultLocale: true },
  },
});
