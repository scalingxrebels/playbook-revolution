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
  BookOpen,
  Target,
  Zap,
  Settings,
  BarChart3,
  Brain,
  Users,
  ExternalLink,
  Award,
  Layers,
  CheckCircle,
  TrendingUp,
  Lightbulb,
  Clock,
} from 'lucide-react';

const AMAZON_URL = 'https://www.amazon.de/dp/B0FN7C71VN';

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
      <div className="container max-w-6xl mx-auto px-6 py-24 relative z-10">
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
              <span className="text-foreground font-medium">Fix Growth. Scale Faster.</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Badge */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Badge variant="gradient">
            <BookOpen className="w-4 h-4 mr-2" />
            Book
          </Badge>
          <Badge variant="outline">€4.29-€44.90</Badge>
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
            Kindle · Paperback · Hardcover
          </Badge>
        </div>

        {/* Two Column Layout: Cover + Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Book Cover */}
          <div className="flex justify-center lg:justify-end animate-blur-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 blur-2xl opacity-50" />
              <img
                src="/images/book-fix-growth-cover.png"
                alt="Fix Growth. Scale Faster. Book Cover"
                className="relative w-full max-w-sm rounded-lg shadow-2xl border border-border/50"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
              <span className="block text-gradient animate-gradient bg-gradient-primary">
                Fix Growth.
              </span>
              <span className="block text-foreground">
                Scale Faster.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-body-lg text-muted-foreground max-w-xl mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {language === 'de'
                ? 'Das Execution-Playbook für VC/PE-finanzierte Unternehmen, die gewinnen wollen. Basierend auf 140+ Projekten mit Startups, Scale-ups und Mittelständlern.'
                : 'The execution playbook for VC/PE-backed ventures that want to win. Based on 140+ projects with startups, scale-ups, and mid-market ventures.'}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button
                size="xl"
                className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
                onClick={() => window.open(AMAZON_URL, '_blank')}
              >
                {language === 'de' ? 'Auf Amazon kaufen' : 'Buy on Amazon'}
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('/downloads/fix-growth-sample.pdf', '_blank')}
                className="border-2"
              >
                {language === 'de' ? 'Leseprobe' : 'Read Sample'}
                <BookOpen className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {[
                { icon: Award, label: language === 'de' ? '140+ Projekte' : '140+ Projects' },
                { icon: Target, label: language === 'de' ? '32 Interventionen' : '32 Interventions' },
                { icon: Zap, label: language === 'de' ? '4 Hebel, 3 Modi' : '4 Levers, 3 Modes' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-accent" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
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
    {
      icon: TrendingUp,
      title: { en: 'Revenue Stagnates', de: 'Umsatz stagniert' },
      desc: { en: 'Growth slows despite strong product and funding. The flywheel isn\'t spinning.', de: 'Wachstum verlangsamt sich trotz starkem Produkt und Funding. Das Flywheel dreht sich nicht.' },
    },
    {
      icon: Layers,
      title: { en: 'Complexity Grows', de: 'Komplexität wächst' },
      desc: { en: 'More meetings, more overhead, less output. Scaling feels like drowning.', de: 'Mehr Meetings, mehr Overhead, weniger Output. Skalieren fühlt sich an wie Ertrinken.' },
    },
    {
      icon: Clock,
      title: { en: 'Decisions Come Too Late', de: 'Entscheidungen kommen zu spät' },
      desc: { en: 'By the time you decide, the window has closed. Competitors move faster.', de: 'Wenn du entscheidest, ist das Fenster geschlossen. Wettbewerber sind schneller.' },
    },
    {
      icon: Users,
      title: { en: 'Investors Lose Confidence', de: 'Investoren verlieren Vertrauen' },
      desc: { en: 'Board meetings become defense sessions. The narrative slips away.', de: 'Board-Meetings werden zu Verteidigungssessions. Die Narrative entgleitet.' },
    },
  ];

  return (
    <section
      id="problem-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-destructive mb-4 block">
            {language === 'de' ? 'Das Problem' : 'The Problem'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' 
              ? 'Du hast alles—außer einem System für Execution' 
              : 'You Have Everything—Except a System for Execution'}
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Gutes Produkt. Starke Investoren. Ambitionierte Ziele. Aber etwas hakt.'
              : 'Good product. Strong investors. Ambitious goals. But something\'s stuck.'}
          </p>
        </div>

        {/* Symptom Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {symptoms.map((symptom, index) => {
            const Icon = symptom.icon;
            return (
              <div
                key={index}
                className="bg-destructive/5 border-2 border-destructive/20 p-6 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">
                      {language === 'de' ? symptom.title.de : symptom.title.en}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {language === 'de' ? symptom.desc.de : symptom.desc.en}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Line */}
        <div className="max-w-2xl mx-auto bg-card border-2 border-destructive/30 p-6 rounded-lg text-center">
          <h4 className="font-bold text-lg mb-2 text-destructive">
            {language === 'de' ? 'Was fehlt?' : 'What\'s Missing?'}
          </h4>
          <p className="text-muted-foreground">
            {language === 'de'
              ? 'Ein klares System für Execution. Ein Playbook, das nicht nur erklärt, sondern liefert.'
              : 'A clear system for execution. A playbook that doesn\'t just explain—it delivers.'}
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 3: SOLUTION (The Hypergrowth System)
// ============================================================================
const SolutionSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const levers = [
    {
      icon: BarChart3,
      title: { en: 'Revenue Acceleration', de: 'Revenue Acceleration' },
      desc: { en: 'Fix CAC, boost win rates, compress sales cycles.', de: 'Fixe CAC, steigere Win Rates, verkürze Sales Cycles.' },
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
    },
    {
      icon: TrendingUp,
      title: { en: 'Sustainable Growth', de: 'Sustainable Growth' },
      desc: { en: 'NRR, retention, expansion—the compounding engine.', de: 'NRR, Retention, Expansion—der Zinseszins-Motor.' },
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
    },
    {
      icon: Settings,
      title: { en: 'Scaling Operations', de: 'Scaling Operations' },
      desc: { en: 'Decision velocity, coordination, culture that scales.', de: 'Decision Velocity, Koordination, Kultur die skaliert.' },
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
    },
    {
      icon: Target,
      title: { en: 'Valuation Growth', de: 'Valuation Growth' },
      desc: { en: 'Rule of 40, investor confidence, exit readiness.', de: 'Rule of 40, Investor Confidence, Exit Readiness.' },
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
    },
  ];

  const modes = [
    { name: 'Power Up', duration: '4-6 Weeks', focus: { en: 'Fix 1 Bottleneck', de: '1 Engpass fixen' } },
    { name: 'Boost', duration: '90 Days', focus: { en: 'Build 1 Growth Engine', de: '1 Growth Engine bauen' } },
    { name: 'Accelerate', duration: '6-12 Months', focus: { en: 'System Transformation', de: 'System-Transformation' } },
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
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Das System' : 'The System'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' 
              ? 'Das ScalingX Hypergrowth System' 
              : 'The ScalingX Hypergrowth System'}
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? '32 Interventionen. 4 Hebel. 3 Modi. Das komplette Framework für systematisches Hypergrowth.'
              : '32 interventions. 4 levers. 3 modes. The complete framework for systematic hypergrowth.'}
          </p>
        </div>

        {/* 4 Levers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {levers.map((lever, index) => {
            const Icon = lever.icon;
            return (
              <Card
                key={index}
                className={`${lever.bgColor} border-2 ${lever.borderColor} transition-all duration-300 hover:scale-105 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 rounded-xl ${lever.bgColor} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-7 h-7 ${lever.color}`} />
                  </div>
                  <h4 className={`font-bold text-lg ${lever.color} mb-2`}>
                    {language === 'de' ? lever.title.de : lever.title.en}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'de' ? lever.desc.de : lever.desc.en}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* 3 Modes */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-center font-bold text-lg text-foreground mb-6">
            {language === 'de' ? '3 Engagement-Modi' : '3 Engagement Modes'}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {modes.map((mode, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border p-4 text-center rounded-lg hover:border-accent/50 transition-colors"
              >
                <div className="text-sm font-bold text-accent uppercase tracking-wider mb-1">
                  {mode.name}
                </div>
                <div className="text-xs text-muted-foreground mb-2">{mode.duration}</div>
                <div className="text-sm text-foreground">
                  {language === 'de' ? mode.focus.de : mode.focus.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 4: WHAT'S INSIDE
// ============================================================================
const WhatsInsideSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const deliverables = [
    {
      icon: Layers,
      title: { en: 'The Complete System', de: 'Das komplette System' },
      desc: { en: '32 interventions across 4 levers and 3 modes. The full ScalingX Hypergrowth System documented.', de: '32 Interventionen über 4 Hebel und 3 Modi. Das komplette ScalingX Hypergrowth System dokumentiert.' },
    },
    {
      icon: CheckCircle,
      title: { en: 'Checklists & Tools', de: 'Checklisten & Tools' },
      desc: { en: 'Actionable checklists, diagnostic tools, and real-world examples from 140+ projects.', de: 'Umsetzbare Checklisten, Diagnose-Tools und Real-World Beispiele aus 140+ Projekten.' },
    },
    {
      icon: BarChart3,
      title: { en: 'The Scaling Scorecard', de: 'Die Scaling Scorecard' },
      desc: { en: 'Assess your current state and build your strategic roadmap based on data, not gut feeling.', de: 'Bewerte deinen Status quo und baue deine strategische Roadmap auf Daten, nicht Bauchgefühl.' },
    },
    {
      icon: Brain,
      title: { en: 'ScalingX Hypergrowth GPT', de: 'ScalingX Hypergrowth GPT' },
      desc: { en: 'Exclusive access to our AI assistant with a dedicated prompt guide. Your 24/7 scaling advisor.', de: 'Exklusiver Zugang zu unserem AI-Assistenten mit dediziertem Prompt Guide. Dein 24/7 Scaling Advisor.' },
      highlight: true,
    },
  ];

  return (
    <section
      id="whats-inside-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Inhalt' : 'What\'s Inside'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' 
              ? 'Alles was du brauchst, um zu skalieren' 
              : 'Everything You Need to Scale'}
          </h2>
        </div>

        {/* Deliverable Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {deliverables.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className={`transition-all duration-300 hover:border-accent/50 animate-slide-up ${item.highlight ? 'border-accent/50 bg-accent/5' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${item.highlight ? 'bg-accent/20' : 'bg-primary/10'} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-6 h-6 ${item.highlight ? 'text-accent' : 'text-primary'}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        {language === 'de' ? item.title.de : item.title.en}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {language === 'de' ? item.desc.de : item.desc.en}
                      </p>
                      {item.highlight && (
                        <Badge className="mt-3 bg-accent/20 text-accent border-accent/30">
                          {language === 'de' ? 'Exklusiver Bonus' : 'Exclusive Bonus'}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 5: AUTHOR
// ============================================================================
const AuthorSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const credentials = [
    { en: '140+ growth projects', de: '140+ Wachstumsprojekte' },
    { en: 'Startups, Scale-ups, Mid-Market', de: 'Startups, Scale-ups, Mittelstand' },
    { en: 'VC/PE-backed ventures', de: 'VC/PE-finanzierte Unternehmen' },
    { en: 'AI-Native methodology', de: 'AI-Native Methodologie' },
  ];

  return (
    <section
      id="author-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Author Image */}
          <div className="flex justify-center animate-blur-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl opacity-50" />
              <img
                src="/images/ml-hero-new.png"
                alt="Michel Lason"
                className="relative w-64 h-64 object-cover rounded-full border-4 border-border shadow-xl"
              />
            </div>
          </div>

          {/* Author Info */}
          <div className="animate-slide-up">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
              {language === 'de' ? 'Der Autor' : 'The Author'}
            </span>
            <h2 className="font-display text-display-sm text-foreground mb-4">
              Michel Lason
            </h2>
            <p className="text-body-lg text-muted-foreground mb-6">
              {language === 'de'
                ? 'Gründer von ScalingX. Experte für Hypergrowth-Systeme. Hat 140+ Projekte mit VC/PE-finanzierten Unternehmen geleitet—von Early-Stage Startups bis zum Mittelstand.'
                : 'Founder of ScalingX. Expert in hypergrowth systems. Has led 140+ projects with VC/PE-backed ventures—from early-stage startups to mid-market companies.'}
            </p>

            {/* Credentials */}
            <div className="space-y-3">
              {credentials.map((cred, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-foreground">{language === 'de' ? cred.de : cred.en}</span>
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
// SECTION 6: SOCIAL PROOF
// ============================================================================
const ProofSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="proof-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Die Grundlage' : 'The Foundation'}
          </span>
          <h2 className="font-display text-display-sm text-foreground mb-6">
            {language === 'de' 
              ? 'Basierend auf 140+ echten Projekten' 
              : 'Based on 140+ Real Projects'}
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            {language === 'de'
              ? 'Dieses Buch ist kein theoretisches Framework. Es ist das destillierte Wissen aus 140+ Projekten mit Startups, Scale-ups und Mittelständlern—komprimiert in ein System, das liefert.'
              : 'This book is not a theoretical framework. It\'s the distilled knowledge from 140+ projects with startups, scale-ups, and mid-market ventures—compressed into a system that delivers.'}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: '140+', label: { en: 'Projects', de: 'Projekte' } },
              { value: '32', label: { en: 'Interventions', de: 'Interventionen' } },
              { value: '4', label: { en: 'Levers', de: 'Hebel' } },
              { value: '3', label: { en: 'Modes', de: 'Modi' } },
            ].map((stat, index) => (
              <div key={index} className="bg-card border-2 border-border p-6 rounded-lg">
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'de' ? stat.label.de : stat.label.en}
                </div>
              </div>
            ))}
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

  const formats = [
    { name: 'Kindle', price: '€4.29', icon: Lightbulb },
    { name: 'Paperback', price: '€14.95', icon: BookOpen },
    { name: 'Hardcover', price: '€44.90', icon: Award },
  ];

  return (
    <section
      id="final-cta"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-[#0A0A0F]" />
      <TwinklingStars />

      <div className="container max-w-5xl mx-auto px-6 relative z-10 text-center">
        <h2 className="font-display text-display-md text-foreground mb-6 animate-blur-in">
          {language === 'de' 
            ? 'Bereit, dein Wachstum zu fixen?' 
            : 'Ready to Fix Your Growth?'}
        </h2>
        <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          {language === 'de'
            ? 'Hole dir das Execution-Playbook, das auf 140+ echten Projekten basiert. Verfügbar als Kindle, Paperback und Hardcover.'
            : 'Get the execution playbook based on 140+ real projects. Available as Kindle, Paperback, and Hardcover.'}
        </p>

        {/* Format Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {formats.map((format, index) => {
            const Icon = format.icon;
            return (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-2 border-border hover:border-accent/50 transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(AMAZON_URL, '_blank')}
              >
                <CardContent className="p-6 text-center">
                  <Icon className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-lg text-foreground mb-2">{format.name}</h4>
                  <div className="text-2xl font-bold text-gradient">{format.price}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main CTA */}
        <Button
          size="xl"
          className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-12 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
          onClick={() => window.open(AMAZON_URL, '_blank')}
        >
          {language === 'de' ? 'Jetzt auf Amazon kaufen' : 'Buy Now on Amazon'}
          <ExternalLink className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE
// ============================================================================
const FixGrowthBook: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <WhatsInsideSection />
        <AuthorSection />
        <ProofSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default FixGrowthBook;
