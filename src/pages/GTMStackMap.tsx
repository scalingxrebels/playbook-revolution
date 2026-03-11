import React, { useState } from 'react';
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
  Download,
  Users,
  Target,
  Sparkles,
  Quote,
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

      // Trigger download
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
        className={`h-12 px-6 whitespace-nowrap font-bold uppercase tracking-wide text-sm ${
          variant === 'cta'
            ? 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent-glow'
            : 'bg-gradient-accent text-primary-foreground shadow-accent-glow'
        }`}
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

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="dark-section relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise pt-20"
    >
      {/* Deep Space Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(240,10%,8%)] to-[hsl(240,15%,12%)] transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }}
      />
      {/* Mesh overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          transform: `translateY(${offsets[1]}px)`,
        }}
      />
      <TwinklingStars />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <Breadcrumb className="justify-center mb-8">
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink className="text-foreground">GTM Stack Map 2026</BreadcrumbLink></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Badge */}
        <Badge variant="outline" className="mb-6 border-accent/40 text-accent bg-accent/10 px-4 py-1.5 text-xs uppercase tracking-widest">
          Free · Lead Magnet
        </Badge>

        {/* Headline */}
        <h1 className="font-display text-display-lg text-foreground mb-6 leading-tight">
          {language === 'de' ? 'Der GTM Stack 2026.' : 'The GTM Stack 2026.'}
        </h1>

        {/* Subline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          {language === 'de'
            ? 'Alle Tools. Alle Layer. Eine Übersicht — für B2B SaaS Teams, die aufhören wollen zu raten.'
            : 'All tools. All layers. One overview — for B2B SaaS teams that want to stop guessing.'}
        </p>

        {/* Inline Form */}
        <div className="flex justify-center mb-8">
          <InlineLeadForm variant="hero" />
        </div>

        {/* Trust Signal */}
        <p className="text-sm text-muted-foreground/70">
          {language === 'de' ? 'Bereits von 200+ GTM-Teams genutzt' : 'Already used by 200+ GTM teams'}
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 2: BENEFITS
// ============================================================================
const BenefitsSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const benefits = language === 'de'
    ? [
        'Alle GTM-Tools 2026 — kategorisiert nach Funnel-Layer',
        'Empfehlungs-Logik: Welches Tool für welchen Reifegrad?',
        'Traffic · Entry · Conversion · Retention — vollständig',
        'AI-native Tools separat markiert',
        'Sofort nutzbar — kein Setup, kein Login',
      ]
    : [
        'All GTM tools 2026 — categorized by funnel layer',
        'Recommendation logic: Which tool for which maturity level?',
        'Traffic · Entry · Conversion · Retention — complete',
        'AI-native tools separately marked',
        'Instantly usable — no setup, no login',
      ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-muted/30 border-y border-border">
      <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="font-display text-display-sm text-foreground mb-12">
          {language === 'de' ? 'Was du bekommst:' : 'What you get:'}
        </h2>

        <ul className="space-y-5 text-left max-w-xl mx-auto">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-accent" />
              </div>
              <span className="text-foreground/90 text-lg leading-relaxed">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 3: ICP QUALIFICATION
// ============================================================================
const ICPSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

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
    <section ref={ref} className="py-24 lg:py-32">
      <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="font-display text-display-sm text-foreground mb-12 text-center">
          {language === 'de' ? 'Für wen ist das?' : 'Who is this for?'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((p, i) => (
            <div key={i} className="border-2 border-border bg-card p-8 text-center hover:border-accent/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <p.icon className="w-6 h-6 text-accent" />
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
  const { ref, isVisible } = useScrollAnimation();

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
    <section ref={ref} className="py-24 lg:py-32 bg-muted/30 border-y border-border">
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="font-display text-display-sm text-foreground mb-12 text-center">
          {language === 'de' ? 'Was andere sagen:' : 'What others say:'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((q, i) => (
            <div key={i} className="border-2 border-border bg-card p-8 relative">
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
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="dark-section relative py-24 lg:py-32 overflow-hidden noise">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(240,15%,12%)] via-[hsl(240,10%,8%)] to-[hsl(var(--background))]" />
      <TwinklingStars />

      <div className={`relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="font-display text-display-sm text-foreground mb-4">
          {language === 'de' ? 'Kostenlos herunterladen.' : 'Download for free.'}
        </h2>
        <p className="text-muted-foreground mb-10 text-lg">
          {language === 'de' ? 'Kein Spam. Kein Pitch. Nur die Map.' : 'No spam. No pitch. Just the map.'}
        </p>

        <div className="flex justify-center">
          <InlineLeadForm variant="cta" />
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
      <BreadcrumbSchema />
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
