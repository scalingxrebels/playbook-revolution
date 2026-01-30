import type { PlaybookMeta } from './types';

/**
 * Master Index of all 18 Playbooks
 * 
 * EBENE 1: Mutter-Playbook (1)
 * EBENE 2: Domain Playbooks (5)
 * EBENE 3: Sub-Playbooks (12)
 */
export const playbookIndex: PlaybookMeta[] = [
  // ============================================================================
  // EBENE 1: MUTTER-PLAYBOOK (1/18)
  // ============================================================================
  {
    id: 1,
    slug: 'ai-native-scaling',
    title: {
      en: 'AI-Native Scaling Playbook',
      de: 'AI-Native Scaling Playbook',
    },
    description: {
      en: 'The complete framework for building AI-native companies. Master all 4 capabilities × 8 dimensions to achieve sustainable hypergrowth.',
      de: 'Das komplette Framework für den Aufbau von AI-native Unternehmen. Meistere alle 4 Capabilities × 8 Dimensionen für nachhaltiges Hypergrowth.',
    },
    icon: 'Zap',
    color: 'purple',
    gradient: 'from-purple-500 to-violet-500',
    area: ['growth-engines', 'operating-systems', 'board-governance', 'portfolio', 'strategic-capabilities'],
    bottleneck: ['strategy', 'setup', 'execution-focus', 'operationalization'],
    role: ['ceo'],
    ebene: 1,
    parent: null,
    children: [2, 3, 4, 5, 6],
  },

  // ============================================================================
  // EBENE 2: DOMAIN PLAYBOOKS (5/18)
  // ============================================================================
  {
    id: 2,
    slug: 'growth-engines',
    title: {
      en: 'AI-Native Growth Engines Playbook',
      de: 'AI-Native Growth Engines Playbook',
    },
    description: {
      en: 'How to transform revenue generation with AI-native growth engines. Learn the complete framework (GTM/Revenue, Product, Customer Success) used by AI-native companies to achieve 3-5x faster growth, reduce CAC by 60-75%, and increase LTV/CAC by 50-100%. Includes 3 detailed sub-playbooks, implementation guides, and real-world case studies from Series A-C companies.',
      de: 'Wie du Revenue-Generierung mit AI-native Growth Engines transformierst. Lerne das komplette Framework (GTM/Revenue, Product, Customer Success), das AI-native Unternehmen nutzen, um 3-5x schnelleres Wachstum zu erzielen, CAC um 60-75% zu senken und LTV/CAC um 50-100% zu steigern. Inklusive 3 detaillierter Sub-Playbooks, Implementierungsguides und echten Case Studies von Series A-C Unternehmen.',
    },
    icon: 'TrendingUp',
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
    area: ['growth-engines'],
    bottleneck: ['strategy', 'execution-focus'],
    role: ['ceo', 'cmo-cro', 'cpo'],
    ebene: 2,
    parent: 1,
    children: [7, 8, 9],
  },
  {
    id: 3,
    slug: 'operating-systems',
    title: {
      en: 'AI-Native Operating Systems Playbook',
      de: 'AI-Native Operating Systems Playbook',
    },
    description: {
      en: 'How to transform infrastructure and processes with AI-native operating systems. Learn the complete framework (Operations, Finance, Talent, Data/Tech) used by AI-native companies to achieve 2-5x efficiency gains, reduce operational costs by 30-50%, and scale without linear headcount growth. Includes 4 detailed sub-playbooks, implementation guides, and real-world case studies from Series A-C companies.',
      de: 'Wie du Infrastruktur und Prozesse mit AI-native Operating Systems transformierst. Lerne das komplette Framework (Operations, Finance, Talent, Data/Tech), das AI-native Unternehmen nutzen, um 2-5x Effizienzsteigerungen zu erzielen, Betriebskosten um 30-50% zu senken und ohne lineares Headcount-Wachstum zu skalieren. Inklusive 4 detaillierter Sub-Playbooks, Implementierungsguides und echten Case Studies von Series A-C Unternehmen.',
    },
    icon: 'Settings',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    area: ['operating-systems'],
    bottleneck: ['setup', 'operationalization'],
    role: ['ceo', 'coo', 'cfo', 'cto'],
    ebene: 2,
    parent: 1,
    children: [10, 11, 12, 13],
  },
  {
    id: 4,
    slug: 'board-governance',
    title: {
      en: 'AI-Native Board & Governance Playbook',
      de: 'AI-Native Board & Governance Playbook',
    },
    description: {
      en: 'How to transform board and governance systems with AI-native frameworks. Learn the complete framework (Strategic Governance, Operational Governance, Exit/M&A) used by AI-native companies to reduce board prep time by 80%, increase board confidence by 100%, and achieve 2-5x valuation premiums. Includes 3 detailed sub-playbooks, implementation guides, and real-world case studies from Series A-C companies.',
      de: 'Wie du Board- und Governance-Systeme mit AI-native Frameworks transformierst. Lerne das komplette Framework (Strategic Governance, Operational Governance, Exit/M&A), das AI-native Unternehmen nutzen, um Board Prep Time um 80% zu reduzieren, Board Confidence um 100% zu steigern und 2-5x Bewertungsprämien zu erzielen. Inklusive 3 detaillierter Sub-Playbooks, Implementierungsguides und echten Case Studies von Series A-C Unternehmen.',
    },
    icon: 'Shield',
    color: 'orange',
    gradient: 'from-orange-500 to-amber-500',
    area: ['board-governance'],
    bottleneck: ['strategy', 'operationalization'],
    role: ['ceo', 'vc-board'],
    ebene: 2,
    parent: 1,
    children: [14, 15, 16],
  },
  {
    id: 5,
    slug: 'portfolio-transformation',
    title: {
      en: 'AI-Native Portfolio Transformation Playbook',
      de: 'AI-Native Portfolio Transformation Playbook',
    },
    description: {
      en: 'How to transform entire portfolios to AI-native at scale. Learn the complete framework (Portfolio Excellence) used by top-tier VCs/PEs to transform 10-30 portfolio companies, achieve 3-5x portfolio value increase, and improve portfolio IRR from 15% to 40%+. Includes 1 detailed sub-playbook, implementation guides, and real-world case studies from leading VC/PE firms.',
      de: 'Wie du ganze Portfolios auf AI-native Skalierung transformierst. Lerne das komplette Framework (Portfolio Excellence), das Top-Tier VCs/PEs nutzen, um 10-30 Portfolio-Unternehmen zu transformieren, 3-5x Portfolio-Wertsteigerung zu erzielen und Portfolio-IRR von 15% auf 40%+ zu verbessern. Inklusive 1 detailliertem Sub-Playbook, Implementierungsguides und echten Case Studies von führenden VC/PE-Firmen.',
    },
    icon: 'Briefcase',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
    area: ['portfolio'],
    bottleneck: ['strategy', 'setup', 'execution-focus', 'operationalization'],
    role: ['vc-board'],
    ebene: 2,
    parent: 1,
    children: [17],
  },
  {
    id: 6,
    slug: 'strategic-capabilities',
    title: {
      en: 'Strategic Capabilities Playbook',
      de: 'Strategic Capabilities Playbook',
    },
    description: {
      en: 'How to improve the 4 core capabilities that drive AI-native scaling. Learn the 5-component framework (Capability Assessment, Capability Development, Capability Integration, Capability Optimization, AI-Powered Capability Excellence) used by AI-native companies to improve θ_index from 0.35 to 0.75+ and achieve 3-5x faster scaling. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du die 4 Kern-Capabilities verbesserst, die AI-native Skalierung antreiben. Lerne das 5-Komponenten-Framework (Capability Assessment, Capability Development, Capability Integration, Capability Optimization, AI-Powered Capability Excellence), das AI-native Unternehmen nutzen, um θ_index von 0.35 auf 0.75+ zu verbessern und 3-5x schnellere Skalierung zu erreichen. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    icon: 'Target',
    color: 'red',
    gradient: 'from-red-500 to-rose-500',
    area: ['strategic-capabilities'],
    bottleneck: ['strategy', 'setup', 'execution-focus', 'operationalization'],
    role: ['ceo'],
    ebene: 2,
    parent: 1,
    children: [18],
  },

  // ============================================================================
  // EBENE 3: SUB-PLAYBOOKS - GROWTH ENGINES (3/18)
  // ============================================================================
  {
    id: 7,
    slug: 'growth-engines/gtm-revenue',
    title: {
      en: 'GTM/Revenue Playbook',
      de: 'GTM/Revenue Playbook',
    },
    description: {
      en: 'How to build a revenue engine that scales with AI. Learn the 7-lever framework (ICP Clarity, Outbound Sales, Inbound Marketing, Channel Partners, Pricing, Sales Process, PLG) used by AI-native companies to reduce CAC by 50% and increase win rates by 100%. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du eine Revenue Engine aufbaust, die mit AI skaliert. Lerne das 7-Hebel-Framework (ICP Clarity, Outbound Sales, Inbound Marketing, Channel Partner, Pricing, Sales Process, PLG), das AI-native Unternehmen nutzen, um CAC um 50% zu senken und Win Rates um 100% zu steigern. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    icon: 'TrendingUp',
    color: 'green',
    gradient: 'from-orange-500 to-amber-500',
    area: ['growth-engines'],
    bottleneck: ['strategy', 'execution-focus'],
    role: ['ceo', 'cmo-cro'],
    ebene: 3,
    parent: 2,
    children: [],
  },
  {
    id: 8,
    slug: 'growth-engines/product',
    title: {
      en: 'Product Playbook',
      de: 'Product Playbook',
    },
    description: {
      en: 'How to build products that scale with AI. Learn the 5-component framework (Product-Led Growth, Shipping Velocity, Feature Quality, Product Analytics, AI-Powered Development) used by AI-native companies to ship 10x faster and achieve product-market fit in weeks, not years. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du Produkte baust, die mit AI skalieren. Lerne das 5-Komponenten-Framework (Product-Led Growth, Shipping Velocity, Feature Quality, Product Analytics, AI-Powered Development), das AI-native Unternehmen nutzen, um 10x schneller zu shippen und Product-Market Fit in Wochen statt Jahren zu erreichen. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    icon: 'Rocket',
    color: 'green',
    gradient: 'from-green-500 to-teal-500',
    area: ['growth-engines'],
    bottleneck: ['strategy', 'execution-focus'],
    role: ['ceo', 'cpo', 'cto'],
    ebene: 3,
    parent: 2,
    children: [],
  },
  {
    id: 9,
    slug: 'growth-engines/customer-success',
    title: {
      en: 'Customer Success Playbook',
      de: 'Customer Success Playbook',
    },
    description: {
      en: 'How to build customer success that scales with AI. Learn the 5-component framework (Onboarding Excellence, Health Scoring, Retention Loops, Expansion Playbooks, AI-Powered CS Operations) used by AI-native companies to reduce churn by 60% and increase NRR by 30-50pp. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du Customer Success aufbaust, das mit AI skaliert. Lerne das 5-Komponenten-Framework (Onboarding Excellence, Health Scoring, Retention Loops, Expansion Playbooks, AI-Powered CS Operations), das AI-native Unternehmen nutzen, um Churn um 60% zu senken und NRR um 30-50pp zu steigern. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    icon: 'Heart',
    color: 'pink',
    gradient: 'from-pink-500 to-rose-500',
    area: ['growth-engines'],
    bottleneck: ['execution-focus'],
    role: ['ceo', 'coo'],
    ebene: 3,
    parent: 2,
    children: [],
  },

  // ============================================================================
  // EBENE 3: SUB-PLAYBOOKS - OPERATING SYSTEMS (4/18)
  // ============================================================================
  {
    id: 10,
    slug: 'operating-systems/operations',
    title: {
      en: 'Operations Playbook',
      de: 'Operations Playbook',
    },
    description: {
      en: 'How to build operations that scale with AI. Learn the 5-component framework (Process Design, Workflow Automation, AI Orchestration, Operational Analytics, AI-Powered Operations) used by AI-native companies to reduce operational costs by 60% and increase efficiency by 200%. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du Operations aufbaust, die mit AI skalieren. Lerne das 5-Komponenten-Framework (Process Design, Workflow Automation, AI Orchestration, Operational Analytics, AI-Powered Operations), das AI-native Unternehmen nutzen, um Betriebskosten um 60% zu senken und Effizienz um 200% zu steigern. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    icon: 'Settings',
    color: 'blue',
    gradient: 'from-blue-500 to-indigo-500',
    area: ['operating-systems'],
    bottleneck: ['setup', 'operationalization'],
    role: ['ceo', 'coo', 'cto'],
    ebene: 3,
    parent: 3,
    children: [],
  },
  {
    id: 11,
    slug: 'operating-systems/finance',
    title: {
      en: 'Finance Playbook',
      de: 'Finance Playbook',
    },
    description: {
      en: 'How to build finance systems that scale with AI. Learn the 5-component framework (Unit Economics, FP&A Systems, Scenario Planning, Financial Reporting, AI-Powered Finance) used by AI-native companies to improve Rule of 40 by 20-40pp and increase forecast accuracy from 60% to 95%. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du Finanzsysteme aufbaust, die mit AI skalieren. Lerne das 5-Komponenten-Framework (Unit Economics, FP&A Systeme, Szenarioplanung, Financial Reporting, AI-Powered Finance), das AI-native Unternehmen nutzen, um Rule of 40 um 20-40pp zu verbessern und Forecast-Genauigkeit von 60% auf 95% zu steigern. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    icon: 'DollarSign',
    color: 'emerald',
    gradient: 'from-emerald-500 to-green-500',
    area: ['operating-systems'],
    bottleneck: ['setup', 'operationalization'],
    role: ['ceo', 'cfo', 'coo'],
    ebene: 3,
    parent: 3,
    children: [],
  },
  {
    id: 12,
    slug: 'operating-systems/talent',
    title: {
      en: 'Talent Playbook',
      de: 'Talent Playbook',
    },
    description: {
      en: 'How to build talent systems that scale with AI. Learn the 5-component framework (Hiring Pipeline, Onboarding Excellence, Performance Management, Talent Analytics, AI-Powered Talent) used by AI-native companies to reduce time-to-hire by 60% and increase retention by 40%. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du Talent-Systeme aufbaust, die mit AI skalieren. Lerne das 5-Komponenten-Framework (Hiring Pipeline, Onboarding Excellence, Performance Management, Talent Analytics, AI-Powered Talent), das AI-native Unternehmen nutzen, um Time-to-Hire um 60% zu reduzieren und Retention um 40% zu steigern. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    icon: 'Users',
    color: 'violet',
    gradient: 'from-violet-500 to-purple-500',
    area: ['operating-systems'],
    bottleneck: ['setup', 'operationalization'],
    role: ['ceo', 'coo'],
    ebene: 3,
    parent: 3,
    children: [],
  },
  {
    id: 13,
    slug: 'operating-systems/data-tech',
    title: {
      en: 'Data/Tech Playbook',
      de: 'Data/Tech Playbook',
    },
    description: {
      en: 'How to build data and tech infrastructure that scales with AI. Learn the 5-component framework (Data Architecture, Tech Stack Excellence, Analytics & BI, ML Ops & AI Platform, AI-Powered Data/Tech) used by AI-native companies to improve data quality by 80% and reduce tech debt by 60%. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du Daten- und Tech-Infrastruktur aufbaust, die mit AI skaliert. Lerne das 5-Komponenten-Framework (Data Architecture, Tech Stack Excellence, Analytics & BI, ML Ops & AI Platform, AI-Powered Data/Tech), das AI-native Unternehmen nutzen, um Datenqualität um 80% zu verbessern und Tech Debt um 60% zu reduzieren. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    icon: 'Database',
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-500',
    area: ['operating-systems'],
    bottleneck: ['setup', 'operationalization'],
    role: ['ceo', 'cto'],
    ebene: 3,
    parent: 3,
    children: [],
  },

  // ============================================================================
  // EBENE 3: SUB-PLAYBOOKS - BOARD & GOVERNANCE (3/18)
  // ============================================================================
  {
    id: 14,
    slug: 'board-governance/strategic-governance',
    title: {
      en: 'Strategic Governance Playbook',
      de: 'Strategic Governance Playbook',
    },
    description: {
      en: 'How to build board and governance systems that scale with AI. Learn the 5-component framework (Board Intelligence & Reporting, Strategic Planning & OKRs, Risk Management & Compliance, Investor Relations & Communication, AI-Powered Governance) used by AI-native companies to reduce board prep time by 80% and increase board confidence by 100%. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du Board- und Governance-Systeme aufbaust, die mit AI skalieren. Lerne das 5-Komponenten-Framework (Board Intelligence & Reporting, Strategic Planning & OKRs, Risk Management & Compliance, Investor Relations & Communication, AI-Powered Governance), das AI-native Unternehmen nutzen, um Board Prep Time um 80% zu reduzieren und Board Confidence um 100% zu steigern. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    icon: 'Shield',
    color: 'orange',
    gradient: 'from-orange-500 to-amber-500',
    area: ['board-governance'],
    bottleneck: ['strategy', 'operationalization'],
    role: ['ceo', 'vc-board'],
    ebene: 3,
    parent: 4,
    children: [],
  },
  {
    id: 15,
    slug: 'board-governance/operational-governance',
    title: {
      en: 'Operational Governance Playbook',
      de: 'Operational Governance Playbook',
    },
    description: {
      en: 'How to build operational governance systems that scale with AI. Learn the 5-component framework (Data Governance, Legal & Compliance, AI Governance & Ethics, Operational Risk Management, AI-Powered Operational Governance) used by AI-native companies to improve data quality by 80% and reduce compliance risk by 70%. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du Operational Governance Systeme aufbaust, die mit AI skalieren. Lerne das 5-Komponenten-Framework (Data Governance, Legal & Compliance, AI Governance & Ethics, Operational Risk Management, AI-Powered Operational Governance), das AI-native Unternehmen nutzen, um Datenqualität um 80% zu verbessern und Compliance-Risiko um 70% zu reduzieren. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    icon: 'ShieldCheck',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-500',
    area: ['board-governance'],
    bottleneck: ['setup', 'operationalization'],
    role: ['ceo', 'cto', 'coo'],
    ebene: 3,
    parent: 4,
    children: [],
  },
  {
    id: 16,
    slug: 'board-governance/exit-ma',
    title: {
      en: 'Exit & M&A Playbook',
      de: 'Exit & M&A Playbook',
    },
    description: {
      en: 'How to build exit and M&A readiness that maximizes valuation. Learn the 5-component framework (Valuation Optimization, Due Diligence Preparation, Exit Strategy & Timing, M&A Integration, AI-Powered Exit Intelligence) used by AI-native companies to increase exit valuation by 200-400% and reduce due diligence time by 60%. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du Exit- und M&A-Bereitschaft aufbaust, die Bewertungen maximiert. Lerne das 5-Komponenten-Framework (Valuation Optimization, Due Diligence Preparation, Exit Strategy & Timing, M&A Integration, AI-Powered Exit Intelligence), das AI-native Unternehmen nutzen, um Exit-Bewertungen um 200-400% zu steigern und Due Diligence Zeit um 60% zu reduzieren. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    icon: 'Briefcase',
    color: 'rose',
    gradient: 'from-rose-500 to-red-500',
    area: ['board-governance'],
    bottleneck: ['strategy'],
    role: ['ceo', 'vc-board'],
    ebene: 3,
    parent: 4,
    children: [],
  },

  // ============================================================================
  // EBENE 3: SUB-PLAYBOOKS - PORTFOLIO (1/18)
  // ============================================================================
  {
    id: 17,
    slug: 'portfolio/portfolio-excellence',
    title: {
      en: 'Portfolio Excellence Playbook',
      de: 'Portfolio Excellence Playbook',
    },
    description: {
      en: 'How to transform portfolio performance with AI-native operations. Learn the 5-component framework (Portfolio Assessment & Scoring, Portfolio Transformation & Value Creation, Portfolio Operations & Synergies, Portfolio Intelligence & Reporting, AI-Powered Portfolio Excellence) used by VCs/PEs to increase portfolio valuation by 200-400% and achieve 3-5x faster growth. Includes best practices, implementation guide, and real-world case studies from VC/PE portfolios.',
      de: 'Wie du Portfolio-Performance mit AI-native Operations transformierst. Lerne das 5-Komponenten-Framework (Portfolio Assessment & Scoring, Portfolio Transformation & Value Creation, Portfolio Operations & Synergies, Portfolio Intelligence & Reporting, AI-Powered Portfolio Excellence), das VCs/PEs nutzen, um Portfolio-Bewertungen um 200-400% zu steigern und 3-5x schnelleres Wachstum zu erzielen. Inklusive Best Practices, Implementierungsguide und echten Case Studies von VC/PE Portfolios.',
    },
    icon: 'Layers',
    color: 'purple',
    gradient: 'from-purple-500 to-indigo-500',
    area: ['portfolio'],
    bottleneck: ['strategy', 'operationalization'],
    role: ['vc-board'],
    ebene: 3,
    parent: 5,
    children: [],
  },

  // ============================================================================
  // EBENE 3: SUB-PLAYBOOKS - STRATEGIC CAPABILITIES (1/18)
  // ============================================================================
  {
    id: 18,
    slug: 'strategic-capabilities/deep-dive',
    title: {
      en: 'Strategic Capabilities Deep Dive',
      de: 'Strategic Capabilities Deep Dive',
    },
    description: {
      en: 'Master each of the 4 capabilities (C₁-C₄) in depth. Detailed frameworks, assessment tools, and implementation guides.',
      de: 'Meistere jede der 4 Capabilities (C₁-C₄) im Detail. Detaillierte Frameworks, Assessment-Tools und Implementierungsguides.',
    },
    icon: 'Target',
    color: 'red',
    gradient: 'from-red-500 to-orange-500',
    area: ['strategic-capabilities'],
    bottleneck: ['strategy', 'setup', 'execution-focus', 'operationalization'],
    role: ['ceo'],
    ebene: 3,
    parent: 6,
    children: [],
  },
];

// Helper functions
export const getPlaybookBySlug = (slug: string): PlaybookMeta | undefined => {
  return playbookIndex.find((p) => p.slug === slug);
};

export const getPlaybookById = (id: number): PlaybookMeta | undefined => {
  return playbookIndex.find((p) => p.id === id);
};

export const getPlaybooksByEbene = (ebene: 1 | 2 | 3): PlaybookMeta[] => {
  return playbookIndex.filter((p) => p.ebene === ebene);
};

export const getChildPlaybooks = (parentId: number): PlaybookMeta[] => {
  return playbookIndex.filter((p) => p.parent === parentId);
};

export const getParentPlaybook = (childId: number): PlaybookMeta | undefined => {
  const child = getPlaybookById(childId);
  if (!child || !child.parent) return undefined;
  return getPlaybookById(child.parent);
};
