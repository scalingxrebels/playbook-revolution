import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { BookOpen, Layers, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';

const HomeWorkWithUs: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const paths = [
    {
      icon: BookOpen,
      titleDe: 'Insights lesen',
      titleEn: 'Read insights',
      descDe: 'Wir publizieren zu den vier Mechanismen die den Unterschied machen. Kein Newsletter-Fluff. Substanz.',
      descEn: 'We publish on the four mechanisms that make the difference. No newsletter fluff. Substance.',
      ctaDe: 'Zu den Insights',
      ctaEn: 'Go to Insights',
      href: '/insights',
      prominent: false,
    },
    {
      icon: Layers,
      titleDe: 'Solutions ansehen',
      titleEn: 'View solutions',
      descDe: 'Fünf Themengebiete. Konkrete Formate. Von der Einzelsession bis zum 90-Tage-Programm.',
      descEn: 'Five topic areas. Concrete formats. From single sessions to 90-day programs.',
      ctaDe: 'Zu den Solutions',
      ctaEn: 'Go to Solutions',
      href: '/solutions',
      prominent: false,
    },
    {
      icon: Calendar,
      titleDe: 'Gespräch buchen',
      titleEn: 'Book a call',
      descDe: 'Wir finden gemeinsam wo der Hebel liegt.',
      descEn: "Together we'll find where the lever is.",
      ctaDe: 'Kostenloses Gespräch buchen',
      ctaEn: 'Book a free call',
      href: '#booking',
      prominent: true,
      subtitleDe: '30 Minuten. Direkt mit Michel & Albi.',
      subtitleEn: '30 minutes. Directly with Michel & Albi.',
    },
  ];

  return (
    <>
      <section
        ref={ref as React.RefObject<HTMLElement>}
        className="relative py-24 md:py-32 overflow-hidden"
      >
        {/* Theme-responsive background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-10" />

        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          <p
            className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {language === 'de' ? 'Zusammenarbeit' : 'Working together'}
          </p>
          <h2
            className={`font-display text-display-md mb-6 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {language === 'de' ? (
              <>Drei Wege.<br />Du wählst den richtigen.</>
            ) : (
              <>Three paths.<br />You choose the right one.</>
            )}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paths.map((p, i) => {
              const Icon = p.icon;
              const isLink = !p.prominent;

              const card = (
                <div
                  className={`flex flex-col p-8 border-2 transition-all duration-500 h-full ${
                    p.prominent
                      ? 'border-accent/50 bg-accent/10 hover:bg-accent/15 shadow-accent-glow'
                      : 'border-border bg-card hover:border-accent/40 hover:shadow-glow'
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${(i + 1) * 120}ms` }}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                    p.prominent ? 'bg-accent/20' : 'bg-accent/10'
                  }`}>
                    <Icon className={`h-5 w-5 ${p.prominent ? 'text-accent' : 'text-accent/80'}`} />
                  </div>
                  <h3 className="font-display text-xl mb-2 text-foreground">
                    {language === 'de' ? p.titleDe : p.titleEn}
                  </h3>
                  {p.prominent && p.subtitleDe && (
                    <p className="text-sm text-accent mb-2">
                      {language === 'de' ? p.subtitleDe : p.subtitleEn}
                    </p>
                  )}
                  <p className="text-muted-foreground mb-6 flex-1">
                    {language === 'de' ? p.descDe : p.descEn}
                  </p>
                  {p.prominent ? (
                    <Button
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full shadow-accent-glow"
                      onClick={() => setIsBookingOpen(true)}
                    >
                      {language === 'de' ? p.ctaDe : p.ctaEn}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <span className="inline-flex items-center text-sm text-accent">
                      {language === 'de' ? p.ctaDe : p.ctaEn}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  )}
                </div>
              );

              return isLink ? (
                <Link key={i} to={p.href} className="block h-full">
                  {card}
                </Link>
              ) : (
                <div key={i} className="cursor-pointer h-full" onClick={() => setIsBookingOpen(true)}>
                  {card}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FilloutBookingModal
        formSlug="inflection-call"
        source="homepage-work-with-us"
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};

export default HomeWorkWithUs;
