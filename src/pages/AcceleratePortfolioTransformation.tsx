import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
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
  BarChart3,
  Target,
  Users,
  Clock,
  FileText,
  Briefcase,
  Shield,
  Layers,
  Map,
  MessageCircle,
  Rocket,
  TrendingUp,
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
    { value: '+60%', label: { en: 'Portfolio θ_index', de: 'Portfolio θ_index' }, sublabel: { en: '0.3 → 0.8', de: '0.3 → 0.8' } },
    { value: '+100-500%', label: { en: 'Portfolio Valuation', de: 'Portfolio Valuation' }, sublabel: { en: '€250M → €500M-€1.5B', de: '€250M → €500M-€1.5B' } },
    { value: '10-15', label: { en: 'Companies Transformed', de: 'Companies Transformed' }, sublabel: { en: 'Portfolio-wide', de: 'Portfolio-weit' } },
  ];

  const trustBadges = [
    { icon: Shield, label: { en: '2 of 3 Outcomes Guaranteed (or 50% Refund)', de: '2 von 3 Ergebnissen garantiert (oder 50% Rückerstattung)' } },
    { icon: Clock, label: { en: '12-Month Portfolio Transformation', de: '12-Monats-Portfolio-Transformation' } },
    { icon: MessageCircle, label: { en: 'Reference Calls Available', de: 'Referenzgespräche möglich' } },
  ];

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
              <BreadcrumbLink href="/solutions" className="text-muted-foreground hover:text-foreground">
                Solutions
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-foreground font-medium">Accelerate Portfolio Transformation</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Badge */}
        <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Rocket className="w-4 h-4 mr-2" />
          Accelerate · 12 {language === 'de' ? 'Monate' : 'Months'} · €360K-€720K
        </Badge>

        {/* Headline */}
        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">{language === 'de' ? 'Portfolio-weite' : 'Portfolio-Wide'}</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            AI-Native Transformation Built
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Transformiere dein gesamtes Portfolio zu AI-native in 12 Monaten. Typische Ergebnisse: Portfolio θ_index +60%, Portfolio Valuation +100-500%, Companies Transformed 10-15 – mit 2 von 3 Ergebnissen garantiert.'
            : 'Transform your entire portfolio to AI-native in 12 months. Typical outcomes: Portfolio θ_index +60%, Portfolio Valuation +100-500%, Companies Transformed 10-15—with 2 of 3 outcomes guaranteed.'}
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
            {language === 'de' ? 'Kostenloses Portfolio Assessment Call buchen (30 Min.)' : 'Book Free Portfolio Assessment Call (30 min)'}
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
    { en: 'Low portfolio θ_index: 0.3 (benchmark: 0.8+ for AI-native)', de: 'Niedriger Portfolio θ_index: 0.3 (Benchmark: 0.8+ für AI-native)' },
    { en: '60% without AI strategy: 9 of 15 companies have no AI roadmap', de: '60% ohne AI-Strategie: 9 von 15 Companies haben keine AI-Roadmap' },
    { en: '40% stuck: 6 of 15 companies with CAC Crisis, Growth Stalled, Scaling Chaos', de: '40% stuck: 6 von 15 Companies mit CAC Crisis, Growth Stalled, Scaling Chaos' },
    { en: 'Low portfolio IRR: 15% (benchmark: 40%+ for AI-native)', de: 'Niedriger Portfolio IRR: 15% (Benchmark: 40%+ für AI-native)' },
    { en: 'LP pressure: "When will we see AI-native returns?"', de: 'LP-Druck: "Wann sehen wir AI-native Returns?"' },
  ];

  const consequences = [
    { en: 'Destroys fund performance (IRR 15% vs. 40%+ for AI-native)', de: 'Zerstört Fund Performance (IRR 15% vs. 40%+ für AI-native)' },
    { en: 'Limits exit options (strategic buyers want AI-native companies)', de: 'Limitiert Exit-Optionen (strategische Käufer wollen AI-native Companies)' },
    { en: 'Weakens LP confidence (bottom quartile vs. top quartile)', de: 'Schwächt LP Confidence (unteres Quartil vs. oberes Quartil)' },
    { en: 'Increases down-round risk (portfolio companies can\'t raise)', de: 'Erhöht Down-Round-Risiko (Portfolio-Companies können nicht raisen)' },
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
            {language === 'de' ? 'Dein Portfolio underperformt — und die Zeit läuft ab' : 'Your Portfolio Is Underperforming—And You\'re Running Out of Time'}
          </h2>
        </div>

        {/* Problem Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'de'
              ? 'Dein Portfolio θ_index liegt bei 0.3 (Benchmark: 0.8+ für AI-native). 60% deiner Portfolio-Companies haben keine AI-Strategie. 40% sind stuck (CAC Crisis, Growth Stalled, Scaling Chaos). Dein Portfolio IRR liegt bei 15% (Benchmark: 40%+ für AI-native). Und das Schlimmste—deine LPs fragen: "Wann sehen wir AI-native Returns?"'
              : 'Your portfolio θ_index is 0.3 (benchmark: 0.8+ for AI-native). 60% of your portfolio companies have no AI strategy. 40% are stuck (CAC Crisis, Growth Stalled, Scaling Chaos). Your portfolio IRR is 15% (benchmark: 40%+ for AI-native). And worst of all—your LPs are asking: "When will we see AI-native returns?"'}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {language === 'de'
              ? 'Du hast die offensichtlichen Fixes ausprobiert: Operating Partners einstellen, Workshops abhalten, Berater engagieren. Aber nichts funktioniert. Denn das Problem ist nicht eine Company—es ist dein gesamtes Portfolio. Du brauchst Portfolio Transformation.'
              : "You've tried the obvious fixes: hiring operating partners, running workshops, bringing in consultants. But nothing is working. Because the problem isn't one company—it's your entire portfolio. You need Portfolio Transformation."}
          </p>
        </div>

        {/* Symptoms Checklist */}
        <div className="max-w-2xl mx-auto mb-12">
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

        {/* Real Cost */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">
            {language === 'de' ? 'Die echten Kosten:' : 'The real cost:'}
          </h3>
          <div className="grid gap-3">
            {consequences.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg"
              >
                <X className="w-4 h-4 text-destructive flex-shrink-0" />
                <span className="text-sm text-foreground">
                  {language === 'de' ? item.de : item.en}
                </span>
              </div>
            ))}
          </div>
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

  const quarters = [
    {
      number: 'Q1',
      title: { en: 'Portfolio Assessment', de: 'Portfolio Assessment' },
      timeline: { en: 'Months 1-3', de: 'Monate 1-3' },
      items: [
        { en: 'Assess all portfolio companies (θ_index, AMF v4.5.1)', de: 'Alle Portfolio-Companies assessieren (θ_index, AMF v4.5.1)' },
        { en: 'Create portfolio heatmap (visual dashboard)', de: 'Portfolio Heatmap erstellen (visuelles Dashboard)' },
        { en: 'Design 12-month transformation roadmap', de: '12-Monats-Transformations-Roadmap designen' },
        { en: 'Train operating partners (on AI-native transformation)', de: 'Operating Partners trainieren (auf AI-native Transformation)' },
      ],
      deliverable: { en: 'Portfolio Transformation Roadmap (12-month plan)', de: 'Portfolio Transformation Roadmap (12-Monats-Plan)' },
      color: 'from-violet-500 to-purple-600',
    },
    {
      number: 'Q2-Q3',
      title: { en: 'Portfolio Transformation', de: 'Portfolio Transformation' },
      timeline: { en: 'Months 4-9', de: 'Monate 4-9' },
      items: [
        { en: 'Tier 1: Top 5 Companies (Accelerate) - Full AI-native transformation', de: 'Tier 1: Top 5 Companies (Accelerate) - Volle AI-native Transformation' },
        { en: 'Tier 2: Middle 5 Companies (Boost) - Targeted transformation', de: 'Tier 2: Mittlere 5 Companies (Boost) - Gezielte Transformation' },
        { en: 'Tier 3: Bottom 5 Companies (Power Up) - Quick wins', de: 'Tier 3: Untere 5 Companies (Power Up) - Quick Wins' },
        { en: 'Train operating partners (on ongoing portfolio management)', de: 'Operating Partners trainieren (auf laufendes Portfolio-Management)' },
      ],
      deliverable: { en: '10-15 Companies Transformed (portfolio-wide impact)', de: '10-15 Companies Transformed (portfolio-weiter Impact)' },
      color: 'from-cyan-500 to-blue-600',
    },
    {
      number: 'Q4',
      title: { en: 'Optimization', de: 'Optimization' },
      timeline: { en: 'Months 10-12', de: 'Monate 10-12' },
      items: [
        { en: 'Optimize portfolio transformation (fine-tune across all companies)', de: 'Portfolio-Transformation optimieren (fine-tunen über alle Companies)' },
        { en: 'Create LP-ready portfolio dashboard (fund-level analytics)', de: 'LP-Ready Portfolio-Dashboard erstellen (Fund-Level Analytics)' },
        { en: 'Validate portfolio transformation (portfolio θ_index +60%)', de: 'Portfolio-Transformation validieren (Portfolio θ_index +60%)' },
        { en: 'Handoff to operating partners (ongoing portfolio management)', de: 'Handoff an Operating Partners (laufendes Portfolio-Management)' },
      ],
      deliverable: { en: 'AI-Native Portfolio (10-15 companies transformed)', de: 'AI-Native Portfolio (10-15 Companies transformed)' },
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  const tiers = [
    { 
      tier: 'Tier 1', 
      model: 'Accelerate', 
      companies: '5', 
      description: { en: 'Full AI-native transformation, 12 months', de: 'Volle AI-native Transformation, 12 Monate' },
      outcome: { en: 'θ_index +0.5-0.6 (0.3 → 0.8-0.9)', de: 'θ_index +0.5-0.6 (0.3 → 0.8-0.9)' },
      color: 'bg-violet-500/20 border-violet-500/40',
    },
    { 
      tier: 'Tier 2', 
      model: 'Boost', 
      companies: '5', 
      description: { en: 'Targeted transformation, 90 days', de: 'Gezielte Transformation, 90 Tage' },
      outcome: { en: 'θ_index +0.2-0.3 (0.3 → 0.5-0.6)', de: 'θ_index +0.2-0.3 (0.3 → 0.5-0.6)' },
      color: 'bg-cyan-500/20 border-cyan-500/40',
    },
    { 
      tier: 'Tier 3', 
      model: 'Power Up', 
      companies: '5', 
      description: { en: 'Quick wins, 30 days', de: 'Quick Wins, 30 Tage' },
      outcome: { en: 'θ_index +0.1-0.2 (0.3 → 0.4-0.5)', de: 'θ_index +0.1-0.2 (0.3 → 0.4-0.5)' },
      color: 'bg-emerald-500/20 border-emerald-500/40',
    },
  ];

  return (
    <section
      id="solution-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-background" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Die Lösung' : 'The Solution'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Wie wir dein gesamtes Portfolio transformieren' : 'How We Transform Your Entire Portfolio'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Wir fixen nicht nur eine Company. Wir transformieren dein gesamtes Portfolio—10-15 Companies—zu AI-native in 12 Monaten.'
              : "We don't just fix one company. We transform your entire portfolio—10-15 companies—to AI-native in 12 months."}
          </p>
        </div>

        {/* 3-Tier Model */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">
            {language === 'de' ? 'Gestaffelter Ansatz (3 Tiers):' : 'Tiered Approach (3 Tiers):'}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {tiers.map((tier, index) => (
              <div key={index} className={`${tier.color} border-2 p-6 rounded-lg`}>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs font-bold">{tier.tier}</Badge>
                  <span className="font-bold text-foreground">{tier.model}</span>
                </div>
                <div className="text-2xl font-bold text-foreground mb-2">{tier.companies} Companies</div>
                <p className="text-sm text-muted-foreground mb-3">
                  {language === 'de' ? tier.description.de : tier.description.en}
                </p>
                <p className="text-sm font-medium text-accent">
                  {language === 'de' ? tier.outcome.de : tier.outcome.en}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quarters Timeline */}
        <div className="space-y-8 mb-16">
          {quarters.map((quarter, index) => (
            <Collapsible key={index} defaultOpen={index === 0}>
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
                <CollapsibleTrigger className="w-full p-6 flex items-center gap-4 hover:bg-muted/30 transition-colors group">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${quarter.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {quarter.number}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-foreground">
                        {language === 'de' ? quarter.title.de : quarter.title.en}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {language === 'de' ? quarter.timeline.de : quarter.timeline.en}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {language === 'de' ? quarter.deliverable.de : quarter.deliverable.en}
                    </p>
                  </div>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-data-[state=open]:rotate-180 transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 pt-2 border-t border-border">
                    <ul className="space-y-2">
                      {quarter.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-sm">
                          <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {language === 'de' ? item.de : item.en}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>

        {/* What Makes This Different */}
        <div className="bg-accent/5 border-2 border-accent/20 p-6 rounded-lg">
          <h4 className="font-bold text-foreground mb-4 text-center">
            {language === 'de' ? 'Was uns unterscheidet:' : 'What makes this different:'}
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { en: 'Portfolio-wide transformation (10-15 companies, not just 1)', de: 'Portfolio-weite Transformation (10-15 Companies, nicht nur 1)' },
              { en: 'Tiered approach (Accelerate + Boost + Power Up)', de: 'Gestaffelter Ansatz (Accelerate + Boost + Power Up)' },
              { en: 'Operating partner support (capacity extension, not replacement)', de: 'Operating Partner Support (Capacity Extension, nicht Replacement)' },
              { en: '2 of 3 outcomes guaranteed (or 50% refund)', de: '2 von 3 Ergebnissen garantiert (oder 50% Refund)' },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
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
// SECTION 4: OUTCOME
// ============================================================================
const OutcomeSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const outcomes = [
    {
      metric: 'Portfolio θ_index +60%',
      icon: Briefcase,
      description: {
        en: 'Your portfolio θ_index increases by 60%.',
        de: 'Dein Portfolio θ_index steigt um 60%.',
      },
      before: { en: '0.3 (60% of companies at Level 1)', de: '0.3 (60% der Companies bei Level 1)' },
      after: { en: '0.8 (80% of companies at Level 2+)', de: '0.8 (80% der Companies bei Level 2+)' },
      impact: { en: 'From "traditional portfolio" to "AI-native portfolio"', de: 'Von "traditionelles Portfolio" zu "AI-native Portfolio"' },
      why: {
        en: 'We transform 10-15 companies to AI-native—which increases portfolio θ_index by 60% through systematic transformation across all companies.',
        de: 'Wir transformieren 10-15 Companies zu AI-native—was den Portfolio θ_index durch systematische Transformation über alle Companies um 60% steigert.',
      },
    },
    {
      metric: 'Portfolio Valuation +100-500%',
      icon: TrendingUp,
      description: {
        en: 'Your portfolio valuation increases by 100-500%.',
        de: 'Deine Portfolio-Bewertung steigt um 100-500%.',
      },
      before: { en: '€250M (traditional SaaS multiples)', de: '€250M (traditionelle SaaS-Multiples)' },
      after: { en: '€500M-€1.5B (AI-native premium)', de: '€500M-€1.5B (AI-native Premium)' },
      impact: { en: 'From "traditional valuation" to "AI-native premium"', de: 'Von "traditionelle Bewertung" zu "AI-native Premium"' },
      why: {
        en: 'We transform 10-15 companies to AI-native—which increases portfolio valuation by 100-500% through AI-native premium (10-15x vs. 3-5x multiples).',
        de: 'Wir transformieren 10-15 Companies zu AI-native—was die Portfolio-Bewertung durch AI-native Premium (10-15x vs. 3-5x Multiples) um 100-500% steigert.',
      },
    },
    {
      metric: 'Companies Transformed 10-15',
      icon: Target,
      description: {
        en: '10-15 companies are transformed to AI-enabled or AI-native.',
        de: '10-15 Companies werden zu AI-enabled oder AI-native transformiert.',
      },
      before: { en: '15 companies (12 at L1, 3 at L2, 0 at L3)', de: '15 Companies (12 bei L1, 3 bei L2, 0 bei L3)' },
      after: { en: '15 companies (3 at L1, 8 at L2, 4 at L3)', de: '15 Companies (3 bei L1, 8 bei L2, 4 bei L3)' },
      impact: { en: 'From "traditional portfolio" to "AI-native portfolio"', de: 'Von "traditionelles Portfolio" zu "AI-native Portfolio"' },
      why: {
        en: 'We transform 10-15 companies using tiered approach—which achieves portfolio-wide transformation through Accelerate + Boost + Power Up models.',
        de: 'Wir transformieren 10-15 Companies mit gestaffeltem Ansatz—was portfolio-weite Transformation durch Accelerate + Boost + Power Up Models erreicht.',
      },
    },
  ];

  const realExample = {
    company: { en: 'VC Firm, Series A-C focused (DACH)', de: 'VC Firm, Series A-C fokussiert (DACH)' },
    portfolio: '15 companies, €250M ARR',
    challenge: {
      en: 'Portfolio θ_index 0.3, 60% without AI strategy, 40% stuck, Portfolio IRR 15%',
      de: 'Portfolio θ_index 0.3, 60% ohne AI-Strategie, 40% stuck, Portfolio IRR 15%',
    },
    problems: {
      en: 'CAC Crisis (5), Growth Stalled (3), Scaling Chaos (4), No AI Strategy (9)',
      de: 'CAC Crisis (5), Growth Stalled (3), Scaling Chaos (4), Keine AI-Strategie (9)',
    },
    transformation: {
      en: 'Portfolio-wide AI-native transformation (Tier 1: 5 Accelerate, Tier 2: 5 Boost, Tier 3: 5 Power Up) over 12 months',
      de: 'Portfolio-weite AI-native Transformation (Tier 1: 5 Accelerate, Tier 2: 5 Boost, Tier 3: 5 Power Up) über 12 Monate',
    },
    results: [
      { metric: 'Portfolio θ_index', value: '+60% (0.3 → 0.8)' },
      { metric: 'Portfolio Valuation', value: '+300% (€250M → €1B)' },
      { metric: 'Companies Transformed', value: '15 (12 L1 → 4 L1)' },
      { metric: 'Portfolio IRR', value: '+25pp (15% → 40%)' },
    ],
  };

  return (
    <section
      id="outcome-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Das Ergebnis' : 'The Outcome'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Typische Ergebnisse (12 Monate)' : 'Typical Outcomes (12 Months)'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Das sind echte Ergebnisse von VC/PE-Firmen wie deiner (10-50 Portfolio-Companies).'
              : 'These are real results from VC/PE firms like yours (10-50 portfolio companies).'}
          </p>
        </div>

        {/* Outcome Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {outcomes.map((outcome, index) => (
            <Collapsible key={index} defaultOpen={index === 0}>
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden h-full">
                <CollapsibleTrigger className="w-full p-6 text-left hover:bg-muted/30 transition-colors group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <outcome.icon className="w-6 h-6 text-accent" />
                    </div>
                    <ChevronDown className="w-5 h-5 text-muted-foreground group-data-[state=open]:rotate-180 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient mb-2">{outcome.metric}</h3>
                  <p className="text-sm text-muted-foreground">
                    {language === 'de' ? outcome.description.de : outcome.description.en}
                  </p>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 border-t border-border pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{language === 'de' ? 'Vorher:' : 'Before:'}</span>
                      <span className="text-destructive font-medium">{language === 'de' ? outcome.before.de : outcome.before.en}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{language === 'de' ? 'Nachher:' : 'After:'}</span>
                      <span className="text-accent font-medium">{language === 'de' ? outcome.after.de : outcome.after.en}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{language === 'de' ? 'Impact:' : 'Impact:'}</span>
                      <span className="text-foreground font-medium">{language === 'de' ? outcome.impact.de : outcome.impact.en}</span>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        {language === 'de' ? outcome.why.de : outcome.why.en}
                      </p>
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>

        {/* Real Example */}
        <div className="bg-accent/5 border-2 border-accent/20 p-8 rounded-lg">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            {language === 'de' ? 'Echtes Beispiel:' : 'Real Example:'}
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'VC Firm:' : 'VC Firm:'}</p>
              <p className="font-medium text-foreground">{language === 'de' ? realExample.company.de : realExample.company.en}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'Portfolio:' : 'Portfolio:'}</p>
              <p className="font-medium text-foreground">{realExample.portfolio}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'Herausforderung:' : 'Challenge:'}</p>
              <p className="font-medium text-foreground">{language === 'de' ? realExample.challenge.de : realExample.challenge.en}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{language === 'de' ? 'Transformation:' : 'Transformation:'}</p>
              <p className="font-medium text-foreground">{language === 'de' ? realExample.transformation.de : realExample.transformation.en}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-4 gap-4">
            {realExample.results.map((result, index) => (
              <div key={index} className="bg-card border border-border p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">{result.metric}</p>
                <p className="font-bold text-accent">{result.value}</p>
              </div>
            ))}
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
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const phases = [
    {
      title: { en: 'Portfolio Assessment', de: 'Portfolio Assessment' },
      timeline: { en: 'Q1 (Months 1-3)', de: 'Q1 (Monate 1-3)' },
      activities: [
        { en: 'Assess all portfolio companies (θ_index, AMF v4.5.1)', de: 'Alle Portfolio-Companies assessieren (θ_index, AMF v4.5.1)' },
        { en: 'Create portfolio heatmap (visual dashboard)', de: 'Portfolio Heatmap erstellen (visuelles Dashboard)' },
        { en: 'Design 12-month transformation roadmap', de: '12-Monats-Transformations-Roadmap designen' },
        { en: 'Train operating partners (on AI-native transformation)', de: 'Operating Partners trainieren (auf AI-native Transformation)' },
      ],
      deliverables: [
        { en: 'Portfolio Heatmap (θ_index for all companies)', de: 'Portfolio Heatmap (θ_index für alle Companies)' },
        { en: 'Transformation Roadmap (12-month plan)', de: 'Transformation Roadmap (12-Monats-Plan)' },
        { en: 'Operating Partner Playbooks (standardized approach)', de: 'Operating Partner Playbooks (standardisierter Ansatz)' },
      ],
      commitment: { en: '20-30 hours', de: '20-30 Stunden' },
    },
    {
      title: { en: 'Portfolio Transformation', de: 'Portfolio Transformation' },
      timeline: { en: 'Q2-Q3 (Months 4-9)', de: 'Q2-Q3 (Monate 4-9)' },
      activities: [
        { en: 'Transform 10-15 companies (Tier 1: Accelerate, Tier 2: Boost, Tier 3: Power Up)', de: '10-15 Companies transformieren (Tier 1: Accelerate, Tier 2: Boost, Tier 3: Power Up)' },
        { en: 'Implement AI-native systems (across all companies)', de: 'AI-native Systeme implementieren (über alle Companies)' },
        { en: 'Train operating partners (on ongoing portfolio management)', de: 'Operating Partners trainieren (auf laufendes Portfolio-Management)' },
      ],
      deliverables: [
        { en: '10-15 Companies Transformed (portfolio-wide impact)', de: '10-15 Companies Transformed (portfolio-weiter Impact)' },
        { en: 'AI-Native Systems (deployed across all companies)', de: 'AI-Native Systems (deployed über alle Companies)' },
        { en: 'Operating Partner Training (capacity extension)', de: 'Operating Partner Training (Capacity Extension)' },
      ],
      commitment: { en: '30-40 hours', de: '30-40 Stunden' },
    },
    {
      title: { en: 'Optimization', de: 'Optimization' },
      timeline: { en: 'Q4 (Months 10-12)', de: 'Q4 (Monate 10-12)' },
      activities: [
        { en: 'Optimize portfolio transformation (fine-tune across all companies)', de: 'Portfolio-Transformation optimieren (fine-tunen über alle Companies)' },
        { en: 'Create LP-ready portfolio dashboard (fund-level analytics)', de: 'LP-Ready Portfolio-Dashboard erstellen (Fund-Level Analytics)' },
        { en: 'Validate portfolio transformation (portfolio θ_index +60%)', de: 'Portfolio-Transformation validieren (Portfolio θ_index +60%)' },
        { en: 'Handoff to operating partners (ongoing portfolio management)', de: 'Handoff an Operating Partners (laufendes Portfolio-Management)' },
      ],
      deliverables: [
        { en: 'Portfolio Dashboard (real-time, LP-ready)', de: 'Portfolio-Dashboard (Echtzeit, LP-ready)' },
        { en: 'Validated Portfolio Transformation (with before/after data)', de: 'Validierte Portfolio-Transformation (mit Vorher/Nachher-Daten)' },
        { en: 'Operating Partner Handoff (ongoing support)', de: 'Operating Partner Handoff (laufender Support)' },
      ],
      commitment: { en: '10-20 hours', de: '10-20 Stunden' },
    },
  ];

  const metrics = [
    { name: 'Portfolio θ_index', description: { en: '(average across all)', de: '(Durchschnitt über alle)' } },
    { name: 'Portfolio Valuation', description: { en: '(€)', de: '(€)' } },
    { name: 'Companies Transformed', description: { en: '(number)', de: '(Anzahl)' } },
  ];

  return (
    <section
      id="process-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-background" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Der Prozess' : 'How We Work'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Der Accelerate-Prozess (Quartal für Quartal)' : 'The Accelerate Process (Quarter-by-Quarter)'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Transparente Timeline. Klare Deliverables. Messbare Ergebnisse.'
              : 'Transparent timeline. Clear deliverables. Measurable outcomes.'}
          </p>
        </div>

        {/* Process Timeline */}
        <div className="space-y-8 mb-16">
          {phases.map((phase, index) => (
            <div key={index} className="bg-card border-2 border-border rounded-lg p-6">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge variant="outline" className="text-sm font-bold">
                  {language === 'de' ? phase.timeline.de : phase.timeline.en}
                </Badge>
                <h3 className="text-xl font-bold text-foreground">
                  {language === 'de' ? phase.title.de : phase.title.en}
                </h3>
                <div className="ml-auto text-sm text-muted-foreground">
                  {language === 'de' ? 'Zeitaufwand (dein Team):' : 'Time commitment (your team):'}{' '}
                  <span className="font-medium text-foreground">{language === 'de' ? phase.commitment.de : phase.commitment.en}</span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    {language === 'de' ? 'Was wir tun:' : 'What we do:'}
                  </h4>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{language === 'de' ? activity.de : activity.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    {language === 'de' ? 'Was du bekommst:' : 'What you get:'}
                  </h4>
                  <ul className="space-y-2">
                    {phase.deliverables.map((deliverable, delIndex) => (
                      <li key={delIndex} className="flex items-start gap-2 text-sm">
                        <FileText className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground font-medium">{language === 'de' ? deliverable.de : deliverable.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outcome-Based Risk Sharing */}
        <div className="bg-accent/5 border-2 border-accent/20 p-8 rounded-lg">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            {language === 'de' ? 'Outcome-basiertes Risk Sharing:' : 'Outcome-Based Risk Sharing:'}
          </h3>

          {/* Primary Metrics */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 text-center">
              {language === 'de' ? 'Primäre Metriken:' : 'Primary Metrics:'}
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-card border border-border p-4 rounded-lg text-center">
                  <p className="font-bold text-foreground">{metric.name}</p>
                  <p className="text-sm text-muted-foreground">{language === 'de' ? metric.description.de : metric.description.en}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee */}
          <div className="bg-accent/10 border border-accent/30 p-6 rounded-lg text-center">
            <h4 className="text-lg font-bold text-accent mb-2">
              {language === 'de' ? '2 von 3 Ergebnissen garantiert:' : '2 of 3 Outcomes Guaranteed:'}
            </h4>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {[
                'Portfolio θ_index +60%',
                'Portfolio Valuation +100-500%',
                'Companies Transformed 10-15',
              ].map((outcome, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {outcome}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              {language === 'de'
                ? 'Wenn wir 2 von 3 Ergebnissen nicht erreichen, bekommst du 50% Rückerstattung.'
                : "If we don't hit 2 of 3 outcomes, you get 50% refund."}
            </p>
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
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const goodFit = [
    {
      title: { en: "You're a VC/PE firm with 10-50 portfolio companies", de: 'Du bist eine VC/PE-Firma mit 10-50 Portfolio-Companies' },
      items: [
        { en: 'You have 10-50 portfolio companies (Series A-D)', de: 'Du hast 10-50 Portfolio-Companies (Series A-D)' },
        { en: 'Your portfolio θ_index is 0.2-0.5 (mostly Level 1)', de: 'Dein Portfolio θ_index liegt bei 0.2-0.5 (meist Level 1)' },
        { en: 'You have 12 months to achieve portfolio transformation', de: 'Du hast 12 Monate für Portfolio-Transformation' },
      ],
    },
    {
      title: { en: 'Your portfolio is underperforming and needs portfolio-wide transformation', de: 'Dein Portfolio underperformt und braucht portfolio-weite Transformation' },
      items: [
        { en: 'Do 60% of your companies have no AI strategy?', de: 'Haben 60% deiner Companies keine AI-Strategie?' },
        { en: 'Do 40% of your companies have CAC Crisis, Growth Stalled, or Scaling Chaos?', de: 'Haben 40% deiner Companies CAC Crisis, Growth Stalled oder Scaling Chaos?' },
        { en: 'Is your portfolio IRR <20% (benchmark: 40%+ for AI-native)?', de: 'Liegt dein Portfolio IRR <20% (Benchmark: 40%+ für AI-native)?' },
        { en: 'Do you need to transform 10-15 companies (not just 1)?', de: 'Musst du 10-15 Companies transformieren (nicht nur 1)?' },
      ],
    },
    {
      title: { en: 'You have operating partners (or need capacity extension)', de: 'Du hast Operating Partners (oder brauchst Capacity Extension)' },
      items: [
        { en: 'You have 1-3 operating partners (or plan to hire)', de: 'Du hast 1-3 Operating Partners (oder planst einzustellen)' },
        { en: 'Your operating partners are overloaded (1:15+ ratio)', de: 'Deine Operating Partners sind überlastet (1:15+ Ratio)' },
        { en: 'You need capacity extension (not replacement)', de: 'Du brauchst Capacity Extension (nicht Replacement)' },
      ],
    },
    {
      title: { en: "You're willing to commit 12 months", de: 'Du bist bereit, 12 Monate zu committen' },
      items: [
        { en: 'You understand portfolio transformation takes 12 months (not 90 days)', de: 'Du verstehst, dass Portfolio-Transformation 12 Monate dauert (nicht 90 Tage)' },
        { en: 'Your operating partners will commit 10-15 hours/week for 12 months', de: 'Deine Operating Partners committen 10-15 Stunden/Woche für 12 Monate' },
        { en: "You'll give us full access (all portfolio companies, data, systems)", de: 'Du gibst uns vollen Zugang (alle Portfolio-Companies, Daten, Systeme)' },
      ],
    },
    {
      title: { en: 'You have budget (€360K-€720K)', de: 'Du hast Budget (€360K-€720K)' },
      items: [
        { en: 'You can invest €360K-€720K (€30K-€60K/month) for 12 months', de: 'Du kannst €360K-€720K (€30K-€60K/Monat) für 12 Monate investieren' },
        { en: 'ROI is 100-500x (based on typical outcomes)', de: 'ROI ist 100-500x (basierend auf typischen Ergebnissen)' },
      ],
    },
  ];

  const notFit = [
    {
      title: { en: 'You only need to fix 1 company (not portfolio-wide)', de: 'Du musst nur 1 Company fixen (nicht portfolio-weit)' },
      description: { en: 'If you just need to fix 1 company (not 10-15), Accelerate Portfolio is overkill', de: 'Wenn du nur 1 Company fixen musst (nicht 10-15), ist Accelerate Portfolio Overkill' },
      alternative: { en: 'Accelerate (12 months, €153K) for single company transformation', de: 'Accelerate (12 Monate, €153K) für einzelne Company-Transformation' },
    },
    {
      title: { en: 'You have <10 portfolio companies', de: 'Du hast <10 Portfolio-Companies' },
      description: { en: 'If you have <10 portfolio companies, portfolio transformation is not cost-effective', de: 'Wenn du <10 Portfolio-Companies hast, ist Portfolio-Transformation nicht kosteneffizient' },
      alternative: { en: 'Accelerate (12 months, €153K) for single company transformation', de: 'Accelerate (12 Monate, €153K) für einzelne Company-Transformation' },
    },
    {
      title: { en: "You're not ready for 12-month commitment", de: 'Du bist nicht bereit für ein 12-Monats-Commitment' },
      description: { en: "If you need results in 90 days (not 12 months), Accelerate Portfolio won't work", de: 'Wenn du Ergebnisse in 90 Tagen brauchst (nicht 12 Monate), funktioniert Accelerate Portfolio nicht' },
      alternative: { en: 'Boost (90 days, €60K-€78K) for faster results', de: 'Boost (90 Tage, €60K-€78K) für schnellere Ergebnisse' },
    },
  ];

  return (
    <section
      id="qualification-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Für wen?' : 'Who It\'s For'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Ist das das Richtige für dich?' : 'Is This Right for You?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Accelerate: Portfolio Transformation funktioniert am besten für VC/PE-Firmen in dieser Situation.'
              : 'Accelerate: Portfolio Transformation works best for VC/PE firms in this situation.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Good Fit */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-accent mb-6">
              <Check className="w-6 h-6" />
              {language === 'de' ? 'Das passt gut, wenn:' : 'This is a good fit if:'}
            </h3>
            <div className="space-y-6">
              {goodFit.map((section, index) => (
                <div key={index} className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-3">
                    {language === 'de' ? section.title.de : section.title.en}
                  </h4>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{language === 'de' ? item.de : item.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Not Fit */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-destructive mb-6">
              <X className="w-6 h-6" />
              {language === 'de' ? 'Das passt nicht, wenn:' : 'This is not a good fit if:'}
            </h3>
            <div className="space-y-6">
              {notFit.map((section, index) => (
                <div key={index} className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">
                    {language === 'de' ? section.title.de : section.title.en}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {language === 'de' ? section.description.de : section.description.en}
                  </p>
                  <div className="flex items-start gap-2 text-sm bg-card border border-border rounded p-2">
                    <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">
                      <span className="font-medium">{language === 'de' ? 'Besser geeignet:' : 'Better fit:'}</span>{' '}
                      {language === 'de' ? section.alternative.de : section.alternative.en}
                    </span>
                  </div>
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
// SECTION 7: FINAL CTA
// ============================================================================
const FinalCTASection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const faqs = [
    {
      question: { en: 'How long does Accelerate Portfolio take?', de: 'Wie lange dauert Accelerate Portfolio?' },
      answer: { en: '12 months (4 quarters, phased implementation)', de: '12 Monate (4 Quartale, phasenweise Implementierung)' },
    },
    {
      question: { en: "What's the investment?", de: 'Wie hoch ist das Investment?' },
      answer: { en: '€360K-€720K (€30K-€60K/month, depends on portfolio size)', de: '€360K-€720K (€30K-€60K/Monat, abhängig von Portfolio-Größe)' },
    },
    {
      question: { en: "What if it doesn't work?", de: 'Was, wenn es nicht funktioniert?' },
      answer: { en: "We guarantee 2 of 3 outcomes (Portfolio θ_index +60%, Portfolio Valuation +100-500%, Companies Transformed 10-15). If we don't hit 2 of 3, you get 50% refund.", de: 'Wir garantieren 2 von 3 Ergebnissen (Portfolio θ_index +60%, Portfolio Valuation +100-500%, Companies Transformed 10-15). Wenn wir 2 von 3 nicht erreichen, bekommst du 50% Rückerstattung.' },
    },
    {
      question: { en: 'Can I talk to a reference?', de: 'Kann ich mit einer Referenz sprechen?' },
      answer: { en: "Yes. We'll connect you with a VC/PE partner who's achieved portfolio transformation with us (same portfolio size, same challenge).", de: 'Ja. Wir verbinden dich mit einem VC/PE-Partner, der Portfolio-Transformation mit uns erreicht hat (gleiche Portfolio-Größe, gleiche Herausforderung).' },
    },
    {
      question: { en: "What's the ROI?", de: 'Wie hoch ist der ROI?' },
      answer: { en: 'Typical ROI is 100-500x (based on portfolio valuation increase over 12 months).', de: 'Typischer ROI ist 100-500x (basierend auf Portfolio-Bewertungssteigerung über 12 Monate).' },
    },
    {
      question: { en: 'How is this different from Accelerate?', de: 'Wie unterscheidet sich das von Accelerate?' },
      answer: { en: 'Accelerate (12 months, €153K) transforms 1 company. Accelerate Portfolio (12 months, €360K-€720K) transforms 10-15 companies.', de: 'Accelerate (12 Monate, €153K) transformiert 1 Company. Accelerate Portfolio (12 Monate, €360K-€720K) transformiert 10-15 Companies.' },
    },
  ];

  return (
    <section
      id="final-cta"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Nächste Schritte' : 'Next Steps'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Bereit, dein gesamtes Portfolio zu transformieren?' : 'Ready to Transform Your Entire Portfolio?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de' ? 'So geht es weiter.' : "Here's what happens next."}
          </p>
        </div>

        {/* Step 1 */}
        <div className="bg-accent/5 border-2 border-accent/20 p-8 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-foreground mb-4">
            {language === 'de' ? 'Schritt 1: Kostenloses Portfolio Assessment Call buchen (30 Min.)' : 'Step 1: Book a Free Portfolio Assessment Call (30 min)'}
          </h3>
          <p className="text-muted-foreground mb-6">
            {language === 'de'
              ? 'In 30 Minuten werden wir: Dein Portfolio assessieren (Portfolio θ_index, welche Companies sind stuck?), dir zeigen, wie wir 10-15 Companies transformieren würden (mit Beispielen), und eine klare Empfehlung geben (Accelerate Portfolio, Accelerate, oder Boost).'
              : "In 30 minutes, we'll: Assess your portfolio (portfolio θ_index, which companies are stuck?), show you exactly how we'd transform 10-15 companies (with examples), and give you a clear recommendation (Accelerate Portfolio, Accelerate, or Boost)."}
          </p>
          <p className="text-sm text-muted-foreground mb-6 italic">
            {language === 'de' ? 'Kein Pitch. Kein Druck. Nur Klarheit.' : 'No pitch. No pressure. Just clarity.'}
          </p>
          <Button
            size="xl"
            className="w-full sm:w-auto bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => window.open('https://calendly.com/michel-scalingx/portfolio-assessment', '_blank')}
          >
            {language === 'de' ? 'Kostenloses Portfolio Assessment Call buchen (30 Min.)' : 'Book Free Portfolio Assessment Call (30 min)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Step 2 */}
        <div className="bg-card border-2 border-border p-8 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-foreground mb-4">
            {language === 'de' ? 'Schritt 2: Entscheide, ob Accelerate Portfolio das Richtige für dich ist' : 'Step 2: Decide If Accelerate Portfolio Is Right for You'}
          </h3>
          <p className="text-muted-foreground mb-4">
            {language === 'de' ? 'Nach dem Portfolio Assessment Call wirst du wissen:' : "After the Portfolio Assessment Call, you'll know:"}
          </p>
          <ul className="space-y-2 mb-4">
            {[
              { en: 'What your portfolio θ_index is (and which companies are stuck)', de: 'Wie hoch dein Portfolio θ_index ist (und welche Companies stuck sind)' },
              { en: "How we'd transform 10-15 companies (and in what order)", de: 'Wie wir 10-15 Companies transformieren würden (und in welcher Reihenfolge)' },
              { en: 'What outcomes to expect (Portfolio θ_index, Valuation, Companies Transformed)', de: 'Welche Ergebnisse zu erwarten sind (Portfolio θ_index, Valuation, Companies Transformed)' },
              { en: 'Whether Accelerate Portfolio is the right fit (or if you need Accelerate or Boost)', de: 'Ob Accelerate Portfolio das Richtige ist (oder ob du Accelerate oder Boost brauchst)' },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{language === 'de' ? item.de : item.en}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground italic">
            {language === 'de' ? 'Du entscheidest. Kein Druck.' : 'You decide. No pressure.'}
          </p>
        </div>

        {/* Alternative */}
        <div className="bg-muted/50 border border-border p-6 rounded-lg mb-12">
          <h4 className="font-bold text-foreground mb-3">
            {language === 'de' ? 'Alternative: Starte mit einem Portfolio Assessment' : 'Alternative: Start With a Portfolio Assessment'}
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            {language === 'de'
              ? 'Noch nicht bereit für ein volles Accelerate Portfolio? Starte kleiner:'
              : 'Not ready for a full Accelerate Portfolio? Start smaller:'}
          </p>
          <div className="bg-card border border-border p-4 rounded-lg">
            <p className="font-bold text-foreground">Portfolio Assessment (1-2 {language === 'de' ? 'Wochen' : 'weeks'}, €5K-€10K)</p>
            <p className="text-sm text-muted-foreground">
              {language === 'de'
                ? 'Deep-Dive in dein Portfolio (θ_index für alle Companies). Identifiziere, welche Companies zuerst transformiert werden sollten. Geh mit einer 12-Monats-Portfolio-Transformation-Roadmap nach Hause.'
                : "Deep-dive into your portfolio (θ_index for all companies). Identify which companies to transform first. Walk away with a 12-month portfolio transformation roadmap."}
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">FAQ</h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {language === 'de' ? faq.question.de : faq.question.en}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {language === 'de' ? faq.answer.de : faq.answer.en}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => window.open('https://calendly.com/michel-scalingx/portfolio-assessment', '_blank')}
          >
            {language === 'de' ? 'Kostenloses Portfolio Assessment Call buchen (30 Min.)' : 'Book Free Portfolio Assessment Call (30 min)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            {language === 'de'
              ? 'Noch Fragen? Schreib uns eine E-Mail an team@scalingx.io oder buche einen Call.'
              : 'Still have questions? Email us at team@scalingx.io or book a call.'}
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const AcceleratePortfolioTransformation: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
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

export default AcceleratePortfolioTransformation;
