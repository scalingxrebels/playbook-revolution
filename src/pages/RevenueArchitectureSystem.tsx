import React, { useEffect, useState, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
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
  Target,
  Layers,
  Settings,
  Play,
  Users,
  Clock,
  FileText,
  Shield,
  Zap,
  Award,
  Star,
  ExternalLink,
  Mail,
  Download,
  Loader2,
  CheckCircle,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useTrackingParams } from '@/hooks/useUTMParams';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

// ============================================================================
// SECTION S1: HERO
// ============================================================================
const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const trustSignals = [
    { icon: Shield, label: { en: 'Session-1-Guarantee', de: 'Session-1-Guarantee' } },
    { icon: Clock, label: { en: 'Founding Price — Cohort 1 only', de: 'Founding-Preis — nur Cohort 1' } },
    { icon: Users, label: { en: 'No commitment before the conversation', de: 'Kein Commitment vor dem Gespräch' } },
  ];

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="dark-section relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise pt-20"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E] transition-transform duration-100"
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
              <span className="text-foreground font-medium">Revenue Architecture System</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Layers className="w-4 h-4 mr-2" />
          Guided Build · 6 {language === 'de' ? 'Wochen' : 'Weeks'} · Founding Cohort
        </Badge>

        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">
            {language === 'de'
              ? 'Dein CAC steigt. Deine Conversion sinkt.'
              : 'Your CAC Is Rising. Your Conversion Is Dropping.'}
          </span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'Du hast Taktiken. Kein System.' : 'You Have Tactics. No System.'}
          </span>
        </h1>

        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'In 6 Wochen baust du das Revenue System, das das ändert. Strukturiert. Geführt. Live.'
            : 'In 6 weeks you build the Revenue System that changes this. Structured. Guided. Live.'}
        </p>

        <p className="text-sm text-muted-foreground mb-12 animate-slide-up" style={{ animationDelay: '0.25s' }}>
          {language === 'de'
            ? 'Founding Cohort · Max. 12 Plätze · Startet Ende April 2026'
            : 'Founding Cohort · Max. 12 Seats · Starts Late April 2026'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
          >
            {language === 'de' ? 'Early Access sichern' : 'Secure Early Access'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('vsl-section')}
            className="border-2"
          >
            {language === 'de' ? 'Erst Video ansehen' : 'Watch Video First'}
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              <span>{language === 'de' ? signal.label.de : signal.label.en}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollToSection('vsl-section')}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-fade-in cursor-pointer"
        style={{ animationDelay: '1s' }}
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

