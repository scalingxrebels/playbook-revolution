import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Image, Code, Search, Bot, CreditCard, Palette, FileText,
  TrendingUp, Users, Zap, Target, ArrowRight, Sparkles, Globe, Rocket
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ThetaIndexRadial from './ThetaIndexRadial';
import CaseStudyComparisonTable from './CaseStudyComparisonTable';

interface CaseStudy {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  founded: string;
  founder: string;
  focus: { en: string; de: string };
  headline: { metric: string; label: { en: string; de: string } };
  secondaryMetrics: { value: string; label: { en: string; de: string } }[];
  thetaIndex: { overall: number; c1: number; c2: number; c3: number; c4: number };
  thetaLabels: {
    c1: { en: string; de: string };
    c2: { en: string; de: string };
    c3: { en: string; de: string };
    c4: { en: string; de: string };
  };
  growthTimeline: { year: string; value: string; label?: string }[];
  learnings: { en: string[]; de: string[] };
  highlight: { en: string; de: string };
}

const caseStudies: CaseStudy[] = [
  {
    id: 'midjourney',
    name: 'Midjourney',
    icon: Image,
    color: '#8B5CF6',
    founded: '2021',
    founder: 'David Holz',
    focus: { en: 'AI Image Generation', de: 'KI-Bildgenerierung' },
    headline: { metric: '$500M', label: { en: 'Revenue 2025', de: 'Umsatz 2025' } },
    secondaryMetrics: [
      { value: '21M+', label: { en: 'Discord Members', de: 'Discord Mitglieder' } },
      { value: '26.8%', label: { en: 'Market Share', de: 'Marktanteil' } },
      { value: '10x', label: { en: '3 Year Growth', de: '3 Jahre Wachstum' } },
    ],
    thetaIndex: { overall: 0.85, c1: 0.9, c2: 0.8, c3: 0.8, c4: 0.7 },
    thetaLabels: {
      c1: { en: 'Best-in-class image quality', de: 'Beste Bildqualität' },
      c2: { en: 'Community-driven growth', de: 'Community-getriebenes Wachstum' },
      c3: { en: 'Efficient infrastructure', de: 'Effiziente Infrastruktur' },
      c4: { en: 'Bootstrapped initially', de: 'Anfangs bootstrapped' },
    },
    growthTimeline: [
      { year: '2022', value: '$50M' },
      { year: '2023', value: '$200M', label: '+300%' },
      { year: '2024', value: '$300M', label: '+50%' },
      { year: '2025', value: '$500M', label: '+66.7%' },
    ],
    learnings: {
      en: [
        'Community-First Approach - Built on Discord instead of traditional channels',
        'Freemium Model - Free trials, Premium for power users',
        'Viral Loop - Every generated image is marketing',
        'Rapid Iteration - Weekly feature updates',
        'Quality Focus - Best image quality = market leader',
      ],
      de: [
        'Community-First - Aufbau über Discord statt traditionelle Kanäle',
        'Freemium Modell - Kostenlos testen, Premium für Power User',
        'Viraler Loop - Jedes generierte Bild ist Marketing',
        'Schnelle Iteration - Wöchentliche Feature-Updates',
        'Qualitätsfokus - Beste Bildqualität = Marktführer',
      ],
    },
    highlight: { en: 'Community-First AI Image Generation', de: 'Community-First KI-Bildgenerierung' },
  },
  {
    id: 'cursor',
    name: 'Cursor',
    icon: Code,
    color: '#3B82F6',
    founded: '2022',
    founder: 'Anystic Team',
    focus: { en: 'AI Code Editor', de: 'KI Code Editor' },
    headline: { metric: '$29.3B', label: { en: 'Valuation Nov 2025', de: 'Bewertung Nov 2025' } },
    secondaryMetrics: [
      { value: '$1B+', label: { en: 'ARR in 6 months', de: 'ARR in 6 Monaten' } },
      { value: '2M+', label: { en: 'Monthly Active Users', de: 'Monatl. aktive Nutzer' } },
      { value: '85%+', label: { en: 'Retention Rate', de: 'Retention Rate' } },
    ],
    thetaIndex: { overall: 0.92, c1: 0.9, c2: 0.9, c3: 0.9, c4: 0.9 },
    thetaLabels: {
      c1: { en: 'Exceptional developer experience', de: 'Außergewöhnliche Developer Experience' },
      c2: { en: 'Organic developer adoption', de: 'Organische Developer-Adoption' },
      c3: { en: 'Scalable infrastructure', de: 'Skalierbare Infrastruktur' },
      c4: { en: 'Efficient capital deployment', de: 'Effiziente Kapitalnutzung' },
    },
    growthTimeline: [
      { year: '2023', value: '$100M', label: 'Series A' },
      { year: '2024 Q1', value: '$600M', label: 'Series B' },
      { year: '2025 May', value: '$9.9B', label: 'Series C' },
      { year: '2025 Nov', value: '$29.3B', label: 'Series D' },
    ],
    learnings: {
      en: [
        'Developer-First Product - Solve real developer pain points',
        'AI Integration - Seamless AI assistance in existing workflow',
        'Rapid Monetization - $1B ARR in <6 months',
        'Viral Adoption - Word-of-mouth among developers',
        'Premium Positioning - High-value justifies premium pricing',
      ],
      de: [
        'Developer-First Produkt - Löst echte Developer Pain Points',
        'KI-Integration - Nahtlose KI-Assistenz im Workflow',
        'Schnelle Monetarisierung - $1B ARR in <6 Monaten',
        'Virale Adoption - Mundpropaganda unter Developern',
        'Premium-Positionierung - Hoher Wert rechtfertigt Premium-Preis',
      ],
    },
    highlight: { en: 'Fastest $1B ARR Ever', de: 'Schnellstes $1B ARR aller Zeiten' },
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    icon: Search,
    color: '#14B8A6',
    founded: '2022',
    founder: 'Aravind Srinivas',
    focus: { en: 'AI Search Engine', de: 'KI-Suchmaschine' },
    headline: { metric: '$9B', label: { en: 'Valuation 2025', de: 'Bewertung 2025' } },
    secondaryMetrics: [
      { value: '780M', label: { en: 'Queries/Month', de: 'Anfragen/Monat' } },
      { value: '18x', label: { en: '2 Year Growth', de: '2 Jahre Wachstum' } },
      { value: '10M+', label: { en: 'Monthly Users', de: 'Monatliche Nutzer' } },
    ],
    thetaIndex: { overall: 0.88, c1: 0.9, c2: 0.9, c3: 0.8, c4: 0.8 },
    thetaLabels: {
      c1: { en: 'Superior search quality', de: 'Überlegene Suchqualität' },
      c2: { en: 'Aggressive growth hacking', de: 'Aggressives Growth Hacking' },
      c3: { en: 'Scaling infrastructure', de: 'Skalierende Infrastruktur' },
      c4: { en: 'Well-funded, efficient burn', de: 'Gut finanziert, effizienter Burn' },
    },
    growthTimeline: [
      { year: 'Dec 2022', value: '2.2M', label: 'visits/mo' },
      { year: 'Dec 2023', value: '45M', label: '20x growth' },
      { year: 'Mid 2024', value: '230M', label: 'queries/mo' },
      { year: 'May 2025', value: '780M', label: '3.4x growth' },
    ],
    learnings: {
      en: [
        'Bold Positioning - Direct competitor to Google',
        'Growth Hacking - Aggressive user acquisition',
        'Product Innovation - Better answers than Google',
        'Viral Mechanics - Share-worthy search results',
        'Rapid Scaling - 0 to 780M queries/month in 2.5 years',
      ],
      de: [
        'Mutige Positionierung - Direkter Google-Konkurrent',
        'Growth Hacking - Aggressive Nutzerakquise',
        'Produktinnovation - Bessere Antworten als Google',
        'Virale Mechaniken - Teilenswerte Suchergebnisse',
        'Schnelle Skalierung - 0 auf 780M Anfragen/Monat in 2.5 Jahren',
      ],
    },
    highlight: { en: 'The Google Challenger', de: 'Der Google-Herausforderer' },
  },
  {
    id: 'openai',
    name: 'OpenAI',
    icon: Bot,
    color: '#10B981',
    founded: '2015',
    founder: 'Sam Altman, Elon Musk et al.',
    focus: { en: 'Large Language Models', de: 'Große Sprachmodelle' },
    headline: { metric: '$80B+', label: { en: 'Valuation 2024', de: 'Bewertung 2024' } },
    secondaryMetrics: [
      { value: '200M+', label: { en: 'ChatGPT Users', de: 'ChatGPT Nutzer' } },
      { value: '$3.4B', label: { en: 'Revenue 2024', de: 'Umsatz 2024' } },
      { value: '80%+', label: { en: 'Fortune 500 Adoption', de: 'Fortune 500 Adoption' } },
    ],
    thetaIndex: { overall: 0.95, c1: 1.0, c2: 0.9, c3: 0.9, c4: 0.9 },
    thetaLabels: {
      c1: { en: 'Best-in-class LLMs', de: 'Beste LLMs der Klasse' },
      c2: { en: 'API + Consumer + Enterprise', de: 'API + Consumer + Enterprise' },
      c3: { en: 'Massive scale operations', de: 'Massive Skalenoperationen' },
      c4: { en: 'Efficient growth', de: 'Effizientes Wachstum' },
    },
    growthTimeline: [
      { year: '2023', value: '$80M', label: 'revenue' },
      { year: '2024', value: '$3.4B', label: '42.5x growth' },
      { year: '2025', value: '$10B+', label: 'projected' },
    ],
    learnings: {
      en: [
        'API-First Strategy - Enable developers to build on top',
        'Consumer + Enterprise - Dual revenue streams',
        'Continuous Improvement - Regular model updates',
        'Ecosystem Play - Partnerships with Microsoft, Apple',
        'Pricing Power - Premium positioning justified by quality',
      ],
      de: [
        'API-First Strategie - Entwickler können darauf aufbauen',
        'Consumer + Enterprise - Duale Umsatzströme',
        'Kontinuierliche Verbesserung - Regelmäßige Modell-Updates',
        'Ökosystem-Spiel - Partnerschaften mit Microsoft, Apple',
        'Preissetzungsmacht - Premium durch Qualität gerechtfertigt',
      ],
    },
    highlight: { en: '100M Users in 2 Months (Fastest Ever)', de: '100M Nutzer in 2 Monaten (schnellstes je)' },
  },
  {
    id: 'stripe',
    name: 'Stripe',
    icon: CreditCard,
    color: '#6366F1',
    founded: '2010',
    founder: 'Patrick & John Collison',
    focus: { en: 'Developer-First Payments', de: 'Developer-First Zahlungen' },
    headline: { metric: '$95B', label: { en: 'Valuation 2023', de: 'Bewertung 2023' } },
    secondaryMetrics: [
      { value: '$14B', label: { en: 'Revenue 2023', de: 'Umsatz 2023' } },
      { value: '$1T+', label: { en: 'Processed Annually', de: 'Jährlich verarbeitet' } },
      { value: '80%+', label: { en: 'Startup Adoption', de: 'Startup Adoption' } },
    ],
    thetaIndex: { overall: 0.90, c1: 0.9, c2: 0.8, c3: 0.9, c4: 0.9 },
    thetaLabels: {
      c1: { en: 'Best developer experience', de: 'Beste Developer Experience' },
      c2: { en: 'Developer-first, enterprise expansion', de: 'Developer-first, Enterprise-Expansion' },
      c3: { en: 'Global operations at scale', de: 'Globale Operationen in Skala' },
      c4: { en: 'Profitable, efficient growth', de: 'Profitabel, effizientes Wachstum' },
    },
    growthTimeline: [
      { year: '2015', value: '$1B', label: 'valuation' },
      { year: '2020', value: '$36B', label: '36x' },
      { year: '2023', value: '$95B', label: '95x' },
    ],
    learnings: {
      en: [
        'Developer Experience - Best-in-class API',
        'Global Expansion - Support 135+ currencies',
        'Product Expansion - Billing, Connect, Terminal',
        'Enterprise Focus - High-value customers',
        'Long-term Play - Patient capital, profitability focus',
      ],
      de: [
        'Developer Experience - Beste API der Klasse',
        'Globale Expansion - 135+ Währungen unterstützt',
        'Produkt-Expansion - Billing, Connect, Terminal',
        'Enterprise-Fokus - Hochwertige Kunden',
        'Langfristiges Spiel - Geduldiges Kapital, Profitabilitätsfokus',
      ],
    },
    highlight: { en: 'The Developer-First Payments Pioneer', de: 'Der Developer-First Zahlungs-Pionier' },
  },
  {
    id: 'figma',
    name: 'Figma',
    icon: Palette,
    color: '#F97316',
    founded: '2012',
    founder: 'Dylan Field, Evan Wallace',
    focus: { en: 'Collaborative Design Platform', de: 'Kollaborative Design-Plattform' },
    headline: { metric: '$20B', label: { en: 'Valuation 2023', de: 'Bewertung 2023' } },
    secondaryMetrics: [
      { value: '$425M', label: { en: 'Revenue 2023', de: 'Umsatz 2023' } },
      { value: '4M+', label: { en: 'Monthly Users', de: 'Monatliche Nutzer' } },
      { value: '90%+', label: { en: 'Design Team Adoption', de: 'Design Team Adoption' } },
    ],
    thetaIndex: { overall: 0.87, c1: 0.9, c2: 0.8, c3: 0.8, c4: 0.8 },
    thetaLabels: {
      c1: { en: 'Best collaborative design tool', de: 'Bestes kollaboratives Design-Tool' },
      c2: { en: 'Viral adoption among designers', de: 'Virale Adoption unter Designern' },
      c3: { en: 'Global operations', de: 'Globale Operationen' },
      c4: { en: 'Well-funded, growing revenue', de: 'Gut finanziert, wachsender Umsatz' },
    },
    growthTimeline: [
      { year: '2019', value: '$2B', label: 'valuation' },
      { year: '2021', value: '$10B', label: '5x' },
      { year: '2023', value: '$20B', label: '10x' },
    ],
    learnings: {
      en: [
        'Collaborative First - Real-time multiplayer',
        'Web-Based - No installation required',
        'Ecosystem Play - Plugins, integrations',
        'Enterprise Expansion - From startups to Fortune 500',
        'AI Integration - Generative design features',
      ],
      de: [
        'Collaboration First - Echtzeit-Multiplayer',
        'Web-basiert - Keine Installation nötig',
        'Ökosystem-Spiel - Plugins, Integrationen',
        'Enterprise-Expansion - Von Startups zu Fortune 500',
        'KI-Integration - Generative Design-Features',
      ],
    },
    highlight: { en: 'The Collaborative Design Leader', de: 'Der Collaborative Design Leader' },
  },
  {
    id: 'notion',
    name: 'Notion',
    icon: FileText,
    color: '#171717',
    founded: '2016',
    founder: 'Ivan Zhao',
    focus: { en: 'All-in-One Workspace', de: 'All-in-One Workspace' },
    headline: { metric: '$10B', label: { en: 'Valuation 2024', de: 'Bewertung 2024' } },
    secondaryMetrics: [
      { value: '30M+', label: { en: 'Monthly Users', de: 'Monatliche Nutzer' } },
      { value: '$100M+', label: { en: 'Revenue 2024', de: 'Umsatz 2024' } },
      { value: '100%+', label: { en: 'YoY Growth', de: 'YoY Wachstum' } },
    ],
    thetaIndex: { overall: 0.85, c1: 0.8, c2: 0.9, c3: 0.8, c4: 0.8 },
    thetaLabels: {
      c1: { en: 'Flexible, powerful workspace', de: 'Flexibler, leistungsstarker Workspace' },
      c2: { en: 'Community-driven growth', de: 'Community-getriebenes Wachstum' },
      c3: { en: 'Distributed team operations', de: 'Verteilte Team-Operationen' },
      c4: { en: 'Efficient growth, profitability focus', de: 'Effizientes Wachstum, Profitabilitätsfokus' },
    },
    growthTimeline: [
      { year: '2020', value: '$2B', label: 'valuation' },
      { year: '2021', value: '$10B', label: '5x' },
      { year: '2024', value: '$10B', label: 'stable' },
    ],
    learnings: {
      en: [
        'Community-Driven - Users create templates',
        'Freemium Model - Free tier drives adoption',
        'Creator Economy - Notion template marketplace',
        'AI Integration - Notion AI for content generation',
        'Vertical Expansion - CRM, Wiki, Database',
      ],
      de: [
        'Community-Driven - Nutzer erstellen Templates',
        'Freemium Modell - Free Tier treibt Adoption',
        'Creator Economy - Notion Template Marketplace',
        'KI-Integration - Notion AI für Content-Generierung',
        'Vertikale Expansion - CRM, Wiki, Database',
      ],
    },
    highlight: { en: 'The Community-Driven Workspace', de: 'Der Community-Driven Workspace' },
  },
];

