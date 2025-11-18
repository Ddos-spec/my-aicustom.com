
import type { ServicePage } from '../../types/service';

export const webDevelopment: ServicePage = {
  slug: 'web-development',
  title: 'Web Development & SEO',
  seo: {
    title: 'Web Development & SEO Agency Indonesia | my-aicustom.com',
    description: 'Jasa web development profesional untuk landing page, e-commerce, dan corporate website. SEO-friendly, cepat, dan mobile-first.',
    keywords: ['web development Indonesia', 'website design', 'e-commerce website', 'responsive website', 'website builder', 'web agency'],
  },
  hero: {
    tagline: 'Website Profesional yang Convert - SEO-friendly & Fast',
    subheading: 'Dari landing page hingga e-commerce, kami bangun website yang perform & grow bisnis Anda',
    cta: 'Lihat Portfolio Website Kami',
    visual: '/images/services/web-dev-hero.png', // Placeholder
  },
  problem: {
    title: 'Why a Professional Website Matters',
    points: [
      'Website adalah digital storefront bisnis Anda 24/7',
      '75% customer beli dari brand yang punya professional website',
      'Website lambat = bounce rate tinggi & SEO jelek',
      'Mobile-friendly bukan optional lagi',
    ],
  },
  solution: {
    title: 'Website Types We Build',
    features: [
      {
        name: 'Landing Page',
        description: 'High-converting, single purpose, optimization untuk lead/sales',
      },
      {
        name: 'Corporate Website',
        description: 'Brand authority, company info, case study showcase',
      },
      {
        name: 'E-commerce',
        description: 'Product catalog, shopping cart, payment integration, inventory',
      },
    ],
  },
  useCases: {
    title: 'Portfolio Highlights',
    cases: [
      {
        industry: 'E-commerce F&B',
        benefit: '10K+ products, 100K+ monthly visitors',
      },
      {
        industry: 'Fintech Corporate Website',
        benefit: '98 Lighthouse score, 1M+ annual visitors',
      },
      {
        industry: 'SaaS Dashboard',
        benefit: 'Multi-tenant architecture, 500+ active users',
      },
    ],
  },
  technical: {
    title: 'Technical Excellence',
    highlights: [
      { name: 'Framework', value: 'Next.js, Vue.js, React' },
      { name: 'Performance', value: '<2 detik loading time, 90+ Lighthouse score' },
      { name: 'Security', value: 'SSL/TLS, secure headers, data protection' },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    questions: [
      {
        question: 'Berapa lama website siap launch?',
        answer: 'Proyek website standar biasanya memakan waktu 4-8 minggu dari discovery hingga launch.',
      },
      {
        question: 'Bisa update konten sendiri atau harus minta bantuan?',
        answer: 'Kami dapat mengintegrasikan website dengan Headless CMS (seperti Contentful atau Strapi) yang memudahkan Anda untuk mengupdate konten secara mandiri.',
      },
    ],
  },
  pricing: {
    title: 'Pricing',
    price: 'Mulai dari Rp X/project',
    cta: 'Konsultasi Web Project Gratis',
  },
  visualAssets: {
    chatMockup: '/images/services/portfolio-showcase.png', // Placeholder
  },
};
