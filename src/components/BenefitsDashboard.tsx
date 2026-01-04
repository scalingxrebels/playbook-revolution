import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingUp, DollarSign, Zap, Users, Brain, Shield, Target } from 'lucide-react';
import { useState } from 'react';

interface BenefitCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  benefits: Benefit[];
}

interface Benefit {
  metric: string;
  traditional: string;
  aiNative: string;
  improvement: string;
  source: string;
}

const BenefitsDashboard = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('growth');

  const categories: BenefitCategory[] = [
    {
      id: 'growth',
      name: language === 'de' ? 'Growth & Revenue' : 'Growth & Revenue',
      icon: TrendingUp,
      color: 'primary',
      benefits: [
        { metric: 'Time to €100M ARR', traditional: '5-7 Jahre', aiNative: '18-36 Monate', improvement: '3-5x schneller', source: 'ANST v4.5.3' },
        { metric: 'YoY ARR Growth', traditional: '30-50%', aiNative: '100-150%', improvement: '2-3x höher', source: 'SST v4.5.1' },
        { metric: 'ARR/Employee', traditional: '€150k-€200k', aiNative: '€750k-€5M', improvement: '5-25x höher', source: 'ANST v4.5.3' },
        { metric: 'Scaling Velocity (S)', traditional: 'Baseline', aiNative: '2-3x schneller', improvement: '2-3x', source: 'SST v4.5.1' },
      ],
    },
    {
      id: 'economics',
      name: 'Unit Economics',
      icon: DollarSign,
      color: 'accent',
      benefits: [
        { metric: 'CAC', traditional: '€10k-€15k', aiNative: '€3k-€5k', improvement: '-60-75%', source: 'Dokument 5a-1' },
        { metric: 'LTV', traditional: '€30k-€40k', aiNative: '€80k-€120k', improvement: '+167-300%', source: 'Dokument 5a-1' },
        { metric: 'LTV/CAC Ratio', traditional: '2-3x', aiNative: '5-10x', improvement: '2-3x besser', source: 'Services v1.2' },
        { metric: 'CAC Payback Period', traditional: '18-36 Monate', aiNative: '6-12 Monate', improvement: '-50-70%', source: 'Dokument 5a-1' },
        { metric: 'Rule of 40', traditional: '20-40', aiNative: '60-100+', improvement: '2-3x höher', source: 'Marktanalyse v2.1' },
        { metric: 'Gross Margin', traditional: '70-80%', aiNative: '85-95%', improvement: '+10-20pp', source: 'Case Studies 5a-3' },
      ],
    },
    {
      id: 'efficiency',
      name: language === 'de' ? 'Operational Efficiency' : 'Operational Efficiency',
      icon: Zap,
      color: 'yellow',
      benefits: [
        { metric: 'Developer Productivity', traditional: 'Baseline', aiNative: '3-5x schneller', improvement: '3-5x', source: 'AMF v4.5.1' },
        { metric: 'Feature Velocity', traditional: 'Quarterly', aiNative: 'Weekly', improvement: '10x', source: 'Methodology v1.0' },
        { metric: 'Time to Market', traditional: 'Monate', aiNative: 'Wochen', improvement: '4-8x', source: 'Dokument 5b-3' },
        { metric: 'Decision Velocity', traditional: '2-4 Wochen', aiNative: '2-3 Tage', improvement: '5-10x', source: 'ANST v4.5.3' },
        { metric: 'Learning Velocity', traditional: 'Quarterly', aiNative: 'Real-time', improvement: '60x', source: 'ANST v3.0' },
      ],
    },
    {
      id: 'sales',
      name: 'Sales & GTM',
      icon: Target,
      color: 'green',
      benefits: [
        { metric: 'Sales Velocity', traditional: 'Baseline', aiNative: '+20-40%', improvement: '20-40% schneller', source: 'Phase 4 Research' },
        { metric: 'Conversion Rate', traditional: '2-5%', aiNative: '10-20%', improvement: '+200-400%', source: 'Dokument 5a-3' },
        { metric: 'SDR Productivity', traditional: '30 meetings/mo', aiNative: '90 meetings/mo', improvement: '+200%', source: 'Dokument 5a-2' },
      ],
    },
    {
      id: 'team',
      name: language === 'de' ? 'Team & Talent' : 'Team & Talent',
      icon: Users,
      color: 'blue',
      benefits: [
        { metric: 'Team Efficiency', traditional: '€150k ARR/Person', aiNative: '€750k+ ARR/Person', improvement: '5x+', source: 'ANST v4.5.3' },
        { metric: 'Onboarding Time', traditional: '3-6 Monate', aiNative: '2-4 Wochen', improvement: '4-6x schneller', source: 'Operating Systems' },
        { metric: 'Expert Leverage', traditional: '1:5 Ratio', aiNative: '1:50+ Ratio', improvement: '10x+', source: 'Squad Model' },
      ],
    },
    {
      id: 'ai',
      name: 'AI Maturity',
      icon: Brain,
      color: 'purple',
      benefits: [
        { metric: 'θ_index Score', traditional: '0.0-0.3', aiNative: '0.7-1.0', improvement: '+130-230%', source: 'θ_index v2.0' },
        { metric: 'AI Coverage', traditional: '10-20%', aiNative: '70-90%', improvement: '+250-350%', source: 'AMF v4.5.1' },
        { metric: 'Automation Rate', traditional: '20-30%', aiNative: '70-90%', improvement: '+133-200%', source: 'Operating Systems' },
      ],
    },
    {
      id: 'governance',
      name: 'Governance',
      icon: Shield,
      color: 'orange',
      benefits: [
        { metric: 'Board Reporting', traditional: 'Monthly Manual', aiNative: 'Real-time Auto', improvement: '30x', source: 'Governance v1.0' },
        { metric: 'Risk Detection', traditional: 'Reactive', aiNative: 'Predictive', improvement: 'Proactive', source: 'Board Governance' },
        { metric: 'Due Diligence Time', traditional: '6-8 Wochen', aiNative: '1-2 Wochen', improvement: '4-6x schneller', source: 'DD Accelerator' },
      ],
    },
  ];

  const activeData = categories.find(c => c.id === activeCategory);

  const getColorClass = (color: string, type: 'bg' | 'text' | 'border') => {
    const colors: Record<string, Record<string, string>> = {
      primary: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary' },
      accent: { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent' },
      yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-500', border: 'border-yellow-500' },
      green: { bg: 'bg-green-500/10', text: 'text-green-500', border: 'border-green-500' },
      blue: { bg: 'bg-blue-500/10', text: 'text-blue-500', border: 'border-blue-500' },
      purple: { bg: 'bg-purple-500/10', text: 'text-purple-500', border: 'border-purple-500' },
      orange: { bg: 'bg-orange-500/10', text: 'text-orange-500', border: 'border-orange-500' },
    };
    return colors[color]?.[type] || colors.primary[type];
  };

  const top10Benefits = [
    { rank: 1, metric: '3-5x Scaling Velocity', impact: '€100M ARR in 18-36 Monate statt 5-7 Jahre' },
    { rank: 2, metric: '5-25x ARR/Employee', impact: '€750k-€5M vs. €150k-€200k' },
    { rank: 3, metric: '-60-75% CAC', impact: '€3k-€5k vs. €10k-€15k' },
    { rank: 4, metric: '2-3x LTV/CAC', impact: '5-10x vs. 2-3x' },
    { rank: 5, metric: '10x Feature Velocity', impact: 'Weekly vs. Quarterly' },
    { rank: 6, metric: '5-10x Decision Velocity', impact: '2-3 Tage vs. 2-4 Wochen' },
    { rank: 7, metric: '3-5x Developer Productivity', impact: 'AI-augmented Development' },
    { rank: 8, metric: '+200% SDR Productivity', impact: '90 vs. 30 meetings/month' },
    { rank: 9, metric: 'Rule of 40 → 60-100+', impact: '2-3x über Industry Standard' },
    { rank: 10, metric: '4-6x Onboarding Speed', impact: '2-4 Wochen vs. 3-6 Monate' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            TOP 10 BENEFITS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'de' ? 'Quantifizierter Impact' : 'Quantified Impact'}
            <span className="text-gradient block mt-2">
              {language === 'de' ? '7 Kategorien. 32+ Benefits.' : '7 Categories. 32+ Benefits.'}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Basierend auf 22+ AI-native Companies. Empirisch validiert. Konkrete Zahlen statt vage Versprechen.'
              : 'Based on 22+ AI-native companies. Empirically validated. Concrete numbers, not vague promises.'}
          </p>
        </div>

        {/* Top 10 Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {language === 'de' ? 'Die Top 10 Benefits' : 'The Top 10 Benefits'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {top10Benefits.map((benefit) => (
              <div 
                key={benefit.rank}
                className="bg-card p-4 rounded-xl border border-border hover:border-accent transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-accent/20 text-accent text-sm font-bold flex items-center justify-center">
                    {benefit.rank}
                  </span>
                  <span className="font-bold text-sm group-hover:text-accent transition-colors">{benefit.metric}</span>
                </div>
                <p className="text-xs text-muted-foreground">{benefit.impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                  activeCategory === category.id
                    ? `${getColorClass(category.color, 'bg')} ${getColorClass(category.color, 'border')} ${getColorClass(category.color, 'text')}`
                    : 'bg-card border-border text-muted-foreground hover:border-primary/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Benefits Table */}
        {activeData && (
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className={`p-4 ${getColorClass(activeData.color, 'bg')} border-b border-border`}>
              <div className="flex items-center gap-3">
                <activeData.icon className={`w-6 h-6 ${getColorClass(activeData.color, 'text')}`} />
                <h3 className="text-xl font-bold">{activeData.name}</h3>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="text-left p-4 font-semibold">Metric</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground">Traditional</th>
                    <th className="text-left p-4 font-semibold text-accent">AI-Native</th>
                    <th className="text-left p-4 font-semibold text-primary">Improvement</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground text-xs">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {activeData.benefits.map((benefit, idx) => (
                    <tr key={idx} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                      <td className="p-4 font-medium">{benefit.metric}</td>
                      <td className="p-4 text-muted-foreground">{benefit.traditional}</td>
                      <td className="p-4 text-accent font-medium">{benefit.aiNative}</td>
                      <td className="p-4">
                        <span className={`inline-block px-2 py-1 rounded-full text-sm ${getColorClass(activeData.color, 'bg')} ${getColorClass(activeData.color, 'text')}`}>
                          {benefit.improvement}
                        </span>
                      </td>
                      <td className="p-4 text-xs text-muted-foreground">{benefit.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Real-World Examples */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 rounded-2xl border border-primary/20">
          <h3 className="text-xl font-bold text-center mb-6">
            {language === 'de' ? 'Real-World Proof' : 'Real-World Proof'}
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { company: 'Midjourney', arr: '€492M', employees: '107', arrPerEmp: '€4.6M', time: '18 Monate' },
              { company: 'Cursor', arr: '€100M', employees: '~50', arrPerEmp: '€2M+', time: '12 Monate' },
              { company: 'Harvey', arr: '€100M', employees: '~100', arrPerEmp: '€1M+', time: '12 Monate' },
              { company: 'Jasper', arr: '€125M', employees: '500', arrPerEmp: '€250k', time: '24 Monate' },
            ].map((example) => (
              <div key={example.company} className="bg-card p-4 rounded-xl border border-border text-center">
                <p className="font-bold text-lg">{example.company}</p>
                <p className="text-2xl font-bold text-accent mt-2">{example.arr}</p>
                <p className="text-sm text-muted-foreground">in {example.time}</p>
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground">{example.employees} employees</p>
                  <p className="font-medium text-primary">{example.arrPerEmp}/employee</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsDashboard;
