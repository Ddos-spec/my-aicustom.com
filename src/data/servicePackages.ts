
import { chatbot } from './services/chatbot';
import { businessProcessAutomation } from './services/businessProcessAutomation';
import { aiAnalytics } from './services/aiAnalytics';
import { computerVision } from './services/computerVision';
import { trainingChangeManagement } from './services/trainingChangeManagement';
import { aiStrategy } from './services/aiStrategy';
import { webDevelopment } from './services/webDevelopment';
import { posRental } from './services/posRental';

export const servicePages = [
  chatbot,
  businessProcessAutomation,
  aiAnalytics,
  computerVision,
  trainingChangeManagement,
  aiStrategy,
  webDevelopment,
  posRental,
];

export interface ServicePackage {
  title: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
}

export const servicePackages: ServicePackage[] = servicePages.map(service => ({
  title: service.title,
  slug: service.slug,
  description: service.hero.subheading,
  image: service.hero.visual,
  imageAlt: `Layanan ${service.title} my-aicustom.com`,
  ctaLabel: 'Lihat Detail',
  ctaHref: `/service/${service.slug}`,
}));
