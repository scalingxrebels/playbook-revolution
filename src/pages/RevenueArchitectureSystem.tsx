import React, { useEffect, useState, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
import FilloutEmbed from '@/components/forms/FilloutEmbed';
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
  TrendingDown,
  BarChart3,
  Timer,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useTrackingParams } from '@/hooks/useUTMParams';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

// ============================================================================
// S1 — HERO (Above the Fold)
// ============================================================================
const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const trustSignals = [
    { icon: Shield, de: 'Session-1-Guarantee', en: 'Session-1-Guarantee' },
    { icon: Clock, de: 'Founding-Preis — nur Cohort 1', en: 'Founding Price — Cohort 1 only' },
    { icon: Users, de: 'Kein Commitment vor dem Gespräch', en: 'No commitment before the conversation' },
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

        {/* Amber Urgency Badge */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Badge variant="gradient">
            <Layers className="w-4 h-4 mr-2" />
            {language === 'de' ? 'GUIDED BUILD · 6 WOCHEN · FOUNDING COHORT' : 'GUIDED BUILD · 6 WEEKS · FOUNDING COHORT'}
          </Badge>
        </div>

        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">
            {language === 'de'
              ? 'GTM Motion, die einschlägt.'
              : 'A GTM Motion That Hits.'}
          </span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'Ein Funnel, der performt.' : 'A Funnel That Performs.'}
          </span>
        </h1>

        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'In 6 Wochen baust du das Revenue System, das das ändert. Strukturiert. Geführt. Live.'
            : 'In 6 weeks you build the Revenue System that changes this. Structured. Guided. Live.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => scrollToSection('apply-section')}
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
              <span>{language === 'de' ? signal.de : signal.en}</span>
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
// S2 — VSL
// ============================================================================
const VSLSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const fallbackLines = language === 'de'
    ? [
        'Die meisten B2B-SaaS-Teams lösen das falsche Problem — und wundern sich, warum der CAC steigt.',
        'The Revenue Architecture System — 6 Wochen, 22 Revenue-Bausteine, vollständiges Revenue System live aufgebaut.',
        'CAC-Reduktion Ø 34%, Win Rate +23 Prozentpunkte, Time-to-Revenue von 90 auf 31 Tage — aus der Analyse von 22 B2B-SaaS-Unternehmen in DACH.',
      ]
    : [
        'Most B2B SaaS teams solve the wrong problem — and wonder why CAC keeps rising.',
        'The Revenue Architecture System — 6 weeks, 22 revenue building blocks, complete Revenue System built live.',
        'CAC reduction avg. 34%, Win Rate +23 percentage points, Time-to-Revenue from 90 to 31 days — from analysis of 22 B2B SaaS companies in DACH.',
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
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">Video</span>
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

        {/* Text Fallback */}
        <div className="space-y-4">
          {fallbackLines.map((line, i) => (
            <p key={i} className={`text-center leading-relaxed ${i === 2 ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// S3 — 22 DELIVERABLES
// ============================================================================
const DeliverablesSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const corePoints = [
    {
      icon: Target,
      titleDe: 'ICP-Profil + Value Stack', titleEn: 'ICP Profile + Value Stack',
      descDe: 'Wer dein Kunde wirklich ist. Was ihn bewegt. Was er zahlt.',
      descEn: 'Who your customer really is. What drives them. What they pay.',
    },
    {
      icon: Layers,
      titleDe: 'Entry Layer + Conversion System', titleEn: 'Entry Layer + Conversion System',
      descDe: 'Wie Traffic zu Leads wird. Wie Leads zu Kunden werden.',
      descEn: 'How traffic becomes leads. How leads become customers.',
    },
    {
      icon: Settings,
      titleDe: 'Revenue OS', titleEn: 'Revenue OS',
      descDe: 'Das System, das alles verbindet. Messbar. Einsatzbereit.',
      descEn: 'The system that connects everything. Measurable. Ready to deploy.',
    },
  ];

  const allDeliverables = language === 'de'
    ? [
        'Marktanalyse', 'Challenge-Solution-Matrix', 'ICP-Profil', 'Customer Journey Map',
        'Value Stack', 'Market Entry Strategy Blueprint', 'Growth Engine Architecture',
        'Asset-Plan & Traffic-Architektur', 'Landing Page Blueprint', 'Form + DOI-Flow',
        'Email Sequencing', 'Asset Stack & Trust Architecture', 'Funnel Blueprint Compiler',
        'Revenue System Architecture', 'Revenue Data Flow & Orchestration', 'Automation Priorities',
        'GTM Execution Stack Map', 'Automation Priority Matrix',
        'SEO Playbook', 'SEA Playbook', 'GEO Playbook', 'Earned Media Playbook', 'Content Flywheel Blueprint',
      ]
    : [
        'Market Analysis', 'Challenge-Solution Matrix', 'ICP Profile', 'Customer Journey Map',
        'Value Stack', 'Market Entry Strategy Blueprint', 'Growth Engine Architecture',
        'Asset Plan & Traffic Architecture', 'Landing Page Blueprint', 'Form + DOI Flow',
        'Email Sequencing', 'Asset Stack & Trust Architecture', 'Funnel Blueprint Compiler',
        'Revenue System Architecture', 'Revenue Data Flow & Orchestration', 'Automation Priorities',
        'GTM Execution Stack Map', 'Automation Priority Matrix',
        'SEO Playbook', 'SEA Playbook', 'GEO Playbook', 'Earned Media Playbook', 'Content Flywheel Blueprint',
      ];

  return (
    <section
      id="deliverables-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Was du baust' : 'What You Build'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? '22 Revenue-Bausteine. Einsatzbereit.' : '22 Revenue Building Blocks. Ready to Deploy.'}
          </h2>
          <p className="text-muted-foreground mb-2">
            {language === 'de'
              ? 'Kein leeres Template. Jedes Deliverable ist ein fertiges Asset für deine GTM-Motion.'
              : 'No empty template. Every deliverable is a finished asset for your GTM motion.'}
          </p>
        </div>

        {/* 3 Core Points */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {corePoints.map((point, index) => (
            <div key={index} className="bg-card/80 backdrop-blur-sm border-2 border-border p-8 hover:border-primary/50 transition-all duration-300">
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

        {/* Flat Deliverables Grid — no session grouping */}
        <div className="flex flex-wrap justify-center gap-3">
          {allDeliverables.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 bg-card/60 border border-border px-4 py-2.5 text-sm text-foreground hover:border-primary/40 transition-colors duration-200"
            >
              <Check className="w-3.5 h-3.5 text-primary shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// S4 — DAS PROBLEM (Reframe)
// ============================================================================
const ProblemReframeSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const comparisons = language === 'de'
    ? [
        { left: 'Kanal optimieren', right: 'ICP-Architektur' },
        { left: 'SDRs einstellen', right: 'Revenue Layer Design' },
        { left: 'Messaging testen', right: 'Funnel-Mechanik' },
        { left: 'Agentur beauftragen', right: 'System-Ownership' },
      ]
    : [
        { left: 'Optimize channels', right: 'ICP Architecture' },
        { left: 'Hire SDRs', right: 'Revenue Layer Design' },
        { left: 'Test messaging', right: 'Funnel Mechanics' },
        { left: 'Hire an agency', right: 'System Ownership' },
      ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`dark-section relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Das ist kein Kanal-Problem.' : "This Is Not a Channel Problem."}
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {language === 'de'
              ? '87% der B2B-SaaS in DACH haben keinen funktionierenden Revenue Layer. '
              : '87% of B2B SaaS in DACH have no functioning Revenue Layer. '}
            <span className="text-muted-foreground/60 text-sm italic">(n=22 · DACH B2B SaaS · 2024–2025)</span>
            {language === 'de'
              ? ' Sie optimieren Kanäle. Sie heuern SDRs an. Sie testen Messaging. Und trotzdem steigt der CAC. Weil das Problem nicht im Kanal liegt — es liegt in der Architektur. Du hast kein Revenue-System. Du hast Einzelteile.'
              : " They optimize channels. They hire SDRs. They test messaging. And CAC still rises. Because the problem isn't in the channel — it's in the architecture. You don't have a Revenue System. You have fragments."}
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-y-4 gap-x-6 items-center">
            {/* Headers */}
            <div className="text-xs font-semibold uppercase tracking-widest text-destructive/80 text-center pb-2 border-b border-border/30">
              {language === 'de' ? 'Was die meisten tun' : 'What most do'}
            </div>
            <div className="pb-2 border-b border-border/30" />
            <div className="text-xs font-semibold uppercase tracking-widest text-accent text-center pb-2 border-b border-border/30">
              {language === 'de' ? 'Was wirklich fehlt' : "What's actually missing"}
            </div>

            {comparisons.map((row, i) => (
              <React.Fragment key={i}>
                <div className="text-muted-foreground text-center py-2">{row.left}</div>
                <div className="text-muted-foreground/40 text-center">→</div>
                <div className="text-foreground font-medium text-center py-2">{row.right}</div>
              </React.Fragment>
            ))}

            {/* Result Row */}
            <div className="text-destructive font-semibold text-center pt-4 border-t border-border/30">
              {language === 'de' ? 'Ergebnis: CAC steigt.' : 'Result: CAC rises.'}
            </div>
            <div className="pt-4 border-t border-border/30" />
            <div className="text-accent font-semibold text-center pt-4 border-t border-border/30">
              {language === 'de' ? 'Ergebnis: CAC sinkt.' : 'Result: CAC drops.'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// S5 — DIE 13% (Credibility)
// ============================================================================
const ResearchCredibilitySection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const stats = [
    {
      icon: TrendingDown, value: 'Ø 34%',
      labelDe: 'CAC sinkt in 6 Monaten', labelEn: 'CAC drops in 6 months',
    },
    {
      icon: BarChart3, value: '+23 PP',
      labelDe: 'Win Rate (15% → 38%)', labelEn: 'Win Rate (15% → 38%)',
    },
    {
      icon: Timer, value: '90 → 31',
      labelDe: 'Tage Time-to-Revenue', labelEn: 'Days Time-to-Revenue',
    },
  ];

  const differences = language === 'de'
    ? [
        'Definierten ICP — nicht eine Zielgruppe',
        'Funnel mit Mechanik — nicht eine Hoffnung',
        'Revenue Layer gebaut — nicht improvisiert',
        'System gehört ihnen — nicht der Agentur',
      ]
    : [
        'Defined ICP — not a target group',
        'Funnel with mechanics — not a hope',
        'Built Revenue Layer — not improvised',
        'System belongs to them — not the agency',
      ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-6">
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de'
              ? '13% haben es gelöst. Hier ist, was sie anders machen.'
              : '13% have solved it. Here is what they do differently.'}
          </h2>
          <p className="text-sm text-muted-foreground/70 italic">
            {language === 'de'
              ? 'Bewusst klein: Tiefenanalyse statt Massenerhebung. n=22 · DACH B2B SaaS · 2024–2025 · R²=0.76'
              : 'Deliberately small: Deep analysis over mass survey. n=22 · DACH B2B SaaS · 2024–2025 · R²=0.76'}
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="bg-card/80 backdrop-blur-sm border-2 border-border p-8 text-center hover:border-accent/40 transition-colors">
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{language === 'de' ? stat.labelDe : stat.labelEn}</p>
            </div>
          ))}
        </div>

        {/* 4 Differences */}
        <div className="max-w-2xl mx-auto">
          <h3 className="font-display text-xl font-bold text-foreground text-center mb-8">
            {language === 'de' ? 'Die 4 Unterschiede' : 'The 4 Differences'}
          </h3>
          <div className="space-y-4">
            {differences.map((diff, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="w-8 h-8 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <p className="text-muted-foreground pt-1">{diff}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// S6 — 6 SESSIONS
// ============================================================================
const ProgramSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const sessions = [
    {
      week: 1,
      titleDe: 'Strategische Grundlagen', titleEn: 'Strategic Foundations',
      outcomeDe: 'Du weißt, in welchem Markt du spielst und wen du ansprichst.',
      outcomeEn: 'You know which market you play in and who you address.',
      deliverables: ['Marktanalyse', 'Challenge-Solution-Matrix', 'ICP-Profil'],
      deliverablesEn: ['Market Analysis', 'Challenge-Solution Matrix', 'ICP Profile'],
    },
    {
      week: 2,
      titleDe: 'Value Stack & Growth Engine', titleEn: 'Value Stack & Growth Engine',
      outcomeDe: 'Du weißt, wie dein ICP kauft — und welcher Funnel-Typ passt.',
      outcomeEn: 'You know how your ICP buys — and which funnel type fits.',
      deliverables: ['Customer Journey', 'Value Stack', 'Market Entry Strategy', 'Growth Engine Architecture'],
      deliverablesEn: ['Customer Journey', 'Value Stack', 'Market Entry Strategy', 'Growth Engine Architecture'],
    },
    {
      week: 3,
      titleDe: 'Entry Layer & Persuasion', titleEn: 'Entry Layer & Persuasion',
      outcomeDe: 'Dein Funnel-Eingang steht. Landing Pages und Forms sind live.',
      outcomeEn: 'Your funnel entry is live. Landing pages and forms are ready.',
      deliverables: ['Channel Playbook', 'Entry Layer Blueprint', 'Persuasion Blueprint'],
      deliverablesEn: ['Channel Playbook', 'Entry Layer Blueprint', 'Persuasion Blueprint'],
    },
    {
      week: 4,
      titleDe: 'Messaging & Funnel-Abschluss', titleEn: 'Messaging & Funnel Completion',
      outcomeDe: 'Dein Funnel konvertiert. Email-Sequenzen laufen. Assets stehen.',
      outcomeEn: 'Your funnel converts. Email sequences are running. Assets are ready.',
      deliverables: ['Email Sequencing', 'Asset Stack', 'Funnel Blueprint'],
      deliverablesEn: ['Email Sequencing', 'Asset Stack', 'Funnel Blueprint'],
    },
    {
      week: 5,
      titleDe: 'Revenue Operating System', titleEn: 'Revenue Operating System',
      outcomeDe: 'Marketing, Sales und CS arbeiten in einer Logik.',
      outcomeEn: 'Marketing, Sales, and CS operate in one logic.',
      deliverables: ['Revenue System Architecture', 'Data Flow', 'Automation Priorities', 'Tech Stack Map'],
      deliverablesEn: ['Revenue System Architecture', 'Data Flow', 'Automation Priorities', 'Tech Stack Map'],
    },
    {
      week: 6,
      titleDe: 'Traffic Activation', titleEn: 'Traffic Activation',
      outcomeDe: 'Dein System bekommt skalierbaren Traffic. Phase II startet.',
      outcomeEn: 'Your system gets scalable traffic. Phase II starts.',
      deliverables: ['SEO', 'SEA', 'GEO', 'Earned Media', 'Content Flywheel'],
      deliverablesEn: ['SEO', 'SEA', 'GEO', 'Earned Media', 'Content Flywheel'],
    },
  ];

  const formatPoints = language === 'de'
    ? [
        '6 Wochen · 1× pro Woche · 4h Live',
        '2–3h Async-Arbeit zwischen den Sessions',
        '3× Expert Sessions à 1h (1:1 mit Michel)',
        'Alle 22 Revenue-Bausteine als fertige Assets',
        'Lifetime-Zugang zu allen Materialien',
      ]
    : [
        '6 weeks · 1× per week · 4h live',
        '2–3h async work between sessions',
        '3× Expert Sessions à 1h (1:1 with Michel)',
        'All 22 revenue building blocks as finished assets',
        'Lifetime access to all materials',
      ];

  return (
    <section
      id="program-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`dark-section relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
            <div key={session.week} className="bg-card/10 backdrop-blur-sm border-2 border-border/50 p-6 hover:border-primary/30 transition-all duration-300">
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

        {/* Closing Quote */}
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
// S7 — DIFFERENZIERUNG
// ============================================================================
const DifferentiationSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const rows = language === 'de'
    ? [
        { label: 'Was du bekommst', kurs: 'Wissen', agentur: 'Deliverables', ras: 'Dein eigenes System' },
        { label: 'Wer baut', kurs: 'Du alleine', agentur: 'Sie', ras: 'Du — mit Anleitung' },
        { label: 'Ownership', kurs: 'Unklar', agentur: 'Bei Agentur', ras: '100% bei dir' },
        { label: 'Zeitrahmen', kurs: 'Selbststudium', agentur: '3–6 Monate', ras: '6 Wochen live' },
        { label: 'Preis', kurs: '€500–€3.500', agentur: '€15.000+', ras: '€6.900 (Founding)' },
        { label: 'Ergebnis', kurs: 'Zertifikat', agentur: 'Abhängigkeit', ras: 'Fertiges Revenue System' },
      ]
    : [
        { label: 'What you get', kurs: 'Knowledge', agentur: 'Deliverables', ras: 'Your own system' },
        { label: 'Who builds', kurs: 'You alone', agentur: 'They do', ras: 'You — with guidance' },
        { label: 'Ownership', kurs: 'Unclear', agentur: 'With agency', ras: '100% yours' },
        { label: 'Timeframe', kurs: 'Self-study', agentur: '3–6 months', ras: '6 weeks live' },
        { label: 'Price', kurs: '€500–€3,500', agentur: '€15,000+', ras: '€6,900 (Founding)' },
        { label: 'Result', kurs: 'Certificate', agentur: 'Dependency', ras: 'Complete Revenue System' },
      ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de'
              ? 'Das ist kein Kurs. Keine Agentur. Kein Consulting.'
              : "This Is Not a Course. Not an Agency. Not Consulting."}
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-4 px-3 text-muted-foreground font-medium" />
                <th className="text-center py-4 px-3 text-muted-foreground font-medium">
                  {language === 'de' ? 'Kurs' : 'Course'}
                </th>
                <th className="text-center py-4 px-3 text-muted-foreground font-medium">
                  {language === 'de' ? 'Agentur' : 'Agency'}
                </th>
                <th className="text-center py-4 px-3 text-foreground font-bold">
                  Revenue Architecture System
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-3 px-3 text-muted-foreground font-medium">{row.label}</td>
                  <td className="py-3 px-3 text-center text-muted-foreground">{row.kurs}</td>
                  <td className="py-3 px-3 text-center text-muted-foreground">{row.agentur}</td>
                  <td className="py-3 px-3 text-center text-foreground font-semibold bg-primary/5">{row.ras}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-muted-foreground/60 text-center mt-4 italic">
          {language === 'de' ? 'z.B. Reforge' : 'e.g. Reforge'}
        </p>

        <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto leading-relaxed">
          {language === 'de'
            ? 'Du baust dein Revenue System selbst — mit direkter Anleitung, Live-Feedback und 22 Deliverables, die dir gehören. Für immer.'
            : 'You build your Revenue System yourself — with direct guidance, live feedback, and 22 deliverables that belong to you. Forever.'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// S8 — ÜBER MICHEL + PROOF
// ============================================================================
const CredibilitySection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const quotes = [
    {
      textDe: '„Wir haben jahrelang den Kanal optimiert — und das eigentliche Problem übersehen."',
      textEn: '"We optimized channels for years — and missed the actual problem."',
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
      className={`dark-section relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
          {/* Photo */}
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

          {/* Bio */}
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
        <div className="grid md:grid-cols-3 gap-6 mb-6">
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

        <p className="text-xs text-muted-foreground/50 text-center mb-4">
          {language === 'de'
            ? 'Zitate aus Gesprächen vor Cohort 1 — Namen auf Wunsch anonymisiert.'
            : 'Quotes from conversations before Cohort 1 — names anonymized by request.'}
        </p>
        <p className="text-xs text-muted-foreground/60 text-center">
          {language === 'de'
            ? 'Du willst direkt mit einem dieser Menschen sprechen? Schreib mir: '
            : 'Want to speak directly with one of these people? Write me: '}
          <a href="mailto:michel@scalingx.io" className="text-primary hover:text-primary/80 transition-colors">
            michel@scalingx.io
          </a>
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// S9 — PRICING
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
      targetDe: 'Solo-Founder oder kleine Teams im Aufbau',
      targetEn: 'Solo founders or small teams in the building phase',
      features: language === 'de'
        ? ['6× Live-Sessions (4h je)', '22 Revenue-Bausteine', '1× Expert-Session 1:1 (1h)']
        : ['6× Live Sessions (4h each)', '22 Revenue building blocks', '1× Expert Session 1:1 (1h)'],
    },
    {
      name: 'Plus',
      price: '€8.900',
      priceC2: '€10.900',
      recommended: true,
      targetDe: 'Teams mit aktivem GTM-Betrieb und Optimierungsbedarf',
      targetEn: 'Teams with active GTM operations and optimization needs',
      features: language === 'de'
        ? ['6× Live-Sessions (4h je)', '22 Revenue-Bausteine', '3× Expert-Sessions 1:1 (je 1h)', 'Async-Review deiner Deliverables']
        : ['6× Live Sessions (4h each)', '22 Revenue building blocks', '3× Expert Sessions 1:1 (1h each)', 'Async review of your deliverables'],
    },
    {
      name: 'VIP',
      price: '€12.900',
      priceC2: '€14.900',
      recommended: false,
      targetDe: 'Unternehmen, die ihr System nach Woche 6 direkt aktivieren wollen',
      targetEn: 'Companies that want to activate their system right after week 6',
      features: language === 'de'
        ? ['6× Live-Sessions (4h je)', '22 Revenue-Bausteine', '6× Expert-Sessions 1:1 (je 1h)', 'Async-Review deiner Deliverables', 'System-Audit nach Woche 6 (90 Min)', '30-Tage-Follow-up']
        : ['6× Live Sessions (4h each)', '22 Revenue building blocks', '6× Expert Sessions 1:1 (1h each)', 'Async review of your deliverables', 'System audit after week 6 (90 min)', '30-day follow-up'],
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
        <div className="text-center mb-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">Pricing</span>
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? 'Angebot für Cohort 1' : 'Offer for Cohort 1'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'de'
              ? 'Drei Optionen. Eine Entscheidung: Welches System brauchst du?'
              : 'Three options. One decision: Which system do you need?'}
          </p>
        </div>

        {/* Urgency Box */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-accent/10 border border-accent/40 px-6 py-3 text-center">
            <p className="text-sm text-accent font-semibold">
              {language === 'de'
                ? 'Founding Price gilt nur für Cohort 1 — ab Cohort 2: €8.900 / €10.900 / €14.900'
                : 'Founding Price valid for Cohort 1 only — from Cohort 2: €8,900 / €10,900 / €14,900'}
            </p>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-card/10 backdrop-blur-sm border-2 p-8 flex flex-col ${
                tier.recommended ? 'border-accent shadow-accent-glow' : 'border-border/50 hover:border-primary/30'
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

              <p className="text-xs text-muted-foreground mb-4 italic">
                {language === 'de' ? tier.targetDe : tier.targetEn}
              </p>

              <div className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full font-bold uppercase tracking-wide ${
                  tier.recommended
                    ? 'bg-gradient-accent text-accent-foreground shadow-accent-glow'
                    : 'bg-primary text-primary-foreground'
                }`}
                onClick={() => document.getElementById('apply-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {language === 'de' ? 'Jetzt bewerben' : 'Apply Now'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mb-16">
          {language === 'de'
            ? '3× monatliche Raten möglich (alle Tiers). Details im Gespräch. Expert Session (€890) wird auf Programmpreis angerechnet.'
            : '3× monthly installments available (all tiers). Details in conversation. Expert Session (€890) credited toward program price.'}
        </p>

        {/* Session-1-Guarantee */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-accent/5 border-2 border-accent/20 p-8 text-center">
            <Shield className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Session-1-Guarantee
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {language === 'de'
                ? 'Wenn Session 1 nicht hält, was sie verspricht — kein weiteres Commitment. Volle Rückerstattung. Du entscheidest nach der ersten Session.'
                : "If Session 1 doesn't deliver what it promises — no further commitment. Full refund. You decide after the first session."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// S10 — ICP-FILTER
// ============================================================================
const ICPFilterSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const forYou = language === 'de'
    ? [
        'Head of Growth, VP Marketing, CRO, CMO oder Founder mit GTM-Verantwortung',
        '€1M–€20M ARR · B2B SaaS · DACH',
        'PMF vorhanden — aber CAC steigt oder Win Rate sinkt',
        'Du willst ein System bauen — nicht einen Kurs absolvieren',
        '6–7 Stunden/Woche für 6 Wochen investierbar (4h Live + 2–3h Async)',
      ]
    : [
        'Head of Growth, VP Marketing, CRO, CMO or Founder with GTM responsibility',
        '€1M–€20M ARR · B2B SaaS · DACH',
        'PMF achieved — but CAC is rising or Win Rate is dropping',
        'You want to build a system — not complete a course',
        '6–7 hours/week for 6 weeks available (4h live + 2–3h async)',
      ];

  const notForYou = language === 'de'
    ? [
        'Du suchst eine Agentur, die das für dich baut',
        'Pre-revenue oder pre-PMF',
        'Du willst ein Zertifikat — nicht ein System',
        'Keine Entscheidungsfreiheit über GTM-Investitionen',
      ]
    : [
        "You're looking for an agency to build it for you",
        'Pre-revenue or pre-PMF',
        'You want a certificate — not a system',
        'No decision-making authority over GTM investments',
      ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-md text-foreground">
            {language === 'de' ? 'Für wen ist das — und für wen nicht.' : 'Who This Is For — and Who It Is Not.'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For You */}
          <div className="bg-card/80 border-2 border-accent/30 p-8">
            <h3 className="font-display text-lg font-bold text-accent mb-6">
              {language === 'de' ? 'Für dich, wenn:' : 'For you, if:'}
            </h3>
            <div className="space-y-4">
              {forYou.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not For You */}
          <div className="bg-card/80 border-2 border-destructive/20 p-8">
            <h3 className="font-display text-lg font-bold text-destructive mb-6">
              {language === 'de' ? 'Nicht für dich, wenn:' : 'Not for you, if:'}
            </h3>
            <div className="space-y-4">
              {notForYou.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
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
// S11 — FAQ
// ============================================================================
const FAQSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const faqItems = [
    {
      qDe: 'Ich habe wenig Zeit. Wie viel Aufwand ist das wirklich?',
      qEn: 'I have limited time. How much effort is this really?',
      aDe: '4h Live pro Woche + 2–3h Async. Wer 6–7h pro Woche investieren kann, baut in 6 Wochen ein System, das danach für sich arbeitet.',
      aEn: '4h live per week + 2–3h async. If you can invest 6–7h per week, you build a system in 6 weeks that works for you afterward.',
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
        <h2 className="font-display text-display-md text-foreground text-center mb-12">
          {language === 'de' ? 'Häufige Fragen' : 'Frequently Asked Questions'}
        </h2>
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
// S12 — APPLY-FORM (FilloutEmbed Placeholder)
// ============================================================================
const ApplyFormSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="apply-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`dark-section relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        {/* Urgency Badge */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/15 border border-accent/40 text-accent text-sm font-semibold rounded-full">
            <Zap className="w-4 h-4" />
            {language === 'de'
              ? 'Noch Plätze von 12 Founding-Plätzen verfügbar'
              : 'Founding seats still available out of 12'}
          </span>
        </div>

        <div className="text-center mb-8">
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? 'Bereit? Bewirb dich — kostenlos, 2 Minuten.' : 'Ready? Apply — free, 2 minutes.'}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {language === 'de'
              ? 'Ich prüfe jede Bewerbung persönlich. Wenn ich glaube, dass das Programm passt, melde ich mich innerhalb von 48h.'
              : "I review every application personally. If I believe the program is a fit, I'll get back to you within 48h."}
          </p>
        </div>

        {/* Fillout Embed Placeholder */}
        <div className="bg-card/10 backdrop-blur-sm border-2 border-border/50 p-2">
          <FilloutEmbed
            formId="ras-apply-placeholder"
            formType="inquiry"
            source="ras-apply"
            height={600}
          />
        </div>

        {/* Micro-Copy */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
          <span>{language === 'de' ? 'Kostenlos' : 'Free'}</span>
          <span>·</span>
          <span>{language === 'de' ? '2 Minuten' : '2 minutes'}</span>
          <span>·</span>
          <span>{language === 'de' ? 'Kein Commitment' : 'No commitment'}</span>
          <span>·</span>
          <span>{language === 'de' ? 'Antwort innerhalb 48h' : 'Response within 48h'}</span>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// S13 — WARTELISTEN-CTA
// ============================================================================
const WaitlistSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const trackingParams = useTrackingParams();
  const { toast } = useToast();

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const emailSchema = z.string().email();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(language === 'de' ? 'Bitte gib eine gültige E-Mail-Adresse ein.' : 'Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      const { error: dbError } = await supabase.from('download_leads').insert({
        email,
        name: name || null,
        asset_id: 'revenue-system-whitepaper',
        asset_type: 'pdf',
        utm_source: trackingParams.utm_source || null,
        utm_medium: trackingParams.utm_medium || null,
        utm_campaign: trackingParams.utm_campaign || null,
        utm_content: trackingParams.utm_content || null,
        utm_term: trackingParams.utm_term || null,
        page_url: trackingParams.page_url || null,
        referrer: trackingParams.referrer || null,
      });

      if (dbError) throw dbError;

      setIsSuccess(true);
      toast({
        title: language === 'de' ? 'Download gestartet!' : 'Download started!',
        description: language === 'de' ? 'Überprüfe deinen Downloads-Ordner.' : 'Check your downloads folder.',
      });

      setTimeout(() => {
        window.open('/downloads/fix-growth-sample.pdf', '_blank');
      }, 500);
    } catch (err) {
      console.error('Lead capture error:', err);
      toast({
        variant: 'destructive',
        title: language === 'de' ? 'Fehler' : 'Error',
        description: language === 'de' ? 'Bitte versuche es erneut.' : 'Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [email, name, language, trackingParams, toast]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ backgroundColor: '#0D1F3C' }}
    >
      <div className="container max-w-2xl mx-auto px-6 relative z-10 text-center">
        {isSuccess ? (
          <div className="space-y-4">
            <CheckCircle className="w-16 h-16 text-accent mx-auto" />
            <h3 className="font-display text-2xl font-bold text-white">
              {language === 'de' ? 'Download gestartet!' : 'Download started!'}
            </h3>
            <p className="text-white/70">
              {language === 'de' ? 'Überprüfe deinen Downloads-Ordner.' : 'Check your downloads folder.'}
            </p>
          </div>
        ) : (
          <>
            <h3 className="font-display text-display-sm text-white mb-4">
              {language === 'de' ? 'Bereit, mehr zu erfahren?' : 'Ready to learn more?'}
            </h3>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              {language === 'de'
                ? 'Trag dich ein. Du erhältst sofort „Das Revenue System" als PDF — und erfährst als Erste/r, wenn die nächste Kohorte öffnet. Kostenlos. Kein Commitment. Kein Verkaufsdruck.'
                : 'Sign up. You\'ll instantly receive "The Revenue System" as a PDF — and be the first to know when the next cohort opens. Free. No commitment. No sales pressure.'}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-4">
              <Input
                type="text"
                placeholder={language === 'de' ? 'Vorname' : 'First name'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
                className="flex-1 h-14 text-base bg-white/10 border-white/20 text-white placeholder:text-white/40"
              />
              <Input
                type="email"
                placeholder={language === 'de' ? 'E-Mail' : 'Email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className={`flex-1 h-14 text-base bg-white/10 border-white/20 text-white placeholder:text-white/40 ${error ? 'border-destructive' : ''}`}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="outline"
                size="xl"
                className="border-primary text-primary hover:bg-primary/10 font-bold px-8 whitespace-nowrap"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    {language === 'de' ? 'PDF sichern' : 'Get PDF'}
                  </>
                )}
              </Button>
            </form>

            {error && <p className="text-sm text-destructive mb-2">{error}</p>}

            <p className="text-xs text-white/40">
              {language === 'de' ? 'Kein Spam. Jederzeit abmeldbar.' : 'No spam. Unsubscribe anytime.'}
            </p>
          </>
        )}
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const RevenueArchitectureSystem: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

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
        <ProblemReframeSection />
        <ResearchCredibilitySection />
        <ProgramSection />
        <DifferentiationSection />
        <CredibilitySection />
        <PricingSection />
        <ICPFilterSection />
        <FAQSection />
        <ApplyFormSection />
        <WaitlistSection />
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
