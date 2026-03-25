import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const FunnelReframe: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 md:py-32 dark-section overflow-hidden noise"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="absolute inset-0 bg-mesh opacity-40" />

      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Jedes Startup hat heute eine Strategie.
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Das war früher der Engpass. Heute nicht mehr.
            </p>

            <p>
              Der Engpass ist die Lücke zwischen dem was auf dem Slide Deck steht und dem was im Unternehmen passiert.
            </p>

            <p>
              Wer AI als Multiplier nutzt, bewegt sich heute{' '}
              <span className="text-primary font-semibold">10x schneller</span> als der Rest.<br />
              Wir tun das. Für unsere Kunden.
            </p>

            <p className="text-foreground font-semibold">
              Wer den richtigen Hebel findet und ihn schnell umsetzt, gewinnt.
              Wer weiter an Symptomen arbeitet, verliert Zeit die er nicht hat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunnelReframe;
