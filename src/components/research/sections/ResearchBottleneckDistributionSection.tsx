import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SSTBottleneckDistributionData } from '@/data/research/types';
import { AlertTriangle, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from 'recharts';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface ResearchBottleneckDistributionSectionProps {
  data: SSTBottleneckDistributionData;
}

const ResearchBottleneckDistributionSection: React.FC<ResearchBottleneckDistributionSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const chartData = data.chartData.map(item => ({
    name: `${item.capability} ${item.name[language]}`,
    percentage: item.percentage,
    color: item.color,
  }));

  return (
    <section 
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-4 border-amber-500/50 bg-amber-500/10 text-amber-400">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The Problem
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {data.headline[language]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {data.content[language]}
          </p>
        </div>

        {/* Main Content: 2 Columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Findings */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {data.findings.map((finding, index) => (
              <Card 
                key={finding.number}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <span className="text-amber-400 font-bold">{finding.number}</span>
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

            {/* Callout */}
            <Card className="p-6 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-400 mb-2">
                    {data.callout.title[language]}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {data.callout.content[language]}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Bar Chart */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="font-semibold text-foreground mb-6 text-center">
                {data.chartTitle[language]}
              </h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={chartData}
                    margin={{ top: 5, right: 50, left: 20, bottom: 5 }}
                  >
                    <XAxis 
                      type="number" 
                      domain={[0, 40]}
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <YAxis 
                      type="category" 
                      dataKey="name"
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                      width={120}
                    />
                    <Bar 
                      dataKey="percentage" 
                      radius={[0, 4, 4, 0]}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                      <LabelList 
                        dataKey="percentage" 
                        position="right" 
                        formatter={(value: number) => `${value}%`}
                        fill="hsl(var(--foreground))"
                        fontSize={14}
                        fontWeight={600}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                {language === 'en' 
                  ? 'Setup is the most common bottleneck (36% of companies)'
                  : 'Setup ist der häufigste Bottleneck (36% der Unternehmen)'}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchBottleneckDistributionSection;
