import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallaxLayers } from '@/hooks/useParallax';
import TwinklingStars from '@/components/TwinklingStars';
import {
  ArrowRight,
  ChevronDown,
  Check,
  X,
  AlertTriangle,
  TrendingUp,
  Target,
  Users,
  Settings,
  Zap,
  Download,
  Phone,
  Clock,
  Award,
  BarChart3,
  Brain,
  Rocket,
  FileText,
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
              <BreadcrumbLink href="/playbooks" className="text-muted-foreground hover:text-foreground">
                Playbooks
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-foreground font-medium">GTM/Revenue Playbook</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Badge */}
        <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <TrendingUp className="w-4 h-4 mr-2" />
          Playbook · Growth Engines
        </Badge>

        {/* Headline */}
        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">GTM/Revenue Playbook</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'Revenue Engine mit AI skalieren' : 'Build a Revenue Engine That Scales with AI'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Lerne das 3-Komponenten-Framework (ICP Clarity + Sales Motion + RevOps), das AI-native Unternehmen nutzen, um CAC um 50% zu senken und Win Rates um 100% zu steigern.'
            : 'Learn the 3-component framework (ICP Clarity + Sales Motion + RevOps) used by AI-native companies to reduce CAC by 50% and increase win rates by 100%.'}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => window.open('https://calendly.com/michel-scalingx/inflection-call', '_blank')}
          >
            <Phone className="w-5 h-5 mr-2" />
            {language === 'de' ? 'Kostenloses Inflection Call buchen' : 'Book Free Inflection Call'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('executive-summary')}
            className="border-2"
          >
            <Download className="w-4 h-4 mr-2" />
            {language === 'de' ? 'Playbook herunterladen' : 'Download Playbook PDF'}
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-accent" />
            <span>{language === 'de' ? '~2,400 Wörter' : '~2,400 Words'}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-accent" />
            <span>{language === 'de' ? '3 Fallstudien' : '3 Case Studies'}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-accent" />
            <span>{language === 'de' ? '12-Wochen Roadmap' : '12-Week Roadmap'}</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('executive-summary')}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-fade-in cursor-pointer"
        style={{ animationDelay: '1s' }}
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

