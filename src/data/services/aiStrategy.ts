
import type { ServicePage } from '../../types/service';

export const aiStrategy: ServicePage = {
  slug: 'ai-strategy-advisory',
  title: 'AI Strategy & Advisory',
  seo: {
    title: 'AI Strategy & Digital Transformation Consulting | my-aicustom.com',
    description: 'Susun roadmap AI yang align dengan bisnis Anda. Dari assessment, business case, hingga implementasi dengan ROI terukur.',
    keywords: ['AI strategy', 'digital transformation', 'business consulting', 'AI roadmap', 'strategic planning'],
  },
  hero: {
    tagline: 'Strategi AI yang Align dengan Bisnis - Bukan Sekedar Teknologi',
    subheading: 'Dari assessment kematangan hingga roadmap implementasi lengkap dengan business case terukur',
    cta: 'Mulai AI Transformation Assessment Anda',
    visual: '/images/services/strategy-hero.png', // Placeholder
  },
  problem: {
    title: 'The Challenge',
    points: [
      'Banyak perusahaan bingung mulai AI dari mana?',
      'Investasi AI besar tapi ROI tidak jelas',
      'Tech-driven approach → banyak project gagal karena tidak align business objective',
      'Kompetitor sudah move, tapi kamu belum tahu prioritas',
    ],
  },
  solution: {
    title: 'Advisory Service Components',
    features: [
      {
        name: 'AI Maturity Assessment',
        description: 'Current state analysis, gap analysis, benchmark',
      },
      {
        name: 'Business Case & KPI Definition',
        description: 'Opportunity identification, ROI modeling, risk assessment',
      },
      {
        name: 'AI Strategy & Roadmap',
        description: 'Prioritization framework, phased implementation plan, tech stack recommendation',
      },
    ],
  },
  useCases: {
    title: 'Who Benefits Most',
    cases: [
      {
        industry: 'Enterprise',
        benefit: 'Dengan complex operation (banking, manufacturing, logistics)',
      },
      {
        industry: 'Mid-market',
        benefit: 'Planning digital transformation',
      },
      {
        industry: 'Startup',
        benefit: 'Yang ingin scale dengan AI',
      },
    ],
  },
  technical: {
    title: 'Key Deliverables',
    highlights: [
        { name: 'AI Maturity Report', value: 'Included' },
        { name: 'Business Case & ROI Model', value: 'Included' },
        { name: 'Strategic Roadmap (12-36 bulan)', value: 'Included' },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    questions: [
      {
        question: 'Bagaimana caranya menentukan AI priority?',
        answer: 'Kami menggunakan matriks effort vs impact yang disesuaikan dengan tujuan bisnis Anda untuk memprioritaskan inisiatif AI.',
      },
      {
        question: 'Berapa typical ROI AI initiative?',
        answer: 'ROI sangat bervariasi, namun kami akan membangun model finansial yang solid untuk setiap business case agar proyeksi ROI jelas dan terukur.',
      },
    ],
  },
  pricing: {
    title: 'Pricing',
    price: 'Custom pricing',
    cta: 'Jadwalkan Strategi Advisory Session - Gratis 1 Jam Konsultasi',
  },
  visualAssets: {
    architectureDiagram: '/images/services/roadmap-timeline.png', // Placeholder
  },
};
