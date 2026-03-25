import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const FunnelPain: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 bg-background noise"
    >
      <div className="container max-w-3xl mx-auto px-6">
        <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Du weißt dass etwas nicht stimmt.
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Das Board wartet.<br />
              Das Team ist frustriert.<br />
              Die Zahlen bewegen sich nicht.
            </p>

            <p>
              Du hast Agenturen probiert. Neue Hires. Mehr Budget.<br />
              Irgendetwas hilft kurzfristig. Nichts löst das eigentliche Problem.
            </p>

            <p className="text-foreground font-semibold">
              Weil das Problem kein Ressourcenproblem ist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunnelPain;
