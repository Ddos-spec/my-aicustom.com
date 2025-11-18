import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://my-aicustom.com',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  // Optimize build output
  build: {
    inlineStylesheets: 'auto',
  },
  // Compress HTML, CSS, JS
  compressHTML: true,
  // Image optimization
  image: {
    domains: ['images.unsplash.com', 'i.pravatar.cc'],
  },
});
