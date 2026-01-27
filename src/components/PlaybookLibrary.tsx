import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import SharedHero from '@/components/shared/SharedHero';
import { 
  Rocket, Target, Users, Zap, Brain, TrendingUp, Shield, 
  BarChart3, Layers, GitBranch, Database, Globe, Settings,
  Award, Clock, Building, Cpu, Network, Workflow, LineChart,
  Megaphone, BookOpen, Calendar, Download, ArrowRight, Search,
  Filter, CheckCircle2
} from 'lucide-react';

interface Playbook {
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
}

const playbooks: Playbook[] = [
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
    icon: <Target className="w-6 h-6" />,
    gradient: 'from-blue-500 to-cyan-500'
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
    icon: <Rocket className="w-6 h-6" />,
    gradient: 'from-purple-500 to-pink-500'
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
    icon: <Users className="w-6 h-6" />,
    gradient: 'from-green-500 to-emerald-500'
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
    icon: <Settings className="w-6 h-6" />,
    gradient: 'from-orange-500 to-amber-500'
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
    icon: <Workflow className="w-6 h-6" />,
    gradient: 'from-indigo-500 to-violet-500'
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
    icon: <Cpu className="w-6 h-6" />,
    gradient: 'from-cyan-500 to-blue-500'
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
    icon: <Zap className="w-6 h-6" />,
    gradient: 'from-yellow-500 to-orange-500'
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
    icon: <Database className="w-6 h-6" />,
    gradient: 'from-teal-500 to-cyan-500'
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
    icon: <Network className="w-6 h-6" />,
    gradient: 'from-rose-500 to-pink-500'
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
    icon: <Users className="w-6 h-6" />,
    gradient: 'from-violet-500 to-purple-500'
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
    icon: <Shield className="w-6 h-6" />,
    gradient: 'from-slate-500 to-zinc-500'
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
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: 'from-emerald-500 to-green-500'
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
    icon: <LineChart className="w-6 h-6" />,
    gradient: 'from-lime-500 to-green-500'
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
    icon: <Globe className="w-6 h-6" />,
    gradient: 'from-sky-500 to-blue-500'
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
    icon: <BarChart3 className="w-6 h-6" />,
    gradient: 'from-amber-500 to-yellow-500'
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
    icon: <Award className="w-6 h-6" />,
    gradient: 'from-pink-500 to-rose-500'
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
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-fuchsia-500 to-purple-500'
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
    icon: <Shield className="w-6 h-6" />,
    gradient: 'from-red-500 to-orange-500'
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
    icon: <Building className="w-6 h-6" />,
    gradient: 'from-indigo-500 to-blue-500'
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
    icon: <GitBranch className="w-6 h-6" />,
    gradient: 'from-teal-500 to-emerald-500'
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
    icon: <Layers className="w-6 h-6" />,
    gradient: 'from-orange-500 to-red-500'
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
    icon: <Megaphone className="w-6 h-6" />,
    gradient: 'from-violet-500 to-fuchsia-500'
  }
];

