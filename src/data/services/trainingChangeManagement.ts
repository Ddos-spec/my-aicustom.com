
import type { ServicePage } from '../../types/service';

export const trainingChangeManagement: ServicePage = {
  slug: 'training-change-management',
  title: 'Training & Change Management',
  seo: {
    title: 'AI Adoption & Change Management Training | my-aicustom.com',
    description: 'Pastikan implementasi AI Anda sukses dengan program training dan change management kami. Siapkan tim Anda untuk transformasi digital.',
    keywords: ['change management', 'training & development', 'AI adoption', 'digital transformation', 'employee training program'],
  },
  hero: {
    tagline: 'Implementasi AI Tidak Hanya Soal Teknologi - Adopsi Tim adalah Kunci',
    subheading: 'Workshop praktis, playbook change management, & pendampingan hands-on',
    cta: 'Rencanakan Program Pelatihan Anda',
    visual: '/images/services/training-hero.png', // Placeholder
  },
  problem: {
    title: 'The Problem: Tech ≠ Success',
    points: [
      '90% implementasi AI gagal karena adoption, bukan teknologi',
      'Team resist karena tidak paham value atau takut job displacement',
      'Gap antara implementasi & actual usage sangat besar',
      'Knowledge gap: pilot project success tapi scaling gagal',
    ],
  },
  solution: {
    title: 'Solusi Training & Change Management',
    features: [
      {
        name: 'Workshop Onsite & Virtual',
        description: 'Disesuaikan ke role (eksekutif, manager, user)',
      },
      {
        name: 'Hands-on Practice',
        description: 'Use real data, real scenario, real pain points',
      },
      {
        name: 'Change Playbook',
        description: 'Step-by-step guide untuk organization change',
      },
    ],
  },
  useCases: {
    title: 'Program Components',
    cases: [
      {
        industry: 'Executive Briefing (C-suite & leaders)',
        benefit: 'Understanding AI capabilities, limitation, business case',
      },
      {
        industry: 'Manager Training (Supervisor, department heads)',
        benefit: 'How AI akan change their workflow, new KPI, people management',
      },
      {
        industry: 'End User Training (Front-line staff & operators)',
        benefit: 'System how-to, best practices, hands-on practice',
      },
    ],
  },
  technical: {
    title: 'Change Playbook (Document yang akan diberikan)',
    highlights: [
      { name: 'Change vision & communication strategy', value: 'Included' },
      { name: 'Stakeholder mapping & engagement plan', value: 'Included' },
      { name: 'Risk assessment & mitigation strategy', value: 'Included' },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    questions: [
      {
        question: 'Berapa lama program training?',
        answer: 'Durasi bervariasi, mulai dari sesi 2 jam untuk eksekutif hingga workshop beberapa hari untuk end-user.',
      },
      {
        question: 'Bagaimana handle karyawan yang resist?',
        answer: 'Pendekatan kami melibatkan komunikasi yang transparan, identifikasi "champion" internal, dan menunjukkan "quick wins" untuk membangun momentum.',
      },
    ],
  },
    successMetrics: {
        title: 'Success Stories',
        metrics: [
            { value: '85%', label: 'Adoption rate dalam 2 minggu (Manufacturing client)' },
            { value: '92%', label: 'System utilization dalam 1 bulan (Bank client)' },
        ],
    },
  pricing: {
    title: 'Pricing',
    price: 'Custom pricing',
    cta: 'Konsultasi Change Management - Siapkan Organisasi Anda',
  },
  visualAssets: {
    architectureDiagram: '/images/services/change-management-timeline.png', // Placeholder
  },
};
