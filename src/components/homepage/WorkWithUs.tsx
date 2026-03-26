import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Layers, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';

const WorkWithUs: React.FC = () => {
  const { language } = useLanguage();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const ways = language === 'de'
    ? [
        {
          icon: BookOpen,
          title: 'INSIGHTS LESEN',
          description: 'Wir publizieren zu den vier Mechanismen die den Unterschied machen. Kein Newsletter-Fluff. Substanz.',
          cta: 'Zu den Insights',
          link: '/insights',
        },
        {
          icon: Layers,
          title: 'SOLUTIONS ANSEHEN',
          description: 'Fünf Themengebiete. Konkrete Formate. Von der Einzelsession bis zum 90-Tage-Programm.',
          cta: 'Zu den Solutions',
          link: '/solutions',
        },
      ]
    : [
        {
          icon: BookOpen,
          title: 'READ INSIGHTS',
          description: 'We publish on the four mechanisms that make the difference. No newsletter fluff. Substance.',
          cta: 'Go to Insights',
          link: '/insights',
        },
        {
          icon: Layers,
          title: 'VIEW SOLUTIONS',
          description: 'Five topic areas. Concrete formats. From single sessions to 90-day programs.',
          cta: 'Go to Solutions',
          link: '/solutions',
        },
      ];

  return (
    <section className="py-24 md:py-32 bg-muted/30 noise border-y border-border">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Headline */}
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 leading-tight">
          {language === 'de' ? (
            <>Drei Wege.<br />Du wählst den richtigen.</>
          ) : (
            <>Three paths.<br />You choose the right one.</>
          )}
        </h2>

        {/* Grid: 2 link-cards + 1 CTA card */}
        <div className="grid md:grid-cols-3 gap-4">
          {ways.map((way) => {
            const Icon = way.icon;
            return (
              <Link
                key={way.title}
                to={way.link}
                className="group bg-card/50 border border-border/50 hover:border-primary/30 p-8 transition-all duration-200 hover:shadow-card flex flex-col"
              >
                <Icon className="w-6 h-6 text-muted-foreground mb-4" />
                <h3 className="font-display text-base font-bold tracking-wide mb-3">
                  {way.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {way.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary group-hover:gap-2 transition-all">
                  {way.cta}
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            );
          })}

          {/* Prominent CTA Card */}
          <div className="bg-gradient-primary p-8 flex flex-col justify-between text-primary-foreground">
            <div>
              <MessageCircle className="w-6 h-6 mb-4 opacity-80" />
              <h3 className="font-display text-base font-bold tracking-wide mb-3">
                {language === 'de' ? 'GESPRÄCH BUCHEN' : 'BOOK A CALL'}
              </h3>
              <p className="text-sm leading-relaxed mb-6 opacity-90">
                {language === 'de'
                  ? '30 Minuten. Direkt mit Michel. Wir finden gemeinsam wo der Hebel liegt.'
                  : '30 minutes. Directly with Michel. We find where the lever is together.'}
              </p>
            </div>
            <Button
              variant="brutal"
              size="sm"
              className="self-start bg-white text-foreground hover:bg-white/90"
              onClick={() => setIsBookingModalOpen(true)}
            >
              {language === 'de' ? 'Kostenloses Gespräch buchen' : 'Book a free call'}
              <ArrowRight className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      <FilloutBookingModal
        formSlug="inflection-call"
        source="homepage-work-with-us"
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default WorkWithUs;
