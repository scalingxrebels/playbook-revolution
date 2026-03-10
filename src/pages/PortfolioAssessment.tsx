import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BreadcrumbSchema } from '@/components/seo';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallaxLayers } from '@/hooks/useParallax';
import TwinklingStars from '@/components/TwinklingStars';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
import {
  Briefcase, TrendingUp, Calculator, Brain, Settings, Target, DoorOpen, BarChart3, Users,
  Clock, FileText, Shield, CheckCircle2, Check, X, ArrowRight, ChevronDown, AlertTriangle, Lightbulb,
} from 'lucide-react';

// ============================================================================
// HERO
// ============================================================================
const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const heroStats = [
    { value: '+85%', label: 'Portfolio Clarity', sublabel: isGerman ? 'Typischer Bereich' : 'Typical range' },
    { value: '+30-60%', label: 'Value Roadmap', sublabel: isGerman ? 'Typischer Bereich' : 'Typical range' },
    { value: '+40-70%', label: 'LP Confidence', sublabel: isGerman ? 'Typischer Bereich' : 'Typical range' },
  ];

  return (
    <section ref={containerRef as React.RefObject<HTMLElement>} className="dark-section relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(240,10%,8%)] to-[hsl(240,15%,12%)] transition-transform duration-100" style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }} />
      <div className="absolute inset-0 bg-mesh opacity-60 transition-transform duration-100" style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }} />
      <div className="absolute inset-0 transition-transform duration-100" style={{ transform: `translateY(${offsets[1]}px)` }}><TwinklingStars /></div>
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20 transition-transform duration-100" style={{ transform: `translateY(${offsets[2]}px) scale(1.1)` }} />

      <div className="container max-w-5xl mx-auto px-6 py-24 relative z-10 text-center">
        <Breadcrumb className="justify-center mb-6 animate-fade-in">
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/solutions" className="text-muted-foreground hover:text-foreground">Solutions</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><span className="text-foreground font-medium">Portfolio Assessment</span></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Briefcase className="w-4 h-4 mr-2" />
          Decision Support · 3-5 {isGerman ? 'Tage' : 'Days'} · €3.9K-€5.9K
        </Badge>

        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">{isGerman ? 'Expert Portfolio Assessment—' : 'Expert Portfolio Assessment—'}</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">{isGerman ? 'In 3-5 Tagen' : 'In 3-5 Days'}</span>
        </h1>

        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {isGerman
            ? 'Erhalte eine Experten-Analyse deiner Portfolio-Performance in 3-5 Tagen. Typische Ergebnisse: Portfolio Clarity +85%, Value Roadmap +30-60%, LP Confidence +40-70%—mit LP-Ready Report.'
            : 'Get expert analysis of your portfolio performance in 3-5 days. Typical outcomes: Portfolio Clarity +85%, Value Roadmap +30-60%, LP Confidence +40-70%—with LP-ready report.'}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {heroStats.map((stat, i) => (
            <div key={i} className="bg-card/50 backdrop-blur-sm border-2 border-border p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-foreground uppercase tracking-wider">{stat.label}</div>
              <div className="text-xs text-muted-foreground mt-1">({stat.sublabel})</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button size="xl" className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400" onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}>
            {isGerman ? 'Assessment anfragen (€3.9K)' : 'Request Assessment (€3.9K)'}<ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection('solution-section')} className="border-2">{isGerman ? 'So funktioniert es' : 'See How It Works'}<ChevronDown className="w-4 h-4 ml-2" /></Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {[{ label: isGerman ? '3-5 Tage (Schnelle Lieferung)' : '3-5 Days (Fast Turnaround)' }, { label: isGerman ? 'LP-Ready Report (20-30 Seiten)' : 'LP-Ready Report (20-30 Pages)' }, { label: isGerman ? 'Experten-Analyse (McKinsey-Level)' : 'Expert Analysis (McKinsey-Level)' }].map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="w-4 h-4 text-accent" /><span>{b.label}</span></div>
          ))}
        </div>
      </div>
      <button onClick={() => scrollToSection('problem-section')} className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-fade-in cursor-pointer" style={{ animationDelay: '1s' }}><ChevronDown className="w-5 h-5 animate-bounce" /></button>
    </section>
  );
};

