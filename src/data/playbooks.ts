import { TrendingUp } from 'lucide-react';
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
    slug: 'gtm-revenue',
    title: {
      en: 'GTM/Revenue Playbook',
      de: 'GTM/Revenue Playbook',
    },
    description: {
      en: 'How to build a revenue engine that scales with AI. Learn the 3-component framework (ICP Clarity + Sales Motion + RevOps) used by AI-native companies to reduce CAC by 50% and increase win rates by 100%.',
      de: 'Wie du eine Revenue Engine aufbaust, die mit AI skaliert. Lerne das 3-Komponenten-Framework (ICP Clarity + Sales Motion + RevOps), das AI-native Unternehmen nutzen, um CAC um 50% zu senken und Win Rates um 100% zu steigern.',
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
];
