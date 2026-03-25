import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const FunnelFounder: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 bg-background noise"
    >
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Wer das macht.
        </h2>

        <div className={`flex flex-col md:flex-row gap-10 items-start transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Photo */}
          <div className="shrink-0">
            <img
              src="/images/ml-hero-new.png"
              alt="Michel Lason — Gründer von ScalingX"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-border shadow-xl"
              style={{ objectPosition: 'center 10%' }}
            />
          </div>

          {/* Bio */}
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p className="text-foreground font-bold text-xl">Michel Lason</p>
            <p className="text-foreground font-semibold">Gründer von ScalingX.</p>

            <p>
              18 Jahre Erfahrung an der Schnittstelle von Strategie, Technologie und Leadership.
              10 Jahre Top-Managementberatung. 8 Jahre SaaS-Executive.
            </p>
            <p>
              Zuletzt: Team von 50 auf 130 Mitarbeiter geführt, GTM Engine aufgebaut die Hypergrowth ermöglicht hat.
            </p>

            <div className="flex gap-6 pt-2">
              <div className="text-center">
                <span className="block font-mono text-2xl font-bold text-primary">60+</span>
                <span className="text-xs uppercase tracking-wide">Startups skaliert</span>
              </div>
              <div className="text-center">
                <span className="block font-mono text-2xl font-bold text-accent">140+</span>
                <span className="text-xs uppercase tracking-wide">Wachstumsinitiativen</span>
              </div>
            </div>

            <p className="text-foreground italic pt-2">
              „Ich weiß wie es sich anfühlt wenn der Impact ausbleibt.
              Und ich weiß wo der Hebel meistens liegt."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunnelFounder;
