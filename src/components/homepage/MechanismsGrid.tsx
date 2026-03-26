import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Search, Rocket, Settings, Cpu, ArrowRight } from 'lucide-react';

const mechanisms = {
  de: [
    {
      icon: Search,
      title: 'INSIGHTS & LEVERS',
      description: 'Wir sehen was andere nicht sehen. Märkte, Muster, Hebel.',
      link: '/insights',
    },
    {
      icon: Rocket,
      title: 'GROWTH ENGINES',
      description: 'GTM, Product, Customer Success — als System, nicht als Silos.',
      link: '/solutions',
    },
    {
      icon: Settings,
      title: 'SCALING SYSTEMS',
      description: 'Ops, Finance, Talent — so dass Wachstum nicht zusammenbricht.',
      link: '/solutions',
    },
    {
      icon: Cpu,
      title: 'AI ORCHESTRATION',
      description: 'AI nicht als Feature. Als Multiplier auf alle drei Mechanismen.',
      link: '/solutions',
    },
  ],
  en: [
    {
      icon: Search,
      title: 'INSIGHTS & LEVERS',
      description: 'We see what others don\'t. Markets, patterns, levers.',
      link: '/insights',
    },
    {
      icon: Rocket,
      title: 'GROWTH ENGINES',
      description: 'GTM, Product, Customer Success — as a system, not as silos.',
      link: '/solutions',
    },
    {
      icon: Settings,
      title: 'SCALING SYSTEMS',
      description: 'Ops, Finance, Talent — so growth doesn\'t break down.',
      link: '/solutions',
    },
    {
      icon: Cpu,
      title: 'AI ORCHESTRATION',
      description: 'AI not as a feature. As a multiplier across all three mechanisms.',
      link: '/solutions',
    },
  ],
};

const MechanismsGrid: React.FC = () => {
  const { language } = useLanguage();
  const items = mechanisms[language] || mechanisms.de;

  return (
    <section className="py-24 md:py-32 bg-muted/30 noise border-y border-border">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Overline */}
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4">
          {language === 'de' ? 'WIE WIR ARBEITEN' : 'HOW WE WORK'}
        </p>

        {/* Headline */}
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight">
          {language === 'de' ? (
            <>Vier Mechanismen.<br />Einer fehlt immer.</>
          ) : (
            <>Four mechanisms.<br />One is always missing.</>
          )}
        </h2>

        {/* Subline */}
        <p className="text-muted-foreground text-lg mb-12">
          {language === 'de' ? 'Wir finden welcher — und bauen ihn.' : 'We find which one — and build it.'}
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                to={item.link}
                className="group bg-card/50 border border-border/50 hover:border-primary/30 p-8 transition-all duration-200 hover:shadow-card"
              >
                <Icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-display text-lg font-bold tracking-wide mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary group-hover:gap-2 transition-all">
                  {language === 'de' ? 'Mehr lesen' : 'Read more'}
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MechanismsGrid;
