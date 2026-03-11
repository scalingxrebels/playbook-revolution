import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BreadcrumbSchema } from '@/components/seo';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
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
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Download,
  Users,
  Target,
  Sparkles,
  Quote,
  Layers,
  Brain,
  Zap,
  Shield,
  Clock,
  MessageCircle,
} from 'lucide-react';

// ============================================================================
// INLINE LEAD FORM
// ============================================================================
interface LeadFormProps {
  variant?: 'hero' | 'cta';
}

const InlineLeadForm: React.FC<LeadFormProps> = ({ variant = 'hero' }) => {
  const { language } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error(language === 'de' ? 'Bitte gib eine gültige E-Mail-Adresse ein.' : 'Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      const utmRaw = sessionStorage.getItem('scalingx_utm_params');
      const utm = utmRaw ? JSON.parse(utmRaw) : {};

      const { error } = await supabase.from('download_leads').insert({
        email: email.trim(),
        name: name.trim() || null,
        asset_id: 'gtm-stack-map-2026',
        asset_type: 'lead-magnet',
        page_url: window.location.href,
        referrer: document.referrer || null,
        utm_source: utm.utm_source || null,
        utm_medium: utm.utm_medium || null,
        utm_campaign: utm.utm_campaign || null,
        utm_content: utm.utm_content || null,
        utm_term: utm.utm_term || null,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast.success(language === 'de' ? 'Download startet…' : 'Download starting…');

      const link = document.createElement('a');
      link.href = '/downloads/gtm-stack-map-2026.pdf';
      link.download = 'GTM-Stack-Map-2026.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      toast.error(language === 'de' ? 'Etwas ist schiefgelaufen. Bitte versuche es erneut.' : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-4">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
          <Check className="w-6 h-6 text-accent" />
        </div>
        <p className="text-foreground font-semibold text-lg">
          {language === 'de' ? 'Dein Download startet automatisch.' : 'Your download is starting automatically.'}
        </p>
        <a
          href="/downloads/gtm-stack-map-2026.pdf"
          download="GTM-Stack-Map-2026.pdf"
          className="text-accent underline underline-offset-4 text-sm hover:text-accent/80 transition-colors"
        >
          {language === 'de' ? 'Download nicht gestartet? Hier klicken →' : 'Download didn\'t start? Click here →'}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
      <Input
        type="text"
        placeholder={language === 'de' ? 'Vorname' : 'First name'}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-background/50 border-border/50 backdrop-blur-sm h-12"
        maxLength={100}
      />
      <Input
        type="email"
        placeholder={language === 'de' ? 'E-Mail *' : 'Email *'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-background/50 border-border/50 backdrop-blur-sm h-12"
        maxLength={255}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-12 px-6 whitespace-nowrap font-bold uppercase tracking-wide text-sm bg-gradient-accent text-primary-foreground shadow-accent-glow"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <Download className="w-4 h-4 mr-2" />
            {language === 'de' ? 'Herunterladen' : 'Download'}
          </>
        )}
      </Button>
    </form>
  );
};

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
    { value: '120+', label: { en: 'Tools Mapped', de: 'Tools kartiert' }, sublabel: { en: 'All categories', de: 'Alle Kategorien' } },
    { value: '4', label: { en: 'Funnel Layers', de: 'Funnel-Layer' }, sublabel: { en: 'Traffic → Retention', de: 'Traffic → Retention' } },
    { value: 'AI', label: { en: 'Native Tools Tagged', de: 'Native Tools markiert' }, sublabel: { en: 'Separately identified', de: 'Separat identifiziert' } },
  ];

  const trustBadges = [
    { icon: Shield, label: { en: 'No Spam, No Pitch', de: 'Kein Spam, kein Pitch' } },
    { icon: Clock, label: { en: 'Instant Download', de: 'Sofortiger Download' } },
    { icon: MessageCircle, label: { en: 'Used by 200+ GTM Teams', de: 'Von 200+ GTM-Teams genutzt' } },
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
              <span className="text-foreground font-medium">GTM Stack Map 2026</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Badge */}
        <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Download className="w-4 h-4 mr-2" />
          Free · Lead Magnet · PDF
        </Badge>

        {/* Headline */}
        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-foreground">{language === 'de' ? 'Der GTM Stack 2026.' : 'The GTM Stack 2026.'}</span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'Alle Tools. Eine Übersicht.' : 'All Tools. One Overview.'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Alle Tools. Alle Layer. Eine Übersicht — für B2B SaaS Teams, die aufhören wollen zu raten.'
            : 'All tools. All layers. One overview — for B2B SaaS teams that want to stop guessing.'}
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

        {/* Inline Form */}
        <div className="flex justify-center mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <InlineLeadForm variant="hero" />
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
        onClick={() => scrollToSection('benefits-section')}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-fade-in cursor-pointer"
        style={{ animationDelay: '1s' }}
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

