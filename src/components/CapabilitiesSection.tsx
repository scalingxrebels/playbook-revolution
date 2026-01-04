import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { 
  Target, 
  Settings, 
  Zap, 
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  Info
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Capability {
  id: string;
  name: { en: string; de: string };
  description: { en: string; de: string };
  icon: React.ReactNode;
  color: string;
  examples: { en: string[]; de: string[] };
  lowImpact: { en: string; de: string };
  highImpact: { en: string; de: string };
}

const capabilities: Capability[] = [
  {
    id: 'C1',
    name: { en: 'Strategy', de: 'Strategie' },
    description: { 
      en: 'Clarity on ICP, Positioning, GTM Strategy',
      de: 'Klarheit über ICP, Positionierung, GTM-Strategie'
    },
    icon: <Target className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600',
    examples: {
      en: ['ICP Definition', 'Market Positioning', 'GTM Strategy'],
      de: ['ICP-Definition', 'Marktpositionierung', 'GTM-Strategie']
    },
    lowImpact: { en: 'CAC +50-100%, Win Rate -20-30%', de: 'CAC +50-100%, Win Rate -20-30%' },
    highImpact: { en: 'CAC -30-50%, Win Rate +30-50%', de: 'CAC -30-50%, Win Rate +30-50%' }
  },
  {
    id: 'C2',
    name: { en: 'Setup', de: 'Setup' },
    description: { 
      en: 'Org Structure, Systems, Infrastructure',
      de: 'Org-Struktur, Systeme, Infrastruktur'
    },
    icon: <Settings className="w-6 h-6" />,
    color: 'from-purple-500 to-purple-600',
    examples: {
      en: ['Org Layers', 'Automation', 'Tech Stack'],
      de: ['Org-Ebenen', 'Automatisierung', 'Tech-Stack']
    },
    lowImpact: { en: 'Decision Velocity -60%, Coordination +150%', de: 'Entscheidungsgeschwindigkeit -60%, Koordination +150%' },
    highImpact: { en: 'Decision Velocity +5-10x, Coordination -80-99%', de: 'Entscheidungsgeschwindigkeit +5-10x, Koordination -80-99%' }
  },
  {
    id: 'C3',
    name: { en: 'Execution', de: 'Execution' },
    description: { 
      en: 'Speed, Quality, Consistency of execution',
      de: 'Geschwindigkeit, Qualität, Konsistenz der Ausführung'
    },
    icon: <Zap className="w-6 h-6" />,
    color: 'from-amber-500 to-amber-600',
    examples: {
      en: ['Time to Ship', 'Output Quality', 'Repeatability'],
      de: ['Zeit bis Lieferung', 'Output-Qualität', 'Wiederholbarkeit']
    },
    lowImpact: { en: 'Time-to-Market +100-200%, Quality -20-30%', de: 'Time-to-Market +100-200%, Qualität -20-30%' },
    highImpact: { en: 'Time-to-Market -60-80%, Win Rate +30-50%', de: 'Time-to-Market -60-80%, Win Rate +30-50%' }
  },
  {
    id: 'C4',
    name: { en: 'Operationalization', de: 'Operationalisierung' },
    description: { 
      en: 'Monitoring, Optimization, Scaling of systems',
      de: 'Monitoring, Optimierung, Skalierung von Systemen'
    },
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'from-emerald-500 to-emerald-600',
    examples: {
      en: ['Real-time KPIs', 'Continuous Optimization', 'Auto-scaling'],
      de: ['Echtzeit-KPIs', 'Kontinuierliche Optimierung', 'Auto-Skalierung']
    },
    lowImpact: { en: 'Downtime +200%, Efficiency -30-50%', de: 'Ausfallzeit +200%, Effizienz -30-50%' },
    highImpact: { en: 'Downtime -90%, Efficiency +50-100%', de: 'Ausfallzeit -90%, Effizienz +50-100%' }
  }
];

const CapabilitiesSection: React.FC = () => {
  const { language } = useLanguage();
  const [scores, setScores] = useState<Record<string, number>>({
    C1: 0.5,
    C2: 0.4,
    C3: 0.5,
    C4: 0.45
  });
  const [thetaIndex, setThetaIndex] = useState(0.3);

  const minScore = Math.min(...Object.values(scores));
  const avgScore = Object.values(scores).reduce((a, b) => a + b, 0) / 4;
  
  // Calculate scaling velocity using the META-FORMULA
  const calculateScalingVelocity = () => {
    const E = 0.8; // Enablers
    const alpha = 1.5;
    const beta = 1.2;
    const gamma = 2.0;
    
    const S = E * (Math.pow(scores.C1, alpha) * scores.C2 * Math.pow(scores.C3, beta) * scores.C4) * Math.pow(thetaIndex, gamma);
    return S;
  };

  const scalingVelocity = calculateScalingVelocity();
  const bottleneck = Object.entries(scores).reduce((min, [key, value]) => 
    value < min.value ? { key, value } : min, 
    { key: 'C1', value: 1 }
  );

  const getLevel = () => {
    if (thetaIndex >= 0.8 && minScore >= 0.8) return { level: 3, label: 'AI-Native' };
    if (thetaIndex >= 0.4 && minScore >= 0.5) return { level: 2, label: 'AI-Enabled' };
    return { level: 1, label: 'Traditional' };
  };

  const currentLevel = getLevel();

  const getScoreColor = (score: number) => {
    if (score >= 0.8) return 'text-accent';
    if (score >= 0.6) return 'text-primary';
    if (score >= 0.4) return 'text-amber-500';
    return 'text-destructive';
  };

  return (
    <section id="frameworks" className="py-20 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            SST v4.5.1 • Scaling Stack Theory
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'de' ? 'Die 4 Capabilities (C₁-C₄)' : 'The 4 Capabilities (C₁-C₄)'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Deine Scaling-Geschwindigkeit ist durch dein schwächstes Capability begrenzt (C_min)'
              : 'Your scaling velocity is limited by your weakest capability (C_min)'}
          </p>
        </div>

        {/* META-FORMULA Display */}
        <Card className="p-6 mb-8 glass border-primary/30">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">META-FORMULA</p>
            <code className="text-lg md:text-xl font-mono">
              S = E × (C₁<sup>1.5</sup> × C₂ × C₃<sup>1.2</sup> × C₄) × θ<sup>2.0</sup>
            </code>
            <p className="text-xs text-muted-foreground mt-2">
              R² = 0.76 | Predicts Time to €100M with ±20% accuracy
            </p>
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Capability Sliders */}
          <div className="lg:col-span-2 space-y-6">
            <TooltipProvider>
              {capabilities.map((cap) => (
                <Card key={cap.id} className={`p-6 glass ${scores[cap.id] === minScore ? 'border-destructive/50 ring-2 ring-destructive/20' : 'border-border/50'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${cap.color} text-white shrink-0`}>
                      {cap.icon}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold">{cap.id}: {cap.name[language]}</h3>
                          {scores[cap.id] === minScore && (
                            <Badge variant="destructive" className="text-xs">
                              <AlertTriangle className="w-3 h-3 mr-1" />
                              Bottleneck
                            </Badge>
                          )}
                        </div>
                        <span className={`text-2xl font-bold ${getScoreColor(scores[cap.id])}`}>
                          {scores[cap.id].toFixed(1)}
                        </span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {cap.description[language]}
                      </p>

                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs text-muted-foreground w-8">0.0</span>
                        <Slider
                          value={[scores[cap.id]]}
                          onValueChange={(value) => setScores(prev => ({ ...prev, [cap.id]: value[0] }))}
                          max={1}
                          min={0}
                          step={0.1}
                          className="flex-1"
                        />
                        <span className="text-xs text-muted-foreground w-8">1.0</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {cap.examples[language].map((ex, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{ex}</Badge>
                        ))}
                      </div>

                      <div className="mt-4 pt-4 border-t border-border/50 grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-destructive font-medium">Low (0.3-0.5):</span>
                          <p className="text-muted-foreground">{cap.lowImpact[language]}</p>
                        </div>
                        <div>
                          <span className="text-accent font-medium">High (0.8-1.0):</span>
                          <p className="text-muted-foreground">{cap.highImpact[language]}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {/* θ_index Slider */}
              <Card className="p-6 glass border-accent/30">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-accent text-accent-foreground shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold">θ_index: AI Maturity</h3>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">θ_index measures your AI integration level. Higher values multiply your scaling velocity exponentially.</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <span className={`text-2xl font-bold ${getScoreColor(thetaIndex)}`}>
                        {thetaIndex.toFixed(1)}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-xs text-muted-foreground w-8">0.0</span>
                      <Slider
                        value={[thetaIndex]}
                        onValueChange={(value) => setThetaIndex(value[0])}
                        max={1}
                        min={0}
                        step={0.1}
                        className="flex-1"
                      />
                      <span className="text-xs text-muted-foreground w-8">1.0</span>
                    </div>
                    
                    <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                      <span>0.0-0.3: Traditional</span>
                      <span>0.4-0.7: AI-Enabled</span>
                      <span>0.8-1.0: AI-Native</span>
                    </div>
                  </div>
                </div>
              </Card>
            </TooltipProvider>
          </div>

          {/* Results Panel */}
          <div className="space-y-6">
            <Card className="p-6 glass sticky top-24">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                {language === 'de' ? 'Dein Profil' : 'Your Profile'}
              </h3>

              {/* Level Badge */}
              <div className="text-center mb-6">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                  currentLevel.level === 3 ? 'bg-accent/20 text-accent' :
                  currentLevel.level === 2 ? 'bg-primary/20 text-primary' :
                  'bg-muted text-muted-foreground'
                }`}>
                  <span className="text-2xl font-bold">Level {currentLevel.level}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{currentLevel.label}</p>
              </div>

              {/* Key Metrics */}
              <div className="space-y-4">
                <MetricRow 
                  label="C_min (Bottleneck)"
                  value={minScore.toFixed(2)}
                  detail={`${bottleneck.key}: ${capabilities.find(c => c.id === bottleneck.key)?.name[language]}`}
                  isWarning={minScore < 0.6}
                />
                <MetricRow 
                  label="C_avg (Average)"
                  value={avgScore.toFixed(2)}
                  detail={`${((avgScore - 0.5) * 200).toFixed(0)}% vs typical`}
                />
                <MetricRow 
                  label="θ_index"
                  value={thetaIndex.toFixed(2)}
                  detail={thetaIndex >= 0.8 ? 'AI-Native' : thetaIndex >= 0.4 ? 'AI-Enabled' : 'Traditional'}
                />
                <MetricRow 
                  label={language === 'de' ? 'Scaling-Geschwindigkeit' : 'Scaling Velocity'}
                  value={(scalingVelocity * 100).toFixed(1) + '%'}
                  detail={`${(scalingVelocity * 100 / 27 * 100).toFixed(0)}% of optimal`}
                  isHighlight
                />
              </div>

              {/* Bottleneck Warning */}
              {minScore < 0.6 && (
                <div className="mt-6 p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                  <div className="flex items-center gap-2 text-destructive mb-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="font-medium">Bottleneck Detected</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'de' 
                      ? `${bottleneck.key} (${capabilities.find(c => c.id === bottleneck.key)?.name.de}) limitiert deine Skalierung. Fokussiere auf diesen Bereich zuerst.`
                      : `${bottleneck.key} (${capabilities.find(c => c.id === bottleneck.key)?.name.en}) is limiting your scaling. Focus here first.`
                    }
                  </p>
                </div>
              )}

              {/* Success Message */}
              {minScore >= 0.8 && thetaIndex >= 0.8 && (
                <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/30">
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="font-medium">Level 3 Achieved!</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'de' 
                      ? 'Du bist bereit für superlineares Scaling wie Midjourney, Cursor, Perplexity.'
                      : 'You\'re ready for superlinear scaling like Midjourney, Cursor, Perplexity.'
                    }
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

interface MetricRowProps {
  label: string;
  value: string;
  detail: string;
  isWarning?: boolean;
  isHighlight?: boolean;
}

const MetricRow: React.FC<MetricRowProps> = ({ label, value, detail, isWarning, isHighlight }) => (
  <div className={`p-3 rounded-lg ${isHighlight ? 'bg-primary/10' : 'bg-muted/50'}`}>
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className={`font-bold ${isWarning ? 'text-destructive' : isHighlight ? 'text-primary' : ''}`}>
        {value}
      </span>
    </div>
    <p className="text-xs text-muted-foreground">{detail}</p>
  </div>
);

export default CapabilitiesSection;
