import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingDown, 
  AlertTriangle, 
  Users, 
  Clock, 
  DollarSign,
  Frown,
  Target,
  BarChart
} from 'lucide-react';

interface Problem {
  id: string;
  title: { en: string; de: string };
  description: { en: string; de: string };
  icon: React.ReactNode;
  bottleneck: string;
  stats: { label: string; before: string; after: string }[];
  impact: { en: string; de: string };
}

const problems: Problem[] = [
  {
    id: 'stagnation',
    title: { 
      en: 'Growth is Stagnating', 
      de: 'Wachstum stagniert' 
    },
    description: { 
      en: 'You\'re growing 80% YoY, but Midjourney scales 10-30x faster with fewer people.',
      de: 'Du wächst 80% YoY, aber Midjourney skaliert 10-30x schneller mit weniger Leuten.'
    },
    icon: <TrendingDown className="w-8 h-8" />,
    bottleneck: 'C₁ (Strategy)',
    stats: [
      { label: 'Growth Rate', before: '150% YoY', after: '80% YoY' },
      { label: 'CAC', before: '€3K', after: '€8K' },
      { label: 'Time to €100M', before: '5-7 years', after: '10+ years' }
    ],
    impact: { en: 'CAC +167%, Win Rate -30%', de: 'CAC +167%, Win Rate -30%' }
  },
  {
    id: 'chaos',
    title: { 
      en: 'Coordination Chaos', 
      de: 'Koordinations-Chaos' 
    },
    description: { 
      en: '80 people = 4,950 coordination pairs. More people = more meetings, not more output.',
      de: '80 Leute = 4.950 Koordinationspaare. Mehr Leute = mehr Meetings, nicht mehr Output.'
    },
    icon: <Users className="w-8 h-8" />,
    bottleneck: 'C₂ (Setup)',
    stats: [
      { label: 'Org Layers', before: '3', after: '5' },
      { label: 'Meetings/Week', before: '20', after: '50+' },
      { label: 'Coordination Cost', before: '20%', after: '50%' }
    ],
    impact: { en: 'Decision Velocity -60%, Execution -40%', de: 'Entscheidungsgeschwindigkeit -60%, Execution -40%' }
  },
  {
    id: 'pressure',
    title: { 
      en: 'Board Pressure', 
      de: 'Board Druck' 
    },
    description: { 
      en: '"You have 6-12 months to fix this, or we find someone who can."',
      de: '"Du hast 6-12 Monate, um das zu fixen, oder wir finden jemanden der es kann."'
    },
    icon: <AlertTriangle className="w-8 h-8" />,
    bottleneck: 'C₄ (Operationalization)',
    stats: [
      { label: 'Runway', before: '18 months', after: 'Not enough' },
      { label: 'Deadline', before: 'Flexible', after: '6-12 months' },
      { label: 'Team Churn', before: '10%', after: '20%' }
    ],
    impact: { en: '60h/week, 20% churn, culture breaking', de: '60h/Woche, 20% Churn, Kultur zerbricht' }
  }
];

const ceoFacts = [
  { 
    icon: <TrendingDown className="w-5 h-5" />,
    fact: { en: 'Growth declining: 150% → 80% YoY', de: 'Wachstum sinkt: 150% → 80% YoY' }
  },
  { 
    icon: <Users className="w-5 h-5" />,
    fact: { en: '80 people = 4,950 coordination pairs', de: '80 Leute = 4.950 Koordinationspaare' }
  },
  { 
    icon: <DollarSign className="w-5 h-5" />,
    fact: { en: '18 months runway, need 5-7 years', de: '18 Monate Runway, braucht 5-7 Jahre' }
  },
  { 
    icon: <Clock className="w-5 h-5" />,
    fact: { en: 'Board gives 6-12 months, not 5-7 years', de: 'Board gibt 6-12 Monate, nicht 5-7 Jahre' }
  },
  { 
    icon: <Frown className="w-5 h-5" />,
    fact: { en: '20% churn, 60h/week, culture breaking', de: '20% Churn, 60h/Woche, Kultur zerbricht' }
  }
];

const ProblemSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-7xl mx-auto">
        {/* CEO Situation Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-destructive/30 text-destructive">
            {language === 'de' ? 'Observable Facts' : 'Observable Facts'}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'de' ? 'Die CEO-Situation (Series B, €15M ARR, 80 Leute)' : 'The CEO Situation (Series B, €15M ARR, 80 people)'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Was der CEO SIEHT – das ist keine Spekulation, das ist Realität.'
              : 'What the CEO SEES – this is not speculation, this is reality.'
            }
          </p>
        </div>

        {/* CEO Facts Strip */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {ceoFacts.map((item, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-sm">
              <span className="text-destructive">{item.icon}</span>
              <span>{item.fact[language]}</span>
            </div>
          ))}
        </div>

        {/* The Central Question */}
        <Card className="p-8 mb-12 glass border-primary/30 text-center">
          <Target className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {language === 'de' 
              ? '"Warum schaffen Midjourney, Cursor, Perplexity superlineares Scaling und ich nicht?"'
              : '"Why do Midjourney, Cursor, Perplexity achieve superlinear scaling and I don\'t?"'
            }
          </h3>
          <p className="text-muted-foreground">
            {language === 'de'
              ? 'Die Antwort: Der Unterschied ist θ_index (AI Maturity) + 4 Capabilities (C₁-C₄).'
              : 'The answer: The difference is θ_index (AI Maturity) + 4 Capabilities (C₁-C₄).'
            }
          </p>
        </Card>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((problem) => (
            <Card key={problem.id} className="p-6 glass border-destructive/20 hover:border-destructive/40 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-destructive/10 text-destructive">
                  {problem.icon}
                </div>
                <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                  {problem.bottleneck}
                </Badge>
              </div>

              <h3 className="text-xl font-bold mb-2">{problem.title[language]}</h3>
              <p className="text-sm text-muted-foreground mb-4">{problem.description[language]}</p>

              <div className="space-y-3 mb-4">
                {problem.stats.map((stat, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="line-through text-muted-foreground/50">{stat.before}</span>
                      <span className="text-destructive font-medium">→ {stat.after}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border/50">
                <p className="text-xs text-destructive font-medium">
                  <AlertTriangle className="w-3 h-3 inline mr-1" />
                  {problem.impact[language]}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Parallel Reality */}
        <Card className="p-6 glass border-accent/30">
          <div className="flex items-center gap-3 mb-4">
            <BarChart className="w-6 h-6 text-accent" />
            <h3 className="font-bold text-lg">
              {language === 'de' ? 'Parallel sieht er...' : 'Meanwhile, he sees...'}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <CompetitorCard 
              name="Midjourney"
              arr="€492M"
              team="107"
              time="18 months"
            />
            <CompetitorCard 
              name="Cursor"
              arr="€100M"
              team="60"
              time="12 months"
            />
            <CompetitorCard 
              name="Perplexity"
              arr="€200M"
              team="80"
              time="24 months"
            />
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            {language === 'de' 
              ? 'Das ist NICHT Spekulation. Das ist REALITÄT.'
              : 'This is NOT speculation. This is REALITY.'
            }
          </p>
        </Card>
      </div>
    </section>
  );
};

interface CompetitorCardProps {
  name: string;
  arr: string;
  team: string;
  time: string;
}

const CompetitorCard: React.FC<CompetitorCardProps> = ({ name, arr, team, time }) => (
  <div className="p-4 rounded-lg bg-accent/10 border border-accent/20 text-center">
    <h4 className="font-bold text-accent mb-2">{name}</h4>
    <div className="text-2xl font-bold mb-1">{arr}</div>
    <p className="text-sm text-muted-foreground">{team} people • {time}</p>
  </div>
);

export default ProblemSection;
