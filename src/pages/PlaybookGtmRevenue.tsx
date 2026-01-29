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
  X,
  AlertTriangle,
  TrendingUp,
  Target,
  Users,
  Settings,
  Zap,
  Download,
  Phone,
  Clock,
  Award,
  BarChart3,
  Brain,
  Rocket,
  FileText,
  Calendar,
  Crosshair,
  Send,
  Magnet,
  Handshake,
  DollarSign,
  MessageSquare,
  Sparkles,
  Briefcase,
  UserCheck,
} from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

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
      <div className="container max-w-5xl mx-auto px-6 py-24 relative z-10 text-center">
        {/* Breadcrumb */}
        <Breadcrumb className="justify-center mb-6 animate-fade-in">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/playbooks" className="text-muted-foreground hover:text-foreground">
                Playbooks
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-foreground font-medium">GTM/Revenue Playbook</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Badge */}
        <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <TrendingUp className="w-4 h-4 mr-2" />
          Playbook · Growth Engines
        </Badge>

        {/* Headline */}
        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">GTM/Revenue Playbook</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'Revenue Engine mit AI skalieren' : 'Build a Revenue Engine That Scales with AI'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Lerne das 3-Komponenten-Framework (ICP Clarity + Sales Motion + RevOps), das AI-native Unternehmen nutzen, um CAC um 50% zu senken und Win Rates um 100% zu steigern.'
            : 'Learn the 3-component framework (ICP Clarity + Sales Motion + RevOps) used by AI-native companies to reduce CAC by 50% and increase win rates by 100%.'}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => window.open('https://scalingx.fillout.com/inflection-call', '_blank')}
          >
            <Phone className="w-5 h-5 mr-2" />
            {language === 'de' ? 'Kostenloses Inflection Call buchen' : 'Book Free Inflection Call'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('/downloads/gtm-revenue-playbook.pdf', '_blank')}
            className="border-2"
          >
            <Download className="w-4 h-4 mr-2" />
            {language === 'de' ? 'Playbook herunterladen' : 'Download Playbook PDF'}
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-accent" />
            <span>{language === 'de' ? '~2,400 Wörter' : '~2,400 Words'}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-accent" />
            <span>{language === 'de' ? '3 Fallstudien' : '3 Case Studies'}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-accent" />
            <span>{language === 'de' ? '12-Wochen Roadmap' : '12-Week Roadmap'}</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('executive-summary')}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-fade-in cursor-pointer"
        style={{ animationDelay: '1s' }}
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

