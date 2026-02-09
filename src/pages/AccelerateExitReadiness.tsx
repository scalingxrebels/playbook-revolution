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
    { value: '+60-80pp', label: { en: 'Board Confidence', de: 'Board Confidence' }, sublabel: { en: '40-60% → 85-95%', de: '40-60% → 85-95%' } },
    { value: '+200-400%', label: { en: 'Valuation Premium', de: 'Valuation Premium' }, sublabel: { en: '3-5x → 10-15x ARR', de: '3-5x → 10-15x ARR' } },
    { value: '0% → 100%', label: { en: 'Exit Readiness', de: 'Exit Readiness' }, sublabel: { en: 'Not ready → Fully ready', de: 'Nicht bereit → Vollständig bereit' } },
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
              <span className="text-foreground font-medium">Accelerate Exit-Readiness</span>
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
            Exit-Ready Company Built
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Baue dein Exit-Ready Unternehmen in 12 Monaten. Typische Ergebnisse: Board Confidence +60-80pp, Valuation Premium +200-400%, Exit Readiness 0% → 100% – mit 2 von 3 Ergebnissen garantiert.'
            : 'Build your exit-ready company in 12 months. Typical outcomes: Board Confidence +60-80pp, Valuation Premium +200-400%, Exit Readiness 0% → 100%—with 2 of 3 outcomes guaranteed.'}
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
    { en: 'Low Board Confidence: 40-60% (benchmark: 85-95% for exit-ready)', de: 'Niedrige Board Confidence: 40-60% (Benchmark: 85-95% für exit-ready)' },
    { en: 'Low valuation multiple: 3-5x ARR (benchmark: 10-15x for AI-native)', de: 'Niedriges Bewertungsmultiple: 3-5x ARR (Benchmark: 10-15x für AI-native)' },
    { en: 'Not exit-ready: 0% exit readiness (benchmark: 100% for Series C+)', de: 'Nicht exit-ready: 0% Exit-Readiness (Benchmark: 100% für Series C+)' },
    { en: 'Board pressure: "When will we see a path to exit?"', de: 'Board Pressure: "Wann sehen wir einen Weg zum Exit?"' },
    { en: "Series C risk: Can't raise next round without exit-readiness", de: 'Series C Risiko: Kann nächste Runde nicht raisen ohne Exit-Readiness' },
  ];

  const beforeAfter = {
    before: [
      { metric: 'Board Confidence', value: '40-60%' },
      { metric: 'Valuation', value: '3-5x ARR' },
      { metric: 'Exit Readiness', value: '0%' },
      { metric: 'θ_index', value: '0.2-0.5 (Level 1)' },
    ],
    after: [
      { metric: 'Board Confidence', value: '85-95%' },
      { metric: 'Valuation', value: '10-15x ARR' },
      { metric: 'Exit Readiness', value: '100%' },
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
            {language === 'de' ? 'Dein Board verliert Vertrauen — und dein Exit ist gefährdet' : 'Your Board Is Losing Confidence—And Your Exit Is At Risk'}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Deine Board Confidence liegt bei 40-60% (Benchmark: 85-95% für exit-ready). Deine Bewertung liegt bei 3-5x ARR (Benchmark: 10-15x für AI-native). Deine Exit-Readiness liegt bei 0% (Benchmark: 100% für Series C+). Und das Schlimmste—dein Board fragt: "Wann sehen wir einen Weg zum Exit?"'
              : 'Your Board Confidence is 40-60% (benchmark: 85-95% for exit-ready). Your valuation is 3-5x ARR (benchmark: 10-15x for AI-native). Your exit readiness is 0% (benchmark: 100% for Series C+). And worst of all—your board is asking: "When will we see a path to exit?"'}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Du hast die offensichtlichen Fixes ausprobiert: Metriken verbessern, CFO einstellen, Board Workshops. Aber nichts funktioniert. Denn das Problem ist nicht eine Metrik—es ist dein gesamtes Governance-Modell. Du brauchst Level Transition.'
              : "You've tried the obvious fixes: improving metrics, hiring CFO, running board workshops. But nothing is working. Because the problem isn't one metric—it's your entire governance model. You need Level Transition."}
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
              {language === 'de' ? 'Vorher (Level 1: Nicht Exit-Ready)' : 'Before (Level 1: Not Exit-Ready)'}
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
              {language === 'de' ? 'Nachher (Level 2: Exit-Ready)' : 'After (Level 2: Exit-Ready)'}
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
        { en: 'Exit-Ready Strategy (vision, roadmap, investment)', de: 'Exit-Ready Strategy (Vision, Roadmap, Investment)' },
        { en: 'Board Framework (how board operates)', de: 'Board Framework (wie das Board arbeitet)' },
        { en: 'Investor Relations Strategy (how to communicate with investors)', de: 'Investor Relations Strategy (wie man mit Investoren kommuniziert)' },
        { en: 'Exit Timeline (12-24 month exit plan)', de: 'Exit Timeline (12-24 Monats Exit-Plan)' },
      ],
    },
    {
      icon: Settings,
      title: { en: 'C₂ Setup', de: 'C₂ Setup' },
      items: [
        { en: 'AI-Native Board Infrastructure (data, dashboards, reporting)', de: 'AI-Native Board Infrastruktur (Daten, Dashboards, Reporting)' },
        { en: 'AI-Native Investor Tools (which tools for investor relations)', de: 'AI-Native Investor Tools (welche Tools für Investor Relations)' },
        { en: 'Governance Architecture (how governance systems integrate)', de: 'Governance Architecture (wie Governance-Systeme integrieren)' },
        { en: 'Financial Architecture (how financials are tracked)', de: 'Financial Architecture (wie Finanzen getrackt werden)' },
      ],
    },
    {
      icon: Zap,
      title: { en: 'C₃ Execution', de: 'C₃ Execution' },
      items: [
        { en: 'AI-Native Board Operations (AI-assisted board prep, not manual)', de: 'AI-Native Board Operations (AI-assisted Board Prep, nicht manuell)' },
        { en: 'AI-Native Investor Relations (automated reporting, not manual)', de: 'AI-Native Investor Relations (automatisiertes Reporting, nicht manuell)' },
        { en: 'AI-Native Financial Planning (AI-powered forecasting, not spreadsheets)', de: 'AI-Native Financial Planning (AI-powered Forecasting, nicht Spreadsheets)' },
        { en: 'AI-Native Due Diligence Prep (automated data room, not manual)', de: 'AI-Native Due Diligence Prep (automatisierter Data Room, nicht manuell)' },
      ],
    },
    {
      icon: Users,
      title: { en: 'C₄ Operationalization', de: 'C₄ Operationalization' },
      items: [
        { en: 'Exit-Ready Culture (mindset shift, not just metrics)', de: 'Exit-Ready Culture (Mindset Shift, nicht nur Metriken)' },
        { en: 'Exit-Ready Processes (workflows, automation, systems)', de: 'Exit-Ready Processes (Workflows, Automation, Systeme)' },
        { en: 'Exit-Ready Measurement (how to track exit-readiness)', de: 'Exit-Ready Measurement (wie man Exit-Readiness trackt)' },
      ],
    },
  ];

  const quarters = [
    {
      number: 'Q1',
      title: { en: 'Foundation', de: 'Foundation' },
      timeline: { en: 'Months 1-3', de: 'Monate 1-3' },
      items: [
        { en: 'Exit-Ready Strategy (vision, roadmap, investment)', de: 'Exit-Ready Strategy (Vision, Roadmap, Investment)' },
        { en: 'Board Framework (how board operates)', de: 'Board Framework (wie das Board arbeitet)' },
        { en: 'AI-Native Setup (infrastructure, tools, architecture)', de: 'AI-Native Setup (Infrastruktur, Tools, Architektur)' },
        { en: 'Exit-Ready Culture (mindset shift, not just metrics)', de: 'Exit-Ready Culture (Mindset Shift, nicht nur Metriken)' },
      ],
      deliverable: { en: 'Exit-Ready Foundation (strategy + setup complete)', de: 'Exit-Ready Foundation (Strategy + Setup komplett)' },
      color: 'from-violet-500 to-purple-600',
    },
    {
      number: 'Q2-Q3',
      title: { en: 'Execution', de: 'Execution' },
      timeline: { en: 'Months 4-9', de: 'Monate 4-9' },
      items: [
        { en: 'Transform Board Excellence (board prep time 20-40h → 4-8h)', de: 'Board Excellence transformieren (Board Prep Time 20-40h → 4-8h)' },
        { en: 'Transform Investor Relations (automated reporting, not manual)', de: 'Investor Relations transformieren (automatisiertes Reporting, nicht manuell)' },
        { en: 'Transform Financial Excellence (AI-powered forecasting)', de: 'Financial Excellence transformieren (AI-powered Forecasting)' },
        { en: 'Transform Exit Preparation (automated data room)', de: 'Exit Preparation transformieren (automatisierter Data Room)' },
      ],
      deliverable: { en: 'Exit-Ready Company (all 4 dimensions live)', de: 'Exit-Ready Company (alle 4 Dimensionen live)' },
      color: 'from-cyan-500 to-blue-600',
    },
    {
      number: 'Q4',
      title: { en: 'Optimization', de: 'Optimization' },
      timeline: { en: 'Months 10-12', de: 'Monate 10-12' },
      items: [
        { en: 'Exit Readiness Validation (100% exit-ready)', de: 'Exit Readiness Validation (100% exit-ready)' },
        { en: 'Series C Preparation (investor-ready materials)', de: 'Series C Preparation (Investor-ready Materials)' },
        { en: 'Metrics Validation (validate level transition θ_index 0.5-0.8)', de: 'Metrics Validation (Level Transition validieren θ_index 0.5-0.8)' },
        { en: 'Handoff (train leadership team on exit-ready operations)', de: 'Handoff (Leadership Team auf Exit-Ready Operations trainieren)' },
      ],
      deliverable: { en: 'Level 2 achieved (Exit-Ready Company)', de: 'Level 2 erreicht (Exit-Ready Company)' },
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
            {language === 'de' ? 'Wie wir dein Exit-Ready Unternehmen aufbauen' : 'How We Build Your Exit-Ready Company'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Wir optimieren nicht nur Board Meetings. Wir transformieren dein gesamtes Governance-Modell – von Level 1 (AI-Powered) zu Level 2 (AI-Enabled) – damit du Exit-Readiness erreichst.'
              : "We don't just optimize board meetings. We transform your entire governance model—from Level 1 (AI-Powered) to Level 2 (AI-Enabled)—so you achieve exit-readiness."}
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
              { en: 'All 4 dimensions rebuilt (Board, Investor Relations, Financial, Exit Prep)', de: 'Alle 4 Dimensionen rebuilt (Board, Investor Relations, Financial, Exit Prep)' },
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
      metric: 'Board Confidence +60-80pp',
      icon: Users,
      description: {
        en: 'Your board confidence increases by 60-80 percentage points.',
        de: 'Deine Board Confidence steigt um 60-80 Prozentpunkte.',
      },
      before: { en: '40-60% (Level 1: board losing trust)', de: '40-60% (Level 1: Board verliert Vertrauen)' },
      after: { en: '85-95% (Level 2: board fully confident)', de: '85-95% (Level 2: Board voll confident)' },
      impact: { en: 'From "board pressure" to "board support"', de: 'Von "Board Pressure" zu "Board Support"' },
      why: {
        en: 'We implement AI-native board operations across all 4 dimensions—which increases board confidence by 60-80pp through better metrics, communication, and governance.',
        de: 'Wir implementieren AI-native Board Operations über alle 4 Dimensionen—was die Board Confidence durch bessere Metriken, Kommunikation und Governance um 60-80pp steigert.',
      },
    },
    {
      metric: 'Valuation Premium +200-400%',
      icon: TrendingUp,
      description: {
        en: 'Your valuation premium increases by 200-400%.',
        de: 'Dein Valuation Premium steigt um 200-400%.',
      },
      before: { en: '3-5x ARR (Level 1: traditional SaaS)', de: '3-5x ARR (Level 1: traditionelles SaaS)' },
      after: { en: '10-15x ARR (Level 2: AI-enabled SaaS)', de: '10-15x ARR (Level 2: AI-enabled SaaS)' },
      impact: { en: 'From "traditional valuation" to "AI-native premium"', de: 'Von "traditioneller Bewertung" zu "AI-native Premium"' },
      why: {
        en: 'We transform your company to AI-enabled—which increases valuation premium by 200-400% through AI-native operations and exit-readiness.',
        de: 'Wir transformieren dein Unternehmen zu AI-enabled—was das Valuation Premium durch AI-native Operations und Exit-Readiness um 200-400% steigert.',
      },
    },
    {
      metric: 'Exit Readiness 0% → 100%',
      icon: Target,
      description: {
        en: 'Your exit readiness increases from 0% to 100%.',
        de: 'Deine Exit Readiness steigt von 0% auf 100%.',
      },
      before: { en: '0% (Level 1: not exit-ready)', de: '0% (Level 1: nicht exit-ready)' },
      after: { en: '100% (Level 2: fully exit-ready)', de: '100% (Level 2: vollständig exit-ready)' },
      impact: { en: 'From "not exit-ready" to "Series C+ ready"', de: 'Von "nicht exit-ready" zu "Series C+ ready"' },
      why: {
        en: 'We build exit-readiness across all 4 dimensions—which achieves 100% exit-readiness through systematic preparation and AI-native governance.',
        de: 'Wir bauen Exit-Readiness über alle 4 Dimensionen auf—was 100% Exit-Readiness durch systematische Vorbereitung und AI-native Governance erreicht.',
      },
    },
  ];

  const realExample = {
    company: 'Series B SaaS, €32M ARR, 160 employees',
    challenge: {
      en: 'Level 1 (θ_index 0.35), Board Confidence 45%, Valuation 4x ARR, Exit Readiness 0%',
      de: 'Level 1 (θ_index 0.35), Board Confidence 45%, Valuation 4x ARR, Exit Readiness 0%',
    },
    problems: {
      en: 'Board prep time 30h/meeting, manual reporting, no investor relations, not exit-ready',
      de: 'Board Prep Time 30h/Meeting, manuelles Reporting, keine Investor Relations, nicht exit-ready',
    },
    transformation: {
      en: 'Exit-ready company built (all 4 dimensions transformed) over 12 months',
      de: 'Exit-ready Company aufgebaut (alle 4 Dimensionen transformiert) über 12 Monate',
    },
    results: [
      { metric: 'Board Confidence', value: '+70pp (45% → 115%)' },
      { metric: 'Valuation Premium', value: '+300% (4x → 12x ARR)' },
      { metric: 'Exit Readiness', value: '+100% (0% → 100%)' },
      { metric: 'θ_index', value: '+0.4 (0.35 → 0.75)' },
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
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'Governance-Probleme:' : 'Governance Problems:'}</p>
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
        { en: 'Exit-Ready Strategy (vision, roadmap, investment)', de: 'Exit-Ready Strategy (Vision, Roadmap, Investment)' },
        { en: 'Board Framework (how board operates)', de: 'Board Framework (wie das Board arbeitet)' },
        { en: 'AI-Native Setup (infrastructure, tools, architecture)', de: 'AI-Native Setup (Infrastruktur, Tools, Architektur)' },
        { en: 'Exit-Ready Culture (mindset shift, not just metrics)', de: 'Exit-Ready Culture (Mindset Shift, nicht nur Metriken)' },
      ],
      deliverables: [
        { en: 'Exit-Readiness Transformation Report (80-100 pages)', de: 'Exit-Readiness Transformation Report (80-100 Seiten)' },
        { en: 'Exit-Ready Roadmap (12-month plan)', de: 'Exit-Ready Roadmap (12-Monats-Plan)' },
        { en: 'AI-Native Foundation (strategy + setup complete)', de: 'AI-Native Foundation (Strategy + Setup komplett)' },
      ],
      commitment: { en: '30-40 hours', de: '30-40 Stunden' },
    },
    {
      title: { en: 'Execution', de: 'Execution' },
      timeline: { en: 'Q2-Q3 (Months 4-9)', de: 'Q2-Q3 (Monate 4-9)' },
      activities: [
        { en: 'Transform all 4 dimensions (Board, Investor Relations, Financial, Exit Prep)', de: 'Alle 4 Dimensionen transformieren (Board, Investor Relations, Financial, Exit Prep)' },
        { en: 'Implement AI-native systems (board intelligence, investor dashboards, financial forecasting)', de: 'AI-native Systeme implementieren (Board Intelligence, Investor Dashboards, Financial Forecasting)' },
        { en: 'Train leadership team (on exit-ready operations)', de: 'Leadership Team trainieren (auf Exit-Ready Operations)' },
      ],
      deliverables: [
        { en: 'Exit-Ready Company (all 4 dimensions live)', de: 'Exit-Ready Company (alle 4 Dimensionen live)' },
        { en: 'AI-Native Systems (deployed, not just pilots)', de: 'AI-Native Systems (deployed, nicht nur Pilots)' },
        { en: 'Team training (leadership playbooks for exit-ready operations)', de: 'Team Training (Leadership Playbooks für Exit-Ready Operations)' },
      ],
      commitment: { en: '40-60 hours', de: '40-60 Stunden' },
    },
    {
      title: { en: 'Optimization', de: 'Optimization' },
      timeline: { en: 'Q4 (Months 10-12)', de: 'Q4 (Monate 10-12)' },
      activities: [
        { en: 'Validate exit-readiness (100% exit-ready)', de: 'Exit-Readiness validieren (100% exit-ready)' },
        { en: 'Prepare for Series C+ (or exit)', de: 'Auf Series C+ vorbereiten (oder Exit)' },
        { en: 'Validate level transition (θ_index 0.2-0.5 → 0.5-0.8)', de: 'Level Transition validieren (θ_index 0.2-0.5 → 0.5-0.8)' },
        { en: 'Create exit playbook (how to maintain exit-readiness)', de: 'Exit Playbook erstellen (wie man Exit-Readiness beibehält)' },
      ],
      deliverables: [
        { en: 'Metrics Dashboard (real-time tracking)', de: 'Metriken-Dashboard (Echtzeit-Tracking)' },
        { en: 'Validated Level 2 (with before/after data)', de: 'Validiertes Level 2 (mit Vorher/Nachher-Daten)' },
        { en: 'Exit Playbook (step-by-step guide)', de: 'Exit Playbook (Schritt-für-Schritt-Guide)' },
      ],
      commitment: { en: '20-30 hours', de: '20-30 Stunden' },
    },
  ];

  const metrics = [
    { name: 'Board Confidence', description: { en: '%', de: '%' } },
    { name: 'Valuation Premium', description: { en: 'multiple', de: 'Multiple' } },
    { name: 'Exit Readiness', description: { en: '%', de: '%' } },
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
                'Board Confidence +60-80pp',
                'Valuation Premium +200-400%',
                'Exit Readiness 0% → 100%',
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
      title: { en: "You're Level 1 and need to become exit-ready", de: 'Du bist Level 1 und musst exit-ready werden' },
      items: [
        { en: 'θ_index is 0.2-0.5 (Level 1: AI-Powered)', de: 'θ_index liegt bei 0.2-0.5 (Level 1: AI-Powered)' },
        { en: 'Board confidence is 40-60% (benchmark: 85-95% for exit-ready)', de: 'Board Confidence liegt bei 40-60% (Benchmark: 85-95% für exit-ready)' },
        { en: 'You have 12 months to achieve exit-readiness', de: 'Du hast 12 Monate für Exit-Readiness' },
      ],
    },
    {
      title: { en: 'You need full governance transformation', de: 'Du brauchst eine vollständige Governance-Transformation' },
      items: [
        { en: 'Do you need to transform board operations? (board prep time 20-40h → 4-8h?)', de: 'Musst du Board Operations transformieren? (Board Prep Time 20-40h → 4-8h?)' },
        { en: 'Do you need to transform investor relations? (automated reporting, not manual?)', de: 'Musst du Investor Relations transformieren? (automatisiertes Reporting, nicht manuell?)' },
        { en: 'Do you need to transform financial planning? (AI-powered forecasting?)', de: 'Musst du Financial Planning transformieren? (AI-powered Forecasting?)' },
        { en: 'Do you need to achieve exit-readiness? (0% → 100%?)', de: 'Musst du Exit-Readiness erreichen? (0% → 100%?)' },
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
        { en: 'You understand level transition takes 12 months (not 90 days)', de: 'Du verstehst, dass Level Transition 12 Monate dauert (nicht 90 Tage)' },
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
      title: { en: 'You only need to optimize board meetings', de: 'Du musst nur Board Meetings optimieren' },
      description: { en: 'If you just need to fix board prep or investor relations (not full governance), Accelerate is overkill', de: 'Wenn du nur Board Prep oder Investor Relations fixen musst (nicht vollständige Governance), ist Accelerate Overkill' },
      alternative: { en: 'Boost (90 days, €60K-€78K) for single dimension optimization', de: 'Boost (90 Tage, €60K-€78K) für einzelne Dimensions-Optimierung' },
    },
    {
      title: { en: "You're already Level 2+", de: 'Du bist bereits Level 2+' },
      description: { en: "If your θ_index is 0.5-0.8 (Level 2: AI-Enabled), you don't need Level 1→2 transition", de: 'Wenn dein θ_index bereits 0.5-0.8 ist (Level 2: AI-Enabled), brauchst du keine Level 1→2 Transition' },
      alternative: { en: 'Boost (90 days, €60K-€78K) for Level 2 optimization', de: 'Boost (90 Tage, €60K-€78K) für Level 2 Optimierung' },
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
              ? 'Accelerate: Exit-Readiness funktioniert am besten für Unternehmen in dieser Situation.'
              : 'Accelerate: Exit-Readiness works best for companies in this situation.'}
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
                  <p className="text-sm text-accent font-medium">
                    → {language === 'de' ? 'Bessere Alternative:' : 'Better fit:'} {language === 'de' ? item.alternative.de : item.alternative.en}
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

  const faqItems = [
    {
      question: { en: 'How long does Accelerate take?', de: 'Wie lange dauert Accelerate?' },
      answer: { en: '12 months (4 quarters, phased implementation)', de: '12 Monate (4 Quartale, phasenweise Implementierung)' },
    },
    {
      question: { en: "What's the investment?", de: 'Was ist das Investment?' },
      answer: { en: '€153K (€12.75K/month, stage-agnostic)', de: '€153K (€12.75K/Monat, stage-agnostisch)' },
    },
    {
      question: { en: "What if it doesn't work?", de: 'Was wenn es nicht funktioniert?' },
      answer: {
        en: 'We guarantee 2 of 3 outcomes (Board Confidence +60-80pp, Valuation Premium +200-400%, Exit Readiness 0% → 100%). If we don\'t hit 2 of 3, you get 50% refund.',
        de: 'Wir garantieren 2 von 3 Ergebnissen (Board Confidence +60-80pp, Valuation Premium +200-400%, Exit Readiness 0% → 100%). Wenn wir 2 von 3 nicht erreichen, bekommst du 50% Rückerstattung.',
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
      answer: { en: 'Typical ROI is 10-20x (based on valuation increase and exit success over 12 months).', de: 'Typischer ROI ist 10-20x (basierend auf Bewertungssteigerung und Exit-Erfolg über 12 Monate).' },
    },
    {
      question: { en: 'How is this different from Boost?', de: 'Wie unterscheidet sich das von Boost?' },
      answer: {
        en: 'Boost (90 days, €60K-€78K) optimizes 1 governance dimension. Accelerate (12 months, €153K) transforms all 4 dimensions + achieves level transition (Level 1 → Level 2).',
        de: 'Boost (90 Tage, €60K-€78K) optimiert 1 Governance-Dimension. Accelerate (12 Monate, €153K) transformiert alle 4 Dimensionen + erreicht Level Transition (Level 1 → Level 2).',
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
            {language === 'de' ? 'Bereit, dein Exit-Ready Unternehmen aufzubauen?' : 'Ready to Build Your Exit-Ready Company?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de' ? 'So geht es weiter.' : "Here's what happens next."}
          </p>
        </div>

        {/* Step 1: Inflection Call */}
        <div className="bg-accent/5 border-2 border-accent/20 p-8 rounded-lg mb-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            {language === 'de' ? 'Schritt 1: Kostenloses Inflection Call buchen (30 Min.)' : 'Step 1: Book a Free Inflection Call (30 min)'}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            {language === 'de'
              ? 'In 30 Minuten bewerten wir deine Exit-Readiness (Board Confidence, Valuation, Exit Readiness?), zeigen dir genau, wie wir dich zu Level 2 transformieren würden (mit Beispielen), und geben dir eine klare Empfehlung (Accelerate, Boost oder DIY).'
              : "In 30 minutes, we'll assess your exit-readiness (board confidence, valuation, exit readiness?), show you exactly how we'd transform you to Level 2 (with examples), and give you a clear recommendation (Accelerate, Boost, or DIY)."}
          </p>
          <p className="text-sm text-accent font-semibold mb-6">
            {language === 'de' ? 'Kein Pitch. Kein Druck. Nur Klarheit.' : 'No pitch. No pressure. Just clarity.'}
          </p>
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => setIsBookingModalOpen(true)}
          >
            {language === 'de' ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book Free Inflection Call (30 min)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Alternative: Assessment */}
        <div className="bg-card border-2 border-border p-6 rounded-lg mb-16 text-center">
          <h4 className="font-bold text-foreground mb-2">
            {language === 'de' ? 'Alternative: Starte mit einem Exit-Readiness Assessment' : 'Alternative: Start with an Exit-Readiness Assessment'}
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            {language === 'de'
              ? 'Noch nicht bereit für ein vollständiges Accelerate? Starte kleiner mit einem AI Maturity Assessment (1-2 Wochen, €3.9K-€5.9K).'
              : 'Not ready for a full Accelerate? Start smaller with an AI Maturity Assessment (1-2 weeks, €3.9K-€5.9K).'}
          </p>
          <Button variant="outline" className="border-2" onClick={() => setIsAssessmentModalOpen(true)}>
            {language === 'de' ? 'AI Maturity Assessment buchen' : 'Book AI Maturity Assessment'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">FAQ</h3>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {language === 'de' ? item.question.de : item.question.en}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {language === 'de' ? item.answer.de : item.answer.en}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => setIsBookingModalOpen(true)}
          >
            {language === 'de' ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book Free Inflection Call (30 min)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            {language === 'de' ? 'Noch Fragen? Email uns unter team@scalingx.io oder buche einen Call.' : 'Still have questions? Email us at team@scalingx.io or book a call.'}
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
          title={language === 'de' ? 'AI Maturity Assessment buchen' : 'Book AI Maturity Assessment'}
        />
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const AccelerateExitReadiness: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <OutcomeSection />
      <ProcessSection />
      <QualificationSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default AccelerateExitReadiness;
