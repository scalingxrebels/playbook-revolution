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
  Download,
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

        <p className="text-sm text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.15s' }}>
          {language === 'de'
            ? 'Founding Cohort · Max. 12 Plätze · Startet Ende April 2026'
            : 'Founding Cohort · Max. 12 Seats · Starts Late April 2026'}
        </p>

        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">
            {language === 'de'
              ? 'Dein CAC steigt. Deine Conversion sinkt.'
              : 'Your CAC Is Rising. Your Conversion Is Dropping.'}
          </span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'Du hast kein Revenue-System.' : "You Don't Have a Revenue System."}
          </span>
        </h1>

        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'The Revenue Architecture System™ — 6 Wochen. 22 Deliverables. Vollständiges Revenue System. Live aufgebaut.'
            : 'The Revenue Architecture System™ — 6 weeks. 22 deliverables. Complete Revenue System. Built live.'}
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
// S2: VSL
// ============================================================================
const VSLSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const safetyNetLines = language === 'de'
    ? [
        'Die meisten B2B-SaaS-Teams optimieren Einzelteile — und wundern sich, warum der CAC steigt.',
        'The Revenue Architecture System™ — 6 Wochen, 22 Revenue-Bausteine, vollständiges Revenue System live aufgebaut.',
        'Teilnehmer berichten von 22–58% CAC-Reduktion — durch systematische ICP-Schärfung und Funnel-Optimierung in validierten Engagements.',
      ]
    : [
        'Most B2B SaaS teams optimize individual parts — and wonder why CAC keeps rising.',
        'The Revenue Architecture System™ — 6 weeks, 22 revenue building blocks, complete Revenue System built live.',
        'Participants report 22–58% CAC reduction — through systematic ICP sharpening and funnel optimization in validated engagements.',
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
            {language === 'de'
              ? 'Warum dein CAC steigt — und warum du es nicht mit mehr Taktiken löst'
              : 'Why Your CAC Is Rising — and Why More Tactics Won\'t Fix It'}
          </h2>
        </div>

        <div className="relative aspect-video bg-card/50 backdrop-blur-sm border-2 border-border mb-12 flex items-center justify-center group cursor-pointer hover:border-primary/50 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="relative flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-accent ml-1" />
            </div>
            <p className="text-muted-foreground text-sm">
              {language === 'de' ? '4 Min · Michel Lason' : '4 min · Michel Lason'}
            </p>
          </div>
        </div>

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
// S3: PROBLEM-REFRAME (NEW)
// ============================================================================
const ProblemReframeSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const tactics = language === 'de'
    ? ['Mehr Budget in Ads', 'Neues CRM / neues Tool', 'Mehr Content', 'Neuer SDR']
    : ['More budget into ads', 'New CRM / new tool', 'More content', 'New SDR'];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`dark-section relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="font-display text-display-md text-foreground text-center mb-12">
          {language === 'de'
            ? 'Warum mehr Taktiken das Problem nicht lösen'
            : 'Why More Tactics Won\'t Solve the Problem'}
        </h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            {language === 'de'
              ? 'Die Reaktion auf steigenden CAC ist fast immer dieselbe:'
              : 'The reaction to rising CAC is almost always the same:'}
          </p>

          <div className="space-y-3 pl-4">
            {tactics.map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-muted-foreground/50 shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>

          <p>
            {language === 'de'
              ? 'Das Problem: Jede dieser Maßnahmen optimiert eine Stellschraube — nicht das System dahinter.'
              : 'The problem: Each of these measures optimizes a single lever — not the system behind it.'}
          </p>

          <p>
            {language === 'de'
              ? 'Ein Revenue-System funktioniert nicht, weil einzelne Teile besser werden. Es funktioniert, weil alle Teile in einer Logik zusammenarbeiten.'
              : 'A Revenue System doesn\'t work because individual parts improve. It works because all parts operate in one logic.'}
          </p>

          <p className="text-foreground font-medium text-center py-4">
            ICP → Value Stack → Entry Layer → Messaging → Revenue OS → Traffic
          </p>

          <p>
            {language === 'de'
              ? 'Wer eine Stellschraube dreht, ohne das Gesamtsystem zu verstehen, investiert in die falsche Richtung.'
              : 'Anyone who turns a single lever without understanding the overall system invests in the wrong direction.'}
          </p>
        </div>

        <p className="text-foreground font-medium text-center mt-12 text-lg">
          {language === 'de'
            ? 'The Revenue Architecture System™ baut das System — nicht die nächste Taktik.'
            : 'The Revenue Architecture System™ builds the system — not the next tactic.'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// S4: WAS DU BAUST (5-Layer + Outcome-Kacheln)
// ============================================================================
const DeliverablesSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const layers = [
    { num: 1, titleDe: 'Market & ICP', titleEn: 'Market & ICP', descDe: 'Wer kauft wirklich, warum, wann?', descEn: 'Who really buys, why, when?' },
    { num: 2, titleDe: 'Value Stack', titleEn: 'Value Stack', descDe: 'Was dein ICP zahlt — und warum.', descEn: 'What your ICP pays — and why.' },
    { num: 3, titleDe: 'Entry Layer', titleEn: 'Entry Layer', descDe: 'Wie Traffic zu qualifizierten Leads wird.', descEn: 'How traffic becomes qualified leads.' },
    { num: 4, titleDe: 'Revenue OS', titleEn: 'Revenue OS', descDe: 'Wie Marketing, Sales und CS in einer Logik arbeiten.', descEn: 'How Marketing, Sales, and CS operate in one logic.' },
    { num: 5, titleDe: 'Traffic Activation', titleEn: 'Traffic Activation', descDe: 'Wie das System skalierbaren Traffic bekommt.', descEn: 'How the system gets scalable traffic.' },
  ];

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

        {/* 5-Layer Block */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-muted-foreground text-center mb-8">
            {language === 'de'
              ? 'Ein Revenue-System hat 5 Layer. Die meisten Teams haben 1–2 davon. Das Programm baut alle 5. In 6 Wochen. Live.'
              : 'A Revenue System has 5 layers. Most teams have 1–2 of them. The program builds all 5. In 6 weeks. Live.'}
          </p>
          <div className="space-y-4">
            {layers.map((layer) => (
              <div key={layer.num} className="flex items-start gap-4 bg-card/50 backdrop-blur-sm border border-border/50 p-4">
                <span className="text-sm font-bold text-accent shrink-0 mt-0.5">Layer {layer.num}</span>
                <div>
                  <span className="font-semibold text-foreground">{language === 'de' ? layer.titleDe : layer.titleEn}</span>
                  <span className="text-muted-foreground ml-3">{language === 'de' ? layer.descDe : layer.descEn}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome Tiles */}
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

        <p className="text-center text-muted-foreground mb-8">
          {language === 'de'
            ? '22 fertige Revenue-Bausteine. In 6 Wochen. Live aufgebaut.'
            : '22 finished revenue building blocks. In 6 weeks. Built live.'}
        </p>

        <div className="text-center">
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
          >
            {language === 'de' ? 'Early Access sichern' : 'Secure Early Access'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// S5: ICP-QUALIFIKATION (NEW)
// ============================================================================
const ICPQualificationSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const forYou = language === 'de'
    ? [
        'B2B SaaS · Tech-enabled Services · DACH',
        '€1M–€20M ARR',
        'Du hast ein GTM-Team oder bist selbst operativ verantwortlich',
        'Du willst ein System — keine weiteren Empfehlungen',
        'Du kannst 4h pro Woche für 6 Wochen investieren',
      ]
    : [
        'B2B SaaS · Tech-enabled Services · DACH',
        '€1M–€20M ARR',
        'You have a GTM team or are operationally responsible yourself',
        'You want a system — not more recommendations',
        'You can invest 4h per week for 6 weeks',
      ];

  const notForYou = language === 'de'
    ? [
        'Pre-Revenue oder Idea Stage',
        'Agencies, Freelancer, Coaches',
        'Du suchst ein Kurs-Zertifikat, keine operative Umsetzung',
        'Du willst Theorie — nicht bauen',
      ]
    : [
        'Pre-Revenue or Idea Stage',
        'Agencies, Freelancers, Coaches',
        'You want a course certificate, not operational execution',
        'You want theory — not building',
      ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`dark-section relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Für wen es passt' : 'Who It\'s For'}
          </span>
          <h2 className="font-display text-display-md text-foreground">
            {language === 'de' ? 'Für wen das Programm gebaut ist' : 'Who the Program Is Built For'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
};

