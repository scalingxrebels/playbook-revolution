import { TrendingUp, Rocket, Heart, Settings } from 'lucide-react';
import React from 'react';
import type { ImpactTag, BottleneckTag, RoleTag } from './playbookFilters';

export interface Playbook {
  id: string;
  slug: string;
  title: { en: string; de: string };
  description: { en: string; de: string };
  outcomes: { en: string[]; de: string[] };
  caseStudies: string[];
  icon: React.ReactNode;
  gradient: string;
  // 3-Filter Tags
  impact: ImpactTag[];
  bottleneck: BottleneckTag[];
  role: RoleTag[];
}

export const playbooks: Playbook[] = [
  {
    id: 'gtm-revenue',
    slug: 'growth-engines/gtm-revenue',
    title: {
      en: 'GTM/Revenue Playbook',
      de: 'GTM/Revenue Playbook',
    },
    description: {
      en: 'How to build a revenue engine that scales with AI. Learn the 7-lever framework (ICP Clarity, Outbound Sales, Inbound Marketing, Channel Partners, Pricing, Sales Process, PLG) used by AI-native companies to reduce CAC by 50% and increase win rates by 100%. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du eine Revenue Engine aufbaust, die mit AI skaliert. Lerne das 7-Hebel-Framework (ICP Clarity, Outbound Sales, Inbound Marketing, Channel Partner, Pricing, Sales Process, PLG), das AI-native Unternehmen nutzen, um CAC um 50% zu senken und Win Rates um 100% zu steigern. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    outcomes: {
      en: [
        'CAC reduction of 40-60% through ICP clarity',
        'Win rate improvement of 50-100% through sales motion optimization',
        'Sales cycle reduction of 30-50% through RevOps automation',
        'Clear 90-day implementation roadmap',
      ],
      de: [
        'CAC-Reduktion von 40-60% durch ICP-Klarheit',
        'Win Rate Verbesserung von 50-100% durch Sales Motion Optimierung',
        'Sales Cycle Reduktion von 30-50% durch RevOps Automation',
        'Klare 90-Tage-Implementierungs-Roadmap',
      ],
    },
    caseStudies: ['Series B SaaS (€15M ARR)', 'Series C Fintech (€40M ARR)', 'Series A Healthtech (€5M ARR)'],
    icon: React.createElement(TrendingUp, { className: 'w-6 h-6' }),
    gradient: 'from-orange-500 to-amber-500',
    impact: ['growth-engines'],
    bottleneck: ['strategy', 'execution-focus'],
    role: ['ceo', 'cmo-cro'],
  },
  {
    id: 'product',
    slug: 'growth-engines/product',
    title: {
      en: 'Product Playbook',
      de: 'Product Playbook',
    },
    description: {
      en: 'How to build products that scale with AI. Learn the 5-component framework (Product-Led Growth, Shipping Velocity, Feature Quality, Product Analytics, AI-Powered Development) used by AI-native companies to ship 10x faster and achieve product-market fit in weeks, not years. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du Produkte baust, die mit AI skalieren. Lerne das 5-Komponenten-Framework (Product-Led Growth, Shipping Velocity, Feature Quality, Product Analytics, AI-Powered Development), das AI-native Unternehmen nutzen, um 10x schneller zu shippen und Product-Market Fit in Wochen statt Jahren zu erreichen. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    outcomes: {
      en: [
        'Shipping velocity increase of 300-500%',
        'Time to PMF reduction of 50-70%',
        'Feature success rate improvement of 100-200%',
        'Clear 90-day implementation roadmap',
      ],
      de: [
        'Shipping Velocity Steigerung von 300-500%',
        'Zeit bis PMF Reduktion von 50-70%',
        'Feature Success Rate Verbesserung von 100-200%',
        'Klare 90-Tage-Implementierungs-Roadmap',
      ],
    },
    caseStudies: ['Series A SaaS (3 months to PMF)', 'Series B DevTool (10x velocity)', 'Series C (1M users with PLG)'],
    icon: React.createElement(Rocket, { className: 'w-6 h-6' }),
    gradient: 'from-green-500 to-teal-500',
    impact: ['growth-engines'],
    bottleneck: ['strategy', 'execution-focus'],
    role: ['ceo', 'cpo', 'cto'],
  },
  {
    id: 'customer-success',
    slug: 'growth-engines/customer-success',
    title: {
      en: 'Customer Success Playbook',
      de: 'Customer Success Playbook',
    },
    description: {
      en: 'How to build customer success that scales with AI. Learn the 5-component framework (Onboarding Excellence, Health Scoring, Retention Loops, Expansion Playbooks, AI-Powered CS Operations) used by AI-native companies to reduce churn by 60% and increase NRR by 30-50pp. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du Customer Success aufbaust, das mit AI skaliert. Lerne das 5-Komponenten-Framework (Onboarding Excellence, Health Scoring, Retention Loops, Expansion Playbooks, AI-Powered CS Operations), das AI-native Unternehmen nutzen, um Churn um 60% zu senken und NRR um 30-50pp zu steigern. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    outcomes: {
      en: [
        'Churn reduction of 40-60%',
        'NRR increase of 30-50pp',
        'CSM productivity improvement of 200-400%',
        'Clear 90-day implementation roadmap',
      ],
      de: [
        'Churn-Reduktion von 40-60%',
        'NRR-Steigerung von 30-50pp',
        'CSM Produktivitätssteigerung von 200-400%',
        'Klare 90-Tage-Implementierungs-Roadmap',
      ],
    },
    caseStudies: ['Series A SaaS (Churn 20% → 8%)', 'Series B SaaS (NRR 100% → 135%)', 'Series C (1k → 10k Customers)'],
    icon: React.createElement(Heart, { className: 'w-6 h-6' }),
    gradient: 'from-pink-500 to-rose-500',
    impact: ['growth-engines'],
    bottleneck: ['execution-focus'],
    role: ['ceo', 'coo'],
  },
  {
    id: 'operations',
    slug: 'operating-systems/operations',
    title: {
      en: 'Operations Playbook',
      de: 'Operations Playbook',
    },
    description: {
      en: 'How to build operations that scale with AI. Learn the 5-component framework (Process Design, Workflow Automation, AI Orchestration, Operational Analytics, AI-Powered Operations) used by AI-native companies to reduce operational costs by 60% and increase efficiency by 200%. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du Operations aufbaust, die mit AI skalieren. Lerne das 5-Komponenten-Framework (Process Design, Workflow Automation, AI Orchestration, Operational Analytics, AI-Powered Operations), das AI-native Unternehmen nutzen, um Betriebskosten um 60% zu senken und Effizienz um 200% zu steigern. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    outcomes: {
      en: [
        'Operational cost reduction of 40-60%',
        'Manual work reduction of 50-70%',
        'Efficiency improvement of 200-400%',
        'Clear 90-day implementation roadmap',
      ],
      de: [
        'Betriebskosten-Reduktion von 40-60%',
        'Manuelle Arbeit Reduktion von 50-70%',
        'Effizienz-Steigerung von 200-400%',
        'Klare 90-Tage-Implementierungs-Roadmap',
      ],
    },
    caseStudies: ['Series A SaaS (Cost -60%)', 'Series B SaaS (200+ Workflows)', 'Series C (€2M/year saved)'],
    icon: React.createElement(Settings, { className: 'w-6 h-6' }),
    gradient: 'from-blue-500 to-indigo-500',
    impact: ['operating-systems'],
    bottleneck: ['setup', 'operationalization'],
    role: ['ceo', 'coo', 'cto'],
  },
];
