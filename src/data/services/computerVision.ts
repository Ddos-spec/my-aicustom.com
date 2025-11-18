
import type { ServicePage } from '../../types/service';

export const computerVision: ServicePage = {
  slug: 'computer-vision-ocr',
  title: 'Computer Vision & OCR',
  seo: {
    title: 'Computer Vision & OCR Solutions for Indonesian Businesses',
    description: 'Automate document processing, quality inspection, and e-KYC with our advanced Computer Vision and OCR solutions. Achieve 99%+ accuracy.',
    keywords: ['OCR Indonesia', 'document recognition', 'computer vision', 'e-KYC', 'automatic document processing', 'invoice OCR'],
  },
  hero: {
    tagline: 'Mata AI untuk Bisnis Anda - Dari Dokumen hingga Inspeksi Visual',
    subheading: 'Otomasi document processing & quality inspection dengan akurasi 99%+',
    cta: 'Lihat Demo Computer Vision',
    visual: '/images/services/computer-vision-hero.png', // Placeholder
  },
  problem: {
    title: 'Why Manual Processing Holds You Back',
    points: [
      'Manual document processing: lambat, inconsistent, error-prone',
      'Inspeksi produk manual: fatigue, miss defects, biaya tinggi',
      'Document verification: bottleneck untuk compliance',
      'KYC/onboarding: proses lama, friction tinggi',
    ],
  },
  solution: {
    title: 'Kapabilitas Computer Vision',
    features: [
      {
        name: 'OCR (Optical Character Recognition)',
        description: 'Extract text dari dokumen, receipt, invoice, KTP, passport',
      },
      {
        name: 'Document Detection',
        description: 'Identifikasi jenis dokumen otomatis',
      },
      {
        name: 'Handwriting Recognition',
        description: 'Baca tulisan tangan dengan AI',
      },
      {
        name: 'Quality Inspection',
        description: 'Deteksi cacat produk, anomali, kualitas real-time',
      },
      {
        name: 'Face Recognition & Biometric',
        description: 'e-KYC, attendance, security',
      },
    ],
  },
  useCases: {
    title: 'Use Cases Across Industries',
    cases: [
      {
        industry: 'Banking/Finance',
        benefit: 'e-KYC verification 5 menit vs 30 menit manual → onboarding friction ↓ 83%',
      },
      {
        industry: 'Insurance',
        benefit: 'Claims processing: extract document 95% accurate → faster settlement',
      },
      {
        industry: 'E-commerce',
        benefit: 'Product QA inspection: detect 99.7% defects otomatis',
      },
    ],
  },
  technical: {
    title: 'Technical Excellence',
    highlights: [
      { name: 'OCR Accuracy', value: '98-99%+' },
      { name: 'Processing Speed', value: '<2 detik per dokumen' },
      { name: 'Supported Format', value: 'PDF, JPG, PNG, video stream' },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    questions: [
      {
        question: 'Berapa accuracy OCR untuk dokumen tidak jelas?',
        answer: 'Akurasi dapat bervariasi, namun model kami dilatih untuk menangani berbagai kondisi. Kami memberikan confidence score untuk setiap ekstraksi.',
      },
      {
        question: 'Bisa process dokumen dalam bahasa daerah?',
        answer: 'Saat ini fokus kami adalah Bahasa Indonesia dan Inggris, namun kami dapat melatih model untuk bahasa daerah dengan data yang cukup.',
      },
      {
        question: 'Bagaimana handling dokumen fraud/fake?',
        answer: 'Sistem kami memiliki fitur deteksi anomali yang dapat menandai dokumen yang dicurigai sebagai fraud untuk review manual.',
      },
    ],
  },
  successMetrics: {
    title: 'Our Track Record',
    metrics: [
      { value: '80+', label: 'Bank & Fintech Clients' },
      { value: '500M+', label: 'Documents Processed' },
      { value: '99.2%', label: 'Average Accuracy Rate' },
    ],
  },
  pricing: {
    title: 'Pricing',
    price: 'Custom pricing',
    cta: 'Coba Demo OCR Gratis - Upload Dokumen Sekarang',
  },
  visualAssets: {
    architectureDiagram: '/images/services/ocr-flow.png', // Placeholder
  },
};
