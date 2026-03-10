import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BreadcrumbSchema } from '@/components/seo';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallaxLayers } from '@/hooks/useParallax';
import TwinklingStars from '@/components/TwinklingStars';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
import {
  Presentation, TrendingUp, Target, Code, DollarSign, Users, Calculator, HandCoins, Palette,
  CheckCircle2, Check, X, ArrowRight, ChevronDown, Clock, FileText, Eye, Shield, AlertTriangle, BarChart3, Lightbulb,
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
    { value: '+80%', label: 'Deck Quality', sublabel: isGerman ? 'Typischer Bereich' : 'Typical range' },
    { value: '20-30', label: 'Investor Q&A', sublabel: 'Prepared' },
    { value: '+30-50pp', label: 'Fundraising Rate', sublabel: isGerman ? 'Typischer Bereich' : 'Typical range' },
  ];

  const trustBadges = [
    { icon: Clock, label: isGerman ? '3-5 Tage (Schnelle Lieferung)' : '3-5 Days (Fast Turnaround)' },
    { icon: FileText, label: isGerman ? 'Investor-Grade Report (10-15 Seiten)' : 'Investor-Grade Report (10-15 Pages)' },
    { icon: Eye, label: isGerman ? 'Investor-Perspektive (Was VCs wirklich prüfen)' : 'Investor Perspective (What VCs Actually Check)' },
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
            <BreadcrumbItem><span className="text-foreground font-medium">Investor-Readiness Pitch Deck Check</span></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Presentation className="w-4 h-4 mr-2" />
          Decision Support · 3-5 {isGerman ? 'Tage' : 'Days'} · €1.9K-€2.5K
        </Badge>

        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">{isGerman ? 'Expert Pitch Deck Review—' : 'Expert Pitch Deck Review—'}</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">{isGerman ? 'In 3-5 Tagen' : 'In 3-5 Days'}</span>
        </h1>

        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {isGerman
            ? 'Mache dein Pitch Deck investor-ready in 3-5 Tagen. Typische Ergebnisse: Deck Quality +80%, Investor Questions Prepared 20-30, Fundraising Success Rate +30-50pp—mit Investor-Grade Report.'
            : 'Get your pitch deck investor-ready in 3-5 days. Typical outcomes: Deck Quality +80%, Investor Questions Prepared 20-30, Fundraising Success Rate +30-50pp—with investor-grade report.'}
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
          <Button size="xl" className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400" onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}>
            {isGerman ? 'Deck Check anfragen (€1.9K)' : 'Request Deck Check (€1.9K)'}
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
              <Check className="w-4 h-4 text-accent" /><span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => scrollToSection('problem-section')} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-fade-in cursor-pointer" style={{ animationDelay: '1s' }}>
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
    { title: isGerman ? 'Schwaches Deck' : 'Weak deck', description: isGerman ? 'Keine Story, unklare Traction, fehlende Metriken' : 'No story, unclear traction, missing metrics', icon: Presentation },
    { title: isGerman ? 'Niedrige Meeting Rate' : 'Low meeting rate', description: isGerman ? '10-20% (Benchmark: 40-60%)' : '10-20% (benchmark: 40-60%)', icon: TrendingUp },
    { title: isGerman ? 'Keine Investor-Perspektive' : 'No investor perspective', description: isGerman ? 'Weißt nicht, was VCs wirklich prüfen' : "Don't know what VCs actually check", icon: Eye },
    { title: isGerman ? 'Unklare Positionierung' : 'Unclear positioning', description: isGerman ? 'Nicht klar, warum du besser bist' : "Not clear why you're better", icon: Target },
    { title: isGerman ? 'Fundraising-Risiko' : 'Fundraising risk', description: isGerman ? 'Kannst nächste Runde nicht raisen' : "Can't raise next round with weak deck", icon: AlertTriangle },
  ];

  const costs = [
    isGerman ? 'Zerstört Fundraising-Fähigkeit (schwaches Deck = keine Meetings)' : 'Destroys fundraising ability (weak deck = no meetings)',
    isGerman ? 'Begrenzt Bewertung (20-30% Discount)' : 'Limits valuation (20-30% discount)',
    isGerman ? 'Verlängert Deal-Timeline (3-6 Monate länger)' : 'Extends deal timeline (3-6 months longer)',
    isGerman ? 'Erhöht Down-Round-Risiko' : "Increases down-round risk",
  ];

  return (
    <section id="problem-section" ref={ref as React.RefObject<HTMLElement>} className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-destructive mb-4 block">{isGerman ? 'Das Problem' : 'The Problem'}</span>
          <h2 className="font-display text-display-md text-foreground mb-6">{isGerman ? 'Dein Pitch Deck ist nicht Investor-Ready' : "Your Pitch Deck Isn't Investor-Ready"}</h2>
        </div>
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {isGerman ? 'Dein Pitch Deck ist schwach. Du hast es an 20 VCs geschickt—nur 2 Meetings. Deine Deck Quality ist 30%. Und du weißt nicht, was kaputt ist.' : "Your pitch deck is weak. You've sent it to 20 VCs—only 2 meetings. Your deck quality is 30%. And you don't know what's broken."}
          </p>
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
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">{isGerman ? 'Die echten Kosten:' : 'The real cost:'}</h3>
          <div className="grid gap-3">
            {costs.map((cost, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-destructive/30 flex items-center justify-center flex-shrink-0"><X className="w-4 h-4 text-destructive" /></div>
                <span className="text-sm text-foreground font-medium">{cost}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12"><p className="text-lg font-bold text-accent">{isGerman ? 'Du brauchst ein investor-ready Deck. Schnell.' : 'You need an investor-ready deck. Fast.'}</p></div>
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
    { icon: Presentation, title: 'Story & Narrative' },
    { icon: TrendingUp, title: 'Traction & Metrics' },
    { icon: Target, title: 'Market & Opportunity' },
    { icon: Code, title: 'Product & Technology' },
    { icon: DollarSign, title: 'Business Model' },
    { icon: Users, title: 'Team' },
    { icon: Calculator, title: 'Financials' },
    { icon: HandCoins, title: 'Ask & Use of Funds' },
    { icon: Palette, title: 'Design & Visual' },
    { icon: Check, title: 'Investor Readiness' },
  ];

  const differentiators = [
    isGerman ? 'Experten-Analyse (Investor-Perspektive, nicht nur Design-Feedback)' : 'Expert analysis (investor perspective, not just design feedback)',
    isGerman ? '10 Dimensionen reviewed' : '10 dimensions reviewed',
    isGerman ? 'Investor-Grade Report (10-15 Seiten)' : 'Investor-grade report (10-15 pages)',
    isGerman ? 'Schnelle Lieferung (3-5 Tage)' : 'Fast turnaround (3-5 days)',
  ];

  return (
    <section id="solution-section" ref={ref as React.RefObject<HTMLElement>} className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">{isGerman ? 'Die Lösung' : 'The Solution'}</span>
          <h2 className="font-display text-display-md text-foreground mb-6">{isGerman ? 'Wie Pitch Deck Check funktioniert' : 'How Pitch Deck Check Works'}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{isGerman ? 'Wir reviewen nicht nur Slides. Wir führen eine Experten-Deck-Analyse durch—aus Investor-Perspektive.' : "We don't just review slides. We conduct expert deck analysis—from investor perspective."}</p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">{isGerman ? '10 Deck-Dimensionen' : '10 Deck Dimensions'}</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {dimensions.map((d, i) => (
              <div key={i} className="bg-card/50 border border-border p-4 rounded-lg text-center animate-slide-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <d.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <h4 className="font-bold text-xs text-foreground">{d.title}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center"><BarChart3 className="w-5 h-5 text-accent" /></div>
              <div><h4 className="font-bold text-foreground">{isGerman ? 'Tag 1-2: Deck Review' : 'Day 1-2: Deck Review'}</h4><p className="text-sm text-accent">€1.9K</p></div>
            </div>
            <div className="space-y-2">
              {[isGerman ? 'Pitch Deck Review Report (10-15 Seiten)' : 'Pitch Deck Review Report (10-15 pages)', isGerman ? 'Deck Quality Score (0-100%)' : 'Deck Quality Score (0-100%)', isGerman ? 'Slide-by-Slide Feedback' : 'Slide-by-Slide Feedback', isGerman ? 'Experten-Empfehlungen' : 'Expert Recommendations'].map((item, i) => (
                <div key={i} className="flex items-center gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /><span className="text-sm text-foreground">{item}</span></div>
              ))}
            </div>
          </div>
          <div className="bg-muted/50 border-2 border-border p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"><Lightbulb className="w-5 h-5 text-muted-foreground" /></div>
              <div><h4 className="font-bold text-foreground">{isGerman ? 'Tag 3-5: Investor Q&A Simulation' : 'Day 3-5: Investor Q&A Simulation'}</h4><p className="text-sm text-muted-foreground">{isGerman ? 'Optional +€600' : 'Optional +€600'}</p></div>
            </div>
            <div className="space-y-2">
              {['20-30 Investor Questions', 'Recommended Answers', 'Red Flag Analysis', 'Deck Revision Guide'].map((item, i) => (
                <div key={i} className="flex items-center gap-2"><Check className="w-4 h-4 text-muted-foreground flex-shrink-0" /><span className="text-sm text-foreground">{item}</span></div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card/50 border border-border p-8 rounded-lg">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">{isGerman ? 'Was macht das anders:' : 'What makes this different:'}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {differentiators.map((item, i) => (
              <div key={i} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" /><span className="text-sm text-foreground">{item}</span></div>
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
    { value: '+80%', label: 'Deck Quality', before: isGerman ? '30% (schwach)' : '30% (weak)', after: isGerman ? '90%+ (investor-ready)' : '90%+ (investor-ready)', description: isGerman ? 'Von "schwaches Deck" zu "investor-ready"' : 'From "weak deck" to "investor-ready"' },
    { value: '20-30', label: 'Investor Q&A Prepared', before: isGerman ? 'Unvorbereitet' : 'Unprepared', after: isGerman ? '20-30 Fragen prepared' : '20-30 questions prepared', description: isGerman ? 'Von "unvorbereitet" zu "investor-ready"' : 'From "unprepared" to "investor-ready"' },
    { value: '+30-50pp', label: 'Fundraising Success Rate', before: isGerman ? '10% (20 VCs → 2 Meetings)' : '10% (20 VCs → 2 meetings)', after: isGerman ? '40-60% (20 VCs → 8-12 Meetings)' : '40-60% (20 VCs → 8-12 meetings)', description: isGerman ? 'Von "niedrige Meeting Rate" zu "hohe Meeting Rate"' : 'From "low meeting rate" to "high meeting rate"' },
  ];

  const caseStudy = {
    company: isGerman ? 'Series A SaaS, €8M ARR, 60 Mitarbeiter' : 'Series A SaaS, €8M ARR, 60 employees',
    challenge: isGerman ? 'Schwaches Deck, niedrige Meeting Rate (10%), Fundraising stagniert' : 'Weak deck, Low meeting rate (10%), Fundraising stalled',
    results: [
      { metric: 'Deck Quality', value: '+85% (30% → 90%+)' },
      { metric: 'Investor Q&A', value: '25 questions prepared' },
      { metric: 'Fundraising Rate', value: '+45pp (10% → 55%)' },
      { metric: 'Valuation', value: '+20% (€30M → €36M)' },
    ],
  };

  return (
    <section id="outcome-section" ref={ref as React.RefObject<HTMLElement>} className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">{isGerman ? 'Das Ergebnis' : 'The Outcome'}</span>
          <h2 className="font-display text-display-md text-foreground mb-6">{isGerman ? 'Typische Ergebnisse (3-5 Tage)' : 'Typical Outcomes (3-5 Days)'}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{isGerman ? 'Das sind echte Ergebnisse von Companies wie dir (Series A-B).' : "These are real results from companies like yours (Series A-B)."}</p>
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
              <p className="font-bold text-foreground mb-2">{isGerman ? 'Unternehmen:' : 'Company:'}</p>
              <p className="text-muted-foreground mb-4">{caseStudy.company}</p>
              <p className="font-bold text-foreground mb-2">Challenge:</p>
              <p className="text-muted-foreground">{caseStudy.challenge}</p>
            </div>
            <div>
              <p className="font-bold text-foreground mb-4">{isGerman ? 'Ergebnisse:' : 'Results:'}</p>
              <div className="space-y-3">
                {caseStudy.results.map((r, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">{r.metric}</span>
                    <span className="font-bold text-accent">{r.value}</span>
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

  return (
    <section id="process-section" ref={ref as React.RefObject<HTMLElement>} className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">{isGerman ? 'Der Prozess' : 'How We Work'}</span>
          <h2 className="font-display text-display-md text-foreground mb-6">{isGerman ? 'Der Pitch Deck Check Prozess' : 'The Pitch Deck Check Process'}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{isGerman ? 'Transparenter Zeitplan. Klare Deliverables. Investor-Grade Qualität.' : 'Transparent timeline. Clear deliverables. Investor-grade quality.'}</p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-card border border-border p-8 rounded-lg mb-8">
            <h3 className="text-lg font-bold mb-4 text-foreground flex items-center gap-3"><Clock className="w-5 h-5 text-accent" />{isGerman ? 'Tag 1-2: Deck Review' : 'Day 1-2: Deck Review'}</h3>
            <div className="space-y-3 mb-6">
              {[isGerman ? 'Deck anfordern (PDF oder PowerPoint)' : 'Request deck (PDF or PowerPoint)', isGerman ? '10 Dimensionen reviewen' : 'Review 10 dimensions', isGerman ? 'Deck Gaps identifizieren' : 'Identify deck gaps', isGerman ? 'Report erstellen (10-15 Seiten)' : 'Create Report (10-15 pages)'].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0"><span className="text-xs font-bold text-accent">{i + 1}</span></div>
                  <span className="text-sm text-foreground">{step}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground"><strong>{isGerman ? 'Zeitaufwand:' : 'Time commitment:'}</strong> 1-2 {isGerman ? 'Stunden' : 'hours'}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg text-center">
            <h4 className="font-bold text-foreground mb-2">Base Package</h4>
            <div className="text-3xl font-bold text-gradient mb-4">€1.9K</div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Pitch Deck Review Report (10-15 pages)</li><li>• 10 Dimensions reviewed</li><li>• Deck Quality Score</li><li>• Slide-by-Slide Feedback</li>
            </ul>
          </div>
          <div className="bg-muted/50 border-2 border-border p-6 rounded-lg text-center">
            <h4 className="font-bold text-foreground mb-2">+ Investor Q&A Simulation</h4>
            <div className="text-3xl font-bold text-muted-foreground mb-4">+€600</div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• 20-30 Investor Questions</li><li>• Recommended Answers</li><li>• Red Flag Analysis</li><li>• Deck Revision Guide</li>
            </ul>
          </div>
        </div>

        <div className="bg-card border border-border p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-6 text-foreground flex items-center gap-3 justify-center"><Shield className="w-5 h-5 text-accent" />{isGerman ? 'Qualitätsgarantie' : 'Quality Guarantee'}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[isGerman ? 'Investor-Grade Qualität' : 'Investor-grade quality', isGerman ? '10 Dimensionen reviewed' : '10 dimensions reviewed', isGerman ? 'Schnelle Lieferung (3-5 Tage)' : 'Fast turnaround (3-5 days)', isGerman ? 'Referenz-Calls verfügbar' : 'Reference calls available'].map((item, i) => (
              <div key={i} className="flex items-center gap-3"><Check className="w-5 h-5 text-accent flex-shrink-0" /><span className="text-sm text-foreground">{item}</span></div>
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
    isGerman ? 'Du hast ein Pitch Deck, aber weißt nicht, ob es investor-ready ist' : "You have a pitch deck but don't know if it's investor-ready",
    isGerman ? 'Du brauchst Experten-Deck-Review (nicht nur Design-Feedback)' : 'You need expert deck review (not just design feedback)',
    isGerman ? 'Du bist Series A-B, €5M-€30M ARR' : "You're Series A-B, €5M-€30M ARR",
    isGerman ? 'Du brauchst schnelle Lieferung (3-5 Tage)' : 'You need fast turnaround (3-5 days)',
    isGerman ? 'Du hast Budget (€1.9K-€2.5K)' : 'You have budget (€1.9K-€2.5K)',
  ];

  const notFit = [
    { condition: isGerman ? 'Du brauchst Hands-on Deck Creation' : 'You need hands-on deck creation', alternative: isGerman ? 'Power Up: Investor-Readiness (€23.6K)' : 'Power Up: Investor-Readiness (€23.6K)' },
    { condition: isGerman ? 'Du hast schon ein investor-ready Deck' : 'You already have investor-ready deck', alternative: isGerman ? 'Expert Session: Investor-Readiness (€490-€890)' : 'Expert Session: Investor-Readiness (€490-€890)' },
    { condition: isGerman ? 'Du brauchst Full Fundraising Support' : 'You need full fundraising support', alternative: isGerman ? 'Boost: Board Excellence (€60K-€78K)' : 'Boost: Board Excellence (€60K-€78K)' },
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
// SECTION 7: FINAL CTA
// ============================================================================
const FinalCTASection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const faqs = [
    { q: isGerman ? 'Wie lange dauert Pitch Deck Check?' : 'How long does pitch deck check take?', a: isGerman ? '3-5 Tage' : '3-5 days' },
    { q: isGerman ? 'Was ist die Investition?' : "What's the investment?", a: isGerman ? '€1.9K (Base) oder €2.5K (Base + Q&A Simulation)' : '€1.9K (Base) or €2.5K (Base + Q&A Simulation)' },
    { q: isGerman ? 'Welches Format braucht ihr?' : 'What format do you need?', a: isGerman ? 'PDF oder PowerPoint' : 'PDF or PowerPoint' },
    { q: isGerman ? 'Kann ich mit einer Referenz sprechen?' : 'Can I talk to a reference?', a: isGerman ? 'Ja.' : 'Yes.' },
    { q: isGerman ? 'Was ist der ROI?' : "What's the ROI?", a: isGerman ? 'Typischer ROI ist 10-30x.' : 'Typical ROI is 10-30x.' },
    { q: isGerman ? 'Helft ihr beim Deck Redesign?' : 'Do you help with deck redesign?', a: isGerman ? 'Nein. Wir liefern Experten-Feedback. Für Hands-on Redesign: Power Up: Investor-Readiness (€23.6K).' : 'No. We provide expert feedback. For hands-on redesign: Power Up: Investor-Readiness (€23.6K).' },
  ];

  return (
    <section id="final-cta" ref={ref as React.RefObject<HTMLElement>} className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-display-md text-foreground mb-6">{isGerman ? 'Bereit für ein Investor-Ready Deck?' : 'Ready for Investor-Ready Deck?'}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{isGerman ? 'Das passiert als Nächstes.' : "Here's what happens next."}</p>
        </div>

        <div className="bg-accent/10 border-2 border-accent/30 p-8 rounded-lg mb-8 max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-4 text-foreground">{isGerman ? 'Schritt 1: Deck Check anfragen (€1.9K)' : 'Step 1: Request Deck Check (€1.9K)'}</h3>
          <div className="space-y-2 mb-6">
            {[isGerman ? 'Deck Upload-Link erhalten' : "We'll send you a deck upload link", isGerman ? 'Deck teilen (1-2 Stunden)' : 'You share deck (1-2 hours)', isGerman ? 'Wir reviewen (10 Dimensionen)' : 'We review your deck (10 dimensions)', isGerman ? 'Report erhalten (10-15 Seiten, 3-5 Tage)' : 'You get Report (10-15 pages, 3-5 days)'].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0"><span className="text-xs font-bold text-accent">{i + 1}</span></div>
                <span className="text-sm text-foreground">{step}</span>
              </div>
            ))}
          </div>
          <p className="text-sm font-bold text-accent mb-6">{isGerman ? 'Wisse genau, was du fixen sollst.' : 'Know exactly what to fix.'}</p>
          <Button size="xl" className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400" onClick={onOpenBooking}>
            {isGerman ? 'Deck Check anfragen (€1.9K)' : 'Request Deck Check (€1.9K)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-4">{isGerman ? 'Nicht sicher? Starte mit einem kostenlosen Call:' : 'Not sure? Start with a free call:'}</p>
          <Button variant="outline" size="lg" onClick={onOpenBooking} className="border-2">
            {isGerman ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book Free Inflection Call (30 min)'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-6 text-foreground text-center">FAQ</h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{faq.q}</AccordionTrigger><AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent></AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12"><p className="text-sm text-muted-foreground">{isGerman ? 'Noch Fragen? Email uns unter team@scalingx.io oder buche einen Call.' : 'Still have questions? Email us at team@scalingx.io or book a call.'}</p></div>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const InvestorReadinessPitchDeckCheck: React.FC = () => {
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
      <FilloutBookingModal formSlug="inflection-call" source="investor-readiness" isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} title={isGerman ? 'Inflection Call buchen' : 'Book Inflection Call'} />
      <Footer />
    </div>
  );
};

export default InvestorReadinessPitchDeckCheck;
