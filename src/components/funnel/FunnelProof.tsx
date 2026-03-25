import React from 'react';
import { Quote } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const cases = [
  {
    tag: 'Series B SaaS · €15M ARR',
    quote: '„Wir wussten nicht wo das Problem liegt. Nach zwei Wochen hatten wir Klarheit. Nach 30 Tagen lief der erste Mechanismus."',
    attribution: '— CEO, B2B SaaS (Name auf Anfrage)',
  },
  {
    tag: 'Series A · €7M ARR',
    quote: null,
    stats: [
      { label: 'CAC', from: '€10k', to: '€4k', period: '90 Tage' },
      { label: 'Win Rate', from: '15%', to: '38%', period: '' },
    ],
  },
  {
    tag: 'Series B · €20M ARR',
    quote: '„Wir brauchten jemanden der nicht nur berät, sondern auch macht. Genau das ist ScalingX."',
    attribution: '— CEO, B2B SaaS',
  },
];

const FunnelProof: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 md:py-32 dark-section overflow-hidden noise"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="absolute inset-0 bg-mesh opacity-40" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Was passiert wenn der Hebel stimmt.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <div
              key={idx}
              className={`bg-card/5 backdrop-blur-sm border-2 border-border/30 rounded-lg p-8 space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-primary">
                {c.tag}
              </span>

              {c.quote ? (
                <>
                  <Quote className="w-5 h-5 text-accent/50" />
                  <p className="text-foreground leading-relaxed italic">
                    {c.quote}
                  </p>
                  {c.attribution && (
                    <p className="text-sm text-muted-foreground">{c.attribution}</p>
                  )}
                </>
              ) : c.stats ? (
                <div className="space-y-4 pt-2">
                  {c.stats.map((s) => (
                    <div key={s.label} className="space-y-1">
                      <span className="text-sm text-muted-foreground">{s.label}</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-muted-foreground line-through text-lg">{s.from}</span>
                        <span className="text-primary font-bold text-2xl">→ {s.to}</span>
                        {s.period && <span className="text-xs text-muted-foreground">in {s.period}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunnelProof;
