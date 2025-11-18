import { allServices } from './services';

export const servicePages = allServices;

export interface ServicePackage {
  title: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
  features: string[];
}

export const servicePackages: ServicePackage[] = servicePages.map(service => ({
  title: service.title,
  slug: service.slug,
  description: service.hero.subheading,
  image: service.hero.visual,
  imageAlt: `Layanan ${service.title} my-aicustom.com`,
  ctaLabel: 'Lihat Detail',
  ctaHref: `/service/${service.slug}`,
  features: service.solution.features.map(f => f.name),
}));
