import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  FileText, 
  Rocket,
  ArrowRight,
  Clock,
  DollarSign,
  CheckCircle2,
  Zap
} from 'lucide-react';

interface SolutionStep {
  step: number;
  name: { en: string; de: string };
  title: { en: string; de: string };
  description: { en: string; de: string };
  icon: React.ReactNode;
  duration: string;
  price: string;
  output: { en: string; de: string };
  cta: { en: string; de: string };
  highlight?: boolean;
}

const solutionSteps: SolutionStep[] = [
  {
    step: 1,
    name: { en: 'DIAGNOSE', de: 'DIAGNOSE' },
    title: { en: 'Free Assessment', de: 'Kostenlose Analyse' },
    description: { 
      en: 'Identify your bottleneck with LASR.io Scorecard',
      de: 'Identifiziere deinen Bottleneck mit LASR.io Scorecard'
    },
    icon: <Search className="w-8 h-8" />,
    duration: '12 min',
    price: 'FREE',
    output: { 
      en: '"You are Level 1. C₁ = 0.5 (Strategy Bottleneck)"',
      de: '"Du bist Level 1. C₁ = 0.5 (Strategy Bottleneck)"'
    },
    cta: { en: 'Try FREE Tool', de: 'Kostenloses Tool' }
  },
  {
    step: 2,
    name: { en: 'DESIGN', de: 'DESIGN' },
    title: { en: 'Custom Report', de: 'Custom Report' },
    description: { 
      en: 'AI-generated 90-Day Action Plan tailored to your bottleneck',
      de: 'KI-generierter 90-Tage Action Plan für deinen Bottleneck'
    },
    icon: <FileText className="w-8 h-8" />,
    duration: '3-5 days',
    price: '€490',
    output: { 
      en: '20-30 page report + 3 action levers',
      de: '20-30 Seiten Report + 3 Hebel'
    },
    cta: { en: 'Get Custom Report', de: 'Report erstellen' }
  },
  {
    step: 3,
    name: { en: 'DEPLOY', de: 'DEPLOY' },
    title: { en: 'Hands-on Program', de: 'Hands-on Programm' },
    description: { 
      en: 'Work WITH you, not FOR you. Outcome guaranteed.',
      de: 'MIT dir, nicht FÜR dich. Ergebnis garantiert.'
    },
    icon: <Rocket className="w-8 h-8" />,
    duration: '30d - 12mo',
    price: '€23.6K - €153K',
    output: { 
      en: '2 of 3 outcomes or 50% refund',
      de: '2 von 3 Ergebnissen oder 50% Erstattung'
    },
    cta: { en: 'Explore Programs', de: 'Programme entdecken' },
    highlight: true
  }
];

const programs = [
  {
    name: { en: 'CAC Crisis Sprint', de: 'CAC Crisis Sprint' },
    stream: 'Stream 1',
    duration: '30 days',
    price: '€23.6K',
    outcomes: ['CAC -30-50%', 'LTV/CAC +100%', 'Win Rate +30%'],
    successRate: '85%'
  },
  {
    name: { en: 'Scaling Systems Boost', de: 'Scaling Systems Boost' },
    stream: 'Stream 2',
    duration: '90 days',
    price: '€78K',
    outcomes: ['Coordination -60%', 'Decision Velocity +5x', 'Level 1 → 2'],
    successRate: '65%'
  },
  {
    name: { en: 'AI-Native Accelerate', de: 'AI-Native Accelerate' },
    stream: 'Stream 3',
    duration: '12 months',
    price: '€153K',
    outcomes: ['θ_index +0.5', 'ARR/Employee +200%', 'Level 2 → 3'],
    successRate: '45%'
  }
];

const SolutionSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="knowledge" className="py-20 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
            {language === 'de' ? 'Der Weg' : 'The Path'}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'de' 
              ? 'Von Level 1 zu Level 3 in 3 Schritten'
              : 'From Level 1 to Level 3 in 3 Steps'
            }
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'de'
              ? 'Diagnose Bottleneck → Fix Bottleneck → Superlinear Scaling'
              : 'Diagnose Bottleneck → Fix Bottleneck → Superlinear Scaling'
            }
          </p>
        </div>

        {/* Solution Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {solutionSteps.map((step, index) => (
            <Card 
              key={step.step} 
              className={`p-6 glass relative overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                step.highlight ? 'border-accent/50 shadow-accent-glow' : 'border-border/50'
              }`}
            >
              {step.highlight && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs px-3 py-1 rounded-bl-lg font-medium">
                  Recommended
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  step.highlight ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'
                }`}>
                  {step.step}
                </div>
                <span className="font-bold text-sm tracking-wider">{step.name[language]}</span>
              </div>

              <div className={`p-4 rounded-xl mb-4 ${step.highlight ? 'bg-accent/10' : 'bg-primary/10'}`}>
                {step.icon}
              </div>

              <h3 className="text-xl font-bold mb-2">{step.title[language]}</h3>
              <p className="text-sm text-muted-foreground mb-4">{step.description[language]}</p>

              <div className="flex items-center gap-4 mb-4 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>{step.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                  <span className="font-bold">{step.price}</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-muted/50 mb-4">
                <p className="text-xs text-muted-foreground mb-1">Output:</p>
                <p className="text-sm font-medium">{step.output[language]}</p>
              </div>

              <Button 
                className={`w-full ${step.highlight ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : ''}`}
                variant={step.highlight ? 'default' : 'outline'}
              >
                {step.cta[language]}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              {index < solutionSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Detailed Programs */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            {language === 'de' ? 'Deploy Programme' : 'Deploy Programs'}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Card key={program.stream} className="p-6 glass hover:shadow-lg transition-all">
                <Badge variant="secondary" className="mb-3">{program.stream}</Badge>
                <h4 className="text-lg font-bold mb-2">{program.name[language]}</h4>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span>{program.duration}</span>
                  <span>•</span>
                  <span className="font-bold text-foreground">{program.price}</span>
                </div>

                <div className="space-y-2 mb-4">
                  {program.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{language === 'de' ? 'Erfolgsrate' : 'Success Rate'}</span>
                    <span className="font-bold text-accent">{program.successRate}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Guarantee Section */}
        <Card className="p-8 glass border-accent/30 text-center">
          <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            {language === 'de' ? 'Outcome Garantie' : 'Outcome Guarantee'}
          </h3>
          <p className="text-xl mb-6">
            <span className="text-accent font-bold">2 von 3 Outcomes</span>
            {' '}{language === 'de' ? 'oder' : 'or'}{' '}
            <span className="text-accent font-bold">50% Refund</span>
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-lg bg-muted/50">
              <CheckCircle2 className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="font-medium">{language === 'de' ? '90 Tage' : '90 Days'}</p>
              <p className="text-sm text-muted-foreground">{language === 'de' ? 'nicht 6-12 Monate' : 'not 6-12 months'}</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <CheckCircle2 className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="font-medium">Hands-on</p>
              <p className="text-sm text-muted-foreground">{language === 'de' ? 'MIT dir, nicht FÜR dich' : 'WITH you, not FOR you'}</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <CheckCircle2 className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="font-medium">{language === 'de' ? 'Messbar' : 'Measurable'}</p>
              <p className="text-sm text-muted-foreground">θ_index, C₁-C₄, KPIs</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SolutionSection;
