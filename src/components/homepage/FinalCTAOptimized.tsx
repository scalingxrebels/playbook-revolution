import React, { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Zap, Users, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallaxLayers } from '@/hooks/useParallax';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';

const STORAGE_KEY = 'scalingx_utm_params';

function buildInquiryUrl(): string {
  const baseUrl = 'https://scalingx.fillout.com/inquiry';
  const params = new URLSearchParams();
  
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const utmParams = JSON.parse(stored);
      if (utmParams.utm_source) params.set('utm_source', utmParams.utm_source);
      if (utmParams.utm_medium) params.set('utm_medium', utmParams.utm_medium);
      if (utmParams.utm_campaign) params.set('utm_campaign', utmParams.utm_campaign);
      if (utmParams.utm_content) params.set('utm_content', utmParams.utm_content);
      if (utmParams.utm_term) params.set('utm_term', utmParams.utm_term);
    }
  } catch (e) {
    console.warn('Failed to read UTM params:', e);
  }
  
  // Always add source for homepage
  params.set('source', 'website');
  
  const queryString = params.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

const FinalCTAOptimized: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.15, 0.3] });
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  // Build the inquiry form URL with UTM + source
  const inquiryUrl = useMemo(() => buildInquiryUrl(), []);

  // Fillout Script dynamisch laden
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const benefits = [
    {
      icon: Target,
      titleDe: 'Schwachstelle identifizieren',
      titleEn: 'Identify Weakness',
      descDe: 'Wir finden heraus, welcher Bereich dich bremst – in 15 Minuten',
      descEn: 'We find out which area is slowing you down – in 15 minutes',
    },
    {
      icon: Zap,
      titleDe: 'Reifegrad bestimmen',
      titleEn: 'Determine Maturity',
      descDe: 'Wo stehst du? Traditional, AI-Powered, AI-Enabled oder AI-Native?',
      descEn: 'Where are you? Traditional, AI-Powered, AI-Enabled or AI-Native?',
    },
    {
      icon: Users,
      titleDe: 'Konkreter Aktionsplan',
      titleEn: 'Concrete Action Plan',
      descDe: '3 konkrete nächste Schritte, die du sofort umsetzen kannst',
      descEn: '3 concrete next steps you can implement immediately',
    },
  ];

  const stats = [
    { value: '80+', labelDe: 'Companies Scaled', labelEn: 'Companies Scaled' },
    { value: '140+', labelDe: 'Engagements', labelEn: 'Engagements' },
    { value: '€2.5B+', labelDe: 'Valuation', labelEn: 'Valuation' },
    { value: '92%', labelDe: 'Success Rate', labelEn: 'Success Rate' },
  ];

  const clients = [
    'Pigtie', 'the beautiful unleashed truth', 'KODE®', 'FILADOS', 
    '2p Team', 'Microsoft', 'XING e-Recruiting', 'Lexware', 
    'Haufe Group', 'smapOne', 'SBB E-Business', 'Swarovski', 
    'local.ch', 'BWK Group', 'DBA', 'Burda Media', 
    'START', 'Elba', 'Semigator', 'Umantis', 'Sage', 'LifiMax'
  ];

  return (
    <section 
      id="booking-form" 
      ref={(node) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        (containerRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }}
      className={`relative min-h-[60vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Background with Parallax Layers */}
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
          {/* Overline */}
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Nächster Schritt' : 'Next Step'}
          </span>
          
          {/* Headline */}
          <h2 className="font-display text-display-md lg:text-display-lg text-foreground mb-6">
            {language === 'de' 
              ? 'Bereit für systematisches Wachstum?' 
              : 'Ready for Systematic Growth?'
            }
          </h2>
          
          {/* Subheadline */}
          <p className="text-editorial text-muted-foreground max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Erhalte eine personalisierte Roadmap in 30 Minuten'
              : 'Get a personalized roadmap in 30 minutes'
            }
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Benefits & Stats */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold mb-8">
              {language === 'de' ? 'Was du bekommst:' : 'What you\'ll get:'}
            </h3>
            
            {/* Benefits Cards */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border-2 border-border hover:border-primary/50 transition-all duration-200"
                >
                  <div className="p-3 rounded-xl bg-accent/10">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">
                      {language === 'de' ? benefit.titleDe : benefit.titleEn}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {language === 'de' ? benefit.descDe : benefit.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="p-6 rounded-xl bg-muted/30 border-2 border-border">
              <div className="grid grid-cols-4 gap-4 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-xl lg:text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-[10px] lg:text-xs text-muted-foreground leading-tight">
                      {language === 'de' ? stat.labelDe : stat.labelEn}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Clients Section */}
            <div className="mt-6 p-6 rounded-xl bg-muted/30 border-2 border-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 text-center">
                {language === 'de' ? 'Mit wem wir gearbeitet haben' : 'Who We\'ve Worked With'}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {clients.map((client, index) => (
                  <span 
                    key={index}
                    className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-background/50 border border-border"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>

            {/* Book a Call Button - Outside the tile */}
            <div className="mt-6 text-center">
              <Button 
                size="xl"
                className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400 group"
                onClick={() => setIsBookingModalOpen(true)}
              >
                <Phone className="mr-2 w-5 h-5" />
                {language === 'de' ? 'Kostenlosen Call buchen' : 'Book Free Call'}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Column: Fillout Form - Use iframe with explicit URL */}
          <div 
            className="rounded-3xl bg-card/50 border-2 border-border backdrop-blur-sm overflow-hidden animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            <iframe
              src={inquiryUrl}
              style={{ width: '100%', height: '500px', border: 'none' }}
              title="Contact Form"
            />
          </div>
        </div>
      </div>
      
      <FilloutBookingModal
        formSlug="inflection-call"
        source="website"
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title={language === 'de' ? 'Inflection Call buchen' : 'Book Inflection Call'}
      />
    </section>
  );
};

export default FinalCTAOptimized;
