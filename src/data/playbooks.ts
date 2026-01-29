import { 
  Rocket, Users, Settings, Workflow, Cpu, 
  Shield, TrendingUp, LineChart, Award,
  Brain, Building, Layers, Target, Briefcase
} from 'lucide-react';
import React from 'react';
import type { ImpactTag, BottleneckTag, RoleTag } from './playbookFilters';

export interface Playbook {
  id: string;
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
  // 1. AI-Native Scaling Playbook (Master Playbook)
  {
    id: 'ai-native-scaling-playbook',
    title: { 
      en: 'AI-Native Scaling Playbook', 
      de: 'AI-Native Scaling Playbook' 
    },
    description: { 
      en: 'The comprehensive master playbook for AI-native scaling. Foundation for all other playbooks.',
      de: 'Das umfassende Master-Playbook für AI-native Skalierung. Grundlage für alle anderen Playbooks.'
    },
    outcomes: {
      en: ['Complete scaling framework', 'AI-native operating model', 'Hypergrowth foundation'],
      de: ['Vollständiges Scaling-Framework', 'AI-natives Betriebsmodell', 'Hypergrowth-Grundlage']
    },
    caseStudies: ['Cursor', 'Midjourney', 'Perplexity'],
    icon: React.createElement(Brain, { className: 'w-6 h-6' }),
    gradient: 'from-purple-600 to-pink-600',
    impact: ['growth-engines', 'operating-systems', 'board-governance', 'portfolio', 'strategic-capabilities'],
    bottleneck: ['strategy', 'setup', 'execution-focus', 'operationalization'],
    role: ['ceo', 'cmo-cro', 'coo', 'cfo', 'cto', 'cpo', 'vc-board'],
  },

  // === GROWTH ENGINES (Document 5a) ===
  
  // 2. GTM/Revenue Playbook
  {
    id: 'gtm-revenue-playbook',
    title: { 
      en: 'GTM/Revenue Playbook', 
      de: 'GTM/Revenue Playbook' 
    },
    description: { 
      en: 'Transform your go-to-market motion with AI-powered prospecting, qualification, and closing strategies.',
      de: 'Transformieren Sie Ihre Go-to-Market-Bewegung mit KI-gestütztem Prospecting, Qualifizierung und Abschlussstrategien.'
    },
    outcomes: {
      en: ['3x pipeline velocity', '40% higher conversion rates', 'AI-powered sales coaching'],
      de: ['3x Pipeline-Geschwindigkeit', '40% höhere Konversionsraten', 'KI-gestütztes Verkaufscoaching']
    },
    caseStudies: ['Cursor', 'Perplexity'],
    icon: React.createElement(Target, { className: 'w-6 h-6' }),
    gradient: 'from-blue-500 to-cyan-500',
    impact: ['growth-engines'],
    bottleneck: ['strategy', 'execution-focus'],
    role: ['ceo', 'cmo-cro'],
  },

  // 3. Product Playbook
  {
    id: 'product-playbook',
    title: { 
      en: 'Product Playbook', 
      de: 'Product Playbook' 
    },
    description: { 
      en: 'Build viral product-led growth loops with AI-enhanced onboarding and activation.',
      de: 'Bauen Sie virale produktgesteuerte Wachstumsschleifen mit KI-verbessertem Onboarding und Aktivierung.'
    },
    outcomes: {
      en: ['50% faster activation', 'Viral coefficient > 1.2', 'Self-serve revenue growth'],
      de: ['50% schnellere Aktivierung', 'Viraler Koeffizient > 1,2', 'Self-Service-Umsatzwachstum']
    },
    caseStudies: ['Midjourney', 'Notion'],
    icon: React.createElement(Rocket, { className: 'w-6 h-6' }),
    gradient: 'from-purple-500 to-pink-500',
    impact: ['growth-engines'],
    bottleneck: ['execution-focus'],
    role: ['ceo', 'cpo', 'cto'],
  },

  // 4. Customer Success Playbook
  {
    id: 'customer-success-playbook',
    title: { 
      en: 'Customer Success Playbook', 
      de: 'Customer Success Playbook' 
    },
    description: { 
      en: 'Transform customer success with AI-powered health scoring, churn prediction, and proactive intervention.',
      de: 'Transformieren Sie Customer Success mit KI-gestütztem Health Scoring, Churn-Prognose und proaktiver Intervention.'
    },
    outcomes: {
      en: ['Predictive churn prevention', 'Automated health scoring', 'Net Revenue Retention > 120%'],
      de: ['Prädiktive Churn-Prävention', 'Automatisiertes Health Scoring', 'Net Revenue Retention > 120%']
    },
    caseStudies: ['Gainsight', 'ChurnZero'],
    icon: React.createElement(Award, { className: 'w-6 h-6' }),
    gradient: 'from-pink-500 to-rose-500',
    impact: ['growth-engines'],
    bottleneck: ['execution-focus'],
    role: ['ceo', 'cmo-cro'],
  },

