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
  Sparkles,
  Bot,
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
    { value: '+20-30%', label: { en: 'AI Maturity', de: 'AI Maturity' }, sublabel: { en: 'AI Maturity Score', de: 'AI Maturity Score' } },
    { value: '3-5', label: { en: 'AI Use Cases', de: 'AI Use Cases' }, sublabel: { en: 'Live in prod', de: 'Live in Prod' } },
    { value: '+30-50%', label: { en: 'Speed Boost', de: 'Speed Boost' }, sublabel: { en: 'Operations', de: 'Operations' } },
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
              <span className="text-foreground font-medium">Power Up AI Quick Wins</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Badge */}
        <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Sparkles className="w-4 h-4 mr-2" />
          Power Up · 4-6 {language === 'de' ? 'Wochen' : 'Weeks'} · {language === 'de' ? 'Ab' : 'From'} €23.6K
        </Badge>

        {/* Headline */}
        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">AI Laggard →</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            AI-Powered
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Hol dir deine ersten AI-Erfolge in 4-6 Wochen. Typische Ergebnisse: AI Maturity +20-30%, 3-5 AI Use Cases implementiert, Operations Speed +30-50% – mit ergebnisbasierter Risikoteilung.'
            : 'Get your first AI wins in 4-6 weeks. Typical outcomes: AI Maturity +20-30%, 3-5 AI Use Cases Implemented, Operations Speed +30-50%—with outcome-based risk sharing.'}
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
    { en: 'Low AI maturity: AI Maturity Score 30% (benchmark: 70%+), far behind competitors', de: 'Niedrige AI Maturity: AI Maturity Score 30% (Benchmark: 70%+), weit hinter Wettbewerbern' },
    { en: 'No AI use cases: 0 implemented (benchmark: 10+), still fully manual', de: 'Keine AI Use Cases: 0 implementiert (Benchmark: 10+), noch voll manuell' },
    { en: 'No AI tools: 0 deployed (benchmark: 5+), no AI in operations', de: 'Keine AI Tools: 0 deployed (Benchmark: 5+), keine AI in Operations' },
    { en: 'Competitor gap: 3-5x slower than AI-native competitors', de: 'Wettbewerber-Lücke: 3-5x langsamer als AI-native Wettbewerber' },
    { en: 'Board pressure: "When will we be AI-native?" (no clear answer)', de: 'Board-Druck: "Wann werden wir AI-native?" (keine klare Antwort)' },
  ];

  const realCosts = [
    { en: 'Destroys competitive advantage (competitors 3-5x faster with AI)', de: 'Zerstört Wettbewerbsvorteil (Wettbewerber 3-5x schneller mit AI)' },
    { en: 'Limits efficiency gains (manual work when AI could automate 50%+)', de: 'Begrenzt Effizienzgewinne (manuelle Arbeit wenn AI 50%+ automatisieren könnte)' },
    { en: 'Weakens talent retention (best engineers want to work with AI)', de: 'Schwächt Talent Retention (beste Engineers wollen mit AI arbeiten)' },
    { en: 'Increases disruption risk (AI-native startups are eating your lunch)', de: 'Erhöht Disruption-Risiko (AI-native Startups überholen dich)' },
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
            {language === 'de' ? 'Du fällst bei AI zurück' : "You're Falling Behind on AI"}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Dein AI Maturity Score liegt bei 30% (Benchmark: 70%+). Deine Wettbewerber bewegen sich 3-5x schneller mit AI-powered Operations. Dein Team hat keine AI-Strategie (keine Use Cases, keine Tools, keine Roadmap). Und das Schlimmste – das Board fragt: "Wann werden wir AI-native?"'
              : 'Your AI Maturity Score is at 30% (benchmark: 70%+). Your competitors are moving 3-5x faster with AI-powered operations. Your team has no AI strategy (no use cases, no tools, no roadmap). And worst of all—the board is asking: "When will we be AI-native?"'}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Der Druck ist real. Jedes Quartal ohne AI-Fortschritt: Deine Wettbewerber ziehen weiter weg, deine Effizienzlücke wächst, dein Talent ist frustriert, dein Board ist besorgt.'
              : 'The pressure is real. Every quarter without AI progress: Your competitors pull further ahead, your efficiency gap widens, your talent is frustrated, your board is concerned.'}
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
              ? 'Es geht nicht nur darum, langsam zu sein. Jedes Quartal ohne AI:'
              : "This isn't just about being slow. Every quarter without AI:"}
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
              ? 'Du brauchst AI Quick Wins. Schnell.'
              : 'You need AI quick wins. Fast.'}
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
      title: { en: 'Identify High-Impact Use Cases', de: 'High-Impact Use Cases identifizieren' },
      timeline: { en: 'Week 1-2', de: 'Woche 1-2' },
      icon: Search,
      items: [
        { en: 'AI Maturity Assessment: Where are you today? (AI Maturity baseline, 0-100% scale)', de: 'AI Maturity Assessment: Wo stehst du heute? (AI Maturity Baseline, 0-100% Skala)' },
        { en: 'Operations Analysis: What\'s manual that could be AI-powered? (workflows, processes)', de: 'Operations Analyse: Was ist manuell, das AI-powered sein könnte? (Workflows, Prozesse)' },
        { en: 'Quick Win Identification: Which AI use cases deliver fastest ROI? (3-5 candidates)', de: 'Quick Win Identifikation: Welche AI Use Cases liefern schnellsten ROI? (3-5 Kandidaten)' },
        { en: 'Tool Selection: Which AI tools fit your stack? (no-code, low-code, custom)', de: 'Tool-Auswahl: Welche AI Tools passen zu deinem Stack? (No-Code, Low-Code, Custom)' },
      ],
      deliverable: { en: 'AI Quick Wins Report (15-20 pages) with 3-5 prioritized use cases', de: 'AI Quick Wins Report (15-20 Seiten) mit 3-5 priorisierten Use Cases' },
      color: 'from-violet-500 to-purple-600',
    },
    {
      number: '2',
      title: { en: 'Implement 3-5 Use Cases', de: '3-5 Use Cases implementieren' },
      timeline: { en: 'Week 2-4', de: 'Woche 2-4' },
      icon: Wrench,
      items: [
        { en: 'AI-powered lead scoring (increase win rate by 30-50%)', de: 'AI-powered Lead Scoring (Win Rate +30-50%)' },
        { en: 'AI-powered customer support (reduce response time by 60-80%)', de: 'AI-powered Customer Support (Response Time -60-80%)' },
        { en: 'AI-powered content generation (10x content production speed)', de: 'AI-powered Content Generation (10x Content Production Speed)' },
        { en: 'AI-powered data analysis (reduce reporting time from days to hours)', de: 'AI-powered Data Analysis (Reporting Zeit von Tagen auf Stunden)' },
        { en: 'AI-powered workflow automation (automate 50%+ of manual tasks)', de: 'AI-powered Workflow Automation (50%+ manuelle Tasks automatisieren)' },
      ],
      deliverable: { en: '3-5 AI use cases live in production (not POC)', de: '3-5 AI Use Cases live in Production (nicht POC)' },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '3',
      title: { en: 'Measure & Scale', de: 'Messen & Skalieren' },
      timeline: { en: 'Week 4-6', de: 'Woche 4-6' },
      icon: CheckCircle,
      items: [
        { en: 'Metrics Tracking: AI Maturity improvement, speed gains, efficiency gains', de: 'Metriken-Tracking: AI Maturity Verbesserung, Speed Gains, Efficiency Gains' },
        { en: 'Team Training: Team trained on AI tools and workflows', de: 'Team-Training: Team auf AI Tools und Workflows geschult' },
        { en: 'AI Roadmap: Next 5-10 use cases prioritized (for next 6-12 months)', de: 'AI Roadmap: Nächste 5-10 Use Cases priorisiert (für die nächsten 6-12 Monate)' },
      ],
      deliverable: { en: 'Validated AI wins + AI roadmap for scaling', de: 'Validierte AI Wins + AI Roadmap für Skalierung' },
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  const differentiators = [
    { en: 'Hands-on implementation (not just strategy slides)', de: 'Hands-on Implementierung (nicht nur Strategie-Slides)' },
    { en: 'Real AI in production (3-5 use cases live, not POC)', de: 'Echte AI in Production (3-5 Use Cases live, nicht POC)' },
    { en: 'Outcome-based risk sharing (we measure θ_index improvement)', de: 'Ergebnisbasierte Risikoteilung (wir messen θ_index Verbesserung)' },
    { en: '4-6 week sprint (fast wins, no long-term lock-in)', de: '4-6 Wochen Sprint (schnelle Wins, keine langfristige Bindung)' },
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
              ? 'So liefern wir deine ersten AI-Erfolge'
              : 'How We Deliver Your First AI Wins'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Wir erstellen nicht nur AI-Strategy-Decks. Wir identifizieren und implementieren 3-5 High-Impact AI Use Cases – damit du echte AI Wins in 4-6 Wochen hast.'
              : "We don't just create AI strategy decks. We identify and implement 3-5 high-impact AI use cases—so you have real AI wins in 4-6 weeks."}
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
      id: 'ai-maturity',
      value: '+0.2-0.3',
      title: { en: 'θ_index Improvement', de: 'θ_index Verbesserung' },
      example: { en: 'Example: 0.3 → 0.5-0.6', de: 'Beispiel: 0.3 → 0.5-0.6' },
      impact: { en: 'From "AI laggard" to "AI-powered" in 4-6 weeks', de: 'Von "AI Laggard" zu "AI-Powered" in 4-6 Wochen' },
      why: { en: 'We implement 3-5 AI use cases in production—which moves you from "no AI" (0.3) to "AI-powered" (0.5-0.6) on the maturity scale.', de: 'Wir implementieren 3-5 AI Use Cases in Production – was dich von "no AI" (0.3) zu "AI-powered" (0.5-0.6) auf der Maturity-Skala bewegt.' },
    },
    {
      id: 'use-cases',
      value: '3-5',
      title: { en: 'AI Use Cases Implemented', de: 'AI Use Cases implementiert' },
      example: { en: 'Live in production, not POC', de: 'Live in Production, nicht POC' },
      impact: { en: 'Real AI in production, not just strategy', de: 'Echte AI in Production, nicht nur Strategie' },
      why: { en: "We don't just create strategy decks—we implement AI. In 4-6 weeks, you have 3-5 use cases live in your systems, generating real value.", de: 'Wir erstellen nicht nur Strategy-Decks – wir implementieren AI. In 4-6 Wochen hast du 3-5 Use Cases live in deinen Systemen, die echten Wert generieren.' },
    },
    {
      id: 'operations-speed',
      value: '+30-50%',
      title: { en: 'Operations Speed Increase', de: 'Operations Speed Steigerung' },
      example: { en: 'Example: 5+ hours/day freed up', de: 'Beispiel: 5+ Stunden/Tag freigesetzt' },
      impact: { en: 'More time for high-value work', de: 'Mehr Zeit für hochwertige Arbeit' },
      why: { en: 'We automate manual workflows with AI—so your team spends less time on repetitive tasks and more time on high-value work.', de: 'Wir automatisieren manuelle Workflows mit AI – so verbringt dein Team weniger Zeit mit repetitiven Aufgaben und mehr Zeit mit hochwertiger Arbeit.' },
    },
  ];

  const caseStudy = {
    company: { en: 'Series B SaaS, €25M ARR, 80 employees', de: 'Series B SaaS, €25M ARR, 80 Mitarbeiter' },
    challenge: { en: 'θ_index 0.3, no AI use cases, competitors 3x faster', de: 'θ_index 0.3, keine AI Use Cases, Wettbewerber 3x schneller' },
    useCases: { en: 'AI lead scoring, AI support, AI content generation, AI data analysis, AI workflow automation', de: 'AI Lead Scoring, AI Support, AI Content Generation, AI Data Analysis, AI Workflow Automation' },
    outcomes: [
      { label: { en: 'θ_index', de: 'θ_index' }, value: '+0.3 (0.3 → 0.6)' },
      { label: { en: 'AI Use Cases', de: 'AI Use Cases' }, value: '5 live' },
      { label: { en: 'Operations Speed', de: 'Operations Speed' }, value: '+45%' },
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
                  {language === 'de' ? 'Implementierte Use Cases:' : 'Use Cases Implemented:'}
                </span>
                <p className="text-sm text-foreground">{language === 'de' ? caseStudy.useCases.de : caseStudy.useCases.en}</p>
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
              ? 'In 30 Minuten bewerten wir deine AI Maturity und zeigen dir genau, welche 3-5 Use Cases wir implementieren würden. Kein Pitch, kein Druck – nur Klarheit.'
              : "In 30 minutes, we'll assess your AI maturity and show you exactly which 3-5 use cases we'd implement. No pitch, no pressure—just clarity."}
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
        { en: 'AI Maturity Assessment (θ_index baseline)', de: 'AI Maturity Assessment (θ_index Baseline)' },
        { en: 'Operations Analysis (what\'s manual?)', de: 'Operations Analyse (was ist manuell?)' },
        { en: 'Quick Win Identification (3-5 AI use cases)', de: 'Quick Win Identifikation (3-5 AI Use Cases)' },
        { en: 'Tool Selection (which AI tools fit your stack?)', de: 'Tool-Auswahl (welche AI Tools passen zu deinem Stack?)' },
      ],
      whatYouGet: [
        { en: 'AI Quick Wins Report (15-20 pages)', de: 'AI Quick Wins Report (15-20 Seiten)' },
        { en: '3-5 Prioritized Use Cases (with ROI estimates)', de: '3-5 priorisierte Use Cases (mit ROI-Schätzungen)' },
        { en: 'Tool Recommendations (specific AI tools)', de: 'Tool-Empfehlungen (spezifische AI Tools)' },
      ],
      timeCommitment: { en: '8-12 hours', de: '8-12 Stunden' },
    },
    {
      title: { en: 'WEEK 2-4: IMPLEMENT', de: 'WOCHE 2-4: IMPLEMENTIEREN' },
      whatWeDo: [
        { en: 'Implement 3-5 AI use cases (live in production)', de: 'Implementiere 3-5 AI Use Cases (live in Production)' },
        { en: 'Deploy AI tools (integrated with your systems)', de: 'Deploye AI Tools (integriert mit deinen Systemen)' },
        { en: 'Train your team (hands-on, not just slides)', de: 'Trainiere dein Team (Hands-on, nicht nur Slides)' },
      ],
      whatYouGet: [
        { en: '3-5 AI use cases live (in production, not POC)', de: '3-5 AI Use Cases live (in Production, nicht POC)' },
        { en: 'AI tools deployed (integrated, not standalone)', de: 'AI Tools deployed (integriert, nicht standalone)' },
        { en: 'Team training (hands-on workshops)', de: 'Team-Training (Hands-on Workshops)' },
      ],
      timeCommitment: { en: '12-16 hours', de: '12-16 Stunden' },
    },
    {
      title: { en: 'WEEK 4-6: MEASURE', de: 'WOCHE 4-6: MESSEN' },
      whatWeDo: [
        { en: 'Track metrics (θ_index, speed gains, efficiency gains)', de: 'Tracke Metriken (θ_index, Speed Gains, Efficiency Gains)' },
        { en: 'Validate impact (are the use cases working?)', de: 'Validiere Impact (funktionieren die Use Cases?)' },
        { en: 'Create AI roadmap (next 5-10 use cases)', de: 'Erstelle AI Roadmap (nächste 5-10 Use Cases)' },
      ],
      whatYouGet: [
        { en: 'Metrics Dashboard (real-time tracking)', de: 'Metriken-Dashboard (Echtzeit-Tracking)' },
        { en: 'Validated outcomes (with before/after data)', de: 'Validierte Ergebnisse (mit Vorher/Nachher-Daten)' },
        { en: 'AI Roadmap (next 6-12 months)', de: 'AI Roadmap (nächste 6-12 Monate)' },
      ],
      timeCommitment: { en: '6-8 hours', de: '6-8 Stunden' },
    },
  ];

  const riskSharing = {
    primaryMetrics: [
      { en: 'θ_index (AI Maturity, 0-1)', de: 'θ_index (AI Maturity, 0-1)' },
      { en: 'AI Use Cases Implemented (#)', de: 'AI Use Cases implementiert (#)' },
      { en: 'Operations Speed (%)', de: 'Operations Speed (%)' },
    ],
    howWeMeasure: [
      { en: 'Baseline: Week 0 (before we start)', de: 'Baseline: Woche 0 (bevor wir starten)' },
      { en: 'Checkpoint: Week 4 (mid-sprint)', de: 'Checkpoint: Woche 4 (Mid-Sprint)' },
      { en: 'Final: Week 6 (end of sprint)', de: 'Final: Woche 6 (Ende des Sprints)' },
    ],
    riskMitigation: { 
      en: "If we don't hit agreed outcomes, we'll extend the sprint at no extra cost. Reference calls available (talk to CTOs who've worked with us).",
      de: 'Wenn wir vereinbarte Ergebnisse nicht erreichen, verlängern wir den Sprint ohne Zusatzkosten. Referenzgespräche möglich (sprich mit CTOs, die mit uns gearbeitet haben).'
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
    { en: "You're falling behind on AI: AI maturity is low (θ_index < 0.5), competitors are 3-5x faster with AI, you have 4-6 weeks to show AI progress.", de: 'Du fällst bei AI zurück: AI Maturity ist niedrig (θ_index < 0.5), Wettbewerber sind 3-5x schneller mit AI, du hast 4-6 Wochen um AI-Fortschritt zu zeigen.' },
    { en: "You have an AI problem (but don't know where to start): No AI use cases implemented (still fully manual), no AI tools deployed, no AI roadmap.", de: 'Du hast ein AI-Problem (aber weißt nicht, wo du anfangen sollst): Keine AI Use Cases implementiert (noch voll manuell), keine AI Tools deployed, keine AI Roadmap.' },
    { en: "You're Series A-D, €10M-€50M ARR with a team (50-200 people)", de: 'Du bist Series A-D, €10M-€50M ARR mit einem Team (50-200 Leute)' },
    { en: "You're willing to execute: Your team will commit 8-12 hours/week for 4-6 weeks, give us access to systems (to deploy AI tools)", de: 'Du bist bereit zu exekutieren: Dein Team wird 8-12 Stunden/Woche für 4-6 Wochen committen, uns Systemzugang geben (um AI Tools zu deployen)' },
    { en: 'You have budget (€23.6K): ROI is 15-30x based on typical outcomes', de: 'Du hast Budget (€23.6K): ROI ist 15-30x basierend auf typischen Ergebnissen' },
  ];

  const notFor = [
    { en: "You're already AI-native (θ_index > 0.7): Power Up is for companies getting started with AI (not already advanced). Better fit: Accelerate (12 months, €153K)", de: 'Du bist bereits AI-native (θ_index > 0.7): Power Up ist für Unternehmen, die mit AI starten (nicht bereits fortgeschritten). Besser geeignet: Accelerate (12 Monate, €153K)' },
    { en: 'You need a full AI transformation (not quick wins): If you need to become fully AI-native (6-12 months). Better fit: Boost (90 days, €60K-€78K) or Accelerate (12 months)', de: 'Du brauchst eine volle AI-Transformation (keine Quick Wins): Wenn du komplett AI-native werden musst (6-12 Monate). Besser geeignet: Boost (90 Tage, €60K-€78K) oder Accelerate (12 Monate)' },
    { en: "You're not ready to execute: If you just want an AI strategy deck (not hands-on implementation). Better fit: Traditional consulting (McKinsey, BCG, Bain)", de: 'Du bist nicht bereit zu exekutieren: Wenn du nur ein AI Strategy Deck willst (keine Hands-on Implementierung). Besser geeignet: Traditionelles Consulting (McKinsey, BCG, Bain)' },
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
              ? 'Power Up: AI Quick Wins funktioniert am besten für Unternehmen in dieser Situation.'
              : 'Power Up: AI Quick Wins works best for companies in this situation.'}
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
                  ? 'Nicht sicher, ob das der richtige Fit ist? Buche einen kostenlosen 30-Min. Inflection Call. Wir bewerten deine AI Maturity und empfehlen den besten Weg nach vorn (auch wenn es nicht Power Up ist).'
                  : "Not sure if this is the right fit? Book a free 30-min Inflection Call. We'll assess your AI maturity and recommend the best path forward (even if it's not Power Up)."}
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
      a: { en: '4-6 weeks (depending on use cases and team availability)', de: '4-6 Wochen (abhängig von Use Cases und Team-Verfügbarkeit)' },
    },
    {
      q: { en: "What's the investment?", de: 'Was ist das Investment?' },
      a: { en: '€23.6K (fixed price, outcome-based risk sharing)', de: '€23.6K (Festpreis, ergebnisbasierte Risikoteilung)' },
    },
    {
      q: { en: "What if it doesn't work?", de: 'Was ist, wenn es nicht funktioniert?' },
      a: { en: "We measure outcomes (θ_index, AI use cases, speed gains). If we don't hit agreed targets, we'll extend the sprint at no extra cost.", de: 'Wir messen Ergebnisse (θ_index, AI Use Cases, Speed Gains). Wenn wir vereinbarte Ziele nicht erreichen, verlängern wir den Sprint ohne Zusatzkosten.' },
    },
    {
      q: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' },
      a: { en: "Yes. We'll connect you with a CTO who's worked with us (same stage, same challenge).", de: 'Ja. Wir verbinden dich mit einem CTO, der mit uns gearbeitet hat (gleiche Stage, gleiche Herausforderung).' },
    },
    {
      q: { en: "What's the ROI?", de: 'Was ist der ROI?' },
      a: { en: 'Typical ROI is 15-30x (based on efficiency gains over 12 months).', de: 'Typischer ROI ist 15-30x (basierend auf Effizienz-Gewinnen über 12 Monate).' },
    },
    {
      q: { en: 'Which AI tools do you use?', de: 'Welche AI Tools benutzt ihr?' },
      a: { en: "We're tool-agnostic. We select the best AI tools for your use cases (OpenAI, Anthropic, custom models, no-code tools, etc.).", de: 'Wir sind tool-agnostisch. Wir wählen die besten AI Tools für deine Use Cases (OpenAI, Anthropic, Custom Models, No-Code Tools, etc.).' },
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
            {language === 'de' ? 'Bereit für deine ersten AI-Erfolge?' : 'Ready to Get Your First AI Wins?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Starte mit einem kostenlosen Inflection Call (30 Min.). Wir bewerten deine AI Maturity und empfehlen die richtige Lösung (Power Up, Boost, Accelerate oder DIY).'
              : "Start with a free Inflection Call (30 min). We'll assess your AI maturity and recommend the right solution (Power Up, Boost, Accelerate, or DIY)."}
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
            <strong>Expert Session: AI Strategy</strong> (45-90 min, €490-€890)
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
const PowerUpAIQuickWins: React.FC = () => {
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

export default PowerUpAIQuickWins;
