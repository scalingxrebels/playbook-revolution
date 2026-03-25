import React from 'react';
import { Search, Wrench, Rocket } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const steps = [
  {
    num: '①',
    icon: Search,
    title: 'FINDEN',
    body: 'Wir sehen Hebel die andere nicht sehen. Marktverständnis, operative Erfahrung und AI-Orchestration kombiniert. Tage, nicht Wochen.',
  },
  {
    num: '②',
    icon: Wrench,
    title: 'BAUEN',
    body: 'Keine Empfehlungen. Keine weiteren Slides. Konkrete Mechanismen für Wachstum und operative Realität.',
  },
  {
    num: '③',
    icon: Rocket,
    title: 'UMSETZEN',
    body: 'In 30 Tagen läuft der erste Mechanismus. Der CEO weiß wo der Hebel liegt. Und er sieht erste Ergebnisse.',
  },
];

const FunnelSolution: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 bg-background noise"
    >
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Wie wir arbeiten.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={`space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground tracking-wide">
                  {step.num} {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FunnelSolution;
