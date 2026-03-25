import React from 'react';
import FilloutEmbed from '@/components/forms/FilloutEmbed';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const FunnelCTA: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="book"
      className="py-24 md:py-32 bg-background noise"
    >
      <div className="container max-w-3xl mx-auto px-6">
        <div className={`text-center space-y-6 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            30 Minuten. Kein Pitch.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Wir schauen gemeinsam wo dein Hebel liegt.
            Wenn wir helfen können, sagen wir wie.
            Wenn nicht, sagen wir das auch.
          </p>
          <p className="text-sm text-muted-foreground/70">
            Kostenlos · 30 Minuten · Kein Commitment
          </p>
        </div>

        <div className={`bg-card/10 backdrop-blur-sm border-2 border-border/50 rounded-lg overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <FilloutEmbed
            formId="inflection-call"
            formType="inflection-call"
            source="funnel-v2"
            domain="cal.scalingx.io"
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default FunnelCTA;