// ============================================================================
// PROBLEM
// ============================================================================
const ProblemSection: React.FC = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const symptoms = [
    { title: isGerman ? 'Portfolio Underperformance' : 'Portfolio underperformance', description: isGerman ? '5/15 Companies strugglen (33%)' : '5/15 companies struggling (33%)', icon: TrendingUp },
    { title: isGerman ? 'Niedriger AI Maturity Score' : 'Low AI Maturity Score', description: isGerman ? 'Durchschnitt 35%' : 'Average 35%', icon: Brain },
    { title: isGerman ? 'Keine Portfolio Clarity' : 'No portfolio clarity', description: isGerman ? 'Weißt nicht, welche Companies zuerst fixen' : "Don't know which companies to fix first", icon: Target },
    { title: isGerman ? 'LP-Druck' : 'LP pressure', description: isGerman ? 'LPs fragen "Warum nicht AI-Native?"' : 'LPs asking "Why isn\'t portfolio AI-Native?"', icon: Users },
    { title: isGerman ? 'Operating Partner überlastet' : 'Operating partner overwhelmed', description: isGerman ? '1:15 Ratio' : '1:15 ratio', icon: AlertTriangle },
  ];

  return (
    <section id="problem-section" ref={ref as React.RefObject<HTMLElement>} className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-destructive mb-4 block">{isGerman ? 'Das Problem' : 'The Problem'}</span>
          <h2 className="font-display text-display-md text-foreground mb-6">{isGerman ? 'Dein Portfolio underperformt—aber du weißt nicht warum' : "Your Portfolio Is Underperforming—But You Don't Know Why"}</h2>
        </div>
        <div className="max-w-3xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {symptoms.map((s, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg animate-slide-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5"><AlertTriangle className="w-4 h-4 text-destructive" /></div>
                <div><h4 className="font-semibold text-sm mb-1">{s.title}</h4><p className="text-xs text-muted-foreground">{s.description}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-2xl mx-auto mb-8">
          <div className="grid gap-3">
            {[isGerman ? 'Zerstört Fund Performance' : 'Destroys fund performance', isGerman ? 'Begrenzt Exit-Potenzial' : 'Limits exit potential', isGerman ? 'Schwächt LP-Vertrauen' : 'Weakens LP confidence', isGerman ? 'Erhöht Down-Round-Risiko' : 'Increases down-round risk'].map((cost, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-destructive/30 flex items-center justify-center flex-shrink-0"><X className="w-4 h-4 text-destructive" /></div>
                <span className="text-sm text-foreground font-medium">{cost}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12"><p className="text-lg font-bold text-accent">{isGerman ? 'Du brauchst Portfolio Clarity. Schnell.' : 'You need portfolio clarity. Fast.'}</p></div>
      </div>
    </section>
  );
};

// ============================================================================
// SOLUTION
// ============================================================================
const SolutionSection: React.FC = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const dimensions = [
    { icon: TrendingUp, title: 'Growth Performance' },
    { icon: Calculator, title: 'Unit Economics' },
    { icon: Brain, title: 'AI Maturity' },
    { icon: Settings, title: 'Operational Excellence' },
    { icon: Target, title: 'Market Position' },
    { icon: DoorOpen, title: 'Exit Readiness' },
  ];

  return (
    <section id="solution-section" ref={ref as React.RefObject<HTMLElement>} className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">{isGerman ? 'Die Lösung' : 'The Solution'}</span>
          <h2 className="font-display text-display-md text-foreground mb-6">{isGerman ? 'Wie Portfolio Assessment funktioniert' : 'How Portfolio Assessment Works'}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{isGerman ? 'Wir analysieren nicht nur Metriken. Wir führen eine Experten-Portfolio-Analyse durch—aus McKinsey-Level-Perspektive.' : "We don't just analyze metrics. We conduct expert portfolio analysis—from McKinsey-level perspective."}</p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">{isGerman ? '6 Portfolio-Dimensionen' : '6 Portfolio Dimensions'}</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {dimensions.map((d, i) => (
              <div key={i} className="bg-card/50 border border-border p-4 rounded-lg text-center animate-slide-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <d.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <h4 className="font-bold text-sm text-foreground">{d.title}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center"><BarChart3 className="w-5 h-5 text-accent" /></div>
              <div><h4 className="font-bold text-foreground">{isGerman ? 'Tag 1-2: Portfolio-Analyse' : 'Day 1-2: Portfolio Analysis'}</h4><p className="text-sm text-accent">€3.9K</p></div>
            </div>
            <div className="space-y-2">
              {[isGerman ? 'Portfolio Assessment Report (20-30 Seiten)' : 'Portfolio Assessment Report (20-30 pages)', isGerman ? 'Portfolio Heatmap' : 'Portfolio Heatmap', isGerman ? 'Company-by-Company Analyse' : 'Company-by-Company Analysis', isGerman ? 'Priority Matrix' : 'Priority Matrix'].map((item, i) => (
                <div key={i} className="flex items-center gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /><span className="text-sm text-foreground">{item}</span></div>
              ))}
            </div>
          </div>
          <div className="bg-muted/50 border-2 border-border p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"><Lightbulb className="w-5 h-5 text-muted-foreground" /></div>
              <div><h4 className="font-bold text-foreground">{isGerman ? 'Tag 3-5: 90-Tage Roadmap' : 'Day 3-5: 90-Day Roadmap'}</h4><p className="text-sm text-muted-foreground">{isGerman ? 'Optional +€2K' : 'Optional +€2K'}</p></div>
            </div>
            <div className="space-y-2">
              {[isGerman ? '90-Tage Portfolio Roadmap' : '90-Day Portfolio Roadmap', isGerman ? 'Quick Wins (Top 3 Companies)' : 'Quick Wins (Top 3 Companies)', isGerman ? 'Long-Term Strategy' : 'Long-Term Strategy', isGerman ? 'Implementation Guide' : 'Implementation Guide'].map((item, i) => (
                <div key={i} className="flex items-center gap-2"><Check className="w-4 h-4 text-muted-foreground flex-shrink-0" /><span className="text-sm text-foreground">{item}</span></div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card/50 border border-border p-8 rounded-lg">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">{isGerman ? 'Was macht das anders:' : 'What makes this different:'}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[isGerman ? 'Experten-Analyse (McKinsey-Level)' : 'Expert analysis (McKinsey-level)', isGerman ? '6 Dimensionen analysiert' : '6 dimensions analyzed', isGerman ? 'LP-Ready Report (20-30 Seiten)' : 'LP-ready report (20-30 pages)', isGerman ? 'Portfolio Heatmap (visuelle Priorisierung)' : 'Portfolio heatmap (visual prioritization)', isGerman ? 'Schnelle Lieferung (3-5 Tage)' : 'Fast turnaround (3-5 days)'].map((item, i) => (
              <div key={i} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" /><span className="text-sm text-foreground">{item}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// OUTCOME
// ============================================================================
const OutcomeSection: React.FC = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const metrics = [
    { value: '+85%', label: 'Portfolio Clarity', before: isGerman ? 'Niedrig' : 'Low', after: isGerman ? 'Hoch (klare Priorisierung)' : 'High (clear prioritization)', description: isGerman ? 'Von "Portfolio-Chaos" zu "Portfolio-Clarity"' : 'From "portfolio chaos" to "portfolio clarity"' },
    { value: '+30-60%', label: 'Value Roadmap', before: isGerman ? '€150M (kein klarer Pfad)' : '€150M (no clear path)', after: isGerman ? '€195M-€240M Ziel' : '€195M-€240M target', description: isGerman ? 'Von "Value Stagnation" zu "Value Roadmap"' : 'From "value stagnation" to "value roadmap"' },
    { value: '+40-70%', label: 'LP Confidence', before: isGerman ? 'Mittel' : 'Medium', after: isGerman ? 'Hoch (klare Strategie)' : 'High (clear strategy)', description: isGerman ? 'Von "LP-Druck" zu "LP-Confidence"' : 'From "LP pressure" to "LP confidence"' },
  ];

  return (
    <section id="outcome-section" ref={ref as React.RefObject<HTMLElement>} className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">{isGerman ? 'Das Ergebnis' : 'The Outcome'}</span>
          <h2 className="font-display text-display-md text-foreground mb-6">{isGerman ? 'Typische Ergebnisse (3-5 Tage)' : 'Typical Outcomes (3-5 Days)'}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{isGerman ? 'Echte Ergebnisse von VCs/PEs wie dir.' : "Real results from VCs/PEs like yours."}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((m, i) => (
            <div key={i} className="bg-card border border-border p-6 rounded-lg animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-3xl font-bold text-gradient mb-2">{m.value}</div>
              <h4 className="font-bold text-foreground mb-4">{m.label}</h4>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2"><span className="text-destructive">{isGerman ? 'Vorher:' : 'Before:'}</span><span className="text-muted-foreground">{m.before}</span></div>
                <div className="flex items-center gap-2"><span className="text-accent">{isGerman ? 'Nachher:' : 'After:'}</span><span className="text-foreground">{m.after}</span></div>
              </div>
              <p className="text-xs text-muted-foreground">{m.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-accent/10 border-2 border-accent/30 p-8 rounded-lg">
          <h3 className="text-lg font-bold mb-6 text-foreground text-center">{isGerman ? 'Echtes Beispiel' : 'Real Example'}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold text-foreground mb-2">VC/PE:</p>
              <p className="text-muted-foreground mb-4">{isGerman ? 'Series A-B VC, €200M AUM, 18 Companies' : 'Series A-B VC, €200M AUM, 18 companies'}</p>
              <p className="font-bold text-foreground mb-2">Challenge:</p>
              <p className="text-muted-foreground">{isGerman ? '6 Companies strugglen, θ_index 32%, LPs fragen' : '6 companies struggling, θ_index 32%, LPs asking'}</p>
            </div>
            <div>
              <p className="font-bold text-foreground mb-4">{isGerman ? 'Ergebnisse:' : 'Results:'}</p>
              <div className="space-y-3">
                {[{ m: 'Portfolio Clarity', v: '+90%' }, { m: 'Value Roadmap', v: '+45% (→ €290M)' }, { m: 'LP Confidence', v: '+60%' }, { m: 'OP Efficiency', v: '+80%' }].map((r, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-background/50 rounded-lg"><span className="text-sm text-muted-foreground">{r.m}</span><span className="font-bold text-accent">{r.v}</span></div>
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
// PROCESS
// ============================================================================
const ProcessSection: React.FC = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="process-section" ref={ref as React.RefObject<HTMLElement>} className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">{isGerman ? 'Der Prozess' : 'How We Work'}</span>
          <h2 className="font-display text-display-md text-foreground mb-6">{isGerman ? 'Der Portfolio Assessment Prozess' : 'The Portfolio Assessment Process'}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{isGerman ? 'Transparenter Zeitplan. Klare Deliverables.' : 'Transparent timeline. Clear deliverables.'}</p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-card border border-border p-8 rounded-lg mb-8">
            <h3 className="text-lg font-bold mb-4 text-foreground flex items-center gap-3"><Clock className="w-5 h-5 text-accent" />{isGerman ? 'Tag 1-2: Portfolio-Analyse' : 'Day 1-2: Portfolio Analysis'}</h3>
            <div className="space-y-3 mb-6">
              {[isGerman ? 'Daten anfordern' : 'Request data', isGerman ? '6 Dimensionen analysieren' : 'Analyze 6 dimensions', isGerman ? 'Portfolio Heatmap erstellen' : 'Create portfolio heatmap', isGerman ? 'Report erstellen (20-30 Seiten)' : 'Create Report (20-30 pages)'].map((step, i) => (
                <div key={i} className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0"><span className="text-xs font-bold text-accent">{i + 1}</span></div><span className="text-sm text-foreground">{step}</span></div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground"><strong>{isGerman ? 'Zeitaufwand:' : 'Time commitment:'}</strong> 2-4 {isGerman ? 'Stunden' : 'hours'}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg text-center">
            <h4 className="font-bold text-foreground mb-2">Base Package</h4>
            <div className="text-3xl font-bold text-gradient mb-4">€3.9K</div>
            <ul className="text-sm text-muted-foreground space-y-2"><li>• Portfolio Assessment Report</li><li>• 6 Dimensions analyzed</li><li>• Portfolio Heatmap</li><li>• Expert recommendations</li></ul>
          </div>
          <div className="bg-muted/50 border-2 border-border p-6 rounded-lg text-center">
            <h4 className="font-bold text-foreground mb-2">+ Execution Bridge</h4>
            <div className="text-3xl font-bold text-muted-foreground mb-4">+€2K</div>
            <ul className="text-sm text-muted-foreground space-y-2"><li>• 90-Day Portfolio Roadmap</li><li>• Quick Wins List</li><li>• Implementation Guide</li><li>• OP Training</li></ul>
          </div>
        </div>

        <div className="bg-card border border-border p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-6 text-foreground flex items-center gap-3 justify-center"><Shield className="w-5 h-5 text-accent" />{isGerman ? 'Qualitätsgarantie' : 'Quality Guarantee'}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[isGerman ? 'Experten-Grade Qualität' : 'Expert-grade quality', isGerman ? '6 Dimensionen analysiert' : '6 dimensions analyzed', isGerman ? 'Schnelle Lieferung (3-5 Tage)' : 'Fast turnaround (3-5 days)', isGerman ? 'Referenz-Calls verfügbar' : 'Reference calls available'].map((item, i) => (
              <div key={i} className="flex items-center gap-3"><Check className="w-5 h-5 text-accent flex-shrink-0" /><span className="text-sm text-foreground">{item}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// QUALIFICATION
// ============================================================================
const QualificationSection: React.FC = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const goodFit = [
    isGerman ? 'Du hast Portfolio-Probleme, weißt aber nicht, welche Companies zuerst fixen' : "You have portfolio problems but don't know which companies to fix first",
    isGerman ? 'Du brauchst Experten-Portfolio-Analyse' : 'You need expert portfolio analysis',
    isGerman ? 'Du bist VC/PE mit 10-50 Portfolio Companies' : "You're a VC/PE with 10-50 portfolio companies",
    isGerman ? 'Du brauchst schnelle Lieferung (3-5 Tage)' : 'You need fast turnaround (3-5 days)',
    isGerman ? 'Du hast Budget (€3.9K-€5.9K)' : 'You have budget (€3.9K-€5.9K)',
  ];

  const notFit = [
    { condition: isGerman ? 'Du brauchst Hands-on Portfolio Transformation' : 'You need hands-on portfolio transformation', alternative: isGerman ? 'Accelerate: Portfolio Transformation (€360K-€720K)' : 'Accelerate: Portfolio Transformation (€360K-€720K)' },
    { condition: isGerman ? 'Du weißt schon, welche Companies fixen' : 'You already know which companies to fix', alternative: isGerman ? 'Power Up: Portfolio Performance (€23.6K)' : 'Power Up: Portfolio Performance (€23.6K)' },
    { condition: isGerman ? 'Du hast <5 oder >100 Companies' : 'You have <5 or >100 companies', alternative: isGerman ? 'Kontaktiere uns für Custom Pricing' : 'Contact us for custom pricing' },
  ];

  return (
    <section id="qualification-section" ref={ref as React.RefObject<HTMLElement>} className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">{isGerman ? 'Für wen' : "Who It's For"}</span>
          <h2 className="font-display text-display-md text-foreground mb-6">{isGerman ? 'Ist das richtig für dich?' : 'Is This Right for You?'}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-6 text-accent flex items-center gap-2"><CheckCircle2 className="w-5 h-5" />{isGerman ? 'Das passt, wenn:' : 'This is a good fit if:'}</h3>
            <div className="space-y-3">{goodFit.map((item, i) => (<div key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground">{item}</span></div>))}</div>
          </div>
          <div className="bg-muted/50 border-2 border-border p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-6 text-muted-foreground flex items-center gap-2"><X className="w-5 h-5" />{isGerman ? 'Das passt nicht, wenn:' : 'This is not a good fit if:'}</h3>
            <div className="space-y-4">{notFit.map((item, i) => (<div key={i} className="space-y-1"><div className="flex items-start gap-3"><X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground">{item.condition}</span></div><p className="text-xs text-accent ml-8">→ {isGerman ? 'Besser:' : 'Better fit:'} {item.alternative}</p></div>))}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// FINAL CTA
// ============================================================================
const FinalCTASection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const faqs = [
    { q: isGerman ? 'Wie lange dauert Portfolio Assessment?' : 'How long does portfolio assessment take?', a: isGerman ? '3-5 Tage' : '3-5 days' },
    { q: isGerman ? 'Was ist die Investition?' : "What's the investment?", a: isGerman ? '€3.9K (Base) oder €5.9K (Base + Execution)' : '€3.9K (Base) or €5.9K (Base + Execution)' },
    { q: isGerman ? 'Welche Daten braucht ihr?' : 'What data do you need?', a: isGerman ? 'Portfolio-Daten, Company-Metriken, AI-Maturity-Daten' : 'Portfolio data, company metrics, AI maturity data' },
    { q: isGerman ? 'Kann ich mit einer Referenz sprechen?' : 'Can I talk to a reference?', a: isGerman ? 'Ja.' : 'Yes.' },
    { q: isGerman ? 'Was ist der ROI?' : "What's the ROI?", a: isGerman ? 'Typischer ROI ist 10-30x.' : 'Typical ROI is 10-30x.' },
    { q: isGerman ? 'Wie viele Companies könnt ihr assessieren?' : 'How many companies can you assess?', a: isGerman ? '5-50 Companies. Für >50 kontaktiere uns.' : '5-50 companies. For >50, contact us.' },
  ];

  return (
    <section id="final-cta" ref={ref as React.RefObject<HTMLElement>} className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-display-md text-foreground mb-6">{isGerman ? 'Bereit für Portfolio Clarity?' : 'Ready to Get Portfolio Clarity?'}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{isGerman ? 'Das passiert als Nächstes.' : "Here's what happens next."}</p>
        </div>

        <div className="bg-accent/10 border-2 border-accent/30 p-8 rounded-lg mb-8 max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-4 text-foreground">{isGerman ? 'Schritt 1: Assessment anfragen (€3.9K)' : 'Step 1: Request Assessment (€3.9K)'}</h3>
          <div className="space-y-2 mb-6">
            {[isGerman ? 'Daten-Checkliste erhalten' : "We'll send you a data checklist", isGerman ? 'Daten teilen (2-4 Stunden)' : 'You share data (2-4 hours)', isGerman ? 'Wir analysieren dein Portfolio (6 Dimensionen)' : 'We analyze your portfolio (6 dimensions)', isGerman ? 'Report erhalten (20-30 Seiten, 3-5 Tage)' : 'You get Report (20-30 pages, 3-5 days)'].map((step, i) => (
              <div key={i} className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0"><span className="text-xs font-bold text-accent">{i + 1}</span></div><span className="text-sm text-foreground">{step}</span></div>
            ))}
          </div>
          <p className="text-sm font-bold text-accent mb-6">{isGerman ? 'Wisse genau, welche Companies du zuerst fixen sollst.' : 'Know exactly which companies to fix first.'}</p>
          <Button size="xl" className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400" onClick={onOpenBooking}>
            {isGerman ? 'Assessment anfragen (€3.9K)' : 'Request Assessment (€3.9K)'}<ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-4">{isGerman ? 'Nicht sicher? Starte mit einem kostenlosen Call:' : 'Not sure? Start with a free call:'}</p>
          <Button variant="outline" size="lg" onClick={onOpenBooking} className="border-2">{isGerman ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book Free Inflection Call (30 min)'}<ArrowRight className="w-4 h-4 ml-2" /></Button>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-6 text-foreground text-center">FAQ</h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (<AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{faq.q}</AccordionTrigger><AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent></AccordionItem>))}
          </Accordion>
        </div>
        <div className="text-center mt-12"><p className="text-sm text-muted-foreground">{isGerman ? 'Noch Fragen? Email uns unter team@scalingx.io oder buche einen Call.' : 'Still have questions? Email us at team@scalingx.io or book a call.'}</p></div>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE
// ============================================================================
const PortfolioAssessment: React.FC = () => {
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
      <FilloutBookingModal formSlug="inflection-call" source="portfolio-assessment" isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} title={isGerman ? 'Inflection Call buchen' : 'Book Inflection Call'} />
      <Footer />
    </div>
  );
};

export default PortfolioAssessment;