// ============================================================================
// SECTION 2: EXECUTIVE SUMMARY
// ============================================================================
const ExecutiveSummarySection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="executive-summary"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 bg-background transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Zusammenfassung' : 'Executive Summary'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            GTM/Revenue Playbook
          </h2>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* The Problem */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-destructive mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              {language === 'de' ? 'Das Problem' : 'The Problem'}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'de'
                ? 'Die meisten Series B/C Unternehmen kämpfen mit CAC-Inflation und sinkenden Win Rates. Das Revenue-Wachstum verlangsamt sich von 100% auf 30%, während du von €10M auf €50M ARR skalierst. Das traditionelle Playbook (mehr Reps einstellen, mehr Ads schalten) funktioniert nicht mehr.'
                : "Most Series B/C companies struggle with CAC inflation and declining win rates. Revenue growth slows from 100% → 30% as you scale from €10M → €50M ARR. The traditional playbook (hire more reps, increase ad spend) doesn't work anymore."}
            </p>
          </div>

          {/* Why It Matters */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              {language === 'de' ? 'Warum es wichtig ist' : 'Why It Matters'}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'de'
                ? 'Das ist nicht nur ein Sales-Problem – es ist ein strategischer Engpass. Ohne eine skalierbare Revenue Engine erreichst du deinen nächsten Funding-Meilenstein nicht. Investoren merken es. Boards stellen Fragen. Wachstum stagniert.'
                : "This isn't just a sales problem—it's a strategic bottleneck. Without a scalable revenue engine, you can't reach your next funding milestone. Investors notice. Boards ask questions. Growth stalls."}
            </p>
          </div>

          {/* The Solution */}
          <div className="p-6 bg-accent/10 border border-accent/30 rounded-lg">
            <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              {language === 'de' ? 'Die Lösung' : 'The Solution'}
            </h3>
            <p className="text-foreground leading-relaxed">
              {language === 'de'
                ? 'AI-native Unternehmen lösen das anders. Sie nutzen das 3-Komponenten GTM-Framework (ICP Clarity + Sales Motion + RevOps), um CAC um 50% zu senken und Win Rates um 100% zu steigern. Dieses Playbook zeigt dir wie.'
                : 'AI-native companies solve this differently. They use the 3-component GTM framework (ICP Clarity + Sales Motion + RevOps) to reduce CAC by 50% and increase win rates by 100%. This playbook shows you how.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 3: THE FRAMEWORK
// ============================================================================
const FrameworkSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const components = [
    {
      number: '1',
      icon: Target,
      title: { en: 'ICP Clarity', de: 'ICP Clarity' },
      subtitle: { en: 'Strategy', de: 'Strategie' },
      color: 'from-violet-500 to-purple-600',
      description: {
        en: "Crystal-clear definition of who you sell to. Without ICP clarity, you waste 60% of sales effort on wrong-fit leads. Your CAC explodes. Your win rate drops. Your sales cycle lengthens.",
        de: "Glasklare Definition, an wen du verkaufst. Ohne ICP-Klarheit verschwendest du 60% des Sales-Aufwands für falsche Leads. Dein CAC explodiert. Deine Win Rate sinkt. Dein Sales Cycle wird länger."
      },
      dimensions: [
        { en: 'Firmographic: Company size, industry, geography', de: 'Firmographisch: Unternehmensgröße, Branche, Geografie' },
        { en: 'Technographic: Tech stack, tools, integrations', de: 'Technographisch: Tech Stack, Tools, Integrationen' },
        { en: 'Behavioral: Buying patterns, decision process', de: 'Behavioral: Kaufmuster, Entscheidungsprozess' },
        { en: 'Psychographic: Pain points, motivations, objections', de: 'Psychographisch: Pain Points, Motivationen, Einwände' },
        { en: 'Economic: Budget, pricing sensitivity, ROI expectations', de: 'Ökonomisch: Budget, Preissensibilität, ROI-Erwartungen' },
      ],
    },
    {
      number: '2',
      icon: Users,
      title: { en: 'Sales Motion', de: 'Sales Motion' },
      subtitle: { en: 'Execution', de: 'Umsetzung' },
      color: 'from-blue-500 to-cyan-500',
      description: {
        en: "Repeatable process from lead to close. Without sales motion, each deal is unique. Reps reinvent the wheel. You can't scale. You can't train. You can't predict.",
        de: "Wiederholbarer Prozess vom Lead zum Abschluss. Ohne Sales Motion ist jeder Deal einzigartig. Reps erfinden das Rad neu. Du kannst nicht skalieren. Du kannst nicht trainieren. Du kannst nicht vorhersagen."
      },
      stages: [
        { en: 'Stage 1: Lead qualification (BANT framework)', de: 'Stufe 1: Lead-Qualifizierung (BANT-Framework)' },
        { en: 'Stage 2: Discovery call (pain point mapping)', de: 'Stufe 2: Discovery Call (Pain Point Mapping)' },
        { en: 'Stage 3: Demo (value-based, not feature-based)', de: 'Stufe 3: Demo (wertbasiert, nicht feature-basiert)' },
        { en: 'Stage 4: Proposal (ROI-driven, not price-driven)', de: 'Stufe 4: Proposal (ROI-getrieben, nicht preis-getrieben)' },
        { en: 'Stage 5: Negotiation (value defense, not discounting)', de: 'Stufe 5: Verhandlung (Wert-Verteidigung, kein Rabattieren)' },
        { en: 'Stage 6: Close (mutual action plan)', de: 'Stufe 6: Abschluss (gemeinsamer Aktionsplan)' },
        { en: 'Stage 7: Handoff (seamless to CS)', de: 'Stufe 7: Übergabe (nahtlos an CS)' },
      ],
    },
    {
      number: '3',
      icon: Settings,
      title: { en: 'Revenue Operations', de: 'Revenue Operations' },
      subtitle: { en: 'Operationalization', de: 'Operationalisierung' },
      color: 'from-emerald-500 to-teal-500',
      description: {
        en: "Systems, data, and automation. Without RevOps, you can't scale beyond 10 reps. Data is siloed. Processes are manual. Insights are delayed.",
        de: "Systeme, Daten und Automation. Ohne RevOps kannst du nicht über 10 Reps hinaus skalieren. Daten sind in Silos. Prozesse sind manuell. Insights sind verzögert."
      },
      tools: [
        { en: 'CRM: Salesforce, HubSpot (single source of truth)', de: 'CRM: Salesforce, HubSpot (Single Source of Truth)' },
        { en: 'Enrichment: Clay, Clearbit (data quality)', de: 'Enrichment: Clay, Clearbit (Datenqualität)' },
        { en: 'Intelligence: Gong, Chorus (call analysis)', de: 'Intelligence: Gong, Chorus (Call-Analyse)' },
        { en: 'Automation: Zapier, Make (workflow automation)', de: 'Automation: Zapier, Make (Workflow-Automation)' },
        { en: 'Analytics: Tableau, Looker (real-time dashboards)', de: 'Analytics: Tableau, Looker (Echtzeit-Dashboards)' },
      ],
    },
  ];

  return (
    <section
      id="framework-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 bg-secondary/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Das Framework' : 'The Framework'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Das GTM/Revenue Framework' : 'The GTM/Revenue Framework'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Drei Komponenten, die zusammenwirken: ICP Clarity → Sales Motion → Revenue Operations'
              : 'Three components that work together: ICP Clarity → Sales Motion → Revenue Operations'}
          </p>
        </div>

        {/* Framework Components */}
        <div className="space-y-12">
          {components.map((component, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left: Header */}
                  <div className="lg:w-1/3">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${component.color} flex items-center justify-center text-white mb-4`}>
                      <component.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {language === 'de' ? component.title.de : component.title.en}
                    </h3>
                    <Badge variant="outline" className="mb-4">
                      {language === 'de' ? component.subtitle.de : component.subtitle.en}
                    </Badge>
                    <p className="text-muted-foreground">
                      {language === 'de' ? component.description.de : component.description.en}
                    </p>
                  </div>

                  {/* Right: Details */}
                  <div className="lg:w-2/3 lg:border-l lg:pl-8 border-border">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                      {component.dimensions ? (language === 'de' ? 'ICP Canvas (5 Dimensionen)' : 'ICP Canvas (5 Dimensions)') :
                       component.stages ? (language === 'de' ? '7-Stufen Sales Playbook' : '7-Stage Sales Playbook') :
                       (language === 'de' ? 'RevOps Stack (5 Tools)' : 'RevOps Stack (5 Tools)')}
                    </h4>
                    <ul className="space-y-3">
                      {(component.dimensions || component.stages || component.tools)?.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">
                            {language === 'de' ? (item as { en: string; de: string }).de : (item as { en: string; de: string }).en}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feedback Loop */}
        <div className="mt-16 p-8 bg-card border-2 border-primary/30 rounded-xl text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            {language === 'de' ? 'Wie sie zusammenwirken' : 'How They Connect'}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 text-lg font-semibold mb-4">
            <span className="text-violet-500">ICP Clarity</span>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
            <span className="text-blue-500">Sales Motion</span>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
            <span className="text-emerald-500">Revenue Operations</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Strategie speist Execution. Execution speist Ops. Ops speist Strategie. Das erzeugt einen Compound-Effekt: Bessere ICP → Bessere Sales Motion → Bessere RevOps → Bessere ICP.'
              : 'Strategy feeds Execution. Execution feeds Ops. Ops feeds Strategy. This creates a compounding effect: Better ICP → Better Sales Motion → Better RevOps → Better ICP.'}
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 4: BEST PRACTICES
// ============================================================================
const BestPracticesSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const whatWorks = [
    {
      title: { en: 'Start with ICP, not product features', de: 'Starte mit ICP, nicht mit Produkt-Features' },
      desc: { en: 'AI-native companies define ICP first, then build product. Example: Perplexity focused on "researchers who hate Google". Result: 10M users in 18 months.', de: 'AI-native Unternehmen definieren ICP zuerst, dann bauen sie das Produkt. Beispiel: Perplexity fokussierte auf "Researcher, die Google hassen". Ergebnis: 10M User in 18 Monaten.' },
    },
    {
      title: { en: 'Use AI for lead scoring, not just outreach', de: 'Nutze AI für Lead Scoring, nicht nur für Outreach' },
      desc: { en: 'Traditional: AI writes emails. AI-native: AI scores leads, prioritizes accounts. Result: 3x conversion rate.', de: 'Traditionell: AI schreibt E-Mails. AI-native: AI bewertet Leads, priorisiert Accounts. Ergebnis: 3x Conversion Rate.' },
    },
    {
      title: { en: 'Build sales playbook before scaling team', de: 'Baue Sales Playbook vor dem Team-Scaling' },
      desc: { en: 'Traditional: Hire 10 reps, hope for best. AI-native: Build playbook with 2-3 top reps, then scale. Result: 50% faster ramp time.', de: 'Traditionell: 10 Reps einstellen, auf das Beste hoffen. AI-native: Playbook mit 2-3 Top-Reps bauen, dann skalieren. Ergebnis: 50% schnellere Ramp-Time.' },
    },
    {
      title: { en: 'Deploy RevOps early (not late)', de: 'RevOps früh deployen (nicht spät)' },
      desc: { en: 'Traditional: Build RevOps at 50 reps. AI-native: Build RevOps at 5 reps. Result: 10x easier to scale.', de: 'Traditionell: RevOps bei 50 Reps aufbauen. AI-native: RevOps bei 5 Reps aufbauen. Ergebnis: 10x einfacher zu skalieren.' },
    },
    {
      title: { en: 'Measure leading indicators, not lagging', de: 'Messe Leading Indicators, nicht Lagging' },
      desc: { en: 'Traditional: Track revenue (lagging). AI-native: Track pipeline velocity (leading). Result: Predict problems 60 days earlier.', de: 'Traditionell: Revenue tracken (lagging). AI-native: Pipeline Velocity tracken (leading). Ergebnis: Probleme 60 Tage früher vorhersagen.' },
    },
  ];

  const whatDoesntWork = [
    {
      title: { en: 'Hiring more reps to fix CAC', de: 'Mehr Reps einstellen, um CAC zu fixen' },
      desc: { en: 'Traditional playbook: "Hire 10 more SDRs". Why it fails: CAC increases linearly with headcount. Example: Company X hired 20 SDRs, CAC went from €5k → €8k.', de: 'Traditionelles Playbook: "10 SDRs mehr einstellen". Warum es scheitert: CAC steigt linear mit Headcount. Beispiel: Unternehmen X stellte 20 SDRs ein, CAC ging von €5k → €8k.' },
    },
    {
      title: { en: 'Discounting to close deals', de: 'Rabatte für Abschlüsse' },
      desc: { en: 'Traditional: "Give 20% discount to close". Why it fails: Trains customers to expect discounts. Example: Company Y\'s average discount went from 10% → 30% in 12 months.', de: 'Traditionell: "20% Rabatt geben zum Abschluss". Warum es scheitert: Trainiert Kunden, Rabatte zu erwarten. Beispiel: Unternehmen Y\'s durchschnittlicher Rabatt ging von 10% → 30% in 12 Monaten.' },
    },
    {
      title: { en: 'Building RevOps before Sales Motion', de: 'RevOps vor Sales Motion bauen' },
      desc: { en: 'Traditional: "Let\'s build Salesforce dashboards first". Why it fails: You\'re automating a broken process. Example: Company Z spent €50k on RevOps, still had 15% win rate.', de: 'Traditionell: "Lass uns erst Salesforce-Dashboards bauen". Warum es scheitert: Du automatisierst einen kaputten Prozess. Beispiel: Unternehmen Z gab €50k für RevOps aus, hatte immer noch 15% Win Rate.' },
    },
  ];

  const pitfalls = [
    {
      title: { en: 'ICP too broad', de: 'ICP zu breit' },
      mistake: { en: '"We sell to all B2B SaaS companies"', de: '"Wir verkaufen an alle B2B SaaS Unternehmen"' },
      fix: { en: 'Define 3-5 specific verticals, validate with data.', de: 'Definiere 3-5 spezifische Verticals, validiere mit Daten.' },
    },
    {
      title: { en: 'Sales playbook too rigid', de: 'Sales Playbook zu starr' },
      mistake: { en: '"Follow script exactly"', de: '"Folge dem Skript exakt"' },
      fix: { en: 'Build framework, not script. Allow 20% flexibility.', de: 'Baue Framework, kein Skript. Erlaube 20% Flexibilität.' },
    },
    {
      title: { en: 'RevOps too complex', de: 'RevOps zu komplex' },
      mistake: { en: '"We need 10 tools"', de: '"Wir brauchen 10 Tools"' },
      fix: { en: 'Start with 3 tools (CRM + Enrichment + Intelligence), add later.', de: 'Starte mit 3 Tools (CRM + Enrichment + Intelligence), füge später hinzu.' },
    },
  ];

  return (
    <section
      id="best-practices-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 bg-background transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Best Practices' : 'Best Practices'}
          </span>
          <h2 className="font-display text-display-md text-foreground">
            {language === 'de' ? 'Was funktioniert (und was nicht)' : 'What Works (and What Doesn\'t)'}
          </h2>
        </div>

        {/* What Works */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-accent mb-6 flex items-center gap-2">
            <Check className="w-6 h-6" />
            {language === 'de' ? 'Was funktioniert' : 'What Works'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWorks.map((item, index) => (
              <Card key={index} className="bg-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground mb-2">
                    {language === 'de' ? item.title.de : item.title.en}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'de' ? item.desc.de : item.desc.en}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What Doesn't Work */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-destructive mb-6 flex items-center gap-2">
            <X className="w-6 h-6" />
            {language === 'de' ? 'Was nicht funktioniert' : "What Doesn't Work"}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {whatDoesntWork.map((item, index) => (
              <Card key={index} className="bg-destructive/5 border-destructive/20">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground mb-2">
                    {language === 'de' ? item.title.de : item.title.en}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'de' ? item.desc.de : item.desc.en}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Common Pitfalls */}
        <div>
          <h3 className="text-xl font-bold text-yellow-500 mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6" />
            {language === 'de' ? 'Häufige Fallstricke' : 'Common Pitfalls'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pitfalls.map((item, index) => (
              <Card key={index} className="bg-yellow-500/5 border-yellow-500/20">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground mb-2">
                    {language === 'de' ? item.title.de : item.title.en}
                  </h4>
                  <p className="text-sm text-destructive mb-2 italic">
                    {language === 'de' ? `Fehler: ${item.mistake.de}` : `Mistake: ${item.mistake.en}`}
                  </p>
                  <p className="text-sm text-accent">
                    {language === 'de' ? `Fix: ${item.fix.de}` : `Fix: ${item.fix.en}`}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 5: IMPLEMENTATION GUIDE
// ============================================================================
const ImplementationSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const phases = [
    {
      number: '1',
      title: { en: 'Strategy', de: 'Strategie' },
      timeline: { en: 'Week 1-2', de: 'Woche 1-2' },
      color: 'from-violet-500 to-purple-600',
      tasks: [
        { en: 'Define ICP, validate with data', de: 'ICP definieren, mit Daten validieren' },
      ],
      involved: { en: 'CEO, CMO/CRO, 2-3 top reps', de: 'CEO, CMO/CRO, 2-3 Top-Reps' },
      deliverables: [
        { en: 'ICP Canvas (1 page)', de: 'ICP Canvas (1 Seite)' },
        { en: 'Target Account List (100 accounts)', de: 'Target Account Liste (100 Accounts)' },
        { en: 'Positioning Statement (1 page)', de: 'Positioning Statement (1 Seite)' },
      ],
      metric: { en: '80% team alignment on ICP', de: '80% Team-Alignment auf ICP' },
    },
    {
      number: '2',
      title: { en: 'Setup', de: 'Setup' },
      timeline: { en: 'Week 3-4', de: 'Woche 3-4' },
      color: 'from-blue-500 to-cyan-500',
      tasks: [
        { en: 'Build sales motion, create playbook', de: 'Sales Motion bauen, Playbook erstellen' },
      ],
      involved: { en: 'CRO, Sales Ops, 2-3 top reps', de: 'CRO, Sales Ops, 2-3 Top-Reps' },
      deliverables: [
        { en: '7-stage sales playbook (10-15 pages)', de: '7-Stufen Sales Playbook (10-15 Seiten)' },
        { en: 'Objection handling guide (5 pages)', de: 'Objection Handling Guide (5 Seiten)' },
        { en: 'Demo script (value-based)', de: 'Demo-Skript (wertbasiert)' },
      ],
      metric: { en: 'All reps trained, 90% adoption', de: 'Alle Reps trainiert, 90% Adoption' },
    },
    {
      number: '3',
      title: { en: 'Execution', de: 'Umsetzung' },
      timeline: { en: 'Week 5-8', de: 'Woche 5-8' },
      color: 'from-orange-500 to-amber-500',
      tasks: [
        { en: 'Run pilot with 3-5 reps, iterate', de: 'Pilot mit 3-5 Reps durchführen, iterieren' },
      ],
      involved: { en: 'CRO, pilot reps, Sales Ops', de: 'CRO, Pilot-Reps, Sales Ops' },
      deliverables: [
        { en: '10-20 deals closed with new motion', de: '10-20 Deals mit neuer Motion abgeschlossen' },
        { en: 'Feedback report (what works, what doesn\'t)', de: 'Feedback Report (was funktioniert, was nicht)' },
        { en: 'Playbook v2.0 (refined)', de: 'Playbook v2.0 (verfeinert)' },
      ],
      metric: { en: '20% improvement in win rate or cycle time', de: '20% Verbesserung bei Win Rate oder Cycle Time' },
    },
    {
      number: '4',
      title: { en: 'Operationalization', de: 'Operationalisierung' },
      timeline: { en: 'Week 9-12', de: 'Woche 9-12' },
      color: 'from-emerald-500 to-teal-500',
      tasks: [
        { en: 'Roll out to full team, automate with AI', de: 'An ganzes Team ausrollen, mit AI automatisieren' },
      ],
      involved: { en: 'CRO, Sales Ops, RevOps', de: 'CRO, Sales Ops, RevOps' },
      deliverables: [
        { en: 'RevOps stack deployed (CRM + Enrichment + Intelligence)', de: 'RevOps Stack deployed (CRM + Enrichment + Intelligence)' },
        { en: 'Dashboards live (pipeline velocity, win rate, CAC)', de: 'Dashboards live (Pipeline Velocity, Win Rate, CAC)' },
        { en: 'Training complete (all reps certified)', de: 'Training abgeschlossen (alle Reps zertifiziert)' },
      ],
      metric: { en: '30% improvement in sales velocity', de: '30% Verbesserung bei Sales Velocity' },
    },
  ];

  return (
    <section
      id="implementation-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 bg-secondary/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Implementierung' : 'Implementation Guide'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Wie du implementierst' : 'How to Implement'}
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <Card key={index} className="overflow-hidden border-2">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Phase Header */}
                  <div className={`lg:w-1/4 p-6 bg-gradient-to-br ${phase.color} text-white`}>
                    <div className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">
                      {language === 'de' ? `Phase ${phase.number}` : `Phase ${phase.number}`}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {language === 'de' ? phase.title.de : phase.title.en}
                    </h3>
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      <Clock className="w-3 h-3 mr-1" />
                      {language === 'de' ? phase.timeline.de : phase.timeline.en}
                    </Badge>
                  </div>

                  {/* Phase Content */}
                  <div className="lg:w-3/4 p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Left */}
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
                          {language === 'de' ? 'Aufgaben' : 'Tasks'}
                        </h4>
                        <ul className="space-y-2 mb-4">
                          {phase.tasks.map((task, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-foreground">{language === 'de' ? task.de : task.en}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="text-sm text-muted-foreground">
                          <strong>{language === 'de' ? 'Beteiligte:' : 'Involved:'}</strong> {language === 'de' ? phase.involved.de : phase.involved.en}
                        </div>
                      </div>

                      {/* Right */}
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
                          {language === 'de' ? 'Liefergegenstände' : 'Deliverables'}
                        </h4>
                        <ul className="space-y-2 mb-4">
                          {phase.deliverables.map((deliverable, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <FileText className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-foreground">{language === 'de' ? deliverable.de : deliverable.en}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="text-sm p-2 bg-accent/10 rounded border border-accent/30">
                          <strong className="text-accent">{language === 'de' ? 'Erfolgsmetrik:' : 'Success Metric:'}</strong>{' '}
                          <span className="text-foreground">{language === 'de' ? phase.metric.de : phase.metric.en}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Box */}
        <div className="mt-12 p-8 bg-card border-2 border-primary/30 rounded-xl text-center">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold text-foreground">12 {language === 'de' ? 'Wochen' : 'Weeks'}</div>
              <div className="text-sm text-muted-foreground">{language === 'de' ? 'Gesamtdauer' : 'Total Timeline'}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">€23.6K-€45.9K</div>
              <div className="text-sm text-muted-foreground">{language === 'de' ? 'Investment (mit Power Up/Boost)' : 'Investment (with Power Up/Boost)'}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">10-20x ROI</div>
              <div className="text-sm text-muted-foreground">{language === 'de' ? 'Erwarteter Return' : 'Expected Return'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 6: CASE STUDIES
// ============================================================================
const CaseStudiesSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const caseStudies = [
    {
      title: { en: 'Series B SaaS Company', de: 'Series B SaaS Unternehmen' },
      arr: '€15M ARR',
      problem: {
        en: 'CAC increased from €5k → €12k in 12 months. Win rate dropped from 25% → 15%. No clear reason why.',
        de: 'CAC stieg von €5k → €12k in 12 Monaten. Win Rate sank von 25% → 15%. Kein klarer Grund warum.'
      },
      solution: {
        en: 'Redefined ICP (focused on 3 verticals instead of 10), rebuilt sales motion with AI lead scoring, deployed RevOps stack.',
        de: 'ICP neu definiert (auf 3 Verticals fokussiert statt 10), Sales Motion mit AI Lead Scoring neu gebaut, RevOps Stack deployed.'
      },
      results: [
        { metric: 'CAC', value: '-50%', detail: { en: '€12k → €6k', de: '€12k → €6k' } },
        { metric: 'Win Rate', value: '+100%', detail: { en: '15% → 30%', de: '15% → 30%' } },
        { metric: 'Sales Cycle', value: '-33%', detail: { en: '90 → 60 days', de: '90 → 60 Tage' } },
      ],
      timeline: '12 weeks',
    },
    {
      title: { en: 'Series C Fintech', de: 'Series C Fintech' },
      arr: '€40M ARR',
      problem: {
        en: 'Win rate dropped from 25% → 15%, no clear reason. Sales team blamed "market conditions".',
        de: 'Win Rate sank von 25% → 15%, kein klarer Grund. Sales Team beschuldigte "Marktbedingungen".'
      },
      solution: {
        en: 'Built data-driven sales playbook (analyzed 500+ deals), trained team on new motion, deployed Gong for call analysis.',
        de: 'Datengetriebenes Sales Playbook gebaut (500+ Deals analysiert), Team auf neue Motion trainiert, Gong für Call-Analyse deployed.'
      },
      results: [
        { metric: 'Win Rate', value: '+100%', detail: { en: '15% → 30%', de: '15% → 30%' } },
        { metric: 'Revenue', value: '+€8M', detail: { en: '+20% ARR', de: '+20% ARR' } },
        { metric: 'Team Morale', value: '↑', detail: { en: 'Clear process', de: 'Klarer Prozess' } },
      ],
      timeline: '16 weeks',
    },
    {
      title: { en: 'Series A Healthtech', de: 'Series A Healthtech' },
      arr: '€5M ARR',
      problem: {
        en: "Sales team couldn't scale beyond 5 reps. Each rep had different process. No playbook, no data.",
        de: "Sales Team konnte nicht über 5 Reps hinaus skalieren. Jeder Rep hatte anderen Prozess. Kein Playbook, keine Daten."
      },
      solution: {
        en: 'Built 7-stage sales playbook with top 2 reps, deployed RevOps stack (Salesforce + Clay + Gong), trained new reps.',
        de: '7-Stufen Sales Playbook mit Top-2-Reps gebaut, RevOps Stack deployed (Salesforce + Clay + Gong), neue Reps trainiert.'
      },
      results: [
        { metric: 'Team Size', value: '3x', detail: { en: '5 → 15 reps', de: '5 → 15 Reps' } },
        { metric: 'Sales Velocity', value: '+40%', detail: { en: 'Faster deals', de: 'Schnellere Deals' } },
        { metric: 'Ramp Time', value: '-50%', detail: { en: '6 → 3 months', de: '6 → 3 Monate' } },
      ],
      timeline: '8 weeks',
    },
  ];

  return (
    <section
      id="case-studies-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 bg-background transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Fallstudien' : 'Case Studies'}
          </span>
          <h2 className="font-display text-display-md text-foreground">
            {language === 'de' ? 'Praxisbeispiele' : 'Real-World Examples'}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <Badge variant="outline" className="mb-2">{study.arr}</Badge>
                  <h3 className="text-xl font-bold text-foreground">
                    {language === 'de' ? study.title.de : study.title.en}
                  </h3>
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-destructive mb-2">{language === 'de' ? 'Problem' : 'Problem'}</h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'de' ? study.problem.de : study.problem.en}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-primary mb-2">{language === 'de' ? 'Lösung' : 'Solution'}</h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'de' ? study.solution.de : study.solution.en}
                  </p>
                </div>

                {/* Results */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-accent mb-2">{language === 'de' ? 'Ergebnisse' : 'Results'}</h4>
                  <div className="space-y-2">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex justify-between items-center p-2 bg-accent/10 rounded">
                        <span className="text-sm text-foreground">{result.metric}</span>
                        <div className="text-right">
                          <span className="font-bold text-accent">{result.value}</span>
                          <span className="text-xs text-muted-foreground ml-2">
                            ({language === 'de' ? result.detail.de : result.detail.en})
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{language === 'de' ? 'Dauer:' : 'Timeline:'} {study.timeline}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 7: RELATED SOLUTIONS
// ============================================================================
const RelatedSolutionsSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const solutions = [
    {
      title: { en: 'Power Up: CAC Crisis', de: 'Power Up: CAC Crisis' },
      desc: { en: 'Rapid GTM optimization (ICP + Sales Motion)', de: 'Schnelle GTM-Optimierung (ICP + Sales Motion)' },
      timeline: { en: '30 Days', de: '30 Tage' },
      investment: '€23.6K',
      impact: { en: 'CAC -40-60%, Win Rate +20-40%', de: 'CAC -40-60%, Win Rate +20-40%' },
      href: '/solutions/power-up/cac-crisis',
      icon: Zap,
      color: 'from-orange-500 to-amber-500',
    },
    {
      title: { en: 'Boost: GTM Transformation', de: 'Boost: GTM Transformation' },
      desc: { en: 'Full GTM rebuild (ICP + Sales Motion + RevOps)', de: 'Kompletter GTM-Rebuild (ICP + Sales Motion + RevOps)' },
      timeline: { en: '90 Days', de: '90 Tage' },
      investment: '€45.9K',
      impact: { en: 'CAC -60-75%, Win Rate +50-100%', de: 'CAC -60-75%, Win Rate +50-100%' },
      href: '/solutions/boost/growth-engine',
      icon: Rocket,
      color: 'from-violet-500 to-purple-600',
    },
    {
      title: { en: 'Expert Session: GTM Strategy', de: 'Expert Session: GTM-Strategie' },
      desc: { en: 'Deep dive on your GTM bottleneck', de: 'Tieftauchen in deinen GTM-Engpass' },
      timeline: { en: '90 Min', de: '90 Min' },
      investment: '€890',
      impact: { en: 'Clear action plan + 3-5 quick wins', de: 'Klarer Aktionsplan + 3-5 Quick Wins' },
      href: '/solutions/expert-session',
      icon: Brain,
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section
      id="related-solutions-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 bg-secondary/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Nächste Schritte' : 'Next Steps'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? 'So implementierst du dieses Playbook' : 'How to Implement This Playbook'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Bereit, das GTM/Revenue Framework in deinem Unternehmen zu implementieren? Hier sind die Lösungen, die dir dabei helfen:'
              : 'Ready to implement the GTM/Revenue Framework in your company? Here are the solutions that help you execute:'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:-translate-y-1 group">
              <CardContent className="p-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <solution.icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {language === 'de' ? solution.title.de : solution.title.en}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'de' ? solution.desc.de : solution.desc.en}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{language === 'de' ? solution.timeline.de : solution.timeline.en}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BarChart3 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{solution.investment}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="text-accent">{language === 'de' ? solution.impact.de : solution.impact.en}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                  <a href={solution.href}>
                    {language === 'de' ? 'Mehr erfahren' : 'Learn More'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 8: FINAL CTA
// ============================================================================
const FinalCTASection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="final-cta"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 noise opacity-30" />

      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Headline */}
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? (
              <>
                Bereit, deine
                <span className="block italic text-gradient">Revenue Engine zu bauen?</span>
              </>
            ) : (
              <>
                Ready to build your
                <span className="block italic text-gradient">revenue engine?</span>
              </>
            )}
          </h2>

          {/* Subline */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {language === 'de'
              ? 'Buche einen kostenlosen Inflection Call. Wir identifizieren deinen #1 GTM-Engpass in 30 Minuten und empfehlen den richtigen Weg.'
              : "Book a free Inflection Call. We'll identify your #1 GTM bottleneck in 30 minutes and recommend the right path."}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="xl"
              className="shadow-brutal hover-brutal group"
              onClick={() => window.open('https://calendly.com/michel-scalingx/inflection-call', '_blank')}
            >
              <Phone className="mr-2 w-5 h-5" />
              {language === 'de' ? 'Kostenlosen Inflection Call buchen' : 'Book Free Inflection Call'}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-2">
              <Download className="mr-2 w-4 h-4" />
              {language === 'de' ? 'Vollständiges Playbook herunterladen' : 'Download Full Playbook'}
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-accent" />
              {language === 'de' ? 'Unverbindlich' : 'No commitment'}
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-accent" />
              {language === 'de' ? '30 Minuten' : '30 minutes'}
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-accent" />
              {language === 'de' ? 'Konkrete nächste Schritte' : 'Concrete next steps'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const PlaybookGtmRevenue: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ExecutiveSummarySection />
        <FrameworkSection />
        <BestPracticesSection />
        <ImplementationSection />
        <CaseStudiesSection />
        <RelatedSolutionsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PlaybookGtmRevenue;