  // === OPERATING SYSTEMS (Document 5b) ===

  // 5. Operations Playbook
  {
    id: 'operations-playbook',
    title: { 
      en: 'Operations Playbook', 
      de: 'Operations Playbook' 
    },
    description: { 
      en: 'Establish scalable operations with AI-driven automation, orchestration, and O(n log n) coordination.',
      de: 'Etablieren Sie skalierbare Operationen mit KI-gesteuerter Automatisierung, Orchestrierung und O(n log n) Koordination.'
    },
    outcomes: {
      en: ['70% reduction in manual tasks', 'O(n log n) coordination costs', 'Real-time visibility'],
      de: ['70% Reduktion manueller Aufgaben', 'O(n log n) Koordinationskosten', 'Echtzeit-Transparenz']
    },
    caseStudies: ['Linear', 'Notion'],
    icon: React.createElement(Settings, { className: 'w-6 h-6' }),
    gradient: 'from-orange-500 to-amber-500',
    impact: ['operating-systems'],
    bottleneck: ['setup', 'operationalization'],
    role: ['ceo', 'coo'],
  },

  // 6. Finance Playbook
  {
    id: 'finance-playbook',
    title: { 
      en: 'Finance Playbook', 
      de: 'Finance Playbook' 
    },
    description: { 
      en: 'Optimize financial operations with AI-driven forecasting, cost control, and unit economics optimization.',
      de: 'Optimieren Sie Finanzoperationen mit KI-gesteuerter Prognose, Kostenkontrolle und Unit-Economics-Optimierung.'
    },
    outcomes: {
      en: ['AI-powered financial forecasting', 'LTV:CAC > 3:1', 'Optimized burn rate'],
      de: ['KI-gestützte Finanzprognosen', 'LTV:CAC > 3:1', 'Optimierte Burn-Rate']
    },
    caseStudies: ['Ramp', 'Brex'],
    icon: React.createElement(LineChart, { className: 'w-6 h-6' }),
    gradient: 'from-emerald-500 to-green-500',
    impact: ['operating-systems'],
    bottleneck: ['setup', 'operationalization'],
    role: ['ceo', 'cfo', 'coo'],
  },

  // 7. Talent Playbook
  {
    id: 'talent-playbook',
    title: { 
      en: 'Talent Playbook', 
      de: 'Talent Playbook' 
    },
    description: { 
      en: 'Build AI-native talent strategies for hiring, development, and retention in high-growth environments.',
      de: 'Entwickeln Sie AI-native Talentstrategien für Recruiting, Entwicklung und Retention in Hypergrowth-Umgebungen.'
    },
    outcomes: {
      en: ['50% faster time-to-hire', 'AI-powered candidate matching', 'Reduced bias in hiring'],
      de: ['50% schnellere Time-to-Hire', 'KI-gestütztes Kandidaten-Matching', 'Reduzierte Bias im Recruiting']
    },
    caseStudies: ['Anthropic', 'OpenAI'],
    icon: React.createElement(Users, { className: 'w-6 h-6' }),
    gradient: 'from-violet-500 to-purple-500',
    impact: ['operating-systems'],
    bottleneck: ['setup'],
    role: ['ceo', 'coo'],
  },

  // 8. Data/Tech Playbook
  {
    id: 'data-tech-playbook',
    title: { 
      en: 'Data/Tech Playbook', 
      de: 'Data/Tech Playbook' 
    },
    description: { 
      en: 'Build data infrastructure and tech stack that scales with AI-native operations.',
      de: 'Bauen Sie Dateninfrastruktur und Tech-Stack, die mit AI-nativen Operationen skalieren.'
    },
    outcomes: {
      en: ['10x faster deployment cycles', 'Real-time data pipelines', 'AI-assisted code generation'],
      de: ['10x schnellere Deployment-Zyklen', 'Echtzeit-Datenpipelines', 'KI-unterstützte Code-Generierung']
    },
    caseStudies: ['Vercel', 'Supabase'],
    icon: React.createElement(Cpu, { className: 'w-6 h-6' }),
    gradient: 'from-cyan-500 to-blue-500',
    impact: ['operating-systems'],
    bottleneck: ['operationalization'],
    role: ['ceo', 'cto', 'coo'],
  },

  // === BOARD & GOVERNANCE (Document 5c) ===

  // 9. Strategic Governance Playbook
  {
    id: 'strategic-governance-playbook',
    title: { 
      en: 'Strategic Governance Playbook', 
      de: 'Strategic Governance Playbook' 
    },
    description: { 
      en: 'Implement AI-powered strategic governance with real-time board dashboards and predictive analytics.',
      de: 'Implementieren Sie KI-gestützte strategische Governance mit Echtzeit-Board-Dashboards und prädiktiver Analytik.'
    },
    outcomes: {
      en: ['Real-time board dashboards', 'Predictive risk analytics', 'Strategic alignment'],
      de: ['Echtzeit-Board-Dashboards', 'Prädiktive Risikoanalytik', 'Strategische Ausrichtung']
    },
    caseStudies: ['Stripe', 'Plaid'],
    icon: React.createElement(Shield, { className: 'w-6 h-6' }),
    gradient: 'from-slate-500 to-zinc-500',
    impact: ['board-governance'],
    bottleneck: ['strategy'],
    role: ['ceo', 'vc-board'],
  },