const dimensions = ['All', 'GTM', 'Operations', 'Technology', 'Organization', 'Governance', 'Capital'];
const capabilities = ['All', 'C1', 'C2', 'C3', 'C4'];
const stages = ['All', 'Foundation', 'Growth', 'Scale'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

// Animated Playbook Card Component
interface PlaybookCardProps {
  playbook: Playbook;
  index: number;
  language: 'en' | 'de';
  onOpen: (playbook: Playbook) => void;
  onDownload: (playbook: Playbook) => void;
  getDifficultyColor: (difficulty: string) => string;
}

const PlaybookCard: React.FC<PlaybookCardProps> = ({ playbook, index, language, onOpen, onDownload, getDifficultyColor }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add staggered delay based on index
          const delay = (index % 6) * 100; // Reset delay every row (6 items per row max)
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Gradient Accent */}
      <div className={`absolute inset-0 bg-gradient-to-br ${playbook.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
      
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${playbook.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {playbook.icon}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="outline" className="text-xs">
          {playbook.dimension}
        </Badge>
        {playbook.capabilities.map(cap => (
          <Badge key={cap} variant="outline" className="text-xs bg-primary/5">
            {cap}
          </Badge>
        ))}
        <Badge className={`text-xs ${getDifficultyColor(playbook.difficulty)}`}>
          {playbook.difficulty}
        </Badge>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
        {playbook.title[language]}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {playbook.description[language]}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {playbook.duration}
        </span>
        <span className="flex items-center gap-1">
          <Layers className="w-3 h-3" />
          {playbook.stage}
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          className="flex-1"
          onClick={(e) => {
            e.stopPropagation();
            onOpen(playbook);
          }}
        >
          {language === 'en' ? 'Read' : 'Lesen'}
        </Button>
        <Button
          size="sm"
          className="flex-1 bg-gradient-to-r from-primary to-primary/80"
          onClick={(e) => {
            e.stopPropagation();
            onDownload(playbook);
          }}
        >
          {language === 'en' ? 'Template' : 'Vorlage'}
          <Download className="w-3 h-3 ml-1" />
        </Button>
      </div>

      {/* Arrow */}
      <ArrowRight className="absolute top-6 right-6 w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
    </div>
  );
};

const PlaybookLibrary: React.FC = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [selectedDimension, setSelectedDimension] = useState('All');
  const [selectedCapability, setSelectedCapability] = useState('All');
  const [selectedStage, setSelectedStage] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlaybook, setSelectedPlaybook] = useState<Playbook | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredPlaybooks = playbooks.filter(playbook => {
    const matchesDimension = selectedDimension === 'All' || playbook.dimension === selectedDimension;
    const matchesCapability = selectedCapability === 'All' || playbook.capabilities.includes(selectedCapability);
    const matchesStage = selectedStage === 'All' || playbook.stage === selectedStage;
    const matchesDifficulty = selectedDifficulty === 'All' || playbook.difficulty === selectedDifficulty;
    const matchesSearch = searchQuery === '' || 
      playbook.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      playbook.description[language].toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesDimension && matchesCapability && matchesStage && matchesDifficulty && matchesSearch;
  });

  const openPlaybookDetail = (playbook: Playbook) => {
    setSelectedPlaybook(playbook);
    setIsDialogOpen(true);
  };

  const handleDownloadTemplate = (playbook: Playbook) => {
    toast({
      title: language === 'en' ? 'Template Download' : 'Vorlage Download',
      description: language === 'en' 
        ? `"${playbook.title.en}" template will be available soon. Contact us for early access.`
        : `"${playbook.title.de}" Vorlage wird bald verfügbar sein. Kontaktieren Sie uns für frühen Zugang.`,
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const playbookStats = [
    { value: '22+', label: { en: 'Playbooks', de: 'Playbooks' }, color: 'primary' as const },
    { value: '6', label: { en: 'Dimensions', de: 'Dimensionen' }, color: 'accent' as const },
    { value: '4', label: { en: 'Stages', de: 'Stufen' }, color: 'primary' as const },
    { value: '3', label: { en: 'Difficulty Levels', de: 'Schwierigkeitsgrade' }, color: 'accent' as const },
  ];

  return (
    <section className="pb-20 bg-background relative overflow-hidden">
      <SharedHero
        overlineEn="Expertise × Speed = Impact"
        overlineDe="Expertise × Speed = Impact"
        headlineLine1En="Playbook Library"
        headlineLine1De="Playbook Bibliothek"
        headlineLine2En="for AI-Native Scaling"
        headlineLine2De="für AI-Native Scaling"
        subheadlineEn="Comprehensive playbooks for AI-native scaling across all dimensions."
        subheadlineDe="Umfassende Playbooks für AI-natives Skalieren in allen Dimensionen."
        stats={playbookStats}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-6 md:pt-8">

        {/* Search & Filters */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={language === 'en' ? 'Search playbooks...' : 'Playbooks suchen...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
            />
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {language === 'en' ? 'Filter:' : 'Filter:'}
              </span>
            </div>
            
            {/* Dimension Filter */}
            <div className="flex flex-wrap gap-2">
              {dimensions.map(dim => (
                <button
                  key={dim}
                  onClick={() => setSelectedDimension(dim)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-all ${
                    selectedDimension === dim
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card border border-border hover:border-primary/50'
                  }`}
                >
                  {dim}
                </button>
              ))}
            </div>
          </div>

          {/* Additional Filters */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Capability Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Capability:</span>
              <div className="flex gap-1">
                {capabilities.map(cap => (
                  <button
                    key={cap}
                    onClick={() => setSelectedCapability(cap)}
                    className={`px-2 py-1 text-xs rounded transition-all ${
                      selectedCapability === cap
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : 'bg-card border border-border hover:border-primary/50'
                    }`}
                  >
                    {cap}
                  </button>
                ))}
              </div>
            </div>

            {/* Stage Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Stage:</span>
              <div className="flex gap-1">
                {stages.map(stage => (
                  <button
                    key={stage}
                    onClick={() => setSelectedStage(stage)}
                    className={`px-2 py-1 text-xs rounded transition-all ${
                      selectedStage === stage
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : 'bg-card border border-border hover:border-primary/50'
                    }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Difficulty:</span>
              <div className="flex gap-1">
                {difficulties.map(diff => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-2 py-1 text-xs rounded transition-all ${
                      selectedDifficulty === diff
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : 'bg-card border border-border hover:border-primary/50'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            {language === 'en' 
              ? `Showing ${filteredPlaybooks.length} of ${playbooks.length} playbooks`
              : `Zeige ${filteredPlaybooks.length} von ${playbooks.length} Playbooks`}
          </p>
        </div>

        {/* Playbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaybooks.map((playbook, index) => (
            <PlaybookCard 
              key={playbook.id} 
              playbook={playbook} 
              index={index} 
              language={language}
              onOpen={openPlaybookDetail}
              onDownload={handleDownloadTemplate}
              getDifficultyColor={getDifficultyColor}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredPlaybooks.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {language === 'en' ? 'No playbooks found' : 'Keine Playbooks gefunden'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'en' 
                ? 'Try adjusting your filters or search query.'
                : 'Versuchen Sie, Ihre Filter oder Suchanfrage anzupassen.'}
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full mb-6">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">
              {language === 'en' 
                ? 'Need help choosing the right playbook?'
                : 'Brauchen Sie Hilfe bei der Auswahl des richtigen Playbooks?'}
            </span>
          </div>
          <div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8"
              onClick={() => window.location.href = '/#assessment'}
            >
              {language === 'en' ? 'Take Assessment' : 'Assessment starten'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Playbook Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedPlaybook && (
            <>
              <DialogHeader>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedPlaybook.gradient} flex items-center justify-center text-white mb-4`}>
                  {selectedPlaybook.icon}
                </div>
                <DialogTitle className="text-2xl">
                  {selectedPlaybook.title[language]}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selectedPlaybook.description[language]}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{selectedPlaybook.dimension}</Badge>
                  {selectedPlaybook.capabilities.map(cap => (
                    <Badge key={cap} variant="outline" className="bg-primary/5">{cap}</Badge>
                  ))}
                  <Badge className={getDifficultyColor(selectedPlaybook.difficulty)}>
                    {selectedPlaybook.difficulty}
                  </Badge>
                  <Badge variant="outline">
                    <Clock className="w-3 h-3 mr-1" />
                    {selectedPlaybook.duration}
                  </Badge>
                </div>

                {/* What You'll Build */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {language === 'en' ? 'Expected Outcomes' : 'Erwartete Ergebnisse'}
                  </h4>
                  <ul className="space-y-2">
                    {selectedPlaybook.outcomes[language].map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Case Studies */}
                <div>
                  <h4 className="font-semibold mb-3">
                    {language === 'en' ? 'Referenced Case Studies' : 'Referenzierte Case Studies'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPlaybook.caseStudies.map((study, i) => (
                      <Badge key={i} variant="secondary" className="px-3 py-1">
                        {study}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button className="flex-1 bg-gradient-to-r from-primary to-primary/80">
                    <Download className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Download Template' : 'Vorlage herunterladen'}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.location.href = '/#assessment'}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Book Consultation' : 'Beratung buchen'}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PlaybookLibrary;
