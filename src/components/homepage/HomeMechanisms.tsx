import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallaxLayers } from '@/hooks/useParallax';
import { Eye, ArrowRightLeft, Settings, Cpu, ArrowRight } from 'lucide-react';

const mechanisms = [
  {
    icon: Eye,
    num: 'M1',
    titleDe: 'Hypothesen-Maschine',
    titleEn: 'Hypothesis Engine',
    descDe: 'Wir finden den richtigen Hebel — bevor andere überhaupt die Frage stellen.',
    descEn: 'We find the right lever — before others even ask the question.',
    href: '/expertise/hypothesen-maschine',
  },
  {
    icon: ArrowRightLeft,
    num: 'M2',
    titleDe: 'Übersetzungskompetenz',
    titleEn: 'Translation Competence',
    descDe: 'Wir übersetzen Strategie in das richtige Zielsystem — so dass sie tatsächlich wirkt.',
    descEn: 'We translate strategy into the right target system — so it actually works.',
    href: '/expertise/uebersetzungskompetenz',
  },
  {
    icon: Settings,
    num: 'M3',
    titleDe: 'Funktionierende Synthese',
    titleEn: 'Functioning Synthesis',
    descDe: 'Wir bauen Systeme die tragen — vollständig, ohne Kompromiss.',
    descEn: 'We build systems that hold — complete, without compromise.',
    href: '/expertise/funktionierende-synthese',
  },
  {
    icon: Cpu,
    num: 'M4',
    titleDe: 'AI Orchestration',
    titleEn: 'AI Orchestration',
    descDe: 'Nicht als Feature. Als Multiplier auf M1–M3. Macht alles schneller, schärfer, tiefer.',
    descEn: 'Not a feature. A multiplier on M1–M3. Makes everything faster, sharper, deeper.',
    href: '/expertise/ai-orchestration',
  },
];

const HomeMechanisms: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.05, 0.12] });

  return (
    <section
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = el;
        (containerRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Theme-responsive background */}
      <div
        className="absolute inset-0 bg-mesh opacity-40 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.05)` }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background transition-transform duration-100"
        style={{ transform: `translateY(${offsets[1]}px) scale(1.05)` }}
      />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        {/* Overline */}
        <p
          className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {language === 'de' ? 'Wie wir arbeiten' : 'How we work'}
        </p>

        <h2
          className={`font-display text-display-md mb-6 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          {language === 'de' ? (
            <>Vier Mechanismen.<br />Einer <span className="italic text-gradient">fehlt immer.</span></>
          ) : (
            <>Four mechanisms.<br />One is <span className="italic text-gradient">always missing.</span></>
          )}
        </h2>

        <p
          className={`text-lg text-muted-foreground mb-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {language === 'de'
            ? 'Wir finden welcher — und bauen ihn.'
            : 'We find which one — and build it.'}
        </p>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mechanisms.map((m, i) => {
            const Icon = m.icon;
            return (
              <Link
                key={i}
                to={m.href}
                className={`group relative block p-8 border-2 border-border bg-card hover:border-primary/50 hover:shadow-glow transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(i + 2) * 100}ms` }}
              >
                {/* M-number badge */}
                <span className="absolute top-4 right-4 text-xs font-bold text-accent/60 tracking-wider">
                  {m.num}
                </span>
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display text-xl mb-2 text-foreground">
                  {language === 'de' ? m.titleDe : m.titleEn}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'de' ? m.descDe : m.descEn}
                </p>
                <span className="inline-flex items-center text-sm text-accent group-hover:gap-2 transition-all">
                  {language === 'de' ? 'Mehr lesen' : 'Read more'}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeMechanisms;
