import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Brain, Cpu, Users, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const areas = [
  {
    id: '1',
    icon: Brain,
    titleEn: 'Strategy',
    titleDe: 'Strategie',
    descEn: 'Where do you want to go? How do you win? Clear strategy is the starting point for everything else.',
    descDe: 'Wo willst du hin? Wie gewinnst du? Klare Strategie ist der Startpunkt für alles andere.',
    exampleEn: '• Who is your ideal customer?\n• How do you position against competitors?\n• Which markets are you targeting?',
    exampleDe: '• Wer ist dein idealer Kunde?\n• Wie positionierst du dich gegen Wettbewerber?\n• Welche Märkte greifst du an?',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: '2',
    icon: Cpu,
    titleEn: 'Setup',
    titleDe: 'Setup',
    descEn: 'How do you organize for growth? Structure, systems and processes that scale.',
    descDe: 'Wie organisierst du dich für Wachstum? Struktur, Systeme und Prozesse, die skalieren.',
    exampleEn: '• How is your team organized?\n• What tools and systems do you use?\n• How do you make decisions?',
    exampleDe: '• Wie ist dein Team organisiert?\n• Welche Tools und Systeme nutzt du?\n• Wie triffst du Entscheidungen?',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: '3',
    icon: Users,
    titleEn: 'Execution',
    titleDe: 'Execution',
    descEn: 'How fast do you deliver? From idea to execution – without delay.',
    descDe: 'Wie schnell lieferst du? Von der Idee zur Umsetzung – ohne Verzögerung.',
    exampleEn: '• How fast do you acquire customers?\n• How fast do you develop features?\n• How fast do you respond to feedback?',
    exampleDe: '• Wie schnell gewinnst du Kunden?\n• Wie schnell entwickelst du Features?\n• Wie schnell reagierst du auf Feedback?',
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: '4',
    icon: Zap,
    titleEn: 'Operationalization',
    titleDe: 'Operationalisierung',
    descEn: 'How do you make it repeatable? Automation and systems that run without you.',
    descDe: 'Wie machst du es wiederholbar? Automatisierung und Systeme, die ohne dich laufen.',
    exampleEn: '• Are your processes automated?\n• Do you have dashboards and metrics?\n• Does the business run without you?',
    exampleDe: '• Sind deine Prozesse automatisiert?\n• Hast du Dashboards und Metriken?\n• Läuft der Laden auch ohne dich?',
    color: 'from-emerald-500 to-teal-500',
  },
];

const HowItWorksOptimized: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

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
                  <div className="text-xs text-muted-foreground space-y-1">
                    {(language === 'de' ? area.exampleDe : area.exampleEn).split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksOptimized;
