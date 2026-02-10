import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallaxLayers } from '@/hooks/useParallax';
import TwinklingStars from '@/components/TwinklingStars';
import {
  ArrowRight,
  ChevronDown,
  Check,
  X,
  Zap,
  BarChart3,
  Target,
  Users,
  Clock,
  FileText,
  MessageCircle,
  Shield,
  Settings,
  Rocket,
  TrendingUp,
  DollarSign,
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
    { value: '+30-50pp', label: { en: 'Rule of 40', de: 'Rule of 40' }, sublabel: { en: '15-25% → 50-70%', de: '15-25% → 50-70%' } },
    { value: '+100-200%', label: { en: 'ARR Growth', de: 'ARR Growth' }, sublabel: { en: '80-120% → 180-300%', de: '80-120% → 180-300%' } },
    { value: '-60-80%', label: { en: 'Burn Multiple', de: 'Burn Multiple' }, sublabel: { en: '2.5-4.0 → 0.5-1.0', de: '2.5-4.0 → 0.5-1.0' } },
  ];

  const trustBadges = [
    { icon: Shield, label: { en: '2 of 3 Outcomes Guaranteed (or 50% Refund)', de: '2 von 3 Ergebnissen garantiert (oder 50% Rückerstattung)' } },
    { icon: Clock, label: { en: '12-Month Level Transition', de: '12-Monats-Level-Transition' } },
    { icon: MessageCircle, label: { en: 'Reference Calls Available', de: 'Referenzgespräche möglich' } },
  ];

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="dark-section relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise pt-20"
    >
      {/* Deep Space Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E] transition-transform duration-100"
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
              <span className="text-foreground font-medium">Accelerate Sustainable Growth</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Badge */}
        <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Rocket className="w-4 h-4 mr-2" />
          Accelerate · 12 {language === 'de' ? 'Monate' : 'Months'} · €153K
        </Badge>

        {/* Headline */}
        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">Level 1 → Level 2:</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            Sustainable Growth Built
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Baue nachhaltiges Wachstum in 12 Monaten. Typische Ergebnisse: Rule of 40 +30-50pp, ARR Growth +100-200%, Burn Multiple -60-80% – mit 2 von 3 Ergebnissen garantiert.'
            : 'Build sustainable growth in 12 months. Typical outcomes: Rule of 40 +30-50pp, ARR Growth +100-200%, Burn Multiple -60-80%—with 2 of 3 outcomes guaranteed.'}
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
            onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
          >
            {language === 'de' ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book Free Inflection Call (30 min)'}
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
    { en: 'Low Rule of 40: 15-25% (benchmark: 50%+), growth without profitability', de: 'Niedrige Rule of 40: 15-25% (Benchmark: 50%+), Wachstum ohne Profitabilität' },
    { en: 'High burn multiple: 2.5-4.0 (benchmark: <1.5), burning too much per ARR', de: 'Hoher Burn Multiple: 2.5-4.0 (Benchmark: <1.5), zu viel Burn pro ARR' },
    { en: 'Inefficient growth: 80-120% YoY but margin -20%, not sustainable', de: 'Ineffizientes Wachstum: 80-120% YoY aber Marge -20%, nicht nachhaltig' },
    { en: 'Board pressure: "When will we see a path to profitability?"', de: 'Board Pressure: "Wann sehen wir einen Weg zur Profitabilität?"' },
    { en: "Series C risk: Can't raise next round without efficient growth", de: 'Series C Risiko: Kann nächste Runde nicht raisen ohne effizientes Wachstum' },
  ];

  const beforeAfter = {
    before: [
      { metric: 'Rule of 40', value: '15-25%' },
      { metric: 'ARR Growth', value: '80-120% YoY' },
      { metric: 'Burn Multiple', value: '2.5-4.0' },
      { metric: 'θ_index', value: '0.2-0.5 (Level 1)' },
    ],
    after: [
      { metric: 'Rule of 40', value: '50-70%' },
      { metric: 'ARR Growth', value: '180-300% YoY' },
      { metric: 'Burn Multiple', value: '0.5-1.0' },
      { metric: 'θ_index', value: '0.5-0.8 (Level 2)' },
    ],
  };

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
            {language === 'de' ? 'Dein Wachstum ist ineffizient — und nicht nachhaltig' : 'Your Growth Is Inefficient—And Unsustainable'}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Deine Rule of 40 liegt bei 15-25% (Benchmark: 50%+). Dein Wachstum ist 80-120% YoY aber unprofitabel (Marge -20%). Dein Burn Multiple liegt bei 2.5-4.0 (Benchmark: <1.5). Und das Schlimmste—dein Board fragt: "Wann sehen wir einen Weg zur Profitabilität?"'
              : 'Your Rule of 40 is 15-25% (benchmark: 50%+). Your growth is 80-120% YoY but unprofitable (margin -20%). Your burn multiple is 2.5-4.0 (benchmark: <1.5). And worst of all—your board is asking: "When will we see a path to profitability?"'}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Du hast die offensichtlichen Fixes ausprobiert: Kosten senken, CAC optimieren, Retention verbessern. Aber nichts funktioniert. Denn das Problem ist nicht eine Metrik—es ist dein gesamtes Growth-Modell. Du brauchst Level Transition.'
              : "You've tried the obvious fixes: cutting costs, optimizing CAC, improving retention. But nothing is working. Because the problem isn't one metric—it's your entire growth model. You need Level Transition."}
          </p>
        </div>

        {/* Symptoms Checklist */}
        <div className="max-w-2xl mx-auto mb-16">
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
                  <Check className="w-4 h-4 text-destructive" />
                </div>
                <span className="text-sm text-foreground">
                  {language === 'de' ? symptom.de : symptom.en}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Before/After Visual */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Before */}
          <div className="bg-destructive/10 border-2 border-destructive/30 p-6 rounded-lg">
            <h4 className="text-sm font-bold uppercase tracking-widest text-destructive mb-4 text-center">
              {language === 'de' ? 'Vorher (Level 1: Ineffizient)' : 'Before (Level 1: Inefficient)'}
            </h4>
            <div className="space-y-4">
              {beforeAfter.before.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{item.metric}</span>
                  <span className="font-bold text-destructive">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg">
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-4 text-center">
              {language === 'de' ? 'Nachher (Level 2: Nachhaltig)' : 'After (Level 2: Sustainable)'}
            </h4>
            <div className="space-y-4">
              {beforeAfter.after.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{item.metric}</span>
                  <span className="font-bold text-accent">{item.value}</span>
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
// SECTION 3: SOLUTION
// ============================================================================
const SolutionSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const capabilities = [
    {
      icon: Target,
      title: { en: 'C₁ Strategy', de: 'C₁ Strategy' },
      items: [
        { en: 'Sustainable Growth Strategy (vision, roadmap, investment)', de: 'Sustainable Growth Strategy (Vision, Roadmap, Investment)' },
        { en: 'Rule of 40 Framework (how to balance growth + profitability)', de: 'Rule of 40 Framework (wie man Growth + Profitabilität balanciert)' },
        { en: 'Efficient Growth Metrics (new KPIs for sustainable growth)', de: 'Efficient Growth Metrics (neue KPIs für nachhaltiges Wachstum)' },
        { en: 'Growth Governance (who owns what)', de: 'Growth Governance (wer owned was)' },
      ],
    },
    {
      icon: Settings,
      title: { en: 'C₂ Setup', de: 'C₂ Setup' },
      items: [
        { en: 'Efficient Growth Infrastructure (data, APIs, platforms)', de: 'Efficient Growth Infrastruktur (Daten, APIs, Plattformen)' },
        { en: 'AI-Powered Tools (CAC optimization, churn prediction, pricing)', de: 'AI-Powered Tools (CAC Optimization, Churn Prediction, Pricing)' },
        { en: 'Growth Architecture (how systems integrate)', de: 'Growth Architecture (wie Systeme integrieren)' },
        { en: 'Growth Team (hiring, training, retention)', de: 'Growth Team (Hiring, Training, Retention)' },
      ],
    },
    {
      icon: Zap,
      title: { en: 'C₃ Execution', de: 'C₃ Execution' },
      items: [
        { en: 'Efficient GTM (reduce CAC, improve LTV/CAC)', de: 'Efficient GTM (CAC reduzieren, LTV/CAC verbessern)' },
        { en: 'Profitable Product (improve margins, reduce COGS)', de: 'Profitable Product (Margen verbessern, COGS reduzieren)' },
        { en: 'Retention-First CS (reduce churn, improve NRR)', de: 'Retention-First CS (Churn reduzieren, NRR verbessern)' },
      ],
    },
    {
      icon: Users,
      title: { en: 'C₄ Operationalization', de: 'C₄ Operationalization' },
      items: [
        { en: 'Efficient Growth Culture (mindset shift, not just metrics)', de: 'Efficient Growth Culture (Mindset Shift, nicht nur Metriken)' },
        { en: 'Efficient Growth Processes (workflows, automation, systems)', de: 'Efficient Growth Processes (Workflows, Automation, Systeme)' },
        { en: 'Rule of 40 Measurement (how to track progress)', de: 'Rule of 40 Measurement (wie man Fortschritt trackt)' },
      ],
    },
  ];

  const quarters = [
    {
      number: 'Q1',
      title: { en: 'Foundation', de: 'Foundation' },
      timeline: { en: 'Months 1-3', de: 'Monate 1-3' },
      items: [
        { en: 'Sustainable Growth Strategy (vision, roadmap, investment)', de: 'Sustainable Growth Strategy (Vision, Roadmap, Investment)' },
        { en: 'Rule of 40 Framework (how to balance growth + profitability)', de: 'Rule of 40 Framework (wie man Growth + Profitabilität balanciert)' },
        { en: 'Efficient Growth Setup (infrastructure, tools, architecture)', de: 'Efficient Growth Setup (Infrastruktur, Tools, Architektur)' },
        { en: 'Growth Culture (mindset shift, not just metrics)', de: 'Growth Culture (Mindset Shift, nicht nur Metriken)' },
      ],
      deliverable: { en: 'Sustainable Growth Foundation (strategy + setup complete)', de: 'Sustainable Growth Foundation (Strategy + Setup komplett)' },
      color: 'from-violet-500 to-purple-600',
    },
    {
      number: 'Q2-Q3',
      title: { en: 'Execution', de: 'Execution' },
      timeline: { en: 'Months 4-9', de: 'Monate 4-9' },
      items: [
        { en: 'Optimize GTM (CAC -60-80%, LTV/CAC +100-200%)', de: 'GTM optimieren (CAC -60-80%, LTV/CAC +100-200%)' },
        { en: 'Optimize Product (Gross Margin +20-30pp, ARPU +30-50%)', de: 'Product optimieren (Gross Margin +20-30pp, ARPU +30-50%)' },
        { en: 'Optimize CS (Churn -50-75%, NRR +30-50pp)', de: 'CS optimieren (Churn -50-75%, NRR +30-50pp)' },
        { en: 'Train leadership team (on sustainable growth operations)', de: 'Leadership Team trainieren (auf Sustainable Growth Operations)' },
      ],
      deliverable: { en: 'Sustainable Growth Engines (all 3 engines optimized)', de: 'Sustainable Growth Engines (alle 3 Engines optimiert)' },
      color: 'from-cyan-500 to-blue-600',
    },
    {
      number: 'Q4',
      title: { en: 'Optimization', de: 'Optimization' },
      timeline: { en: 'Months 10-12', de: 'Monate 10-12' },
      items: [
        { en: 'Rule of 40 Optimization (fine-tune growth + profitability balance)', de: 'Rule of 40 Optimization (Growth + Profitabilität Balance fine-tunen)' },
        { en: 'Series C Preparation (investor-ready materials)', de: 'Series C Preparation (Investor-ready Materials)' },
        { en: 'Metrics Validation (validate level transition θ_index 0.5-0.8)', de: 'Metrics Validation (Level Transition validieren θ_index 0.5-0.8)' },
        { en: 'Handoff (train leadership team on sustainable growth operations)', de: 'Handoff (Leadership Team auf Sustainable Growth Operations trainieren)' },
      ],
      deliverable: { en: 'Level 2 achieved (Sustainable Growth)', de: 'Level 2 erreicht (Sustainable Growth)' },
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <section
      id="solution-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-background" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Die Lösung' : 'The Solution'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Wie wir dein Sustainable Growth aufbauen' : 'How We Build Your Sustainable Growth'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Wir optimieren nicht nur eine Metrik. Wir transformieren dein gesamtes Growth-Modell – von Level 1 (AI-Powered) zu Level 2 (AI-Enabled) – damit du nachhaltiges Wachstum erreichst.'
              : "We don't just optimize one metric. We transform your entire growth model—from Level 1 (AI-Powered) to Level 2 (AI-Enabled)—so you achieve sustainable growth."}
          </p>
        </div>

        {/* Quarters Timeline */}
        <div className="space-y-8 mb-16">
          {quarters.map((quarter, index) => (
            <Collapsible key={index} defaultOpen={index === 0}>
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
                <CollapsibleTrigger className="w-full p-6 flex items-center gap-4 hover:bg-muted/30 transition-colors group">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${quarter.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {quarter.number}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-foreground">
                        {language === 'de' ? quarter.title.de : quarter.title.en}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {language === 'de' ? quarter.timeline.de : quarter.timeline.en}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {language === 'de' ? quarter.deliverable.de : quarter.deliverable.en}
                    </p>
                  </div>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-data-[state=open]:rotate-180 transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 pt-2 border-t border-border">
                    <ul className="space-y-2">
                      {quarter.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-sm">
                          <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {language === 'de' ? item.de : item.en}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">
            {language === 'de' ? 'Alle 4 Capabilities transformiert:' : 'All 4 Capabilities Transformed:'}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-card border-2 border-border p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <capability.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-bold text-foreground">
                    {language === 'de' ? capability.title.de : capability.title.en}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {capability.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                      <span>{language === 'de' ? item.de : item.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* What Makes This Different */}
        <div className="bg-accent/5 border-2 border-accent/20 p-6 rounded-lg">
          <h4 className="font-bold text-foreground mb-4 text-center">
            {language === 'de' ? 'Was uns unterscheidet:' : 'What makes this different:'}
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { en: 'Full level transition (Level 1 → Level 2)', de: 'Vollständige Level Transition (Level 1 → Level 2)' },
              { en: 'All 4 capabilities transformed (C₁ + C₂ + C₃ + C₄)', de: 'Alle 4 Capabilities transformiert (C₁ + C₂ + C₃ + C₄)' },
              { en: 'All 3 growth engines optimized (GTM + Product + CS)', de: 'Alle 3 Growth Engines optimiert (GTM + Product + CS)' },
              { en: '2 of 3 outcomes guaranteed (or 50% refund)', de: '2 von 3 Ergebnissen garantiert (oder 50% Refund)' },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
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

  const outcomes = [
    {
      metric: 'Rule of 40 +30-50pp',
      icon: TrendingUp,
      description: {
        en: 'Your Rule of 40 increases by 30-50 percentage points.',
        de: 'Deine Rule of 40 steigt um 30-50 Prozentpunkte.',
      },
      before: { en: '15-25% (growth 100% + margin -75%)', de: '15-25% (Wachstum 100% + Marge -75%)' },
      after: { en: '50-70% (growth 120% + margin -50%)', de: '50-70% (Wachstum 120% + Marge -50%)' },
      impact: { en: 'From "inefficient growth" to "sustainable growth"', de: 'Von "ineffizientem Wachstum" zu "nachhaltigem Wachstum"' },
      why: {
        en: 'We optimize all 3 growth engines for efficiency—which increases Rule of 40 by 30-50pp through improved CAC, margins, and retention.',
        de: 'Wir optimieren alle 3 Growth Engines auf Effizienz—was die Rule of 40 durch verbesserte CAC, Margen und Retention um 30-50pp steigert.',
      },
    },
    {
      metric: 'ARR Growth +100-200%',
      icon: BarChart3,
      description: {
        en: 'Your ARR growth rate increases by 100-200%.',
        de: 'Deine ARR Growth Rate steigt um 100-200%.',
      },
      before: { en: '80-120% YoY (inefficient growth)', de: '80-120% YoY (ineffizientes Wachstum)' },
      after: { en: '180-300% YoY (efficient growth)', de: '180-300% YoY (effizientes Wachstum)' },
      impact: { en: 'From "slow growth" to "efficient hypergrowth"', de: 'Von "langsamem Wachstum" zu "effizientem Hypergrowth"' },
      why: {
        en: 'We implement AI-enabled GTM and product—which increases ARR growth by 100-200% through efficient acquisition and retention.',
        de: 'Wir implementieren AI-enabled GTM und Product—was das ARR Growth durch effiziente Acquisition und Retention um 100-200% steigert.',
      },
    },
    {
      metric: 'Burn Multiple -60-80%',
      icon: DollarSign,
      description: {
        en: 'Your burn multiple decreases by 60-80%.',
        de: 'Dein Burn Multiple sinkt um 60-80%.',
      },
      before: { en: '2.5-4.0 (burning €2.5-€4 per €1 ARR)', de: '2.5-4.0 (€2.5-€4 Burn pro €1 ARR)' },
      after: { en: '0.5-1.0 (burning €0.5-€1 per €1 ARR)', de: '0.5-1.0 (€0.5-€1 Burn pro €1 ARR)' },
      impact: { en: 'From "unsustainable burn" to "efficient burn"', de: 'Von "nicht nachhaltigem Burn" zu "effizientem Burn"' },
      why: {
        en: 'We optimize all 3 growth engines for efficiency—which reduces burn multiple by 60-80% through reduced CAC, improved margins, and lower churn.',
        de: 'Wir optimieren alle 3 Growth Engines auf Effizienz—was den Burn Multiple durch reduzierte CAC, verbesserte Margen und niedrigere Churn um 60-80% senkt.',
      },
    },
  ];

  const realExample = {
    company: 'Series B SaaS, €22M ARR, 110 employees',
    challenge: {
      en: 'Rule of 40 = 18% (growth 110% + margin -92%), Burn Multiple 3.2, Board pressure',
      de: 'Rule of 40 = 18% (Wachstum 110% + Marge -92%), Burn Multiple 3.2, Board Pressure',
    },
    problems: {
      en: 'High CAC (€9K), low margins (35%), high churn (18%), inefficient growth',
      de: 'Hohe CAC (€9K), niedrige Margen (35%), hohe Churn (18%), ineffizientes Wachstum',
    },
    transformation: {
      en: 'Sustainable growth built (all 3 growth engines optimized) over 12 months',
      de: 'Sustainable Growth aufgebaut (alle 3 Growth Engines optimiert) über 12 Monate',
    },
    results: [
      { metric: 'Rule of 40', value: '+42pp (18% → 60%)' },
      { metric: 'ARR Growth', value: '+145% (110% → 255% YoY)' },
      { metric: 'Burn Multiple', value: '-72% (3.2 → 0.9)' },
      { metric: 'θ_index', value: '+0.4 (0.3 → 0.7)' },
    ],
  };

  return (
    <section
      id="outcome-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Das Ergebnis' : 'The Outcome'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Typische Ergebnisse (12 Monate)' : 'Typical Outcomes (12 Months)'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Das sind echte Ergebnisse von Unternehmen wie deinem (Series B-C, €10M-€50M ARR).'
              : 'These are real results from companies like yours (Series B-C, €10M-€50M ARR).'}
          </p>
        </div>

        {/* Outcome Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {outcomes.map((outcome, index) => (
            <Collapsible key={index} defaultOpen={index === 0}>
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden h-full">
                <CollapsibleTrigger className="w-full p-6 text-left hover:bg-muted/30 transition-colors group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <outcome.icon className="w-6 h-6 text-accent" />
                    </div>
                    <ChevronDown className="w-5 h-5 text-muted-foreground group-data-[state=open]:rotate-180 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient mb-2">{outcome.metric}</h3>
                  <p className="text-sm text-muted-foreground">
                    {language === 'de' ? outcome.description.de : outcome.description.en}
                  </p>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 border-t border-border pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{language === 'de' ? 'Vorher:' : 'Before:'}</span>
                      <span className="text-destructive font-medium">{language === 'de' ? outcome.before.de : outcome.before.en}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{language === 'de' ? 'Nachher:' : 'After:'}</span>
                      <span className="text-accent font-medium">{language === 'de' ? outcome.after.de : outcome.after.en}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{language === 'de' ? 'Impact:' : 'Impact:'}</span>
                      <span className="text-foreground font-medium">{language === 'de' ? outcome.impact.de : outcome.impact.en}</span>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        {language === 'de' ? outcome.why.de : outcome.why.en}
                      </p>
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>

        {/* Real Example */}
        <div className="bg-accent/5 border-2 border-accent/20 p-8 rounded-lg">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            {language === 'de' ? 'Echtes Beispiel:' : 'Real Example:'}
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'Unternehmen:' : 'Company:'}</p>
              <p className="font-medium text-foreground">{realExample.company}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'Herausforderung:' : 'Challenge:'}</p>
              <p className="font-medium text-foreground">{language === 'de' ? realExample.challenge.de : realExample.challenge.en}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'Growth-Probleme:' : 'Growth Problems:'}</p>
              <p className="font-medium text-foreground">{language === 'de' ? realExample.problems.de : realExample.problems.en}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'Transformation:' : 'Transformation:'}</p>
              <p className="font-medium text-foreground">{language === 'de' ? realExample.transformation.de : realExample.transformation.en}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-accent/20">
            {realExample.results.map((result, index) => (
              <div key={index} className="text-center">
                <p className="text-sm text-muted-foreground">{result.metric}</p>
                <p className="font-bold text-accent">{result.value}</p>
              </div>
            ))}
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

  const phases = [
    {
      title: { en: 'Foundation', de: 'Foundation' },
      timeline: { en: 'Q1 (Months 1-3)', de: 'Q1 (Monate 1-3)' },
      activities: [
        { en: 'Sustainable Growth Strategy (vision, roadmap, investment)', de: 'Sustainable Growth Strategy (Vision, Roadmap, Investment)' },
        { en: 'Rule of 40 Framework (how to balance growth + profitability)', de: 'Rule of 40 Framework (wie man Growth + Profitabilität balanciert)' },
        { en: 'Efficient Growth Setup (infrastructure, tools, architecture)', de: 'Efficient Growth Setup (Infrastruktur, Tools, Architektur)' },
        { en: 'Growth Culture (mindset shift, not just metrics)', de: 'Growth Culture (Mindset Shift, nicht nur Metriken)' },
      ],
      deliverables: [
        { en: 'Sustainable Growth Transformation Report (80-100 pages)', de: 'Sustainable Growth Transformation Report (80-100 Seiten)' },
        { en: 'Rule of 40 Roadmap (12-month plan)', de: 'Rule of 40 Roadmap (12-Monats-Plan)' },
        { en: 'Efficient Growth Foundation (strategy + setup complete)', de: 'Efficient Growth Foundation (Strategy + Setup komplett)' },
      ],
      commitment: { en: '30-40 hours', de: '30-40 Stunden' },
    },
    {
      title: { en: 'Execution', de: 'Execution' },
      timeline: { en: 'Q2-Q3 (Months 4-9)', de: 'Q2-Q3 (Monate 4-9)' },
      activities: [
        { en: 'Optimize all 3 growth engines (GTM, Product, CS)', de: 'Alle 3 Growth Engines optimieren (GTM, Product, CS)' },
        { en: 'Implement AI-enabled systems (CAC optimization, churn prediction, pricing)', de: 'AI-enabled Systeme implementieren (CAC Optimization, Churn Prediction, Pricing)' },
        { en: 'Train leadership team (on sustainable growth operations)', de: 'Leadership Team trainieren (auf Sustainable Growth Operations)' },
      ],
      deliverables: [
        { en: 'Sustainable Growth Engines (all 3 engines optimized)', de: 'Sustainable Growth Engines (alle 3 Engines optimiert)' },
        { en: 'AI-Enabled Systems (deployed, not just pilots)', de: 'AI-Enabled Systems (deployed, nicht nur Pilots)' },
        { en: 'Team training (leadership playbooks for sustainable growth)', de: 'Team Training (Leadership Playbooks für Sustainable Growth)' },
      ],
      commitment: { en: '40-60 hours', de: '40-60 Stunden' },
    },
    {
      title: { en: 'Optimization', de: 'Optimization' },
      timeline: { en: 'Q4 (Months 10-12)', de: 'Q4 (Monate 10-12)' },
      activities: [
        { en: 'Optimize Rule of 40 (fine-tune growth + profitability balance)', de: 'Rule of 40 optimieren (Growth + Profitabilität Balance fine-tunen)' },
        { en: 'Validate level transition (θ_index 0.2-0.5 → 0.5-0.8)', de: 'Level Transition validieren (θ_index 0.2-0.5 → 0.5-0.8)' },
        { en: 'Create Series C prep (how to present sustainable growth to investors)', de: 'Series C Prep erstellen (wie man Sustainable Growth Investoren präsentiert)' },
      ],
      deliverables: [
        { en: 'Metrics Dashboard (real-time tracking)', de: 'Metriken-Dashboard (Echtzeit-Tracking)' },
        { en: 'Validated Level 2 (with before/after data)', de: 'Validiertes Level 2 (mit Vorher/Nachher-Daten)' },
        { en: 'Series C Prep (investor-ready materials)', de: 'Series C Prep (Investor-ready Materials)' },
      ],
      commitment: { en: '20-30 hours', de: '20-30 Stunden' },
    },
  ];

  const metrics = [
    { name: 'Rule of 40', description: { en: '%', de: '%' } },
    { name: 'ARR Growth Rate', description: { en: '% YoY', de: '% YoY' } },
    { name: 'Burn Multiple', description: { en: '€ burned per €1 ARR', de: '€ Burn pro €1 ARR' } },
  ];

  return (
    <section
      id="process-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-background" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Der Prozess' : 'How We Work'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Der Accelerate-Prozess (Quartal für Quartal)' : 'The Accelerate Process (Quarter-by-Quarter)'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Transparente Timeline. Klare Deliverables. Messbare Ergebnisse.'
              : 'Transparent timeline. Clear deliverables. Measurable outcomes.'}
          </p>
        </div>

        {/* Process Timeline */}
        <div className="space-y-8 mb-16">
          {phases.map((phase, index) => (
            <div key={index} className="bg-card border-2 border-border rounded-lg p-6">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge variant="outline" className="text-sm font-bold">
                  {language === 'de' ? phase.timeline.de : phase.timeline.en}
                </Badge>
                <h3 className="text-xl font-bold text-foreground">
                  {language === 'de' ? phase.title.de : phase.title.en}
                </h3>
                <div className="ml-auto text-sm text-muted-foreground">
                  {language === 'de' ? 'Zeitaufwand (dein Team):' : 'Time commitment (your team):'}{' '}
                  <span className="font-medium text-foreground">{language === 'de' ? phase.commitment.de : phase.commitment.en}</span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    {language === 'de' ? 'Was wir tun:' : 'What we do:'}
                  </h4>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{language === 'de' ? activity.de : activity.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    {language === 'de' ? 'Was du bekommst:' : 'What you get:'}
                  </h4>
                  <ul className="space-y-2">
                    {phase.deliverables.map((deliverable, delIndex) => (
                      <li key={delIndex} className="flex items-start gap-2 text-sm">
                        <FileText className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground font-medium">{language === 'de' ? deliverable.de : deliverable.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outcome-Based Risk Sharing */}
        <div className="bg-accent/5 border-2 border-accent/20 p-8 rounded-lg">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            {language === 'de' ? 'Outcome-basiertes Risk Sharing:' : 'Outcome-Based Risk Sharing:'}
          </h3>

          {/* Primary Metrics */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 text-center">
              {language === 'de' ? 'Primäre Metriken:' : 'Primary Metrics:'}
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-card border border-border p-4 rounded-lg text-center">
                  <p className="font-bold text-foreground">{metric.name}</p>
                  <p className="text-sm text-muted-foreground">{language === 'de' ? metric.description.de : metric.description.en}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee */}
          <div className="bg-accent/10 border border-accent/30 p-6 rounded-lg text-center">
            <h4 className="text-lg font-bold text-accent mb-2">
              {language === 'de' ? '2 von 3 Ergebnissen garantiert:' : '2 of 3 Outcomes Guaranteed:'}
            </h4>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {[
                'Rule of 40 +30-50pp',
                'ARR Growth +100-200%',
                'Burn Multiple -60-80%',
              ].map((outcome, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {outcome}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              {language === 'de'
                ? 'Wenn wir 2 von 3 Ergebnissen nicht erreichen, bekommst du 50% Rückerstattung.'
                : "If we don't hit 2 of 3 outcomes, you get 50% refund."}
            </p>
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
    {
      title: { en: 'Your growth is inefficient and you need sustainable growth', de: 'Dein Wachstum ist ineffizient und du brauchst nachhaltiges Wachstum' },
      items: [
        { en: 'Rule of 40 is 15-25% (benchmark: 50%+)', de: 'Rule of 40 liegt bei 15-25% (Benchmark: 50%+)' },
        { en: 'Burn multiple is 2.5-4.0 (benchmark: <1.5)', de: 'Burn Multiple liegt bei 2.5-4.0 (Benchmark: <1.5)' },
        { en: 'You have 12 months to achieve sustainable growth', de: 'Du hast 12 Monate für nachhaltiges Wachstum' },
      ],
    },
    {
      title: { en: 'You need full growth model transformation', de: 'Du brauchst eine vollständige Growth-Modell Transformation' },
      items: [
        { en: 'Do you need to reduce CAC? (€8K → €3K-€4K?)', de: 'Musst du CAC reduzieren? (€8K → €3K-€4K?)' },
        { en: 'Do you need to improve margins? (40% → 70%+?)', de: 'Musst du Margen verbessern? (40% → 70%+?)' },
        { en: 'Do you need to reduce churn? (20% → <10%?)', de: 'Musst du Churn reduzieren? (20% → <10%?)' },
        { en: 'Do you need to balance growth + profitability? (Rule of 40 optimization?)', de: 'Musst du Growth + Profitabilität balancieren? (Rule of 40 Optimization?)' },
      ],
    },
    {
      title: { en: "You're Series B-C, €10M-€50M ARR", de: 'Du bist Series B-C, €10M-€50M ARR' },
      items: [
        { en: "You've raised Series B-C", de: 'Du hast Series B-C geraised' },
        { en: 'You have revenue (€10M-€50M ARR)', de: 'Du hast Umsatz (€10M-€50M ARR)' },
        { en: 'You have a team (50-200 people)', de: 'Du hast ein Team (50-200 Leute)' },
      ],
    },
    {
      title: { en: "You're willing to commit 12 months", de: 'Du bist bereit, 12 Monate zu committen' },
      items: [
        { en: 'You understand sustainable growth takes 12 months (not 90 days)', de: 'Du verstehst, dass nachhaltiges Wachstum 12 Monate dauert (nicht 90 Tage)' },
        { en: 'Your leadership team will commit 10-15 hours/week for 12 months', de: 'Dein Leadership-Team committed 10-15 Stunden/Woche für 12 Monate' },
        { en: "You'll give us full access (systems, data, team)", de: 'Du gibst uns vollen Zugang (Systeme, Daten, Team)' },
      ],
    },
    {
      title: { en: 'You have budget (€153K)', de: 'Du hast Budget (€153K)' },
      items: [
        { en: 'You can invest €153K (€12.75K/month) for 12 months', de: 'Du kannst €153K (€12.75K/Monat) für 12 Monate investieren' },
        { en: 'ROI is 10-20x (based on typical outcomes)', de: 'ROI ist 10-20x (basierend auf typischen Ergebnissen)' },
      ],
    },
  ];

  const notFit = [
    {
      title: { en: 'You only need to optimize one metric', de: 'Du musst nur eine Metrik optimieren' },
      description: { en: 'If you just need to fix CAC, margins, or churn (not full growth model), Accelerate is overkill', de: 'Wenn du nur CAC, Margen oder Churn fixen musst (nicht vollständiges Growth-Modell), ist Accelerate Overkill' },
      alternative: { en: 'Boost (90 days, €60K-€78K) for single metric optimization', de: 'Boost (90 Tage, €60K-€78K) für einzelne Metrik-Optimierung' },
    },
    {
      title: { en: 'Your Rule of 40 is already >40%', de: 'Deine Rule of 40 ist bereits >40%' },
      description: { en: "If your Rule of 40 is >40%, you don't need sustainable growth transformation", de: 'Wenn deine Rule of 40 bereits >40% ist, brauchst du keine Sustainable Growth Transformation' },
      alternative: { en: 'Boost (90 days, €60K-€78K) for growth optimization', de: 'Boost (90 Tage, €60K-€78K) für Growth Optimierung' },
    },
    {
      title: { en: "You're not ready for 12-month commitment", de: 'Du bist nicht bereit für ein 12-Monats-Commitment' },
      description: { en: "If you need results in 90 days (not 12 months), Accelerate won't work", de: 'Wenn du Ergebnisse in 90 Tagen brauchst (nicht 12 Monate), funktioniert Accelerate nicht' },
      alternative: { en: 'Boost (90 days, €60K-€78K) for faster results', de: 'Boost (90 Tage, €60K-€78K) für schnellere Ergebnisse' },
    },
  ];

  return (
    <section
      id="qualification-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Qualifikation' : "Who It's For"}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Ist das richtig für dich?' : 'Is This Right for You?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Accelerate: Sustainable Growth funktioniert am besten für Unternehmen in dieser Situation.'
              : 'Accelerate: Sustainable Growth works best for companies in this situation.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Good Fit */}
          <div className="bg-accent/5 border-2 border-accent/20 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-accent mb-6 flex items-center gap-2">
              <Check className="w-5 h-5" />
              {language === 'de' ? 'Das ist ein guter Fit wenn:' : 'This is a good fit if:'}
            </h3>
            <div className="space-y-6">
              {goodFit.map((item, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-foreground mb-2">
                    {index + 1}. {language === 'de' ? item.title.de : item.title.en}
                  </h4>
                  <ul className="space-y-1">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                        <span>{language === 'de' ? subItem.de : subItem.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Not a Fit */}
          <div className="bg-destructive/5 border-2 border-destructive/20 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-destructive mb-6 flex items-center gap-2">
              <X className="w-5 h-5" />
              {language === 'de' ? 'Das ist kein guter Fit wenn:' : 'This is not a good fit if:'}
            </h3>
            <div className="space-y-6">
              {notFit.map((item, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-foreground mb-2">
                    {index + 1}. {language === 'de' ? item.title.de : item.title.en}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {language === 'de' ? item.description.de : item.description.en}
                  </p>
                  <p className="text-sm text-accent">
                    <span className="font-medium">{language === 'de' ? 'Besserer Fit:' : 'Better fit:'}</span>{' '}
                    {language === 'de' ? item.alternative.de : item.alternative.en}
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
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);

  const faqs = [
    {
      question: { en: 'How long does Accelerate take?', de: 'Wie lange dauert Accelerate?' },
      answer: { en: '12 months (4 quarters, phased implementation)', de: '12 Monate (4 Quartale, phasenweise Implementierung)' },
    },
    {
      question: { en: "What's the investment?", de: 'Was ist das Investment?' },
      answer: { en: '€153K (€12.75K/month, stage-agnostic)', de: '€153K (€12.75K/Monat, stage-agnostisch)' },
    },
    {
      question: { en: "What if it doesn't work?", de: 'Was, wenn es nicht funktioniert?' },
      answer: {
        en: "We guarantee 2 of 3 outcomes (Rule of 40 +30-50pp, ARR Growth +100-200%, Burn Multiple -60-80%). If we don't hit 2 of 3, you get 50% refund.",
        de: 'Wir garantieren 2 von 3 Ergebnissen (Rule of 40 +30-50pp, ARR Growth +100-200%, Burn Multiple -60-80%). Wenn wir 2 von 3 nicht erreichen, bekommst du 50% Rückerstattung.',
      },
    },
    {
      question: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' },
      answer: {
        en: "Yes. We'll connect you with a CEO who's achieved Level 2 with us (same stage, same challenge).",
        de: 'Ja. Wir verbinden dich mit einem CEO, der Level 2 mit uns erreicht hat (gleiche Stage, gleiche Challenge).',
      },
    },
    {
      question: { en: "What's the ROI?", de: 'Was ist der ROI?' },
      answer: {
        en: 'Typical ROI is 10-20x (based on valuation increase and fundraising success over 12 months).',
        de: 'Typischer ROI ist 10-20x (basierend auf Bewertungssteigerung und Fundraising-Erfolg über 12 Monate).',
      },
    },
    {
      question: { en: 'How is this different from Boost?', de: 'Wie unterscheidet sich das von Boost?' },
      answer: {
        en: 'Boost (90 days, €60K-€78K) optimizes 1 growth engine. Accelerate (12 months, €153K) transforms all 3 growth engines + achieves level transition (Level 1 → Level 2).',
        de: 'Boost (90 Tage, €60K-€78K) optimiert 1 Growth Engine. Accelerate (12 Monate, €153K) transformiert alle 3 Growth Engines + erreicht Level Transition (Level 1 → Level 2).',
      },
    },
  ];

  const steps = [
    {
      title: { en: 'Book a Free Inflection Call (30 min)', de: 'Kostenloses Inflection Call buchen (30 Min.)' },
      description: {
        en: "In 30 minutes, we'll assess your growth efficiency (Rule of 40, burn multiple?), show you exactly how we'd build sustainable growth (with examples), and give you a clear recommendation (Accelerate, Boost, or DIY).",
        de: 'In 30 Minuten bewerten wir deine Growth-Effizienz (Rule of 40, Burn Multiple?), zeigen dir genau, wie wir Sustainable Growth aufbauen würden (mit Beispielen), und geben dir eine klare Empfehlung (Accelerate, Boost, oder DIY).',
      },
    },
    {
      title: { en: 'Decide If Accelerate Is Right for You', de: 'Entscheide, ob Accelerate richtig für dich ist' },
      description: {
        en: "After the Inflection Call, you'll know what your growth efficiency is, how we'd build sustainable growth, what outcomes to expect, and whether Accelerate is the right fit.",
        de: 'Nach dem Inflection Call weißt du, wie deine Growth-Effizienz ist, wie wir Sustainable Growth aufbauen würden, welche Ergebnisse zu erwarten sind, und ob Accelerate der richtige Fit ist.',
      },
    },
  ];

  return (
    <section
      id="final-cta"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-background" />

      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Nächste Schritte' : 'Next Steps'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Bereit, dein Sustainable Growth aufzubauen?' : 'Ready to Build Your Sustainable Growth?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de' ? 'So geht es weiter.' : "Here's what happens next."}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-card border-2 border-border p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-accent">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {language === 'de' ? step.title.de : step.title.en}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'de' ? step.description.de : step.description.en}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="text-center mb-16">
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-12 py-8 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => setIsBookingModalOpen(true)}
          >
            {language === 'de' ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book Free Inflection Call (30 min)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            {language === 'de' ? 'Kein Pitch. Kein Druck. Nur Klarheit.' : 'No pitch. No pressure. Just clarity.'}
          </p>
        </div>

        {/* Alternative */}
        <div className="bg-secondary/50 border-2 border-border p-6 rounded-lg mb-16 text-center">
          <h4 className="font-bold text-foreground mb-2">
            {language === 'de' ? 'Alternative: Mit einem Growth Efficiency Assessment starten' : 'Alternative: Start with a Growth Efficiency Assessment'}
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            {language === 'de'
              ? 'Noch nicht bereit für ein vollständiges Accelerate? Starte kleiner mit einem Growth Efficiency Assessment (1-2 Wochen, €3.9K-€5.9K).'
              : 'Not ready for a full Accelerate? Start smaller with a Growth Efficiency Assessment (1-2 weeks, €3.9K-€5.9K).'}
          </p>
          <Button variant="outline" onClick={() => setIsAssessmentModalOpen(true)}>
            {language === 'de' ? 'Growth Efficiency Assessment buchen' : 'Book Growth Efficiency Assessment'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">FAQ</h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">
                  {language === 'de' ? faq.question.de : faq.question.en}
                </AccordionTrigger>
                <AccordionContent>
                  {language === 'de' ? faq.answer.de : faq.answer.en}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Final subtext */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            {language === 'de'
              ? 'Noch Fragen? Schreib uns an team@scalingx.io oder buche direkt einen Call.'
              : 'Still have questions? Email us at team@scalingx.io or book a call.'}
          </p>
        </div>

        {/* Booking Modals */}
        <FilloutBookingModal
          formSlug="inflection-call"
          source="accelerate"
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
        />
        <FilloutBookingModal
          formSlug="inflection-call"
          source="accelerate"
          isOpen={isAssessmentModalOpen}
          onClose={() => setIsAssessmentModalOpen(false)}
          title={language === 'de' ? 'Growth Efficiency Assessment buchen' : 'Book Growth Efficiency Assessment'}
        />
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const AccelerateSustainableGrowth: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
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

export default AccelerateSustainableGrowth;
