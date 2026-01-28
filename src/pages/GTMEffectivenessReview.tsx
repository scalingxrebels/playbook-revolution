import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallaxLayers } from '@/hooks/useParallax';
import TwinklingStars from '@/components/TwinklingStars';
import {
  ArrowRight,
  ChevronDown,
  Check,
  X,
  Target,
  TrendingUp,
  Zap,
  Users,
  MessageSquare,
  DollarSign,
  Settings,
  BarChart3,
  Clock,
  FileText,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';

// ============================================================================
// SECTION 1: HERO
// ============================================================================
const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroStats = [
    { value: '+80%', label: { en: 'GTM Clarity', de: 'GTM Clarity' }, sublabel: { en: 'Low → High', de: 'Niedrig → Hoch' } },
    { value: '+50-100%', label: { en: 'Decision Velocity', de: 'Decision Velocity' }, sublabel: { en: '7-14d → 3-7d', de: '7-14 Tage → 3-7 Tage' } },
    { value: '-30-50%', label: { en: 'CAC Roadmap', de: 'CAC Roadmap' }, sublabel: { en: '€8K → €4K-€5.6K target', de: '€8K → €4K-€5.6K Ziel' } },
  ];

  const trustBadges = [
    { icon: Clock, label: { en: '3-5 Days (Fast Turnaround)', de: '3-5 Tage (Schnelle Lieferung)' } },
    { icon: FileText, label: { en: 'Board-Ready Report (20-30 Pages)', de: 'Board-Ready Report (20-30 Seiten)' } },
    { icon: Shield, label: { en: 'Expert Analysis (McKinsey-Level)', de: 'Experten-Analyse (McKinsey-Level)' } },
  ];

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise pt-20"
    >
      {/* Deep Space Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(240,10%,8%)] to-[hsl(240,15%,12%)] transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }}
      />

      {/* Mesh Gradient Overlay */}
      <div
        className="absolute inset-0 bg-mesh opacity-60 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }}
      />

      {/* Twinkling Stars */}
      <div
        className="absolute inset-0 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[1]}px)` }}
      >
        <TwinklingStars />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[2]}px) scale(1.1)` }}
      />

      {/* Content */}
      <div className="container max-w-5xl mx-auto px-6 py-24 relative z-10 text-center">
        {/* Breadcrumb */}
        <Breadcrumb className="justify-center mb-6 animate-fade-in">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/solutions" className="text-muted-foreground hover:text-foreground">
                Solutions
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-foreground font-medium">GTM Effectiveness Review</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Badge */}
        <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <BarChart3 className="w-4 h-4 mr-2" />
          Decision Support · 3-5 {language === 'de' ? 'Tage' : 'Days'} · €3.9K-€5.9K
        </Badge>

        {/* Headline */}
        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">{language === 'de' ? 'Expert GTM Review—' : 'Expert GTM Review—'}</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'In 3-5 Tagen' : 'In 3-5 Days'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Erhalte Experten-Analyse deiner GTM-Effektivität in 3-5 Tagen. Typische Ergebnisse: GTM Clarity +80%, Decision Velocity +50-100%, CAC Reduction Roadmap 30-50%—mit Board-Ready Report.'
            : 'Get expert analysis of your GTM effectiveness in 3-5 days. Typical outcomes: GTM Clarity +80%, Decision Velocity +50-100%, CAC Reduction Roadmap 30-50%—with board-ready report.'}
        </p>

        {/* Hero Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {heroStats.map((stat, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm border-2 border-border p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-foreground uppercase tracking-wider">
                {language === 'de' ? stat.label.de : stat.label.en}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                ({language === 'de' ? stat.sublabel.de : stat.sublabel.en})
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => scrollToSection('final-cta')}
          >
            {language === 'de' ? 'Review anfragen (€3.9K)' : 'Request Review (€3.9K)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('solution-section')}
            className="border-2"
          >
            {language === 'de' ? 'So funktioniert es' : 'See How It Works'}
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              <span>{language === 'de' ? badge.label.de : badge.label.en}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('problem-section')}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-fade-in cursor-pointer"
        style={{ animationDelay: '1s' }}
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

// ============================================================================
// SECTION 2: PROBLEM
// ============================================================================
const ProblemSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const symptoms = [
    { en: 'High CAC: €5K-€10K (benchmark: €500-€2K for AI-native)', de: 'Hoher CAC: €5K-€10K (Benchmark: €500-€2K für AI-native)' },
    { en: 'Low win rate: 15-25% (benchmark: 40-60% for AI-native)', de: 'Niedrige Win Rate: 15-25% (Benchmark: 40-60% für AI-native)' },
    { en: 'Long sales cycle: 90-180 days (benchmark: 30-60 days for AI-native)', de: 'Langer Sales Cycle: 90-180 Tage (Benchmark: 30-60 Tage für AI-native)' },
    { en: "No GTM clarity: Don't know which lever to pull first", de: 'Keine GTM Clarity: Weißt nicht, welchen Hebel du zuerst ziehen sollst' },
    { en: 'Growth stalled: 150% → 80% YoY growth', de: 'Wachstum stagniert: 150% → 80% YoY Wachstum' },
  ];

  const costs = [
    { en: 'Destroys unit economics (CAC rising, LTV/CAC dropping)', de: 'Zerstört Unit Economics (CAC steigt, LTV/CAC fällt)' },
    { en: "Limits growth potential (can't scale broken GTM)", de: 'Begrenzt Wachstumspotenzial (kann kaputtes GTM nicht skalieren)' },
    { en: 'Weakens board confidence (board losing trust in GTM)', de: 'Schwächt Board-Vertrauen (Board verliert Vertrauen in GTM)' },
    { en: "Increases down-round risk (can't raise at higher valuation)", de: 'Erhöht Down-Round-Risiko (kann nicht zu höherer Bewertung raisen)' },
  ];

  return (
    <section
      id="problem-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-destructive mb-4 block">
            {language === 'de' ? 'Das Problem' : 'The Problem'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Dein GTM ist kaputt—aber du weißt nicht wo' : "Your GTM Is Broken—But You Don't Know Where"}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Dein CAC liegt bei €5K-€10K (Benchmark: €500-€2K für AI-native). Deine Win Rate ist 15-25% (Benchmark: 40-60% für AI-native). Dein Sales Cycle dauert 90-180 Tage (Benchmark: 30-60 Tage für AI-native). Und das Schlimmste—du weißt nicht, welchen GTM-Hebel du zuerst ziehen sollst.'
              : "Your CAC is €5K-€10K (benchmark: €500-€2K for AI-native). Your win rate is 15-25% (benchmark: 40-60% for AI-native). Your sales cycle is 90-180 days (benchmark: 30-60 days for AI-native). And worst of all—you don't know which GTM lever to pull first."}
          </p>
        </div>

        {/* Symptoms Checklist */}
        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">
            {language === 'de' ? 'Die Symptome, die du siehst:' : 'The symptoms you\'re seeing:'}
          </h3>
          <div className="grid gap-3">
            {symptoms.map((symptom, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                </div>
                <span className="text-sm text-foreground">
                  {language === 'de' ? symptom.de : symptom.en}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Real Costs */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">
            {language === 'de' ? 'Die echten Kosten:' : 'The real cost:'}
          </h3>
          <p className="text-center text-muted-foreground mb-6">
            {language === 'de'
              ? 'Das ist nicht nur eine Metrik. Jedes Quartal ohne GTM Clarity:'
              : "This isn't just about metrics. Every quarter without GTM clarity:"}
          </p>
          <div className="grid gap-3">
            {costs.map((cost, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-lg animate-slide-up"
                style={{ animationDelay: `${(index + symptoms.length) * 0.05}s` }}
              >
                <div className="w-6 h-6 rounded-full bg-destructive/30 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <span className="text-sm text-foreground font-medium">
                  {language === 'de' ? cost.de : cost.en}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg font-bold text-accent">
            {language === 'de' ? 'Du brauchst GTM Clarity. Schnell.' : 'You need GTM clarity. Fast.'}
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 3: SOLUTION
// ============================================================================
const SolutionSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const dimensions = [
    { icon: Target, name: 'Market & ICP', description: { en: 'TAM, SAM, SOM, ICP definition, market positioning', de: 'TAM, SAM, SOM, ICP-Definition, Marktpositionierung' } },
    { icon: Users, name: 'Customer Acquisition', description: { en: 'CAC analysis, win rate, sales cycle, channel effectiveness', de: 'CAC-Analyse, Win Rate, Sales Cycle, Kanal-Effektivität' } },
    { icon: MessageSquare, name: 'Messaging & Positioning', description: { en: 'Value proposition, messaging framework, competitive positioning', de: 'Value Proposition, Messaging Framework, Wettbewerbs-Positionierung' } },
    { icon: TrendingUp, name: 'Sales Process', description: { en: 'Sales motion, playbook, enablement, tools', de: 'Sales Motion, Playbook, Enablement, Tools' } },
    { icon: DollarSign, name: 'Pricing & Packaging', description: { en: 'Pricing model, packaging strategy, monetization', de: 'Pricing-Modell, Packaging-Strategie, Monetarisierung' } },
    { icon: Settings, name: 'GTM Operations', description: { en: 'Metrics, systems, team, processes', de: 'Metriken, Systeme, Team, Prozesse' } },
  ];

  const days1to3Deliverables = [
    { en: 'GTM Effectiveness Report (20-30 pages, board-ready)', de: 'GTM Effectiveness Report (20-30 Seiten, board-ready)' },
    { en: 'GTM Bottleneck Analysis (what\'s broken and why)', de: 'GTM Bottleneck Analysis (was kaputt ist und warum)' },
    { en: 'Priority Matrix (which levers to fix first)', de: 'Priority Matrix (welche Hebel zuerst beheben)' },
    { en: 'Expert Recommendations (5-10 key actions)', de: 'Experten-Empfehlungen (5-10 Key Actions)' },
  ];

  const days4to5Deliverables = [
    { en: '90-Day GTM Roadmap (week-by-week action plan)', de: '90-Tage GTM Roadmap (Woche-für-Woche Aktionsplan)' },
    { en: 'Quick Wins List (first 30 days)', de: 'Quick Wins Liste (erste 30 Tage)' },
    { en: 'Long-Term Strategy (90 days)', de: 'Langfrist-Strategie (90 Tage)' },
    { en: 'Implementation Guide (how to execute)', de: 'Implementierungs-Guide (wie umsetzen)' },
  ];

  const differentiators = [
    { en: 'Expert analysis (McKinsey-level quality, not just data dump)', de: 'Experten-Analyse (McKinsey-Level Qualität, nicht nur Data Dump)' },
    { en: '6 dimensions (market, acquisition, messaging, sales, pricing, operations)', de: '6 Dimensionen (Market, Acquisition, Messaging, Sales, Pricing, Operations)' },
    { en: 'Board-ready report (20-30 pages, investor-grade quality)', de: 'Board-Ready Report (20-30 Seiten, Investor-Grade Qualität)' },
    { en: 'Fast turnaround (3-5 days, not 4-6 weeks)', de: 'Schnelle Lieferung (3-5 Tage, nicht 4-6 Wochen)' },
  ];

  return (
    <section
      id="solution-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Die Lösung' : 'The Solution'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'So funktioniert GTM Effectiveness Review' : 'How GTM Effectiveness Review Works'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Wir analysieren nicht nur Metriken. Wir führen eine Experten-GTM-Analyse durch—aus McKinsey-Level Perspektive—damit du genau weißt, was du zuerst beheben musst.'
              : "We don't just analyze metrics. We conduct expert GTM analysis—from McKinsey-level perspective—so you know exactly what to fix first."}
          </p>
        </div>

        {/* 6 Dimensions Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">
            {language === 'de' ? '6 GTM-Dimensionen' : '6 GTM Dimensions'}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {dimensions.map((dimension, index) => (
              <div
                key={index}
                className="bg-card/50 border border-border p-4 rounded-lg text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <dimension.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <h4 className="font-bold text-sm text-foreground mb-2">{dimension.name}</h4>
                <p className="text-xs text-muted-foreground">
                  {language === 'de' ? dimension.description.de : dimension.description.en}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Day-by-Day Process */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Days 1-3 */}
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">{language === 'de' ? 'Tage 1-3: GTM-Analyse' : 'Days 1-3: GTM Analysis'}</h4>
                <p className="text-sm text-accent">€3.9K</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {language === 'de'
                ? 'Wir analysieren deine GTM-Effektivität über 6 Dimensionen.'
                : 'We analyze your GTM effectiveness across 6 dimensions.'}
            </p>
            <div className="space-y-2">
              {days1to3Deliverables.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{language === 'de' ? item.de : item.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Days 4-5 (Optional) */}
          <div className="bg-muted/50 border-2 border-border p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">{language === 'de' ? 'Tage 4-5: 90-Tage GTM Roadmap' : 'Days 4-5: 90-Day GTM Roadmap'}</h4>
                <p className="text-sm text-muted-foreground">{language === 'de' ? 'Optional +€2K' : 'Optional +€2K'}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {language === 'de'
                ? 'Wir erstellen deine 90-Tage GTM Roadmap.'
                : 'We create your 90-day GTM roadmap.'}
            </p>
            <div className="space-y-2">
              {days4to5Deliverables.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm text-foreground">{language === 'de' ? item.de : item.en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What Makes This Different */}
        <div className="bg-card/50 border border-border p-8 rounded-lg">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">
            {language === 'de' ? 'Was macht das anders:' : 'What makes this different:'}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-foreground">{language === 'de' ? item.de : item.en}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 4: OUTCOME
// ============================================================================
const OutcomeSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const metrics = [
    {
      value: '+80%',
      label: { en: 'GTM Clarity', de: 'GTM Clarity' },
      before: { en: "Low (don't know which lever to pull)", de: 'Niedrig (weiß nicht, welchen Hebel ziehen)' },
      after: { en: 'High (clear roadmap, priorities clear)', de: 'Hoch (klare Roadmap, Prioritäten klar)' },
      description: { en: 'We analyze 6 GTM dimensions—which increases GTM clarity by 80% through expert analysis and priority setting.', de: 'Wir analysieren 6 GTM-Dimensionen—was GTM Clarity um 80% erhöht durch Experten-Analyse und Prioritätensetzung.' },
    },
    {
      value: '+50-100%',
      label: { en: 'Decision Velocity', de: 'Decision Velocity' },
      before: { en: '7-14 days (slow, unclear priorities)', de: '7-14 Tage (langsam, unklare Prioritäten)' },
      after: { en: '3-7 days (fast, clear priorities)', de: '3-7 Tage (schnell, klare Prioritäten)' },
      description: { en: 'We provide 90-day roadmap—which increases decision velocity by 50-100% through clear priorities and action plan.', de: 'Wir liefern 90-Tage-Roadmap—was Decision Velocity um 50-100% erhöht durch klare Prioritäten und Aktionsplan.' },
    },
    {
      value: '-30-50%',
      label: { en: 'CAC Reduction Roadmap', de: 'CAC Reduction Roadmap' },
      before: { en: '€8K (no clear path to reduce)', de: '€8K (kein klarer Weg zur Reduktion)' },
      after: { en: '€4K-€5.6K target (clear 30-50% reduction path)', de: '€4K-€5.6K Ziel (klarer 30-50% Reduktionspfad)' },
      description: { en: 'We identify CAC drivers—which creates 30-50% CAC reduction roadmap through channel optimization, win rate improvement, and sales cycle reduction.', de: 'Wir identifizieren CAC-Treiber—was 30-50% CAC Reduction Roadmap erstellt durch Kanal-Optimierung, Win Rate Improvement und Sales Cycle Reduktion.' },
    },
  ];

  const caseStudy = {
    company: 'Series A SaaS, €12M ARR, 60 employees',
    challenge: { en: 'CAC €9K, Win Rate 18%, Sales Cycle 120 days, GTM Clarity low', de: 'CAC €9K, Win Rate 18%, Sales Cycle 120 Tage, GTM Clarity niedrig' },
    problems: { en: 'No clear ICP, weak positioning, broken sales process, pricing misaligned', de: 'Keine klare ICP, schwache Positionierung, kaputter Sales-Prozess, Pricing nicht aligned' },
    results: [
      { metric: 'GTM Clarity', value: '+85% (low → high)' },
      { metric: 'Decision Velocity', value: '+80% (10d → 2d)' },
      { metric: 'CAC Roadmap', value: '-40% (€9K → €5.4K target)' },
      { metric: 'Win Rate Roadmap', value: '+150% (18% → 45% target)' },
    ],
  };

  return (
    <section
      id="outcome-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Das Ergebnis' : 'The Outcome'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Typische Ergebnisse (3-5 Tage)' : 'Typical Outcomes (3-5 Days)'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Das sind echte Ergebnisse von Unternehmen wie deinem (Series A-B, €5M-€30M ARR).'
              : "These are real results from companies like yours (Series A-B, €5M-€30M ARR)."}
          </p>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-card border border-border p-6 rounded-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-gradient mb-2">{metric.value}</div>
              <h4 className="font-bold text-foreground mb-4">{language === 'de' ? metric.label.de : metric.label.en}</h4>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-destructive">{language === 'de' ? 'Vorher:' : 'Before:'}</span>
                  <span className="text-muted-foreground">{language === 'de' ? metric.before.de : metric.before.en}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">{language === 'de' ? 'Nachher:' : 'After:'}</span>
                  <span className="text-foreground">{language === 'de' ? metric.after.de : metric.after.en}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                {language === 'de' ? metric.description.de : metric.description.en}
              </p>
            </div>
          ))}
        </div>

        {/* Case Study */}
        <div className="bg-accent/10 border-2 border-accent/30 p-8 rounded-lg">
          <h3 className="text-lg font-bold mb-6 text-foreground text-center">
            {language === 'de' ? 'Echtes Beispiel' : 'Real Example'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold text-foreground mb-2">{language === 'de' ? 'Unternehmen:' : 'Company:'}</p>
              <p className="text-muted-foreground mb-4">{caseStudy.company}</p>
              <p className="font-bold text-foreground mb-2">{language === 'de' ? 'Herausforderung:' : 'Challenge:'}</p>
              <p className="text-muted-foreground mb-4">{language === 'de' ? caseStudy.challenge.de : caseStudy.challenge.en}</p>
              <p className="font-bold text-foreground mb-2">{language === 'de' ? 'GTM-Probleme:' : 'GTM Problems:'}</p>
              <p className="text-muted-foreground">{language === 'de' ? caseStudy.problems.de : caseStudy.problems.en}</p>
            </div>
            <div>
              <p className="font-bold text-foreground mb-4">{language === 'de' ? 'Ergebnisse:' : 'Results:'}</p>
              <div className="space-y-3">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">{result.metric}</span>
                    <span className="font-bold text-accent">{result.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 5: PROCESS
// ============================================================================
const ProcessSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const processSteps = [
    { en: 'Request data (GTM metrics, customer data, sales data, etc.)', de: 'Daten anfragen (GTM-Metriken, Kundendaten, Sales-Daten, etc.)' },
    { en: 'Analyze 6 GTM dimensions (market, acquisition, messaging, sales, pricing, operations)', de: '6 GTM-Dimensionen analysieren (Market, Acquisition, Messaging, Sales, Pricing, Operations)' },
    { en: "Identify GTM bottlenecks (what's broken?)", de: 'GTM-Engpässe identifizieren (was ist kaputt?)' },
    { en: 'Create GTM Effectiveness Report (20-30 pages)', de: 'GTM Effectiveness Report erstellen (20-30 Seiten)' },
  ];

  const guarantees = [
    { en: 'Expert-grade quality (McKinsey-level analysis)', de: 'Experten-Grade Qualität (McKinsey-Level Analyse)' },
    { en: '6 dimensions analyzed (comprehensive GTM review)', de: '6 Dimensionen analysiert (umfassendes GTM Review)' },
    { en: 'Fast turnaround (3-5 days, not 4-6 weeks)', de: 'Schnelle Lieferung (3-5 Tage, nicht 4-6 Wochen)' },
    { en: "Reference calls available (talk to CEOs who've used this)", de: 'Referenzgespräche möglich (mit CEOs sprechen, die das genutzt haben)' },
  ];

  return (
    <section
      id="process-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Der Prozess' : 'How We Work'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Der GTM Effectiveness Review Prozess' : 'The GTM Effectiveness Review Process'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Transparente Timeline. Klare Deliverables. Experten-Grade Qualität.'
              : 'Transparent timeline. Clear deliverables. Expert-grade quality.'}
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-card border border-border p-8 rounded-lg mb-8">
            <h3 className="text-lg font-bold mb-4 text-foreground flex items-center gap-3">
              <Clock className="w-5 h-5 text-accent" />
              {language === 'de' ? 'Tage 1-3: GTM-Analyse' : 'Days 1-3: GTM Analysis'}
            </h3>
            <div className="space-y-3 mb-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-accent">{index + 1}</span>
                  </div>
                  <span className="text-sm text-foreground">{language === 'de' ? step.de : step.en}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>{language === 'de' ? 'Zeitaufwand (dein Team):' : 'Time commitment (your team):'}</strong> 4-6 {language === 'de' ? 'Stunden (Daten-Sharing, Q&A)' : 'hours (data sharing, Q&A)'}
            </p>
          </div>
        </div>

        {/* Pricing */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg text-center">
            <h4 className="font-bold text-foreground mb-2">{language === 'de' ? 'Base Package' : 'Base Package'}</h4>
            <div className="text-3xl font-bold text-gradient mb-4">€3.9K</div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• GTM Effectiveness Report (20-30 pages)</li>
              <li>• 6 Dimensions analyzed</li>
              <li>• Expert recommendations</li>
              <li>• 3-5 days turnaround</li>
            </ul>
          </div>
          <div className="bg-muted/50 border-2 border-border p-6 rounded-lg text-center">
            <h4 className="font-bold text-foreground mb-2">+ Execution Bridge</h4>
            <div className="text-3xl font-bold text-muted-foreground mb-4">+€2K</div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• 90-Day GTM Roadmap (week-by-week)</li>
              <li>• Quick Wins List (first 30 days)</li>
              <li>• Implementation Guide</li>
              <li>• Team Training</li>
            </ul>
          </div>
        </div>

        {/* Quality Guarantee */}
        <div className="bg-card border border-border p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-6 text-foreground flex items-center gap-3 justify-center">
            <Shield className="w-5 h-5 text-accent" />
            {language === 'de' ? 'Qualitätsgarantie' : 'Quality Guarantee'}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {guarantees.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-foreground">{language === 'de' ? item.de : item.en}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 6: QUALIFICATION
// ============================================================================
const QualificationSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const goodFit = [
    { en: "You have GTM problems but don't know which lever to pull first", de: 'Du hast GTM-Probleme, aber weißt nicht, welchen Hebel du zuerst ziehen sollst' },
    { en: 'Your CAC is €5K-€10K, Win Rate is 15-25%, Sales Cycle is 90-180 days', de: 'Dein CAC liegt bei €5K-€10K, Win Rate bei 15-25%, Sales Cycle bei 90-180 Tagen' },
    { en: 'You need expert GTM analysis (not hands-on implementation)', de: 'Du brauchst Experten-GTM-Analyse (keine Hands-on Implementierung)' },
    { en: "You're Series A-B, €5M-€30M ARR, 30-150 people", de: 'Du bist Series A-B, €5M-€30M ARR, 30-150 Mitarbeiter' },
    { en: 'You have budget (€3.9K-€5.9K)', de: 'Du hast Budget (€3.9K-€5.9K)' },
  ];

  const notFit = [
    { condition: { en: 'You need hands-on GTM implementation (not just analysis)', de: 'Du brauchst Hands-on GTM-Implementierung (nicht nur Analyse)' }, alternative: { en: 'Power Up: CAC Crisis (€23.6K) or Boost (€60K-€78K)', de: 'Power Up: CAC Crisis (€23.6K) oder Boost (€60K-€78K)' } },
    { condition: { en: 'You already know what to fix (just need execution)', de: 'Du weißt bereits, was du fixen musst (brauchst nur Execution)' }, alternative: { en: 'Power Up: CAC Crisis (€23.6K) for fast execution', de: 'Power Up: CAC Crisis (€23.6K) für schnelle Execution' } },
    { condition: { en: 'You need full GTM transformation (not just review)', de: 'Du brauchst volle GTM-Transformation (nicht nur Review)' }, alternative: { en: 'Boost: Efficient Hypergrowth (€60K-€78K)', de: 'Boost: Efficient Hypergrowth (€60K-€78K)' } },
  ];

  return (
    <section
      id="qualification-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Für wen' : "Who It's For"}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Ist das richtig für dich?' : 'Is This Right for You?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'GTM Effectiveness Review funktioniert am besten für Unternehmen in dieser Situation.'
              : 'GTM Effectiveness Review works best for companies in this situation.'}
          </p>
        </div>

        {/* Good Fit / Not Fit */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Good Fit */}
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-6 text-accent flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              {language === 'de' ? 'Das passt, wenn:' : 'This is a good fit if:'}
            </h3>
            <div className="space-y-3">
              {goodFit.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{language === 'de' ? item.de : item.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not Fit */}
          <div className="bg-muted/50 border-2 border-border p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-6 text-muted-foreground flex items-center gap-2">
              <X className="w-5 h-5" />
              {language === 'de' ? 'Das passt nicht, wenn:' : 'This is not a good fit if:'}
            </h3>
            <div className="space-y-4">
              {notFit.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{language === 'de' ? item.condition.de : item.condition.en}</span>
                  </div>
                  <p className="text-xs text-accent ml-8">
                    → {language === 'de' ? 'Besser:' : 'Better fit:'} {language === 'de' ? item.alternative.de : item.alternative.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 7: FINAL CTA
// ============================================================================
const FinalCTASection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const steps = [
    { en: "We'll send you a data checklist (what we need)", de: 'Wir senden dir eine Daten-Checkliste (was wir brauchen)' },
    { en: 'You share data (4-6 hours)', de: 'Du teilst Daten (4-6 Stunden)' },
    { en: 'We analyze your GTM (6 dimensions)', de: 'Wir analysieren dein GTM (6 Dimensionen)' },
    { en: 'You get GTM Effectiveness Report (20-30 pages, 3-5 days)', de: 'Du erhältst GTM Effectiveness Report (20-30 Seiten, 3-5 Tage)' },
  ];

  const faqs = [
    { q: { en: 'How long does GTM review take?', de: 'Wie lange dauert das GTM Review?' }, a: { en: '3-5 days (from data sharing to GTM Effectiveness Report)', de: '3-5 Tage (vom Daten-Sharing bis zum GTM Effectiveness Report)' } },
    { q: { en: "What's the investment?", de: 'Was ist das Investment?' }, a: { en: '€3.9K (Base) or €5.9K (Base + Execution Bridge)', de: '€3.9K (Base) oder €5.9K (Base + Execution Bridge)' } },
    { q: { en: 'What data do you need?', de: 'Welche Daten braucht ihr?' }, a: { en: 'GTM metrics (CAC, win rate, sales cycle), customer data (ICP, segments), sales data (pipeline, conversion rates), marketing data (channels, campaigns)', de: 'GTM-Metriken (CAC, Win Rate, Sales Cycle), Kundendaten (ICP, Segmente), Sales-Daten (Pipeline, Conversion Rates), Marketing-Daten (Kanäle, Kampagnen)' } },
    { q: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' }, a: { en: "Yes. We'll connect you with a CEO who's used GTM review (same stage, same challenge).", de: 'Ja. Wir verbinden dich mit einem CEO, der GTM Review genutzt hat (gleiche Stage, gleiche Herausforderung).' } },
    { q: { en: "What's the ROI?", de: 'Was ist der ROI?' }, a: { en: 'Typical ROI is 10-30x (based on CAC reduction and growth acceleration).', de: 'Typischer ROI ist 10-30x (basierend auf CAC-Reduktion und Wachstumsbeschleunigung).' } },
    { q: { en: 'How is this different from hiring a consultant?', de: 'Wie unterscheidet sich das von einem Berater?' }, a: { en: 'Consultants take 4-6 weeks and cost €20K-€50K. We deliver in 3-5 days for €3.9K-€5.9K with McKinsey-level quality.', de: 'Berater brauchen 4-6 Wochen und kosten €20K-€50K. Wir liefern in 3-5 Tagen für €3.9K-€5.9K mit McKinsey-Level Qualität.' } },
  ];

  return (
    <section
      id="final-cta"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Bereit für GTM Clarity?' : 'Ready to Get GTM Clarity?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de' ? "Das passiert als Nächstes." : "Here's what happens next."}
          </p>
        </div>

        {/* Step 1: Request Review */}
        <div className="bg-accent/10 border-2 border-accent/30 p-8 rounded-lg mb-8 max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-4 text-foreground">
            {language === 'de' ? 'Schritt 1: GTM Review anfragen (€3.9K)' : 'Step 1: Request GTM Review (€3.9K)'}
          </h3>
          <p className="text-muted-foreground mb-6">
            {language === 'de'
              ? 'Klicke den Button, um dein GTM Effectiveness Review anzufragen:'
              : 'Click the button below to request your GTM Effectiveness Review:'}
          </p>
          <div className="space-y-2 mb-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-accent">{index + 1}</span>
                </div>
                <span className="text-sm text-foreground">{language === 'de' ? step.de : step.en}</span>
              </div>
            ))}
          </div>
          <p className="text-sm font-bold text-accent mb-6">
            {language === 'de' ? 'Wisse genau, welchen GTM-Hebel du zuerst ziehen sollst.' : 'Know exactly which GTM lever to pull first.'}
          </p>
          <Button
            size="xl"
            className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => window.open('https://calendly.com/michel-scalingx/gtm-review', '_blank')}
          >
            {language === 'de' ? 'Review anfragen (€3.9K)' : 'Request Review (€3.9K)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Alternative CTA */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-4">
            {language === 'de' ? 'Nicht sicher, ob du GTM Review brauchst? Starte mit einem kostenlosen Call:' : 'Not sure if you need GTM review? Start with a free call:'}
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://calendly.com/michel-scalingx/inflection-call', '_blank')}
            className="border-2"
          >
            {language === 'de' ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book Free Inflection Call (30 min)'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-6 text-foreground text-center">FAQ</h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">
                  {language === 'de' ? faq.q.de : faq.q.en}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {language === 'de' ? faq.a.de : faq.a.en}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Final Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            {language === 'de' ? 'Noch Fragen? Email uns unter team@scalingx.io oder buche einen Call.' : 'Still have questions? Email us at team@scalingx.io or book a call.'}
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const GTMEffectivenessReview: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <OutcomeSection />
        <ProcessSection />
        <QualificationSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default GTMEffectivenessReview;
