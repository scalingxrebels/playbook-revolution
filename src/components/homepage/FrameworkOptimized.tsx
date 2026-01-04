import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Cpu, Users, BarChart3 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const capabilities = [
  {
    id: 'C1',
    icon: Brain,
    titleEn: 'Strategic Architecture',
    titleDe: 'Strategische Architektur',
    descEn: 'Vision, positioning, and strategic choices that enable super-linear growth',
    descDe: 'Vision, Positionierung und strategische Entscheidungen für super-lineares Wachstum',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'C2',
    icon: Cpu,
    titleEn: 'Operating System',
    titleDe: 'Betriebssystem',
    descEn: 'AI-native processes, decision-making, and execution frameworks',
    descDe: 'AI-native Prozesse, Entscheidungsfindung und Ausführungsframeworks',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'C3',
    icon: Users,
    titleEn: 'Organizational Architecture',
    titleDe: 'Organisationsarchitektur',
    descEn: 'Squad models, talent density, and coordination mechanisms',
    descDe: 'Squad-Modelle, Talentdichte und Koordinationsmechanismen',
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 'C4',
    icon: BarChart3,
    titleEn: 'Capital Strategy',
    titleDe: 'Kapitalstrategie',
    descEn: 'Funding, board governance, and investor relations',
    descDe: 'Finanzierung, Board Governance und Investor Relations',
    color: 'from-emerald-500 to-teal-500',
  },
];

const FrameworkOptimized: React.FC = () => {
  const { language } = useLanguage();
  const [activeCapability, setActiveCapability] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const scrollToPlaybooks = () => {
    window.location.href = '/playbooks';
  };

  return (
    <section 
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
            {language === 'de' ? 'Das Framework' : 'The Framework'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' 
              ? 'Die 4 Capabilities' 
              : 'The 4 Capabilities Framework'
            }
          </h2>
          <p className="text-editorial text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Vier Kernfähigkeiten, die AI-Native Unternehmen von traditionellen unterscheiden'
              : 'Four core capabilities that distinguish AI-Native companies from traditional ones'
            }
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const isActive = activeCapability === cap.id;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveCapability(isActive ? null : cap.id)}
                className={`group relative text-left bg-card border-2 border-border hover:border-primary/50 p-6 transition-all duration-400 animate-slide-up ${isActive ? 'ring-2 ring-primary shadow-glow' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Capability Label */}
                <div className={`absolute -top-3 left-4 px-3 py-1 text-xs font-bold tracking-wider bg-gradient-to-r ${cap.color} text-white`}>
                  {cap.id}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-sans text-lg font-bold text-foreground mb-2">
                  {language === 'de' ? cap.titleDe : cap.titleEn}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === 'de' ? cap.descDe : cap.descEn}
                </p>

                {/* Expand Indicator */}
                <div className={`mt-4 text-xs font-semibold uppercase tracking-wider ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                  {isActive 
                    ? (language === 'de' ? 'Aktiv' : 'Active')
                    : (language === 'de' ? 'Mehr erfahren' : 'Learn more')
                  }
                </div>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg"
            onClick={scrollToPlaybooks}
            className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 py-6 shadow-brutal hover-brutal"
          >
            {language === 'de' ? 'Framework erkunden' : 'Explore Framework'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameworkOptimized;
