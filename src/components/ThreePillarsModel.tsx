import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Rocket, Settings, Shield, ArrowRight, Zap, Target, 
  TrendingUp, Building2, Brain, CheckCircle2
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ThreePillarsModel: React.FC = () => {
  const { language } = useLanguage();

  const pillars = [
    {
      id: 'growth-engines',
      name: { en: 'Growth Engines', de: 'Growth Engines' },
      function: { en: 'Value Generation', de: 'Value Generation' },
      question: { en: 'What generates value?', de: 'Was generiert Wert?' },
      icon: Rocket,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      capabilities: ['C₁ Strategy¹·⁵', 'C₃ Execution¹·⁵'],
      description: {
        en: 'Mechanisms that directly generate Revenue, Product Value, or Customer Retention',
        de: 'Mechanismen, die direkt Revenue, Product Value oder Customer Retention generieren'
      },
      examples: [
        { dim: 'GTM/Revenue', item: 'Repeatable Sales Motion, PLG Loops, Viral Mechanisms' },
        { dim: 'Product', item: 'Product-Market Fit Loop, Usage Analytics, Network Effects' },
        { dim: 'Customer Success', item: 'Retention Loops, Expansion Playbooks, Advocacy Programs' },
      ],
      aiMultiplier: '+20-40% Sales Velocity, 10x Feature Velocity'
    },
    {
      id: 'operating-systems',
      name: { en: 'Operating Systems', de: 'Operating Systems' },
      function: { en: 'Value Enablement', de: 'Value Enablement' },
      question: { en: 'What enables scaling?', de: 'Was ermöglicht Skalierung?' },
      icon: Settings,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      capabilities: ['C₂ Setup', 'C₄ Operationalization'],
      description: {
        en: 'Infrastructure, processes, systems that make Growth Engines scalable',
        de: 'Infrastruktur, Prozesse, Systeme, die Growth Engines skalierbar machen'
      },
      examples: [
        { dim: 'GTM/Revenue', item: 'CRM/RevOps, Sales Enablement, Outbound/Inbound Processes' },
        { dim: 'Product', item: 'CI/CD Pipelines, Release Management, Feature Flags' },
        { dim: 'Operations', item: 'Process Standardization, Workflow Automation, SOP Libraries' },
      ],
      aiMultiplier: '+30% RevOps Efficiency, 5x Deployment Frequency'
    },
    {
      id: 'board-governance',
      name: { en: 'Board & Governance', de: 'Board & Governance' },
      function: { en: 'Value Control', de: 'Value Control' },
      question: { en: 'What steers & controls?', de: 'Was steuert & kontrolliert?' },
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      capabilities: ['Oversight', 'Risk Management'],
      description: {
        en: 'Oversight, Risk Management, Compliance that steers and secures growth',
        de: 'Oversight, Risk Management, Compliance, die Wachstum steuern und absichern'
      },
      examples: [
        { dim: 'Strategy', item: 'Board Oversight, Competitive Monitoring, Scenario Planning' },
        { dim: 'Finance', item: 'Financial Governance, Audit, Investor Relations' },
        { dim: 'Governance', item: 'Risk Assessment, Compliance Frameworks, Board Intelligence' },
      ],
      aiMultiplier: '50% Risk Reduction, 2x Strategic Agility'
    }
  ];

  return (
    <section id="three-pillars" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            SST Methodology v1.0 • Die Drei Ebenen
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Growth Engines × Scaling Systems × AI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de' 
              ? 'Drei orthogonale Hebel, die in ALLEN 8 Dimensionen existieren – für systematische Hypergrowth-Transformation'
              : 'Three orthogonal levers that exist in ALL 8 dimensions – for systematic hypergrowth transformation'}
          </p>
        </div>

        {/* Formula Display */}
        <Card className="p-8 mb-12 glass border-primary/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm text-muted-foreground mb-2">PRACTITIONER FORMULA</p>
              <div className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Growth Engines</span>
                <span className="mx-2 text-muted-foreground">×</span>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Scaling Systems</span>
                <span className="mx-2 text-muted-foreground">×</span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">AI</span>
                <span className="mx-2 text-muted-foreground">=</span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Hypergrowth</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Vereinfacht: Scaling Systems = Operating Systems + Board & Governance
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground mb-2">TECHNICAL FORMULA</p>
              <code className="text-lg font-mono block">
                S = E × (C₁<sup>1.5</sup> × C₂ × C₃<sup>1.5</sup> × C₄) × θ_index
              </code>
              <div className="flex flex-wrap gap-2 mt-4 text-xs">
                <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400">Growth Engines ≈ C₁ + C₃</span>
                <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400">Scaling Systems ≈ C₂ + C₄</span>
                <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-400">AI = θ_index</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, index) => {
            const PillarIcon = pillar.icon;
            return (
              <Card 
                key={pillar.id}
                className={`p-6 glass ${pillar.borderColor} hover:border-opacity-50 transition-all duration-300`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${pillar.color} text-white`}>
                    <PillarIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{pillar.name[language]}</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">{pillar.function[language]}</Badge>
                    </div>
                  </div>
                </div>

                {/* Question */}
                <div className={`p-3 rounded-lg ${pillar.bgColor} mb-6`}>
                  <p className="text-sm font-medium italic">"{pillar.question[language]}"</p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6">
                  {pillar.description[language]}
                </p>

                {/* Capability Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pillar.capabilities.map((cap, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {cap}
                    </Badge>
                  ))}
                </div>

                {/* Examples */}
                <div className="space-y-3 mb-6">
                  {pillar.examples.map((ex, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">{ex.dim}:</span>{' '}
                        <span className="text-muted-foreground">{ex.item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI Multiplier */}
                <div className={`p-3 rounded-lg ${pillar.bgColor} border ${pillar.borderColor}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium">AI Multiplier</span>
                  </div>
                  <p className="text-sm font-bold">{pillar.aiMultiplier}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Key Insight */}
        <Card className="p-8 glass border-accent/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-accent" />
                <span className="font-bold">Key Insight: Orthogonale Perspektiven</span>
              </div>
              <p className="text-muted-foreground mb-4">
                {language === 'de'
                  ? 'Diese drei Ebenen sind orthogonal (unabhängig). Sie sind keine "Dimensionen" sondern "Perspektiven" auf jede der 8 Dimensionen.'
                  : 'These three levels are orthogonal (independent). They are not "dimensions" but "perspectives" on each of the 8 dimensions.'}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Growth Engines, Operating Systems, Board & Governance exist in ALL 8 Dimensions</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>They can be optimized independently</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Each level has own strategies, metrics, playbooks</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                    8 × 3
                  </div>
                  <p className="text-muted-foreground">Dimensions × Perspectives</p>
                  <p className="text-2xl font-bold mt-2">= 24 Optimization Levers</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            {language === 'de' 
              ? 'Welche Ebene hat bei Ihnen das größte Verbesserungspotenzial?'
              : 'Which level has the greatest improvement potential for you?'}
          </p>
          <a
            href="#theta-assessment"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
          >
            <Target className="w-5 h-5" />
            Jetzt θ_index Assessment starten
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThreePillarsModel;
