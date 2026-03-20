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
  X,
  Play,
  Users,
  Shield,
  Zap,
  Building2,
  Loader2,
  CheckCircle,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
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

        {/* Zielgruppen-Qualifier */}
        <p className="text-sm text-muted-foreground italic mb-6 animate-fade-in">
          {language === 'de'
            ? 'Für GTM-Leads, Revenue-Verantwortliche und Gründer in B2B SaaS — DACH.'
            : 'For GTM leads, revenue owners, and founders in B2B SaaS — DACH.'}
        </p>

        {/* Urgency Badge */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/15 border border-accent/40 text-accent text-sm font-semibold rounded-full">
            <Zap className="w-4 h-4" />
            {language === 'de'
              ? '⚡ Founding Cohort — Plätze von 12 verfügbar'
              : '⚡ Founding Cohort — Seats available out of 12'}
          </span>
        </div>

        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">
            {language === 'de'
              ? 'In der Probe-Session hast du gesehen, wie es geht.'
              : "In the trial session you saw how it's done."}
          </span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'Jetzt baust du es — für dein Business.' : 'Now you build it — for your business.'}
          </span>
        </h1>

        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? '6 Wochen. 23 einsatzbereite Assets. Dein Revenue System — live nach Session 6.'
            : '6 weeks. 23 ready-to-deploy assets. Your Revenue System — live after Session 6.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => scrollToSection('apply-section')}
          >
            {language === 'de' ? 'Jetzt bewerben — Founding Cohort sichern' : 'Apply Now — Secure Founding Cohort'}
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

        <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {language === 'de'
            ? '15-Minuten-Gespräch · Kein Verkaufsdruck · Nur 12 Plätze'
            : '15-minute conversation · No sales pressure · Only 12 seats'}
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
// S2 — VSL
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
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">Video</span>
          <h2 className="font-display text-display-md text-foreground">
            {language === 'de' ? 'Warum dein CAC-Problem kein Kanal-Problem ist' : "Why Your CAC Problem Isn't a Channel Problem"}
          </h2>
        </div>

        {/* Video Placeholder */}
        <div className="relative aspect-video bg-card/50 backdrop-blur-sm border-2 border-border mb-8 flex items-center justify-center group cursor-pointer hover:border-primary/50 transition-colors">
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

        <p className="text-center text-sm text-muted-foreground italic">
          {language === 'de'
            ? 'Lieber lesen? Scroll weiter — alles Wichtige steht auch hier.'
            : 'Prefer reading? Scroll down — everything important is also written here.'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// S3 — 23 DELIVERABLES (Session-Tabellen)
// ============================================================================
const DeliverablesSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const sessions = [
    {
      titleDe: 'Session 1 — Strategische Grundlagen', titleEn: 'Session 1 — Strategic Foundations',
      items: [
        { id: 'D01', de: 'Marktanalyse', en: 'Market Analysis', format: 'PDF / Notion' },
        { id: 'D02', de: 'Challenge-Solution-Matrix', en: 'Challenge-Solution Matrix', format: 'PDF / Notion' },
        { id: 'D03', de: 'ICP-Profil', en: 'ICP Profile', format: 'PDF / Notion' },
      ],
    },
    {
      titleDe: 'Session 2 — Value Stack & Growth Engine', titleEn: 'Session 2 — Value Stack & Growth Engine',
      items: [
        { id: 'D04', de: 'Customer Journey Map', en: 'Customer Journey Map', format: 'Miro / PDF' },
        { id: 'D05', de: 'Value Stack', en: 'Value Stack', format: 'PDF / Notion' },
        { id: 'D06', de: 'Market Entry Strategy Blueprint', en: 'Market Entry Strategy Blueprint', format: 'PDF / Notion', note: 'Homework S2→S3' },
        { id: 'D07', de: 'Growth Engine Architecture', en: 'Growth Engine Architecture', format: 'Miro / PDF' },
      ],
    },
    {
      titleDe: 'Session 3 — Entry Layer & Persuasion', titleEn: 'Session 3 — Entry Layer & Persuasion',
      items: [
        { id: 'D08', de: 'Asset-Plan & Traffic-Architektur', en: 'Asset Plan & Traffic Architecture', format: 'PDF / Notion' },
        { id: 'D09a', de: 'Landing Page Blueprint', en: 'Landing Page Blueprint', format: 'PDF / Figma' },
        { id: 'D09b', de: 'Form + DOI-Flow', en: 'Form + DOI Flow', format: 'PDF / Notion' },
      ],
    },
    {
      titleDe: 'Session 4 — Messaging & Funnel Compiler', titleEn: 'Session 4 — Messaging & Funnel Compiler',
      items: [
        { id: 'D10', de: 'Email Sequencing Blueprint', en: 'Email Sequencing Blueprint', format: 'PDF / Notion' },
        { id: 'D11', de: 'Asset Stack & Trust Architecture', en: 'Asset Stack & Trust Architecture', format: 'PDF / Notion' },
        { id: 'D12', de: 'Funnel Blueprint Compiler', en: 'Funnel Blueprint Compiler', format: 'PDF / Miro' },
      ],
    },
    {
      titleDe: 'Session 5 — Revenue Operating System', titleEn: 'Session 5 — Revenue Operating System',
      items: [
        { id: 'D13', de: 'Revenue System Architecture', en: 'Revenue System Architecture', format: 'PDF / Miro' },
        { id: 'D14', de: 'Revenue Data Flow & Orchestration', en: 'Revenue Data Flow & Orchestration', format: 'PDF / Notion' },
        { id: 'D15', de: 'Automation Priorities', en: 'Automation Priorities', format: 'PDF / Notion' },
        { id: 'D16', de: 'GTM Execution Stack Map', en: 'GTM Execution Stack Map', format: 'Infografik', note: 'Reference Asset' },
        { id: 'D17', de: 'Automation Priority Matrix', en: 'Automation Priority Matrix', format: 'PDF / Notion', note: 'Reference Asset' },
      ],
    },
    {
      titleDe: 'Session 6 — Traffic Activation', titleEn: 'Session 6 — Traffic Activation',
      items: [
        { id: 'D18', de: 'SEO Playbook', en: 'SEO Playbook', format: 'PDF / Notion' },
        { id: 'D19', de: 'SEA Playbook', en: 'SEA Playbook', format: 'PDF / Notion' },
        { id: 'D20', de: 'GEO Playbook', en: 'GEO Playbook', format: 'PDF / Notion' },
        { id: 'D21', de: 'Earned Media Playbook', en: 'Earned Media Playbook', format: 'PDF / Notion' },
        { id: 'D22', de: 'Content Flywheel Blueprint', en: 'Content Flywheel Blueprint', format: 'PDF / Notion' },
      ],
    },
  ];

  return (
    <section
      id="deliverables-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Was du baust' : 'What You Build'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? 'Was du baust — nicht was du lernst.' : 'What you build — not what you learn.'}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? '23 einsatzbereite Assets. Kein leeres Template — jedes Deliverable ist direkt in deinem Business einsetzbar.'
              : '23 ready-to-deploy assets. No empty template — every deliverable is directly usable in your business.'}
          </p>
        </div>

        {/* Session Tables */}
        <div className="space-y-8">
          {sessions.map((session, si) => (
            <div key={si} className="bg-card/60 border-2 border-border overflow-hidden">
              <div className="px-6 py-4 border-b border-border bg-primary/5">
                <h3 className="font-display text-base font-bold text-foreground uppercase tracking-wide">
                  {language === 'de' ? session.titleDe : session.titleEn}
                </h3>
              </div>
              <div className="divide-y divide-border/50">
                {session.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 px-6 py-3">
                    <span className="text-xs font-mono text-primary font-bold w-10 shrink-0">{item.id}</span>
                    <span className="text-foreground flex-1">{language === 'de' ? item.de : item.en}</span>
                    <span className="text-xs text-muted-foreground hidden sm:block">{item.format}</span>
                    {item.note && (
                      <span className="text-xs text-accent italic hidden md:block">({item.note})</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground font-semibold mt-12">
          {language === 'de'
            ? '23 fertige Revenue-Bausteine. Einsatzbereit ab Tag 1 nach dem Programm.'
            : '23 finished revenue building blocks. Ready to deploy from day 1 after the program.'}
        </p>
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

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`dark-section relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-md text-foreground mb-8">
            {language === 'de' ? 'Warum dein CAC-Problem kein Kanal-Problem ist.' : "Why your CAC problem isn't a channel problem."}
          </h2>
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          <p>
            {language === 'de'
              ? '87% der B2B SaaS-Unternehmen im DACH-Raum haben kein Revenue System.'
              : '87% of B2B SaaS companies in the DACH region have no Revenue System.'}
            <span className="text-muted-foreground/60 text-sm italic ml-1">(n=22 · {language === 'de' ? 'Tiefenanalyse' : 'Deep analysis'} · DACH B2B SaaS · 2024–2025)</span>
          </p>
          <p className="text-sm text-muted-foreground/60 italic">
            {language === 'de'
              ? 'Bewusst klein: Tiefenanalyse statt Massenerhebung.'
              : 'Deliberately small: deep analysis over mass survey.'}
          </p>
          <p>
            {language === 'de'
              ? 'Sie haben Kanäle. Sie haben Tools. Sie haben Budgets. Und trotzdem steigt der CAC.'
              : 'They have channels. They have tools. They have budgets. And yet CAC keeps rising.'}
          </p>
          <p className="text-foreground font-medium">
            {language === 'de'
              ? 'Weil das Problem nicht im Kanal liegt — es liegt in der Architektur.'
              : "Because the problem isn't in the channel — it's in the architecture."}
          </p>
          <div className="space-y-2 pl-4 border-l-2 border-primary/30">
            {(language === 'de'
              ? [
                  'Kein ICP-Profil, das Entscheidungen trifft.',
                  'Kein Value Stack, der Willingness-to-Pay abbildet.',
                  'Kein Entry Layer, der Leads zuverlässig qualifiziert.',
                  'Kein Funnel, der Conversion systematisch erzeugt.',
                ]
              : [
                  'No ICP profile that drives decisions.',
                  'No Value Stack that maps willingness-to-pay.',
                  'No Entry Layer that reliably qualifies leads.',
                  'No funnel that systematically generates conversion.',
                ]
            ).map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <p className="text-foreground font-semibold">
            {language === 'de'
              ? 'Das ist kein Kanal-Problem. Das ist ein Architektur-Problem.'
              : "This is not a channel problem. It's an architecture problem."}
          </p>
        </div>

        {/* Amber Box */}
        <div className="mt-12 max-w-3xl mx-auto bg-accent/10 border border-accent/30 px-8 py-6">
          <p className="text-accent font-medium text-center italic">
            {language === 'de'
              ? '„CAC steigt nicht, weil du den falschen Kanal nutzt. CAC steigt, weil dein System nicht gebaut ist."'
              : '"CAC doesn\'t rise because you use the wrong channel. CAC rises because your system isn\'t built."'}
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// S5 — DATEN & DIAGNOSE
// ============================================================================
const DataDiagnosisSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const stats = [
    {
      value: '87%',
      labelDe: 'der analysierten Unternehmen haben kein vollständiges Revenue System',
      labelEn: 'of analyzed companies have no complete Revenue System',
      noteDe: 'n=22 · DACH B2B SaaS · 2024–2025',
      noteEn: 'n=22 · DACH B2B SaaS · 2024–2025',
    },
    {
      value: '22–58%',
      labelDe: 'CAC-Reduktion in 90 Tagen — bei Unternehmen, die ICP + Entry Layer + Funnel neu aufgebaut haben',
      labelEn: 'CAC reduction in 90 days — for companies that rebuilt ICP + Entry Layer + Funnel',
      noteDe: '',
      noteEn: '',
    },
    {
      value: language === 'de' ? '19 Jahre' : '19 Years',
      labelDe: 'Direkte Arbeit mit B2B SaaS-Unternehmen im DACH-Raum — als Operator, nicht als Berater',
      labelEn: 'Direct work with B2B SaaS companies in DACH — as operator, not consultant',
      noteDe: '',
      noteEn: '',
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? 'Was 19 Jahre DACH B2B SaaS zeigen.' : 'What 19 years of DACH B2B SaaS reveal.'}
          </h2>
        </div>

        {/* Stat Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-card/80 backdrop-blur-sm border-2 border-border p-8 text-center hover:border-accent/40 transition-colors">
              <div className="text-3xl font-bold text-foreground mb-3">{stat.value}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{language === 'de' ? stat.labelDe : stat.labelEn}</p>
              {stat.noteDe && (
                <p className="text-xs text-muted-foreground/60 italic mt-2">{language === 'de' ? stat.noteDe : stat.noteEn}</p>
              )}
            </div>
          ))}
        </div>

        {/* n=22 Amber Box */}
        <div className="max-w-3xl mx-auto bg-accent/10 border border-accent/30 px-8 py-6">
          <p className="text-accent font-medium mb-3">
            {language === 'de' ? 'Warum n=22 und nicht n=200?' : 'Why n=22 and not n=200?'}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {language === 'de'
              ? 'Weil wir jeden dieser 22 Fälle vollständig durchleuchtet haben — Revenue-Architektur, CAC-Struktur, Funnel-Logik, ICP-Schärfe. Massenerhebungen zeigen Korrelationen. Tiefenanalysen zeigen Ursachen. Die Methode basiert auf Ursachen.'
              : "Because we fully examined each of these 22 cases — revenue architecture, CAC structure, funnel logic, ICP precision. Mass surveys show correlations. Deep analyses show causes. The method is based on causes."}
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// S6 — 6 SESSIONS
// ============================================================================
const SessionsSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const sessions = [
    {
      week: 1,
      titleDe: 'Strategische Grundlagen', titleEn: 'Strategic Foundations',
      deliverables: 'D01 · D02 · D03',
    },
    {
      week: 2,
      titleDe: 'Value Stack & Growth Engine', titleEn: 'Value Stack & Growth Engine',
      deliverables: 'D04 · D05 · D06 · D07',
    },
    {
      week: 3,
      titleDe: 'Entry Layer & Persuasion', titleEn: 'Entry Layer & Persuasion',
      deliverables: 'D08 · D09a · D09b',
    },
    {
      week: 4,
      titleDe: 'Messaging & Funnel Compiler', titleEn: 'Messaging & Funnel Compiler',
      deliverables: 'D10 · D11 · D12',
    },
    {
      week: 5,
      titleDe: 'Revenue Operating System', titleEn: 'Revenue Operating System',
      deliverables: 'D13 · D14 · D15 · D16* · D17*',
    },
    {
      week: 6,
      titleDe: 'Traffic Activation', titleEn: 'Traffic Activation',
      deliverables: 'D18 · D19 · D20 · D21 · D22',
    },
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
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? '6 Sessions. 6 Wochen. Ein vollständiges System.' : '6 Sessions. 6 Weeks. A Complete System.'}
          </h2>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 text-sm text-primary font-medium">
            {language === 'de' ? '4h Live + 2–3h Async/Woche' : '4h Live + 2–3h Async/Week'}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sessions.map((session) => (
            <div key={session.week} className="bg-card/10 backdrop-blur-sm border-2 border-border/50 p-6 hover:border-primary/30 transition-all duration-300">
              <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                {language === 'de' ? `Session ${session.week}` : `Session ${session.week}`}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-4">
                {language === 'de' ? session.titleDe : session.titleEn}
              </h3>
              <p className="text-sm text-muted-foreground font-mono">{session.deliverables}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground italic max-w-3xl mx-auto">
          {language === 'de'
            ? 'Jede Session baut auf der vorherigen auf. Kein Schritt kann übersprungen werden — das ist kein Kurs-Design. Das ist System-Design.'
            : "Every session builds on the previous one. No step can be skipped — this isn't course design. It's system design."}
        </p>
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
        { label: 'Output', kurs: 'Wissen', coaching: 'Gespräche', ras: '23 einsatzbereite Assets' },
        { label: 'Anpassung', kurs: 'Generisch', coaching: 'Individuell, aber ohne System', ras: 'Individuell + systematisch' },
        { label: 'Nach 6 Wochen', kurs: 'Zertifikat', coaching: 'Notizen', ras: 'Laufendes Revenue System' },
        { label: 'Preisanker', kurs: '€500–€3.500 (z.B. Reforge)', coaching: '€5.000–€15.000', ras: '€6.900 — Founding Cohort' },
      ]
    : [
        { label: 'Output', kurs: 'Knowledge', coaching: 'Conversations', ras: '23 ready-to-deploy assets' },
        { label: 'Customization', kurs: 'Generic', coaching: 'Individual, but no system', ras: 'Individual + systematic' },
        { label: 'After 6 weeks', kurs: 'Certificate', coaching: 'Notes', ras: 'Running Revenue System' },
        { label: 'Price anchor', kurs: '€500–€3,500 (e.g. Reforge)', coaching: '€5,000–€15,000', ras: '€6,900 — Founding Cohort' },
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
              ? 'Warum nicht Kurs. Warum nicht Coaching. Warum nicht Consulting.'
              : 'Why Not a Course. Why Not Coaching. Why Not Consulting.'}
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-4 px-3 text-muted-foreground font-medium" />
                <th className="text-center py-4 px-3 text-muted-foreground font-medium">
                  {language === 'de' ? 'Kurs' : 'Course'}
                </th>
                <th className="text-center py-4 px-3 text-muted-foreground font-medium">Coaching</th>
                <th className="text-center py-4 px-3 text-foreground font-bold">
                  The Revenue Architecture System™
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-3 px-3 text-muted-foreground font-medium">{row.label}</td>
                  <td className="py-3 px-3 text-center text-muted-foreground">{row.kurs}</td>
                  <td className="py-3 px-3 text-center text-muted-foreground">{row.coaching}</td>
                  <td className="py-3 px-3 text-center text-foreground font-semibold bg-primary/5">{row.ras}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// S8 — FÜR WEN
// ============================================================================
const ICPFilterSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const forYou = language === 'de'
    ? [
        'GTM-Leads, Revenue-Verantwortliche, Gründer in B2B SaaS',
        'DACH-Markt — oder DACH-relevantes Geschäftsmodell',
        'Bereit, 4h Live + 2–3h Async pro Woche zu investieren',
        'Wollen ein System bauen — kein weiteres Framework lernen',
        'CAC steigt oder stagniert — trotz Optimierungsversuchen',
      ]
    : [
        'GTM leads, revenue owners, founders in B2B SaaS',
        'DACH market — or DACH-relevant business model',
        'Ready to invest 4h live + 2–3h async per week',
        'Want to build a system — not learn another framework',
        'CAC rising or stagnating — despite optimization attempts',
      ];

  const notForYou = language === 'de'
    ? [
        'Frühe Pre-Revenue-Phase ohne definierten ICP',
        'Suchen eine fertige Lösung ohne Eigenarbeit',
        'Wollen primär Networking — nicht System-Aufbau',
      ]
    : [
        'Early pre-revenue phase without defined ICP',
        'Looking for a ready-made solution without own work',
        'Want primarily networking — not system building',
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
            {language === 'de' ? 'Dieses Programm ist nicht für jeden.' : 'This program is not for everyone.'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
// S9 — PRICING
// ============================================================================
const PricingSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const tiers = [
    {
      name: 'Founding',
      price: '€6.900',
      features: language === 'de'
        ? ['6 Sessions · 23 Deliverables', '3× 1:1 Expert Session', 'Lifetime-Zugang']
        : ['6 Sessions · 23 Deliverables', '3× 1:1 Expert Session', 'Lifetime access'],
      recommended: false,
    },
    {
      name: 'VIP Founding',
      price: '€8.900',
      features: language === 'de'
        ? ['Alles aus Founding', '+ 2 zusätzliche 1:1 Sessions', 'Priority Access']
        : ['Everything from Founding', '+ 2 additional 1:1 Sessions', 'Priority Access'],
      recommended: true,
    },
    {
      name: 'Enterprise / Team',
      price: '€12.900',
      features: language === 'de'
        ? ['Alles aus VIP', '+ 2. Teilnehmer aus demselben Unternehmen']
        : ['Everything from VIP', '+ 2nd participant from same company'],
      recommended: false,
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
        <div className="text-center mb-12">
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? 'Dein Investment.' : 'Your Investment.'}
          </h2>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
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
                    {language === 'de' ? 'Empfohlen' : 'Recommended'}
                  </Badge>
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-foreground mb-2">{tier.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                <span className="text-sm text-muted-foreground ml-1">{language === 'de' ? '(zzgl. MwSt.)' : '(excl. VAT)'}</span>
              </div>

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

        {/* Founding Frame */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground">
            {language === 'de'
              ? 'Founding Cohort — Cohort 1 von maximal 12 Teilnehmern. Ab Cohort 2: €8.900.'
              : 'Founding Cohort — Cohort 1 of maximum 12 participants. From Cohort 2: €8,900.'}
          </p>
        </div>

        {/* ROI Anchor */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-muted-foreground text-sm">
            {language === 'de'
              ? 'Ein Revenue System, das CAC um 22–58% senkt, zahlt sich bei einem durchschnittlichen B2B SaaS-CAC von €3.000–€8.000 innerhalb der ersten 90 Tage zurück.'
              : 'A Revenue System that reduces CAC by 22–58% pays for itself within the first 90 days at an average B2B SaaS CAC of €3,000–€8,000.'}
          </p>
        </div>

        {/* Bridge to S10 */}
        <p className="text-center text-muted-foreground italic max-w-2xl mx-auto">
          {language === 'de'
            ? '€6.900 ist eine Entscheidung — kein Spontankauf. Was macht sie rational vertretbar? Das siehst du jetzt.'
            : '€6,900 is a decision — not an impulse buy. What makes it rationally justifiable? You\'ll see now.'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// S10 — VERTRAUEN (3 Kacheln)
// ============================================================================
const TrustSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-md text-foreground">
            {language === 'de'
              ? 'Warum das funktioniert — und warum du es riskieren kannst.'
              : 'Why this works — and why you can risk it.'}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Kachel 1 — Referenzen */}
          <div className="bg-card/80 border-2 border-border p-8 hover:border-accent/30 transition-colors">
            <Building2 className="w-8 h-8 text-accent mb-6" />
            <h3 className="font-display text-lg font-bold text-foreground mb-4 leading-snug">
              {language === 'de'
                ? 'Gebaut bei Microsoft. Skaliert bei XING. Optimiert bei Haufe. Gerettet bei smapOne.'
                : 'Built at Microsoft. Scaled at XING. Optimized at Haufe. Rescued at smapOne.'}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {language === 'de'
                ? '19 Jahre. Nicht als Berater mit Empfehlungs-Deck. Als Operator mit Revenue-Verantwortung. Jedes dieser Unternehmen hatte dasselbe Problem: Ein System, das nicht funktionierte — oder noch nicht existierte.'
                : "19 years. Not as a consultant with recommendation decks. As an operator with revenue responsibility. Each of these companies had the same problem: a system that didn't work — or didn't yet exist."}
            </p>
            <p className="text-muted-foreground text-sm">
              {language === 'de'
                ? 'The Revenue Architecture System™ ist das Ergebnis von 19 Jahren Fehler, Fixes und Durchbrüchen.'
                : 'The Revenue Architecture System™ is the result of 19 years of mistakes, fixes, and breakthroughs.'}
            </p>
            {/* Logos */}
            <div className="flex items-center gap-4 mt-6 text-xs text-muted-foreground/50 font-medium uppercase tracking-wider">
              <span>Microsoft</span><span>·</span><span>XING</span><span>·</span><span>Haufe</span><span>·</span><span>smapOne</span>
            </div>
          </div>

          {/* Kachel 2 — Session-1-Guarantee */}
          <div className="bg-card/80 border-2 border-border p-8 hover:border-accent/30 transition-colors">
            <Shield className="w-8 h-8 text-accent mb-6" />
            <h3 className="font-display text-lg font-bold text-foreground mb-4 leading-snug">
              {language === 'de'
                ? '€6.900 ohne Sicherheit wäre ein Risiko. Deshalb gibt es die Session-1-Guarantee.'
                : '€6,900 without security would be a risk. That\'s why there\'s the Session-1-Guarantee.'}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {language === 'de'
                ? 'Nach Session 1 weißt du:'
                : 'After Session 1 you know:'}
            </p>
            <div className="space-y-2 mb-4">
              {(language === 'de'
                ? [
                    'ob die Methode zu deinem Business passt,',
                    'ob Michel der Richtige ist,',
                    'ob das System das liefert, was es verspricht.',
                  ]
                : [
                    'whether the method fits your business,',
                    'whether Michel is the right person,',
                    'whether the system delivers what it promises.',
                  ]
              ).map((line, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">{line}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              {language === 'de'
                ? 'Wenn nicht — kein weiteres Commitment. Kein Druck. Keine Fragen. Du entscheidest nach der ersten Session.'
                : "If not — no further commitment. No pressure. No questions. You decide after the first session."}
            </p>
            <p className="text-xs text-muted-foreground/60 italic mt-4">
              {language === 'de'
                ? 'Die genauen Bedingungen klären wir im Gespräch — transparent, vor der Buchung.'
                : "We'll clarify the exact terms in our conversation — transparent, before booking."}
            </p>
          </div>

          {/* Kachel 3 — Kleine Kohorte */}
          <div className="bg-card/80 border-2 border-border p-8 hover:border-accent/30 transition-colors">
            <Users className="w-8 h-8 text-accent mb-6" />
            <h3 className="font-display text-lg font-bold text-foreground mb-4 leading-snug">
              {language === 'de'
                ? '12 Teilnehmer. In jeder Session arbeitet Michel direkt mit dir — an deinem Business.'
                : '12 participants. In every session Michel works directly with you — on your business.'}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {language === 'de'
                ? 'Nicht an einem generischen Beispiel. Nicht an einer Demo-Firma.'
                : 'Not on a generic example. Not on a demo company.'}
            </p>
            <div className="space-y-1 mb-4">
              {(language === 'de'
                ? ['An deinem ICP.', 'Deinen Daten.', 'Deinem Funnel.']
                : ['On your ICP.', 'Your data.', 'Your funnel.']
              ).map((line, i) => (
                <p key={i} className="text-foreground font-medium text-sm">{line}</p>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              {language === 'de'
                ? '12 Teilnehmer bedeutet: Michel kennt dein Business nach Session 1. Und baut mit dir — nicht für dich.'
                : "12 participants means: Michel knows your business after Session 1. And builds with you — not for you."}
            </p>
          </div>
        </div>

        {/* Closing Line */}
        <p className="text-center text-muted-foreground italic max-w-3xl mx-auto">
          {language === 'de'
            ? '„Das Programm ist so gebaut, dass du nach Session 1 weißt, ob es das Richtige für dich ist. Nicht nach Session 6."'
            : '"The program is built so you know after Session 1 whether it\'s right for you. Not after Session 6."'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// S11 — MICHEL LASON
// ============================================================================
const MichelLasonSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`dark-section relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-md text-foreground">
            {language === 'de' ? 'Wer das baut — und warum.' : 'Who builds this — and why.'}
          </h2>
        </div>

        <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
          <div className="mx-auto md:mx-0">
            <div className="w-64 h-64 bg-card/30 border-2 border-border overflow-hidden">
              <img
                src="/images/ml-speaking.png"
                alt="Michel Lason"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-foreground font-semibold">
              Michel Lason. {language === 'de' ? '19 Jahre B2B SaaS im DACH-Raum.' : '19 years B2B SaaS in the DACH region.'}
            </p>
            <p>Microsoft · XING · Haufe · smapOne.</p>
            <p>
              {language === 'de'
                ? 'Nicht als Berater von außen — als Operator mit Verantwortung.'
                : 'Not as an outside consultant — as an operator with responsibility.'}
            </p>
            <p>
              {language === 'de'
                ? 'Ich habe Revenue Systeme aufgebaut, wenn sie fehlten. Ich habe sie repariert, wenn sie kaputt waren. Ich habe gesehen, was funktioniert — und was nicht.'
                : "I've built Revenue Systems when they were missing. I've repaired them when they were broken. I've seen what works — and what doesn't."}
            </p>
            <p>
              {language === 'de'
                ? 'The Revenue Architecture System™ ist das Ergebnis davon. Nicht Theorie. Nicht Framework. Ein System, das ich selbst gebaut und getestet habe.'
                : "The Revenue Architecture System™ is the result. Not theory. Not a framework. A system I've built and tested myself."}
            </p>
            <p className="text-xs text-muted-foreground/60 italic pt-4">
              {language === 'de'
                ? 'Referenzen auf Anfrage — für verifizierbare Einblicke in konkrete Projekte.'
                : 'References on request — for verifiable insights into specific projects.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// S12 — FAQ
// ============================================================================
const FAQSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const faqItems = [
    {
      qDe: 'Ich habe die Probe-Session verpasst. Kann ich trotzdem teilnehmen?',
      qEn: 'I missed the trial session. Can I still participate?',
      aDe: 'Ja. Die Probe-Session ist empfohlen, aber keine Pflicht. Melde dich für ein 15-Minuten-Gespräch — wir klären, ob das Programm zu deinem aktuellen Stand passt. Wenn nicht, sagen wir das direkt.',
      aEn: "Yes. The trial session is recommended but not required. Sign up for a 15-minute conversation — we'll clarify whether the program fits your current situation. If not, we'll tell you directly.",
    },
    {
      qDe: 'Was bedeutet die Session-1-Guarantee konkret?',
      qEn: 'What does the Session-1-Guarantee mean specifically?',
      aDe: 'Nach Session 1 hast du einen vollständigen Eindruck: Methode, Qualität, Passgenauigkeit. Wenn es nicht das ist, was wir versprochen haben — kein weiteres Commitment. Die genauen Bedingungen klären wir im Gespräch vor der Buchung. Kein Kleingedrucktes.',
      aEn: "After Session 1 you have a complete impression: method, quality, fit. If it's not what we promised — no further commitment. We clarify exact terms in the conversation before booking. No fine print.",
    },
    {
      qDe: 'Wie viel Zeit muss ich pro Woche einplanen?',
      qEn: 'How much time do I need to plan per week?',
      aDe: '4 Stunden Live-Session + 2–3 Stunden Async-Arbeit. Insgesamt 6–7 Stunden pro Woche. Das ist nicht wenig. Wer das nicht leisten kann oder will, sollte nicht teilnehmen — das Programm funktioniert nur, wenn du die Arbeit machst.',
      aEn: "4 hours live session + 2–3 hours async work. Total 6–7 hours per week. That's not little. If you can't or don't want to commit that, you shouldn't participate — the program only works if you do the work.",
    },
    {
      qDe: 'Ist das ein Kurs, den ich in meinem eigenen Tempo mache?',
      qEn: 'Is this a course I do at my own pace?',
      aDe: 'Nein. Feste Session-Termine. Kohorten-Struktur. Peer-Feedback ist Teil des Systems — nicht optional.',
      aEn: 'No. Fixed session dates. Cohort structure. Peer feedback is part of the system — not optional.',
    },
    {
      qDe: 'Was passiert, wenn ich eine Session verpasse?',
      qEn: 'What happens if I miss a session?',
      aDe: 'Aufzeichnung + Async-Nacharbeit ist möglich. Aber: Wer mehr als eine Session verpasst, verliert den Anschluss. Das ist kein Vorwurf — das ist System-Logik. Jede Session baut auf der vorherigen auf.',
      aEn: "Recording + async follow-up is possible. But: if you miss more than one session, you lose the thread. That's not a reproach — it's system logic. Every session builds on the previous one.",
    },
    {
      qDe: 'Warum €6.900 — und nicht weniger?',
      qEn: 'Why €6,900 — and not less?',
      aDe: 'Weil das Programm 23 einsatzbereite Assets produziert, die sonst €20.000–€50.000 in Consulting kosten. Und weil Michel direkt mit dir arbeitet — nicht mit einer Gruppe von 50. €6.900 ist kein Kurs-Preis. Es ist ein System-Preis mit direktem Operator-Zugang.',
      aEn: "Because the program produces 23 ready-to-deploy assets that would otherwise cost €20,000–€50,000 in consulting. And because Michel works directly with you — not with a group of 50. €6,900 is not a course price. It's a system price with direct operator access.",
    },
    {
      qDe: 'Gibt es verifizierbare Referenzen?',
      qEn: 'Are there verifiable references?',
      aDe: 'Ja — auf Anfrage. Wir nennen keine Namen öffentlich, aber im Gespräch können wir konkrete Einblicke geben. Melde dich, wenn das für deine Entscheidung relevant ist.',
      aEn: "Yes — on request. We don't name names publicly, but in conversation we can provide concrete insights. Get in touch if that's relevant for your decision.",
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
          {language === 'de' ? 'Häufige Fragen — und die ehrlichen Antworten.' : 'Frequently Asked Questions — and the honest answers.'}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {language === 'de' ? item.qDe : item.qEn}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
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
// S13 — APPLY-FORM (Native)
// ============================================================================
const applySchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().min(1).max(100),
  role: z.string().trim().min(1).max(100),
  currentCac: z.string().min(1),
  gtmChallenge: z.string().trim().min(1).max(2000),
  sourceChannel: z.string().optional(),
});

const ApplyFormSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', company: '', role: '',
    currentCac: '', gtmChallenge: '', sourceChannel: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const trackingParams = useTrackingParams();
  const { toast } = useToast();

  const cacOptions = language === 'de'
    ? ['< €1.000', '€1.000–€3.000', '€3.000–€5.000', '€5.000–€8.000', '> €8.000', 'Weiß ich nicht']
    : ['< €1,000', '€1,000–€3,000', '€3,000–€5,000', '€5,000–€8,000', '> €8,000', "I don't know"];

  const sourceOptions = language === 'de'
    ? ['LinkedIn', 'Empfehlung', 'Google-Suche', 'Probe-Session', 'Podcast', 'Sonstiges']
    : ['LinkedIn', 'Referral', 'Google Search', 'Trial Session', 'Podcast', 'Other'];

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = applySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = language === 'de' ? 'Pflichtfeld' : 'Required';
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('ras_applications' as any).insert({
        first_name: result.data.firstName,
        last_name: result.data.lastName,
        email: result.data.email,
        company: result.data.company,
        role: result.data.role,
        current_cac: result.data.currentCac,
        gtm_challenge: result.data.gtmChallenge,
        source_channel: result.data.sourceChannel || null,
        utm_source: trackingParams.utm_source || null,
        utm_medium: trackingParams.utm_medium || null,
        utm_campaign: trackingParams.utm_campaign || null,
        utm_content: trackingParams.utm_content || null,
        utm_term: trackingParams.utm_term || null,
        page_url: trackingParams.page_url || null,
        referrer: trackingParams.referrer || null,
      } as any);

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: language === 'de' ? 'Bewerbung gesendet!' : 'Application sent!',
        description: language === 'de' ? 'Wir melden uns innerhalb von 24h.' : "We'll get back to you within 24h.",
      });
    } catch (err) {
      console.error('Application error:', err);
      toast({
        variant: 'destructive',
        title: language === 'de' ? 'Fehler' : 'Error',
        description: language === 'de' ? 'Bitte versuche es erneut.' : 'Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, language, trackingParams, toast]);

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSuccess) {
    return (
      <section id="apply-section" className="dark-section relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
        <div className="container max-w-2xl mx-auto px-6 relative z-10 text-center">
          <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="font-display text-display-sm text-foreground mb-4">
            {language === 'de' ? 'Bewerbung erhalten!' : 'Application received!'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'de'
              ? 'Wir melden uns innerhalb von 24h bei dir. Referenzen auf Anfrage verfügbar.'
              : "We'll get back to you within 24h. References available on request."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="apply-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`dark-section relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="container max-w-2xl mx-auto px-6 relative z-10">
        {/* Urgency Badge */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/15 border border-accent/40 text-accent text-sm font-semibold rounded-full">
            <Zap className="w-4 h-4" />
            {language === 'de'
              ? '⚡ Founding Cohort — Plätze von 12 verfügbar'
              : '⚡ Founding Cohort — Seats available out of 12'}
          </span>
        </div>

        <div className="text-center mb-8">
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? 'Jetzt bewerben.' : 'Apply now.'}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {language === 'de'
              ? '15-Minuten-Gespräch — kein Verkaufsdruck. Wir prüfen gemeinsam, ob das Programm zu dir passt.'
              : "15-minute conversation — no sales pressure. We'll check together whether the program is right for you."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 bg-card/10 backdrop-blur-sm border-2 border-border/50 p-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-foreground">{language === 'de' ? 'Vorname' : 'First Name'} *</Label>
              <Input id="firstName" value={formData.firstName} onChange={e => updateField('firstName', e.target.value)} disabled={isSubmitting}
                className={`bg-background/50 ${errors.firstName ? 'border-destructive' : ''}`} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-foreground">{language === 'de' ? 'Nachname' : 'Last Name'} *</Label>
              <Input id="lastName" value={formData.lastName} onChange={e => updateField('lastName', e.target.value)} disabled={isSubmitting}
                className={`bg-background/50 ${errors.lastName ? 'border-destructive' : ''}`} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">{language === 'de' ? 'E-Mail (geschäftlich)' : 'Email (business)'} *</Label>
            <Input id="email" type="email" value={formData.email} onChange={e => updateField('email', e.target.value)} disabled={isSubmitting}
              placeholder={language === 'de' ? 'Bitte geschäftliche E-Mail — wir antworten innerhalb von 24h' : 'Please use business email — we respond within 24h'}
              className={`bg-background/50 ${errors.email ? 'border-destructive' : ''}`} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-foreground">{language === 'de' ? 'Unternehmen' : 'Company'} *</Label>
            <Input id="company" value={formData.company} onChange={e => updateField('company', e.target.value)} disabled={isSubmitting}
              className={`bg-background/50 ${errors.company ? 'border-destructive' : ''}`} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role" className="text-foreground">{language === 'de' ? 'Rolle / Funktion' : 'Role / Function'} *</Label>
            <Input id="role" value={formData.role} onChange={e => updateField('role', e.target.value)} disabled={isSubmitting}
              placeholder={language === 'de' ? 'z.B. Head of Growth, VP Marketing, Gründer' : 'e.g. Head of Growth, VP Marketing, Founder'}
              className={`bg-background/50 ${errors.role ? 'border-destructive' : ''}`} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentCac" className="text-foreground">{language === 'de' ? 'Aktueller CAC (Schätzung)' : 'Current CAC (estimate)'} *</Label>
            <select
              id="currentCac"
              value={formData.currentCac}
              onChange={e => updateField('currentCac', e.target.value)}
              disabled={isSubmitting}
              className={`flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.currentCac ? 'border-destructive' : ''}`}
            >
              <option value="">{language === 'de' ? 'Schätzung reicht — wir klären Details im Gespräch' : 'Estimate is enough — we clarify details in conversation'}</option>
              {cacOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="gtmChallenge" className="text-foreground">{language === 'de' ? 'Größte aktuelle Herausforderung im GTM' : 'Biggest current GTM challenge'} *</Label>
            <Textarea
              id="gtmChallenge"
              value={formData.gtmChallenge}
              onChange={e => updateField('gtmChallenge', e.target.value)}
              disabled={isSubmitting}
              rows={4}
              placeholder={language === 'de'
                ? 'z.B. „Unser CAC ist in den letzten 2 Quartalen um 40% gestiegen — wir wissen nicht, wo der Hebel liegt." Oder: „Wir haben keinen strukturierten Funnel — alles läuft über persönliche Kontakte."'
                : 'e.g. "Our CAC has risen 40% in the last 2 quarters — we don\'t know where the lever is." Or: "We have no structured funnel — everything runs through personal contacts."'}
              className={`bg-background/50 ${errors.gtmChallenge ? 'border-destructive' : ''}`}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sourceChannel" className="text-foreground">{language === 'de' ? 'Wie bist du auf ScalingX aufmerksam geworden?' : 'How did you hear about ScalingX?'}</Label>
            <select
              id="sourceChannel"
              value={formData.sourceChannel}
              onChange={e => updateField('sourceChannel', e.target.value)}
              disabled={isSubmitting}
              className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">—</option>
              {sourceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            size="xl"
            className="w-full bg-gradient-accent text-accent-foreground font-bold shadow-accent-glow"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
            ) : (
              <ArrowRight className="w-5 h-5 mr-2" />
            )}
            {language === 'de' ? 'Gespräch anfragen' : 'Request Conversation'}
          </Button>

          <p className="text-xs text-muted-foreground/60 text-center">
            {language === 'de'
              ? 'Deine Daten werden ausschließlich zur Vorbereitung des Gesprächs verwendet. Kein Newsletter ohne explizite Zustimmung.'
              : 'Your data will only be used to prepare the conversation. No newsletter without explicit consent.'}
          </p>
          <p className="text-xs text-muted-foreground/60 text-center">
            {language === 'de'
              ? 'Referenzen auf Anfrage verfügbar. · Antwort innerhalb von 24h.'
              : 'References available on request. · Response within 24h.'}
          </p>
        </form>
      </div>
    </section>
  );
};

// ============================================================================
// S14 — WARTELISTE COHORT 2
// ============================================================================
const WaitlistSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ backgroundColor: '#0D1F3C' }}
    >
      <div className="container max-w-2xl mx-auto px-6 relative z-10 text-center">
        <h3 className="font-display text-display-sm text-white mb-4">
          {language === 'de' ? 'Cohort 1 ist voll — oder du bist noch nicht bereit?' : "Cohort 1 is full — or you're not ready yet?"}
        </h3>
        <p className="text-white/70 mb-8 max-w-lg mx-auto">
          {language === 'de'
            ? 'Cohort 2 startet voraussichtlich Q3 2026. Trag dich jetzt ein — du bekommst als Erstes Bescheid.'
            : "Cohort 2 starts estimated Q3 2026. Sign up now — you'll be the first to know."}
        </p>
        <Button
          size="lg"
          variant="outline"
          className="border-white/30 text-white hover:bg-white/10 font-bold"
          onClick={() => window.open('/cohort-2', '_blank')}
        >
          {language === 'de' ? 'Für Cohort 2 vormerken →' : 'Register for Cohort 2 →'}
        </Button>
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
        <DataDiagnosisSection />
        <SessionsSection />
        <DifferentiationSection />
        <ICPFilterSection />
        <PricingSection />
        <TrustSection />
        <MichelLasonSection />
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
