import { ClientCase } from './types';

export const clientCases: ClientCase[] = [
  {
    id: 'techscale-ai',
    company: 'TechScale AI',
    industry: 'B2B SaaS',
    stage: 'Series B',
    challenge: { 
      de: 'Stagnation bei €15M ARR trotz Product-Market Fit. Das Vertriebsteam wuchs linear, aber die Umsätze nicht. Die GTM-Motion war ineffizient und skalierte nicht.',
      en: 'Stagnation at €15M ARR despite Product-Market Fit. Sales team grew linearly, but revenue didn\'t. GTM motion was inefficient and didn\'t scale.'
    },
    solution: {
      de: 'AI-native GTM Transformation: Automatisierte Lead-Qualifizierung, AI-gestützte Outbound-Sequenzen, und Self-Serve Onboarding für SMB-Segment.',
      en: 'AI-native GTM transformation: Automated lead qualification, AI-powered outbound sequences, and self-serve onboarding for SMB segment.'
    },
    result: {
      de: '3.2x ARR in 18 Monaten durch AI-native GTM bei nur 12% Teamwachstum',
      en: '3.2x ARR in 18 months through AI-native GTM with only 12% team growth'
    },
    metrics: [
      { label: 'ARR Growth', value: '3.2x' },
      { label: 'Time to Result', value: '18 Mo' },
      { label: 'Team Size', value: '+12%' }
    ],
    playbooks: ['gtm-revenue', 'growth-engines'],
    timeline: '18 Monate',
    gradient: 'from-violet-500 to-purple-600',
    confidential: true
  },
  {
    id: 'dataflow-systems',
    company: 'DataFlow Systems',
    industry: 'Enterprise Software',
    stage: 'Series C',
    challenge: {
      de: 'Linear wachsende Kosten bei Skalierung. Jeder neue Enterprise-Kunde erforderte 1.5 FTE an Support und Implementation. Das Modell war nicht nachhaltig.',
      en: 'Linearly growing costs during scaling. Every new enterprise customer required 1.5 FTE for support and implementation. The model was unsustainable.'
    },
    solution: {
      de: 'AI Operations Framework: Automatisierte Ticket-Triage, Self-Healing Infrastructure, und AI-gestützte Dokumentation und Onboarding.',
      en: 'AI Operations Framework: Automated ticket triage, self-healing infrastructure, and AI-powered documentation and onboarding.'
    },
    result: {
      de: '67% Kostenreduktion durch AI Operations bei gleichzeitiger Qualitätssteigerung',
      en: '67% cost reduction through AI Operations while improving quality'
    },
    metrics: [
      { label: 'Cost Reduction', value: '67%' },
      { label: 'Efficiency', value: '+340%' },
      { label: 'ROI', value: '12x' }
    ],
    playbooks: ['operations', 'customer-success'],
    timeline: '12 Monate',
    gradient: 'from-blue-500 to-cyan-500',
    confidential: true
  },
  {
    id: 'scaleup-ventures',
    company: 'ScaleUp Ventures',
    industry: 'FinTech',
    stage: 'Series A',
    challenge: {
      de: 'Bottleneck in der Product Development Pipeline. Features brauchten 8 Wochen von Konzept bis Release. Das Team war überlastet und demotiviert.',
      en: 'Bottleneck in the product development pipeline. Features took 8 weeks from concept to release. Team was overloaded and demotivated.'
    },
    solution: {
      de: 'AI-augmented Development: AI Pair Programming, automatisierte Code Reviews, und AI-gestützte QA mit 80% weniger manuellen Tests.',
      en: 'AI-augmented Development: AI pair programming, automated code reviews, and AI-powered QA with 80% fewer manual tests.'
    },
    result: {
      de: '5x schnellere Feature Velocity mit AI-augmented Teams ohne Qualitätseinbußen',
      en: '5x faster feature velocity with AI-augmented teams without quality loss'
    },
    metrics: [
      { label: 'Feature Velocity', value: '5x' },
      { label: 'Time to Market', value: '-70%' },
      { label: 'Quality Score', value: '+45%' }
    ],
    playbooks: ['product', 'data-tech'],
    timeline: '9 Monate',
    gradient: 'from-emerald-500 to-teal-500',
    confidential: true
  },
  {
    id: 'growth-dynamics',
    company: 'Growth Dynamics',
    industry: 'MarTech',
    stage: 'Series B',
    challenge: {
      de: 'Ineffiziente Sales Cycles trotz starkem Produkt. 90-Tage-Zyklen mit zu vielen Touchpoints. Demo-to-Close Rate unter 15%.',
      en: 'Inefficient sales cycles despite strong product. 90-day cycles with too many touchpoints. Demo-to-close rate under 15%.'
    },
    solution: {
      de: 'Revenue Acceleration Framework: AI-gestützte Buyer Intent Signale, automatisierte Proposal Generation, und Predictive Deal Scoring.',
      en: 'Revenue Acceleration Framework: AI-powered buyer intent signals, automated proposal generation, and predictive deal scoring.'
    },
    result: {
      de: 'Sales Cycle von 90 auf 21 Tage reduziert bei gleichzeitiger Win Rate Steigerung',
      en: 'Sales cycle reduced from 90 to 21 days while improving win rate'
    },
    metrics: [
      { label: 'Sales Cycle', value: '-77%' },
      { label: 'Win Rate', value: '+89%' },
      { label: 'Deal Size', value: '+34%' }
    ],
    playbooks: ['gtm-revenue', 'growth-engines'],
    timeline: '6 Monate',
    gradient: 'from-amber-500 to-orange-500',
    confidential: true
  },
  {
    id: 'nexgen-analytics',
    company: 'NexGen Analytics',
    industry: 'Data & Analytics',
    stage: 'Series B',
    challenge: {
      de: 'Skalierung des Customer Success bei Enterprise Kunden. NRR bei 105%, Churn bei 8%. Expansion-Revenue minimal trotz guter Produkt-Adoption.',
      en: 'Scaling customer success with enterprise clients. NRR at 105%, churn at 8%. Expansion revenue minimal despite good product adoption.'
    },
    solution: {
      de: 'NRR Machine Framework: Predictive Churn Scoring, automatisierte Health Monitoring, und AI-gestützte Expansion Playbooks.',
      en: 'NRR Machine Framework: Predictive churn scoring, automated health monitoring, and AI-powered expansion playbooks.'
    },
    result: {
      de: 'NRR von 105% auf 142% gesteigert durch systematische Expansion',
      en: 'NRR increased from 105% to 142% through systematic expansion'
    },
    metrics: [
      { label: 'NRR', value: '142%' },
      { label: 'Churn', value: '-62%' },
      { label: 'Expansion', value: '+180%' }
    ],
    playbooks: ['customer-success', 'growth-engines'],
    timeline: '12 Monate',
    gradient: 'from-rose-500 to-pink-500',
    confidential: true
  }
];

// Helper to get a single client case by ID
export const getClientCaseById = (id: string): ClientCase | undefined => {
  return clientCases.find(c => c.id === id);
};
