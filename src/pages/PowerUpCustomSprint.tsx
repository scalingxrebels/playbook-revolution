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
  Puzzle,
  Rocket,
  Settings,
  Lightbulb,
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
    { value: '✓', label: { en: 'Bottleneck Fixed', de: 'Bottleneck gefixt' }, sublabel: { en: 'Week 1-2', de: 'Woche 1-2' } },
    { value: '✓', label: { en: 'Solution Live', de: 'Solution live' }, sublabel: { en: 'Week 2-4', de: 'Woche 2-4' } },
    { value: '2-5x', label: { en: 'ROI Delivered', de: 'ROI geliefert' }, sublabel: { en: 'Predicted', de: 'Prognose' } },
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
              <span className="text-foreground font-medium">Power Up Custom Sprint</span>
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
          <span className="block text-foreground">Unique Bottleneck →</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'Custom Solution Deployed' : 'Custom Solution Deployed'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Fixe deine einzigartige Herausforderung in 4-6 Wochen. Typische Ergebnisse: Custom Bottleneck gefixt, Custom Solution deployed, 2-5x ROI – mit ergebnisbasierter Risikoteilung.'
            : 'Fix your unique challenge in 4-6 weeks. Typical outcomes: Custom Bottleneck Fixed, Custom Solution Deployed, 2-5x ROI—with outcome-based risk sharing.'}
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
    { en: "Unique business model: Your GTM doesn't fit standard B2B SaaS playbooks", de: 'Einzigartiges Geschäftsmodell: Dein GTM passt nicht zu Standard B2B SaaS Playbooks' },
    { en: 'Unique market: Your industry has specific constraints (regulated, complex)', de: 'Einzigartiger Markt: Deine Branche hat spezifische Constraints (reguliert, komplex)' },
    { en: 'Unique product: Your product requires custom go-to-market approach', de: 'Einzigartiges Produkt: Dein Produkt benötigt einen Custom Go-to-Market Ansatz' },
    { en: "Unique bottleneck: Your #1 constraint isn't covered by standard offerings", de: 'Einzigartiger Engpass: Dein #1 Constraint ist nicht durch Standard-Angebote abgedeckt' },
    { en: "No clear solution: Standard consultants don't understand your problem", de: 'Keine klare Lösung: Standard-Berater verstehen dein Problem nicht' },
  ];

  const realCosts = [
    { en: "Destroys competitive advantage (you can't scale with standard playbooks)", de: 'Zerstört Wettbewerbsvorteil (du kannst nicht mit Standard-Playbooks skalieren)' },
    { en: 'Limits growth potential (unique problems = unique constraints)', de: 'Begrenzt Wachstumspotenzial (einzigartige Probleme = einzigartige Constraints)' },
    { en: 'Weakens strategic position (competitors with similar models move faster)', de: 'Schwächt strategische Position (Wettbewerber mit ähnlichen Modellen bewegen sich schneller)' },
    { en: 'Burns out leadership team (trying to force-fit standard solutions)', de: 'Brennt Leadership-Team aus (Versuch, Standard-Lösungen aufzuzwingen)' },
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
            {language === 'de' ? 'Deine Herausforderung passt nicht zu Standard-Lösungen' : "Your Challenge Doesn't Fit Standard Solutions"}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Dein Engpass ist einzigartig. Es ist keine CAC-Krise, kein Scaling-Chaos, kein Board-Druck. Es ist etwas Spezifisches für dein Geschäftsmodell, deinen Markt, dein Produkt. Und das Schlimmste – keine Standard-Lösung passt.'
              : "Your bottleneck is unique. It's not CAC crisis, not scaling chaos, not board pressure. It's something specific to your business model, your market, your product. And worst of all—no standard solution fits."}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Du hast die offensichtlichen Fixes probiert: Berater eingestellt, Workshops durchgeführt, Standard-Playbooks implementiert. Aber nichts funktioniert. Weil dein Problem einzigartig ist – und einzigartige Probleme Custom Solutions brauchen.'
              : "You've tried the obvious fixes: hiring consultants, running workshops, implementing standard playbooks. But nothing works. Because your problem is unique—and unique problems need custom solutions."}
          </p>
        </div>

        {/* Symptoms Checklist */}
        <div className="max-w-2xl mx-auto mb-16">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">
            {language === 'de' ? 'Die Symptome, die du siehst:' : "The symptoms you're seeing:"}
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
              ? 'Es geht nicht nur darum, anders zu sein. Jedes Quartal ohne Custom Solution:'
              : "This isn't just about being different. Every quarter without a custom solution:"}
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
              ? 'Du brauchst eine Custom Solution. Schnell.'
              : 'You need a custom solution. Fast.'}
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
      title: { en: 'Diagnose the Unique Bottleneck', de: 'Den einzigartigen Engpass diagnostizieren' },
      timeline: { en: 'Week 1-2', de: 'Woche 1-2' },
      icon: Search,
      items: [
        { en: 'Business Model Analysis: What makes your business model unique? (pricing, GTM, product?)', de: 'Business Model Analyse: Was macht dein Geschäftsmodell einzigartig? (Pricing, GTM, Produkt?)' },
        { en: 'Market Analysis: What makes your market unique? (regulated, complex, niche?)', de: 'Markt-Analyse: Was macht deinen Markt einzigartig? (reguliert, komplex, Nische?)' },
        { en: "Bottleneck Diagnosis: What's your #1 unique constraint? (C_min identification)", de: 'Bottleneck-Diagnose: Was ist dein #1 einzigartiger Constraint? (C_min Identifikation)' },
        { en: 'Solution Design: What custom solution do you need? (playbook, system, framework?)', de: 'Solution Design: Welche Custom Solution brauchst du? (Playbook, System, Framework?)' },
      ],
      deliverable: { en: 'Custom Bottleneck Report (15-20 pages) with solution design', de: 'Custom Bottleneck Report (15-20 Seiten) mit Solution Design' },
      color: 'from-violet-500 to-purple-600',
    },
    {
      number: '2',
      title: { en: 'Build the Custom Solution', de: 'Die Custom Solution bauen' },
      timeline: { en: 'Week 2-4', de: 'Woche 2-4' },
      icon: Wrench,
      items: [
        { en: 'Option A: Custom GTM Playbook (design custom go-to-market approach for your unique business model)', de: 'Option A: Custom GTM Playbook (Custom Go-to-Market Ansatz für dein einzigartiges Geschäftsmodell)' },
        { en: 'Option B: Custom Operations System (design custom operations framework for your unique constraints)', de: 'Option B: Custom Operations System (Custom Operations Framework für deine einzigartigen Constraints)' },
        { en: 'Option C: Custom Product Strategy (design custom product roadmap for your unique market)', de: 'Option C: Custom Product Strategy (Custom Product Roadmap für deinen einzigartigen Markt)' },
      ],
      deliverable: { en: 'Custom solution deployed (live in your systems, not just slides)', de: 'Custom Solution deployed (live in deinen Systemen, nicht nur Slides)' },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '3',
      title: { en: 'Validate & Scale', de: 'Validieren & Skalieren' },
      timeline: { en: 'Week 4-6', de: 'Woche 4-6' },
      icon: CheckCircle,
      items: [
        { en: 'Metrics Tracking: Custom KPIs (specific to your solution)', de: 'Metriken-Tracking: Custom KPIs (spezifisch für deine Solution)' },
        { en: 'Team Training: Team trained on custom solution', de: 'Team-Training: Team auf Custom Solution geschult' },
        { en: 'Scale Playbook: How to scale custom solution (next 6-12 months)', de: 'Scale Playbook: Wie die Custom Solution skalieren (nächste 6-12 Monate)' },
      ],
      deliverable: { en: 'Validated custom solution + scale playbook', de: 'Validierte Custom Solution + Scale Playbook' },
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  const differentiators = [
    { en: 'Hands-on execution (not just strategy slides)', de: 'Hands-on Execution (nicht nur Strategie-Slides)' },
    { en: 'Custom-built solution (designed for your unique problem)', de: 'Custom-built Solution (designed für dein einzigartiges Problem)' },
    { en: 'Outcome-based risk sharing (we measure what matters to you)', de: 'Ergebnisbasierte Risikoteilung (wir messen, was für dich zählt)' },
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
              ? 'So bauen wir deine Custom Solution'
              : 'How We Build Your Custom Solution'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Wir zwingen keine Standard-Playbooks auf. Wir diagnostizieren deinen einzigartigen Engpass und bauen eine Custom Solution – damit du mit deinem einzigartigen Geschäftsmodell skalieren kannst.'
              : "We don't force-fit standard playbooks. We diagnose your unique bottleneck and build a custom solution—so you can scale with your unique business model."}
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
      id: 'bottleneck-fixed',
      value: '✓',
      title: { en: 'Custom Bottleneck Fixed', de: 'Custom Bottleneck gefixt' },
      example: { en: 'Example: From "stuck" to "scaling" in 30 days', de: 'Beispiel: Von "stuck" zu "scaling" in 30 Tagen' },
      impact: { en: 'Unique GTM problem → Custom GTM playbook deployed', de: 'Einzigartiges GTM Problem → Custom GTM Playbook deployed' },
      why: { en: "We don't force-fit standard solutions—we diagnose your unique bottleneck and build a custom solution that actually works for your business model.", de: 'Wir zwingen keine Standard-Lösungen auf – wir diagnostizieren deinen einzigartigen Engpass und bauen eine Custom Solution, die tatsächlich für dein Geschäftsmodell funktioniert.' },
    },
    {
      id: 'solution-deployed',
      value: '✓',
      title: { en: 'Custom Solution Deployed', de: 'Custom Solution deployed' },
      example: { en: 'Example: Repeatable, scalable solution', de: 'Beispiel: Wiederholbare, skalierbare Solution' },
      impact: { en: 'Live in your systems, not just slides', de: 'Live in deinen Systemen, nicht nur Slides' },
      why: { en: "We build hands-on solutions (not just strategy decks)—so you have a working system that your team can use and scale.", de: 'Wir bauen Hands-on Solutions (nicht nur Strategy Decks) – damit du ein funktionierendes System hast, das dein Team nutzen und skalieren kann.' },
    },
    {
      id: 'roi-delivered',
      value: '2-5x',
      title: { en: 'ROI Delivered', de: 'ROI geliefert' },
      example: { en: 'Example: €23.6K → €50K-€120K return', de: 'Beispiel: €23.6K → €50K-€120K Return' },
      impact: { en: '2-5x ROI predicted over 12 months', de: '2-5x ROI prognostiziert über 12 Monate' },
      why: { en: "Custom solutions fix unique bottlenecks—which typically have high ROI because they're not addressed by standard solutions.", de: 'Custom Solutions fixen einzigartige Engpässe – die typischerweise hohen ROI haben, weil sie nicht durch Standard-Lösungen adressiert werden.' },
    },
  ];

  const caseStudy = {
    company: { en: 'Series B FinTech, €25M ARR, 80 employees', de: 'Series B FinTech, €25M ARR, 80 Mitarbeiter' },
    challenge: { en: 'Unique GTM problem (regulated market, complex sales cycle, no standard playbooks fit)', de: 'Einzigartiges GTM Problem (regulierter Markt, komplexer Sales Cycle, keine Standard-Playbooks passen)' },
    customSolution: { en: 'Custom GTM playbook (designed for regulated FinTech market)', de: 'Custom GTM Playbook (designed für regulierten FinTech Markt)' },
    outcomes: [
      { label: { en: 'Sales Cycle', de: 'Sales Cycle' }, value: '-40% (180d → 108d)' },
      { label: { en: 'Win Rate', de: 'Win Rate' }, value: '+25pp (20% → 45%)' },
      { label: { en: 'ROI', de: 'ROI' }, value: '3x' },
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
              ? 'Diese sind echte Ergebnisse von Unternehmen mit einzigartigen Herausforderungen (Series A-D, €10M-€50M ARR).'
              : 'These are real results from companies with unique challenges (Series A-D, €10M-€50M ARR).'}
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
                  {language === 'de' ? 'Custom Solution:' : 'Custom Solution:'}
                </span>
                <p className="text-sm text-foreground">{language === 'de' ? caseStudy.customSolution.de : caseStudy.customSolution.en}</p>
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
              ? 'In 30 Minuten diagnostizieren wir deinen einzigartigen Engpass und zeigen dir genau, welche Custom Solution wir bauen würden. Kein Pitch, kein Druck – nur Klarheit.'
              : "In 30 minutes, we'll diagnose your unique bottleneck and show you exactly what custom solution we'd build. No pitch, no pressure—just clarity."}
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
      title: { en: 'WEEK 1-2: DIAGNOSE', de: 'WOCHE 1-2: DIAGNOSTIZIEREN' },
      whatWeDo: [
        { en: "Business Model Analysis (what's unique?)", de: 'Business Model Analyse (was ist einzigartig?)' },
        { en: "Market Analysis (what's unique?)", de: 'Markt-Analyse (was ist einzigartig?)' },
        { en: 'Bottleneck Diagnosis (C_min identification)', de: 'Bottleneck-Diagnose (C_min Identifikation)' },
        { en: 'Solution Design (what custom solution?)', de: 'Solution Design (welche Custom Solution?)' },
      ],
      whatYouGet: [
        { en: 'Custom Bottleneck Report (15-20 pages)', de: 'Custom Bottleneck Report (15-20 Seiten)' },
        { en: 'Solution Design (with implementation plan)', de: 'Solution Design (mit Implementierungsplan)' },
        { en: 'ROI Prediction (2-5x over 12 months)', de: 'ROI Prognose (2-5x über 12 Monate)' },
      ],
      timeCommitment: { en: '8-12 hours', de: '8-12 Stunden' },
    },
    {
      title: { en: 'WEEK 2-4: BUILD', de: 'WOCHE 2-4: BAUEN' },
      whatWeDo: [
        { en: 'Build custom solution (playbook, system, or framework)', de: 'Custom Solution bauen (Playbook, System oder Framework)' },
        { en: 'Implement in your systems (live, not just slides)', de: 'In deinen Systemen implementieren (live, nicht nur Slides)' },
        { en: 'Train your team (hands-on, not just theory)', de: 'Dein Team trainieren (Hands-on, nicht nur Theorie)' },
      ],
      whatYouGet: [
        { en: 'Custom solution deployed (live in your systems)', de: 'Custom Solution deployed (live in deinen Systemen)' },
        { en: 'Implementation documentation (step-by-step)', de: 'Implementierungs-Dokumentation (Schritt für Schritt)' },
        { en: 'Team training (hands-on workshops)', de: 'Team-Training (Hands-on Workshops)' },
      ],
      timeCommitment: { en: '12-16 hours', de: '12-16 Stunden' },
    },
    {
      title: { en: 'WEEK 4-6: VALIDATE', de: 'WOCHE 4-6: VALIDIEREN' },
      whatWeDo: [
        { en: 'Track custom KPIs (specific to your solution)', de: 'Custom KPIs tracken (spezifisch für deine Solution)' },
        { en: 'Validate impact (is the solution working?)', de: 'Impact validieren (funktioniert die Solution?)' },
        { en: 'Create scale playbook (how to scale next 6-12 months)', de: 'Scale Playbook erstellen (wie in nächsten 6-12 Monaten skalieren)' },
      ],
      whatYouGet: [
        { en: 'Metrics Dashboard (real-time tracking)', de: 'Metriken Dashboard (Echtzeit-Tracking)' },
        { en: 'Validated outcomes (with before/after data)', de: 'Validierte Ergebnisse (mit Vorher/Nachher-Daten)' },
        { en: 'Scale Playbook (step-by-step guide)', de: 'Scale Playbook (Schritt-für-Schritt-Guide)' },
      ],
      timeCommitment: { en: '6-8 hours', de: '6-8 Stunden' },
    },
  ];

  const riskSharing = {
    primaryMetrics: [
      { en: 'Custom Bottleneck Fixed (✓/✗)', de: 'Custom Bottleneck gefixt (✓/✗)' },
      { en: 'Custom Solution Deployed (✓/✗)', de: 'Custom Solution deployed (✓/✗)' },
      { en: 'ROI Delivered (2-5x predicted)', de: 'ROI geliefert (2-5x prognostiziert)' },
    ],
    howWeMeasure: [
      { en: 'Baseline: Week 0 (before we start)', de: 'Baseline: Woche 0 (bevor wir starten)' },
      { en: 'Checkpoint: Week 4 (mid-sprint)', de: 'Checkpoint: Woche 4 (Mitte Sprint)' },
      { en: 'Final: Week 6 (end of sprint)', de: 'Final: Woche 6 (Ende Sprint)' },
    ],
    riskMitigation: {
      en: "If we don't hit agreed outcomes, we'll extend the sprint at no extra cost. Reference calls available (talk to CEOs with similar unique challenges).",
      de: 'Wenn wir vereinbarte Ergebnisse nicht erreichen, verlängern wir den Sprint ohne Zusatzkosten. Referenzgespräche möglich (sprich mit CEOs mit ähnlichen einzigartigen Herausforderungen).'
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
    { en: "Your challenge is unique (and standard solutions don't fit): Your business model is unique (not standard B2B SaaS), your market is unique (regulated, complex, niche), you have 4-6 weeks to build a custom solution.", de: 'Deine Herausforderung ist einzigartig (und Standard-Lösungen passen nicht): Dein Geschäftsmodell ist einzigartig (kein Standard B2B SaaS), dein Markt ist einzigartig (reguliert, komplex, Nische), du hast 4-6 Wochen Zeit, eine Custom Solution zu bauen.' },
    { en: "You have a unique bottleneck (but don't know the solution): Is it your GTM? (unique go-to-market approach needed?) Is it your operations? (unique workflows needed?) Is it your product? (unique product strategy needed?)", de: "Du hast einen einzigartigen Engpass (aber kennst die Lösung nicht): Ist es dein GTM? (einzigartiger Go-to-Market Ansatz nötig?) Ist es deine Operations? (einzigartige Workflows nötig?) Ist es dein Produkt? (einzigartige Produkt-Strategie nötig?)" },
    { en: "You're Series A-D, €10M-€50M ARR, 50-200 people", de: 'Du bist Series A-D, €10M-€50M ARR, 50-200 Mitarbeiter' },
    { en: "You're willing to execute: You'll implement our recommendations (not just read a report), your leadership team will commit 8-12 hours/week for 4-6 weeks", de: 'Du bist bereit zu exekutieren: Du wirst unsere Empfehlungen implementieren (nicht nur einen Report lesen), dein Leadership-Team wird 8-12 Stunden/Woche für 4-6 Wochen committen' },
    { en: 'You have budget (€23.6K): ROI is 2-5x based on typical outcomes', de: 'Du hast Budget (€23.6K): ROI ist 2-5x basierend auf typischen Ergebnissen' },
  ];

  const notFor = [
    { en: 'Your challenge fits a standard solution: If your problem is CAC crisis, scaling chaos, or board pressure, we have standard offerings. Better fit: Standard Power Up (CAC Crisis, Scaling Velocity, Board Readiness, etc.)', de: 'Deine Herausforderung passt zu einer Standard-Lösung: Wenn dein Problem CAC-Krise, Scaling-Chaos oder Board-Druck ist, haben wir Standard-Angebote. Besser geeignet: Standard Power Up (CAC Crisis, Scaling Velocity, Board Readiness, etc.)' },
    { en: "You need a full custom transformation (not quick wins): If you need a 6-12 month custom transformation, Power Up is too short. Better fit: Boost Custom (90 days, €60K-€78K) or Accelerate Custom (12 months, €153K)", de: 'Du brauchst eine volle Custom Transformation (keine Quick Wins): Wenn du eine 6-12 Monate Custom Transformation brauchst, ist Power Up zu kurz. Besser geeignet: Boost Custom (90 Tage, €60K-€78K) oder Accelerate Custom (12 Monate, €153K)' },
    { en: "You're not ready to execute: If you just want a custom strategy deck (not hands-on implementation). Better fit: Traditional consulting (McKinsey, BCG, Bain)", de: 'Du bist nicht bereit zu exekutieren: Wenn du nur ein Custom Strategy Deck willst (keine Hands-on Implementierung). Besser geeignet: Traditionelles Consulting (McKinsey, BCG, Bain)' },
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
              ? 'Power Up: Custom Sprint funktioniert am besten für Unternehmen in dieser Situation.'
              : 'Power Up: Custom Sprint works best for companies in this situation.'}
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
                  ? 'Nicht sicher, ob das der richtige Fit ist? Buche einen kostenlosen 30-Min. Inflection Call. Wir diagnostizieren deinen einzigartigen Engpass und empfehlen den besten Weg nach vorn (auch wenn es nicht Power Up ist).'
                  : "Not sure if this is the right fit? Book a free 30-min Inflection Call. We'll diagnose your unique bottleneck and recommend the best path forward (even if it's not Power Up)."}
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
      a: { en: '4-6 weeks (depending on your unique challenge and team availability)', de: '4-6 Wochen (abhängig von deiner einzigartigen Herausforderung und Team-Verfügbarkeit)' },
    },
    {
      q: { en: "What's the investment?", de: 'Was ist das Investment?' },
      a: { en: '€23.6K (fixed price, outcome-based risk sharing)', de: '€23.6K (Festpreis, ergebnisbasierte Risikoteilung)' },
    },
    {
      q: { en: "What if it doesn't work?", de: 'Was ist, wenn es nicht funktioniert?' },
      a: { en: "We measure outcomes (Custom Bottleneck Fixed, Custom Solution Deployed, ROI). If we don't hit agreed targets, we'll extend the sprint at no extra cost.", de: 'Wir messen Ergebnisse (Custom Bottleneck gefixt, Custom Solution deployed, ROI). Wenn wir vereinbarte Ziele nicht erreichen, verlängern wir den Sprint ohne Zusatzkosten.' },
    },
    {
      q: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' },
      a: { en: "Yes. We'll connect you with a CEO who's worked with us on a similar unique challenge.", de: 'Ja. Wir verbinden dich mit einem CEO, der mit uns an einer ähnlichen einzigartigen Herausforderung gearbeitet hat.' },
    },
    {
      q: { en: "What's the ROI?", de: 'Was ist der ROI?' },
      a: { en: 'Typical ROI is 2-5x (based on efficiency gains or revenue increase over 12 months).', de: 'Typischer ROI ist 2-5x (basierend auf Effizienzgewinnen oder Umsatzsteigerung über 12 Monate).' },
    },
    {
      q: { en: 'What if my challenge is really unique?', de: 'Was ist, wenn meine Herausforderung wirklich einzigartig ist?' },
      a: { en: "That's our specialty. We've built custom solutions for regulated FinTech, complex B2B2C models, niche vertical SaaS, and more.", de: 'Das ist unsere Spezialität. Wir haben Custom Solutions für regulierte FinTech, komplexe B2B2C Modelle, Nischen-Vertical SaaS und mehr gebaut.' },
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
            {language === 'de' ? 'Bereit, deine Custom Solution zu bauen?' : 'Ready to Build Your Custom Solution?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {language === 'de' ? "Hier ist, was als nächstes passiert." : "Here's what happens next."}
          </p>
        </div>

        {/* Fillout Form */}
        <div className="max-w-2xl mx-auto mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div
            data-fillout-id="wX5LjCi8eQus"
            data-fillout-embed-type="standard"
            data-fillout-inherit-parameters
            data-fillout-dynamic-resize
            style={{ width: '100%', minHeight: '400px' }}
          />
        </div>

        {/* Alternative: Expert Session */}
        <div className="max-w-2xl mx-auto mb-16 p-6 bg-card border-2 border-border rounded-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="font-bold text-lg mb-4 text-center">
            {language === 'de' ? 'Alternative: Starte mit einer Expert Session' : 'Alternative: Start with an Expert Session'}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 text-center">
            {language === 'de'
              ? 'Noch nicht bereit für ein volles Power Up? Starte kleiner:'
              : 'Not ready for a full Power Up? Start smaller:'}
          </p>
          <div className="bg-muted/50 p-4 rounded-lg mb-4">
            <div className="font-bold text-sm mb-2">
              {language === 'de' ? 'Expert Session: Custom Challenge (45-90 Min., €490-€890)' : 'Expert Session: Custom Challenge (45-90 min, €490-€890)'}
            </div>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• {language === 'de' ? 'Deep-dive in deine einzigartige Herausforderung' : 'Deep-dive into your unique challenge'}</li>
              <li>• {language === 'de' ? 'Taktische Empfehlungen (was bauen)' : 'Get tactical recommendations (what to build)'}</li>
              <li>• {language === 'de' ? 'Geh mit einem 90-Tage Action Plan' : 'Walk away with a 90-day action plan'}</li>
            </ul>
          </div>
          <div className="text-center">
            <Button variant="outline" onClick={() => window.open('https://calendly.com/michel-scalingx/expert-session', '_blank')}>
              {language === 'de' ? 'Expert Session buchen' : 'Book Expert Session'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              <span>{language === 'de' ? badge.de : badge.en}</span>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="font-bold text-lg mb-6 text-center">
            {language === 'de' ? 'Häufige Fragen' : 'FAQ'}
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-sm font-medium">
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
        <div className="text-center mt-12 text-sm text-muted-foreground">
          {language === 'de'
            ? 'Noch Fragen? Email uns an team@scalingx.io oder buche einen Call.'
            : 'Still have questions? Email us at team@scalingx.io or book a call.'}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const PowerUpCustomSprint: React.FC = () => {
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

export default PowerUpCustomSprint;
