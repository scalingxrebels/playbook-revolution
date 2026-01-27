import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, Cpu, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallax } from '@/hooks/useParallax';

const components = [
  {
    id: '1',
    icon: Rocket,
    titleEn: 'Growth Engines',
    titleDe: 'Growth Engines',
    descEn: 'Everything that drives growth.',
    descDe: 'Alles, was Wachstum antreibt.',
    detailsEn: '• Customer acquisition (Sales & Marketing)\n• Product development (Features customers love)\n• Customer retention (Retention & Expansion)',
    detailsDe: '• Kundengewinnung (Sales & Marketing)\n• Produktentwicklung (Features, die Kunden lieben)\n• Kundenbindung (Retention & Expansion)',
    warningEn: 'Without Growth Engines: No revenue growth',
    warningDe: 'Ohne Growth Engines: Kein Umsatzwachstum',
    color: 'primary',
  },
  {
    id: '2',
    icon: Cpu,
    titleEn: 'Scaling Systems',
    titleDe: 'Scaling Systems',
    descEn: 'Everything that keeps your company running.',
    descDe: 'Alles, was dein Unternehmen am Laufen hält.',
    detailsEn: '• Processes & Operations (How does the business run?)\n• Finance & Capital (How long does the money last?)\n• Team & Governance (Who does what? Who decides?)',
    detailsDe: '• Prozesse & Operations (Wie läuft der Laden?)\n• Finanzen & Kapital (Wie lange reicht das Geld?)\n• Team & Governance (Wer macht was? Wer entscheidet?)',
    warningEn: 'Without Scaling Systems: Chaos grows faster than revenue',
    warningDe: 'Ohne Scaling Systems: Chaos wächst schneller als Umsatz',
    color: 'primary',
  },
  {
    id: '3',
    icon: Zap,
    titleEn: 'AI as Multiplier',
    titleDe: 'AI als Multiplikator',
    descEn: 'AI amplifies both – Growth Engines and Scaling Systems.',
    descDe: 'AI verstärkt beides – Growth Engines und Scaling Systems.',
    detailsEn: '• 10-30x faster processes\n• 2-4x better profitability\n• From 72 months to 13 months to €100M ARR',
    detailsDe: '• 10-30x schnellere Prozesse\n• 2-4x bessere Profitabilität\n• Von 72 Monaten auf 13 Monate zu €100M ARR',
    warningEn: 'Without AI: You are 4x slower than competitors',
    warningDe: 'Ohne AI: Du bist 4x langsamer als Competitors',
    color: 'accent',
  },
];

const FormulaOptimized: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const parallax = useParallax({ speed: 0.25, direction: 'down' });

  const scrollToCalculator = () => {
    document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="formula"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Background with Parallax */}
      <div 
        ref={parallax.ref as React.RefObject<HTMLDivElement>}
        className="absolute inset-0 bg-mesh transition-transform duration-100"
        style={{ transform: `translateY(${parallax.offset * 0.5}px) scale(1.1)` }}
      />
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Die Formel für Hypergrowth' : 'The Formula for Hypergrowth'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-4">
            <span className="block">Growth Engines × Scaling Systems × AI</span>
            <span className="block text-primary">= Scaling Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Drei Komponenten müssen zusammenspielen. Wenn eine fehlt, funktioniert die Formel nicht.' 
              : 'Three components must work together. If one is missing, the formula doesn\'t work.'
            }
          </p>
        </div>

        {/* Component Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {components.map((item, index) => {
            const Icon = item.icon;
            const isAccent = item.color === 'accent';
            return (
              <div 
                key={item.id}
                className={`group relative bg-card border-2 ${isAccent ? 'border-accent/30 hover:border-accent' : 'border-primary/30 hover:border-primary'} p-8 transition-all duration-400 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg ${isAccent ? 'bg-accent/10 group-hover:bg-accent/20' : 'bg-primary/10 group-hover:bg-primary/20'} flex items-center justify-center mb-6 transition-colors`}>
                  <Icon className={`w-7 h-7 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                </div>

                {/* Content */}
                <h3 className="font-sans text-xl font-bold text-foreground mb-3">
                  {language === 'de' ? item.titleDe : item.titleEn}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'de' ? item.descDe : item.descEn}
                </p>

                {/* Details */}
                <div className="mb-4 space-y-1">
                  {(language === 'de' ? item.detailsDe : item.detailsEn).split('\n').map((line, i) => (
                    <p key={i} className="text-sm text-muted-foreground">{line}</p>
                  ))}
                </div>

                {/* Warning */}
                <div className={`pt-4 border-t border-border`}>
                  <span className={`text-xs font-semibold uppercase tracking-widest ${isAccent ? 'text-accent' : 'text-primary'}`}>
                    {language === 'de' ? item.warningDe : item.warningEn}
                  </span>
                </div>

                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 ${isAccent ? 'shadow-accent-glow' : 'shadow-glow'} opacity-0 group-hover:opacity-50 transition-opacity pointer-events-none`} />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            variant="outline"
            size="lg"
            onClick={scrollToCalculator}
            className="border-2 border-foreground/20 hover:border-foreground/40 font-semibold px-8 py-6"
          >
            {language === 'de' ? 'Deine Roadmap zu Hypergrowth' : 'Your Roadmap to Hypergrowth'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FormulaOptimized;
