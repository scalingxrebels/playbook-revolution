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
  Target,
  Users,
  FileText,
  MessageCircle,
  Shield,
  Sparkles,
  Layers,
  Zap,
  Brain,
  Settings,
  BarChart3,
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
    { value: '+100-150%', label: { en: 'Custom Metric 1', de: 'Custom Metric 1' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
    { value: '+150-200%', label: { en: 'Custom Metric 2', de: 'Custom Metric 2' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
    { value: '100%', label: { en: 'Custom Solution', de: 'Custom Solution' }, sublabel: { en: 'Fully Built', de: 'Vollständig gebaut' } },
  ];

  const trustBadges = [
    { icon: Shield, label: { en: '2 of 3 Outcomes Guaranteed (or 50% Refund)', de: '2 von 3 Ergebnissen garantiert (oder 50% Rückerstattung)' } },
    { icon: Layers, label: { en: '90-Day Transformation', de: '90-Tage-Transformation' } },
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
              <span className="text-foreground font-medium">Boost Custom Program</span>
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
          <span className="block text-foreground">Unique Problem →</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            Custom Solution Built
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Baue deine Custom Solution in 90 Tagen. Typische Ergebnisse: Custom Metric 1 +100-150%, Custom Metric 2 +150-200%, Custom Solution vollständig implementiert – mit 2 von 3 Ergebnissen garantiert.'
            : 'Build your custom solution in 90 days. Typical outcomes: Custom Metric 1 +100-150%, Custom Metric 2 +150-200%, Custom Solution Fully Implemented—with 2 of 3 outcomes guaranteed.'}
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
    { en: "Unique problem: Not covered by standard offerings (CAC, NRR, Scaling, AI, Board)", de: 'Einzigartiges Problem: Nicht von Standard-Angeboten abgedeckt (CAC, NRR, Scaling, AI, Board)' },
    { en: "Standard solutions don't work: You've tried Power Up/Boost for related problems, but they don't fully fit", de: 'Standard-Lösungen funktionieren nicht: Du hast Power Up/Boost für ähnliche Probleme probiert, aber sie passen nicht vollständig' },
    { en: 'Time pressure: You have 90 days to show results (not 12 months)', de: 'Zeitdruck: Du hast 90 Tage Zeit für Ergebnisse (nicht 12 Monate)' },
    { en: 'No clear solution: Consultants say "it\'s complex" but don\'t deliver', de: 'Keine klare Lösung: Berater sagen "es ist komplex", aber liefern nicht' },
    { en: 'Board/investor pressure: "Why can\'t we solve this?"', de: 'Board/Investoren-Druck: "Warum können wir das nicht lösen?"' },
  ];

  const beforeAfter = {
    before: [
      { metric: 'Custom Metric 1', value: 'Baseline' },
      { metric: 'Custom Metric 2', value: 'Baseline' },
      { metric: 'Custom Solution', value: '0%' },
    ],
    after: [
      { metric: 'Custom Metric 1', value: '+100-150%' },
      { metric: 'Custom Metric 2', value: '+150-200%' },
      { metric: 'Custom Solution', value: '100%' },
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
            {language === 'de' ? 'Dein Problem passt in keine Standard-Lösung' : "Your Problem Doesn't Fit Standard Solutions"}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Dein Problem ist einzigartig. Standard-Angebote funktionieren nicht (CAC Optimierung? Nicht dein Problem. NRR Boost? Bereits gelöst. Scaling OS? Teilweise relevant). Du brauchst eine Custom Solution – aber du hast keine 12 Monate. Du hast 90 Tage, um Ergebnisse zu zeigen. Und das Schlimmste: Niemand bietet Custom Transformations in dieser Geschwindigkeit.'
              : "Your problem is unique. Standard offerings don't work (CAC optimization? Not your issue. NRR boost? Already solved. Scaling OS? Partially relevant). You need a custom solution—but you don't have 12 months. You have 90 days to show results. And worst of all—no one offers custom transformations at this speed."}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Du hast die offensichtlichen Fixes versucht: Berater engagiert, Workshops durchgeführt, Tools gekauft. Aber nichts funktioniert. Denn das Problem ist nicht standard – es ist einzigartig für dein Business Model, deinen Markt oder deine Situation.'
              : "You've tried the obvious fixes: hiring consultants, running workshops, buying tools. But nothing is working. Because the problem isn't standard—it's unique to your business model, market, or situation."}
          </p>
        </div>

        {/* Symptoms Checklist */}
        <div className="max-w-2xl mx-auto mb-16">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">
            {language === 'de' ? 'Die Symptome:' : 'The Symptoms:'}
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

  const capabilities = [
    {
      icon: Target,
      title: { en: 'Phase A: Custom Strategy (C₁)', de: 'Phase A: Custom Strategy (C₁)' },
      items: [
        { en: 'Design custom framework (tailored to your problem)', de: 'Custom Framework designen (maßgeschneidert für dein Problem)' },
        { en: 'Build custom roadmap (phased implementation)', de: 'Custom Roadmap bauen (phasenweise Implementierung)' },
        { en: 'Create custom metrics (how to measure success)', de: 'Custom Metriken erstellen (wie Erfolg messen)' },
        { en: 'Set custom governance (who owns what)', de: 'Custom Governance setzen (wer ist wofür verantwortlich)' },
      ],
    },
    {
      icon: Settings,
      title: { en: 'Phase B: Custom Setup (C₂)', de: 'Phase B: Custom Setup (C₂)' },
      items: [
        { en: 'Select custom tools (which tools for this problem?)', de: 'Custom Tools auswählen (welche Tools für dieses Problem?)' },
        { en: 'Build custom infrastructure (data, APIs, integrations)', de: 'Custom Infrastruktur bauen (Daten, APIs, Integrationen)' },
        { en: 'Design custom workflows (how does this fit into operations?)', de: 'Custom Workflows designen (wie passt das in Operations?)' },
        { en: 'Train custom team (on custom solution execution)', de: 'Custom Team trainieren (auf Custom Solution Execution)' },
      ],
    },
    {
      icon: Zap,
      title: { en: 'Phase C: Custom Execution (C₃)', de: 'Phase C: Custom Execution (C₃)' },
      items: [
        { en: 'Implement custom solution (hands-on, not just strategy)', de: 'Custom Solution implementieren (hands-on, nicht nur Strategy)' },
        { en: 'Deploy custom processes (workflows, automation, systems)', de: 'Custom Prozesse deployen (Workflows, Automation, Systeme)' },
        { en: 'Optimize custom performance (continuous improvement)', de: 'Custom Performance optimieren (Continuous Improvement)' },
        { en: 'Scale custom adoption (from pilot to production)', de: 'Custom Adoption skalieren (vom Pilot zur Production)' },
      ],
    },
  ];

  const phases = [
    {
      number: '1',
      title: { en: 'Diagnose', de: 'Diagnose' },
      timeline: { en: 'Week 1-2', de: 'Woche 1-2' },
      items: [
        { en: 'Problem Definition: What exactly is the problem? (not symptoms, root cause)', de: 'Problem Definition: Was genau ist das Problem? (nicht Symptome, Ursache)' },
        { en: "Why Standard Solutions Don't Work: Gap analysis", de: 'Warum Standard-Lösungen nicht funktionieren: Gap Analysis' },
        { en: 'Custom Metrics Design: What metrics matter for this unique problem?', de: 'Custom Metriken Design: Welche Metriken zählen für dieses einzigartige Problem?' },
        { en: 'Success Criteria: What does "solved" look like? (measurable, specific)', de: 'Erfolgskriterien: Wie sieht "gelöst" aus? (messbar, spezifisch)' },
      ],
      deliverable: { en: 'Custom Problem Report (30-40 pages) + 90-Day Roadmap', de: 'Custom Problem Report (30-40 Seiten) + 90-Tage-Roadmap' },
      color: 'from-violet-500 to-purple-600',
    },
    {
      number: '2',
      title: { en: 'Build', de: 'Build' },
      timeline: { en: 'Week 3-8', de: 'Woche 3-8' },
      items: [
        { en: 'Design custom solution (strategy, setup, execution)', de: 'Custom Solution designen (Strategy, Setup, Execution)' },
        { en: 'Implement custom solution (hands-on, not just advice)', de: 'Custom Solution implementieren (hands-on, nicht nur Beratung)' },
        { en: 'Train leadership team (on custom solution execution)', de: 'Leadership Team trainieren (auf Custom Solution Execution)' },
      ],
      deliverable: { en: 'Custom solution live (not just strategy)', de: 'Custom Solution live (nicht nur Strategy)' },
      color: 'from-cyan-500 to-blue-600',
    },
    {
      number: '3',
      title: { en: 'Validate', de: 'Validieren' },
      timeline: { en: 'Week 9-12', de: 'Woche 9-12' },
      items: [
        { en: 'Metrics Tracking: Custom Metric 1, Custom Metric 2, Custom Solution Status', de: 'Metriken-Tracking: Custom Metric 1, Custom Metric 2, Custom Solution Status' },
        { en: 'Team Training: Leadership team trained on custom solution', de: 'Team Training: Leadership Team trainiert auf Custom Solution' },
        { en: 'Scale Playbook: How to replicate/scale custom solution', de: 'Scale Playbook: Wie Custom Solution replizieren/skalieren' },
      ],
      deliverable: { en: 'Validated Custom Solution + Scale Playbook', de: 'Validierte Custom Solution + Scale Playbook' },
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
            {language === 'de' ? 'Wie wir deine Custom Solution bauen' : 'How We Build Your Custom Solution'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Wir zwingen keine Standard-Lösungen auf. Wir designen und bauen eine Custom Solution – maßgeschneidert für dein einzigartiges Problem, Business Model und Constraints.'
              : "We don't force-fit standard solutions. We design and build a custom solution—tailored to your unique problem, business model, and constraints."}
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

        {/* Capabilities Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">
            {language === 'de' ? 'Custom Capabilities (Week 3-8):' : 'Custom Capabilities (Week 3-8):'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-card border-2 border-border p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <capability.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-bold text-foreground text-sm">
                    {language === 'de' ? capability.title.de : capability.title.en}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {capability.items.map((item, itemIndex) => (
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
              { en: 'Fully custom (designed for your unique problem)', de: 'Vollständig custom (designt für dein einzigartiges Problem)' },
              { en: '2-3 capabilities transformed (strategy, setup, execution)', de: '2-3 Capabilities transformiert (Strategy, Setup, Execution)' },
              { en: 'Hands-on execution (we implement, not just advise)', de: 'Hands-on Execution (wir implementieren, beraten nicht nur)' },
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
      metric: 'Custom Metric 1 +100-150%',
      icon: Target,
      description: {
        en: 'Your first custom metric improves by 100-150%.',
        de: 'Deine erste Custom Metric verbessert sich um 100-150%.',
      },
      before: { en: 'Custom Metric 1 = Baseline (problem unsolved)', de: 'Custom Metric 1 = Baseline (Problem ungelöst)' },
      after: { en: 'Custom Metric 1 = +100-150% improvement', de: 'Custom Metric 1 = +100-150% Verbesserung' },
      impact: { en: 'From "unique problem" to "unique solution"', de: 'Von "einzigartiges Problem" zu "einzigartige Lösung"' },
      why: {
        en: 'We design a custom solution specifically for your problem—which improves Custom Metric 1 by 100-150% through tailored strategy and execution.',
        de: 'Wir designen eine Custom Solution speziell für dein Problem—was Custom Metric 1 durch maßgeschneiderte Strategy und Execution um 100-150% verbessert.',
      },
    },
    {
      metric: 'Custom Metric 2 +150-200%',
      icon: BarChart3,
      description: {
        en: 'Your second custom metric improves by 150-200%.',
        de: 'Deine zweite Custom Metric verbessert sich um 150-200%.',
      },
      before: { en: 'Custom Metric 2 = Baseline (problem unsolved)', de: 'Custom Metric 2 = Baseline (Problem ungelöst)' },
      after: { en: 'Custom Metric 2 = +150-200% improvement', de: 'Custom Metric 2 = +150-200% Verbesserung' },
      impact: { en: 'From "no solution" to "custom solution working"', de: 'Von "keine Lösung" zu "Custom Solution funktioniert"' },
      why: {
        en: 'We implement a custom solution hands-on—which improves Custom Metric 2 by 150-200% through systematic execution and optimization.',
        de: 'Wir implementieren eine Custom Solution hands-on—was Custom Metric 2 durch systematische Execution und Optimierung um 150-200% verbessert.',
      },
    },
    {
      metric: 'Custom Solution 100%',
      icon: Sparkles,
      description: {
        en: 'Your custom solution is fully built and operational.',
        de: 'Deine Custom Solution ist vollständig gebaut und operational.',
      },
      before: { en: 'Custom Solution = 0% (no solution exists)', de: 'Custom Solution = 0% (keine Lösung existiert)' },
      after: { en: 'Custom Solution = 100% (fully implemented)', de: 'Custom Solution = 100% (vollständig implementiert)' },
      impact: { en: 'From "unique problem unsolved" to "custom solution live"', de: 'Von "einzigartiges Problem ungelöst" zu "Custom Solution live"' },
      why: {
        en: 'We build the custom solution end-to-end—which creates a fully operational system (not just strategy or pilot).',
        de: 'Wir bauen die Custom Solution end-to-end—was ein vollständig operationales System schafft (nicht nur Strategy oder Pilot).',
      },
    },
  ];

  const realExample = {
    company: { en: 'Series B SaaS, €25M ARR, 130 employees', de: 'Series B SaaS, €25M ARR, 130 Mitarbeiter' },
    challenge: {
      en: "Unique GTM model (hybrid PLG + Enterprise), standard CAC/NRR solutions don't fit",
      de: 'Einzigartiges GTM Model (hybrid PLG + Enterprise), Standard CAC/NRR Lösungen passen nicht',
    },
    problems: {
      en: 'Need custom acquisition engine for hybrid model (PLG funnel + Enterprise sales)',
      de: 'Custom Acquisition Engine für Hybrid Model nötig (PLG Funnel + Enterprise Sales)',
    },
    transformation: {
      en: 'Custom solution built (hybrid GTM engine: PLG loops + Enterprise motion) over 90 days',
      de: 'Custom Solution gebaut (Hybrid GTM Engine: PLG Loops + Enterprise Motion) über 90 Tage',
    },
    results: [
      { metric: 'PLG Signups', value: '+120%' },
      { metric: 'Enterprise Pipeline', value: '+180%' },
      { metric: 'Hybrid GTM Engine', value: '100% built' },
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
              ? 'Das sind echte Ergebnisse von Unternehmen mit einzigartigen Problemen (Series A-C, €10M-€50M ARR).'
              : 'These are real results from companies with unique problems (Series A-C, €10M-€50M ARR).'}
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
              <p className="font-medium text-foreground">{language === 'de' ? realExample.company.de : realExample.company.en}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'Herausforderung:' : 'Challenge:'}</p>
              <p className="font-medium text-foreground">{language === 'de' ? realExample.challenge.de : realExample.challenge.en}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'Custom Problem:' : 'Custom Problem:'}</p>
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
        { en: 'Problem Definition (what exactly is the problem?)', de: 'Problem Definition (was genau ist das Problem?)' },
        { en: "Why Standard Solutions Don't Work (gap analysis)", de: 'Warum Standard-Lösungen nicht funktionieren (Gap Analysis)' },
        { en: 'Custom Metrics Design (what metrics matter?)', de: 'Custom Metriken Design (welche Metriken zählen?)' },
        { en: 'Success Criteria (what does "solved" look like?)', de: 'Erfolgskriterien (wie sieht "gelöst" aus?)' },
      ],
      deliverables: [
        { en: 'Custom Problem Report (30-40 pages)', de: 'Custom Problem Report (30-40 Seiten)' },
        { en: 'Custom Metrics Framework (how to measure success)', de: 'Custom Metrics Framework (wie Erfolg messen)' },
        { en: '90-Day Roadmap (phased implementation)', de: '90-Tage-Roadmap (phasenweise Implementierung)' },
        { en: 'ROI Prediction (15-30x over 12 months)', de: 'ROI-Prognose (15-30x über 12 Monate)' },
      ],
    },
    {
      title: { en: 'Build', de: 'Build' },
      timeline: { en: 'Week 3-8', de: 'Woche 3-8' },
      commitment: { en: '20-30 hours', de: '20-30 Stunden' },
      activities: [
        { en: 'Design custom solution (strategy, setup, execution)', de: 'Custom Solution designen (Strategy, Setup, Execution)' },
        { en: 'Implement custom solution (hands-on, not just advice)', de: 'Custom Solution implementieren (hands-on, nicht nur Beratung)' },
        { en: 'Train leadership team (on custom solution execution)', de: 'Leadership Team trainieren (auf Custom Solution Execution)' },
      ],
      deliverables: [
        { en: 'Custom solution live (in your systems)', de: 'Custom Solution live (in deinen Systemen)' },
        { en: 'Custom processes deployed (integrated, not standalone)', de: 'Custom Prozesse deployed (integriert, nicht standalone)' },
        { en: 'Team training (leadership playbooks for custom solution)', de: 'Team Training (Leadership Playbooks für Custom Solution)' },
      ],
    },
    {
      title: { en: 'Validate', de: 'Validieren' },
      timeline: { en: 'Week 9-12', de: 'Woche 9-12' },
      commitment: { en: '10-15 hours', de: '10-15 Stunden' },
      activities: [
        { en: 'Track metrics (Custom Metric 1, Custom Metric 2, Custom Solution Status)', de: 'Metriken tracken (Custom Metric 1, Custom Metric 2, Custom Solution Status)' },
        { en: 'Validate impact (is custom solution working?)', de: 'Impact validieren (funktioniert Custom Solution?)' },
        { en: 'Create scale playbook (how to replicate/scale)', de: 'Scale Playbook erstellen (wie replizieren/skalieren)' },
      ],
      deliverables: [
        { en: 'Metrics Dashboard (real-time tracking)', de: 'Metrics Dashboard (Real-time Tracking)' },
        { en: 'Validated outcomes (with before/after data)', de: 'Validierte Outcomes (mit Vorher/Nachher-Daten)' },
        { en: 'Scale Playbook (step-by-step guide)', de: 'Scale Playbook (Schritt-für-Schritt Anleitung)' },
      ],
    },
  ];

  const metrics = [
    { name: 'Custom Metric 1', description: { en: 'Defined Week 1-2', de: 'Definiert Woche 1-2' } },
    { name: 'Custom Metric 2', description: { en: 'Defined Week 1-2', de: 'Definiert Woche 1-2' } },
    { name: 'Custom Solution', description: { en: 'Status (0-100%)', de: 'Status (0-100%)' } },
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
                'Custom Metric 1 +100-150%',
                'Custom Metric 2 +150-200%',
                'Custom Solution 100%',
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
      title: { en: "Your problem is unique (and standard solutions don't work)", de: 'Dein Problem ist einzigartig (und Standard-Lösungen funktionieren nicht)' },
      items: [
        { en: "Standard offerings don't fit (CAC, NRR, Scaling, AI, Board solutions are close but not exact)", de: 'Standard-Angebote passen nicht (CAC, NRR, Scaling, AI, Board Lösungen sind nah dran, aber nicht exakt)' },
        { en: "You've tried related solutions (Power Up/Boost) but they don't fully solve your problem", de: 'Du hast ähnliche Lösungen probiert (Power Up/Boost), aber sie lösen dein Problem nicht vollständig' },
        { en: 'You have 90 days to solve this unique problem', de: 'Du hast 90 Tage, um dieses einzigartige Problem zu lösen' },
      ],
    },
    {
      title: { en: 'You can define the problem clearly (not just symptoms)', de: 'Du kannst das Problem klar definieren (nicht nur Symptome)' },
      items: [
        { en: 'You know what the problem is (root cause, not symptoms)', de: 'Du weißt, was das Problem ist (Ursache, nicht Symptome)' },
        { en: "You know why standard solutions don't work (specific gaps)", de: 'Du weißt, warum Standard-Lösungen nicht funktionieren (spezifische Gaps)' },
        { en: 'You can define success criteria (measurable, specific)', de: 'Du kannst Erfolgskriterien definieren (messbar, spezifisch)' },
      ],
    },
    {
      title: { en: "You're Series A-C, €10M-€50M ARR", de: 'Du bist Series A-C, €10M-€50M ARR' },
      items: [
        { en: "You've raised funding (Series A-C)", de: 'Du hast Funding erhalten (Series A-C)' },
        { en: 'You have revenue (€10M-€50M ARR)', de: 'Du hast Revenue (€10M-€50M ARR)' },
        { en: 'You have a team (50-200 people)', de: 'Du hast ein Team (50-200 Mitarbeiter)' },
      ],
    },
    {
      title: { en: "You're willing to co-create (not just receive)", de: 'Du bist bereit zur Co-Creation (nicht nur empfangen)' },
      items: [
        { en: "You'll collaborate on custom solution design", de: 'Du wirst beim Custom Solution Design zusammenarbeiten' },
        { en: 'Your leadership team will commit 15-20 hours/week', de: 'Dein Leadership Team committet 15-20 Stunden/Woche' },
        { en: "You'll give us access to systems and data", de: 'Du gibst uns Zugang zu Systemen und Daten' },
      ],
    },
    {
      title: { en: 'You have budget (€60K-€78K)', de: 'Du hast Budget (€60K-€78K)' },
      items: [
        { en: 'You can invest €60K-€78K to build a custom solution', de: 'Du kannst €60K-€78K investieren, um eine Custom Solution zu bauen' },
        { en: 'ROI is 15-30x (based on typical outcomes)', de: 'ROI ist 15-30x (basierend auf typischen Ergebnissen)' },
      ],
    },
  ];

  const notFit = [
    {
      title: { en: 'Your problem fits a standard solution', de: 'Dein Problem passt zu einer Standard-Lösung' },
      description: { en: 'If your problem is CAC, NRR, Scaling, AI, or Board-related, we have standard solutions', de: 'Wenn dein Problem CAC, NRR, Scaling, AI oder Board-bezogen ist, haben wir Standard-Lösungen' },
      alternative: { en: 'Standard Boost offerings (Efficient Hypergrowth, NRR Machine, Scaling OS, AI Maturity, Board Excellence)', de: 'Standard Boost Angebote (Efficient Hypergrowth, NRR Machine, Scaling OS, AI Maturity, Board Excellence)' },
    },
    {
      title: { en: "You can't define the problem clearly", de: 'Du kannst das Problem nicht klar definieren' },
      description: { en: "If you don't know what the problem is, custom solution won't work", de: 'Wenn du nicht weißt, was das Problem ist, wird Custom Solution nicht funktionieren' },
      alternative: { en: 'Inflection Call (30 min, FREE) to diagnose problem first', de: 'Inflection Call (30 min, KOSTENLOS), um Problem erst zu diagnostizieren' },
    },
    {
      title: { en: "You're not ready to co-create", de: 'Du bist nicht bereit zur Co-Creation' },
      description: { en: 'If you just want us to "fix it", we\'re not the right fit', de: 'Wenn du nur willst, dass wir es "fixen", sind wir nicht der richtige Fit' },
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
            {language === 'de' ? 'Qualifikation' : "Who It's For"}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Ist das richtig für dich?' : 'Is This Right for You?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Boost: Custom Program funktioniert am besten für Unternehmen in dieser Situation.'
              : 'Boost: Custom Program works best for companies in this situation.'}
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

  const faqs = [
    {
      question: { en: 'How long does Custom Program take?', de: 'Wie lange dauert Custom Program?' },
      answer: { en: '90 days (12 weeks, phased implementation)', de: '90 Tage (12 Wochen, phasenweise Implementierung)' },
    },
    {
      question: { en: "What's the investment?", de: 'Was ist das Investment?' },
      answer: { en: '€60K-€78K (stage-based: Series A €60K, Series B €68K, Series C €78K)', de: '€60K-€78K (Stage-basiert: Series A €60K, Series B €68K, Series C €78K)' },
    },
    {
      question: { en: "What if it doesn't work?", de: 'Was wenn es nicht funktioniert?' },
      answer: {
        en: "We guarantee 2 of 3 outcomes (Custom Metric 1 +100-150%, Custom Metric 2 +150-200%, Custom Solution Fully Implemented). If we don't hit 2 of 3, you get 50% refund.",
        de: 'Wir garantieren 2 von 3 Ergebnissen (Custom Metric 1 +100-150%, Custom Metric 2 +150-200%, Custom Solution vollständig implementiert). Wenn wir 2 von 3 nicht erreichen, bekommst du 50% Rückerstattung.',
      },
    },
    {
      question: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' },
      answer: {
        en: "Yes. We'll connect you with a CEO who's worked with us on a custom problem (same stage, similar complexity).",
        de: 'Ja. Wir verbinden dich mit einem CEO, der mit uns an einem custom Problem gearbeitet hat (gleiche Stage, ähnliche Komplexität).',
      },
    },
    {
      question: { en: "What's the ROI?", de: 'Was ist der ROI?' },
      answer: { en: 'Typical ROI is 15-30x (based on custom solution impact over 12 months).', de: 'Typischer ROI ist 15-30x (basierend auf Custom Solution Impact über 12 Monate).' },
    },
    {
      question: { en: 'How is this different from standard Boost?', de: 'Wie unterscheidet sich das von Standard Boost?' },
      answer: {
        en: 'Standard Boost solves known problems (CAC, NRR, Scaling, AI, Board). Custom Program solves unique problems that don\'t fit standard solutions.',
        de: 'Standard Boost löst bekannte Probleme (CAC, NRR, Scaling, AI, Board). Custom Program löst einzigartige Probleme, die nicht in Standard-Lösungen passen.',
      },
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
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Nächste Schritte' : 'Next Steps'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Bereit, deine Custom Solution zu bauen?' : 'Ready to Build Your Custom Solution?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de' ? 'Hier ist, was als nächstes passiert.' : "Here's what happens next."}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 mb-16">
          {/* Step 1 */}
          <div className="bg-card border-2 border-border p-8 rounded-lg text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-lg mb-4">
              1
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              {language === 'de' ? 'Buche ein kostenloses Inflection Call (30 Min.)' : 'Book a Free Inflection Call (30 min)'}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              {language === 'de'
                ? 'In 30 Minuten diagnostizieren wir dein einzigartiges Problem und zeigen dir genau, wie wir eine Custom Solution bauen würden. Kein Pitch. Kein Druck. Nur Klarheit.'
                : "In 30 minutes, we'll diagnose your unique problem and show you exactly how we'd build a custom solution. No pitch, no pressure—just clarity."}
            </p>
            <Button
              size="xl"
              className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
              onClick={() => window.open('https://calendly.com/michel-scalingx/boost', '_blank')}
            >
              {language === 'de' ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book Free Inflection Call (30 min)'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Step 2 */}
          <div className="bg-card border-2 border-border p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-foreground font-bold text-sm flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {language === 'de' ? 'Entscheide, ob Custom Program richtig für dich ist' : 'Decide if Custom Program is Right for You'}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'de' ? 'Nach dem Inflection Call wirst du wissen:' : 'After the Inflection Call, you\'ll know:'}
                </p>
                <ul className="space-y-1">
                  {[
                    { en: 'What your unique problem is (root cause, not symptoms)', de: 'Was dein einzigartiges Problem ist (Ursache, nicht Symptome)' },
                    { en: "Why standard solutions don't work (specific gaps)", de: 'Warum Standard-Lösungen nicht funktionieren (spezifische Gaps)' },
                    { en: "How we'd build a custom solution (with examples)", de: 'Wie wir eine Custom Solution bauen würden (mit Beispielen)' },
                    { en: 'Whether Custom Program is the right fit (or if standard Boost works)', de: 'Ob Custom Program der richtige Fit ist (oder ob Standard Boost funktioniert)' },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{language === 'de' ? item.de : item.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Alternative */}
          <div className="bg-muted/30 border border-border p-6 rounded-lg">
            <h3 className="text-lg font-bold text-foreground mb-2">
              {language === 'de' ? 'Alternative: Starte mit einer Custom Analyse' : 'Alternative: Start With a Custom Analysis'}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {language === 'de'
                ? 'Noch nicht bereit für ein volles Custom Program? Starte kleiner:'
                : 'Not ready for a full Custom Program? Start smaller:'}
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <div>
                <span className="font-bold text-foreground">{language === 'de' ? 'Custom Analyse & Report' : 'Custom Analysis & Report'}</span>
                <span className="text-sm text-muted-foreground ml-2">(1-2 {language === 'de' ? 'Wochen' : 'weeks'}, €3.9K-€5.9K)</span>
              </div>
              <Button variant="outline" size="sm" onClick={() => window.open('https://calendly.com/michel-scalingx/boost', '_blank')}>
                {language === 'de' ? 'Custom Analyse buchen' : 'Book Custom Analysis'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            {language === 'de' ? 'Häufig gestellte Fragen' : 'Frequently Asked Questions'}
          </h3>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-card border-2 border-border rounded-lg px-6">
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
        <div className="text-center">
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => window.open('https://calendly.com/michel-scalingx/boost', '_blank')}
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
      </div>
    </section>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const BoostCustomProgram: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
    </div>
  );
};

export default BoostCustomProgram;
