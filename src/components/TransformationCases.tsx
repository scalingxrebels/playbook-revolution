import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  TrendingDown, TrendingUp, AlertTriangle, CheckCircle, 
  DollarSign, Users, Clock, Target, ArrowRight, Zap,
  BarChart3, Gauge, Shield, Sparkles
} from 'lucide-react';

const TransformationCases = () => {
  const { t } = useLanguage();
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      id: 'cac-crisis',
      title: 'CAC-Krise Sprint',
      subtitle: 'Customer Acquisition Cost außer Kontrolle',
      icon: DollarSign,
      color: 'from-red-500 to-orange-500',
      duration: '4 Wochen',
      before: {
        headline: 'Vor der Transformation',
        metrics: [
          { label: 'CAC', value: '€847', trend: 'up', change: '+340% YoY' },
          { label: 'LTV:CAC Ratio', value: '1.2:1', trend: 'down', status: 'critical' },
          { label: 'Payback Period', value: '28 Monate', trend: 'up', status: 'warning' },
          { label: 'Marketing Efficiency', value: '12%', trend: 'down', status: 'critical' },
        ],
        problems: [
          'Jeder neue Kanal verschlechtert Unit Economics',
          'Sales-Team verbrennt Budget ohne Attribution',
          'Board fordert Wachstum, aber jeder € Wachstum = Verlust',
          'Keine Sichtbarkeit auf Channel-Performance',
        ],
        visual: {
          type: 'chart',
          data: [100, 180, 290, 420, 580, 760, 847],
          labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Heute'],
        }
      },
      after: {
        headline: 'Nach AI-Native Sprint',
        metrics: [
          { label: 'CAC', value: '€312', trend: 'down', change: '-63%' },
          { label: 'LTV:CAC Ratio', value: '4.8:1', trend: 'up', status: 'success' },
          { label: 'Payback Period', value: '6 Monate', trend: 'down', status: 'success' },
          { label: 'Marketing Efficiency', value: '47%', trend: 'up', status: 'success' },
        ],
        solutions: [
          'AI-Demand-Sensing erkennt kaufbereite Leads 3x früher',
          'Autonomous Lead Scoring eliminiert 70% unqualifizierte Leads',
          'Cross-Channel AI optimiert Budget-Allokation in Echtzeit',
          'Predictive Attribution zeigt wahren Channel-Value',
        ],
        visual: {
          type: 'chart',
          data: [847, 720, 580, 450, 380, 340, 312],
          labels: ['Start', 'W1', 'W2', 'W3', 'W4', 'W5', 'Heute'],
        }
      },
      testimonial: {
        quote: '"Wir haben in 4 Wochen erreicht, was wir seit 18 Monaten versucht haben."',
        author: 'VP Marketing, B2B SaaS Scale-up',
        result: '€2.1M Einsparung im ersten Quartal'
      }
    },
    {
      id: 'scaling-chaos',
      title: 'Scaling-Chaos Fix',
      subtitle: 'Koordination frisst alle Produktivitätsgewinne',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      duration: '6 Wochen',
      before: {
        headline: 'Vor der Transformation',
        metrics: [
          { label: 'Team-Größe', value: '127 FTE', trend: 'up', change: '+180% in 2 Jahren' },
          { label: 'Output/Kopf', value: '-34%', trend: 'down', status: 'critical' },
          { label: 'Meeting-Zeit', value: '67%', trend: 'up', status: 'warning' },
          { label: 'Entscheidungs-Latenz', value: '23 Tage', trend: 'up', status: 'critical' },
        ],
        problems: [
          'Mehr Leute = langsamere Execution',
          '67% der Zeit in Abstimmungs-Meetings',
          'Jede Entscheidung braucht 5+ Stakeholder',
          'Teams blockieren sich gegenseitig',
        ],
        visual: {
          type: 'network',
          nodes: 12,
          connections: 66,
          bottlenecks: 4,
        }
      },
      after: {
        headline: 'Nach AI-Native Sprint',
        metrics: [
          { label: 'Team-Größe', value: '127 FTE', trend: 'neutral', change: 'unverändert' },
          { label: 'Output/Kopf', value: '+156%', trend: 'up', status: 'success' },
          { label: 'Meeting-Zeit', value: '22%', trend: 'down', status: 'success' },
          { label: 'Entscheidungs-Latenz', value: '3 Tage', trend: 'down', status: 'success' },
        ],
        solutions: [
          'AI-Agents übernehmen 80% der Routine-Koordination',
          'Async-First mit AI-Summarization ersetzt 70% der Meetings',
          'Autonomous Decision Routing zu richtigen Stakeholdern',
          'Cross-Team Dependency AI verhindert Blocking',
        ],
        visual: {
          type: 'network',
          nodes: 12,
          connections: 18,
          bottlenecks: 0,
        }
      },
      testimonial: {
        quote: '"Endlich skaliert Output wieder mit Headcount."',
        author: 'COO, FinTech Scale-up (€45M ARR)',
        result: 'Equivalent von 52 zusätzlichen FTE Output'
      }
    },
    {
      id: 'board-alignment',
      title: 'Board-Alignment Session',
      subtitle: 'Investoren-Vertrauen wiederherstellen',
      icon: Target,
      color: 'from-emerald-500 to-teal-500',
      duration: '2 Wochen',
      before: {
        headline: 'Vor der Transformation',
        metrics: [
          { label: 'Forecast Accuracy', value: '43%', trend: 'down', status: 'critical' },
          { label: 'Board Confidence', value: 'Niedrig', trend: 'down', status: 'warning' },
          { label: 'Strategy Changes', value: '4x/Jahr', trend: 'up', status: 'critical' },
          { label: 'Runway Visibility', value: '3 Monate', trend: 'down', status: 'warning' },
        ],
        problems: [
          'Board hat Vertrauen in Zahlen verloren',
          'Jedes Meeting endet mit neuen Fragen statt Antworten',
          'Strategie ändert sich bei jedem Board-Meeting',
          'Keine klare Story warum AI-Investments sich lohnen',
        ],
        visual: {
          type: 'confidence',
          level: 25,
        }
      },
      after: {
        headline: 'Nach AI-Native Sprint',
        metrics: [
          { label: 'Forecast Accuracy', value: '94%', trend: 'up', status: 'success' },
          { label: 'Board Confidence', value: 'Hoch', trend: 'up', status: 'success' },
          { label: 'Strategy Changes', value: '1x/Jahr', trend: 'down', status: 'success' },
          { label: 'Runway Visibility', value: '18 Monate', trend: 'up', status: 'success' },
        ],
        solutions: [
          'AI-powered Scenario Modeling zeigt alle Pfade',
          'Real-time Dashboard für Board-Visibility',
          'Klare AI-ROI Attribution für jede Initiative',
          'Predictive Runway mit Monte-Carlo Simulation',
        ],
        visual: {
          type: 'confidence',
          level: 92,
        }
      },
      testimonial: {
        quote: '"Das erste Board-Meeting seit 2 Jahren ohne kritische Nachfragen."',
        author: 'CEO, DeepTech Scale-up',
        result: 'Series C Finanzierung 3 Monate später gesichert'
      }
    },
  ];

  const currentCase = cases[activeCase];

  const MetricCard = ({ metric, isAfter }: { metric: any, isAfter: boolean }) => {
    const statusColors = {
      critical: 'bg-red-500/20 border-red-500/30 text-red-400',
      warning: 'bg-amber-500/20 border-amber-500/30 text-amber-400',
      success: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400',
    };

    return (
      <div className={`p-4 rounded-xl border ${
        metric.status 
          ? statusColors[metric.status as keyof typeof statusColors]
          : 'bg-card/50 border-border'
      }`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">{metric.label}</span>
          {metric.trend === 'up' && <TrendingUp className={`w-4 h-4 ${isAfter ? 'text-emerald-400' : 'text-red-400'}`} />}
          {metric.trend === 'down' && <TrendingDown className={`w-4 h-4 ${isAfter ? 'text-emerald-400' : 'text-red-400'}`} />}
        </div>
        <div className="text-2xl font-bold">{metric.value}</div>
        {metric.change && (
          <div className={`text-xs mt-1 ${isAfter ? 'text-emerald-400' : 'text-red-400'}`}>
            {metric.change}
          </div>
        )}
      </div>
    );
  };

  const MiniChart = ({ data, isAfter }: { data: number[], isAfter: boolean }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;

    return (
      <div className="h-32 flex items-end gap-1">
        {data.map((value, index) => {
          const height = ((value - min) / range) * 100;
          const isLast = index === data.length - 1;
          return (
            <div
              key={index}
              className={`flex-1 rounded-t transition-all duration-500 ${
                isAfter
                  ? 'bg-gradient-to-t from-emerald-500 to-teal-400'
                  : 'bg-gradient-to-t from-red-500 to-orange-400'
              } ${isLast ? 'opacity-100' : 'opacity-60'}`}
              style={{ height: `${Math.max(10, height)}%` }}
            />
          );
        })}
      </div>
    );
  };

  const ConfidenceMeter = ({ level }: { level: number }) => {
    const color = level > 70 ? 'from-emerald-500 to-teal-400' : level > 40 ? 'from-amber-500 to-orange-400' : 'from-red-500 to-rose-400';
    
    return (
      <div className="relative h-32 flex items-center justify-center">
        <div className="w-32 h-32 relative">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-muted/20"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${level * 2.51} 251`}
              className="transition-all duration-1000"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className={level > 70 ? 'text-emerald-500' : level > 40 ? 'text-amber-500' : 'text-red-500'} stopColor="currentColor" />
                <stop offset="100%" className={level > 70 ? 'text-teal-400' : level > 40 ? 'text-orange-400' : 'text-rose-400'} stopColor="currentColor" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">{level}%</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="transformations" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Real Transformation Cases</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Before → After: Echte Ergebnisse
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Drei reale Transformation Cases aus dem AI-Native Scaling Framework
          </p>
        </div>

        {/* Case Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cases.map((caseItem, index) => {
            const CaseIcon = caseItem.icon;
            return (
              <button
                key={caseItem.id}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-4 rounded-2xl font-medium transition-all duration-300 flex items-center gap-3 ${
                  activeCase === index
                    ? `bg-gradient-to-r ${caseItem.color} text-white shadow-lg`
                    : 'bg-card/50 border border-border hover:border-primary/50 text-foreground'
                }`}
              >
                <CaseIcon className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-bold">{caseItem.title}</div>
                  <div className="text-xs opacity-80">{caseItem.duration}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Before/After Comparison */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* BEFORE */}
          <div className="relative">
            <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-medium z-10">
              VORHER
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-red-500/5 to-orange-500/5 border border-red-500/20">
              <h3 className="text-2xl font-bold mb-6 text-red-400">{currentCase.before.headline}</h3>
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentCase.before.metrics.map((metric, index) => (
                  <MetricCard key={index} metric={metric} isAfter={false} />
                ))}
              </div>

              {/* Visual */}
              {currentCase.before.visual.type === 'chart' && (
                <div className="mb-8">
                  <MiniChart data={currentCase.before.visual.data} isAfter={false} />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    {currentCase.before.visual.labels.map((label: string, i: number) => (
                      <span key={i}>{label}</span>
                    ))}
                  </div>
                </div>
              )}

              {currentCase.before.visual.type === 'confidence' && (
                <div className="mb-8">
                  <ConfidenceMeter level={currentCase.before.visual.level} />
                  <p className="text-center text-sm text-muted-foreground mt-2">Board Confidence Score</p>
                </div>
              )}

              {currentCase.before.visual.type === 'network' && (
                <div className="mb-8 p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-red-400">{currentCase.before.visual.nodes}</div>
                      <div className="text-xs text-muted-foreground">Teams</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-400">{currentCase.before.visual.connections}</div>
                      <div className="text-xs text-muted-foreground">Dependencies</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-400">{currentCase.before.visual.bottlenecks}</div>
                      <div className="text-xs text-muted-foreground">Bottlenecks</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Problems */}
              <div className="space-y-3">
                {currentCase.before.problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm">
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AFTER */}
          <div className="relative">
            <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-medium z-10">
              NACHHER
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border border-emerald-500/20">
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">{currentCase.after.headline}</h3>
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentCase.after.metrics.map((metric, index) => (
                  <MetricCard key={index} metric={metric} isAfter={true} />
                ))}
              </div>

              {/* Visual */}
              {currentCase.after.visual.type === 'chart' && (
                <div className="mb-8">
                  <MiniChart data={currentCase.after.visual.data} isAfter={true} />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    {currentCase.after.visual.labels.map((label: string, i: number) => (
                      <span key={i}>{label}</span>
                    ))}
                  </div>
                </div>
              )}

              {currentCase.after.visual.type === 'confidence' && (
                <div className="mb-8">
                  <ConfidenceMeter level={currentCase.after.visual.level} />
                  <p className="text-center text-sm text-muted-foreground mt-2">Board Confidence Score</p>
                </div>
              )}

              {currentCase.after.visual.type === 'network' && (
                <div className="mb-8 p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">{currentCase.after.visual.nodes}</div>
                      <div className="text-xs text-muted-foreground">Teams</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">{currentCase.after.visual.connections}</div>
                      <div className="text-xs text-muted-foreground">Dependencies</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">{currentCase.after.visual.bottlenecks}</div>
                      <div className="text-xs text-muted-foreground">Bottlenecks</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Solutions */}
              <div className="space-y-3">
                {currentCase.after.solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-card/80 to-card/40 border border-border/50 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <blockquote className="text-2xl font-medium italic mb-4">
                {currentCase.testimonial.quote}
              </blockquote>
              <div className="text-muted-foreground">
                — {currentCase.testimonial.author}
              </div>
            </div>
            <div className="flex-shrink-0 p-6 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
              <div className="text-sm text-muted-foreground mb-1">Ergebnis</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {currentCase.testimonial.result}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Welches Problem beschreibt Ihre aktuelle Situation am besten?
          </p>
          <a
            href="#solution"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
          >
            <Zap className="w-5 h-5" />
            Kostenloses Diagnose-Gespräch buchen
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TransformationCases;
