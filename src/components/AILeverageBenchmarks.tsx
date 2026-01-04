import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingUp, Users, Clock, Zap, Target } from 'lucide-react';

const AILeverageBenchmarks = () => {
  const { language } = useLanguage();

  const benchmarks = [
    {
      company: 'Midjourney',
      leverage: '70:1',
      arrPerEmployee: '€4.6M',
      employees: 107,
      arr: '€492M',
      level: 3,
      insight: { de: 'AI generiert Produkt UND Koordination', en: 'AI generates product AND coordination' },
      color: 'from-purple-500 to-pink-500',
    },
    {
      company: 'Cursor',
      leverage: '13:1',
      arrPerEmployee: '€1.67M',
      employees: 60,
      arr: '€100M',
      level: 3,
      insight: { de: 'AI-Pair-Programming für 10x Dev-Velocity', en: 'AI-Pair-Programming for 10x dev velocity' },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      company: 'Perplexity',
      leverage: '5:1',
      arrPerEmployee: '€2.5M',
      employees: 80,
      arr: '€200M',
      level: 3,
      insight: { de: 'AI ersetzt manuelle Recherche komplett', en: 'AI replaces manual research completely' },
      color: 'from-emerald-500 to-teal-500',
    },
    {
      company: 'Harvey',
      leverage: '4:1',
      arrPerEmployee: '€833K',
      employees: 120,
      arr: '€100M',
      level: 3,
      insight: { de: 'AI für Legal Workflow Automation', en: 'AI for Legal Workflow Automation' },
      color: 'from-orange-500 to-amber-500',
    },
    {
      company: 'Traditional SaaS',
      leverage: '1:1',
      arrPerEmployee: '€200K',
      employees: 150,
      arr: '€30M',
      level: 1,
      insight: { de: 'Baseline: Keine AI-Leverage', en: 'Baseline: No AI leverage' },
      color: 'from-gray-400 to-gray-500',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Leverage Benchmarks</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {language === 'de' ? 'Der AI-Leverage Faktor' : 'The AI-Leverage Factor'}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Wie viel Output pro Mitarbeiter generiert AI? Der Unterschied ist 70x.'
              : 'How much output per employee does AI generate? The difference is 70x.'}
          </p>
        </div>

        {/* Formula */}
        <div className="max-w-2xl mx-auto mb-12 p-6 rounded-2xl bg-card/50 border border-border text-center">
          <div className="text-sm text-muted-foreground mb-2">AI-Leverage Formula</div>
          <code className="text-xl font-mono font-bold">
            AI-Leverage = ARR / (Employees × €200K)
          </code>
          <p className="text-sm text-muted-foreground mt-2">
            {language === 'de'
              ? '€200K = Traditionelle Baseline (Level 1)'
              : '€200K = Traditional baseline (Level 1)'}
          </p>
        </div>

        {/* Benchmarks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {benchmarks.map((b) => (
            <div
              key={b.company}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                b.level === 3 
                  ? 'bg-card/50 border-primary/30 hover:border-primary/50' 
                  : 'bg-muted/20 border-border opacity-60'
              }`}
            >
              {/* Company Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${b.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {b.company.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{b.company}</div>
                  <div className={`text-xs ${b.level === 3 ? 'text-accent' : 'text-muted-foreground'}`}>
                    Level {b.level}
                  </div>
                </div>
              </div>

              {/* Leverage Score */}
              <div className="text-center mb-4">
                <div className={`text-4xl font-bold ${b.level === 3 ? 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent' : 'text-muted-foreground'}`}>
                  {b.leverage}
                </div>
                <div className="text-xs text-muted-foreground">AI-Leverage</div>
              </div>

              {/* Metrics */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ARR</span>
                  <span className="font-medium">{b.arr}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Team</span>
                  <span className="font-medium">{b.employees}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ARR/FTE</span>
                  <span className={`font-bold ${b.level === 3 ? 'text-accent' : ''}`}>{b.arrPerEmployee}</span>
                </div>
              </div>

              {/* Insight */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground">{b.insight[language]}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span className="text-3xl font-bold">70x</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {language === 'de' ? 'Max AI-Leverage (Midjourney)' : 'Max AI-Leverage (Midjourney)'}
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-6 h-6 text-primary" />
                <span className="text-3xl font-bold">23x</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {language === 'de' ? 'Durchschnitt Level 3' : 'Average Level 3'}
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-6 h-6 text-primary" />
                <span className="text-3xl font-bold">4.7x</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {language === 'de' ? 'Schnelleres Scaling' : 'Faster Scaling'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILeverageBenchmarks;
