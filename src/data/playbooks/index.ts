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
      en: 'How to build growth engines that compound with AI. Transform GTM, Product, and Customer Success into self-reinforcing systems.',
      de: 'Wie du Wachstumsmotoren aufbaust, die sich mit AI verstärken. Transformiere GTM, Product und Customer Success in selbstverstärkende Systeme.',
    },
    icon: 'TrendingUp',
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
    area: ['growth-engines'],
    bottleneck: ['strategy', 'execution-focus'],
    role: ['ceo', 'cmo-cro'],
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
      en: 'Build the operational backbone that enables hypergrowth. Operations, Finance, Talent, and Data/Tech as integrated AI-native systems.',
      de: 'Baue das operative Rückgrat, das Hypergrowth ermöglicht. Operations, Finance, Talent und Data/Tech als integrierte AI-native Systeme.',
    },
    icon: 'Settings',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    area: ['operating-systems'],
    bottleneck: ['setup', 'operationalization'],
    role: ['ceo', 'coo'],
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
      en: 'Transform board dynamics with AI-augmented governance. Strategic oversight, operational excellence, and exit readiness.',
      de: 'Transformiere Board-Dynamiken mit AI-gestützter Governance. Strategische Aufsicht, operative Exzellenz und Exit-Bereitschaft.',
    },
    icon: 'Shield',
    color: 'orange',
    gradient: 'from-orange-500 to-amber-500',
    area: ['board-governance'],
    bottleneck: ['strategy'],
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
      en: 'Maximize portfolio value through AI-native transformation. The VC/PE supplement for systematic portfolio excellence.',
      de: 'Maximiere Portfoliowert durch AI-native Transformation. Das VC/PE Supplement für systematische Portfolio-Exzellenz.',
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
      en: 'Strategic Capabilities (C₁-C₄) Playbook',
      de: 'Strategic Capabilities (C₁-C₄) Playbook',
    },
    description: {
      en: 'Master the 4 core capabilities: Strategy, Setup, Execution, and Operationalization. The meta-framework for scaling.',
      de: 'Meistere die 4 Kern-Capabilities: Strategy, Setup, Execution und Operationalization. Das Meta-Framework für Skalierung.',
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
      en: 'Build the technical foundation for AI-native scaling. Data architecture, AI/ML infrastructure, and technology strategy.',
      de: 'Baue das technische Fundament für AI-native Skalierung. Datenarchitektur, AI/ML-Infrastruktur und Technologiestrategie.',
    },
    icon: 'Database',
    color: 'blue',
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
      en: 'AI-augmented strategic board oversight. Vision alignment, strategic planning, and decision-making frameworks.',
      de: 'AI-gestützte strategische Board-Aufsicht. Vision-Alignment, strategische Planung und Entscheidungs-Frameworks.',
    },
    icon: 'Compass',
    color: 'orange',
    gradient: 'from-orange-500 to-yellow-500',
    area: ['board-governance'],
    bottleneck: ['strategy'],
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
      en: 'Excellence in operational board oversight. KPI frameworks, risk management, and operational decision-making.',
      de: 'Exzellenz in operativer Board-Aufsicht. KPI-Frameworks, Risikomanagement und operative Entscheidungsfindung.',
    },
    icon: 'Activity',
    color: 'orange',
    gradient: 'from-amber-500 to-orange-500',
    area: ['board-governance'],
    bottleneck: ['operationalization'],
    role: ['ceo', 'coo', 'vc-board'],
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
      en: 'Maximize exit value through AI-native preparation. M&A readiness, due diligence optimization, and value maximization strategies.',
      de: 'Maximiere Exit-Wert durch AI-native Vorbereitung. M&A-Bereitschaft, Due Diligence Optimierung und Wertsteigerungsstrategien.',
    },
    icon: 'ArrowUpRight',
    color: 'orange',
    gradient: 'from-rose-500 to-red-500',
    area: ['board-governance'],
    bottleneck: ['strategy'],
    role: ['ceo', 'cfo', 'vc-board'],
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
      en: 'Systematic portfolio value creation. Performance benchmarking, value acceleration, and portfolio optimization strategies.',
      de: 'Systematische Portfoliowert-Schöpfung. Performance-Benchmarking, Value Acceleration und Portfolio-Optimierungsstrategien.',
    },
    icon: 'Briefcase',
    color: 'purple',
    gradient: 'from-purple-500 to-indigo-500',
    area: ['portfolio'],
    bottleneck: ['strategy', 'setup', 'execution-focus', 'operationalization'],
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
