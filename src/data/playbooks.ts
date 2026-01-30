import { TrendingUp, Rocket, Heart, Settings, DollarSign, Users, Database, Shield, ShieldCheck } from 'lucide-react';
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
  {
    id: 'finance',
    slug: 'operating-systems/finance',
    title: {
      en: 'Finance Playbook',
      de: 'Finance Playbook',
    },
    description: {
      en: 'How to build finance systems that scale with AI. Learn the 5-component framework (Unit Economics, FP&A Systems, Scenario Planning, Financial Reporting, AI-Powered Finance) used by AI-native companies to improve Rule of 40 by 20-40pp and increase forecast accuracy from 60% to 95%. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du Finanzsysteme aufbaust, die mit AI skalieren. Lerne das 5-Komponenten-Framework (Unit Economics, FP&A Systeme, Szenarioplanung, Financial Reporting, AI-Powered Finance), das AI-native Unternehmen nutzen, um Rule of 40 um 20-40pp zu verbessern und Forecast-Genauigkeit von 60% auf 95% zu steigern. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    outcomes: {
      en: [
        'Rule of 40 improvement of 20-40pp',
        'Forecast accuracy increase from 60% to 95%',
        'Financial close time reduction from 10 to 2 days',
        'Clear 90-day implementation roadmap',
      ],
      de: [
        'Rule of 40 Verbesserung von 20-40pp',
        'Forecast-Genauigkeit Steigerung von 60% auf 95%',
        'Financial Close Zeit Reduktion von 10 auf 2 Tage',
        'Klare 90-Tage-Implementierungs-Roadmap',
      ],
    },
    caseStudies: ['Series A SaaS (Rule of 40 +30pp)', 'Series B SaaS (Forecast 95%)', 'Series C (€3M/year saved)'],
    icon: React.createElement(DollarSign, { className: 'w-6 h-6' }),
    gradient: 'from-emerald-500 to-green-500',
    impact: ['operating-systems'],
    bottleneck: ['setup', 'operationalization'],
    role: ['ceo', 'cfo', 'coo'],
  },
  {
    id: 'talent',
    slug: 'operating-systems/talent',
    title: {
      en: 'Talent Playbook',
      de: 'Talent Playbook',
    },
    description: {
      en: 'How to build talent systems that scale with AI. Learn the 5-component framework (Hiring Pipeline, Onboarding Excellence, Performance Management, Talent Analytics, AI-Powered Talent) used by AI-native companies to reduce time-to-hire by 60% and increase retention by 40%. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du Talent-Systeme aufbaust, die mit AI skalieren. Lerne das 5-Komponenten-Framework (Hiring Pipeline, Onboarding Excellence, Performance Management, Talent Analytics, AI-Powered Talent), das AI-native Unternehmen nutzen, um Time-to-Hire um 60% zu reduzieren und Retention um 40% zu steigern. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    outcomes: {
      en: [
        'Time-to-hire reduction of 60-80%',
        'Retention rate increase of 30-50%',
        'Onboarding time reduction of 50-70%',
        'Clear 90-day implementation roadmap',
      ],
      de: [
        'Time-to-Hire Reduktion von 60-80%',
        'Retention Rate Steigerung von 30-50%',
        'Onboarding Zeit Reduktion von 50-70%',
        'Klare 90-Tage-Implementierungs-Roadmap',
      ],
    },
    caseStudies: ['Series A SaaS (Time-to-Hire -67%)', 'Series B SaaS (Retention 95%)', 'Series C (20-day hiring)'],
    icon: React.createElement(Users, { className: 'w-6 h-6' }),
    gradient: 'from-violet-500 to-purple-500',
    impact: ['operating-systems'],
    bottleneck: ['setup', 'operationalization'],
    role: ['ceo', 'coo'],
  },
  {
    id: 'data-tech',
    slug: 'operating-systems/data-tech',
    title: {
      en: 'Data/Tech Playbook',
      de: 'Data/Tech Playbook',
    },
    description: {
      en: 'How to build data and tech infrastructure that scales with AI. Learn the 5-component framework (Data Architecture, Tech Stack Excellence, Analytics & BI, ML Ops & AI Platform, AI-Powered Data/Tech) used by AI-native companies to improve data quality by 80% and reduce tech debt by 60%. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du Daten- und Tech-Infrastruktur aufbaust, die mit AI skaliert. Lerne das 5-Komponenten-Framework (Data Architecture, Tech Stack Excellence, Analytics & BI, ML Ops & AI Platform, AI-Powered Data/Tech), das AI-native Unternehmen nutzen, um Datenqualität um 80% zu verbessern und Tech Debt um 60% zu reduzieren. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    outcomes: {
      en: [
        'Data quality improvement of 80-100%',
        'Tech debt reduction of 60-80%',
        'Model deployment time reduction of 90%+',
        'Clear 90-day implementation roadmap',
      ],
      de: [
        'Datenqualitäts-Verbesserung von 80-100%',
        'Tech Debt Reduktion von 60-80%',
        'Model Deployment Zeit Reduktion von 90%+',
        'Klare 90-Tage-Implementierungs-Roadmap',
      ],
    },
    caseStudies: ['Series A SaaS (Data Quality +85%)', 'Series B SaaS (Tech Debt -70%)', 'Series C (100+ ML Models)'],
    icon: React.createElement(Database, { className: 'w-6 h-6' }),
    gradient: 'from-cyan-500 to-blue-500',
    impact: ['operating-systems'],
    bottleneck: ['setup', 'operationalization'],
    role: ['ceo', 'cto'],
  },
  {
    id: 'strategic-governance',
    slug: 'board-governance/strategic',
    title: {
      en: 'Strategic Governance Playbook',
      de: 'Strategic Governance Playbook',
    },
    description: {
      en: 'How to build board and governance systems that scale with AI. Learn the 5-component framework (Board Intelligence & Reporting, Strategic Planning & OKRs, Risk Management & Compliance, Investor Relations & Communication, AI-Powered Governance) used by AI-native companies to reduce board prep time by 80% and increase board confidence by 100%. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du Board- und Governance-Systeme aufbaust, die mit AI skalieren. Lerne das 5-Komponenten-Framework (Board Intelligence & Reporting, Strategic Planning & OKRs, Risk Management & Compliance, Investor Relations & Communication, AI-Powered Governance), das AI-native Unternehmen nutzen, um Board Prep Time um 80% zu reduzieren und Board Confidence um 100% zu steigern. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    outcomes: {
      en: [
        'Board prep time reduction of 80-90%',
        'Board confidence increase of 100-200%',
        'Strategic decision velocity increase of 200%',
        'Clear 90-day implementation roadmap',
      ],
      de: [
        'Board Prep Time Reduktion von 80-90%',
        'Board Confidence Steigerung von 100-200%',
        'Strategic Decision Velocity Steigerung von 200%',
        'Klare 90-Tage-Implementierungs-Roadmap',
      ],
    },
    caseStudies: ['Series A SaaS (Board Prep -85%)', 'Series B SaaS (Board Confidence 95%)', 'Series C (4-hour Board Prep)'],
    icon: React.createElement(Shield, { className: 'w-6 h-6' }),
    gradient: 'from-orange-500 to-amber-500',
    impact: ['board-governance'],
    bottleneck: ['strategy', 'operationalization'],
    role: ['ceo', 'vc-board'],
  },
  {
    id: 'operational-governance',
    slug: 'board-governance/operational',
    title: {
      en: 'Operational Governance Playbook',
      de: 'Operational Governance Playbook',
    },
    description: {
      en: 'How to build operational governance systems that scale with AI. Learn the 5-component framework (Data Governance, Legal & Compliance, AI Governance & Ethics, Operational Risk Management, AI-Powered Operational Governance) used by AI-native companies to improve data quality by 80% and reduce compliance risk by 70%. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du Operational Governance Systeme aufbaust, die mit AI skalieren. Lerne das 5-Komponenten-Framework (Data Governance, Legal & Compliance, AI Governance & Ethics, Operational Risk Management, AI-Powered Operational Governance), das AI-native Unternehmen nutzen, um Datenqualität um 80% zu verbessern und Compliance-Risiko um 70% zu reduzieren. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    outcomes: {
      en: [
        'Data quality improvement of 80-100%',
        'Compliance risk reduction of 70-80%',
        'Incident response time reduction of 96%',
        'Clear 90-day implementation roadmap',
      ],
      de: [
        'Datenqualitäts-Verbesserung von 80-100%',
        'Compliance-Risiko Reduktion von 70-80%',
        'Incident Response Zeit Reduktion von 96%',
        'Klare 90-Tage-Implementierungs-Roadmap',
      ],
    },
    caseStudies: ['Series A SaaS (Data Quality +88%)', 'Series B SaaS (Compliance Risk -80%)', 'Series C (98% Data Quality)'],
    icon: React.createElement(ShieldCheck, { className: 'w-6 h-6' }),
    gradient: 'from-amber-500 to-orange-500',
    impact: ['board-governance'],
    bottleneck: ['setup', 'operationalization'],
    role: ['ceo', 'cto', 'coo'],
  },
];
