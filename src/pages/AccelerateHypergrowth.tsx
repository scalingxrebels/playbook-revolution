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
  Brain,
  Zap,
  BarChart3,
  Target,
  Users,
  Clock,
  FileText,
  MessageCircle,
  Shield,
  Settings,
  Layers,
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
    { value: '-85-91%', label: { en: 'Time to €100M', de: 'Time to €100M' }, sublabel: { en: '60-84mo → 8-18mo', de: '60-84Mo → 8-18Mo' } },
    { value: '-60-80%', label: { en: 'CAC', de: 'CAC' }, sublabel: { en: '€8K-€12K → €2K-€4K', de: '€8K-€12K → €2K-€4K' } },
    { value: '+100-200%', label: { en: 'ARR Growth', de: 'ARR Growth' }, sublabel: { en: '100-150% → 300-500%', de: '100-150% → 300-500%' } },
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
              <span className="text-foreground font-medium">Accelerate Hypergrowth</span>
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
          <span className="block text-foreground">Level 1 → Level 3:</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            AI-Native Hypergrowth Built
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Baue AI-native Hypergrowth in 12 Monaten. Typische Ergebnisse: Time to €100M -85-91%, CAC -60-80%, ARR Growth +100-200% – mit 2 von 3 Ergebnissen garantiert.'
            : 'Build AI-native hypergrowth in 12 months. Typical outcomes: Time to €100M -85-91%, CAC -60-80%, ARR Growth +100-200%—with 2 of 3 outcomes guaranteed.'}
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
    { en: 'Low AI maturity: θ_index 0.2-0.5 (Level 1: AI-Powered), using AI as tool only', de: 'Niedrige AI Maturity: θ_index 0.2-0.5 (Level 1: AI-Powered), AI nur als Tool' },
    { en: 'Slow time to market: 60-84 months to €100M (benchmark: 8-18 months)', de: 'Langsame Time-to-Market: 60-84 Monate bis €100M (Benchmark: 8-18 Monate)' },
    { en: 'High CAC: €8K-€12K (benchmark: €2K-€4K for AI-native)', de: 'Hohe CAC: €8K-€12K (Benchmark: €2K-€4K für AI-native)' },
    { en: 'Slow growth: 100-150% YoY (benchmark: 300-500% for AI-native)', de: 'Langsames Wachstum: 100-150% YoY (Benchmark: 300-500% für AI-native)' },
    { en: 'Valuation discount: 40-60% (AI-native gets 200-400% premium)', de: 'Bewertungsabschlag: 40-60% (AI-native bekommt 200-400% Premium)' },
  ];

  const beforeAfter = {
    before: [
      { metric: 'θ_index', value: '0.2-0.5 (Level 1)' },
      { metric: 'Time to €100M', value: '60-84 months' },
      { metric: 'CAC', value: '€8K-€12K' },
      { metric: 'ARR Growth', value: '100-150% YoY' },
    ],
    after: [
      { metric: 'θ_index', value: '0.8-1.0 (Level 3)' },
      { metric: 'Time to €100M', value: '8-18 months' },
      { metric: 'CAC', value: '€2K-€4K' },
      { metric: 'ARR Growth', value: '300-500% YoY' },
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
            {language === 'de' ? 'Du bist Level 1 — Deine Wettbewerber sind Level 3' : "You're Level 1—Your Competitors Are Level 3"}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Dein θ_index liegt bei 0.2-0.5 (Level 1: AI-Powered). Deine Wettbewerber sind bei 0.8-1.0 (Level 3: AI-Native). Deine Time to €100M liegt bei 60-84 Monaten (Benchmark: 8-18 Monate für AI-Native). Deine CAC ist €8K-€12K (Benchmark: €2K-€4K). Und das Schlimmste—du verlierst Marktanteile an AI-native Wettbewerber, jedes Quartal.'
              : 'Your θ_index is 0.2-0.5 (Level 1: AI-Powered). Your competitors are 0.8-1.0 (Level 3: AI-Native). Your time to €100M is 60-84 months (benchmark: 8-18 months for AI-native). Your CAC is €8K-€12K (benchmark: €2K-€4K). And worst of all—you\'re losing market share to AI-native competitors every quarter.'}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Du hast die offensichtlichen Fixes ausprobiert: AI-Engineers einstellen, AI-Tools kaufen, AI-Piloten starten. Aber nichts funktioniert. Denn das Problem ist nicht ein AI-Projekt—es ist dein gesamtes Geschäftsmodell. Du brauchst Level Transition.'
              : "You've tried the obvious fixes: hiring AI engineers, buying AI tools, running AI pilots. But nothing is working. Because the problem isn't one AI project—it's your entire business model. You need Level Transition."}
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
              {language === 'de' ? 'Vorher (Level 1: AI-Powered)' : 'Before (Level 1: AI-Powered)'}
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
              {language === 'de' ? 'Nachher (Level 3: AI-Native)' : 'After (Level 3: AI-Native)'}
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
        { en: 'AI-Native Strategy (vision, roadmap, investment)', de: 'AI-Native Strategy (Vision, Roadmap, Investment)' },
        { en: 'AI-Native Business Model (how AI changes your model)', de: 'AI-Native Business Model (wie AI dein Modell verändert)' },
        { en: 'AI-Native Metrics (new KPIs for AI-native)', de: 'AI-Native Metrics (neue KPIs für AI-native)' },
        { en: 'AI-Native Governance (who owns what)', de: 'AI-Native Governance (wer owned was)' },
      ],
    },
    {
      icon: Settings,
      title: { en: 'C₂ Setup', de: 'C₂ Setup' },
      items: [
        { en: 'AI-Native Infrastructure (data, APIs, platforms)', de: 'AI-Native Infrastruktur (Daten, APIs, Plattformen)' },
        { en: 'AI-Native Tools (which tools for which use cases)', de: 'AI-Native Tools (welche Tools für welche Use Cases)' },
        { en: 'AI-Native Architecture (how systems integrate)', de: 'AI-Native Architecture (wie Systeme integrieren)' },
        { en: 'AI-Native Talent (hiring, training, retention)', de: 'AI-Native Talent (Hiring, Training, Retention)' },
      ],
    },
    {
      icon: Zap,
      title: { en: 'C₃ Execution', de: 'C₃ Execution' },
      items: [
        { en: 'AI-Native GTM (AI SDRs, predictive lead scoring)', de: 'AI-Native GTM (AI SDRs, Predictive Lead Scoring)' },
        { en: 'AI-Native Product (AI-powered features, AI analytics)', de: 'AI-Native Product (AI-powered Features, AI Analytics)' },
        { en: 'AI-Native CS (churn prediction, automated expansion)', de: 'AI-Native CS (Churn Prediction, Automated Expansion)' },
      ],
    },
    {
      icon: Users,
      title: { en: 'C₄ Operationalization', de: 'C₄ Operationalization' },
      items: [
        { en: 'AI-Native Culture (mindset shift, not just tools)', de: 'AI-Native Culture (Mindset Shift, nicht nur Tools)' },
        { en: 'AI-Native Processes (workflows, automation, systems)', de: 'AI-Native Processes (Workflows, Automation, Systeme)' },
        { en: 'AI-Native Measurement (how to track AI impact)', de: 'AI-Native Measurement (wie man AI-Impact trackt)' },
      ],
    },
  ];

  const quarters = [
    {
      number: 'Q1',
      title: { en: 'Foundation', de: 'Foundation' },
      timeline: { en: 'Months 1-3', de: 'Monate 1-3' },
      items: [
        { en: 'AI-Native Strategy (vision, roadmap, investment)', de: 'AI-Native Strategy (Vision, Roadmap, Investment)' },
        { en: 'AI-Native Setup (infrastructure, tools, architecture)', de: 'AI-Native Setup (Infrastruktur, Tools, Architektur)' },
        { en: 'AI-Native Execution Prep (GTM, Product, CS design)', de: 'AI-Native Execution Prep (GTM, Product, CS Design)' },
        { en: 'AI-Native Culture (mindset shift)', de: 'AI-Native Culture (Mindset Shift)' },
      ],
      deliverable: { en: 'AI-Native Foundation (strategy + setup complete)', de: 'AI-Native Foundation (Strategy + Setup komplett)' },
      color: 'from-violet-500 to-purple-600',
    },
    {
      number: 'Q2-Q3',
      title: { en: 'Execution', de: 'Execution' },
      timeline: { en: 'Months 4-9', de: 'Monate 4-9' },
      items: [
        { en: 'Transform GTM (AI SDRs, predictive scoring, automated sales)', de: 'GTM transformieren (AI SDRs, Predictive Scoring, Automated Sales)' },
        { en: 'Transform Product (AI-powered features, AI analytics)', de: 'Product transformieren (AI-powered Features, AI Analytics)' },
        { en: 'Transform CS (churn prediction, automated expansion)', de: 'CS transformieren (Churn Prediction, Automated Expansion)' },
        { en: 'Train leadership team (on AI-native operations)', de: 'Leadership Team trainieren (auf AI-native Operations)' },
      ],
      deliverable: { en: 'AI-Native Growth Engines (all 3 engines live)', de: 'AI-Native Growth Engines (alle 3 Engines live)' },
      color: 'from-cyan-500 to-blue-600',
    },
    {
      number: 'Q4',
      title: { en: 'Optimization', de: 'Optimization' },
      timeline: { en: 'Months 10-12', de: 'Monate 10-12' },
      items: [
        { en: 'Performance Optimization (fine-tune AI systems)', de: 'Performance Optimization (AI-Systeme fine-tunen)' },
        { en: 'Scale Preparation (infrastructure, team, processes)', de: 'Scale Preparation (Infrastruktur, Team, Prozesse)' },
        { en: 'Metrics Validation (validate level transition θ_index 0.8-1.0)', de: 'Metrics Validation (Level Transition validieren θ_index 0.8-1.0)' },
        { en: 'Handoff (train leadership team on AI-native operations)', de: 'Handoff (Leadership Team auf AI-native Operations trainieren)' },
      ],
      deliverable: { en: 'Level 3 achieved (AI-Native Hypergrowth)', de: 'Level 3 erreicht (AI-Native Hypergrowth)' },
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
            {language === 'de' ? 'Wie wir dein AI-Native Hypergrowth aufbauen' : 'How We Build Your AI-Native Hypergrowth'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Wir optimieren nicht nur Growth Engines. Wir transformieren dein gesamtes Geschäftsmodell – von Level 1 (AI-Powered) zu Level 3 (AI-Native) – damit du Hypergrowth erreichst.'
              : "We don't just optimize growth engines. We transform your entire business model—from Level 1 (AI-Powered) to Level 3 (AI-Native)—so you achieve hypergrowth."}
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
              { en: 'Full level transition (Level 1 → Level 3)', de: 'Vollständige Level Transition (Level 1 → Level 3)' },
              { en: 'All 4 capabilities transformed (C₁ + C₂ + C₃ + C₄)', de: 'Alle 4 Capabilities transformiert (C₁ + C₂ + C₃ + C₄)' },
              { en: 'All 3 growth engines rebuilt (GTM + Product + CS)', de: 'Alle 3 Growth Engines umgebaut (GTM + Product + CS)' },
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
      metric: 'Time to €100M -85-91%',
      icon: Target,
      description: {
        en: 'Your time to €100M decreases by 85-91%.',
        de: 'Deine Time to €100M sinkt um 85-91%.',
      },
      before: { en: '60-84 months (Level 1: AI-Powered)', de: '60-84 Monate (Level 1: AI-Powered)' },
      after: { en: '8-18 months (Level 3: AI-Native)', de: '8-18 Monate (Level 3: AI-Native)' },
      impact: { en: 'From "slow growth" to "hypergrowth"', de: 'Von "langsames Wachstum" zu "Hypergrowth"' },
      why: {
        en: 'We transform all 3 growth engines to AI-native—which reduces time to €100M by 85-91% through AI-powered acquisition, product, and retention.',
        de: 'Wir transformieren alle 3 Growth Engines zu AI-native—was die Time to €100M durch AI-powered Acquisition, Product und Retention um 85-91% reduziert.',
      },
    },
    {
      metric: 'CAC -60-80%',
      icon: BarChart3,
      description: {
        en: 'Your CAC decreases by 60-80%.',
        de: 'Deine CAC sinkt um 60-80%.',
      },
      before: { en: '€8K-€12K (Level 1: manual processes)', de: '€8K-€12K (Level 1: manuelle Prozesse)' },
      after: { en: '€2K-€4K (Level 3: AI-powered acquisition)', de: '€2K-€4K (Level 3: AI-powered Acquisition)' },
      impact: { en: 'From "expensive acquisition" to "efficient acquisition"', de: 'Von "teure Akquisition" zu "effiziente Akquisition"' },
      why: {
        en: 'We implement AI-native GTM (AI SDRs, predictive lead scoring)—which reduces CAC by 60-80% through automation and AI-powered targeting.',
        de: 'Wir implementieren AI-native GTM (AI SDRs, Predictive Lead Scoring)—was die CAC durch Automation und AI-powered Targeting um 60-80% reduziert.',
      },
    },
    {
      metric: 'ARR Growth +100-200%',
      icon: TrendingUp,
      description: {
        en: 'Your ARR growth rate increases by 100-200%.',
        de: 'Deine ARR Growth Rate steigt um 100-200%.',
      },
      before: { en: '100-150% YoY (Level 1: traditional growth)', de: '100-150% YoY (Level 1: traditionelles Wachstum)' },
      after: { en: '300-500% YoY (Level 3: hypergrowth)', de: '300-500% YoY (Level 3: Hypergrowth)' },
      impact: { en: 'From "good growth" to "hypergrowth"', de: 'Von "gutem Wachstum" zu "Hypergrowth"' },
      why: {
        en: 'We transform all 3 growth engines to AI-native—which increases ARR growth by 100-200% through AI-powered acquisition, product, and retention.',
        de: 'Wir transformieren alle 3 Growth Engines zu AI-native—was das ARR Growth durch AI-powered Acquisition, Product und Retention um 100-200% steigert.',
      },
    },
  ];

  const realExample = {
    company: 'Series B SaaS, €18M ARR, 95 employees',
    challenge: {
      en: 'Level 1 (θ_index 0.35), Time to €100M = 72 months, CAC €10K, Growth 120% YoY',
      de: 'Level 1 (θ_index 0.35), Time to €100M = 72 Monate, CAC €10K, Growth 120% YoY',
    },
    problems: {
      en: 'AI as tool only (ChatGPT, Copilot), no AI in workflows, manual processes',
      de: 'AI nur als Tool (ChatGPT, Copilot), kein AI in Workflows, manuelle Prozesse',
    },
    transformation: {
      en: 'AI-native hypergrowth built (all 3 growth engines transformed) over 12 months',
      de: 'AI-native Hypergrowth aufgebaut (alle 3 Growth Engines transformiert) über 12 Monate',
    },
    results: [
      { metric: 'Time to €100M', value: '-88% (72mo → 9mo)' },
      { metric: 'CAC', value: '-70% (€10K → €3K)' },
      { metric: 'ARR Growth', value: '+150% (120% → 300% YoY)' },
      { metric: 'θ_index', value: '+0.55 (0.35 → 0.9)' },
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
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'AI-Probleme:' : 'AI Problems:'}</p>
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
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{result.metric}</p>
                <p className="text-lg font-bold text-accent">{result.value}</p>
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
        { en: 'AI-Native Strategy (vision, roadmap, investment)', de: 'AI-Native Strategy (Vision, Roadmap, Investment)' },
        { en: 'AI-Native Setup (infrastructure, tools, architecture)', de: 'AI-Native Setup (Infrastruktur, Tools, Architektur)' },
        { en: 'AI-Native Execution Prep (GTM, Product, CS design)', de: 'AI-Native Execution Prep (GTM, Product, CS Design)' },
        { en: 'AI-Native Culture (mindset shift)', de: 'AI-Native Culture (Mindset Shift)' },
      ],
      deliverables: [
        { en: 'AI-Native Transformation Report (80-100 pages)', de: 'AI-Native Transformation Report (80-100 Seiten)' },
        { en: 'AI-Native Roadmap (12-month plan)', de: 'AI-Native Roadmap (12-Monats-Plan)' },
        { en: 'AI-Native Foundation (strategy + setup complete)', de: 'AI-Native Foundation (Strategy + Setup komplett)' },
      ],
      commitment: { en: '30-40 hours', de: '30-40 Stunden' },
    },
    {
      title: { en: 'Execution', de: 'Execution' },
      timeline: { en: 'Q2-Q3 (Months 4-9)', de: 'Q2-Q3 (Monate 4-9)' },
      activities: [
        { en: 'Transform all 3 growth engines (GTM, Product, CS)', de: 'Alle 3 Growth Engines transformieren (GTM, Product, CS)' },
        { en: 'Implement AI-native systems (AI SDRs, AI features, churn prediction)', de: 'AI-native Systeme implementieren (AI SDRs, AI Features, Churn Prediction)' },
        { en: 'Train leadership team (on AI-native operations)', de: 'Leadership Team trainieren (auf AI-native Operations)' },
      ],
      deliverables: [
        { en: 'AI-Native Growth Engines (all 3 engines live)', de: 'AI-Native Growth Engines (alle 3 Engines live)' },
        { en: 'AI-Native Systems (deployed, not just pilots)', de: 'AI-Native Systeme (deployed, nicht nur Piloten)' },
        { en: 'Team training (leadership playbooks for AI-native)', de: 'Team-Training (Leadership Playbooks für AI-native)' },
      ],
      commitment: { en: '40-60 hours', de: '40-60 Stunden' },
    },
    {
      title: { en: 'Optimization', de: 'Optimization' },
      timeline: { en: 'Q4 (Months 10-12)', de: 'Q4 (Monate 10-12)' },
      activities: [
        { en: 'Track metrics (Time to €100M, CAC, ARR Growth)', de: 'Metriken tracken (Time to €100M, CAC, ARR Growth)' },
        { en: 'Validate level transition (θ_index 0.2-0.5 → 0.8-1.0)', de: 'Level Transition validieren (θ_index 0.2-0.5 → 0.8-1.0)' },
        { en: 'Create scale playbook (how to maintain Level 3)', de: 'Scale Playbook erstellen (wie man Level 3 hält)' },
      ],
      deliverables: [
        { en: 'Metrics Dashboard (real-time tracking)', de: 'Metriken-Dashboard (Echtzeit-Tracking)' },
        { en: 'Validated Level 3 (with before/after data)', de: 'Validiertes Level 3 (mit Vorher/Nachher-Daten)' },
        { en: 'Scale Playbook (step-by-step guide)', de: 'Scale Playbook (Schritt-für-Schritt-Anleitung)' },
      ],
      commitment: { en: '20-30 hours', de: '20-30 Stunden' },
    },
  ];

  const metrics = [
    { name: 'Time to €100M', description: { en: 'months', de: 'Monate' } },
    { name: 'CAC', description: { en: '€', de: '€' } },
    { name: 'ARR Growth Rate', description: { en: '% YoY', de: '% YoY' } },
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
                'Time to €100M -85-91%',
                'CAC -60-80%',
                'ARR Growth +100-200%',
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
      title: { en: "You're Level 1 and need to become Level 3", de: 'Du bist Level 1 und musst Level 3 werden' },
      items: [
        { en: 'θ_index is 0.2-0.5 (Level 1: AI-Powered)', de: 'θ_index liegt bei 0.2-0.5 (Level 1: AI-Powered)' },
        { en: 'Competitors are 0.8-1.0 (Level 3: AI-Native)', de: 'Wettbewerber liegen bei 0.8-1.0 (Level 3: AI-Native)' },
        { en: 'You have 12 months to achieve level transition', de: 'Du hast 12 Monate für die Level Transition' },
      ],
    },
    {
      title: { en: 'You need full AI-native transformation', de: 'Du brauchst eine vollständige AI-native Transformation' },
      items: [
        { en: 'Do you need to transform GTM? (AI SDRs, predictive lead scoring?)', de: 'Musst du GTM transformieren? (AI SDRs, Predictive Lead Scoring?)' },
        { en: 'Do you need to transform Product? (AI-powered features, AI analytics?)', de: 'Musst du Product transformieren? (AI-powered Features, AI Analytics?)' },
        { en: 'Do you need to transform CS? (churn prediction, automated expansion?)', de: 'Musst du CS transformieren? (Churn Prediction, Automated Expansion?)' },
        { en: 'Do you need to transform all 4 capabilities? (C₁ + C₂ + C₃ + C₄?)', de: 'Musst du alle 4 Capabilities transformieren? (C₁ + C₂ + C₃ + C₄?)' },
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
      title: { en: 'You only need to optimize one growth engine', de: 'Du musst nur eine Growth Engine optimieren' },
      description: { en: 'If you just need to fix CAC, NRR, or scaling (not full AI-native), Accelerate is overkill', de: 'Wenn du nur CAC, NRR oder Scaling fixen musst (nicht vollständig AI-native), ist Accelerate Overkill' },
      alternative: { en: 'Boost (90 days, €60K-€78K) for single growth engine optimization', de: 'Boost (90 Tage, €60K-€78K) für einzelne Growth Engine Optimierung' },
    },
    {
      title: { en: "You're already Level 2+ (not Level 1)", de: 'Du bist bereits Level 2+ (nicht Level 1)' },
      description: { en: "If your θ_index is 0.5-0.8 (Level 2: AI-Enabled), you don't need Level 1→3 transition", de: 'Wenn dein θ_index bei 0.5-0.8 liegt (Level 2: AI-Enabled), brauchst du keine Level 1→3 Transition' },
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
              ? 'Accelerate: Hypergrowth funktioniert am besten für Unternehmen in dieser Situation.'
              : 'Accelerate: Hypergrowth works best for companies in this situation.'}
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
        en: "We guarantee 2 of 3 outcomes (Time to €100M -85-91%, CAC -60-80%, ARR Growth +100-200%). If we don't hit 2 of 3, you get 50% refund.",
        de: 'Wir garantieren 2 von 3 Ergebnissen (Time to €100M -85-91%, CAC -60-80%, ARR Growth +100-200%). Wenn wir 2 von 3 nicht erreichen, bekommst du 50% Rückerstattung.',
      },
    },
    {
      question: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' },
      answer: {
        en: "Yes. We'll connect you with a CEO who's achieved Level 3 with us (same stage, same challenge).",
        de: 'Ja. Wir verbinden dich mit einem CEO, der Level 3 mit uns erreicht hat (gleiche Stage, gleiche Challenge).',
      },
    },
    {
      question: { en: "What's the ROI?", de: 'Was ist der ROI?' },
      answer: {
        en: 'Typical ROI is 10-20x (based on valuation increase and growth acceleration over 12 months).',
        de: 'Typischer ROI ist 10-20x (basierend auf Bewertungssteigerung und Wachstumsbeschleunigung über 12 Monate).',
      },
    },
    {
      question: { en: 'How is this different from Boost?', de: 'Wie unterscheidet sich das von Boost?' },
      answer: {
        en: 'Boost (90 days, €60K-€78K) optimizes 1 growth engine. Accelerate (12 months, €153K) transforms all 3 growth engines + achieves level transition (Level 1 → Level 3).',
        de: 'Boost (90 Tage, €60K-€78K) optimiert 1 Growth Engine. Accelerate (12 Monate, €153K) transformiert alle 3 Growth Engines + erreicht Level Transition (Level 1 → Level 3).',
      },
    },
  ];

  const steps = [
    {
      title: { en: 'Book a Free Inflection Call (30 min)', de: 'Kostenloses Inflection Call buchen (30 Min.)' },
      description: {
        en: "In 30 minutes, we'll assess your AI maturity (θ_index), show you exactly how we'd transform you to Level 3, and give you a clear recommendation.",
        de: 'In 30 Minuten beurteilen wir deine AI Maturity (θ_index), zeigen dir genau, wie wir dich zu Level 3 transformieren würden, und geben dir eine klare Empfehlung.',
      },
    },
    {
      title: { en: 'Decide if Accelerate is Right for You', de: 'Entscheide, ob Accelerate richtig für dich ist' },
      description: {
        en: "After the call, you'll know your AI maturity level, how we'd transform you, what outcomes to expect, and whether Accelerate is the right fit.",
        de: 'Nach dem Call weißt du dein AI Maturity Level, wie wir dich transformieren würden, welche Ergebnisse zu erwarten sind, und ob Accelerate der richtige Fit ist.',
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

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Nächste Schritte' : 'Next Steps'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Bereit für dein AI-Native Hypergrowth?' : 'Ready to Build Your AI-Native Hypergrowth?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de' ? 'So geht es weiter.' : "Here's what happens next."}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-card border-2 border-border p-6 rounded-lg flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold flex-shrink-0">
                {index + 1}
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
          ))}
        </div>

        {/* Primary CTA */}
        <div className="text-center mb-16">
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-12 py-8 text-lg uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => setIsBookingModalOpen(true)}
          >
            {language === 'de' ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book Free Inflection Call (30 min)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            {language === 'de' ? 'Kein Pitch. Kein Druck. Nur Klarheit.' : 'No pitch. No pressure. Just clarity.'}
          </p>
        </div>

        {/* Alternative CTA */}
        <div className="bg-secondary/30 border-2 border-border p-6 rounded-lg text-center mb-16">
          <h3 className="text-lg font-bold text-foreground mb-2">
            {language === 'de' ? 'Alternative: AI Maturity Assessment' : 'Alternative: Start with an AI Maturity Assessment'}
          </h3>
          <p className="text-muted-foreground mb-4">
            {language === 'de'
              ? 'Noch nicht bereit für ein volles Accelerate? Starte kleiner mit einem AI Maturity Assessment (1-2 Wochen, €3.9K-€5.9K).'
              : 'Not ready for a full Accelerate? Start smaller with an AI Maturity Assessment (1-2 weeks, €3.9K-€5.9K).'}
          </p>
          <Button variant="outline" size="lg" onClick={() => setIsAssessmentModalOpen(true)}>
            {language === 'de' ? 'AI Maturity Assessment buchen' : 'Book AI Maturity Assessment'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* FAQ */}
        <div className="mb-16">
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

        {/* Final CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-primary text-primary-foreground hover:opacity-90"
            onClick={() => setIsBookingModalOpen(true)}
          >
            {language === 'de' ? 'Inflection Call buchen' : 'Book Inflection Call'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            {language === 'de'
              ? 'Noch Fragen? Schreib uns an team@scalingx.io oder buche einen Call.'
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
          title={language === 'de' ? 'AI Maturity Assessment buchen' : 'Book AI Maturity Assessment'}
        />
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const AccelerateHypergrowth: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
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

export default AccelerateHypergrowth;
