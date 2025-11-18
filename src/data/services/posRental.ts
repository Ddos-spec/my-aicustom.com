
import type { ServicePage } from '../../types/service';

export const posRental: ServicePage = {
  slug: 'pos-rental',
  title: 'Sewa & Kustomisasi POS',
  seo: {
    title: 'Sewa Sistem POS Rental Fleksibel | my-aicustom.com',
    description: 'Sewa sistem POS lengkap dengan hardware dan software. Solusi fleksibel untuk F&B, ritel, dan event tanpa modal besar.',
    keywords: ['sewa pos', 'sistem kasir', 'pos rental', 'point of sale', 'pos f&b', 'pos retail'],
  },
  hero: {
    tagline: 'Sistem POS Sewa Flexible - Mulai Jualan Tanpa Modal Besar',
    subheading: 'Lengkap hardware & software, tanpa commitment jangka panjang, bisa upgrade kapan saja',
    cta: 'Cek Paket POS Rental Kami',
    visual: '/images/services/pos-hero.png', // Placeholder
  },
  problem: {
    title: 'Why POS Rental (vs Buying)',
    points: [
      'Beli POS: Modal Rp 5-15 juta + setup + maintenance',
      'Sewa POS: Mulai Rp 500K/bulan, all-inclusive, upgrade mudah',
      'Bisnis berkembang? Upgrade sistem tanpa ganti hardware',
      'Teknologi outdated? Ganti dengan yang terbaru',
    ],
  },
  solution: {
    title: 'Paket POS Rental',
    features: [
      {
        name: 'Paket Starter',
        description: 'Untuk bisnis baru/kecil. Termasuk printer, scanner, cash drawer.',
      },
      {
        name: 'Paket Professional',
        description: 'Untuk retail/F&B established. Termasuk 2x terminal, advanced software.',
      },
      {
        name: 'Paket Enterprise',
        description: 'Untuk chain/franchise. Scalable, central dashboard, custom integration.',
      },
    ],
  },
  useCases: {
    title: 'Industry Use Cases',
    cases: [
      {
        industry: 'F&B',
        benefit: 'Restaurant, cafe, quick service, food truck',
      },
      {
        industry: 'Retail',
        benefit: 'Toko online/offline, boutique, convenience store',
      },
      {
        industry: 'Service',
        benefit: 'Salon, spa, laundry, rental store',
      },
    ],
  },
  technical: {
    title: "What's Included in Rental",
    highlights: [
      { name: 'Hardware & Software', value: 'Included' },
      { name: 'Installation & Training', value: 'Included' },
      { name: 'Maintenance & 24/7 Support', value: 'Included' },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    questions: [
      {
        question: 'Berapa minimum commitment?',
        answer: 'Paket standar kami memiliki minimum komitmen 12 bulan, namun kami juga menawarkan opsi fleksibel untuk kebutuhan jangka pendek.',
      },
      {
        question: 'Apa yang happen kalo hardware rusak?',
        answer: 'Paket sewa kami sudah termasuk maintenance. Kami akan memperbaiki atau mengganti hardware yang rusak tanpa biaya tambahan.',
      },
    ],
  },
    successMetrics: {
        title: 'Customer Success Stories',
        metrics: [
            { value: '25%', label: 'Waste reduction (Restaurant client)' },
            { value: '2 min', label: 'Daily closing time (vs 30 min manual)' },
        ],
    },
  pricing: {
    title: 'Pricing',
    price: 'Mulai dari Rp 500K/bulan',
    cta: 'Pilih Paket Anda',
  },
  visualAssets: {
    chatMockup: '/images/services/pos-terminal.png', // Placeholder
  },
};
