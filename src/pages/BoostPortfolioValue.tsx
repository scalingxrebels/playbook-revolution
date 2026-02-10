import React, { useEffect, useState } from 'react';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
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
  TrendingUp,
  BarChart3,
  Target,
  Users,
  FileText,
  MessageCircle,
  Shield,
  Sparkles,
  Layers,
  Zap,
  Brain,
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
    { value: '+30-50pp', label: { en: 'Portfolio IRR', de: 'Portfolio IRR' }, sublabel: { en: 'Increase', de: 'Steigerung' } },
    { value: '+50-100%', label: { en: 'Portfolio Value', de: 'Portfolio Value' }, sublabel: { en: 'Increase', de: 'Steigerung' } },
    { value: '3-5', label: { en: 'Companies Transformed', de: 'Unternehmen transformiert' }, sublabel: { en: 'In parallel', de: 'Parallel' } },
  ];

  const trustBadges = [
    { icon: Shield, label: { en: '2 of 3 Outcomes Guaranteed (or 50% Refund)', de: '2 von 3 Ergebnissen garantiert (oder 50% Rückerstattung)' } },
    { icon: Layers, label: { en: '90-Day Transformation', de: '90-Tage-Transformation' } },
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
              <span className="text-foreground font-medium">Boost Portfolio Value</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Badge */}
        <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Sparkles className="w-4 h-4 mr-2" />
          Boost · 90 {language === 'de' ? 'Tage' : 'Days'} · €60K-€78K
        </Badge>

        {/* Headline */}
        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">Portfolio Underperformance →</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            Portfolio Value Built
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Baue deinen Portfolio Value in 90 Tagen. Typische Ergebnisse: Portfolio IRR +30-50pp, Portfolio Value +50-100%, 3-5 Unternehmen transformiert – mit 2 von 3 Ergebnissen garantiert.'
            : 'Build your portfolio value in 90 days. Typical outcomes: Portfolio IRR +30-50pp, Portfolio Value +50-100%, Companies Transformed 3-5—with 2 of 3 outcomes guaranteed.'}
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
    { en: 'Low portfolio IRR: 15% (benchmark: 45%+), underperforming vs. market', de: 'Niedriger Portfolio IRR: 15% (Benchmark: 45%+), underperformt vs. Markt' },
    { en: 'Stagnant portfolio value: Flat growth (benchmark: +100% annually)', de: 'Stagnierender Portfolio Value: Flaches Wachstum (Benchmark: +100% jährlich)' },
    { en: 'Companies struggling: 5-10 companies (out of 15-20) below targets', de: 'Kämpfende Unternehmen: 5-10 Unternehmen (von 15-20) unter Zielen' },
    { en: 'No systematic support: Ad-hoc help, no playbooks, no operating team', de: 'Keine systematische Unterstützung: Ad-hoc Hilfe, keine Playbooks, kein Operating Team' },
    { en: 'LP pressure: "Why is portfolio performance so weak?"', de: 'LP-Druck: "Warum ist die Portfolio-Performance so schwach?"' },
  ];

  const beforeAfter = {
    before: [
      { metric: 'Portfolio IRR', value: '15%' },
      { metric: 'Portfolio Value', value: 'Stagnant' },
      { metric: 'Companies Transformed', value: '0' },
    ],
    after: [
      { metric: 'Portfolio IRR', value: '45-65%' },
      { metric: 'Portfolio Value', value: '+50-100%' },
      { metric: 'Companies Transformed', value: '3-5' },
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
            {language === 'de' ? 'Dein Portfolio underperformed' : 'Your Portfolio Is Underperforming'}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Dein Portfolio IRR liegt bei 15% (Benchmark: 45%+). Dein Portfolio Value stagniert (Benchmark: +100% jährlich). 5-10 Unternehmen kämpfen (von 15-20 insgesamt). Und das Schlimmste: Deine LPs fragen: "Warum ist die Portfolio-Performance so schwach?"'
              : 'Your portfolio IRR is 15% (benchmark: 45%+). Your portfolio value is stagnant (benchmark: +100% annually). You have 5-10 companies struggling (out of 15-20 total). And worst of all—your LPs are asking: "Why is portfolio performance so weak?"'}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Du hast die offensichtlichen Fixes versucht: Berater engagiert, Workshops durchgeführt, Unternehmen vernetzt. Aber nichts funktioniert. Denn das Problem ist nicht ein Portfolio-Issue – es ist dein gesamtes Portfolio Operating System.'
              : "You've tried the obvious fixes: hiring advisors, running workshops, connecting companies. But nothing is working. Because the problem isn't one portfolio issue—it's your entire portfolio operating system."}
          </p>
        </div>

        {/* Symptoms Checklist */}
        <div className="max-w-2xl mx-auto mb-16">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">
            {language === 'de' ? 'Portfolio Symptome:' : 'Portfolio Symptoms:'}
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
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Before */}
          <div className="bg-destructive/10 border-2 border-destructive/30 p-6 rounded-lg">
            <h4 className="text-sm font-bold uppercase tracking-widest text-destructive mb-4 text-center">
              {language === 'de' ? 'Vorher' : 'Before'}
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
              {language === 'de' ? 'Nachher' : 'After'}
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

  const transformations = [
    {
      icon: TrendingUp,
      title: { en: 'Company A: CAC Optimization', de: 'Unternehmen A: CAC Optimierung' },
      items: [
        { en: 'Diagnose CAC crisis (CAC €5K → target €2K-€3K)', de: 'CAC-Krise diagnostizieren (CAC €5K → Ziel €2K-€3K)' },
        { en: 'Build efficient hypergrowth engine (LTV/CAC 1.5x → 4x+)', de: 'Effizienten Hypergrowth Engine bauen (LTV/CAC 1.5x → 4x+)' },
        { en: 'Implement AI-powered GTM (AI SDRs, predictive lead scoring)', de: 'AI-powered GTM implementieren (AI SDRs, Predictive Lead Scoring)' },
        { en: 'Track outcomes (CAC -40-60%, LTV/CAC +100-200%)', de: 'Outcomes tracken (CAC -40-60%, LTV/CAC +100-200%)' },
      ],
    },
    {
      icon: Users,
      title: { en: 'Company B: NRR Boost', de: 'Unternehmen B: NRR Boost' },
      items: [
        { en: 'Diagnose customer success breakdown (Churn 20% → target <10%)', de: 'Customer Success Breakdown diagnostizieren (Churn 20% → Ziel <10%)' },
        { en: 'Build retention loops (onboarding, engagement, expansion)', de: 'Retention Loops bauen (Onboarding, Engagement, Expansion)' },
        { en: 'Implement CS operations (playbooks, metrics, automation)', de: 'CS Operations implementieren (Playbooks, Metriken, Automation)' },
        { en: 'Track outcomes (Churn -50-75%, NRR +30-50pp)', de: 'Outcomes tracken (Churn -50-75%, NRR +30-50pp)' },
      ],
    },
    {
      icon: Brain,
      title: { en: 'Company C: AI Transformation', de: 'Unternehmen C: AI Transformation' },
      items: [
        { en: 'Diagnose AI maturity (θ_index 0.3 → target 0.6-0.8)', de: 'AI Maturity diagnostizieren (θ_index 0.3 → Ziel 0.6-0.8)' },
        { en: 'Build AI use cases (10-20 use cases across GTM, product, operations)', de: 'AI Use Cases bauen (10-20 Use Cases in GTM, Product, Operations)' },
        { en: 'Implement AI automation (workflow automation, not just tools)', de: 'AI Automation implementieren (Workflow Automation, nicht nur Tools)' },
        { en: 'Track outcomes (θ_index +0.3-0.5, Automation +40-60%)', de: 'Outcomes tracken (θ_index +0.3-0.5, Automation +40-60%)' },
      ],
    },
  ];

  const phases = [
    {
      number: '1',
      title: { en: 'Diagnose', de: 'Diagnose' },
      timeline: { en: 'Week 1-2', de: 'Woche 1-2' },
      items: [
        { en: 'Portfolio Assessment: Which companies need help?', de: 'Portfolio Assessment: Welche Unternehmen brauchen Hilfe?' },
        { en: 'Bottleneck Analysis: What\'s holding them back?', de: 'Bottleneck Analyse: Was hält sie zurück?' },
        { en: 'Prioritization: Which 3-5 companies to transform first?', de: 'Priorisierung: Welche 3-5 Unternehmen zuerst transformieren?' },
        { en: 'Playbook Design: What playbooks do you need?', de: 'Playbook Design: Welche Playbooks brauchst du?' },
      ],
      deliverable: { en: 'Portfolio Transformation Report (30-40 pages) + 90-Day Roadmap', de: 'Portfolio Transformation Report (30-40 Seiten) + 90-Tage-Roadmap' },
      color: 'from-violet-500 to-purple-600',
    },
    {
      number: '2',
      title: { en: 'Build', de: 'Build' },
      timeline: { en: 'Week 3-8', de: 'Woche 3-8' },
      items: [
        { en: 'Transform 3-5 companies in parallel (CAC, NRR, AI, custom)', de: '3-5 Unternehmen parallel transformieren (CAC, NRR, AI, custom)' },
        { en: 'Implement playbooks (systematic, not ad-hoc)', de: 'Playbooks implementieren (systematisch, nicht ad-hoc)' },
        { en: 'Train portfolio CEOs (on execution, not just strategy)', de: 'Portfolio CEOs trainieren (auf Execution, nicht nur Strategy)' },
      ],
      deliverable: { en: '3-5 companies transformed (measurable outcomes)', de: '3-5 Unternehmen transformiert (messbare Outcomes)' },
      color: 'from-cyan-500 to-blue-600',
    },
    {
      number: '3',
      title: { en: 'Validate', de: 'Validieren' },
      timeline: { en: 'Week 9-12', de: 'Woche 9-12' },
      items: [
        { en: 'Metrics Tracking: Portfolio IRR, Portfolio Value, Company Outcomes', de: 'Metriken-Tracking: Portfolio IRR, Portfolio Value, Company Outcomes' },
        { en: 'Playbook Documentation: How to replicate across remaining portfolio', de: 'Playbook-Dokumentation: Wie man über restliches Portfolio repliziert' },
        { en: 'Operating Team Training: How to run portfolio transformations internally', de: 'Operating Team Training: Wie man Portfolio-Transformationen intern durchführt' },
      ],
      deliverable: { en: 'Validated Portfolio Value + Scalable Playbooks', de: 'Validierter Portfolio Value + Skalierbare Playbooks' },
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
            {language === 'de' ? 'Wie wir deinen Portfolio Value aufbauen' : 'How We Build Your Portfolio Value'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Wir beraten Portfolio-Unternehmen nicht nur. Wir bauen dein gesamtes Portfolio Operating System neu auf – damit du systematische Wertschöpfung über 3-5 Unternehmen erreichst.'
              : "We don't just advise portfolio companies. We rebuild your entire portfolio operating system—so you achieve systematic value creation across 3-5 companies."}
          </p>
        </div>

        {/* Phases Timeline */}
        <div className="space-y-8 mb-16">
          {phases.map((phase, index) => (
            <Collapsible key={index} defaultOpen={index === 0}>
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
                <CollapsibleTrigger className="w-full p-6 flex items-center gap-4 hover:bg-muted/30 transition-colors group">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {phase.number}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-foreground">
                        {language === 'de' ? phase.title.de : phase.title.en}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {language === 'de' ? phase.timeline.de : phase.timeline.en}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {language === 'de' ? phase.deliverable.de : phase.deliverable.en}
                    </p>
                  </div>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-data-[state=open]:rotate-180 transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 pt-2 border-t border-border">
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
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

        {/* Parallel Transformations Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">
            {language === 'de' ? 'Parallele Transformationen (Week 3-8):' : 'Parallel Transformations (Week 3-8):'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {transformations.map((transformation, index) => (
              <div key={index} className="bg-card border-2 border-border p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <transformation.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-bold text-foreground text-sm">
                    {language === 'de' ? transformation.title.de : transformation.title.en}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {transformation.items.map((item, itemIndex) => (
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
              { en: 'Parallel transformation (3-5 companies at once)', de: 'Parallele Transformation (3-5 Unternehmen gleichzeitig)' },
              { en: 'Systematic approach (playbooks, not ad-hoc)', de: 'Systematischer Ansatz (Playbooks, nicht ad-hoc)' },
              { en: 'Hands-on execution (we implement, not just advise)', de: 'Hands-on Execution (wir implementieren, beraten nicht nur)' },
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
      metric: 'Portfolio IRR +30-50pp',
      icon: TrendingUp,
      description: {
        en: 'Your portfolio IRR increases by 30-50 percentage points.',
        de: 'Dein Portfolio IRR steigt um 30-50 Prozentpunkte.',
      },
      before: { en: 'Portfolio IRR 15% (underperforming vs. 45% benchmark)', de: 'Portfolio IRR 15% (underperformt vs. 45% Benchmark)' },
      after: { en: 'Portfolio IRR 45-65% (outperforming benchmark)', de: 'Portfolio IRR 45-65% (outperformt Benchmark)' },
      impact: { en: 'From "underperforming portfolio" to "top-quartile portfolio"', de: 'Von "underperformendem Portfolio" zu "Top-Quartile Portfolio"' },
      why: {
        en: 'We transform 3-5 companies systematically—which increases portfolio IRR by 30-50pp through improved company performance and faster growth.',
        de: 'Wir transformieren 3-5 Unternehmen systematisch—was Portfolio IRR durch verbesserte Company Performance und schnelleres Wachstum um 30-50pp steigert.',
      },
    },
    {
      metric: 'Portfolio Value +50-100%',
      icon: BarChart3,
      description: {
        en: 'Your portfolio value increases by 50-100%.',
        de: 'Dein Portfolio Value steigt um 50-100%.',
      },
      before: { en: 'Portfolio value €150M (stagnant growth)', de: 'Portfolio Value €150M (stagnierendes Wachstum)' },
      after: { en: 'Portfolio value €225M-€300M (strong growth)', de: 'Portfolio Value €225M-€300M (starkes Wachstum)' },
      impact: { en: 'From "stagnant portfolio" to "growing portfolio"', de: 'Von "stagnierendem Portfolio" zu "wachsendem Portfolio"' },
      why: {
        en: 'We improve key metrics across 3-5 companies (CAC, NRR, Rule of 40)—which increases portfolio value by 50-100% through valuation multiples and growth.',
        de: 'Wir verbessern Schlüsselmetriken über 3-5 Unternehmen (CAC, NRR, Rule of 40)—was Portfolio Value durch Valuation Multiples und Wachstum um 50-100% steigert.',
      },
    },
    {
      metric: 'Companies Transformed 3-5',
      icon: Target,
      description: {
        en: 'You transform 3-5 companies in 90 days.',
        de: 'Du transformierst 3-5 Unternehmen in 90 Tagen.',
      },
      before: { en: '0 companies transformed (ad-hoc support only)', de: '0 Unternehmen transformiert (nur ad-hoc Support)' },
      after: { en: '3-5 companies transformed (systematic transformation)', de: '3-5 Unternehmen transformiert (systematische Transformation)' },
      impact: { en: 'From "no operating system" to "scalable operating system"', de: 'Von "kein Operating System" zu "skalierbares Operating System"' },
      why: {
        en: 'We run parallel transformations across 3-5 companies—which creates systematic value creation and replicable playbooks.',
        de: 'Wir führen parallele Transformationen über 3-5 Unternehmen durch—was systematische Wertschöpfung und replizierbare Playbooks schafft.',
      },
    },
  ];

  const realExample = {
    company: { en: 'Series B focus, €200M AUM, 15 portfolio companies', de: 'Series B Fokus, €200M AUM, 15 Portfolio-Unternehmen' },
    challenge: {
      en: 'Portfolio IRR 18%, 6 companies struggling, no systematic support',
      de: 'Portfolio IRR 18%, 6 Unternehmen kämpfen, keine systematische Unterstützung',
    },
    problems: {
      en: 'Ad-hoc advice, no playbooks, no operating team, LP pressure',
      de: 'Ad-hoc Beratung, keine Playbooks, kein Operating Team, LP-Druck',
    },
    transformation: {
      en: 'Portfolio value built (3 companies transformed: CAC optimization, NRR boost, AI transformation) over 90 days',
      de: 'Portfolio Value aufgebaut (3 Unternehmen transformiert: CAC Optimierung, NRR Boost, AI Transformation) über 90 Tage',
    },
    results: [
      { metric: 'Portfolio IRR', value: '+35pp (18% → 53%)' },
      { metric: 'Portfolio Value', value: '+75% (€200M → €350M)' },
      { metric: 'Companies', value: '3 transformed' },
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
            {language === 'de' ? 'Typische Ergebnisse (90 Tage)' : 'Typical Outcomes (90 Days)'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Das sind echte Ergebnisse von VC/PE Firms wie deiner (Series A-C Fokus, 10-30 Portfolio-Unternehmen).'
              : 'These are real results from VC/PE firms like yours (Series A-C focus, 10-30 portfolio companies).'}
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
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'VC Firm:' : 'VC Firm:'}</p>
              <p className="font-medium text-foreground">{language === 'de' ? realExample.company.de : realExample.company.en}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'Herausforderung:' : 'Challenge:'}</p>
              <p className="font-medium text-foreground">{language === 'de' ? realExample.challenge.de : realExample.challenge.en}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'Portfolio-Probleme:' : 'Portfolio Problems:'}</p>
              <p className="font-medium text-foreground">{language === 'de' ? realExample.problems.de : realExample.problems.en}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'Transformation:' : 'Transformation:'}</p>
              <p className="font-medium text-foreground">{language === 'de' ? realExample.transformation.de : realExample.transformation.en}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-accent/20">
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
      title: { en: 'Diagnose', de: 'Diagnose' },
      timeline: { en: 'Week 1-2', de: 'Woche 1-2' },
      commitment: { en: '12-16 hours', de: '12-16 Stunden' },
      activities: [
        { en: 'Portfolio Assessment (which companies need help?)', de: 'Portfolio Assessment (welche Unternehmen brauchen Hilfe?)' },
        { en: 'Bottleneck Analysis (what\'s holding them back?)', de: 'Bottleneck Analyse (was hält sie zurück?)' },
        { en: 'Prioritization (which 3-5 companies first?)', de: 'Priorisierung (welche 3-5 Unternehmen zuerst?)' },
        { en: 'Playbook Design (what playbooks do you need?)', de: 'Playbook Design (welche Playbooks brauchst du?)' },
      ],
      deliverables: [
        { en: 'Portfolio Transformation Report (30-40 pages)', de: 'Portfolio Transformation Report (30-40 Seiten)' },
        { en: 'Portfolio Heatmap (visual overview)', de: 'Portfolio Heatmap (visueller Überblick)' },
        { en: '90-Day Roadmap (phased implementation)', de: '90-Tage-Roadmap (phasenweise Implementierung)' },
        { en: 'ROI Prediction (15-30x over 12 months)', de: 'ROI-Prognose (15-30x über 12 Monate)' },
      ],
    },
    {
      title: { en: 'Build', de: 'Build' },
      timeline: { en: 'Week 3-8', de: 'Woche 3-8' },
      commitment: { en: '20-30 hours', de: '20-30 Stunden' },
      activities: [
        { en: 'Transform 3-5 companies (parallel, not sequential)', de: '3-5 Unternehmen transformieren (parallel, nicht sequenziell)' },
        { en: 'Implement playbooks (CAC, NRR, AI, custom)', de: 'Playbooks implementieren (CAC, NRR, AI, custom)' },
        { en: 'Train portfolio CEOs (on execution, not just strategy)', de: 'Portfolio CEOs trainieren (auf Execution, nicht nur Strategy)' },
      ],
      deliverables: [
        { en: '3-5 companies transformed (measurable outcomes)', de: '3-5 Unternehmen transformiert (messbare Outcomes)' },
        { en: 'Playbooks documented (replicable across portfolio)', de: 'Playbooks dokumentiert (replizierbar über Portfolio)' },
        { en: 'Portfolio CEOs trained (on systematic execution)', de: 'Portfolio CEOs trainiert (auf systematische Execution)' },
      ],
    },
    {
      title: { en: 'Validate', de: 'Validieren' },
      timeline: { en: 'Week 9-12', de: 'Woche 9-12' },
      commitment: { en: '10-15 hours', de: '10-15 Stunden' },
      activities: [
        { en: 'Track metrics (Portfolio IRR, Portfolio Value, Company Outcomes)', de: 'Metriken tracken (Portfolio IRR, Portfolio Value, Company Outcomes)' },
        { en: 'Validate impact (is portfolio value created?)', de: 'Impact validieren (ist Portfolio Value entstanden?)' },
        { en: 'Create scale playbook (how to replicate across remaining portfolio)', de: 'Scale Playbook erstellen (wie über restliches Portfolio replizieren)' },
      ],
      deliverables: [
        { en: 'Metrics Dashboard (real-time tracking)', de: 'Metrics Dashboard (Real-time Tracking)' },
        { en: 'Validated outcomes (with before/after data)', de: 'Validierte Outcomes (mit Vorher/Nachher-Daten)' },
        { en: 'Scale Playbook (step-by-step guide)', de: 'Scale Playbook (Schritt-für-Schritt Anleitung)' },
      ],
    },
  ];

  const metrics = [
    { name: 'Portfolio IRR', description: { en: 'Percentage (%)', de: 'Prozent (%)' } },
    { name: 'Portfolio Value', description: { en: 'EUR (€)', de: 'EUR (€)' } },
    { name: 'Companies Transformed', description: { en: 'Count (#)', de: 'Anzahl (#)' } },
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
            {language === 'de' ? 'Der Boost Prozess (Woche für Woche)' : 'The Boost Process (Week-by-Week)'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Transparente Timeline. Klare Deliverables. Messbare Outcomes.'
              : 'Transparent timeline. Clear deliverables. Measurable outcomes.'}
          </p>
        </div>

        {/* Phases */}
        <div className="space-y-8 mb-16">
          {phases.map((phase, index) => (
            <div key={index} className="bg-card border-2 border-border p-6 rounded-lg">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge variant="outline" className="text-sm">
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
                'Portfolio IRR +30-50pp',
                'Portfolio Value +50-100%',
                'Companies Transformed 3-5',
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
      title: { en: 'Your portfolio is underperforming', de: 'Dein Portfolio underperformed' },
      items: [
        { en: 'Portfolio IRR is 15% (benchmark: 45%+)', de: 'Portfolio IRR liegt bei 15% (Benchmark: 45%+)' },
        { en: '5-10 companies are struggling (out of 15-20 total)', de: '5-10 Unternehmen kämpfen (von 15-20 insgesamt)' },
        { en: 'You have 90 days to show portfolio improvement', de: 'Du hast 90 Tage Zeit, Portfolio-Verbesserung zu zeigen' },
      ],
    },
    {
      title: { en: 'You have multiple portfolio problems', de: 'Du hast mehrere Portfolio-Probleme' },
      items: [
        { en: 'Do you lack systematic support? (ad-hoc advice, no playbooks?)', de: 'Fehlt systematische Unterstützung? (ad-hoc Beratung, keine Playbooks?)' },
        { en: 'Do you lack operating team? (no internal resources?)', de: 'Fehlt Operating Team? (keine internen Ressourcen?)' },
        { en: 'Do you lack playbooks? (no replicable frameworks?)', de: 'Fehlen Playbooks? (keine replizierbaren Frameworks?)' },
        { en: 'Are LPs pressuring you? ("Why is portfolio performance weak?")', de: 'Machen LPs Druck? ("Warum ist Portfolio-Performance schwach?")' },
      ],
    },
    {
      title: { en: "You're Series A-C focused VC/PE", de: 'Du bist Series A-C fokussierte VC/PE Firm' },
      items: [
        { en: 'You have 10-30 portfolio companies', de: 'Du hast 10-30 Portfolio-Unternehmen' },
        { en: 'You focus on Series A-C (€5M-€50M ARR)', de: 'Du fokussierst auf Series A-C (€5M-€50M ARR)' },
        { en: 'You have €100M-€500M AUM', de: 'Du hast €100M-€500M AUM' },
      ],
    },
    {
      title: { en: "You're willing to execute", de: 'Du bist bereit zu executen' },
      items: [
        { en: "You'll implement our recommendations", de: 'Du wirst unsere Empfehlungen umsetzen' },
        { en: 'Your portfolio CEOs will commit 15-20 hours/week', de: 'Deine Portfolio CEOs committen 15-20 Stunden/Woche' },
        { en: "You'll give us access to portfolio data", de: 'Du gibst uns Zugang zu Portfolio-Daten' },
      ],
    },
    {
      title: { en: 'You have budget (€60K-€78K)', de: 'Du hast Budget (€60K-€78K)' },
      items: [
        { en: 'You can invest €60K-€78K to transform 3-5 companies', de: 'Du kannst €60K-€78K investieren, um 3-5 Unternehmen zu transformieren' },
        { en: 'ROI is 15-30x (based on typical outcomes)', de: 'ROI ist 15-30x (basierend auf typischen Ergebnissen)' },
      ],
    },
  ];

  const notFit = [
    {
      title: { en: 'You only have one company struggling', de: 'Du hast nur ein Unternehmen, das kämpft' },
      description: { en: 'If you just need to fix one company, Boost is overkill', de: 'Wenn du nur ein Unternehmen fixen musst, ist Boost Overkill' },
      alternative: { en: 'Power Up (30 days, €23.6K) for single company fixes', de: 'Power Up (30 Tage, €23.6K) für einzelne Company Fixes' },
    },
    {
      title: { en: 'You need full portfolio transformation (10-20 companies)', de: 'Du brauchst vollständige Portfolio-Transformation (10-20 Unternehmen)' },
      description: { en: 'If you need to transform 10-20 companies, Boost is too narrow', de: 'Wenn du 10-20 Unternehmen transformieren musst, ist Boost zu schmal' },
      alternative: { en: 'Portfolio Transformation (12 months, €360K-€720K) for full portfolio', de: 'Portfolio Transformation (12 Monate, €360K-€720K) für volles Portfolio' },
    },
    {
      title: { en: "You're not ready to execute", de: 'Du bist nicht bereit zu executen' },
      description: { en: 'If you just want a portfolio strategy deck, we\'re not the right fit', de: 'Wenn du nur ein Portfolio Strategy Deck willst, sind wir nicht der richtige Fit' },
      alternative: { en: 'Traditional consulting (McKinsey, BCG, Bain)', de: 'Traditionelle Beratung (McKinsey, BCG, Bain)' },
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
            {language === 'de' ? 'Qualifikation' : 'Who It\'s For'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Ist das richtig für dich?' : 'Is This Right for You?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Boost: Portfolio Value funktioniert am besten für VC/PE Firms in dieser Situation.'
              : 'Boost: Portfolio Value works best for VC/PE firms in this situation.'}
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

  const faqs = [
    {
      question: { en: 'How long does Boost take?', de: 'Wie lange dauert Boost?' },
      answer: { en: '90 days (12 weeks, parallel transformations)', de: '90 Tage (12 Wochen, parallele Transformationen)' },
    },
    {
      question: { en: "What's the investment?", de: 'Was ist das Investment?' },
      answer: { en: '€60K-€78K (stage-based: Series A €60K, Series B €68K, Series C €78K)', de: '€60K-€78K (stage-basiert: Series A €60K, Series B €68K, Series C €78K)' },
    },
    {
      question: { en: "What if it doesn't work?", de: 'Was wenn es nicht funktioniert?' },
      answer: { en: "We guarantee 2 of 3 outcomes (Portfolio IRR +30-50pp, Portfolio Value +50-100%, Companies Transformed 3-5). If we don't hit 2 of 3, you get 50% refund.", de: 'Wir garantieren 2 von 3 Ergebnissen (Portfolio IRR +30-50pp, Portfolio Value +50-100%, 3-5 Unternehmen transformiert). Wenn wir 2 von 3 nicht erreichen, bekommst du 50% Rückerstattung.' },
    },
    {
      question: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' },
      answer: { en: "Yes. We'll connect you with a GP who's worked with us (same stage, same challenge).", de: 'Ja. Wir verbinden dich mit einem GP, der mit uns gearbeitet hat (gleiche Stage, gleiche Herausforderung).' },
    },
    {
      question: { en: "What's the ROI?", de: 'Was ist der ROI?' },
      answer: { en: 'Typical ROI is 15-30x (based on portfolio value increase over 12 months).', de: 'Typischer ROI ist 15-30x (basierend auf Portfolio Value Steigerung über 12 Monate).' },
    },
    {
      question: { en: 'Do you work with our portfolio CEOs?', de: 'Arbeitet ihr mit unseren Portfolio CEOs?' },
      answer: { en: 'Yes. We work directly with 3-5 portfolio CEOs (hands-on, not just advice).', de: 'Ja. Wir arbeiten direkt mit 3-5 Portfolio CEOs (hands-on, nicht nur Beratung).' },
    },
  ];

  return (
    <section
      id="final-cta"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Bereit, deinen Portfolio Value aufzubauen?' : 'Ready to Build Your Portfolio Value?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de' ? 'Hier ist, was als nächstes passiert.' : "Here's what happens next."}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 mb-16">
          {/* Step 1 */}
          <div className="bg-card border-2 border-border p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {language === 'de' ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book a Free Inflection Call (30 min)'}
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              {language === 'de'
                ? 'In 30 Minuten werden wir: Dein Portfolio assessieren (welche Unternehmen brauchen Hilfe?), dir genau zeigen, welche 3-5 Unternehmen zuerst zu transformieren sind (mit Beispielen), dir eine klare Empfehlung geben (Boost, Power Up, Portfolio Transformation, oder DIY).'
                : "In 30 minutes, we'll: Assess your portfolio (which companies need help?), show you exactly which 3-5 companies to transform first (with examples), give you a clear recommendation (Boost, Power Up, Portfolio Transformation, or DIY)."}
            </p>
            <p className="text-sm text-accent font-medium mb-6">
              {language === 'de' ? 'Kein Pitch. Kein Druck. Nur Klarheit.' : 'No pitch. No pressure. Just clarity.'}
            </p>
            <Button
              size="xl"
              className="w-full sm:w-auto bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
              onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
            >
              {language === 'de' ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book Free Inflection Call (30 min)'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Step 2 */}
          <div className="bg-card border-2 border-border p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {language === 'de' ? 'Entscheide, ob Boost richtig für dich ist' : 'Decide If Boost Is Right for You'}
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              {language === 'de'
                ? 'Nach dem Inflection Call weißt du: Welche 3-5 Unternehmen zuerst zu transformieren sind (Priorisierungs-Framework), wie wir sie transformieren würden (CAC, NRR, AI, custom?), welche Outcomes zu erwarten sind (Portfolio IRR, Portfolio Value, Companies Transformed), ob Boost der richtige Fit ist (oder ob du Power Up/Portfolio Transformation brauchst).'
                : "After the Inflection Call, you'll know: Which 3-5 companies to transform first (prioritization framework), how we'd transform them (CAC, NRR, AI, custom?), what outcomes to expect (Portfolio IRR, Portfolio Value, Companies Transformed), whether Boost is the right fit (or if you need Power Up/Portfolio Transformation)."}
            </p>
            <p className="text-sm text-accent font-medium">
              {language === 'de' ? 'Du entscheidest. Kein Druck.' : 'You decide. No pressure.'}
            </p>
          </div>

          {/* Alternative */}
          <div className="bg-muted/30 border-2 border-border p-6 rounded-lg">
            <h3 className="text-lg font-bold text-foreground mb-4">
              {language === 'de' ? 'Alternative: Mit einem Portfolio Assessment starten' : 'Alternative: Start with a Portfolio Assessment'}
            </h3>
            <p className="text-muted-foreground mb-4">
              {language === 'de'
                ? 'Noch nicht bereit für einen vollständigen Boost? Starte kleiner:'
                : 'Not ready for a full Boost? Start smaller:'}
            </p>
            <div className="bg-card border border-border p-4 rounded-lg mb-4">
              <h4 className="font-bold text-foreground mb-2">
                {language === 'de' ? 'Portfolio Assessment (1-2 Wochen, €3.9K-€5.9K)' : 'Portfolio Assessment (1-2 weeks, €3.9K-€5.9K)'}
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• {language === 'de' ? 'Deep-Dive in dein Portfolio' : 'Deep-dive into your portfolio'}</li>
                <li>• {language === 'de' ? 'Identifiziere, welche Unternehmen zuerst zu transformieren sind' : 'Identify which companies to transform first'}</li>
                <li>• {language === 'de' ? 'Geh mit Portfolio Heatmap + 90-Tage Roadmap raus' : 'Walk away with a portfolio heatmap + 90-day roadmap'}</li>
              </ul>
            </div>
            <Button variant="outline" className="border-2">
              {language === 'de' ? 'Portfolio Assessment buchen' : 'Book Portfolio Assessment'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">FAQ</h3>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
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
        <div className="text-center mt-16">
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
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
const BoostPortfolioValue: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleOpenModal = () => setIsBookingModalOpen(true);
    window.addEventListener('openBookingModal', handleOpenModal);
    return () => window.removeEventListener('openBookingModal', handleOpenModal);
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
      <FilloutBookingModal
        formSlug="inflection-call"
        source="solutions"
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title={language === 'de' ? 'Inflection Call buchen' : 'Book Inflection Call'}
      />
    </div>
  );
};

export default BoostPortfolioValue;
