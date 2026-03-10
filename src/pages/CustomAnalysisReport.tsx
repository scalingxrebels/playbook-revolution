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
  FileSearch, TrendingUp, Target, HeartHandshake, Settings, Brain, Briefcase, FileText,
  Clock, Shield, CheckCircle2, Check, X, ArrowRight, ChevronDown, AlertTriangle, Lightbulb, Users, BarChart3,
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
    { value: '+85%', label: 'Analysis Clarity', sublabel: isGerman ? 'Typischer Bereich' : 'Typical range' },
    { value: '+30-60%', label: 'Strategic Roadmap', sublabel: isGerman ? 'Typischer Bereich' : 'Typical range' },
    { value: '+50%', label: 'Decision Velocity', sublabel: isGerman ? 'Typischer Bereich' : 'Typical range' },
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
            <BreadcrumbItem><span className="text-foreground font-medium">Custom Analysis & Report</span></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <FileSearch className="w-4 h-4 mr-2" />
          Decision Support · 3-5 {isGerman ? 'Tage' : 'Days'} · €3.9K-€5.9K
        </Badge>

        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">{isGerman ? 'Custom Expert Analysis—' : 'Custom Expert Analysis—'}</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">{isGerman ? 'In 3-5 Tagen' : 'In 3-5 Days'}</span>
        </h1>

        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {isGerman
            ? 'Erhalte Experten-Analyse, zugeschnitten auf deine Herausforderung, in 3-5 Tagen. Wähle aus 7 Analyse-Typen—mit Board-Ready Report.'
            : 'Get expert analysis tailored to your challenge in 3-5 days. Choose from 7 analysis types—with board-ready report.'}
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
            {isGerman ? 'Custom Analysis anfragen (€3.9K)' : 'Request Custom Analysis (€3.9K)'}<ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection('solution-section')} className="border-2">{isGerman ? 'Analyse-Typen ansehen' : 'See Analysis Types'}<ChevronDown className="w-4 h-4 ml-2" /></Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {[isGerman ? '3-5 Tage (Schnelle Lieferung)' : '3-5 Days (Fast Turnaround)', isGerman ? 'Board-Ready Report (15-25 Seiten)' : 'Board-Ready Report (15-25 Pages)', isGerman ? 'Experten-Analyse (McKinsey-Level)' : 'Expert Analysis (McKinsey-Level)'].map((label, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="w-4 h-4 text-accent" /><span>{label}</span></div>
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
    { title: isGerman ? 'Strategische Unsicherheit' : 'Strategic uncertainty', description: isGerman ? 'Keine klare Richtung' : 'No clear direction', icon: Target },
    { title: isGerman ? 'Keine Experten-Perspektive' : 'No expert perspective', description: isGerman ? 'Internes Team hat nicht die Expertise' : 'Internal team lacks expertise', icon: Brain },
    { title: isGerman ? 'Board-Druck' : 'Board pressure', description: isGerman ? 'Board stellt Fragen ohne Antworten' : 'Board asking questions, no clear answers', icon: Users },
    { title: isGerman ? 'Decision Paralysis' : 'Decision paralysis', description: isGerman ? 'Kann ohne Daten nicht entscheiden' : "Can't decide without data", icon: AlertTriangle },
    { title: isGerman ? 'Zeitdruck' : 'Time pressure', description: isGerman ? 'Braucht Antworten in 3-5 Tagen' : 'Need answers in 3-5 days', icon: Clock },
  ];

  return (
    <section id="problem-section" ref={ref as React.RefObject<HTMLElement>} className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-destructive mb-4 block">{isGerman ? 'Das Problem' : 'The Problem'}</span>
          <h2 className="font-display text-display-md text-foreground mb-6">{isGerman ? 'Du hast eine spezifische Herausforderung—aber keine klare Antwort' : 'You Have a Specific Challenge—But No Clear Answer'}</h2>
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
            {[isGerman ? 'Zerstört strategisches Momentum' : 'Destroys strategic momentum', isGerman ? 'Begrenzt Wachstumspotenzial' : 'Limits growth potential', isGerman ? 'Schwächt Board-Vertrauen' : 'Weakens board confidence', isGerman ? 'Erhöht Wettbewerbsrisiko' : 'Increases competitive risk'].map((cost, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-destructive/30 flex items-center justify-center flex-shrink-0"><X className="w-4 h-4 text-destructive" /></div>
                <span className="text-sm text-foreground font-medium">{cost}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12"><p className="text-lg font-bold text-accent">{isGerman ? 'Du brauchst Custom Analysis. Schnell.' : 'You need custom analysis. Fast.'}</p></div>
      </div>
    </section>
  );
};

// ============================================================================
// SOLUTION (7 Analysis Types with Accordion)
// ============================================================================
const SolutionSection: React.FC = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const analysisTypes = [
    { icon: TrendingUp, title: 'Growth Strategy Review', outcome: isGerman ? 'Growth Clarity +85%' : 'Growth Clarity +85%', description: isGerman ? 'Wenn deine Growth Strategy unklar ist' : 'When your growth strategy is unclear' },
    { icon: Target, title: 'Product-Market Fit (PMF) Audit', outcome: isGerman ? 'PMF Clarity +90%' : 'PMF Clarity +90%', description: isGerman ? 'Wenn dein PMF erodiert' : 'When your PMF is eroding' },
    { icon: HeartHandshake, title: 'Customer Success Audit', outcome: isGerman ? 'CS Clarity +85%' : 'CS Clarity +85%', description: isGerman ? 'Wenn Churn >5%, NRR <100%' : 'When churn >5%, NRR <100%' },
    { icon: Settings, title: 'Operations Audit', outcome: isGerman ? 'Operations Clarity +85%' : 'Operations Clarity +85%', description: isGerman ? 'Wenn Operations chaotisch sind' : 'When operations are chaotic' },
    { icon: Brain, title: 'AI Strategy Design', outcome: isGerman ? 'AI Clarity +90%' : 'AI Clarity +90%', description: isGerman ? 'Wenn AI Strategy fehlt' : 'When AI strategy is missing' },
    { icon: Briefcase, title: 'Portfolio Synergy Playbook', outcome: isGerman ? 'Portfolio Clarity +85%' : 'Portfolio Clarity +85%', description: isGerman ? 'Wenn Portfolio keine Synergy hat' : 'When portfolio lacks synergy' },
    { icon: FileText, title: 'Board Decision Memo', outcome: isGerman ? 'Decision Clarity +90%' : 'Decision Clarity +90%', description: isGerman ? 'Wenn Board eine Entscheidung braucht' : 'When board needs a decision' },
  ];

  return (
    <section id="solution-section" ref={ref as React.RefObject<HTMLElement>} className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">{isGerman ? 'Die Lösung' : 'The Solution'}</span>
          <h2 className="font-display text-display-md text-foreground mb-6">{isGerman ? '7 Custom Analysis Typen—Wähle deinen Fokus' : '7 Custom Analysis Types—Choose Your Focus'}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{isGerman ? 'Experten-Analyse, zugeschnitten auf deine Herausforderung—aus McKinsey-Level-Perspektive.' : "Expert analysis tailored to your challenge—from McKinsey-level perspective."}</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4 mb-16">
          {analysisTypes.map((type, i) => (
            <AccordionItem key={i} value={`type-${i}`} className="bg-card border border-border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg"><type.icon className="w-5 h-5 text-accent" /></div>
                  <div className="text-left">
                    <span className="font-semibold block">{type.title}</span>
                    <span className="text-xs text-muted-foreground">{type.description}</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div className="p-3 bg-accent/10 rounded-lg mt-2">
                  <p className="text-sm font-medium text-accent">{isGerman ? 'Typisches Ergebnis:' : 'Typical outcome:'} {type.outcome}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center"><BarChart3 className="w-5 h-5 text-accent" /></div>
              <div><h4 className="font-bold text-foreground">{isGerman ? 'Tag 1-2: Analyse' : 'Day 1-2: Analysis'}</h4><p className="text-sm text-accent">€3.9K</p></div>
            </div>
            <div className="space-y-2">
              {[isGerman ? 'Custom Analysis Report (15-25 Seiten)' : 'Custom Analysis Report (15-25 pages)', isGerman ? 'Gap Analysis' : 'Gap Analysis', isGerman ? 'Priority Matrix' : 'Priority Matrix', isGerman ? 'Experten-Empfehlungen (5-10 Key Actions)' : 'Expert Recommendations (5-10 key actions)'].map((item, i) => (
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
              {[isGerman ? '90-Tage Roadmap' : '90-Day Roadmap', isGerman ? 'Quick Wins Liste' : 'Quick Wins List', isGerman ? 'Long-Term Strategy' : 'Long-Term Strategy', isGerman ? 'Implementation Guide' : 'Implementation Guide'].map((item, i) => (
                <div key={i} className="flex items-center gap-2"><Check className="w-4 h-4 text-muted-foreground flex-shrink-0" /><span className="text-sm text-foreground">{item}</span></div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card/50 border border-border p-8 rounded-lg">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">{isGerman ? 'Was macht das anders:' : 'What makes this different:'}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[isGerman ? 'Experten-Analyse (McKinsey-Level)' : 'Expert analysis (McKinsey-level)', isGerman ? 'Zugeschnittene Analyse' : 'Tailored analysis', isGerman ? 'Schnelle Lieferung (3-5 Tage)' : 'Fast turnaround (3-5 days)', isGerman ? '7 Analyse-Typen verfügbar' : '7 analysis types available'].map((item, i) => (
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
    { value: '+85%', label: 'Analysis Clarity', before: isGerman ? 'Niedrig' : 'Low', after: isGerman ? 'Hoch (klare Roadmap)' : 'High (clear roadmap)', description: isGerman ? 'Von "strategische Unsicherheit" zu "strategische Klarheit"' : 'From "strategic uncertainty" to "strategic clarity"' },
    { value: '+30-60%', label: 'Strategic Roadmap', before: isGerman ? 'Unklar' : 'Unclear', after: isGerman ? 'Klar (30-60% Verbesserungspfad)' : 'Clear (30-60% improvement path)', description: isGerman ? 'Von "Unsicherheit" zu "Roadmap"' : 'From "uncertainty" to "roadmap"' },
    { value: '+50%', label: 'Decision Velocity', before: isGerman ? '7-14 Tage (langsam)' : '7-14 days (slow)', after: isGerman ? '3-7 Tage (schnell)' : '3-7 days (fast)', description: isGerman ? 'Von "Decision Paralysis" zu "Decision Velocity"' : 'From "decision paralysis" to "decision velocity"' },
  ];

  const examples = [
    { title: 'Growth Strategy Review', company: isGerman ? 'Series B SaaS, €20M ARR' : 'Series B SaaS, €20M ARR', results: ['Growth Clarity +90%', 'Growth Roadmap +45%', 'Board Confidence +60%'] },
    { title: 'PMF Audit', company: isGerman ? 'Series A SaaS, €10M ARR' : 'Series A SaaS, €10M ARR', results: ['PMF Clarity +95%', 'PMF Roadmap +55%', 'Churn Roadmap -40%'] },
    { title: 'Portfolio Synergy Playbook', company: isGerman ? 'Series A-B VC, €250M AUM' : 'Series A-B VC, €250M AUM', results: ['Portfolio Clarity +85%', 'Synergy Roadmap +50%', 'LP Confidence +65%'] },
  ];

  return (
    <section id="outcome-section" ref={ref as React.RefObject<HTMLElement>} className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">{isGerman ? 'Das Ergebnis' : 'The Outcome'}</span>
          <h2 className="font-display text-display-md text-foreground mb-6">{isGerman ? 'Typische Ergebnisse (3-5 Tage)' : 'Typical Outcomes (3-5 Days)'}</h2>
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
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-foreground text-center mb-6">{isGerman ? 'Echte Beispiele' : 'Real Examples'}</h3>
          {examples.map((ex, i) => (
            <div key={i} className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg">
              <h4 className="font-bold mb-2">{ex.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">{ex.company}</p>
              <div className="flex flex-wrap gap-3">
                {ex.results.map((r, j) => (
                  <div key={j} className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /><span className="text-sm font-medium text-foreground">{r}</span></div>
                ))}
              </div>
            </div>
          ))}
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
          <h2 className="font-display text-display-md text-foreground mb-6">{isGerman ? 'Der Custom Analysis Prozess' : 'The Custom Analysis Process'}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{isGerman ? 'Transparenter Zeitplan. Klare Deliverables.' : 'Transparent timeline. Clear deliverables.'}</p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-card border border-border p-8 rounded-lg mb-8">
            <h3 className="text-lg font-bold mb-4 text-foreground flex items-center gap-3"><Clock className="w-5 h-5 text-accent" />{isGerman ? 'Tag 1-2: Analyse' : 'Day 1-2: Analysis'}</h3>
            <div className="space-y-3 mb-6">
              {[isGerman ? 'Daten anfordern (basierend auf Analyse-Typ)' : 'Request data (based on analysis type)', isGerman ? 'Experten-Analyse durchführen' : 'Conduct expert analysis', isGerman ? 'Gaps und Opportunities identifizieren' : 'Identify gaps and opportunities', isGerman ? 'Custom Analysis Report erstellen (15-25 Seiten)' : 'Create Custom Analysis Report (15-25 pages)'].map((step, i) => (
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
            <ul className="text-sm text-muted-foreground space-y-2"><li>• Custom Analysis Report (15-25 pages)</li><li>• 7 analysis types available</li><li>• Expert recommendations</li><li>• 3-5 days turnaround</li></ul>
          </div>
          <div className="bg-muted/50 border-2 border-border p-6 rounded-lg text-center">
            <h4 className="font-bold text-foreground mb-2">+ Execution Bridge</h4>
            <div className="text-3xl font-bold text-muted-foreground mb-4">+€2K</div>
            <ul className="text-sm text-muted-foreground space-y-2"><li>• 90-Day Roadmap</li><li>• Quick Wins List</li><li>• Implementation Guide</li><li>• Team Training</li></ul>
          </div>
        </div>

        <div className="bg-card border border-border p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-6 text-foreground flex items-center gap-3 justify-center"><Shield className="w-5 h-5 text-accent" />{isGerman ? 'Qualitätsgarantie' : 'Quality Guarantee'}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[isGerman ? 'Experten-Grade Qualität' : 'Expert-grade quality', isGerman ? 'Zugeschnittene Analyse' : 'Tailored analysis', isGerman ? 'Schnelle Lieferung (3-5 Tage)' : 'Fast turnaround (3-5 days)', isGerman ? 'Referenz-Calls verfügbar' : 'Reference calls available'].map((item, i) => (
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
    isGerman ? 'Du hast eine spezifische Herausforderung, die Experten-Analyse braucht' : 'You have a specific challenge that needs expert analysis',
    isGerman ? 'Du brauchst Experten-Analyse (keine Hands-on Implementation)' : 'You need expert analysis (not hands-on implementation)',
    isGerman ? 'Du bist Series A-B (oder VC/PE)' : "You're Series A-B (or VC/PE)",
    isGerman ? 'Du brauchst schnelle Lieferung (3-5 Tage)' : 'You need fast turnaround (3-5 days)',
    isGerman ? 'Du hast Budget (€3.9K-€5.9K)' : 'You have budget (€3.9K-€5.9K)',
  ];

  const notFit = [
    { condition: isGerman ? 'Du brauchst Hands-on Implementation' : 'You need hands-on implementation', alternative: isGerman ? 'Power Up (€23.6K) oder Boost (€60K-€78K)' : 'Power Up (€23.6K) or Boost (€60K-€78K)' },
    { condition: isGerman ? 'Du weißt schon, was zu tun ist' : 'You already know what to do', alternative: isGerman ? 'Power Up (€23.6K)' : 'Power Up (€23.6K)' },
    { condition: isGerman ? 'Deine Herausforderung ist von Standard-Assessment abgedeckt' : 'Your challenge is covered by standard assessment', alternative: 'GTM Review, Scaling Assessment, AI Assessment, Portfolio Assessment' },
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
    { q: isGerman ? 'Wie lange dauert Custom Analysis?' : 'How long does custom analysis take?', a: isGerman ? '3-5 Tage' : '3-5 days' },
    { q: isGerman ? 'Was ist die Investition?' : "What's the investment?", a: isGerman ? '€3.9K (Base) oder €5.9K (Base + Execution)' : '€3.9K (Base) or €5.9K (Base + Execution)' },
    { q: isGerman ? 'Welchen Analyse-Typ sollte ich wählen?' : 'Which analysis type should I choose?', a: isGerman ? 'Wir helfen dir bei der Auswahl. Buche einen Inflection Call.' : "We'll help you choose. Book an Inflection Call." },
    { q: isGerman ? 'Kann ich mit einer Referenz sprechen?' : 'Can I talk to a reference?', a: isGerman ? 'Ja.' : 'Yes.' },
    { q: isGerman ? 'Was ist der ROI?' : "What's the ROI?", a: isGerman ? 'Typischer ROI ist 10-30x.' : 'Typical ROI is 10-30x.' },
    { q: isGerman ? 'Was, wenn meine Herausforderung nicht gelistet ist?' : "What if my challenge isn't listed?", a: isGerman ? 'Kontaktiere uns. Wir können Custom Analysis erstellen.' : 'Contact us. We can create a custom analysis.' },
  ];

  return (
    <section id="final-cta" ref={ref as React.RefObject<HTMLElement>} className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-display-md text-foreground mb-6">{isGerman ? 'Bereit für Experten-Analyse?' : 'Ready to Get Expert Analysis?'}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{isGerman ? 'Das passiert als Nächstes.' : "Here's what happens next."}</p>
        </div>

        <div className="bg-accent/10 border-2 border-accent/30 p-8 rounded-lg mb-8 max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-4 text-foreground">{isGerman ? 'Schritt 1: Custom Analysis anfragen (€3.9K)' : 'Step 1: Request Custom Analysis (€3.9K)'}</h3>
          <div className="space-y-2 mb-6">
            {[isGerman ? 'Fragebogen erhalten' : "We'll send you a questionnaire", isGerman ? 'Daten teilen (2-4 Stunden)' : 'You share data (2-4 hours)', isGerman ? 'Wir analysieren (zugeschnitten auf dich)' : 'We analyze (tailored to you)', isGerman ? 'Report erhalten (15-25 Seiten, 3-5 Tage)' : 'You get Report (15-25 pages, 3-5 days)'].map((step, i) => (
              <div key={i} className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0"><span className="text-xs font-bold text-accent">{i + 1}</span></div><span className="text-sm text-foreground">{step}</span></div>
            ))}
          </div>
          <p className="text-sm font-bold text-accent mb-6">{isGerman ? 'Wisse genau, was als nächstes zu tun ist.' : 'Know exactly what to do next.'}</p>
          <Button size="xl" className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400" onClick={onOpenBooking}>
            {isGerman ? 'Custom Analysis anfragen (€3.9K)' : 'Request Custom Analysis (€3.9K)'}<ArrowRight className="w-5 h-5 ml-2" />
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
const CustomAnalysisReport: React.FC = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <BreadcrumbSchema items={[{ name: 'Solutions', path: '/solutions' }, { name: 'Custom Analysis & Report', path: '/solutions/custom-analysis-report' }]} />
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
      <FilloutBookingModal formSlug="inflection-call" source="custom-analysis" isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} title={isGerman ? 'Inflection Call buchen' : 'Book Inflection Call'} />
      <Footer />
    </div>
  );
};

export default CustomAnalysisReport;
