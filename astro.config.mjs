// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nitailab.com.br',
  base: '/',
  integrations: [sitemap()],
  // Redirecionamentos (02/10/2026): páginas antigas arquivadas em _arquivo/.
  redirects: {
    '/resgate-seu-google': 'https://resgateseugoogle.nitailab.com.br/',
    '/eu-37ja0k92rj': '/',
    '/blog': '/',
    '/blog/google-meu-negocio-clinica-estetica': '/',
    '/sobre': '/',
    '/servicos': '/',
  },
});
