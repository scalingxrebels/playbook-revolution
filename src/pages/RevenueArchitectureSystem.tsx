import React, { useEffect, useState } from 'react';
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
  X,
  Play,
  Users,
  Shield,
  Zap,
  Award,
  Star,
  ExternalLink,
  Loader2,
  CheckCircle,
  Calendar,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useTrackingParams } from '@/hooks/useUTMParams';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

// ============================================================================
// S1: HERO
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

        <Badge className="mb-8 animate-fade-in bg-amber-500/20 text-amber-400 border-amber-500/30" style={{ animationDelay: '0.1s' }}>
          <Zap className="w-4 h-4 mr-2" />
          Founding Cohort · {language === 'de' ? 'Limitierte Plätze' : 'Limited Seats'}
        </Badge>

        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">
            {language === 'de'
              ? 'Dein CAC steigt. Deine Conversion sinkt.'
              : 'Your CAC Is Rising. Your Conversion Is Dropping.'}
          </span>
          <span className="block text-[#3B82F6]">
            {language === 'de'
              ? 'Weil nichts davon systematisch zusammenhängt.'
              : 'Because none of it is systematically connected.'}
          </span>
        </h1>

        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'The Revenue Architecture System: 6 Wochen. 22 Deliverables. Dein vollständiges Revenue System — gebaut, nicht erklärt.'
            : 'The Revenue Architecture System: 6 weeks. 22 deliverables. Your complete Revenue System — built, not explained.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => document.getElementById('apply-section')?.scrollIntoView({ behavior: 'smooth' })}
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
            {language === 'de' ? 'Mehr erfahren' : 'Learn More'}
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {language === 'de' ? 'Kostenlos bewerben · 2 Minuten' : 'Apply for free · 2 minutes'}
        </p>
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
// S2: VSL
// ============================================================================
const VSLSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

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
            Video
          </span>
          <h2 className="font-display text-display-md text-foreground">
            {language === 'de'
              ? 'Du hast neue Kanäle getestet. Neue Botschaften. Neue Segmente. Warum greift trotzdem nichts systematisch?'
              : 'You tested new channels. New messages. New segments. Why does nothing work systematically?'}
          </h2>
        </div>

        <div className="relative aspect-video bg-card/50 backdrop-blur-sm border-2 border-border mb-12 flex items-center justify-center group cursor-pointer hover:border-primary/50 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="relative flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-accent ml-1" />
            </div>
            <p className="text-muted-foreground text-sm">
              {language === 'de' ? '8–12 Min · Michel Lason' : '8–12 min · Michel Lason'}
            </p>
          </div>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground text-center mb-4">
            {language === 'de' ? 'Kurz zusammengefasst:' : 'In short:'}
          </p>
          {[
            language === 'de'
              ? '→ 87% der B2B SaaS-Unternehmen im DACH-Raum haben kein funktionierendes Revenue System'
              : '→ 87% of B2B SaaS companies in the DACH region don\'t have a functioning Revenue System',
            language === 'de'
              ? '→ Sie optimieren Einzelteile — statt das System zu bauen'
              : '→ They optimize individual parts — instead of building the system',
            language === 'de'
              ? '→ Das Ergebnis: CAC steigt. Conversion sinkt. Wachstum bleibt zufällig.'
              : '→ The result: CAC rises. Conversion drops. Growth stays random.',
            language === 'de'
              ? '→ 22–58% CAC-Reduktion in validierten Engagements (n=22 · DACH B2B SaaS · 2024–2025)'
              : '→ 22–58% CAC reduction in validated engagements (n=22 · DACH B2B SaaS · 2024–2025)',
          ].map((line, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">{line}</p>
          ))}
          <p className="text-xs text-muted-foreground/60 text-center mt-4 italic">
            {language === 'de' ? 'Bewusst klein: Tiefenanalyse statt Massenerhebung.' : 'Deliberately small: deep analysis over mass surveys.'}
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// S3: PROBLEM-REFRAME
// ============================================================================
const ProblemReframeSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`dark-section relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="font-display text-display-md text-foreground text-center mb-12">
          {language === 'de'
            ? 'Du drehst an Stellschrauben. Das System bleibt kaputt.'
            : 'You\'re turning levers. The system stays broken.'}
        </h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            {language === 'de'
              ? 'Mehr Budget. Neues Tool. Anderer Kanal.'
              : 'More budget. New tool. Different channel.'}
          </p>
          <p>
            {language === 'de'
              ? 'Jede dieser Entscheidungen macht Sinn — isoliert betrachtet.'
              : 'Each of these decisions makes sense — in isolation.'}
          </p>
          <p>
            {language === 'de'
              ? 'Aber wenn kein System dahintersteht, das die Teile verbindet, bleibt Wachstum das, was es bei den meisten ist: zufällig, nicht wiederholbar, nicht skalierbar.'
              : 'But without a system connecting the parts, growth stays what it is for most: random, not repeatable, not scalable.'}
          </p>
          <p className="text-foreground font-semibold text-lg text-center pt-4">
            {language === 'de'
              ? 'Das ist kein Taktik-Problem. Das ist ein Architektur-Problem.'
              : 'This is not a tactics problem. This is an architecture problem.'}
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// S4: WAS DU BAUST (5 Layer + Käufer-Übersetzung)
// ============================================================================
const LayerSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const layers = [
    {
      num: 1,
      titleDe: 'ICP & Markt', titleEn: 'ICP & Market',
      descDe: 'Wer kauft — und warum', descEn: 'Who buys — and why',
      missingDe: 'Jede Botschaft trifft jeden. Niemand fühlt sich angesprochen.', missingEn: 'Every message hits everyone. No one feels addressed.',
    },
    {
      num: 2,
      titleDe: 'Value Stack & Messaging', titleEn: 'Value Stack & Messaging',
      descDe: 'Was du verkaufst — in Käufersprache', descEn: 'What you sell — in buyer language',
      missingDe: 'Dein Angebot klingt wie alle anderen. Kein Preisanker.', missingEn: 'Your offer sounds like everyone else\'s. No price anchor.',
    },
    {
      num: 3,
      titleDe: 'Entry Layer', titleEn: 'Entry Layer',
      descDe: 'Wie Leads reinkommen', descEn: 'How leads come in',
      missingDe: 'Traffic landet auf Seiten, die nicht konvertieren. CAC steigt.', missingEn: 'Traffic lands on pages that don\'t convert. CAC rises.',
    },
    {
      num: 4,
      titleDe: 'Funnel & Nurture', titleEn: 'Funnel & Nurture',
      descDe: 'Wie Leads zu Kunden werden', descEn: 'How leads become customers',
      missingDe: 'Leads versickern. Sales arbeitet an unqualifizierten Kontakten.', missingEn: 'Leads leak. Sales works on unqualified contacts.',
    },
    {
      num: 5,
      titleDe: 'Revenue OS', titleEn: 'Revenue OS',
      descDe: 'Wie das System läuft und skaliert', descEn: 'How the system runs and scales',
      missingDe: 'Wachstum bleibt Handarbeit. Kein System, das sich selbst trägt.', missingEn: 'Growth stays manual. No self-sustaining system.',
    },
  ];

  return (
    <section
      id="deliverables-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Was du baust' : 'What You Build'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-2">
            The Revenue Architecture System
          </h2>
          <p className="text-xl text-muted-foreground">
            {language === 'de'
              ? '5 Layer. Einer baut auf dem anderen auf.'
              : '5 layers. Each builds on the next.'}
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {layers.map((layer) => (
            <div key={layer.num} className="bg-card/50 backdrop-blur-sm border border-border/50 p-5 grid md:grid-cols-[auto_1fr_1fr] gap-4 items-start">
              <span className="text-sm font-bold text-accent shrink-0 mt-0.5">Layer {layer.num}</span>
              <div>
                <span className="font-semibold text-foreground">{language === 'de' ? layer.titleDe : layer.titleEn}</span>
                <span className="text-muted-foreground ml-3 text-sm">{language === 'de' ? layer.descDe : layer.descEn}</span>
              </div>
              <p className="text-sm text-destructive/80 italic">
                {language === 'de' ? layer.missingDe : layer.missingEn}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground">
          {language === 'de'
            ? 'Alle 5 Layer. In 6 Wochen. Als fertige Deliverables — nicht als Theorie.'
            : 'All 5 layers. In 6 weeks. As finished deliverables — not theory.'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// S5: 22 DELIVERABLES (NEW)
// ============================================================================
const DeliverablesListSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const sessions = [
    { label: language === 'de' ? 'SESSION 1 — Strategie & ICP' : 'SESSION 1 — Strategy & ICP', items: ['D01 · Marktanalyse & Wettbewerb', 'D02 · Challenge-Solution-Matrix', 'D03 · ICP-Profil'] },
    { label: language === 'de' ? 'SESSION 2 — Value Stack & Growth Engine' : 'SESSION 2 — Value Stack & Growth Engine', items: ['D04 · Customer Journey Map', 'D05 · Value Stack', 'D06 · Market Entry Strategy Blueprint', 'D07 · Growth Engine Architecture'] },
    { label: language === 'de' ? 'SESSION 3 — Entry Layer & Persuasion' : 'SESSION 3 — Entry Layer & Persuasion', items: ['D08 · Asset-Plan & Traffic-Architektur', 'D09a · Landing Page Blueprint', 'D09b · Form + DOI-Flow'] },
    { label: language === 'de' ? 'SESSION 4 — Messaging & Funnel' : 'SESSION 4 — Messaging & Funnel', items: ['D10 · Email Sequencing Blueprint', 'D11 · Asset Stack & Trust Architecture', 'D12 · Funnel Blueprint'] },
    { label: language === 'de' ? 'SESSION 5 — Revenue Operating System' : 'SESSION 5 — Revenue Operating System', items: ['D13 · Revenue System Architecture', 'D14 · Revenue Data Flow & Orchestration', 'D15 · Automation Priorities Playbook', 'D16 · GTM Execution Stack Map', 'D17 · GTM Stack Evaluation Report'] },
    { label: language === 'de' ? 'SESSION 6 — Traffic Activation' : 'SESSION 6 — Traffic Activation', items: ['D18 · SEO Architecture', 'D19 · SEA Blueprint', 'D20 · GEO Strategy', 'D21 · Earned Media & Content Flywheel', 'D22 · Launch Readiness Gate'] },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`dark-section relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? '22 Deliverables. Einsatzbereit nach Session 6.' : '22 Deliverables. Ready to deploy after Session 6.'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'de'
              ? 'Kein leeres Template. Kein Workbook. Für dein Business gebaut.'
              : 'No empty template. No workbook. Built for your business.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {sessions.map((session, idx) => (
            <div key={idx} className="bg-card/10 backdrop-blur-sm border border-border/50 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">{session.label}</h3>
              <div className="space-y-2">
                {session.items.map((item, i) => (
                  <p key={i} className="text-sm text-muted-foreground">{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground font-medium text-lg">
          {language === 'de'
            ? '22 fertige Revenue-Bausteine. Dein System — gebaut nach Session 6.'
            : '22 finished revenue building blocks. Your system — built after Session 6.'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// S6: 6 SESSIONS
// ============================================================================
const SessionsSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const sessions = [
    { num: 'S1', titleDe: 'Strategie & ICP', titleEn: 'Strategy & ICP', dels: 'D01 · D02 · D03' },
    { num: 'S2', titleDe: 'Value Stack & Growth Engine', titleEn: 'Value Stack & Growth Engine', dels: 'D04 · D05 · D06 · D07' },
    { num: 'S3', titleDe: 'Entry Layer & Persuasion', titleEn: 'Entry Layer & Persuasion', dels: 'D08 · D09a · D09b' },
    { num: 'S4', titleDe: 'Messaging & Funnel-Abschluss', titleEn: 'Messaging & Funnel Completion', dels: 'D10 · D11 · D12' },
    { num: 'S5', titleDe: 'Revenue Operating System', titleEn: 'Revenue Operating System', dels: 'D13 · D14 · D15 · D16 · D17' },
    { num: 'S6', titleDe: 'Traffic Activation', titleEn: 'Traffic Activation', dels: 'D18 · D19 · D20 · D21 · D22' },
  ];

  return (
    <section
      id="program-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Das Programm' : 'The Program'}
          </span>
          <h2 className="font-display text-display-md text-foreground">
            {language === 'de' ? '6 Sessions. 6 Wochen. Ein System.' : '6 Sessions. 6 Weeks. One System.'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sessions.map((s) => (
            <div key={s.num} className="bg-card/80 backdrop-blur-sm border-2 border-border/50 p-6 hover:border-primary/30 transition-all duration-300">
              <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">{s.num}</div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {language === 'de' ? s.titleDe : s.titleEn}
              </h3>
              <p className="text-sm text-muted-foreground font-mono">{s.dels}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// S7: FORMAT & UMFANG
// ============================================================================
const FormatSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`dark-section relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="font-display text-display-sm text-foreground text-center mb-12">
          {language === 'de' ? 'Was dich das kostet — an Zeit.' : 'What it costs you — in time.'}
        </h2>

        <div className="bg-card/10 backdrop-blur-sm border-2 border-border/50 p-8 mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-6">Format</p>
          <div className="space-y-3 text-muted-foreground">
            <p>├── 6 Live-Sessions à 4h ({language === 'de' ? 'online · Gruppe · max. 12 Teilnehmer' : 'online · group · max. 12 participants'})</p>
            <p>├── {language === 'de' ? 'ca. 2–3h Async-Arbeit pro Woche (zwischen den Sessions)' : 'approx. 2–3h async work per week (between sessions)'}</p>
            <p>├── Peer Review {language === 'de' ? 'in jeder Session — strukturiert, nicht optional' : 'in every session — structured, not optional'}</p>
            <p>└── 1:1 Expert Sessions {language === 'de' ? 'je nach Tier' : 'depending on tier'}</p>
          </div>
          <div className="mt-6 pt-6 border-t border-border/50">
            <p className="text-foreground font-semibold">
              {language === 'de' ? 'GESAMT: ca. 6–7h pro Woche · 6 Wochen' : 'TOTAL: approx. 6–7h per week · 6 weeks'}
            </p>
          </div>
        </div>

        <div className="bg-card/10 backdrop-blur-sm border border-border/30 p-6">
          <div className="space-y-2 text-sm">
            <p className="text-destructive/80">✗ {language === 'de' ? 'Webinar-Modus' : 'Webinar mode'}</p>
            <p className="text-destructive/80">✗ {language === 'de' ? 'Vorlesungen ohne Umsetzung' : 'Lectures without implementation'}</p>
            <p className="text-accent">✓ {language === 'de' ? 'Du baust in der Session — nicht danach' : 'You build in the session — not after'}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// S8: ICP-FILTER
// ============================================================================
const ICPFilterSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const forYou = language === 'de'
    ? [
        'B2B SaaS · €1M–€20M ARR',
        'DACH-Raum',
        'Founder, CEO, VP Growth/Marketing',
        'Du willst ein System — kein Template',
        'Tech-enabled Services (B2B)',
      ]
    : [
        'B2B SaaS · €1M–€20M ARR',
        'DACH region',
        'Founder, CEO, VP Growth/Marketing',
        'You want a system — not a template',
        'Tech-enabled services (B2B)',
      ];

  const notForYou = language === 'de'
    ? [
        'Pre-Revenue / Ideen-Phase',
        'Agencies, Freelancer, Coaches',
        'Wer ein Rezept sucht, kein System',
        'Wer keine 6–7h/Woche investieren kann',
        'Wer Garantien ohne Einsatz erwartet',
      ]
    : [
        'Pre-Revenue / idea stage',
        'Agencies, freelancers, coaches',
        'Looking for a recipe, not a system',
        'Can\'t invest 6–7h/week',
        'Expects guarantees without effort',
      ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-md text-foreground">
            {language === 'de' ? 'Für wen es passt — und für wen nicht.' : 'Who it\'s for — and who it\'s not.'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-accent/5 border-2 border-accent/20 p-8">
            <h3 className="font-display text-lg font-bold text-foreground mb-6">
              {language === 'de' ? 'Für dich' : 'For you'}
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
          <div className="bg-card/10 border-2 border-border/50 p-8">
            <h3 className="font-display text-lg font-bold text-foreground mb-6">
              {language === 'de' ? 'Nicht für dich' : 'Not for you'}
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

        <p className="text-center text-sm text-muted-foreground italic">
          {language === 'de'
            ? 'Wer links steht, filtert sich selbst heraus — bevor er das Formular sieht. Das ist Absicht.'
            : 'Those on the left self-select out — before they see the form. That\'s by design.'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// S9: PRICING
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
      features: language === 'de'
        ? ['6 × 4h Live-Sessions', '1 × 1h Expert Session', 'Peer Group ✓', 'Async-Feedback: Gruppe']
        : ['6 × 4h live sessions', '1 × 1h expert session', 'Peer group ✓', 'Async feedback: group'],
    },
    {
      name: 'Plus',
      price: '€8.900',
      priceC2: '€10.900',
      recommended: true,
      features: language === 'de'
        ? ['6 × 4h Live-Sessions', '2 × 1h Expert Sessions', 'Peer Group ✓', 'Async-Feedback: Gruppe']
        : ['6 × 4h live sessions', '2 × 1h expert sessions', 'Peer group ✓', 'Async feedback: group'],
    },
    {
      name: 'VIP',
      price: '€14.900',
      priceC2: '€16.900',
      recommended: false,
      features: language === 'de'
        ? ['6 × 4h Live-Sessions', '4 × 1h Expert Sessions', '1:1 Review jede Woche ✓', 'Peer Group ✓', 'Async-Feedback: Direkt mit Michel']
        : ['6 × 4h live sessions', '4 × 1h expert sessions', '1:1 review every week ✓', 'Peer group ✓', 'Async feedback: directly with Michel'],
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
        {/* Trust Bridge BEFORE Pricing */}
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
          {language === 'de'
            ? 'Das Programm kostet einen Bruchteil dessen, was ein externer Berater für denselben Scope berechnen würde — und du behältst alles. Kein Retainer. Kein Folgeauftrag. Dein System gehört dir.'
            : 'The program costs a fraction of what an external consultant would charge for the same scope — and you keep everything. No retainer. No follow-up engagement. Your system is yours.'}
        </p>

        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            Pricing
          </span>
          <h2 className="font-display text-display-md text-foreground">
            {language === 'de' ? 'Dein Investment.' : 'Your Investment.'}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
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
                <span className="text-sm text-muted-foreground ml-1">{language === 'de' ? 'zzgl. MwSt.' : 'excl. VAT'}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-1">
                <span className="text-accent text-xs">✓ Founding-Preis</span>
              </p>
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

              <Button
                className={`w-full font-bold uppercase tracking-wide ${
                  tier.recommended
                    ? 'bg-gradient-accent text-accent-foreground shadow-accent-glow'
                    : 'bg-primary text-primary-foreground'
                }`}
                onClick={() => document.getElementById('apply-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {language === 'de' ? 'Early Access sichern' : 'Secure Early Access'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Sweet-Spot Frame */}
        <div className="max-w-3xl mx-auto mb-6">
          <div className="bg-accent/5 border border-accent/20 p-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">Plus {language === 'de' ? 'ist der Sweet Spot' : 'is the sweet spot'}</span>
              {' — '}
              {language === 'de'
                ? 'für Teams, die nicht nur das System bauen, sondern es direkt auf ihren Kontext anwenden wollen. 2 Expert Sessions mit Michel: eine nach Session 2 (wenn das Fundament steht), eine nach Session 4 (wenn der Funnel gebaut ist). Genau dann, wenn du die wichtigsten Entscheidungen triffst.'
                : 'for teams that don\'t just want to build the system, but apply it directly to their context. 2 expert sessions with Michel: one after Session 2 (when the foundation is set), one after Session 4 (when the funnel is built). Exactly when you\'re making the most important decisions.'}
            </p>
          </div>
        </div>

        {/* VIP Frame */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-card/10 border border-border/30 p-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">VIP</span>
              {' — '}
              {language === 'de'
                ? 'für Founder und Führungsteams, die das Programm als vollständigen Revenue-Aufbau nutzen wollen — mit wöchentlichem 1:1 mit Michel, direktem Async-Feedback und 4 Expert Sessions über alle 6 Wochen. Nicht für jeden. Für die, bei denen Geschwindigkeit und direkte Begleitung entscheidend sind.'
                : 'for founders and leadership teams who want to use the program as a complete revenue build — with weekly 1:1 with Michel, direct async feedback, and 4 expert sessions across all 6 weeks. Not for everyone. For those where speed and direct support are critical.'}
            </p>
          </div>
        </div>

        {/* Reforge Anchor */}
        <p className="text-center text-sm text-muted-foreground mb-4">
          {language === 'de'
            ? 'Zum Vergleich: Reforge kostet €2.000–€3.500 — ohne Deliverables, ohne 1:1-Zugang, ohne System, das nach dem Programm läuft.'
            : 'For comparison: Reforge costs €2,000–€3,500 — without deliverables, without 1:1 access, without a system that runs after the program.'}
        </p>

        {/* Ratenzahlung */}
        <p className="text-center text-sm text-muted-foreground mb-12">
          {language === 'de'
            ? 'Ratenzahlung auf Anfrage möglich. Expert Session (€890) wird auf Programmpreis angerechnet.'
            : 'Installment payment available on request. Expert session (€890) is credited toward the program price.'}
        </p>

        {/* Pricing Trust Bridge AFTER table */}
        <p className="text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {language === 'de'
            ? 'Der Founding-Preis gilt für Cohort 1. Ab Cohort 2 steigt der Preis. Das ist keine Taktik — das ist die Logik eines Programms, das mit jeder Kohorte besser wird.'
            : 'The Founding Price applies to Cohort 1. From Cohort 2, the price increases. That\'s not a tactic — it\'s the logic of a program that improves with every cohort.'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// S10: VERTRAUEN
// ============================================================================
const TrustSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="proof-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-md text-foreground">
            {language === 'de' ? 'Warum du es riskieren kannst.' : 'Why you can take the risk.'}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Kachel 1: Referenzen */}
          <div className="bg-card/80 backdrop-blur-sm border-2 border-border/50 p-8">
            <Award className="w-10 h-10 text-accent mb-6" />
            <h3 className="font-display text-lg font-bold text-foreground mb-4">
              {language === 'de' ? 'Aus der Praxis mit:' : 'From practice with:'}
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {['Microsoft', 'XING', 'Haufe', 'smapOne'].map((name) => (
                <span key={name} className="text-xs font-semibold uppercase tracking-wider text-foreground bg-foreground/10 px-3 py-1">{name}</span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {language === 'de'
                ? '19 Jahre B2B SaaS GTM — als Operator. 140+ operative Engagements. n=22 · DACH B2B SaaS · 2024–2025 · Tiefenanalyse.'
                : '19 years B2B SaaS GTM — as an operator. 140+ operational engagements. n=22 · DACH B2B SaaS · 2024–2025 · deep analysis.'}
            </p>
          </div>

          {/* Kachel 2: Session-1-Guarantee */}
          <div className="bg-card/80 backdrop-blur-sm border-2 border-border/50 p-8">
            <Shield className="w-10 h-10 text-accent mb-6" />
            <h3 className="font-display text-lg font-bold text-foreground mb-4">
              Session-1-Guarantee.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {language === 'de'
                ? 'Nach Session 1 weißt du, ob das Programm das Richtige für dich ist. Kein weiteres Commitment nötig. Du entscheidest — nicht wir.'
                : 'After Session 1, you\'ll know if the program is right for you. No further commitment needed. You decide — not us.'}
            </p>
          </div>

          {/* Kachel 3: Kleine Kohorte */}
          <div className="bg-card/80 backdrop-blur-sm border-2 border-border/50 p-8">
            <Users className="w-10 h-10 text-accent mb-6" />
            <h3 className="font-display text-lg font-bold text-foreground mb-4">
              {language === 'de' ? 'Max. 12 Teilnehmer.' : 'Max. 12 participants.'}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {language === 'de'
                ? 'Das ist kein Webinar. Das ist kein Massenprodukt. Michel arbeitet in jeder Session direkt mit dir — an deinen Deliverables, an deinem Business. Die kleine Kohorte ist kein Zufall. Sie ist der Grund, warum es funktioniert.'
                : 'This is not a webinar. This is not a mass product. Michel works directly with you in every session — on your deliverables, on your business. The small cohort is not a coincidence. It\'s the reason it works.'}
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          {language === 'de'
            ? 'Referenzen auf Anfrage. Melde dich, wenn das für deine Entscheidung relevant ist.'
            : 'References on request. Reach out if that\'s relevant for your decision.'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// S11: MICHEL LASON
// ============================================================================
const MichelSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="credibility-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`dark-section relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-md text-foreground">
            {language === 'de' ? 'Wer das gebaut hat.' : 'Who built this.'}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="aspect-[3/4] bg-card/50 border-2 border-border overflow-hidden">
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
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-4"
            >
              <ExternalLink className="w-4 h-4" />
              LinkedIn Profil
            </a>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-foreground font-semibold text-lg">Michel Lason.</p>
              <p>
                {language === 'de'
                  ? '19 Jahre B2B SaaS GTM — als Operator, nicht als Berater.'
                  : '19 years B2B SaaS GTM — as an operator, not a consultant.'}
              </p>
              <p>
                {language === 'de'
                  ? 'Ich habe Revenue Systeme für Unternehmen von €1M bis €50M ARR gebaut. Nicht als Externer, der Empfehlungen gibt und weiterzieht. Als jemand, der die Maschine selbst gebaut, betrieben und für die Ergebnisse verantwortet hat.'
                  : 'I\'ve built Revenue Systems for companies from €1M to €50M ARR. Not as an outsider who gives recommendations and moves on. As someone who built the machine, ran it, and was responsible for the results.'}
              </p>
              <p className="text-foreground font-medium">
                {language === 'de'
                  ? 'Ich bin kein Framework-Guy. Ich habe keine Methode, die ich dir erkläre. Ich baue mit dir — weil ich weiß, wie es sich anfühlt, wenn nichts systematisch greift und du nicht weißt warum.'
                  : 'I\'m not a framework guy. I don\'t have a method I explain to you. I build with you — because I know how it feels when nothing works systematically and you don\'t know why.'}
              </p>
              <p>
                {language === 'de'
                  ? '140+ operative Engagements. 22–58% CAC-Reduktion in validierten Projekten. DACH-Fokus. B2B SaaS.'
                  : '140+ operational engagements. 22–58% CAC reduction in validated projects. DACH focus. B2B SaaS.'}
              </p>
              <p className="italic">
                {language === 'de'
                  ? 'Das Programm ist das, was ich mir gewünscht hätte, als ich angefangen habe.'
                  : 'The program is what I wished I had when I started.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// S12a: FAQ
// ============================================================================
const FAQSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const faqItems = [
    {
      qDe: '„Ich habe keine 6–7h pro Woche."',
      qEn: '"I don\'t have 6–7h per week."',
      aDe: 'Dann ist jetzt nicht der richtige Zeitpunkt. Das Programm funktioniert nur, wenn du es auch umsetzt. Wir haben eine Warteliste für Cohort 2 — trag dich unten ein.',
      aEn: 'Then now is not the right time. The program only works if you actually implement it. We have a waitlist for Cohort 2 — sign up below.',
    },
    {
      qDe: '„Wir sind Pre-Revenue."',
      qEn: '"We\'re pre-revenue."',
      aDe: 'Das Programm ist für Unternehmen mit €1M–€20M ARR gebaut. Pre-Revenue-Unternehmen haben andere Prioritäten — das wäre kein gutes Investment für dich.',
      aEn: 'The program is built for companies with €1M–€20M ARR. Pre-revenue companies have different priorities — this wouldn\'t be a good investment for you.',
    },
    {
      qDe: '„Was passiert, wenn das Programm nichts bringt?"',
      qEn: '"What if the program doesn\'t deliver?"',
      aDe: 'Nach Session 1 weißt du, ob es das Richtige für dich ist. Kein weiteres Commitment nötig. Wir prüfen gemeinsam, ob das Programm zu dir passt — bevor du startest.',
      aEn: 'After Session 1, you\'ll know if it\'s right for you. No further commitment needed. We\'ll check together if the program fits — before you start.',
    },
    {
      qDe: '„Wann startet Cohort 1?"',
      qEn: '"When does Cohort 1 start?"',
      aDe: 'Der Starttermin wird fixiert, sobald die Kohorte vollständig ist. Wer sich jetzt bewirbt, sichert sich den Founding-Preis und wird als Erstes informiert — persönlich von Michel.',
      aEn: 'The start date is fixed once the cohort is complete. Those who apply now secure the Founding Price and are the first to be informed — personally by Michel.',
    },
    {
      qDe: '„Sind die 22 Deliverables wirklich fertig — oder nur Templates?"',
      qEn: '"Are the 22 deliverables actually finished — or just templates?"',
      aDe: 'Einsatzbereite Assets. Für dein Business gebaut, nicht als leeres Template. Du verlässt Session 6 mit einem System, das läuft — nicht mit einem Workbook, das du noch ausfüllen musst.',
      aEn: 'Ready-to-use assets. Built for your business, not as an empty template. You leave Session 6 with a system that runs — not a workbook you still need to fill out.',
    },
    {
      qDe: '„Was ist der Unterschied zu einem Kurs oder einer Agentur?"',
      qEn: '"What\'s the difference from a course or an agency?"',
      aDe: 'Kein Kurs — du baust in der Session, nicht danach. Keine Agentur — du behältst alles, kein Retainer, kein Folgeauftrag. Das System gehört dir. Und Michel ist dabei — nicht ein Assistent.',
      aEn: 'Not a course — you build in the session, not after. Not an agency — you keep everything, no retainer, no follow-up engagement. The system is yours. And Michel is there — not an assistant.',
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-sm text-foreground">
            {language === 'de' ? 'Die wichtigsten Fragen.' : 'The most important questions.'}
          </h2>
        </div>
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
// S12b: APPLY-FORM
// ============================================================================
const applySchema = z.object({
  first_name: z.string().trim().min(1, 'Required').max(100),
  last_name: z.string().trim().min(1, 'Required').max(100),
  email: z.string().trim().email('Invalid email').max(255),
  company: z.string().trim().min(1, 'Required').max(200),
  role: z.string().trim().min(1, 'Required').max(200),
  current_cac: z.string().min(1, 'Required'),
  gtm_challenge: z.string().trim().min(1, 'Required').max(2000),
});

const ApplyFormSection: React.FC<{ onOpenMlSync: () => void }> = ({ onOpenMlSync }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { toast } = useToast();
  const trackingParams = useTrackingParams('ras-apply');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    role: '',
    current_cac: '',
    gtm_challenge: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = applySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('ras_applications').insert({
        first_name: result.data.first_name,
        last_name: result.data.last_name,
        email: result.data.email,
        company: result.data.company,
        role: result.data.role,
        current_cac: result.data.current_cac,
        gtm_challenge: result.data.gtm_challenge,
        utm_source: trackingParams.utm_source || null,
        utm_medium: trackingParams.utm_medium || null,
        utm_campaign: trackingParams.utm_campaign || null,
        utm_content: trackingParams.utm_content || null,
        utm_term: trackingParams.utm_term || null,
        page_url: trackingParams.page_url || null,
        referrer: trackingParams.referrer || null,
      });

      if (error) throw error;
      setIsSuccess(true);
    } catch (err) {
      console.error('Application error:', err);
      toast({
        variant: 'destructive',
        title: language === 'de' ? 'Fehler' : 'Error',
        description: language === 'de'
          ? 'Etwas ist schiefgelaufen. Bitte versuche es erneut.'
          : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const roleOptions = language === 'de'
    ? ['Founder / CEO', 'VP / Head of Marketing oder Growth', 'VP / Head of Sales oder Revenue', 'Anderes']
    : ['Founder / CEO', 'VP / Head of Marketing or Growth', 'VP / Head of Sales or Revenue', 'Other'];

  const arrOptions = language === 'de'
    ? ['Unter €1M', '€1M–€5M', '€5M–€20M', 'Über €20M']
    : ['Under €1M', '€1M–€5M', '€5M–€20M', 'Over €20M'];

  return (
    <section
      id="apply-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`dark-section relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="container max-w-2xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <Badge className="mb-6 bg-amber-500/20 text-amber-400 border-amber-500/30">
            <Zap className="w-4 h-4 mr-2" />
            Founding Cohort · {language === 'de' ? 'Limitierte Plätze' : 'Limited Seats'}
          </Badge>
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? 'Bereit?' : 'Ready?'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'de'
              ? 'Kostenlos bewerben. Michel meldet sich innerhalb von 48h persönlich.'
              : 'Apply for free. Michel will get back to you personally within 48h.'}
          </p>
        </div>

        {isSuccess ? (
          <div className="p-8 border border-accent/30 bg-accent/5 text-center">
            <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              {language === 'de' ? 'Deine Bewerbung ist eingegangen.' : 'Your application has been received.'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'de'
                ? 'Michel meldet sich innerhalb von 48h persönlich bei dir. Kein automatisierter Prozess.'
                : 'Michel will get back to you personally within 48h. No automated process.'}
            </p>
            <button
              onClick={onOpenMlSync}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <Calendar className="w-4 h-4" />
              {language === 'de' ? 'Termin mit Michel buchen →' : 'Book a call with Michel →'}
            </button>
            <p className="text-xs text-muted-foreground mt-2">
              {language === 'de' ? 'Optional — falls du lieber sofort sprechen willst.' : 'Optional — if you prefer to talk right away.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-card/10 backdrop-blur-sm border-2 border-border/50 p-8">
            {/* Role Selection */}
            <div className="space-y-2">
              <Label className="text-foreground">{language === 'de' ? 'Deine Rolle' : 'Your Role'} *</Label>
              <Select value={formData.role} onValueChange={(v) => setFormData(d => ({ ...d, role: v }))}>
                <SelectTrigger className={errors.role ? 'border-destructive' : ''}>
                  <SelectValue placeholder={language === 'de' ? 'Bitte wählen' : 'Please select'} />
                </SelectTrigger>
                <SelectContent>
                  {roleOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.role && <p className="text-xs text-destructive">{errors.role}</p>}
            </div>

            {/* ARR */}
            <div className="space-y-2">
              <Label className="text-foreground">ARR *</Label>
              <Select value={formData.current_cac} onValueChange={(v) => setFormData(d => ({ ...d, current_cac: v }))}>
                <SelectTrigger className={errors.current_cac ? 'border-destructive' : ''}>
                  <SelectValue placeholder={language === 'de' ? 'Bitte wählen' : 'Please select'} />
                </SelectTrigger>
                <SelectContent>
                  {arrOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.current_cac && <p className="text-xs text-destructive">{errors.current_cac}</p>}
            </div>

            {/* Expectation */}
            <div className="space-y-2">
              <Label htmlFor="gtm_challenge" className="text-foreground">
                {language === 'de'
                  ? 'Welche Erwartung hast du an das Programm — und welche Frage soll unbedingt beantwortet werden?'
                  : 'What do you expect from the program — and what question must be answered?'} *
              </Label>
              <Textarea
                id="gtm_challenge"
                value={formData.gtm_challenge}
                onChange={(e) => setFormData(d => ({ ...d, gtm_challenge: e.target.value }))}
                placeholder={language === 'de'
                  ? 'z.B. Ich will verstehen, warum unser CAC steigt, obwohl wir mehr investieren.'
                  : 'e.g. I want to understand why our CAC is rising even though we\'re investing more.'}
                className={`min-h-[100px] ${errors.gtm_challenge ? 'border-destructive' : ''}`}
                disabled={isSubmitting}
              />
              {errors.gtm_challenge && <p className="text-xs text-destructive">{errors.gtm_challenge}</p>}
            </div>

            {/* Contact */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first_name" className="text-foreground">{language === 'de' ? 'Vorname' : 'First Name'} *</Label>
                <Input id="first_name" value={formData.first_name} onChange={(e) => setFormData(d => ({ ...d, first_name: e.target.value }))} className={errors.first_name ? 'border-destructive' : ''} disabled={isSubmitting} />
                {errors.first_name && <p className="text-xs text-destructive">{errors.first_name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="last_name" className="text-foreground">{language === 'de' ? 'Nachname' : 'Last Name'} *</Label>
                <Input id="last_name" value={formData.last_name} onChange={(e) => setFormData(d => ({ ...d, last_name: e.target.value }))} className={errors.last_name ? 'border-destructive' : ''} disabled={isSubmitting} />
                {errors.last_name && <p className="text-xs text-destructive">{errors.last_name}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">E-Mail *</Label>
                <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData(d => ({ ...d, email: e.target.value }))} className={errors.email ? 'border-destructive' : ''} disabled={isSubmitting} />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground">{language === 'de' ? 'Unternehmen' : 'Company'} *</Label>
                <Input id="company" value={formData.company} onChange={(e) => setFormData(d => ({ ...d, company: e.target.value }))} className={errors.company ? 'border-destructive' : ''} disabled={isSubmitting} />
                {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
              </div>
            </div>

            <Button
              type="submit"
              size="xl"
              disabled={isSubmitting}
              className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold py-6 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {language === 'de' ? 'Bewerbung absenden' : 'Submit Application'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              {language === 'de'
                ? 'Kostenlos & unverbindlich. Kein Verkaufsgespräch. Michel meldet sich persönlich.'
                : 'Free & non-binding. No sales pitch. Michel will reach out personally.'}
            </p>

            <p className="text-xs text-muted-foreground/60 text-center">
              {language === 'de'
                ? 'Mit dem Absenden stimmst du der Verarbeitung deiner Daten gemäß unserer Datenschutzerklärung zu.'
                : 'By submitting, you agree to the processing of your data according to our privacy policy.'}
            </p>
          </form>
        )}

        {/* 3-Step Process */}
        <div className="flex items-center justify-center gap-4 mt-8 text-sm text-muted-foreground">
          <span>① {language === 'de' ? 'Bewerbung (2 Min)' : 'Application (2 min)'}</span>
          <span>→</span>
          <span>② {language === 'de' ? 'Gespräch mit Michel (15 Min)' : 'Call with Michel (15 min)'}</span>
          <span>→</span>
          <span>③ {language === 'de' ? 'Platz sichern' : 'Secure your seat'}</span>
        </div>

        {/* Direct contact */}
        {!isSuccess && (
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-2">
              {language === 'de' ? 'Lieber direkt sprechen?' : 'Prefer to talk directly?'}
            </p>
            <button
              onClick={onOpenMlSync}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <Calendar className="w-4 h-4" />
              {language === 'de' ? 'Termin mit Michel buchen →' : 'Book a call with Michel →'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// ============================================================================
// S13: WARTELISTE COHORT 2
// ============================================================================
const waitlistSchema = z.object({
  name: z.string().trim().min(1, 'Required').max(100),
  email: z.string().trim().email({ message: 'Invalid email address' }).max(255),
});

const WaitlistSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { toast } = useToast();
  const trackingParams = useTrackingParams('ras-waitlist');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = waitlistSchema.safeParse({ name, email });
    if (!result.success) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('download_leads').insert({
        email: result.data.email,
        name: result.data.name,
        asset_id: 'ras-cohort2-waitlist',
        asset_type: 'waitlist',
        utm_source: trackingParams.utm_source || null,
        utm_medium: trackingParams.utm_medium || null,
        utm_campaign: trackingParams.utm_campaign || null,
        utm_content: trackingParams.utm_content || null,
        utm_term: trackingParams.utm_term || null,
        page_url: trackingParams.page_url || null,
        referrer: trackingParams.referrer || null,
      });
      if (error) throw error;
      setIsSuccess(true);
      toast({
        title: language === 'de' ? 'Eingetragen!' : 'Signed up!',
        description: language === 'de' ? 'Du wirst als Erste/r informiert.' : 'You\'ll be the first to know.',
      });
    } catch (err) {
      console.error('Waitlist error:', err);
      toast({
        variant: 'destructive',
        title: language === 'de' ? 'Fehler' : 'Error',
        description: language === 'de' ? 'Bitte versuche es erneut.' : 'Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container max-w-2xl mx-auto px-6 relative z-10 text-center">
        <h2 className="font-display text-display-sm text-foreground mb-6">
          {language === 'de'
            ? 'Cohort 1 ist nicht der richtige Zeitpunkt für dich?'
            : 'Cohort 1 isn\'t the right time for you?'}
        </h2>

        <div className="text-left max-w-lg mx-auto mb-8 space-y-3 text-muted-foreground">
          <p>{language === 'de' ? 'Kein Problem. Trag dich für Cohort 2 ein.' : 'No problem. Sign up for Cohort 2.'}</p>
          <p>{language === 'de' ? 'Was du bekommst:' : 'What you get:'}</p>
          <p>→ <strong className="text-foreground">{language === 'de' ? 'Founding-Preis-Garantie:' : 'Founding Price Guarantee:'}</strong> {language === 'de' ? 'Du zahlst den Cohort-1-Preis — auch wenn Cohort 2 teurer wird.' : 'You pay the Cohort 1 price — even if Cohort 2 is more expensive.'}</p>
          <p>→ {language === 'de' ? 'Persönliche Benachrichtigung von Michel, sobald der Termin steht.' : 'Personal notification from Michel once the date is set.'}</p>
          <p>→ {language === 'de' ? 'Vorrang bei der Platzvergabe — vor der öffentlichen Ankündigung.' : 'Priority for seat allocation — before the public announcement.'}</p>
          <p className="text-sm italic mt-4">
            {language === 'de'
              ? 'Cohort 2 wird kleiner sein als Cohort 1. Wer auf der Liste steht, hat einen echten Vorteil.'
              : 'Cohort 2 will be smaller than Cohort 1. Those on the list have a real advantage.'}
          </p>
        </div>

        {isSuccess ? (
          <div className="p-6 border border-accent/30 bg-accent/5">
            <CheckCircle className="w-10 h-10 text-accent mx-auto mb-3" />
            <p className="text-foreground font-semibold">{language === 'de' ? 'Eingetragen!' : 'Signed up!'}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-4">
            <Input
              type="text"
              placeholder={language === 'de' ? 'Vorname' : 'First name'}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isSubmitting}
              className="h-14 text-base"
            />
            <Input
              type="email"
              placeholder={language === 'de' ? 'deine@email.de' : 'your@email.com'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              className="h-14 text-base flex-1"
            />
            <Button
              type="submit"
              size="xl"
              disabled={isSubmitting}
              className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-8 py-4 uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400 whitespace-nowrap"
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : (language === 'de' ? 'Eintragen' : 'Sign Up')}
            </Button>
          </form>
        )}

        <p className="text-xs text-muted-foreground">
          {language === 'de'
            ? 'Kein Spam. Nur relevante Updates — persönlich von Michel.'
            : 'No spam. Only relevant updates — personally from Michel.'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const RevenueArchitectureSystem: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingSlug, setBookingSlug] = useState<'inflection-call' | 'ml-sync'>('inflection-call');

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleOpenBookingModal = () => {
      setBookingSlug('inflection-call');
      setIsBookingModalOpen(true);
    };
    window.addEventListener('openBookingModal', handleOpenBookingModal);
    return () => window.removeEventListener('openBookingModal', handleOpenBookingModal);
  }, []);

  const handleOpenMlSync = () => {
    setBookingSlug('ml-sync');
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <VSLSection />
        <ProblemReframeSection />
        <LayerSection />
        <DeliverablesListSection />
        <SessionsSection />
        <FormatSection />
        <ICPFilterSection />
        <PricingSection />
        <TrustSection />
        <MichelSection />
        <FAQSection />
        <ApplyFormSection onOpenMlSync={handleOpenMlSync} />
        <WaitlistSection />
      </main>
      <Footer />
      <FilloutBookingModal
        formSlug={bookingSlug}
        source="revenue-architecture-system"
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};

export default RevenueArchitectureSystem;
