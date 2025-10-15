export interface ServicePackage {
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
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
    description:
      'Bangun asisten virtual berbahasa Indonesia dan Inggris yang siap menjawab pertanyaan pelanggan 24/7 dengan konteks bisnis Anda.',
    features: [
      'NLP bilingual & integrasi WhatsApp',
      'Knowledge base dinamis yang mudah diperbarui',
      'Dashboard monitoring percakapan real-time',
    ],
    ctaLabel: 'Diskusikan Solusi',
    ctaHref: '/konsultasi',
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Tim product mendesain chatbot AI untuk bisnis',
  },
  {
    title: 'Business Process Automation',
    description:
      'Automasi proses manual lintas departemen—mulai dari input data hingga persetujuan—untuk memangkas waktu siklus operasional.',
    features: [
      'Audit proses end-to-end & prioritas quick win',
      'Integrasi ERP/CRM dan sistem legacy',
      'Monitoring performa dan SLA real-time',
    ],
    ctaLabel: 'Pelajari Implementasi',
    ctaHref: '/konsultasi',
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Automasi proses bisnis dengan dashboard digital',
  },
  {
    title: 'AI Analytics & Insights',
    description:
      'Ubah data Anda menjadi keputusan cepat melalui dashboard interaktif, model prediktif, dan governance yang terukur.',
    features: [
      'Desain data pipeline & governance framework',
      'Model prediksi churn, demand, dan risiko',
      'Dashboard visual untuk eksekutif & operasional',
    ],
    ctaLabel: 'Minta Demo Insight',
    ctaHref: '/konsultasi',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Analis data meninjau laporan AI analytics',
  },
  {
    title: 'Computer Vision & OCR',
    description:
      'Implementasi verifikasi dokumen dan inspeksi visual otomatis untuk menekan kesalahan manusia dan meningkatkan compliance.',
    features: [
      'Model deteksi dan OCR akurasi tinggi',
      'Integrasi perangkat kamera industri',
      'Pelaporan otomatis dengan alerting',
    ],
    ctaLabel: 'Bahas Kebutuhan Anda',
    ctaHref: '/konsultasi',
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Engineer memantau sistem computer vision dan OCR',
  },
  {
    title: 'Training & Change Management',
    description:
      'Percepat adopsi AI melalui workshop praktis, playbook perubahan, dan pendampingan tim lintas fungsi.',
    features: [
      'Workshop onsite & virtual dengan studi kasus',
      'Playbook adopsi AI dan governance',
      'Support pasca implementasi untuk champion tim',
    ],
    ctaLabel: 'Rancang Program',
    ctaHref: '/konsultasi',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Sesi pelatihan tim terkait adopsi AI',
  },
  {
    title: 'AI Strategy & Advisory',
    description:
      'Tentukan prioritas, roadmap, dan investment case AI agar selaras dengan sasaran bisnis jangka panjang perusahaan.',
    features: [
      'Assessment kematangan AI & gap analisis',
      'Perumusan business case & KPI keberhasilan',
      'Blueprint implementasi lengkap tahapannya',
    ],
    ctaLabel: 'Mulai Konsultasi',
    ctaHref: '/konsultasi',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Executive briefing mengenai strategi AI perusahaan',
  },
];
