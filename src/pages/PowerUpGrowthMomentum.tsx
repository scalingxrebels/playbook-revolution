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
  Search,
  Wrench,
  CheckCircle,
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
    { value: '+30-60pp', label: { en: 'ARR Growth', de: 'ARR-Wachstum' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
    { value: '+30-50%', label: { en: 'Win Rate', de: 'Win Rate' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
    { value: '+50-100%', label: { en: 'Pipeline', de: 'Pipeline' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
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
              <span className="text-foreground font-medium">Power Up Growth Momentum</span>
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
          <span className="block text-foreground">Growth Stalled →</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'Zurück zu Hypergrowth' : 'Back to Hypergrowth'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Entfache dein Wachstum in 4-6 Wochen neu. Typische Ergebnisse: ARR-Wachstum +30-60pp, Win Rate +30-50%, Pipeline +50-100% – mit ergebnisbasierter Risikoteilung.'
            : 'Reignite your growth engine in 4-6 weeks. Typical outcomes: ARR Growth +30-60pp, Win Rate +30-50%, Pipeline +50-100%—with outcome-based risk sharing.'}
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
    { en: 'Declining growth rate: 150% → 120% → 80% YoY (and trending down)', de: 'Sinkende Wachstumsrate: 150% → 120% → 80% YoY (und fallend)' },
    { en: 'Stagnant pipeline: Same volume, but lower conversion (35% → 22%)', de: 'Stagnierende Pipeline: Gleiches Volumen, aber niedrigere Conversion (35% → 22%)' },
    { en: 'Longer sales cycles: 45 days → 75 days (deals taking 60% longer)', de: 'Längere Sales Cycles: 45 Tage → 75 Tage (Deals dauern 60% länger)' },
    { en: 'Lower win rates: 40% → 25% (losing to competitors or "no decision")', de: 'Niedrigere Win Rates: 40% → 25% (Verlust an Wettbewerber oder "keine Entscheidung")' },
    { en: 'Product-market fit concerns: "Is our product still relevant?"', de: 'Product-Market-Fit-Bedenken: "Ist unser Produkt noch relevant?"' },
  ];

  const realCosts = [
    { en: 'Delays your next funding round (VCs want 100%+ growth, not 80%)', de: 'Verzögert deine nächste Finanzierungsrunde (VCs wollen 100%+ Wachstum, nicht 80%)' },
    { en: 'Increases CAC (spending more to acquire fewer customers)', de: 'Erhöht CAC (mehr ausgeben, um weniger Kunden zu gewinnen)' },
    { en: 'Erodes team morale (top performers leave when momentum is gone)', de: 'Untergräbt Team-Moral (Top-Performer gehen, wenn Momentum weg ist)' },
    { en: 'Weakens competitive position (competitors are growing faster)', de: 'Schwächt Wettbewerbsposition (Wettbewerber wachsen schneller)' },
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
            {language === 'de' ? 'Dein Wachstum ist stagniert' : 'Your Growth Has Stalled'}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Dein ARR-Wachstum ist von 150% auf 80% YoY gefallen – und es wird schlimmer. Du schließt immer noch Deals, aber nicht schnell genug. Deine Pipeline sieht auf dem Papier gesund aus, aber die Conversion Rates sinken. Dein Team arbeitet härter als je zuvor, aber das Momentum ist weg.'
              : "Your ARR growth has dropped from 150% to 80% YoY—and it's getting worse. You're still closing deals, but not fast enough. Your pipeline looks healthy on paper, but conversion rates are declining. Your team is working harder than ever, but momentum is gone."}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Das Board stellt Fragen. Deine Investoren sind besorgt. Dein Team ist frustriert. Und du weißt, wenn das noch 2-3 Quartale so weitergeht, verfehlst du deine Wachstumsziele – und möglicherweise deine nächste Finanzierungsrunde.'
              : "The board is asking questions. Your investors are concerned. Your team is frustrated. And you know that if this continues for another 2-3 quarters, you'll miss your growth targets—and potentially your next funding round."}
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
              ? 'Es geht nicht nur darum, Q4-Ziele zu verfehlen. Jedes Quartal stagnierendes Wachstum:'
              : "This isn't just about missing Q4 targets. Every quarter of stalled growth:"}
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
              ? 'Du musst deine Growth Engine neu entfachen. Schnell.'
              : 'You need to reignite your growth engine. Fast.'}
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
        { en: 'C₁ Assessment (Strategy): Is your ICP still correct? Is your positioning sharp?', de: 'C₁ Assessment (Strategie): Ist dein ICP noch korrekt? Ist dein Positioning scharf?' },
        { en: 'C₃ Assessment (Execution): Is your sales process optimized? Are you losing deals at a specific stage?', de: 'C₃ Assessment (Execution): Ist dein Sales-Prozess optimiert? Verlierst du Deals an einer bestimmten Stage?' },
        { en: 'PMF Analysis: Is your product still solving the right problem?', de: 'PMF-Analyse: Löst dein Produkt noch das richtige Problem?' },
        { en: 'Competitive Analysis: Why are you losing to competitors (or "no decision")?', de: 'Wettbewerbsanalyse: Warum verlierst du gegen Wettbewerber (oder "keine Entscheidung")?' },
      ],
      deliverable: { en: 'Bottleneck Report (15-20 pages) with root cause analysis', de: 'Bottleneck Report (15-20 Seiten) mit Root-Cause-Analyse' },
      color: 'from-violet-500 to-purple-600',
    },
    {
      number: '2',
      title: { en: 'Fix the Bottleneck', de: 'Den Engpass beheben' },
      timeline: { en: 'Week 2-4', de: 'Woche 2-4' },
      icon: Wrench,
      items: [
        { en: 'Option A: ICP Refinement (if C₁ < 0.6) – Sharpen ICP, update positioning, retrain sales team', de: 'Option A: ICP-Verfeinerung (wenn C₁ < 0.6) – ICP schärfen, Positioning aktualisieren, Sales Team neu trainieren' },
        { en: 'Option B: Sales Process Optimization (if C₃ < 0.6) – Redesign sales stages, AI-powered lead scoring, sales playbooks', de: 'Option B: Sales-Process-Optimierung (wenn C₃ < 0.6) – Sales Stages neu designen, AI-gestütztes Lead Scoring, Sales Playbooks' },
        { en: 'Option C: Product-Market Fit Restoration (if PMF Score < 0.7) – Identify usage gaps, product-led growth loops', de: 'Option C: Product-Market-Fit-Wiederherstellung (wenn PMF Score < 0.7) – Nutzungslücken identifizieren, Product-led-Growth-Loops' },
      ],
      deliverable: { en: 'Implemented fix (live in your systems, not a slide deck)', de: 'Implementierter Fix (live in deinen Systemen, nicht ein Slide Deck)' },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '3',
      title: { en: 'Validate & Scale', de: 'Validieren & Skalieren' },
      timeline: { en: 'Week 4-6', de: 'Woche 4-6' },
      icon: CheckCircle,
      items: [
        { en: 'Metrics Tracking: ARR Growth, Win Rate, Pipeline, Sales Cycle', de: 'Metriken-Tracking: ARR-Wachstum, Win Rate, Pipeline, Sales Cycle' },
        { en: 'Team Training: Sales, Marketing, Product teams trained on new process', de: 'Team-Training: Sales, Marketing, Product Teams auf neuen Prozess geschult' },
        { en: 'Playbook Delivery: Step-by-step playbook for your team to scale', de: 'Playbook-Lieferung: Schritt-für-Schritt-Playbook für dein Team zum Skalieren' },
      ],
      deliverable: { en: 'Validated growth engine + team enablement', de: 'Validierte Growth Engine + Team Enablement' },
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  const differentiators = [
    { en: 'Hands-on execution (not just strategy slides)', de: 'Hands-on Execution (nicht nur Strategie-Slides)' },
    { en: 'AI-native tools (we implement AI where it creates leverage)', de: 'AI-native Tools (wir implementieren AI wo sie Hebelwirkung schafft)' },
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
              ? 'So entfachen wir deine Growth Engine neu'
              : 'How We Reignite Your Growth Engine'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Wir fügen nicht mehr Taktiken hinzu. Wir beheben deinen #1 Growth-Engpass – das eine, was deine gesamte Revenue Engine zurückhält.'
              : "We don't add more tactics. We fix your #1 growth bottleneck—the one thing holding back your entire revenue engine."}
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
      id: 'arr',
      value: '+30-60pp',
      title: { en: 'ARR Growth', de: 'ARR-Wachstum' },
      example: { en: 'Example: 80% → 130% YoY', de: 'Beispiel: 80% → 130% YoY' },
      impact: { en: '+€5M ARR in 12 months', de: '+€5M ARR in 12 Monaten' },
      why: { en: 'We fix your #1 growth bottleneck (ICP, sales process, or PMF)—which unlocks your entire revenue engine.', de: 'Wir beheben deinen #1 Growth-Engpass (ICP, Sales-Prozess oder PMF) – was deine gesamte Revenue Engine freischaltet.' },
    },
    {
      id: 'winrate',
      value: '+30-50%',
      title: { en: 'Win Rate Increase', de: 'Win Rate Steigerung' },
      example: { en: 'Example: 25% → 37%', de: 'Beispiel: 25% → 37%' },
      impact: { en: '+48% more deals from same pipeline', de: '+48% mehr Deals aus derselben Pipeline' },
      why: { en: 'We sharpen your ICP, positioning, and sales playbooks—so you\'re only pursuing high-fit opportunities.', de: 'Wir schärfen deinen ICP, Positionierung und Sales Playbooks – damit du nur High-Fit-Opportunities verfolgst.' },
    },
    {
      id: 'pipeline',
      value: '+50-100%',
      title: { en: 'Pipeline Growth', de: 'Pipeline-Wachstum' },
      example: { en: 'Example: €2M → €3.5M', de: 'Beispiel: €2M → €3.5M' },
      impact: { en: '+75% more pipeline (without increasing marketing spend)', de: '+75% mehr Pipeline (ohne Marketing-Spend zu erhöhen)' },
      why: { en: 'We implement AI-powered lead scoring and product-led growth loops—generating more qualified leads from the same traffic.', de: 'Wir implementieren AI-gestütztes Lead Scoring und Product-led-Growth-Loops – mehr qualifizierte Leads aus demselben Traffic.' },
    },
  ];

  const caseStudy = {
    company: { en: 'Series B SaaS, €15M ARR, 35 employees', de: 'Series B SaaS, €15M ARR, 35 Mitarbeiter' },
    challenge: { en: 'Growth dropped from 150% to 75% YoY', de: 'Wachstum fiel von 150% auf 75% YoY' },
    bottleneck: { en: 'Weak ICP (targeting too broad, losing to "no decision")', de: 'Schwacher ICP (zu breites Targeting, Verlust an "keine Entscheidung")' },
    fix: { en: 'ICP refinement + sales process redesign (4 weeks)', de: 'ICP-Verfeinerung + Sales-Prozess-Redesign (4 Wochen)' },
    outcomes: [
      { label: { en: 'ARR Growth', de: 'ARR-Wachstum' }, value: '+45pp (75% → 120%)' },
      { label: { en: 'Win Rate', de: 'Win Rate' }, value: '+40% (25% → 35%)' },
      { label: { en: 'Pipeline', de: 'Pipeline' }, value: '+80%' },
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
              ? 'In 30 Minuten diagnostizieren wir deinen Growth-Engpass und zeigen dir genau, wie wir ihn beheben würden. Kein Pitch, kein Druck – nur Klarheit.'
              : "In 30 minutes, we'll diagnose your growth bottleneck and show you exactly how we'd fix it. No pitch, no pressure—just clarity."}
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
        { en: 'C₁ + C₃ Assessment (Strategy + Execution)', de: 'C₁ + C₃ Assessment (Strategie + Execution)' },
        { en: 'PMF Analysis (Product-Market Fit Score)', de: 'PMF-Analyse (Product-Market-Fit-Score)' },
        { en: 'Competitive Analysis (Why are you losing?)', de: 'Wettbewerbsanalyse (Warum verlierst du?)' },
        { en: 'Bottleneck Identification (Root cause analysis)', de: 'Engpass-Identifikation (Root-Cause-Analyse)' },
      ],
      whatYouGet: [
        { en: 'Bottleneck Report (15-20 pages)', de: 'Bottleneck Report (15-20 Seiten)' },
        { en: 'Root Cause Analysis (with data)', de: 'Root-Cause-Analyse (mit Daten)' },
        { en: 'Fix Recommendation (1-3 options)', de: 'Fix-Empfehlung (1-3 Optionen)' },
      ],
      timeCommitment: { en: '8-12 hours', de: '8-12 Stunden' },
    },
    {
      title: { en: 'WEEK 2-4: FIX', de: 'WOCHE 2-4: FIX' },
      whatWeDo: [
        { en: 'Implement #1 fix (ICP, sales process, or PMF)', de: 'Implementiere #1 Fix (ICP, Sales-Prozess oder PMF)' },
        { en: 'Build AI-native tools (lead scoring, playbooks, dashboards)', de: 'Baue AI-native Tools (Lead Scoring, Playbooks, Dashboards)' },
        { en: 'Train your team (sales, marketing, product)', de: 'Trainiere dein Team (Sales, Marketing, Product)' },
      ],
      whatYouGet: [
        { en: 'Implemented fix (live in your systems)', de: 'Implementierter Fix (live in deinen Systemen)' },
        { en: 'AI-native tools (deployed, not just designed)', de: 'AI-native Tools (deployed, nicht nur designed)' },
        { en: 'Team training (hands-on, not just slides)', de: 'Team-Training (Hands-on, nicht nur Slides)' },
      ],
      timeCommitment: { en: '12-16 hours', de: '12-16 Stunden' },
    },
    {
      title: { en: 'WEEK 4-6: VALIDATE', de: 'WOCHE 4-6: VALIDIEREN' },
      whatWeDo: [
        { en: 'Track metrics (ARR Growth, Win Rate, Pipeline)', de: 'Tracke Metriken (ARR-Wachstum, Win Rate, Pipeline)' },
        { en: 'Validate impact (is the fix working?)', de: 'Validiere Impact (funktioniert der Fix?)' },
        { en: 'Scale preparation (playbooks, documentation)', de: 'Skalierungs-Vorbereitung (Playbooks, Dokumentation)' },
      ],
      whatYouGet: [
        { en: 'Metrics Dashboard (real-time tracking)', de: 'Metriken-Dashboard (Echtzeit-Tracking)' },
        { en: 'Validated outcomes (with before/after data)', de: 'Validierte Ergebnisse (mit Vorher/Nachher-Daten)' },
        { en: 'Scale Playbook (step-by-step guide for your team)', de: 'Scale Playbook (Schritt-für-Schritt-Anleitung für dein Team)' },
      ],
      timeCommitment: { en: '6-8 hours', de: '6-8 Stunden' },
    },
  ];

  const riskSharing = {
    primaryMetrics: [
      { en: 'ARR Growth Rate (YoY %)', de: 'ARR-Wachstumsrate (YoY %)' },
      { en: 'Win Rate (%)', de: 'Win Rate (%)' },
      { en: 'Pipeline (€ value)', de: 'Pipeline (€-Wert)' },
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
    { en: 'Your growth has stalled: ARR growth dropped from 100%+ to <80% YoY', de: 'Dein Wachstum ist stagniert: ARR-Wachstum von 100%+ auf <80% YoY gefallen' },
    { en: 'You have a growth engine (but it\'s not performing): Sales team (5+ people), pipeline (but low conversion), PMF (but slowing)', de: 'Du hast eine Growth Engine (aber sie performt nicht): Sales Team (5+ Leute), Pipeline (aber niedrige Conversion), PMF (aber verlangsamend)' },
    { en: 'You\'re Series A-D, €10M-€50M ARR with a team of 20-200 people', de: 'Du bist Series A-D, €10M-€50M ARR mit einem Team von 20-200 Leuten' },
    { en: 'You\'re willing to execute: Commit 8-12 hours/week for 4-6 weeks, give us data access', de: 'Du bist bereit zu exekutieren: 8-12 Stunden/Woche für 4-6 Wochen committen, uns Datenzugang geben' },
    { en: 'You have budget (€23.6K): ROI is 15-30x based on typical outcomes', de: 'Du hast Budget (€23.6K): ROI ist 15-30x basierend auf typischen Ergebnissen' },
  ];

  const notFor = [
    { en: 'You\'re pre-revenue or pre-Series A: Power Up is for companies with existing revenue engines. Better fit: Expert Session (€490, 45-90 min)', de: 'Du bist Pre-Revenue oder Pre-Series A: Power Up ist für Unternehmen mit bestehenden Revenue Engines. Besser geeignet: Expert Session (€490, 45-90 Min.)' },
    { en: 'You need a full transformation (not a quick fix): If you need to rebuild your entire GTM (6-12 months). Better fit: Boost (90 days, €60K+) or Accelerate (12 months)', de: 'Du brauchst eine volle Transformation (keinen Quick Fix): Wenn du dein gesamtes GTM neu aufbauen musst (6-12 Monate). Besser geeignet: Boost (90 Tage, €60K+) oder Accelerate (12 Monate)' },
    { en: 'You\'re not ready to execute: If you just want a strategy deck (not hands-on implementation). Better fit: Traditional consulting', de: 'Du bist nicht bereit zu exekutieren: Wenn du nur ein Strategy Deck willst (keine Hands-on Implementierung). Besser geeignet: Traditionelles Consulting' },
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
              ? 'Power Up: Growth Momentum funktioniert am besten für Unternehmen in dieser Situation.'
              : 'Power Up: Growth Momentum works best for companies in this situation.'}
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
                  ? 'Nicht sicher, ob das der richtige Fit ist? Buche einen kostenlosen 30-Min. Inflection Call. Wir diagnostizieren deine Situation und empfehlen den besten Weg nach vorn (auch wenn es nicht Power Up ist).'
                  : "Not sure if this is the right fit? Book a free 30-min Inflection Call. We'll diagnose your situation and recommend the best path forward (even if it's not Power Up)."}
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
      a: { en: "We measure outcomes (ARR Growth, Win Rate, Pipeline). If we don't hit agreed targets, we'll extend the sprint at no extra cost.", de: 'Wir messen Ergebnisse (ARR-Wachstum, Win Rate, Pipeline). Wenn wir vereinbarte Ziele nicht erreichen, verlängern wir den Sprint ohne Zusatzkosten.' },
    },
    {
      q: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' },
      a: { en: "Yes. We'll connect you with a CEO who's worked with us (same stage, same challenge).", de: 'Ja. Wir verbinden dich mit einem CEO, der mit uns gearbeitet hat (gleiche Stage, gleiche Herausforderung).' },
    },
    {
      q: { en: "What's the ROI?", de: 'Was ist der ROI?' },
      a: { en: 'Typical ROI is 15-30x (based on ARR Growth impact over 12 months).', de: 'Typischer ROI ist 15-30x (basierend auf ARR-Wachstums-Impact über 12 Monate).' },
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
            {language === 'de' ? 'Bereit, deine Growth Engine neu zu entfachen?' : 'Ready to Reignite Your Growth Engine?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Starte mit einem kostenlosen Inflection Call (30 Min.). Wir diagnostizieren deinen Growth-Engpass und empfehlen die richtige Lösung (Power Up, Boost, Accelerate oder DIY).'
              : "Start with a free Inflection Call (30 min). We'll diagnose your growth bottleneck and recommend the right solution (Power Up, Boost, Accelerate, or DIY)."}
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
        <div className="flex flex-wrap justify-center gap-6 animate-fade-in mb-16" style={{ animationDelay: '0.4s' }}>
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              <span>{language === 'de' ? badge.de : badge.en}</span>
            </div>
          ))}
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
// MAIN PAGE COMPONENT
// ============================================================================
const PowerUpGrowthMomentum: React.FC = () => {
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

export default PowerUpGrowthMomentum;
