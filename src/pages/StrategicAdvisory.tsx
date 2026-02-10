import React, { useState } from 'react';
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
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallaxLayers } from '@/hooks/useParallax';
import TwinklingStars from '@/components/TwinklingStars';
import {
  ArrowRight,
  ChevronDown,
  Check,
  X,
  Compass,
  Zap,
  Target,
  Users,
  Clock,
  MessageCircle,
  Shield,
  Brain,
  FileText,
  BarChart3,
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
    { value: '+50-100%', label: { en: 'Decision Velocity', de: 'Decision Velocity' }, sublabel: { en: '7-14d → 3-7d', de: '7-14d → 3-7d' } },
    { value: '+80%', label: { en: 'Strategic Clarity', de: 'Strategische Klarheit' }, sublabel: { en: 'Low → High', de: 'Niedrig → Hoch' } },
    { value: '+30-50pp', label: { en: 'Board Confidence', de: 'Board Confidence' }, sublabel: { en: '40-60% → 70-95%', de: '40-60% → 70-95%' } },
  ];

  const trustBadges = [
    { icon: Shield, label: { en: 'Ongoing Support (12+ Months, 1 Day/Month)', de: 'Laufende Unterstützung (12+ Monate, 1 Tag/Monat)' } },
    { icon: Target, label: { en: 'Measurable Impact (Decision Velocity, Strategic Clarity)', de: 'Messbarer Impact (Decision Velocity, Strategic Clarity)' } },
    { icon: MessageCircle, label: { en: 'Reference Calls Available', de: 'Referenzgespräche möglich' } },
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
              <span className="text-foreground font-medium">Strategic Advisory</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Badge */}
        <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Compass className="w-4 h-4 mr-2" />
          Advisory · 12+ {language === 'de' ? 'Monate' : 'Months'} · €3.9K–€11K/Mo
        </Badge>

        {/* Headline */}
        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">{language === 'de' ? 'Dein strategischer' : 'Your Strategic'}</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            Sparring Partner—On Demand
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Erhalte laufende strategische Führung für 12+ Monate. Typische Ergebnisse: Decision Velocity +50-100%, Strategic Clarity +80%, Board Confidence +30-50pp—mit messbarem Impact.'
            : 'Get ongoing strategic guidance for 12+ months. Typical outcomes: Decision Velocity +50-100%, Strategic Clarity +80%, Board Confidence +30-50pp—with measurable impact.'}
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
    { en: 'Slow decision-making: 7-14 days per decision (benchmark: 24-48h with guidance)', de: 'Langsame Entscheidungen: 7-14 Tage pro Entscheidung (Benchmark: 24-48h mit Führung)' },
    { en: 'Low strategic clarity: No clear roadmap, priorities unclear', de: 'Geringe strategische Klarheit: Keine klare Roadmap, Prioritäten unklar' },
    { en: 'Low board confidence: 40-60% (benchmark: 85-95% with guidance)', de: 'Niedriges Board-Vertrauen: 40-60% (Benchmark: 85-95% mit Führung)' },
    { en: 'Isolated decision-making: Making critical decisions alone', de: 'Isolierte Entscheidungen: Kritische Entscheidungen alleine treffen' },
    { en: 'Strategic mistakes: Wrong priorities, wrong investments, wrong timing', de: 'Strategische Fehler: Falsche Prioritäten, falsche Investments, falsches Timing' },
  ];

  const beforeAfter = {
    before: [
      { metric: 'Decision Velocity', value: '7-14 days' },
      { metric: 'Strategic Clarity', value: language === 'de' ? 'Niedrig' : 'Low' },
      { metric: 'Board Confidence', value: '40-60%' },
      { metric: 'Strategic Mistakes', value: language === 'de' ? 'Häufig' : 'Frequent' },
    ],
    after: [
      { metric: 'Decision Velocity', value: '3-7 days' },
      { metric: 'Strategic Clarity', value: language === 'de' ? 'Hoch' : 'High' },
      { metric: 'Board Confidence', value: '70-95%' },
      { metric: 'Strategic Mistakes', value: '-70%' },
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
            {language === 'de' ? 'Du triffst kritische Entscheidungen—ohne strategische Führung' : "You're Making Critical Decisions—Without Strategic Guidance"}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Deine Decision Velocity liegt bei 7-14 Tagen (Benchmark: 24-48h mit strategischer Führung). Deine strategische Klarheit ist gering (keine klare Roadmap). Deine Board Confidence liegt bei 40-60% (Benchmark: 85-95% mit Führung). Und das Schlimmste—du triffst kritische Entscheidungen alleine, ohne Sparringspartner.'
              : "Your decision velocity is 7-14 days (benchmark: 24-48h with strategic guidance). Your strategic clarity is low (no clear roadmap). Your board confidence is 40-60% (benchmark: 85-95% with guidance). And worst of all—you're making critical decisions alone, without a sparring partner."}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Du hast die offensichtlichen Fixes ausprobiert: Berater engagieren, Bücher lesen, Konferenzen besuchen. Aber nichts funktioniert. Denn das Problem ist nicht eine Entscheidung—es ist dein gesamter strategischer Ansatz. Du brauchst laufende strategische Führung.'
              : "You've tried the obvious fixes: hiring consultants, reading books, attending conferences. But nothing is working. Because the problem isn't one decision—it's your entire strategic approach. You need ongoing strategic guidance."}
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
              {language === 'de' ? 'Vorher (ohne Sparring Partner)' : 'Before (Without Sparring Partner)'}
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
              {language === 'de' ? 'Nachher (mit Sparring Partner)' : 'After (With Sparring Partner)'}
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

  const tiers = [
    {
      name: 'Catalyst',
      days: { en: '1-2 days/month', de: '1-2 Tage/Monat' },
      price: '€3.900/Mo',
      description: { en: 'Light-touch strategic guidance', de: 'Light-touch strategische Führung' },
      features: [
        { en: 'Monthly strategy session (8h)', de: 'Monatliche Strategy Session (8h)' },
        { en: 'Ad-hoc Slack/Email support', de: 'Ad-hoc Slack/Email Support' },
        { en: 'Quarterly board prep', de: 'Quartalsweise Board Prep' },
      ],
      highlight: false,
    },
    {
      name: 'Accelerator',
      days: { en: '3-4 days/month', de: '3-4 Tage/Monat' },
      price: '€8.400/Mo',
      description: { en: 'Regular strategic sessions', de: 'Regelmäßige Strategy Sessions' },
      features: [
        { en: 'Bi-weekly strategy sessions (16h)', de: 'Zweiwöchentliche Strategy Sessions (16h)' },
        { en: 'Priority Slack/Email support', de: 'Prioritäts-Slack/Email Support' },
        { en: 'Monthly board prep', de: 'Monatliche Board Prep' },
        { en: 'AI-powered strategic intelligence', de: 'AI-powered Strategic Intelligence' },
      ],
      highlight: true,
    },
    {
      name: 'Transformator',
      days: { en: '4-6 days/week', de: '4-6 Tage/Woche' },
      price: '€11.000/Mo',
      description: { en: 'Intensive strategic partnership', de: 'Intensive strategische Partnerschaft' },
      features: [
        { en: 'Weekly strategy sessions (24-32h)', de: 'Wöchentliche Strategy Sessions (24-32h)' },
        { en: '24/7 Slack/Email access', de: '24/7 Slack/Email Zugang' },
        { en: 'Continuous board prep', de: 'Kontinuierliche Board Prep' },
        { en: 'Full strategic intelligence suite', de: 'Vollständige Strategic Intelligence Suite' },
        { en: 'Team coaching & training', de: 'Team Coaching & Training' },
      ],
      highlight: false,
    },
  ];

  const components = [
    {
      icon: Calendar,
      title: { en: 'Monthly Strategy Sessions', de: 'Monatliche Strategy Sessions' },
      description: { en: 'Deep-dive into your biggest strategic challenges. AI-assisted decision-making. Strategic roadmap updates.', de: 'Deep-dive in deine größten strategischen Herausforderungen. AI-unterstützte Entscheidungsfindung. Strategic Roadmap Updates.' },
    },
    {
      icon: FileText,
      title: { en: 'Quarterly Board Prep', de: 'Quartalsweise Board Prep' },
      description: { en: 'Board deck review. Strategic narrative development. Board Q&A prep. Board confidence building.', de: 'Board Deck Review. Strategische Narrative Entwicklung. Board Q&A Prep. Board Confidence Building.' },
    },
    {
      icon: MessageCircle,
      title: { en: 'Ad-Hoc Support (Slack/Email)', de: 'Ad-Hoc Support (Slack/Email)' },
      description: { en: 'Strategic decision support when you need it. Crisis management. Opportunity evaluation.', de: 'Strategische Entscheidungsunterstützung, wenn du sie brauchst. Krisenmanagement. Opportunity Evaluation.' },
    },
    {
      icon: Brain,
      title: { en: 'AI-Powered Strategic Intelligence', de: 'AI-Powered Strategic Intelligence' },
      description: { en: 'Market intelligence. Strategic options analysis. Decision frameworks. Strategic playbooks.', de: 'Market Intelligence. Strategic Options Analysis. Decision Frameworks. Strategic Playbooks.' },
    },
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
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Die Lösung' : 'The Solution'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Wie Strategic Advisory funktioniert' : 'How Strategic Advisory Works'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Wir geben nicht nur Ratschläge. Wir werden dein laufender strategischer Sparringspartner—für 12+ Monate—damit du bessere Entscheidungen schneller triffst.'
              : "We don't just give advice. We become your ongoing strategic sparring partner—for 12+ months—so you make better decisions, faster."}
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`p-6 border-2 rounded-lg transition-all duration-300 ${
                tier.highlight
                  ? 'border-accent bg-accent/5 scale-105'
                  : 'border-border bg-card/50 hover:border-accent/50'
              }`}
            >
              {tier.highlight && (
                <Badge className="mb-4 bg-accent text-accent-foreground">
                  {language === 'de' ? 'Beliebteste Wahl' : 'Most Popular'}
                </Badge>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {language === 'de' ? tier.days.de : tier.days.en}
              </p>
              <div className="text-3xl font-bold text-gradient mb-4">{tier.price}</div>
              <p className="text-sm text-muted-foreground mb-6">
                {language === 'de' ? tier.description.de : tier.description.en}
              </p>
              <ul className="space-y-3">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{language === 'de' ? feature.de : feature.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 4 Components */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">
            {language === 'de' ? 'Was du bekommst:' : 'What You Get:'}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {components.map((component, index) => (
              <div
                key={index}
                className="p-6 bg-card/50 border-2 border-border rounded-lg hover:border-accent/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <component.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">
                      {language === 'de' ? component.title.de : component.title.en}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {language === 'de' ? component.description.de : component.description.en}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimum Commitment */}
        <div className="text-center p-6 bg-primary/5 border-2 border-primary/20 rounded-lg">
          <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
          <h4 className="font-bold text-foreground mb-2">
            {language === 'de' ? 'Mindestlaufzeit: 12 Monate' : 'Minimum Commitment: 12 Months'}
          </h4>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Strategische Transformation braucht Zeit. Wir committen uns für mindestens 12 Monate, um nachhaltigen Impact zu erzielen. Monatliche Abrechnung, aber 12-Monats-Mindestlaufzeit.'
              : 'Strategic transformation takes time. We commit to at least 12 months to achieve sustainable impact. Monthly billing, but 12-month minimum commitment.'}
          </p>
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
      metric: 'Decision Velocity',
      improvement: '+50-100%',
      before: '7-14 days',
      after: '3-7 days',
      description: { en: 'AI-assisted decision-making and strategic frameworks accelerate your decision velocity by 50-100%.', de: 'AI-unterstützte Entscheidungsfindung und strategische Frameworks beschleunigen deine Decision Velocity um 50-100%.' },
    },
    {
      metric: 'Strategic Clarity',
      improvement: '+80%',
      before: language === 'de' ? 'Niedrig' : 'Low',
      after: language === 'de' ? 'Hoch' : 'High',
      description: { en: 'Monthly strategy sessions and strategic roadmap development increase strategic clarity by 80%.', de: 'Monatliche Strategy Sessions und Strategic Roadmap Development erhöhen die strategische Klarheit um 80%.' },
    },
    {
      metric: 'Board Confidence',
      improvement: '+30-50pp',
      before: '40-60%',
      after: '70-95%',
      description: { en: 'Quarterly board prep and strategic narrative development increase board confidence by 30-50 percentage points.', de: 'Quartalsweise Board Prep und strategische Narrative Development erhöhen die Board Confidence um 30-50 Prozentpunkte.' },
    },
  ];

  return (
    <section
      id="outcome-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Das Ergebnis' : 'The Outcome'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Typische Ergebnisse (12+ Monate)' : 'Typical Outcomes (12+ Months)'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Das sind echte Ergebnisse von CEOs wie dir (Series B-C, €10M-€50M ARR).'
              : 'These are real results from CEOs like you (Series B-C, €10M-€50M ARR).'}
          </p>
        </div>

        {/* Outcome Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="p-6 bg-card/50 border-2 border-border rounded-lg hover:border-accent/50 transition-all"
            >
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gradient mb-2">{outcome.improvement}</div>
                <div className="text-lg font-semibold text-foreground">{outcome.metric}</div>
              </div>
              <div className="flex justify-between items-center mb-4 text-sm">
                <div className="text-center">
                  <div className="text-destructive font-bold">{outcome.before}</div>
                  <div className="text-muted-foreground text-xs">{language === 'de' ? 'Vorher' : 'Before'}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                <div className="text-center">
                  <div className="text-accent font-bold">{outcome.after}</div>
                  <div className="text-muted-foreground text-xs">{language === 'de' ? 'Nachher' : 'After'}</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {language === 'de' ? outcome.description.de : outcome.description.en}
              </p>
            </div>
          ))}
        </div>

        {/* Real Example */}
        <div className="bg-accent/5 border-2 border-accent/30 p-8 rounded-lg">
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">
            {language === 'de' ? 'Echtes Beispiel' : 'Real Example'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                <strong className="text-foreground">Company:</strong> Series B SaaS, €18M ARR, 90 {language === 'de' ? 'Mitarbeiter' : 'employees'}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <strong className="text-foreground">Challenge:</strong> Decision Velocity 10 {language === 'de' ? 'Tage' : 'days'}, Strategic Clarity {language === 'de' ? 'niedrig' : 'low'}, Board Confidence 45%
              </p>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Transformation:</strong> Strategic Advisory (12 {language === 'de' ? 'Monate' : 'months'}, Accelerator Tier)
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-2xl font-bold text-accent">+80%</div>
                <div className="text-xs text-muted-foreground">Decision Velocity</div>
                <div className="text-xs text-muted-foreground">(10d → 2d)</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-2xl font-bold text-accent">+90%</div>
                <div className="text-xs text-muted-foreground">Strategic Clarity</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-2xl font-bold text-accent">+50pp</div>
                <div className="text-xs text-muted-foreground">Board Confidence</div>
                <div className="text-xs text-muted-foreground">(45% → 95%)</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-2xl font-bold text-accent">-70%</div>
                <div className="text-xs text-muted-foreground">Strategic Mistakes</div>
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

  const phases = [
    {
      phase: language === 'de' ? 'Monat 1' : 'Month 1',
      title: { en: 'Strategic Foundation', de: 'Strategic Foundation' },
      items: [
        { en: 'Strategic assessment (where are you today?)', de: 'Strategic Assessment (wo stehst du heute?)' },
        { en: 'Strategic roadmap (where do you want to go?)', de: 'Strategic Roadmap (wo willst du hin?)' },
        { en: 'Priority setting (what to focus on first?)', de: 'Priority Setting (was zuerst?)' },
        { en: 'Success metrics (how to measure progress?)', de: 'Success Metrics (wie Fortschritt messen?)' },
      ],
      commitment: { en: '8 hours (1 full day)', de: '8 Stunden (1 voller Tag)' },
    },
    {
      phase: language === 'de' ? 'Monat 2-6' : 'Month 2-6',
      title: { en: 'Strategic Execution', de: 'Strategic Execution' },
      items: [
        { en: 'Monthly strategy sessions (8h/month)', de: 'Monatliche Strategy Sessions (8h/Monat)' },
        { en: 'Quarterly board prep (before board meetings)', de: 'Quartalsweise Board Prep (vor Board Meetings)' },
        { en: 'Ad-hoc support (Slack/Email access)', de: 'Ad-hoc Support (Slack/Email Zugang)' },
        { en: 'Strategic intelligence (market changes, competitor moves)', de: 'Strategic Intelligence (Marktveränderungen, Wettbewerberbewegungen)' },
      ],
      commitment: { en: '8h/month + 2h/quarter', de: '8h/Monat + 2h/Quartal' },
    },
    {
      phase: language === 'de' ? 'Monat 7-12+' : 'Month 7-12+',
      title: { en: 'Strategic Optimization', de: 'Strategic Optimization' },
      items: [
        { en: 'Ongoing strategic guidance (monthly sessions)', de: 'Laufende strategische Führung (monatliche Sessions)' },
        { en: 'Board confidence building (increase board trust)', de: 'Board Confidence Building (Board-Vertrauen erhöhen)' },
        { en: 'Strategic decision velocity (faster, better decisions)', de: 'Strategic Decision Velocity (schnellere, bessere Entscheidungen)' },
        { en: 'Strategic handoff (train your team)', de: 'Strategic Handoff (dein Team trainieren)' },
      ],
      commitment: { en: '8h/month', de: '8h/Monat' },
    },
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
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Der Prozess' : 'The Process'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Der Strategic Advisory Prozess' : 'The Strategic Advisory Process'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Transparenter Zeitplan. Klare Deliverables. Messbare Ergebnisse.'
              : 'Transparent timeline. Clear deliverables. Measurable outcomes.'}
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 mb-16">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="p-6 bg-card/50 border-2 border-border rounded-lg hover:border-accent/50 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    {phase.phase}
                  </Badge>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {language === 'de' ? phase.title.de : phase.title.en}
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3 mb-4">
                    {phase.items.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{language === 'de' ? item.de : item.en}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{language === 'de' ? 'Zeitaufwand' : 'Time commitment'}: {language === 'de' ? phase.commitment.de : phase.commitment.en}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROI */}
        <div className="text-center p-8 bg-accent/5 border-2 border-accent/30 rounded-lg">
          <BarChart3 className="w-10 h-10 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {language === 'de' ? 'Typischer ROI: 5-10x' : 'Typical ROI: 5-10x'}
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Basierend auf verbesserter Entscheidungsqualität und strategischer Klarheit über 12+ Monate.'
              : 'Based on decision quality improvement and strategic clarity over 12+ months.'}
          </p>
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
    { en: "You're making critical decisions without strategic guidance", de: 'Du triffst kritische Entscheidungen ohne strategische Führung' },
    { en: 'You need ongoing strategic support (12+ months, not one-time)', de: 'Du brauchst laufende strategische Unterstützung (12+ Monate, nicht einmalig)' },
    { en: "You're Series B-C, €10M-€50M ARR, 50-200 people", de: 'Du bist Series B-C, €10M-€50M ARR, 50-200 Mitarbeiter' },
    { en: "You're willing to commit 8h/month for strategic sessions", de: 'Du bist bereit, 8h/Monat für Strategy Sessions zu investieren' },
    { en: 'You have budget (€3.9K-€11K/month)', de: 'Du hast Budget (€3.9K-€11K/Monat)' },
  ];

  const notFit = [
    { en: 'You only need one-time advice (→ Expert Session €490-€890)', de: 'Du brauchst nur einmalige Beratung (→ Expert Session €490-€890)' },
    { en: 'You need hands-on implementation (→ Boost/Accelerate)', de: 'Du brauchst Hands-on Implementierung (→ Boost/Accelerate)' },
    { en: "You're not ready for 12-month commitment", de: 'Du bist nicht bereit für 12-Monats-Commitment' },
  ];

  return (
    <section
      id="qualification-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Für wen ist das?' : "Who It's For"}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Ist das richtig für dich?' : 'Is This Right for You?'}
          </h2>
        </div>

        {/* Good Fit / Not Fit */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Good Fit */}
          <div className="p-6 bg-accent/5 border-2 border-accent/30 rounded-lg">
            <h3 className="text-lg font-bold text-accent mb-6 flex items-center gap-2">
              <Check className="w-5 h-5" />
              {language === 'de' ? 'Das passt gut, wenn:' : 'This is a good fit if:'}
            </h3>
            <ul className="space-y-4">
              {goodFit.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{language === 'de' ? item.de : item.en}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Fit */}
          <div className="p-6 bg-destructive/5 border-2 border-destructive/30 rounded-lg">
            <h3 className="text-lg font-bold text-destructive mb-6 flex items-center gap-2">
              <X className="w-5 h-5" />
              {language === 'de' ? 'Das passt nicht, wenn:' : 'This is not a fit if:'}
            </h3>
            <ul className="space-y-4">
              {notFit.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{language === 'de' ? item.de : item.en}</span>
                </li>
              ))}
            </ul>
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
  const [isInflectionModalOpen, setIsInflectionModalOpen] = useState(false);
  const [isExpertSessionModalOpen, setIsExpertSessionModalOpen] = useState(false);

  const faqItems = [
    {
      question: { en: 'How long does Strategic Advisory last?', de: 'Wie lange dauert Strategic Advisory?' },
      answer: { en: '12+ months (minimum commitment). Monthly billing, but 12-month minimum.', de: '12+ Monate (Mindestlaufzeit). Monatliche Abrechnung, aber 12-Monate-Minimum.' },
    },
    {
      question: { en: "What's the investment?", de: 'Was ist das Investment?' },
      answer: { en: '€3.9K-€11K/month depending on tier (Catalyst, Accelerator, Transformator).', de: '€3.9K-€11K/Monat je nach Tier (Catalyst, Accelerator, Transformator).' },
    },
    {
      question: { en: 'What if it doesn\'t work?', de: 'Was, wenn es nicht funktioniert?' },
      answer: { en: 'You can cancel after 12 months. We commit to measurable outcomes—if you\'re not seeing progress after 3 months, we\'ll adjust our approach.', de: 'Du kannst nach 12 Monaten kündigen. Wir committen uns zu messbaren Ergebnissen—wenn du nach 3 Monaten keinen Fortschritt siehst, passen wir unseren Ansatz an.' },
    },
    {
      question: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' },
      answer: { en: "Yes. We'll connect you with a CEO who's worked with us (same stage, same challenge).", de: 'Ja. Wir verbinden dich mit einem CEO, der mit uns gearbeitet hat (gleiche Stage, gleiche Challenge).' },
    },
    {
      question: { en: "What's the ROI?", de: 'Was ist der ROI?' },
      answer: { en: 'Typical ROI is 5-10x based on decision quality improvement and strategic clarity over 12+ months.', de: 'Typischer ROI ist 5-10x basierend auf verbesserter Entscheidungsqualität und strategischer Klarheit über 12+ Monate.' },
    },
    {
      question: { en: 'How is this different from hiring a consultant?', de: 'Wie unterscheidet sich das von einem Berater?' },
      answer: { en: "Strategic Advisory is ongoing (12+ months), not one-time. We become your strategic sparring partner, not just a consultant.", de: 'Strategic Advisory ist laufend (12+ Monate), nicht einmalig. Wir werden dein strategischer Sparringspartner, nicht nur ein Berater.' },
    },
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
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Nächste Schritte' : 'Next Steps'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Bereit für deinen strategischen Sparringspartner?' : 'Ready to Get Your Strategic Sparring Partner?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {language === 'de'
              ? 'In 30 Minuten bewerten wir deine strategischen Bedürfnisse und zeigen dir genau, wie Strategic Advisory für dich funktionieren würde.'
              : "In 30 minutes, we'll assess your strategic needs and show you exactly how Strategic Advisory would work for you."}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => setIsInflectionModalOpen(true)}
          >
            {language === 'de' ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book Free Inflection Call (30 min)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsExpertSessionModalOpen(true)}
            className="border-2"
          >
            {language === 'de' ? 'Expert Session buchen (€490-€890)' : 'Book Expert Session (€490-€890)'}
          </Button>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">
            {language === 'de' ? 'Häufige Fragen' : 'Frequently Asked Questions'}
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-2 border-border bg-card/50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {language === 'de' ? item.question.de : item.question.en}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {language === 'de' ? item.answer.de : item.answer.en}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          {language === 'de' ? 'Noch Fragen? Email uns:' : 'Still have questions? Email us:'}{' '}
          <a href="mailto:team@scalingx.io" className="text-accent hover:underline">
            team@scalingx.io
          </a>
        </div>
        
        <FilloutBookingModal
          formSlug="inflection-call"
          source="strategic-advisory"
          isOpen={isInflectionModalOpen}
          onClose={() => setIsInflectionModalOpen(false)}
          title={language === 'de' ? 'Inflection Call buchen' : 'Book Inflection Call'}
        />
        
        <FilloutBookingModal
          formSlug="expert-session"
          source="strategic-advisory"
          isOpen={isExpertSessionModalOpen}
          onClose={() => setIsExpertSessionModalOpen(false)}
          title={language === 'de' ? 'Expert Session buchen' : 'Book Expert Session'}
        />
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const StrategicAdvisory: React.FC = () => {
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

export default StrategicAdvisory;
