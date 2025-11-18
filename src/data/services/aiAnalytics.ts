
import type { ServicePage } from '../../types/service';

export const aiAnalytics: ServicePage = {
  slug: 'ai-analytics-insights',
  title: 'AI Analytics & Insights',
  seo: {
    title: 'AI Analytics & Business Intelligence Indonesia | my-aicustom.com',
    description: 'Ubah data mentah menjadi keputusan strategis dengan dashboard prediktif, machine learning, dan solusi business intelligence kami.',
    keywords: ['AI analytics Indonesia', 'business intelligence', 'predictive analytics', 'data dashboard', 'machine learning prediction'],
  },
  hero: {
    tagline: 'Data Anda Berbicara - Dari Raw Data ke Keputusan Strategis',
    subheading: 'Dashboard prediktif untuk eksekutif & operasional yang berbasis insight real-time',
    cta: 'Buat Dashboard Analytics Custom Anda',
    visual: '/images/services/analytics-hero.png', // Placeholder
  },
  problem: {
    title: 'Problem: Data → Information Gap',
    points: [
      'Data berlimpah tapi insight jarang',
      'Excel report manual, lambat, error-prone',
      'Business leader butuh insight cepat tapi analyst lama deliver',
      'Predictive capability masih manual forecast',
    ],
  },
  solution: {
    title: 'Solusi AI Analytics',
    features: [
      {
        name: 'Data Pipeline Design',
        description: 'ETL yang robust, data quality check, governance framework',
      },
      {
        name: 'Predictive Modeling',
        description: 'Churn prediction, demand forecast, risk scoring, anomaly detection',
      },
      {
        name: 'Dashboard Visual',
        description: 'Eksekutif dashboard (high-level), operational dashboard (detail), mobile app',
      },
    ],
  },
  useCases: {
    title: 'Use Cases dengan Impact Metrics',
    cases: [
      {
        industry: 'Retail',
        benefit: 'Demand forecast akurasi 92% → Reduce overstock 35%',
      },
      {
        industry: 'Fintech',
        benefit: 'Churn prediction model → Reduce customer loss 25%',
      },
      {
        industry: 'Supply Chain',
        benefit: 'Inventory optimization → Holding cost ↓ 40%',
      },
    ],
  },
  technical: {
    title: 'Analytics Stack Highlights',
    highlights: [
      { name: 'Data Sources', value: 'Database, API, Google Analytics, CRM, ERP' },
      { name: 'Processing', value: 'Cloud-native (scalable), real-time atau batch' },
      { name: 'Visualization', value: 'Interactive dashboards, export reports' },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    questions: [
      {
        question: 'Berapa banyak data yang dibutuhkan untuk model bagus?',
        answer: 'Tergantung pada use case, namun umumnya semakin banyak data historis yang berkualitas, semakin baik akurasi model.',
      },
      {
        question: 'Bisa integrasi dengan BI tool existing (Tableau, Power BI)?',
        answer: 'Ya, kami dapat mengintegrasikan data pipeline dan model kami dengan tool BI yang sudah Anda gunakan.',
      },
    ],
  },
    successMetrics: {
        title: 'Success Stories',
        metrics: [
            { value: '91%', label: 'Demand forecast accuracy (F&B client)' },
            { value: '88%', label: 'Churn model accuracy (E-commerce client)' },
            { value: '45%', label: 'Retention cost reduction' },
        ],
    },
  pricing: {
    title: 'Pricing',
    price: 'Custom pricing',
    cta: 'Konsultasi Data Strategy - Temukan Hidden Opportunity',
  },
  visualAssets: {
    chatMockup: '/images/services/dashboard-mockup.png', // Placeholder
    architectureDiagram: '/images/services/data-pipeline.png', // Placeholder
  },
};
