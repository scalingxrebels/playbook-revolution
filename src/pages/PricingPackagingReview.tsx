import React, { useState } from 'react';
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
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
import {
  ArrowRight,
  ChevronDown,
  Check,
  X,
  Target,
  TrendingUp,
  DollarSign,
  Settings,
  BarChart3,
  Clock,
  FileText,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Layers,
  Percent,
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
    { value: '+90%', label: { en: 'Pricing Clarity', de: 'Pricing Clarity' }, sublabel: { en: 'Low → High', de: 'Niedrig → Hoch' } },
    { value: '+30-50%', label: { en: 'ARPU Roadmap', de: 'ARPU Roadmap' }, sublabel: { en: '€5K → €6.5K-€7.5K target', de: '€5K → €6.5K-€7.5K Ziel' } },
    { value: '+10-15pp', label: { en: 'Margin Roadmap', de: 'Margin Roadmap' }, sublabel: { en: '60% → 70-75% target', de: '60% → 70-75% Ziel' } },
  ];

  const trustBadges = [
    { icon: Clock, label: { en: '3-5 Days (Fast Turnaround)', de: '3-5 Tage (Schnelle Lieferung)' } },
    { icon: FileText, label: { en: 'Board-Ready Report (20-30 Pages)', de: 'Board-Ready Report (20-30 Seiten)' } },
    { icon: Shield, label: { en: 'Expert Analysis (McKinsey-Level)', de: 'Experten-Analyse (McKinsey-Level)' } },
  ];

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="dark-section relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise pt-20"
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
              <span className="text-foreground font-medium">Pricing & Packaging Review</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Badge */}
        <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <DollarSign className="w-4 h-4 mr-2" />
          Decision Support · 3-5 {language === 'de' ? 'Tage' : 'Days'} · €3.9K-€5.9K
        </Badge>

        {/* Headline */}
        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">{language === 'de' ? 'Expert Pricing Review—' : 'Expert Pricing Review—'}</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'In 3-5 Tagen' : 'In 3-5 Days'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Erhalte Experten-Analyse deines Pricing & Packaging in 3-5 Tagen. Typische Ergebnisse: Pricing Clarity +90%, ARPU Roadmap +30-50%, Margin Roadmap +10-15pp—mit Board-Ready Report.'
            : 'Get expert analysis of your pricing & packaging in 3-5 days. Typical outcomes: Pricing Clarity +90%, ARPU Roadmap +30-50%, Margin Roadmap +10-15pp—with board-ready report.'}
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
    { icon: DollarSign, en: 'Low ARPU: €5K (benchmark: €15K-€25K for AI-native)', de: 'Niedriger ARPU: €5K (Benchmark: €15K-€25K für AI-native)' },
    { icon: TrendingUp, en: 'Low margin: 60% (benchmark: 75-85% for AI-native)', de: 'Niedrige Margin: 60% (Benchmark: 75-85% für AI-native)' },
    { icon: Layers, en: "Unclear packaging: Customers don't see the value (3 tiers, all buy Tier 1)", de: 'Unklares Packaging: Kunden sehen den Wert nicht (3 Tiers, alle kaufen Tier 1)' },
    { icon: Percent, en: 'High discounting: 20-30% (benchmark: 0-10% for AI-native)', de: 'Hohe Rabatte: 20-30% (Benchmark: 0-10% für AI-native)' },
    { icon: Target, en: "No pricing clarity: Don't know if problem is value metric, packaging, or positioning", de: 'Keine Pricing Clarity: Weißt nicht, ob Problem bei Value Metric, Packaging oder Positioning liegt' },
  ];

  const costs = [
    { en: 'Destroys unit economics (ARPU stagnates, margin erodes)', de: 'Zerstört Unit Economics (ARPU stagniert, Margin erodiert)' },
    { en: "Limits growth potential (can't scale broken pricing)", de: 'Begrenzt Wachstumspotenzial (kann kaputtes Pricing nicht skalieren)' },
    { en: 'Weakens board confidence (board losing trust in monetization)', de: 'Schwächt Board-Vertrauen (Board verliert Vertrauen in Monetarisierung)' },
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
            {language === 'de' ? 'Dein Pricing ist kaputt—aber du weißt nicht warum' : "Your Pricing Is Broken—But You Don't Know Why"}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Dein ARPU liegt bei €5K (Benchmark: €15K-€25K für AI-native). Deine Gross Margin ist 60% (Benchmark: 75-85% für AI-native). Dein Packaging ist unklar (Kunden sehen den Wert nicht). Und das Schlimmste—du weißt nicht, ob das Problem beim Value Metric, Packaging oder Positioning liegt.'
              : "Your ARPU is €5K (benchmark: €15K-€25K for AI-native). Your gross margin is 60% (benchmark: 75-85% for AI-native). Your packaging is unclear (customers don't see the value). And worst of all—you don't know if the problem is your value metric, packaging, or positioning."}
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
              ? 'Das ist nicht nur eine Metrik. Jedes Quartal ohne Pricing Clarity:'
              : "This isn't just about pricing. Every quarter without pricing clarity:"}
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
            {language === 'de' ? 'Du brauchst Pricing Clarity. Schnell.' : 'You need pricing clarity. Fast.'}
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
    { icon: BarChart3, name: 'Value Metric', description: { en: 'Current metric, alternatives, benchmarks, recommendation', de: 'Aktuelles Metric, Alternativen, Benchmarks, Empfehlung' } },
    { icon: DollarSign, name: 'Pricing Model', description: { en: 'Flat-rate, per-user, usage-based effectiveness', de: 'Flat-Rate, Per-User, Usage-Based Effektivität' } },
    { icon: Layers, name: 'Packaging', description: { en: 'Tiers, value perception, benchmarks', de: 'Tiers, Wert-Wahrnehmung, Benchmarks' } },
    { icon: Target, name: 'Price Positioning', description: { en: 'Premium, mid-market, value positioning', de: 'Premium, Mid-Market, Value Positioning' } },
    { icon: Settings, name: 'Monetization Strategy', description: { en: 'Value capture, optimization', de: 'Value Capture, Optimierung' } },
  ];

  const days1to2Deliverables = [
    { en: 'Pricing & Packaging Report (20-30 pages, board-ready)', de: 'Pricing & Packaging Report (20-30 Seiten, board-ready)' },
    { en: 'Pricing Bottleneck Analysis (what\'s broken and why)', de: 'Pricing Bottleneck Analysis (was kaputt ist und warum)' },
    { en: 'Priority Matrix (which levers to fix first)', de: 'Priority Matrix (welche Hebel zuerst beheben)' },
    { en: 'Expert Recommendations (5-10 key actions)', de: 'Experten-Empfehlungen (5-10 Key Actions)' },
  ];

  const days3to5Deliverables = [
    { en: '90-Day Monetization Roadmap (week-by-week action plan)', de: '90-Tage Monetization Roadmap (Woche-für-Woche Aktionsplan)' },
    { en: 'Quick Wins List (first 30 days)', de: 'Quick Wins Liste (erste 30 Tage)' },
    { en: 'Long-Term Strategy (90 days)', de: 'Langfrist-Strategie (90 Tage)' },
    { en: 'Implementation Guide (how to execute)', de: 'Implementierungs-Guide (wie umsetzen)' },
  ];

  const differentiators = [
    { en: 'Expert analysis (McKinsey-level quality, not just data dump)', de: 'Experten-Analyse (McKinsey-Level Qualität, nicht nur Data Dump)' },
    { en: '5 dimensions (value metric, pricing model, packaging, positioning, monetization)', de: '5 Dimensionen (Value Metric, Pricing Model, Packaging, Positioning, Monetization)' },
    { en: 'Board-ready report (20-30 pages, investor-grade quality)', de: 'Board-Ready Report (20-30 Seiten, Investor-Grade Qualität)' },
    { en: 'Fast turnaround (3-5 days, not 2-4 weeks)', de: 'Schnelle Lieferung (3-5 Tage, nicht 2-4 Wochen)' },
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
            {language === 'de' ? 'So funktioniert Pricing & Packaging Review' : 'How Pricing & Packaging Review Works'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Wir analysieren nicht nur Preise. Wir führen eine Experten-Pricing-Analyse durch—aus McKinsey-Level Perspektive—damit du genau weißt, was du zuerst beheben musst.'
              : "We don't just analyze prices. We conduct expert pricing analysis—from McKinsey-level perspective—so you know exactly what to fix first."}
          </p>
        </div>

        {/* 5 Dimensions Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">
            {language === 'de' ? '5 Pricing-Dimensionen' : '5 Pricing Dimensions'}
          </h3>
          <div className="grid md:grid-cols-5 gap-4">
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
          {/* Days 1-2 */}
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">{language === 'de' ? 'Tage 1-2: Pricing-Analyse' : 'Days 1-2: Pricing Analysis'}</h4>
                <p className="text-sm text-accent">€3.9K</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {language === 'de'
                ? 'Wir analysieren dein Pricing & Packaging über 5 Dimensionen.'
                : 'We analyze your pricing & packaging across 5 dimensions.'}
            </p>
            <div className="space-y-2">
              {days1to2Deliverables.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{language === 'de' ? item.de : item.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Days 3-5 (Optional) */}
          <div className="bg-muted/50 border-2 border-border p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">{language === 'de' ? 'Tage 3-5: 90-Tage Monetization Roadmap' : 'Days 3-5: 90-Day Monetization Roadmap'}</h4>
                <p className="text-sm text-muted-foreground">{language === 'de' ? 'Optional +€2K' : 'Optional +€2K'}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {language === 'de'
                ? 'Wir erstellen deine 90-Tage Monetization Roadmap.'
                : 'We create your 90-day monetization roadmap.'}
            </p>
            <div className="space-y-2">
              {days3to5Deliverables.map((item, index) => (
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
      value: '+90%',
      label: { en: 'Pricing Clarity', de: 'Pricing Clarity' },
      before: { en: "Low (don't know what to fix)", de: 'Niedrig (weiß nicht, was zu fixen)' },
      after: { en: 'High (clear roadmap, priorities clear)', de: 'Hoch (klare Roadmap, Prioritäten klar)' },
      description: { en: 'We analyze 5 pricing dimensions—which increases pricing clarity by 90% through expert analysis and priority setting.', de: 'Wir analysieren 5 Pricing-Dimensionen—was Pricing Clarity um 90% erhöht durch Experten-Analyse und Prioritätensetzung.' },
    },
    {
      value: '+30-50%',
      label: { en: 'ARPU Roadmap', de: 'ARPU Roadmap' },
      before: { en: '€5K (no clear path to increase)', de: '€5K (kein klarer Weg zur Steigerung)' },
      after: { en: '€6.5K-€7.5K target (clear 30-50% increase path)', de: '€6.5K-€7.5K Ziel (klarer 30-50% Steigerungspfad)' },
      description: { en: 'We identify ARPU drivers—which creates 30-50% ARPU roadmap through value metric optimization, packaging improvement, and price positioning.', de: 'Wir identifizieren ARPU-Treiber—was 30-50% ARPU Roadmap erstellt durch Value Metric Optimierung, Packaging Improvement und Price Positioning.' },
    },
    {
      value: '+10-15pp',
      label: { en: 'Margin Roadmap', de: 'Margin Roadmap' },
      before: { en: '60% (no clear path to increase)', de: '60% (kein klarer Weg zur Steigerung)' },
      after: { en: '70-75% target (clear 10-15pp increase path)', de: '70-75% Ziel (klarer 10-15pp Steigerungspfad)' },
      description: { en: 'We identify margin drivers—which creates 10-15pp margin roadmap through pricing optimization, packaging improvement, and discounting reduction.', de: 'Wir identifizieren Margin-Treiber—was 10-15pp Margin Roadmap erstellt durch Pricing Optimierung, Packaging Improvement und Discounting Reduktion.' },
    },
  ];

  const caseStudy = {
    company: 'Series A SaaS, €10M ARR, 55 employees',
    challenge: { en: 'ARPU €4.5K, Gross Margin 58%, Packaging unclear, Discounting 25%', de: 'ARPU €4.5K, Gross Margin 58%, Packaging unklar, Discounting 25%' },
    problems: { en: 'Wrong value metric (per-user vs. usage-based), unclear packaging (3 tiers, all buy Tier 1), low price positioning (€4.5K vs. €15K competitors)', de: 'Falsches Value Metric (Per-User vs. Usage-Based), unklares Packaging (3 Tiers, alle kaufen Tier 1), niedriges Price Positioning (€4.5K vs. €15K Wettbewerber)' },
    results: [
      { metric: 'Pricing Clarity', value: '+95% (low → high)' },
      { metric: 'ARPU Roadmap', value: '+45% (€4.5K → €6.5K target)' },
      { metric: 'Margin Roadmap', value: '+12pp (58% → 70% target)' },
      { metric: 'Discounting Roadmap', value: '-60% (25% → 10% target)' },
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
              <p className="font-bold text-foreground mb-2">{language === 'de' ? 'Pricing-Probleme:' : 'Pricing Problems:'}</p>
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
    { en: 'Request data (pricing data, customer data, competitor data, etc.)', de: 'Daten anfragen (Pricing-Daten, Kundendaten, Wettbewerberdaten, etc.)' },
    { en: 'Analyze 5 pricing dimensions (value metric, pricing model, packaging, positioning, monetization)', de: '5 Pricing-Dimensionen analysieren (Value Metric, Pricing Model, Packaging, Positioning, Monetization)' },
    { en: "Identify pricing bottlenecks (what's broken?)", de: 'Pricing-Engpässe identifizieren (was ist kaputt?)' },
    { en: 'Create Pricing & Packaging Report (20-30 pages)', de: 'Pricing & Packaging Report erstellen (20-30 Seiten)' },
  ];

  const guarantees = [
    { en: 'Expert-grade quality (McKinsey-level analysis)', de: 'Experten-Grade Qualität (McKinsey-Level Analyse)' },
    { en: '5 dimensions analyzed (comprehensive pricing review)', de: '5 Dimensionen analysiert (umfassendes Pricing Review)' },
    { en: 'Fast turnaround (3-5 days, not 2-4 weeks)', de: 'Schnelle Lieferung (3-5 Tage, nicht 2-4 Wochen)' },
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
            {language === 'de' ? 'Der Pricing & Packaging Review Prozess' : 'The Pricing & Packaging Review Process'}
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
              {language === 'de' ? 'Tage 1-2: Pricing-Analyse' : 'Days 1-2: Pricing Analysis'}
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
              <strong>{language === 'de' ? 'Zeitaufwand (dein Team):' : 'Time commitment (your team):'}</strong> 2-4 {language === 'de' ? 'Stunden (Daten-Sharing, Q&A)' : 'hours (data sharing, Q&A)'}
            </p>
          </div>
        </div>

        {/* Pricing */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg text-center">
            <h4 className="font-bold text-foreground mb-2">{language === 'de' ? 'Base Package' : 'Base Package'}</h4>
            <div className="text-3xl font-bold text-gradient mb-4">€3.9K</div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Pricing & Packaging Report (20-30 pages)</li>
              <li>• 5 Dimensions analyzed</li>
              <li>• Expert recommendations</li>
              <li>• 3-5 days turnaround</li>
            </ul>
          </div>
          <div className="bg-muted/50 border-2 border-border p-6 rounded-lg text-center">
            <h4 className="font-bold text-foreground mb-2">+ Execution Bridge</h4>
            <div className="text-3xl font-bold text-muted-foreground mb-4">+€2K</div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• 90-Day Monetization Roadmap (week-by-week)</li>
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
    { en: "You have pricing problems but don't know what to fix first", de: 'Du hast Pricing-Probleme, aber weißt nicht, was du zuerst fixen sollst' },
    { en: 'Your ARPU is €5K-€10K, Gross Margin is 60-70%, High Discounting is 20-30%', de: 'Dein ARPU liegt bei €5K-€10K, Gross Margin bei 60-70%, hohe Rabatte bei 20-30%' },
    { en: 'You need expert pricing analysis (not hands-on implementation)', de: 'Du brauchst Experten-Pricing-Analyse (keine Hands-on Implementierung)' },
    { en: "You're Series A-B, €5M-€30M ARR, 30-150 people", de: 'Du bist Series A-B, €5M-€30M ARR, 30-150 Mitarbeiter' },
    { en: 'You have budget (€3.9K-€5.9K)', de: 'Du hast Budget (€3.9K-€5.9K)' },
  ];

  const notFit = [
    { condition: { en: 'You need hands-on pricing implementation (not just analysis)', de: 'Du brauchst Hands-on Pricing-Implementierung (nicht nur Analyse)' }, alternative: { en: 'Power Up: Pricing Power (€23.6K) or Boost: Pricing Dominance (€60K-€78K)', de: 'Power Up: Pricing Power (€23.6K) oder Boost: Pricing Dominance (€60K-€78K)' } },
    { condition: { en: 'You already know what to fix (just need execution)', de: 'Du weißt bereits, was du fixen musst (brauchst nur Execution)' }, alternative: { en: 'Power Up: Pricing Power (€23.6K) for fast execution', de: 'Power Up: Pricing Power (€23.6K) für schnelle Execution' } },
    { condition: { en: 'You need full pricing transformation (not just review)', de: 'Du brauchst volle Pricing-Transformation (nicht nur Review)' }, alternative: { en: 'Boost: Pricing Dominance (€60K-€78K)', de: 'Boost: Pricing Dominance (€60K-€78K)' } },
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
              ? 'Pricing & Packaging Review funktioniert am besten für Unternehmen in dieser Situation.'
              : 'Pricing & Packaging Review works best for companies in this situation.'}
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
const FinalCTASection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const steps = [
    { en: "We'll send you a data checklist (what we need)", de: 'Wir senden dir eine Daten-Checkliste (was wir brauchen)' },
    { en: 'You share data (2-4 hours)', de: 'Du teilst Daten (2-4 Stunden)' },
    { en: 'We analyze your pricing (5 dimensions)', de: 'Wir analysieren dein Pricing (5 Dimensionen)' },
    { en: 'You get Pricing & Packaging Report (20-30 pages, 3-5 days)', de: 'Du erhältst Pricing & Packaging Report (20-30 Seiten, 3-5 Tage)' },
  ];

  const faqs = [
    { q: { en: 'How long does pricing review take?', de: 'Wie lange dauert das Pricing Review?' }, a: { en: '3-5 days (from data sharing to Pricing & Packaging Report)', de: '3-5 Tage (vom Daten-Sharing bis zum Pricing & Packaging Report)' } },
    { q: { en: "What's the investment?", de: 'Was ist das Investment?' }, a: { en: '€3.9K (Base) or €5.9K (Base + Execution Bridge)', de: '€3.9K (Base) oder €5.9K (Base + Execution Bridge)' } },
    { q: { en: 'What data do you need?', de: 'Welche Daten braucht ihr?' }, a: { en: 'Pricing data (current prices, tiers, discounts), customer data (ARPU, segments, churn), competitor data (pricing, packaging, positioning)', de: 'Pricing-Daten (aktuelle Preise, Tiers, Rabatte), Kundendaten (ARPU, Segmente, Churn), Wettbewerberdaten (Pricing, Packaging, Positioning)' } },
    { q: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' }, a: { en: "Yes. We'll connect you with a CEO who's used Pricing Review (same stage, same challenge).", de: 'Ja. Wir verbinden dich mit einem CEO, der Pricing Review genutzt hat (gleiche Stage, gleiche Herausforderung).' } },
    { q: { en: "What's the ROI?", de: 'Was ist der ROI?' }, a: { en: 'Typical ROI is 10-30x (based on ARPU increase and margin improvement).', de: 'Typischer ROI ist 10-30x (basierend auf ARPU-Steigerung und Margin-Verbesserung).' } },
    { q: { en: 'How is this different from hiring a consultant?', de: 'Wie unterscheidet sich das von einem Berater?' }, a: { en: 'Consultants take 2-4 weeks and cost €20K-€50K. We deliver in 3-5 days for €3.9K-€5.9K with McKinsey-level quality.', de: 'Berater brauchen 2-4 Wochen und kosten €20K-€50K. Wir liefern in 3-5 Tagen für €3.9K-€5.9K mit McKinsey-Level Qualität.' } },
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
            {language === 'de' ? 'Bereit für Pricing Clarity?' : 'Ready to Get Pricing Clarity?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de' ? "Das passiert als Nächstes." : "Here's what happens next."}
          </p>
        </div>

        {/* Step 1: Request Review */}
        <div className="bg-accent/10 border-2 border-accent/30 p-8 rounded-lg mb-8 max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-4 text-foreground">
            {language === 'de' ? 'Schritt 1: Pricing Review anfragen (€3.9K)' : 'Step 1: Request Pricing Review (€3.9K)'}
          </h3>
          <p className="text-muted-foreground mb-6">
            {language === 'de'
              ? 'Klicke den Button, um dein Pricing & Packaging Review anzufragen:'
              : 'Click the button below to request your Pricing & Packaging Review:'}
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
            {language === 'de' ? 'Wisse genau, welchen Pricing-Hebel du zuerst ziehen sollst.' : 'Know exactly which pricing lever to pull first.'}
          </p>
          <Button
            size="xl"
            className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={onOpenBooking}
          >
            {language === 'de' ? 'Review anfragen (€3.9K)' : 'Request Review (€3.9K)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Alternative CTA */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-4">
            {language === 'de' ? 'Nicht sicher, ob du Pricing Review brauchst? Starte mit einem kostenlosen Call:' : 'Not sure if you need pricing review? Start with a free call:'}
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={onOpenBooking}
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
const PricingPackagingReview: React.FC = () => {
  const { language } = useLanguage();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

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
        <FinalCTASection onOpenBooking={() => setIsBookingModalOpen(true)} />
      </main>
      <FilloutBookingModal
        formSlug="inflection-call"
        source="pricing-review"
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title={language === 'de' ? 'Inflection Call buchen' : 'Book Inflection Call'}
      />
      <Footer />
    </div>
  );
};

export default PricingPackagingReview;
