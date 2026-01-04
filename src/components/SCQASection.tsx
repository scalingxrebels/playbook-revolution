import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, TrendingDown, Users, DollarSign, Clock, Target, Zap, Shield, ArrowRight } from 'lucide-react';

const SCQASection = () => {
  const { language } = useLanguage();

  const competitorComparison = [
    { company: 'Midjourney', arr: '$200M', employees: '11', arrPerEmp: '$18.2M', timeToValue: '2 years', founded: '2021' },
    { company: 'Cursor', arr: '$100M (est.)', employees: '30', arrPerEmp: '$3.3M', timeToValue: '1.5 years', founded: '2023' },
    { company: 'Perplexity', arr: '$100M (est.)', employees: '80', arrPerEmp: '$1.25M', timeToValue: '2 years', founded: '2022' },
    { company: 'Harvey', arr: '$100M (est.)', employees: '120', arrPerEmp: '$833k', timeToValue: '2 years', founded: '2022' },
    { company: language === 'de' ? 'Dein Unternehmen' : 'Your Company', arr: '€30M', employees: '150', arrPerEmp: '€200k', timeToValue: '5 years → 10', founded: '2019', isUser: true },
  ];

  const deterioratingMetrics = [
    { metric: 'CAC', twoYearsAgo: '€3,000', today: '€8,000', trend: '+167%', icon: DollarSign },
    { metric: 'LTV/CAC', twoYearsAgo: '5.0x', today: '2.5x', trend: '-50%', icon: TrendingDown },
    { metric: 'Growth Rate', twoYearsAgo: '150% YoY', today: '80% YoY', trend: '-47%', icon: TrendingDown },
    { metric: 'Rule of 40', twoYearsAgo: '65', today: '40', trend: '-38%', icon: TrendingDown },
    { metric: 'Coordination Cost', twoYearsAgo: '20% of time', today: '50% of time', trend: '+150%', icon: Clock },
    { metric: 'Decision Velocity', twoYearsAgo: '2 weeks', today: '8 weeks', trend: '+300%', icon: Clock },
  ];

  const organizationalComplexity = [
    { dimension: 'Org Layers', twoYearsAgo: '3', today: '5', impact: 'Decision Velocity -60%' },
    { dimension: 'Tools', twoYearsAgo: '10', today: '25', impact: 'Integration Cost +150%' },
    { dimension: 'Meetings/Week', twoYearsAgo: '20', today: '50', impact: 'Coordination Cost +150%' },
    { dimension: 'Processes', twoYearsAgo: '5', today: '20', impact: 'Execution Speed -40%' },
    { dimension: 'Handoffs', twoYearsAgo: '2', today: '5', impact: 'Time-to-Market +150%' },
  ];

  const boardQuestions = [
    language === 'de' ? '"Warum skalieren AI-native Wettbewerber 10x schneller?"' : '"Why are AI-native competitors scaling 10x faster?"',
    language === 'de' ? '"Warum steigt unser CAC und sinkt LTV/CAC?"' : '"Why is our CAC rising and LTV/CAC declining?"',
    language === 'de' ? '"Warum sind wir so langsam? Warum dauert alles 8 Wochen?"' : '"Why are we so slow? Why does everything take 8 weeks?"',
    language === 'de' ? '"Was ist unsere AI-Strategie? Sind wir AI-native?"' : '"What\'s our AI strategy? Are we AI-native?"',
    language === 'de' ? '"Du hast 6-12 Monate. Was ist der Plan?"' : '"You have 6-12 months. What\'s the plan?"',
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-destructive/10 text-destructive text-sm font-medium rounded-full mb-4">
            SCQA FRAMEWORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'de' ? 'Das Problem: Situation, Komplikation, Frage' : 'The Problem: Situation, Complication, Question'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Du bist Series B/C, wächst 80-150% YoY. Aber AI-native Wettbewerber skalieren 10-30x schneller.'
              : 'You\'re Series B/C, growing 80-150% YoY. But AI-native competitors are scaling 10-30x faster.'}
          </p>
        </div>

        {/* Situation */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center">S</span>
            <h3 className="text-2xl font-bold">{language === 'de' ? 'SITUATION' : 'SITUATION'}</h3>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { label: 'ARR', value: '€10M-€50M' },
              { label: 'Team Size', value: '50-200 people' },
              { label: 'Growth Rate', value: '80-150% YoY' },
              { label: 'Funding', value: '€10M-€50M raised' },
              { label: 'Status', value: 'PMF achieved, funded, scaling' },
            ].map((item) => (
              <div key={item.label} className="bg-card p-4 rounded-xl border border-border text-center">
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="font-bold text-primary">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-4">
            {language === 'de' 
              ? 'Du machst vieles richtig. Revenue wächst. Du hast Kapital. Produkt funktioniert.' 
              : 'You\'re doing many things right. Revenue is growing. You have capital. Product works.'}
          </p>
        </div>

        {/* Complication - AI-Native Competitors */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 rounded-full bg-destructive/20 text-destructive font-bold flex items-center justify-center">C</span>
            <h3 className="text-2xl font-bold">{language === 'de' ? 'KOMPLIKATION' : 'COMPLICATION'}</h3>
          </div>
          
          {/* Pattern 1: Competitor Comparison */}
          <div className="bg-card p-6 rounded-2xl border border-destructive/30 mb-6">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              Pattern 1: AI-native {language === 'de' ? 'Wettbewerber skalieren 10-30x schneller' : 'Competitors Scale 10-30x Faster'}
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-2">Company</th>
                    <th className="text-left p-2">ARR</th>
                    <th className="text-left p-2">Employees</th>
                    <th className="text-left p-2">ARR/Employee</th>
                    <th className="text-left p-2">Time to €100M</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorComparison.map((row) => (
                    <tr 
                      key={row.company} 
                      className={`border-b border-border/50 ${row.isUser ? 'bg-destructive/5' : ''}`}
                    >
                      <td className="p-2 font-medium">{row.company}</td>
                      <td className="p-2">{row.arr}</td>
                      <td className="p-2">{row.employees}</td>
                      <td className={`p-2 font-bold ${row.isUser ? 'text-destructive' : 'text-accent'}`}>{row.arrPerEmp}</td>
                      <td className="p-2">{row.timeToValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-destructive/10 rounded-lg">
              <p className="text-sm font-medium">
                {language === 'de' ? 'Die Lücke:' : 'The Gap:'}
              </p>
              <ul className="mt-2 text-sm space-y-1">
                <li>• ARR/Employee: {language === 'de' ? 'Sie sind 2.5-90x effizienter' : 'They\'re 2.5-90x more efficient'} (€200k vs. €500k-€18M)</li>
                <li>• Time to €100M: {language === 'de' ? 'Sie sind 2-4x schneller' : 'They\'re 2-4x faster'} (10 years vs. 2.5-5 years)</li>
              </ul>
            </div>
          </div>

          {/* Pattern 2: Deteriorating Metrics */}
          <div className="bg-card p-6 rounded-2xl border border-destructive/30 mb-6">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-destructive" />
              Pattern 2: {language === 'de' ? 'Deine Metriken verschlechtern sich' : 'Your Metrics Are Deteriorating'}
            </h4>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
              {deterioratingMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.metric} className="bg-destructive/5 p-3 rounded-lg border border-destructive/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-destructive" />
                      <span className="text-xs font-medium">{metric.metric}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{metric.twoYearsAgo}</span>
                      <ArrowRight className="w-3 h-3" />
                      <span>{metric.today}</span>
                    </div>
                    <p className="text-destructive font-bold text-sm mt-1">❌ {metric.trend}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pattern 3: Organizational Complexity */}
          <div className="bg-card p-6 rounded-2xl border border-destructive/30 mb-6">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-destructive" />
              Pattern 3: {language === 'de' ? 'Organisationale Komplexität explodiert' : 'Organizational Complexity Is Exploding'}
            </h4>
            <div className="grid md:grid-cols-5 gap-3">
              {organizationalComplexity.map((item) => (
                <div key={item.dimension} className="bg-secondary/50 p-3 rounded-lg text-center">
                  <p className="text-xs text-muted-foreground mb-1">{item.dimension}</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm">{item.twoYearsAgo}</span>
                    <ArrowRight className="w-3 h-3 text-destructive" />
                    <span className="text-sm font-bold">{item.today}</span>
                  </div>
                  <p className="text-xs text-destructive mt-1">❌ {item.impact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pattern 4: Board Questions */}
          <div className="bg-card p-6 rounded-2xl border border-destructive/30">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-destructive" />
              Pattern 4: {language === 'de' ? 'Board stellt harte Fragen' : 'Board Is Asking Hard Questions'}
            </h4>
            <div className="space-y-2">
              {boardQuestions.map((q, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                  <span className="text-destructive font-bold">{idx + 1}.</span>
                  <p className="text-sm italic">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-500 font-bold flex items-center justify-center">Q</span>
            <h3 className="text-2xl font-bold">QUESTION</h3>
          </div>
          <div className="bg-yellow-500/10 p-8 rounded-2xl border border-yellow-500/30 text-center">
            <p className="text-2xl font-bold">
              {language === 'de' 
                ? '"Was machen AI-native Companies anders, um 10-30x schneller zu skalieren – und was können wir tun, um 10x bessere Ergebnisse zu erzielen?"' 
                : '"What do AI-native companies do differently to scale 10-30x faster – and what can we do to achieve 10x better results?"'}
            </p>
          </div>
        </div>

        {/* Answer */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 rounded-full bg-accent/20 text-accent font-bold flex items-center justify-center">A</span>
            <h3 className="text-2xl font-bold">ANSWER</h3>
          </div>
          <div className="bg-accent/10 p-8 rounded-2xl border border-accent/30">
            <p className="text-xl font-bold text-center mb-6">
              {language === 'de' 
                ? 'AI-native Companies nutzen das AI-Native Scaling Playbook – fundamental anders als dein traditionelles Playbook.' 
                : 'AI-native companies use the AI-Native Scaling Playbook – fundamentally different from your traditional playbook.'}
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: Target, title: '4 Capabilities', desc: 'Strategy, Setup, Execution, Operationalization' },
                { icon: Zap, title: '8 Dimensions', desc: 'GTM, Product, Operations, Finance, Talent...' },
                { icon: Shield, title: '3 Intervention Models', desc: '8-12 weeks, 90 days, 6-24 months' },
                { icon: Zap, title: '1 AI Multiplier', desc: 'θ_index 0.8-1.0' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-card p-4 rounded-xl border border-border text-center">
                    <Icon className="w-8 h-8 text-accent mx-auto mb-2" />
                    <p className="font-bold text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SCQASection;
