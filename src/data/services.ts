
import type { ServicePage } from '../types/service';

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

export const allServices = [
    aiAnalytics,
    aiStrategy,
    businessProcessAutomation,
    chatbot,
    computerVision,
    posRental,
    trainingChangeManagement,
    webDevelopment
]
