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

// Image assets referenced in this module:
// - https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=400&q=80 (Chatbot AI Custom)
// - https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=400&q=80 (Business Process Automation)
// - https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=400&q=80 (AI Analytics & Insights)
// - https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=400&q=80 (Computer Vision & OCR)
// - https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80 (Training & Change Management)
// - https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80 (AI Strategy & Advisory)

export const servicePackages: ServicePackage[] = [
  {
    title: 'Chatbot AI Custom',
    slug: 'chatbot-ai-custom',
    description:
      'Bangun asisten virtual berbahasa Indonesia dan Inggris yang siap menjawab pertanyaan pelanggan 24/7 dengan konteks bisnis Anda.',
    detailedDescription:
      'Kami merancang dan mengimplementasikan chatbot AI yang tidak hanya menjawab pertanyaan umum, tetapi juga terintegrasi dengan sistem CRM Anda untuk memberikan layanan personal. Solusi ini mencakup pemrosesan bahasa alami (NLP) canggih untuk memahami nuansa percakapan dan sentimen pelanggan, serta eskalasi cerdas ke agen manusia jika diperlukan. Dashboard analitik memberikan wawasan mendalam tentang interaksi pelanggan.',
    features: [
      'NLP bilingual & integrasi WhatsApp',
      'Knowledge base dinamis yang mudah diperbarui',
      'Dashboard monitoring percakapan real-time',
    ],
    ctaLabel: 'Lihat Detail',
    ctaLabelAction: 'Diskusikan Solusi',
    ctaHref: '/konsultasi',
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Tim product mendesain chatbot AI untuk bisnis',
  },
  {
    title: 'Business Process Automation',
    slug: 'business-process-automation',
    description:
      'Automasi proses manual lintas departemen—mulai dari input data hingga persetujuan—untuk memangkas waktu siklus operasional.',
    detailedDescription:
      'Layanan kami menganalisis alur kerja Anda saat ini untuk mengidentifikasi bottleneck dan peluang automasi. Kami menggunakan Robotic Process Automation (RPA) dan AI untuk mengotomatiskan tugas-tugas repetitif seperti entri data, pemrosesan faktur, dan manajemen inventaris. Tujuannya adalah mengurangi biaya operasional, meminimalkan human error, dan membebaskan karyawan Anda untuk fokus pada tugas-tugas strategis.',
    features: [
      'Audit proses end-to-end & prioritas quick win',
      'Integrasi ERP/CRM dan sistem legacy',
      'Monitoring performa dan SLA real-time',
    ],
    ctaLabel: 'Lihat Detail',
    ctaLabelAction: 'Pelajari Implementasi',
    ctaHref: '/konsultasi',
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Automasi proses bisnis dengan dashboard digital',
  },
  {
    title: 'AI Analytics & Insights',
    slug: 'ai-analytics-insights',
    description:
      'Ubah data Anda menjadi keputusan cepat melalui dashboard interaktif, model prediktif, dan governance yang terukur.',
    detailedDescription:
      'Kami membantu Anda membangun infrastruktur data yang solid dan menerapkan model machine learning untuk analisis prediktif. Layanan ini mencakup pembuatan data warehouse, pipeline ETL (Extract, Transform, Load), dan pengembangan model untuk prediksi churn pelanggan, peramalan permintaan (demand forecasting), dan deteksi anomali. Dashboard BI (Business Intelligence) yang kami kembangkan memungkinkan para pengambil keputusan untuk mengakses insight secara mandiri.',
    features: [
      'Desain data pipeline & governance framework',
      'Model prediksi churn, demand, dan risiko',
      'Dashboard visual untuk eksekutif & operasional',
    ],
    ctaLabel: 'Lihat Detail',
    ctaLabelAction: 'Minta Demo Insight',
    ctaHref: '/konsultasi',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Analis data meninjau laporan AI analytics',
  },
  {
    title: 'Computer Vision & OCR',
    slug: 'computer-vision-ocr',
    description:
      'Implementasi verifikasi dokumen dan inspeksi visual otomatis untuk menekan kesalahan manusia dan meningkatkan compliance.',
    detailedDescription:
      'Solusi Computer Vision kami memungkinkan mesin untuk "melihat" dan menginterpretasikan informasi visual dari gambar atau video. Kami mengimplementasikan teknologi Optical Character Recognition (OCR) untuk ekstraksi data dari dokumen fisik atau digital secara otomatis, serta sistem inspeksi kualitas berbasis visual untuk manufaktur. Aplikasi lainnya termasuk pemantauan keamanan dan analisis citra medis.',
    features: [
      'Model deteksi dan OCR akurasi tinggi',
      'Integrasi perangkat kamera industri',
      'Pelaporan otomatis dengan alerting',
    ],
    ctaLabel: 'Lihat Detail',
    ctaLabelAction: 'Bahas Kebutuhan Anda',
    ctaHref: '/konsultasi',
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Engineer memantau sistem computer vision dan OCR',
  },
  {
    title: 'Training & Change Management',
    slug: 'training-change-management',
    description:
      'Percepat adopsi AI melalui workshop praktis, playbook perubahan, dan pendampingan tim lintas fungsi.',
    detailedDescription:
      'Adopsi teknologi baru seringkali gagal bukan karena teknologinya, tetapi karena kurangnya persiapan pada aspek manusia. Program kami mencakup serangkaian workshop yang disesuaikan dengan level audiens (dari eksekutif hingga staf teknis), pembuatan materi panduan (playbook), dan sesi pendampingan untuk memastikan tim Anda siap memanfaatkan solusi AI secara maksimal. Kami membantu membangun budaya data-driven di organisasi Anda.',
    features: [
      'Workshop onsite & virtual dengan studi kasus',
      'Playbook adopsi AI dan governance',
      'Support pasca implementasi untuk champion tim',
    ],
    ctaLabel: 'Lihat Detail',
    ctaLabelAction: 'Rancang Program',
    ctaHref: '/konsultasi',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Sesi pelatihan tim terkait adopsi AI',
  },
  {
    title: 'AI Strategy & Advisory',
    slug: 'ai-strategy-advisory',
    description:
      'Tentukan prioritas, roadmap, dan investment case AI agar selaras dengan sasaran bisnis jangka panjang perusahaan.',
    detailedDescription:
      'Layanan konsultasi strategis kami membantu para pemimpin bisnis menavigasi kompleksitas adopsi AI. Kami memulai dengan assessment untuk memetakan kematangan digital dan analitik perusahaan Anda, lalu merumuskan roadmap implementasi yang realistis dan terukur. Kami juga membantu menyusun business case yang kuat untuk mendapatkan persetujuan investasi, lengkap dengan proyeksi ROI dan KPI untuk mengukur keberhasilan.',
    features: [
      'Assessment kematangan AI & gap analisis',
      'Perumusan business case & KPI keberhasilan',
      'Blueprint implementasi lengkap tahapannya',
    ],
    ctaLabel: 'Lihat Detail',
    ctaLabelAction: 'Mulai Konsultasi',
    ctaHref: '/konsultasi',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Executive briefing mengenai strategi AI perusahaan',
  },
  {
    title: 'Web Development',
    slug: 'web-development',
    description:
      'Membangun website profesional dan responsif yang sesuai dengan kebutuhan bisnis Anda, dari landing page hingga e-commerce.',
    detailedDescription:
      'Kami menawarkan layanan pengembangan web yang komprehensif, mulai dari desain UI/UX yang menarik hingga implementasi backend yang kuat. Kami menggunakan teknologi modern untuk memastikan website Anda cepat, aman, dan mudah dikelola. Layanan ini mencakup optimasi SEO dasar, integrasi media sosial, dan dukungan purna jual.',
    features: [
      'Desain responsif & mobile-friendly',
      'Optimasi SEO dasar',
      'Integrasi sistem pihak ketiga',
      'Dukungan teknis & pemeliharaan',
    ],
    ctaLabel: 'Lihat Detail',
    ctaLabelAction: 'Konsultasikan Segera',
    ctaHref: 'https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20Web%20Development.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4cd085?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Pengembang web sedang coding di depan banyak monitor',
  },
  {
    title: 'POS Rental',
    slug: 'pos-rental',
    description:
      'Solusi penyewaan sistem Point of Sale (POS) yang fleksibel untuk berbagai jenis usaha, lengkap dengan hardware dan software.',
    detailedDescription:
      'Kami menyediakan layanan penyewaan sistem POS yang terjangkau dan mudah digunakan, cocok untuk UMKM, event, atau bisnis musiman. Paket penyewaan kami mencakup hardware (tablet/PC, printer, scanner barcode) dan software POS dengan fitur lengkap seperti manajemen inventaris, laporan penjualan, dan integrasi pembayaran. Tim support kami siap membantu instalasi dan pelatihan.',
    features: [
      'Hardware & software POS lengkap',
      'Manajemen inventaris & laporan penjualan',
      'Integrasi pembayaran digital',
      'Dukungan instalasi & pelatihan',
    ],
    ctaLabel: 'Lihat Detail',
    ctaLabelAction: 'Konsultasikan Segera',
    ctaHref: 'https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20POS%20Rental.',
    image: 'https://images.unsplash.com/photo-1587495979130-241079167c86?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Sistem Point of Sale (POS) di sebuah toko ritel',
  },
];