// ============================================================================
// SECTION 2: BENEFITS
// ============================================================================
const BenefitsSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const benefits = language === 'de'
    ? [
        { icon: Layers, title: 'Alle GTM-Tools 2026', desc: 'Kategorisiert nach Funnel-Layer — Traffic, Entry, Conversion, Retention.' },
        { icon: Target, title: 'Empfehlungs-Logik', desc: 'Welches Tool für welchen Reifegrad? Klare Orientierung statt Ratespiel.' },
        { icon: Brain, title: 'AI-Native markiert', desc: 'AI-native Tools separat gekennzeichnet — damit du die Zukunft nicht verpasst.' },
        { icon: Zap, title: 'Sofort nutzbar', desc: 'Kein Setup, kein Login. PDF herunterladen und sofort loslegen.' },
        { icon: Users, title: 'Für jede Team-Größe', desc: 'Egal ob 5 oder 500 — die Map skaliert mit deinem GTM-System.' },
      ]
    : [
        { icon: Layers, title: 'All GTM Tools 2026', desc: 'Categorized by funnel layer — Traffic, Entry, Conversion, Retention.' },
        { icon: Target, title: 'Recommendation Logic', desc: 'Which tool for which maturity level? Clear orientation, not guesswork.' },
        { icon: Brain, title: 'AI-Native Tagged', desc: 'AI-native tools separately marked — so you don\'t miss the future.' },
        { icon: Zap, title: 'Instantly Usable', desc: 'No setup, no login. Download the PDF and start immediately.' },
        { icon: Users, title: 'For Any Team Size', desc: 'Whether 5 or 500 — the map scales with your GTM system.' },
      ];

  return (
    <section
      id="benefits-section"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Was du bekommst' : 'What You Get'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Alles in einer Übersicht' : 'Everything in One Overview'}
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card border-2 border-border hover:border-accent/50 p-6 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 3: ICP QUALIFICATION
// ============================================================================
const ICPSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const personas = language === 'de'
    ? [
        { icon: Target, title: 'Head of Growth / VP Marketing', desc: 'in B2B SaaS — du willst den Überblick über den aktuellen GTM-Markt.' },
        { icon: Users, title: 'GTM-System im Aufbau', desc: 'Du baust gerade dein GTM-System auf oder überarbeitest es grundlegend.' },
        { icon: Sparkles, title: 'AI-Native Teams', desc: 'Du willst wissen, welche Tools andere AI-native Teams nutzen.' },
      ]
    : [
        { icon: Target, title: 'Head of Growth / VP Marketing', desc: 'in B2B SaaS — you want an overview of the current GTM market.' },
        { icon: Users, title: 'Building Your GTM System', desc: 'You\'re building or overhauling your GTM system right now.' },
        { icon: Sparkles, title: 'AI-Native Teams', desc: 'You want to know which tools other AI-native teams use.' },
      ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[40vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Zielgruppe' : 'Target Audience'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Für wen ist das?' : 'Who Is This For?'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((p, i) => (
            <div
              key={i}
              className="bg-card backdrop-blur-sm border-2 border-border p-8 text-center hover:border-primary/50 transition-colors animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-3 text-lg">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 4: SOCIAL PROOF
// ============================================================================
const SocialProofSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const quotes = language === 'de'
    ? [
        { text: 'Endlich eine Übersicht, die nicht veraltet ist.', name: 'Head of Growth, B2B SaaS (DACH)' },
        { text: 'Ich habe meinen Stack in 30 Minuten überarbeitet.', name: 'VP Marketing, Series A' },
      ]
    : [
        { text: 'Finally an overview that isn\'t outdated.', name: 'Head of Growth, B2B SaaS (DACH)' },
        { text: 'I overhauled my stack in 30 minutes.', name: 'VP Marketing, Series A' },
      ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[30vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Social Proof' : 'Social Proof'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? 'Was andere sagen' : 'What Others Say'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="border-2 border-border border-l-4 border-l-accent bg-card p-8 relative animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-accent/20 absolute top-6 right-6" />
              <p className="text-foreground text-lg leading-relaxed mb-6 italic">"{q.text}"</p>
              <p className="text-muted-foreground text-sm font-medium">— {q.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 5: CTA REPEAT
// ============================================================================
const CTARepeatSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });

  const stats = language === 'de'
    ? [
        { value: '200+', label: 'GTM-Teams' },
        { value: 'Free', label: 'Kein Pitch' },
        { value: 'PDF', label: 'Sofort-Download' },
      ]
    : [
        { value: '200+', label: 'GTM Teams' },
        { value: 'Free', label: 'No Pitch' },
        { value: 'PDF', label: 'Instant Download' },
      ];

  const trustBadges = [
    { en: 'No Spam', de: 'Kein Spam' },
    { en: 'No Sales Call', de: 'Kein Verkaufsgespräch' },
    { en: 'Just the Map', de: 'Nur die Map' },
  ];

  return (
    <section
      id="final-cta"
      ref={(node) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        (containerRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }}
      className={`dark-section relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Deep Space Background */}
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

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <Badge variant="gradient" className="mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            {language === 'de' ? 'Kostenloser Download' : 'Free Download'}
          </Badge>
          <h2 className="font-display text-display-md lg:text-display-lg text-foreground mb-4">
            {language === 'de' ? 'Kostenlos herunterladen.' : 'Download for Free.'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de' ? 'Kein Spam. Kein Pitch. Nur die Map.' : 'No spam. No pitch. Just the map.'}
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Inline Form */}
        <div className="flex justify-center mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <InlineLeadForm variant="cta" />
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
// PAGE
// ============================================================================
const GTMStackMap: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'GTM Stack Map 2026', path: '/solutions/gtm-stack-map' },
      ]} />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ICPSection />
        <SocialProofSection />
        <CTARepeatSection />
      </main>
      <Footer />
    </div>
  );
};

export default GTMStackMap;
