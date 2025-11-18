
export interface ServicePage {
  slug: string;
  title: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    tagline: string;
    subheading: string;
    cta: string;
    visual: string;
  };
  problem: {
    title: string;
    points: string[];
  };
  solution: {
    title: string;
    features: {
      name: string;
      description: string;
    }[];
  };
  useCases: {
    title: string;
    cases: {
      industry: string;
      benefit: string;
    }[];
  };
  technical: {
    title: string;
    highlights: {
      name: string;
      value: string;
    }[];
  };
  roi?: {
    title: string;
    inputLabel: string;
    outputLabel: string;
  };
  faq: {
    title: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };
  successMetrics?: {
    title: string;
    metrics: {
      value: string;
      label: string;
    }[];
    caseStudy?: {
      quote: string;
      client: string;
    };
  };
  pricing: {
    title: string;
    price: string;
    cta: string;
  };
  visualAssets: {
    chatMockup?: string;
    architectureDiagram?: string;
    featureIcons?: string[];
    comparisonChart?: string;
  };
}