// ============================================================================
// SECTION S2: VSL
// ============================================================================
const VSLSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const safetyNetLines = language === 'de'
    ? [
        'Die meisten B2B-SaaS-Teams lösen das falsche Problem — und wundern sich, warum der CAC steigt.',
        'The Revenue Architecture System — 6 Wochen, 22 Revenue-Bausteine, vollständiges Revenue System live aufgebaut.',
        'Teilnehmer berichten von signifikant reduziertem CAC — durch systematische ICP-Schärfung und Funnel-Optimierung.',
      ]
    : [
        "Most B2B SaaS teams solve the wrong problem — and wonder why CAC keeps rising.",
        'The Revenue Architecture System — 6 weeks, 22 revenue building blocks, complete Revenue System built live.',
        'Participants report significantly reduced CAC — through systematic ICP sharpening and funnel optimization.',
      ];

  return (
    <section
      id="vsl-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Video' : 'Video'}
          </span>
          <h2 className="font-display text-display-md text-foreground">
            {language === 'de' ? 'Warum dein CAC-Problem kein Kanal-Problem ist' : "Why Your CAC Problem Isn't a Channel Problem"}
          </h2>
        </div>

        {/* Video Placeholder */}
        <div className="relative aspect-video bg-card/50 backdrop-blur-sm border-2 border-border mb-12 flex items-center justify-center group cursor-pointer hover:border-primary/50 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="relative flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-accent ml-1" />
            </div>
            <p className="text-muted-foreground text-sm">
              {language === 'de' ? '4–5 Minuten · Michel Lason' : '4–5 minutes · Michel Lason'}
            </p>
          </div>
        </div>

        {/* Text Safety Net */}
        <div className="space-y-4">
          {safetyNetLines.map((line, i) => (
            <p key={i} className="text-muted-foreground text-center leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION S5: WHAT YOU BUILD (compressed Variante A)
// ============================================================================
const DeliverablesSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const corePoints = [
    {
      icon: Target,
      titleDe: 'ICP-Profil + Value Stack',
      titleEn: 'ICP Profile + Value Stack',
      descDe: 'Wer dein Kunde wirklich ist. Was ihn bewegt. Was er zahlt.',
      descEn: 'Who your customer really is. What drives them. What they pay.',
    },
    {
      icon: Layers,
      titleDe: 'Entry Layer + Conversion System',
      titleEn: 'Entry Layer + Conversion System',
      descDe: 'Wie Traffic zu Leads wird. Wie Leads zu Kunden werden.',
      descEn: 'How traffic becomes leads. How leads become customers.',
    },
    {
      icon: Settings,
      titleDe: 'Revenue OS',
      titleEn: 'Revenue OS',
      descDe: 'Das System, das alles verbindet. Messbar. Einsatzbereit.',
      descEn: 'The system that connects everything. Measurable. Ready to deploy.',
    },
  ];

  return (
    <section
      id="deliverables-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Was du baust' : 'What You Build'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Was du in 6 Wochen baust' : 'What You Build in 6 Weeks'}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {corePoints.map((point, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm border-2 border-border p-8 hover:border-primary/50 transition-all duration-300"
            >
              <point.icon className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {language === 'de' ? point.titleDe : point.titleEn}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'de' ? point.descDe : point.descEn}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground">
          {language === 'de'
            ? '22 fertige Revenue-Bausteine. In 6 Wochen. Live aufgebaut.'
            : '22 finished revenue building blocks. In 6 weeks. Built live.'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION S7: PROGRAM OVERVIEW
// ============================================================================
const ProgramSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const sessions = [
    {
      week: 1,
      titleDe: 'Strategische Grundlagen',
      titleEn: 'Strategic Foundations',
      outcomeDe: 'Du weißt, in welchem Markt du spielst und wen du ansprichst.',
      outcomeEn: 'You know which market you play in and who you address.',
      deliverables: ['Marktanalyse', 'Challenge-Solution-Matrix', 'ICP-Profil'],
      deliverablesEn: ['Market Analysis', 'Challenge-Solution Matrix', 'ICP Profile'],
    },
    {
      week: 2,
      titleDe: 'Value Stack & Growth Engine',
      titleEn: 'Value Stack & Growth Engine',
      outcomeDe: 'Du weißt, wie dein ICP kauft — und welcher Funnel-Typ passt.',
      outcomeEn: 'You know how your ICP buys — and which funnel type fits.',
      deliverables: ['Customer Journey', 'Value Stack', 'Market Entry Strategy', 'Growth Engine Architecture'],
      deliverablesEn: ['Customer Journey', 'Value Stack', 'Market Entry Strategy', 'Growth Engine Architecture'],
    },
    {
      week: 3,
      titleDe: 'Entry Layer & Persuasion',
      titleEn: 'Entry Layer & Persuasion',
      outcomeDe: 'Dein Funnel-Eingang steht. Landing Pages und Forms sind live.',
      outcomeEn: 'Your funnel entry is live. Landing pages and forms are ready.',
      deliverables: ['Channel Playbook', 'Entry Layer Blueprint', 'Persuasion Blueprint'],
      deliverablesEn: ['Channel Playbook', 'Entry Layer Blueprint', 'Persuasion Blueprint'],
    },
    {
      week: 4,
      titleDe: 'Messaging & Funnel-Abschluss',
      titleEn: 'Messaging & Funnel Completion',
      outcomeDe: 'Dein Funnel konvertiert. Email-Sequenzen laufen. Assets stehen.',
      outcomeEn: 'Your funnel converts. Email sequences are running. Assets are ready.',
      deliverables: ['Email Sequencing', 'Asset Stack', 'Funnel Blueprint'],
      deliverablesEn: ['Email Sequencing', 'Asset Stack', 'Funnel Blueprint'],
    },
    {
      week: 5,
      titleDe: 'Revenue Operating System',
      titleEn: 'Revenue Operating System',
      outcomeDe: 'Marketing, Sales und CS arbeiten in einer Logik.',
      outcomeEn: 'Marketing, Sales, and CS operate in one logic.',
      deliverables: ['Revenue System Architecture', 'Data Flow', 'Automation Priorities', 'Tech Stack Map', 'Revenue Report'],
      deliverablesEn: ['Revenue System Architecture', 'Data Flow', 'Automation Priorities', 'Tech Stack Map', 'Revenue Report'],
    },
    {
      week: 6,
      titleDe: 'Traffic Activation',
      titleEn: 'Traffic Activation',
      outcomeDe: 'Dein System bekommt skalierbaren Traffic. Phase II startet.',
      outcomeEn: 'Your system gets scalable traffic. Phase II starts.',
      deliverables: ['SEO', 'SEA', 'GEO', 'Earned Media', 'Content Flywheel'],
      deliverablesEn: ['SEO', 'SEA', 'GEO', 'Earned Media', 'Content Flywheel'],
    },
  ];

  const formatPoints = language === 'de'
    ? [
        '6 Wochen · 1× pro Woche · 4h Live',
        '3× Expert Sessions à 1h (1:1 mit Michel)',
        'Async-Support zwischen den Sessions',
        'Alle 22 Revenue-Bausteine als fertige Assets',
        'Lifetime-Zugang zu allen Materialien',
      ]
    : [
        '6 weeks · 1× per week · 4h live',
        '3× Expert Sessions à 1h (1:1 with Michel)',
        'Async support between sessions',
        'All 22 revenue building blocks as finished assets',
        'Lifetime access to all materials',
      ];

  return (
    <section
      id="program-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`dark-section relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Das Programm' : 'The Program'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? '6 Wochen. Strukturiert. Geführt. Live.' : '6 Weeks. Structured. Guided. Live.'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {sessions.map((session) => (
            <div
              key={session.week}
              className="bg-card/10 backdrop-blur-sm border-2 border-border/50 p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                {language === 'de' ? `Woche ${session.week}` : `Week ${session.week}`}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {language === 'de' ? session.titleDe : session.titleEn}
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {(language === 'de' ? session.deliverables : session.deliverablesEn).map((d, i) => (
                  <span key={i} className="text-xs bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-sm">
                    {d}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">
                → {language === 'de' ? session.outcomeDe : session.outcomeEn}
              </p>
            </div>
          ))}
        </div>

        {/* After Session 6 statement */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground italic">
            {language === 'de'
              ? '„Nach Woche 6 hast du kein Konzept. Du hast ein live-fähiges Revenue System."'
              : '"After week 6 you don\'t have a concept. You have a live-ready Revenue System."'}
          </p>
        </div>

        {/* Format Box */}
        <div className="bg-card/10 backdrop-blur-sm border-2 border-border/50 p-8 max-w-3xl mx-auto">
          <div className="space-y-3">
            {formatPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-accent mt-1 shrink-0" />
                <span className="text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION S9b: PRE-COHORT PROOF
// ============================================================================
const PreCohortProofSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const proofPillars = [
    {
      icon: Award,
      titleDe: 'Revenue Systeme von Microsoft über Haufe Group bis smapOne',
      titleEn: 'Revenue Systems from Microsoft via Haufe Group to smapOne',
      textDe: 'Seit 19 Jahren Revenue-Systeme aufgebaut — nicht als Berater, als Operator. Die Methode kommt aus der Praxis, nicht aus der Theorie.',
      textEn: 'For 19 years building Revenue Systems — not as a consultant, as an operator. The method comes from practice, not theory.',
    },
    {
      icon: FileText,
      titleDe: 'Growth Engine Framework',
      titleEn: 'Growth Engine Framework',
      textDe: '22 Revenue-Bausteine. Vollständig dokumentiert. Jede Session hat ein klares Deliverable. Du weißt vorher, was du danach hast.',
      textEn: '22 revenue building blocks. Fully documented. Every session has a clear deliverable. You know upfront what you\'ll have afterward.',
    },
    {
      icon: Shield,
      titleDe: 'Session-1-Guarantee',
      titleEn: 'Session 1 Guarantee',
      textDe: 'Wenn Session 1 nicht hält, was sie verspricht — kein weiteres Commitment. Volle Rückerstattung. Du entscheidest nach der ersten Session.',
      textEn: "If Session 1 doesn't deliver what it promises — no further commitment. Full refund. You decide after the first session.",
    },
  ];

  return (
    <section
      id="proof-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Vertrauen' : 'Trust'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de'
              ? 'Warum das funktioniert'
              : 'Why This Works'}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {proofPillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm border-2 border-border p-8 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 border-2 border-accent/30 flex items-center justify-center mb-6">
                <pillar.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-4">
                {language === 'de' ? pillar.titleDe : pillar.titleEn}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'de' ? pillar.textDe : pillar.textEn}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          {language === 'de'
            ? 'Cohort 1 ist bewusst klein gehalten. Impact First — Fokus für jede/n Teilnehmer:in.'
            : 'Cohort 1 is deliberately kept small. Impact First — Focus for every participant.'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION S8: CREDIBILITY (Michel Lason)
// ============================================================================
const CredibilitySection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const quotes = [
    {
      textDe: '„Das Muster, das Michel beschreibt, kenne ich aus eigener Erfahrung. Wir haben jahrelang den Kanal optimiert — und das eigentliche Problem übersehen."',
      textEn: '"The pattern Michel describes, I know from my own experience. We optimized channels for years — and missed the actual problem."',
      roleDe: 'Head of Growth · B2B SaaS · DACH',
      roleEn: 'Head of Growth · B2B SaaS · DACH',
    },
    {
      textDe: '„Was mich überzeugt hat: Michel spricht nicht über Frameworks. Er spricht über konkrete Systeme, die er selbst gebaut hat."',
      textEn: '"What convinced me: Michel doesn\'t talk about frameworks. He talks about concrete systems he built himself."',
      roleDe: 'VP Marketing · AI-Native SaaS · DACH',
      roleEn: 'VP Marketing · AI-Native SaaS · DACH',
    },
    {
      textDe: '„Der Ansatz ist anders als alles, was ich bisher gesehen habe. Nicht Theorie. Nicht Consulting. Bauen."',
      textEn: '"The approach is different from anything I\'ve seen. Not theory. Not consulting. Building."',
      roleDe: 'CMO · B2B SaaS · DACH',
      roleEn: 'CMO · B2B SaaS · DACH',
    },
  ];

  return (
    <section
      id="credibility-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`dark-section relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Wer das gebaut hat' : 'Who Built This'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Wer das gebaut hat — und warum' : 'Who Built This — and Why'}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Photo + Bio */}
          <div>
            <div className="aspect-[3/4] bg-card/10 border-2 border-border mb-6 overflow-hidden">
              <img
                src="/images/ml-speaking.png"
                alt="Michel Lason"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <a
              href="https://linkedin.com/in/michellason"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              LinkedIn Profil
            </a>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Michel Lason</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {language === 'de'
                  ? 'Seit 19 Jahren baue ich Revenue-Systeme für B2B-SaaS-Unternehmen auf — als Operator. Nicht als Berater, der Empfehlungen gibt und geht.'
                  : "For 19 years I've built Revenue Systems for B2B SaaS companies — as an operator. Not as a consultant who gives recommendations and leaves."}
              </p>
              <p>
                {language === 'de'
                  ? 'Ich habe gesehen, was funktioniert: Scharfe ICP-Arbeit. Klare Offer-Architektur. Systematische Conversion-Logik.'
                  : "I've seen what works: Sharp ICP work. Clear offer architecture. Systematic conversion logic."}
              </p>
              <p>
                {language === 'de'
                  ? 'Und ich habe gesehen, was nicht funktioniert: Kanal-Optimierung ohne Systemfundament. Mehr Budget in ein kaputtes System. Taktiken ohne Strategie-Rahmen.'
                  : "And I've seen what doesn't work: Channel optimization without system foundation. More budget into a broken system. Tactics without strategic framework."}
              </p>
              <p className="text-foreground font-medium">
                {language === 'de'
                  ? 'The Revenue Architecture System ist das, was ich mir selbst gewünscht hätte — als ich zum ersten Mal ein Revenue System aufgebaut habe.'
                  : 'The Revenue Architecture System is what I wished I had — when I built a Revenue System for the first time.'}
              </p>
            </div>
          </div>
        </div>

        {/* Quotes */}
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((quote, index) => (
            <div key={index} className="bg-card/10 backdrop-blur-sm border-2 border-border/50 p-6">
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                {language === 'de' ? quote.textDe : quote.textEn}
              </p>
              <p className="text-xs text-muted-foreground/70">
                — {language === 'de' ? quote.roleDe : quote.roleEn}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground/50 text-center mt-4">
          {language === 'de'
            ? 'Zitate aus Gesprächen vor Cohort 1 — Namen auf Wunsch anonymisiert.'
            : 'Quotes from conversations before Cohort 1 — names anonymized by request.'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION S10: FOUNDING FRAME
// ============================================================================
const FoundingFrameSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            Founding Cohort
          </span>
          <h2 className="font-display text-display-md text-foreground">
            {language === 'de' ? 'Dein Platz in Cohort 1' : 'Your Seat in Cohort 1'}
          </h2>
        </div>
        <div className="bg-accent/10 border-2 border-accent/30 p-8 md:p-12">
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p>
              {language === 'de'
                ? 'Cohort 1 ist die einzige Cohort, die zu Founding-Konditionen startet.'
                : 'Cohort 1 is the only cohort starting at founding conditions.'}
            </p>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 text-accent shrink-0" />
                <span>{language === 'de' ? 'Founding-Preis: €6.900 / €8.900 / €12.900' : 'Founding Price: €6,900 / €8,900 / €12,900'}</span>
              </p>
              <p className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 text-accent shrink-0" />
                <span>{language === 'de' ? 'Ab Cohort 2: €8.900 / €10.900 / €14.900' : 'From Cohort 2: €8,900 / €10,900 / €14,900'}</span>
              </p>
              <p className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 text-accent shrink-0" />
                <span>{language === 'de' ? 'Max. 12 Plätze — startet ab 4 Teilnehmern' : 'Max. 12 seats — starts from 4 participants'}</span>
              </p>
            </div>
            <p className="pt-4">
              {language === 'de'
                ? 'Warum ein Founding-Preis? Weil Cohort 1 auch für mich ein Aufbau-Moment ist. Ich will, dass die ersten Teilnehmer außergewöhnlich gut betreut werden. Dafür halte ich die Gruppe klein — und den Preis fair.'
                : "Why a Founding Price? Because Cohort 1 is a building moment for me too. I want the first participants to be exceptionally well supported. That's why I keep the group small — and the price fair."}
            </p>
            <p className="pt-4 text-foreground font-medium">
              {language === 'de'
                ? 'Als Cohort-1-Teilnehmer:in bist du Teil des Beirats. Du gestaltest das Programm aktiv mit — dein Feedback fließt direkt in die Weiterentwicklung ein.'
                : "As a Cohort 1 participant, you're part of the advisory board. You actively shape the program — your feedback feeds directly into its evolution."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION: APPLICATION PROCESS
// ============================================================================
const ApplicationProcessSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const processSteps = [
    {
      stepDe: 'Bewerbung einreichen',
      stepEn: 'Submit Application',
      timeDe: '5 Minuten',
      timeEn: '5 minutes',
      descDe: 'Kurzes Formular: Unternehmen, Rolle, aktuelle Situation, Ziel.',
      descEn: 'Short form: Company, role, current situation, goal.',
    },
    {
      stepDe: 'Persönliche Prüfung',
      stepEn: 'Personal Review',
      timeDe: '48h',
      timeEn: '48h',
      descDe: 'Michel prüft jede Bewerbung persönlich.',
      descEn: 'Michel reviews every application personally.',
    },
    {
      stepDe: 'Persönliches Gespräch',
      stepEn: 'Personal Conversation',
      timeDe: '15–30 Min',
      timeEn: '15–30 min',
      descDe: 'Wir entscheiden gemeinsam, ob es passt.',
      descEn: 'We decide together if it\'s a fit.',
    },
    {
      stepDe: 'Commitment & Platz sichern',
      stepEn: 'Commitment & Secure Your Seat',
      timeDe: '',
      timeEn: '',
      descDe: 'Founding-Preis gilt bis Cohort-Start.',
      descEn: 'Founding price valid until cohort start.',
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        <h3 className="font-display text-display-sm text-foreground text-center mb-12">
          {language === 'de' ? 'Wie die Bewerbung funktioniert' : 'How the Application Works'}
        </h3>
        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {index + 1}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="w-px h-full bg-border mt-2" />
                )}
              </div>
              <div className="pb-6">
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="font-display font-bold text-foreground">
                    {language === 'de' ? step.stepDe : step.stepEn}
                  </h4>
                  {(language === 'de' ? step.timeDe : step.timeEn) && (
                    <span className="text-xs text-muted-foreground">
                      ({language === 'de' ? step.timeDe : step.timeEn})
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {language === 'de' ? step.descDe : step.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION: COHORT START CARD
// ============================================================================
const CohortStartCard: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-16 lg:py-24 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 border-2 border-accent/40 p-10 md:p-14 text-center shadow-accent-glow/10">
          <Zap className="w-10 h-10 text-accent mx-auto mb-6" />
          <h3 className="font-display text-display-sm text-foreground mb-4">
            {language === 'de'
              ? 'Start Ende April'
              : 'Starting End of April'}
          </h3>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {language === 'de'
              ? 'Erfahre als Erste/r, wenn die Cohort 1 öffnet.'
              : 'Be the first to know when Cohort 1 opens.'}
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION: LEAD CAPTURE CTA
// ============================================================================
const emailSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
});

const LeadCaptureSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { toast } = useToast();
  const trackingParams = useTrackingParams('revenue-system-whitepaper');
  const [leadEmail, setLeadEmail] = useState('');
  const [isLeadSubmitting, setIsLeadSubmitting] = useState(false);
  const [isLeadSuccess, setIsLeadSuccess] = useState(false);
  const [leadError, setLeadError] = useState('');

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container max-w-2xl mx-auto px-6 relative z-10 text-center">
        <h2 className="font-display text-display-md text-foreground mb-4">
          {language === 'de' ? 'Bereit, mehr zu erfahren?' : 'Ready to learn more?'}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
          {language === 'de'
            ? 'Trag dich ein. Du erhältst sofort „Das Revenue System" als PDF — und erfährst als Erste/r, wenn die nächste Kohorte öffnet. Kostenlos. Kein Commitment. Kein Verkaufsdruck.'
            : 'Sign up. You\'ll instantly receive "The Revenue System" as a PDF — and be the first to know when the next cohort opens. Free. No commitment. No sales pressure.'}
        </p>

        {isLeadSuccess ? (
          <div className="p-8 rounded-lg border border-accent/30 bg-accent/5">
            <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              {language === 'de' ? 'Download gestartet!' : 'Download started!'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'de'
                ? 'Überprüfe deinen Downloads-Ordner.'
                : 'Check your downloads folder.'}
            </p>
          </div>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setLeadError('');

              const validation = emailSchema.safeParse({ email: leadEmail });
              if (!validation.success) {
                setLeadError(validation.error.errors[0]?.message || 'Invalid email');
                return;
              }

              setIsLeadSubmitting(true);
              try {
                const { error } = await supabase.from('download_leads').insert({
                  email: validation.data.email,
                  asset_id: 'revenue-system-whitepaper',
                  asset_type: 'lead-magnet',
                  utm_source: trackingParams.utm_source || null,
                  utm_medium: trackingParams.utm_medium || null,
                  utm_campaign: trackingParams.utm_campaign || null,
                  utm_content: trackingParams.utm_content || null,
                  utm_term: trackingParams.utm_term || null,
                  page_url: trackingParams.page_url || null,
                  referrer: trackingParams.referrer || null,
                });

                if (error) throw error;

                setIsLeadSuccess(true);
                toast({
                  title: language === 'de' ? 'Download bereit!' : 'Download ready!',
                  description: language === 'de'
                    ? 'Dein PDF-Download startet in Kürze.'
                    : 'Your PDF download will start shortly.',
                });

                setTimeout(() => {
                  window.open('/downloads/fix-growth-sample.pdf', '_blank');
                }, 500);
              } catch (err) {
                console.error('Lead capture error:', err);
                toast({
                  variant: 'destructive',
                  title: language === 'de' ? 'Fehler' : 'Error',
                  description: language === 'de'
                    ? 'Etwas ist schiefgelaufen. Bitte versuche es erneut.'
                    : 'Something went wrong. Please try again.',
                });
              } finally {
                setIsLeadSubmitting(false);
              }
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-8"
          >
            <Input
              type="email"
              placeholder="michel@scalingx.io"
              value={leadEmail}
              onChange={(e) => setLeadEmail(e.target.value)}
              required
              disabled={isLeadSubmitting}
              className={`flex-1 h-14 text-base ${leadError ? 'border-destructive' : ''}`}
            />
            <Button
              type="submit"
              size="xl"
              disabled={isLeadSubmitting}
              className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-8 py-4 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400 whitespace-nowrap"
            >
              {isLeadSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  {language === 'de' ? 'PDF sichern' : 'Get PDF'}
                </>
              )}
            </Button>
          </form>
        )}

        {leadError && (
          <p className="text-sm text-destructive mb-4">{leadError}</p>
        )}

        {/* PDF Preview Card */}
        {!isLeadSuccess && (
          <div className="max-w-md mx-auto p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm mb-8">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-accent shrink-0 mt-0.5" />
              <div className="text-left">
                <h4 className="font-semibold text-foreground mb-1">
                  {language === 'de' ? 'Sofort-Download: „Das Revenue System"' : 'Instant Download: "The Revenue System"'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'de'
                    ? 'Das PDF erklärt, wie du aufhörst, Taktiken zu stapeln — und anfängst, systematisch zu wachsen.'
                    : 'The PDF explains how to stop stacking tactics — and start growing systematically.'}
                </p>
              </div>
            </div>
          </div>
        )}

        <p className="text-sm text-muted-foreground mb-6">
          {language === 'de' ? 'Fragen? Direkt schreiben → ' : 'Questions? Write directly → '}
          <a href="mailto:michel@scalingx.com" className="text-primary hover:text-primary/80 transition-colors">
            michel@scalingx.com
          </a>
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION: FAQ
// ============================================================================
const FAQSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const faqItems = [
    {
      qDe: 'Ich habe wenig Zeit. Wie viel Aufwand ist das wirklich?',
      qEn: 'I have limited time. How much effort is this really?',
      aDe: '4h Live pro Woche + ca. 2–3h Nacharbeit. Wer 6–7h pro Woche investieren kann, baut in 6 Wochen ein System, das danach für sich arbeitet.',
      aEn: '4h live per week + approx. 2–3h follow-up work. If you can invest 6–7h per week, you build a system in 6 weeks that works for you afterward.',
    },
    {
      qDe: 'Ich bin kein Anfänger. Ist das nicht zu basic für mich?',
      qEn: "I'm not a beginner. Isn't this too basic for me?",
      aDe: 'Das Programm ist für Head of Growth, VP Marketing und CMOs gebaut — nicht für Einsteiger. Der Unterschied: Sie haben noch nie ihr System als Architektur gebaut.',
      aEn: "The program is built for Heads of Growth, VP Marketing, and CMOs — not beginners. The difference: they've never built their system as architecture.",
    },
    {
      qDe: 'Was passiert, wenn ich nach Session 1 merke, dass es nicht passt?',
      qEn: "What happens if I realize after Session 1 that it's not right?",
      aDe: 'Session-1-Guarantee: Volle Rückerstattung. Kein Prozess. Kein Kleingedrucktes.',
      aEn: 'Session 1 Guarantee: Full refund. No process. No fine print.',
    },
    {
      qDe: 'Founding Price — ist das ein Rabatt, weil das Programm unfertig ist?',
      qEn: 'Founding Price — is that a discount because the program is unfinished?',
      aDe: 'Nein. Das Programm ist vollständig. Founding Price bedeutet: Cohort-1-Teilnehmer schärfen das Programm mit. Das ist ein anderes Verhältnis, kein Preisnachlass.',
      aEn: "No. The program is complete. Founding Price means: Cohort 1 participants help sharpen the program. That's a different relationship, not a discount.",
    },
    {
      qDe: 'Was passiert, wenn meine Bewerbung abgelehnt wird?',
      qEn: 'What happens if my application is rejected?',
      aDe: 'Ich erkläre dir ehrlich, warum — und was ich stattdessen empfehle. Kein Programm passt zu jedem.',
      aEn: "I'll honestly explain why — and what I recommend instead. No program fits everyone.",
    },
    {
      qDe: 'Kann ich auch als Team teilnehmen?',
      qEn: 'Can I participate as a team?',
      aDe: 'Für Teams gibt es die Company Cohort — ein separates Format. Details auf Anfrage: team@scalingx.io',
      aEn: 'For teams there is the Company Cohort — a separate format. Details on request: team@scalingx.io',
    },
    {
      qDe: 'Gibt es Ratenzahlung?',
      qEn: 'Is installment payment available?',
      aDe: 'Ja. 3× monatliche Raten möglich — alle Tiers. Details im Gespräch nach der Bewerbung.',
      aEn: 'Yes. 3× monthly installments available — all tiers. Details in the conversation after application.',
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        <h3 className="font-display text-display-sm text-foreground text-center mb-12">
          {language === 'de' ? 'Häufige Fragen' : 'Frequently Asked Questions'}
        </h3>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {language === 'de' ? item.qDe : item.qEn}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {language === 'de' ? item.aDe : item.aEn}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION: PRICING (Angebot für Cohort 1) + RISK REVERSAL
// ============================================================================
const PricingSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const tiers = [
    {
      name: 'Standard',
      price: '€6.900',
      priceC2: '€8.900',
      recommended: false,
      targetDe: 'Für Solo-Founder oder kleine Teams im Aufbau',
      targetEn: 'For solo founders or small teams in the building phase',
      features: language === 'de'
        ? [
            '6× Live-Sessions (4h je)',
            '22 Revenue-Bausteine',
            '1× Expert-Session 1:1 (1h)',
          ]
        : [
            '6× Live Sessions (4h each)',
            '22 Revenue building blocks',
            '1× Expert Session 1:1 (1h)',
          ],
    },
    {
      name: 'Plus',
      price: '€8.900',
      priceC2: '€10.900',
      recommended: true,
      targetDe: 'Für Teams mit aktivem GTM-Betrieb und Optimierungsbedarf',
      targetEn: 'For teams with active GTM operations and optimization needs',
      features: language === 'de'
        ? [
            '6× Live-Sessions (4h je)',
            '22 Revenue-Bausteine',
            '3× Expert-Sessions 1:1 (je 1h)',
            'Async-Review deiner Deliverables',
          ]
        : [
            '6× Live Sessions (4h each)',
            '22 Revenue building blocks',
            '3× Expert Sessions 1:1 (1h each)',
            'Async review of your deliverables',
          ],
    },
    {
      name: 'VIP',
      price: '€12.900',
      priceC2: '€14.900',
      recommended: false,
      targetDe: 'Für Unternehmen, die ihr System nach Woche 6 direkt aktivieren wollen',
      targetEn: 'For companies that want to activate their system right after week 6',
      features: language === 'de'
        ? [
            '6× Live-Sessions (4h je)',
            '22 Revenue-Bausteine',
            '6× Expert-Sessions 1:1 (je 1h)',
            'Async-Review deiner Deliverables',
            'System-Audit nach Woche 6 (90 Min)',
            '30-Tage-Follow-up',
          ]
        : [
            '6× Live Sessions (4h each)',
            '22 Revenue building blocks',
            '6× Expert Sessions 1:1 (1h each)',
            'Async review of your deliverables',
            'System audit after week 6 (90 min)',
            '30-day follow-up',
          ],
    },
  ];

  return (
    <section
      id="pricing-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`dark-section relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">

        {/* Pricing Intro */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            Pricing
          </span>
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? 'Angebot für Cohort 1' : 'Offer for Cohort 1'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'de'
              ? 'Drei Optionen. Eine Entscheidung: Welches System brauchst du?'
              : 'Three options. One decision: Which system do you need?'}
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-card/10 backdrop-blur-sm border-2 p-8 flex flex-col ${
                tier.recommended
                  ? 'border-accent shadow-accent-glow'
                  : 'border-border/50 hover:border-primary/30'
              } transition-all duration-300`}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground font-bold text-xs px-4">
                    <Star className="w-3 h-3 mr-1" />
                    {language === 'de' ? 'Empfohlen' : 'Recommended'}
                  </Badge>
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-foreground mb-2">{tier.name}</h3>
              <div className="mb-1">
                <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                <span className="text-sm text-muted-foreground ml-1">{language === 'de' ? '(zzgl. MwSt.)' : '(excl. VAT)'}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">
                {language === 'de' ? `Ab Cohort 2: ${tier.priceC2}` : `From Cohort 2: ${tier.priceC2}`}
              </p>

              <div className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mb-6 italic">
                {language === 'de' ? tier.targetDe : tier.targetEn}
              </p>

              <Button
                className={`w-full font-bold uppercase tracking-wide ${
                  tier.recommended
                    ? 'bg-gradient-accent text-accent-foreground shadow-accent-glow'
                    : 'bg-primary text-primary-foreground'
                }`}
                onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
              >
                {language === 'de' ? 'Early Access sichern' : 'Secure Early Access'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mb-20">
          {language === 'de'
            ? '3× monatliche Raten möglich (alle Tiers). Details im Gespräch.'
            : '3× monthly installments available (all tiers). Details in conversation.'}
        </p>

        {/* Risk Reversal */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-accent/5 border-2 border-accent/20 p-8 text-center">
            <Shield className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              {language === 'de' ? 'Kein Risiko. Kein Lock-in.' : 'No Risk. No Lock-in.'}
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {language === 'de'
                ? 'Session-1-Guarantee: Wenn Session 1 nicht hält, was sie verspricht — kein weiteres Commitment. Volle Rückerstattung. Du entscheidest nach der ersten Session. Nicht vorher. Nicht blind.'
                : "Session 1 Guarantee: If Session 1 doesn't deliver what it promises — no further commitment. Full refund. You decide after the first session. Not before. Not blindly."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const RevenueArchitectureSystem: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleOpenBookingModal = () => setIsBookingModalOpen(true);
    window.addEventListener('openBookingModal', handleOpenBookingModal);
    return () => window.removeEventListener('openBookingModal', handleOpenBookingModal);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <VSLSection />
        <DeliverablesSection />
        <ProgramSection />
        <PreCohortProofSection />
        <CredibilitySection />
        <FoundingFrameSection />
        <ApplicationProcessSection />
        <CohortStartCard />
        <LeadCaptureSection />
        <FAQSection />
        <PricingSection />
      </main>
      <Footer />
      <FilloutBookingModal
        formSlug="inflection-call"
        source="revenue-architecture-system"
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};

export default RevenueArchitectureSystem;
