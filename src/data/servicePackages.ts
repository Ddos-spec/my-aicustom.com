export interface ServicePackage {
  title: string;
  slug: string;
  description: string;
  detailedDescription: string;
  features: string[];
  ctaLabel: string;
  ctaLabelAction: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

export const servicePackages: ServicePackage[] = [
  {
    title: 'Chatbot AI Custom',
    slug: 'chatbot-ai-custom',
    description:
      'Layanan pembuatan chatbot AI custom berbahasa Indonesia untuk meningkatkan engagement pelanggan dan efisiensi layanan 24/7.',
    detailedDescription:
      'Tingkatkan interaksi pelanggan ke level berikutnya dengan chatbot AI yang dirancang khusus untuk bisnis Anda. Kami tidak hanya membuat chatbot penjawab pertanyaan umum, tetapi juga asisten virtual yang terintegrasi penuh dengan CRM, e-commerce, dan sistem internal Anda. Dengan teknologi Natural Language Processing (NLP) terdepan, chatbot kami mampu memahami nuansa percakapan, sentimen pelanggan, dan melakukan eskalasi cerdas ke tim support Anda. Dapatkan wawasan berharga dari setiap interaksi melalui dashboard analitik yang komprehensif untuk terus meningkatkan kualitas layanan.',
    features: [
      'Teknologi NLP canggih (Indonesia & Inggris)',
      'Integrasi multi-platform (WhatsApp, Web, App)',
      'Terhubung dengan CRM, ERP, & E-commerce',
      'Dashboard analitik percakapan real-time',
      'Manajemen knowledge base yang dinamis',
      'Sistem eskalasi cerdas ke agen manusia',
    ],
    ctaLabel: 'Lihat Detail',
    ctaLabelAction: 'Diskusikan Solusi',
    ctaHref: '/konsultasi',
    image: 'https://images.unsplash.com/photo-1555255707-c07969078a5b?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Layanan Chatbot AI Custom my-aicustom.com',
  },
  {
    title: 'Business Process Automation (BPA)',
    slug: 'business-process-automation',
    description:
      'Solusi Business Process Automation (BPA) untuk mengotomatiskan alur kerja manual, meningkatkan efisiensi, dan mengurangi biaya operasional.',
    detailedDescription:
      'Bebaskan tim Anda dari tugas-tugas repetitif dan rawan kesalahan. Layanan Business Process Automation (BPA) kami mengidentifikasi, merancang, dan mengimplementasikan solusi automasi menggunakan Robotic Process Automation (RPA) dan AI. Kami menganalisis alur kerja Anda secara end-to-end, dari departemen keuangan dan HR hingga operasional, untuk menghilangkan bottleneck. Proses seperti entri data, rekonsiliasi, pemrosesan faktur, dan onboarding karyawan dapat diotomatiskan sepenuhnya, memungkinkan tim Anda fokus pada inisiatif strategis yang mendorong pertumbuhan.',
    features: [
      'Analisis & pemetaan proses bisnis',
      'Implementasi Robotic Process Automation (RPA)',
      'Integrasi dengan sistem legacy, ERP, dan CRM',
      'Automasi proses keuangan, HR, & operasional',
      'Dashboard monitoring performa & SLA',
      'Pengurangan human error hingga 99%',
    ],
    ctaLabel: 'Lihat Detail',
    ctaLabelAction: 'Pelajari Implementasi',
    ctaHref: '/konsultasi',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Layanan Business Process Automation my-aicustom.com',
  },
  {
    title: 'AI Analytics & Advanced Insights',
    slug: 'ai-analytics-insights',
    description:
      'Manfaatkan kekuatan AI untuk mengubah data menjadi insight bisnis yang actionable. Layanan AI analytics kami membantu Anda membuat keputusan yang lebih cerdas.',
    detailedDescription:
      'Di era digital, data adalah emas. Kami membantu Anda menambangnya. Layanan AI Analytics kami mengubah data mentah menjadi keputusan bisnis yang cerdas dan cepat. Kami membangun infrastruktur data yang kokoh, mulai dari data warehouse hingga pipeline ETL yang efisien. Di atasnya, kami mengembangkan model machine learning untuk peramalan permintaan (demand forecasting), prediksi churn pelanggan, analisis sentimen pasar, dan deteksi anomali fraud. Semua wawasan ini disajikan dalam dashboard Business Intelligence (BI) yang intuitif, memberdayakan para pemimpin untuk bertindak berdasarkan data, bukan asumsi.',
    features: [
      'Pembangunan Data Warehouse & ETL Pipeline',
      'Model Machine Learning (Prediksi & Klasifikasi)',
      'Analisis sentimen & deteksi anomali',
      'Demand forecasting & optimisasi inventaris',
      'Dashboard BI interaktif (Tableau, Power BI)',
      'Penyusunan framework data governance',
    ],
    ctaLabel: 'Lihat Detail',
    ctaLabelAction: 'Minta Demo Insight',
    ctaHref: '/konsultasi',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Layanan AI Analytics & Advanced Insights my-aicustom.com',
  },
  {
    title: 'Computer Vision & OCR Solutions',
    slug: 'computer-vision-ocr',
    description:
      'Implementasi solusi Computer Vision dan OCR untuk otomatisasi verifikasi dokumen, inspeksi kualitas, dan analisis visual.',
    detailedDescription:
      'Berikan "mata" pada sistem Anda dengan teknologi Computer Vision dan Optical Character Recognition (OCR). Solusi kami memungkinkan mesin untuk menginterpretasikan data visual dari gambar dan video secara real-time. Kami mengimplementasikan OCR untuk mengekstrak data dari KTP, faktur, dan formulir secara otomatis, mengurangi waktu entri manual secara drastis. Di lantai produksi, sistem inspeksi visual kami dapat mendeteksi cacat produk dengan akurasi super-human. Aplikasi lain termasuk pemantauan keamanan cerdas, analisis citra medis, hingga optimalisasi tata letak ritel.',
    features: [
      'Ekstraksi data otomatis (OCR) dari dokumen',
      'Verifikasi identitas (e-KYC) berbasis biometrik',
      'Inspeksi kualitas produk di lini manufaktur',
      'Sistem pemantauan keamanan & analisis keramaian',
      'Integrasi dengan kamera CCTV & perangkat industri',
      'Pelaporan anomali visual secara real-time',
    ],
    ctaLabel: 'Lihat Detail',
    ctaLabelAction: 'Bahas Kebutuhan Anda',
    ctaHref: '/konsultasi',
    image: 'https://images.unsplash.com/photo-1616198954572-1b777a021b7c?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Layanan Computer Vision & OCR Solutions my-aicustom.com',
  },
  {
    title: 'AI Training & Change Management',
    slug: 'training-change-management',
    description:
      'Program pelatihan AI dan manajemen perubahan untuk memastikan adopsi teknologi AI yang sukses di perusahaan Anda.',
    detailedDescription:
      'Teknologi AI terbaik sekalipun tidak akan memberikan dampak tanpa adopsi yang kuat dari tim Anda. Program Training & Change Management kami dirancang untuk menjembatani kesenjangan antara teknologi dan manusia. Kami menyelenggarakan workshop yang disesuaikan dengan berbagai level—dari pengenalan AI untuk eksekutif hingga pelatihan teknis untuk tim IT. Kami juga membantu menyusun playbook adopsi, mendefinisikan ulang peran dan proses, serta mendampingi para "AI champion" di internal perusahaan Anda untuk memastikan transisi yang mulus dan berkelanjutan.',
    features: [
      'Workshop pengenalan AI untuk C-Level',
      'Pelatihan teknis untuk tim IT & Data',
      'Penyusunan playbook adopsi & governance AI',
      'Analisis dampak perubahan & desain peran baru',
      'Program pendampingan pasca-implementasi',
      'Membangun budaya perusahaan berbasis data',
    ],
    ctaLabel: 'Lihat Detail',
    ctaLabelAction: 'Rancang Program',
    ctaHref: '/konsultasi',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Layanan AI Training & Change Management my-aicustom.com',
  },
  {
    title: 'AI Strategy & Advisory',
    slug: 'ai-strategy-advisory',
    description:
      'Jasa konsultasi strategi AI untuk membantu Anda menyusun roadmap dan memaksimalkan ROI dari investasi AI Anda.',
    detailedDescription:
      'Berinvestasi di AI tanpa strategi yang jelas adalah pertaruhan. Layanan AI Strategy & Advisory kami membantu Anda menavigasi lanskap AI yang kompleks untuk memaksimalkan ROI. Kami mulai dengan assessment mendalam untuk memetakan kematangan digital dan data perusahaan Anda. Dari sana, kami berkolaborasi dengan tim Anda untuk mengidentifikasi peluang AI dengan dampak terbesar, menyusun business case yang kuat, dan merancang roadmap implementasi yang realistis. Kami memastikan setiap langkah dalam perjalanan AI Anda terukur, terarah, dan sepenuhnya mendukung visi jangka panjang perusahaan.',
    features: [
      'Assessment kematangan AI & analisis kompetitif',
      'Identifikasi use case AI bernilai tinggi',
      'Perumusan business case & proyeksi ROI',
      'Desain roadmap implementasi multi-tahap',
      'Penyusunan arsitektur data & teknologi',
      'Advisory untuk komite pengarah (Steering Committee)',
    ],
    ctaLabel: 'Lihat Detail',
    ctaLabelAction: 'Mulai Konsultasi',
    ctaHref: '/konsultasi',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Layanan AI Strategy & Advisory my-aicustom.com',
  },
  {
    title: 'Web Development & SEO',
    slug: 'web-development',
    description:
      'Jasa web development profesional dengan optimasi SEO untuk meningkatkan visibilitas online dan peringkat Google Anda.',
    detailedDescription:
      'Website Anda adalah wajah digital perusahaan Anda. Kami memastikan wajah tersebut tampil memukau, profesional, dan bekerja keras untuk Anda. Layanan Web Development kami mencakup siklus penuh, dari riset pasar, desain UI/UX yang berpusat pada pengguna, hingga pengembangan backend yang andal dan aman. Kami tidak hanya membangun website, kami membangun aset digital. Setiap proyek dibangun di atas fondasi SEO teknis yang kuat, memastikan visibilitas maksimal di Google. Baik Anda memerlukan company profile, portal berita, atau platform e-commerce kompleks, kami siap mewujudkannya.',
    features: [
      'Desain UI/UX modern & mobile-first',
      'Pengembangan Frontend & Backend',
      'Pembangunan platform E-commerce & Toko Online',
      'Implementasi Content Management System (CMS)',
      'Optimasi kecepatan & performa (Core Web Vitals)',
      'SEO teknis & on-page fundamental',
      'Dukungan pemeliharaan & keamanan berkelanjutan',
    ],
    ctaLabel: 'Lihat Detail',
    ctaLabelAction: 'Konsultasikan Segera',
    ctaHref: 'https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20Web%20Development.',
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Layanan Web Development & SEO my-aicustom.com',
  },
  {
    title: 'Sewa & Kustomisasi POS',
    slug: 'pos-rental',
    description:
      'Sewa sistem POS (Point of Sale) modern atau kustomisasi sesuai kebutuhan bisnis Anda. Solusi fleksibel untuk F&B, ritel, dan event.',
    detailedDescription:
      'Modernisasi operasional kasir Anda dengan sistem Point of Sale (POS) yang andal dan mudah digunakan. Kami menawarkan dua pilihan fleksibel: sewa perangkat POS siap pakai yang cocok untuk UMKM, event, atau pop-up store, dan kustomisasi sistem POS yang terintegrasi penuh dengan alur kerja unik bisnis Anda. Sistem kami mendukung manajemen inventaris, laporan penjualan real-time, program loyalitas pelanggan, dan berbagai metode pembayaran digital. Ucapkan selamat tinggal pada pencatatan manual dan dapatkan kontrol penuh atas transaksi bisnis Anda.',
    features: [
      'Opsi sewa hardware & software bulanan',
      'Kustomisasi fitur sesuai kebutuhan bisnis',
      'Manajemen inventaris & multi-outlet',
      'Laporan penjualan & analitik performa produk',
      'Integrasi pembayaran QRIS, e-wallet, & lainnya',
      'Dukungan teknis, instalasi, & pelatihan staf',
    ],
    ctaLabel: 'Lihat Detail',
    ctaLabelAction: 'Konsultasikan Segera',
    ctaHref: 'https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20POS%20Rental.',
    image: 'https://images.unsplash.com/photo-1526925539332-aa3b66e35444?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Layanan Sewa & Kustomisasi POS my-aicustom.com',
  },
];
