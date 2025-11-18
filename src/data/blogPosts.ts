export type CategoryKey =
  | 'strategy'
  | 'automation'
  | 'analytics'
  | 'experience'
  | 'governance'
  | 'talent';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: CategoryKey;
  categoryLabel: string;
  publishDate: string;
  readTime: string;
  author: string;
  heroImage: string;
  thumbnailImage: string;
  tags: string[];
  isFeatured?: boolean;
}

export const categoryStyles: Record<
  CategoryKey,
  { pill: string }
> = {
  strategy: {
    pill: 'bg-sky-100 text-sky-700 border border-sky-200 dark:bg-sky-500/10 dark:text-sky-300 dark:border-sky-500/30',
  },
  automation: {
    pill: 'bg-purple-100 text-purple-700 border border-purple-200 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-500/30',
  },
  analytics: {
    pill: 'bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/30',
  },
  experience: {
    pill: 'bg-rose-100 text-rose-700 border border-rose-200 dark:bg-rose-500/10 dark:text-rose-300 dark:border-rose-500/30',
  },
  governance: {
    pill: 'bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-500/10 dark:text-slate-300 dark:border-slate-500/30',
  },
  talent: {
    pill: 'bg-amber-100 text-amber-700 border border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/30',
  },
} as const;

export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'strategi-operasional-ai',
    title: 'Strategi Operasional AI: Menyatukan Automasi dan Pengalaman Pelanggan',
    excerpt:
      'Blueprint komprehensif untuk mengintegrasikan orkestrasi AI ke dalam proses operasional tanpa mengorbankan pengalaman pelanggan.',
    category: 'strategy',
    categoryLabel: 'Strategi',
    publishDate: '2024-02-12',
    readTime: '8 menit baca',
    author: 'Nadia Pramesti',
    heroImage:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80',
    thumbnailImage:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
    tags: ['AI Ops', 'Customer Journey', 'Playbook'],
    isFeatured: true,
  },
  {
    slug: 'playbook-automation-finance',
    title: 'Playbook Automasi Finansial: SLA 2x Lebih Cepat dengan AI Co-pilot',
    excerpt:
      'Cara mengatur orkestrasi dokumen dan rekonsiliasi agar tim finance dapat menutup buku lebih cepat tanpa kehilangan kontrol.',
    category: 'automation',
    categoryLabel: 'Otomatisasi',
    publishDate: '2024-01-22',
    readTime: '6 menit baca',
    author: 'Nadia Pramesti',
    heroImage:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80',
    thumbnailImage:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
    tags: ['Finance Ops', 'Automation'],
  },
  {
    slug: 'dashboard-analytics-cxo',
    title: '5 Dashboard Analytics yang Dibutuhkan CXO untuk Memantau Inisiatif AI',
    excerpt:
      'Standar metrik lintas fungsi yang mempercepat pengambilan keputusan strategis terkait investasi AI.',
    category: 'analytics',
    categoryLabel: 'Data & Analitik',
    publishDate: '2023-12-18',
    readTime: '5 menit baca',
    author: 'Bayu Lazuardi',
    heroImage:
      'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1600&q=80',
    thumbnailImage:
      'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=900&q=80',
    tags: ['Executive Brief', 'Analytics'],
  },
  {
    slug: 'blueprint-chatbot-experience',
    title: 'Blueprint Chatbot Pengalaman Pelanggan yang Skalabel',
    excerpt:
      'Framework operasional untuk merancang chatbot multi-bahasa yang konsisten dan bernilai tinggi.',
    category: 'experience',
    categoryLabel: 'Pengalaman Pelanggan',
    publishDate: '2023-11-05',
    readTime: '7 menit baca',
    author: 'Bayu Lazuardi',
    heroImage:
      'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1600&q=80',
    thumbnailImage:
      'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=900&q=80',
    tags: ['CX Strategy', 'Automation'],
  },
  {
    slug: 'governance-ai-checklist',
    title: 'Checklist Governance AI untuk Direksi dan Komisaris',
    excerpt:
      'Daftar kontrol minimal agar tata kelola AI tetap patuh regulasi dan transparan untuk seluruh stakeholder.',
    category: 'governance',
    categoryLabel: 'Tata Kelola',
    publishDate: '2023-10-17',
    readTime: '4 menit baca',
    author: 'Dion Hartono',
    heroImage:
      'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1600&q=80',
    thumbnailImage:
      'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80',
    tags: ['Policy', 'Risk'],
  },
  {
    slug: 'talent-lab-ai',
    title: 'Talent Lab: Cara Membangun Tim AI Multidisiplin Tanpa Drama',
    excerpt:
      'Model kolaborasi lintas HR, product, dan data agar onboarding talenta AI terjadi dalam 30 hari pertama.',
    category: 'talent',
    categoryLabel: 'Bakat',
    publishDate: '2023-09-26',
    readTime: '6 menit baca',
    author: 'Nadia Pramesti',
    heroImage:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80',
    thumbnailImage:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80',
    tags: ['People Ops', 'Capability'],
  },
  {
    slug: 'operating-model-ai',
    title: 'Operating Model AI yang Menyatukan Bisnis dan Teknologi',
    excerpt:
      'Pendekatan modular untuk menyelaraskan unit bisnis, tim teknologi, dan center of excellence.',
    category: 'strategy',
    categoryLabel: 'Strategi',
    publishDate: '2023-08-14',
    readTime: '5 menit baca',
    author: 'Dion Hartono',
    heroImage:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
    thumbnailImage:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    tags: ['Operating Model', 'Playbook'],
  },
  {
    slug: 'ai-custom-implementation-best-practices',
    title: 'Best Practices Implementasi AI Custom untuk Bisnis Indonesia',
    excerpt:
      'Panduan lengkap untuk mengimplementasikan solusi AI custom yang sesuai dengan kebutuhan bisnis lokal dan meningkatkan ROI secara signifikan.',
    category: 'strategy',
    categoryLabel: 'Strategi',
    publishDate: '2024-03-15',
    readTime: '7 menit baca',
    author: 'Nadia Pramesti',
    heroImage:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80',
    thumbnailImage:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80',
    tags: ['AI Custom', 'Implementation', 'Best Practices'],
    isFeatured: false,
  },
  {
    slug: 'personalisasi-ai-chatbot-indonesia',
    title: 'Personalisasi AI Chatbot untuk Pasar Indonesia: Strategi dan Teknik',
    excerpt:
      'Cara menyesuaikan AI chatbot dengan karakteristik unik pasar Indonesia, termasuk bahasa, budaya, dan preferensi komunikasi lokal.',
    category: 'experience',
    categoryLabel: 'Pengalaman Pelanggan',
    publishDate: '2024-03-08',
    readTime: '6 menit baca',
    author: 'Bayu Lazuardi',
    heroImage:
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1600&q=80',
    thumbnailImage:
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=80',
    tags: ['AI Chatbot', 'Personalisasi', 'Indonesia'],
    isFeatured: false,
  },
  {
    slug: 'roi-ai-custom-solution',
    title: 'Mengukur ROI dari Solusi AI Custom: Metrik yang Benar-Benar Penting',
    excerpt:
      'Framework praktis untuk mengukur return on investment dari implementasi AI custom, dengan fokus pada metrik bisnis yang dapat ditindaklanjuti.',
    category: 'analytics',
    categoryLabel: 'Data & Analitik',
    publishDate: '2024-02-28',
    readTime: '8 menit baca',
    author: 'Dion Hartono',
    heroImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    thumbnailImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    tags: ['ROI', 'AI Metrics', 'Analytics'],
    isFeatured: false,
  },
];

export const featuredPost = blogPosts.find((post) => post.isFeatured) ?? blogPosts[0];

export const latestArticles = blogPosts
  .filter((post) => post.slug !== featuredPost.slug)
  .slice(0, 6);

export const sidebarArticles = blogPosts
  .filter((post) => post.slug !== featuredPost.slug)
  .slice(0, 4);

export const allCategories = Array.from(
  new Map(blogPosts.map((post) => [post.category, post.categoryLabel])).entries(),
).map(([key, label]) => ({ key: key as CategoryKey, label }));

export const getRelatedArticles = (slug: string, take = 3) =>
  blogPosts.filter((post) => post.slug !== slug).slice(0, take);

export const findPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
