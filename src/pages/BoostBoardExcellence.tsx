import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
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
  Clock,
  BarChart3,
  Target,
  Users,
  FileText,
  MessageCircle,
  Shield,
  Sparkles,
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
    { value: '+50-100%', label: { en: 'Board Confidence', de: 'Board Confidence' }, sublabel: { en: 'Increase', de: 'Steigerung' } },
    { value: '-80-90%', label: { en: 'Board Prep Time', de: 'Board Prep Time' }, sublabel: { en: 'Reduction', de: 'Reduktion' } },
    { value: '+20-30pp', label: { en: 'Rule of 40', de: 'Rule of 40' }, sublabel: { en: 'Improvement', de: 'Verbesserung' } },
  ];

  const trustBadges = [
    { icon: Shield, label: { en: '2 of 3 Outcomes Guaranteed (or 50% Refund)', de: '2 von 3 Ergebnissen garantiert (oder 50% Rückerstattung)' } },
    { icon: Clock, label: { en: '90-Day Transformation', de: '90-Tage-Transformation' } },
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
              <span className="text-foreground font-medium">Boost Board Excellence</span>
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
          <span className="block text-foreground">Board Pressure →</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            Board Excellence Built
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Baue deine Board Excellence in 90 Tagen. Typische Ergebnisse: Board Confidence +50-100%, Board Prep Time -80-90%, Rule of 40 +20-30pp – mit 2 von 3 Ergebnissen garantiert.'
            : 'Build your board excellence in 90 days. Typical outcomes: Board Confidence +50-100%, Board Prep Time -80-90%, Rule of 40 +20-30pp—with 2 of 3 outcomes guaranteed.'}
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
    { en: 'Low board confidence: 40-60% (benchmark: 85%+), board is losing trust', de: 'Niedrige Board Confidence: 40-60% (Benchmark: 85%+), Board verliert Vertrauen' },
    { en: 'Slow board prep: 5-7 days per meeting (benchmark: 24-48h), inefficient', de: 'Langsame Board Prep: 5-7 Tage pro Meeting (Benchmark: 24-48h), ineffizient' },
    { en: 'Poor Rule of 40: 20% (benchmark: 50%+), no path to profitability', de: 'Schlechte Rule of 40: 20% (Benchmark: 50%+), kein Pfad zur Profitabilität' },
    { en: 'Valuation discount: 30-40% (benchmark: 0%), investors skeptical', de: 'Valuation Discount: 30-40% (Benchmark: 0%), Investoren skeptisch' },
    { en: 'Board pressure: "When will we see a path to profitability?"', de: 'Board-Druck: "Wann sehen wir einen Pfad zur Profitabilität?"' },
  ];

  const beforeAfter = {
    before: [
      { metric: 'Board Confidence', value: '40-60%' },
      { metric: 'Board Prep', value: '5-7 days' },
      { metric: 'Rule of 40', value: '20%' },
    ],
    after: [
      { metric: 'Board Confidence', value: '85-95%' },
      { metric: 'Board Prep', value: '24-48h' },
      { metric: 'Rule of 40', value: '45-50%' },
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
            {language === 'de' ? 'Dein Board verliert das Vertrauen' : 'Your Board Is Losing Confidence'}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Deine Board Confidence liegt bei 40-60% (Benchmark: 85%+). Deine Board Prep dauert 5-7 Tage pro Meeting (Benchmark: 24-48 Stunden). Deine Rule of 40 liegt bei 20% (Benchmark: 50%+). Und das Schlimmste: Das Board fragt: "Wann sehen wir einen Pfad zur Profitabilität?"'
              : 'Your board confidence is 40-60% (benchmark: 85%+). Your board prep takes 5-7 days per meeting (benchmark: 24-48 hours). Your Rule of 40 is 20% (benchmark: 50%+). And worst of all—the board is asking: "When will we see a path to profitability?"'}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Du hast die offensichtlichen Fixes ausprobiert: bessere Board Decks, mehr Metriken, längere Meetings. Aber nichts funktioniert. Denn das Problem ist nicht ein Board-Issue – es ist dein gesamtes Board Framework.'
              : "You've tried the obvious fixes: better board decks, more metrics, longer meetings. But nothing is working. Because the problem isn't one board issue—it's your entire board framework."}
          </p>
        </div>

        {/* Symptoms Checklist */}
        <div className="max-w-2xl mx-auto mb-16">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">
            {language === 'de' ? 'Board Excellence Symptome:' : 'Board Excellence Symptoms:'}
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

  const components = [
    {
      icon: Brain,
      title: { en: 'Board Intelligence', de: 'Board Intelligence' },
      items: [
        { en: 'Design board dashboard (real-time, not manual)', de: 'Board Dashboard designen (real-time, nicht manuell)' },
        { en: 'Build board reporting system (automated, not spreadsheets)', de: 'Board Reporting System bauen (automatisiert, keine Spreadsheets)' },
        { en: 'Implement board decision memos (AI-powered, not manual)', de: 'Board Decision Memos implementieren (AI-powered, nicht manuell)' },
        { en: 'Create board communication framework (structured, not ad-hoc)', de: 'Board Communication Framework erstellen (strukturiert, nicht ad-hoc)' },
      ],
    },
    {
      icon: Target,
      title: { en: 'Strategic Planning', de: 'Strategic Planning' },
      items: [
        { en: 'Design strategic plan (3-year vision, 1-year plan)', de: 'Strategieplan designen (3-Jahres-Vision, 1-Jahres-Plan)' },
        { en: 'Build OKR system (board-level, cascaded to company)', de: 'OKR-System bauen (Board-Level, kaskadiert ins Unternehmen)' },
        { en: 'Implement strategic review process (quarterly, structured)', de: 'Strategisches Review implementieren (quartalsweise, strukturiert)' },
        { en: 'Create investor relations framework (proactive, not reactive)', de: 'Investor Relations Framework erstellen (proaktiv, nicht reaktiv)' },
      ],
    },
    {
      icon: BarChart3,
      title: { en: 'Rule of 40 Improvement', de: 'Rule of 40 Verbesserung' },
      items: [
        { en: 'Analyze growth vs. profitability trade-offs', de: 'Growth vs. Profitability Trade-offs analysieren' },
        { en: 'Build path to profitability (realistic, board-approved)', de: 'Pfad zur Profitabilität bauen (realistisch, Board-approved)' },
        { en: 'Implement efficiency initiatives (CAC, NRR, operational debt)', de: 'Effizienz-Initiativen implementieren (CAC, NRR, Operational Debt)' },
        { en: 'Track Rule of 40 progress (weekly, automated)', de: 'Rule of 40 Progress tracken (wöchentlich, automatisiert)' },
      ],
    },
  ];

  const phases = [
    {
      number: '1',
      title: { en: 'Diagnose', de: 'Diagnose' },
      timeline: { en: 'Week 1-2', de: 'Woche 1-2' },
      items: [
        { en: 'Board Confidence Analysis: Why is confidence 40-60%?', de: 'Board Confidence Analyse: Warum liegt Confidence bei 40-60%?' },
        { en: 'Board Efficiency Analysis: Why does prep take 5-7 days?', de: 'Board Efficiency Analyse: Warum dauert Prep 5-7 Tage?' },
        { en: 'Rule of 40 Analysis: Why is it 20%?', de: 'Rule of 40 Analyse: Warum liegt sie bei 20%?' },
        { en: 'AI Readiness: Where can AI 3-5x board efficiency?', de: 'AI Readiness: Wo kann AI Board-Effizienz 3-5x steigern?' },
      ],
      deliverable: { en: 'Board Transformation Report (30-40 pages) + 90-Day Roadmap', de: 'Board Transformation Report (30-40 Seiten) + 90-Tage-Roadmap' },
      color: 'from-violet-500 to-purple-600',
    },
    {
      number: '2',
      title: { en: 'Build', de: 'Build' },
      timeline: { en: 'Week 3-8', de: 'Woche 3-8' },
      items: [
        { en: 'Board Intelligence: Dashboard, reporting, decision memos', de: 'Board Intelligence: Dashboard, Reporting, Decision Memos' },
        { en: 'Strategic Planning: 3-year vision, OKRs, review process', de: 'Strategic Planning: 3-Jahres-Vision, OKRs, Review-Prozess' },
        { en: 'Rule of 40 Improvement: Path to profitability, efficiency', de: 'Rule of 40 Verbesserung: Pfad zur Profitabilität, Effizienz' },
        { en: 'Train leadership team on board excellence', de: 'Leadership Team auf Board Excellence trainieren' },
      ],
      deliverable: { en: 'Board Excellence live (in your systems)', de: 'Board Excellence live (in deinen Systemen)' },
      color: 'from-cyan-500 to-blue-600',
    },
    {
      number: '3',
      title: { en: 'Validate', de: 'Validieren' },
      timeline: { en: 'Week 9-12', de: 'Woche 9-12' },
      items: [
        { en: 'Metrics Tracking: Board Confidence, Prep Time, Rule of 40', de: 'Metriken-Tracking: Board Confidence, Prep Time, Rule of 40' },
        { en: 'Team Training: Leadership trained on board excellence', de: 'Team-Training: Leadership auf Board Excellence trainiert' },
        { en: 'Fundraising Prep: How to present board excellence to investors', de: 'Fundraising Prep: Wie man Board Excellence Investoren präsentiert' },
      ],
      deliverable: { en: 'Validated Board Excellence + Fundraising Prep', de: 'Validierte Board Excellence + Fundraising Prep' },
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
            {language === 'de' ? 'Wie wir deine Board Excellence aufbauen' : 'How We Build Your Board Excellence'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Wir verbessern nicht nur Board Decks. Wir bauen dein gesamtes Board Framework neu auf – damit du Board Confidence mit effizienter Governance und strategischer Klarheit erreichst.'
              : "We don't just improve board decks. We rebuild your entire board framework—so you achieve board confidence with efficient governance and strategic clarity."}
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

        {/* Components Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">
            {language === 'de' ? 'Board Excellence Komponenten:' : 'Board Excellence Components:'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {components.map((component, index) => (
              <div key={index} className="bg-card border-2 border-border p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <component.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-bold text-foreground">
                    {language === 'de' ? component.title.de : component.title.en}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {component.items.map((item, itemIndex) => (
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
              { en: 'Full framework rebuild (intelligence + planning + metrics)', de: 'Vollständiger Framework-Aufbau (Intelligence + Planning + Metrics)' },
              { en: '2-3 capabilities transformed (C₁ + C₄)', de: '2-3 Capabilities transformiert (C₁ + C₄)' },
              { en: 'AI-powered automation (board intelligence)', de: 'AI-powered Automation (Board Intelligence)' },
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
      metric: 'Board Confidence +50-100%',
      icon: TrendingUp,
      description: {
        en: 'Your board confidence increases by 50-100%.',
        de: 'Deine Board Confidence steigt um 50-100%.',
      },
      before: { en: 'Board confidence 40-60% (board losing trust)', de: 'Board Confidence 40-60% (Board verliert Vertrauen)' },
      after: { en: 'Board confidence 85-95% (board fully confident)', de: 'Board Confidence 85-95% (Board voll confident)' },
      impact: { en: 'From "board skeptical" to "board supportive"', de: 'Von "Board skeptisch" zu "Board supportive"' },
      why: {
        en: 'We implement board intelligence and strategic planning—which increases board confidence by 50-100% through transparency and execution.',
        de: 'Wir implementieren Board Intelligence und Strategic Planning—was Board Confidence durch Transparenz und Execution um 50-100% steigert.',
      },
    },
    {
      metric: 'Board Prep Time -80-90%',
      icon: Clock,
      description: {
        en: 'Your board prep time decreases by 80-90%.',
        de: 'Deine Board Prep Time sinkt um 80-90%.',
      },
      before: { en: 'Board prep 5-7 days (inefficient, manual)', de: 'Board Prep 5-7 Tage (ineffizient, manuell)' },
      after: { en: 'Board prep 24-48 hours (efficient, automated)', de: 'Board Prep 24-48 Stunden (effizient, automatisiert)' },
      impact: { en: 'From "board prep nightmare" to "board prep automated"', de: 'Von "Board Prep Nightmare" zu "Board Prep automatisiert"' },
      why: {
        en: 'We implement AI-powered board intelligence and automated reporting—which reduces prep time by 80-90% through automation and systems.',
        de: 'Wir implementieren AI-powered Board Intelligence und automatisiertes Reporting—was Prep Time durch Automation und Systeme um 80-90% reduziert.',
      },
    },
    {
      metric: 'Rule of 40 +20-30pp',
      icon: BarChart3,
      description: {
        en: 'Your Rule of 40 increases by 20-30 percentage points.',
        de: 'Deine Rule of 40 steigt um 20-30 Prozentpunkte.',
      },
      before: { en: 'Rule of 40 = 20% (growth 50% + margin -30%)', de: 'Rule of 40 = 20% (Growth 50% + Marge -30%)' },
      after: { en: 'Rule of 40 = 45-50% (growth 60% + margin -10%)', de: 'Rule of 40 = 45-50% (Growth 60% + Marge -10%)' },
      impact: { en: 'From "no path to profitability" to "clear path"', de: 'Von "kein Pfad zur Profitabilität" zu "klarer Pfad"' },
      why: {
        en: 'We implement efficiency initiatives and strategic planning—which improves Rule of 40 by 20-30pp through growth + profitability optimization.',
        de: 'Wir implementieren Effizienz-Initiativen und Strategic Planning—was Rule of 40 durch Growth + Profitability Optimierung um 20-30pp verbessert.',
      },
    },
  ];

  const realExample = {
    company: 'Series B SaaS, €18M ARR, 95 employees',
    challenge: {
      en: 'Board Confidence 45%, Board Prep 6 days, Rule of 40 18%',
      de: 'Board Confidence 45%, Board Prep 6 Tage, Rule of 40 18%',
    },
    problems: {
      en: 'Manual board prep, no board dashboard, unclear strategy, no path to profitability',
      de: 'Manuelle Board Prep, kein Board Dashboard, unklare Strategie, kein Pfad zur Profitabilität',
    },
    transformation: {
      en: 'Board excellence built (board intelligence, strategic plan, Rule of 40 improvement) over 90 days',
      de: 'Board Excellence aufgebaut (Board Intelligence, Strategieplan, Rule of 40 Verbesserung) über 90 Tage',
    },
    results: [
      { metric: 'Board Confidence', value: '+100% (45% → 90%)' },
      { metric: 'Board Prep', value: '-88% (6d → 18h)' },
      { metric: 'Rule of 40', value: '+27pp (18% → 45%)' },
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
              ? 'Das sind echte Ergebnisse von Unternehmen wie deinem (Series A-C, €10M-€50M ARR).'
              : 'These are real results from companies like yours (Series A-C, €10M-€50M ARR).'}
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
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'Board-Probleme:' : 'Board Problems:'}</p>
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
        { en: 'Board Confidence Analysis (why is confidence 40-60%?)', de: 'Board Confidence Analyse (warum liegt Confidence bei 40-60%?)' },
        { en: 'Board Efficiency Analysis (why does prep take 5-7 days?)', de: 'Board Efficiency Analyse (warum dauert Prep 5-7 Tage?)' },
        { en: 'Rule of 40 Analysis (why is it 20%?)', de: 'Rule of 40 Analyse (warum liegt sie bei 20%?)' },
        { en: 'AI Readiness Analysis (where can AI 3-5x efficiency?)', de: 'AI Readiness Analyse (wo kann AI Effizienz 3-5x steigern?)' },
      ],
      deliverables: [
        { en: 'Board Transformation Report (30-40 pages)', de: 'Board Transformation Report (30-40 Seiten)' },
        { en: '90-Day Roadmap (phased implementation)', de: '90-Tage-Roadmap (phasenweise Implementierung)' },
        { en: 'ROI Prediction (15-30x over 12 months)', de: 'ROI-Prognose (15-30x über 12 Monate)' },
      ],
    },
    {
      title: { en: 'Build', de: 'Build' },
      timeline: { en: 'Week 3-8', de: 'Woche 3-8' },
      commitment: { en: '20-30 hours', de: '20-30 Stunden' },
      activities: [
        { en: 'Rebuild board excellence (intelligence, planning, metrics)', de: 'Board Excellence aufbauen (Intelligence, Planning, Metrics)' },
        { en: 'Implement AI-powered tools (board intelligence, automated reporting)', de: 'AI-powered Tools implementieren (Board Intelligence, automatisiertes Reporting)' },
        { en: 'Train leadership team (on board excellence execution)', de: 'Leadership Team trainieren (auf Board Excellence Execution)' },
      ],
      deliverables: [
        { en: 'Board Excellence live (in your systems)', de: 'Board Excellence live (in deinen Systemen)' },
        { en: 'AI-powered tools deployed (integrated, not standalone)', de: 'AI-powered Tools deployed (integriert, nicht standalone)' },
        { en: 'Team training (leadership playbooks for board)', de: 'Team-Training (Leadership Playbooks für Board)' },
      ],
    },
    {
      title: { en: 'Validate', de: 'Validieren' },
      timeline: { en: 'Week 9-12', de: 'Woche 9-12' },
      commitment: { en: '10-15 hours', de: '10-15 Stunden' },
      activities: [
        { en: 'Track metrics (Board Confidence, Board Prep Time, Rule of 40)', de: 'Metriken tracken (Board Confidence, Board Prep Time, Rule of 40)' },
        { en: 'Validate impact (is board excellence working?)', de: 'Impact validieren (funktioniert Board Excellence?)' },
        { en: 'Create fundraising prep (how to present to investors)', de: 'Fundraising Prep erstellen (wie präsentiert man Investoren?)' },
      ],
      deliverables: [
        { en: 'Metrics Dashboard (real-time tracking)', de: 'Metrics Dashboard (Real-time Tracking)' },
        { en: 'Validated outcomes (with before/after data)', de: 'Validierte Outcomes (mit Vorher/Nachher-Daten)' },
        { en: 'Fundraising Prep (investor-ready materials)', de: 'Fundraising Prep (investor-ready Materialien)' },
      ],
    },
  ];

  const metrics = [
    { name: 'Board Confidence', description: { en: 'Percentage (%)', de: 'Prozent (%)' } },
    { name: 'Board Prep Time', description: { en: 'Days', de: 'Tage' } },
    { name: 'Rule of 40', description: { en: 'Percentage (%)', de: 'Prozent (%)' } },
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
                'Board Confidence +50-100%',
                'Board Prep Time -80-90%',
                'Rule of 40 +20-30pp',
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
      title: { en: 'Your board is losing confidence', de: 'Dein Board verliert das Vertrauen' },
      items: [
        { en: 'Board confidence is 40-60% (benchmark: 85%+)', de: 'Board Confidence liegt bei 40-60% (Benchmark: 85%+)' },
        { en: 'Board prep takes 5-7 days (benchmark: 24-48h)', de: 'Board Prep dauert 5-7 Tage (Benchmark: 24-48h)' },
        { en: 'You have 90 days to restore board confidence', de: 'Du hast 90 Tage Zeit, Board Confidence wiederherzustellen' },
      ],
    },
    {
      title: { en: 'You have multiple board problems', de: 'Du hast mehrere Board-Probleme' },
      items: [
        { en: 'Is board prep inefficient? (5-7 days, manual processes?)', de: 'Ist Board Prep ineffizient? (5-7 Tage, manuelle Prozesse?)' },
        { en: 'Is board reporting unclear? (no dashboard, spreadsheets?)', de: 'Ist Board Reporting unklar? (kein Dashboard, Spreadsheets?)' },
        { en: 'Is strategic planning missing? (no 3-year vision?)', de: 'Fehlt Strategic Planning? (keine 3-Jahres-Vision?)' },
        { en: 'Is Rule of 40 low? (20% vs. 50%+ benchmark?)', de: 'Ist Rule of 40 niedrig? (20% vs. 50%+ Benchmark?)' },
      ],
    },
    {
      title: { en: "You're Series A-C, €10M-€50M ARR", de: 'Du bist Series A-C, €10M-€50M ARR' },
      items: [
        { en: "You've raised funding (Series A-C)", de: 'Du hast Funding geraised (Series A-C)' },
        { en: 'You have revenue (€10M-€50M ARR)', de: 'Du hast Umsatz (€10M-€50M ARR)' },
        { en: 'You have a team (50-200 people)', de: 'Du hast ein Team (50-200 Leute)' },
      ],
    },
    {
      title: { en: "You're willing to execute", de: 'Du bist bereit zu executen' },
      items: [
        { en: "You'll implement our recommendations", de: 'Du wirst unsere Empfehlungen umsetzen' },
        { en: 'Your leadership team will commit 15-20 hours/week', de: 'Dein Leadership-Team committed 15-20 Stunden/Woche' },
        { en: "You'll give us access to board materials", de: 'Du gibst uns Zugang zu Board-Materialien' },
      ],
    },
    {
      title: { en: 'You have budget (€60K-€78K)', de: 'Du hast Budget (€60K-€78K)' },
      items: [
        { en: 'You can invest €60K-€78K to rebuild board framework', de: 'Du kannst €60K-€78K investieren, um Board Framework aufzubauen' },
        { en: 'ROI is 15-30x (based on typical outcomes)', de: 'ROI ist 15-30x (basierend auf typischen Ergebnissen)' },
      ],
    },
  ];

  const notFit = [
    {
      title: { en: 'You only have one board issue', de: 'Du hast nur ein Board-Issue' },
      description: { en: 'If you just need a better board deck, Boost is overkill', de: 'Wenn du nur ein besseres Board Deck brauchst, ist Boost Overkill' },
      alternative: { en: 'Power Up (30 days, €23.6K) for single board fixes', de: 'Power Up (30 Tage, €23.6K) für einzelne Board Fixes' },
    },
    {
      title: { en: 'You need full AI-native governance', de: 'Du brauchst vollständige AI-native Governance' },
      description: { en: 'If you need full governance transformation (12 months), Boost is too short', de: 'Wenn du vollständige Governance Transformation brauchst (12 Monate), ist Boost zu kurz' },
      alternative: { en: 'Accelerate (12 months, €153K) for full governance transformation', de: 'Accelerate (12 Monate, €153K) für vollständige Governance Transformation' },
    },
    {
      title: { en: "You're not ready to execute", de: 'Du bist nicht bereit zu executen' },
      description: { en: 'If you just want a board strategy deck, we\'re not the right fit', de: 'Wenn du nur ein Board Strategy Deck willst, sind wir nicht der richtige Fit' },
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
              ? 'Boost: Board Excellence funktioniert am besten für Unternehmen in dieser Situation.'
              : 'Boost: Board Excellence works best for companies in this situation.'}
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
  const faqs = [
    {
      question: { en: 'How long does Boost take?', de: 'Wie lange dauert Boost?' },
      answer: { en: '90 days (12 weeks, phased implementation)', de: '90 Tage (12 Wochen, phasenweise Implementierung)' },
    },
    {
      question: { en: "What's the investment?", de: 'Was ist das Investment?' },
      answer: { en: '€60K-€78K (stage-based: Series A €60K, Series B €68K, Series C €78K)', de: '€60K-€78K (stage-basiert: Series A €60K, Series B €68K, Series C €78K)' },
    },
    {
      question: { en: "What if it doesn't work?", de: 'Was wenn es nicht funktioniert?' },
      answer: { en: "We guarantee 2 of 3 outcomes (Board Confidence +50-100%, Prep Time -80-90%, Rule of 40 +20-30pp). If we don't hit 2 of 3, you get 50% refund.", de: 'Wir garantieren 2 von 3 Ergebnissen (Board Confidence +50-100%, Prep Time -80-90%, Rule of 40 +20-30pp). Wenn wir 2 von 3 nicht erreichen, bekommst du 50% Rückerstattung.' },
    },
    {
      question: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' },
      answer: { en: "Yes. We'll connect you with a CEO who's worked with us (same stage, same challenge).", de: 'Ja. Wir verbinden dich mit einem CEO, der mit uns gearbeitet hat (gleiche Stage, gleiche Herausforderung).' },
    },
    {
      question: { en: "What's the ROI?", de: 'Was ist der ROI?' },
      answer: { en: 'Typical ROI is 15-30x (based on valuation improvement and fundraising success over 12 months).', de: 'Typischer ROI ist 15-30x (basierend auf Valuation Improvement und Fundraising-Erfolg über 12 Monate).' },
    },
    {
      question: { en: 'Do you work with our board?', de: 'Arbeitet ihr mit unserem Board?' },
      answer: { en: 'Yes. We present to your board (optional) and train your leadership team on board excellence.', de: 'Ja. Wir präsentieren deinem Board (optional) und trainieren dein Leadership Team auf Board Excellence.' },
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
            {language === 'de' ? 'Bereit, deine Board Excellence aufzubauen?' : 'Ready to Build Your Board Excellence?'}
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
                ? 'In 30 Minuten werden wir: Dein Board Framework diagnostizieren (was ist kaputt?), dir genau zeigen, wie wir es aufbauen würden (mit Beispielen), dir eine klare Empfehlung geben (Boost, Power Up, Accelerate, oder DIY).'
                : "In 30 minutes, we'll: Diagnose your board framework (what's broken?), show you exactly how we'd rebuild it (with examples), give you a clear recommendation (Boost, Power Up, Accelerate, or DIY)."}
            </p>
            <p className="text-sm text-accent font-medium mb-6">
              {language === 'de' ? 'Kein Pitch. Kein Druck. Nur Klarheit.' : 'No pitch. No pressure. Just clarity.'}
            </p>
            <Button
              size="xl"
              className="w-full sm:w-auto bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
              onClick={() => setIsBookingModalOpen(true)}
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
                ? 'Nach dem Inflection Call weißt du: Was deine Board-Bottlenecks sind (Confidence, Effizienz, Metrics?), wie wir deine Board Excellence aufbauen würden (und in welcher Reihenfolge), welche Outcomes zu erwarten sind (Board Confidence, Prep Time, Rule of 40), ob Boost der richtige Fit ist (oder ob du Power Up/Accelerate brauchst).'
                : "After the Inflection Call, you'll know: What your board bottlenecks are (confidence, efficiency, metrics?), how we'd rebuild your board excellence (and in what order), what outcomes to expect (Board Confidence, Prep Time, Rule of 40), whether Boost is the right fit (or if you need Power Up/Accelerate)."}
            </p>
            <p className="text-sm text-accent font-medium">
              {language === 'de' ? 'Du entscheidest. Kein Druck.' : 'You decide. No pressure.'}
            </p>
          </div>

          {/* Alternative */}
          <div className="bg-muted/30 border-2 border-border p-6 rounded-lg">
            <h3 className="text-lg font-bold text-foreground mb-4">
              {language === 'de' ? 'Alternative: Mit einem Board Assessment starten' : 'Alternative: Start with a Board Assessment'}
            </h3>
            <p className="text-muted-foreground mb-4">
              {language === 'de'
                ? 'Noch nicht bereit für einen vollständigen Boost? Starte kleiner:'
                : 'Not ready for a full Boost? Start smaller:'}
            </p>
            <div className="bg-card border border-border p-4 rounded-lg mb-4">
              <h4 className="font-bold text-foreground mb-2">
                {language === 'de' ? 'Board Assessment (3-5 Tage, €3.9K-€5.9K)' : 'Board Assessment (3-5 days, €3.9K-€5.9K)'}
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• {language === 'de' ? 'Deep-Dive in dein Board Framework' : 'Deep-dive into your board framework'}</li>
                <li>• {language === 'de' ? 'Identifiziere, welche Bottlenecks zuerst zu fixen sind' : 'Identify which bottlenecks to fix first'}</li>
                <li>• {language === 'de' ? 'Geh mit einer 90-Tage Board Roadmap raus' : 'Walk away with a 90-day board roadmap'}</li>
              </ul>
            </div>
            <Button variant="outline" className="border-2">
              {language === 'de' ? 'Board Assessment buchen' : 'Book Board Assessment'}
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
            onClick={() => setIsBookingModalOpen(true)}
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
        
        <FilloutBookingModal
          formSlug="inflection-call"
          source="solutions"
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          title={language === 'de' ? 'Inflection Call buchen' : 'Book Inflection Call'}
        />
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const BoostBoardExcellence: React.FC = () => {
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

export default BoostBoardExcellence;
