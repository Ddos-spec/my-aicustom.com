
import type { ServicePage } from '../../types/service';

export const businessProcessAutomation: ServicePage = {
  slug: 'business-process-automation',
  title: 'Business Process Automation',
  seo: {
    title: 'Business Process Automation (BPA) Indonesia | my-aicustom.com',
    description: 'Otomatisasi proses bisnis manual seperti invoice, HR, dan approval dengan solusi RPA dan workflow automation kami.',
    keywords: ['business process automation Indonesia', 'workflow automation', 'RPA (Robotic Process Automation)', 'invoice automation', 'HR automation'],
  },
  hero: {
    tagline: 'Otomasi Proses Manual - Hemat Waktu, Tingkatkan Akurasi, Scale Bisnis',
    subheading: 'Dari invoice approval hingga HR onboarding, semua bisa di-automate',
    cta: 'Audit Proses Bisnis Anda Gratis',
    visual: '/images/services/bpa-hero.png', // Placeholder
  },
  problem: {
    title: 'Problem Statement',
    points: [
      'Employee menghabiskan 30% waktu untuk task repetitif',
      'Proses approval lintas departemen butuh 5+ hari',
      'Error data entry turun ROI hingga 15%',
      'Manual process = bottleneck untuk scale',
    ],
  },
  solution: {
    title: 'Solusi BPA (dengan contoh workflow)',
    features: [
      {
        name: 'Finance',
        description: 'Invoice approval → OCR + routing + auto-payment',
      },
      {
        name: 'HR',
        description: 'Job application → Resume screening → Background check → Offer generation',
      },
      {
        name: 'Sales',
        description: 'Lead entry → CRM sync → Email nurturing → Meeting schedule',
      },
    ],
  },
  useCases: {
    title: 'Keunggulan Utama',
    cases: [
      {
        industry: 'End-to-End Process Audit',
        benefit: 'Mapping current state, pain points, improvement opportunity',
      },
      {
        industry: 'Quick Win Identification',
        benefit: 'Prioritas process dengan ROI tinggi & effort rendah',
      },
      {
        industry: 'ERP/CRM Integration',
        benefit: 'Seamless data flow ke existing system (SAP, Xero, Salesforce)',
      },
    ],
  },
  technical: {
    title: 'Implementation Approach',
    highlights: [
      { name: 'Phase 1', value: 'Process mapping & validation (1-2 minggu)' },
      { name: 'Phase 2', value: 'Prototype & testing (2-3 minggu)' },
      { name: 'Phase 3', value: 'Rollout & training (1 minggu)' },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    questions: [
      {
        question: 'Berapa process yang bisa di-automate?',
        answer: 'Hampir semua proses berbasis aturan dan berulang dapat diotomatisasi. Kami akan membantu Anda mengidentifikasi kandidat terbaik.',
      },
      {
        question: 'Apakah perlu ganti sistem existing?',
        answer: 'Tidak. Solusi kami dirancang untuk berintegrasi dengan sistem yang sudah Anda miliki, termasuk sistem legacy.',
      },
    ],
  },
  successMetrics: {
    title: 'Impact Metrics',
    metrics: [
        { value: '40%', label: 'Waktu proses per transaksi' },
        { value: '99%', label: 'Error rate turun' },
        { value: '50%', label: 'Cycle time kurang' },
    ],
  },
  pricing: {
    title: 'Pricing',
    price: 'Custom pricing',
    cta: 'Jadwalkan Audit Process Gratis - Identifikasi Opportunity',
  },
  visualAssets: {
    architectureDiagram: '/images/services/bpa-flow.png', // Placeholder
  },
};
