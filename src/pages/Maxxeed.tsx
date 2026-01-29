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
  Users,
  TrendingDown,
  TrendingUp,
  Clock,
  Award,
  FileText,
  MessageCircle,
  Brain,
  Settings,
  Rocket,
  BarChart3,
  Shield,
  Calendar,
  Star,
  ExternalLink,
  Presentation,
  Mail,
  Sparkles,
  Activity,
  UserCheck,
  Building2,
  GraduationCap,
  BookOpen,
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
    { value: '+31%', label: { en: 'Close Rate', de: 'Close Rate' }, sublabel: { en: 'vs. 25-30%', de: 'vs. 25-30%' } },
    { value: '+24%', label: { en: 'Deal Size', de: 'Deal Size' }, sublabel: { en: '€50k → €62k', de: '€50k → €62k' } },
    { value: '98%', label: { en: 'Open Rate', de: 'Open Rate' }, sublabel: { en: 'vs. 15-20%', de: 'vs. 15-20%' } },
    { value: '+422%', label: { en: 'ABM Rate', de: 'ABM Rate' }, sublabel: { en: 'vs. 5-10%', de: 'vs. 5-10%' } },
  ];

  const trustBadges = [
    { icon: Shield, label: { en: '€135/User/Month', de: '€135/User/Monat' } },
    { icon: Clock, label: { en: '30 Seconds Setup', de: '30 Sekunden Setup' } },
    { icon: Star, label: { en: 'ScalingX Black Belt Partner', de: 'ScalingX Black Belt Partner' } },
    { icon: Award, label: { en: 'Commission-Based Partnership', de: 'Provisionsbasierte Partnerschaft' } },
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
              <BreadcrumbLink href="/" className="text-muted-foreground hover:text-foreground">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/solutions" className="text-muted-foreground hover:text-foreground">
                Tools
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-foreground font-medium">Maxxeed</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Badge */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Badge variant="gradient">
            <Target className="w-4 h-4 mr-2" />
            AI-Powered Sales Enablement
          </Badge>
          <Badge variant="outline">€135/User/Mo</Badge>
          <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">
            <Star className="w-4 h-4 mr-2" />
            Black Belt Partner
          </Badge>
        </div>

        {/* Headline */}
        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'Begeistere deine Käufer in 30 Sekunden' : 'Wow Your Buyers in 30 Seconds'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Dein Autopilot zur Umsatzsteigerung. Verwandle Gesprächsnotizen in beeindruckende Digital Showrooms—ohne PowerPoint, ohne zusätzlichen Aufwand.'
            : 'Your autopilot for revenue growth. Transform meeting notes into stunning Digital Showrooms—no PowerPoint, no extra effort.'}
        </p>

        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {heroStats.map((stat, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm border-2 border-border p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-xs font-semibold text-foreground uppercase tracking-wider">
                {language === 'de' ? stat.label.de : stat.label.en}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                ({language === 'de' ? stat.sublabel.de : stat.sublabel.en})
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => scrollToSection('final-cta')}
          >
            {language === 'de' ? 'Demo buchen mit ScalingX' : 'Book Demo with ScalingX'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://www.maxxeed.com/de/', '_blank')}
            className="border-2"
          >
            {language === 'de' ? 'Maxxeed.com besuchen' : 'Visit Maxxeed.com'}
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              <span>{language === 'de' ? badge.label.de : badge.label.en}</span>
            </div>
          ))}
        </div>

        {/* Partnership Note */}
        <div className="max-w-2xl mx-auto p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm text-muted-foreground">
            {language === 'de'
              ? 'ScalingX ist Black Belt Partner von Maxxeed. Wir nutzen Maxxeed in unserem eigenen Sales-Prozess und verdienen Provision bei Weiterempfehlungen. Buche eine Demo, um zu sehen, wie wir Maxxeed für unsere Kunden implementieren.'
              : 'ScalingX is a Black Belt Partner of Maxxeed. We use Maxxeed in our own sales process and earn commission on referrals. Book a demo to see how we implement Maxxeed for our clients.'}
          </p>
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

  const problems = [
    {
      icon: Mail,
      title: { en: 'Inefficient Communication', de: 'Ineffiziente Kommunikation' },
      desc: { en: 'Your sales reps rely on email and PowerPoint—unpersonal, inefficient, and unable to build trust. 56% of buyers forget your message after one hour.', de: 'Deine Sales Reps nutzen E-Mail und PowerPoint—unpersönlich, ineffizient, und können kein Vertrauen aufbauen. 56% der Käufer vergessen deine Botschaft nach einer Stunde.' },
    },
    {
      icon: Target,
      title: { en: 'No Differentiation', de: 'Keine Differenzierung' },
      desc: { en: 'Your company has no way to differentiate. Win rates are stuck at 30%, while 70% of your sales costs generate no revenue.', de: 'Dein Unternehmen hat keine Möglichkeit, sich zu differenzieren. Win Rates stecken bei 30%, während 70% deiner Sales-Kosten keinen Umsatz generieren.' },
    },
    {
      icon: Users,
      title: { en: 'Buyer Frustration', de: 'Käufer-Frustration' },
      desc: { en: '78% of buyers demand better experiences—but instead get boring presentations and unstructured information.', de: '78% der Käufer fordern bessere Erlebnisse—bekommen aber langweilige Präsentationen und unstrukturierte Informationen.' },
    },
  ];

  const baselineMetrics = [
    { metric: { en: 'Win Rate', de: 'Win Rate' }, baseline: '30%', maxxeed: '40-50%' },
    { metric: { en: 'Deal Size', de: 'Deal Size' }, baseline: '€50k', maxxeed: '€75k+' },
    { metric: { en: 'Email Open Rate', de: 'E-Mail Open Rate' }, baseline: '15-20%', maxxeed: '98%' },
    { metric: { en: 'Sales Cycle', de: 'Sales Cycle' }, baseline: '90-120 days', maxxeed: '60-90 days' },
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
            {language === 'de' 
              ? 'Dein Sales-Team verliert Deals—wegen schlechter Buyer Experiences' 
              : "Your Sales Team Is Losing Deals—Because of Bad Buyer Experiences"}
          </h2>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-destructive/5 border-2 border-destructive/20 p-6 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-destructive" />
                </div>
                <h4 className="font-bold text-lg text-foreground mb-2">
                  {language === 'de' ? problem.title.de : problem.title.en}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'de' ? problem.desc.de : problem.desc.en}
                </p>
              </div>
            );
          })}
        </div>

        {/* Baseline vs. Maxxeed */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
          {/* Before */}
          <div className="bg-destructive/10 border-2 border-destructive/30 p-6 rounded-lg">
            <h4 className="text-sm font-bold uppercase tracking-widest text-destructive mb-4 text-center">
              Baseline
            </h4>
            <div className="space-y-4">
              {baselineMetrics.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{language === 'de' ? item.metric.de : item.metric.en}</span>
                  <span className="font-bold text-destructive">{item.baseline}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg">
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-4 text-center">
              With Maxxeed
            </h4>
            <div className="space-y-4">
              {baselineMetrics.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{language === 'de' ? item.metric.de : item.metric.en}</span>
                  <span className="font-bold text-accent">{item.maxxeed}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cost Calculation */}
        <div className="max-w-2xl mx-auto bg-card border-2 border-destructive/30 p-6 rounded-lg text-center">
          <h4 className="font-bold text-lg mb-2 text-destructive">
            {language === 'de' ? 'Die Kosten' : 'The Cost'}
          </h4>
          <p className="text-muted-foreground">
            {language === 'de'
              ? 'Für ein €50M ARR Unternehmen mit 20 Sales Reps bedeutet das €12M+ verlorener ARR pro Jahr—nur weil deine Buyer Experience kaputt ist.'
              : 'For a €50M ARR company with 20 sales reps, this means €12M+ lost ARR per year—just because your buyer experience is broken.'}
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

  const coreFeatures = [
    {
      icon: Sparkles,
      title: { en: 'Automatic Showroom Creation', de: 'Automatische Showroom-Erstellung' },
      desc: { en: 'Answer two questions ("What do you sell to whom?"), and Maxxeed generates a complete Digital Showroom in 30 seconds—not 30 minutes like PowerPoint.', de: 'Beantworte zwei Fragen ("Was verkaufst du an wen?"), und Maxxeed generiert einen kompletten Digital Showroom in 30 Sekunden—nicht 30 Minuten wie PowerPoint.' },
      includes: [
        { en: 'Welcome & value proposition', de: 'Willkommen & Value Proposition' },
        { en: 'Stakeholder maps (individual benefits per persona)', de: 'Stakeholder Maps (individuelle Benefits pro Persona)' },
        { en: 'Success plan & success criteria', de: 'Success Plan & Erfolgskriterien' },
        { en: 'Interactive elements (business cards, branding, case studies, videos)', de: 'Interaktive Elemente (Visitenkarten, Branding, Case Studies, Videos)' },
        { en: 'Multi-language support & live chat', de: 'Mehrsprachiger Support & Live Chat' },
      ],
      impact: { en: '-90% time spent on presentations', de: '-90% Zeit für Präsentationen' },
    },
    {
      icon: Users,
      title: { en: 'Buyer Value Cycle', de: 'Buyer Value Cycle' },
      desc: { en: 'Maxxeed generates tailored conversation guides, stakeholder maps, success plans, and success criteria—automatically.', de: 'Maxxeed generiert maßgeschneiderte Gesprächsleitfäden, Stakeholder Maps, Success Plans und Erfolgskriterien—automatisch.' },
      includes: [
        { en: 'Conversation guides for needs analysis', de: 'Gesprächsleitfäden für Bedarfsanalyse' },
        { en: 'Hyper-personalized showroom elements', de: 'Hyper-personalisierte Showroom-Elemente' },
        { en: 'Stakeholder-specific benefits', de: 'Stakeholder-spezifische Benefits' },
        { en: 'Success plan & success criteria', de: 'Success Plan & Erfolgskriterien' },
      ],
      impact: { en: '+31% higher close rate', de: '+31% höhere Close Rate' },
    },
    {
      icon: Activity,
      title: { en: 'Deal Health Score & Analytics', de: 'Deal Health Score & Analytics' },
      desc: { en: 'See how buyers engage with your showroom (video, analytics) and get AI-powered recommendations for the next best step.', de: 'Sieh, wie Käufer mit deinem Showroom interagieren (Video, Analytics) und erhalte KI-gestützte Empfehlungen für den nächsten besten Schritt.' },
      includes: [
        { en: 'Buyer behavior analytics (who viewed what, when, how long)', de: 'Buyer Behavior Analytics (wer hat was, wann, wie lange gesehen)' },
        { en: 'Deal health score (probability, size, timing)', de: 'Deal Health Score (Wahrscheinlichkeit, Größe, Timing)' },
        { en: 'Next step recommendations (AI-powered)', de: 'Nächster-Schritt-Empfehlungen (KI-gestützt)' },
      ],
      impact: { en: '+24% larger deal size', de: '+24% größere Deal Size' },
    },
  ];

  const maxxeedDifference = [
    { label: { en: 'Speed', de: 'Speed' }, value: { en: '30 seconds per showroom (vs. 30 minutes PowerPoint)', de: '30 Sekunden pro Showroom (vs. 30 Minuten PowerPoint)' } },
    { label: { en: 'Personalization', de: 'Personalisierung' }, value: { en: 'Hyper-personalized for each buyer (not generic)', de: 'Hyper-personalisiert für jeden Käufer (nicht generisch)' } },
    { label: { en: 'Buyer-Centric', de: 'Buyer-Centric' }, value: { en: 'Focus on buyer experience (not seller comfort)', de: 'Fokus auf Buyer Experience (nicht Verkäufer-Komfort)' } },
    { label: { en: 'Automation', de: 'Automation' }, value: { en: 'Meeting notes → showrooms (automatically)', de: 'Meeting Notes → Showrooms (automatisch)' } },
    { label: { en: 'Analytics', de: 'Analytics' }, value: { en: 'Deal health score shows next best step', de: 'Deal Health Score zeigt nächsten besten Schritt' } },
    { label: { en: 'Holistic', de: 'Holistisch' }, value: { en: 'Covers entire sales cycle (not just presentations)', de: 'Deckt gesamten Sales Cycle ab (nicht nur Präsentationen)' } },
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
              ? 'Maxxeed automatisiert Digital Showrooms—in 30 Sekunden'
              : 'Maxxeed Automates Digital Showrooms—In 30 Seconds'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Maxxeed ist nicht nur ein Tool—es ist dein Autopilot für Sales Enablement. Es automatisiert die Erstellung hyper-personalisierter Digital Showrooms, die den gesamten Sales Cycle abdecken.'
              : "Maxxeed is not just a tool—it's your autopilot for sales enablement. It automates the creation of hyper-personalized Digital Showrooms that cover the entire sales cycle."}
          </p>
        </div>

        {/* Core Features */}
        <div className="space-y-8 mb-16">
          {coreFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card border-2 border-primary/30 hover:border-primary p-6 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl text-foreground mb-2">
                      {language === 'de' ? feature.title.de : feature.title.en}
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      {language === 'de' ? feature.desc.de : feature.desc.en}
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-4">
                      {feature.includes.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{language === 'de' ? item.de : item.en}</span>
                        </div>
                      ))}
                    </div>
                    <Badge variant="accent" className="text-sm">
                      {language === 'de' ? 'Impact: ' : 'Impact: '}{language === 'de' ? feature.impact.de : feature.impact.en}
                    </Badge>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Maxxeed Difference */}
        <div className="bg-card border-2 border-border p-6">
          <h3 className="font-bold text-lg mb-6 text-center">
            {language === 'de' ? 'Der Maxxeed-Unterschied:' : 'The Maxxeed Difference:'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {maxxeedDifference.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">{language === 'de' ? item.label.de : item.label.en}: </span>
                  <span className="text-sm text-muted-foreground">{language === 'de' ? item.value.de : item.value.en}</span>
                </div>
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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const metricsTable = [
    { metric: 'Close Rate', baseline: '25-30%', maxxeed: '31-40%', improvement: '+31%' },
    { metric: 'Deal Size', baseline: '€50k', maxxeed: '€62k-€75k', improvement: '+24%' },
    { metric: 'Email Open Rate', baseline: '15-20%', maxxeed: '98%', improvement: '+490%' },
    { metric: 'ABM Open Rate', baseline: '5-10%', maxxeed: '42-50%', improvement: '+422%' },
    { metric: 'Sales Cycle', baseline: '90-120 days', maxxeed: '60-90 days', improvement: '-25-33%' },
    { metric: 'Showroom Creation', baseline: '30 minutes', maxxeed: '30 seconds', improvement: '-99%' },
    { metric: 'Team Onboarding', baseline: '4-6 weeks', maxxeed: '2-3 weeks', improvement: '+56% faster' },
    { metric: 'Content Usage', baseline: '20-30%', maxxeed: '60-70%', improvement: '+41%' },
  ];

  const testimonials = [
    {
      quote: 'Maxxeed ist genau das, wonach ich seit über 15 Jahren gesucht habe.',
      author: 'Ralf H. KOMOR',
    },
    {
      quote: 'Maxxeed gibt jedem die Methoden, die ansonsten nur Top-Verkäufer anwenden.',
      author: 'Siegfried Lettmann',
    },
    {
      quote: 'Maxxeed prägt eine neue Gewohnheit, die es dem Vertrieb extrem einfach macht zu gewinnen.',
      author: 'Felix Stegmann',
    },
  ];

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
            {language === 'de' ? 'Was sich ändert, wenn du Maxxeed nutzt' : 'What Changes When You Use Maxxeed?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de' ? 'Echte Metriken von echten Unternehmen.' : 'Real metrics from real companies.'}
          </p>
        </div>

        {/* Metrics Table */}
        <div className="bg-card border-2 border-border overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">Metric</th>
                  <th className="text-left p-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">Baseline</th>
                  <th className="text-left p-4 text-sm font-bold uppercase tracking-wider text-primary bg-primary/5">With Maxxeed</th>
                  <th className="text-left p-4 text-sm font-bold uppercase tracking-wider text-accent">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {metricsTable.map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="p-4 text-sm font-medium text-foreground">{row.metric}</td>
                    <td className="p-4 text-sm text-muted-foreground">{row.baseline}</td>
                    <td className="p-4 text-sm font-medium text-primary bg-primary/5">{row.maxxeed}</td>
                    <td className="p-4 text-sm font-bold text-accent">{row.improvement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ROI Calculation */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-accent/10 border-2 border-accent/30 p-6">
            <h3 className="font-bold text-lg mb-4 text-accent">
              {language === 'de' ? 'ROI-Kalkulation (€50M ARR, 20 Sales Reps):' : 'ROI Calculation (€50M ARR, 20 Sales Reps):'}
            </h3>
            <div className="space-y-4 text-sm">
              <div className="font-semibold text-foreground mb-2">Revenue Impact:</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• 20 sales reps × 10 deals/month = 200 deals/year</li>
                <li>• Baseline: 30% win rate = 60 deals won</li>
                <li>• With Maxxeed: 40% win rate (+31%) = 78 deals won</li>
                <li>• Additional deals: 18 deals × €50k = <span className="font-bold text-accent">€900k additional ARR</span></li>
                <li>• Deal size increase: 78 deals × €12k (+24%) = <span className="font-bold text-accent">€936k additional ARR</span></li>
              </ul>
              <div className="pt-4 border-t border-accent/30">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{language === 'de' ? 'Gesamt Revenue Impact:' : 'Total Revenue Impact:'}</span>
                  <span className="font-bold text-accent">€1.8M ARR/year</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border-2 border-border p-6">
            <h3 className="font-bold text-lg mb-4">{language === 'de' ? 'Investment & Return:' : 'Investment & Return:'}</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{language === 'de' ? 'Kosten (20 Users):' : 'Cost (20 Users):'}</span>
                <span className="font-bold text-foreground">€32.4k/year</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{language === 'de' ? 'Time Savings:' : 'Time Savings:'}</span>
                <span className="font-bold text-foreground">€60k/year</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{language === 'de' ? 'Revenue Impact:' : 'Revenue Impact:'}</span>
                <span className="font-bold text-foreground">€1.8M/year</span>
              </div>
              <div className="flex justify-between border-t border-border pt-4">
                <span className="text-muted-foreground">{language === 'de' ? 'Gesamt-Wert:' : 'Total Value:'}</span>
                <span className="font-bold text-accent">€1.86M/year</span>
              </div>
              <div className="flex justify-between bg-accent/10 p-3 rounded-lg">
                <span className="font-semibold">ROI:</span>
                <span className="font-bold text-accent text-2xl">57x</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border p-6 italic animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
              <p className="text-sm font-semibold text-foreground">— {testimonial.author}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-accent text-accent-foreground"
            onClick={() => scrollToSection('final-cta')}
          >
            {language === 'de' ? 'Demo buchen mit ScalingX' : 'Book Demo with ScalingX'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://www.maxxeed.com/de/', '_blank')}
          >
            {language === 'de' ? 'Maxxeed.com besuchen' : 'Visit Maxxeed.com'}
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 5: ICP (WHO IS THIS FOR?)
// ============================================================================
const ICPSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const personas = [
    {
      icon: UserCheck,
      title: { en: 'Sales Reps', de: 'Sales Reps' },
      firmographics: { en: 'B2B Sales Teams', de: 'B2B Sales Teams' },
      problem: { en: 'Too much time on presentations, poor buyer engagement', de: 'Zu viel Zeit für Präsentationen, schlechtes Buyer Engagement' },
      useCase: { en: 'Faster, better presentations', de: 'Schnellere, bessere Präsentationen' },
    },
    {
      icon: TrendingUp,
      title: { en: 'Sales Leaders', de: 'Sales Leaders' },
      firmographics: { en: '€10M-€500M ARR', de: '€10M-€500M ARR' },
      problem: { en: 'Low win rates (30%), high sales costs', de: 'Niedrige Win Rates (30%), hohe Sales-Kosten' },
      useCase: { en: 'Scalable sales processes', de: 'Skalierbare Sales-Prozesse' },
    },
    {
      icon: Target,
      title: { en: 'Marketing Teams', de: 'Marketing Teams' },
      firmographics: { en: 'B2B Marketing', de: 'B2B Marketing' },
      problem: { en: 'Low content usage, poor lead nurturing', de: 'Geringe Content-Nutzung, schlechtes Lead Nurturing' },
      useCase: { en: 'Automated buyer journeys', de: 'Automatisierte Buyer Journeys' },
    },
    {
      icon: Building2,
      title: { en: 'Enterprise Sales', de: 'Enterprise Sales' },
      firmographics: { en: 'Complex Solutions', de: 'Komplexe Lösungen' },
      problem: { en: 'Many stakeholders, long sales cycles', de: 'Viele Stakeholder, lange Sales Cycles' },
      useCase: { en: 'Stakeholder management', de: 'Stakeholder Management' },
    },
  ];

  const goodFit = [
    { en: "You're a Sales Rep who spends 5+ hours/week on presentations", de: 'Du bist Sales Rep und verbringst 5+ Stunden/Woche mit Präsentationen' },
    { en: "You're a Sales Leader with win rates below 35%", de: 'Du bist Sales Leader mit Win Rates unter 35%' },
    { en: "You're in Marketing with content usage below 40%", de: 'Du bist im Marketing mit Content-Nutzung unter 40%' },
    { en: "You're in Enterprise Sales with 5+ stakeholders per deal", de: 'Du bist im Enterprise Sales mit 5+ Stakeholdern pro Deal' },
    { en: "You're scaling and need consistent sales processes", de: 'Du skalierst und brauchst konsistente Sales-Prozesse' },
  ];

  const notFit = [
    { en: "You're in transactional sales (1-call close)", de: 'Du bist im transaktionalen Vertrieb (1-Call Close)' },
    { en: "You don't use presentations in your sales process", de: 'Du nutzt keine Präsentationen in deinem Sales-Prozess' },
    { en: "You have win rates above 50% (already best-in-class)", de: 'Du hast Win Rates über 50% (bereits Best-in-Class)' },
  ];

  return (
    <section
      id="icp-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Für wen ist Maxxeed?' : 'Who Is This For?'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Wer braucht Maxxeed?' : 'Who Needs Maxxeed?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de' ? '4 Buyer Personas, die am meisten profitieren.' : '4 buyer personas who benefit most.'}
          </p>
        </div>

        {/* Persona Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <div
                key={index}
                className="bg-card border-2 border-border hover:border-primary/50 p-6 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-lg text-foreground mb-2">
                  {language === 'de' ? persona.title.de : persona.title.en}
                </h4>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  {language === 'de' ? persona.firmographics.de : persona.firmographics.en}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="font-semibold">{language === 'de' ? 'Problem: ' : 'Problem: '}</span>
                  {language === 'de' ? persona.problem.de : persona.problem.en}
                </p>
                <p className="text-sm text-accent">
                  <span className="font-semibold">{language === 'de' ? 'Use Case: ' : 'Use Case: '}</span>
                  {language === 'de' ? persona.useCase.de : persona.useCase.en}
                </p>
              </div>
            );
          })}
        </div>

        {/* Good Fit / Not Fit */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Good Fit */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-accent flex items-center gap-2">
              <Check className="w-5 h-5" />
              {language === 'de' ? 'Wann Maxxeed nutzen:' : 'When to Use Maxxeed:'}
            </h3>
            <div className="space-y-3">
              {goodFit.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-accent/5 border border-accent/20 rounded-lg">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{language === 'de' ? item.de : item.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not Fit */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-destructive flex items-center gap-2">
              <X className="w-5 h-5" />
              {language === 'de' ? 'Wann Maxxeed nicht nutzen:' : 'When Not to Use Maxxeed:'}
            </h3>
            <div className="space-y-3">
              {notFit.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{language === 'de' ? item.de : item.en}</span>
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
// SECTION 6: BUYER JOURNEY
// ============================================================================
const BuyerJourneySection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const useCases = [
    { icon: Presentation, title: 'Landing Page', desc: { en: 'Generate personalized interest (lead generation)', de: 'Hochindividuell Interesse wecken (Lead-Generierung)' } },
    { icon: Mail, title: 'Follow-up', desc: { en: 'Bundle all relevant content in one place', de: 'Bündle alles Relevante an einem Ort' } },
    { icon: FileText, title: { en: 'Decision Template', de: 'Entscheidungsvorlage' }, desc: { en: 'Generate successful closes', de: 'Generiere erfolgreiche Abschlüsse' } },
    { icon: UserCheck, title: { en: 'Customer Onboarding', de: 'Kunden-Onboarding' }, desc: { en: 'Set standards in Customer Success', de: 'Setze Standards im Customer Success' } },
    { icon: Shield, title: 'After-Sales', desc: { en: 'Accompany customers after purchase', de: 'Begleite deine Kunden nach dem Kauf' } },
    { icon: Users, title: 'Partner Enablement', desc: { en: 'Train your partner network', de: 'Schule dein Partnernetzwerk' } },
    { icon: GraduationCap, title: { en: 'Employee Onboarding', de: 'Mitarbeiter-Onboarding' }, desc: { en: 'Enable new employees quickly', de: 'Befähige neue Mitarbeiter schnell' } },
    { icon: Target, title: 'Team Enablement', desc: { en: 'Customer-centric training', de: 'Bilde kundenorientiert weiter aus' } },
    { icon: BookOpen, title: 'Knowledge Base', desc: { en: 'Reuse best practices', de: 'Verwende Best Practices wieder' } },
  ];

  const process = [
    {
      step: '1',
      title: { en: 'Answer Two Questions (30 seconds)', de: 'Beantworte zwei Fragen (30 Sekunden)' },
      items: [
        { en: '"What do you sell?"', de: '"Was verkaufst du?"' },
        { en: '"To whom do you sell?"', de: '"An wen verkaufst du?"' },
      ],
    },
    {
      step: '2',
      title: { en: 'Automatic Showroom Creation (30 seconds)', de: 'Automatische Showroom-Erstellung (30 Sekunden)' },
      items: [
        { en: 'Buyer Value Cycle with conversation guides', de: 'Buyer Value Cycle mit Gesprächsleitfäden' },
        { en: 'Hyper-personalized showroom elements', de: 'Hyper-personalisierte Showroom-Elemente' },
        { en: 'Stakeholder-specific benefits', de: 'Stakeholder-spezifische Benefits' },
        { en: 'Success plan & success criteria', de: 'Success Plan & Erfolgskriterien' },
      ],
    },
    {
      step: '3',
      title: { en: 'Share & Analyze (ongoing)', de: 'Teilen & Analysieren (fortlaufend)' },
      items: [
        { en: 'Share showroom with buyers (email, link, QR code)', de: 'Showroom mit Käufern teilen (E-Mail, Link, QR-Code)' },
        { en: 'Analyze buyer behavior (video, analytics)', de: 'Käuferverhalten analysieren (Video, Analytics)' },
        { en: 'Get Deal Health Score for next step', de: 'Deal Health Score für nächsten Schritt erhalten' },
      ],
    },
  ];

  return (
    <section
      id="buyer-journey-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-mesh" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'So funktioniert es' : 'How It Works'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Maxxeed deckt deinen gesamten Sales Cycle ab' : 'Maxxeed Covers Your Entire Sales Cycle'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de' ? '9 Use Cases—von Lead Generation bis Customer Success.' : '9 use cases—from lead generation to customer success.'}
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-3 md:grid-cols-9 gap-4 mb-16">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-foreground">
                  {typeof useCase.title === 'string' ? useCase.title : (language === 'de' ? useCase.title.de : useCase.title.en)}
                </span>
              </div>
            );
          })}
        </div>

        {/* Process */}
        <h3 className="text-center text-lg font-bold mb-8">
          {language === 'de' ? 'Der Maxxeed-Prozess:' : 'The Maxxeed Process:'}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {process.map((step, index) => (
            <div
              key={index}
              className="relative bg-card border-2 border-border hover:border-primary/50 p-6 transition-all duration-400 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-3 -right-3 px-4 py-1 text-sm font-bold tracking-wider bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-brutal-sm">
                Step {step.step}
              </div>

              <h4 className="font-bold text-lg text-foreground mb-4 pr-8">
                {language === 'de' ? step.title.de : step.title.en}
              </h4>

              <ul className="space-y-2">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{language === 'de' ? item.de : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 7: PRICING & FINAL CTA
// ============================================================================
const PricingSection: React.FC = () => {
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

  const teamSizes = [
    { size: { en: 'Small Team (5 users)', de: 'Kleines Team (5 User)' }, monthly: '€675/month', yearly: '€8.1k/year' },
    { size: { en: 'Mid-Size Team (10 users)', de: 'Mittleres Team (10 User)' }, monthly: '€1,350/month', yearly: '€16.2k/year' },
    { size: { en: 'Large Team (20 users)', de: 'Großes Team (20 User)' }, monthly: '€2,700/month', yearly: '€32.4k/year' },
  ];

  const features = [
    { en: 'Unlimited Digital Showrooms', de: 'Unbegrenzte Digital Showrooms' },
    { en: 'Automatic showroom creation (30 seconds)', de: 'Automatische Showroom-Erstellung (30 Sekunden)' },
    { en: 'Buyer value cycle (stakeholder maps, success plans)', de: 'Buyer Value Cycle (Stakeholder Maps, Success Plans)' },
    { en: 'Deal health score & analytics', de: 'Deal Health Score & Analytics' },
    { en: 'Multi-language support', de: 'Mehrsprachiger Support' },
    { en: 'Live chat integration', de: 'Live Chat Integration' },
    { en: 'Team collaboration', de: 'Team-Kollaboration' },
    { en: 'Priority support', de: 'Prioritäts-Support' },
  ];

  const faqs = [
    {
      q: { en: "What's the pricing model?", de: 'Was ist das Pricing-Modell?' },
      a: { en: '€135 per user per month. Simple, transparent, no hidden fees.', de: '€135 pro User pro Monat. Einfach, transparent, keine versteckten Kosten.' },
    },
    {
      q: { en: 'Is there a free trial?', de: 'Gibt es eine kostenlose Testversion?' },
      a: { en: 'Contact Maxxeed directly via maxxeed.com for trial options.', de: 'Kontaktiere Maxxeed direkt über maxxeed.com für Testoptionen.' },
    },
    {
      q: { en: 'How long does implementation take?', de: 'Wie lange dauert die Implementierung?' },
      a: { en: '2-3 weeks for team onboarding. ScalingX can help accelerate this.', de: '2-3 Wochen für Team-Onboarding. ScalingX kann dies beschleunigen.' },
    },
    {
      q: { en: 'Do I need technical skills?', de: 'Brauche ich technische Fähigkeiten?' },
      a: { en: 'No. Maxxeed is designed for sales reps—no technical skills required.', de: 'Nein. Maxxeed ist für Sales Reps konzipiert—keine technischen Fähigkeiten erforderlich.' },
    },
    {
      q: { en: 'How does ScalingX use Maxxeed?', de: 'Wie nutzt ScalingX Maxxeed?' },
      a: { en: 'We use Maxxeed to create Digital Showrooms for our prospects. Book a demo to see a live example.', de: 'Wir nutzen Maxxeed, um Digital Showrooms für unsere Prospects zu erstellen. Buche eine Demo für ein Live-Beispiel.' },
    },
    {
      q: { en: 'Why is ScalingX a Black Belt Partner?', de: 'Warum ist ScalingX Black Belt Partner?' },
      a: { en: "We're a Black Belt Partner because we use Maxxeed ourselves and earn commission on referrals. We only recommend tools we actually use.", de: 'Wir sind Black Belt Partner, weil wir Maxxeed selbst nutzen und Provision für Weiterempfehlungen erhalten. Wir empfehlen nur Tools, die wir tatsächlich nutzen.' },
    },
    {
      q: { en: 'Can ScalingX help with implementation?', de: 'Kann ScalingX bei der Implementierung helfen?' },
      a: { en: 'Yes. We offer Maxxeed implementation as part of our Power Up or Boost programs.', de: 'Ja. Wir bieten Maxxeed-Implementierung als Teil unserer Power Up oder Boost Programme an.' },
    },
  ];

  const trustBadges = [
    { en: '€135/User/Month', de: '€135/User/Monat' },
    { en: '30 Seconds Setup', de: '30 Sekunden Setup' },
    { en: 'ScalingX Black Belt Partner', de: 'ScalingX Black Belt Partner' },
    { en: 'No Long-Term Lock-In', de: 'Keine langfristige Bindung' },
  ];

  return (
    <section
      id="final-cta"
      ref={(node) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        (containerRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }}
      className={`relative min-h-[70vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Investment' : 'Pricing'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Transparentes Pricing—€135 pro User pro Monat' : 'Transparent Pricing—€135 per User per Month'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de' ? 'Einfaches, vorhersehbares Pricing. Keine versteckten Kosten.' : 'Simple, predictable pricing. No hidden fees.'}
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-3xl mx-auto bg-card border-2 border-primary p-8 mb-16">
          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-gradient mb-2">€135</div>
            <div className="text-muted-foreground">{language === 'de' ? 'pro User pro Monat' : 'per user per month'}</div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{language === 'de' ? feature.de : feature.en}</span>
              </div>
            ))}
          </div>

          {/* Team Sizes */}
          <div className="border-t border-border pt-6">
            <h4 className="font-bold text-sm mb-4 text-center uppercase tracking-wider text-muted-foreground">
              {language === 'de' ? 'Typische Team-Größen:' : 'Typical Team Sizes:'}
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              {teamSizes.map((team, index) => (
                <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-sm font-medium text-foreground mb-1">{language === 'de' ? team.size.de : team.size.en}</div>
                  <div className="text-xs text-muted-foreground">{team.monthly} = {team.yearly}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fillout Form Embed */}
        <div className="text-center mb-8">
          <h3 className="font-display text-display-sm text-foreground mb-4">
            {language === 'de' ? 'Demo buchen mit ScalingX' : 'Book Demo with ScalingX'}
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            {language === 'de'
              ? 'Wir zeigen dir, wie wir Maxxeed in unserem eigenen Sales-Prozess nutzen und besprechen deinen spezifischen Use Case.'
              : "We'll show you how we use Maxxeed in our own sales process and discuss your specific use case."}
          </p>
        </div>

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

        {/* Secondary CTA */}
        <div className="text-center mb-16">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://www.maxxeed.com/de/', '_blank')}
          >
            {language === 'de' ? 'Oder besuche Maxxeed.com direkt' : 'Or visit Maxxeed.com directly'}
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Partnership Note */}
        <div className="max-w-2xl mx-auto p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg mb-16 text-center">
          <p className="text-sm text-muted-foreground">
            {language === 'de'
              ? 'Als Black Belt Partner verdient ScalingX Provision bei Maxxeed-Weiterempfehlungen. Wir empfehlen Maxxeed, weil wir es selbst nutzen—und wir haben die Ergebnisse gesehen. Buche eine Demo, um zu sehen, wie wir Maxxeed für unsere Kunden implementieren.'
              : "As a Black Belt Partner, ScalingX earns commission on Maxxeed referrals. We recommend Maxxeed because we use it ourselves—and we've seen the results. Book a demo to see how we implement Maxxeed for our clients."}
          </p>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="font-bold text-lg mb-6 text-center">FAQ</h3>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-2 border-border bg-card px-6">
                <AccordionTrigger className="text-left font-medium">
                  {language === 'de' ? faq.q.de : faq.q.en}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {language === 'de' ? faq.a.de : faq.a.en}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              <span>{language === 'de' ? badge.de : badge.en}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
const Maxxeed: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <OutcomeSection />
        <ICPSection />
        <BuyerJourneySection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Maxxeed;
