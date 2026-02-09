import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
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
  TrendingDown,
  TrendingUp,
  Clock,
  Shield,
  FileText,
  MessageCircle,
  BarChart3,
  Users,
  CheckCircle,
  Search,
  Wrench,
  Layers,
  Briefcase,
  Building2,
  PieChart,
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
    { value: '3-5', label: { en: 'Companies Fixed', de: 'Unternehmen gefixt' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
    { value: '+5-10pp', label: { en: 'Portfolio IRR', de: 'Portfolio IRR' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
    { value: '+20-30%', label: { en: 'Portfolio Value', de: 'Portfolio Value' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
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
              <span className="text-foreground font-medium">Power Up Portfolio Performance</span>
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
          <span className="block text-foreground">Portfolio Underperforming →</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'Value Creation Unlocked' : 'Value Creation Unlocked'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Erschließe Portfolio-Value in 4-6 Wochen. Typische Ergebnisse: 3-5 Unternehmen transformiert, Portfolio IRR +5-10pp, Portfolio Value +20-30% – mit ergebnisbasierter Risikoteilung.'
            : 'Unlock portfolio value in 4-6 weeks. Typical outcomes: 3-5 Companies Transformed, Portfolio IRR +5-10pp, Portfolio Value +20-30%—with outcome-based risk sharing.'}
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
    { en: 'Low portfolio IRR: 15% (benchmark: 25%+), below fund target', de: 'Niedriger Portfolio IRR: 15% (Benchmark: 25%+), unter Fondsziel' },
    { en: '5-10 companies stuck: CAC crisis, scaling chaos, board pressure', de: '5-10 Unternehmen stecken fest: CAC-Krise, Scaling-Chaos, Board-Druck' },
    { en: 'Operating partner overwhelmed: 1 OP managing 20+ companies', de: 'Operating Partner überlastet: 1 OP managt 20+ Unternehmen' },
    { en: 'No systematic approach: Ad-hoc support, no playbooks', de: 'Kein systematischer Ansatz: Ad-hoc Support, keine Playbooks' },
    { en: 'LP pressure: "Why is portfolio performance so low?"', de: 'LP-Druck: "Warum ist die Portfolio-Performance so niedrig?"' },
  ];

  const realCosts = [
    { en: 'Destroys fund returns (15% IRR vs. 25% target = €50M-€200M value lost)', de: 'Zerstört Fund Returns (15% IRR vs. 25% Ziel = €50M-€200M Wertverlust)' },
    { en: 'Limits next fundraise (LPs see underperformance as red flag)', de: 'Begrenzt nächstes Fundraise (LPs sehen Underperformance als Red Flag)' },
    { en: 'Weakens GP reputation (portfolio performance = track record)', de: 'Schwächt GP-Reputation (Portfolio-Performance = Track Record)' },
    { en: 'Burns out operating partners (overwhelmed with 20+ companies)', de: 'Brennt Operating Partner aus (überlastet mit 20+ Unternehmen)' },
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
            {language === 'de' ? 'Dein Portfolio performt unter Potenzial' : 'Your Portfolio Is Underperforming'}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Dein Portfolio IRR liegt bei 15% (Benchmark: 25%+). 5-10 deiner Portfolio-Unternehmen stecken fest (CAC-Krise, Scaling-Chaos, Board-Druck). Dein Operating Partner ist überlastet (managt 20+ Unternehmen). Und das Schlimmste – deine LPs fragen: "Warum ist die Portfolio-Performance so niedrig?"'
              : 'Your portfolio IRR is at 15% (benchmark: 25%+). 5-10 of your portfolio companies are stuck (CAC crisis, scaling chaos, board pressure). Your operating partner is overwhelmed (managing 20+ companies). And worst of all—your LPs are asking: "Why is portfolio performance so low?"'}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Der Druck ist real. Jedes Quartal ohne Portfolio-Verbesserung: Portfolio-Wert bleibt flach (während Wettbewerber 2-3x wachsen), LP-Vertrauen sinkt (sie sehen Underperformance), Fund-Reputation leidet (Mundpropaganda in der VC/PE-Community), nächstes Fundraise wird schwieriger (LPs wollen Proof of Value Creation).'
              : 'The pressure is real. Every quarter without portfolio improvement: Portfolio value stays flat (while competitors grow 2-3x), LP confidence drops (they see underperformance), fund reputation suffers (word spreads in VC/PE community), next fundraise becomes harder (LPs want proof of value creation).'}
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
              ? 'Es geht nicht nur um ein Unternehmen. Jedes Quartal mit Portfolio-Underperformance:'
              : "This isn't just about one company. Every quarter with portfolio underperformance:"}
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
              ? 'Du musst Portfolio-Value erschließen. Schnell.'
              : 'You need to unlock portfolio value. Fast.'}
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
      title: { en: 'Identify Underperformers', de: 'Underperformer identifizieren' },
      timeline: { en: 'Week 1-2', de: 'Woche 1-2' },
      icon: Search,
      items: [
        { en: 'Portfolio Assessment: Which companies are underperforming? (CAC crisis, scaling chaos, board pressure?)', de: 'Portfolio Assessment: Welche Unternehmen performen unter? (CAC-Krise, Scaling-Chaos, Board-Druck?)' },
        { en: "Bottleneck Diagnosis: What's the #1 bottleneck per company? (GTM, operations, governance?)", de: 'Bottleneck Diagnose: Was ist der #1 Engpass pro Unternehmen? (GTM, Operations, Governance?)' },
        { en: 'Impact Prioritization: Which companies have highest ROI? (quick wins vs. long-term plays)', de: 'Impact Priorisierung: Welche Unternehmen haben höchsten ROI? (Quick Wins vs. Long-term Plays)' },
        { en: 'Transformation Plan: How to fix 3-5 companies in 4-6 weeks? (parallel execution)', de: 'Transformationsplan: Wie 3-5 Unternehmen in 4-6 Wochen fixen? (Parallele Execution)' },
      ],
      deliverable: { en: 'Portfolio Transformation Report (15-20 pages) with 3-5 company plans', de: 'Portfolio Transformation Report (15-20 Seiten) mit 3-5 Unternehmensplänen' },
      color: 'from-violet-500 to-purple-600',
    },
    {
      number: '2',
      title: { en: 'Transform 3-5 Companies', de: '3-5 Unternehmen transformieren' },
      timeline: { en: 'Week 2-4', de: 'Woche 2-4' },
      icon: Layers,
      items: [
        { en: 'Company A: CAC Crisis Fix (CAC -30-50% in 30 days, implement repeatable sales motion)', de: 'Unternehmen A: CAC-Krise Fix (CAC -30-50% in 30 Tagen, repeatable Sales Motion implementieren)' },
        { en: 'Company B: Scaling Chaos Fix (Decision Velocity +50-100%, implement decision framework)', de: 'Unternehmen B: Scaling-Chaos Fix (Decision Velocity +50-100%, Decision Framework implementieren)' },
        { en: 'Company C: Board Pressure Fix (Board Confidence +20-30pp, implement strategic narrative)', de: 'Unternehmen C: Board-Druck Fix (Board Confidence +20-30pp, Strategic Narrative implementieren)' },
      ],
      deliverable: { en: '3-5 companies transformed (live improvements, not just strategy)', de: '3-5 Unternehmen transformiert (Live Improvements, nicht nur Strategie)' },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '3',
      title: { en: 'Measure & Scale', de: 'Messen & Skalieren' },
      timeline: { en: 'Week 4-6', de: 'Woche 4-6' },
      icon: CheckCircle,
      items: [
        { en: 'Portfolio Metrics: Portfolio IRR, Portfolio Value, Company Performance', de: 'Portfolio Metriken: Portfolio IRR, Portfolio Value, Unternehmens-Performance' },
        { en: 'Operating Partner Training: OP trained on transformation playbooks', de: 'Operating Partner Training: OP auf Transformation Playbooks geschult' },
        { en: 'Scale Playbook: How to transform next 5-10 companies (DIY or with us)', de: 'Scale Playbook: Wie nächste 5-10 Unternehmen transformieren (DIY oder mit uns)' },
      ],
      deliverable: { en: 'Validated portfolio improvement + scale playbook', de: 'Validierte Portfolio-Verbesserung + Scale Playbook' },
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  const differentiators = [
    { en: 'Hands-on execution (not just strategy slides)', de: 'Hands-on Execution (nicht nur Strategie-Slides)' },
    { en: 'Parallel transformation (3-5 companies at once, not sequential)', de: 'Parallele Transformation (3-5 Unternehmen gleichzeitig, nicht sequentiell)' },
    { en: 'Outcome-based risk sharing (we measure portfolio IRR)', de: 'Ergebnisbasierte Risikoteilung (wir messen Portfolio IRR)' },
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
              ? 'So erschließen wir Portfolio-Value'
              : 'How We Unlock Portfolio Value'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Wir stellen nicht einfach mehr Operating Partner ein. Wir transformieren 3-5 unterperformende Unternehmen – damit dein Portfolio IRR steigt und LPs Value Creation sehen.'
              : "We don't just add more operating partners. We transform 3-5 underperforming companies—so your portfolio IRR improves and LPs see value creation."}
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
      id: 'companies-transformed',
      value: '3-5',
      title: { en: 'Companies Transformed', de: 'Unternehmen transformiert' },
      example: { en: 'Example: 3 of 5 stuck companies', de: 'Beispiel: 3 von 5 festgefahrenen Unternehmen' },
      impact: { en: '60% of portfolio problems solved', de: '60% der Portfolio-Probleme gelöst' },
      why: { en: 'We focus on the 3-5 companies with highest ROI (quick wins, clear bottlenecks)—so you see immediate portfolio improvement.', de: 'Wir fokussieren auf die 3-5 Unternehmen mit höchstem ROI (Quick Wins, klare Engpässe) – damit du sofort Portfolio-Verbesserung siehst.' },
    },
    {
      id: 'portfolio-irr',
      value: '+5-10pp',
      title: { en: 'Portfolio IRR Increase', de: 'Portfolio IRR Steigerung' },
      example: { en: 'Example: 15% → 22%', de: 'Beispiel: 15% → 22%' },
      impact: { en: '+7pp IRR = €50M-€200M additional fund value', de: '+7pp IRR = €50M-€200M zusätzlicher Fund Value' },
      why: { en: 'We transform 3-5 underperforming companies—which lifts overall portfolio IRR (since 20% of companies drive 80% of returns).', de: 'Wir transformieren 3-5 unterperformende Unternehmen – was den gesamten Portfolio IRR hebt (da 20% der Unternehmen 80% der Returns generieren).' },
    },
    {
      id: 'portfolio-value',
      value: '+20-30%',
      title: { en: 'Portfolio Value Increase', de: 'Portfolio Value Steigerung' },
      example: { en: 'Example: €100M → €125M', de: 'Beispiel: €100M → €125M' },
      impact: { en: '+€25M portfolio value in 4-6 weeks', de: '+€25M Portfolio Value in 4-6 Wochen' },
      why: { en: 'We fix high-impact bottlenecks (CAC, scaling, governance)—which directly improves company valuations and portfolio value.', de: 'Wir fixen High-Impact Engpässe (CAC, Scaling, Governance) – was direkt Unternehmensbewertungen und Portfolio Value verbessert.' },
    },
  ];

  const caseStudy = {
    company: { en: '€500M AUM VC Firm, 15 portfolio companies (Series A-C)', de: '€500M AUM VC Firm, 15 Portfolio-Unternehmen (Series A-C)' },
    challenge: { en: 'Portfolio IRR 14%, 5 companies stuck (CAC crisis, scaling chaos, board pressure)', de: 'Portfolio IRR 14%, 5 Unternehmen festgefahren (CAC-Krise, Scaling-Chaos, Board-Druck)' },
    companiesTransformed: { en: '3 companies (CAC crisis, scaling chaos, board pressure)', de: '3 Unternehmen (CAC-Krise, Scaling-Chaos, Board-Druck)' },
    outcomes: [
      { label: { en: 'Portfolio IRR', de: 'Portfolio IRR' }, value: '+8pp (14% → 22%)' },
      { label: { en: 'Portfolio Value', de: 'Portfolio Value' }, value: '+28% (€80M → €102M)' },
      { label: { en: 'Companies Fixed', de: 'Unternehmen gefixt' }, value: '3 back on track' },
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
              ? 'Diese sind echte Ergebnisse von VC/PE Firms wie deiner (€200M-€2B AUM, 10-50 Portfolio-Unternehmen).'
              : 'These are real results from VC/PE firms like yours (€200M-€2B AUM, 10-50 portfolio companies).'}
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
                  {language === 'de' ? 'VC Firm:' : 'VC Firm:'}
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
                  {language === 'de' ? 'Transformierte Unternehmen:' : 'Companies Transformed:'}
                </span>
                <p className="text-sm text-foreground">{language === 'de' ? caseStudy.companiesTransformed.de : caseStudy.companiesTransformed.en}</p>
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
              ? 'In 30 Minuten bewerten wir dein Portfolio und zeigen dir genau, welche 3-5 Unternehmen wir transformieren würden. Kein Pitch, kein Druck – nur Klarheit.'
              : "In 30 minutes, we'll assess your portfolio and show you exactly which 3-5 companies we'd transform. No pitch, no pressure—just clarity."}
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
      title: { en: 'WEEK 1-2: IDENTIFY', de: 'WOCHE 1-2: IDENTIFIZIEREN' },
      whatWeDo: [
        { en: 'Portfolio Assessment (which companies underperforming?)', de: 'Portfolio Assessment (welche Unternehmen performen unter?)' },
        { en: "Bottleneck Diagnosis (what's the #1 bottleneck per company?)", de: 'Bottleneck Diagnose (was ist der #1 Engpass pro Unternehmen?)' },
        { en: 'Impact Prioritization (which companies have highest ROI?)', de: 'Impact Priorisierung (welche Unternehmen haben höchsten ROI?)' },
        { en: 'Transformation Plan (how to fix 3-5 companies?)', de: 'Transformationsplan (wie 3-5 Unternehmen fixen?)' },
      ],
      whatYouGet: [
        { en: 'Portfolio Transformation Report (15-20 pages)', de: 'Portfolio Transformation Report (15-20 Seiten)' },
        { en: '3-5 Company Plans (with bottleneck diagnosis)', de: '3-5 Unternehmenspläne (mit Bottleneck-Diagnose)' },
        { en: 'Impact Estimates (portfolio IRR, portfolio value)', de: 'Impact-Schätzungen (Portfolio IRR, Portfolio Value)' },
      ],
      timeCommitment: { en: '8-12 hours', de: '8-12 Stunden' },
    },
    {
      title: { en: 'WEEK 2-4: TRANSFORM', de: 'WOCHE 2-4: TRANSFORMIEREN' },
      whatWeDo: [
        { en: 'Fix 3-5 companies (parallel execution)', de: '3-5 Unternehmen fixen (parallele Execution)' },
        { en: 'Implement solutions (CAC fix, scaling fix, governance fix)', de: 'Lösungen implementieren (CAC Fix, Scaling Fix, Governance Fix)' },
        { en: 'Train company teams (hands-on, not just slides)', de: 'Unternehmens-Teams trainieren (Hands-on, nicht nur Slides)' },
      ],
      whatYouGet: [
        { en: '3-5 companies transformed (live improvements)', de: '3-5 Unternehmen transformiert (Live Improvements)' },
        { en: 'Company playbooks (for each transformation)', de: 'Unternehmens-Playbooks (für jede Transformation)' },
        { en: 'Team training (company leadership teams)', de: 'Team-Training (Unternehmens-Leadership-Teams)' },
      ],
      timeCommitment: { en: '12-16 hours', de: '12-16 Stunden' },
    },
    {
      title: { en: 'WEEK 4-6: MEASURE', de: 'WOCHE 4-6: MESSEN' },
      whatWeDo: [
        { en: 'Track portfolio metrics (Portfolio IRR, Portfolio Value)', de: 'Portfolio-Metriken tracken (Portfolio IRR, Portfolio Value)' },
        { en: 'Validate impact (are companies improving?)', de: 'Impact validieren (verbessern sich die Unternehmen?)' },
        { en: 'Create scale playbook (how to transform next 5-10 companies)', de: 'Scale Playbook erstellen (wie nächste 5-10 Unternehmen transformieren)' },
      ],
      whatYouGet: [
        { en: 'Portfolio Dashboard (real-time tracking)', de: 'Portfolio Dashboard (Echtzeit-Tracking)' },
        { en: 'Validated outcomes (with before/after data)', de: 'Validierte Ergebnisse (mit Vorher/Nachher-Daten)' },
        { en: 'Scale Playbook (step-by-step guide)', de: 'Scale Playbook (Schritt-für-Schritt-Anleitung)' },
      ],
      timeCommitment: { en: '6-8 hours', de: '6-8 Stunden' },
    },
  ];

  const riskSharing = {
    primaryMetrics: [
      { en: 'Companies Transformed (#)', de: 'Transformierte Unternehmen (#)' },
      { en: 'Portfolio IRR (%)', de: 'Portfolio IRR (%)' },
      { en: 'Portfolio Value (€)', de: 'Portfolio Value (€)' },
    ],
    howWeMeasure: [
      { en: 'Baseline: Week 0 (before we start)', de: 'Baseline: Woche 0 (bevor wir starten)' },
      { en: 'Checkpoint: Week 4 (mid-sprint)', de: 'Checkpoint: Woche 4 (Mid-Sprint)' },
      { en: 'Final: Week 6 (end of sprint)', de: 'Final: Woche 6 (Ende des Sprints)' },
    ],
    riskMitigation: { 
      en: "If we don't hit agreed outcomes, we'll extend the sprint at no extra cost. Reference calls available (talk to GPs who've worked with us).",
      de: 'Wenn wir vereinbarte Ergebnisse nicht erreichen, verlängern wir den Sprint ohne Zusatzkosten. Referenzgespräche möglich (sprich mit GPs, die mit uns gearbeitet haben).'
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
    { en: "Your portfolio is underperforming (and you need quick wins fast): Portfolio IRR is below target (15% vs. 25% target), 5-10 companies are stuck (CAC crisis, scaling chaos, board pressure), You have 4-6 weeks to show portfolio improvement (before LP meeting).", de: 'Dein Portfolio performt unter (und du brauchst schnelle Quick Wins): Portfolio IRR ist unter Ziel (15% vs. 25% Ziel), 5-10 Unternehmen stecken fest (CAC-Krise, Scaling-Chaos, Board-Druck), Du hast 4-6 Wochen Zeit, Portfolio-Verbesserung zu zeigen (vor LP Meeting).' },
    { en: "You have a portfolio problem (but don't know where to start): Which companies to transform first? (highest ROI?) What's the #1 bottleneck per company? (GTM, operations, governance?) How to transform 3-5 companies in parallel? (not sequential)", de: 'Du hast ein Portfolio-Problem (aber weißt nicht wo anfangen): Welche Unternehmen zuerst transformieren? (höchster ROI?) Was ist der #1 Engpass pro Unternehmen? (GTM, Operations, Governance?) Wie 3-5 Unternehmen parallel transformieren? (nicht sequentiell)' },
    { en: "You're a VC/PE firm with 10-50 portfolio companies (€200M-€2B AUM) with operating partners (1-3 OPs, overwhelmed)", de: 'Du bist eine VC/PE Firm mit 10-50 Portfolio-Unternehmen (€200M-€2B AUM) mit Operating Partners (1-3 OPs, überlastet)' },
    { en: "You're willing to execute: Your portfolio companies will commit time (8-12 hours/week per company), you'll give us access to data (portfolio metrics, company data)", de: 'Du bist bereit zu exekutieren: Deine Portfolio-Unternehmen werden Zeit committen (8-12 Stunden/Woche pro Unternehmen), du gibst uns Datenzugang (Portfolio-Metriken, Unternehmensdaten)' },
    { en: 'You have budget (€23.6K): ROI is 100-500x based on typical outcomes', de: 'Du hast Budget (€23.6K): ROI ist 100-500x basierend auf typischen Ergebnissen' },
  ];

  const notFor = [
    { en: "You have fewer than 10 portfolio companies: Power Up is for VC/PE firms with portfolios (not individual companies). Better fit: Individual company transformation (Power Up for that company)", de: 'Du hast weniger als 10 Portfolio-Unternehmen: Power Up ist für VC/PE Firms mit Portfolios (nicht einzelne Unternehmen). Besser geeignet: Einzelunternehmen-Transformation (Power Up für dieses Unternehmen)' },
    { en: 'You need a full portfolio transformation (not quick wins): If you need to transform 10-15 companies (6-12 months). Better fit: Portfolio Transformation (12-18 months, €150K-€350K)', de: 'Du brauchst eine volle Portfolio-Transformation (keine Quick Wins): Wenn du 10-15 Unternehmen transformieren musst (6-12 Monate). Besser geeignet: Portfolio Transformation (12-18 Monate, €150K-€350K)' },
    { en: "You're not ready to execute: If you just want a portfolio strategy deck (not hands-on implementation). Better fit: Traditional consulting (McKinsey, BCG, Bain)", de: 'Du bist nicht bereit zu exekutieren: Wenn du nur ein Portfolio Strategy Deck willst (keine Hands-on Implementierung). Besser geeignet: Traditionelles Consulting (McKinsey, BCG, Bain)' },
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
              ? 'Power Up: Portfolio Performance funktioniert am besten für VC/PE Firms in dieser Situation.'
              : 'Power Up: Portfolio Performance works best for VC/PE firms in this situation.'}
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
                  ? 'Nicht sicher, ob das der richtige Fit ist? Buche einen kostenlosen 30-Min. Inflection Call. Wir bewerten dein Portfolio und empfehlen den besten Weg nach vorn (auch wenn es nicht Power Up ist).'
                  : "Not sure if this is the right fit? Book a free 30-min Inflection Call. We'll assess your portfolio and recommend the best path forward (even if it's not Power Up)."}
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
      a: { en: '4-6 weeks (depending on portfolio size and company availability)', de: '4-6 Wochen (abhängig von Portfolio-Größe und Unternehmensverfügbarkeit)' },
    },
    {
      q: { en: "What's the investment?", de: 'Was ist das Investment?' },
      a: { en: '€23.6K (fixed price, outcome-based risk sharing)', de: '€23.6K (Festpreis, ergebnisbasierte Risikoteilung)' },
    },
    {
      q: { en: "What if it doesn't work?", de: 'Was ist, wenn es nicht funktioniert?' },
      a: { en: "We measure outcomes (Companies Transformed, Portfolio IRR, Portfolio Value). If we don't hit agreed targets, we'll extend the sprint at no extra cost.", de: 'Wir messen Ergebnisse (Transformierte Unternehmen, Portfolio IRR, Portfolio Value). Wenn wir vereinbarte Ziele nicht erreichen, verlängern wir den Sprint ohne Zusatzkosten.' },
    },
    {
      q: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' },
      a: { en: "Yes. We'll connect you with a GP who's worked with us (same fund size, same challenge).", de: 'Ja. Wir verbinden dich mit einem GP, der mit uns gearbeitet hat (gleiche Fund-Größe, gleiche Herausforderung).' },
    },
    {
      q: { en: "What's the ROI?", de: 'Was ist der ROI?' },
      a: { en: 'Typical ROI is 100-500x (based on portfolio value increase over 12 months).', de: 'Typischer ROI ist 100-500x (basierend auf Portfolio Value Steigerung über 12 Monate).' },
    },
    {
      q: { en: 'Do you work with our operating partners?', de: 'Arbeitet ihr mit unseren Operating Partners?' },
      a: { en: 'Yes. We train your OPs on transformation playbooks (so they can scale to next 5-10 companies).', de: 'Ja. Wir trainieren eure OPs auf Transformation Playbooks (damit sie auf die nächsten 5-10 Unternehmen skalieren können).' },
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
            {language === 'de' ? 'Bereit, Portfolio-Value zu erschließen?' : 'Ready to Unlock Portfolio Value?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {language === 'de' ? "Hier ist, was als nächstes passiert." : "Here's what happens next."}
          </p>
        </div>

        {/* CTA Button */}
        <div className="max-w-2xl mx-auto mb-16 animate-slide-up text-center" style={{ animationDelay: '0.1s' }}>
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
        <div className="flex flex-wrap justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              <span>{language === 'de' ? badge.de : badge.en}</span>
            </div>
          ))}
        </div>

        {/* Alternative: Portfolio Assessment */}
        <div className="bg-card border-2 border-border p-8 mb-16 text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="font-bold text-lg mb-4">
            {language === 'de' ? 'Alternative: Mit einem Portfolio Assessment starten' : 'Alternative: Start with a Portfolio Assessment'}
          </h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
            {language === 'de'
              ? 'Noch nicht bereit für ein volles Power Up? Starte kleiner:'
              : 'Not ready for a full Power Up? Start smaller:'}
          </p>
          <div className="bg-muted/50 p-4 rounded-lg inline-block mb-6">
            <p className="font-bold text-foreground">Portfolio Assessment (3-5 {language === 'de' ? 'Tage' : 'days'}, €3.9K-€5.9K)</p>
            <p className="text-sm text-muted-foreground">
              {language === 'de'
                ? 'Deep-Dive in dein Portfolio (10-50 Unternehmen). Identifiziere, welche Unternehmen zuerst zu transformieren sind. Gehe mit einer Portfolio Transformation Roadmap.'
                : 'Deep-dive into your portfolio (10-50 companies). Identify which companies to transform first. Walk away with a portfolio transformation roadmap.'}
            </p>
          </div>
          <div>
            <Button 
              variant="outline" 
              onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
            >
              {language === 'de' ? 'Portfolio Assessment buchen' : 'Book Portfolio Assessment'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="font-bold text-lg mb-6 text-center">FAQ</h3>
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

        {/* Final Subtext */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          {language === 'de'
            ? 'Noch Fragen? Schreib uns an team@scalingx.io oder buche einen Call.'
            : 'Still have questions? Email us at team@scalingx.io or book a call.'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const PowerUpPortfolioPerformance: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleOpenModal = () => setIsBookingModalOpen(true);
    window.addEventListener('openBookingModal', handleOpenModal);
    return () => window.removeEventListener('openBookingModal', handleOpenModal);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <OutcomeSection />
      <ProcessSection />
      <QualificationSection />
      <FinalCTASection />
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

export default PowerUpPortfolioPerformance;
