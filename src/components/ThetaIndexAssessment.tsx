import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Lightbulb, Building2, Workflow, Database, Users, Rocket,
  ArrowRight, CheckCircle, Target, Sparkles, BarChart3
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Dimension {
  id: string;
  name: { en: string; de: string };
  description: { en: string; de: string };
  weight: number;
  icon: React.ComponentType<{ className?: string }>;
  levels: {
    level: string;
    range: string;
    description: { en: string; de: string };
  }[];
}

const dimensions: Dimension[] = [
  {
    id: 'strategy',
    name: { en: 'AI Strategy', de: 'AI-Strategie' },
    description: { 
      en: 'Vision, roadmap, investment, board commitment',
      de: 'Vision, Roadmap, Investment, Board-Commitment'
    },
    weight: 0.20,
    icon: Lightbulb,
    levels: [
      { level: '0-2', range: 'Ad-hoc', description: { en: 'No formal AI strategy', de: 'Keine formale AI-Strategie' } },
      { level: '3-4', range: 'Pilot', description: { en: 'Initial experiments, limited budget', de: 'Erste Experimente, begrenztes Budget' } },
      { level: '5-6', range: 'Systematic', description: { en: 'Defined roadmap, dedicated resources', de: 'Definierte Roadmap, dedizierte Ressourcen' } },
      { level: '7-8', range: 'Integrated', description: { en: 'AI integral to business strategy', de: 'AI integral in Geschäftsstrategie' } },
      { level: '9-10', range: 'AI-First', description: { en: 'AI drives all strategic decisions', de: 'AI treibt alle strategischen Entscheidungen' } },
    ]
  },
  {
    id: 'architecture',
    name: { en: 'AI Architecture', de: 'AI-Architektur' },
    description: { 
      en: 'Tool → Platform → Orchestrator → Autonomous',
      de: 'Tool → Plattform → Orchestrator → Autonom'
    },
    weight: 0.20,
    icon: Building2,
    levels: [
      { level: '0-2', range: 'Tool', description: { en: 'Point solutions, no integration', de: 'Punktlösungen, keine Integration' } },
      { level: '3-4', range: 'Tools+', description: { en: 'Multiple tools, basic integrations', de: 'Mehrere Tools, einfache Integrationen' } },
      { level: '5-6', range: 'Platform', description: { en: 'Unified AI platform, shared models', de: 'Einheitliche AI-Plattform, geteilte Modelle' } },
      { level: '7-8', range: 'Orchestrator', description: { en: 'AI orchestrates workflows across systems', de: 'AI orchestriert Workflows systemübergreifend' } },
      { level: '9-10', range: 'Autonomous', description: { en: 'Self-improving, self-orchestrating AI', de: 'Selbstverbessernde, selbstorchestrierende AI' } },
    ]
  },
  {
    id: 'workflow',
    name: { en: 'AI Workflows', de: 'AI-Workflows' },
    description: { 
      en: 'Ad-hoc → Systematic → Optimized → Autonomous',
      de: 'Ad-hoc → Systematisch → Optimiert → Autonom'
    },
    weight: 0.15,
    icon: Workflow,
    levels: [
      { level: '0-2', range: 'Ad-hoc', description: { en: 'Manual processes, occasional AI use', de: 'Manuelle Prozesse, gelegentliche AI-Nutzung' } },
      { level: '3-4', range: 'Documented', description: { en: 'AI workflows defined for some tasks', de: 'AI-Workflows für einige Aufgaben definiert' } },
      { level: '5-6', range: 'Systematic', description: { en: 'AI integrated in core workflows', de: 'AI in Kernworkflows integriert' } },
      { level: '7-8', range: 'Optimized', description: { en: 'Continuous workflow optimization via AI', de: 'Kontinuierliche Workflow-Optimierung via AI' } },
      { level: '9-10', range: 'Autonomous', description: { en: 'AI creates and optimizes workflows', de: 'AI erstellt und optimiert Workflows' } },
    ]
  },
  {
    id: 'data',
    name: { en: 'AI Data', de: 'AI-Daten' },
    description: { 
      en: 'Quality, availability, governance',
      de: 'Qualität, Verfügbarkeit, Governance'
    },
    weight: 0.15,
    icon: Database,
    levels: [
      { level: '0-2', range: 'Siloed', description: { en: 'Fragmented data, no governance', de: 'Fragmentierte Daten, keine Governance' } },
      { level: '3-4', range: 'Basic', description: { en: 'Some data centralized, basic quality', de: 'Einige Daten zentralisiert, einfache Qualität' } },
      { level: '5-6', range: 'Unified', description: { en: 'Unified data platform, defined governance', de: 'Einheitliche Datenplattform, definierte Governance' } },
      { level: '7-8', range: 'AI-Ready', description: { en: 'ML-ready data, real-time pipelines', de: 'ML-ready Daten, Echtzeit-Pipelines' } },
      { level: '9-10', range: 'Self-Curating', description: { en: 'AI manages data quality & governance', de: 'AI managt Datenqualität & Governance' } },
    ]
  },
  {
    id: 'talent',
    name: { en: 'AI Talent', de: 'AI-Talent' },
    description: { 
      en: 'Skills, hiring, retention',
      de: 'Skills, Hiring, Retention'
    },
    weight: 0.15,
    icon: Users,
    levels: [
      { level: '0-2', range: 'None', description: { en: 'No dedicated AI talent', de: 'Kein dediziertes AI-Talent' } },
      { level: '3-4', range: 'Emerging', description: { en: 'Some AI skills, external support', de: 'Einige AI-Skills, externe Unterstützung' } },
      { level: '5-6', range: 'Team', description: { en: 'Dedicated AI team, ongoing training', de: 'Dediziertes AI-Team, kontinuierliche Schulung' } },
      { level: '7-8', range: 'Center', description: { en: 'AI CoE, embedded AI skills across org', de: 'AI CoE, eingebettete AI-Skills in der Org' } },
      { level: '9-10', range: 'AI-Native', description: { en: 'All employees AI-fluent, AI-first culture', de: 'Alle Mitarbeiter AI-kompetent, AI-First-Kultur' } },
    ]
  },
  {
    id: 'adoption',
    name: { en: 'AI Adoption', de: 'AI-Adoption' },
    description: { 
      en: '% of work AI-handled, autonomy level',
      de: '% der Arbeit durch AI, Autonomie-Level'
    },
    weight: 0.15,
    icon: Rocket,
    levels: [
      { level: '0-2', range: '0-10%', description: { en: 'Minimal AI usage', de: 'Minimale AI-Nutzung' } },
      { level: '3-4', range: '10-30%', description: { en: 'Selective AI adoption', de: 'Selektive AI-Adoption' } },
      { level: '5-6', range: '30-50%', description: { en: 'Significant AI integration', de: 'Signifikante AI-Integration' } },
      { level: '7-8', range: '50-80%', description: { en: 'AI-assisted majority of work', de: 'AI-unterstützte Mehrheit der Arbeit' } },
      { level: '9-10', range: '80-100%', description: { en: 'AI-driven organization', de: 'AI-getriebene Organisation' } },
    ]
  }
];

