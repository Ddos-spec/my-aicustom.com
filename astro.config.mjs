import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://ddos-spec.github.io',
  base: '/my-aicustom.com/',
  integrations: [tailwind()],
});
