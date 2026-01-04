import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Rocket, Users, MessageSquare, TrendingUp, CheckCircle,
  ArrowRight, Sparkles, BarChart3, Zap, Target
} from 'lucide-react';
import { Card } from '@/components/ui/card';

interface GrowthEngine {
  id: string;
  title: { en: string; de: string };
  description: { en: string; de: string };
  icon: React.ElementType;
  color: string;
  gradient: string;
  metrics: {
    label: { en: string; de: string };
    value: string;
    improvement: string;
  }[];
  patterns: { en: string; de: string }[];
  companies: string[];
  aiNativeAdvantage: { en: string; de: string };
}

const GrowthEngines: React.FC = () => {
  const { language } = useLanguage();
  const [activeEngine, setActiveEngine] = useState<string>('product');

  const engines: GrowthEngine[] = [
    {
      id: 'product',
      title: { en: 'Product-Led Growth', de: 'Product-Led Growth' },
      description: { 
        en: 'Let your product be the primary driver of acquisition, conversion, and expansion', 
        de: 'Lassen Sie Ihr Produkt der primäre Treiber für Akquise, Konversion und Expansion sein' 
      },
      icon: Rocket,
      color: 'text-blue-400',
      gradient: 'from-blue-500 to-cyan-500',
      metrics: [
        { label: { en: 'CAC Reduction', de: 'CAC-Reduktion' }, value: '-70%', improvement: 'vs. Sales-Led' },
        { label: { en: 'Time to Value', de: 'Time to Value' }, value: '<5min', improvement: 'First Aha!' },
        { label: { en: 'Viral Coefficient', de: 'Viral-Koeffizient' }, value: '>1.2', improvement: 'Self-sustaining' },
        { label: { en: 'Net Revenue Retention', de: 'Net Revenue Retention' }, value: '>130%', improvement: 'Expansion' },
      ],
      patterns: [
        { en: 'Freemium with AI-powered upgrade triggers', de: 'Freemium mit AI-gestützten Upgrade-Triggern' },
        { en: 'Personalized onboarding via AI', de: 'Personalisiertes Onboarding via AI' },
        { en: 'Self-serve expansion with usage-based pricing', de: 'Self-Serve Expansion mit nutzungsbasierter Preisgestaltung' },
        { en: 'AI-generated feature recommendations', de: 'AI-generierte Feature-Empfehlungen' },
      ],
      companies: ['Figma', 'Notion', 'Canva', 'Miro'],
      aiNativeAdvantage: { 
        en: 'AI predicts churn before it happens and auto-triggers retention actions', 
        de: 'AI sagt Churn voraus und triggert automatisch Retention-Aktionen' 
      },
    },
    {
      id: 'sales',
      title: { en: 'Sales-Led Growth', de: 'Sales-Led Growth' },
      description: { 
        en: 'AI-augmented sales teams that close deals faster with better targeting', 
        de: 'AI-unterstützte Sales-Teams, die schneller und gezielter abschließen' 
      },
      icon: Users,
      color: 'text-purple-400',
      gradient: 'from-purple-500 to-pink-500',
      metrics: [
        { label: { en: 'Win Rate Increase', de: 'Win Rate Steigerung' }, value: '+45%', improvement: 'AI-qualified leads' },
        { label: { en: 'Sales Cycle', de: 'Sales Cycle' }, value: '-40%', improvement: 'AI-assisted' },
        { label: { en: 'Revenue per Rep', de: 'Umsatz pro Rep' }, value: '2.5x', improvement: 'AI copilot' },
        { label: { en: 'Forecast Accuracy', de: 'Forecast-Genauigkeit' }, value: '95%+', improvement: 'AI prediction' },
      ],
      patterns: [
        { en: 'AI-powered lead scoring and routing', de: 'AI-gestütztes Lead Scoring und Routing' },
        { en: 'Automated prospect research', de: 'Automatisierte Prospect-Recherche' },
        { en: 'AI sales copilot for calls and emails', de: 'AI Sales Copilot für Calls und E-Mails' },
        { en: 'Dynamic pricing optimization', de: 'Dynamische Preisoptimierung' },
      ],
      companies: ['Salesforce', 'HubSpot', 'Gong', 'Clari'],
      aiNativeAdvantage: { 
        en: 'AI handles 80% of qualification, reps focus on relationship building', 
        de: 'AI übernimmt 80% der Qualifizierung, Reps fokussieren auf Beziehungsaufbau' 
      },
    },
    {
      id: 'community',
      title: { en: 'Community-Led Growth', de: 'Community-Led Growth' },
      description: { 
        en: 'Build a passionate community that drives organic growth and product evolution', 
        de: 'Bauen Sie eine leidenschaftliche Community, die organisches Wachstum treibt' 
      },
      icon: MessageSquare,
      color: 'text-emerald-400',
      gradient: 'from-emerald-500 to-teal-500',
      metrics: [
        { label: { en: 'Organic Traffic', de: 'Organischer Traffic' }, value: '70%+', improvement: 'Community-driven' },
        { label: { en: 'Support Cost', de: 'Support-Kosten' }, value: '-60%', improvement: 'Peer support' },
        { label: { en: 'Feature Ideas', de: 'Feature-Ideen' }, value: '80%', improvement: 'From community' },
        { label: { en: 'Advocacy Score', de: 'Advocacy Score' }, value: '>70', improvement: 'NPS' },
      ],
      patterns: [
        { en: 'Discord/community-first distribution', de: 'Discord/Community-first Distribution' },
        { en: 'User-generated content and templates', de: 'User-generierte Inhalte und Templates' },
        { en: 'Ambassador and creator programs', de: 'Ambassador- und Creator-Programme' },
        { en: 'Open roadmap with community voting', de: 'Offene Roadmap mit Community-Voting' },
      ],
      companies: ['Midjourney', 'Notion', 'Figma', 'Discord'],
      aiNativeAdvantage: { 
        en: 'AI moderates at scale, surfaces insights, and personalizes community experience', 
        de: 'AI moderiert skalierbar, extrahiert Insights und personalisiert Community-Erlebnis' 
      },
    },
  ];

  const activeEngineData = engines.find(e => e.id === activeEngine)!;

  return (
    <section id="growth-engines" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Rocket className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              {language === 'de' ? '3 Growth Engines' : '3 Growth Engines'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
              {language === 'de' ? 'Wählen Sie Ihre Growth Engine' : 'Choose Your Growth Engine'}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {language === 'de' 
              ? 'AI-Native Unternehmen kombinieren oft mehrere Engines – aber eine dominiert'
              : 'AI-Native companies often combine engines – but one dominates'}
          </p>
        </div>

        {/* Engine Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {engines.map((engine) => (
            <button
              key={engine.id}
              onClick={() => setActiveEngine(engine.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-300 ${
                activeEngine === engine.id
                  ? `bg-gradient-to-r ${engine.gradient} text-white border-transparent shadow-lg`
                  : 'bg-card/50 border-border hover:border-primary/30'
              }`}
            >
              <engine.icon className="w-5 h-5" />
              <span className="font-semibold">{engine.title[language]}</span>
            </button>
          ))}
        </div>

        {/* Active Engine Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Metrics */}
          <Card className="lg:col-span-2 p-8 bg-card/50 border-border/50">
            <div className="flex items-center gap-4 mb-8">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${activeEngineData.gradient}`}>
                <activeEngineData.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{activeEngineData.title[language]}</h3>
                <p className="text-muted-foreground">{activeEngineData.description[language]}</p>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {activeEngineData.metrics.map((metric, index) => (
                <div key={index} className="p-4 rounded-xl bg-muted/30 text-center">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${activeEngineData.gradient} bg-clip-text text-transparent`}>
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium mt-1">{metric.label[language]}</div>
                  <div className="text-xs text-muted-foreground">{metric.improvement}</div>
                </div>
              ))}
            </div>

            {/* AI-Native Advantage */}
            <div className={`p-6 rounded-xl bg-gradient-to-r ${activeEngineData.gradient} bg-opacity-10 border border-white/10`}>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-semibold">{language === 'de' ? 'AI-Native Vorteil' : 'AI-Native Advantage'}</span>
              </div>
              <p className="text-muted-foreground">{activeEngineData.aiNativeAdvantage[language]}</p>
            </div>
          </Card>

          {/* Patterns & Companies */}
          <Card className="p-8 bg-card/50 border-border/50">
            {/* Patterns */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                {language === 'de' ? 'AI-Native Muster' : 'AI-Native Patterns'}
              </h4>
              <ul className="space-y-3">
                {activeEngineData.patterns.map((pattern, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{pattern[language]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Companies */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-primary" />
                {language === 'de' ? 'Beispiel-Unternehmen' : 'Example Companies'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeEngineData.companies.map((company, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 rounded-full bg-muted/50 text-sm font-medium"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="#booking"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <Zap className="w-5 h-5" />
              {language === 'de' ? 'Engine-Analyse starten' : 'Start Engine Analysis'}
            </a>
          </Card>
        </div>

        {/* Hybrid Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/30 border border-border">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">
              {language === 'de' 
                ? 'Die erfolgreichsten AI-Native Unternehmen kombinieren 2-3 Engines mit einer klaren Dominante'
                : 'Most successful AI-Native companies combine 2-3 engines with a clear dominant one'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthEngines;
