
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
    visual: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDB8fDB8fHww',
  },
  problem: {
    title: 'Problem: Kesenjangan Antara Data dan Informasi',
    points: [
      'Data perusahaan Anda melimpah ruah dari berbagai sumber (transaksi, CRM, log server, media sosial), namun sulit untuk mendapatkan insight yang actionable dan bernilai strategis. Ibarat memiliki tambang emas, tapi tidak punya alat untuk menambangnya.',
      'Laporan Excel manual yang masih menjadi andalan memakan waktu berjam-jam, rentan terhadap human error (salah copy-paste, salah rumus), dan seringkali terlambat. Keputusan bisnis yang krusial terpaksa dibuat berdasarkan data yang sudah usang.',
      'Para pemimpin bisnis (C-level) membutuhkan insight cepat dan ringkas untuk keputusan strategis, namun tim analis terbebani dengan permintaan data ad-hoc yang tak ada habisnya, sehingga waktu mereka habis untuk reporting, bukan analisis mendalam.',
      'Kemampuan prediktif untuk mengantisipasi tren pasar, perilaku pelanggan, atau risiko operasional masih terbatas pada forecast manual yang bias dan kurang akurat, membuat perusahaan reaktif, bukan proaktif.',
    ],
  },
  solution: {
    title: 'Solusi Komprehensif AI Analytics Kami',
    features: [
      {
        name: 'Desain & Implementasi Data Pipeline',
        description: 'Kami bukan hanya membuat dashboard. Kami merancang dan membangun arsitektur data end-to-end yang kokoh. Mulai dari proses ETL (Extract, Transform, Load) yang otomatis dan terjadwal, implementasi data quality check di setiap tahapan, hingga penyusunan data governance framework untuk memastikan integritas, keamanan, dan aksesibilitas data.',
      },
      {
        name: 'Advanced Predictive Modeling',
        description: 'Manfaatkan kekuatan machine learning untuk membuka potensi prediktif data Anda. Kami mengembangkan model untuk berbagai kasus penggunaan, seperti churn prediction untuk mengurangi kehilangan pelanggan, demand forecasting untuk optimasi inventori, credit risk scoring untuk pengambilan keputusan kredit yang lebih baik, dan anomaly detection untuk mendeteksi fraud atau kegagalan sistem secara dini.',
      },
      {
        name: 'Dashboard Visual & Self-Service BI',
        description: 'Kami menyediakan berbagai jenis dashboard interaktif yang disesuaikan dengan kebutuhan pengguna. Mulai dari eksekutif dashboard untuk gambaran high-level performa bisnis, operational dashboard untuk monitoring KPI secara real-time, hingga platform self-service BI yang memungkinkan tim Anda melakukan eksplorasi data secara mandiri tanpa harus bergantung pada tim IT. Semua dapat diakses melalui web maupun aplikasi mobile.',
      },
    ],
  },
  useCases: {
    title: 'Studi Kasus dengan Dampak Terukur',
    cases: [
      {
        industry: 'Retail & E-commerce',
        benefit: 'Model demand forecast kami mencapai akurasi 92%, membantu klien mengurangi overstock sebesar 35% dan meningkatkan penjualan produk fast-moving sebesar 15%.',
      },
      {
        industry: 'Fintech & Banking',
        benefit: 'Implementasi churn prediction model berhasil mengidentifikasi pelanggan yang berisiko pindah dengan akurasi 88%, memungkinkan tim marketing melakukan intervensi yang tepat sasaran dan mengurangi customer loss hingga 25%.',
      },
      {
        industry: 'Supply Chain & Logistics',
        benefit: 'Dengan dashboard optimasi inventori, klien kami berhasil menurunkan holding cost (biaya penyimpanan) hingga 40% dan meningkatkan on-time delivery rate menjadi 98%.',
      },
       {
        industry: 'Manufaktur',
        benefit: 'Sistem predictive maintenance yang kami bangun mampu memprediksi kegagalan mesin 2 minggu sebelumnya, mengurangi downtime mesin sebesar 60% dan menghemat biaya perbaikan darurat.',
      },
    ],
  },
  technical: {
    title: 'Sorotan Tumpukan Analitik Kami',
    highlights: [
      { name: 'Sumber Data', value: 'Integrasi dengan berbagai sumber: Database (SQL, NoSQL), API pihak ketiga, Google Analytics, CRM (Salesforce, HubSpot), ERP (SAP), file flat (CSV, Excel).' },
      { name: 'Pemrosesan', value: 'Arsitektur cloud-native yang scalable (menggunakan AWS, GCP, atau Azure), dengan opsi pemrosesan real-time (streaming) atau batch sesuai kebutuhan.' },
      { name: 'Visualisasi', value: 'Dashboard interaktif dan dapat disesuaikan menggunakan tools terkemuka seperti Tableau, Power BI, Looker, atau solusi custom dengan D3.js. Laporan dapat diekspor ke berbagai format.' },
    ],
  },
  faq: {
    title: 'Pertanyaan yang Sering Diajukan',
    questions: [
      {
        question: 'Berapa banyak data historis yang dibutuhkan untuk membangun model prediktif yang baik?',
        answer: 'Jumlah data ideal sangat tergantung pada use case dan kompleksitas masalah. Namun, sebagai aturan umum, semakin banyak data historis yang bersih dan berkualitas, semakin baik akurasi model yang dapat kami hasilkan. Kami akan melakukan data assessment di awal untuk menentukan kelayakan.',
      },
      {
        question: 'Apakah solusi ini bisa diintegrasikan dengan tool BI yang sudah kami gunakan (misalnya Tableau, Power BI)?',
        answer: 'Tentu saja. Kami dapat mengintegrasikan data pipeline dan model machine learning kami dengan tool BI yang sudah Anda miliki. Kami bisa menjadi "mesin" di belakang layar yang menyediakan data matang dan prediksi untuk divisualisasikan di platform pilihan Anda.',
      },
       {
        question: 'Bagaimana dengan keamanan dan kerahasiaan data perusahaan kami?',
        answer: 'Keamanan data adalah prioritas utama kami. Kami menerapkan praktik terbaik dalam keamanan data, termasuk enkripsi data saat transit dan saat istirahat (at rest), manajemen akses yang ketat (role-based access control), dan mematuhi standar kepatuhan industri. Semua proses kami didesain untuk menjaga kerahasiaan data Anda.',
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
    chatMockup: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDB8fDB8fHww', // Placeholder
    architectureDiagram: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDB8fDB8fHww', // Placeholder
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
    tagline: 'Strategi AI yang Selaras dengan Bisnis - Bukan Sekadar Teknologi',
    subheading: 'Kami membantu Anda mulai dari assessment kematangan AI, merumuskan business case yang solid, hingga menyusun roadmap implementasi yang detail dan terukur untuk kesuksesan jangka panjang.',
    cta: 'Mulai AI Transformation Assessment Anda',
    visual: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1c2luZXNzJTIwc3RyYXRlZ3l8ZW58MHx8MHx8fDA%',
  },
  problem: {
    title: 'Tantangan Adopsi AI di Dunia Nyata',
    points: [
      'Banyak perusahaan bingung harus memulai inisiatif AI dari mana. Apakah harus membangun chatbot, analisis prediktif, atau otomatisasi proses? Tanpa peta jalan yang jelas, inisiatif AI seringkali bersifat sporadis dan tidak memberikan dampak maksimal.',
      'Investasi AI yang signifikan seringkali tidak diimbangi dengan Return on Investment (ROI) yang jelas dan terukur. Proyek menjadi "science project" yang menarik secara teknis, tetapi gagal memberikan nilai bisnis yang nyata.',
      'Pendekatan yang terlalu teknis dan terisolasi dari tim bisnis seringkali gagal karena tidak selaras dengan objektif bisnis utama. Solusi yang dibangun tidak menjawab masalah nyata yang dihadapi oleh tim sales, marketing, atau operasional.',
      'Kompetitor sudah bergerak cepat memanfaatkan AI untuk efisiensi dan inovasi, sementara perusahaan Anda masih terjebak dalam analisis dan kesulitan menentukan prioritas strategis yang paling mendesak dan berdampak.',
    ],
  },
  solution: {
    title: 'Komponen Layanan Advisory Kami',
    features: [
      {
        name: 'AI Maturity Assessment & Gap Analysis',
        description: 'Kami melakukan analisis mendalam terhadap kondisi perusahaan Anda saat ini (people, process, technology), mengidentifikasi kesenjangan (gap analysis) antara kondisi saat ini dan tujuan masa depan, serta melakukan perbandingan dengan standar dan praktik terbaik di industri Anda (benchmarking).',
      },
      {
        name: 'Penyusunan Business Case & Definisi KPI',
        description: 'Kami tidak hanya bicara teknologi. Kami membantu Anda mengidentifikasi dan memvalidasi peluang AI dengan nilai bisnis tertinggi, membangun model ROI yang solid untuk setiap inisiatif, mendefinisikan Key Performance Indicators (KPI) yang jelas, serta melakukan penilaian risiko untuk memastikan setiap investasi AI dapat dipertanggungjawabkan.',
      },
      {
        name: 'AI Strategy & Implementation Roadmap',
        description: 'Hasil akhir dari layanan kami adalah sebuah dokumen strategi yang actionable. Anda akan mendapatkan kerangka kerja prioritas yang jelas (berdasarkan matriks effort vs. impact), rencana implementasi bertahap (phased implementation plan) untuk 12-36 bulan ke depan, dan rekomendasi arsitektur serta tech stack yang paling sesuai dengan kebutuhan dan budget Anda.',
      },
    ],
  },
  useCases: {
    title: 'Siapa yang Paling Mendapat Manfaat?',
    cases: [
      {
        industry: 'Enterprise & Korporasi',
        benefit: 'Perusahaan dengan operasi yang kompleks (seperti perbankan, manufaktur, logistik) yang ingin mengintegrasikan AI secara sistematis di berbagai departemen untuk meningkatkan efisiensi dan menciptakan keunggulan kompetitif.',
      },
      {
        industry: 'Perusahaan Mid-market',
        benefit: 'Bisnis yang sedang dalam tahap perencanaan transformasi digital dan ingin memastikan bahwa AI menjadi pilar utama dalam strategi pertumbuhan mereka, bukan hanya sebagai tambahan.',
      },
      {
        industry: 'Startup & Scale-up',
        benefit: 'Perusahaan rintisan yang didanai dengan baik dan ingin menjadikan AI sebagai fondasi untuk skalabilitas produk, personalisasi layanan, dan efisiensi operasional sejak dini.',
      },
    ],
  },
  technical: {
    title: 'Dokumen Penting yang Akan Anda Dapatkan',
    highlights: [
        { name: 'Laporan AI Maturity & Benchmark', value: 'Tercakup' },
        { name: 'Dokumen Business Case & Model ROI (per inisiatif)', value: 'Tercakup' },
        { name: 'Dokumen Roadmap Strategis (12-36 bulan)', value: 'Tercakup' },
    ],
  },
  faq: {
    title: 'Pertanyaan yang Sering Diajukan',
    questions: [
      {
        question: 'Bagaimana cara Anda menentukan prioritas inisiatif AI?',
        answer: 'Kami menggunakan matriks effort vs. impact yang telah terbukti. Kami memetakan setiap inisiatif potensial berdasarkan perkiraan upaya (waktu, biaya, kompleksitas teknis) dan potensi dampak (pendapatan, penghematan biaya, kepuasan pelanggan). Ini memungkinkan kita untuk fokus pada "quick wins" sambil membangun fondasi untuk inisiatif jangka panjang.',
      },
      {
        question: 'Berapa tipikal ROI dari sebuah inisiatif AI?',
        answer: 'ROI sangat bervariasi tergantung pada industri, use case, dan kualitas implementasi. Namun, sebelum proyek dimulai, kami akan bekerja sama dengan Anda untuk membangun model finansial yang solid untuk setiap business case. Ini akan memberikan proyeksi ROI yang jelas dan terukur, sehingga Anda dapat membuat keputusan investasi yang tepat.',
      },
      {
        question: 'Apakah layanan ini hanya strategi, atau termasuk implementasi?',
        answer: 'Layanan ini berfokus pada penyusunan strategi dan roadmap. Namun, roadmap yang kami hasilkan dirancang untuk langsung dapat dieksekusi. Kami dapat melanjutkan kemitraan ke tahap implementasi melalui layanan kami yang lain, memastikan kesinambungan dari strategi hingga eksekusi.',
      },
    ],
  },
  pricing: {
    title: 'Pricing',
    price: 'Custom pricing',
    cta: 'Jadwalkan Sesi Konsultasi Strategi - Gratis 1 Jam',
  },
  visualAssets: {
    architectureDiagram: 'https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBzdHJhdGVneXxlbnwwfHwwfHx8MA%',
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
    tagline: 'Otomasi Proses Manual - Hemat Waktu, Tingkatkan Akurasi, Skalakan Bisnis',
    subheading: 'Dari proses approval invoice yang rumit hingga onboarding karyawan baru, kami dapat mengotomatisasi alur kerja Anda untuk efisiensi maksimal.',
    cta: 'Audit Proses Bisnis Anda Gratis',
    visual: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF1dG9tYXRpb258ZW58MHx8MHx8fDA%',
  },
  problem: {
    title: 'Biaya Tersembunyi di Balik Proses Manual',
    points: [
      'Menurut riset, karyawan Anda menghabiskan lebih dari 30% waktu mereka untuk tugas-tugas administratif yang repetitif dan bernilai rendah, seperti copy-paste data antar sistem, rekap laporan manual, dan follow-up approval.',
      'Proses approval dokumen penting (misalnya invoice, PO, cuti) yang melibatkan banyak departemen seringkali memakan waktu lebih dari 5 hari kerja, menyebabkan keterlambatan pembayaran, ketidakpuasan vendor, dan menghambat kecepatan bisnis.',
      'Kesalahan manusia (human error) dalam proses data entry tidak bisa dihindari dan dapat menurunkan akurasi data hingga 15%, yang berujung pada keputusan bisnis yang salah dan potensi kerugian finansial.',
      'Saat bisnis Anda perlu untuk tumbuh (scale-up), proses manual yang kaku dan bergantung pada individu menjadi hambatan utama (bottleneck) yang menghalangi Anda untuk melayani lebih banyak pelanggan dengan efisien.',
    ],
  },
  solution: {
    title: 'Solusi BPA Kami (dengan Contoh Alur Kerja)',
    features: [
      {
        name: 'Otomatisasi Departemen Keuangan',
        description: 'Kami merancang alur kerja otomatis untuk proses invoice: mulai dari ekstraksi data invoice masuk dengan teknologi OCR, validasi otomatis terhadap PO, routing approval berjenjang secara digital, hingga penjadwalan pembayaran di sistem akuntansi Anda tanpa sentuhan manual (zero-touch processing).',
      },
      {
        name: 'Otomatisasi Departemen HR',
        description: 'Sederhanakan proses rekrutmen dan administrasi karyawan. Kami dapat mengotomatisasi proses mulai dari screening resume berbasis kata kunci, penjadwalan interview otomatis, pengiriman notifikasi ke kandidat dan user, background check, hingga pembuatan surat penawaran (offer letter generation) secara dinamis.',
      },
      {
        name: 'Otomatisasi Departemen Penjualan & Operasional',
        description: 'Optimalkan alur kerja tim penjualan Anda. Kami membangun sistem untuk lead entry otomatis dari web form ke CRM, sinkronisasi data pelanggan antar platform, pengiriman email nurturing campaign secara terjadwal, hingga penjadwalan meeting otomatis dengan prospek berdasarkan ketersediaan kalender.',
      },
    ],
  },
  useCases: {
    title: 'Keunggulan Pendekatan Kami',
    cases: [
      {
        industry: 'Audit Proses End-to-End',
        benefit: 'Kami tidak hanya mengotomatisasi. Kami memulai dengan memetakan kondisi proses Anda saat ini (current state), mengidentifikasi titik-titik nyeri (pain points) dan inefisiensi, serta menemukan peluang perbaikan yang paling berdampak.',
      },
      {
        industry: 'Identifikasi "Quick Wins"',
        benefit: 'Berdasarkan audit, kami membantu Anda memprioritaskan proses-proses yang memberikan ROI tertinggi dengan upaya implementasi yang paling rendah, sehingga Anda dapat merasakan manfaat otomatisasi dalam waktu singkat.',
      },
      {
        industry: 'Integrasi dengan Sistem Anda',
        benefit: 'Solusi kami dirancang untuk bekerja dengan teknologi yang sudah Anda miliki. Kami memastikan aliran data yang lancar (seamless) ke sistem ERP, CRM, atau akuntansi Anda, baik itu SAP, Xero, Salesforce, atau sistem custom lainnya.',
      },
    ],
  },
  technical: {
    title: 'Pendekatan Implementasi Kami',
    highlights: [
      { name: 'Fase 1: Penemuan & Pemetaan', value: 'Pemetaan proses dan validasi kebutuhan (1-2 minggu)' },
      { name: 'Fase 2: Pengembangan & Pengujian', value: 'Pembuatan prototipe, pengujian dengan pengguna, dan iterasi (2-3 minggu)' },
      { name: 'Fase 3: Peluncuran & Pelatihan', value: 'Peluncuran bertahap ke seluruh pengguna dan sesi pelatihan (1 minggu)' },
    ],
  },
  faq: {
    title: 'Pertanyaan yang Sering Diajukan',
    questions: [
      {
        question: 'Berapa banyak proses yang bisa diotomatisasi di perusahaan kami?',
        answer: 'Hampir semua proses yang berbasis aturan, berulang, dan memiliki input data digital dapat diotomatisasi. Kami akan membantu Anda melakukan audit untuk mengidentifikasi proses-proses kandidat terbaik yang akan memberikan dampak terbesar bagi bisnis Anda.',
      },
      {
        question: 'Apakah kami perlu mengganti sistem yang sudah ada?',
        answer: 'Tidak. Pendekatan kami adalah non-intrusif. Solusi Robotic Process Automation (RPA) dan workflow automation kami dirancang untuk berinteraksi dengan aplikasi dan sistem yang sudah Anda gunakan, sama seperti cara karyawan Anda berinteraksi dengannya. Ini meminimalkan disrupsi dan mempercepat implementasi.',
      },
      {
        question: 'Bagaimana cara mengukur keberhasilan proyek otomatisasi ini?',
        answer: 'Sebelum proyek dimulai, kita akan bersama-sama mendefinisikan metrik keberhasilan (Success Metrics) yang jelas. Ini bisa berupa pengurangan waktu proses (cycle time), penurunan tingkat kesalahan (error rate), peningkatan jumlah transaksi yang diproses, atau penghematan biaya operasional. Kami akan menyediakan dashboard untuk memantau KPI ini secara real-time.',
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
    cta: 'Jadwalkan Audit Proses Gratis - Identifikasi Peluang Otomatisasi',
  },
  visualAssets: {
    architectureDiagram: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXV0b21hdGlvbnxlbnwwfHwwfHx8MA==',
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
    tagline: 'Asisten Virtual AI yang Memahami Bisnis dan Pelanggan Indonesia Anda, 24/7',
    subheading: 'Dapatkan response time instan, layani pelanggan dalam bahasa lokal yang natural, dan terintegrasi penuh dengan platform WhatsApp yang mereka gunakan setiap hari.',
    cta: 'Buat Chatbot AI Anda Sekarang',
    visual: 'https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhdGJvdCUyMGFpfGVufDB8fDB8fHww',
  },
  problem: {
    title: 'Mengapa Layanan Pelanggan Konvensional Tidak Lagi Cukup?',
    points: [
      'Tim layanan pelanggan Anda kewalahan menjawab pertanyaan yang sama berulang kali, sementara pertanyaan yang lebih kompleks dan bernilai tinggi terabaikan. Ini menyebabkan inefisiensi dan burnout pada tim.',
      'Pelanggan modern mengharapkan respons instan. Menunggu balasan email berjam-jam atau antrian telepon yang panjang dapat menurunkan kepuasan pelanggan secara drastis dan meningkatkan risiko mereka beralih ke kompetitor.',
      'Biaya operasional untuk tim customer service yang besar (gaji, training, infrastruktur) terus meningkat, membebani anggaran perusahaan tanpa jaminan peningkatan kualitas layanan yang sepadan.',
      'Kualitas jawaban dari agen manusia bisa tidak konsisten, tergantung pada individu, waktu, dan mood. Hal ini menciptakan pengalaman pelanggan yang tidak seragam dan dapat merusak citra brand Anda.',
    ],
  },
  solution: {
    title: 'Fitur Unggulan Chatbot Cerdas Kami',
    features: [
      {
        name: 'Natural Language Processing (NLP) Bilingual',
        description: 'Dibangun dengan model NLP canggih, chatbot kami mampu memahami percakapan dalam Bahasa Indonesia dan Inggris secara natural, termasuk bahasa gaul, singkatan (spt, yg, dll), dan bahkan typo. Ini menciptakan pengalaman percakapan yang mulus, bukan seperti berbicara dengan robot kaku.',
      },
      {
        name: 'Integrasi Penuh dengan WhatsApp & Platform Lain',
        description: 'Hadir di platform yang paling banyak digunakan pelanggan Anda. Kami menyediakan integrasi penuh dengan WhatsApp Business API, serta platform lain seperti Telegram, LINE, dan Facebook Messenger. Terima pesanan, jawab pertanyaan, dan berikan dukungan langsung di aplikasi favorit mereka.',
      },
      {
        name: 'Knowledge Base yang Mudah Dikelola',
        description: 'Anda tidak perlu menjadi seorang programmer untuk "mengajari" chatbot Anda. Anda dapat mengupdate database pengetahuan, produk, atau FAQ chatbot dengan mudah melalui dashboard intuitif kami. Cukup unggah dokumen atau tambahkan Q&A, dan chatbot akan belajar secara otomatis.',
      },
      {
        name: 'Dashboard Analitik & Sentimen Real-time',
        description: 'Dapatkan insight berharga dari setiap percakapan. Pantau percakapan secara real-time, identifikasi pertanyaan yang paling sering diajukan, analisis sentimen pelanggan (positif, negatif, netral), dan dapatkan laporan performa untuk terus meningkatkan kualitas layanan dan strategi bisnis Anda.',
      },
    ],
  },
  useCases: {
    title: 'Contoh Penerapan di Berbagai Industri',
    cases: [
      {
        industry: 'E-commerce & Retail',
        benefit: 'Otomatisasi 80% pertanyaan umum seputar status pesanan, ketersediaan stok, dan spesifikasi produk. Hasil: Mengurangi biaya customer service hingga 50% dan meningkatkan kecepatan respons.',
      },
      {
        industry: 'Food & Beverage',
        benefit: 'Menerima pesanan delivery dan reservasi meja secara otomatis melalui WhatsApp 24/7, bahkan di luar jam operasional. Hasil: Meningkatkan jumlah pesanan hingga 30% tanpa menambah staf.',
      },
      {
        industry: 'Real Estate & Properti',
        benefit: 'Melayani ratusan calon pembeli secara bersamaan, menjawab pertanyaan tentang ketersediaan unit, harga, dan jadwal kunjungan. Hasil: Mempercepat proses kualifikasi lead dan meningkatkan jumlah kunjungan lokasi sebesar 40%.',
      },
      {
        industry: 'Pendidikan & Pelatihan',
        benefit: 'Menjawab pertanyaan calon siswa tentang program, biaya, dan jadwal pendaftaran secara instan, serta memberikan pengingat kelas. Hasil: Meningkatkan konversi pendaftaran dan efisiensi administrasi.',
      },
    ],
  },
  technical: {
    title: 'Sorotan Teknis Kami',
    highlights: [
      { name: 'Model NLP', value: 'Berbasis arsitektur Transformers terkini untuk pemahaman konteks yang superior.' },
      { name: 'Akurasi Pengenalan Niat', value: 'Mencapai 95%+ dalam mengenali maksud dan tujuan pengguna.' },
      { name: 'Waktu Respons (Latency)', value: 'Kurang dari 500ms untuk pengalaman percakapan yang real-time.' },
      { name: 'Skalabilitas', value: 'Dibangun di atas arsitektur microservices yang dapat menangani jutaan percakapan secara bersamaan.' },
    ],
  },
  roi: {
    title: 'Kalkulator ROI',
    inputLabel: 'Berapa banyak pertanyaan pelanggan per hari?',
    outputLabel: 'Estimasi penghematan biaya customer service: Rp X juta/bulan',
  },
  faq: {
    title: 'Pertanyaan yang Sering Diajukan',
    questions: [
      {
        question: 'Apakah chatbot bisa menangani pertanyaan yang sangat kompleks atau emosional?',
        answer: 'Chatbot kami dirancang untuk menangani sebagian besar pertanyaan umum dan transaksional. Namun, untuk pertanyaan yang sangat kompleks, bersifat keluhan, atau membutuhkan empati manusia, kami dapat mengimplementasikan alur "human handover" di mana percakapan akan secara mulus dialihkan ke agen manusia yang tersedia.',
      },
      {
        question: 'Berapa lama waktu yang dibutuhkan untuk setup awal chatbot?',
        answer: 'Untuk chatbot berbasis FAQ standar, setup awal bisa dilakukan dalam 1-2 minggu. Untuk proyek yang lebih kompleks dengan integrasi ke sistem backend (seperti CRM atau ERP), prosesnya bisa memakan waktu 3-6 minggu, tergantung pada kompleksitas integrasi yang dibutuhkan.',
      },
      {
        question: 'Bagaimana jika chatbot memberikan jawaban yang salah?',
        answer: 'Setiap jawaban yang diberikan chatbot dapat dinilai oleh pengguna (jempol ke atas/bawah). Dashboard analitik kami akan menandai jawaban dengan rating rendah untuk Anda tinjau dan perbaiki. Proses ini memastikan chatbot Anda terus belajar dan menjadi lebih cerdas seiring waktu.',
      },
    ],
  },
  successMetrics: {
    title: 'Metrik Keberhasilan Kami',
    metrics: [
      { value: '300+', label: 'Chatbot Telah Diimplementasikan' },
      { value: '10M+', label: 'Percakapan Telah Ditangani' },
      { value: '92%', label: 'Tingkat Kepuasan Pelanggan' },
    ],
  },
  pricing: {
    title: 'Pricing',
    price: 'Mulai dari Rp X/bulan',
    cta: 'Konsultasi Gratis - Rancang Strategi Chatbot Anda',
  },
  visualAssets: {
    chatMockup: 'https://images.unsplash.com/photo-1762330465857-07e4c81c0dfa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhdGJvdCUyMGFpfGVufDB8fDB8fHww',
    architectureDiagram: 'https://images.unsplash.com/photo-1684493735679-359868df0e18?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhdGJvdCUyMGFpfGVufDB8fDB8fHww',
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
    tagline: 'Mata AI untuk Bisnis Anda - Dari Dokumen Fisik hingga Inspeksi Visual',
    subheading: 'Kami menyediakan solusi otomasi cerdas untuk pemrosesan dokumen dan inspeksi kualitas visual dengan tingkat akurasi yang sangat tinggi, mencapai 99%+',
    cta: 'Lihat Demo Computer Vision',
    visual: 'https://images.unsplash.com/photo-1628422537562-0980980f52a0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjaWFsJTIwcmVjb2duaXRpb258ZW58MHx8MHx8fDA%',
  },
  problem: {
    title: 'Mengapa Proses Manual Menghambat Pertumbuhan Anda?',
    points: [
      'Pemrosesan dokumen manual seperti invoice, formulir, dan KTP sangat lambat, tidak konsisten, dan rentan terhadap kesalahan manusia yang dapat merugikan secara finansial dan reputasi.',
      'Inspeksi kualitas produk di lini manufaktur yang bergantung pada mata manusia seringkali terkendala oleh kelelahan operator, yang menyebabkan cacat produk terlewat, biaya rework yang tinggi, dan ketidakpuasan pelanggan.',
      'Proses verifikasi dokumen manual untuk kepatuhan (compliance) seperti KYC (Know Your Customer) di industri keuangan menjadi bottleneck utama yang memperlambat onboarding pelanggan baru.',
      'Proses onboarding pelanggan yang panjang dan berbelit-belit karena verifikasi manual menciptakan friksi dan pengalaman pengguna yang buruk, yang dapat menyebabkan calon pelanggan meninggalkan proses di tengah jalan.',
    ],
  },
  solution: {
    title: 'Kapabilitas Unggulan Computer Vision Kami',
    features: [
      {
        name: 'OCR (Optical Character Recognition) Cerdas',
        description: 'Kami dapat mengekstrak teks dari berbagai jenis dokumen secara otomatis dengan akurasi tinggi, termasuk invoice yang berantakan, kuitansi, KTP, paspor, NPWP, dan laporan keuangan, lalu mengubahnya menjadi data terstruktur yang siap pakai.',
      },
      {
        name: 'Klasifikasi Dokumen Otomatis',
        description: 'Sistem kami dapat secara cerdas mengidentifikasi dan mengklasifikasikan jenis dokumen (misalnya, membedakan antara KTP dan SIM) secara otomatis, mempercepat proses triase dan routing dokumen ke alur kerja yang benar.',
      },
      {
        name: 'Pengenalan Tulisan Tangan (Handwriting Recognition)',
        description: 'Tidak hanya teks cetak, teknologi AI kami juga mampu membaca dan mengubah tulisan tangan pada formulir atau catatan menjadi data digital dengan tingkat akurasi yang terus belajar dan meningkat.',
      },
      {
        name: 'Inspeksi Kualitas Visual Otomatis',
        description: 'Implementasikan sistem deteksi cacat produk, anomali manufaktur, dan pemantauan kualitas secara real-time langsung di lini produksi Anda untuk memastikan setiap produk memenuhi standar tertinggi.',
      },
      {
        name: 'Pengenalan Wajah & Biometrik',
        description: 'Kami menyediakan solusi canggih dan aman untuk proses e-KYC, sistem absensi tanpa sentuh (touchless), dan kontrol akses keamanan gedung berbasis verifikasi wajah.',
      },
    ],
  },
  useCases: {
    title: 'Penerapan di Berbagai Industri',
    cases: [
      {
        industry: 'Perbankan & Keuangan',
        benefit: 'Mempercepat proses verifikasi e-KYC dari 30 menit menjadi kurang dari 5 menit, mengurangi friksi saat onboarding nasabah baru hingga 83%.',
      },
      {
        industry: 'Asuransi',
        benefit: 'Mengotomatisasi proses klaim dengan mengekstrak data dari dokumen polis dan laporan kerusakan dengan akurasi 95%, mempercepat waktu penyelesaian klaim secara signifikan.',
      },
      {
        industry: 'Manufaktur & E-commerce',
        benefit: 'Mengimplementasikan sistem inspeksi kualitas produk yang mampu mendeteksi 99.7% cacat produk secara otomatis, mengurangi jumlah produk gagal yang sampai ke tangan pelanggan.',
      },
       {
        industry: 'Logistik & Pergudangan',
        benefit: 'Otomatisasi pembacaan nomor kontainer dan surat jalan menggunakan kamera, mempercepat proses gate-in/gate-out dan mengurangi antrian truk.',
      },
    ],
  },
  technical: {
    title: 'Keunggulan Teknis Kami',
    highlights: [
      { name: 'Akurasi OCR', value: 'Mencapai 98-99%+ untuk dokumen cetak standar.' },
      { name: 'Kecepatan Proses', value: 'Kurang dari 2 detik per halaman dokumen.' },
      { name: 'Format yang Didukung', value: 'PDF, JPG, PNG, TIFF, dan bahkan stream video real-time.' },
      { name: 'Deployment', value: 'Fleksibel, dapat di-deploy di cloud (SaaS) atau on-premise sesuai kebutuhan keamanan data Anda.' },
    ],
  },
  faq: {
    title: 'Pertanyaan yang Sering Diajukan',
    questions: [
      {
        question: 'Berapa tingkat akurasi OCR untuk dokumen yang kualitasnya kurang baik atau tulisan tangan?',
        answer: 'Akurasi dapat bervariasi tergantung kualitas gambar. Namun, model kami telah dilatih dengan jutaan data untuk menangani berbagai kondisi, termasuk gambar buram atau tulisan tangan yang unik. Kami juga memberikan confidence score untuk setiap data yang diekstrak, sehingga data dengan skor rendah dapat ditinjau secara manual.',
      },
      {
        question: 'Apakah sistem ini bisa memproses dokumen dalam bahasa daerah?',
        answer: 'Saat ini, fokus utama kami adalah Bahasa Indonesia dan Inggris. Namun, kami memiliki kapabilitas untuk melatih model khusus (custom-trained model) untuk bahasa atau dialek daerah dengan penyediaan data sampel yang cukup dari pihak Anda.',
      },
      {
        question: 'Bagaimana sistem menangani upaya pemalsuan dokumen atau fraud?',
        answer: 'Sistem kami memiliki beberapa lapisan keamanan, termasuk fitur deteksi anomali (misalnya, font yang tidak standar pada KTP), cross-validation data, dan fitur liveness detection pada proses verifikasi wajah untuk memastikan orang tersebut benar-benar hadir dan bukan foto atau video.',
      },
    ],
  },
  successMetrics: {
    title: 'Rekam Jejak Kami',
    metrics: [
      { value: '80+', label: 'Klien Bank & Fintech' },
      { value: '500M+', label: 'Dokumen Telah Diproses' },
      { value: '99.2%', label: 'Tingkat Akurasi Rata-rata' },
    ],
  },
  pricing: {
    title: 'Pricing',
    price: 'Custom pricing',
    cta: 'Coba Demo OCR Gratis - Unggah Dokumen Anda Sekarang',
  },
  visualAssets: {
    architectureDiagram: 'https://images.unsplash.com/photo-1559137771-536eecb999ab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjaWFsJTIwcmVjb2duaXRpb258ZW58MHx8MHx8fDA%',
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
    tagline: 'Sistem POS Sewa Fleksibel - Mulai Jualan Tanpa Modal Besar',
    subheading: 'Dapatkan paket lengkap hardware & software, tanpa komitmen jangka panjang yang mengikat. Anda bisa meng-upgrade sistem kapan saja seiring pertumbuhan bisnis Anda.',
    cta: 'Cek Paket POS Rental Kami',
    visual: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9pbnQlMjBvZiUyMHNhbGV8ZW58MHx8MHx8fDA%',
  },
  problem: {
    title: 'Mengapa Sewa POS Lebih Cerdas Daripada Membeli?',
    points: [
      'Membeli sistem POS lengkap membutuhkan investasi modal awal yang besar, bisa mencapai Rp 5-15 juta per set, ditambah biaya setup dan maintenance yang tidak terduga. Ini menjadi beban berat terutama bagi bisnis baru atau UMKM.',
      'Dengan sistem sewa, Anda bisa memulai bisnis dengan biaya yang jauh lebih terjangkau, mulai dari Rp 500 ribu per bulan. Paket kami sudah termasuk semua layanan (all-inclusive) dan kemudahan untuk upgrade kapasitas seiring pertumbuhan bisnis.',
      'Saat bisnis Anda berkembang dan membutuhkan lebih banyak fitur atau terminal, Anda bisa meng-upgrade paket sewa kapan saja tanpa perlu membeli hardware baru yang mahal dan menjual yang lama dengan harga rugi.',
      'Teknologi POS berkembang sangat cepat. Dengan menyewa, Anda tidak perlu khawatir sistem Anda menjadi usang. Anda bisa dengan mudah beralih ke teknologi terbaru untuk tetap kompetitif tanpa menanggung kerugian depresiasi aset.',
    ],
  },
  solution: {
    title: 'Pilihan Paket POS Rental yang Sesuai Kebutuhan Anda',
    features: [
      {
        name: 'Paket Starter (Untuk Pop-up & Bisnis Baru)',
        description: 'Sangat cocok untuk bisnis baru, pop-up store, atau booth event. Paket ini sudah termasuk 1 unit tablet POS, printer thermal, scanner barcode, dan cash drawer. Software sudah mencakup manajemen penjualan dan laporan dasar.',
      },
      {
        name: 'Paket Profesional (Untuk Ritel & F&B)',
        description: 'Dirancang untuk bisnis ritel atau F&B yang sudah mapan dengan volume transaksi lebih tinggi. Termasuk dua terminal kasir, kitchen printer (untuk F&B), dan software dengan fitur canggih seperti manajemen inventori, program loyalitas pelanggan, dan analitik penjualan.',
      },
      {
        name: 'Paket Enterprise (Untuk Multi-cabang)',
        description: 'Solusi komprehensif untuk bisnis dengan banyak cabang atau model franchise. Sistem yang scalable, dashboard terpusat untuk memantau semua cabang, manajemen karyawan, dan opsi integrasi custom dengan sistem akuntansi atau ERP Anda.',
      },
    ],
  },
  useCases: {
    title: 'Cocok Untuk Berbagai Jenis Industri',
    cases: [
      {
        industry: 'Makanan & Minuman (F&B)',
        benefit: 'Restoran, kafe, coffee shop, quick service restaurant (QSR), food truck, dan waralaba makanan.',
      },
      {
        industry: 'Ritel & Toko',
        benefit: 'Toko online/offline, butik fashion, toko kelontong, convenience store, dan toko oleh-oleh.',
      },
      {
        industry: 'Jasa & Layanan',
        benefit: 'Salon, spa, barbershop, laundry, penyewaan alat, dan berbagai bisnis berbasis layanan lainnya.',
      },
    ],
  },
  technical: {
    title: "Apa Saja yang Termasuk dalam Paket Sewa?",
    highlights: [
      { name: 'Perangkat Keras & Lunak Lengkap', value: 'Tercakup' },
      { name: 'Instalasi & Pelatihan Karyawan', value: 'Tercakup' },
      { name: 'Perawatan & Dukungan Teknis 24/7', value: 'Tercakup' },
      { name: 'Pembaruan Software Gratis', value: 'Tercakup' },
    ],
  },
  faq: {
    title: 'Pertanyaan yang Sering Diajukan',
    questions: [
      {
        question: 'Berapa minimum komitmen kontrak untuk sewa?',
        answer: 'Paket standar kami memiliki minimum komitmen 12 bulan untuk mendapatkan harga terbaik. Namun, kami juga menawarkan opsi sewa fleksibel bulanan atau per-event untuk kebutuhan jangka pendek Anda.',
      },
      {
        question: 'Apa yang terjadi jika ada perangkat keras yang rusak?',
        answer: 'Paket sewa kami sudah termasuk layanan pemeliharaan penuh. Jika ada perangkat yang rusak karena pemakaian normal, tim teknis kami akan segera memperbaiki atau menggantinya tanpa ada biaya tambahan untuk Anda.',
      },
      {
        question: 'Apakah data penjualan saya aman?',
        answer: 'Ya, keamanan data Anda adalah prioritas kami. Semua data transaksi disimpan di cloud dengan sistem keamanan berlapis dan dienkripsi. Anda memiliki kontrol penuh atas akses ke data bisnis Anda.',
      },
    ],
  },
    successMetrics: {
        title: 'Kisah Sukses Pelanggan Kami',
        metrics: [
            { value: '25%', label: 'Pengurangan pemborosan bahan baku (Klien Restoran)' },
            { value: '2 menit', label: 'Waktu tutup kasir harian (dibanding 30 menit manual)' },
        ],
    },
  pricing: {
    title: 'Harga Paket Sewa',
    price: 'Mulai dari Rp 500 Ribu/bulan',
    cta: 'Pilih Paket Anda Sekarang',
  },
  visualAssets: {
    chatMockup: 'https://images.unsplash.com/photo-1647427017067-8f33ccbae493?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9pbnQlMjBvZiUyMHNhbGV8ZW58MHx8MHx8fDA%',
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
    tagline: 'Implementasi AI Bukan Hanya Soal Teknologi - Adopsi Tim adalah Kunci Sukses',
    subheading: 'Kami menawarkan workshop praktis yang disesuaikan dengan kebutuhan, playbook change management yang teruji, serta pendampingan hands-on untuk memastikan kelancaran transisi digital Anda.',
    cta: 'Rencanakan Program Pelatihan Anda',
    visual: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhbmdlJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%',
  },
  problem: {
    title: 'Masalah Sebenarnya: Teknologi Canggih, Namun Gagal Digunakan',
    points: [
      'Menurut McKinsey, hingga 70% inisiatif transformasi digital gagal mencapai tujuan yang diharapkan. Penyebab utamanya bukan pada teknologinya, tetapi karena rendahnya tingkat adopsi oleh pengguna dan resistensi terhadap perubahan.',
      'Tim Anda seringkali resisten terhadap perubahan karena tidak memahami "what\'s in it for me?" (apa untungnya bagi saya), adanya ketakutan akan kehilangan pekerjaan (job displacement), atau merasa tidak nyaman meninggalkan cara kerja lama.',
      'Terdapat kesenjangan besar antara implementasi teknis sebuah sistem dengan adopsi aktualnya dalam alur kerja sehari-hari. Sistem baru yang canggih akhirnya hanya menjadi ikon di desktop yang tidak pernah digunakan.',
      'Proyek percontohan (pilot project) mungkin berhasil di lingkup kecil, tetapi seringkali gagal saat diimplementasikan ke seluruh organisasi karena kurangnya strategi komunikasi, pelatihan yang tidak efektif, dan persiapan yang minim.',
    ],
  },
  solution: {
    title: 'Solusi Holistik Training & Change Management Kami',
    features: [
      {
        name: 'Workshop Pelatihan Onsite & Virtual yang Disesuaikan',
        description: 'Kami tidak memberikan pelatihan "satu untuk semua". Kami merancang sesi pelatihan yang disesuaikan untuk berbagai peran, mulai dari C-level (fokus pada dampak bisnis & ROI), manajer (fokus pada manajemen tim & KPI baru), hingga pengguna akhir (fokus pada penggunaan sistem sehari-hari).',
      },
      {
        name: 'Praktik Langsung dengan Skenario Nyata (Hands-on)',
        description: 'Teori saja tidak cukup. Peserta akan berlatih menggunakan data simulasi yang mirip dengan data riil, mengerjakan skenario yang relevan dengan pekerjaan mereka, dan mengatasi pain points yang sesungguhnya untuk pengalaman belajar yang efektif dan melekat.',
      },
      {
        name: 'Penyusunan Playbook Manajemen Perubahan',
        description: 'Kami tidak akan meninggalkan Anda setelah pelatihan selesai. Kami akan bekerja sama dengan Anda untuk menyusun panduan langkah-demi-langkah (playbook) yang komprehensif untuk mengelola perubahan organisasi secara efektif, mulai dari strategi komunikasi, identifikasi agen perubahan (change agents), hingga cara mengatasi resistensi.',
      },
    ],
  },
  useCases: {
    title: 'Komponen Program Kami',
    cases: [
      {
        industry: 'Executive Briefing (untuk C-suite & Pimpinan)',
        benefit: 'Sesi singkat (2-3 jam) untuk menyelaraskan visi, memahami kapabilitas dan batasan AI, serta memvalidasi business case dan metrik kesuksesan.',
      },
      {
        industry: 'Manager Training (untuk Supervisor & Kepala Departemen)',
        benefit: 'Workshop setengah hari yang berfokus pada bagaimana AI akan mengubah alur kerja tim, cara menetapkan KPI baru, dan strategi untuk memimpin tim melalui perubahan.',
      },
      {
        industry: 'End-User Training (untuk Staf & Operator)',
        benefit: 'Sesi pelatihan intensif (1-2 hari) yang bersifat hands-on, mencakup cara penggunaan sistem baru, praktik terbaik, dan sesi tanya jawab untuk memastikan semua pengguna merasa percaya diri.',
      },
    ],
  },
  technical: {
    title: 'Isi dari Change Management Playbook',
    highlights: [
      { name: 'Visi Perubahan & Strategi Komunikasi', value: 'Tercakup' },
      { name: 'Pemetaan Stakeholder & Rencana Keterlibatan', value: 'Tercakup' },
      { name: 'Penilaian Risiko & Strategi Mitigasi', value: 'Tercakup' },
      { name: 'Rencana Pengukuran & Realisasi Manfaat', value: 'Tercakup' },
    ],
  },
  faq: {
    title: 'Pertanyaan yang Sering Diajukan',
    questions: [
      {
        question: 'Berapa lama durasi program pelatihan ini?',
        answer: 'Durasi sangat bervariasi tergantung pada skala implementasi dan jumlah peserta. Program bisa berkisar dari sesi singkat 2 jam untuk eksekutif, hingga serangkaian workshop beberapa hari untuk pengguna akhir di berbagai departemen.',
      },
      {
        question: 'Bagaimana pendekatan Anda untuk menangani karyawan yang resisten terhadap perubahan?',
        answer: 'Pendekatan kami berpusat pada empati dan komunikasi. Kami melibatkan mereka sejak awal melalui survei dan FGD untuk memahami kekhawatiran mereka, mengidentifikasi "champion" internal yang bisa menjadi panutan, dan secara aktif mengkomunikasikan "quick wins" untuk membangun momentum dan menunjukkan manfaat nyata dari perubahan tersebut.',
      },
       {
        question: 'Apakah Anda menyediakan materi pasca-pelatihan?',
        answer: 'Tentu saja. Semua peserta akan mendapatkan akses ke rekaman sesi (untuk pelatihan virtual), materi presentasi, dan panduan ringkas (quick reference guide). Kami juga dapat membantu membuat portal e-learning internal untuk pembelajaran berkelanjutan.',
      },
    ],
  },
    successMetrics: {
        title: 'Kisah Sukses Klien Kami',
        metrics: [
            { value: '85%', label: 'Tingkat adopsi sistem dalam 2 minggu (Klien Manufaktur)' },
            { value: '92%', label: 'Tingkat utilisasi fitur utama dalam 1 bulan (Klien Perbankan)' },
        ],
    },
  pricing: {
    title: 'Pricing',
    price: 'Custom pricing',
    cta: 'Konsultasi Change Management - Siapkan Organisasi Anda Menuju Sukses',
  },
  visualAssets: {
    architectureDiagram: 'https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhbmdlJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%',
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
    tagline: 'Website Profesional yang Menghasilkan Konversi - SEO-Friendly & Super Cepat',
    subheading: 'Baik Anda membutuhkan landing page, situs e-commerce, atau website korporat, kami membangun platform digital yang tidak hanya terlihat bagus, tetapi juga memiliki performa tinggi, aman, dan dirancang untuk mendorong konversi.',
    cta: 'Lihat Portofolio Website Kami',
    visual: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww',
  },
  problem: {
    title: 'Mengapa Website Profesional Sangat Penting?',
    points: [
      'Di era digital, website adalah etalase utama bisnis Anda yang beroperasi 24/7. Kesan pertama yang buruk dapat membuat calon pelanggan langsung pergi dan tidak akan kembali lagi.',
      'Berdasarkan studi dari Stanford, sebanyak 75% pelanggan mengakui bahwa mereka menilai kredibilitas sebuah brand berdasarkan desain dan kualitas website-nya. Website yang terlihat amatir akan merusak kepercayaan.',
      'Setiap detik penundaan waktu loading website dapat menurunkan konversi hingga 7%. Website yang lambat tidak hanya merusak pengalaman pengguna, tetapi juga mendapatkan penalti peringkat dari mesin pencari seperti Google.',
      'Lebih dari 50% traffic internet berasal dari perangkat mobile. Memiliki website yang mobile-friendly (responsif) bukan lagi sebuah pilihan, melainkan sebuah keharusan mutlak untuk menjangkau semua audiens.',
    ],
  },
  solution: {
    title: 'Jenis Website yang Kami Bangun',
    features: [
      {
        name: 'Landing Page Berkonversi Tinggi',
        description: 'Kami merancang dan membangun landing page dengan satu tujuan yang jelas: konversi. Setiap elemen, mulai dari headline, copywriting, hingga tombol CTA, dioptimalkan untuk mendapatkan leads atau penjualan, didukung dengan praktik A/B testing.',
      },
      {
        name: 'Corporate Website & Company Profile',
        description: 'Bangun citra dan otoritas brand Anda di dunia digital. Kami akan membantu Anda menyajikan informasi perusahaan secara profesional, menampilkan portofolio atau studi kasus Anda dengan meyakinkan, dan membangun kepercayaan dengan calon klien atau investor.',
      },
      {
        name: 'Toko Online (E-commerce)',
        description: 'Kami menyediakan solusi lengkap untuk toko online Anda: manajemen katalog produk yang mudah, keranjang belanja yang intuitif, integrasi dengan berbagai payment gateway lokal (GoPay, OVO, Virtual Account), dan sistem manajemen inventaris yang efisien.',
      },
    ],
  },
  useCases: {
    title: 'Sorotan Portofolio Kami',
    cases: [
      {
        industry: 'E-commerce F&B',
        benefit: 'Membangun platform dengan 10.000+ produk yang mampu menangani lebih dari 100.000 pengunjung bulanan dengan waktu loading rata-rata di bawah 2 detik.',
      },
      {
        industry: 'Website Korporat Fintech',
        benefit: 'Mencapai skor Google Lighthouse 98 untuk performance, memastikan pengalaman pengguna yang super cepat bagi lebih dari 1 juta pengunjung tahunan.',
      },
      {
        industry: 'Dashboard Aplikasi SaaS',
        benefit: 'Merancang dan membangun arsitektur multi-tenant yang aman dan scalable untuk aplikasi berbasis langganan dengan lebih dari 500 pengguna aktif.',
      },
    ],
  },
  technical: {
    title: 'Keunggulan Teknis Kami',
    highlights: [
      { name: 'Framework Modern', value: 'Menggunakan teknologi terkini seperti Next.js, Vue.js, dan React untuk performa dan skalabilitas maksimal.' },
      { name: 'Kinerja & Kecepatan', value: 'Target waktu loading di bawah 2 detik dan skor Google Lighthouse di atas 90 untuk semua metrik (Performance, SEO, Best Practices).' },
      { name: 'Keamanan', value: 'Implementasi standar keamanan teratas: SSL/TLS, header keamanan, proteksi terhadap XSS dan CSRF, serta praktik perlindungan data.',
      },
      { name: 'SEO Teknis', value: 'Struktur website yang ramah mesin pencari, implementasi schema markup, sitemap otomatis, dan file robots.txt yang teroptimasi.' },
    ],
  },
  faq: {
    title: 'Pertanyaan yang Sering Diajukan',
    questions: [
      {
        question: 'Berapa lama waktu yang dibutuhkan hingga website siap diluncurkan?',
        answer: 'Proyek website standar biasanya memakan waktu 4-8 minggu dari fase discovery hingga peluncuran, tergantung pada kompleksitas fitur dan kesiapan konten dari pihak Anda.',
      },
      {
        question: 'Apakah saya bisa mengupdate konten website sendiri setelah selesai?',
        answer: 'Tentu saja. Kami dapat mengintegrasikan website dengan Headless CMS (Content Management System) seperti Contentful, Strapi, atau Sanity yang sangat mudah digunakan, memungkinkan tim Anda untuk mengupdate konten secara mandiri tanpa memerlukan bantuan teknis.',
      },
      {
        question: 'Apakah layanan ini sudah termasuk domain dan hosting?',
        answer: 'Layanan utama kami adalah desain dan pengembangan. Namun, kami dapat memberikan rekomendasi dan membantu Anda dalam proses pembelian domain dan pemilihan paket hosting terbaik yang sesuai dengan kebutuhan website Anda.',
      },
    ],
  },
  pricing: {
    title: 'Pricing',
    price: 'Mulai dari Rp X/project',
    cta: 'Konsultasikan Proyek Website Anda (Gratis)',
  },
  visualAssets: {
    chatMockup: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA==',
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
