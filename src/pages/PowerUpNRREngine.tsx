import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
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
  TrendingDown,
  TrendingUp,
  Clock,
  Shield,
  FileText,
  MessageCircle,
  Settings,
  BarChart3,
  Search,
  Wrench,
  CheckCircle,
  Users,
  HeartPulse,
  Activity,
  RefreshCw,
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
    { value: '-20-40%', label: { en: 'Churn', de: 'Churn' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
    { value: '+10-20pp', label: { en: 'NRR', de: 'NRR' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
    { value: '+50-100%', label: { en: 'Expansion Rate', de: 'Expansion Rate' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
  ];

  const trustBadges = [
    { icon: Shield, label: { en: 'Outcome-Based Risk Sharing', de: 'Ergebnisbasierte Risikoteilung' } },
    { icon: Clock, label: { en: '4-6 Week Sprint', de: '4-6 Wochen Sprint' } },
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
              <span className="text-foreground font-medium">Power Up NRR Engine</span>
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
          <span className="block text-foreground">Customer Success Broken →</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'NRR-Engine gebaut' : 'NRR Engine Built'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Baue deine Retention-Engine in 4-6 Wochen. Typische Ergebnisse: Churn -20-40%, NRR +10-20pp, Expansion Rate +50-100% – mit ergebnisbasierter Risikoteilung.'
            : 'Build your retention engine in 4-6 weeks. Typical outcomes: Churn -20-40%, NRR +10-20pp, Expansion Rate +50-100%—with outcome-based risk sharing.'}
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
    { en: 'High churn: 20%+ annually (benchmark: <10%), trending up', de: 'Hohe Churn: 20%+ jährlich (Benchmark: <10%), steigend' },
    { en: 'Low NRR: 90-95% (benchmark: 110-130%), losing revenue every quarter', de: 'Niedriges NRR: 90-95% (Benchmark: 110-130%), Verlust von Revenue jedes Quartal' },
    { en: 'No expansion: 10% of customers expand (benchmark: 30%+)', de: 'Keine Expansion: 10% der Kunden expandieren (Benchmark: 30%+)' },
    { en: 'Reactive CS: Fire-fighting mode, no proactive outreach', de: 'Reaktives CS: Firefighting-Modus, kein proaktives Outreach' },
    { en: 'No retention loops: No health scoring, no early warning system', de: 'Keine Retention Loops: Kein Health Scoring, kein Frühwarnsystem' },
  ];

  const realCosts = [
    { en: 'Destroys LTV/CAC ratio (LTV drops, CAC stays same → ratio < 3)', de: 'Zerstört LTV/CAC-Ratio (LTV sinkt, CAC bleibt gleich → Ratio < 3)' },
    { en: 'Limits growth potential (need 3x more new customers to hit same ARR)', de: 'Begrenzt Wachstumspotenzial (braucht 3x mehr Neukunden für gleiches ARR)' },
    { en: 'Weakens competitive position (competitors with 120%+ NRR grow faster)', de: 'Schwächt Wettbewerbsposition (Wettbewerber mit 120%+ NRR wachsen schneller)' },
    { en: 'Delays profitability (Rule of 40 impossible with negative net retention)', de: 'Verzögert Profitabilität (Rule of 40 unmöglich bei negativer Net Retention)' },
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
            {language === 'de' ? 'Dein Customer Success ist kaputt' : 'Your Customer Success Is Broken'}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Deine Churn ist von 10% auf 20%+ jährlich gestiegen. Dein NRR ist unter 100% gefallen (du verlierst mehr Revenue als du expandierst). Deine Expansion Rate steckt bei 10% fest (Benchmark: 30%+). Und das Schlimmste – du weißt nicht, ob das Problem Onboarding, Retention oder Expansion ist.'
              : "Your churn has climbed from 10% to 20%+ annually. Your NRR has dropped below 100% (you're losing more revenue than you're expanding). Your expansion rate is stuck at 10% (benchmark: 30%+). And worst of all—you don't know if the problem is onboarding, retention, or expansion."}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Das Board fragt: "Warum ist unser NRR unter 100%?" Deine Investoren sind besorgt über Unit Economics. Dein Customer Success Team ist überlastet (1 CSM managed 50+ Accounts). Und du weißt, wenn du das nicht reparierst, wirst du nie deine Wachstumsziele erreichen.'
              : "The board is asking: \"Why is our NRR below 100%?\" Your investors are concerned about unit economics. Your customer success team is overwhelmed (1 CSM managing 50+ accounts). And you know that if you don't fix this, you'll never hit your growth targets."}
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

        {/* Real Costs */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">
            {language === 'de' ? 'Die wahren Kosten:' : 'The real cost:'}
          </h3>
          <p className="text-center text-muted-foreground mb-6">
            {language === 'de'
              ? 'Es geht nicht nur darum, Kunden zu verlieren. Jedes Quartal mit kaputtem Customer Success:'
              : "This isn't just about losing customers. Every quarter with broken customer success:"}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {realCosts.map((cost, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                <TrendingDown className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{language === 'de' ? cost.de : cost.en}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-foreground font-bold mt-8">
            {language === 'de'
              ? 'Du brauchst eine Retention-Engine. Schnell.'
              : 'You need a retention engine. Fast.'}
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

  const phases = [
    {
      number: '1',
      title: { en: 'Diagnose the Bottleneck', de: 'Den Engpass diagnostizieren' },
      timeline: { en: 'Week 1-2', de: 'Woche 1-2' },
      icon: Search,
      items: [
        { en: 'Onboarding Analysis: Are customers getting to value fast? (Time-to-Value, Activation Rate)', de: 'Onboarding-Analyse: Kommen Kunden schnell zum Wert? (Time-to-Value, Activation Rate)' },
        { en: 'Retention Analysis: Why are customers churning? (Churn cohorts, exit interviews)', de: 'Retention-Analyse: Warum churnen Kunden? (Churn-Kohorten, Exit-Interviews)' },
        { en: "Expansion Analysis: Why aren't customers expanding? (Upsell rate, cross-sell rate)", de: 'Expansion-Analyse: Warum expandieren Kunden nicht? (Upsell Rate, Cross-Sell Rate)' },
        { en: 'CS Operations Analysis: Is your CS team set up for success? (CSM ratio, tools, playbooks)', de: 'CS-Operations-Analyse: Ist dein CS-Team für Erfolg aufgestellt? (CSM-Ratio, Tools, Playbooks)' },
      ],
      deliverable: { en: 'Customer Success Bottleneck Report (15-20 pages) with root cause analysis', de: 'Customer Success Bottleneck Report (15-20 Seiten) mit Root-Cause-Analyse' },
      color: 'from-violet-500 to-purple-600',
    },
    {
      number: '2',
      title: { en: 'Fix the Bottleneck', de: 'Den Engpass beheben' },
      timeline: { en: 'Week 2-4', de: 'Woche 2-4' },
      icon: Wrench,
      items: [
        { en: 'Option A: Onboarding Optimization – Redesign onboarding flow, implement AI-powered activation tracking, build onboarding playbooks', de: 'Option A: Onboarding-Optimierung – Onboarding-Flow redesignen, AI-gestütztes Activation Tracking, Onboarding Playbooks bauen' },
        { en: 'Option B: Retention Loops – Implement AI-powered health scoring (30+ signals), build churn prevention playbooks (90-day early warning)', de: 'Option B: Retention Loops – AI-gestütztes Health Scoring (30+ Signale), Churn Prevention Playbooks (90-Tage Frühwarnung)' },
        { en: 'Option C: Expansion Engine – Identify expansion triggers, build upsell/cross-sell playbooks, implement AI-powered expansion recommendations', de: 'Option C: Expansion Engine – Expansion Triggers identifizieren, Upsell/Cross-Sell Playbooks, AI-gestützte Expansion-Empfehlungen' },
      ],
      deliverable: { en: 'Implemented NRR engine (live in your CS tools, not a slide deck)', de: 'Implementierte NRR-Engine (live in deinen CS-Tools, nicht ein Slide Deck)' },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '3',
      title: { en: 'Validate & Scale', de: 'Validieren & Skalieren' },
      timeline: { en: 'Week 4-6', de: 'Woche 4-6' },
      icon: CheckCircle,
      items: [
        { en: 'Metrics Tracking: Churn, NRR, Expansion Rate, Time-to-Value', de: 'Metriken-Tracking: Churn, NRR, Expansion Rate, Time-to-Value' },
        { en: 'CS Team Training: CSMs trained on new tools and playbooks', de: 'CS-Team-Training: CSMs auf neuen Tools und Playbooks geschult' },
        { en: 'Customer Communication: Email templates, in-app messaging, QBR templates', de: 'Kunden-Kommunikation: E-Mail-Templates, In-App Messaging, QBR-Templates' },
      ],
      deliverable: { en: 'Validated NRR engine + team enablement', de: 'Validierte NRR-Engine + Team Enablement' },
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  const differentiators = [
    { en: 'Hands-on execution (not just strategy slides)', de: 'Hands-on Execution (nicht nur Strategie-Slides)' },
    { en: 'AI-native tools (health scoring, churn prediction, expansion triggers)', de: 'AI-native Tools (Health Scoring, Churn Prediction, Expansion Triggers)' },
    { en: 'Outcome-based risk sharing (we measure what matters)', de: 'Ergebnisbasierte Risikoteilung (wir messen, was zählt)' },
    { en: '4-6 week sprint (fast results, no long-term lock-in)', de: '4-6 Wochen Sprint (schnelle Ergebnisse, keine langfristige Bindung)' },
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
              ? 'So bauen wir deine NRR-Engine'
              : 'How We Build Your NRR Engine'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Wir stellen nicht einfach mehr CSMs ein. Wir beheben deinen #1 Customer Success Engpass – das eine, was dich davon abhält, Kunden zu halten und zu expandieren.'
              : "We don't just hire more CSMs. We fix your #1 customer success bottleneck—the one thing preventing you from retaining and expanding customers."}
          </p>
        </div>

        {/* 3-Phase Timeline */}
        <h3 className="text-center text-lg font-bold mb-8">
          {language === 'de' ? 'Der Power Up Prozess (4-6 Wochen):' : 'The Power Up Process (4-6 Weeks):'}
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border-2 border-border hover:border-primary/50 p-6 transition-all duration-400 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Phase Number Badge */}
                <div className={`absolute -top-3 -right-3 px-4 py-1 text-sm font-bold tracking-wider bg-gradient-to-r ${phase.color} text-white shadow-brutal-sm`}>
                  {language === 'de' ? 'Phase' : 'Phase'} {phase.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
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
            );
          })}
        </div>

        {/* What Makes This Different */}
        <div className="bg-card border-2 border-primary/30 p-8 rounded-lg">
          <h3 className="font-bold text-lg mb-6 text-center">
            {language === 'de' ? 'Was das hier anders macht:' : 'What makes this different:'}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {differentiators.map((item, index) => (
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
// SECTION 4: OUTCOME/IMPACT
// ============================================================================
const OutcomeSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [openMeasurement, setOpenMeasurement] = React.useState<string | null>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const outcomes = [
    {
      id: 'churn',
      value: '-20-40%',
      title: { en: 'Churn Reduction', de: 'Churn-Reduktion' },
      example: { en: 'Example: 20% → 12%', de: 'Beispiel: 20% → 12%' },
      impact: { en: '+8 customers retained = +€80K ARR (at €10K ACV)', de: '+8 Kunden gehalten = +€80K ARR (bei €10K ACV)' },
      why: { en: 'We implement AI-powered health scoring and churn prevention playbooks—so you can identify at-risk customers 90 days ahead (not 30 days) and intervene before they churn.', de: 'Wir implementieren AI-gestütztes Health Scoring und Churn Prevention Playbooks – so kannst du At-Risk Kunden 90 Tage vorher identifizieren (nicht 30 Tage) und eingreifen, bevor sie churnen.' },
    },
    {
      id: 'nrr',
      value: '+10-20pp',
      title: { en: 'NRR Increase', de: 'NRR-Steigerung' },
      example: { en: 'Example: 95% → 110%', de: 'Beispiel: 95% → 110%' },
      impact: { en: '+€600K ARR/year from same customer base', de: '+€600K ARR/Jahr von derselben Kundenbasis' },
      why: { en: 'We reduce churn (fewer customers leaving) AND increase expansion (more customers upgrading)—which compounds to 10-20pp NRR improvement.', de: 'Wir reduzieren Churn (weniger Kunden gehen) UND steigern Expansion (mehr Kunden upgraden) – was sich zu 10-20pp NRR-Verbesserung addiert.' },
    },
    {
      id: 'expansion',
      value: '+50-100%',
      title: { en: 'Expansion Rate Increase', de: 'Expansion Rate Steigerung' },
      example: { en: 'Example: 10% → 18%', de: 'Beispiel: 10% → 18%' },
      impact: { en: '+80% more expansion revenue', de: '+80% mehr Expansion Revenue' },
      why: { en: 'We identify expansion triggers (usage patterns, feature adoption) and build upsell/cross-sell playbooks—so your CSMs know exactly when and how to approach customers for expansion.', de: 'Wir identifizieren Expansion Triggers (Nutzungsmuster, Feature-Adoption) und bauen Upsell/Cross-Sell Playbooks – so wissen deine CSMs genau, wann und wie sie Kunden für Expansion ansprechen.' },
    },
  ];

  const caseStudy = {
    company: { en: 'Series B SaaS, €25M ARR, 60 employees', de: 'Series B SaaS, €25M ARR, 60 Mitarbeiter' },
    challenge: { en: 'Churn 22%, NRR 92%, Expansion Rate 8%', de: 'Churn 22%, NRR 92%, Expansion Rate 8%' },
    bottleneck: { en: 'No retention loops (reactive CS, no health scoring)', de: 'Keine Retention Loops (reaktives CS, kein Health Scoring)' },
    fix: { en: 'AI-powered health scoring + churn prevention playbooks (5 weeks)', de: 'AI-gestütztes Health Scoring + Churn Prevention Playbooks (5 Wochen)' },
    outcomes: [
      { label: { en: 'Churn', de: 'Churn' }, value: '-32% (22% → 15%)' },
      { label: { en: 'NRR', de: 'NRR' }, value: '+18pp (92% → 110%)' },
      { label: { en: 'Expansion Rate', de: 'Expansion Rate' }, value: '+75% (8% → 14%)' },
    ],
  };

  return (
    <section
      id="outcome-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[60vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Die Ergebnisse' : 'The Outcome'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Typische Ergebnisse (4-6 Wochen)' : 'Typical Outcomes (4-6 Weeks)'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Diese sind echte Ergebnisse von Unternehmen wie deinem (Series A-D, €10M-€50M ARR).'
              : 'These are real results from companies like yours (Series A-D, €10M-€50M ARR).'}
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
              <p className="text-sm text-muted-foreground mb-2">
                {language === 'de' ? outcome.example.de : outcome.example.en}
              </p>
              <p className="text-sm font-medium text-accent mb-4">
                {language === 'de' ? outcome.impact.de : outcome.impact.en}
              </p>
              <Collapsible open={openMeasurement === outcome.id} onOpenChange={(open) => setOpenMeasurement(open ? outcome.id : null)}>
                <CollapsibleTrigger className="flex items-center gap-2 text-xs text-primary hover:underline cursor-pointer">
                  <span>{language === 'de' ? 'Warum das passiert' : 'Why this happens'}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${openMeasurement === outcome.id ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-3">
                  <p className="text-xs text-muted-foreground bg-muted/50 p-3 rounded">
                    {language === 'de' ? outcome.why.de : outcome.why.en}
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>

        {/* Real Example / Case Study */}
        <div className="bg-card border-2 border-primary/30 p-8 rounded-lg mb-12">
          <h3 className="font-bold text-lg mb-6 text-center">
            {language === 'de' ? 'Echtes Beispiel:' : 'Real Example:'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {language === 'de' ? 'Unternehmen:' : 'Company:'}
                </span>
                <p className="text-sm text-foreground">{language === 'de' ? caseStudy.company.de : caseStudy.company.en}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {language === 'de' ? 'Herausforderung:' : 'Challenge:'}
                </span>
                <p className="text-sm text-foreground">{language === 'de' ? caseStudy.challenge.de : caseStudy.challenge.en}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {language === 'de' ? 'Engpass:' : 'Bottleneck:'}
                </span>
                <p className="text-sm text-foreground">{language === 'de' ? caseStudy.bottleneck.de : caseStudy.bottleneck.en}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Fix:</span>
                <p className="text-sm text-foreground">{language === 'de' ? caseStudy.fix.de : caseStudy.fix.en}</p>
              </div>
            </div>
            <div className="bg-accent/10 border border-accent/30 p-6 rounded-lg">
              <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
                {language === 'de' ? 'Ergebnisse:' : 'Outcomes:'}
              </h4>
              <div className="space-y-3">
                {caseStudy.outcomes.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{language === 'de' ? item.label.de : item.label.en}</span>
                    <span className="font-bold text-accent">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold"
            onClick={() => scrollToSection('final-cta')}
          >
            {language === 'de' ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book Free Inflection Call (30 min)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
            {language === 'de'
              ? 'In 30 Minuten diagnostizieren wir deinen Customer Success Engpass und zeigen dir genau, wie wir ihn beheben würden. Kein Pitch, kein Druck – nur Klarheit.'
              : "In 30 minutes, we'll diagnose your customer success bottleneck and show you exactly how we'd fix it. No pitch, no pressure—just clarity."}
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 5: HOW WE WORK (PROCESS)
// ============================================================================
const ProcessSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const weeks = [
    {
      title: { en: 'WEEK 1-2: DIAGNOSE', de: 'WOCHE 1-2: DIAGNOSE' },
      whatWeDo: [
        { en: 'Onboarding Analysis (Time-to-Value, Activation Rate)', de: 'Onboarding-Analyse (Time-to-Value, Activation Rate)' },
        { en: 'Retention Analysis (Churn cohorts, exit interviews)', de: 'Retention-Analyse (Churn-Kohorten, Exit-Interviews)' },
        { en: 'Expansion Analysis (Upsell rate, cross-sell rate)', de: 'Expansion-Analyse (Upsell Rate, Cross-Sell Rate)' },
        { en: 'CS Operations Analysis (CSM ratio, tools, playbooks)', de: 'CS-Operations-Analyse (CSM-Ratio, Tools, Playbooks)' },
      ],
      whatYouGet: [
        { en: 'Customer Success Bottleneck Report (15-20 pages)', de: 'Customer Success Bottleneck Report (15-20 Seiten)' },
        { en: 'Root Cause Analysis (with data)', de: 'Root-Cause-Analyse (mit Daten)' },
        { en: 'Fix Recommendation (1-3 options)', de: 'Fix-Empfehlung (1-3 Optionen)' },
      ],
      timeCommitment: { en: '8-12 hours', de: '8-12 Stunden' },
    },
    {
      title: { en: 'WEEK 2-4: FIX', de: 'WOCHE 2-4: FIX' },
      whatWeDo: [
        { en: 'Implement #1 fix (onboarding, retention, or expansion)', de: 'Implementiere #1 Fix (Onboarding, Retention oder Expansion)' },
        { en: 'Build AI-native tools (health scoring, churn prediction, expansion triggers)', de: 'Baue AI-native Tools (Health Scoring, Churn Prediction, Expansion Triggers)' },
        { en: 'Train your CS team (new tools, playbooks, workflows)', de: 'Trainiere dein CS-Team (neue Tools, Playbooks, Workflows)' },
      ],
      whatYouGet: [
        { en: 'Implemented NRR engine (live in your CS tools)', de: 'Implementierte NRR-Engine (live in deinen CS-Tools)' },
        { en: 'AI-native tools (deployed, not just designed)', de: 'AI-native Tools (deployed, nicht nur designed)' },
        { en: 'Team training (hands-on, not just slides)', de: 'Team-Training (Hands-on, nicht nur Slides)' },
      ],
      timeCommitment: { en: '12-16 hours', de: '12-16 Stunden' },
    },
    {
      title: { en: 'WEEK 4-6: VALIDATE', de: 'WOCHE 4-6: VALIDIEREN' },
      whatWeDo: [
        { en: 'Track metrics (Churn, NRR, Expansion Rate, Time-to-Value)', de: 'Tracke Metriken (Churn, NRR, Expansion Rate, Time-to-Value)' },
        { en: 'Validate impact (is the fix working?)', de: 'Validiere Impact (funktioniert der Fix?)' },
        { en: 'Scale preparation (playbooks, documentation)', de: 'Scale-Vorbereitung (Playbooks, Dokumentation)' },
      ],
      whatYouGet: [
        { en: 'Metrics Dashboard (real-time tracking)', de: 'Metriken-Dashboard (Echtzeit-Tracking)' },
        { en: 'Validated outcomes (with before/after data)', de: 'Validierte Ergebnisse (mit Vorher/Nachher-Daten)' },
        { en: 'Scale Playbook (step-by-step guide)', de: 'Scale Playbook (Schritt-für-Schritt-Anleitung)' },
      ],
      timeCommitment: { en: '6-8 hours', de: '6-8 Stunden' },
    },
  ];

  const riskSharing = {
    primaryMetrics: [
      { en: 'Churn Rate (%)', de: 'Churn Rate (%)' },
      { en: 'NRR (%)', de: 'NRR (%)' },
      { en: 'Expansion Rate (%)', de: 'Expansion Rate (%)' },
    ],
    howWeMeasure: [
      { en: 'Baseline: Week 0 (before we start)', de: 'Baseline: Woche 0 (bevor wir starten)' },
      { en: 'Checkpoint: Week 4 (mid-sprint)', de: 'Checkpoint: Woche 4 (Mid-Sprint)' },
      { en: 'Final: Week 6 (end of sprint)', de: 'Final: Woche 6 (Ende des Sprints)' },
    ],
    riskMitigation: { 
      en: "If we don't hit agreed outcomes, we'll extend the sprint at no extra cost. Reference calls available (talk to VP Customer Success who've worked with us).",
      de: 'Wenn wir vereinbarte Ergebnisse nicht erreichen, verlängern wir den Sprint ohne Zusatzkosten. Referenzgespräche möglich (sprich mit VP Customer Success, die mit uns gearbeitet haben).'
    },
  };

  return (
    <section
      id="process-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[60vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-mesh" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Wie wir arbeiten' : 'How We Work'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Der Power Up Prozess (Woche für Woche)' : 'The Power Up Process (Week-by-Week)'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Transparente Timeline. Klare Deliverables. Messbare Ergebnisse.'
              : 'Transparent timeline. Clear deliverables. Measurable outcomes.'}
          </p>
        </div>

        {/* Week-by-Week Breakdown */}
        <div className="space-y-6 mb-16">
          {weeks.map((week, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-bold text-lg text-foreground mb-6">{language === 'de' ? week.title.de : week.title.en}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    {language === 'de' ? 'Was wir tun:' : 'What we do:'}
                  </h4>
                  <ul className="space-y-2">
                    {week.whatWeDo.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{language === 'de' ? item.de : item.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    {language === 'de' ? 'Was du bekommst:' : 'What you get:'}
                  </h4>
                  <ul className="space-y-2">
                    {week.whatYouGet.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{language === 'de' ? item.de : item.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    {language === 'de' ? 'Zeitaufwand (dein Team):' : 'Time commitment (your team):'}
                  </h4>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-lg font-bold text-foreground">
                      {language === 'de' ? week.timeCommitment.de : week.timeCommitment.en}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outcome-Based Risk Sharing */}
        <div className="bg-accent/10 border-2 border-accent/30 p-8 rounded-lg">
          <h3 className="font-bold text-lg mb-6 text-center text-accent">
            {language === 'de' ? 'Ergebnisbasierte Risikoteilung:' : 'Outcome-Based Risk Sharing:'}
          </h3>
          <p className="text-center text-muted-foreground mb-6">
            {language === 'de' ? 'Wir messen, was zählt:' : 'We measure what matters:'}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-accent mb-3">
                {language === 'de' ? 'Primäre Metriken:' : 'Primary Metrics:'}
              </h4>
              <ul className="space-y-2">
                {riskSharing.primaryMetrics.map((metric, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                    <BarChart3 className="w-4 h-4 text-accent" />
                    <span>{language === 'de' ? metric.de : metric.en}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-accent mb-3">
                {language === 'de' ? 'Wie wir messen:' : 'How we measure:'}
              </h4>
              <ul className="space-y-2">
                {riskSharing.howWeMeasure.map((item, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {language === 'de' ? item.de : item.en}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-accent mb-3">
                {language === 'de' ? 'Risikominderung:' : 'Risk mitigation:'}
              </h4>
              <p className="text-sm text-muted-foreground">
                {language === 'de' ? riskSharing.riskMitigation.de : riskSharing.riskMitigation.en}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 6: QUALIFICATION (WHO IT'S FOR)
// ============================================================================
const QualificationSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const idealFor = [
    { en: 'Your customer success is broken: Churn is high (15%+ annually, trending up), NRR is below 100% (losing revenue every quarter)', de: 'Dein Customer Success ist kaputt: Churn ist hoch (15%+ jährlich, steigend), NRR ist unter 100% (verliert Revenue jedes Quartal)' },
    { en: "You have a customer success problem (but don't know the root cause): Is it onboarding? Is it retention? Is it expansion?", de: 'Du hast ein Customer Success Problem (aber kennst die Ursache nicht): Ist es Onboarding? Ist es Retention? Ist es Expansion?' },
    { en: "You're Series A-D, €10M-€50M ARR with 100+ paying customers", de: 'Du bist Series A-D, €10M-€50M ARR mit 100+ zahlenden Kunden' },
    { en: "You're willing to execute: Your CS team will commit 8-12 hours/week for 4-6 weeks, give us access to data (CS tools, churn data, customer interviews)", de: 'Du bist bereit zu exekutieren: Dein CS-Team wird 8-12 Stunden/Woche für 4-6 Wochen committen, uns Datenzugang geben (CS-Tools, Churn-Daten, Kundeninterviews)' },
    { en: 'You have budget (€23.6K): ROI is 15-30x based on typical outcomes', de: 'Du hast Budget (€23.6K): ROI ist 15-30x basierend auf typischen Ergebnissen' },
  ];

  const notFor = [
    { en: "You're pre-revenue or pre-Series A: Power Up is for companies with existing customers (not building from scratch). Better fit: Expert Session (€490, 45-90 min)", de: 'Du bist Pre-Revenue oder Pre-Series A: Power Up ist für Unternehmen mit bestehenden Kunden (nicht von Grund auf neu). Besser geeignet: Expert Session (€490, 45-90 Min.)' },
    { en: 'You need a full CS transformation (not a quick fix): If you need to rebuild your entire CS organization (6-12 months). Better fit: Boost (90 days, €60K-€78K) or Accelerate (12 months)', de: 'Du brauchst eine volle CS-Transformation (keinen Quick Fix): Wenn du deine gesamte CS-Organisation neu aufbauen musst (6-12 Monate). Besser geeignet: Boost (90 Tage, €60K-€78K) oder Accelerate (12 Monate)' },
    { en: "You're not ready to execute: If you just want a CS strategy deck (not hands-on implementation). Better fit: Traditional consulting (McKinsey, BCG, Bain)", de: 'Du bist nicht bereit zu exekutieren: Wenn du nur ein CS-Strategy-Deck willst (keine Hands-on Implementierung). Besser geeignet: Traditionelles Consulting (McKinsey, BCG, Bain)' },
  ];

  return (
    <section
      id="qualification-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[40vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Ist das richtig für dich?' : 'Is This Right for You?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Power Up: NRR Engine funktioniert am besten für Unternehmen in dieser Situation.'
              : 'Power Up: NRR Engine works best for companies in this situation.'}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Ideal For */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-accent flex items-center gap-2">
              <Check className="w-5 h-5" />
              {language === 'de' ? 'Das ist ein guter Fit wenn:' : 'This is a good fit if:'}
            </h3>
            <div className="space-y-3">
              {idealFor.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-accent/5 border border-accent/20 rounded-lg">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{language === 'de' ? item.de : item.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not For */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-destructive flex items-center gap-2">
              <X className="w-5 h-5" />
              {language === 'de' ? 'Das ist kein guter Fit wenn:' : 'This is not a good fit if:'}
            </h3>
            <div className="space-y-3">
              {notFor.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{language === 'de' ? item.de : item.en}</span>
                </div>
              ))}
            </div>

            {/* Decision Help */}
            <div className="mt-6 p-6 bg-card border-2 border-border">
              <p className="text-sm text-muted-foreground mb-4">
                {language === 'de'
                  ? 'Nicht sicher, ob das der richtige Fit ist? Buche einen kostenlosen 30-Min. Inflection Call. Wir diagnostizieren deinen Customer Success Engpass und empfehlen den besten Weg nach vorn (auch wenn es nicht Power Up ist).'
                  : "Not sure if this is the right fit? Book a free 30-min Inflection Call. We'll diagnose your customer success bottleneck and recommend the best path forward (even if it's not Power Up)."}
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
// SECTION 7: FINAL CTA (NEXT STEPS)
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

  const faqs = [
    {
      q: { en: 'How long does Power Up take?', de: 'Wie lange dauert Power Up?' },
      a: { en: '4-6 weeks (depending on your bottleneck and team availability)', de: '4-6 Wochen (abhängig von deinem Engpass und Team-Verfügbarkeit)' },
    },
    {
      q: { en: "What's the investment?", de: 'Was ist das Investment?' },
      a: { en: '€23.6K (fixed price, outcome-based risk sharing)', de: '€23.6K (Festpreis, ergebnisbasierte Risikoteilung)' },
    },
    {
      q: { en: "What if it doesn't work?", de: 'Was ist, wenn es nicht funktioniert?' },
      a: { en: "We measure outcomes (Churn, NRR, Expansion Rate). If we don't hit agreed targets, we'll extend the sprint at no extra cost.", de: 'Wir messen Ergebnisse (Churn, NRR, Expansion Rate). Wenn wir vereinbarte Ziele nicht erreichen, verlängern wir den Sprint ohne Zusatzkosten.' },
    },
    {
      q: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' },
      a: { en: "Yes. We'll connect you with a VP Customer Success who's worked with us (same stage, same challenge).", de: 'Ja. Wir verbinden dich mit einem VP Customer Success, der mit uns gearbeitet hat (gleiche Stage, gleiche Herausforderung).' },
    },
    {
      q: { en: "What's the ROI?", de: 'Was ist der ROI?' },
      a: { en: 'Typical ROI is 15-30x (based on churn reduction + NRR improvement over 12 months).', de: 'Typischer ROI ist 15-30x (basierend auf Churn-Reduktion + NRR-Verbesserung über 12 Monate).' },
    },
    {
      q: { en: 'Do you work with our CS tools?', de: 'Arbeitet ihr mit unseren CS-Tools?' },
      a: { en: 'Yes. We integrate with Gainsight, ChurnZero, Totango, Vitally, and custom CS platforms.', de: 'Ja. Wir integrieren mit Gainsight, ChurnZero, Totango, Vitally und individuellen CS-Plattformen.' },
    },
  ];

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
            {language === 'de' ? 'Bereit, deine NRR-Engine zu bauen?' : 'Ready to Build Your NRR Engine?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Starte mit einem kostenlosen Inflection Call (30 Min.). Wir diagnostizieren deinen Customer Success Engpass und empfehlen die richtige Lösung (Power Up, Boost, Accelerate oder DIY).'
              : "Start with a free Inflection Call (30 min). We'll diagnose your customer success bottleneck and recommend the right solution (Power Up, Boost, Accelerate, or DIY)."}
          </p>
        </div>

        {/* CTA Button */}
        <div
          className="max-w-2xl mx-auto text-center animate-slide-up mb-12"
          style={{ animationDelay: '0.2s' }}
        >
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
          >
            {language === 'de' ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book Free Inflection Call (30 min)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground bg-card/50 px-4 py-2 border border-border">
              <Check className="w-4 h-4 text-accent" />
              <span>{language === 'de' ? badge.de : badge.en}</span>
            </div>
          ))}
        </div>

        {/* Expert Session Alternative */}
        <div className="max-w-2xl mx-auto mb-16 p-6 bg-card border-2 border-border rounded-lg text-center">
          <h3 className="font-bold text-lg mb-2">
            {language === 'de' ? 'Alternative: Starte mit einer Expert Session' : 'Alternative: Start with an Expert Session'}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {language === 'de'
              ? 'Noch nicht bereit für ein volles Power Up? Starte kleiner mit einer Expert Session: Net Retention Revenue Boost (45-90 Min., €490-€890)'
              : 'Not ready for a full Power Up? Start smaller with an Expert Session: Net Retention Revenue Boost (45-90 min, €490-€890)'}
          </p>
          <Button 
            variant="outline" 
            onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
          >
            {language === 'de' ? 'Expert Session buchen' : 'Book Expert Session'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h3 className="font-bold text-lg mb-6 text-center">FAQ</h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-sm hover:no-underline">
                  {language === 'de' ? faq.q.de : faq.q.en}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {language === 'de' ? faq.a.de : faq.a.en}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          {language === 'de'
            ? 'Noch Fragen? E-Mail uns an team@scalingx.io oder buche einen Call.'
            : 'Still have questions? Email us at team@scalingx.io or book a call.'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const PowerUpNRREngine: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleOpenModal = () => setIsBookingModalOpen(true);
    window.addEventListener('openBookingModal', handleOpenModal);
    return () => window.removeEventListener('openBookingModal', handleOpenModal);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
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

export default PowerUpNRREngine;
