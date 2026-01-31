import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { EvidenceSectionData } from '@/data/research/types';
import { BarChart3, Info, TrendingUp } from 'lucide-react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

interface ResearchEvidenceSectionProps {
  data: EvidenceSectionData;
}

const levelColors = {
  1: 'hsl(var(--destructive))',
  2: 'hsl(38, 92%, 50%)',
  3: 'hsl(142, 76%, 36%)',
};

const ResearchEvidenceSection: React.FC<ResearchEvidenceSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const chartConfig = {
    timeToRevenue: { label: language === 'de' ? 'Zeit (Monate)' : 'Time (Months)', color: 'hsl(var(--primary))' },
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <BarChart3 className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wide">
              {language === 'de' ? 'Empirische Evidenz' : 'Empirical Evidence'}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {data.headline[language]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {data.subheadline[language]}
          </p>
        </div>

        {/* Intro Text */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {data.intro[language]}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Findings (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            {data.findings.map((finding, index) => (
              <div
                key={finding.number}
                className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm flex gap-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">{finding.number}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{finding.title[language]}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {finding.content[language]}
                  </p>
                </div>
              </div>
            ))}

            {/* Caveat Box */}
            <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-amber-600 dark:text-amber-400">
                    {data.caveat.title[language]}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {data.caveat.content[language]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Chart (2 cols) */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 text-center">
                {data.chartTitle[language]}
              </h3>

              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border/30" />
                    <XAxis
                      type="number"
                      dataKey="maturity"
                      name="AI Maturity"
                      domain={[0, 100]}
                      label={{
                        value: 'AI Maturity',
                        position: 'bottom',
                        offset: 0,
                        style: { fontSize: 11, fill: 'hsl(var(--muted-foreground))' }
                      }}
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis
                      type="number"
                      dataKey="timeToRevenue"
                      name={language === 'de' ? 'Monate' : 'Months'}
                      domain={[0, 80]}
                      label={{
                        value: language === 'de' ? 'Monate bis €100M' : 'Months to €100M',
                        angle: -90,
                        position: 'insideLeft',
                        style: { fontSize: 11, fill: 'hsl(var(--muted-foreground))' }
                      }}
                      tick={{ fontSize: 10 }}
                    />
                    <ChartTooltip
                      content={
                        <ChartTooltipContent
                          formatter={(value, name) => [
                            `${value}`,
                            name === 'maturity' ? 'AI Maturity' : language === 'de' ? 'Monate' : 'Months'
                          ]}
                        />
                      }
                    />
                    <Scatter name="Companies" data={data.chartData}>
                      {data.chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={levelColors[entry.level]}
                          fillOpacity={0.7}
                        />
                      ))}
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>
              </ChartContainer>

              <p className="text-center text-sm text-muted-foreground mt-4 italic">
                {data.chartAnnotation[language]}
              </p>

              {/* Legend */}
              <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-border/30">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: levelColors[1] }} />
                  <span className="text-muted-foreground">Level 1</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: levelColors[2] }} />
                  <span className="text-muted-foreground">Level 2</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: levelColors[3] }} />
                  <span className="text-muted-foreground">Level 3</span>
                </div>
              </div>

              {/* Correlation reminder */}
              <div className="my-4 border-t border-border/50" />
              <p className="text-xs text-center text-muted-foreground italic">
                {language === 'en'
                  ? 'Correlation (r=0.89) ≠ Causation'
                  : 'Korrelation (r=0,89) ≠ Kausalität'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchEvidenceSection;
