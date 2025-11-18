
import type { ServicePage } from '../types/service';

export const aiAnalytics: ServicePage = {
  slug: 'ai-analytics-insights',
  title: 'AI Analytics & Insights',
  seo: {
    title: 'AI Analytics & Business Intelligence Indonesia | my-aicustom.com',
    description: 'Tingkatkan pengambilan keputusan dengan layanan AI Analytics & Business Intelligence kami di Indonesia. Kami mengubah data mentah Anda menjadi insight strategis melalui dashboard prediktif, machine learning, dan visualisasi data canggih. Dapatkan keunggulan kompetitif dengan analisis mendalam.',
    keywords: ['AI analytics Indonesia', 'business intelligence', 'predictive analytics', 'data dashboard', 'machine learning prediction'],
  },
  hero: {
    tagline: 'Data Anda Berbicara - Dari Raw Data ke Keputusan Strategis',
    subheading: 'Kami membangun dashboard prediktif yang intuitif untuk eksekutif dan tim operasional, memberikan insight real-time yang mendorong aksi dan pertumbuhan bisnis.',
    cta: 'Buat Dashboard Analytics Custom Anda',
    visual: 'https://placehold.co/600x400/png?text=AI+Analytics', // Placeholder
  },
  problem: {
    title: 'Problem: Data → Information Gap',
    points: [
      'Data perusahaan Anda melimpah, namun sulit mendapatkan insight yang actionable.',
      'Laporan Excel manual memakan waktu, rentan terhadap human error, dan seringkali terlambat.',
      'Pemimpin bisnis membutuhkan insight cepat untuk keputusan strategis, namun tim analis terbebani.',
      'Kemampuan prediktif masih terbatas pada forecast manual yang kurang akurat.',
    ],
  },
  solution: {
    title: 'Solusi AI Analytics',
    features: [
      {
        name: 'Data Pipeline Design',
        description: 'Kami merancang arsitektur data end-to-end, mulai dari proses ETL (Extract, Transform, Load) yang robust, implementasi data quality check, hingga penyusunan governance framework untuk memastikan integritas data.',
      },
      {
        name: 'Predictive Modeling',
        description: 'Manfaatkan kekuatan machine learning untuk churn prediction, demand forecasting, credit risk scoring, dan anomaly detection untuk mengantisipasi masa depan.',
      },
      {
        name: 'Dashboard Visual',
        description: 'Kami menyediakan berbagai jenis dashboard: eksekutif dashboard untuk gambaran high-level, operational dashboard untuk monitoring detail, hingga custom mobile app untuk akses data di mana saja.',
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
    chatMockup: 'https://placehold.co/600x400/png?text=Dashboard+Mockup', // Placeholder
    architectureDiagram: 'https://placehold.co/600x400/png?text=Data+Pipeline', // Placeholder
  },
};

export const aiStrategy: ServicePage = {
  slug: 'ai-strategy-advisory',
  title: 'AI Strategy & Advisory',
  seo: {
    title: 'AI Strategy & Digital Transformation Consulting | my-aicustom.com',
    description: 'Susun roadmap transformasi digital dan AI yang selaras dengan tujuan bisnis Anda. Layanan konsultasi AI Strategy kami membantu dari assessment, penyusunan business case, hingga panduan implementasi dengan ROI yang terukur.',
    keywords: ['AI strategy', 'digital transformation', 'business consulting', 'AI roadmap', 'strategic planning'],
  },
  hero: {
    tagline: 'Strategi AI yang Align dengan Bisnis - Bukan Sekedar Teknologi',
    subheading: 'Kami membantu Anda mulai dari assessment kematangan AI, merumuskan business case yang solid, hingga menyusun roadmap implementasi yang detail dan terukur untuk kesuksesan jangka panjang.',
    cta: 'Mulai AI Transformation Assessment Anda',
    visual: 'https://placehold.co/600x400/png?text=AI+Strategy', // Placeholder
  },
  problem: {
    title: 'The Challenge',
    points: [
      'Banyak perusahaan bingung harus memulai inisiatif AI dari mana agar memberikan dampak maksimal.',
      'Investasi AI yang signifikan tidak diimbangi dengan ROI yang jelas dan terukur.',
      'Pendekatan yang terlalu teknis seringkali gagal karena tidak selaras dengan objektif bisnis utama.',
      'Kompetitor sudah bergerak cepat, sementara Anda masih kesulitan menentukan prioritas strategis.',
    ],
  },
  solution: {
    title: 'Advisory Service Components',
    features: [
      {
        name: 'AI Maturity Assessment',
        description: 'Analisis mendalam terhadap kondisi perusahaan Anda saat ini (current state), identifikasi kesenjangan (gap analysis), dan perbandingan dengan standar industri (benchmark).',
      },
      {
        name: 'Business Case & KPI Definition',
        description: 'Kami membantu mengidentifikasi peluang AI dengan nilai tertinggi, membangun model ROI, serta melakukan penilaian risiko untuk setiap inisiatif.',
      },
      {
        name: 'AI Strategy & Roadmap',
        description: 'Dapatkan kerangka kerja prioritas yang jelas, rencana implementasi bertahap (phased implementation plan), dan rekomendasi tech stack yang paling sesuai.',
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
    architectureDiagram: 'https://placehold.co/600x400/png?text=Roadmap+Timeline', // Placeholder
  },
};

export const businessProcessAutomation: ServicePage = {
  slug: 'business-process-automation',
  title: 'Business Process Automation',
  seo: {
    title: 'Business Process Automation (BPA) Indonesia | my-aicustom.com',
    description: 'Otomatiskan proses bisnis manual yang memakan waktu seperti pemrosesan invoice, administrasi HR, dan alur kerja approval dengan solusi RPA dan workflow automation kami di Indonesia.',
    keywords: ['business process automation Indonesia', 'workflow automation', 'RPA (Robotic Process Automation)', 'invoice automation', 'HR automation'],
  },
  hero: {
    tagline: 'Otomasi Proses Manual - Hemat Waktu, Tingkatkan Akurasi, Scale Bisnis',
    subheading: 'Dari proses approval invoice yang rumit hingga onboarding karyawan baru, kami dapat mengotomatisasi alur kerja Anda untuk efisiensi maksimal.',
    cta: 'Audit Proses Bisnis Anda Gratis',
    visual: 'https://placehold.co/600x400/png?text=BPA', // Placeholder
  },
  problem: {
    title: 'Problem Statement',
    points: [
      'Karyawan Anda menghabiskan lebih dari 30% waktu mereka untuk tugas-tugas administratif yang repetitif.',
      'Proses approval yang melibatkan banyak departemen seringkali memakan waktu lebih dari 5 hari kerja.',
      'Human error dalam data entry dapat menurunkan akurasi dan menyebabkan kerugian hingga 15%.',
      'Proses manual menjadi hambatan utama (bottleneck) saat bisnis Anda perlu untuk scale-up.',
    ],
  },
  solution: {
    title: 'Solusi BPA (dengan contoh workflow)',
    features: [
      {
        name: 'Finance',
        description: 'Otomatisasi alur kerja invoice: mulai dari ekstraksi data dengan OCR, routing approval otomatis, hingga penjadwalan pembayaran tanpa sentuhan manual.',
      },
      {
        name: 'HR',
        description: 'Otomatisasi proses rekrutmen: resume screening otomatis, penjadwalan interview, background check, hingga pembuatan surat penawaran (offer generation).',
      },
      {
        name: 'Sales',
        description: 'Optimalkan alur kerja penjualan: lead entry otomatis, sinkronisasi data ke CRM, email nurturing campaign, hingga penjadwalan meeting dengan prospek.',
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
    architectureDiagram: 'https://placehold.co/600x400/png?text=BPA+Flow', // Placeholder
  },
};

export const chatbot: ServicePage = {
  slug: 'chatbot-ai-custom',
  title: 'Chatbot AI Custom',
  seo: {
    title: 'Chatbot AI Indonesia & WhatsApp Business | my-aicustom.com',
    description: 'Bangun Chatbot AI custom yang dirancang khusus untuk pasar Indonesia. Terintegrasi dengan WhatsApp, didukung NLP bilingual (Indonesia-Inggris), untuk automasi customer service 24/7.',
    keywords: ['chatbot AI Indonesia', 'chatbot WhatsApp bisnis', 'NLP chatbot', 'customer service automation', 'conversational AI Indonesia'],
  },
  hero: {
    tagline: 'Asisten Virtual AI yang Memahami Bisnis Indonesia Anda 24/7',
    subheading: 'Dapatkan response time instan, layani pelanggan dalam bahasa lokal yang natural, dan terintegrasi penuh dengan platform WhatsApp yang mereka gunakan setiap hari.',
    cta: 'Buat Chatbot AI Anda Sekarang',
    visual: 'https://placehold.co/600x400/png?text=AI+Chatbot', // Placeholder
  },
  problem: {
    title: 'Mengapa Perlu Chatbot AI?',
    points: [
      'Layanan pelanggan manual seringkali lambat, tidak konsisten, dan memakan biaya operasional yang tinggi.',
      'Dengan AI chatbot, Anda bisa menyediakan layanan 24/7, memberikan respons yang konsisten, dan menghemat biaya hingga 60%.',
      'Pelanggan seringkali harus menunggu lama untuk mendapatkan respons, yang dapat menurunkan kepuasan.',
      'Kualitas jawaban dari agen manusia bisa tidak konsisten, tergantung pada individu dan waktu.',
    ],
  },
  solution: {
    title: 'Fitur Utama',
    features: [
      {
        name: 'NLP Bilingual',
        description: 'Chatbot kami mampu memahami percakapan dalam Bahasa Indonesia dan Inggris secara natural, termasuk bahasa gaul dan singkatan.',
      },
      {
        name: 'Integrasi WhatsApp',
        description: 'Hadir di platform yang paling banyak digunakan pelanggan Anda. Terima pesanan, jawab pertanyaan, dan berikan dukungan langsung di WhatsApp.',
      },
      {
        name: 'Knowledge Base Dinamis',
        description: 'Anda dapat mengupdate database pengetahuan atau FAQ chatbot dengan mudah melalui dashboard, tanpa perlu keahlian coding.',
      },
      {
        name: 'Dashboard Real-time',
        description: 'Pantau percakapan secara real-time, analisis sentimen pelanggan, dan dapatkan insight berharga untuk meningkatkan layanan Anda.',
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
    chatMockup: 'https://placehold.co/600x400/png?text=Chatbot+Mockup', // Placeholder
    architectureDiagram: 'https://placehold.co/600x400/png?text=Chatbot+Flow', // Placeholder
  },
};

export const computerVision: ServicePage = {
  slug: 'computer-vision-ocr',
  title: 'Computer Vision & OCR',
  seo: {
    title: 'Computer Vision & OCR Solutions for Indonesian Businesses',
    description: 'Otomatiskan pemrosesan dokumen, inspeksi kualitas visual, dan proses e-KYC dengan solusi Computer Vision dan OCR canggih kami untuk bisnis di Indonesia. Dapatkan akurasi hingga 99%+',
    keywords: ['OCR Indonesia', 'document recognition', 'computer vision', 'e-KYC', 'automatic document processing', 'invoice OCR'],
  },
  hero: {
    tagline: 'Mata AI untuk Bisnis Anda - Dari Dokumen hingga Inspeksi Visual',
    subheading: 'Kami menyediakan solusi otomasi untuk pemrosesan dokumen dan inspeksi kualitas visual dengan tingkat akurasi yang sangat tinggi, mencapai 99%+',
    cta: 'Lihat Demo Computer Vision',
    visual: 'https://placehold.co/600x400/png?text=Computer+Vision', // Placeholder
  },
  problem: {
    title: 'Why Manual Processing Holds You Back',
    points: [
      'Pemrosesan dokumen manual sangat lambat, tidak konsisten, dan rentan terhadap kesalahan manusia yang merugikan.',
      'Inspeksi produk secara manual seringkali terkendala oleh kelelahan operator, yang menyebabkan cacat produk terlewat dan biaya tinggi.',
      'Proses verifikasi dokumen manual menjadi bottleneck utama dalam pemenuhan standar kepatuhan (compliance).',
      'Proses KYC dan onboarding pelanggan yang panjang menciptakan friksi dan pengalaman pengguna yang buruk.',
    ],
  },
  solution: {
    title: 'Kapabilitas Computer Vision',
    features: [
      {
        name: 'OCR (Optical Character Recognition)',
        description: 'Ekstraksi teks dari berbagai jenis dokumen secara otomatis, termasuk invoice, kuitansi, KTP, paspor, dan laporan keuangan.',
      },
      {
        name: 'Document Detection',
        description: 'Sistem kami dapat mengidentifikasi dan mengklasifikasikan jenis dokumen secara otomatis, mempercepat proses triase.',
      },
      {
        name: 'Handwriting Recognition',
        description: 'Teknologi AI kami mampu membaca dan mengubah tulisan tangan menjadi data digital dengan akurasi tinggi.',
      },
      {
        name: 'Quality Inspection',
        description: 'Deteksi cacat produk, anomali manufaktur, dan pemantauan kualitas secara real-time di lini produksi Anda.',
      },
      {
        name: 'Face Recognition & Biometric',
        description: 'Implementasi solusi canggih untuk e-KYC, sistem absensi, dan kontrol akses keamanan.',
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
    architectureDiagram: 'https://placehold.co/600x400/png?text=OCR+Flow', // Placeholder
  },
};

export const posRental: ServicePage = {
  slug: 'pos-rental',
  title: 'Sewa & Kustomisasi POS',
  seo: {
    title: 'Sewa Sistem POS Rental Fleksibel | my-aicustom.com',
    description: 'Sewa sistem POS (Point of Sale) lengkap dengan hardware dan software melalui layanan rental kami yang fleksibel. Solusi ideal untuk F&B, ritel, dan event tanpa perlu investasi modal besar di awal.',
    keywords: ['sewa pos', 'sistem kasir', 'pos rental', 'point of sale', 'pos f&b', 'pos retail'],
  },
  hero: {
    tagline: 'Sistem POS Sewa Flexible - Mulai Jualan Tanpa Modal Besar',
    subheading: 'Dapatkan paket lengkap hardware & software, tanpa komitmen jangka panjang yang mengikat. Anda bisa meng-upgrade sistem kapan saja seiring pertumbuhan bisnis Anda.',
    cta: 'Cek Paket POS Rental Kami',
    visual: 'https://placehold.co/600x400/png?text=POS+Rental', // Placeholder
  },
  problem: {
    title: 'Why POS Rental (vs Buying)',
    points: [
      'Membeli sistem POS membutuhkan investasi modal awal yang besar, antara Rp 5-15 juta, ditambah biaya setup dan maintenance.',
      'Dengan sewa, Anda bisa mulai dari Rp 500 ribu per bulan, sudah termasuk semua layanan (all-inclusive) dan kemudahan upgrade.',
      'Saat bisnis berkembang, Anda bisa meng-upgrade sistem tanpa perlu membeli hardware baru.',
      'Teknologi POS cepat usang. Dengan menyewa, Anda bisa dengan mudah beralih ke teknologi terbaru tanpa kerugian.',
    ],
  },
  solution: {
    title: 'Paket POS Rental',
    features: [
      {
        name: 'Paket Starter',
        description: 'Sangat cocok untuk bisnis baru atau skala kecil. Paket ini sudah termasuk printer, scanner, dan cash drawer.',
      },
      {
        name: 'Paket Professional',
        description: 'Dirancang untuk bisnis ritel atau F&B yang sudah mapan. Termasuk dua terminal kasir dan software dengan fitur canggih.',
      },
      {
        name: 'Paket Enterprise',
        description: 'Solusi untuk bisnis dengan banyak cabang atau franchise. Sistem yang scalable, dashboard terpusat, dan opsi integrasi custom.',
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
    chatMockup: 'https://placehold.co/600x400/png?text=POS+Terminal', // Placeholder
  },
};

export const trainingChangeManagement: ServicePage = {
  slug: 'training-change-management',
  title: 'Training & Change Management',
  seo: {
    title: 'AI Adoption & Change Management Training | my-aicustom.com',
    description: 'Pastikan implementasi teknologi AI Anda diadopsi dengan sukses oleh tim. Kami menyediakan program training dan change management untuk menyiapkan organisasi Anda menghadapi transformasi digital.',
    keywords: ['change management', 'training & development', 'AI adoption', 'digital transformation', 'employee training program'],
  },
  hero: {
    tagline: 'Implementasi AI Tidak Hanya Soal Teknologi - Adopsi Tim adalah Kunci',
    subheading: 'Kami menawarkan workshop praktis yang disesuaikan dengan kebutuhan, playbook change management yang teruji, serta pendampingan hands-on untuk memastikan kelancaran transisi.',
    cta: 'Rencanakan Program Pelatihan Anda',
    visual: 'https://placehold.co/600x400/png?text=Training', // Placeholder
  },
  problem: {
    title: 'The Problem: Tech ≠ Success',
    points: [
      'Hingga 90% implementasi teknologi baru, termasuk AI, gagal bukan karena teknologinya, tetapi karena rendahnya tingkat adopsi oleh pengguna.',
      'Tim seringkali resisten terhadap perubahan karena tidak memahami nilai dari teknologi baru atau takut akan kehilangan pekerjaan (job displacement).',
      'Terdapat kesenjangan besar antara implementasi teknis sebuah sistem dengan penggunaan aktualnya dalam alur kerja sehari-hari.',
      'Proyek pilot mungkin berhasil, tetapi seringkali gagal saat di-scale up ke seluruh organisasi karena kurangnya pengetahuan dan persiapan.',
    ],
  },
  solution: {
    title: 'Solusi Training & Change Management',
    features: [
      {
        name: 'Workshop Onsite & Virtual',
        description: 'Sesi pelatihan yang dirancang khusus dan disesuaikan untuk berbagai peran, mulai dari C-level eksekutif, manajer, hingga end-user.',
      },
      {
        name: 'Hands-on Practice',
        description: 'Peserta akan berlatih menggunakan data riil, skenario yang relevan, dan mengatasi pain points yang sesungguhnya untuk pengalaman belajar yang efektif.',
      },
      {
        name: 'Change Playbook',
        description: 'Kami menyediakan panduan langkah-demi-langkah yang komprehensif untuk mengelola perubahan organisasi secara efektif dan meminimalkan resistensi.',
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
    architectureDiagram: 'https://placehold.co/600x400/png?text=Change+Management+Timeline', // Placeholder
  },
};

export const webDevelopment: ServicePage = {
  slug: 'web-development',
  title: 'Web Development & SEO',
  seo: {
    title: 'Web Development & SEO Agency Indonesia | my-aicustom.com',
    description: 'Jasa web development profesional di Indonesia untuk landing page, e-commerce, dan corporate website. Kami membangun website yang SEO-friendly, cepat, dan mobile-first untuk mendorong pertumbuhan bisnis Anda.',
    keywords: ['web development Indonesia', 'website design', 'e-commerce website', 'responsive website', 'website builder', 'web agency'],
  },
  hero: {
    tagline: 'Website Profesional yang Convert - SEO-friendly & Fast',
    subheading: 'Baik Anda membutuhkan landing page, situs e-commerce, atau website korporat, kami membangun platform digital yang tidak hanya terlihat bagus, tetapi juga memiliki performa tinggi dan mendorong konversi.',
    cta: 'Lihat Portfolio Website Kami',
    visual: 'https://placehold.co/600x400/png?text=Web+Development', // Placeholder
  },
  problem: {
    title: 'Why a Professional Website Matters',
    points: [
      'Website adalah etalase digital bisnis Anda yang beroperasi 24/7. Kesan pertama sangatlah penting.',
      'Sebanyak 75% pelanggan mengakui bahwa mereka menilai kredibilitas sebuah brand berdasarkan desain website-nya.',
      'Website yang lambat akan menyebabkan bounce rate yang tinggi, merusak pengalaman pengguna, dan mendapatkan penalti dari mesin pencari seperti Google.',
      'Memiliki website yang mobile-friendly bukan lagi sebuah pilihan, melainkan keharusan di era digital saat ini.',
    ],
  },
  solution: {
    title: 'Website Types We Build',
    features: [
      {
        name: 'Landing Page',
        description: 'Kami merancang landing page dengan satu tujuan yang jelas: konversi. Dioptimalkan untuk mendapatkan leads atau penjualan dengan A/B testing.',
      },
      {
        name: 'Corporate Website',
        description: 'Bangun otoritas brand Anda, sajikan informasi perusahaan secara profesional, dan tampilkan portofolio atau studi kasus Anda dengan meyakinkan.',
      },
      {
        name: 'E-commerce',
        description: 'Solusi lengkap untuk toko online: manajemen katalog produk, keranjang belanja, integrasi payment gateway, dan sistem manajemen inventaris.',
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
    chatMockup: 'https://placehold.co/600x400/png?text=Portfolio+Showcase', // Placeholder
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
