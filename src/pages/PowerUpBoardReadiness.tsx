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
    { value: '+20-30pp', label: { en: 'Board Confidence', de: 'Board Confidence' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
    { value: '-50-70%', label: { en: 'Board Prep Time', de: 'Board Prep Time' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
    { value: '+10-20pp', label: { en: 'Rule of 40', de: 'Rule of 40' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
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
              <span className="text-foreground font-medium">Power Up Board Readiness</span>
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
          <span className="block text-foreground">Board Pressure →</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'Board Confidence Restored' : 'Board Confidence Restored'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Werde board-ready in 4-6 Wochen. Typische Ergebnisse: Board Confidence +20-30pp, Board Prep Time -50-70%, Rule of 40 +10-20pp – mit ergebnisbasierter Risikoteilung.'
            : 'Get board-ready in 4-6 weeks. Typical outcomes: Board Confidence +20-30pp, Board Prep Time -50-70%, Rule of 40 +10-20pp—with outcome-based risk sharing.'}
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
    { en: 'Low board confidence: 40-60% (benchmark: 80%+), trending down', de: 'Niedrige Board Confidence: 40-60% (Benchmark: 80%+), Tendenz fallend' },
    { en: 'Long board prep: 5-7 days/quarter (benchmark: 24-48h), too manual', de: 'Lange Board Prep: 5-7 Tage/Quartal (Benchmark: 24-48h), zu manuell' },
    { en: 'Poor Rule of 40: 10% (benchmark: 40%+), not efficient growth', de: 'Schlechte Rule of 40: 10% (Benchmark: 40%+), kein effizientes Wachstum' },
    { en: 'No board framework: Ad-hoc reporting, no standardized metrics', de: 'Kein Board-Framework: Ad-hoc Reporting, keine standardisierten Metriken' },
    { en: 'Valuation discount: 30-40% below peers (due to board concerns)', de: 'Valuation Discount: 30-40% unter Peers (aufgrund von Board-Bedenken)' },
  ];

  const realCosts = [
    { en: 'Destroys valuation (30-40% discount = €10M-€50M value lost)', de: 'Zerstört Valuation (30-40% Abschlag = €10M-€50M Wertverlust)' },
    { en: 'Limits fundraising options (investors see board concerns as red flag)', de: 'Begrenzt Fundraising-Optionen (Investoren sehen Board-Bedenken als Red Flag)' },
    { en: "Weakens strategic decisions (board doesn't trust your judgment)", de: 'Schwächt strategische Entscheidungen (Board vertraut deinem Urteil nicht)' },
    { en: 'Increases CEO burnout (board pressure = 24/7 stress)', de: 'Erhöht CEO-Burnout (Board-Druck = 24/7 Stress)' },
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
            {language === 'de' ? 'Dein Board verliert das Vertrauen' : 'Your Board Is Losing Confidence'}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Deine Board Confidence liegt bei 40-60% (Benchmark: 80%+). Deine Board Prep dauert 5-7 Tage pro Quartal (Benchmark: 24-48 Stunden). Deine Rule of 40 liegt bei 10% (Benchmark: 40%+). Und das Schlimmste – das Board fragt ständig: "Wann sehen wir effizientes Wachstum?"'
              : 'Your board confidence is at 40-60% (benchmark: 80%+). Your board prep takes 5-7 days every quarter (benchmark: 24-48 hours). Your Rule of 40 is at 10% (benchmark: 40%+). And worst of all—the board is asking: "When will we see efficient growth?"'}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Der Druck steigt. Jedes Board Meeting ohne Fortschritt: Board Confidence sinkt weiter (von 60% auf 40%), Valuation Discount steigt (30-40% unter vergleichbaren Unternehmen), Fundraising wird schwieriger (Investoren sehen Board-Bedenken), CEO-Stress steigt (Board-Druck = persönlicher Druck).'
              : 'The pressure is mounting. Every board meeting without progress: Board confidence drops further (from 60% to 40%), valuation discount increases (30-40% below comparable companies), fundraising becomes harder (investors see board concerns), CEO stress increases (board pressure = personal pressure).'}
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
              ? 'Es geht nicht nur um Board Meetings. Jedes Quartal mit niedriger Board Confidence:'
              : "This isn't just about board meetings. Every quarter with low board confidence:"}
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
              ? 'Du musst Board Confidence wiederherstellen. Schnell.'
              : 'You need to restore board confidence. Fast.'}
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
      title: { en: 'Diagnose the Governance Gap', de: 'Die Governance-Lücke diagnostizieren' },
      timeline: { en: 'Week 1-2', de: 'Woche 1-2' },
      icon: Search,
      items: [
        { en: 'Board Confidence Analysis: Why is confidence at 40-60%? (metrics unclear, narrative weak?)', de: 'Board Confidence Analyse: Warum ist Confidence bei 40-60%? (Metriken unklar, Narrative schwach?)' },
        { en: 'Rule of 40 Analysis: Why is it at 10%? (growth too low, burn too high?)', de: 'Rule of 40 Analyse: Warum ist sie bei 10%? (Wachstum zu niedrig, Burn zu hoch?)' },
        { en: 'Board Prep Analysis: Why does it take 5-7 days? (manual reporting, no automation?)', de: 'Board Prep Analyse: Warum dauert es 5-7 Tage? (manuelles Reporting, keine Automatisierung?)' },
        { en: "Governance Framework Analysis: What's missing? (no OKRs, no board dashboard?)", de: 'Governance Framework Analyse: Was fehlt? (keine OKRs, kein Board Dashboard?)' },
      ],
      deliverable: { en: 'Board Readiness Report (15-20 pages) with root cause analysis', de: 'Board Readiness Report (15-20 Seiten) mit Root-Cause-Analyse' },
      color: 'from-violet-500 to-purple-600',
    },
    {
      number: '2',
      title: { en: 'Build the Governance Framework', de: 'Das Governance-Framework bauen' },
      timeline: { en: 'Week 2-4', de: 'Woche 2-4' },
      icon: Wrench,
      items: [
        { en: 'Strategic Narrative: Clarify your strategic story, build investor-grade narrative, create strategic dashboard', de: 'Strategic Narrative: Strategische Story klären, Investor-Grade Narrative bauen, strategisches Dashboard erstellen' },
        { en: 'Rule of 40 Improvement: Identify efficiency levers, implement quick wins (10-20pp improvement)', de: 'Rule of 40 Verbesserung: Effizienz-Hebel identifizieren, Quick Wins implementieren (10-20pp Verbesserung)' },
        { en: 'Board Reporting System: Automate board prep (5-7 days → 24-48 hours), build board dashboard', de: 'Board Reporting System: Board Prep automatisieren (5-7 Tage → 24-48h), Board Dashboard bauen' },
      ],
      deliverable: { en: 'Board governance framework live (not just slides)', de: 'Board Governance Framework live (nicht nur Slides)' },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '3',
      title: { en: 'Validate & Prepare', de: 'Validieren & Vorbereiten' },
      timeline: { en: 'Week 4-6', de: 'Woche 4-6' },
      icon: CheckCircle,
      items: [
        { en: 'Metrics Tracking: Board Confidence, Rule of 40, Board Prep Time', de: 'Metriken-Tracking: Board Confidence, Rule of 40, Board Prep Time' },
        { en: 'Board Deck Preparation: Next board meeting deck (with new framework)', de: 'Board Deck Vorbereitung: Nächstes Board Meeting Deck (mit neuem Framework)' },
        { en: 'CEO Training: CEO trained on new narrative and metrics', de: 'CEO-Training: CEO auf neuer Narrative und Metriken geschult' },
      ],
      deliverable: { en: 'Board-ready materials + validated governance framework', de: 'Board-ready Materialien + validiertes Governance Framework' },
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  const differentiators = [
    { en: 'Hands-on execution (not just strategy slides)', de: 'Hands-on Execution (nicht nur Strategie-Slides)' },
    { en: 'Board-grade framework (investor-ready, fundraising-ready)', de: 'Board-Grade Framework (Investor-ready, Fundraising-ready)' },
    { en: 'Outcome-based risk sharing (we measure board confidence)', de: 'Ergebnisbasierte Risikoteilung (wir messen Board Confidence)' },
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
              ? 'So stellen wir Board Confidence wieder her'
              : 'How We Restore Board Confidence'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Wir erstellen nicht einfach bessere Slides. Wir bauen ein Board Governance Framework – damit dein Board effizientes Wachstum und strategische Klarheit sieht.'
              : "We don't just create better slides. We build a board governance framework—so your board sees efficient growth and strategic clarity."}
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
      id: 'board-confidence',
      value: '+20-30pp',
      title: { en: 'Board Confidence Increase', de: 'Board Confidence Steigerung' },
      example: { en: 'Example: 50% → 75%', de: 'Beispiel: 50% → 75%' },
      impact: { en: 'From "concerned" to "confident" in 30 days', de: 'Von "besorgt" zu "zuversichtlich" in 30 Tagen' },
      why: { en: 'We clarify your strategic narrative and improve Rule of 40—so the board sees efficient growth and understands your path to profitability.', de: 'Wir klären deine strategische Narrative und verbessern Rule of 40 – damit das Board effizientes Wachstum sieht und deinen Weg zur Profitabilität versteht.' },
    },
    {
      id: 'board-prep-time',
      value: '-50-70%',
      title: { en: 'Board Prep Time Reduction', de: 'Board Prep Time Reduktion' },
      example: { en: 'Example: 5-7d → 24-48h', de: 'Beispiel: 5-7d → 24-48h' },
      impact: { en: '4-5 days saved every quarter = 16-20 days/year', de: '4-5 Tage pro Quartal gespart = 16-20 Tage/Jahr' },
      why: { en: 'We automate board reporting and create standardized templates—so you spend less time on slides and more time on strategy.', de: 'Wir automatisieren Board Reporting und erstellen standardisierte Templates – damit du weniger Zeit mit Slides verbringst und mehr Zeit für Strategie hast.' },
    },
    {
      id: 'rule-of-40',
      value: '+10-20pp',
      title: { en: 'Rule of 40 Increase', de: 'Rule of 40 Steigerung' },
      example: { en: 'Example: 10% → 25%', de: 'Beispiel: 10% → 25%' },
      impact: { en: 'From "inefficient" to "efficient growth" in 30 days', de: 'Von "ineffizient" zu "effizientem Wachstum" in 30 Tagen' },
      why: { en: 'We identify efficiency levers (growth acceleration, burn reduction) and implement quick wins—so you improve Rule of 40 without sacrificing growth.', de: 'Wir identifizieren Effizienz-Hebel (Wachstums-Beschleunigung, Burn-Reduktion) und implementieren Quick Wins – damit du Rule of 40 verbesserst ohne Wachstum zu opfern.' },
    },
  ];

  const caseStudy = {
    company: { en: 'Series B SaaS, €30M ARR, 100 employees', de: 'Series B SaaS, €30M ARR, 100 Mitarbeiter' },
    challenge: { en: 'Board Confidence 45%, Board Prep 6 days, Rule of 40 8%', de: 'Board Confidence 45%, Board Prep 6 Tage, Rule of 40 8%' },
    bottleneck: { en: 'No strategic narrative, no board dashboard, manual reporting', de: 'Keine strategische Narrative, kein Board Dashboard, manuelles Reporting' },
    fix: { en: 'Strategic narrative + Rule of 40 improvement + board automation (5 weeks)', de: 'Strategic Narrative + Rule of 40 Verbesserung + Board Automatisierung (5 Wochen)' },
    outcomes: [
      { label: { en: 'Board Confidence', de: 'Board Confidence' }, value: '+28pp (45% → 73%)' },
      { label: { en: 'Board Prep Time', de: 'Board Prep Time' }, value: '-67% (6d → 2d)' },
      { label: { en: 'Rule of 40', de: 'Rule of 40' }, value: '+18pp (8% → 26%)' },
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
                  {language === 'de' ? 'Governance-Lücke:' : 'Governance Gap:'}
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
              ? 'In 30 Minuten diagnostizieren wir deine Board Governance-Lücke und zeigen dir genau, wie wir Confidence wiederherstellen würden. Kein Pitch, kein Druck – nur Klarheit.'
              : "In 30 minutes, we'll diagnose your board governance gap and show you exactly how we'd restore confidence. No pitch, no pressure—just clarity."}
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
        { en: 'Board Confidence Analysis (why 40-60%?)', de: 'Board Confidence Analyse (warum 40-60%?)' },
        { en: 'Rule of 40 Analysis (why so low?)', de: 'Rule of 40 Analyse (warum so niedrig?)' },
        { en: 'Board Prep Analysis (why 5-7 days?)', de: 'Board Prep Analyse (warum 5-7 Tage?)' },
        { en: "Governance Framework Analysis (what's missing?)", de: 'Governance Framework Analyse (was fehlt?)' },
      ],
      whatYouGet: [
        { en: 'Board Readiness Report (15-20 pages)', de: 'Board Readiness Report (15-20 Seiten)' },
        { en: 'Root Cause Analysis (with data)', de: 'Root-Cause-Analyse (mit Daten)' },
        { en: 'Framework Recommendation (what to build)', de: 'Framework-Empfehlung (was zu bauen ist)' },
      ],
      timeCommitment: { en: '8-12 hours', de: '8-12 Stunden' },
    },
    {
      title: { en: 'WEEK 2-4: BUILD', de: 'WOCHE 2-4: BAUEN' },
      whatWeDo: [
        { en: 'Build strategic narrative (board-ready story)', de: 'Strategic Narrative bauen (Board-ready Story)' },
        { en: 'Improve Rule of 40 (identify efficiency levers)', de: 'Rule of 40 verbessern (Effizienz-Hebel identifizieren)' },
        { en: 'Automate board reporting (dashboard + templates)', de: 'Board Reporting automatisieren (Dashboard + Templates)' },
      ],
      whatYouGet: [
        { en: 'Board governance framework (live, not slides)', de: 'Board Governance Framework (live, nicht Slides)' },
        { en: 'Strategic narrative (investor-grade)', de: 'Strategic Narrative (Investor-Grade)' },
        { en: 'Board dashboard (real-time metrics)', de: 'Board Dashboard (Echtzeit-Metriken)' },
      ],
      timeCommitment: { en: '12-16 hours', de: '12-16 Stunden' },
    },
    {
      title: { en: 'WEEK 4-6: VALIDATE', de: 'WOCHE 4-6: VALIDIEREN' },
      whatWeDo: [
        { en: 'Track metrics (Board Confidence, Rule of 40, Board Prep Time)', de: 'Metriken tracken (Board Confidence, Rule of 40, Board Prep Time)' },
        { en: 'Prepare board deck (next board meeting)', de: 'Board Deck vorbereiten (nächstes Board Meeting)' },
        { en: 'Train CEO (new narrative and metrics)', de: 'CEO trainieren (neue Narrative und Metriken)' },
      ],
      whatYouGet: [
        { en: 'Metrics Dashboard (real-time tracking)', de: 'Metriken-Dashboard (Echtzeit-Tracking)' },
        { en: 'Board Deck (next meeting ready)', de: 'Board Deck (bereit fürs nächste Meeting)' },
        { en: 'CEO Training (hands-on coaching)', de: 'CEO-Training (Hands-on Coaching)' },
      ],
      timeCommitment: { en: '6-8 hours', de: '6-8 Stunden' },
    },
  ];

  const riskSharing = {
    primaryMetrics: [
      { en: 'Board Confidence (%)', de: 'Board Confidence (%)' },
      { en: 'Rule of 40 (%)', de: 'Rule of 40 (%)' },
      { en: 'Board Prep Time (days)', de: 'Board Prep Time (Tage)' },
    ],
    howWeMeasure: [
      { en: 'Baseline: Week 0 (before we start)', de: 'Baseline: Woche 0 (bevor wir starten)' },
      { en: 'Checkpoint: Week 4 (mid-sprint)', de: 'Checkpoint: Woche 4 (Mid-Sprint)' },
      { en: 'Final: Week 6 (end of sprint)', de: 'Final: Woche 6 (Ende des Sprints)' },
    ],
    riskMitigation: { 
      en: "If we don't hit agreed outcomes, we'll extend the sprint at no extra cost. Reference calls available (talk to CEOs who've worked with us).",
      de: 'Wenn wir vereinbarte Ergebnisse nicht erreichen, verlängern wir den Sprint ohne Zusatzkosten. Referenzgespräche möglich (sprich mit CEOs, die mit uns gearbeitet haben).'
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
    { en: "Your board is losing confidence (and you need to restore it fast): Board confidence is low (40-60%, trending down), Board prep takes too long (5-7 days/quarter), You have 4-6 weeks to restore confidence (before next board meeting).", de: 'Dein Board verliert das Vertrauen (und du musst es schnell wiederherstellen): Board Confidence ist niedrig (40-60%, Tendenz fallend), Board Prep dauert zu lange (5-7 Tage/Quartal), Du hast 4-6 Wochen, um Confidence wiederherzustellen (vor dem nächsten Board Meeting).' },
    { en: "You have a board governance problem (but don't know the root cause): Is it your strategic narrative? (unclear where you're going?) Is it your Rule of 40? (too low, inefficient growth?) Is it your board reporting? (manual, takes too long?)", de: 'Du hast ein Board Governance Problem (aber kennst die Ursache nicht): Ist es deine strategische Narrative? (unklar wohin du gehst?) Ist es deine Rule of 40? (zu niedrig, ineffizientes Wachstum?) Ist es dein Board Reporting? (manuell, dauert zu lange?)' },
    { en: "You're Series A-D, €10M-€50M ARR with a board (3-5 board members)", de: 'Du bist Series A-D, €10M-€50M ARR mit einem Board (3-5 Board-Mitglieder)' },
    { en: "You're willing to execute: Your leadership team will commit 8-12 hours/week for 4-6 weeks, give us access to data (financials, metrics, board materials)", de: 'Du bist bereit zu exekutieren: Dein Leadership Team wird 8-12 Stunden/Woche für 4-6 Wochen committen, uns Datenzugang geben (Financials, Metriken, Board-Materialien)' },
    { en: 'You have budget (€23.6K): ROI is 15-30x based on valuation impact', de: 'Du hast Budget (€23.6K): ROI ist 15-30x basierend auf Valuation Impact' },
  ];

  const notFor = [
    { en: "You don't have a board (pre-Series A): Power Up is for companies with active boards (not solo founders). Better fit: Expert Session (€490, 45-90 min)", de: 'Du hast kein Board (Pre-Series A): Power Up ist für Unternehmen mit aktiven Boards (nicht Solo-Gründer). Besser geeignet: Expert Session (€490, 45-90 Min.)' },
    { en: 'You need a full governance transformation (not quick wins): If you need to rebuild your entire governance system (6-12 months). Better fit: Boost (90 days, €60K-€78K) or Accelerate (12 months)', de: 'Du brauchst eine volle Governance-Transformation (keine Quick Wins): Wenn du dein gesamtes Governance-System neu aufbauen musst (6-12 Monate). Besser geeignet: Boost (90 Tage, €60K-€78K) oder Accelerate (12 Monate)' },
    { en: "You're not ready to execute: If you just want a board strategy deck (not hands-on implementation). Better fit: Traditional consulting (McKinsey, BCG, Bain)", de: 'Du bist nicht bereit zu exekutieren: Wenn du nur ein Board Strategy Deck willst (keine Hands-on Implementierung). Besser geeignet: Traditionelles Consulting (McKinsey, BCG, Bain)' },
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
              ? 'Power Up: Board Readiness funktioniert am besten für Unternehmen in dieser Situation.'
              : 'Power Up: Board Readiness works best for companies in this situation.'}
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
                  ? 'Nicht sicher, ob das der richtige Fit ist? Buche einen kostenlosen 30-Min. Inflection Call. Wir diagnostizieren deine Board Governance-Lücke und empfehlen den besten Weg nach vorn (auch wenn es nicht Power Up ist).'
                  : "Not sure if this is the right fit? Book a free 30-min Inflection Call. We'll diagnose your board governance gap and recommend the best path forward (even if it's not Power Up)."}
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
      a: { en: '4-6 weeks (depending on your governance gap and team availability)', de: '4-6 Wochen (abhängig von deiner Governance-Lücke und Team-Verfügbarkeit)' },
    },
    {
      q: { en: "What's the investment?", de: 'Was ist das Investment?' },
      a: { en: '€23.6K (fixed price, outcome-based risk sharing)', de: '€23.6K (Festpreis, ergebnisbasierte Risikoteilung)' },
    },
    {
      q: { en: "What if it doesn't work?", de: 'Was ist, wenn es nicht funktioniert?' },
      a: { en: "We measure outcomes (Board Confidence, Rule of 40, Board Prep Time). If we don't hit agreed targets, we'll extend the sprint at no extra cost.", de: 'Wir messen Ergebnisse (Board Confidence, Rule of 40, Board Prep Time). Wenn wir vereinbarte Ziele nicht erreichen, verlängern wir den Sprint ohne Zusatzkosten.' },
    },
    {
      q: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' },
      a: { en: "Yes. We'll connect you with a CEO who's worked with us (same stage, same challenge).", de: 'Ja. Wir verbinden dich mit einem CEO, der mit uns gearbeitet hat (gleiche Stage, gleiche Herausforderung).' },
    },
    {
      q: { en: "What's the ROI?", de: 'Was ist der ROI?' },
      a: { en: 'Typical ROI is 15-30x (based on valuation impact over 12 months).', de: 'Typischer ROI ist 15-30x (basierend auf Valuation Impact über 12 Monate).' },
    },
    {
      q: { en: 'Do you work with our board?', de: 'Arbeitet ihr mit unserem Board?' },
      a: { en: 'Yes. We can present to your board (if needed) and train your board members on the new framework.', de: 'Ja. Wir können vor deinem Board präsentieren (falls nötig) und deine Board-Mitglieder auf dem neuen Framework schulen.' },
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
            {language === 'de' ? 'Bereit, Board Confidence wiederherzustellen?' : 'Ready to Restore Board Confidence?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Starte mit einem kostenlosen Inflection Call (30 Min.). Wir diagnostizieren deine Board Governance-Lücke und empfehlen die richtige Lösung (Power Up, Boost, Accelerate oder DIY).'
              : "Start with a free Inflection Call (30 min). We'll diagnose your board governance gap and recommend the right solution (Power Up, Boost, Accelerate, or DIY)."}
          </p>
        </div>

        {/* Fillout Form Embed */}
        <div
          className="max-w-2xl mx-auto rounded-3xl bg-card/50 border-2 border-border backdrop-blur-sm overflow-hidden animate-slide-up mb-12"
          style={{ animationDelay: '0.1s' }}
        >
          <div
            data-fillout-id="wX5LjCi8eQus"
            data-fillout-embed-type="standard"
            data-fillout-inherit-parameters
            data-fillout-dynamic-resize
            style={{ width: '100%', height: '400px' }}
          />
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground bg-card/50 px-4 py-2 rounded-full border border-border">
              <Check className="w-4 h-4 text-accent" />
              <span>{language === 'de' ? badge.de : badge.en}</span>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="font-bold text-xl text-center mb-8">
            {language === 'de' ? 'Häufig gestellte Fragen' : 'Frequently Asked Questions'}
          </h3>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-card border-2 border-border px-4 rounded-lg">
                <AccordionTrigger className="text-left text-foreground hover:no-underline">
                  {language === 'de' ? faq.q.de : faq.q.en}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {language === 'de' ? faq.a.de : faq.a.en}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Footer */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-muted-foreground">
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
const PowerUpBoardReadiness: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
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

export default PowerUpBoardReadiness;
