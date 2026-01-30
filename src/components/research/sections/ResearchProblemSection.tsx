import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ProblemSectionData } from '@/data/research/types';
import { AlertTriangle, Info, TrendingDown, Users, Clock } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';

interface ResearchProblemSectionProps {
  data: ProblemSectionData;
}

// Linear scaling data: Headcount vs Revenue
const linearScalingData = [
  { headcount: 0, revenue: 0 },
  { headcount: 100, revenue: 10 },
  { headcount: 200, revenue: 20 },
  { headcount: 300, revenue: 30 },
  { headcount: 400, revenue: 40 },
  { headcount: 500, revenue: 50 },
  { headcount: 600, revenue: 60 },
  { headcount: 700, revenue: 70 },
  { headcount: 800, revenue: 80 },
  { headcount: 900, revenue: 90 },
  { headcount: 1000, revenue: 100 },
];

const ResearchProblemSection: React.FC<ResearchProblemSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const chartConfig = {
    revenue: { label: 'Revenue (€M)', color: 'hsl(var(--destructive))' },
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wide">
              {language === 'de' ? 'Das Problem' : 'The Problem'}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {data.headline[language]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {data.content[language]}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Pattern */}
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-amber-500" />
                {language === 'de' ? 'Das Muster' : 'The Pattern'}
              </h3>
              <ul className="space-y-2">
                {data.pattern.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {item[language]}
                  </li>
                ))}
              </ul>
            </div>

            {/* Problem */}
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 backdrop-blur-sm">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-500" />
                {language === 'de' ? 'Das Problem' : 'The Problem'}
              </h3>
              <ul className="space-y-2">
                {data.problem.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {item[language]}
                  </li>
                ))}
              </ul>
            </div>

            {/* Result */}
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-500" />
                {language === 'de' ? 'Das Ergebnis' : 'The Result'}
              </h3>
              <p className="text-muted-foreground">{data.result[language]}</p>
            </div>

            {/* Bottleneck */}
            <div className="p-4 rounded-xl bg-muted/50 border-l-4 border-amber-500">
              <p className="text-sm text-muted-foreground italic">
                <strong>{language === 'de' ? 'Der Bottleneck:' : 'The Bottleneck:'}</strong> {data.bottleneck[language]}
              </p>
            </div>
          </div>

          {/* Right Column - Chart */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <h3 className="font-semibold text-lg mb-4 text-center">
                {data.chartTitle[language]}
              </h3>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={linearScalingData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border/30" />
                    <XAxis
                      dataKey="headcount"
                      label={{ value: language === 'de' ? 'Mitarbeiter' : 'Headcount', position: 'bottom', offset: -5 }}
                      tick={{ fontSize: 12 }}
                      className="text-muted-foreground"
                    />
                    <YAxis
                      label={{ value: language === 'de' ? 'Umsatz (€M)' : 'Revenue (€M)', angle: -90, position: 'insideLeft' }}
                      tick={{ fontSize: 12 }}
                      className="text-muted-foreground"
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="hsl(var(--destructive))"
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--destructive))', strokeWidth: 2, r: 4 }}
                    />
                    <ReferenceLine
                      y={100}
                      stroke="hsl(var(--muted-foreground))"
                      strokeDasharray="5 5"
                      label={{ value: '€100M ARR', position: 'right', fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
              <p className="text-center text-sm text-muted-foreground mt-4 italic">
                {data.chartAnnotation[language]}
              </p>
            </div>

            {/* Callout Box */}
            <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-amber-600 dark:text-amber-400">
                    {data.callout.title[language]}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {data.callout.content[language]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchProblemSection;
