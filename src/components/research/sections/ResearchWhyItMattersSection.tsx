import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTheme } from '@/contexts/ThemeContext';
import { WhyItMattersData } from '@/data/research/types';
import { TrendingUp, Info } from 'lucide-react';

interface ResearchWhyItMattersSectionProps {
  data: WhyItMattersData;
}

const ResearchWhyItMattersSection: React.FC<ResearchWhyItMattersSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const levelColors = {
    1: '#F59E0B', // amber
    2: '#3B82F6', // blue
    3: '#10B981', // emerald
  };

  const chartTextColor = theme === 'dark' ? '#A1A1AA' : '#71717A';
  const gridColor = theme === 'dark' ? '#27272A' : '#E5E7EB';

  return (
    <section
      id="research-why-it-matters"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wide">
              {language === 'de' ? 'Warum es wichtig ist' : 'Why It Matters'}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {data.headline[language]}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              {data.content[language].split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {paragraph.includes('**') 
                    ? paragraph.split('**').map((part, j) => 
                        j % 2 === 1 ? <strong key={j} className="text-foreground">{part}</strong> : part
                      )
                    : paragraph
                  }
                </p>
              ))}
            </div>

            {/* Callout Box */}
            <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-amber-600 dark:text-amber-400">{data.callout.title[language]}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {data.callout.content[language]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Chart */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center text-muted-foreground">
              {data.chartTitle[language]}
            </h3>
            
            <div className="h-[400px] bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 60, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                  <XAxis 
                    type="number" 
                    dataKey="maturity" 
                    name="AI Maturity" 
                    domain={[0, 100]}
                    tick={{ fill: chartTextColor, fontSize: 12 }}
                    label={{ 
                      value: 'AI Maturity →', 
                      position: 'bottom', 
                      offset: 40,
                      fill: chartTextColor,
                      fontSize: 12
                    }}
                  />
                  <YAxis 
                    type="number" 
                    dataKey="timeToRevenue" 
                    name="Time to €100M" 
                    domain={[0, 80]}
                    tick={{ fill: chartTextColor, fontSize: 12 }}
                    label={{ 
                      value: 'Months to €100M ARR', 
                      angle: -90, 
                      position: 'insideLeft',
                      fill: chartTextColor,
                      fontSize: 12
                    }}
                  />
                  <Tooltip 
                    cursor={{ strokeDasharray: '3 3' }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const point = payload[0].payload;
                        return (
                          <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
                            <p className="text-sm font-medium">Level {point.level}</p>
                            <p className="text-xs text-muted-foreground">
                              Maturity: {Math.round(point.maturity)}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Time: {Math.round(point.timeToRevenue)} months
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  
                  {/* Trend line approximation */}
                  <ReferenceLine 
                    segment={[{ x: 10, y: 70 }, { x: 95, y: 10 }]}
                    stroke={theme === 'dark' ? '#6B7280' : '#9CA3AF'}
                    strokeDasharray="5 5"
                    strokeWidth={2}
                  />
                  
                  {/* Data points by level */}
                  <Scatter 
                    data={data.chartData.filter(d => d.level === 1)} 
                    fill={levelColors[1]}
                    opacity={0.8}
                  />
                  <Scatter 
                    data={data.chartData.filter(d => d.level === 2)} 
                    fill={levelColors[2]}
                    opacity={0.8}
                  />
                  <Scatter 
                    data={data.chartData.filter(d => d.level === 3)} 
                    fill={levelColors[3]}
                    opacity={0.8}
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-muted-foreground">Level 1</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-muted-foreground">Level 2</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-muted-foreground">Level 3</span>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground italic">
              {data.chartAnnotation[language]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchWhyItMattersSection;
