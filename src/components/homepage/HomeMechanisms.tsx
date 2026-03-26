import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Eye, ArrowRightLeft, Settings, Cpu, ArrowRight } from 'lucide-react';

const mechanisms = [
  {
    icon: Eye,
    titleDe: 'Hypothesen-Maschine',
    titleEn: 'Hypothesis Engine',
    descDe: 'Wir finden den richtigen Hebel — bevor andere überhaupt die Frage stellen.',
    descEn: 'We find the right lever — before others even ask the question.',
    href: '/expertise',
  },
  {
    icon: ArrowRightLeft,
    titleDe: 'Übersetzungskompetenz',
    titleEn: 'Translation Competence',
    descDe: 'Wir übersetzen Strategie in das richtige Zielsystem — so dass sie tatsächlich wirkt.',
    descEn: 'We translate strategy into the right target system — so it actually works.',
    href: '/expertise',
  },
  {
    icon: Settings,
    titleDe: 'Funktionierende Synthese',
    titleEn: 'Functioning Synthesis',
    descDe: 'Wir bauen Systeme die tragen — vollständig, ohne Kompromiss.',
    descEn: 'We build systems that hold — complete, without compromise.',
    href: '/expertise',
  },
  {
    icon: Cpu,
    titleDe: 'AI Orchestration',
    titleEn: 'AI Orchestration',
    descDe: 'Nicht als Feature. Als Multiplier auf M1–M3. Macht alles schneller, schärfer, tiefer.',
    descEn: 'Not a feature. A multiplier on M1–M3. Makes everything faster, sharper, deeper.',
    href: '/expertise',
  },
];

const HomeMechanisms: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 md:py-32 bg-muted/30"
    >
      <div className="container max-w-5xl mx-auto px-6">
        {/* Overline */}
        <p
          className={`text-xs font-medium uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {language === 'de' ? 'Wie wir arbeiten' : 'How we work'}
        </p>

        <h2
          className={`font-display text-3xl md:text-4xl lg:text-5xl mb-3 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          {language === 'de' ? (
            <>Vier Mechanismen.<br />Einer fehlt immer.</>
          ) : (
            <>Four mechanisms.<br />One is always missing.</>
          )}
        </h2>

        <p
          className={`text-lg text-muted-foreground mb-14 transition-all duration-700 ${
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
                className={`group block p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/40 hover:bg-card/80 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(i + 2) * 100}ms` }}
              >
                <Icon className="h-6 w-6 text-accent mb-4" />
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