const ThetaIndexAssessment: React.FC = () => {
  const { language } = useLanguage();
  const [scores, setScores] = useState<Record<string, number>>({
    strategy: 5,
    architecture: 4,
    workflow: 4,
    data: 5,
    talent: 3,
    adoption: 4
  });

  const calculateThetaIndex = () => {
    return dimensions.reduce((sum, dim) => {
      return sum + (scores[dim.id] / 10) * dim.weight;
    }, 0);
  };

  const thetaIndex = calculateThetaIndex();

  const getLevel = () => {
    if (thetaIndex >= 0.8) return { level: 3, label: 'AI-Native', color: 'text-accent', bgColor: 'bg-accent/20' };
    if (thetaIndex >= 0.5) return { level: 2, label: 'AI-Enabled', color: 'text-primary', bgColor: 'bg-primary/20' };
    if (thetaIndex >= 0.2) return { level: 1, label: 'AI-Powered', color: 'text-amber-500', bgColor: 'bg-amber-500/20' };
    return { level: 0, label: 'Traditional', color: 'text-muted-foreground', bgColor: 'bg-muted/20' };
  };

  const currentLevel = getLevel();

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-accent';
    if (score >= 6) return 'text-primary';
    if (score >= 4) return 'text-amber-500';
    return 'text-destructive';
  };

  const getTimeToScale = () => {
    if (thetaIndex >= 0.8) return { time: '8-18', label: 'months', speed: 'Fast Track' };
    if (thetaIndex >= 0.5) return { time: '18-36', label: 'months', speed: 'Medium' };
    return { time: '36+', label: 'months', speed: 'Slow' };
  };

  const timeToScale = getTimeToScale();

  return (
    <section id="theta-assessment" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            AMF v4.5.2 • AI Maturity Framework
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              θ_index Assessment
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de' 
              ? '6 gewichtete Dimensionen bestimmen Ihren AI-Maturity Index (θ_index) – der stärkste Prädiktor für Scaling-Erfolg'
              : '6 weighted dimensions determine your AI Maturity Index (θ_index) – the strongest predictor of scaling success'}
          </p>
        </div>

        {/* Formula Display */}
        <Card className="p-6 mb-12 glass border-primary/30 text-center">
          <p className="text-sm text-muted-foreground mb-2">θ_index FORMEL</p>
          <code className="text-lg md:text-xl font-mono block mb-4">
            θ_index = Σ (Dimension_i × Weight_i)
          </code>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            {dimensions.map((dim) => (
              <span key={dim.id} className="px-3 py-1 rounded-full bg-muted/50">
                {dim.name[language]}: {(dim.weight * 100).toFixed(0)}%
              </span>
            ))}
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Dimension Sliders */}
          <div className="lg:col-span-2 space-y-4">
            <TooltipProvider>
              {dimensions.map((dim) => {
                const DimIcon = dim.icon;
                const score = scores[dim.id];
                const level = dim.levels.find((l, i) => {
                  const [min, max] = l.level.split('-').map(Number);
                  return score >= min && score <= max;
                }) || dim.levels[0];

                return (
                  <Card key={dim.id} className="p-5 glass border-border/50 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary shrink-0">
                        <DimIcon className="w-5 h-5" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold">{dim.name[language]}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {(dim.weight * 100).toFixed(0)}% Weight
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`text-2xl font-bold ${getScoreColor(score)}`}>
                              {score}
                            </span>
                            <span className="text-xs text-muted-foreground">/10</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-3">
                          {dim.description[language]}
                        </p>

                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs text-muted-foreground w-4">0</span>
                          <Slider
                            value={[score]}
                            onValueChange={(value) => setScores(prev => ({ ...prev, [dim.id]: value[0] }))}
                            max={10}
                            min={0}
                            step={1}
                            className="flex-1"
                          />
                          <span className="text-xs text-muted-foreground w-4">10</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {level.range}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {level.description[language]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </TooltipProvider>
          </div>

          {/* Results Panel */}
          <div className="space-y-6">
            <Card className="p-6 glass sticky top-24">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                {language === 'de' ? 'Ihr θ_index' : 'Your θ_index'}
              </h3>

              {/* Main Score */}
              <div className="text-center mb-6">
                <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {(thetaIndex * 100).toFixed(0)}%
                </div>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${currentLevel.bgColor} ${currentLevel.color}`}>
                  <span className="font-bold">Level {currentLevel.level}: {currentLevel.label}</span>
                </div>
              </div>

              {/* Level Scale */}
              <div className="mb-6">
                <div className="h-3 rounded-full bg-muted/30 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                    style={{ width: `${thetaIndex * 100}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>Traditional</span>
                  <span>AI-Powered</span>
                  <span>AI-Enabled</span>
                  <span>AI-Native</span>
                </div>
              </div>

              {/* Predictions */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Time to €100M ARR</span>
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{timeToScale.time}</span>
                    <span className="text-muted-foreground">{timeToScale.label}</span>
                  </div>
                  <Badge variant="outline" className="mt-2">{timeToScale.speed}</Badge>
                </div>

                <div className="p-4 rounded-xl bg-muted/50">
                  <div className="text-sm text-muted-foreground mb-1">Expected ARR/Employee</div>
                  <div className="text-2xl font-bold">
                    €{thetaIndex >= 0.8 ? '1M-5M' : thetaIndex >= 0.5 ? '500K-1M' : '200K-500K'}
                  </div>
                </div>
              </div>

              {/* Validation */}
              <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                <div className="flex items-center gap-2 text-accent mb-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-medium text-sm">Empirisch validiert</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  θ_index → log(Time to €100M): r = 0.89, p &lt; 0.001 (n=22 companies)
                </p>
              </div>
            </Card>

            {/* CTA */}
            <Card className="p-6 glass border-primary/30">
              <h4 className="font-bold mb-3">
                {language === 'de' ? 'Bereit für Level 3?' : 'Ready for Level 3?'}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                {language === 'de' 
                  ? 'Erfahren Sie, wie Sie Ihren θ_index in 90 Tagen verdoppeln können.'
                  : 'Learn how to double your θ_index in 90 days.'}
              </p>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl transition-all duration-300"
              >
                <Sparkles className="w-4 h-4" />
                Diagnose-Gespräch
                <ArrowRight className="w-4 h-4" />
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThetaIndexAssessment;