const keyInsights = {
  successFactors: {
    en: [
      'AI-Native from Day 1 - Not AI bolted on',
      'Developer/Creator Focus - Build for power users first',
      'Freemium Model - Free tier drives adoption',
      'Community-Driven - Users become advocates',
      'Rapid Iteration - Weekly/monthly updates',
      'Vertical Integration - Expand from core product',
      'Global Mindset - Support multiple languages/currencies',
      'Premium Positioning - High-value product = premium pricing',
    ],
    de: [
      'AI-Native von Tag 1 - Nicht nachträglich hinzugefügt',
      'Developer/Creator Fokus - Erst für Power User bauen',
      'Freemium Modell - Free Tier treibt Adoption',
      'Community-Driven - Nutzer werden Fürsprecher',
      'Schnelle Iteration - Wöchentliche/monatliche Updates',
      'Vertikale Integration - Vom Kernprodukt expandieren',
      'Globale Denkweise - Mehrere Sprachen/Währungen',
      'Premium-Positionierung - Hochwertiges Produkt = Premium-Preis',
    ],
  },
  growthPatterns: {
    en: [
      { stage: 'Early Stage (0-1y)', growth: '10-100x growth' },
      { stage: 'Scale Stage (1-3y)', growth: '5-50x growth' },
      { stage: 'Mature Stage (3+y)', growth: '2-10x growth' },
    ],
    de: [
      { stage: 'Early Stage (0-1 J.)', growth: '10-100x Wachstum' },
      { stage: 'Scale Stage (1-3 J.)', growth: '5-50x Wachstum' },
      { stage: 'Mature Stage (3+ J.)', growth: '2-10x Wachstum' },
    ],
  },
  capitalEfficiency: {
    en: [
      { company: 'Cursor', highlight: '$1B ARR in <6 months (most efficient)' },
      { company: 'Perplexity', highlight: '$500M+ revenue, $9B valuation' },
      { company: 'OpenAI', highlight: '$3.4B revenue, $80B valuation' },
      { company: 'Stripe', highlight: '$14B revenue, $95B valuation' },
    ],
    de: [
      { company: 'Cursor', highlight: '$1B ARR in <6 Monaten (effizienteste)' },
      { company: 'Perplexity', highlight: '$500M+ Umsatz, $9B Bewertung' },
      { company: 'OpenAI', highlight: '$3.4B Umsatz, $80B Bewertung' },
      { company: 'Stripe', highlight: '$14B Umsatz, $95B Bewertung' },
    ],
  },
};