// ============================================================================
// SECTION 2: EXECUTIVE SUMMARY
// ============================================================================
const ExecutiveSummarySection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="executive-summary"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 bg-background transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Zusammenfassung' : 'Executive Summary'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            GTM/Revenue Playbook
          </h2>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* The Problem */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-destructive mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              {language === 'de' ? 'Das Problem' : 'The Problem'}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'de'
                ? 'Die meisten Series B/C Unternehmen kämpfen mit CAC-Inflation und sinkenden Win Rates. Das Revenue-Wachstum verlangsamt sich von 100% auf 30%, während du von €10M auf €50M ARR skalierst. Das traditionelle Playbook (mehr Reps einstellen, mehr Ads schalten) funktioniert nicht mehr.'
                : "Most Series B/C companies struggle with CAC inflation and declining win rates. Revenue growth slows from 100% → 30% as you scale from €10M → €50M ARR. The traditional playbook (hire more reps, increase ad spend) doesn't work anymore."}
            </p>
          </div>

          {/* Why It Matters */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              {language === 'de' ? 'Warum es wichtig ist' : 'Why It Matters'}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'de'
                ? 'Das ist nicht nur ein Sales-Problem – es ist ein strategischer Engpass. Ohne eine skalierbare Revenue Engine erreichst du deinen nächsten Funding-Meilenstein nicht. Investoren merken es. Boards stellen Fragen. Wachstum stagniert.'
                : "This isn't just a sales problem—it's a strategic bottleneck. Without a scalable revenue engine, you can't reach your next funding milestone. Investors notice. Boards ask questions. Growth stalls."}
            </p>
          </div>

          {/* The Solution */}
          <div className="p-6 bg-accent/10 border border-accent/30 rounded-lg">
            <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              {language === 'de' ? 'Die Lösung' : 'The Solution'}
            </h3>
            <p className="text-foreground leading-relaxed">
              {language === 'de'
                ? 'AI-native Unternehmen lösen das anders. Sie nutzen das 3-Komponenten GTM-Framework (ICP Clarity + Sales Motion + RevOps), um CAC um 50% zu senken und Win Rates um 100% zu steigern. Dieses Playbook zeigt dir wie.'
                : 'AI-native companies solve this differently. They use the 3-component GTM framework (ICP Clarity + Sales Motion + RevOps) to reduce CAC by 50% and increase win rates by 100%. This playbook shows you how.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 3: THE 7-LEVER FRAMEWORK
// ============================================================================
const FrameworkSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const levers = [
    {
      id: 'icp',
      icon: Crosshair,
      color: 'text-violet-500',
      bgColor: 'bg-violet-500/10',
      title: { en: 'ICP Clarity', de: 'ICP Clarity' },
      subtitle: { en: 'Know exactly who to target', de: 'Wissen, wen du ansprechen musst' },
      description: {
        en: 'Crystal-clear definition of your Ideal Customer Profile. Without ICP clarity, you waste 60% of sales effort on wrong-fit leads.',
        de: 'Glasklare Definition deines Ideal Customer Profiles. Ohne ICP-Klarheit verschwendest du 60% des Sales-Aufwands für falsche Leads.'
      },
      metrics: [
        { en: 'TAM/SAM/SOM Analysis', de: 'TAM/SAM/SOM Analyse' },
        { en: '5-Dimension Buyer Persona', de: '5-Dimensionen Buyer Persona' },
        { en: 'Pain Point Mapping', de: 'Pain Point Mapping' },
      ],
      actions: [
        { en: 'Build ICP Canvas with 5 dimensions', de: 'ICP Canvas mit 5 Dimensionen erstellen' },
        { en: 'Score existing accounts (1-10)', de: 'Bestehende Accounts bewerten (1-10)' },
        { en: 'Define anti-ICP criteria', de: 'Anti-ICP Kriterien definieren' },
      ],
    },
    {
      id: 'outbound',
      icon: Send,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      title: { en: 'Outbound Engine', de: 'Outbound Engine' },
      subtitle: { en: 'Systematic prospecting at scale', de: 'Systematisches Prospecting in Scale' },
      description: {
        en: 'AI-powered SDR process with multi-channel sequencing. Personalization at scale without losing authenticity.',
        de: 'AI-gestützter SDR-Prozess mit Multi-Channel-Sequencing. Personalisierung in Scale ohne Authentizitätsverlust.'
      },
      metrics: [
        { en: 'Response Rate +40%', de: 'Response Rate +40%' },
        { en: 'Meeting Booked Rate', de: 'Meeting Booked Rate' },
        { en: 'Pipeline Generated', de: 'Pipeline Generated' },
      ],
      actions: [
        { en: 'Implement 5-touch sequence (Email, LinkedIn, Call)', de: '5-Touch Sequenz implementieren (Email, LinkedIn, Call)' },
        { en: 'Set up Clay/Apollo for enrichment', de: 'Clay/Apollo für Enrichment einrichten' },
        { en: 'A/B test messaging angles', de: 'Messaging-Ansätze A/B testen' },
      ],
    },
    {
      id: 'inbound',
      icon: Magnet,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      title: { en: 'Inbound Machine', de: 'Inbound Machine' },
      subtitle: { en: 'Attract qualified buyers', de: 'Qualifizierte Käufer anziehen' },
      description: {
        en: 'Content strategy, SEO, and lead magnets that attract ICP-fit prospects. Build authority while generating pipeline.',
        de: 'Content-Strategie, SEO und Lead Magnets, die ICP-fit Prospects anziehen. Autorität aufbauen während Pipeline generiert wird.'
      },
      metrics: [
        { en: 'Organic Traffic Growth', de: 'Organisches Traffic-Wachstum' },
        { en: 'MQL to SQL Conversion', de: 'MQL zu SQL Conversion' },
        { en: 'Content ROI', de: 'Content ROI' },
      ],
      actions: [
        { en: 'Create pillar content for each ICP pain point', de: 'Pillar Content für jeden ICP Pain Point erstellen' },
        { en: 'Build gated assets (ROI calculator, assessments)', de: 'Gated Assets erstellen (ROI-Rechner, Assessments)' },
        { en: 'Implement lead scoring model', de: 'Lead Scoring Modell implementieren' },
      ],
    },
    {
      id: 'partners',
      icon: Handshake,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      title: { en: 'Partner Leverage', de: 'Partner Leverage' },
      subtitle: { en: 'Multiply reach through ecosystem', de: 'Reichweite durch Ökosystem multiplizieren' },
      description: {
        en: 'Channel partners, tech partners, and integration ecosystem. Leverage others\' audiences to accelerate growth.',
        de: 'Channel Partner, Tech Partner und Integrations-Ökosystem. Die Audiences anderer nutzen, um Wachstum zu beschleunigen.'
      },
      metrics: [
        { en: 'Partner-Sourced Pipeline', de: 'Partner-Sourced Pipeline' },
        { en: 'Co-Sell Opportunities', de: 'Co-Sell Opportunities' },
        { en: 'Integration Adoption', de: 'Integration Adoption' },
      ],
      actions: [
        { en: 'Map partner ecosystem (20+ potential partners)', de: 'Partner-Ökosystem mappen (20+ potenzielle Partner)' },
        { en: 'Build partner enablement kit', de: 'Partner Enablement Kit erstellen' },
        { en: 'Launch co-marketing campaign', de: 'Co-Marketing Kampagne starten' },
      ],
    },
    {
      id: 'pricing',
      icon: DollarSign,
      color: 'text-rose-500',
      bgColor: 'bg-rose-500/10',
      title: { en: 'Pricing Power', de: 'Pricing Power' },
      subtitle: { en: 'Capture value, not just revenue', de: 'Wert erfassen, nicht nur Umsatz' },
      description: {
        en: 'Value-based pricing, strategic packaging, and clear upsell paths. Stop leaving money on the table.',
        de: 'Wertbasierte Preisgestaltung, strategisches Packaging und klare Upsell-Pfade. Kein Geld mehr auf dem Tisch liegen lassen.'
      },
      metrics: [
        { en: 'ACV Increase', de: 'ACV Steigerung' },
        { en: 'Expansion Revenue', de: 'Expansion Revenue' },
        { en: 'Price Realization', de: 'Price Realization' },
      ],
      actions: [
        { en: 'Conduct willingness-to-pay research', de: 'Zahlungsbereitschafts-Research durchführen' },
        { en: 'Design 3-tier packaging (Good/Better/Best)', de: '3-Tier Packaging designen (Good/Better/Best)' },
        { en: 'Build expansion triggers into product', de: 'Expansion-Trigger ins Produkt einbauen' },
      ],
    },
    {
      id: 'sales',
      icon: MessageSquare,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      title: { en: 'Sales Process', de: 'Sales Process' },
      subtitle: { en: 'Repeatable path to close', de: 'Wiederholbarer Weg zum Abschluss' },
      description: {
        en: 'Structured sales methodology from discovery to close. Every rep follows the same winning playbook.',
        de: 'Strukturierte Sales-Methodik von Discovery bis Close. Jeder Rep folgt dem gleichen Winning Playbook.'
      },
      metrics: [
        { en: 'Win Rate +50%', de: 'Win Rate +50%' },
        { en: 'Sales Cycle -30%', de: 'Sales Cycle -30%' },
        { en: 'Forecast Accuracy', de: 'Forecast Accuracy' },
      ],
      actions: [
        { en: 'Document 7-stage sales playbook', de: '7-Stufen Sales Playbook dokumentieren' },
        { en: 'Implement MEDDIC qualification', de: 'MEDDIC Qualifizierung implementieren' },
        { en: 'Build mutual action plan template', de: 'Mutual Action Plan Vorlage erstellen' },
      ],
    },
    {
      id: 'plg',
      icon: Sparkles,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      title: { en: 'PLG Motion', de: 'PLG Motion' },
      subtitle: { en: 'Let the product sell itself', de: 'Das Produkt für sich selbst verkaufen lassen' },
      description: {
        en: 'Product-led growth with freemium, trials, and self-serve. Reduce CAC by letting users experience value before sales touch.',
        de: 'Product-led Growth mit Freemium, Trials und Self-Serve. CAC reduzieren, indem User Wert erleben, bevor Sales eingreift.'
      },
      metrics: [
        { en: 'PQL Conversion Rate', de: 'PQL Conversion Rate' },
        { en: 'Time to Value', de: 'Time to Value' },
        { en: 'Viral Coefficient', de: 'Viral Coefficient' },
      ],
      actions: [
        { en: 'Define PQL criteria (usage-based signals)', de: 'PQL-Kriterien definieren (nutzungsbasierte Signale)' },
        { en: 'Build onboarding flow with "aha moment" in < 5 min', de: 'Onboarding-Flow mit "Aha-Moment" in < 5 Min erstellen' },
        { en: 'Implement in-app upgrade prompts', de: 'In-App Upgrade-Prompts implementieren' },
      ],
    },
  ];

  return (
    <section
      id="framework-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 bg-secondary/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Das Framework' : 'The Framework'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Die 7 Revenue-Hebel' : 'The 7 Revenue Levers'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Jeder Hebel ist ein Multiplikator. Optimiere alle 7, um deine Revenue Engine zu skalieren.'
              : 'Each lever is a multiplier. Optimize all 7 to scale your revenue engine.'}
          </p>
        </div>

        {/* 7-Lever Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {levers.map((lever, index) => (
            <AccordionItem
              key={lever.id}
              value={lever.id}
              className="border-2 rounded-lg bg-card overflow-hidden data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-4 text-left">
                  <div className={`w-12 h-12 rounded-lg ${lever.bgColor} flex items-center justify-center shrink-0`}>
                    <lever.icon className={`w-6 h-6 ${lever.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-muted-foreground">#{index + 1}</span>
                      <h3 className="text-lg font-bold text-foreground">
                        {language === 'de' ? lever.title.de : lever.title.en}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language === 'de' ? lever.subtitle.de : lever.subtitle.en}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="pt-4 border-t border-border">
                  {/* Description */}
                  <p className="text-muted-foreground mb-6">
                    {language === 'de' ? lever.description.de : lever.description.en}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Key Metrics */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                        {language === 'de' ? 'Key Metrics' : 'Key Metrics'}
                      </h4>
                      <ul className="space-y-2">
                        {lever.metrics.map((metric, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                            <BarChart3 className="w-4 h-4 text-muted-foreground shrink-0" />
                            {language === 'de' ? metric.de : metric.en}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Items */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-3">
                        {language === 'de' ? 'Action Items' : 'Action Items'}
                      </h4>
                      <ul className="space-y-2">
                        {lever.actions.map((action, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                            <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            {language === 'de' ? action.de : action.en}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 4: BEST PRACTICES
// ============================================================================
const BestPracticesSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const practices = [
    {
      category: { en: 'ICP Clarity', de: 'ICP Clarity' },
      items: [
        { do: { en: 'Score every lead (1-10) before outreach', de: 'Jeden Lead (1-10) vor Outreach bewerten' }, dont: { en: 'Spray and pray to any company that fits firmographics', de: 'Spray and Pray an jede Firma, die firmographisch passt' } },
        { do: { en: 'Define anti-ICP criteria to disqualify fast', de: 'Anti-ICP Kriterien definieren, um schnell zu disqualifizieren' }, dont: { en: 'Waste time on leads that will never close', de: 'Zeit mit Leads verschwenden, die nie closen' } },
        { do: { en: 'Update ICP quarterly based on win/loss data', de: 'ICP vierteljährlich basierend auf Win/Loss-Daten aktualisieren' }, dont: { en: 'Keep using year-old ICP that no longer fits reality', de: 'Veraltetes ICP verwenden, das nicht mehr zur Realität passt' } },
      ],
    },
    {
      category: { en: 'Sales Motion', de: 'Sales Motion' },
      items: [
        { do: { en: 'Use value-based demos (show ROI, not features)', de: 'Wertbasierte Demos (ROI zeigen, nicht Features)' }, dont: { en: 'Feature dump in every demo', de: 'Feature-Dump in jeder Demo' } },
        { do: { en: 'Implement MEDDIC qualification framework', de: 'MEDDIC Qualifizierungs-Framework implementieren' }, dont: { en: 'Let reps freestyle qualification criteria', de: 'Reps eigene Qualifizierungskriterien erfinden lassen' } },
        { do: { en: 'Build mutual action plans for every deal >€50K', de: 'Mutual Action Plans für jeden Deal >€50K erstellen' }, dont: { en: 'Hope deals close without buyer alignment', de: 'Hoffen, dass Deals ohne Buyer Alignment closen' } },
      ],
    },
    {
      category: { en: 'RevOps', de: 'RevOps' },
      items: [
        { do: { en: 'Single source of truth in CRM', de: 'Single Source of Truth im CRM' }, dont: { en: 'Data scattered across spreadsheets', de: 'Daten über Spreadsheets verstreut' } },
        { do: { en: 'Weekly forecast calls with deal-by-deal review', de: 'Wöchentliche Forecast Calls mit Deal-by-Deal Review' }, dont: { en: 'Monthly reviews that catch issues too late', de: 'Monatliche Reviews, die Probleme zu spät erkennen' } },
        { do: { en: 'Automate data entry with tools like Gong', de: 'Dateneingabe mit Tools wie Gong automatisieren' }, dont: { en: 'Rely on reps to manually log activities', de: 'Darauf verlassen, dass Reps Aktivitäten manuell loggen' } },
      ],
    },
  ];

  return (
    <section
      id="best-practices-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 bg-background transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Best Practices' : 'Best Practices'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? 'Do\'s & Don\'ts' : 'Do\'s & Don\'ts'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Die häufigsten Fehler, die wir bei Series B/C Unternehmen sehen – und wie du sie vermeidest.'
              : 'The most common mistakes we see in Series B/C companies—and how to avoid them.'}
          </p>
        </div>

        <div className="space-y-12">
          {practices.map((practice, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-foreground mb-6">
                {language === 'de' ? practice.category.de : practice.category.en}
              </h3>
              <div className="grid lg:grid-cols-2 gap-4">
                {practice.items.map((item, i) => (
                  <div key={i} className="grid grid-cols-2 gap-4">
                    <Card className="border-accent/50 bg-accent/5">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{language === 'de' ? item.do.de : item.do.en}</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-destructive/50 bg-destructive/5">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-2">
                          <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{language === 'de' ? item.dont.de : item.dont.en}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
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
// SECTION 5: IMPLEMENTATION ROADMAP
// ============================================================================
const ImplementationSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const phases = [
    {
      phase: { en: 'Phase 1: Foundation', de: 'Phase 1: Fundament' },
      timeline: { en: 'Weeks 1-4', de: 'Wochen 1-4' },
      focus: { en: 'ICP Clarity + Sales Motion Design', de: 'ICP Clarity + Sales Motion Design' },
      deliverables: [
        { en: 'ICP Canvas with 5 dimensions', de: 'ICP Canvas mit 5 Dimensionen' },
        { en: '7-Stage Sales Playbook documented', de: '7-Stufen Sales Playbook dokumentiert' },
        { en: 'Lead scoring model implemented', de: 'Lead Scoring Modell implementiert' },
        { en: 'CRM hygiene audit completed', de: 'CRM-Hygiene-Audit abgeschlossen' },
      ],
      color: 'from-violet-500 to-purple-600',
    },
    {
      phase: { en: 'Phase 2: Optimization', de: 'Phase 2: Optimierung' },
      timeline: { en: 'Weeks 5-8', de: 'Wochen 5-8' },
      focus: { en: 'Process Refinement + Team Training', de: 'Prozessverfeinerung + Team-Training' },
      deliverables: [
        { en: 'MEDDIC training for all AEs', de: 'MEDDIC-Training für alle AEs' },
        { en: 'Demo script optimized for value', de: 'Demo-Script für Wert optimiert' },
        { en: 'Win/Loss analysis framework', de: 'Win/Loss Analyse-Framework' },
        { en: 'Weekly forecast cadence established', de: 'Wöchentliche Forecast-Kadenz etabliert' },
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      phase: { en: 'Phase 3: Scale', de: 'Phase 3: Skalierung' },
      timeline: { en: 'Weeks 9-12', de: 'Wochen 9-12' },
      focus: { en: 'RevOps Automation + Analytics', de: 'RevOps Automation + Analytics' },
      deliverables: [
        { en: 'Full RevOps stack implemented', de: 'Vollständiger RevOps Stack implementiert' },
        { en: 'Real-time dashboards live', de: 'Echtzeit-Dashboards live' },
        { en: 'Automated data enrichment', de: 'Automatisierte Datenanreicherung' },
        { en: 'Playbook handoff to internal team', de: 'Playbook-Übergabe an internes Team' },
      ],
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section
      id="implementation-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 bg-secondary/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Implementierung' : 'Implementation'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? '12-Wochen Roadmap' : '12-Week Roadmap'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Ein bewährter Plan, um das GTM/Revenue Framework in deinem Unternehmen zu implementieren.'
              : 'A proven plan to implement the GTM/Revenue Framework in your company.'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center text-white mb-4`}>
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {language === 'de' ? phase.phase.de : phase.phase.en}
                </h3>
                <Badge variant="outline" className="mb-3">
                  {language === 'de' ? phase.timeline.de : phase.timeline.en}
                </Badge>
                <p className="text-sm text-primary font-medium mb-4">
                  {language === 'de' ? phase.focus.de : phase.focus.en}
                </p>
                <ul className="space-y-2">
                  {phase.deliverables.map((deliverable, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {language === 'de' ? deliverable.de : deliverable.en}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 6: CASE STUDIES
// ============================================================================
const CaseStudiesSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const caseStudies = [
    {
      company: 'SaaS Scale-Up (Series B)',
      problem: { en: 'CAC increased 180% YoY while growth slowed', de: 'CAC stieg 180% YoY während Wachstum verlangsamte' },
      solution: { en: 'ICP refinement + Sales Motion redesign', de: 'ICP-Verfeinerung + Sales Motion Redesign' },
      results: [
        { metric: 'CAC', before: '€4,200', after: '€1,680', change: '-60%' },
        { metric: 'Win Rate', before: '12%', after: '28%', change: '+133%' },
        { metric: 'Sales Cycle', before: '94 days', after: '62 days', change: '-34%' },
      ],
      timeline: '90 days',
    },
    {
      company: 'Enterprise Tech (Series C)',
      problem: { en: 'Win rate dropped from 25% to 15%', de: 'Win Rate sank von 25% auf 15%' },
      solution: { en: 'MEDDIC implementation + Demo optimization', de: 'MEDDIC-Implementierung + Demo-Optimierung' },
      results: [
        { metric: 'Win Rate', before: '15%', after: '32%', change: '+113%' },
        { metric: 'ACV', before: '€85K', after: '€142K', change: '+67%' },
        { metric: 'Forecast Accuracy', before: '52%', after: '84%', change: '+62%' },
      ],
      timeline: '120 days',
    },
    {
      company: 'Growth-Stage B2B (Series B)',
      problem: { en: 'Revenue ops non-existent, data in spreadsheets', de: 'Revenue Ops nicht existent, Daten in Spreadsheets' },
      solution: { en: 'Full RevOps stack + automation', de: 'Vollständiger RevOps Stack + Automation' },
      results: [
        { metric: 'Data Entry Time', before: '8h/week', after: '0.5h/week', change: '-94%' },
        { metric: 'Pipeline Visibility', before: 'Monthly', after: 'Real-time', change: '∞' },
        { metric: 'Rep Productivity', before: 'Baseline', after: '+45%', change: '+45%' },
      ],
      timeline: '60 days',
    },
  ];

  return (
    <section
      id="case-studies-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 bg-background transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Fallstudien' : 'Case Studies'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? 'Ergebnisse aus der Praxis' : 'Real-World Results'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Wie Series B/C Unternehmen das GTM/Revenue Framework implementiert haben.'
              : 'How Series B/C companies have implemented the GTM/Revenue Framework.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-4">{study.company}</Badge>
                
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-destructive mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    {language === 'de' ? 'Problem' : 'Problem'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'de' ? study.problem.de : study.problem.en}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    {language === 'de' ? 'Lösung' : 'Solution'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'de' ? study.solution.de : study.solution.en}
                  </p>
                </div>

                <div className="space-y-3 mb-4">
                  <h4 className="text-sm font-bold text-accent flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    {language === 'de' ? 'Ergebnisse' : 'Results'}
                  </h4>
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{result.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground line-through">{result.before}</span>
                        <ArrowRight className="w-3 h-3 text-muted-foreground" />
                        <span className="text-foreground font-medium">{result.after}</span>
                        <Badge variant="outline" className="text-accent border-accent/50">{result.change}</Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{language === 'de' ? 'Dauer:' : 'Timeline:'} {study.timeline}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 7: WHO IT'S FOR
// ============================================================================
const WhoItsForSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const personas = [
    {
      icon: Briefcase,
      role: { en: 'CEO / Founder', de: 'CEO / Founder' },
      pain: {
        en: '"Growth is stalling despite more headcount"',
        de: '"Wachstum stagniert trotz mehr Headcount"'
      },
      outcome: {
        en: 'Clear GTM strategy with measurable milestones',
        de: 'Klare GTM-Strategie mit messbaren Meilensteinen'
      },
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: TrendingUp,
      role: { en: 'CMO / CRO', de: 'CMO / CRO' },
      pain: {
        en: '"CAC is exploding, win rate is dropping"',
        de: '"CAC explodiert, Win Rate sinkt"'
      },
      outcome: {
        en: 'Predictable pipeline with optimized unit economics',
        de: 'Planbare Pipeline mit optimierten Unit Economics'
      },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Settings,
      role: { en: 'COO', de: 'COO' },
      pain: {
        en: '"Our processes don\'t scale beyond 10 reps"',
        de: '"Unsere Prozesse skalieren nicht über 10 Reps"'
      },
      outcome: {
        en: 'RevOps foundation for 10x growth',
        de: 'RevOps-Fundament für 10x Wachstum'
      },
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: UserCheck,
      role: { en: 'VC / Board Member', de: 'VC / Board Member' },
      pain: {
        en: '"Portfolio company needs a GTM fix, fast"',
        de: '"Portfolio-Company braucht GTM-Fix, schnell"'
      },
      outcome: {
        en: 'Rapid turnaround signals in 30-90 days',
        de: 'Schnelle Turnaround-Signale in 30-90 Tagen'
      },
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section
      id="who-its-for"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 bg-background transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Für wen ist das?' : 'Who It\'s For'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? 'Dieses Playbook ist für dich, wenn...' : 'This Playbook is For You If...'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Egal ob du CEO, Revenue Leader oder Investor bist – das GTM/Revenue Framework hilft dir, deine spezifischen Herausforderungen zu lösen.'
              : 'Whether you\'re a CEO, revenue leader, or investor—the GTM/Revenue Framework helps you solve your specific challenges.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:-translate-y-1 group">
              <CardContent className="p-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${persona.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <persona.icon className="w-7 h-7" />
                </div>

                {/* Role */}
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {language === 'de' ? persona.role.de : persona.role.en}
                </h3>

                {/* Pain Point */}
                <p className="text-sm text-muted-foreground italic mb-4">
                  {language === 'de' ? persona.pain.de : persona.pain.en}
                </p>

                {/* Outcome */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">
                      {language === 'de' ? persona.outcome.de : persona.outcome.en}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 8: RELATED SOLUTIONS
// ============================================================================
const RelatedSolutionsSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const solutions = [
    {
      title: { en: 'Power Up: CAC Crisis', de: 'Power Up: CAC Crisis' },
      desc: { en: 'Rapid GTM optimization (ICP + Sales Motion)', de: 'Schnelle GTM-Optimierung (ICP + Sales Motion)' },
      timeline: { en: '30 Days', de: '30 Tage' },
      investment: '€23.6K',
      impact: { en: 'CAC -40-60%, Win Rate +20-40%', de: 'CAC -40-60%, Win Rate +20-40%' },
      href: '/solutions/power-up/cac-crisis',
      icon: Zap,
      color: 'from-orange-500 to-amber-500',
    },
    {
      title: { en: 'Boost: GTM Transformation', de: 'Boost: GTM Transformation' },
      desc: { en: 'Full GTM rebuild (ICP + Sales Motion + RevOps)', de: 'Kompletter GTM-Rebuild (ICP + Sales Motion + RevOps)' },
      timeline: { en: '90 Days', de: '90 Tage' },
      investment: '€45.9K',
      impact: { en: 'CAC -60-75%, Win Rate +50-100%', de: 'CAC -60-75%, Win Rate +50-100%' },
      href: '/solutions/boost/growth-engine',
      icon: Rocket,
      color: 'from-violet-500 to-purple-600',
    },
    {
      title: { en: 'Expert Session: GTM Strategy', de: 'Expert Session: GTM-Strategie' },
      desc: { en: 'Deep dive on your GTM bottleneck', de: 'Tieftauchen in deinen GTM-Engpass' },
      timeline: { en: '90 Min', de: '90 Min' },
      investment: '€890',
      impact: { en: 'Clear action plan + 3-5 quick wins', de: 'Klarer Aktionsplan + 3-5 Quick Wins' },
      href: '/solutions/expert-session',
      icon: Brain,
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section
      id="related-solutions-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 bg-secondary/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Nächste Schritte' : 'Next Steps'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? 'So implementierst du dieses Playbook' : 'How to Implement This Playbook'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Bereit, das GTM/Revenue Framework in deinem Unternehmen zu implementieren? Hier sind die Lösungen, die dir dabei helfen:'
              : 'Ready to implement the GTM/Revenue Framework in your company? Here are the solutions that help you execute:'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:-translate-y-1 group">
              <CardContent className="p-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <solution.icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {language === 'de' ? solution.title.de : solution.title.en}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'de' ? solution.desc.de : solution.desc.en}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{language === 'de' ? solution.timeline.de : solution.timeline.en}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BarChart3 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{solution.investment}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="text-accent">{language === 'de' ? solution.impact.de : solution.impact.en}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                  <a href={solution.href}>
                    {language === 'de' ? 'Mehr erfahren' : 'Learn More'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 8: FINAL CTA
// ============================================================================
const FinalCTASection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="final-cta"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 noise opacity-30" />

      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Headline */}
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? (
              <>
                Bereit, deine
                <span className="block italic text-gradient">Revenue Engine zu bauen?</span>
              </>
            ) : (
              <>
                Ready to build your
                <span className="block italic text-gradient">revenue engine?</span>
              </>
            )}
          </h2>

          {/* Subline */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {language === 'de'
              ? 'Buche einen kostenlosen Inflection Call. Wir identifizieren deinen #1 GTM-Engpass in 30 Minuten und empfehlen den richtigen Weg.'
              : "Book a free Inflection Call. We'll identify your #1 GTM bottleneck in 30 minutes and recommend the right path."}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="xl"
              className="shadow-brutal hover-brutal group"
              onClick={() => window.open('https://scalingx.fillout.com/inflection-call', '_blank')}
            >
              <Phone className="mr-2 w-5 h-5" />
              {language === 'de' ? 'Kostenlosen Inflection Call buchen' : 'Book Free Inflection Call'}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2"
              onClick={() => window.open('/downloads/gtm-revenue-playbook.pdf', '_blank')}
            >
              <Download className="mr-2 w-4 h-4" />
              {language === 'de' ? 'Vollständiges Playbook herunterladen' : 'Download Full Playbook'}
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-accent" />
              {language === 'de' ? 'Unverbindlich' : 'No commitment'}
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-accent" />
              {language === 'de' ? '30 Minuten' : '30 minutes'}
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-accent" />
              {language === 'de' ? 'Konkrete nächste Schritte' : 'Concrete next steps'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const PlaybookGtmRevenue: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ExecutiveSummarySection />
        <FrameworkSection />
        <BestPracticesSection />
        <ImplementationSection />
        <CaseStudiesSection />
        <WhoItsForSection />
        <RelatedSolutionsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PlaybookGtmRevenue;
