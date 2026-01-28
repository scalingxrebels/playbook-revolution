import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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
  DollarSign,
  Target,
  Users,
  TrendingDown,
  TrendingUp,
  Clock,
  FileText,
  MessageCircle,
  Layers,
  Settings,
  Shield,
  Sparkles,
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
    { value: '+50-100%', label: { en: 'ARPU Growth', de: 'ARPU Wachstum' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
    { value: '+15-20pp', label: { en: 'Margin Expansion', de: 'Margin-Expansion' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
    { value: '-30-50%', label: { en: 'Discounting', de: 'Rabattierung' }, sublabel: { en: 'Reduction', de: 'Reduktion' } },
  ];

  const trustBadges = [
    { icon: Shield, label: { en: '2 of 3 Outcomes Guaranteed (or 50% Refund)', de: '2 von 3 Ergebnissen garantiert (oder 50% Rückerstattung)' } },
    { icon: Clock, label: { en: '90-Day Transformation', de: '90-Tage-Transformation' } },
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
              <span className="text-foreground font-medium">Boost Pricing Dominance</span>
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
          <span className="block text-foreground">Pricing Breakdown →</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'Pricing Dominance Built' : 'Pricing Dominance Built'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Baue deine Pricing-Dominanz in 90 Tagen. Typische Ergebnisse: ARPU +50-100%, Bruttomarge +15-20pp, Rabattierung -30-50% – mit 2 von 3 Ergebnissen garantiert.'
            : 'Build your pricing dominance in 90 days. Typical outcomes: ARPU +50-100%, Gross Margin +15-20pp, Discounting -30-50%—with 2 of 3 outcomes guaranteed.'}
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
    { en: 'ARPU stagnation: €500 (benchmark: €1,000+)', de: 'ARPU Stagnation: €500 (Benchmark: €1.000+)' },
    { en: 'Margin compression: 50% gross margin (benchmark: 75%+)', de: 'Margin-Kompression: 50% Bruttomarge (Benchmark: 75%+)' },
    { en: 'Excessive discounting: 30-50% discounts (benchmark: 10-15%)', de: 'Übermäßige Rabattierung: 30-50% Rabatte (Benchmark: 10-15%)' },
    { en: 'Value metric unclear: Pricing not aligned to customer value', de: 'Value Metric unklar: Pricing nicht auf Kundenwert ausgerichtet' },
    { en: 'Board pressure: "Why are we leaving money on the table?"', de: 'Board-Druck: "Warum lassen wir Geld auf dem Tisch?"' },
  ];

  const beforeAfter = {
    before: [
      { metric: 'ARPU', value: '€500' },
      { metric: 'Gross Margin', value: '50%' },
      { metric: 'Discounting', value: '40%' },
    ],
    after: [
      { metric: 'ARPU', value: '€750-€1,000' },
      { metric: 'Gross Margin', value: '65-70%' },
      { metric: 'Discounting', value: '10-15%' },
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
            {language === 'de' ? 'Dein Pricing ist kaputt' : 'Your Pricing Is Broken'}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Dein ARPU stagniert bei €500 (Benchmark: €1.000+). Deine Bruttomarge ist auf 50% gefallen (Benchmark: 75%+). Dein Sales-Team gibt 30-50% Rabatt, um Deals zu schließen. Und das Schlimmste: Das Board fragt: "Warum lassen wir Geld auf dem Tisch?"'
              : 'Your ARPU has stagnated at €500 (benchmark: €1,000+). Your gross margin has dropped to 50% (benchmark: 75%+). Your sales team is discounting 30-50% to close deals. And worst of all—the board is asking: "Why are we leaving money on the table?"'}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Du hast die offensichtlichen Fixes ausprobiert: Preise erhöhen, Packaging ändern, Rabatte reduzieren. Aber nichts funktioniert. Denn das Problem ist nicht ein Pricing-Issue – es ist deine gesamte Pricing-Architektur.'
              : "You've tried the obvious fixes: raising prices, changing packaging, reducing discounts. But nothing is working. Because the problem isn't one pricing issue—it's your entire pricing architecture."}
          </p>
        </div>

        {/* Symptoms Checklist */}
        <div className="max-w-2xl mx-auto mb-16">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">
            {language === 'de' ? 'Symptome eines kaputten Pricings:' : 'Broken Pricing Symptoms:'}
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
              {language === 'de' ? 'Nachher (90 Tage)' : 'After (90 Days)'}
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
      icon: Target,
      title: { en: 'Pricing Strategy (C₁)', de: 'Pricing-Strategie (C₁)' },
      items: [
        { en: 'Design value metric (align pricing to customer value)', de: 'Value Metric designen (Pricing auf Kundenwert ausrichten)' },
        { en: 'Build pricing model (usage-based, outcome-based, or hybrid?)', de: 'Pricing-Modell bauen (nutzungsbasiert, ergebnisbasiert oder hybrid?)' },
        { en: 'Create packaging strategy (good-better-best tiers)', de: 'Packaging-Strategie erstellen (Good-Better-Best Tiers)' },
        { en: 'Set pricing levels (based on willingness-to-pay research)', de: 'Preislevels festlegen (basierend auf Zahlungsbereitschaftsforschung)' },
      ],
    },
    {
      icon: Settings,
      title: { en: 'Pricing Execution (C₃)', de: 'Pricing-Execution (C₃)' },
      items: [
        { en: 'Implement new pricing (migrate existing customers)', de: 'Neues Pricing implementieren (bestehende Kunden migrieren)' },
        { en: 'Train sales team (on value-based selling, not discounting)', de: 'Sales-Team trainieren (auf wertbasiertes Verkaufen, nicht Rabattieren)' },
        { en: 'Deploy pricing tools (CPQ, dynamic pricing, AI-powered)', de: 'Pricing-Tools deployen (CPQ, dynamische Preise, AI-powered)' },
        { en: 'Create pricing playbooks (objection handling, negotiation)', de: 'Pricing-Playbooks erstellen (Einwandbehandlung, Verhandlung)' },
      ],
    },
    {
      icon: Shield,
      title: { en: 'Pricing Discipline', de: 'Pricing-Disziplin' },
      items: [
        { en: 'Set discount policies (max 10-15%, not 30-50%)', de: 'Rabattrichtlinien festlegen (max 10-15%, nicht 30-50%)' },
        { en: 'Implement approval workflows (automated, not manual)', de: 'Genehmigungsworkflows implementieren (automatisiert, nicht manuell)' },
        { en: 'Build pricing dashboard (track ARPU, margin, discounting)', de: 'Pricing-Dashboard bauen (ARPU, Marge, Rabattierung tracken)' },
      ],
    },
  ];

  const phases = [
    {
      number: '1',
      title: { en: 'Diagnose', de: 'Diagnose' },
      timeline: { en: 'Week 1-2', de: 'Woche 1-2' },
      items: [
        { en: 'Pricing Analysis: Why is ARPU €500 (not €1,000+)? Why is margin 50% (not 75%+)?', de: 'Pricing-Analyse: Warum ist ARPU €500 (nicht €1.000+)? Warum ist Marge 50% (nicht 75%+)?' },
        { en: 'Value Metric Analysis: Is your pricing aligned to customer value?', de: 'Value-Metric-Analyse: Ist dein Pricing auf Kundenwert ausgerichtet?' },
        { en: 'Packaging Analysis: Is your packaging optimized?', de: 'Packaging-Analyse: Ist dein Packaging optimiert?' },
        { en: 'Willingness-to-Pay Research: What would customers actually pay?', de: 'Zahlungsbereitschafts-Research: Was würden Kunden tatsächlich zahlen?' },
      ],
      deliverable: { en: 'Pricing Transformation Report (30-40 pages) + 90-Day Roadmap', de: 'Pricing-Transformations-Report (30-40 Seiten) + 90-Tage-Roadmap' },
      color: 'from-violet-500 to-purple-600',
    },
    {
      number: '2',
      title: { en: 'Build', de: 'Build' },
      timeline: { en: 'Week 3-8', de: 'Woche 3-8' },
      items: [
        { en: 'Rebuild pricing architecture (value metric, packaging, pricing levels)', de: 'Pricing-Architektur neu bauen (Value Metric, Packaging, Preislevels)' },
        { en: 'Implement new pricing (migrate customers, train sales team)', de: 'Neues Pricing implementieren (Kunden migrieren, Sales-Team trainieren)' },
        { en: 'Deploy pricing tools (CPQ, dynamic pricing, AI-powered)', de: 'Pricing-Tools deployen (CPQ, dynamische Preise, AI-powered)' },
      ],
      deliverable: { en: 'Pricing dominance live (in your systems)', de: 'Pricing-Dominanz live (in deinen Systemen)' },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '3',
      title: { en: 'Validate & Scale', de: 'Validate & Scale' },
      timeline: { en: 'Week 9-12', de: 'Woche 9-12' },
      items: [
        { en: 'Track metrics (ARPU, Gross Margin, Discounting, Win Rate)', de: 'Metriken tracken (ARPU, Bruttomarge, Rabattierung, Win Rate)' },
        { en: 'Validate impact (is pricing working?)', de: 'Impact validieren (funktioniert das Pricing?)' },
        { en: 'Create scale playbook (how to maintain pricing power)', de: 'Scale-Playbook erstellen (wie Pricing-Power erhalten)' },
      ],
      deliverable: { en: 'Validated pricing dominance + Scale Playbook', de: 'Validierte Pricing-Dominanz + Scale-Playbook' },
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
              ? 'So bauen wir deine Pricing-Dominanz'
              : 'How We Build Your Pricing Dominance'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Wir erhöhen nicht einfach die Preise. Wir bauen deine gesamte Pricing-Architektur neu – damit du maximalen Wert mit nachhaltiger Pricing-Power erfasst.'
              : "We don't just raise prices. We rebuild your entire pricing architecture—so you capture maximum value with sustainable pricing power."}
          </p>
        </div>

        {/* Components We Build */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-bold mb-8">
            {language === 'de' ? 'Was wir bauen:' : 'What We Build:'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {components.map((component, index) => {
              const Icon = component.icon;
              return (
                <div
                  key={index}
                  className="bg-card border-2 border-primary/30 hover:border-primary p-6 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-4">
                    {language === 'de' ? component.title.de : component.title.en}
                  </h4>
                  <ul className="space-y-2">
                    {component.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{language === 'de' ? item.de : item.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3-Phase Timeline */}
        <h3 className="text-center text-lg font-bold mb-8">
          {language === 'de' ? 'Der 90-Tage-Prozess:' : 'The 90-Day Process:'}
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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const outcomes = [
    {
      id: 'arpu',
      value: '+50-100%',
      title: { en: 'ARPU Growth', de: 'ARPU Wachstum' },
      range: { en: 'Typical: €500 → €750-€1,000', de: 'Typisch: €500 → €750-€1.000' },
      measurement: { en: 'Measured: Average Revenue Per User (end of 90 days vs. baseline)', de: 'Gemessen: Durchschnittlicher Umsatz pro Nutzer (Ende 90 Tage vs. Baseline)' },
    },
    {
      id: 'margin',
      value: '+15-20pp',
      title: { en: 'Gross Margin', de: 'Bruttomarge' },
      range: { en: 'Typical: 50% → 65-70%', de: 'Typisch: 50% → 65-70%' },
      measurement: { en: 'Measured: Gross Margin Percentage (90 days post-launch)', de: 'Gemessen: Bruttomarge-Prozentsatz (90 Tage nach Launch)' },
    },
    {
      id: 'discounting',
      value: '-30-50%',
      title: { en: 'Discounting Reduction', de: 'Rabatt-Reduktion' },
      range: { en: 'Typical: 40% → 10-15%', de: 'Typisch: 40% → 10-15%' },
      measurement: { en: 'Measured: Average Discount Rate (end of 90 days vs. baseline)', de: 'Gemessen: Durchschnittliche Rabattquote (Ende 90 Tage vs. Baseline)' },
    },
  ];

  const realExample = {
    company: { en: 'Series B SaaS, €18M ARR, 90 employees', de: 'Series B SaaS, €18M ARR, 90 Mitarbeiter' },
    challenge: { en: 'ARPU €450 (vs. €900 benchmark), Gross Margin 48%, Discounting 45%', de: 'ARPU €450 (vs. €900 Benchmark), Bruttomarge 48%, Rabattierung 45%' },
    problems: { en: 'Unclear value metric, weak packaging, no pricing discipline', de: 'Unklare Value Metric, schwaches Packaging, keine Pricing-Disziplin' },
    outcome: [
      { metric: 'ARPU', before: '€450', after: '€800', change: '+78%' },
      { metric: 'Gross Margin', before: '48%', after: '66%', change: '+18pp' },
      { metric: 'Discounting', before: '45%', after: '13%', change: '-32pp' },
    ],
  };

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
            {language === 'de' ? 'Typische Ergebnisse (90 Tage)' : 'Typical Outcomes (90 Days)'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Dies sind echte Ergebnisse von Unternehmen wie deinem (Series A-C, €10M-€50M ARR). 2 von 3 Ergebnissen garantiert oder 50% Rückerstattung.'
              : "These are real results from companies like yours (Series A-C, €10M-€50M ARR). 2 of 3 outcomes guaranteed or 50% refund."}
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

        {/* Real Example */}
        <div className="bg-card border-2 border-primary/30 p-8 mb-16">
          <h3 className="font-bold text-xl mb-6 text-center">
            {language === 'de' ? 'Echtes Beispiel:' : 'Real Example:'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                <span className="font-bold text-foreground">{language === 'de' ? 'Unternehmen:' : 'Company:'}</span>{' '}
                {language === 'de' ? realExample.company.de : realExample.company.en}
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <span className="font-bold text-foreground">{language === 'de' ? 'Herausforderung:' : 'Challenge:'}</span>{' '}
                {language === 'de' ? realExample.challenge.de : realExample.challenge.en}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">{language === 'de' ? 'Pricing-Probleme:' : 'Pricing Problems:'}</span>{' '}
                {language === 'de' ? realExample.problems.de : realExample.problems.en}
              </p>
            </div>
            <div className="bg-accent/10 border border-accent/30 p-4 rounded">
              <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
                {language === 'de' ? 'Ergebnisse (90 Tage):' : 'Outcomes (90 Days):'}
              </h4>
              <div className="space-y-3">
                {realExample.outcome.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item.metric}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground line-through">{item.before}</span>
                      <span className="text-foreground">→</span>
                      <span className="font-bold text-accent">{item.after}</span>
                      <span className="text-xs text-accent bg-accent/20 px-2 py-0.5 rounded">{item.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ROI Calculation */}
        <div className="bg-accent/10 border-2 border-accent/30 p-8 max-w-2xl mx-auto">
          <h3 className="font-bold text-lg mb-4 text-accent text-center">
            {language === 'de' ? 'ROI-Kalkulation (Typischer Bereich):' : 'ROI Calculation (Typical Range):'}
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{language === 'de' ? 'Investment:' : 'Investment:'}</span>
              <span className="font-bold text-foreground">€60K - €78K</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{language === 'de' ? 'Return (Jahr 1):' : 'Return (Year 1):'}</span>
              <span className="font-bold text-accent">€1.2M - €3.1M</span>
            </div>
            <div className="flex justify-between border-t border-accent/30 pt-4">
              <span className="text-muted-foreground">ROI:</span>
              <span className="font-bold text-accent text-xl">20-40x</span>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => scrollToSection('final-cta')}
            >
              {language === 'de' ? 'Kostenloses Inflection Call buchen' : 'Book Free Inflection Call'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 5: PROCESS (HOW WE WORK)
// ============================================================================
const ProcessSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const weeks = [
    {
      phase: { en: 'Diagnose', de: 'Diagnose' },
      timeline: { en: 'Week 1-2', de: 'Woche 1-2' },
      whatWeDo: [
        { en: 'Pricing Analysis (why is ARPU low? why is margin low?)', de: 'Pricing-Analyse (warum ist ARPU niedrig? warum ist Marge niedrig?)' },
        { en: 'Value Metric Analysis (is pricing aligned to value?)', de: 'Value-Metric-Analyse (ist Pricing auf Wert ausgerichtet?)' },
        { en: 'Packaging Analysis (is packaging optimized?)', de: 'Packaging-Analyse (ist Packaging optimiert?)' },
        { en: 'Willingness-to-Pay Research (what would customers pay?)', de: 'Zahlungsbereitschafts-Research (was würden Kunden zahlen?)' },
      ],
      whatYouGet: [
        { en: 'Pricing Transformation Report (30-40 pages)', de: 'Pricing-Transformations-Report (30-40 Seiten)' },
        { en: '90-Day Roadmap (phased implementation)', de: '90-Tage-Roadmap (phasenweise Implementierung)' },
        { en: 'ROI Prediction (20-40x over 12 months)', de: 'ROI-Vorhersage (20-40x über 12 Monate)' },
      ],
      timeCommitment: { en: '12-16 hours (interviews, data sharing, workshops)', de: '12-16 Stunden (Interviews, Daten teilen, Workshops)' },
    },
    {
      phase: { en: 'Build', de: 'Build' },
      timeline: { en: 'Week 3-8', de: 'Woche 3-8' },
      whatWeDo: [
        { en: 'Rebuild pricing architecture (value metric, packaging, pricing levels)', de: 'Pricing-Architektur neu bauen (Value Metric, Packaging, Preislevels)' },
        { en: 'Implement new pricing (migrate customers, train sales team)', de: 'Neues Pricing implementieren (Kunden migrieren, Sales-Team trainieren)' },
        { en: 'Deploy pricing tools (CPQ, dynamic pricing, AI-powered)', de: 'Pricing-Tools deployen (CPQ, dynamische Preise, AI-powered)' },
      ],
      whatYouGet: [
        { en: 'Pricing dominance live (in your systems)', de: 'Pricing-Dominanz live (in deinen Systemen)' },
        { en: 'AI-powered tools deployed (integrated, not standalone)', de: 'AI-powered Tools deployed (integriert, nicht standalone)' },
        { en: 'Team training (sales and CS playbooks)', de: 'Team Training (Sales und CS Playbooks)' },
      ],
      timeCommitment: { en: '20-30 hours (implementation, training, feedback)', de: '20-30 Stunden (Implementierung, Training, Feedback)' },
    },
    {
      phase: { en: 'Validate', de: 'Validate' },
      timeline: { en: 'Week 9-12', de: 'Woche 9-12' },
      whatWeDo: [
        { en: 'Track metrics (ARPU, Gross Margin, Discounting, Win Rate)', de: 'Metriken tracken (ARPU, Bruttomarge, Rabattierung, Win Rate)' },
        { en: 'Validate impact (is pricing working?)', de: 'Impact validieren (funktioniert das Pricing?)' },
        { en: 'Create scale playbook (how to maintain pricing power)', de: 'Scale-Playbook erstellen (wie Pricing-Power erhalten)' },
      ],
      whatYouGet: [
        { en: 'Metrics Dashboard (real-time tracking)', de: 'Metrics Dashboard (Echtzeit-Tracking)' },
        { en: 'Validated outcomes (with before/after data)', de: 'Validierte Ergebnisse (mit Vorher/Nachher-Daten)' },
        { en: 'Scale Playbook (step-by-step guide)', de: 'Scale-Playbook (Schritt-für-Schritt-Anleitung)' },
      ],
      timeCommitment: { en: '10-15 hours (review, feedback, handoff)', de: '10-15 Stunden (Review, Feedback, Übergabe)' },
    },
  ];

  const guaranteedOutcomes = [
    { metric: 'ARPU', target: { en: '+50-100%', de: '+50-100%' } },
    { metric: 'Gross Margin', target: { en: '+15-20pp', de: '+15-20pp' } },
    { metric: 'Discounting', target: { en: '-30-50%', de: '-30-50%' } },
  ];

  return (
    <section
      id="process-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[60vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Der Prozess' : 'The Process'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Der Boost-Prozess (Woche für Woche)' : 'The Boost Process (Week-by-Week)'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Transparente Timeline. Klare Deliverables. Messbare Ergebnisse.'
              : 'Transparent timeline. Clear deliverables. Measurable outcomes.'}
          </p>
        </div>

        {/* Week-by-Week Breakdown */}
        <div className="space-y-8 mb-16">
          {weeks.map((week, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    {language === 'de' ? week.timeline.de : week.timeline.en}
                  </div>
                  <h3 className="font-bold text-xl text-foreground">
                    {language === 'de' ? week.phase.de : week.phase.en}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-2">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {language === 'de' ? week.timeCommitment.de : week.timeCommitment.en}
                  </p>
                </div>
                <div className="md:w-3/4 grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
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
                    <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-3">
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outcome-Based Risk Sharing */}
        <div className="bg-primary/10 border-2 border-primary/30 p-8 max-w-3xl mx-auto">
          <h3 className="font-bold text-xl text-center mb-6">
            {language === 'de' ? '2 von 3 Ergebnissen Garantiert:' : '2 of 3 Outcomes Guaranteed:'}
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {guaranteedOutcomes.map((outcome, index) => (
              <div key={index} className="text-center p-4 bg-card border border-border rounded">
                <div className="text-lg font-bold text-primary">
                  {language === 'de' ? outcome.target.de : outcome.target.en}
                </div>
                <div className="text-sm text-muted-foreground">{outcome.metric}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground">
            {language === 'de'
              ? 'Wenn wir 2 von 3 Ergebnissen nicht erreichen (gemessen nach 90 Tagen), erhältst du 50% Rückerstattung.'
              : "If we don't hit 2 of 3 outcomes (measured after 90 days), you get 50% refund."}
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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const idealFor = [
    { en: 'Pricing is broken (ARPU stagnation, margin compression, excessive discounting)', de: 'Pricing ist kaputt (ARPU-Stagnation, Margin-Kompression, übermäßige Rabattierung)' },
    { en: 'Multiple pricing problems (not just one issue)', de: 'Mehrere Pricing-Probleme (nicht nur ein Issue)' },
    { en: 'Series A-C, €10M-€50M ARR, 50-200 people', de: 'Series A-C, €10M-€50M ARR, 50-200 Mitarbeiter' },
    { en: "You'll commit 15-20 hours/week for 90 days", de: 'Du verpflichtest dich zu 15-20 Stunden/Woche für 90 Tage' },
    { en: 'Budget: €60K-€78K', de: 'Budget: €60K-€78K' },
  ];

  const notFor = [
    {
      en: 'You only have one pricing issue → Better fit: Power Up (4-6 weeks, €23.6K)',
      de: 'Du hast nur ein Pricing-Issue → Besserer Fit: Power Up (4-6 Wochen, €23.6K)',
    },
    {
      en: 'You need full revenue transformation → Better fit: Accelerate (12 months, €153K)',
      de: 'Du brauchst volle Revenue-Transformation → Besserer Fit: Accelerate (12 Monate, €153K)',
    },
    {
      en: 'You just want a pricing strategy deck → Better fit: Traditional consulting (McKinsey, BCG, Bain)',
      de: 'Du willst nur ein Pricing-Strategiedeck → Besserer Fit: Traditionelles Consulting (McKinsey, BCG, Bain)',
    },
  ];

  return (
    <section
      id="qualification-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-mesh" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Qualifikation' : 'Qualification'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Ist das das Richtige für dich?' : 'Is This Right for You?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Boost: Pricing Dominance funktioniert am besten für Unternehmen in dieser Situation.'
              : 'Boost: Pricing Dominance works best for companies in this situation.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Ideal For */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-accent flex items-center gap-2">
              <Check className="w-5 h-5" />
              {language === 'de' ? 'Guter Fit:' : 'Good Fit:'}
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
                  ? 'Nicht sicher, ob Boost das Richtige ist? Buche einen kostenlosen Inflection Call (30 Min.) und wir bewerten deinen Fit – und empfehlen die richtige Lösung (Power Up, Boost, Accelerate oder DIY).'
                  : "Not sure if Boost is right? Book a free Inflection Call (30 min) and we'll assess your fit—and recommend the right solution (Power Up, Boost, Accelerate, or DIY)."}
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
    { en: '2 of 3 Outcomes Guaranteed (or 50% Refund)', de: '2 von 3 Ergebnissen garantiert (oder 50% Rückerstattung)' },
    { en: '90-Day Transformation', de: '90-Tage-Transformation' },
    { en: 'Reference Calls Available', de: 'Referenzgespräche möglich' },
    { en: 'No Long-Term Lock-In', de: 'Keine langfristige Bindung' },
  ];

  const faqs = [
    {
      q: { en: 'How long does Boost take?', de: 'Wie lange dauert Boost?' },
      a: { en: '90 days (12 weeks, phased implementation)', de: '90 Tage (12 Wochen, phasenweise Implementierung)' },
    },
    {
      q: { en: "What's the investment?", de: 'Was ist das Investment?' },
      a: { en: '€60K-€78K (stage-based: Series A €60K, Series B €68K, Series C €78K)', de: '€60K-€78K (stufenbasiert: Series A €60K, Series B €68K, Series C €78K)' },
    },
    {
      q: { en: "What if it doesn't work?", de: 'Was ist, wenn es nicht funktioniert?' },
      a: {
        en: "We guarantee 2 of 3 outcomes (ARPU +50-100%, Gross Margin +15-20pp, Discounting -30-50%). If we don't hit 2 of 3, you get 50% refund.",
        de: 'Wir garantieren 2 von 3 Ergebnissen (ARPU +50-100%, Bruttomarge +15-20pp, Rabattierung -30-50%). Wenn wir 2 von 3 nicht erreichen, erhältst du 50% Rückerstattung.',
      },
    },
    {
      q: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' },
      a: { en: "Yes. We'll connect you with a CEO who's worked with us (same stage, same challenge).", de: 'Ja. Wir verbinden dich mit einem CEO, der mit uns gearbeitet hat (gleiche Stage, gleiche Herausforderung).' },
    },
    {
      q: { en: "What's the ROI?", de: 'Was ist der ROI?' },
      a: { en: 'Typical ROI is 20-40x (based on ARPU increase and margin expansion over 12 months).', de: 'Typischer ROI ist 20-40x (basierend auf ARPU-Steigerung und Margin-Expansion über 12 Monate).' },
    },
    {
      q: { en: 'Will you help migrate existing customers?', de: 'Helft ihr bei der Migration bestehender Kunden?' },
      a: { en: 'Yes. We design a migration strategy and help implement it (grandfathering, value-based upgrades, etc.).', de: 'Ja. Wir designen eine Migrationsstrategie und helfen bei der Implementierung (Grandfathering, wertbasierte Upgrades, etc.).' },
    },
  ];

  return (
    <section
      id="final-cta"
      ref={(node) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        (containerRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }}
      className={`relative min-h-[60vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
            {language === 'de' ? 'Bereit, deine Pricing-Dominanz zu bauen?' : 'Ready to Build Your Pricing Dominance?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Starte mit einem kostenlosen Inflection Call (30 Min.). Wir diagnostizieren deine Pricing-Architektur und empfehlen die richtige Lösung (Power Up, Boost, Accelerate oder DIY).'
              : "Start with a free Inflection Call (30 min). We'll diagnose your pricing architecture and recommend the right solution (Power Up, Boost, Accelerate, or DIY)."}
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

        {/* Contact */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          {language === 'de' ? 'Noch Fragen? Email an' : 'Still have questions? Email us at'}{' '}
          <a href="mailto:team@scalingx.io" className="text-primary hover:underline">
            team@scalingx.io
          </a>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const BoostPricingDominance: React.FC = () => {
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
        <ImpactSection />
        <ProcessSection />
        <QualificationSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default BoostPricingDominance;
