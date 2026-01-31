import React, { useEffect } from 'react';
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
  Brain,
  Shield,
  Settings,
  Rocket,
  TrendingUp,
  Layers,
  RefreshCw,
  MessageCircle,
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
    { value: '+500-900%', label: { en: 'Decision Velocity', de: 'Decision Velocity' }, sublabel: { en: '7 days → 24-48 hours', de: '7 Tage → 24-48 Stunden' } },
    { value: '+100-200%', label: { en: 'ARR/Employee', de: 'ARR/Employee' }, sublabel: { en: '€200K-€400K → €600K-€1.2M', de: '€200K-€400K → €600K-€1.2M' } },
    { value: '-60-80%', label: { en: 'Operational Debt', de: 'Operational Debt' }, sublabel: { en: '40-50% → 10-15%', de: '40-50% → 10-15%' } },
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
              <span className="text-foreground font-medium">Accelerate AI-Native Scaling</span>
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
            AI-Native Operating System Built
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Baue dein AI-natives Operating System in 12 Monaten. Typische Ergebnisse: Decision Velocity +500-900%, ARR/Employee +100-200%, Operational Debt -60-80% – mit 2 von 3 Ergebnissen garantiert.'
            : 'Build your AI-native operating system in 12 months. Typical outcomes: Decision Velocity +500-900%, ARR/Employee +100-200%, Operational Debt -60-80%—with 2 of 3 outcomes guaranteed.'}
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
    { en: 'Low AI maturity: θ_index 0.2-0.5 (Level 1: AI-Powered), using AI as tool only', de: 'Niedrige AI-Reife: θ_index 0.2-0.5 (Level 1: AI-Powered), nutzt AI nur als Tool' },
    { en: 'Slow decision velocity: 7 days (benchmark: 24-48h for AI-enabled)', de: 'Langsame Decision Velocity: 7 Tage (Benchmark: 24-48h für AI-enabled)' },
    { en: 'Low ARR/Employee: €200K-€400K (benchmark: €800K-€1.2M for AI-enabled)', de: 'Niedriger ARR/Employee: €200K-€400K (Benchmark: €800K-€1.2M für AI-enabled)' },
    { en: 'High operational debt: 40-50% (benchmark: 10-15% for AI-enabled)', de: 'Hoher Operational Debt: 40-50% (Benchmark: 10-15% für AI-enabled)' },
    { en: 'Scaling chaos: Manual processes, no automation, coordination breakdown', de: 'Scaling Chaos: Manuelle Prozesse, keine Automation, Koordinationsbruch' },
  ];

  const beforeAfter = {
    before: [
      { metric: 'Decision Velocity', value: '7 days' },
      { metric: 'ARR/Employee', value: '€200K-€400K' },
      { metric: 'Operational Debt', value: '40-50%' },
      { metric: 'θ_index', value: '0.2-0.5 (Level 1)' },
    ],
    after: [
      { metric: 'Decision Velocity', value: '24-48 hours' },
      { metric: 'ARR/Employee', value: '€600K-€1.2M' },
      { metric: 'Operational Debt', value: '10-15%' },
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
            {language === 'de' ? 'Dein Operating System ist manuell — und bremst dich aus' : 'Your Operating System Is Manual—And Slowing You Down'}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Dein θ_index liegt bei 0.2-0.5 (Level 1: AI-Powered). Deine Decision Velocity liegt bei 7 Tagen (Benchmark: 24-48h für AI-enabled). Dein ARR/Employee liegt bei €200K-€400K (Benchmark: €800K-€1.2M für AI-enabled). Dein Operational Debt liegt bei 40-50% (Benchmark: 10-15% für AI-enabled). Und das Schlimmste—du skalierst Chaos, nicht Systeme.'
              : 'Your θ_index is 0.2-0.5 (Level 1: AI-Powered). Your decision velocity is 7 days (benchmark: 24-48h for AI-enabled). Your ARR/Employee is €200K-€400K (benchmark: €800K-€1.2M for AI-enabled). Your operational debt is 40-50% (benchmark: 10-15% for AI-enabled). And worst of all—you\'re scaling chaos, not scaling systems.'}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Du hast die offensichtlichen Fixes ausprobiert: Operations Manager einstellen, Tools kaufen, Prozess-Workshops. Aber nichts funktioniert. Denn das Problem ist nicht ein Prozess—es ist dein gesamtes Operating System. Du brauchst Level Transition.'
              : "You've tried the obvious fixes: hiring operations managers, buying tools, running process workshops. But nothing is working. Because the problem isn't one process—it's your entire operating system. You need Level Transition."}
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
              {language === 'de' ? 'Vorher (Level 1: Scaling Chaos)' : 'Before (Level 1: Scaling Chaos)'}
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
              {language === 'de' ? 'Nachher (Level 2: Scaling Systems)' : 'After (Level 2: Scaling Systems)'}
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
        { en: 'AI-Native Operating Model (vision, roadmap, investment)', de: 'AI-Native Operating Model (Vision, Roadmap, Investment)' },
        { en: 'Decision Architecture (how decisions are made)', de: 'Decision Architecture (wie Entscheidungen getroffen werden)' },
        { en: 'OKR Framework (how goals are set and tracked)', de: 'OKR Framework (wie Ziele gesetzt und getrackt werden)' },
        { en: 'Meeting Architecture (how coordination happens)', de: 'Meeting Architecture (wie Koordination passiert)' },
      ],
    },
    {
      icon: Settings,
      title: { en: 'C₂ Setup', de: 'C₂ Setup' },
      items: [
        { en: 'AI-Native Infrastructure (data, APIs, platforms)', de: 'AI-Native Infrastructure (Daten, APIs, Plattformen)' },
        { en: 'AI-Native Tools (which tools for which processes)', de: 'AI-Native Tools (welche Tools für welche Prozesse)' },
        { en: 'Process Architecture (how workflows integrate)', de: 'Process Architecture (wie Workflows integrieren)' },
        { en: 'Information Architecture (how knowledge flows)', de: 'Information Architecture (wie Wissen fließt)' },
      ],
    },
    {
      icon: Zap,
      title: { en: 'C₃ Execution', de: 'C₃ Execution' },
      items: [
        { en: 'AI-Native Decision-Making (AI-assisted, not manual)', de: 'AI-Native Decision-Making (AI-assisted, nicht manuell)' },
        { en: 'AI-Native Coordination (automated, not meeting-heavy)', de: 'AI-Native Coordination (automatisiert, nicht meeting-heavy)' },
        { en: 'AI-Native Learning (continuous improvement loops)', de: 'AI-Native Learning (kontinuierliche Verbesserungsschleifen)' },
        { en: 'AI-Native Execution (workflow automation)', de: 'AI-Native Execution (Workflow-Automation)' },
      ],
    },
    {
      icon: Users,
      title: { en: 'C₄ Operationalization', de: 'C₄ Operationalization' },
      items: [
        { en: 'AI-Native Culture (mindset shift, not just tools)', de: 'AI-Native Culture (Mindset Shift, nicht nur Tools)' },
        { en: 'AI-Native Processes (workflows, automation, systems)', de: 'AI-Native Processes (Workflows, Automation, Systeme)' },
        { en: 'AI-Native Measurement (how to track operating system performance)', de: 'AI-Native Measurement (wie man OS-Performance trackt)' },
      ],
    },
  ];

  const quarters = [
    {
      number: 'Q1',
      title: { en: 'Foundation', de: 'Foundation' },
      timeline: { en: 'Months 1-3', de: 'Monate 1-3' },
      items: [
        { en: 'AI-Native Operating Model (vision, roadmap, investment)', de: 'AI-Native Operating Model (Vision, Roadmap, Investment)' },
        { en: 'Decision Architecture (how decisions are made)', de: 'Decision Architecture (wie Entscheidungen getroffen werden)' },
        { en: 'AI-Native Setup (infrastructure, tools, architecture)', de: 'AI-Native Setup (Infrastruktur, Tools, Architektur)' },
        { en: 'Operating System Culture (mindset shift, not just tools)', de: 'Operating System Culture (Mindset Shift, nicht nur Tools)' },
      ],
      deliverable: { en: 'AI-Native Operating System Foundation (strategy + setup complete)', de: 'AI-Native Operating System Foundation (Strategy + Setup komplett)' },
      color: 'from-violet-500 to-purple-600',
    },
    {
      number: 'Q2-Q3',
      title: { en: 'Execution', de: 'Execution' },
      timeline: { en: 'Months 4-9', de: 'Monate 4-9' },
      items: [
        { en: 'Transform Decision-Making (7 days → 24-48 hours)', de: 'Decision-Making transformieren (7 Tage → 24-48 Stunden)' },
        { en: 'Transform Execution (workflow automation)', de: 'Execution transformieren (Workflow-Automation)' },
        { en: 'Transform Learning (continuous improvement loops)', de: 'Learning transformieren (kontinuierliche Verbesserungsschleifen)' },
        { en: 'Transform Coordination (async-first, reduce meetings 50-75%)', de: 'Coordination transformieren (async-first, Meetings um 50-75% reduzieren)' },
        { en: 'Transform Adaptive Capacity (AI-powered sensing)', de: 'Adaptive Capacity transformieren (AI-powered Sensing)' },
      ],
      deliverable: { en: 'AI-Native Operating System (all 5 dimensions live)', de: 'AI-Native Operating System (alle 5 Dimensionen live)' },
      color: 'from-cyan-500 to-blue-600',
    },
    {
      number: 'Q4',
      title: { en: 'Optimization', de: 'Optimization' },
      timeline: { en: 'Months 10-12', de: 'Monate 10-12' },
      items: [
        { en: 'Performance Optimization (fine-tune AI systems)', de: 'Performance Optimization (AI-Systeme fine-tunen)' },
        { en: 'Scale Preparation (infrastructure, team, processes)', de: 'Scale Preparation (Infrastruktur, Team, Prozesse)' },
        { en: 'Metrics Validation (validate level transition θ_index 0.5-0.8)', de: 'Metrics Validation (Level Transition validieren θ_index 0.5-0.8)' },
        { en: 'Handoff (train leadership team on AI-native operations)', de: 'Handoff (Leadership Team auf AI-native Operations trainieren)' },
      ],
      deliverable: { en: 'Level 2 achieved (AI-Native Operating System)', de: 'Level 2 erreicht (AI-Native Operating System)' },
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  const dimensions = [
    { icon: Brain, name: { en: 'Decision-Making', de: 'Decision-Making' }, description: { en: 'AI-assisted decisions, decision velocity tracking', de: 'AI-assisted Decisions, Decision Velocity Tracking' } },
    { icon: Target, name: { en: 'Execution', de: 'Execution' }, description: { en: 'Workflow automation, execution tracking', de: 'Workflow-Automation, Execution Tracking' } },
    { icon: RefreshCw, name: { en: 'Learning', de: 'Learning' }, description: { en: 'Continuous improvement loops, learning systems', de: 'Kontinuierliche Verbesserungsschleifen, Learning Systems' } },
    { icon: Users, name: { en: 'Coordination', de: 'Coordination' }, description: { en: 'AI-powered coordination, async-first communication', de: 'AI-powered Coordination, Async-First-Kommunikation' } },
    { icon: Layers, name: { en: 'Adaptive Capacity', de: 'Adaptive Capacity' }, description: { en: 'AI-powered sensing, adaptive planning', de: 'AI-powered Sensing, Adaptive Planning' } },
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
            {language === 'de' ? 'Wie wir dein AI-Native Operating System aufbauen' : 'How We Build Your AI-Native Operating System'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Wir optimieren nicht nur Prozesse. Wir transformieren dein gesamtes Operating System – von Level 1 (AI-Powered) zu Level 2 (AI-Enabled) – damit du AI-native skalierst.'
              : "We don't just optimize processes. We transform your entire operating system—from Level 1 (AI-Powered) to Level 2 (AI-Enabled)—so you achieve AI-native scaling."}
          </p>
        </div>

        {/* 5 Dimensions Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">
            {language === 'de' ? '5 Dimensionen transformiert:' : '5 Dimensions Transformed:'}
          </h3>
          <div className="grid md:grid-cols-5 gap-4">
            {dimensions.map((dim, index) => (
              <div key={index} className="bg-card border-2 border-border p-4 rounded-lg text-center">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <dim.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-bold text-foreground text-sm mb-1">
                  {language === 'de' ? dim.name.de : dim.name.en}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {language === 'de' ? dim.description.de : dim.description.en}
                </p>
              </div>
            ))}
          </div>
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
              { en: 'All 5 dimensions rebuilt (Decision-Making, Execution, Learning, Coordination, Adaptive Capacity)', de: 'Alle 5 Dimensionen rebuilt (Decision-Making, Execution, Learning, Coordination, Adaptive Capacity)' },
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
      metric: 'Decision Velocity +500-900%',
      icon: Zap,
      description: {
        en: 'Your decision velocity increases by 500-900%.',
        de: 'Deine Decision Velocity steigt um 500-900%.',
      },
      before: { en: '7 days (Level 1: manual decision-making)', de: '7 Tage (Level 1: manuelle Entscheidungsfindung)' },
      after: { en: '24-48 hours (Level 2: AI-assisted decision-making)', de: '24-48 Stunden (Level 2: AI-assisted Entscheidungsfindung)' },
      impact: { en: 'From "slow decisions" to "fast decisions"', de: 'Von "langsame Entscheidungen" zu "schnelle Entscheidungen"' },
      why: {
        en: 'We implement AI-assisted decision-making across all 5 dimensions—which increases decision velocity by 500-900% through automation and AI-powered insights.',
        de: 'Wir implementieren AI-assisted Decision-Making über alle 5 Dimensionen—was die Decision Velocity durch Automation und AI-powered Insights um 500-900% steigert.',
      },
    },
    {
      metric: 'ARR/Employee +100-200%',
      icon: TrendingUp,
      description: {
        en: 'Your ARR per employee increases by 100-200%.',
        de: 'Dein ARR pro Employee steigt um 100-200%.',
      },
      before: { en: '€200K-€400K (Level 1: manual operations)', de: '€200K-€400K (Level 1: manuelle Operations)' },
      after: { en: '€600K-€1.2M (Level 2: AI-enabled operations)', de: '€600K-€1.2M (Level 2: AI-enabled Operations)' },
      impact: { en: 'From "low efficiency" to "high efficiency"', de: 'Von "niedrige Effizienz" zu "hohe Effizienz"' },
      why: {
        en: 'We implement AI-native operating system across all 5 dimensions—which increases ARR/Employee by 100-200% through automation and workflow optimization.',
        de: 'Wir implementieren ein AI-natives Operating System über alle 5 Dimensionen—was den ARR/Employee durch Automation und Workflow-Optimierung um 100-200% steigert.',
      },
    },
    {
      metric: 'Operational Debt -60-80%',
      icon: BarChart3,
      description: {
        en: 'Your operational debt decreases by 60-80%.',
        de: 'Dein Operational Debt sinkt um 60-80%.',
      },
      before: { en: '40-50% (Level 1: technical + process debt)', de: '40-50% (Level 1: Technical + Process Debt)' },
      after: { en: '10-15% (Level 2: clean systems)', de: '10-15% (Level 2: saubere Systeme)' },
      impact: { en: 'From "scaling chaos" to "scaling systems"', de: 'Von "Scaling Chaos" zu "Scaling Systems"' },
      why: {
        en: 'We rebuild your operating system from scratch—which reduces operational debt by 60-80% through systematic cleanup and AI-native architecture.',
        de: 'Wir bauen dein Operating System von Grund auf neu—was den Operational Debt durch systematischen Cleanup und AI-native Architektur um 60-80% reduziert.',
      },
    },
  ];

  const realExample = {
    company: 'Series B SaaS, €28M ARR, 140 employees',
    challenge: {
      en: 'Level 1 (θ_index 0.4), Decision Velocity 8 days, ARR/Employee €200K, Operational Debt 45%',
      de: 'Level 1 (θ_index 0.4), Decision Velocity 8 Tage, ARR/Employee €200K, Operational Debt 45%',
    },
    problems: {
      en: 'Manual processes, meeting overload (40% of time), no automation, coordination breakdown',
      de: 'Manuelle Prozesse, Meeting Overload (40% der Zeit), keine Automation, Koordinationsbruch',
    },
    transformation: {
      en: 'AI-native operating system built (all 5 dimensions transformed) over 12 months',
      de: 'AI-natives Operating System aufgebaut (alle 5 Dimensionen transformiert) über 12 Monate',
    },
    results: [
      { metric: 'Decision Velocity', value: '+750% (8d → 24h)' },
      { metric: 'ARR/Employee', value: '+150% (€200K → €500K)' },
      { metric: 'Operational Debt', value: '-67% (45% → 15%)' },
      { metric: 'θ_index', value: '+0.35 (0.4 → 0.75)' },
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
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'Operating-Probleme:' : 'Operating Problems:'}</p>
              <p className="font-medium text-foreground">{language === 'de' ? realExample.problems.de : realExample.problems.en}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'Transformation:' : 'Transformation:'}</p>
              <p className="font-medium text-foreground">{language === 'de' ? realExample.transformation.de : realExample.transformation.en}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-4 gap-4">
            {realExample.results.map((result, index) => (
              <div key={index} className="bg-card border border-border p-4 rounded-lg text-center">
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
        { en: 'AI-Native Operating Model (vision, roadmap, investment)', de: 'AI-Native Operating Model (Vision, Roadmap, Investment)' },
        { en: 'Decision Architecture (how decisions are made)', de: 'Decision Architecture (wie Entscheidungen getroffen werden)' },
        { en: 'AI-Native Setup (infrastructure, tools, architecture)', de: 'AI-Native Setup (Infrastruktur, Tools, Architektur)' },
        { en: 'Operating System Culture (mindset shift, not just tools)', de: 'Operating System Culture (Mindset Shift, nicht nur Tools)' },
      ],
      deliverables: [
        { en: 'AI-Native Operating System Report (80-100 pages)', de: 'AI-Native Operating System Report (80-100 Seiten)' },
        { en: 'Operating System Roadmap (12-month plan)', de: 'Operating System Roadmap (12-Monats-Plan)' },
        { en: 'AI-Native Foundation (strategy + setup complete)', de: 'AI-Native Foundation (Strategy + Setup komplett)' },
      ],
      commitment: { en: '30-40 hours', de: '30-40 Stunden' },
    },
    {
      title: { en: 'Execution', de: 'Execution' },
      timeline: { en: 'Q2-Q3 (Months 4-9)', de: 'Q2-Q3 (Monate 4-9)' },
      activities: [
        { en: 'Transform all 5 dimensions (Decision-Making, Execution, Learning, Coordination, Adaptive Capacity)', de: 'Alle 5 Dimensionen transformieren (Decision-Making, Execution, Learning, Coordination, Adaptive Capacity)' },
        { en: 'Implement AI-native systems (AI-assisted decisions, workflow automation, async coordination)', de: 'AI-native Systeme implementieren (AI-assisted Decisions, Workflow-Automation, Async Coordination)' },
        { en: 'Train leadership team (on AI-native operations)', de: 'Leadership Team trainieren (auf AI-native Operations)' },
      ],
      deliverables: [
        { en: 'AI-Native Operating System (all 5 dimensions live)', de: 'AI-Native Operating System (alle 5 Dimensionen live)' },
        { en: 'AI-Native Systems (deployed, not just pilots)', de: 'AI-Native Systems (deployed, nicht nur Pilots)' },
        { en: 'Team training (leadership playbooks for AI-native operations)', de: 'Team Training (Leadership Playbooks für AI-native Operations)' },
      ],
      commitment: { en: '40-60 hours', de: '40-60 Stunden' },
    },
    {
      title: { en: 'Optimization', de: 'Optimization' },
      timeline: { en: 'Q4 (Months 10-12)', de: 'Q4 (Monate 10-12)' },
      activities: [
        { en: 'Optimize AI-native systems (improve accuracy, reduce costs)', de: 'AI-native Systeme optimieren (Accuracy verbessern, Kosten reduzieren)' },
        { en: 'Validate level transition (θ_index 0.2-0.5 → 0.5-0.8)', de: 'Level Transition validieren (θ_index 0.2-0.5 → 0.5-0.8)' },
        { en: 'Create scale playbook (how to maintain AI-native operating system)', de: 'Scale Playbook erstellen (wie man das AI-native OS beibehält)' },
      ],
      deliverables: [
        { en: 'Metrics Dashboard (real-time tracking)', de: 'Metriken-Dashboard (Echtzeit-Tracking)' },
        { en: 'Validated Level 2 (with before/after data)', de: 'Validiertes Level 2 (mit Vorher/Nachher-Daten)' },
        { en: 'Scale Playbook (step-by-step guide)', de: 'Scale Playbook (Schritt-für-Schritt-Guide)' },
      ],
      commitment: { en: '20-30 hours', de: '20-30 Stunden' },
    },
  ];

  const metrics = [
    { name: 'Decision Velocity', description: { en: 'days → hours', de: 'Tage → Stunden' } },
    { name: 'ARR/Employee', description: { en: '€', de: '€' } },
    { name: 'Operational Debt', description: { en: '%', de: '%' } },
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
                'Decision Velocity +500-900%',
                'ARR/Employee +100-200%',
                'Operational Debt -60-80%',
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
      title: { en: "You're Level 1 and need to become Level 2", de: 'Du bist Level 1 und musst Level 2 werden' },
      items: [
        { en: 'θ_index is 0.2-0.5 (Level 1: AI-Powered)', de: 'θ_index liegt bei 0.2-0.5 (Level 1: AI-Powered)' },
        { en: 'Operating system is manual (no automation, meeting-heavy)', de: 'Operating System ist manuell (keine Automation, meeting-heavy)' },
        { en: 'You have 12 months to achieve level transition', de: 'Du hast 12 Monate für Level Transition' },
      ],
    },
    {
      title: { en: 'You need full operating system transformation', de: 'Du brauchst eine vollständige OS-Transformation' },
      items: [
        { en: 'Do you need to transform decision-making? (AI-assisted decisions?)', de: 'Musst du Decision-Making transformieren? (AI-assisted Decisions?)' },
        { en: 'Do you need to transform execution? (workflow automation?)', de: 'Musst du Execution transformieren? (Workflow-Automation?)' },
        { en: 'Do you need to transform coordination? (async-first, reduce meetings?)', de: 'Musst du Coordination transformieren? (async-first, Meetings reduzieren?)' },
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
      title: { en: 'You only need to optimize one process', de: 'Du musst nur einen Prozess optimieren' },
      description: { en: 'If you just need to fix operations, finance, or talent (not full operating system), Accelerate is overkill', de: 'Wenn du nur Operations, Finance oder Talent fixen musst (nicht das gesamte OS), ist Accelerate Overkill' },
      alternative: { en: 'Boost (90 days, €60K-€78K) for single process optimization', de: 'Boost (90 Tage, €60K-€78K) für einzelne Prozess-Optimierung' },
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
              ? 'Accelerate: AI-Native Scaling funktioniert am besten für Unternehmen in dieser Situation.'
              : 'Accelerate: AI-Native Scaling works best for companies in this situation.'}
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
      question: { en: "What if it doesn't work?", de: 'Was, wenn es nicht funktioniert?' },
      answer: { en: "We guarantee 2 of 3 outcomes (Decision Velocity +500-900%, ARR/Employee +100-200%, Operational Debt -60-80%). If we don't hit 2 of 3, you get 50% refund.", de: 'Wir garantieren 2 von 3 Ergebnissen (Decision Velocity +500-900%, ARR/Employee +100-200%, Operational Debt -60-80%). Wenn wir 2 von 3 nicht erreichen, bekommst du 50% Rückerstattung.' },
    },
    {
      question: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' },
      answer: { en: "Yes. We'll connect you with a CEO who's achieved Level 2 with us (same stage, same challenge).", de: 'Ja. Wir verbinden dich mit einem CEO, der Level 2 mit uns erreicht hat (gleiche Stage, gleiche Herausforderung).' },
    },
    {
      question: { en: "What's the ROI?", de: 'Was ist der ROI?' },
      answer: { en: 'Typical ROI is 10-20x (based on efficiency gains and scaling velocity over 12 months).', de: 'Typischer ROI ist 10-20x (basierend auf Effizienzgewinnen und Scaling Velocity über 12 Monate).' },
    },
    {
      question: { en: 'How is this different from Boost?', de: 'Wie unterscheidet sich das von Boost?' },
      answer: { en: 'Boost (90 days, €60K-€78K) optimizes 1 operating system dimension. Accelerate (12 months, €153K) transforms all 5 dimensions + achieves level transition (Level 1 → Level 2).', de: 'Boost (90 Tage, €60K-€78K) optimiert 1 OS-Dimension. Accelerate (12 Monate, €153K) transformiert alle 5 Dimensionen + erreicht Level Transition (Level 1 → Level 2).' },
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
            {language === 'de' ? 'Bereit, dein AI-Native Operating System aufzubauen?' : 'Ready to Build Your AI-Native Operating System?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de' ? "Hier ist, was als nächstes passiert." : "Here's what happens next."}
          </p>
        </div>

        {/* Step 1 */}
        <div className="bg-card border-2 border-accent p-8 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-foreground mb-4">
            {language === 'de' ? 'Schritt 1: Buche ein kostenloses Inflection Call (30 Min.)' : 'Step 1: Book a Free Inflection Call (30 min)'}
          </h3>
          <p className="text-muted-foreground mb-6">
            {language === 'de'
              ? 'In 30 Minuten: Wir bewerten dein Operating System (θ_index, Decision Velocity, Operational Debt), zeigen dir genau, wie wir dich zu Level 2 transformieren würden (mit Beispielen), und geben dir eine klare Empfehlung (Accelerate, Boost oder DIY).'
              : "In 30 minutes, we'll: Assess your operating system (θ_index, decision velocity, operational debt), show you exactly how we'd transform you to Level 2 (with examples), and give you a clear recommendation (Accelerate, Boost, or DIY)."}
          </p>
          <p className="text-sm text-accent font-medium mb-6">
            {language === 'de' ? 'Kein Pitch. Kein Druck. Nur Klarheit.' : 'No pitch. No pressure. Just clarity.'}
          </p>
          <Button
            size="xl"
            className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold py-7 text-cta uppercase tracking-wide shadow-accent-glow"
            onClick={() => window.open('https://calendly.com/michel-scalingx/inflection-call', '_blank')}
          >
            {language === 'de' ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book Free Inflection Call (30 min)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Step 2 */}
        <div className="bg-card border-2 border-border p-8 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-foreground mb-4">
            {language === 'de' ? 'Schritt 2: Entscheide, ob Accelerate richtig für dich ist' : 'Step 2: Decide if Accelerate is Right for You'}
          </h3>
          <p className="text-muted-foreground mb-4">
            {language === 'de' ? 'Nach dem Inflection Call wirst du wissen:' : "After the Inflection Call, you'll know:"}
          </p>
          <ul className="space-y-2 mb-4">
            {[
              { en: 'What your operating system maturity is (Level 1, 2, or 3?)', de: 'Was deine OS-Reife ist (Level 1, 2 oder 3?)' },
              { en: "How we'd transform you to Level 2 (and in what order)", de: 'Wie wir dich zu Level 2 transformieren würden (und in welcher Reihenfolge)' },
              { en: 'What outcomes to expect (Decision Velocity, ARR/Employee, Operational Debt)', de: 'Welche Ergebnisse zu erwarten sind (Decision Velocity, ARR/Employee, Operational Debt)' },
              { en: 'Whether Accelerate is the right fit (or if you need Boost)', de: 'Ob Accelerate der richtige Fit ist (oder ob du Boost brauchst)' },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{language === 'de' ? item.de : item.en}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground font-medium">
            {language === 'de' ? 'Du entscheidest. Kein Druck.' : 'You decide. No pressure.'}
          </p>
        </div>

        {/* Alternative */}
        <div className="bg-secondary/30 border-2 border-border p-8 rounded-lg mb-12">
          <h3 className="text-xl font-bold text-foreground mb-4">
            {language === 'de' ? 'Alternative: Starte mit einem Operating System Assessment' : 'Alternative: Start with an Operating System Assessment'}
          </h3>
          <p className="text-muted-foreground mb-4">
            {language === 'de' ? 'Noch nicht bereit für ein volles Accelerate? Starte kleiner:' : 'Not ready for a full Accelerate? Start smaller:'}
          </p>
          <div className="bg-card border border-border p-4 rounded-lg mb-4">
            <h4 className="font-bold text-foreground">AI Maturity Assessment (1-2 {language === 'de' ? 'Wochen' : 'weeks'}, €3.9K-€5.9K)</h4>
            <ul className="mt-2 space-y-1">
              {[
                { en: 'Deep-dive into your operating system (θ_index, 5 dimensions)', de: 'Deep-Dive in dein Operating System (θ_index, 5 Dimensionen)' },
                { en: 'Identify which dimensions to transform first', de: 'Identifiziere, welche Dimensionen zuerst transformiert werden' },
                { en: 'Walk away with a 12-month AI-native operating system roadmap', de: 'Gehe mit einem 12-Monats AI-native OS Roadmap' },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                  <span>{language === 'de' ? item.de : item.en}</span>
                </li>
              ))}
            </ul>
          </div>
          <Button variant="outline" className="w-full border-2">
            {language === 'de' ? 'AI Maturity Assessment buchen' : 'Book AI Maturity Assessment'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">FAQ</h3>
          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-card border-2 border-border rounded-lg px-4">
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                  {language === 'de' ? faq.question.de : faq.question.en}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {language === 'de' ? faq.answer.de : faq.answer.en}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-12 py-7 text-cta uppercase tracking-wide shadow-accent-glow"
            onClick={() => window.open('https://calendly.com/michel-scalingx/inflection-call', '_blank')}
          >
            {language === 'de' ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book Free Inflection Call (30 min)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            {language === 'de'
              ? 'Noch Fragen? Schreib uns an team@scalingx.io oder buche einen Call.'
              : 'Still have questions? Email us at team@scalingx.io or book a call.'}
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const AccelerateAINativeScaling: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
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

export default AccelerateAINativeScaling;
