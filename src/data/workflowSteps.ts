export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  phase: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: '01',
    title: 'Discovery & Alignment',
    description:
      'Workshop lintas stakeholder untuk memetakan tujuan bisnis, constraint, dan kesiapan data sehingga prioritas inisiatif jelas.',
    phase: 'Assessment',
  },
  {
    id: '02',
    title: 'Prototyping & Iteration',
    description:
      'Pengembangan solusi secara agile dengan sprint pendek, demo berkala, dan validasi metrik keberhasilan.',
    phase: 'Build',
  },
  {
    id: '03',
    title: 'Deploy & Enablement',
    description:
      'Peluncuran bertahap dengan dokumentasi, training pengguna, serta support change management untuk memastikan adopsi.',
    phase: 'Scale',
  },
];
