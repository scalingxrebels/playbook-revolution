import { 
  Target, Rocket, Users, Settings, Workflow, Cpu, Zap, Database,
  Network, Shield, TrendingUp, LineChart, Globe, BarChart3, Award,
  Brain, Building, GitBranch, Layers, Megaphone
} from 'lucide-react';
import React from 'react';
import type { 
  NeedForActionTag, ImpactTag, TimeframeTag, CapabilityTag, CapacityTag 
} from './playbookFilters';

export interface Playbook {
  id: string;
  title: { en: string; de: string };
  dimension: string;
  capabilities: string[];
  stage: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: { en: string; de: string };
  outcomes: { en: string[]; de: string[] };
  caseStudies: string[];
  icon: React.ReactNode;
  gradient: string;
  // NEW: User-centric filter tags
  needForAction: NeedForActionTag[];
  impact: ImpactTag[];
  timeframe: TimeframeTag;
  capability: CapabilityTag;
  capacity: CapacityTag;
}

export const playbooks: Playbook[] = [
  {
    id: 'ai-native-gtm-sales-led',
    title: { en: 'AI-Native GTM: Sales-Led', de: 'AI-Native GTM: Vertriebsgeführt' },
    dimension: 'GTM',
    capabilities: ['C1', 'C2'],
    stage: 'Scale',
    duration: '8-12 weeks',
    difficulty: 'Intermediate',
    description: { 
      en: 'Transform your sales motion with AI-powered prospecting, qualification, and closing strategies.',
      de: 'Transformieren Sie Ihre Vertriebsbewegung mit KI-gestütztem Prospecting, Qualifizierung und Abschlussstrategien.'
    },
    outcomes: {
      en: ['3x pipeline velocity', '40% higher conversion rates', 'AI-powered sales coaching'],
      de: ['3x Pipeline-Geschwindigkeit', '40% höhere Konversionsraten', 'KI-gestütztes Verkaufscoaching']
    },
    caseStudies: ['Cursor', 'Perplexity'],
    icon: React.createElement(Target, { className: 'w-6 h-6' }),
    gradient: 'from-blue-500 to-cyan-500',
    needForAction: ['revenue-not-growing'],
    impact: ['increase-revenue'],
    timeframe: 'mid-term',
    capability: 'moderate',
    capacity: 'goal-oriented',
  },
  {
    id: 'ai-native-gtm-product-led',
    title: { en: 'AI-Native GTM: Product-Led', de: 'AI-Native GTM: Produktgeführt' },
    dimension: 'GTM',
    capabilities: ['C1', 'C3'],
    stage: 'Growth',
    duration: '6-10 weeks',
    difficulty: 'Advanced',
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
    needForAction: ['product-not-scaling', 'revenue-not-growing'],
    impact: ['increase-revenue', 'accelerate-product'],
    timeframe: 'mid-term',
    capability: 'focused',
    capacity: 'goal-oriented',
  },
  {
    id: 'ai-native-gtm-community-led',
    title: { en: 'AI-Native GTM: Community-Led', de: 'AI-Native GTM: Community-geführt' },
    dimension: 'GTM',
    capabilities: ['C2', 'C4'],
    stage: 'Scale',
    duration: '10-14 weeks',
    difficulty: 'Advanced',
    description: {
      en: 'Leverage community as your primary growth engine with AI-powered engagement and advocacy.',
      de: 'Nutzen Sie die Community als primären Wachstumsmotor mit KI-gestütztem Engagement und Advocacy.'
    },
    outcomes: {
      en: ['10x community engagement', 'User-generated content flywheel', 'Brand advocacy at scale'],
      de: ['10x Community-Engagement', 'User-Generated-Content-Schwungrad', 'Marken-Advocacy in großem Maßstab']
    },
    caseStudies: ['Discord', 'Figma'],
    icon: React.createElement(Users, { className: 'w-6 h-6' }),
    gradient: 'from-green-500 to-emerald-500',
    needForAction: ['revenue-not-growing', 'customers-churning'],
    impact: ['retain-customers', 'increase-revenue'],
    timeframe: 'long-term',
    capability: 'focused',
    capacity: 'transformation-ready',
  },
  {
    id: 'ops-automation-foundation',
    title: { en: 'Ops Automation Foundation', de: 'Ops-Automatisierungs-Grundlagen' },
    dimension: 'Operations',
    capabilities: ['C1'],
    stage: 'Foundation',
    duration: '4-6 weeks',
    difficulty: 'Beginner',
    description: {
      en: 'Establish the foundational automation layer for scalable operations.',
      de: 'Etablieren Sie die grundlegende Automatisierungsschicht für skalierbare Operationen.'
    },
    outcomes: {
      en: ['70% reduction in manual tasks', 'Standardized workflows', 'Real-time visibility'],
      de: ['70% Reduktion manueller Aufgaben', 'Standardisierte Workflows', 'Echtzeit-Transparenz']
    },
    caseStudies: ['Linear', 'Notion'],
    icon: React.createElement(Settings, { className: 'w-6 h-6' }),
    gradient: 'from-orange-500 to-amber-500',
    needForAction: ['operations-chaotic'],
    impact: ['reduce-costs', 'scale-operations'],
    timeframe: 'quick-win',
    capability: 'limited',
    capacity: 'firefighting',
  },
  {
    id: 'ai-ops-orchestration',
    title: { en: 'AI-Ops Orchestration', de: 'AI-Ops-Orchestrierung' },
    dimension: 'Operations',
    capabilities: ['C2', 'C3'],
    stage: 'Scale',
    duration: '8-12 weeks',
    difficulty: 'Advanced',
    description: {
      en: 'Implement AI-driven operations orchestration for O(n log n) coordination.',
      de: 'Implementieren Sie KI-gesteuerte Operations-Orchestrierung für O(n log n) Koordination.'
    },
    outcomes: {
      en: ['O(n log n) coordination costs', 'Predictive resource allocation', 'Autonomous incident response'],
      de: ['O(n log n) Koordinationskosten', 'Prädiktive Ressourcenallokation', 'Autonome Incident Response']
    },
    caseStudies: ['Cursor', 'Stripe'],
    icon: React.createElement(Workflow, { className: 'w-6 h-6' }),
    gradient: 'from-indigo-500 to-violet-500',
    needForAction: ['operations-chaotic', 'ai-transformation'],
    impact: ['scale-operations', 'reduce-costs'],
    timeframe: 'mid-term',
    capability: 'focused',
    capacity: 'transformation-ready',
  },
  {
    id: 'tech-stack-modernization',
    title: { en: 'Tech Stack Modernization', de: 'Tech-Stack-Modernisierung' },
    dimension: 'Technology',
    capabilities: ['C1', 'C2'],
    stage: 'Foundation',
    duration: '12-16 weeks',
    difficulty: 'Advanced',
    description: {
      en: 'Modernize your tech stack for AI-native development velocity.',
      de: 'Modernisieren Sie Ihren Tech-Stack für AI-native Entwicklungsgeschwindigkeit.'
    },
    outcomes: {
      en: ['10x faster deployment cycles', 'AI-assisted code generation', 'Zero-downtime releases'],
      de: ['10x schnellere Deployment-Zyklen', 'KI-unterstützte Code-Generierung', 'Zero-Downtime-Releases']
    },
    caseStudies: ['Vercel', 'Supabase'],
    icon: React.createElement(Cpu, { className: 'w-6 h-6' }),
    gradient: 'from-cyan-500 to-blue-500',
    needForAction: ['product-not-scaling', 'ai-transformation'],
    impact: ['accelerate-product', 'scale-operations'],
    timeframe: 'transformation',
    capability: 'moderate',
    capacity: 'transformation-ready',
  },
  {
    id: 'ai-dev-velocity',
    title: { en: 'AI Dev Velocity System', de: 'AI-Entwicklungsgeschwindigkeits-System' },
    dimension: 'Technology',
    capabilities: ['C2', 'C3'],
    stage: 'Scale',
    duration: '6-10 weeks',
    difficulty: 'Intermediate',
    description: {
      en: 'Implement AI-powered development workflows for 10-30x velocity gains.',
      de: 'Implementieren Sie KI-gestützte Entwicklungs-Workflows für 10-30x Geschwindigkeitsgewinne.'
    },
    outcomes: {
      en: ['30x faster feature development', 'AI pair programming', 'Automated testing & QA'],
      de: ['30x schnellere Feature-Entwicklung', 'KI-Pair-Programming', 'Automatisierte Tests & QA']
    },
    caseStudies: ['Cursor', 'Replit'],
    icon: React.createElement(Zap, { className: 'w-6 h-6' }),
    gradient: 'from-yellow-500 to-orange-500',
    needForAction: ['product-not-scaling', 'ai-transformation'],
    impact: ['accelerate-product', 'reduce-costs'],
    timeframe: 'mid-term',
    capability: 'moderate',
    capacity: 'goal-oriented',
  },
  {
    id: 'data-infrastructure-scale',
    title: { en: 'Data Infrastructure at Scale', de: 'Dateninfrastruktur im Maßstab' },
    dimension: 'Technology',
    capabilities: ['C3', 'C4'],
    stage: 'Scale',
    duration: '10-14 weeks',
    difficulty: 'Advanced',
    description: {
      en: 'Build data infrastructure that scales with your AI-native operations.',
      de: 'Bauen Sie Dateninfrastruktur, die mit Ihren AI-nativen Operationen skaliert.'
    },
    outcomes: {
      en: ['Real-time data pipelines', 'ML-ready data architecture', 'Cost-efficient scaling'],
      de: ['Echtzeit-Datenpipelines', 'ML-ready Datenarchitektur', 'Kosteneffiziente Skalierung']
    },
    caseStudies: ['Databricks', 'Snowflake'],
    icon: React.createElement(Database, { className: 'w-6 h-6' }),
    gradient: 'from-teal-500 to-cyan-500',
    needForAction: ['ai-transformation', 'product-not-scaling'],
    impact: ['scale-operations', 'accelerate-product'],
    timeframe: 'long-term',
    capability: 'focused',
    capacity: 'transformation-ready',
  },
  {
    id: 'org-design-ai-native',
    title: { en: 'AI-Native Org Design', de: 'AI-Native Organisationsdesign' },
    dimension: 'Organization',
    capabilities: ['C1', 'C2'],
    stage: 'Growth',
    duration: '8-12 weeks',
    difficulty: 'Intermediate',
    description: {
      en: 'Design organizational structures optimized for AI-augmented teams.',
      de: 'Designen Sie Organisationsstrukturen, die für KI-unterstützte Teams optimiert sind.'
    },
    outcomes: {
      en: ['Flat, autonomous team structures', 'AI-human collaboration frameworks', 'Reduced management overhead'],
      de: ['Flache, autonome Teamstrukturen', 'KI-Mensch-Kollaborations-Frameworks', 'Reduzierter Management-Overhead']
    },
    caseStudies: ['GitLab', 'Automattic'],
    icon: React.createElement(Network, { className: 'w-6 h-6' }),
    gradient: 'from-rose-500 to-pink-500',
    needForAction: ['ai-transformation', 'operations-chaotic'],
    impact: ['transform-organization', 'scale-operations'],
    timeframe: 'mid-term',
    capability: 'moderate',
    capacity: 'goal-oriented',
  },
  {
    id: 'talent-acquisition-ai',
    title: { en: 'AI-Powered Talent Acquisition', de: 'KI-gestützte Talentakquise' },
    dimension: 'Organization',
    capabilities: ['C2'],
    stage: 'Scale',
    duration: '6-8 weeks',
    difficulty: 'Intermediate',
    description: {
      en: 'Transform hiring with AI-powered sourcing, screening, and assessment.',
      de: 'Transformieren Sie das Recruiting mit KI-gestütztem Sourcing, Screening und Assessment.'
    },
    outcomes: {
      en: ['50% faster time-to-hire', 'AI-powered candidate matching', 'Reduced bias in hiring'],
      de: ['50% schnellere Time-to-Hire', 'KI-gestütztes Kandidaten-Matching', 'Reduzierte Bias im Recruiting']
    },
    caseStudies: ['Anthropic', 'OpenAI'],
    icon: React.createElement(Users, { className: 'w-6 h-6' }),
    gradient: 'from-violet-500 to-purple-500',
    needForAction: ['operations-chaotic', 'ai-transformation'],
    impact: ['scale-operations', 'reduce-costs'],
    timeframe: 'mid-term',
    capability: 'moderate',
    capacity: 'goal-oriented',
  },
  {
    id: 'board-governance-ai',
    title: { en: 'AI Board Governance', de: 'KI-Board-Governance' },
    dimension: 'Governance',
    capabilities: ['C3', 'C4'],
    stage: 'Scale',
    duration: '4-6 weeks',
    difficulty: 'Advanced',
    description: {
      en: 'Implement AI-powered board reporting and governance frameworks.',
      de: 'Implementieren Sie KI-gestützte Board-Reporting- und Governance-Frameworks.'
    },
    outcomes: {
      en: ['Real-time board dashboards', 'Predictive risk analytics', 'Automated compliance monitoring'],
      de: ['Echtzeit-Board-Dashboards', 'Prädiktive Risikoanalytik', 'Automatisiertes Compliance-Monitoring']
    },
    caseStudies: ['Stripe', 'Plaid'],
    icon: React.createElement(Shield, { className: 'w-6 h-6' }),
    gradient: 'from-slate-500 to-zinc-500',
    needForAction: ['board-wants-results'],
    impact: ['transform-organization'],
    timeframe: 'quick-win',
    capability: 'focused',
    capacity: 'transformation-ready',
  },
  {
    id: 'capital-strategy-ai',
    title: { en: 'AI Capital Strategy', de: 'KI-Kapitalstrategie' },
    dimension: 'Capital',
    capabilities: ['C2', 'C3'],
    stage: 'Growth',
    duration: '6-10 weeks',
    difficulty: 'Advanced',
    description: {
      en: 'Optimize capital allocation with AI-driven financial modeling and forecasting.',
      de: 'Optimieren Sie die Kapitalallokation mit KI-gestützter Finanzmodellierung und Prognosen.'
    },
    outcomes: {
      en: ['AI-powered financial forecasting', 'Optimized burn rate', 'Data-driven fundraising'],
      de: ['KI-gestützte Finanzprognosen', 'Optimierte Burn-Rate', 'Datengetriebenes Fundraising']
    },
    caseStudies: ['Ramp', 'Brex'],
    icon: React.createElement(TrendingUp, { className: 'w-6 h-6' }),
    gradient: 'from-emerald-500 to-green-500',
    needForAction: ['revenue-not-growing', 'board-wants-results'],
    impact: ['raise-capital', 'improve-margins'],
    timeframe: 'mid-term',
    capability: 'focused',
    capacity: 'goal-oriented',
  },
  {
    id: 'unit-economics-optimization',
    title: { en: 'Unit Economics Optimization', de: 'Unit-Economics-Optimierung' },
    dimension: 'Capital',
    capabilities: ['C1', 'C2'],
    stage: 'Scale',
    duration: '8-12 weeks',
    difficulty: 'Intermediate',
    description: {
      en: 'Achieve sustainable unit economics with AI-driven cost optimization.',
      de: 'Erreichen Sie nachhaltige Unit Economics mit KI-gesteuerter Kostenoptimierung.'
    },
    outcomes: {
      en: ['LTV:CAC > 3:1', 'Negative churn strategies', 'Margin expansion'],
      de: ['LTV:CAC > 3:1', 'Negative Churn-Strategien', 'Margin-Expansion']
    },
    caseStudies: ['Notion', 'Figma'],
    icon: React.createElement(LineChart, { className: 'w-6 h-6' }),
    gradient: 'from-lime-500 to-green-500',
    needForAction: ['pricing-not-working', 'customers-churning'],
    impact: ['improve-margins', 'retain-customers'],
    timeframe: 'mid-term',
    capability: 'moderate',
    capacity: 'goal-oriented',
  },
  {
    id: 'market-expansion-playbook',
    title: { en: 'Market Expansion Playbook', de: 'Marktexpansions-Playbook' },
    dimension: 'GTM',
    capabilities: ['C3', 'C4'],
    stage: 'Scale',
    duration: '12-16 weeks',
    difficulty: 'Advanced',
    description: {
      en: 'Expand into new markets with AI-powered market intelligence and localization.',
      de: 'Expandieren Sie in neue Märkte mit KI-gestützter Marktintelligenz und Lokalisierung.'
    },
    outcomes: {
      en: ['New market entry in 90 days', 'AI-powered localization', 'Market-specific GTM strategies'],
      de: ['Neuer Markteintritt in 90 Tagen', 'KI-gestützte Lokalisierung', 'Marktspezifische GTM-Strategien']
    },
    caseStudies: ['Canva', 'Miro'],
    icon: React.createElement(Globe, { className: 'w-6 h-6' }),
    gradient: 'from-sky-500 to-blue-500',
    needForAction: ['revenue-not-growing'],
    impact: ['increase-revenue', 'scale-operations'],
    timeframe: 'transformation',
    capability: 'focused',
    capacity: 'transformation-ready',
  },
  {
    id: 'pricing-optimization-ai',
    title: { en: 'AI Pricing Optimization', de: 'KI-Preisoptimierung' },
    dimension: 'GTM',
    capabilities: ['C2', 'C3'],
    stage: 'Growth',
    duration: '4-8 weeks',
    difficulty: 'Intermediate',
    description: {
      en: 'Implement dynamic, AI-driven pricing strategies for maximum revenue.',
      de: 'Implementieren Sie dynamische, KI-gesteuerte Preisstrategien für maximalen Umsatz.'
    },
    outcomes: {
      en: ['20% revenue uplift', 'Dynamic pricing models', 'Price elasticity insights'],
      de: ['20% Umsatzsteigerung', 'Dynamische Preismodelle', 'Preiselastizitäts-Insights']
    },
    caseStudies: ['Stripe', 'Paddle'],
    icon: React.createElement(BarChart3, { className: 'w-6 h-6' }),
    gradient: 'from-amber-500 to-yellow-500',
    needForAction: ['pricing-not-working', 'revenue-not-growing'],
    impact: ['increase-revenue', 'improve-margins'],
    timeframe: 'quick-win',
    capability: 'moderate',
    capacity: 'goal-oriented',
  },
  {
    id: 'customer-success-ai',
    title: { en: 'AI Customer Success', de: 'KI-Customer-Success' },
    dimension: 'Operations',
    capabilities: ['C2', 'C4'],
    stage: 'Scale',
    duration: '6-10 weeks',
    difficulty: 'Intermediate',
    description: {
      en: 'Transform customer success with AI-powered health scoring and intervention.',
      de: 'Transformieren Sie Customer Success mit KI-gestütztem Health Scoring und Intervention.'
    },
    outcomes: {
      en: ['Predictive churn prevention', 'Automated health scoring', 'Proactive intervention'],
      de: ['Prädiktive Churn-Prävention', 'Automatisiertes Health Scoring', 'Proaktive Intervention']
    },
    caseStudies: ['Gainsight', 'ChurnZero'],
    icon: React.createElement(Award, { className: 'w-6 h-6' }),
    gradient: 'from-pink-500 to-rose-500',
    needForAction: ['customers-churning'],
    impact: ['retain-customers', 'increase-revenue'],
    timeframe: 'mid-term',
    capability: 'moderate',
    capacity: 'goal-oriented',
  },
  {
    id: 'product-analytics-ai',
    title: { en: 'AI Product Analytics', de: 'KI-Produktanalytik' },
    dimension: 'Technology',
    capabilities: ['C1', 'C3'],
    stage: 'Growth',
    duration: '6-8 weeks',
    difficulty: 'Intermediate',
    description: {
      en: 'Implement AI-powered product analytics for data-driven decisions.',
      de: 'Implementieren Sie KI-gestützte Produktanalytik für datengetriebene Entscheidungen.'
    },
    outcomes: {
      en: ['AI-powered user insights', 'Predictive feature adoption', 'Automated A/B testing'],
      de: ['KI-gestützte Nutzer-Insights', 'Prädiktive Feature-Adoption', 'Automatisierte A/B-Tests']
    },
    caseStudies: ['Amplitude', 'Mixpanel'],
    icon: React.createElement(Brain, { className: 'w-6 h-6' }),
    gradient: 'from-fuchsia-500 to-purple-500',
    needForAction: ['product-not-scaling'],
    impact: ['accelerate-product', 'increase-revenue'],
    timeframe: 'mid-term',
    capability: 'moderate',
    capacity: 'goal-oriented',
  },
  {
    id: 'security-compliance-ai',
    title: { en: 'AI Security & Compliance', de: 'KI-Sicherheit & Compliance' },
    dimension: 'Governance',
    capabilities: ['C3', 'C4'],
    stage: 'Scale',
    duration: '8-12 weeks',
    difficulty: 'Advanced',
    description: {
      en: 'Implement AI-powered security monitoring and compliance automation.',
      de: 'Implementieren Sie KI-gestütztes Sicherheitsmonitoring und Compliance-Automatisierung.'
    },
    outcomes: {
      en: ['SOC2/ISO27001 automation', 'Real-time threat detection', 'Automated compliance reporting'],
      de: ['SOC2/ISO27001-Automatisierung', 'Echtzeit-Bedrohungserkennung', 'Automatisiertes Compliance-Reporting']
    },
    caseStudies: ['Vanta', 'Drata'],
    icon: React.createElement(Shield, { className: 'w-6 h-6' }),
    gradient: 'from-red-500 to-orange-500',
    needForAction: ['board-wants-results', 'ai-transformation'],
    impact: ['transform-organization', 'reduce-costs'],
    timeframe: 'mid-term',
    capability: 'focused',
    capacity: 'goal-oriented',
  },
  {
    id: 'culture-scaling-playbook',
    title: { en: 'Culture Scaling Playbook', de: 'Kultur-Skalierungs-Playbook' },
    dimension: 'Organization',
    capabilities: ['C1', 'C4'],
    stage: 'Scale',
    duration: '10-14 weeks',
    difficulty: 'Intermediate',
    description: {
      en: 'Scale your culture intentionally while maintaining core values.',
      de: 'Skalieren Sie Ihre Kultur bewusst unter Beibehaltung der Kernwerte.'
    },
    outcomes: {
      en: ['Culture documentation', 'Values-aligned hiring', 'Remote-first practices'],
      de: ['Kultur-Dokumentation', 'Werte-orientiertes Hiring', 'Remote-First-Praktiken']
    },
    caseStudies: ['GitLab', 'Zapier'],
    icon: React.createElement(Building, { className: 'w-6 h-6' }),
    gradient: 'from-indigo-500 to-blue-500',
    needForAction: ['operations-chaotic'],
    impact: ['transform-organization', 'scale-operations'],
    timeframe: 'long-term',
    capability: 'moderate',
    capacity: 'goal-oriented',
  },
  {
    id: 'partnership-ecosystem',
    title: { en: 'Partnership Ecosystem', de: 'Partnerschafts-Ökosystem' },
    dimension: 'GTM',
    capabilities: ['C3', 'C4'],
    stage: 'Scale',
    duration: '8-12 weeks',
    difficulty: 'Advanced',
    description: {
      en: 'Build and scale a partner ecosystem for exponential growth.',
      de: 'Bauen und skalieren Sie ein Partner-Ökosystem für exponentielles Wachstum.'
    },
    outcomes: {
      en: ['Partner-sourced revenue > 30%', 'Automated partner management', 'Ecosystem flywheel'],
      de: ['Partner-Umsatz > 30%', 'Automatisiertes Partner-Management', 'Ökosystem-Schwungrad']
    },
    caseStudies: ['HubSpot', 'Salesforce'],
    icon: React.createElement(GitBranch, { className: 'w-6 h-6' }),
    gradient: 'from-teal-500 to-emerald-500',
    needForAction: ['revenue-not-growing'],
    impact: ['increase-revenue', 'scale-operations'],
    timeframe: 'mid-term',
    capability: 'focused',
    capacity: 'transformation-ready',
  },
  {
    id: 'revenue-operations-ai',
    title: { en: 'AI Revenue Operations', de: 'KI-Revenue-Operations' },
    dimension: 'Operations',
    capabilities: ['C2', 'C3'],
    stage: 'Scale',
    duration: '8-10 weeks',
    difficulty: 'Intermediate',
    description: {
      en: 'Unify sales, marketing, and CS with AI-powered revenue operations.',
      de: 'Vereinen Sie Sales, Marketing und CS mit KI-gestützten Revenue Operations.'
    },
    outcomes: {
      en: ['Unified revenue data', 'AI-powered forecasting', 'Cross-functional alignment'],
      de: ['Vereinte Umsatzdaten', 'KI-gestützte Prognosen', 'Cross-funktionale Abstimmung']
    },
    caseStudies: ['Clari', 'Gong'],
    icon: React.createElement(Layers, { className: 'w-6 h-6' }),
    gradient: 'from-orange-500 to-red-500',
    needForAction: ['revenue-not-growing', 'operations-chaotic'],
    impact: ['increase-revenue', 'scale-operations'],
    timeframe: 'mid-term',
    capability: 'moderate',
    capacity: 'goal-oriented',
  },
  {
    id: 'content-marketing-ai',
    title: { en: 'AI Content Marketing', de: 'KI-Content-Marketing' },
    dimension: 'GTM',
    capabilities: ['C1', 'C2'],
    stage: 'Growth',
    duration: '4-8 weeks',
    difficulty: 'Beginner',
    description: {
      en: 'Scale content production with AI-powered creation and optimization.',
      de: 'Skalieren Sie die Content-Produktion mit KI-gestützter Erstellung und Optimierung.'
    },
    outcomes: {
      en: ['10x content velocity', 'SEO-optimized output', 'Multi-channel distribution'],
      de: ['10x Content-Geschwindigkeit', 'SEO-optimierter Output', 'Multi-Channel-Distribution']
    },
    caseStudies: ['Jasper', 'Copy.ai'],
    icon: React.createElement(Megaphone, { className: 'w-6 h-6' }),
    gradient: 'from-violet-500 to-fuchsia-500',
    needForAction: ['revenue-not-growing'],
    impact: ['increase-revenue', 'reduce-costs'],
    timeframe: 'quick-win',
    capability: 'limited',
    capacity: 'firefighting',
  },
];
