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
  Settings,
  BarChart3,
  Search,
  Wrench,
  CheckCircle,
  Users,
  Calendar,
  Layers,
  Activity,
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
    { value: '+50-100%', label: { en: 'Decision Velocity', de: 'Decision Velocity' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
    { value: '-15-25pp', label: { en: 'Operational Debt', de: 'Operational Debt' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
    { value: '+30-50%', label: { en: 'ARR/Employee', de: 'ARR/Employee' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
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
              <span className="text-foreground font-medium">Power Up Scaling Velocity</span>
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
          <span className="block text-foreground">Scaling Chaos →</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? '10x Ready' : '10x Ready'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Entsperre deine Scaling Velocity in 4-6 Wochen. Typische Ergebnisse: Decision Velocity +50-100%, Operational Debt -15-25pp, ARR/Employee +30-50% – mit ergebnisbasierter Risikoteilung.'
            : 'Unlock your scaling velocity in 4-6 weeks. Typical outcomes: Decision Velocity +50-100%, Operational Debt -15-25pp, ARR/Employee +30-50%—with outcome-based risk sharing.'}
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
    { en: 'Decision velocity collapsed: 1 day → 7 days (7x slower), trending worse', de: 'Decision Velocity eingebrochen: 1 Tag → 7 Tage (7x langsamer), verschlechtert sich' },
    { en: 'Meeting overload: 10/week → 30/week (+200%), productivity down', de: 'Meeting-Overload: 10/Woche → 30/Woche (+200%), Produktivität sinkt' },
    { en: 'Operational debt high: 50%+ (processes undocumented, workflows manual)', de: 'Operational Debt hoch: 50%+ (Prozesse undokumentiert, Workflows manuell)' },
    { en: 'ARR/Employee dropping: €200K → €150K (-25%), efficiency declining', de: 'ARR/Employee sinkt: €200K → €150K (-25%), Effizienz nimmt ab' },
    { en: 'Coordination chaos: 5 tools → 25 tools, no single source of truth', de: 'Koordinations-Chaos: 5 Tools → 25 Tools, keine Single Source of Truth' },
  ];

  const realCosts = [
    { en: 'Destroys efficiency (ARR/Employee drops, need more people for same output)', de: 'Zerstört Effizienz (ARR/Employee sinkt, braucht mehr Leute für gleichen Output)' },
    { en: "Limits growth potential (can't scale to 200+ people with current systems)", de: 'Begrenzt Wachstumspotenzial (kann nicht auf 200+ Leute skalieren mit aktuellen Systemen)' },
    { en: 'Weakens competitive position (competitors with better ops move faster)', de: 'Schwächt Wettbewerbsposition (Wettbewerber mit besseren Ops bewegen sich schneller)' },
    { en: 'Burns out top talent (best people leave when chaos is too high)', de: 'Brennt Top-Talente aus (beste Leute gehen, wenn Chaos zu hoch ist)' },
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
            {language === 'de' ? 'Du steckst im Scaling Chaos' : "You're Stuck in Scaling Chaos"}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Dein Team ist von 50 auf 100 Leute gewachsen – aber die Velocity ist um 50% gesunken. Entscheidungen, die 1 Tag brauchten, dauern jetzt 7 Tage. Meetings sind von 10/Woche auf 30/Woche explodiert. Dein Operational Debt liegt bei 50%+ (Prozesse undokumentiert, Workflows manuell). Und das Schlimmste – du weißt nicht, welchen Engpass du zuerst beheben sollst.'
              : "Your team has grown from 50 to 100 people—but velocity has dropped 50%. Decisions that took 1 day now take 7 days. Meetings have exploded from 10/week to 30/week. Your operational debt is at 50%+ (processes undocumented, workflows manual). And worst of all—you don't know which bottleneck to fix first."}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Das Board fragt: "Warum sinkt ARR/Employee?" Deine Investoren sind besorgt über Effizienz. Dein Team ist frustriert ("zu viele Meetings, nicht genug Execution"). Und du weißt, wenn du das nicht reparierst, wirst du nie auf 200+ Leute skalieren.'
              : 'The board is asking: "Why is ARR/Employee dropping?" Your investors are concerned about efficiency. Your team is frustrated ("too many meetings, not enough execution"). And you know that if you don\'t fix this, you\'ll never scale to 200+ people.'}
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
              ? 'Es geht nicht nur darum, langsam zu sein. Jedes Quartal mit Scaling Chaos:'
              : "This isn't just about being slow. Every quarter with scaling chaos:"}
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
              ? 'Du musst deine Scaling Velocity entsperren. Schnell.'
              : 'You need to unlock your scaling velocity. Fast.'}
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
        { en: 'Decision Velocity Analysis: Why do decisions take 7 days? (too many layers, unclear ownership?)', de: 'Decision Velocity Analyse: Warum dauern Entscheidungen 7 Tage? (zu viele Ebenen, unklare Ownership?)' },
        { en: 'Operational Debt Analysis: What\'s undocumented? (50%+ processes manual?)', de: 'Operational Debt Analyse: Was ist undokumentiert? (50%+ Prozesse manuell?)' },
        { en: 'Coordination Analysis: Why so many meetings? (30/week, no async workflows?)', de: 'Koordinations-Analyse: Warum so viele Meetings? (30/Woche, keine async Workflows?)' },
        { en: 'Efficiency Analysis: Why is ARR/Employee dropping? (€200K → €150K?)', de: 'Effizienz-Analyse: Warum sinkt ARR/Employee? (€200K → €150K?)' },
      ],
      deliverable: { en: 'Scaling Bottleneck Report (15-20 pages) with root cause analysis', de: 'Scaling Bottleneck Report (15-20 Seiten) mit Root-Cause-Analyse' },
      color: 'from-violet-500 to-purple-600',
    },
    {
      number: '2',
      title: { en: 'Fix the Bottleneck', de: 'Den Engpass beheben' },
      timeline: { en: 'Week 2-4', de: 'Woche 2-4' },
      icon: Wrench,
      items: [
        { en: 'Option A: Decision Framework – Redesign decision-making (RACI framework, decision rights), implement AI-powered decision tracking', de: 'Option A: Decision Framework – Entscheidungsfindung redesignen (RACI Framework, Decision Rights), AI-gestütztes Decision Tracking' },
        { en: 'Option B: Process Standardization – Document 20-30 core processes (80/20 rule), implement workflow automation', de: 'Option B: Process Standardization – 20-30 Kernprozesse dokumentieren (80/20 Regel), Workflow-Automatisierung implementieren' },
        { en: 'Option C: Org Design – Redesign org structure (reduce layers, clarify ownership), implement async workflows', de: 'Option C: Org Design – Org-Struktur redesignen (Ebenen reduzieren, Ownership klären), async Workflows implementieren' },
      ],
      deliverable: { en: 'Implemented scaling system (live in your tools, not a slide deck)', de: 'Implementiertes Scaling System (live in deinen Tools, nicht ein Slide Deck)' },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '3',
      title: { en: 'Validate & Scale', de: 'Validieren & Skalieren' },
      timeline: { en: 'Week 4-6', de: 'Woche 4-6' },
      icon: CheckCircle,
      items: [
        { en: 'Metrics Tracking: Decision Velocity, Operational Debt, ARR/Employee, Meeting Load', de: 'Metriken-Tracking: Decision Velocity, Operational Debt, ARR/Employee, Meeting Load' },
        { en: 'Leadership Training: Leadership team trained on new systems', de: 'Leadership-Training: Leadership Team auf neuen Systemen geschult' },
        { en: 'Team Communication: Rollout plan, change management, documentation', de: 'Team-Kommunikation: Rollout-Plan, Change Management, Dokumentation' },
      ],
      deliverable: { en: 'Validated scaling system + team enablement', de: 'Validiertes Scaling System + Team Enablement' },
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  const differentiators = [
    { en: 'Hands-on execution (not just strategy slides)', de: 'Hands-on Execution (nicht nur Strategie-Slides)' },
    { en: 'AI-native tools (decision tracking, workflow automation, process library)', de: 'AI-native Tools (Decision Tracking, Workflow-Automatisierung, Process Library)' },
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
              ? 'So entsperren wir deine Scaling Velocity'
              : 'How We Unlock Your Scaling Velocity'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Wir fügen nicht einfach mehr Prozesse hinzu. Wir beheben deinen #1 Scaling Engpass – das eine, was dich davon abhält, auf 200+ Leute zu skalieren.'
              : "We don't just add more process. We fix your #1 scaling bottleneck—the one thing preventing you from scaling to 200+ people."}
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
      id: 'decision-velocity',
      value: '+50-100%',
      title: { en: 'Decision Velocity Increase', de: 'Decision Velocity Steigerung' },
      example: { en: 'Example: 7d → 2-3d', de: 'Beispiel: 7d → 2-3d' },
      impact: { en: '3x faster decisions = 3x faster execution', de: '3x schnellere Entscheidungen = 3x schnellere Execution' },
      why: { en: 'We implement a decision framework (RACI, decision rights) and AI-powered decision tracking—so everyone knows who decides what, and decisions move from 7 days to 2-3 days.', de: 'Wir implementieren ein Decision Framework (RACI, Decision Rights) und AI-gestütztes Decision Tracking – so weiß jeder, wer was entscheidet, und Entscheidungen bewegen sich von 7 Tagen auf 2-3 Tage.' },
    },
    {
      id: 'operational-debt',
      value: '-15-25pp',
      title: { en: 'Operational Debt Reduction', de: 'Operational Debt Reduktion' },
      example: { en: 'Example: 50% → 30%', de: 'Beispiel: 50% → 30%' },
      impact: { en: '-40% operational debt = 2x more scalable', de: '-40% Operational Debt = 2x skalierbarer' },
      why: { en: 'We document 20-30 core processes (80/20 rule) and implement workflow automation—so your team can scale from 100 to 200+ people without proportional chaos increase.', de: 'Wir dokumentieren 20-30 Kernprozesse (80/20 Regel) und implementieren Workflow-Automatisierung – so kann dein Team von 100 auf 200+ Leute skalieren ohne proportionale Chaos-Zunahme.' },
    },
    {
      id: 'arr-employee',
      value: '+30-50%',
      title: { en: 'ARR/Employee Increase', de: 'ARR/Employee Steigerung' },
      example: { en: 'Example: €150K → €200K', de: 'Beispiel: €150K → €200K' },
      impact: { en: '+€5M ARR from same team size', de: '+€5M ARR von derselben Teamgröße' },
      why: { en: 'We reduce coordination costs (meetings -50%, tools -60%) and automate workflows—so your team spends more time on revenue-generating activities and less time on coordination.', de: 'Wir reduzieren Koordinationskosten (Meetings -50%, Tools -60%) und automatisieren Workflows – so verbringt dein Team mehr Zeit mit Revenue-generierenden Aktivitäten und weniger Zeit mit Koordination.' },
    },
  ];

  const caseStudy = {
    company: { en: 'Series B SaaS, €30M ARR, 100 employees', de: 'Series B SaaS, €30M ARR, 100 Mitarbeiter' },
    challenge: { en: 'Decision Velocity 7 days, Operational Debt 55%, ARR/Employee €150K', de: 'Decision Velocity 7 Tage, Operational Debt 55%, ARR/Employee €150K' },
    bottleneck: { en: 'No decision framework (unclear ownership, too many layers)', de: 'Kein Decision Framework (unklare Ownership, zu viele Ebenen)' },
    fix: { en: 'Decision framework + process standardization (5 weeks)', de: 'Decision Framework + Process Standardization (5 Wochen)' },
    outcomes: [
      { label: { en: 'Decision Velocity', de: 'Decision Velocity' }, value: '+67% (7d → 2d)' },
      { label: { en: 'Operational Debt', de: 'Operational Debt' }, value: '-20pp (55% → 35%)' },
      { label: { en: 'ARR/Employee', de: 'ARR/Employee' }, value: '+40% (€150K → €210K)' },
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
              ? 'In 30 Minuten diagnostizieren wir deinen Scaling Engpass und zeigen dir genau, wie wir ihn beheben würden. Kein Pitch, kein Druck – nur Klarheit.'
              : "In 30 minutes, we'll diagnose your scaling bottleneck and show you exactly how we'd fix it. No pitch, no pressure—just clarity."}
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
        { en: 'Decision Velocity Analysis (why 7 days?)', de: 'Decision Velocity Analyse (warum 7 Tage?)' },
        { en: 'Operational Debt Analysis (what\'s undocumented?)', de: 'Operational Debt Analyse (was ist undokumentiert?)' },
        { en: 'Coordination Analysis (why 30 meetings/week?)', de: 'Koordinations-Analyse (warum 30 Meetings/Woche?)' },
        { en: 'Efficiency Analysis (why ARR/Employee dropping?)', de: 'Effizienz-Analyse (warum ARR/Employee sinkt?)' },
      ],
      whatYouGet: [
        { en: 'Scaling Bottleneck Report (15-20 pages)', de: 'Scaling Bottleneck Report (15-20 Seiten)' },
        { en: 'Root Cause Analysis (with data)', de: 'Root-Cause-Analyse (mit Daten)' },
        { en: 'Fix Recommendation (1-3 options)', de: 'Fix-Empfehlung (1-3 Optionen)' },
      ],
      timeCommitment: { en: '8-12 hours', de: '8-12 Stunden' },
    },
    {
      title: { en: 'WEEK 2-4: FIX', de: 'WOCHE 2-4: FIX' },
      whatWeDo: [
        { en: 'Implement #1 fix (decision framework, process standardization, or org design)', de: 'Implementiere #1 Fix (Decision Framework, Process Standardization oder Org Design)' },
        { en: 'Build AI-native tools (decision tracking, workflow automation, process library)', de: 'Baue AI-native Tools (Decision Tracking, Workflow-Automatisierung, Process Library)' },
        { en: 'Train your leadership team (new systems, playbooks, workflows)', de: 'Trainiere dein Leadership Team (neue Systeme, Playbooks, Workflows)' },
      ],
      whatYouGet: [
        { en: 'Implemented scaling system (live in your tools)', de: 'Implementiertes Scaling System (live in deinen Tools)' },
        { en: 'AI-native tools (deployed, not just designed)', de: 'AI-native Tools (deployed, nicht nur designed)' },
        { en: 'Team training (hands-on, not just slides)', de: 'Team-Training (Hands-on, nicht nur Slides)' },
      ],
      timeCommitment: { en: '12-16 hours', de: '12-16 Stunden' },
    },
    {
      title: { en: 'WEEK 4-6: VALIDATE', de: 'WOCHE 4-6: VALIDIEREN' },
      whatWeDo: [
        { en: 'Track metrics (Decision Velocity, Operational Debt, ARR/Employee)', de: 'Tracke Metriken (Decision Velocity, Operational Debt, ARR/Employee)' },
        { en: 'Validate impact (is the fix working?)', de: 'Validiere Impact (funktioniert der Fix?)' },
        { en: 'Scale preparation (playbooks, documentation, rollout plan)', de: 'Scale-Vorbereitung (Playbooks, Dokumentation, Rollout-Plan)' },
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
      { en: 'Decision Velocity (days)', de: 'Decision Velocity (Tage)' },
      { en: 'Operational Debt (%)', de: 'Operational Debt (%)' },
      { en: 'ARR/Employee (€)', de: 'ARR/Employee (€)' },
    ],
    howWeMeasure: [
      { en: 'Baseline: Week 0 (before we start)', de: 'Baseline: Woche 0 (bevor wir starten)' },
      { en: 'Checkpoint: Week 4 (mid-sprint)', de: 'Checkpoint: Woche 4 (Mid-Sprint)' },
      { en: 'Final: Week 6 (end of sprint)', de: 'Final: Woche 6 (Ende des Sprints)' },
    ],
    riskMitigation: { 
      en: "If we don't hit agreed outcomes, we'll extend the sprint at no extra cost. Reference calls available (talk to COOs who've worked with us).",
      de: 'Wenn wir vereinbarte Ergebnisse nicht erreichen, verlängern wir den Sprint ohne Zusatzkosten. Referenzgespräche möglich (sprich mit COOs, die mit uns gearbeitet haben).'
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
    { en: "You're stuck in scaling chaos: Team grew 50 → 100+ people, but velocity dropped 50%. Decision velocity collapsed (1 day → 7 days).", de: 'Du steckst im Scaling Chaos: Team wuchs 50 → 100+ Leute, aber Velocity sank um 50%. Decision Velocity eingebrochen (1 Tag → 7 Tage).' },
    { en: "You have a scaling problem (but don't know the root cause): Is it decision-making? (too many layers, unclear ownership?) Is it operational debt? (50%+ processes undocumented?) Is it coordination? (30 meetings/week, too many tools?)", de: 'Du hast ein Scaling Problem (aber kennst die Ursache nicht): Ist es Entscheidungsfindung? (zu viele Ebenen, unklare Ownership?) Ist es Operational Debt? (50%+ Prozesse undokumentiert?) Ist es Koordination? (30 Meetings/Woche, zu viele Tools?)' },
    { en: "You're Series A-D, €10M-€50M ARR with a team (50-200 people)", de: 'Du bist Series A-D, €10M-€50M ARR mit einem Team (50-200 Leute)' },
    { en: "You're willing to execute: Your leadership team will commit 8-12 hours/week for 4-6 weeks, give us access to data (org chart, process docs, meeting calendars)", de: 'Du bist bereit zu exekutieren: Dein Leadership Team wird 8-12 Stunden/Woche für 4-6 Wochen committen, uns Datenzugang geben (Org Chart, Prozess-Docs, Meeting-Kalender)' },
    { en: 'You have budget (€23.6K): ROI is 15-30x based on typical outcomes', de: 'Du hast Budget (€23.6K): ROI ist 15-30x basierend auf typischen Ergebnissen' },
  ];

  const notFor = [
    { en: "You're pre-revenue or pre-Series A: Power Up is for companies with existing operations (not building from scratch). Better fit: Expert Session (€490, 45-90 min)", de: 'Du bist Pre-Revenue oder Pre-Series A: Power Up ist für Unternehmen mit bestehenden Operations (nicht von Grund auf neu). Besser geeignet: Expert Session (€490, 45-90 Min.)' },
    { en: 'You need a full operations transformation (not a quick fix): If you need to rebuild your entire operating system (6-12 months). Better fit: Boost (90 days, €60K-€78K) or Accelerate (12 months)', de: 'Du brauchst eine volle Operations-Transformation (keinen Quick Fix): Wenn du dein gesamtes Operating System neu aufbauen musst (6-12 Monate). Besser geeignet: Boost (90 Tage, €60K-€78K) oder Accelerate (12 Monate)' },
    { en: "You're not ready to execute: If you just want an operations strategy deck (not hands-on implementation). Better fit: Traditional consulting (McKinsey, BCG, Bain)", de: 'Du bist nicht bereit zu exekutieren: Wenn du nur ein Operations Strategy Deck willst (keine Hands-on Implementierung). Besser geeignet: Traditionelles Consulting (McKinsey, BCG, Bain)' },
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
              ? 'Power Up: Scaling Velocity funktioniert am besten für Unternehmen in dieser Situation.'
              : 'Power Up: Scaling Velocity works best for companies in this situation.'}
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
                  ? 'Nicht sicher, ob das der richtige Fit ist? Buche einen kostenlosen 30-Min. Inflection Call. Wir diagnostizieren deinen Scaling Engpass und empfehlen den besten Weg nach vorn (auch wenn es nicht Power Up ist).'
                  : "Not sure if this is the right fit? Book a free 30-min Inflection Call. We'll diagnose your scaling bottleneck and recommend the best path forward (even if it's not Power Up)."}
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
      a: { en: "We measure outcomes (Decision Velocity, Operational Debt, ARR/Employee). If we don't hit agreed targets, we'll extend the sprint at no extra cost.", de: 'Wir messen Ergebnisse (Decision Velocity, Operational Debt, ARR/Employee). Wenn wir vereinbarte Ziele nicht erreichen, verlängern wir den Sprint ohne Zusatzkosten.' },
    },
    {
      q: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' },
      a: { en: "Yes. We'll connect you with a COO who's worked with us (same stage, same challenge).", de: 'Ja. Wir verbinden dich mit einem COO, der mit uns gearbeitet hat (gleiche Stage, gleiche Herausforderung).' },
    },
    {
      q: { en: "What's the ROI?", de: 'Was ist der ROI?' },
      a: { en: 'Typical ROI is 15-30x (based on efficiency gains over 12 months).', de: 'Typischer ROI ist 15-30x (basierend auf Effizienz-Gewinnen über 12 Monate).' },
    },
    {
      q: { en: 'Do you work with our tools?', de: 'Arbeitet ihr mit unseren Tools?' },
      a: { en: 'Yes. We integrate with Notion, Confluence, Asana, Monday.com, and custom process management systems.', de: 'Ja. Wir integrieren mit Notion, Confluence, Asana, Monday.com und individuellen Process-Management-Systemen.' },
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
            {language === 'de' ? 'Bereit, deine Scaling Velocity zu entsperren?' : 'Ready to Unlock Your Scaling Velocity?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Starte mit einem kostenlosen Inflection Call (30 Min.). Wir diagnostizieren deinen Scaling Engpass und empfehlen die richtige Lösung (Power Up, Boost, Accelerate oder DIY).'
              : "Start with a free Inflection Call (30 min). We'll diagnose your scaling bottleneck and recommend the right solution (Power Up, Boost, Accelerate, or DIY)."}
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
          ></div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full">
              <Check className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground">{language === 'de' ? badge.de : badge.en}</span>
            </div>
          ))}
        </div>

        {/* Alternative CTA */}
        <div className="text-center mb-16 animate-slide-up p-6 bg-card border-2 border-border rounded-lg max-w-2xl mx-auto" style={{ animationDelay: '0.4s' }}>
          <h3 className="font-bold text-lg text-foreground mb-2">
            {language === 'de' ? 'Alternative: Expert Session starten' : 'Alternative: Start with an Expert Session'}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {language === 'de'
              ? 'Noch nicht bereit für ein volles Power Up? Starte kleiner:'
              : 'Not ready for a full Power Up? Start smaller:'}
          </p>
          <p className="text-sm text-foreground mb-4">
            <strong>Expert Session: Scaling Velocity</strong> (45-90 min, €490-€890)
          </p>
          <Button
            variant="outline"
            onClick={() => window.open('https://calendly.com/michel-scalingx/expert-session', '_blank')}
          >
            {language === 'de' ? 'Expert Session buchen' : 'Book Expert Session'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="font-bold text-lg text-center mb-8 text-foreground">FAQ</h3>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-card border-2 border-border px-6">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left font-medium">{language === 'de' ? faq.q.de : faq.q.en}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {language === 'de' ? faq.a.de : faq.a.en}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Final Subtext */}
        <div className="text-center mt-12">
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
const PowerUpScalingVelocity: React.FC = () => {
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

export default PowerUpScalingVelocity;
