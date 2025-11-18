
import type { ServicePage } from '../../types/service';

export const chatbot: ServicePage = {
  slug: 'chatbot-ai-custom',
  title: 'Chatbot AI Custom',
  seo: {
    title: 'Chatbot AI Indonesia & WhatsApp Business | my-aicustom.com',
    description: 'Bangun Chatbot AI custom untuk bisnis Indonesia. Terintegrasi WhatsApp, NLP bilingual, dan 24/7 customer service automation.',
    keywords: ['chatbot AI Indonesia', 'chatbot WhatsApp bisnis', 'NLP chatbot', 'customer service automation', 'conversational AI Indonesia'],
  },
  hero: {
    tagline: 'Asisten Virtual AI yang Memahami Bisnis Indonesia Anda 24/7',
    subheading: 'Response time instan, bahasa lokal, terintegrasi WhatsApp',
    cta: 'Buat Chatbot AI Anda Sekarang',
    visual: '/images/services/chatbot-hero.png', // Placeholder
  },
  problem: {
    title: 'Mengapa Perlu Chatbot AI?',
    points: [
      'Manual response → Lambat, inkonsisten, cost tinggi',
      'AI chatbot → 24/7, response konsisten, hemat biaya 60%',
      'Customer menunggu lama untuk respons',
      'Kualitas respons tidak konsisten antar agen',
    ],
  },
  solution: {
    title: 'Fitur Utama',
    features: [
      {
        name: 'NLP Bilingual',
        description: 'Pahami Bahasa Indonesia & Inggris secara natural',
      },
      {
        name: 'Integrasi WhatsApp',
        description: 'Chatbot langsung di WhatsApp customer',
      },
      {
        name: 'Knowledge Base Dinamis',
        description: 'Update FAQ tanpa coding',
      },
      {
        name: 'Dashboard Real-time',
        description: 'Monitor percakapan & sentiment',
      },
    ],
  },
  useCases: {
    title: 'Use Cases Spesifik',
    cases: [
      {
        industry: 'E-commerce',
        benefit: 'Kurangi customer service cost 50% dengan FAQ automation',
      },
      {
        industry: 'F&B',
        benefit: 'Terima order WhatsApp otomatis 24/7',
      },
      {
        industry: 'Real Estate',
        benefit: 'Jawab 200+ pertanyaan buyer dalam sehari',
      },
    ],
  },
  technical: {
    title: 'Technical Highlights',
    highlights: [
      { name: 'NLP Model', value: 'Transformers-based' },
      { name: 'Akurasi', value: '95%+ intent recognition' },
      { name: 'Latency', value: '<500ms response time' },
    ],
  },
  roi: {
    title: 'ROI Calculator',
    inputLabel: 'Berapa customer inquiry/hari?',
    outputLabel: 'Hemat biaya customer service Rp X juta/bulan',
  },
  faq: {
    title: 'Frequently Asked Questions',
    questions: [
      {
        question: 'Apakah chatbot bisa handle pertanyaan kompleks?',
        answer: 'Ya, chatbot dapat dilatih untuk menangani pertanyaan kompleks dan melakukan eskalasi ke agen manusia jika diperlukan.',
      },
      {
        question: 'Berapa lama setup chatbot AI?',
        answer: 'Setup awal bisa dilakukan dalam 1-2 minggu, tergantung pada kompleksitas dan integrasi yang dibutuhkan.',
      },
    ],
  },
  successMetrics: {
    title: 'Success Metrics',
    metrics: [
      { value: '300+', label: 'Chatbots Deployed' },
      { value: '10M+', label: 'Conversations Handled' },
      { value: '92%', label: 'Customer Satisfaction' },
    ],
  },
  pricing: {
    title: 'Pricing',
    price: 'Mulai dari Rp X/bulan',
    cta: 'Konsultasi Gratis - Buat Strategi Chatbot Anda',
  },
  visualAssets: {
    chatMockup: '/images/services/chatbot-mockup.png', // Placeholder
    architectureDiagram: '/images/services/chatbot-flow.png', // Placeholder
  },
};