// ============================================================================
// S6/S7: PROGRAM + FORMAT
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
        'ca. 2–3h Async-Arbeit zwischen den Sessions (Schätzung)',
        'Alle 22 Revenue-Bausteine als fertige Assets',
        'Lifetime-Zugang zu allen Materialien',
      ]
    : [
        '6 weeks · 1× per week · 4h live',
        '3× Expert Sessions à 1h (1:1 with Michel)',
        'Approx. 2–3h async work between sessions (estimate)',
        'All 22 revenue building blocks as finished assets',
        'Lifetime access to all materials',
      ];

  return (
    <section
      id="program-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
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
              className="bg-card/80 backdrop-blur-sm border-2 border-border/50 p-6 hover:border-primary/30 transition-all duration-300"
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

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground italic">
            {language === 'de'
              ? '„Nach Woche 6 hast du kein Konzept. Du hast ein live-fähiges Revenue System."'
              : '"After week 6 you don\'t have a concept. You have a live-ready Revenue System."'}
          </p>
        </div>

        {/* Format Box */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-xl font-bold text-foreground text-center mb-6">
            {language === 'de' ? 'Was das konkret bedeutet' : 'What This Means Concretely'}
          </h3>
          <div className="bg-card/80 backdrop-blur-sm border-2 border-border/50 p-8">
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
      </div>
    </section>
  );
};

