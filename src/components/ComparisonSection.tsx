import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { 
  TrendingDown, 
  TrendingUp, 
  Zap, 
  Users, 
  Clock, 
  DollarSign,
  AlertTriangle,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const { t } = useLanguage();

  const comparisons = [
    {
      mode: 'traditional',
      title: t('comparison.traditional.title'),
      description: t('comparison.traditional.desc'),
      icon: <Users className="w-6 h-6" />,
      color: 'muted-foreground',
      bgColor: 'bg-muted/30',
      borderColor: 'border-muted-foreground/20',
      metrics: [
        { label: 'Growth Pattern', value: 'Linear', icon: <TrendingDown className="w-4 h-4" /> },
        { label: 'Coordination', value: 'O(n²)', icon: <AlertTriangle className="w-4 h-4 text-destructive" /> },
        { label: 'Time to €100M', value: '7-10 years', icon: <Clock className="w-4 h-4" /> },
        { label: 'ARR/Employee', value: '€200K', icon: <DollarSign className="w-4 h-4" /> },
      ],
      examples: ['Linear hiring', 'Manual processes', 'Traditional tools'],
    },
    {
      mode: 'aiPowered',
      title: t('comparison.aiPowered.title'),
      description: t('comparison.aiPowered.desc'),
      icon: <Zap className="w-6 h-6" />,
      color: 'primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/30',
      metrics: [
        { label: 'Growth Pattern', value: 'Accelerated', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'Coordination', value: 'O(n log n)', icon: <CheckCircle2 className="w-4 h-4 text-primary" /> },
        { label: 'Time to €100M', value: '3-5 years', icon: <Clock className="w-4 h-4" /> },
        { label: 'ARR/Employee', value: '€400-600K', icon: <DollarSign className="w-4 h-4" /> },
      ],
      examples: ['AI-assisted workflows', 'Automated tasks', 'Smart analytics'],
    },
    {
      mode: 'aiNative',
      title: t('comparison.aiNative.title'),
      description: t('comparison.aiNative.desc'),
      icon: <Sparkles className="w-6 h-6" />,
      color: 'accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/30',
      metrics: [
        { label: 'Growth Pattern', value: 'Superlinear', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'Coordination', value: 'O(1)', icon: <CheckCircle2 className="w-4 h-4 text-accent" /> },
        { label: 'Time to €100M', value: '18-30 months', icon: <Clock className="w-4 h-4" /> },
        { label: 'ARR/Employee', value: '€1-5M', icon: <DollarSign className="w-4 h-4" /> },
      ],
      examples: ['Midjourney', 'Cursor', 'Perplexity'],
    },
  ];

  return (
    <section id="frameworks" className="py-20 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('comparison.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compare three fundamentally different approaches to scaling your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {comparisons.map((comp, index) => (
            <Card 
              key={comp.mode}
              className={`relative p-6 ${comp.bgColor} border ${comp.borderColor} transition-all duration-500 hover:scale-[1.02] hover:shadow-lg group overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect for AI-Native */}
              {comp.mode === 'aiNative' && (
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${comp.bgColor} text-${comp.color}`}>
                    {comp.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{comp.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  {comp.description}
                </p>

                {/* Metrics */}
                <div className="space-y-3 mb-6">
                  {comp.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        {metric.icon}
                        <span>{metric.label}</span>
                      </div>
                      <span className="font-semibold text-sm">{metric.value}</span>
                    </div>
                  ))}
                </div>

                {/* Examples */}
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Examples</p>
                  <div className="flex flex-wrap gap-2">
                    {comp.examples.map((example, i) => (
                      <span 
                        key={i}
                        className={`text-xs px-2 py-1 rounded-full ${comp.bgColor} border ${comp.borderColor}`}
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