  // 10. Operational Governance Playbook
  {
    id: 'operational-governance-playbook',
    title: { 
      en: 'Operational Governance Playbook', 
      de: 'Operational Governance Playbook' 
    },
    description: { 
      en: 'Establish operational governance frameworks with automated compliance and performance monitoring.',
      de: 'Etablieren Sie operative Governance-Frameworks mit automatisiertem Compliance- und Performance-Monitoring.'
    },
    outcomes: {
      en: ['Automated compliance monitoring', 'Operational KPI tracking', 'Risk mitigation'],
      de: ['Automatisiertes Compliance-Monitoring', 'Operative KPI-Verfolgung', 'Risikominimierung']
    },
    caseStudies: ['GitLab', 'Automattic'],
    icon: React.createElement(Workflow, { className: 'w-6 h-6' }),
    gradient: 'from-indigo-500 to-violet-500',
    impact: ['board-governance'],
    bottleneck: ['operationalization'],
    role: ['ceo', 'coo', 'vc-board'],
  },

  // 11. Exit & M&A Playbook
  {
    id: 'exit-ma-playbook',
    title: { 
      en: 'Exit & M&A Playbook', 
      de: 'Exit & M&A Playbook' 
    },
    description: { 
      en: 'Prepare for successful exits with AI-driven valuation, due diligence, and transaction optimization.',
      de: 'Bereiten Sie erfolgreiche Exits vor mit KI-gesteuerter Bewertung, Due Diligence und Transaktionsoptimierung.'
    },
    outcomes: {
      en: ['Exit readiness in 90 days', 'Optimized valuation', 'Data-driven negotiations'],
      de: ['Exit-Readiness in 90 Tagen', 'Optimierte Bewertung', 'Datengetriebene Verhandlungen']
    },
    caseStudies: ['Figma', 'Mailchimp'],
    icon: React.createElement(TrendingUp, { className: 'w-6 h-6' }),
    gradient: 'from-rose-500 to-pink-500',
    impact: ['board-governance'],
    bottleneck: ['strategy'],
    role: ['ceo', 'cfo', 'vc-board'],
  },

  // === PORTFOLIO (VC/PE Supplement) ===

  // 12. Portfolio Excellence Playbook
  {
    id: 'portfolio-excellence-playbook',
    title: { 
      en: 'Portfolio Excellence Playbook', 
      de: 'Portfolio Excellence Playbook' 
    },
    description: { 
      en: 'Optimize portfolio performance with AI-driven benchmarking, value creation, and fund strategy.',
      de: 'Optimieren Sie Portfolio-Performance mit KI-gesteuertem Benchmarking, Wertschöpfung und Fondsstrategie.'
    },
    outcomes: {
      en: ['Portfolio-wide benchmarking', 'Value creation playbooks', 'AI-powered fund analytics'],
      de: ['Portfolio-weites Benchmarking', 'Wertschöpfungs-Playbooks', 'KI-gestützte Fonds-Analytik']
    },
    caseStudies: ['a16z', 'Sequoia'],
    icon: React.createElement(Briefcase, { className: 'w-6 h-6' }),
    gradient: 'from-amber-500 to-yellow-500',
    impact: ['portfolio'],
    bottleneck: ['strategy', 'operationalization'],
    role: ['vc-board'],
  },

  // === STRATEGIC CAPABILITIES (Special) ===

  // 13. Strategic Capabilities Playbook
  {
    id: 'strategic-capabilities-playbook',
    title: { 
      en: 'Strategic Capabilities Playbook', 
      de: 'Strategic Capabilities Playbook' 
    },
    description: { 
      en: 'Develop and strengthen the four strategic capabilities (C₁-C₄) that drive sustainable hypergrowth.',
      de: 'Entwickeln und stärken Sie die vier strategischen Fähigkeiten (C₁-C₄) für nachhaltiges Hypergrowth.'
    },
    outcomes: {
      en: ['C₁-C₄ capability assessment', 'Targeted capability development', 'Sustainable competitive advantage'],
      de: ['C₁-C₄ Fähigkeits-Assessment', 'Gezielte Fähigkeitsentwicklung', 'Nachhaltiger Wettbewerbsvorteil']
    },
    caseStudies: ['Cursor', 'Midjourney', 'Perplexity'],
    icon: React.createElement(Layers, { className: 'w-6 h-6' }),
    gradient: 'from-teal-500 to-emerald-500',
    impact: ['strategic-capabilities'],
    bottleneck: ['strategy', 'setup', 'execution-focus', 'operationalization'],
    role: ['ceo', 'cmo-cro', 'coo', 'cfo', 'cto', 'cpo', 'vc-board'],
  },
];