// ============================================================================
// S8: FOUNDING COHORT
// ============================================================================
const FoundingFrameSection: React.FC = () => {
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
                <span>{language === 'de' ? 'Max. 12 Plätze — startet ab 4 Teilnehmern.' : 'Max. 12 seats — starts from 4 participants.'}</span>
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
          <div className="text-center mt-8">
            <Button
              size="xl"
              className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
              onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
            >
              {language === 'de' ? 'Early Access sichern' : 'Secure Early Access'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// S9: KEIN RISIKO (NEW — standalone section before Pricing)
// ============================================================================
const NoRiskSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Kein Risiko. Kein Lock-in.' : 'No Risk. No Lock-in.'}
          </span>
        </div>

        <div className="bg-accent/5 border-2 border-accent/20 p-8 md:p-12 text-center mb-12">
          <Shield className="w-10 h-10 text-accent mx-auto mb-4" />
          <h3 className="font-display text-xl font-bold text-foreground mb-4">
            Session-1-Guarantee
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {language === 'de'
              ? 'Wenn Session 1 nicht hält, was sie verspricht — kein weiteres Commitment. Volle Rückerstattung. Du entscheidest nach der ersten Session. Nicht vorher. Nicht blind.'
              : "If Session 1 doesn't deliver what it promises — no further commitment. Full refund. You decide after the first session. Not before. Not blindly."}
          </p>
        </div>

        <p className="text-center text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {language === 'de'
            ? 'Das Programm kostet einen Bruchteil dessen, was ein klassisches Consulting-Engagement kostet — und liefert ein System, das bleibt. Nicht Slides, die verstauben.'
            : 'The program costs a fraction of a classic consulting engagement — and delivers a system that stays. Not slides that gather dust.'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// S10: CREDIBILITY (Warum das funktioniert)
// ============================================================================
const PreCohortProofSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const proofPillars = [
    {
      icon: Award,
      titleDe: 'Revenue-Systeme von Microsoft über Haufe Group bis smapOne',
      titleEn: 'Revenue Systems from Microsoft via Haufe Group to smapOne',
      textDe: 'Seit 19 Jahren Revenue-Systeme aufgebaut — nicht als Berater, als Operator. 140+ operative Engagements. Die Methode kommt aus der Praxis, nicht aus der Theorie.',
      textEn: 'For 19 years building Revenue Systems — not as a consultant, as an operator. 140+ operational engagements. The method comes from practice, not theory.',
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
      className={`dark-section relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Warum das funktioniert' : 'Why This Works'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Warum das funktioniert' : 'Why This Works'}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {proofPillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-card/10 backdrop-blur-sm border-2 border-border/50 p-8 hover:border-accent/30 transition-all duration-300"
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
// S11: WER DAS GEBAUT HAT (Michel Lason)
// ============================================================================
const CredibilitySection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const quotes = [
    {
      textDe: '„Das Muster, das Michel beschreibt, kenne ich aus eigener Erfahrung. Wir haben jahrelang einzelne Teile optimiert — und das eigentliche Problem übersehen."',
      textEn: '"The pattern Michel describes, I know from my own experience. We optimized individual parts for years — and missed the actual problem."',
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
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Wer das gebaut hat — und warum' : 'Who Built This — and Why'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            Michel Lason
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="aspect-[3/4] bg-card/50 border-2 border-border mb-6 overflow-hidden">
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
                  ? 'Und ich habe gesehen, was nicht funktioniert: Stellschrauben drehen ohne Systemfundament. Mehr Budget in ein System, das noch nicht funktioniert. Taktiken ohne strategischen Rahmen.'
                  : "And I've seen what doesn't work: Turning levers without system foundation. More budget into a system that doesn't work yet. Tactics without strategic framework."}
              </p>
              <p className="text-foreground font-medium">
                {language === 'de'
                  ? 'The Revenue Architecture System™ ist das, was ich mir selbst gewünscht hätte — als ich zum ersten Mal ein Revenue System aufgebaut habe.'
                  : 'The Revenue Architecture System™ is what I wished I had — when I built a Revenue System for the first time.'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((quote, index) => (
            <div key={index} className="bg-card/80 backdrop-blur-sm border-2 border-border/50 p-6">
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
// S12: PRICING
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
        ? [
            '6× Live-Sessions (4h je)',
            '22 Revenue-Bausteine',
            '1× Expert-Session 1:1 (je 1h)',
          ]
        : [
            '6× Live Sessions (4h each)',
            '22 Revenue building blocks',
            '1× Expert Session 1:1 (1h each)',
          ],
    },
    {
      name: 'Plus',
      price: '€8.900',
      priceC2: '€10.900',
      recommended: true,
      targetDe: 'Teams mit aktivem GTM-Betrieb und Optimierungsbedarf',
      targetEn: 'Teams with active GTM operations and optimization needs',
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
      targetDe: 'Unternehmen, die ihr System nach Woche 6 direkt aktivieren wollen',
      targetEn: 'Companies that want to activate their system right after week 6',
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
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Angebot für Cohort 1' : 'Offer for Cohort 1'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? 'Dein Investment.' : 'Your Investment.'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'de'
              ? 'Drei Optionen. Eine Entscheidung: Welches System brauchst du?'
              : 'Three options. One decision: Which system do you need?'}
          </p>
        </div>

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
                <span className="text-sm text-muted-foreground ml-1">{language === 'de' ? 'zzgl. MwSt.' : 'excl. VAT'}</span>
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

        <p className="text-center text-sm text-muted-foreground mb-16">
          {language === 'de'
            ? '3× monatliche Raten möglich (alle Tiers). Details im Gespräch.'
            : '3× monthly installments available (all tiers). Details in conversation.'}
        </p>

        {/* Pricing Trust Bridge */}
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
// S13: APPLICATION PROCESS
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
      descDe: 'Wir entscheiden gemeinsam, ob es passt. Kein Pitch — eine gemeinsame Entscheidung.',
      descEn: "We decide together if it's a fit. No pitch — a joint decision.",
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
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Wie die Bewerbung funktioniert' : 'How the Application Works'}
          </span>
          <h2 className="font-display text-display-sm text-foreground">
            {language === 'de' ? 'Vier Schritte. Kein Verkaufsgespräch.' : 'Four Steps. No Sales Pitch.'}
          </h2>
        </div>

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

        <p className="text-center text-sm text-muted-foreground mt-8">
          {language === 'de' ? 'Start Ende April 2026' : 'Starting end of April 2026'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// S14: APPLY-FORM (native form → ras_applications)
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
      toast({
        title: language === 'de' ? 'Bewerbung eingegangen!' : 'Application received!',
        description: language === 'de'
          ? 'Michel meldet sich innerhalb von 48h persönlich.'
          : 'Michel will get back to you personally within 48h.',
      });
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
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Bereit, mehr zu erfahren?' : 'Ready to Learn More?'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? 'Jetzt bewerben' : 'Apply Now'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'de'
              ? 'Kurzes Formular — 5 Minuten. Michel meldet sich innerhalb von 48h persönlich.'
              : 'Short form — 5 minutes. Michel will get back to you personally within 48h.'}
          </p>
        </div>

        {isSuccess ? (
          <div className="p-8 border border-accent/30 bg-accent/5 text-center">
            <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              {language === 'de' ? 'Bewerbung eingegangen!' : 'Application received!'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'de'
                ? 'Michel meldet sich innerhalb von 48h persönlich bei dir.'
                : 'Michel will get back to you personally within 48h.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-card/10 backdrop-blur-sm border-2 border-border/50 p-8">
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

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">E-Mail *</Label>
              <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData(d => ({ ...d, email: e.target.value }))} className={errors.email ? 'border-destructive' : ''} disabled={isSubmitting} />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground">{language === 'de' ? 'Unternehmen' : 'Company'} *</Label>
                <Input id="company" value={formData.company} onChange={(e) => setFormData(d => ({ ...d, company: e.target.value }))} className={errors.company ? 'border-destructive' : ''} disabled={isSubmitting} />
                {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="role" className="text-foreground">{language === 'de' ? 'Rolle' : 'Role'} *</Label>
                <Input id="role" value={formData.role} onChange={(e) => setFormData(d => ({ ...d, role: e.target.value }))} className={errors.role ? 'border-destructive' : ''} disabled={isSubmitting} />
                {errors.role && <p className="text-xs text-destructive">{errors.role}</p>}
              </div>
            </div>

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

            <div className="space-y-2">
              <Label htmlFor="gtm_challenge" className="text-foreground">
                {language === 'de' ? 'Aktuelle Situation & was du in 6 Wochen erreichen willst' : 'Current situation & what you want to achieve in 6 weeks'} *
              </Label>
              <Textarea
                id="gtm_challenge"
                value={formData.gtm_challenge}
                onChange={(e) => setFormData(d => ({ ...d, gtm_challenge: e.target.value }))}
                placeholder={language === 'de' ? '2–3 Sätze genügen.' : '2–3 sentences are enough.'}
                className={`min-h-[100px] ${errors.gtm_challenge ? 'border-destructive' : ''}`}
                disabled={isSubmitting}
              />
              {errors.gtm_challenge && <p className="text-xs text-destructive">{errors.gtm_challenge}</p>}
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
                  {language === 'de' ? 'Bewerbung einreichen' : 'Submit Application'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </form>
        )}

        {/* Direct contact */}
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
      </div>
    </section>
  );
};

// ============================================================================
// S15: LEAD MAGNET / WARTELISTE
// ============================================================================
const emailSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
});

const LeadCaptureSection: React.FC<{ onOpenMlSync: () => void }> = ({ onOpenMlSync }) => {
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
        <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
          {language === 'de' ? 'Noch nicht bereit?' : 'Not Ready Yet?'}
        </span>
        <h2 className="font-display text-display-md text-foreground mb-4">
          {language === 'de' ? 'Erfahre als Erste/r, wenn Cohort 2 öffnet.' : 'Be the First to Know When Cohort 2 Opens.'}
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
              placeholder={language === 'de' ? 'deine@email.de' : 'your@email.com'}
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
                    ? 'Das PDF erklärt, wie du aufhörst, Stellschrauben zu drehen — und anfängst, systematisch zu wachsen.'
                    : 'The PDF explains how to stop turning levers — and start growing systematically.'}
                </p>
              </div>
            </div>
          </div>
        )}

        <p className="text-sm text-muted-foreground mb-6">
          {language === 'de' ? 'Fragen? Direkt sprechen → ' : 'Questions? Talk directly → '}
          <button
            onClick={onOpenMlSync}
            className="text-primary hover:text-primary/80 transition-colors font-medium"
          >
            {language === 'de' ? 'Termin mit Michel buchen' : 'Book a call with Michel'}
          </button>
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// S16: FAQ
// ============================================================================
const FAQSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const faqItems = [
    {
      qDe: 'Ich habe wenig Zeit. Wie viel Aufwand ist das wirklich?',
      qEn: 'I have limited time. How much effort is this really?',
      aDe: '4h Live pro Woche — das ist die Kernzeit. Dazu ca. 2–3h Async für die Deliverables (Schätzung). Wer keine 4h pro Woche investieren kann, sollte nicht teilnehmen. Wer es tut, hat nach 6 Wochen ein fertiges System — kein weiteres Konzept.',
      aEn: '4h live per week — that\'s the core time. Plus approx. 2–3h async for the deliverables (estimate). If you can\'t invest 4h per week, don\'t participate. If you can, you\'ll have a complete system after 6 weeks — not another concept.',
    },
    {
      qDe: 'Ich bin kein Anfänger. Ist das nicht zu basic für mich?',
      qEn: "I'm not a beginner. Isn't this too basic for me?",
      aDe: 'Das Programm ist für Teams mit €1M–€20M ARR gebaut — nicht für Einsteiger. Die meisten Teilnehmer haben bereits GTM-Erfahrung. Das Programm bringt Struktur in das, was vorhanden ist — und schließt die Lücken, die beim Skalieren entstehen.',
      aEn: "The program is built for teams with €1M–€20M ARR — not for beginners. Most participants already have GTM experience. The program brings structure to what exists — and closes the gaps that emerge when scaling.",
    },
    {
      qDe: 'Was passiert, wenn ich nach Session 1 merke, dass es nicht passt?',
      qEn: "What happens if I realize after Session 1 that it's not right?",
      aDe: 'Session-1-Guarantee: Volle Rückerstattung. Kein weiteres Commitment. Du entscheidest nach der ersten Session — nicht blind.',
      aEn: 'Session 1 Guarantee: Full refund. No further commitment. You decide after the first session — not blindly.',
    },
    {
      qDe: 'Founding Price — ist das ein Rabatt, weil das Programm unfertig ist?',
      qEn: 'Founding Price — is that a discount because the program is unfinished?',
      aDe: 'Nein. Das Programm ist vollständig — alle 22 Deliverables, alle Sessions, alle Assets. Der Founding-Preis ist ein Dankeschön an die ersten Teilnehmer, die gleichzeitig Teil des Beirats werden und das Programm aktiv mitgestalten.',
      aEn: "No. The program is complete — all 22 deliverables, all sessions, all assets. The Founding Price is a thank-you to the first participants who also become part of the advisory board and actively shape the program.",
    },
    {
      qDe: 'Was passiert, wenn meine Bewerbung abgelehnt wird?',
      qEn: 'What happens if my application is rejected?',
      aDe: 'Du erhältst eine ehrliche Einschätzung — und konkrete Empfehlungen, was vorher sinnvoll wäre. Keine Absage ohne Begründung.',
      aEn: "You'll receive an honest assessment — and concrete recommendations for what would make sense beforehand. No rejection without reasoning.",
    },
    {
      qDe: 'Kann ich auch als Team teilnehmen?',
      qEn: 'Can I participate as a team?',
      aDe: 'Ja. Enterprise-Option auf Anfrage. Details im Gespräch.',
      aEn: 'Yes. Enterprise option on request. Details in conversation.',
    },
    {
      qDe: 'Gibt es Ratenzahlung?',
      qEn: 'Is installment payment available?',
      aDe: 'Ja — 3× monatliche Raten für alle Tiers. Details klären wir im Gespräch.',
      aEn: 'Yes — 3× monthly installments for all tiers. Details in conversation.',
    },
    {
      qDe: 'Was ist der Unterschied zu klassischem Consulting?',
      qEn: 'What\'s the difference from traditional consulting?',
      aDe: 'Klassisches Consulting gibt Empfehlungen. Du bekommst Slides. Das Programm baut das System mit dir — live, in 6 Wochen, mit 22 fertigen Assets. Du gehst nicht mit einer Präsentation raus. Du gehst mit einem funktionierenden Revenue System raus.',
      aEn: 'Traditional consulting gives recommendations. You get slides. The program builds the system with you — live, in 6 weeks, with 22 finished assets. You don\'t walk out with a presentation. You walk out with a functioning Revenue System.',
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`dark-section relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Häufige Fragen' : 'Frequently Asked Questions'}
          </span>
          <h2 className="font-display text-display-sm text-foreground">
            FAQ
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
// MAIN PAGE COMPONENT
// ============================================================================
const RevenueArchitectureSystem: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingSlug, setBookingSlug] = useState<'inflection-call' | 'ml-sync'>('inflection-call');
  const { language } = useLanguage();

  useEffect(() => {
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
        <DeliverablesSection />
        <ICPQualificationSection />
        <ProgramSection />
        <FoundingFrameSection />
        <NoRiskSection />
        <PreCohortProofSection />
        <CredibilitySection />
        <PricingSection />
        <ApplicationProcessSection />
        <ApplyFormSection onOpenMlSync={handleOpenMlSync} />
        <LeadCaptureSection onOpenMlSync={handleOpenMlSync} />
        <FAQSection />
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
