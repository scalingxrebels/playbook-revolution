import React from 'react';
import { Check, X } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const forYou = [
  'Du ein finanziertes Startup führst. Series A oder B. €5M bis €30M ARR. DACH.',
  'Deine Strategie existiert aber der Impact bleibt aus.',
  'Das Board wartet und du willst Klarheit, keine weiteren Präsentationen.',
  'Du willst Umsetzung. Keinen Berater der Empfehlungen schreibt und geht.',
];

const notForYou = [
  'Seed-Stage ohne Product-Market-Fit.',
  'Bootstrapped ohne externen Druck.',
  'Corporate auf Transformationssuche.',
];

const FunnelQualification: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 md:py-32 dark-section overflow-hidden noise"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="absolute inset-0 bg-mesh opacity-40" />

      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Für wen dieses Gespräch Sinn macht.
        </h2>

        <div className={`space-y-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* For you */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Das Gespräch ist für dich wenn:</p>
            <ul className="space-y-3">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="h-px bg-border/30" />

          {/* Not for you */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Für wen es keinen Sinn macht:</p>
            <ul className="space-y-3">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <X className="w-5 h-5 text-destructive/60 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunnelQualification;
