import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Eye, Target, FileText, RefreshCw, ArrowRight, 
  CheckCircle2, BookOpen, Zap, Brain
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const C1StrategyDetail: React.FC = () => {
  const { language } = useLanguage();

  const components = [
    {
      id: 'sensing',
      name: 'Sensing',
      author: 'Teece, 2007',
      icon: Eye,
      color: 'from-blue-500 to-cyan-500',
      description: {
        en: 'Environmental scanning, opportunity identification',
        de: 'Umgebungsanalyse, Chancenerkennung'
      },
      details: {
        en: 'Market trends, customer needs, competitive threats',
        de: 'Markttrends, Kundenbedürfnisse, Wettbewerbsgefahren'
      },
      traditional: 'Quarterly market reports, manual analysis',
      aiNative: 'Predictive analytics, real-time monitoring',
      aiOutcome: '3x faster market reaction',
    },
    {
      id: 'choice',
      name: 'Choice',
      author: 'Porter, 1980',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      description: {
        en: 'Strategic positioning, competitive advantage',
        de: 'Strategische Positionierung, Wettbewerbsvorteil'
      },
      details: {
        en: 'Where to compete, how to win, resource allocation',
        de: 'Wo konkurrieren, wie gewinnen, Ressourcenallokation'
      },
      traditional: 'Annual strategy sessions, gut-based decisions',
      aiNative: 'Scenario modeling, optimization algorithms',
      aiOutcome: '5x decision velocity',
    },
    {
      id: 'formulation',
      name: 'Formulation',
      author: 'Mintzberg, 1987',
      icon: FileText,
      color: 'from-orange-500 to-amber-500',
      description: {
        en: 'Strategy development, planning',
        de: 'Strategieentwicklung, Planung'
      },
      details: {
        en: 'Roadmap, milestones, resource allocation',
        de: 'Roadmap, Meilensteine, Ressourcenallokation'
      },
      traditional: 'Static annual plans, long planning cycles',
      aiNative: 'Dynamic planning, continuous adjustment',
      aiOutcome: '12 strategy cycles/year (vs 1-4)',
    },
    {
      id: 'review',
      name: 'Review',
      author: 'Argyris & Schön, 1978',
      icon: RefreshCw,
      color: 'from-emerald-500 to-teal-500',
      description: {
        en: 'Continuous learning, strategy refinement',
        de: 'Kontinuierliches Lernen, Strategieverfeinerung'
      },
      details: {
        en: 'Feedback loops, performance monitoring, rapid iteration',
        de: 'Feedback-Loops, Performance-Monitoring, schnelle Iteration'
      },
      traditional: 'Quarterly reviews, delayed learning',
      aiNative: 'Real-time performance monitoring, A/B testing',
      aiOutcome: 'Continuous improvement loop',
    },
  ];

  const scoringLevels = [
    { range: '0.0-0.2', level: 'Ad-hoc', description: 'No formal strategy, reactive', color: 'text-destructive' },
    { range: '0.2-0.5', level: 'Basic', description: 'Some planning, limited AI', color: 'text-amber-500' },
    { range: '0.5-0.8', level: 'Systematic', description: 'Formal process, AI-augmented', color: 'text-primary' },
    { range: '0.8-1.0', level: 'Optimized', description: 'AI-driven, continuous refinement', color: 'text-accent' },
  ];

  return (
    <section id="c1-strategy" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-500/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blue-500/30 text-blue-400">
            C₁ Strategy Capability • SST v4.5.2
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
              Die 4 Komponenten der Strategie
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de' 
              ? 'C₁ Strategy (Exponent 1.5) – Die Fähigkeit, Chancen zu erkennen, strategische Entscheidungen zu treffen, Pläne zu formulieren und Ergebnisse zu reviewen'
              : 'C₁ Strategy (Exponent 1.5) – The ability to sense opportunities, make strategic choices, formulate plans, and review outcomes'}
          </p>
        </div>

        {/* Feedback Loop Visual */}
        <Card className="p-8 mb-12 glass border-blue-500/30">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Continuous Strategy Loop</h3>
            <p className="text-muted-foreground">Review → Sensing (continuous refinement)</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {components.map((comp, i) => {
              const CompIcon = comp.icon;
              return (
                <React.Fragment key={comp.id}>
                  <div className={`flex flex-col items-center p-4 rounded-xl bg-gradient-to-br ${comp.color} bg-opacity-10 border border-white/10`}>
                    <div className={`p-3 rounded-full bg-gradient-to-br ${comp.color} text-white mb-2`}>
                      <CompIcon className="w-6 h-6" />
                    </div>
                    <span className="font-bold">{comp.name}</span>
                    <span className="text-xs text-muted-foreground">{comp.author}</span>
                  </div>
                  {i < components.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
                  )}
                </React.Fragment>
              );
            })}
            <ArrowRight className="w-6 h-6 text-muted-foreground rotate-[135deg] hidden md:block" />
          </div>
        </Card>

        {/* 4 Components Detail */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {components.map((comp) => {
            const CompIcon = comp.icon;
            return (
              <Card 
                key={comp.id}
                className="p-6 glass border-blue-500/20 hover:border-blue-500/40 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${comp.color} text-white shrink-0`}>
                    <CompIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold">{comp.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        <BookOpen className="w-3 h-3 mr-1" />
                        {comp.author}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{comp.description[language]}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="text-sm">
                      <span className="font-medium">Focus: </span>
                      <span className="text-muted-foreground">{comp.details[language]}</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                      <p className="text-xs text-destructive font-medium mb-1">Traditional</p>
                      <p className="text-sm text-muted-foreground">{comp.traditional}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                      <p className="text-xs text-accent font-medium mb-1">AI-Native</p>
                      <p className="text-sm text-muted-foreground">{comp.aiNative}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{comp.aiOutcome}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Scoring Levels */}
        <Card className="p-8 glass border-border/50">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            C₁ Scoring (0-1 scale)
          </h3>
          
          <div className="grid md:grid-cols-4 gap-4">
            {scoringLevels.map((level, i) => (
              <div key={i} className="p-4 rounded-xl bg-muted/30 border border-border/50">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-2xl font-bold ${level.color}`}>{level.range}</span>
                </div>
                <h4 className="font-bold mb-1">{level.level}</h4>
                <p className="text-sm text-muted-foreground">{level.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-medium">Key Insight: Non-linear Impact</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {language === 'de'
                ? 'C₁ Strategy hat Exponent 1.5 – Verbesserung von 0.4 auf 0.8 → 2.8x Impact (nicht 2x)!'
                : 'C₁ Strategy has exponent 1.5 – Improving from 0.4 to 0.8 → 2.8x impact (not 2x)!'}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default C1StrategyDetail;
