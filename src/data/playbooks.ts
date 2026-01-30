import { TrendingUp, Rocket, Heart, Settings, DollarSign, Users, Database, Shield, ShieldCheck, Briefcase, Layers, Target, Zap } from 'lucide-react';
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
  // Sorting Properties
  ebene: 1 | 2 | 3;
  sortOrder: number;
}

export const playbooks: Playbook[] = [
  // ============================================================================
  // EBENE 1: MUTTER-PLAYBOOK (FEATURED)
  // ============================================================================
  {
    id: 'ai-native-scaling',
    slug: 'ai-native-scaling',
    title: {
      en: 'AI-Native Scaling Playbook',
      de: 'AI-Native Scaling Playbook',
    },
    description: {
      en: 'The complete framework for AI-native transformation. Learn the complete framework (4 Capabilities × 8 Dimensions × AI) used by AI-native companies to scale 10-30x faster, reach €100M ARR in 8-18 months (vs. 8-12 years traditional), and achieve 2-5x ARR/Employee. Includes 5 domain playbooks, 12 sub-playbooks, implementation guides, and real-world case studies from 22 companies.',
      de: 'Das komplette Framework für AI-native Transformation. Lerne das komplette Framework (4 Capabilities × 8 Dimensionen × AI), das AI-native Unternehmen nutzen, um 10-30x schneller zu skalieren, €100M ARR in 8-18 Monaten zu erreichen (vs. 8-12 Jahre traditionell) und 2-5x ARR/Mitarbeiter zu erzielen. Inklusive 5 Domain Playbooks, 12 Sub-Playbooks, Implementierungsguides und echten Case Studies von 22 Unternehmen.',
    },
    outcomes: {
      en: [
        'Scale 10-30x faster than traditional companies',
        'Reach €100M ARR in 8-18 months (vs. 8-12 years)',
        'Achieve €500k-€1.5M ARR/Employee (vs. €150k-€200k)',
        '5 domain playbooks + 12 sub-playbooks included',
      ],
      de: [
        '10-30x schneller skalieren als traditionelle Unternehmen',
        '€100M ARR in 8-18 Monaten erreichen (vs. 8-12 Jahre)',
        '€500k-€1.5M ARR/Mitarbeiter erzielen (vs. €150k-€200k)',
        '5 Domain Playbooks + 12 Sub-Playbooks inklusive',
      ],
    },
    caseStudies: ['Series A (€100M ARR in 14 months)', 'Series B (θ_index 0.88)', 'Series C (IPO-Ready, €150M ARR)'],
    icon: React.createElement(Zap, { className: 'w-6 h-6' }),
    gradient: 'from-purple-500 to-violet-500',
    impact: ['growth-engines', 'operating-systems', 'board-governance', 'portfolio', 'strategic-capabilities'],
    bottleneck: ['strategy', 'setup', 'execution-focus', 'operationalization'],
    role: ['ceo', 'cmo-cro', 'coo', 'cfo', 'cto', 'cpo', 'vc-board'],
    ebene: 1,
    sortOrder: 1,
  },
  // ============================================================================
  // EBENE 3: SUB-PLAYBOOKS
  // ============================================================================
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
    ebene: 3,
    sortOrder: 1,
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
    ebene: 3,
    sortOrder: 2,
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
    ebene: 3,
    sortOrder: 3,
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
    ebene: 3,
    sortOrder: 4,
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
    ebene: 3,
    sortOrder: 5,
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
    ebene: 3,
    sortOrder: 6,
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
    ebene: 3,
    sortOrder: 7,
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
    ebene: 3,
    sortOrder: 8,
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
    ebene: 3,
    sortOrder: 9,
  },
  // ============================================================================
  // EBENE 2: DOMAIN PLAYBOOK - BOARD & GOVERNANCE
  // ============================================================================
  {
    id: 'board-governance',
    slug: 'board-governance',
    title: {
      en: 'AI-Native Board & Governance Playbook',
      de: 'AI-Native Board & Governance Playbook',
    },
    description: {
      en: 'How to transform board and governance systems with AI-native frameworks. Learn the complete framework (Strategic Governance, Operational Governance, Exit/M&A) used by AI-native companies to reduce board prep time by 80%, increase board confidence by 100%, and achieve 2-5x valuation premiums. Includes 3 detailed sub-playbooks, implementation guides, and real-world case studies from Series A-C companies.',
      de: 'Wie du Board- und Governance-Systeme mit AI-native Frameworks transformierst. Lerne das komplette Framework (Strategic Governance, Operational Governance, Exit/M&A), das AI-native Unternehmen nutzen, um Board Prep Time um 80% zu reduzieren, Board Confidence um 100% zu steigern und 2-5x Bewertungsprämien zu erzielen. Inklusive 3 detaillierter Sub-Playbooks, Implementierungsguides und echten Case Studies von Series A-C Unternehmen.',
    },
    outcomes: {
      en: [
        'Board prep time reduction of 80%',
        'Board confidence increase of 100%',
        'Valuation premium of 2-5x',
        '3 detailed sub-playbooks included',
      ],
      de: [
        'Board Prep Time Reduktion von 80%',
        'Board Confidence Steigerung von 100%',
        'Bewertungsprämie von 2-5x',
        '3 detaillierte Sub-Playbooks inklusive',
      ],
    },
    caseStudies: ['Series A SaaS (Board Prep -79%)', 'Series B SaaS (Valuation 4x)', 'Series C (IPO-Ready, €1B)'],
    icon: React.createElement(Shield, { className: 'w-6 h-6' }),
    gradient: 'from-orange-500 to-amber-500',
    impact: ['board-governance'],
    bottleneck: ['strategy', 'operationalization'],
    role: ['ceo', 'vc-board'],
    ebene: 2,
    sortOrder: 3,
  },
  // ============================================================================
  // EBENE 2: DOMAIN PLAYBOOK - PORTFOLIO TRANSFORMATION
  // ============================================================================
  {
    id: 'portfolio-transformation',
    slug: 'portfolio-transformation',
    title: {
      en: 'AI-Native Portfolio Transformation Playbook',
      de: 'AI-Native Portfolio Transformation Playbook',
    },
    description: {
      en: 'How to transform entire portfolios to AI-native at scale. Learn the complete framework (Portfolio Excellence) used by top-tier VCs/PEs to transform 10-30 portfolio companies, achieve 3-5x portfolio value increase, and improve portfolio IRR from 15% to 40%+. Includes 1 detailed sub-playbook, implementation guides, and real-world case studies from leading VC/PE firms.',
      de: 'Wie du ganze Portfolios auf AI-native Skalierung transformierst. Lerne das komplette Framework (Portfolio Excellence), das Top-Tier VCs/PEs nutzen, um 10-30 Portfolio-Unternehmen zu transformieren, 3-5x Portfolio-Wertsteigerung zu erzielen und Portfolio-IRR von 15% auf 40%+ zu verbessern. Inklusive 1 detailliertem Sub-Playbook, Implementierungsguides und echten Case Studies von führenden VC/PE-Firmen.',
    },
    outcomes: {
      en: [
        'Portfolio IRR improvement from 15% to 40%+',
        'Portfolio value increase of 3-5x',
        'Transform 10-30 portfolio companies simultaneously',
        '1 detailed sub-playbook included',
      ],
      de: [
        'Portfolio-IRR Verbesserung von 15% auf 40%+',
        'Portfolio-Wertsteigerung von 3-5x',
        '10-30 Portfolio-Unternehmen gleichzeitig transformieren',
        '1 detailliertes Sub-Playbook inklusive',
      ],
    },
    caseStudies: ['Series A-B VC (Portfolio Value +€150M)', 'Series B-C VC (IRR 42%)', 'PE Firm (Portfolio Value +€500M)'],
    icon: React.createElement(Briefcase, { className: 'w-6 h-6' }),
    gradient: 'from-purple-500 to-pink-500',
    impact: ['portfolio'],
    bottleneck: ['strategy', 'setup', 'execution-focus', 'operationalization'],
    role: ['vc-board'],
    ebene: 2,
    sortOrder: 4,
  },
  {
    id: 'exit-ma',
    slug: 'board-governance/exit-ma',
    title: {
      en: 'Exit & M&A Playbook',
      de: 'Exit & M&A Playbook',
    },
    description: {
      en: 'How to build exit and M&A readiness that maximizes valuation. Learn the 5-component framework (Valuation Optimization, Due Diligence Preparation, Exit Strategy & Timing, M&A Integration, AI-Powered Exit Intelligence) used by AI-native companies to increase exit valuation by 200-400% and reduce due diligence time by 60%. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du Exit- und M&A-Bereitschaft aufbaust, die Bewertungen maximiert. Lerne das 5-Komponenten-Framework (Valuation Optimization, Due Diligence Preparation, Exit Strategy & Timing, M&A Integration, AI-Powered Exit Intelligence), das AI-native Unternehmen nutzen, um Exit-Bewertungen um 200-400% zu steigern und Due Diligence Zeit um 60% zu reduzieren. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    outcomes: {
      en: [
        'Exit valuation increase of 200-400%',
        'Due diligence time reduction of 60-80%',
        'M&A success rate increase of 100%',
        'Clear 90-day implementation roadmap',
      ],
      de: [
        'Exit-Bewertung Steigerung von 200-400%',
        'Due Diligence Zeit Reduktion von 60-80%',
        'M&A Erfolgsrate Steigerung von 100%',
        'Klare 90-Tage-Implementierungs-Roadmap',
      ],
    },
    caseStudies: ['Series A SaaS (Valuation +250%)', 'Series B SaaS (Due Diligence 6 Weeks)', 'Series C (IPO, 25x ARR)'],
    icon: React.createElement(Briefcase, { className: 'w-6 h-6' }),
    gradient: 'from-rose-500 to-red-500',
    impact: ['board-governance'],
    bottleneck: ['strategy'],
    role: ['ceo', 'vc-board'],
    ebene: 3,
    sortOrder: 10,
  },
  {
    id: 'portfolio-excellence',
    slug: 'portfolio/excellence',
    title: {
      en: 'Portfolio Excellence Playbook',
      de: 'Portfolio Excellence Playbook',
    },
    description: {
      en: 'How to transform portfolio performance with AI-native operations. Learn the 5-component framework (Portfolio Assessment & Scoring, Portfolio Transformation & Value Creation, Portfolio Operations & Synergies, Portfolio Intelligence & Reporting, AI-Powered Portfolio Excellence) used by VCs/PEs to increase portfolio valuation by 200-400% and achieve 3-5x faster growth. Includes best practices, implementation guide, and real-world case studies from VC/PE portfolios.',
      de: 'Wie du Portfolio-Performance mit AI-native Operations transformierst. Lerne das 5-Komponenten-Framework (Portfolio Assessment & Scoring, Portfolio Transformation & Value Creation, Portfolio Operations & Synergies, Portfolio Intelligence & Reporting, AI-Powered Portfolio Excellence), das VCs/PEs nutzen, um Portfolio-Bewertungen um 200-400% zu steigern und 3-5x schnelleres Wachstum zu erzielen. Inklusive Best Practices, Implementierungsguide und echten Case Studies von VC/PE Portfolios.',
    },
    outcomes: {
      en: [
        'Portfolio valuation increase of 200-400%',
        'Portfolio growth acceleration of 3-5x',
        'Portfolio IRR improvement of 50-100%',
        'Clear 90-day implementation roadmap',
      ],
      de: [
        'Portfolio-Bewertung Steigerung von 200-400%',
        'Portfolio-Wachstum Beschleunigung von 3-5x',
        'Portfolio IRR Verbesserung von 50-100%',
        'Klare 90-Tage-Implementierungs-Roadmap',
      ],
    },
    caseStudies: ['Series A-B VC (Valuation +250%)', 'Series B-C PE (IRR 35%)', 'Multi-Stage VC (4-hour Reporting)'],
    icon: React.createElement(Layers, { className: 'w-6 h-6' }),
    gradient: 'from-purple-500 to-indigo-500',
    impact: ['portfolio'],
    bottleneck: ['strategy', 'operationalization'],
    role: ['vc-board'],
    ebene: 3,
    sortOrder: 11,
  },
  {
    id: 'growth-engines',
    slug: 'growth-engines',
    title: {
      en: 'AI-Native Growth Engines Playbook',
      de: 'AI-Native Growth Engines Playbook',
    },
    description: {
      en: 'How to transform revenue generation with AI-native growth engines. Learn the complete framework (GTM/Revenue, Product, Customer Success) used by AI-native companies to achieve 3-5x faster growth, reduce CAC by 60-75%, and increase LTV/CAC by 50-100%. Includes 3 detailed sub-playbooks, implementation guides, and real-world case studies from Series A-C companies.',
      de: 'Wie du Revenue-Generierung mit AI-native Growth Engines transformierst. Lerne das komplette Framework (GTM/Revenue, Product, Customer Success), das AI-native Unternehmen nutzen, um 3-5x schnelleres Wachstum zu erzielen, CAC um 60-75% zu senken und LTV/CAC um 50-100% zu steigern. Inklusive 3 detaillierter Sub-Playbooks, Implementierungsguides und echten Case Studies von Series A-C Unternehmen.',
    },
    outcomes: {
      en: [
        '3-5x faster growth rate',
        'CAC reduction of 60-75%',
        'LTV/CAC improvement of 50-100%',
        '3 detailed sub-playbooks included',
      ],
      de: [
        '3-5x schnellere Wachstumsrate',
        'CAC-Reduktion von 60-75%',
        'LTV/CAC Verbesserung von 50-100%',
        '3 detaillierte Sub-Playbooks inklusive',
      ],
    },
    caseStudies: ['Series A SaaS (CAC -70%)', 'Series B SaaS (LTV/CAC 15x)', 'Series C (€100M ARR in 18mo)'],
    icon: React.createElement(TrendingUp, { className: 'w-6 h-6' }),
    gradient: 'from-green-500 to-emerald-500',
    impact: ['growth-engines'],
    bottleneck: ['strategy', 'execution-focus'],
    role: ['ceo', 'cmo-cro', 'cpo'],
    ebene: 2,
    sortOrder: 1,
  },
  {
    id: 'operating-systems',
    slug: 'operating-systems',
    title: {
      en: 'AI-Native Operating Systems Playbook',
      de: 'AI-Native Operating Systems Playbook',
    },
    description: {
      en: 'How to transform infrastructure and processes with AI-native operating systems. Learn the complete framework (Operations, Finance, Talent, Data/Tech) used by AI-native companies to achieve 2-5x efficiency gains, reduce operational costs by 30-50%, and scale without linear headcount growth. Includes 4 detailed sub-playbooks, implementation guides, and real-world case studies from Series A-C companies.',
      de: 'Wie du Infrastruktur und Prozesse mit AI-native Operating Systems transformierst. Lerne das komplette Framework (Operations, Finance, Talent, Data/Tech), das AI-native Unternehmen nutzen, um 2-5x Effizienzsteigerungen zu erzielen, Betriebskosten um 30-50% zu senken und ohne lineares Headcount-Wachstum zu skalieren. Inklusive 4 detaillierter Sub-Playbooks, Implementierungsguides und echten Case Studies von Series A-C Unternehmen.',
    },
    outcomes: {
      en: [
        '2-5x efficiency gains',
        'Operational cost reduction of 30-50%',
        'Scale without linear headcount growth',
        '4 detailed sub-playbooks included',
      ],
      de: [
        '2-5x Effizienzsteigerungen',
        'Betriebskosten-Reduktion von 30-50%',
        'Skalieren ohne lineares Headcount-Wachstum',
        '4 detaillierte Sub-Playbooks inklusive',
      ],
    },
    caseStudies: ['Series A SaaS (Costs -45%)', 'Series B SaaS (Rule of 40: 45%)', 'Series C (€100M ARR, 0% Headcount Growth)'],
    icon: React.createElement(Settings, { className: 'w-6 h-6' }),
    gradient: 'from-blue-500 to-cyan-500',
    impact: ['operating-systems'],
    bottleneck: ['setup', 'operationalization'],
    role: ['ceo', 'coo', 'cfo', 'cto'],
    ebene: 2,
    sortOrder: 2,
  },
  {
    id: 'strategic-capabilities',
    slug: 'strategic-capabilities',
    title: {
      en: 'Strategic Capabilities Playbook',
      de: 'Strategic Capabilities Playbook',
    },
    description: {
      en: 'How to improve the 4 core capabilities that drive AI-native scaling. Learn the 5-component framework (Capability Assessment, Capability Development, Capability Integration, Capability Optimization, AI-Powered Capability Excellence) used by AI-native companies to improve θ_index from 0.35 to 0.75+ and achieve 3-5x faster scaling. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du die 4 Kern-Capabilities verbesserst, die AI-native Skalierung antreiben. Lerne das 5-Komponenten-Framework (Capability Assessment, Capability Development, Capability Integration, Capability Optimization, AI-Powered Capability Excellence), das AI-native Unternehmen nutzen, um θ_index von 0.35 auf 0.75+ zu verbessern und 3-5x schnellere Skalierung zu erreichen. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    outcomes: {
      en: [
        'θ_index improvement from 0.35 to 0.75+',
        'Scaling velocity increase of 3-5x',
        'Capability bottleneck (C_min) identification and fix',
        'Clear 90-day implementation roadmap',
      ],
      de: [
        'θ_index Verbesserung von 0.35 auf 0.75+',
        'Skalierungsgeschwindigkeit Steigerung von 3-5x',
        'Capability Bottleneck (C_min) Identifikation und Fix',
        'Klare 90-Tage-Implementierungs-Roadmap',
      ],
    },
    caseStudies: ['Series A SaaS (θ_index +123%)', 'Series B SaaS (All C > 0.7)', 'Series C (θ_index 0.88 AI-Native)'],
    icon: React.createElement(Target, { className: 'w-6 h-6' }),
    gradient: 'from-red-500 to-rose-500',
    impact: ['strategic-capabilities'],
    bottleneck: ['strategy', 'setup', 'execution-focus', 'operationalization'],
    role: ['ceo'],
    ebene: 2,
    sortOrder: 5,
  },
];
