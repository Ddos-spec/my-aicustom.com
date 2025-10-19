import { readFile, writeFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');
const siteOrigin = 'https://my-aicustom.com';

const pageConfigs = [
  { path: '/', file: 'src/pages/index.astro', priority: 1.0, changefreq: 'weekly' },
  { path: '/service/', file: 'src/pages/service.astro', priority: 0.8, changefreq: 'weekly' },
  { path: '/konsultasi/', file: 'src/pages/konsultasi.astro', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact/', file: 'src/pages/contact.astro', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/', file: 'src/pages/blog/index.astro', priority: 0.9, changefreq: 'weekly' },
];

const getPageLastmod = async (relativePath) => {
  const filePath = resolve(rootDir, relativePath);
  const fileStat = await stat(filePath);
  return fileStat.mtime.toISOString();
};

const extractBlogPosts = async () => {
  const filePath = resolve(rootDir, 'src/pages/blog/[slug].astro');
  const content = await readFile(filePath, 'utf8');
  const regex = /slug:\s*'([^']+)'[\s\S]*?publishDate:\s*'([^']+)'/g;
  const posts = [];
  for (const match of content.matchAll(regex)) {
    const [, slug, publishDate] = match;
    posts.push({ slug, publishDate });
  }
  return posts;
};

const toUrlEntry = ({ path, lastmod, priority, changefreq }) => `  <url>\n    <loc>${siteOrigin}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority.toFixed(1)}</priority>\n  </url>`;

const main = async () => {
  const urls = [];

  for (const page of pageConfigs) {
    const lastmod = await getPageLastmod(page.file);
    urls.push(
      toUrlEntry({
        path: page.path,
        lastmod,
        priority: page.priority,
        changefreq: page.changefreq,
      }),
    );
  }

  const blogPosts = await extractBlogPosts();
  for (const post of blogPosts) {
    const lastmod = new Date(post.publishDate).toISOString();
    urls.push(
      toUrlEntry({
        path: `/blog/${post.slug}/`,
        lastmod,
        priority: 0.7,
        changefreq: 'monthly',
      }),
    );
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${urls.join('\n')}\n` +
    `</urlset>\n`;

  const outputPath = resolve(rootDir, 'public/sitemap.xml');
  await writeFile(outputPath, xml, 'utf8');
  console.log(`Sitemap generated with ${urls.length} entries at ${outputPath}`);
};

main().catch((error) => {
  console.error('Failed to generate sitemap:', error);
  process.exit(1);
});
