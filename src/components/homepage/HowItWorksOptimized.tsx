import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Cpu, Users, BarChart3 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const areas = [
  {
    id: '1',
    icon: Brain,
    titleEn: 'Strategy',
    titleDe: 'Strategie',
    descEn: 'Clarity about your target audience, positioning, and growth strategy. Without clear strategy, you\'re running in circles.',
    descDe: 'Klarheit über deine Zielgruppe, Positionierung und Wachstumsstrategie. Ohne klare Strategie läufst du im Kreis.',
    exampleEn: 'Who is your ideal customer? How do you win against competitors?',
    exampleDe: 'Wer ist dein idealer Kunde? Wie gewinnst du gegen Wettbewerber?',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: '2',
    icon: Cpu,
    titleEn: 'Systems & Processes',
    titleDe: 'Systeme & Prozesse',
    descEn: 'Automated workflows that work without you. Without systems, you\'re the bottleneck.',
    descDe: 'Automatisierte Abläufe, die ohne dich funktionieren. Ohne Systeme bist du der Flaschenhals.',
    exampleEn: 'How does your sales process run? How do you onboard new customers?',
    exampleDe: 'Wie läuft dein Sales-Prozess? Wie onboardest du neue Kunden?',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: '3',
    icon: Users,
    titleEn: 'Team & Organization',
    titleDe: 'Team & Organisation',
    descEn: 'The right people in the right places. Without a strong team, you won\'t get far.',
    descDe: 'Die richtigen Leute an den richtigen Stellen. Ohne starkes Team kommst du nicht weit.',
    exampleEn: 'Do you have the right leaders? Is your team efficiently organized?',
    exampleDe: 'Hast du die richtigen Führungskräfte? Ist dein Team effizient organisiert?',
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: '4',
    icon: BarChart3,
    titleEn: 'Finances & Capital',
    titleDe: 'Finanzen & Kapital',
    descEn: 'Healthy unit economics and enough runway. Without capital, it\'s game over.',
    descDe: 'Gesunde Unit Economics und genug Runway. Ohne Kapital ist Game Over.',
    exampleEn: 'How long does your money last? Are your unit economics profitable?',
    exampleDe: 'Wie lange reicht dein Geld? Sind deine Unit Economics profitabel?',
    color: 'from-emerald-500 to-teal-500',
  },
];

const HowItWorksOptimized: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const scrollToCalculator = () => {
    document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="how-it-works"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[60vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" />
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'So funktioniert\'s' : 'How It Works'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' 
              ? 'Vier Bereiche, die über deinen Erfolg entscheiden' 
              : 'Four Areas That Determine Your Success'
            }
          </h2>
          {/* Trust badge instead of large subheadline - matches Problem/Solution pattern */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border px-4 py-2 rounded-lg">
            <span className="text-sm text-muted-foreground">
              {language === 'de'
                ? 'Schwachstelle finden in 15 Min. → Beheben in 90 Tagen'
                : 'Find weakness in 15 min. → Fix in 90 days'
              }
            </span>
          </div>
        </div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={area.id}
                className="group relative text-left bg-card border-2 border-border hover:border-primary/50 p-6 transition-all duration-400 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Area Number Badge */}
                <div className={`absolute -top-3 -right-3 px-3 py-1 text-xs font-bold tracking-wider bg-gradient-to-r ${area.color} text-white shadow-brutal-sm`}>
                  {area.id}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-sans text-lg font-bold text-foreground mb-2">
                  {language === 'de' ? area.titleDe : area.titleEn}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {language === 'de' ? area.descDe : area.descEn}
                </p>

                {/* Example */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground italic">
                    {language === 'de' ? area.exampleDe : area.exampleEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg"
            onClick={scrollToCalculator}
            className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 py-6 shadow-brutal hover-brutal"
          >
            {language === 'de' ? 'Finde deine Schwachstelle (kostenlos)' : 'Find Your Weakness (free)'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksOptimized;
