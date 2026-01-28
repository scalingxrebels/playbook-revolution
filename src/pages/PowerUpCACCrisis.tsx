import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  Target,
  Users,
  TrendingDown,
  TrendingUp,
  Clock,
  Award,
  FileText,
  MessageCircle,
  Brain,
  Settings,
  Rocket,
  BarChart3,
  Shield,
  Calendar,
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
    { value: '-40-60%', label: { en: 'CAC Reduction', de: 'CAC-Reduktion' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
    { value: '+30-50%', label: { en: 'Win Rate', de: 'Win Rate' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
    { value: '-50%', label: { en: 'Sales Cycle', de: 'Sales Cycle' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
  ];

  const trustBadges = [
    { icon: Shield, label: { en: 'Outcome-Based Risk Sharing', de: 'Ergebnisbasierte Risikoteilung' } },
    { icon: Clock, label: { en: '4-6 Week Sprint', de: '4-6 Wochen Sprint' } },
    { icon: MessageCircle, label: { en: 'Reference Calls Available', de: 'Referenzgespräche möglich' } },
  ];

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise pt-20"
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
              <span className="text-foreground font-medium">Power Up Predictable Acquisition</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Badge */}
        <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Zap className="w-4 h-4 mr-2" />
          Power Up · 4-6 {language === 'de' ? 'Wochen' : 'Weeks'} · {language === 'de' ? 'Ab' : 'From'} €23.6K
        </Badge>

        {/* Headline */}
        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">CAC Crisis →</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'Zurück zu effizientem Wachstum' : 'Back to Efficient Growth'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Behebe deinen #1 CAC-Engpass in 4-6 Wochen. Typische Ergebnisse: CAC -40-60%, Win Rate +30-50%, Sales Cycle -40-60% – mit ergebnisbasierter Risikoteilung.'
            : 'Fix your #1 CAC bottleneck in 4-6 weeks. Typical outcomes: CAC -40-60%, Win Rate +30-50%, Sales Cycle -40-60%—with outcome-based risk sharing.'}
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
    { en: 'CAC increased 100-150% in 6-12 months', de: 'CAC um 100-150% gestiegen in 6-12 Monaten' },
    { en: 'LTV/CAC ratio below 3x (break-even threshold)', de: 'LTV/CAC-Verhältnis unter 3x (Break-even-Schwelle)' },
    { en: 'Win Rate dropped 50%+', de: 'Win Rate um 50%+ gesunken' },
    { en: 'Sales Cycle doubled', de: 'Sales Cycle verdoppelt' },
    { en: 'Pipeline Conversion below 15%', de: 'Pipeline-Conversion unter 15%' },
    { en: 'Marketing ROI turned negative', de: 'Marketing ROI negativ geworden' },
    { en: 'Board asking critical questions about unit economics', de: 'Board stellt kritische Fragen zu Unit Economics' },
  ];

  const beforeAfter = {
    before: [
      { metric: 'CAC', value: '€10-15K' },
      { metric: 'Win Rate', value: '15%' },
      { metric: 'Sales Cycle', value: '12w' },
    ],
    after: [
      { metric: 'CAC', value: '€5-7K' },
      { metric: 'Win Rate', value: '20-25%' },
      { metric: 'Sales Cycle', value: '5-7w' },
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
            {language === 'de' ? 'Du steckst in einer CAC-Krise' : "You're in a CAC Crisis"}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Dein CAC ist von €2-5K auf €10-15K in den letzten 6-12 Monaten explodiert. Dein LTV/CAC-Verhältnis ist von 5x auf 2.5x gefallen – gefährlich nahe am Break-even. Deine Win Rate sank von 30% auf 15%, und dein Sales Cycle hat sich von 6 auf 12 Wochen verlängert.'
              : 'Your CAC has exploded from €2-5K to €10-15K in the last 6-12 months. Your LTV/CAC ratio dropped from 5x to 2.5x—dangerously close to break-even. Your Win Rate fell from 30% to 15%, and your Sales Cycle stretched from 6 weeks to 12 weeks.'}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Das Board fragt: "Warum ist CAC so hoch?" Und du hast keine klare Antwort – weil es nicht ein Problem ist. Es sind 3-5 zusammenwirkende Probleme: ICP-Drift, Channel-Mismatch, Pricing-Packaging-Misfit, Funnel-Leckage oder Sales-Motion-Breakdown.'
              : 'The board is asking: "Why is CAC so high?" And you don\'t have a clear answer—because it\'s not one problem. It\'s 3-5 compounding issues: ICP drift, channel mismatch, pricing-packaging misfit, funnel leakage, or sales motion breakdown.'}
          </p>
        </div>

        {/* Symptoms Checklist */}
        <div className="max-w-2xl mx-auto mb-16">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">
            {language === 'de' ? 'Symptome einer CAC-Krise:' : 'CAC Crisis Symptoms:'}
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

  const coreLevers = [
    {
      icon: Target,
      title: { en: 'ICP & Segmentation', de: 'ICP & Segmentierung' },
      desc: { en: "Who's actually buying?", de: 'Wer kauft wirklich?' },
    },
    {
      icon: MessageCircle,
      title: { en: 'Conversion/Messaging', de: 'Conversion/Messaging' },
      desc: { en: 'Top assets only', de: 'Nur Top-Assets' },
    },
    {
      icon: TrendingDown,
      title: { en: 'Sales Process Leakage', de: 'Sales Process Leckage' },
      desc: { en: 'Where deals die', de: 'Wo Deals sterben' },
    },
  ];

  const phases = [
    {
      number: '1',
      title: { en: 'Diagnose', de: 'Diagnose' },
      timeline: { en: 'Week 1-2', de: 'Woche 1-2' },
      items: [
        { en: 'Deep-dive Analysis of your GTM (last 6-12 months)', de: 'Tiefenanalyse deines GTM (letzte 6-12 Monate)' },
        { en: 'ICP Clarity Assessment (segment-level cohort analysis)', de: 'ICP-Clarity-Assessment (Segment-Level Kohortenanalyse)' },
        { en: 'Sales Process Audit (conversion funnel breakdown)', de: 'Sales Process Audit (Conversion Funnel Breakdown)' },
        { en: 'Root Cause Identification (1 of 5 typical bottlenecks)', de: 'Root Cause Identifikation (1 von 5 typischen Engpässen)' },
      ],
      deliverable: { en: 'Bottleneck Report (10-15 pages) + 3 Fix Options', de: 'Bottleneck Report (10-15 Seiten) + 3 Fix-Optionen' },
      color: 'from-violet-500 to-purple-600',
    },
    {
      number: '2',
      title: { en: 'Design', de: 'Design' },
      timeline: { en: 'Week 3-4', de: 'Woche 3-4' },
      items: [
        { en: 'ICP Refinement (narrow to high-intent segments)', de: 'ICP-Verfeinerung (auf High-Intent-Segmente einengen)' },
        { en: 'Messaging Calibration (value prop that converts)', de: 'Messaging-Kalibrierung (Value Prop, die konvertiert)' },
        { en: 'Sales Process Redesign (remove friction points)', de: 'Sales Process Redesign (Friction Points entfernen)' },
      ],
      deliverable: { en: 'CAC Optimization Playbook (20-30 pages) + 90-Day Roadmap', de: 'CAC-Optimierungs-Playbook (20-30 Seiten) + 90-Tage-Roadmap' },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '3',
      title: { en: 'Deploy', de: 'Deploy' },
      timeline: { en: 'Week 5-6', de: 'Woche 5-6' },
      items: [
        { en: 'Implement Core Fixes (ICP, Messaging, Process)', de: 'Core Fixes implementieren (ICP, Messaging, Prozess)' },
        { en: 'Train Sales Team (new playbook, new process)', de: 'Sales Team trainieren (neues Playbook, neuer Prozess)' },
        { en: 'Launch Quick Wins (3-5 high-leverage initiatives)', de: 'Quick Wins launchen (3-5 High-Leverage-Initiativen)' },
        { en: 'Measure Impact (baseline vs. 30-day post-launch)', de: 'Impact messen (Baseline vs. 30 Tage nach Launch)' },
      ],
      deliverable: { en: 'Implementation Complete + Quick Win Report + 30-Day Post-Call', de: 'Implementierung abgeschlossen + Quick Win Report + 30-Tage-Post-Call' },
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section
      id="solution-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[60vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-mesh" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Die Lösung' : 'The Solution'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de'
              ? 'So beheben wir deine CAC-Krise in 4-6 Wochen'
              : 'How We Fix Your CAC Crisis in 4-6 Weeks'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Power Up ist ein 4-6 Wochen Sprint, um deinen #1 CAC-Engpass zu beheben. Wir fixieren nicht alles – wir identifizieren die Root Cause und liefern messbare Ergebnisse.'
              : "Power Up is a 4-6 week sprint designed to fix your #1 CAC bottleneck. We don't fix everything—we identify the root cause and deliver measurable results."}
          </p>
        </div>

        {/* Core Levers */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-bold mb-8">
            {language === 'de' ? 'Wir fokussieren auf 3 Kernhebel:' : 'We focus on 3 core levers:'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {coreLevers.map((lever, index) => {
              const Icon = lever.icon;
              return (
                <div
                  key={index}
                  className="bg-card border-2 border-primary/30 hover:border-primary p-6 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-2">
                    {language === 'de' ? lever.title.de : lever.title.en}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'de' ? lever.desc.de : lever.desc.en}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3-Phase Timeline */}
        <h3 className="text-center text-lg font-bold mb-8">
          {language === 'de' ? '3-Phasen-Ansatz:' : '3-Phase Approach:'}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="group relative bg-card border-2 border-border hover:border-primary/50 p-6 transition-all duration-400 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Phase Number Badge */}
              <div className={`absolute -top-3 -right-3 px-4 py-1 text-sm font-bold tracking-wider bg-gradient-to-r ${phase.color} text-white shadow-brutal-sm`}>
                {language === 'de' ? 'Phase' : 'Phase'} {phase.number}
              </div>

              {/* Timeline */}
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                {language === 'de' ? phase.timeline.de : phase.timeline.en}
              </div>

              {/* Title */}
              <h4 className="font-bold text-xl text-foreground mb-4">
                {language === 'de' ? phase.title.de : phase.title.en}
              </h4>

              {/* Items */}
              <ul className="space-y-2 mb-4">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{language === 'de' ? item.de : item.en}</span>
                  </li>
                ))}
              </ul>

              {/* Deliverable */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-xs font-medium text-accent">
                    {language === 'de' ? phase.deliverable.de : phase.deliverable.en}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 4: IMPACT
// ============================================================================
const ImpactSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [openMeasurement, setOpenMeasurement] = React.useState<string | null>(null);

  const outcomes = [
    {
      id: 'cac',
      value: '-40-60%',
      title: { en: 'CAC Reduction', de: 'CAC-Reduktion' },
      range: { en: 'Typical Range: €10-15K → €5-7K', de: 'Typischer Bereich: €10-15K → €5-7K' },
      measurement: { en: 'Measured: Blended CAC (last 30 days vs. previous 90 days)', de: 'Gemessen: Blended CAC (letzte 30 Tage vs. vorherige 90 Tage)' },
    },
    {
      id: 'winrate',
      value: '+30-50%',
      title: { en: 'Win Rate Increase', de: 'Win Rate Steigerung' },
      range: { en: 'Typical Range: 15% → 20-25%', de: 'Typischer Bereich: 15% → 20-25%' },
      measurement: { en: 'Measured: Closed-Won / Total Opportunities (last 30 days)', de: 'Gemessen: Closed-Won / Gesamt-Opportunities (letzte 30 Tage)' },
    },
    {
      id: 'cycle',
      value: '-40-60%',
      title: { en: 'Sales Cycle Reduction', de: 'Sales Cycle Reduktion' },
      range: { en: 'Typical Range: 12 weeks → 5-7 weeks', de: 'Typischer Bereich: 12 Wochen → 5-7 Wochen' },
      measurement: { en: 'Measured: Avg. Days from Opp Created to Closed-Won', de: 'Gemessen: Durchschn. Tage von Opp-Erstellung bis Closed-Won' },
    },
  ];

  const additionalBenefits = [
    { en: 'ICP Clarity (you know exactly who to target)', de: 'ICP-Klarheit (du weißt genau, wen du ansprechen musst)' },
    { en: 'Messaging that Converts (value prop that resonates)', de: 'Messaging, das konvertiert (Value Prop, die resoniert)' },
    { en: 'Sales Process 2.0 (repeatable, scalable)', de: 'Sales Process 2.0 (wiederholbar, skalierbar)' },
    { en: '90-Day Roadmap (clear next steps)', de: '90-Tage-Roadmap (klare nächste Schritte)' },
    { en: 'Board-Ready 2-Pager (Problem → Fix → Impact → Plan)', de: 'Board-Ready 2-Pager (Problem → Fix → Impact → Plan)' },
  ];

  const testimonials = [
    {
      quote: {
        en: 'We reduced CAC from €15K to €7K in 6 weeks. Win Rate went from 12% to 28%. The playbook is now our GTM standard.',
        de: 'Wir haben CAC von €15K auf €7K in 6 Wochen reduziert. Win Rate stieg von 12% auf 28%. Das Playbook ist jetzt unser GTM-Standard.',
      },
      author: { en: 'CMO, Series B SaaS (€10M ARR)', de: 'CMO, Series B SaaS (€10M ARR)' },
    },
    {
      quote: {
        en: 'Power Up saved our Series B. We fixed our unit economics in 5 weeks. Investors were impressed with the Board 2-Pager.',
        de: 'Power Up hat unsere Series B gerettet. Wir haben unsere Unit Economics in 5 Wochen gefixt. Investoren waren vom Board 2-Pager beeindruckt.',
      },
      author: { en: 'CEO, Series A SaaS (€8M ARR)', de: 'CEO, Series A SaaS (€8M ARR)' },
    },
  ];

  const comparison = [
    { feature: { en: 'Timeline', de: 'Timeline' }, traditional: { en: '3-6 months', de: '3-6 Monate' }, powerup: { en: '4-6 weeks', de: '4-6 Wochen' } },
    { feature: { en: 'Deliverable', de: 'Deliverable' }, traditional: { en: '100-page report', de: '100-Seiten-Report' }, powerup: { en: 'Playbook + Implementation', de: 'Playbook + Implementierung' } },
    { feature: { en: 'Outcome', de: 'Outcome' }, traditional: { en: 'Recommendations', de: 'Empfehlungen' }, powerup: { en: 'Measurable results (2 of 3)', de: 'Messbare Ergebnisse (2 von 3)' } },
    { feature: { en: 'Risk Sharing', de: 'Risikoteilung' }, traditional: { en: 'None', de: 'Keine' }, powerup: { en: 'Outcome-based available', de: 'Ergebnisbasiert verfügbar' } },
    { feature: { en: 'ROI', de: 'ROI' }, traditional: { en: 'Unclear', de: 'Unklar' }, powerup: { en: '10-20x typical range', de: '10-20x typischer Bereich' } },
  ];

  return (
    <section
      id="impact-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[60vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Der Impact' : 'The Impact'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Was du in 4-6 Wochen bekommst' : 'What You Get in 4-6 Weeks'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Wir arbeiten auf 2 von 3 dieser Ergebnisse hin. Wenn wir 2 von 3 nicht erreichen (gemessen 30 Tage nach Launch), teilen wir das Risiko.'
              : "We work towards 2 of these 3 outcomes. If we don't achieve 2 of 3 (measured 30 days post-launch), we share the risk."}
          </p>
        </div>

        {/* Outcome Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.id}
              className="bg-card border-2 border-accent/30 hover:border-accent p-6 transition-all duration-300 shadow-brutal-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-gradient-accent mb-2">{outcome.value}</div>
              <h4 className="font-bold text-lg text-foreground mb-2">
                {language === 'de' ? outcome.title.de : outcome.title.en}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                {language === 'de' ? outcome.range.de : outcome.range.en}
              </p>
              <Collapsible open={openMeasurement === outcome.id} onOpenChange={(open) => setOpenMeasurement(open ? outcome.id : null)}>
                <CollapsibleTrigger className="flex items-center gap-2 text-xs text-primary hover:underline cursor-pointer">
                  <span>{language === 'de' ? 'Messung anzeigen' : 'Show Measurement'}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${openMeasurement === outcome.id ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-3">
                  <p className="text-xs text-muted-foreground bg-muted/50 p-3 rounded">
                    {language === 'de' ? outcome.measurement.de : outcome.measurement.en}
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>

        {/* Additional Benefits + ROI */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Benefits */}
          <div className="bg-card border-2 border-border p-6">
            <h3 className="font-bold text-lg mb-4">
              {language === 'de' ? 'Zusätzliche Benefits:' : 'Additional Benefits:'}
            </h3>
            <ul className="space-y-3">
              {additionalBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>{language === 'de' ? benefit.de : benefit.en}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ROI */}
          <div className="bg-accent/10 border-2 border-accent/30 p-6">
            <h3 className="font-bold text-lg mb-4 text-accent">
              {language === 'de' ? 'ROI-Kalkulation (Typischer Bereich):' : 'ROI Calculation (Typical Range):'}
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{language === 'de' ? 'Investment:' : 'Investment:'}</span>
                <span className="font-bold text-foreground">€23.6K - €35K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{language === 'de' ? 'Return (Jahr 1):' : 'Return (Year 1):'}</span>
                <span className="font-bold text-accent">€236K - €700K</span>
              </div>
              <div className="flex justify-between border-t border-accent/30 pt-4">
                <span className="text-muted-foreground">ROI:</span>
                <span className="font-bold text-accent text-xl">10-20x</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-accent/30 text-xs text-muted-foreground">
              <p className="font-medium mb-2">{language === 'de' ? 'Beispiel (Mid-Range):' : 'Example (Mid-Range):'}</p>
              <p>• CAC: €12K → €6K (-€6K {language === 'de' ? 'pro Kunde' : 'per customer'})</p>
              <p>• {language === 'de' ? 'Neukunden (Jahr 1):' : 'New Customers (Year 1):'} 50</p>
              <p>• {language === 'de' ? 'Ersparnis:' : 'Savings:'} €300K → ROI: 13x</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border p-6 italic animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-muted-foreground mb-4">
                "{language === 'de' ? testimonial.quote.de : testimonial.quote.en}"
              </p>
              <p className="text-sm font-semibold text-foreground">
                — {language === 'de' ? testimonial.author.de : testimonial.author.en}
              </p>
              <button className="mt-3 text-xs text-primary hover:underline">
                {language === 'de' ? 'Referenzgespräch anfragen →' : 'Request Reference Call →'}
              </button>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-card border-2 border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    {language === 'de' ? 'Feature' : 'Feature'}
                  </th>
                  <th className="text-left p-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    {language === 'de' ? 'Traditionelles Consulting' : 'Traditional Consulting'}
                  </th>
                  <th className="text-left p-4 text-sm font-bold uppercase tracking-wider text-primary bg-primary/5">
                    Power Up
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="p-4 text-sm font-medium text-foreground">
                      {language === 'de' ? row.feature.de : row.feature.en}
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">
                      {language === 'de' ? row.traditional.de : row.traditional.en}
                    </td>
                    <td className="p-4 text-sm font-medium text-primary bg-primary/5">
                      {language === 'de' ? row.powerup.de : row.powerup.en}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 5: QUALIFICATION
// ============================================================================
const QualificationSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const idealFor = [
    { en: 'Series A-C SaaS Companies (€2M-€50M ARR)', de: 'Series A-C SaaS Companies (€2M-€50M ARR)' },
    { en: 'CAC increased 100-150% in last 6-12 months', de: 'CAC um 100-150% gestiegen in letzten 6-12 Monaten' },
    { en: 'LTV/CAC ratio below 3x (break-even risk)', de: 'LTV/CAC-Verhältnis unter 3x (Break-even-Risiko)' },
    { en: 'You have 1 clear bottleneck (not 5 crises at once)', de: '1 klarer Engpass (nicht 5 Krisen gleichzeitig)' },
    { en: 'Funding round in 3-12 months (need to fix unit economics)', de: 'Funding-Runde in 3-12 Monaten (Unit Economics fixen)' },
    { en: 'Board asking: "Why is CAC so high?"', de: 'Board fragt: "Warum ist CAC so hoch?"' },
  ];

  const dataReadiness = [
    { en: '90 days CRM data (Salesforce, HubSpot, Pipedrive)', de: '90 Tage CRM-Daten (Salesforce, HubSpot, Pipedrive)' },
    { en: '90 days marketing spend data (by channel)', de: '90 Tage Marketing-Spend-Daten (nach Channel)' },
    { en: 'Minimum 30 opportunities/month (for statistical significance)', de: 'Mindestens 30 Opportunities/Monat (für statistische Signifikanz)' },
    { en: 'Minimum €50K ACV or clear sales motion', de: 'Mindestens €50K ACV oder klare Sales Motion' },
  ];

  const notFor = [
    { en: 'Pre-Product-Market Fit (you need PMF first)', de: 'Pre-Product-Market Fit (du brauchst zuerst PMF)' },
    { en: 'Multiple crises at once (you need Boost, not Power Up)', de: 'Mehrere Krisen gleichzeitig (du brauchst Boost, nicht Power Up)' },
    { en: 'No urgency (you can wait 6-12 months)', de: 'Keine Dringlichkeit (du kannst 6-12 Monate warten)' },
    { en: 'Insufficient data (less than 90 days CRM history)', de: 'Unzureichende Daten (weniger als 90 Tage CRM-Historie)' },
  ];

  return (
    <section
      id="qualification-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[40vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-mesh" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Ist Power Up das Richtige für dich?' : 'Is Power Up Right for You?'}
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Ideal For */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-accent flex items-center gap-2">
              <Check className="w-5 h-5" />
              {language === 'de' ? 'Ideal für:' : 'Ideal For:'}
            </h3>
            <div className="space-y-3">
              {idealFor.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-accent/5 border border-accent/20 rounded-lg">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{language === 'de' ? item.de : item.en}</span>
                </div>
              ))}
            </div>

            {/* Data Readiness */}
            <h4 className="font-bold text-sm mt-8 mb-4 text-muted-foreground uppercase tracking-widest">
              {language === 'de' ? 'Daten-Bereitschaft (Mindestanforderungen):' : 'Data Readiness (Minimum Requirements):'}
            </h4>
            <div className="space-y-2">
              {dataReadiness.map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span>{language === 'de' ? item.de : item.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not For */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-destructive flex items-center gap-2">
              <X className="w-5 h-5" />
              {language === 'de' ? 'Nicht geeignet für:' : 'Not For:'}
            </h3>
            <div className="space-y-3">
              {notFor.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{language === 'de' ? item.de : item.en}</span>
                </div>
              ))}
            </div>

            {/* Decision Tree */}
            <div className="mt-8 p-6 bg-card border-2 border-border">
              <p className="text-sm text-muted-foreground mb-4">
                {language === 'de'
                  ? 'Nicht sicher, ob Power Up das Richtige ist? Buche einen kostenlosen Inflection Call (30 Min.) und wir bewerten deinen Fit – und empfehlen die richtige Lösung (Power Up, Boost, Accelerate oder DIY).'
                  : "Not sure if Power Up is right? Book a free Inflection Call (30 min) and we'll assess your fit—and recommend the right solution (Power Up, Boost, Accelerate, or DIY)."}
              </p>
              <Button
                variant="default"
                onClick={() => scrollToSection('final-cta')}
              >
                {language === 'de' ? 'Kostenloses Inflection Call buchen' : 'Book Free Inflection Call'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 6: PRICING
// ============================================================================
const PricingSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const tiers = [
    {
      name: 'Explorer',
      timeline: { en: '4 Weeks', de: '4 Wochen' },
      price: '€23.600',
      bestFor: { en: 'Clear bottleneck, high urgency', de: 'Klarer Engpass, hohe Dringlichkeit' },
      features: [
        { en: '3-Phase Sprint (Diagnose → Design → Deploy)', de: '3-Phasen-Sprint (Diagnose → Design → Deploy)' },
        { en: 'Bottleneck Report (10-15 pages)', de: 'Bottleneck Report (10-15 Seiten)' },
        { en: 'CAC Optimization Playbook (20-30 pages)', de: 'CAC-Optimierungs-Playbook (20-30 Seiten)' },
        { en: 'Implementation Support (Week 3-4)', de: 'Implementierungs-Support (Woche 3-4)' },
        { en: 'Quick Win Report (5-10 pages)', de: 'Quick Win Report (5-10 Seiten)' },
        { en: '30-Day Post-Call', de: '30-Tage-Post-Call' },
        { en: 'Email Support (30 days)', de: 'E-Mail-Support (30 Tage)' },
      ],
      highlighted: false,
    },
    {
      name: 'Master',
      timeline: { en: '5 Weeks', de: '5 Wochen' },
      price: '€29.500',
      bestFor: { en: 'Complex bottleneck, multiple segments', de: 'Komplexer Engpass, mehrere Segmente' },
      features: [
        { en: 'Everything in Explorer +', de: 'Alles in Explorer +' },
        { en: 'Extended Diagnosis (2 weeks instead of 1)', de: 'Erweiterte Diagnose (2 Wochen statt 1)' },
        { en: 'Multi-Segment Analysis (2-3 ICPs)', de: 'Multi-Segment-Analyse (2-3 ICPs)' },
        { en: 'Extended Implementation Support (Week 4-5)', de: 'Erweiterter Implementierungs-Support (Woche 4-5)' },
        { en: 'Board-Ready 2-Pager (Problem → Fix → Impact)', de: 'Board-Ready 2-Pager (Problem → Fix → Impact)' },
        { en: '60-Day Post-Call (extended support)', de: '60-Tage-Post-Call (erweiterter Support)' },
      ],
      highlighted: true,
    },
    {
      name: 'Genius',
      timeline: { en: '6 Weeks', de: '6 Wochen' },
      price: '€35.000',
      bestFor: { en: 'Strategic transformation, Board-level urgency', de: 'Strategische Transformation, Board-Level-Dringlichkeit' },
      features: [
        { en: 'Everything in Master +', de: 'Alles in Master +' },
        { en: 'Extended Design (2 weeks instead of 1)', de: 'Erweitertes Design (2 Wochen statt 1)' },
        { en: 'AI Integration (where it accelerates)', de: 'AI-Integration (wo sie beschleunigt)' },
        { en: 'Team Training (4-6 hours, hands-on)', de: 'Team-Training (4-6 Stunden, Hands-on)' },
        { en: '90-Day Roadmap (detailed, week-by-week)', de: '90-Tage-Roadmap (detailliert, Woche für Woche)' },
        { en: '90-Day Post-Call (extended support)', de: '90-Tage-Post-Call (erweiterter Support)' },
      ],
      highlighted: false,
    },
  ];

  const paymentOptions = [
    {
      name: { en: 'Option A: Upfront Payment', de: 'Option A: Vorauszahlung' },
      desc: { en: '100% upfront • Start immediately', de: '100% im Voraus • Sofortiger Start' },
    },
    {
      name: { en: 'Option B: Split Payment', de: 'Option B: Ratenzahlung' },
      desc: { en: '50% upfront • 50% after Week 2-3 • Start immediately', de: '50% im Voraus • 50% nach Woche 2-3 • Sofortiger Start' },
    },
    {
      name: { en: 'Option C: Outcome-Based (Limited)', de: 'Option C: Ergebnisbasiert (Begrenzt)' },
      desc: { en: '30% upfront • 70% after outcomes achieved • Requires pre-qualification', de: '30% im Voraus • 70% nach Erreichung der Ergebnisse • Vorqualifikation erforderlich' },
    },
  ];

  const faqs = [
    {
      q: { en: 'How do you achieve outcomes in 4-6 weeks?', de: 'Wie erreicht ihr Ergebnisse in 4-6 Wochen?' },
      a: {
        en: "We focus on 1 bottleneck (not 5 problems). We use proven playbooks. We implement, not just recommend. If we don't achieve 2 of 3 outcomes, we share the risk.",
        de: 'Wir fokussieren auf 1 Engpass (nicht 5 Probleme). Wir nutzen bewährte Playbooks. Wir implementieren, empfehlen nicht nur. Wenn wir 2 von 3 Ergebnissen nicht erreichen, teilen wir das Risiko.',
      },
    },
    {
      q: { en: 'What if I have multiple problems (CAC + Churn + Scaling)?', de: 'Was ist, wenn ich mehrere Probleme habe (CAC + Churn + Skalierung)?' },
      a: {
        en: "Then Power Up isn't right for you. You need Boost (90 days, 2-3 bottlenecks) or Accelerate (12 months, full transformation). Book a free call and we'll recommend the right fit.",
        de: 'Dann ist Power Up nicht das Richtige für dich. Du brauchst Boost (90 Tage, 2-3 Engpässe) oder Accelerate (12 Monate, volle Transformation). Buche einen kostenlosen Call und wir empfehlen den richtigen Fit.',
      },
    },
    {
      q: { en: 'How is measurement defined?', de: 'Wie wird die Messung definiert?' },
      a: {
        en: 'See Measurement Definitions above. We define baselines, data sources, attribution logic, lag effects, and exclusions upfront—before we start.',
        de: 'Siehe Messungsdefinitionen oben. Wir definieren Baselines, Datenquellen, Attributionslogik, Lag-Effekte und Ausschlüsse im Voraus – bevor wir starten.',
      },
    },
    {
      q: { en: 'Do I need to involve my team?', de: 'Muss ich mein Team einbeziehen?' },
      a: {
        en: "Yes. We need 5-10h/week from your CMO/CRO and 2-3h/week from your CEO. Power Up is hands-on, not just consulting.",
        de: 'Ja. Wir brauchen 5-10h/Woche von deinem CMO/CRO und 2-3h/Woche von deinem CEO. Power Up ist Hands-on, nicht nur Consulting.',
      },
    },
  ];

  return (
    <section
      id="pricing-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[70vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Investment' : 'Investment'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Investment & Engagement-Optionen' : 'Investment & Engagement Options'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Wähle dein Engagement-Level basierend auf Komplexität und Dringlichkeit.'
              : 'Choose your engagement level based on complexity and urgency.'}
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative bg-card border-2 p-6 transition-all duration-300 animate-slide-up ${
                tier.highlighted
                  ? 'border-primary shadow-glow scale-105 z-10'
                  : 'border-border hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.highlighted && (
                <Badge variant="gradient" className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {language === 'de' ? 'Beliebt' : 'Popular'}
                </Badge>
              )}

              <h3 className="font-bold text-2xl text-foreground mb-2">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {language === 'de' ? tier.timeline.de : tier.timeline.en}
              </p>
              <div className="text-3xl font-bold text-gradient mb-4">{tier.price}</div>
              <p className="text-xs text-muted-foreground mb-6 uppercase tracking-wider">
                {language === 'de' ? `Best für: ${tier.bestFor.de}` : `Best for: ${tier.bestFor.en}`}
              </p>

              <ul className="space-y-3">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{language === 'de' ? feature.de : feature.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment Options */}
        <div className="bg-card border-2 border-border p-6 mb-16">
          <h3 className="font-bold text-lg mb-6 text-center">
            {language === 'de' ? 'Zahlungsoptionen (Alle Stufen):' : 'Payment Options (All Levels):'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {paymentOptions.map((option, index) => (
              <div key={index} className="text-center">
                <h4 className="font-bold text-sm mb-2">{language === 'de' ? option.name.de : option.name.en}</h4>
                <p className="text-xs text-muted-foreground">{language === 'de' ? option.desc.de : option.desc.en}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-bold text-lg mb-6 text-center">FAQ</h3>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-2 border-border bg-card px-6">
                <AccordionTrigger className="text-left font-medium">
                  {language === 'de' ? faq.q.de : faq.q.en}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {language === 'de' ? faq.a.de : faq.a.en}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.15, 0.3] });

  // Load Fillout script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const trustBadges = [
    { en: 'Outcome-Based Risk Sharing', de: 'Ergebnisbasierte Risikoteilung' },
    { en: '4-6 Week Sprint', de: '4-6 Wochen Sprint' },
    { en: 'Reference Calls Available', de: 'Referenzgespräche möglich' },
    { en: 'No Long-Term Lock-In', de: 'Keine langfristige Bindung' },
  ];

  return (
    <section
      id="final-cta"
      ref={(node) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        (containerRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }}
      />
      <div
        className="absolute inset-0 bg-mesh opacity-50 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[1]}px) scale(1.1)` }}
      />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="font-display text-display-md lg:text-display-lg text-foreground mb-6">
            {language === 'de' ? 'Bereit, deine CAC-Krise zu lösen?' : 'Ready to Fix Your CAC Crisis?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Starte mit einem kostenlosen Inflection Call (30 Min.). Wir bewerten deinen Fit und empfehlen die richtige Lösung (Power Up, Boost, Accelerate oder DIY).'
              : "Start with a free Inflection Call (30 min). We'll assess your fit and recommend the right solution (Power Up, Boost, Accelerate, or DIY)."}
          </p>
        </div>

        {/* Fillout Form Embed */}
        <div
          className="max-w-2xl mx-auto rounded-3xl bg-card/50 border-2 border-border backdrop-blur-sm overflow-hidden animate-slide-up mb-12"
          style={{ animationDelay: '0.2s' }}
        >
          <div
            style={{ width: '100%', height: '500px' }}
            data-fillout-id="bE8Mpbmb4mus"
            data-fillout-embed-type="standard"
            data-fillout-inherit-parameters
            data-fillout-dynamic-resize
          />
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              <span>{language === 'de' ? badge.de : badge.en}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const PowerUpCACCrisis: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ImpactSection />
        <QualificationSection />
        <PricingSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PowerUpCACCrisis;
