import React, { useEffect, useState } from 'react';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
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
  Brain,
  Zap,
  BarChart3,
  Target,
  Users,
  Clock,
  FileText,
  MessageCircle,
  Shield,
  Settings,
  Sparkles,
  Layers,
  Rocket,
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
    { value: '+30-50%', label: { en: 'AI Maturity Score', de: 'AI Maturity Score' }, sublabel: { en: 'AI Maturity', de: 'AI Maturity' } },
    { value: '+10-20', label: { en: 'AI Use Cases', de: 'AI Use Cases' }, sublabel: { en: 'Deployed', de: 'Deployed' } },
    { value: '+40-60%', label: { en: 'Automation', de: 'Automation' }, sublabel: { en: 'Process', de: 'Prozess' } },
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
              <span className="text-foreground font-medium">Boost AI Maturity</span>
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
          <span className="block text-foreground">AI-Powered →</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            AI-Native Built
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Baue deine AI Maturity in 90 Tagen. Typische Ergebnisse: AI Maturity Score +30-50%, AI Use Cases +10-20, Automation +40-60% – mit 2 von 3 Ergebnissen garantiert.'
            : 'Build your AI maturity in 90 days. Typical outcomes: AI Maturity Score +30-50%, AI Use Cases +10-20, Process Automation +40-60%—with 2 of 3 outcomes guaranteed.'}
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
    { en: 'Low AI maturity: AI Maturity Score 30% (Level 1: AI-Powered), using AI as tool only', de: 'Niedrige AI Maturity: AI Maturity Score 30% (Level 1: AI-Powered), AI nur als Tool' },
    { en: 'Few AI use cases: 2-5 use cases (benchmark: 20-50+), mostly pilots', de: 'Wenige AI Use Cases: 2-5 Use Cases (Benchmark: 20-50+), meist Piloten' },
    { en: 'Low automation: 10-20% (benchmark: 60-80%+), still manual processes', de: 'Niedrige Automation: 10-20% (Benchmark: 60-80%+), noch manuelle Prozesse' },
    { en: 'Slow time to market: 60-84 months to €100M (benchmark: 8-18 months)', de: 'Langsame Time-to-Market: 60-84 Monate bis €100M (Benchmark: 8-18 Monate)' },
    { en: 'Board pressure: "When will we become AI-native?"', de: 'Board-Druck: "Wann werden wir AI-native?"' },
  ];

  const beforeAfter = {
    before: [
      { metric: 'AI Maturity Score', value: '30% (Level 1)' },
      { metric: 'AI Use Cases', value: '2-5' },
      { metric: 'Automation', value: '10-20%' },
    ],
    after: [
      { metric: 'AI Maturity Score', value: '60-80% (Level 2)' },
      { metric: 'AI Use Cases', value: '15-25' },
      { metric: 'Automation', value: '50-80%' },
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
            {language === 'de' ? 'Du bist AI-Powered, nicht AI-Native' : "You're AI-Powered, Not AI-Native"}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Dein AI Maturity Score liegt bei 30% (Level 1: AI-Powered). Deine Wettbewerber sind bei 80%+ (Level 3: AI-Native). Du nutzt AI als Tool (ChatGPT, Copilot), aber nicht als System. Deine Time-to-€100M liegt bei 60-84 Monaten (Benchmark: 8-18 Monate für AI-Native). Und das Schlimmste: Das Board fragt: "Wann werden wir AI-native?"'
              : 'Your AI Maturity Score is 30% (Level 1: AI-Powered). Your competitors are 80%+ (Level 3: AI-Native). You\'re using AI as a tool (ChatGPT, Copilot), but not as a system. Your time to €100M is 60-84 months (benchmark: 8-18 months for AI-native). And worst of all—the board is asking: "When will we become AI-native?"'}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Du hast die offensichtlichen Fixes ausprobiert: AI-Tools kaufen, AI-Piloten starten, AI-Engineers einstellen. Aber nichts funktioniert. Denn das Problem ist nicht ein AI-Issue – es ist dein gesamtes AI Maturity Level.'
              : "You've tried the obvious fixes: buying AI tools, running AI pilots, hiring AI engineers. But nothing is working. Because the problem isn't one AI issue—it's your entire AI maturity level."}
          </p>
        </div>

        {/* Symptoms Checklist */}
        <div className="max-w-2xl mx-auto mb-16">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">
            {language === 'de' ? 'AI Maturity Symptome:' : 'AI Maturity Symptoms:'}
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
              {language === 'de' ? 'Vorher (Level 1)' : 'Before (Level 1)'}
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
              {language === 'de' ? 'Nachher (Level 2)' : 'After (Level 2)'}
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
      title: { en: 'AI Strategy', de: 'AI Strategy' },
      items: [
        { en: 'Design AI vision (where will AI create value?)', de: 'AI Vision designen (wo wird AI Wert schaffen?)' },
        { en: 'Build AI roadmap (which use cases first?)', de: 'AI Roadmap bauen (welche Use Cases zuerst?)' },
        { en: 'Create AI governance (who owns AI decisions?)', de: 'AI Governance erstellen (wer owned AI-Entscheidungen?)' },
        { en: 'Set AI metrics (how do we measure AI impact?)', de: 'AI Metriken setzen (wie messen wir AI-Impact?)' },
      ],
    },
    {
      icon: Settings,
      title: { en: 'AI Setup', de: 'AI Setup' },
      items: [
        { en: 'Select AI tools (which tools for which use cases?)', de: 'AI Tools auswählen (welche Tools für welche Use Cases?)' },
        { en: 'Build AI infrastructure (data, APIs, integrations)', de: 'AI Infrastruktur bauen (Daten, APIs, Integrationen)' },
        { en: 'Design AI workflows (how does AI fit into processes?)', de: 'AI Workflows designen (wie passt AI in Prozesse?)' },
        { en: 'Train AI team (on AI tools and best practices)', de: 'AI Team trainieren (auf AI Tools und Best Practices)' },
      ],
    },
    {
      icon: Rocket,
      title: { en: 'AI Execution', de: 'AI Execution' },
      items: [
        { en: 'Deploy AI use cases (10-20 across GTM, product, ops)', de: 'AI Use Cases deployen (10-20 über GTM, Produkt, Ops)' },
        { en: 'Implement AI automation (workflow automation)', de: 'AI Automation implementieren (Workflow-Automation)' },
        { en: 'Optimize AI performance (continuous improvement)', de: 'AI Performance optimieren (kontinuierliche Verbesserung)' },
        { en: 'Scale AI adoption (from pilots to production)', de: 'AI Adoption skalieren (von Piloten zu Produktion)' },
      ],
    },
    {
      icon: Users,
      title: { en: 'AI Operationalization', de: 'AI Operationalization' },
      items: [
        { en: 'Build AI culture (AI-first mindset)', de: 'AI Kultur bauen (AI-first Mindset)' },
        { en: 'Create AI playbooks (systematic AI usage)', de: 'AI Playbooks erstellen (systematische AI-Nutzung)' },
        { en: 'Implement AI governance (policies, compliance)', de: 'AI Governance implementieren (Policies, Compliance)' },
      ],
    },
  ];

  const phases = [
    {
      number: '1',
      title: { en: 'Diagnose', de: 'Diagnose' },
      timeline: { en: 'Week 1-2', de: 'Woche 1-2' },
      items: [
        { en: 'AI Maturity Assessment: What\'s your current level? (0-100% scale, 8 dimensions)', de: 'AI Maturity Assessment: Wie hoch ist dein aktuelles Level? (0-100% Skala, 8 Dimensionen)' },
        { en: 'AI Use Case Analysis: Where should AI be deployed?', de: 'AI Use Case Analyse: Wo sollte AI deployed werden?' },
        { en: 'AI Capability Analysis: What AI capabilities are missing?', de: 'AI Capability Analyse: Welche AI Capabilities fehlen?' },
        { en: 'AI Readiness: What\'s blocking AI adoption?', de: 'AI Readiness: Was blockiert AI-Adoption?' },
      ],
      deliverable: { en: 'AI Maturity Report (30-40 pages) + 90-Day Roadmap', de: 'AI Maturity Report (30-40 Seiten) + 90-Tage-Roadmap' },
      color: 'from-violet-500 to-purple-600',
    },
    {
      number: '2',
      title: { en: 'Build', de: 'Build' },
      timeline: { en: 'Week 3-8', de: 'Woche 3-8' },
      items: [
        { en: 'AI Strategy (C₁): Vision, roadmap, governance, metrics', de: 'AI Strategy (C₁): Vision, Roadmap, Governance, Metriken' },
        { en: 'AI Setup (C₂): Tools, infrastructure, workflows, training', de: 'AI Setup (C₂): Tools, Infrastruktur, Workflows, Training' },
        { en: 'AI Execution (C₃): Deploy 10-20 use cases, automation', de: 'AI Execution (C₃): 10-20 Use Cases deployen, Automation' },
        { en: 'AI Operationalization (C₄): Culture, playbooks, governance', de: 'AI Operationalization (C₄): Kultur, Playbooks, Governance' },
      ],
      deliverable: { en: 'AI Maturity live (in your systems)', de: 'AI Maturity live (in deinen Systemen)' },
      color: 'from-cyan-500 to-blue-600',
    },
    {
      number: '3',
      title: { en: 'Validate', de: 'Validieren' },
      timeline: { en: 'Week 9-12', de: 'Woche 9-12' },
      items: [
        { en: 'Metrics Tracking: θ_index, AI Use Cases, Automation', de: 'Metriken-Tracking: θ_index, AI Use Cases, Automation' },
        { en: 'Team Training: Leadership trained on AI-native ops', de: 'Team-Training: Leadership auf AI-native Ops trainiert' },
        { en: 'Scale Playbook: How to reach Level 3 (AI-Native)', de: 'Scale Playbook: Wie man Level 3 erreicht (AI-Native)' },
      ],
      deliverable: { en: 'Validated AI maturity + Scale Playbook', de: 'Validierte AI Maturity + Scale Playbook' },
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
            {language === 'de' ? 'Wie wir deine AI Maturity aufbauen' : 'How We Build Your AI Maturity'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Wir deployen nicht nur AI Tools. Wir bauen deine gesamte AI Maturity auf – damit du AI-native Operations mit systematischer AI-Integration erreichst.'
              : "We don't just deploy AI tools. We rebuild your entire AI maturity—so you achieve AI-native operations with systematic AI integration."}
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

        {/* AI Components Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">
            {language === 'de' ? 'Alle 4 AI Capabilities transformiert:' : 'All 4 AI Capabilities Transformed:'}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
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
              { en: 'Full maturity rebuild (all 4 capabilities)', de: 'Vollständiger Maturity-Aufbau (alle 4 Capabilities)' },
              { en: 'Systematic AI integration (10-20 use cases)', de: 'Systematische AI-Integration (10-20 Use Cases)' },
              { en: 'AI-native transformation (Level 1 → Level 2)', de: 'AI-native Transformation (Level 1 → Level 2)' },
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
      metric: 'θ_index +0.3-0.5',
      icon: Brain,
      description: {
        en: 'Your AI maturity index increases by 0.3-0.5 points.',
        de: 'Dein AI Maturity Index steigt um 0.3-0.5 Punkte.',
      },
      before: { en: 'θ_index 0.3 (Level 1: AI-Powered)', de: 'θ_index 0.3 (Level 1: AI-Powered)' },
      after: { en: 'θ_index 0.6-0.8 (Level 2: AI-Enabled)', de: 'θ_index 0.6-0.8 (Level 2: AI-Enabled)' },
      impact: { en: 'From "AI as tool" to "AI as system"', de: 'Von "AI als Tool" zu "AI als System"' },
      why: {
        en: 'We transform all 4 capabilities (strategy, setup, execution, operationalization)—which increases θ_index by 0.3-0.5 through systematic AI integration.',
        de: 'Wir transformieren alle 4 Capabilities (Strategy, Setup, Execution, Operationalization)—was den θ_index durch systematische AI-Integration um 0.3-0.5 steigert.',
      },
    },
    {
      metric: 'AI Use Cases +10-20',
      icon: Layers,
      description: {
        en: 'Your deployed AI use cases increase by 10-20.',
        de: 'Deine deployten AI Use Cases steigen um 10-20.',
      },
      before: { en: '2-5 AI use cases (mostly pilots)', de: '2-5 AI Use Cases (meist Piloten)' },
      after: { en: '15-25 AI use cases (production-ready)', de: '15-25 AI Use Cases (produktionsreif)' },
      impact: { en: 'From "AI pilots" to "AI at scale"', de: 'Von "AI-Piloten" zu "AI at Scale"' },
      why: {
        en: 'We deploy AI systematically across GTM, product, and operations—which increases use cases by 10-20 through structured implementation.',
        de: 'Wir deployen AI systematisch über GTM, Produkt und Operations—was Use Cases durch strukturierte Implementierung um 10-20 steigert.',
      },
    },
    {
      metric: 'Automation +40-60%',
      icon: Zap,
      description: {
        en: 'Your process automation rate increases by 40-60 percentage points.',
        de: 'Deine Prozess-Automationsrate steigt um 40-60 Prozentpunkte.',
      },
      before: { en: '10-20% automation (mostly manual)', de: '10-20% Automation (meist manuell)' },
      after: { en: '50-80% automation (AI-powered)', de: '50-80% Automation (AI-powered)' },
      impact: { en: 'From "manual operations" to "automated operations"', de: 'Von "manuelle Operations" zu "automatisierte Operations"' },
      why: {
        en: 'We implement AI-powered workflow automation—which increases automation by 40-60% through systematic AI deployment.',
        de: 'Wir implementieren AI-powered Workflow-Automation—was Automation durch systematisches AI-Deployment um 40-60% steigert.',
      },
    },
  ];

  const realExample = {
    company: 'Series B SaaS, €20M ARR, 120 employees',
    challenge: {
      en: 'θ_index 0.35 (Level 1), 4 AI use cases, 15% automation',
      de: 'θ_index 0.35 (Level 1), 4 AI Use Cases, 15% Automation',
    },
    problems: {
      en: 'AI as tool only, no AI strategy, pilots not scaled, manual processes',
      de: 'AI nur als Tool, keine AI Strategy, Piloten nicht skaliert, manuelle Prozesse',
    },
    transformation: {
      en: 'AI maturity built (AI vision, 18 use cases deployed, workflow automation) over 90 days',
      de: 'AI Maturity aufgebaut (AI Vision, 18 Use Cases deployed, Workflow-Automation) über 90 Tage',
    },
    results: [
      { metric: 'θ_index', value: '+0.42 (0.35 → 0.77)' },
      { metric: 'AI Use Cases', value: '+14 (4 → 18)' },
      { metric: 'Automation', value: '+52pp (15% → 67%)' },
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
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'AI-Probleme:' : 'AI Problems:'}</p>
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
      activities: [
        { en: 'θ_index Assessment (what\'s your AI maturity?)', de: 'θ_index Assessment (wie hoch ist deine AI Maturity?)' },
        { en: 'AI Use Case Analysis (where should AI be deployed?)', de: 'AI Use Case Analyse (wo sollte AI deployed werden?)' },
        { en: 'AI Capability Analysis (what\'s missing?)', de: 'AI Capability Analyse (was fehlt?)' },
        { en: 'AI Readiness Analysis (what\'s blocking adoption?)', de: 'AI Readiness Analyse (was blockiert Adoption?)' },
      ],
      deliverables: [
        { en: 'AI Maturity Report (30-40 pages)', de: 'AI Maturity Report (30-40 Seiten)' },
        { en: '90-Day Roadmap (phased implementation)', de: '90-Tage-Roadmap (phasenweise Implementierung)' },
        { en: 'ROI Prediction (20-40x over 12 months)', de: 'ROI-Vorhersage (20-40x über 12 Monate)' },
      ],
      commitment: { en: '12-16 hours', de: '12-16 Stunden' },
    },
    {
      title: { en: 'Build', de: 'Build' },
      timeline: { en: 'Week 3-8', de: 'Woche 3-8' },
      activities: [
        { en: 'Rebuild AI maturity (strategy, setup, execution, operationalization)', de: 'AI Maturity aufbauen (Strategy, Setup, Execution, Operationalization)' },
        { en: 'Deploy AI use cases (10-20 across GTM, product, operations)', de: 'AI Use Cases deployen (10-20 über GTM, Produkt, Operations)' },
        { en: 'Train leadership team (on AI-native operations)', de: 'Leadership Team trainieren (auf AI-native Operations)' },
      ],
      deliverables: [
        { en: 'AI maturity live (in your systems)', de: 'AI Maturity live (in deinen Systemen)' },
        { en: 'AI use cases deployed (production-ready)', de: 'AI Use Cases deployed (produktionsreif)' },
        { en: 'Team training (leadership playbooks for AI)', de: 'Team-Training (Leadership Playbooks für AI)' },
      ],
      commitment: { en: '20-30 hours', de: '20-30 Stunden' },
    },
    {
      title: { en: 'Validate', de: 'Validieren' },
      timeline: { en: 'Week 9-12', de: 'Woche 9-12' },
      activities: [
        { en: 'Track metrics (θ_index, AI Use Cases, Automation)', de: 'Metriken tracken (θ_index, AI Use Cases, Automation)' },
        { en: 'Validate impact (is AI working?)', de: 'Impact validieren (funktioniert AI?)' },
        { en: 'Create scale playbook (how to reach Level 3)', de: 'Scale Playbook erstellen (wie man Level 3 erreicht)' },
      ],
      deliverables: [
        { en: 'Metrics Dashboard (real-time tracking)', de: 'Metriken-Dashboard (Echtzeit-Tracking)' },
        { en: 'Validated outcomes (with before/after data)', de: 'Validierte Ergebnisse (mit Vorher/Nachher-Daten)' },
        { en: 'Scale Playbook (step-by-step guide)', de: 'Scale Playbook (Schritt-für-Schritt-Anleitung)' },
      ],
      commitment: { en: '10-15 hours', de: '10-15 Stunden' },
    },
  ];

  const metrics = [
    { name: 'θ_index', description: { en: 'AI Maturity Index, 0-1 scale', de: 'AI Maturity Index, 0-1 Skala' } },
    { name: 'AI Use Cases', description: { en: 'Number deployed', de: 'Anzahl deployed' } },
    { name: 'Process Automation', description: { en: 'Percentage', de: 'Prozentsatz' } },
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
            {language === 'de' ? 'Der Boost-Prozess (Woche für Woche)' : 'The Boost Process (Week-by-Week)'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Transparente Timeline. Klare Deliverables. Messbare Ergebnisse.'
              : 'Transparent timeline. Clear deliverables. Measurable outcomes.'}
          </p>
        </div>

        {/* Process Timeline */}
        <div className="space-y-8 mb-16">
          {phases.map((phase, index) => (
            <div key={index} className="bg-card border-2 border-border rounded-lg p-6">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge variant="outline" className="text-sm font-bold">
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
                'θ_index +0.3-0.5',
                'AI Use Cases +10-20',
                'Automation +40-60%',
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
      title: { en: "You're AI-Powered, not AI-Native", de: 'Du bist AI-Powered, nicht AI-Native' },
      items: [
        { en: 'θ_index is 0.2-0.5 (Level 1: AI-Powered, AI as tool)', de: 'θ_index liegt bei 0.2-0.5 (Level 1: AI-Powered, AI als Tool)' },
        { en: 'Competitors are 0.8+ (Level 3: AI-Native)', de: 'Wettbewerber liegen bei 0.8+ (Level 3: AI-Native)' },
        { en: 'You have 90 days to become AI-enabled', de: 'Du hast 90 Tage Zeit, AI-enabled zu werden' },
      ],
    },
    {
      title: { en: 'You have multiple AI problems', de: 'Du hast mehrere AI-Probleme' },
      items: [
        { en: 'Do you lack AI strategy? (no vision, no roadmap?)', de: 'Fehlt dir AI Strategy? (keine Vision, keine Roadmap?)' },
        { en: 'Are AI use cases limited? (2-5 pilots, not 20+?)', de: 'Sind AI Use Cases limitiert? (2-5 Piloten, nicht 20+?)' },
        { en: 'Is automation low? (10-20%, not 60-80%+?)', de: 'Ist Automation niedrig? (10-20%, nicht 60-80%+?)' },
        { en: 'Is AI adoption slow? (pilots not scaling?)', de: 'Ist AI Adoption langsam? (Piloten skalieren nicht?)' },
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
        { en: "You'll give us access to systems", de: 'Du gibst uns Zugang zu Systemen' },
      ],
    },
    {
      title: { en: 'You have budget (€60K-€78K)', de: 'Du hast Budget (€60K-€78K)' },
      items: [
        { en: 'You can invest €60K-€78K to rebuild AI maturity', de: 'Du kannst €60K-€78K investieren, um AI Maturity aufzubauen' },
        { en: 'ROI is 20-40x (based on typical outcomes)', de: 'ROI ist 20-40x (basierend auf typischen Ergebnissen)' },
      ],
    },
  ];

  const notFit = [
    {
      title: { en: 'You only need AI tools', de: 'Du brauchst nur AI-Tools' },
      description: { en: 'If you just need to deploy one AI tool, Boost is overkill', de: 'Wenn du nur ein AI-Tool deployen musst, ist Boost Overkill' },
      alternative: { en: 'Power Up (30 days, €23.6K) for single AI use cases', de: 'Power Up (30 Tage, €23.6K) für einzelne AI Use Cases' },
    },
    {
      title: { en: 'You need full AI-native transformation', de: 'Du brauchst eine vollständige AI-native Transformation' },
      description: { en: 'If you need to reach Level 3 (12 months), Boost is too short', de: 'Wenn du Level 3 erreichen musst (12 Monate), ist Boost zu kurz' },
      alternative: { en: 'Accelerate (12 months, €153K) for full AI-native transformation', de: 'Accelerate (12 Monate, €153K) für vollständige AI-native Transformation' },
    },
    {
      title: { en: "You're not ready to execute", de: 'Du bist nicht bereit zu executen' },
      description: { en: 'If you just want an AI strategy deck, we\'re not the right fit', de: 'Wenn du nur ein AI Strategy Deck willst, sind wir nicht der richtige Fit' },
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
              ? 'Boost: AI Maturity funktioniert am besten für Unternehmen in dieser Situation.'
              : 'Boost: AI Maturity works best for companies in this situation.'}
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
      question: { en: 'How long does Boost take?', de: 'Wie lange dauert Boost?' },
      answer: { en: '90 days (12 weeks, phased implementation)', de: '90 Tage (12 Wochen, phasenweise Implementierung)' },
    },
    {
      question: { en: "What's the investment?", de: 'Was ist das Investment?' },
      answer: { en: '€60K-€78K (stage-based: Series A €60K, Series B €68K, Series C €78K)', de: '€60K-€78K (stage-basiert: Series A €60K, Series B €68K, Series C €78K)' },
    },
    {
      question: { en: "What if it doesn't work?", de: 'Was wenn es nicht funktioniert?' },
      answer: { en: "We guarantee 2 of 3 outcomes (θ_index +0.3-0.5, AI Use Cases +10-20, Automation +40-60%). If we don't hit 2 of 3, you get 50% refund.", de: 'Wir garantieren 2 von 3 Ergebnissen (θ_index +0.3-0.5, AI Use Cases +10-20, Automation +40-60%). Wenn wir 2 von 3 nicht erreichen, bekommst du 50% Rückerstattung.' },
    },
    {
      question: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' },
      answer: { en: "Yes. We'll connect you with a CEO who's worked with us (same stage, same challenge).", de: 'Ja. Wir verbinden dich mit einem CEO, der mit uns gearbeitet hat (gleiche Stage, gleiche Herausforderung).' },
    },
    {
      question: { en: "What's the ROI?", de: 'Was ist der ROI?' },
      answer: { en: 'Typical ROI is 20-40x (based on efficiency gains and automation over 12 months).', de: 'Typischer ROI ist 20-40x (basierend auf Effizienzgewinnen und Automation über 12 Monate).' },
    },
    {
      question: { en: "What's the difference between Boost and Accelerate?", de: 'Was ist der Unterschied zwischen Boost und Accelerate?' },
      answer: { en: 'Boost (90 days) gets you to Level 2 (AI-Enabled). Accelerate (12 months) gets you to Level 3 (AI-Native).', de: 'Boost (90 Tage) bringt dich zu Level 2 (AI-Enabled). Accelerate (12 Monate) bringt dich zu Level 3 (AI-Native).' },
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
            {language === 'de' ? 'Bereit, deine AI Maturity aufzubauen?' : 'Ready to Build Your AI Maturity?'}
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
                ? 'In 30 Minuten werden wir: Deine AI Maturity assessieren (was ist dein θ_index?), dir genau zeigen, wie wir sie aufbauen würden (mit Beispielen), dir eine klare Empfehlung geben (Boost, Power Up, Accelerate, oder DIY).'
                : "In 30 minutes, we'll: Assess your AI maturity (what's your θ_index?), show you exactly how we'd rebuild it (with examples), give you a clear recommendation (Boost, Power Up, Accelerate, or DIY)."}
            </p>
            <p className="text-sm text-accent font-medium mb-6">
              {language === 'de' ? 'Kein Pitch. Kein Druck. Nur Klarheit.' : 'No pitch. No pressure. Just clarity.'}
            </p>
            <Button
              size="xl"
              className="w-full sm:w-auto bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
              onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
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
                ? 'Nach dem Inflection Call wirst du wissen: Was dein AI Maturity Level ist, wie wir deine AI Maturity aufbauen würden, welche Ergebnisse zu erwarten sind, ob Boost der richtige Fit ist.'
                : "After the Inflection Call, you'll know: What your AI maturity level is, how we'd rebuild your AI maturity, what outcomes to expect, whether Boost is the right fit."}
            </p>
            <p className="text-sm text-muted-foreground font-medium">
              {language === 'de' ? 'Du entscheidest. Kein Druck.' : 'You decide. No pressure.'}
            </p>
          </div>

          {/* Alternative */}
          <div className="bg-muted/30 border-2 border-border p-6 rounded-lg">
            <h3 className="text-lg font-bold text-foreground mb-2">
              {language === 'de' ? 'Alternative: Starte mit einem AI Maturity Assessment' : 'Alternative: Start with an AI Maturity Assessment'}
            </h3>
            <p className="text-muted-foreground mb-4">
              {language === 'de' ? 'Noch nicht bereit für einen vollständigen Boost? Starte kleiner:' : 'Not ready for a full Boost? Start smaller:'}
            </p>
            <div className="bg-card border border-border p-4 rounded-lg">
              <h4 className="font-bold text-foreground mb-2">
                {language === 'de' ? 'AI Maturity Assessment (3-5 Tage, €3.9K-€5.9K)' : 'AI Maturity Assessment (3-5 days, €3.9K-€5.9K)'}
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-accent" />
                  {language === 'de' ? 'Deep-Dive in deine AI Maturity' : 'Deep-dive into your AI maturity'}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-accent" />
                  {language === 'de' ? 'Berechne deinen θ_index (0-1 Skala)' : 'Calculate your θ_index (0-1 scale)'}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-accent" />
                  {language === 'de' ? 'Gehe mit einer 90-Tage AI Roadmap' : 'Walk away with a 90-day AI roadmap'}
                </li>
              </ul>
              <Button variant="outline" className="border-2" onClick={() => window.open('https://calendly.com/michel-scalingx/ai-assessment', '_blank')}>
                {language === 'de' ? 'AI Assessment buchen' : 'Book AI Assessment'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">FAQ</h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">
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
            onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
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
// MAIN PAGE COMPONENT
// ============================================================================
const BoostAIMaturity: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleOpenModal = () => setIsBookingModalOpen(true);
    window.addEventListener('openBookingModal', handleOpenModal);
    return () => window.removeEventListener('openBookingModal', handleOpenModal);
  }, []);

  return (
    <div className="min-h-screen bg-background">
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

export default BoostAIMaturity;
