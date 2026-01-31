import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallaxLayers } from '@/hooks/useParallax';
import TwinklingStars from '@/components/TwinklingStars';
import {
  ArrowRight,
  ChevronDown,
  Check,
  X,
  Zap,
  Target,
  TrendingDown,
  TrendingUp,
  Clock,
  Shield,
  FileText,
  MessageCircle,
  Settings,
  BarChart3,
  Search,
  Wrench,
  CheckCircle,
  DollarSign,
  Package,
  Calculator,
} from 'lucide-react';

// ============================================================================
// SECTION 1: HERO
// ============================================================================
const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroStats = [
    { value: '+30-50%', label: { en: 'ARPU', de: 'ARPU' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
    { value: '+10-15pp', label: { en: 'Gross Margin', de: 'Bruttomarge' }, sublabel: { en: 'Typical range', de: 'Typischer Bereich' } },
    { value: 'Live', label: { en: 'Pricing System', de: 'Pricing-System' }, sublabel: { en: 'In 4-6 weeks', de: 'In 4-6 Wochen' } },
  ];

  const trustBadges = [
    { icon: Shield, label: { en: 'Outcome-Based Risk Sharing', de: 'Ergebnisbasierte Risikoteilung' } },
    { icon: Clock, label: { en: '4-6 Week Sprint', de: '4-6 Wochen Sprint' } },
    { icon: MessageCircle, label: { en: 'Reference Calls Available', de: 'Referenzgespräche möglich' } },
  ];

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="dark-section relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise pt-20"
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
              <BreadcrumbLink href="/solutions" className="text-muted-foreground hover:text-foreground">
                Solutions
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-foreground font-medium">Power Up Pricing Power</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Badge */}
        <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Zap className="w-4 h-4 mr-2" />
          Power Up · 4-6 {language === 'de' ? 'Wochen' : 'Weeks'} · {language === 'de' ? 'Ab' : 'From'} €23.6K
        </Badge>

        {/* Headline */}
        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">Pricing Breakdown →</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'Pricing Power wiederhergestellt' : 'Pricing Power Restored'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Repariere deine Pricing-Strategie in 4-6 Wochen. Typische Ergebnisse: ARPU +30-50%, Bruttomarge +10-15pp, Pricing-Vertrauen wiederhergestellt – mit ergebnisbasierter Risikoteilung.'
            : 'Fix your pricing strategy in 4-6 weeks. Typical outcomes: ARPU +30-50%, Gross Margin +10-15pp, Pricing Confidence Restored—with outcome-based risk sharing.'}
        </p>

        {/* Hero Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {heroStats.map((stat, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm border-2 border-border p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-foreground uppercase tracking-wider">
                {language === 'de' ? stat.label.de : stat.label.en}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                ({language === 'de' ? stat.sublabel.de : stat.sublabel.en})
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => scrollToSection('final-cta')}
          >
            {language === 'de' ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book Free Inflection Call (30 min)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('solution-section')}
            className="border-2"
          >
            {language === 'de' ? 'So funktioniert es' : 'See How It Works'}
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              <span>{language === 'de' ? badge.label.de : badge.label.en}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
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
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const symptoms = [
    { en: 'ARPU stagnation: €150 (benchmark: €300+), no growth in 12+ months', de: 'ARPU-Stagnation: €150 (Benchmark: €300+), kein Wachstum seit 12+ Monaten' },
    { en: 'Heavy discounting: 30-50% discounts just to close (eroding margins)', de: 'Starke Rabatte: 30-50% Rabatte nur um abzuschließen (Margen erodieren)' },
    { en: 'Gross margin decline: 25% (target: 40%), trending down', de: 'Bruttomarge-Rückgang: 25% (Ziel: 40%), fallend' },
    { en: 'Value metric confusion: "Are we charging for the right thing?"', de: 'Value-Metric-Verwirrung: "Berechnen wir für das Richtige?"' },
    { en: "Packaging chaos: Too many SKUs, customers don't understand pricing", de: 'Packaging-Chaos: Zu viele SKUs, Kunden verstehen Preise nicht' },
  ];

  const realCosts = [
    { en: 'Destroys unit economics (CAC stays same, LTV drops → LTV/CAC < 3)', de: 'Zerstört Unit Economics (CAC bleibt gleich, LTV sinkt → LTV/CAC < 3)' },
    { en: "Limits growth potential (can't invest in sales/marketing with low margins)", de: 'Begrenzt Wachstumspotenzial (kann nicht in Sales/Marketing investieren bei niedrigen Margen)' },
    { en: 'Weakens competitive position (competitors with better pricing win)', de: 'Schwächt Wettbewerbsposition (Wettbewerber mit besserem Pricing gewinnen)' },
    { en: 'Delays profitability (Rule of 40 impossible with 25% margins)', de: 'Verzögert Profitabilität (Rule of 40 unmöglich bei 25% Margen)' },
  ];

  return (
    <section
      id="problem-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-destructive mb-4 block">
            {language === 'de' ? 'Das Problem' : 'The Problem'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Dein Pricing ist kaputt' : 'Your Pricing Is Broken'}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Dein ARPU steckt bei €150 fest (während Wettbewerber €300+ verlangen). Deine Bruttomargen schrumpfen (25% statt 40%). Du rabattierst 30-50% nur um Deals zu closen. Und das Schlimmste – du weißt nicht, ob das Problem dein Value Metric, dein Packaging oder deine Zahlungsbereitschaft ist.'
              : "Your ARPU is stuck at €150 (while competitors charge €300+). Your gross margins are shrinking (25% instead of 40%). You're discounting 30-50% just to close deals. And worst of all—you don't know if the problem is your value metric, your packaging, or your willingness-to-pay."}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Das Board fragt: "Warum haben wir keine Pricing Power?" Dein CFO ist besorgt über Margen. Dein Sales-Team ist frustriert ("Kunden fragen immer nach Rabatten"). Und du weißt, wenn du das nicht reparierst, erreichst du nie deine Profitabilitätsziele.'
              : "The board is asking: \"Why don't we have pricing power?\" Your CFO is concerned about margins. Your sales team is frustrated (\"customers always ask for discounts\"). And you know that if you don't fix this, you'll never hit your profitability targets."}
          </p>
        </div>

        {/* Symptoms Checklist */}
        <div className="max-w-2xl mx-auto mb-16">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">
            {language === 'de' ? 'Die Symptome, die du siehst:' : 'The symptoms you\'re seeing:'}
          </h3>
          <div className="grid gap-3">
            {symptoms.map((symptom, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-destructive" />
                </div>
                <span className="text-sm text-foreground">
                  {language === 'de' ? symptom.de : symptom.en}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Real Costs */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">
            {language === 'de' ? 'Die wahren Kosten:' : 'The real cost:'}
          </h3>
          <p className="text-center text-muted-foreground mb-6">
            {language === 'de'
              ? 'Es geht nicht nur darum, Geld auf dem Tisch liegen zu lassen. Jedes Quartal mit kaputtem Pricing:'
              : "This isn't just about leaving money on the table. Every quarter with broken pricing:"}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {realCosts.map((cost, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                <TrendingDown className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{language === 'de' ? cost.de : cost.en}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-foreground font-bold mt-8">
            {language === 'de'
              ? 'Du brauchst Pricing Power. Schnell.'
              : 'You need pricing power. Fast.'}
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
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const phases = [
    {
      number: '1',
      title: { en: 'Diagnose the Bottleneck', de: 'Den Engpass diagnostizieren' },
      timeline: { en: 'Week 1-2', de: 'Woche 1-2' },
      icon: Search,
      items: [
        { en: 'Value Metric Analysis: Are you charging for the right thing? (seats, usage, outcomes?)', de: 'Value-Metric-Analyse: Berechnest du für das Richtige? (Seats, Usage, Outcomes?)' },
        { en: 'Packaging Analysis: Is your packaging clear? (Good-Better-Best vs. Feature-based?)', de: 'Packaging-Analyse: Ist dein Packaging klar? (Good-Better-Best vs. Feature-basiert?)' },
        { en: 'Willingness-to-Pay Analysis: What would customers actually pay? (Van Westendorp, Conjoint)', de: 'Zahlungsbereitschafts-Analyse: Was würden Kunden wirklich zahlen? (Van Westendorp, Conjoint)' },
        { en: 'Competitive Analysis: How does your pricing compare? (positioning, value capture)', de: 'Wettbewerbsanalyse: Wie schneidet dein Pricing ab? (Positioning, Value Capture)' },
      ],
      deliverable: { en: 'Pricing Bottleneck Report (15-20 pages) with root cause analysis', de: 'Pricing-Bottleneck-Report (15-20 Seiten) mit Root-Cause-Analyse' },
      color: 'from-violet-500 to-purple-600',
    },
    {
      number: '2',
      title: { en: 'Fix the Bottleneck', de: 'Den Engpass beheben' },
      timeline: { en: 'Week 2-4', de: 'Woche 2-4' },
      icon: Wrench,
      items: [
        { en: 'Option A: Value Metric Redesign – Shift from seats → usage-based (or vice versa), implement AI-powered dynamic pricing', de: 'Option A: Value-Metric-Redesign – Wechsel von Seats → nutzungsbasiert (oder umgekehrt), AI-gestütztes dynamisches Pricing' },
        { en: 'Option B: Packaging Optimization – Redesign SKUs (3-tier Good-Better-Best), simplify feature matrix', de: 'Option B: Packaging-Optimierung – SKUs redesignen (3-stufiges Good-Better-Best), Feature-Matrix vereinfachen' },
        { en: 'Option C: Willingness-to-Pay Validation – Run Van Westendorp study, implement price testing (A/B test)', de: 'Option C: Zahlungsbereitschafts-Validierung – Van Westendorp Studie, Preistests (A/B-Tests) implementieren' },
      ],
      deliverable: { en: 'Implemented pricing system (live in your CRM/billing, not a slide deck)', de: 'Implementiertes Pricing-System (live in CRM/Billing, nicht ein Slide Deck)' },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '3',
      title: { en: 'Validate & Scale', de: 'Validieren & Skalieren' },
      timeline: { en: 'Week 4-6', de: 'Woche 4-6' },
      icon: CheckCircle,
      items: [
        { en: 'Metrics Tracking: ARPU, Gross Margin, Discount Rate, Win Rate', de: 'Metriken-Tracking: ARPU, Bruttomarge, Rabattrate, Win Rate' },
        { en: 'Sales Training: Sales team trained on new pricing (objection handling)', de: 'Sales-Training: Sales-Team auf neuem Pricing geschult (Einwandbehandlung)' },
        { en: 'Customer Communication: Email templates, FAQ, pricing page update', de: 'Kunden-Kommunikation: E-Mail-Templates, FAQ, Pricing-Page-Update' },
      ],
      deliverable: { en: 'Validated pricing system + team enablement', de: 'Validiertes Pricing-System + Team Enablement' },
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  const differentiators = [
    { en: 'Hands-on execution (not just strategy slides)', de: 'Hands-on Execution (nicht nur Strategie-Slides)' },
    { en: 'AI-native tools (dynamic pricing, pricing calculator)', de: 'AI-native Tools (dynamisches Pricing, Pricing-Calculator)' },
    { en: 'Outcome-based risk sharing (we measure what matters)', de: 'Ergebnisbasierte Risikoteilung (wir messen, was zählt)' },
    { en: '4-6 week sprint (fast results, no long-term lock-in)', de: '4-6 Wochen Sprint (schnelle Ergebnisse, keine langfristige Bindung)' },
  ];

  return (
    <section
      id="solution-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[60vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-mesh" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Die Lösung' : 'The Solution'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de'
              ? 'So stellen wir deine Pricing Power wieder her'
              : 'How We Restore Your Pricing Power'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Wir erhöhen nicht einfach die Preise. Wir beheben deinen #1 Pricing-Engpass – das eine, was dich davon abhält, den Wert zu erfassen, den du schaffst.'
              : "We don't just raise prices. We fix your #1 pricing bottleneck—the one thing preventing you from capturing the value you create."}
          </p>
        </div>

        {/* 3-Phase Timeline */}
        <h3 className="text-center text-lg font-bold mb-8">
          {language === 'de' ? 'Der Power Up Prozess (4-6 Wochen):' : 'The Power Up Process (4-6 Weeks):'}
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border-2 border-border hover:border-primary/50 p-6 transition-all duration-400 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Phase Number Badge */}
                <div className={`absolute -top-3 -right-3 px-4 py-1 text-sm font-bold tracking-wider bg-gradient-to-r ${phase.color} text-white shadow-brutal-sm`}>
                  {language === 'de' ? 'Phase' : 'Phase'} {phase.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Timeline */}
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  {language === 'de' ? phase.timeline.de : phase.timeline.en}
                </div>

                {/* Title */}
                <h4 className="font-bold text-xl text-foreground mb-4">
                  {language === 'de' ? phase.title.de : phase.title.en}
                </h4>

                {/* Items */}
                <ul className="space-y-2 mb-4">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{language === 'de' ? item.de : item.en}</span>
                    </li>
                  ))}
                </ul>

                {/* Deliverable */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-medium text-accent">
                      {language === 'de' ? phase.deliverable.de : phase.deliverable.en}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* What Makes This Different */}
        <div className="bg-card border-2 border-primary/30 p-8 rounded-lg">
          <h3 className="font-bold text-lg mb-6 text-center">
            {language === 'de' ? 'Was das hier anders macht:' : 'What makes this different:'}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-foreground">{language === 'de' ? item.de : item.en}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 4: OUTCOME/IMPACT
// ============================================================================
const OutcomeSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [openMeasurement, setOpenMeasurement] = React.useState<string | null>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const outcomes = [
    {
      id: 'arpu',
      value: '+30-50%',
      title: { en: 'ARPU Increase', de: 'ARPU-Steigerung' },
      example: { en: 'Example: €150 → €210', de: 'Beispiel: €150 → €210' },
      impact: { en: '+€60K MRR = +€720K ARR (from same customer base)', de: '+€60K MRR = +€720K ARR (von derselben Kundenbasis)' },
      why: { en: 'We fix your value metric (charging for the right thing) or packaging (making it easier for customers to buy higher tiers)—which increases average deal size without losing customers.', de: 'Wir beheben dein Value Metric (für das Richtige berechnen) oder Packaging (es Kunden einfacher machen, höhere Tiers zu kaufen) – was die durchschnittliche Deal-Größe erhöht, ohne Kunden zu verlieren.' },
    },
    {
      id: 'margin',
      value: '+10-15pp',
      title: { en: 'Gross Margin Increase', de: 'Bruttomarge-Steigerung' },
      example: { en: 'Example: 25% → 38%', de: 'Beispiel: 25% → 38%' },
      impact: { en: '+€13K gross profit per €100K revenue', de: '+€13K Bruttogewinn pro €100K Umsatz' },
      why: { en: 'We reduce discounting (from 30-50% → 10-20%) and optimize your cost structure (e.g., usage-based pricing that aligns with COGS)—which improves margins without raising prices.', de: 'Wir reduzieren Rabatte (von 30-50% → 10-20%) und optimieren deine Kostenstruktur (z.B. nutzungsbasiertes Pricing, das mit COGS aligned ist) – was Margen verbessert, ohne Preise zu erhöhen.' },
    },
    {
      id: 'system',
      value: 'Live',
      title: { en: 'Pricing System Implemented', de: 'Pricing-System implementiert' },
      example: { en: 'Not just a strategy deck', de: 'Nicht nur ein Strategie-Deck' },
      impact: { en: 'Pricing Calculator, Dynamic Pricing Engine, Discount Policy, Upgrade Paths', de: 'Pricing-Calculator, Dynamic-Pricing-Engine, Rabattrichtlinie, Upgrade-Pfade' },
      why: { en: "Most companies have a pricing strategy—but no system to execute it. We build the system (tools, processes, training) so your team can actually implement the new pricing.", de: 'Die meisten Unternehmen haben eine Pricing-Strategie – aber kein System, um sie umzusetzen. Wir bauen das System (Tools, Prozesse, Training), damit dein Team das neue Pricing tatsächlich implementieren kann.' },
    },
  ];

  const caseStudy = {
    company: { en: 'Series B SaaS, €20M ARR, 50 employees', de: 'Series B SaaS, €20M ARR, 50 Mitarbeiter' },
    challenge: { en: 'ARPU stuck at €180 (benchmark: €350), margins 22%', de: 'ARPU feststeckend bei €180 (Benchmark: €350), Margen 22%' },
    bottleneck: { en: 'Wrong value metric (charging per seat, should be usage-based)', de: 'Falsches Value Metric (Berechnung pro Seat, sollte nutzungsbasiert sein)' },
    fix: { en: 'Value metric redesign + dynamic pricing (5 weeks)', de: 'Value-Metric-Redesign + dynamisches Pricing (5 Wochen)' },
    outcomes: [
      { label: { en: 'ARPU', de: 'ARPU' }, value: '+42% (€180 → €255)' },
      { label: { en: 'Gross Margin', de: 'Bruttomarge' }, value: '+12pp (22% → 34%)' },
      { label: { en: 'ARR Impact', de: 'ARR-Impact' }, value: '€3M' },
    ],
  };

  return (
    <section
      id="outcome-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[60vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Die Ergebnisse' : 'The Outcome'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Typische Ergebnisse (4-6 Wochen)' : 'Typical Outcomes (4-6 Weeks)'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Diese sind echte Ergebnisse von Unternehmen wie deinem (Series A-D, €10M-€50M ARR).'
              : 'These are real results from companies like yours (Series A-D, €10M-€50M ARR).'}
          </p>
        </div>

        {/* Outcome Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.id}
              className="bg-card border-2 border-accent/30 hover:border-accent p-6 transition-all duration-300 shadow-brutal-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-gradient-accent mb-2">{outcome.value}</div>
              <h4 className="font-bold text-lg text-foreground mb-2">
                {language === 'de' ? outcome.title.de : outcome.title.en}
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                {language === 'de' ? outcome.example.de : outcome.example.en}
              </p>
              <p className="text-sm font-medium text-accent mb-4">
                {language === 'de' ? outcome.impact.de : outcome.impact.en}
              </p>
              <Collapsible open={openMeasurement === outcome.id} onOpenChange={(open) => setOpenMeasurement(open ? outcome.id : null)}>
                <CollapsibleTrigger className="flex items-center gap-2 text-xs text-primary hover:underline cursor-pointer">
                  <span>{language === 'de' ? 'Warum das passiert' : 'Why this happens'}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${openMeasurement === outcome.id ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-3">
                  <p className="text-xs text-muted-foreground bg-muted/50 p-3 rounded">
                    {language === 'de' ? outcome.why.de : outcome.why.en}
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>

        {/* Real Example / Case Study */}
        <div className="bg-card border-2 border-primary/30 p-8 rounded-lg mb-12">
          <h3 className="font-bold text-lg mb-6 text-center">
            {language === 'de' ? 'Echtes Beispiel:' : 'Real Example:'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {language === 'de' ? 'Unternehmen:' : 'Company:'}
                </span>
                <p className="text-sm text-foreground">{language === 'de' ? caseStudy.company.de : caseStudy.company.en}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {language === 'de' ? 'Herausforderung:' : 'Challenge:'}
                </span>
                <p className="text-sm text-foreground">{language === 'de' ? caseStudy.challenge.de : caseStudy.challenge.en}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {language === 'de' ? 'Engpass:' : 'Bottleneck:'}
                </span>
                <p className="text-sm text-foreground">{language === 'de' ? caseStudy.bottleneck.de : caseStudy.bottleneck.en}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Fix:</span>
                <p className="text-sm text-foreground">{language === 'de' ? caseStudy.fix.de : caseStudy.fix.en}</p>
              </div>
            </div>
            <div className="bg-accent/10 border border-accent/30 p-6 rounded-lg">
              <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
                {language === 'de' ? 'Ergebnisse:' : 'Outcomes:'}
              </h4>
              <div className="space-y-3">
                {caseStudy.outcomes.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{language === 'de' ? item.label.de : item.label.en}</span>
                    <span className="font-bold text-accent">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold"
            onClick={() => scrollToSection('final-cta')}
          >
            {language === 'de' ? 'Kostenloses Inflection Call buchen (30 Min.)' : 'Book Free Inflection Call (30 min)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
            {language === 'de'
              ? 'In 30 Minuten diagnostizieren wir deinen Pricing-Engpass und zeigen dir genau, wie wir ihn beheben würden. Kein Pitch, kein Druck – nur Klarheit.'
              : "In 30 minutes, we'll diagnose your pricing bottleneck and show you exactly how we'd fix it. No pitch, no pressure—just clarity."}
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 5: HOW WE WORK (PROCESS)
// ============================================================================
const ProcessSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const weeks = [
    {
      title: { en: 'WEEK 1-2: DIAGNOSE', de: 'WOCHE 1-2: DIAGNOSE' },
      whatWeDo: [
        { en: 'Value Metric Analysis (are you charging for the right thing?)', de: 'Value-Metric-Analyse (berechnest du für das Richtige?)' },
        { en: 'Packaging Analysis (is your packaging clear?)', de: 'Packaging-Analyse (ist dein Packaging klar?)' },
        { en: 'Willingness-to-Pay Study (Van Westendorp, Conjoint)', de: 'Zahlungsbereitschafts-Studie (Van Westendorp, Conjoint)' },
        { en: 'Competitive Benchmarking (how do you compare?)', de: 'Wettbewerbs-Benchmarking (wie schneidest du ab?)' },
      ],
      whatYouGet: [
        { en: 'Pricing Bottleneck Report (15-20 pages)', de: 'Pricing-Bottleneck-Report (15-20 Seiten)' },
        { en: 'Root Cause Analysis (with data)', de: 'Root-Cause-Analyse (mit Daten)' },
        { en: 'Fix Recommendation (1-3 options)', de: 'Fix-Empfehlung (1-3 Optionen)' },
      ],
      timeCommitment: { en: '8-12 hours', de: '8-12 Stunden' },
    },
    {
      title: { en: 'WEEK 2-4: FIX', de: 'WOCHE 2-4: FIX' },
      whatWeDo: [
        { en: 'Implement #1 fix (value metric, packaging, or willingness-to-pay)', de: 'Implementiere #1 Fix (Value Metric, Packaging oder Zahlungsbereitschaft)' },
        { en: 'Build AI-native tools (pricing calculator, dynamic pricing, discount policy)', de: 'Baue AI-native Tools (Pricing-Calculator, dynamisches Pricing, Rabattrichtlinie)' },
        { en: 'Train your team (sales, finance, customer success)', de: 'Trainiere dein Team (Sales, Finance, Customer Success)' },
      ],
      whatYouGet: [
        { en: 'Implemented pricing system (live in CRM/billing)', de: 'Implementiertes Pricing-System (live in CRM/Billing)' },
        { en: 'AI-native tools (deployed, not just designed)', de: 'AI-native Tools (deployed, nicht nur designed)' },
        { en: 'Team training (hands-on, not just slides)', de: 'Team-Training (Hands-on, nicht nur Slides)' },
      ],
      timeCommitment: { en: '12-16 hours', de: '12-16 Stunden' },
    },
    {
      title: { en: 'WEEK 4-6: VALIDATE', de: 'WOCHE 4-6: VALIDIEREN' },
      whatWeDo: [
        { en: 'Track metrics (ARPU, Gross Margin, Discount Rate)', de: 'Tracke Metriken (ARPU, Bruttomarge, Rabattrate)' },
        { en: 'Validate impact (is the fix working?)', de: 'Validiere Impact (funktioniert der Fix?)' },
        { en: 'Scale preparation (playbooks, documentation)', de: 'Skalierungs-Vorbereitung (Playbooks, Dokumentation)' },
      ],
      whatYouGet: [
        { en: 'Metrics Dashboard (real-time tracking)', de: 'Metriken-Dashboard (Echtzeit-Tracking)' },
        { en: 'Validated outcomes (with before/after data)', de: 'Validierte Ergebnisse (mit Vorher/Nachher-Daten)' },
        { en: 'Scale Playbook (step-by-step guide for your team)', de: 'Scale Playbook (Schritt-für-Schritt-Anleitung für dein Team)' },
      ],
      timeCommitment: { en: '6-8 hours', de: '6-8 Stunden' },
    },
  ];

  const riskSharing = {
    primaryMetrics: [
      { en: 'ARPU (€)', de: 'ARPU (€)' },
      { en: 'Gross Margin (%)', de: 'Bruttomarge (%)' },
      { en: 'Discount Rate (%)', de: 'Rabattrate (%)' },
    ],
    howWeMeasure: [
      { en: 'Baseline: Week 0 (before we start)', de: 'Baseline: Woche 0 (bevor wir starten)' },
      { en: 'Checkpoint: Week 4 (mid-sprint)', de: 'Checkpoint: Woche 4 (Mid-Sprint)' },
      { en: 'Final: Week 6 (end of sprint)', de: 'Final: Woche 6 (Ende des Sprints)' },
    ],
    riskMitigation: { 
      en: "If we don't hit agreed outcomes, we'll extend the sprint at no extra cost. Reference calls available (talk to CFOs who've worked with us).",
      de: 'Wenn wir vereinbarte Ergebnisse nicht erreichen, verlängern wir den Sprint ohne Zusatzkosten. Referenzgespräche möglich (sprich mit CFOs, die mit uns gearbeitet haben).'
    },
  };

  return (
    <section
      id="process-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[60vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-mesh" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Wie wir arbeiten' : 'How We Work'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Der Power Up Prozess (Woche für Woche)' : 'The Power Up Process (Week-by-Week)'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Transparente Timeline. Klare Deliverables. Messbare Ergebnisse.'
              : 'Transparent timeline. Clear deliverables. Measurable outcomes.'}
          </p>
        </div>

        {/* Week-by-Week Breakdown */}
        <div className="space-y-6 mb-16">
          {weeks.map((week, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-bold text-lg text-foreground mb-6">{language === 'de' ? week.title.de : week.title.en}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    {language === 'de' ? 'Was wir tun:' : 'What we do:'}
                  </h4>
                  <ul className="space-y-2">
                    {week.whatWeDo.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{language === 'de' ? item.de : item.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    {language === 'de' ? 'Was du bekommst:' : 'What you get:'}
                  </h4>
                  <ul className="space-y-2">
                    {week.whatYouGet.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{language === 'de' ? item.de : item.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    {language === 'de' ? 'Zeitaufwand (dein Team):' : 'Time commitment (your team):'}
                  </h4>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-lg font-bold text-foreground">
                      {language === 'de' ? week.timeCommitment.de : week.timeCommitment.en}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outcome-Based Risk Sharing */}
        <div className="bg-accent/10 border-2 border-accent/30 p-8 rounded-lg">
          <h3 className="font-bold text-lg mb-6 text-center text-accent">
            {language === 'de' ? 'Ergebnisbasierte Risikoteilung:' : 'Outcome-Based Risk Sharing:'}
          </h3>
          <p className="text-center text-muted-foreground mb-6">
            {language === 'de' ? 'Wir messen, was zählt:' : 'We measure what matters:'}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-accent mb-3">
                {language === 'de' ? 'Primäre Metriken:' : 'Primary Metrics:'}
              </h4>
              <ul className="space-y-2">
                {riskSharing.primaryMetrics.map((metric, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                    <BarChart3 className="w-4 h-4 text-accent" />
                    <span>{language === 'de' ? metric.de : metric.en}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-accent mb-3">
                {language === 'de' ? 'Wie wir messen:' : 'How we measure:'}
              </h4>
              <ul className="space-y-2">
                {riskSharing.howWeMeasure.map((item, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {language === 'de' ? item.de : item.en}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-accent mb-3">
                {language === 'de' ? 'Risikominderung:' : 'Risk mitigation:'}
              </h4>
              <p className="text-sm text-muted-foreground">
                {language === 'de' ? riskSharing.riskMitigation.de : riskSharing.riskMitigation.en}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 6: QUALIFICATION (WHO IT'S FOR)
// ============================================================================
const QualificationSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const idealFor = [
    { en: 'Your pricing is broken: ARPU is stagnant or declining (no growth in 12+ months), gross margins are too low (<30%, target: 40%+)', de: 'Dein Pricing ist kaputt: ARPU stagniert oder sinkt (kein Wachstum seit 12+ Monaten), Bruttomargen zu niedrig (<30%, Ziel: 40%+)' },
    { en: 'You have a pricing problem (but don\'t know the root cause): Is it your value metric? Your packaging? Your willingness-to-pay?', de: 'Du hast ein Pricing-Problem (aber kennst die Ursache nicht): Ist es dein Value Metric? Dein Packaging? Deine Zahlungsbereitschaft?' },
    { en: 'You\'re Series A-D, €10M-€50M ARR with 100+ paying customers', de: 'Du bist Series A-D, €10M-€50M ARR mit 100+ zahlenden Kunden' },
    { en: 'You\'re willing to execute: Commit 8-12 hours/week for 4-6 weeks, give us data access (billing, CRM, customer interviews)', de: 'Du bist bereit zu exekutieren: 8-12 Stunden/Woche für 4-6 Wochen committen, uns Datenzugang geben (Billing, CRM, Kundeninterviews)' },
    { en: 'You have budget (€23.6K): ROI is 15-30x based on typical outcomes', de: 'Du hast Budget (€23.6K): ROI ist 15-30x basierend auf typischen Ergebnissen' },
  ];

  const notFor = [
    { en: 'You\'re pre-revenue or pre-Series A: Power Up is for companies with existing pricing (not building from scratch). Better fit: Expert Session (€490, 45-90 min)', de: 'Du bist Pre-Revenue oder Pre-Series A: Power Up ist für Unternehmen mit bestehendem Pricing (nicht von Grund auf neu). Besser geeignet: Expert Session (€490, 45-90 Min.)' },
    { en: 'You need a full pricing transformation (not a quick fix): If you need to rebuild your entire pricing model (6-12 months). Better fit: Boost (90 days, €60K-€78K) or Accelerate (12 months)', de: 'Du brauchst eine volle Pricing-Transformation (keinen Quick Fix): Wenn du dein gesamtes Pricing-Modell neu aufbauen musst (6-12 Monate). Besser geeignet: Boost (90 Tage, €60K-€78K) oder Accelerate (12 Monate)' },
    { en: 'You\'re not ready to execute: If you just want a pricing strategy deck (not hands-on implementation). Better fit: Traditional consulting (McKinsey, BCG, Simon-Kucher)', de: 'Du bist nicht bereit zu exekutieren: Wenn du nur ein Pricing-Strategy-Deck willst (keine Hands-on Implementierung). Besser geeignet: Traditionelles Consulting (McKinsey, BCG, Simon-Kucher)' },
  ];

  return (
    <section
      id="qualification-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[40vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Ist das richtig für dich?' : 'Is This Right for You?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Power Up: Pricing Power funktioniert am besten für Unternehmen in dieser Situation.'
              : 'Power Up: Pricing Power works best for companies in this situation.'}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Ideal For */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-accent flex items-center gap-2">
              <Check className="w-5 h-5" />
              {language === 'de' ? 'Das ist ein guter Fit wenn:' : 'This is a good fit if:'}
            </h3>
            <div className="space-y-3">
              {idealFor.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-accent/5 border border-accent/20 rounded-lg">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{language === 'de' ? item.de : item.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not For */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-destructive flex items-center gap-2">
              <X className="w-5 h-5" />
              {language === 'de' ? 'Das ist kein guter Fit wenn:' : 'This is not a good fit if:'}
            </h3>
            <div className="space-y-3">
              {notFor.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{language === 'de' ? item.de : item.en}</span>
                </div>
              ))}
            </div>

            {/* Decision Help */}
            <div className="mt-6 p-6 bg-card border-2 border-border">
              <p className="text-sm text-muted-foreground mb-4">
                {language === 'de'
                  ? 'Nicht sicher, ob das der richtige Fit ist? Buche einen kostenlosen 30-Min. Inflection Call. Wir diagnostizieren deinen Pricing-Engpass und empfehlen den besten Weg nach vorn (auch wenn es nicht Power Up ist).'
                  : "Not sure if this is the right fit? Book a free 30-min Inflection Call. We'll diagnose your pricing bottleneck and recommend the best path forward (even if it's not Power Up)."}
              </p>
              <Button
                variant="default"
                onClick={() => scrollToSection('final-cta')}
              >
                {language === 'de' ? 'Kostenloses Inflection Call buchen' : 'Book Free Inflection Call'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 7: FINAL CTA (NEXT STEPS)
// ============================================================================
const FinalCTASection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.15, 0.3] });

  // Load Fillout script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const faqs = [
    {
      q: { en: 'How long does Power Up take?', de: 'Wie lange dauert Power Up?' },
      a: { en: '4-6 weeks (depending on your bottleneck and team availability)', de: '4-6 Wochen (abhängig von deinem Engpass und Team-Verfügbarkeit)' },
    },
    {
      q: { en: "What's the investment?", de: 'Was ist das Investment?' },
      a: { en: '€23.6K (fixed price, outcome-based risk sharing)', de: '€23.6K (Festpreis, ergebnisbasierte Risikoteilung)' },
    },
    {
      q: { en: "What if it doesn't work?", de: 'Was ist, wenn es nicht funktioniert?' },
      a: { en: "We measure outcomes (ARPU, Gross Margin, Discount Rate). If we don't hit agreed targets, we'll extend the sprint at no extra cost.", de: 'Wir messen Ergebnisse (ARPU, Bruttomarge, Rabattrate). Wenn wir vereinbarte Ziele nicht erreichen, verlängern wir den Sprint ohne Zusatzkosten.' },
    },
    {
      q: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' },
      a: { en: "Yes. We'll connect you with a CFO who's worked with us (same stage, same challenge).", de: 'Ja. Wir verbinden dich mit einem CFO, der mit uns gearbeitet hat (gleiche Stage, gleiche Herausforderung).' },
    },
    {
      q: { en: "What's the ROI?", de: 'Was ist der ROI?' },
      a: { en: 'Typical ROI is 15-30x (based on ARPU growth impact over 12 months).', de: 'Typischer ROI ist 15-30x (basierend auf ARPU-Wachstums-Impact über 12 Monate).' },
    },
    {
      q: { en: 'Do you work with our billing system?', de: 'Arbeitet ihr mit unserem Billing-System?' },
      a: { en: 'Yes. We integrate with Stripe, Chargebee, Recurly, and custom billing systems.', de: 'Ja. Wir integrieren mit Stripe, Chargebee, Recurly und individuellen Billing-Systemen.' },
    },
  ];

  const trustBadges = [
    { en: 'Outcome-Based Risk Sharing', de: 'Ergebnisbasierte Risikoteilung' },
    { en: '4-6 Week Sprint', de: '4-6 Wochen Sprint' },
    { en: 'Reference Calls Available', de: 'Referenzgespräche möglich' },
    { en: 'No Long-Term Lock-In', de: 'Keine langfristige Bindung' },
  ];

  return (
    <section
      id="final-cta"
      ref={(node) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        (containerRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }}
      />
      <div
        className="absolute inset-0 bg-mesh opacity-50 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[1]}px) scale(1.1)` }}
      />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="font-display text-display-md lg:text-display-lg text-foreground mb-6">
            {language === 'de' ? 'Bereit, deine Pricing Power wiederherzustellen?' : 'Ready to Restore Your Pricing Power?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Starte mit einem kostenlosen Inflection Call (30 Min.). Wir diagnostizieren deinen Pricing-Engpass und empfehlen die richtige Lösung (Power Up, Boost, Accelerate oder DIY).'
              : "Start with a free Inflection Call (30 min). We'll diagnose your pricing bottleneck and recommend the right solution (Power Up, Boost, Accelerate, or DIY)."}
          </p>
        </div>

        {/* Fillout Form Embed */}
        <div
          className="max-w-2xl mx-auto rounded-3xl bg-card/50 border-2 border-border backdrop-blur-sm overflow-hidden animate-slide-up mb-12"
          style={{ animationDelay: '0.2s' }}
        >
          <div
            style={{ width: '100%', height: '500px' }}
            data-fillout-id="bE8Mpbmb4mus"
            data-fillout-embed-type="standard"
            data-fillout-inherit-parameters
            data-fillout-dynamic-resize
          />
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 animate-fade-in mb-16" style={{ animationDelay: '0.4s' }}>
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              <span>{language === 'de' ? badge.de : badge.en}</span>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-bold text-lg mb-6 text-center">FAQ</h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-sm">
                  {language === 'de' ? faq.q.de : faq.q.en}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm">
                  {language === 'de' ? faq.a.de : faq.a.en}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          {language === 'de'
            ? 'Noch Fragen? E-Mail an team@scalingx.io oder ruf an.'
            : 'Still have questions? Email us at team@scalingx.io or book a call.'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const PowerUpPricingPower: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PowerUpPricingPower;
