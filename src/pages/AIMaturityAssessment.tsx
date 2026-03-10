import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BreadcrumbSchema } from '@/components/seo';
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
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
import {
  Brain,
  Target,
  Server,
  GraduationCap,
  Layers,
  Workflow,
  LineChart,
  Users,
  Lightbulb,
  TrendingUp,
  Clock,
  FileText,
  Shield,
  CheckCircle2,
  Check,
  X,
  ArrowRight,
  ChevronDown,
  Calendar,
  Zap,
  AlertTriangle,
  BarChart3,
} from 'lucide-react';

// ============================================================================
// SECTION 1: HERO
// ============================================================================
const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroStats = [
    { value: '+90%', label: 'AI Clarity', sublabel: isGerman ? 'Typischer Bereich' : 'Typical range' },
    { value: '+50-150%', label: 'AI Maturity Roadmap', sublabel: isGerman ? 'Typischer Bereich' : 'Typical range' },
    { value: '+30-80%', label: 'Efficiency Roadmap', sublabel: isGerman ? 'Typischer Bereich' : 'Typical range' },
  ];

  const trustBadges = [
    { icon: Clock, label: isGerman ? '3-5 Tage (Schnelle Lieferung)' : '3-5 Days (Fast Turnaround)' },
    { icon: FileText, label: isGerman ? 'Board-Ready Report (20-30 Seiten)' : 'Board-Ready Report (20-30 Pages)' },
    { icon: Shield, label: isGerman ? 'Experten-Analyse (McKinsey-Level)' : 'Expert Analysis (McKinsey-Level Quality)' },
  ];

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="dark-section relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise pt-20"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(240,10%,8%)] to-[hsl(240,15%,12%)] transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }}
      />
      <div
        className="absolute inset-0 bg-mesh opacity-60 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }}
      />
      <div
        className="absolute inset-0 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[1]}px)` }}
      >
        <TwinklingStars />
      </div>
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[2]}px) scale(1.1)` }}
      />

      <div className="container max-w-5xl mx-auto px-6 py-24 relative z-10 text-center">
        <Breadcrumb className="justify-center mb-6 animate-fade-in">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/solutions" className="text-muted-foreground hover:text-foreground">
                Solutions
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-foreground font-medium">AI Maturity Assessment</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Brain className="w-4 h-4 mr-2" />
          Decision Support · 3-5 {isGerman ? 'Tage' : 'Days'} · €3.9K-€5.9K
        </Badge>

        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">{isGerman ? 'Expert AI Assessment—' : 'Expert AI Assessment—'}</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {isGerman ? 'In 3-5 Tagen' : 'In 3-5 Days'}
          </span>
        </h1>

        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {isGerman
            ? 'Erhalte eine Experten-Analyse deiner AI-Reife in 3-5 Tagen. Typische Ergebnisse: AI Clarity +90%, AI Maturity Roadmap +50-150%, Efficiency Roadmap +30-80%—mit Board-Ready Report.'
            : 'Get expert analysis of your AI maturity in 3-5 days. Typical outcomes: AI Clarity +90%, AI Maturity Roadmap +50-150%, Efficiency Roadmap +30-80%—with board-ready report.'}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {heroStats.map((stat, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm border-2 border-border p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-foreground uppercase tracking-wider">{stat.label}</div>
              <div className="text-xs text-muted-foreground mt-1">({stat.sublabel})</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
          >
            {isGerman ? 'Assessment anfragen (€3.9K)' : 'Request Assessment (€3.9K)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection('solution-section')} className="border-2">
            {isGerman ? 'So funktioniert es' : 'See How It Works'}
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

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
  const isGerman = language === 'de';
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const symptoms = [
    { title: isGerman ? 'Niedriger AI Maturity Score' : 'Low AI Maturity Score', description: isGerman ? '20-40% (Level 1: AI-Powered, Benchmark: 70-80% für AI-Native)' : '20-40% (Level 1: AI-Powered, benchmark: 70-80% for AI-Native)', icon: Brain },
    { title: isGerman ? 'AI-Chaos' : 'AI chaos', description: isGerman ? '10+ AI-Tools, keine Strategie, keine Integration' : '10+ AI tools, no strategy, no integration', icon: Layers },
    { title: isGerman ? 'Kein AI-ROI' : 'No AI ROI', description: isGerman ? '€50K-€200K AI-Ausgaben, unklarer Impact' : '€50K-€200K AI spend, unclear impact', icon: TrendingUp },
    { title: isGerman ? 'Wettbewerber-Gap' : 'Competitor gap', description: isGerman ? 'Wettbewerber 2-3x schneller (AI-Native vs. AI-Powered)' : 'Competitors 2-3x faster (AI-Native vs. AI-Powered)', icon: Zap },
    { title: isGerman ? 'Keine AI-Clarity' : 'No AI clarity', description: isGerman ? 'Weißt nicht, welchen AI-Hebel du zuerst ziehen sollst' : "Don't know which AI lever to pull first", icon: Target },
  ];

  const costs = [
    isGerman ? 'Zerstört Wettbewerbsposition (Wettbewerber ziehen 2-3x davon)' : 'Destroys competitive position (competitors pull ahead 2-3x)',
    isGerman ? 'Begrenzt Wachstumspotenzial (kann ohne AI nicht skalieren)' : "Limits growth potential (can't scale without AI)",
    isGerman ? 'Schwächt Board-Vertrauen (Board verliert Vertrauen in AI-Strategie)' : 'Weakens board confidence (board losing trust in AI strategy)',
    isGerman ? 'Erhöht Down-Round-Risiko (kann nicht zu höherer Bewertung raisen)' : "Increases down-round risk (can't raise at higher valuation)",
  ];

  return (
    <section
      id="problem-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-destructive mb-4 block">
            {isGerman ? 'Das Problem' : 'The Problem'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {isGerman ? 'Du nutzt AI—aber wirst nicht AI-Native' : "You're Using AI—But Not Becoming AI-Native"}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {isGerman
              ? 'Dein AI Maturity Score ist 30% (Level 1: AI-Powered). Du nutzt AI-Tools (ChatGPT, Copilot), aber AI ist nicht in deiner DNA. Deine Wettbewerber sind bei 70-80% (Level 2-3: AI-Enabled/AI-Native). Und das Schlimmste—du weißt nicht, welchen AI-Hebel du zuerst ziehen sollst.'
              : "Your AI Maturity Score is 30% (Level 1: AI-Powered). You're using AI tools (ChatGPT, Copilot), but AI isn't in your DNA. Your competitors are at 70-80% (Level 2-3: AI-Enabled/AI-Native). And worst of all—you don't know which AI lever to pull first."}
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">
            {isGerman ? 'Die Symptome, die du siehst:' : "The symptoms you're seeing:"}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {symptoms.map((symptom, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{symptom.title}</h4>
                  <p className="text-xs text-muted-foreground">{symptom.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">
            {isGerman ? 'Die echten Kosten:' : 'The real cost:'}
          </h3>
          <div className="grid gap-3">
            {costs.map((cost, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-lg animate-slide-up" style={{ animationDelay: `${(index + 5) * 0.05}s` }}>
                <div className="w-6 h-6 rounded-full bg-destructive/30 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <span className="text-sm text-foreground font-medium">{cost}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-bold text-accent">
            {isGerman ? 'Du brauchst AI-Clarity. Schnell.' : 'You need AI clarity. Fast.'}
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
  const isGerman = language === 'de';
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const dimensions = [
    { icon: Target, title: 'AI Strategy', items: isGerman ? ['AI-Vision', 'AI-Roadmap', 'AI-Governance', 'AI-Investment'] : ['AI vision', 'AI roadmap', 'AI governance', 'AI investment'] },
    { icon: Server, title: 'AI Infrastructure', items: isGerman ? ['AI-Tools', 'AI-Stack', 'Daten-Infrastruktur', 'AI-Plattformen'] : ['AI tools', 'AI stack', 'Data infrastructure', 'AI platforms'] },
    { icon: GraduationCap, title: 'AI Capabilities', items: isGerman ? ['AI-Skills', 'AI-Team', 'AI-Training', 'AI-Kultur'] : ['AI skills', 'AI team', 'AI training', 'AI culture'] },
    { icon: Layers, title: 'AI Use Cases', items: isGerman ? ['AI-Adoption', 'AI-Integration', 'AI-Impact', 'AI-Skalierung'] : ['AI adoption', 'AI integration', 'AI impact', 'AI scale'] },
    { icon: Workflow, title: 'AI Operations', items: isGerman ? ['AI-Workflows', 'AI-Automatisierung', 'AI-Monitoring', 'AI-Optimierung'] : ['AI workflows', 'AI automation', 'AI monitoring', 'AI optimization'] },
    { icon: LineChart, title: 'AI Decision-Making', items: isGerman ? ['AI-Entscheidungen', 'AI-Insights', 'AI-Empfehlungen', 'AI-Autonomie'] : ['AI-driven decisions', 'AI insights', 'AI recommendations', 'AI autonomy'] },
    { icon: Users, title: 'AI Customer Experience', items: isGerman ? ['AI im Produkt', 'AI im Support', 'AI im Sales', 'AI im Marketing'] : ['AI in product', 'AI in support', 'AI in sales', 'AI in marketing'] },
    { icon: Lightbulb, title: 'AI Innovation', items: isGerman ? ['AI-Experimente', 'AI-R&D', 'AI-Partnerschaften', 'AI-Wettbewerbsvorteil'] : ['AI experimentation', 'AI R&D', 'AI partnerships', 'AI competitive advantage'] },
  ];

  const differentiators = [
    isGerman ? 'Experten-Analyse (McKinsey-Level Qualität, nicht nur Daten-Dump)' : 'Expert analysis (McKinsey-level quality, not just data dump)',
    isGerman ? '8 Dimensionen (Strategy, Infrastructure, Capabilities, Use Cases, Operations, Decision-Making, CX, Innovation)' : '8 dimensions (strategy, infrastructure, capabilities, use cases, operations, decision-making, CX, innovation)',
    isGerman ? 'Board-Ready Report (20-30 Seiten, Investor-Grade Qualität)' : 'Board-ready report (20-30 pages, investor-grade quality)',
    isGerman ? 'Schnelle Lieferung (3-5 Tage, nicht 2-4 Wochen)' : 'Fast turnaround (3-5 days, not 2-4 weeks)',
    isGerman ? 'AI Maturity Score (0-100% Skala, Benchmark gegen AI-Native Leader)' : 'AI Maturity Score (0-100% scale, benchmark against AI-Native leaders)',
  ];

  return (
    <section
      id="solution-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {isGerman ? 'Die Lösung' : 'The Solution'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {isGerman ? 'Wie AI Maturity Assessment funktioniert' : 'How AI Maturity Assessment Works'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {isGerman
              ? 'Wir analysieren nicht nur Tools. Wir führen eine Experten-AI-Maturity-Analyse durch—aus McKinsey-Level-Perspektive—damit du genau weißt, was du zuerst fixen sollst.'
              : "We don't just analyze tools. We conduct expert AI maturity analysis—from McKinsey-level perspective—so you know exactly what to fix first."}
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">
            {isGerman ? '8 AI-Dimensionen' : '8 AI Dimensions'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dimensions.map((dimension, index) => (
              <div key={index} className="bg-card/50 border border-border p-4 rounded-lg text-center animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <dimension.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <h4 className="font-bold text-sm text-foreground mb-2">{dimension.title}</h4>
                <ul className="space-y-1">
                  {dimension.items.map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">{isGerman ? 'Tag 1-2: AI Maturity Analyse' : 'Day 1-2: AI Maturity Analysis'}</h4>
                <p className="text-sm text-accent">€3.9K</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {isGerman ? 'Wir analysieren deine AI-Reife über 8 Dimensionen mit dem AI Maturity Framework (AMF).' : 'We analyze your AI maturity across 8 dimensions using the AI Maturity Framework (AMF).'}
            </p>
            <div className="space-y-2">
              {[
                isGerman ? 'AI Maturity Report (20-30 Seiten, Board-ready)' : 'AI Maturity Report (20-30 pages, board-ready)',
                isGerman ? 'AI Maturity Score (0-100% Skala)' : 'AI Maturity Score (0-100% scale)',
                isGerman ? 'AI Gap Analyse (8 Dimensionen)' : 'AI Gap Analysis (8 dimensions)',
                isGerman ? 'Experten-Empfehlungen (5-10 Key Actions)' : 'Expert Recommendations (5-10 key actions)',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/50 border-2 border-border p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">{isGerman ? 'Tag 3-5: 90-Tage AI Roadmap' : 'Day 3-5: 90-Day AI Roadmap'}</h4>
                <p className="text-sm text-muted-foreground">{isGerman ? 'Optional +€2K' : 'Optional +€2K'}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {isGerman ? 'Wir erstellen deine 90-Tage AI Transformation Roadmap.' : 'We create your 90-day AI transformation roadmap.'}
            </p>
            <div className="space-y-2">
              {[
                isGerman ? '90-Tage AI Transformation Roadmap' : '90-Day AI Transformation Roadmap',
                isGerman ? 'Quick Wins Liste (erste 30 Tage)' : 'Quick Wins List (first 30 days)',
                isGerman ? 'Long-Term Strategy (90 Tage)' : 'Long-Term Strategy (90 days)',
                isGerman ? 'Implementation Guide' : 'Implementation Guide',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card/50 border border-border p-8 rounded-lg">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">
            {isGerman ? 'Was macht das anders:' : 'What makes this different:'}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
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
  const isGerman = language === 'de';
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const metrics = [
    {
      value: '+90%', label: 'AI Clarity',
      before: isGerman ? 'Niedrig (weiß nicht, welchen AI-Hebel ziehen)' : "Low (don't know which AI lever to pull)",
      after: isGerman ? 'Hoch (klare Roadmap, Prioritäten klar)' : 'High (clear roadmap, priorities clear)',
      description: isGerman ? 'Von "AI-Chaos" zu "AI-Clarity"' : 'From "AI chaos" to "AI clarity"',
    },
    {
      value: '+50-150%', label: 'AI Maturity Roadmap',
      before: isGerman ? 'AI Maturity Score = 30% (kein klarer Pfad)' : 'AI Maturity Score = 30% (no clear path)',
      after: isGerman ? 'AI Maturity Roadmap = 45-75% Ziel' : 'AI Maturity Roadmap = 45-75% target',
      description: isGerman ? 'Von "AI-Powered" zu "AI-Native Roadmap"' : 'From "AI-Powered" to "AI-Native roadmap"',
    },
    {
      value: '+30-80%', label: 'Efficiency Roadmap',
      before: isGerman ? 'Baseline (manuelle Prozesse)' : 'Baseline (manual processes)',
      after: isGerman ? '+30-80% (klarer AI-Automatisierungspfad)' : '+30-80% (clear AI automation path)',
      description: isGerman ? 'Von "manuell" zu "AI-powered Efficiency"' : 'From "manual" to "AI-powered efficiency"',
    },
  ];

  const caseStudy = {
    company: isGerman ? 'Series A SaaS, €12M ARR, 80 Mitarbeiter' : 'Series A SaaS, €12M ARR, 80 employees',
    challenge: isGerman ? 'AI Maturity Score 35%, 12 AI-Tools (ungenutzt), €120K AI-Ausgaben (kein ROI)' : 'AI Maturity Score 35%, 12 AI tools (unused), €120K AI spend (no ROI)',
    results: [
      { metric: 'AI Clarity', value: '+95% (low → high)' },
      { metric: 'AI Maturity Roadmap', value: '+114% (35% → 75% target)' },
      { metric: 'Efficiency Roadmap', value: '+60% (baseline → +60% target)' },
      { metric: 'AI ROI Roadmap', value: '+300% (€120K → €480K value target)' },
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
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {isGerman ? 'Das Ergebnis' : 'The Outcome'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {isGerman ? 'Typische Ergebnisse (3-5 Tage)' : 'Typical Outcomes (3-5 Days)'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {isGerman ? 'Das sind echte Ergebnisse von Unternehmen wie deinem (Series A-B, €5M-€30M ARR).' : "These are real results from companies like yours (Series A-B, €5M-€30M ARR)."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-card border border-border p-6 rounded-lg animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl font-bold text-gradient mb-2">{metric.value}</div>
              <h4 className="font-bold text-foreground mb-4">{metric.label}</h4>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-destructive">{isGerman ? 'Vorher:' : 'Before:'}</span>
                  <span className="text-muted-foreground">{metric.before}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">{isGerman ? 'Nachher:' : 'After:'}</span>
                  <span className="text-foreground">{metric.after}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-accent/10 border-2 border-accent/30 p-8 rounded-lg">
          <h3 className="text-lg font-bold mb-6 text-foreground text-center">
            {isGerman ? 'Echtes Beispiel' : 'Real Example'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold text-foreground mb-2">{isGerman ? 'Unternehmen:' : 'Company:'}</p>
              <p className="text-muted-foreground mb-4">{caseStudy.company}</p>
              <p className="font-bold text-foreground mb-2">Challenge:</p>
              <p className="text-muted-foreground">{caseStudy.challenge}</p>
            </div>
            <div>
              <p className="font-bold text-foreground mb-4">{isGerman ? 'Ergebnisse:' : 'Results:'}</p>
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
  const isGerman = language === 'de';
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const processSteps = [
    isGerman ? 'Daten anfordern (AI-Tools, AI-Ausgaben, AI Use Cases)' : 'Request data (AI tools, AI spend, AI use cases)',
    isGerman ? '8 AI-Dimensionen analysieren' : 'Analyze 8 AI dimensions',
    isGerman ? 'AI Maturity Score berechnen (0-100%)' : 'Calculate AI Maturity Score (0-100%)',
    isGerman ? 'AI Maturity Report erstellen (20-30 Seiten)' : 'Create AI Maturity Report (20-30 pages)',
  ];

  const guarantees = [
    isGerman ? 'Experten-Grade Qualität (McKinsey-Level Analyse)' : 'Expert-grade quality (McKinsey-level analysis)',
    isGerman ? '8 Dimensionen analysiert (umfassendes AI Assessment)' : '8 dimensions analyzed (comprehensive AI assessment)',
    isGerman ? 'Schnelle Lieferung (3-5 Tage, nicht 2-4 Wochen)' : 'Fast turnaround (3-5 days, not 2-4 weeks)',
    isGerman ? 'Referenz-Calls verfügbar' : "Reference calls available (talk to CEOs who've used this)",
  ];

  return (
    <section
      id="process-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {isGerman ? 'Der Prozess' : 'How We Work'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {isGerman ? 'Der AI Maturity Assessment Prozess' : 'The AI Maturity Assessment Process'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {isGerman ? 'Transparenter Zeitplan. Klare Deliverables. Experten-Grade Qualität.' : 'Transparent timeline. Clear deliverables. Expert-grade quality.'}
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-card border border-border p-8 rounded-lg mb-8">
            <h3 className="text-lg font-bold mb-4 text-foreground flex items-center gap-3">
              <Clock className="w-5 h-5 text-accent" />
              {isGerman ? 'Tag 1-2: AI Maturity Analyse' : 'Day 1-2: AI Maturity Analysis'}
            </h3>
            <div className="space-y-3 mb-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-accent">{index + 1}</span>
                  </div>
                  <span className="text-sm text-foreground">{step}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>{isGerman ? 'Zeitaufwand (dein Team):' : 'Time commitment (your team):'}</strong> 2-4 {isGerman ? 'Stunden' : 'hours'}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg text-center">
            <h4 className="font-bold text-foreground mb-2">Base Package</h4>
            <div className="text-3xl font-bold text-gradient mb-4">€3.9K</div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• AI Maturity Report (20-30 pages)</li>
              <li>• 8 Dimensions analyzed</li>
              <li>• θ_index Score (0-1)</li>
              <li>• Expert recommendations</li>
              <li>• 3-5 days turnaround</li>
            </ul>
          </div>
          <div className="bg-muted/50 border-2 border-border p-6 rounded-lg text-center">
            <h4 className="font-bold text-foreground mb-2">+ Execution Bridge</h4>
            <div className="text-3xl font-bold text-muted-foreground mb-4">+€2K</div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• 90-Day AI Transformation Roadmap</li>
              <li>• Quick Wins List (first 30 days)</li>
              <li>• Implementation Guide</li>
              <li>• Team Training</li>
            </ul>
          </div>
        </div>

        <div className="bg-card border border-border p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-6 text-foreground flex items-center gap-3 justify-center">
            <Shield className="w-5 h-5 text-accent" />
            {isGerman ? 'Qualitätsgarantie' : 'Quality Guarantee'}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {guarantees.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
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
  const isGerman = language === 'de';
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const goodFit = [
    isGerman ? 'Du hast AI-Probleme, aber weißt nicht, was du zuerst fixen sollst' : "You have AI problems but don't know what to fix first",
    isGerman ? 'Dein θ_index ist 0.2-0.4 (Level 1: AI-Powered)' : 'Your θ_index is 0.2-0.4 (Level 1: AI-Powered)',
    isGerman ? 'Du brauchst Experten-AI-Analyse (keine Hands-on Implementation)' : 'You need expert AI analysis (not hands-on implementation)',
    isGerman ? 'Du bist Series A-B, €5M-€30M ARR' : "You're Series A-B, €5M-€30M ARR",
    isGerman ? 'Du hast Budget (€3.9K-€5.9K)' : 'You have budget (€3.9K-€5.9K)',
  ];

  const notFit = [
    { condition: isGerman ? 'Du brauchst Hands-on AI Implementation' : 'You need hands-on AI implementation', alternative: isGerman ? 'Power Up: AI Transformation (€23.6K) oder Boost (€60K-€78K)' : 'Power Up: AI Transformation (€23.6K) or Boost (€60K-€78K)' },
    { condition: isGerman ? 'Du weißt schon, was zu fixen ist' : 'You already know what to fix', alternative: isGerman ? 'Power Up: AI Transformation (€23.6K)' : 'Power Up: AI Transformation (€23.6K)' },
    { condition: isGerman ? 'Du brauchst volle AI Transformation' : 'You need full AI transformation', alternative: isGerman ? 'Boost (€60K-€78K) oder Accelerate (€153K)' : 'Boost (€60K-€78K) or Accelerate (€153K)' },
  ];

  return (
    <section
      id="qualification-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {isGerman ? 'Für wen' : "Who It's For"}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {isGerman ? 'Ist das richtig für dich?' : 'Is This Right for You?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {isGerman ? 'AI Maturity Assessment funktioniert am besten für Unternehmen in dieser Situation.' : 'AI Maturity Assessment works best for companies in this situation.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-6 text-accent flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              {isGerman ? 'Das passt, wenn:' : 'This is a good fit if:'}
            </h3>
            <div className="space-y-3">
              {goodFit.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/50 border-2 border-border p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-6 text-muted-foreground flex items-center gap-2">
              <X className="w-5 h-5" />
              {isGerman ? 'Das passt nicht, wenn:' : 'This is not a good fit if:'}
            </h3>
            <div className="space-y-4">
              {notFit.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item.condition}</span>
                  </div>
                  <p className="text-xs text-accent ml-8">→ {isGerman ? 'Besser:' : 'Better fit:'} {item.alternative}</p>
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
const FinalCTASection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const steps = [
    isGerman ? 'Wir senden dir eine Daten-Checkliste' : "We'll send you a data checklist",
    isGerman ? 'Du teilst Daten (2-4 Stunden)' : 'You share data (2-4 hours)',
    isGerman ? 'Wir analysieren deine AI-Reife (8 Dimensionen)' : 'We analyze your AI maturity (8 dimensions)',
    isGerman ? 'Du erhältst AI Maturity Report (20-30 Seiten, 3-5 Tage)' : 'You get AI Maturity Report (20-30 pages, 3-5 days)',
  ];

  const faqs = [
    { q: isGerman ? 'Wie lange dauert AI Assessment?' : 'How long does AI assessment take?', a: isGerman ? '3-5 Tage (vom Daten teilen bis zum AI Maturity Report)' : '3-5 days (from data sharing to AI Maturity Report)' },
    { q: isGerman ? 'Was ist die Investition?' : "What's the investment?", a: isGerman ? '€3.9K (Base) oder €5.9K (Base + Execution Bridge)' : '€3.9K (Base) or €5.9K (Base + Execution Bridge)' },
    { q: isGerman ? 'Welche Daten braucht ihr?' : 'What data do you need?', a: isGerman ? 'AI-Tools, AI Use Cases, AI-Team, AI-Strategie' : 'AI tools, AI use cases, AI team, AI strategy' },
    { q: isGerman ? 'Kann ich mit einer Referenz sprechen?' : 'Can I talk to a reference?', a: isGerman ? 'Ja. Wir verbinden dich mit einem CEO, der AI Assessment genutzt hat.' : "Yes. We'll connect you with a CEO who's used AI Assessment." },
    { q: isGerman ? 'Was ist der ROI?' : "What's the ROI?", a: isGerman ? 'Typischer ROI ist 10-30x.' : 'Typical ROI is 10-30x.' },
    { q: isGerman ? 'Was ist der θ_index?' : "What's the θ_index?", a: isGerman ? 'θ_index ist der AI Maturity Index (0-1 Skala). 0.0-0.2 = Traditional, 0.2-0.5 = AI-Powered, 0.5-0.8 = AI-Enabled, 0.8-1.0 = AI-Native.' : 'θ_index is the AI Maturity Index (0-1 scale). 0.0-0.2 = Traditional, 0.2-0.5 = AI-Powered, 0.5-0.8 = AI-Enabled, 0.8-1.0 = AI-Native.' },
  ];

  return (
    <section
      id="final-cta"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-display-md text-foreground mb-6">
            {isGerman ? 'Bereit für AI-Clarity?' : 'Ready to Get AI Clarity?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {isGerman ? 'Das passiert als Nächstes.' : "Here's what happens next."}
          </p>
        </div>

        <div className="bg-accent/10 border-2 border-accent/30 p-8 rounded-lg mb-8 max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-4 text-foreground">
            {isGerman ? 'Schritt 1: AI Assessment anfragen (€3.9K)' : 'Step 1: Request AI Assessment (€3.9K)'}
          </h3>
          <div className="space-y-2 mb-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-accent">{index + 1}</span>
                </div>
                <span className="text-sm text-foreground">{step}</span>
              </div>
            ))}
          </div>
          <p className="text-sm font-bold text-accent mb-6">
            {isGerman ? 'Wisse genau, was du zuerst fixen sollst.' : 'Know exactly what to fix first.'}
          </p>
          <Button
            size="xl"
            className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={onOpenBooking}
          >
            {isGerman ? 'Assessment anfragen (€3.9K)' : 'Request Assessment (€3.9K)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-4">
            {isGerman ? 'Nicht sicher, ob du AI Assessment brauchst? Starte mit einem kostenlosen Call:' : 'Not sure if you need AI assessment? Start with a free call:'}
          </p>
          <Button variant="outline" size="lg" onClick={onOpenBooking} className="border-2">
            {isGerman ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book Free Inflection Call (30 min)'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-6 text-foreground text-center">FAQ</h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            {isGerman ? 'Noch Fragen? Email uns unter team@scalingx.io oder buche einen Call.' : 'Still have questions? Email us at team@scalingx.io or book a call.'}
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const AIMaturityAssessment: React.FC = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

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
        <FinalCTASection onOpenBooking={() => setIsBookingModalOpen(true)} />
      </main>
      <FilloutBookingModal
        formSlug="inflection-call"
        source="ai-assessment"
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title={isGerman ? 'Inflection Call buchen' : 'Book Inflection Call'}
      />
      <Footer />
    </div>
  );
};

export default AIMaturityAssessment;