const ScalingXCaseStudies = () => {
  const { language } = useLanguage();
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    setSelectedStudy(null);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
            {language === 'en' ? 'AI-Native Case Studies' : 'AI-Native Fallstudien'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? '7 Companies That Defined AI-Native Growth' : '7 Unternehmen, die AI-Native Wachstum definierten'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Real metrics from the fastest-growing AI companies. Learn their patterns, apply their playbooks.'
              : 'Echte Metriken der am schnellsten wachsenden KI-Unternehmen. Lerne ihre Muster, wende ihre Playbooks an.'}
          </p>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {caseStudies.map((study) => {
            const Icon = study.icon;
            return (
              <div
                key={study.id}
                onClick={() => setSelectedStudy(study)}
                className="group relative bg-card border border-border rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1"
                style={{ '--study-color': study.color } as React.CSSProperties}
              >
                {/* θ_index Badge */}
                <div className="absolute top-4 right-4">
                  <span 
                    className="text-sm font-bold px-2 py-1 rounded-full"
                    style={{ backgroundColor: `${study.color}20`, color: study.color }}
                  >
                    θ {study.thetaIndex.overall}
                  </span>
                </div>

                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${study.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: study.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{study.name}</h3>
                    <p className="text-sm text-muted-foreground">{study.founded}</p>
                  </div>
                </div>

                {/* Headline Metric */}
                <div className="mb-4">
                  <p className="text-3xl font-bold" style={{ color: study.color }}>
                    {study.headline.metric}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {study.headline.label[language]}
                  </p>
                </div>

                {/* Secondary Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.secondaryMetrics.slice(0, 2).map((metric, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {metric.value} {metric.label[language]}
                    </span>
                  ))}
                </div>

                {/* Highlight */}
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {study.highlight[language]}
                </p>

                {/* View Details */}
                <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  {language === 'en' ? 'View Details' : 'Details ansehen'}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            {language === 'en' ? 'Compare All Companies' : 'Alle Unternehmen vergleichen'}
          </h3>
          <div className="bg-card border border-border rounded-2xl p-6">
            <CaseStudyComparisonTable />
          </div>
        </div>

        {/* Key Insights */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Success Factors */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-bold text-lg">
                {language === 'en' ? 'Success Factors' : 'Erfolgsfaktoren'}
              </h4>
            </div>
            <ul className="space-y-2">
              {keyInsights.successFactors[language].map((factor, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">•</span>
                  {factor}
                </li>
              ))}
            </ul>
          </div>

          {/* Growth Patterns */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-bold text-lg">
                {language === 'en' ? 'Growth Patterns' : 'Wachstumsmuster'}
              </h4>
            </div>
            <div className="space-y-4">
              {keyInsights.growthPatterns[language].map((pattern, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm font-medium">{pattern.stage}</span>
                  <span className="text-sm font-bold text-primary">{pattern.growth}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Capital Efficiency */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-bold text-lg">
                {language === 'en' ? 'Capital Efficiency' : 'Kapitaleffizienz'}
              </h4>
            </div>
            <div className="space-y-3">
              {keyInsights.capitalEfficiency[language].map((item, i) => (
                <div key={i} className="text-sm">
                  <span className="font-bold">{item.company}:</span>
                  <span className="text-muted-foreground ml-1">{item.highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detail Dialog */}
        <Dialog open={!!selectedStudy} onOpenChange={() => setSelectedStudy(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedStudy && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${selectedStudy.color}15` }}
                    >
                      <selectedStudy.icon className="w-8 h-8" style={{ color: selectedStudy.color }} />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl">{selectedStudy.name}</DialogTitle>
                      <p className="text-muted-foreground">
                        {language === 'en' ? 'Founded' : 'Gegründet'}: {selectedStudy.founded} | {selectedStudy.founder}
                      </p>
                      <p className="text-sm" style={{ color: selectedStudy.color }}>
                        {selectedStudy.focus[language]}
                      </p>
                    </div>
                  </div>
                </DialogHeader>

                {/* Primary Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <p className="text-2xl font-bold" style={{ color: selectedStudy.color }}>
                      {selectedStudy.headline.metric}
                    </p>
                    <p className="text-sm text-muted-foreground">{selectedStudy.headline.label[language]}</p>
                  </div>
                  {selectedStudy.secondaryMetrics.map((metric, i) => (
                    <div key={i} className="text-center p-4 bg-muted/50 rounded-xl">
                      <p className="text-2xl font-bold">{metric.value}</p>
                      <p className="text-sm text-muted-foreground">{metric.label[language]}</p>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Growth Timeline */}
                  <div>
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      {language === 'en' ? 'Growth Timeline' : 'Wachstums-Timeline'}
                    </h4>
                    <div className="space-y-3">
                      {selectedStudy.growthTimeline.map((point, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                          <span className="text-sm font-medium text-muted-foreground w-24">{point.year}</span>
                          <span className="text-lg font-bold" style={{ color: selectedStudy.color }}>{point.value}</span>
                          {point.label && (
                            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{point.label}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* θ_index Breakdown */}
                  <div>
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      θ_index Breakdown
                    </h4>
                    <ThetaIndexRadial 
                      c1={selectedStudy.thetaIndex.c1}
                      c2={selectedStudy.thetaIndex.c2}
                      c3={selectedStudy.thetaIndex.c3}
                      c4={selectedStudy.thetaIndex.c4}
                      overall={selectedStudy.thetaIndex.overall}
                      color={selectedStudy.color}
                    />
                    <div className="mt-4 space-y-2 text-sm">
                      <p><span className="font-medium">C₁:</span> <span className="text-muted-foreground">{selectedStudy.thetaLabels.c1[language]}</span></p>
                      <p><span className="font-medium">C₂:</span> <span className="text-muted-foreground">{selectedStudy.thetaLabels.c2[language]}</span></p>
                      <p><span className="font-medium">C₃:</span> <span className="text-muted-foreground">{selectedStudy.thetaLabels.c3[language]}</span></p>
                      <p><span className="font-medium">C₄:</span> <span className="text-muted-foreground">{selectedStudy.thetaLabels.c4[language]}</span></p>
                    </div>
                  </div>
                </div>

                {/* Key Learnings */}
                <div className="mb-8">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    {language === 'en' ? 'Key Learnings' : 'Kernerkenntnisse'}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedStudy.learnings[language].map((learning, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-sm">{learning}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-4 border-t border-border">
                  <p className="text-muted-foreground mb-4">
                    {language === 'en' 
                      ? 'Want to apply these patterns to your company?'
                      : 'Möchten Sie diese Muster auf Ihr Unternehmen anwenden?'}
                  </p>
                  <Button onClick={scrollToBooking} size="lg" className="gap-2">
                    {language === 'en' ? 'Apply These Patterns' : 'Diese Muster anwenden'}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ScalingXCaseStudies;
