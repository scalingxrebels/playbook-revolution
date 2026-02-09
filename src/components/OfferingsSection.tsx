import React, { useState } from 'react';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  Zap, 
  Bot,
  ArrowRight,
  Calendar,
  Clock,
  TrendingUp,
  Sparkles
} from 'lucide-react';

interface Offering {
  id: string;
  badge: {
    en: string;
    de: string;
  };
  title: {
    en: string;
    de: string;
  };
  subtitle: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  bullets: {
    en: string[];
    de: string[];
  };
  cta: {
    en: string;
    de: string;
  };
  icon: React.ElementType;
  highlight?: string;
}

const offerings: Offering[] = [
  {
    id: 'workshop',
    badge: { en: 'STRATEGIC REALIGNMENT', de: 'STRATEGISCHE NEUAUSRICHTUNG' },
    title: { en: 'One day that changes everything.', de: 'Ein Tag, der alles verändert.' },
    subtitle: { en: 'INFLECTION POINT WORKSHOP', de: 'INFLECTION POINT WORKSHOP' },
    description: {
      en: 'For startups at - or before - a turning point.',
      de: 'Für Startups an - oder vor - einem Wendepunkt.'
    },
    bullets: {
      en: [
        'One day, 72h structure, 90 days impact',
        'Focus on what matters now: Market, Model, Team & Execution',
        'Clarity, Alignment and a 90-day roadmap that carries'
      ],
      de: [
        'Ein Tag, 72h Struktur, 90 Tage Wirkung',
        'Fokus auf das, was jetzt zählt: Markt, Modell, Team & Execution',
        'Klarheit, Alignment und eine 90-Tage-Roadmap, die trägt'
      ]
    },
    cta: { en: 'Make One Day Count', de: 'Make One Day Count' },
    icon: Target,
    highlight: '2 Slots available for Q1/2025'
  },
  {
    id: 'sprint',
    badge: { en: 'QUICK IMPACT SPRINT', de: 'QUICK IMPACT SPRINT' },
    title: { en: 'Fast. Effective. Focused. ROI.', de: 'Schnell. Wirksam. Fokussiert. ROI.' },
    subtitle: { en: 'POWER UP PROJECT', de: 'POWER UP PROJEKT' },
    description: {
      en: 'For startups that want to solve their growth blockers and create impact.',
      de: 'Für Startups, die ihre Wachstumsblocker gezielt lösen und Impact wollen.'
    },
    bullets: {
      en: [
        'In 2-6 weeks we identify and activate the most impactful levers',
        'Pricing, Conversion, Go-to-Market, Offer logic - everything fits',
        'Immediate impact: +30% revenue is not uncommon'
      ],
      de: [
        'In 2-6 Wochen identifizieren und aktivieren wir die wirkungsvollsten Hebel',
        'Pricing, Conversion, Go-to-Market, Angebotslogik - alles sitzt',
        'Sofortige Wirkung: +30% Umsatz sind keine Seltenheit'
      ]
    },
    cta: { en: 'Start Your Power Up', de: 'Start Your Power Up' },
    icon: Zap
  },
  {
    id: 'ai',
    badge: { en: 'SCALING WITH AI', de: 'SKALIERUNG MIT AI' },
    title: { en: 'AI that actually scales your business.', de: 'AI, die dein Business wirklich skaliert.' },
    subtitle: { en: 'AI PROJECTS & RETAINER', de: 'AI-PROJEKTE & -RETAINER' },
    description: {
      en: 'For startups & scale-ups that want to be radically better & faster with AI.',
      de: 'Für Startups & Scale-ups, die mit AI radikal besser & schneller werden wollen.'
    },
    bullets: {
      en: [
        'AI-Agents for Marketing, Sales, Ops & Leadership. AI-Upgrade for Product.',
        'Strategically built. Immediately deployable. Fully integrated.',
        'No toy. No overhead. But measurable impact - from day 1.'
      ],
      de: [
        'AI-Agents für Marketing, Sales, Ops & Leadership. AI-Upgrade für Produkt.',
        'Strategisch gebaut. Sofort einsetzbar. Voll integriert.',
        'Kein Spielzeug. Kein Overhead. Sondern messbare Wirkung - ab Tag 1.'
      ]
    },
    cta: { en: 'Discover Top-3 AI-Levers', de: 'Top-3 AI-Hebel entdecken' },
    icon: Bot
  }
];

const OfferingsSection: React.FC = () => {
  const { language } = useLanguage();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="py-24 bg-card relative overflow-hidden" id="offerings">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-30" />
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-accent/10 text-accent border-accent">
            ✅ OFFERING
          </Badge>
          
          <h2 className="font-display text-4xl md:text-5xl italic">
            Strategies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Drei Wege zu messbarem Impact'
              : 'Three paths to measurable impact'
            }
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={offering.id}
              className={`
                border-2 bg-background p-8 flex flex-col h-full
                ${index === 2 ? 'border-accent' : 'border-border hover:border-foreground/30'}
                transition-all duration-300 group
              `}
            >
              {/* Badge */}
              <Badge variant="secondary" className="self-start text-xs tracking-wider mb-4">
                {offering.badge[language as 'en' | 'de']}
              </Badge>
              
              {/* Title */}
              <h3 className="font-display text-2xl md:text-3xl mb-2">
                {offering.title[language as 'en' | 'de']}
              </h3>
              
              {/* Subtitle */}
              <div className="flex items-center gap-2 mb-4">
                <offering.icon className={`w-5 h-5 ${index === 2 ? 'text-accent' : 'text-primary'}`} />
                <span className="font-semibold text-sm uppercase tracking-wider">
                  {offering.subtitle[language as 'en' | 'de']}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground mb-6">
                {offering.description[language as 'en' | 'de']}
              </p>
              
              {/* Bullets */}
              <ul className="space-y-3 mb-8 flex-1">
                {offering.bullets[language as 'en' | 'de'].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Sparkles className={`w-4 h-4 mt-0.5 flex-shrink-0 ${index === 2 ? 'text-accent' : 'text-muted-foreground'}`} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              
              {/* Highlight Note */}
              {offering.highlight && (
                <div className="bg-accent/10 border border-accent text-accent text-sm p-3 mb-4">
                  <Clock className="w-4 h-4 inline mr-2" />
                  {offering.highlight}
                </div>
              )}
              
              {/* CTA */}
              <Button 
                className={`w-full ${
                  index === 2 
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                    : 'bg-foreground text-background hover:bg-foreground/90'
                } shadow-brutal-sm`}
                onClick={() => setIsBookingModalOpen(true)}
              >
                {offering.cta[language as 'en' | 'de']}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <FilloutBookingModal
        formSlug="inflection-call"
        source="offerings"
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default OfferingsSection;
