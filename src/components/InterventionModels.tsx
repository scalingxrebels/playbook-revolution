import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Target, Layers, ArrowUpRight, Clock, TrendingUp, 
  CheckCircle, AlertCircle, Zap, ArrowRight
} from 'lucide-react';
import { Card } from '@/components/ui/card';

interface InterventionModel {
  id: string;
  title: { en: string; de: string };
  subtitle: { en: string; de: string };
  icon: React.ElementType;
  color: string;
  bgColor: string;
  trigger: { en: string; de: string };
  duration: { en: string; de: string };
  roi: string;
  phases: { en: string; de: string }[];
  useCases: { en: string; de: string }[];
  caseStudy: {
    name: string;
    problem: { en: string; de: string };
    result: { en: string; de: string };
    roi: string;
  };
}

const InterventionModels: React.FC = () => {
  const { language } = useLanguage();
  const [activeModel, setActiveModel] = useState<string>('bottleneck');

  const models: InterventionModel[] = [
    {
      id: 'bottleneck',
      title: { en: 'Model 1: Bottleneck Resolution', de: 'Modell 1: Bottleneck-Auflösung' },
      subtitle: { en: 'Fix the constraint that limits everything', de: 'Beheben Sie die Einschränkung, die alles limitiert' },
      icon: Target,
      color: 'text-red-400',
      bgColor: 'from-red-500/20 to-orange-500/20',
      trigger: { en: 'Severe bottleneck: C_min < 0.4', de: 'Schwerer Bottleneck: C_min < 0.4' },
      duration: { en: '8-12 weeks', de: '8-12 Wochen' },
      roi: '50-200x',
      phases: [
        { en: 'Week 1-2: Diagnose', de: 'Woche 1-2: Diagnose' },
        { en: 'Week 3-4: Design', de: 'Woche 3-4: Design' },
        { en: 'Week 5-10: Implement', de: 'Woche 5-10: Implementieren' },
        { en: 'Week 11-12: Validate', de: 'Woche 11-12: Validieren' },
      ],
      useCases: [
        { en: 'One capability severely underperforming', de: 'Eine Fähigkeit stark unterperformend' },
        { en: 'Clear constraint holding back growth', de: 'Klare Einschränkung bremst Wachstum' },
        { en: 'Need quick, focused intervention', de: 'Schnelle, fokussierte Intervention nötig' },
      ],
      caseStudy: {
        name: 'TechCorp (C₂ Setup Bottleneck)',
        problem: { en: 'Setup capability at 0.35, blocking execution', de: 'Setup-Fähigkeit bei 0.35, blockiert Ausführung' },
        result: { en: 'C₂ improved from 0.35 → 0.78 in 10 weeks', de: 'C₂ verbessert von 0.35 → 0.78 in 10 Wochen' },
        roi: '194x',
      },
    },
    {
      id: 'stage',
      title: { en: 'Model 2: Stage Transformation', de: 'Modell 2: Stage-Transformation' },
      subtitle: { en: 'Transition from one scaling stage to the next', de: 'Übergang von einer Skalierungsstufe zur nächsten' },
      icon: Layers,
      color: 'text-blue-400',
      bgColor: 'from-blue-500/20 to-cyan-500/20',
      trigger: { en: 'Stage transition needed: A→B, B→C, C→D', de: 'Stage-Übergang nötig: A→B, B→C, C→D' },
      duration: { en: '90-day sprints', de: '90-Tage-Sprints' },
      roi: '100-300x',
      phases: [
        { en: 'Days 1-14: Assessment', de: 'Tag 1-14: Bewertung' },
        { en: 'Days 15-30: Blueprint', de: 'Tag 15-30: Blueprint' },
        { en: 'Days 31-75: Execution', de: 'Tag 31-75: Ausführung' },
        { en: 'Days 76-90: Stabilization', de: 'Tag 76-90: Stabilisierung' },
      ],
      useCases: [
        { en: 'Transitioning Series A → B or B → C', de: 'Übergang Series A → B oder B → C' },
        { en: 'ARR milestone approaching ($1M, $10M, $100M)', de: 'ARR-Meilenstein naht ($1M, $10M, $100M)' },
        { en: 'Need to scale team and operations', de: 'Team und Operations skalieren' },
      ],
      caseStudy: {
        name: 'ScaleUp Inc (Stage A→B)',
        problem: { en: 'Stuck at $2M ARR, unable to scale past founder-led sales', de: 'Steckt bei $2M ARR, kann Founder-led Sales nicht überwinden' },
        result: { en: '$2M → $8M ARR in 90 days', de: '$2M → $8M ARR in 90 Tagen' },
        roi: '267x',
      },
    },
    {
      id: 'level',
      title: { en: 'Model 3: Level Transformation', de: 'Modell 3: Level-Transformation' },
      subtitle: { en: 'Fundamental shift in how the company operates', de: 'Fundamentale Veränderung der Unternehmensoperationen' },
      icon: ArrowUpRight,
      color: 'text-emerald-400',
      bgColor: 'from-emerald-500/20 to-teal-500/20',
      trigger: { en: 'Level shift needed: 1→2 or 2→3', de: 'Level-Shift nötig: 1→2 oder 2→3' },
      duration: { en: '6-24 months', de: '6-24 Monate' },
      roi: '10-300x',
      phases: [
        { en: 'Month 1-2: Foundation', de: 'Monat 1-2: Fundament' },
        { en: 'Month 3-6: Pilot', de: 'Monat 3-6: Pilot' },
        { en: 'Month 7-12: Scale', de: 'Monat 7-12: Skalierung' },
        { en: 'Month 13-24: Optimize', de: 'Monat 13-24: Optimierung' },
      ],
      useCases: [
        { en: 'Moving from Traditional → AI-Powered', de: 'Übergang von Traditional → AI-Powered' },
        { en: 'Moving from AI-Powered → AI-Native', de: 'Übergang von AI-Powered → AI-Native' },
        { en: 'Fundamental organizational redesign', de: 'Fundamentale organisatorische Neugestaltung' },
      ],
      caseStudy: {
        name: 'Enterprise Co (Level 2→3)',
        problem: { en: 'AI-Powered but not achieving AI-Native efficiency', de: 'AI-Powered aber nicht AI-Native Effizienz' },
        result: { en: 'Revenue per employee 3x, coordination costs -70%', de: 'Umsatz pro Mitarbeiter 3x, Koordinationskosten -70%' },
        roi: '129x',
      },
    },
  ];

  const activeModelData = models.find(m => m.id === activeModel)!;

  return (
    <section id="intervention-models" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {language === 'de' ? '3 Interventionsmodelle' : '3 Intervention Models'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {language === 'de' ? 'Wählen Sie Ihre Intervention' : 'Choose Your Intervention'}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {language === 'de' 
              ? 'Drei bewährte Modelle für unterschiedliche Ausgangssituationen – validiert mit n=22 Unternehmen'
              : 'Three proven models for different starting points – validated with n=22 companies'}
          </p>
        </div>

        {/* Model Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {models.map((model) => (
            <button
              key={model.id}
              onClick={() => setActiveModel(model.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-300 ${
                activeModel === model.id
                  ? `bg-gradient-to-r ${model.bgColor} border-${model.color.replace('text-', '')}/50`
                  : 'bg-card/50 border-border hover:border-primary/30'
              }`}
            >
              <model.icon className={`w-5 h-5 ${model.color}`} />
              <div className="text-left">
                <div className="font-semibold">{model.id === 'bottleneck' ? 'Bottleneck' : model.id === 'stage' ? 'Stage' : 'Level'}</div>
                <div className="text-sm text-muted-foreground">{model.roi} ROI</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Model Details */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Model Info */}
          <Card className={`p-8 bg-gradient-to-br ${activeModelData.bgColor} border-border/50`}>
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl bg-background/50 backdrop-blur-sm`}>
                <activeModelData.icon className={`w-8 h-8 ${activeModelData.color}`} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{activeModelData.title[language]}</h3>
                <p className="text-muted-foreground">{activeModelData.subtitle[language]}</p>
              </div>
            </div>

            {/* Trigger & Duration */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-background/30 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <AlertCircle className="w-4 h-4" />
                  {language === 'de' ? 'Trigger' : 'Trigger'}
                </div>
                <div className="font-medium">{activeModelData.trigger[language]}</div>
              </div>
              <div className="p-4 rounded-xl bg-background/30 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <Clock className="w-4 h-4" />
                  {language === 'de' ? 'Dauer' : 'Duration'}
                </div>
                <div className="font-medium">{activeModelData.duration[language]}</div>
              </div>
            </div>

            {/* Phases */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                {language === 'de' ? 'Phasen' : 'Phases'}
              </h4>
              <div className="space-y-2">
                {activeModelData.phases.map((phase, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background/20">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activeModelData.color} bg-background/50`}>
                      {index + 1}
                    </div>
                    <span>{phase[language]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                {language === 'de' ? 'Wann einsetzen' : 'When to use'}
              </h4>
              <ul className="space-y-2">
                {activeModelData.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{useCase[language]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Right: Case Study */}
          <Card className="p-8 bg-card/50 border-border/50">
            <div className="flex items-center gap-2 text-primary mb-6">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">{language === 'de' ? 'Fallstudie' : 'Case Study'}</span>
            </div>

            <h4 className="text-xl font-bold mb-4">{activeModelData.caseStudy.name}</h4>

            <div className="space-y-6">
              {/* Problem */}
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <div className="text-sm text-red-400 mb-2">{language === 'de' ? 'Problem' : 'Problem'}</div>
                <p className="text-foreground">{activeModelData.caseStudy.problem[language]}</p>
              </div>

              {/* Result */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="text-sm text-emerald-400 mb-2">{language === 'de' ? 'Ergebnis' : 'Result'}</div>
                <p className="text-foreground">{activeModelData.caseStudy.result[language]}</p>
              </div>

              {/* ROI */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center">
                <div className="text-sm text-muted-foreground mb-2">Return on Investment</div>
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {activeModelData.caseStudy.roi}
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#booking"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <Zap className="w-5 h-5" />
              {language === 'de' ? 'Passende Intervention finden' : 'Find Your Intervention'}
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InterventionModels;
