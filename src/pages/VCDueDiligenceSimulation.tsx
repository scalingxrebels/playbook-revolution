import React from 'react';
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
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallaxLayers } from '@/hooks/useParallax';
import TwinklingStars from '@/components/TwinklingStars';
import {
  ArrowRight,
  ChevronDown,
  Check,
  X,
  FileSearch,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Briefcase,
  Shield,
  Clock,
  FileText,
  Layers,
  Building2,
  Users,
  Scale,
  Settings,
  Target,
  BarChart3,
  Lightbulb,
  Package,
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
    { value: '100%', label: { en: 'Red Flags Fixed', de: 'Red Flags Fixed' }, sublabel: { en: 'Unknown → Fixed', de: 'Unbekannt → Behoben' } },
    { value: '0% → 100%', label: { en: 'DD Readiness', de: 'DD Readiness' }, sublabel: { en: 'Not prepared → Fully prepared', de: 'Nicht bereit → Voll vorbereitet' } },
    { value: '+40-60pp', label: { en: 'Fundraising Rate', de: 'Fundraising Rate' }, sublabel: { en: '20-40% → 60-100%', de: '20-40% → 60-100%' } },
  ];

  const trustBadges = [
    { icon: Clock, label: { en: '3-5 Days (Fast Turnaround)', de: '3-5 Tage (Schnelle Lieferung)' } },
    { icon: FileText, label: { en: 'Board-Ready Report (30-40 Pages)', de: 'Board-Ready Report (30-40 Seiten)' } },
    { icon: Briefcase, label: { en: 'Investor Perspective (What VCs Actually Check)', de: 'Investor-Perspektive (Was VCs wirklich prüfen)' } },
  ];

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise pt-20"
    >
      {/* Deep Space Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(240,10%,8%)] to-[hsl(240,15%,12%)] transition-transform duration-100"
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
              <span className="text-foreground font-medium">VC Due Diligence Simulation</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Badge */}
        <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <FileSearch className="w-4 h-4 mr-2" />
          Decision Support · 3-5 {language === 'de' ? 'Tage' : 'Days'} · €5.9K
        </Badge>

        {/* Headline */}
        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">{language === 'de' ? 'Simuliere VC Due Diligence—' : 'Simulate VC Due Diligence—'}</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'Vor der echten' : 'Before The Real One'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Mach dein Unternehmen Due-Diligence-ready in 3-5 Tagen. Typische Ergebnisse: Red Flags Fixed 100%, Due Diligence Readiness 0% → 100%, Fundraising Success Rate +40-60pp—mit Board-Ready Report.'
            : 'Get your company due diligence-ready in 3-5 days. Typical outcomes: Red Flags Fixed 100%, Due Diligence Readiness 0% → 100%, Fundraising Success Rate +40-60pp—with board-ready report.'}
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
            {language === 'de' ? 'Simulation anfragen (€5.9K)' : 'Request Simulation (€5.9K)'}
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
    { en: 'Not DD-ready: 0% due diligence readiness (benchmark: 100% for Series B+)', de: 'Nicht DD-ready: 0% Due Diligence Readiness (Benchmark: 100% für Series B+)' },
    { en: 'Red flags hidden: Financials, contracts, compliance issues you don\'t see', de: 'Red Flags versteckt: Financials, Verträge, Compliance-Probleme, die du nicht siehst' },
    { en: 'Data room incomplete: Missing documents, outdated data, poor organization', de: 'Data Room unvollständig: Fehlende Dokumente, veraltete Daten, schlechte Organisation' },
    { en: 'No investor perspective: Don\'t know what VCs actually check', de: 'Keine Investor-Perspektive: Weißt nicht, was VCs wirklich prüfen' },
    { en: 'Fundraising risk: Can\'t raise next round without DD-readiness', de: 'Fundraising-Risiko: Kannst nächste Runde nicht raisen ohne DD-Readiness' },
  ];

  const costs = [
    { en: 'Red flags discovered (deal-breakers that kill fundraising)', de: 'Red Flags entdeckt (Deal-Breaker, die Fundraising killen)' },
    { en: 'Valuation discount (20-40% for DD issues)', de: 'Bewertungsabschlag (20-40% für DD-Probleme)' },
    { en: 'Deal timeline extends (3-6 months longer)', de: 'Deal-Timeline verlängert sich (3-6 Monate länger)' },
    { en: 'Down-round risk increases (can\'t raise at target valuation)', de: 'Down-Round-Risiko steigt (kann nicht zur Zielbewertung raisen)' },
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
            {language === 'de' ? 'Du bist nicht bereit für VC Due Diligence—und weißt es nicht' : "You're Not Ready For VC Due Diligence—And You Don't Know It"}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Deine Due Diligence Readiness liegt bei 0% (Benchmark: 100% für Series B+). Du hast Red Flags, die du nicht siehst (Financials, Verträge, Compliance). Dein Data Room ist unvollständig (fehlende Dokumente, veraltete Daten). Und das Schlimmste—du wirst das erst entdecken, wenn VCs Due Diligence starten, und dann ist es zu spät.'
              : "Your due diligence readiness is 0% (benchmark: 100% for Series B+). You have red flags you don't see (financials, contracts, compliance). Your data room is incomplete (missing documents, outdated data). And worst of all—you'll only discover this when VCs start due diligence, and it's too late."}
          </p>
        </div>

        {/* Symptoms Checklist */}
        <div className="max-w-2xl mx-auto mb-12">
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
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                </div>
                <span className="text-sm text-foreground">
                  {language === 'de' ? symptom.de : symptom.en}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Real Costs */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">
            {language === 'de' ? 'Die echten Kosten:' : 'The real cost:'}
          </h3>
          <p className="text-center text-muted-foreground mb-6">
            {language === 'de'
              ? 'Das ist nicht nur Papierkram. Jede Fundraising-Runde ohne DD-Vorbereitung:'
              : "This isn't just about paperwork. Every fundraising round without DD preparation:"}
          </p>
          <div className="grid gap-3">
            {costs.map((cost, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-lg animate-slide-up"
                style={{ animationDelay: `${(index + symptoms.length) * 0.05}s` }}
              >
                <div className="w-6 h-6 rounded-full bg-destructive/30 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <span className="text-sm text-foreground font-medium">
                  {language === 'de' ? cost.de : cost.en}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg font-bold text-accent">
            {language === 'de' ? 'Du musst VC Due Diligence simulieren. Jetzt.' : 'You need to simulate VC due diligence. Now.'}
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

  const dimensions = [
    { icon: Building2, name: 'Financial DD', description: { en: 'Revenue quality, unit economics, burn rate, projections', de: 'Revenue-Qualität, Unit Economics, Burn Rate, Projektionen' } },
    { icon: Users, name: 'Commercial DD', description: { en: 'Customer concentration, contracts, pipeline, market position', de: 'Kundenkonzentration, Verträge, Pipeline, Marktposition' } },
    { icon: Package, name: 'Product DD', description: { en: 'PMF, tech debt, roadmap, IP & patents', de: 'PMF, Tech Debt, Roadmap, IP & Patente' } },
    { icon: Users, name: 'Team DD', description: { en: 'Management, key person risk, culture, structure', de: 'Management, Key Person Risk, Kultur, Struktur' } },
    { icon: Scale, name: 'Legal DD', description: { en: 'Cap table, contracts, compliance, litigation risk', de: 'Cap Table, Verträge, Compliance, Litigation Risk' } },
    { icon: Settings, name: 'Operational DD', description: { en: 'Processes, infrastructure, vendors, efficiency', de: 'Prozesse, Infrastruktur, Vendors, Effizienz' } },
    { icon: Target, name: 'Strategic DD', description: { en: 'Growth strategy, positioning, exit potential', de: 'Wachstumsstrategie, Positionierung, Exit-Potenzial' } },
    { icon: BarChart3, name: 'Governance DD', description: { en: 'Board structure, reporting, decision-making', de: 'Board-Struktur, Reporting, Entscheidungsfindung' } },
  ];

  const week1Deliverables = [
    { en: 'Red Flags Report (30-40 pages, investor perspective)', de: 'Red Flags Report (30-40 Seiten, Investor-Perspektive)' },
    { en: 'Red Flag Priority Matrix (which to fix first)', de: 'Red Flag Priority Matrix (was zuerst beheben)' },
    { en: 'Investor Perspective (what VCs actually check)', de: 'Investor-Perspektive (was VCs wirklich prüfen)' },
    { en: 'Q&A Prep (how to answer investor questions)', de: 'Q&A Prep (wie Investor-Fragen beantworten)' },
  ];

  const week2Deliverables = [
    { en: 'DD Readiness Roadmap (90-day action plan)', de: 'DD Readiness Roadmap (90-Tage-Aktionsplan)' },
    { en: 'Data Room Checklist (investor-ready)', de: 'Data Room Checklist (Investor-ready)' },
    { en: 'Q&A Prep Guide (with example answers)', de: 'Q&A Prep Guide (mit Beispiel-Antworten)' },
    { en: 'Team Training (DD preparation)', de: 'Team Training (DD-Vorbereitung)' },
  ];

  const differentiators = [
    { en: 'Investor perspective (what VCs actually check, not just compliance)', de: 'Investor-Perspektive (was VCs wirklich prüfen, nicht nur Compliance)' },
    { en: '8 dimensions (financial, commercial, product, team, legal, ops, strategic, governance)', de: '8 Dimensionen (Financial, Commercial, Product, Team, Legal, Ops, Strategic, Governance)' },
    { en: 'Board-ready report (30-40 pages, investor-grade quality)', de: 'Board-Ready Report (30-40 Seiten, Investor-Grade Qualität)' },
    { en: 'Fast turnaround (3-5 days, not 4-6 weeks)', de: 'Schnelle Lieferung (3-5 Tage, nicht 4-6 Wochen)' },
  ];

  return (
    <section
      id="solution-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Die Lösung' : 'The Solution'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'So funktioniert VC Due Diligence Simulation' : 'How VC Due Diligence Simulation Works'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Wir reviewen nicht nur deine Dokumente. Wir simulieren VC Due Diligence—aus Investor-Perspektive—damit du Red Flags behebst, bevor die echte DD startet.'
              : "We don't just review your documents. We simulate VC due diligence—from investor perspective—so you fix red flags before the real DD."}
          </p>
        </div>

        {/* 8 Dimensions Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">
            {language === 'de' ? '8 DD-Dimensionen' : '8 DD Dimensions'}
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {dimensions.map((dimension, index) => (
              <div
                key={index}
                className="bg-card/50 border border-border p-4 rounded-lg text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <dimension.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <h4 className="font-bold text-sm text-foreground mb-2">{dimension.name}</h4>
                <p className="text-xs text-muted-foreground">
                  {language === 'de' ? dimension.description.de : dimension.description.en}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Week-by-Week Process */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Week 1 */}
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <FileSearch className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">{language === 'de' ? 'Woche 1: DD Simulation' : 'Week 1: DD Simulation'}</h4>
                <p className="text-sm text-accent">€5.9K</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {language === 'de'
                ? 'Wir simulieren VC Due Diligence über 8 Dimensionen.'
                : 'We simulate VC due diligence across 8 dimensions.'}
            </p>
            <div className="space-y-2">
              {week1Deliverables.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{language === 'de' ? item.de : item.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Week 2 (Optional) */}
          <div className="bg-muted/50 border-2 border-border p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">{language === 'de' ? 'Woche 2: DD Readiness Roadmap' : 'Week 2: DD Readiness Roadmap'}</h4>
                <p className="text-sm text-muted-foreground">{language === 'de' ? 'Optional +€3.9K' : 'Optional +€3.9K'}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {language === 'de'
                ? 'Wir erstellen deine DD Readiness Roadmap.'
                : 'We create your DD readiness roadmap.'}
            </p>
            <div className="space-y-2">
              {week2Deliverables.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm text-foreground">{language === 'de' ? item.de : item.en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What Makes This Different */}
        <div className="bg-card/50 border border-border p-8 rounded-lg">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">
            {language === 'de' ? 'Was macht das anders:' : 'What makes this different:'}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
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

  const metrics = [
    {
      value: '100%',
      label: { en: 'Red Flags Fixed', de: 'Red Flags Fixed' },
      before: { en: 'Unknown (hidden issues)', de: 'Unbekannt (versteckte Probleme)' },
      after: { en: '100% identified + fixed', de: '100% identifiziert + behoben' },
      description: { en: 'We simulate VC due diligence from investor perspective—which identifies 100% of red flags before the real DD starts.', de: 'Wir simulieren VC Due Diligence aus Investor-Perspektive—was 100% der Red Flags identifiziert, bevor die echte DD startet.' },
    },
    {
      value: '0% → 100%',
      label: { en: 'DD Readiness', de: 'DD Readiness' },
      before: { en: '0% (not prepared)', de: '0% (nicht vorbereitet)' },
      after: { en: '100% (fully prepared)', de: '100% (voll vorbereitet)' },
      description: { en: 'We create DD readiness roadmap—which achieves 100% DD readiness through systematic preparation and data room organization.', de: 'Wir erstellen DD Readiness Roadmap—die 100% DD Readiness durch systematische Vorbereitung und Data Room Organisation erreicht.' },
    },
    {
      value: '+40-60pp',
      label: { en: 'Fundraising Success Rate', de: 'Fundraising Success Rate' },
      before: { en: '20-40% (many deals fail)', de: '20-40% (viele Deals scheitern)' },
      after: { en: '60-100% (most deals succeed)', de: '60-100% (die meisten Deals erfolgreich)' },
      description: { en: 'We fix red flags before real DD—which increases fundraising success rate by 40-60pp through DD-readiness and investor confidence.', de: 'Wir beheben Red Flags vor echter DD—was Fundraising Success Rate um 40-60pp erhöht durch DD-Readiness und Investor-Vertrauen.' },
    },
  ];

  const caseStudy = {
    company: 'Series A SaaS, €8M ARR, 45 employees',
    challenge: { en: 'Not DD-ready (0%), Red Flags unknown, Fundraising at risk', de: 'Nicht DD-ready (0%), Red Flags unbekannt, Fundraising gefährdet' },
    problems: { en: 'Financial issues (revenue quality), contract issues (customer concentration), legal issues (cap table), data room incomplete', de: 'Financial Issues (Revenue Quality), Vertragsprobleme (Kundenkonzentration), Legal Issues (Cap Table), Data Room unvollständig' },
    results: [
      { metric: 'Red Flags Fixed', value: '100% (15 issues)' },
      { metric: 'DD Readiness', value: '+100% (0% → 100%)' },
      { metric: 'Fundraising Rate', value: '+50pp (30% → 80%)' },
      { metric: 'Deal Timeline', value: '-40% (6mo → 3.5mo)' },
    ],
  };

  return (
    <section
      id="outcome-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Das Ergebnis' : 'The Outcome'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Typische Ergebnisse (3-5 Tage)' : 'Typical Outcomes (3-5 Days)'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Das sind echte Ergebnisse von Unternehmen wie deinem (Series A-B, €5M-€30M ARR).'
              : "These are real results from companies like yours (Series A-B, €5M-€30M ARR)."}
          </p>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-card border border-border p-6 rounded-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-gradient mb-2">{metric.value}</div>
              <h4 className="font-bold text-foreground mb-4">{language === 'de' ? metric.label.de : metric.label.en}</h4>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-destructive">{language === 'de' ? 'Vorher:' : 'Before:'}</span>
                  <span className="text-muted-foreground">{language === 'de' ? metric.before.de : metric.before.en}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">{language === 'de' ? 'Nachher:' : 'After:'}</span>
                  <span className="text-foreground">{language === 'de' ? metric.after.de : metric.after.en}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                {language === 'de' ? metric.description.de : metric.description.en}
              </p>
            </div>
          ))}
        </div>

        {/* Case Study */}
        <div className="bg-accent/10 border-2 border-accent/30 p-8 rounded-lg">
          <h3 className="text-lg font-bold mb-6 text-foreground text-center">
            {language === 'de' ? 'Echtes Beispiel' : 'Real Example'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold text-foreground mb-2">{language === 'de' ? 'Unternehmen:' : 'Company:'}</p>
              <p className="text-muted-foreground mb-4">{caseStudy.company}</p>
              <p className="font-bold text-foreground mb-2">{language === 'de' ? 'Herausforderung:' : 'Challenge:'}</p>
              <p className="text-muted-foreground mb-4">{language === 'de' ? caseStudy.challenge.de : caseStudy.challenge.en}</p>
              <p className="font-bold text-foreground mb-2">{language === 'de' ? 'DD-Probleme:' : 'DD Problems:'}</p>
              <p className="text-muted-foreground">{language === 'de' ? caseStudy.problems.de : caseStudy.problems.en}</p>
            </div>
            <div>
              <p className="font-bold text-foreground mb-4">{language === 'de' ? 'Ergebnisse:' : 'Results:'}</p>
              <div className="space-y-3">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">{result.metric}</span>
                    <span className="font-bold text-accent">{result.value}</span>
                  </div>
                ))}
              </div>
            </div>
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

  const week1Steps = [
    { en: 'Request documents (financials, contracts, cap table, etc.)', de: 'Dokumente anfragen (Financials, Verträge, Cap Table, etc.)' },
    { en: 'Simulate VC due diligence (8 dimensions)', de: 'VC Due Diligence simulieren (8 Dimensionen)' },
    { en: 'Identify red flags (investor perspective)', de: 'Red Flags identifizieren (Investor-Perspektive)' },
    { en: 'Create Red Flags Report (30-40 pages)', de: 'Red Flags Report erstellen (30-40 Seiten)' },
  ];

  const guarantees = [
    { en: 'Investor-grade quality (board-ready report)', de: 'Investor-Grade Qualität (Board-Ready Report)' },
    { en: '8 dimensions analyzed (comprehensive DD simulation)', de: '8 Dimensionen analysiert (umfassende DD Simulation)' },
    { en: 'Fast turnaround (3-5 days, not 4-6 weeks)', de: 'Schnelle Lieferung (3-5 Tage, nicht 4-6 Wochen)' },
    { en: 'Reference calls available (talk to CEOs who\'ve used this)', de: 'Referenzgespräche möglich (mit CEOs sprechen, die das genutzt haben)' },
  ];

  return (
    <section
      id="process-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Der Prozess' : 'How We Work'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Der VC Due Diligence Simulation Prozess' : 'The VC Due Diligence Simulation Process'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Transparente Timeline. Klare Deliverables. Investor-Grade Qualität.'
              : 'Transparent timeline. Clear deliverables. Investor-grade quality.'}
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-card border border-border p-8 rounded-lg mb-8">
            <h3 className="text-lg font-bold mb-4 text-foreground flex items-center gap-3">
              <Clock className="w-5 h-5 text-accent" />
              {language === 'de' ? 'Woche 1: Due Diligence Simulation' : 'Week 1: Due Diligence Simulation'}
            </h3>
            <div className="space-y-3 mb-6">
              {week1Steps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-accent">{index + 1}</span>
                  </div>
                  <span className="text-sm text-foreground">{language === 'de' ? step.de : step.en}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>{language === 'de' ? 'Zeitaufwand (dein Team):' : 'Time commitment (your team):'}</strong> 4-6 {language === 'de' ? 'Stunden (Dokumenten-Sharing, Q&A)' : 'hours (document sharing, Q&A)'}
            </p>
          </div>
        </div>

        {/* Pricing */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg text-center">
            <h4 className="font-bold text-foreground mb-2">{language === 'de' ? 'Base Package' : 'Base Package'}</h4>
            <div className="text-3xl font-bold text-gradient mb-4">€5.9K</div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Red Flags Report (30-40 pages)</li>
              <li>• 8 Dimensions analyzed</li>
              <li>• Investor perspective</li>
              <li>• 3-5 days turnaround</li>
            </ul>
          </div>
          <div className="bg-muted/50 border-2 border-border p-6 rounded-lg text-center">
            <h4 className="font-bold text-foreground mb-2">+ Execution Bridge</h4>
            <div className="text-3xl font-bold text-muted-foreground mb-4">+€3.9K</div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• DD Readiness Roadmap (90-day plan)</li>
              <li>• Data Room Checklist</li>
              <li>• Q&A Prep Guide</li>
              <li>• Team Training</li>
            </ul>
          </div>
        </div>

        {/* Quality Guarantee */}
        <div className="bg-card border border-border p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-6 text-foreground flex items-center gap-3 justify-center">
            <Shield className="w-5 h-5 text-accent" />
            {language === 'de' ? 'Qualitätsgarantie' : 'Quality Guarantee'}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {guarantees.map((item, index) => (
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
// SECTION 6: QUALIFICATION
// ============================================================================
const QualificationSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const goodFit = [
    { en: 'You\'re preparing for fundraising (Series A-C, €2M-€50M)', de: 'Du bereitest Fundraising vor (Series A-C, €2M-€50M)' },
    { en: 'You\'re 3-6 months away from fundraising', de: 'Du bist 3-6 Monate vom Fundraising entfernt' },
    { en: 'Your DD readiness is 0% (not prepared)', de: 'Deine DD Readiness ist 0% (nicht vorbereitet)' },
    { en: 'You\'re Series A-B, €5M-€30M ARR, 30-150 people', de: 'Du bist Series A-B, €5M-€30M ARR, 30-150 Mitarbeiter' },
    { en: 'You have budget (€5.9K-€9.8K)', de: 'Du hast Budget (€5.9K-€9.8K)' },
  ];

  const notFit = [
    { condition: { en: 'You\'re not fundraising (no immediate need)', de: 'Du raiset nicht (kein akuter Bedarf)' }, alternative: { en: 'Wait until 3-6 months before fundraising', de: 'Warte bis 3-6 Monate vor Fundraising' } },
    { condition: { en: 'You\'re already DD-ready (100% prepared)', de: 'Du bist bereits DD-ready (100% vorbereitet)' }, alternative: { en: 'Investor-Readiness Pitch Deck Check (€1.9K)', de: 'Investor-Readiness Pitch Deck Check (€1.9K)' } },
    { condition: { en: 'You need hands-on DD preparation (not just report)', de: 'Du brauchst Hands-on DD-Vorbereitung (nicht nur Report)' }, alternative: { en: 'Boost: Board Excellence (€60K-€78K)', de: 'Boost: Board Excellence (€60K-€78K)' } },
  ];

  return (
    <section
      id="qualification-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Für wen' : "Who It's For"}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Ist das richtig für dich?' : 'Is This Right for You?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'VC Due Diligence Simulation funktioniert am besten für Unternehmen in dieser Situation.'
              : 'VC Due Diligence Simulation works best for companies in this situation.'}
          </p>
        </div>

        {/* Good Fit / Not Fit */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Good Fit */}
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-6 text-accent flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              {language === 'de' ? 'Das passt, wenn:' : 'This is a good fit if:'}
            </h3>
            <div className="space-y-3">
              {goodFit.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{language === 'de' ? item.de : item.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not Fit */}
          <div className="bg-muted/50 border-2 border-border p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-6 text-muted-foreground flex items-center gap-2">
              <X className="w-5 h-5" />
              {language === 'de' ? 'Das passt nicht, wenn:' : 'This is not a good fit if:'}
            </h3>
            <div className="space-y-4">
              {notFit.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{language === 'de' ? item.condition.de : item.condition.en}</span>
                  </div>
                  <p className="text-xs text-accent ml-8">
                    → {language === 'de' ? 'Besser:' : 'Better fit:'} {language === 'de' ? item.alternative.de : item.alternative.en}
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

  const steps = [
    { en: 'We\'ll send you a document checklist (what we need)', de: 'Wir senden dir eine Dokumenten-Checkliste (was wir brauchen)' },
    { en: 'You share documents (4-6 hours)', de: 'Du teilst Dokumente (4-6 Stunden)' },
    { en: 'We simulate VC due diligence (8 dimensions)', de: 'Wir simulieren VC Due Diligence (8 Dimensionen)' },
    { en: 'You get Red Flags Report (30-40 pages, 3-5 days)', de: 'Du erhältst Red Flags Report (30-40 Seiten, 3-5 Tage)' },
  ];

  const faqs = [
    { q: { en: 'How long does DD simulation take?', de: 'Wie lange dauert die DD Simulation?' }, a: { en: '3-5 days (from document sharing to Red Flags Report)', de: '3-5 Tage (vom Dokumenten-Sharing bis zum Red Flags Report)' } },
    { q: { en: "What's the investment?", de: 'Was ist das Investment?' }, a: { en: '€5.9K (Base) or €9.8K (Base + Execution Bridge)', de: '€5.9K (Base) oder €9.8K (Base + Execution Bridge)' } },
    { q: { en: 'What documents do you need?', de: 'Welche Dokumente braucht ihr?' }, a: { en: 'Financials (P&L, balance sheet, cash flow), contracts (customer, supplier), cap table, pitch deck, data room (if available)', de: 'Financials (P&L, Bilanz, Cashflow), Verträge (Kunden, Lieferanten), Cap Table, Pitch Deck, Data Room (falls vorhanden)' } },
    { q: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' }, a: { en: "Yes. We'll connect you with a CEO who's used DD simulation (same stage, same challenge).", de: 'Ja. Wir verbinden dich mit einem CEO, der DD Simulation genutzt hat (gleiche Stage, gleiche Herausforderung).' } },
    { q: { en: "What's the ROI?", de: 'Was ist der ROI?' }, a: { en: 'Typical ROI is 10-50x (based on valuation protection and deal success).', de: 'Typischer ROI ist 10-50x (basierend auf Bewertungsschutz und Deal-Erfolg).' } },
    { q: { en: 'How is this different from hiring a lawyer?', de: 'Wie unterscheidet sich das von einem Anwalt?' }, a: { en: 'Lawyers focus on legal DD. We simulate full VC DD (8 dimensions: financial, commercial, product, team, legal, ops, strategic, governance).', de: 'Anwälte fokussieren auf Legal DD. Wir simulieren vollständige VC DD (8 Dimensionen: Financial, Commercial, Product, Team, Legal, Ops, Strategic, Governance).' } },
  ];

  return (
    <section
      id="final-cta"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Bereit für VC Due Diligence Simulation?' : 'Ready to Simulate VC Due Diligence?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de' ? "Das passiert als Nächstes." : "Here's what happens next."}
          </p>
        </div>

        {/* Step 1: Request Simulation */}
        <div className="bg-accent/10 border-2 border-accent/30 p-8 rounded-lg mb-8 max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-4 text-foreground">
            {language === 'de' ? 'Schritt 1: Simulation anfragen (€5.9K)' : 'Step 1: Request Simulation (€5.9K)'}
          </h3>
          <p className="text-muted-foreground mb-6">
            {language === 'de'
              ? 'Klicke den Button, um deine VC Due Diligence Simulation anzufragen:'
              : 'Click the button below to request your VC Due Diligence Simulation:'}
          </p>
          <div className="space-y-2 mb-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-accent">{index + 1}</span>
                </div>
                <span className="text-sm text-foreground">{language === 'de' ? step.de : step.en}</span>
              </div>
            ))}
          </div>
          <p className="text-sm font-bold text-accent mb-6">
            {language === 'de' ? 'Behebe Red Flags, bevor VCs sie finden.' : 'Fix red flags before VCs find them.'}
          </p>
          <Button
            size="xl"
            className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => window.open('https://calendly.com/michel-scalingx/vc-dd-simulation', '_blank')}
          >
            {language === 'de' ? 'Simulation anfragen (€5.9K)' : 'Request Simulation (€5.9K)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Alternative CTA */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-4">
            {language === 'de' ? 'Nicht sicher, ob du DD Simulation brauchst? Starte mit einem kostenlosen Call:' : 'Not sure if you need DD simulation? Start with a free call:'}
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://calendly.com/michel-scalingx/inflection-call', '_blank')}
            className="border-2"
          >
            {language === 'de' ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book Free Inflection Call (30 min)'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-6 text-foreground text-center">FAQ</h3>
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

        {/* Final Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            {language === 'de' ? 'Noch Fragen? Email uns unter team@scalingx.io oder buche einen Call.' : 'Still have questions? Email us at team@scalingx.io or book a call.'}
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const VCDueDiligenceSimulation: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
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

export default VCDueDiligenceSimulation;
