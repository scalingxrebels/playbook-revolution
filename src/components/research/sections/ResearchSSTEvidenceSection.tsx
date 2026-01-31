import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SSTEvidenceData } from '@/data/research/types';
import { BarChart3, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer, ReferenceLine, Cell, Tooltip } from 'recharts';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface ResearchSSTEvidenceSectionProps {
  data: SSTEvidenceData;
}

const ResearchSSTEvidenceSection: React.FC<ResearchSSTEvidenceSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-4 border-blue-500/50 bg-blue-500/10 text-blue-400">
            <BarChart3 className="w-4 h-4 mr-2" />
            Empirical Evidence
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {data.headline[language]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {data.intro[language]}
          </p>
        </div>

        {/* Main Content: 2 Columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Findings */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {data.findings.map((finding, index) => (
              <Card 
                key={finding.number}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/30 transition-all"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-400 font-bold">{finding.number}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {finding.title[language]}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {finding.content[language]}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Caveat */}
            <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">
                    {data.caveat.title[language]}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {data.caveat.content[language]}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Scatter Chart */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="font-semibold text-foreground mb-2 text-center">
                {data.chartTitle[language]}
              </h3>
              <p className="text-sm text-muted-foreground text-center mb-6">
                {data.chartAnnotation[language]}
              </p>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart
                    margin={{ top: 20, right: 20, bottom: 40, left: 20 }}
                  >
                    <XAxis 
                      type="number" 
                      dataKey="cMin" 
                      name="C_min"
                      domain={[0.3, 1]}
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                      label={{ 
                        value: 'C_min (Weakest Capability)', 
                        position: 'bottom', 
                        offset: 20,
                        fill: 'hsl(var(--muted-foreground))',
                        fontSize: 12
                      }}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="timeToRevenue" 
                      name="Time"
                      domain={[0, 80]}
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                      label={{ 
                        value: 'Months to €100M', 
                        angle: -90, 
                        position: 'insideLeft',
                        fill: 'hsl(var(--muted-foreground))',
                        fontSize: 12
                      }}
                    />
                    <Tooltip
                      content={({ payload }) => {
                        if (payload && payload.length) {
                          const point = payload[0].payload;
                          return (
                            <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                              <p className="text-sm font-medium">
                                C_min: {point.cMin.toFixed(2)}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Time: {point.timeToRevenue} months
                              </p>
                              <p className={`text-xs mt-1 ${point.hasBottleneck ? 'text-red-400' : 'text-emerald-400'}`}>
                                {point.hasBottleneck ? 'Has Bottleneck' : 'No Bottleneck'}
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <ReferenceLine 
                      x={0.6} 
                      stroke="hsl(var(--destructive))" 
                      strokeDasharray="5 5"
                      label={{ 
                        value: 'Bottleneck threshold', 
                        position: 'top',
                        fill: 'hsl(var(--destructive))',
                        fontSize: 10
                      }}
                    />
                    <Scatter 
                      name="Companies" 
                      data={data.chartData}
                    >
                      {data.chartData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.hasBottleneck ? 'hsl(0, 84%, 60%)' : 'hsl(160, 84%, 39%)'}
                        />
                      ))}
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-xs text-muted-foreground">
                    {language === 'en' ? 'Has Bottleneck (C_min < 0.6)' : 'Hat Bottleneck (C_min < 0.6)'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs text-muted-foreground">
                    {language === 'en' ? 'No Bottleneck (C_min ≥ 0.6)' : 'Kein Bottleneck (C_min ≥ 0.6)'}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSSTEvidenceSection;
