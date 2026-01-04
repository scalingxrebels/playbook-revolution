import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Rocket, TrendingUp, Zap, Crown,
  CheckCircle, ArrowRight
} from 'lucide-react';

const ScalingStages = () => {
  const { language } = useLanguage();

  const stages = [
    {
      id: 'ignition',
      name: { de: 'Ignition', en: 'Ignition' },
      range: '€0-3M ARR',
      focus: { de: 'Product-Market Fit', en: 'Product-Market Fit' },
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      characteristics: [
        { de: 'Produkt funktioniert', en: 'Product works' },
        { de: 'Erste zahlende Kunden', en: 'First paying customers' },
        { de: 'Founder-led Sales', en: 'Founder-led sales' },
      ],
      bottleneck: { de: 'C₁ Strategy (ICP Clarity)', en: 'C₁ Strategy (ICP Clarity)' },
      timeframe: { de: '12-24 Monate', en: '12-24 months' },
    },
    {
      id: 'acceleration',
      name: { de: 'Acceleration', en: 'Acceleration' },
      range: '€3-10M ARR',
      focus: { de: 'Go-to-Market Fit', en: 'Go-to-Market Fit' },
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      characteristics: [
        { de: 'Repeatables Sales Motion', en: 'Repeatable sales motion' },
        { de: 'Erstes Sales-Team', en: 'First sales team' },
        { de: 'Process Documentation', en: 'Process documentation' },
      ],
      bottleneck: { de: 'C₂ Setup (Org Structure)', en: 'C₂ Setup (Org Structure)' },
      timeframe: { de: '12-18 Monate', en: '12-18 months' },
    },
    {
      id: 'velocity',
      name: { de: 'Velocity', en: 'Velocity' },
      range: '€10-50M ARR',
      focus: { de: 'Scaling Execution', en: 'Scaling Execution' },
      icon: Zap,
      color: 'from-orange-500 to-amber-500',
      characteristics: [
        { de: 'Multi-Channel GTM', en: 'Multi-channel GTM' },
        { de: 'Department Leads', en: 'Department leads' },
        { de: 'Automation & AI', en: 'Automation & AI' },
      ],
      bottleneck: { de: 'C₃ Execution (Speed & Quality)', en: 'C₃ Execution (Speed & Quality)' },
      timeframe: { de: '18-36 Monate', en: '18-36 months' },
    },
    {
      id: 'dominance',
      name: { de: 'Dominance', en: 'Dominance' },
      range: '€50M+ ARR',
      focus: { de: 'Market Leadership', en: 'Market Leadership' },
      icon: Crown,
      color: 'from-emerald-500 to-teal-500',
      characteristics: [
        { de: 'Category Definition', en: 'Category definition' },
        { de: 'AI-Native Operations', en: 'AI-Native operations' },
        { de: 'Superlinear Returns', en: 'Superlinear returns' },
      ],
      bottleneck: { de: 'C₄ Operationalization (Scaling Systems)', en: 'C₄ Operationalization (Scaling Systems)' },
      timeframe: { de: '24-48 Monate', en: '24-48 months' },
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {language === 'de' ? 'Die 4 Scaling Stages' : 'The 4 Scaling Stages'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {language === 'de' ? 'Von €0 zu €100M+' : 'From €0 to €100M+'}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Jede Stage hat einen dominanten Bottleneck. Erkenne deinen und beschleunige.'
              : 'Each stage has a dominant bottleneck. Identify yours and accelerate.'}
          </p>
        </div>

        {/* Stages Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 to-emerald-500 hidden lg:block" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((stage, index) => {
              const StageIcon = stage.icon;
              return (
                <div key={stage.id} className="relative">
                  {/* Connector dot */}
                  <div className={`hidden lg:block absolute top-[92px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${stage.color} border-4 border-background z-10`} />
                  
                  <div className="p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 h-full">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${stage.color}`}>
                        <StageIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">{language === 'de' ? 'Stage' : 'Stage'} {index + 1}</div>
                        <h3 className="font-bold text-lg">{stage.name[language]}</h3>
                      </div>
                    </div>

                    {/* ARR Range */}
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${stage.color} bg-opacity-20 mb-4`}>
                      {stage.range}
                    </div>

                    {/* Focus */}
                    <div className="mb-4">
                      <div className="text-xs text-muted-foreground mb-1">{language === 'de' ? 'Fokus' : 'Focus'}</div>
                      <div className="font-medium">{stage.focus[language]}</div>
                    </div>

                    {/* Characteristics */}
                    <div className="space-y-2 mb-4">
                      {stage.characteristics.map((char, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{char[language]}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottleneck */}
                    <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20">
                      <div className="text-xs text-destructive mb-1">{language === 'de' ? 'Typischer Bottleneck' : 'Typical Bottleneck'}</div>
                      <div className="text-sm font-medium">{stage.bottleneck[language]}</div>
                    </div>

                    {/* Timeframe */}
                    <div className="mt-4 text-center text-sm text-muted-foreground">
                      {language === 'de' ? 'Typisch:' : 'Typical:'} {stage.timeframe[language]}
                    </div>
                  </div>

                  {/* Arrow to next */}
                  {index < stages.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* AI-Native Acceleration */}
        <div className="mt-16 max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {language === 'de' ? 'AI-Native Beschleunigung' : 'AI-Native Acceleration'}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === 'de'
                  ? 'Level 3 Unternehmen durchlaufen alle 4 Stages in 18-24 Monaten. Level 1 Unternehmen brauchen 5-7 Jahre.'
                  : 'Level 3 companies complete all 4 stages in 18-24 months. Level 1 companies take 5-7 years.'}
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Midjourney: €0 → €500M in 24 Monaten</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Cursor: €0 → €100M in 12 Monaten</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Perplexity: €0 → €200M in 24 Monaten</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                4-10x
              </div>
              <p className="text-muted-foreground">
                {language === 'de' ? 'Schnellere Stage-Transition' : 'Faster stage transition'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScalingStages;
