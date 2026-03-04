import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useParallaxLayers } from '@/hooks/useParallax';
import TwinklingStars from '@/components/TwinklingStars';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';
import { useIsMobile } from '@/hooks/use-mobile';

// Smooth S-curve data — each curve reaches 100 at its time_to_100m
const heroChartData = [
  { month: 0, traditional: 0, aiPowered: 0, aiEnabled: 0, aiNative: 0 },
  { month: 3, traditional: 1, aiPowered: 1, aiEnabled: 3, aiNative: 12 },
  { month: 6, traditional: 2, aiPowered: 3, aiEnabled: 8, aiNative: 30 },
  { month: 9, traditional: 4, aiPowered: 5, aiEnabled: 15, aiNative: 58 },
  { month: 12, traditional: 6, aiPowered: 8, aiEnabled: 22, aiNative: 85 },
  { month: 13, traditional: 7, aiPowered: 9, aiEnabled: 24, aiNative: 100 },
  { month: 18, traditional: 10, aiPowered: 13, aiEnabled: 42, aiNative: 100 },
  { month: 24, traditional: 15, aiPowered: 20, aiEnabled: 68, aiNative: 100 },
  { month: 30, traditional: 20, aiPowered: 28, aiEnabled: 100, aiNative: 100 },
  { month: 36, traditional: 26, aiPowered: 37, aiEnabled: 100, aiNative: 100 },
  { month: 42, traditional: 33, aiPowered: 48, aiEnabled: 100, aiNative: 100 },
  { month: 48, traditional: 42, aiPowered: 62, aiEnabled: 100, aiNative: 100 },
  { month: 54, traditional: 52, aiPowered: 100, aiEnabled: 100, aiNative: 100 },
  { month: 60, traditional: 64, aiPowered: 100, aiEnabled: 100, aiNative: 100 },
  { month: 66, traditional: 80, aiPowered: 100, aiEnabled: 100, aiNative: 100 },
  { month: 72, traditional: 100, aiPowered: 100, aiEnabled: 100, aiNative: 100 },
];

const curveColors = {
  traditional: '#9CA3AF',
  aiPowered: '#F59E0B',
  aiEnabled: '#3B82F6',
  aiNative: '#10B981',
};

const legendItems = [
  { key: 'aiNative', label: 'AI-Native', sublabel: '13 mo', color: curveColors.aiNative },
  { key: 'aiEnabled', label: 'AI-Enabled', sublabel: '30 mo', color: curveColors.aiEnabled },
  { key: 'aiPowered', label: 'AI-Powered', sublabel: '54 mo', color: curveColors.aiPowered },
  { key: 'traditional', label: 'Traditional', sublabel: '72 mo', color: curveColors.traditional },
];

const HeroWithChart: React.FC = () => {
  const { language } = useLanguage();
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });
  const isMobile = useIsMobile();

  const scrollToNext = () => {
    document.getElementById('problem-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGrowthCurve = () => {
    document.getElementById('growth-curve-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="dark-section relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise"
    >
      {/* Deep Space Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E] transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }}
      />
      <div
        className="absolute inset-0 bg-mesh opacity-60 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }}
      />
      <div
        className="absolute inset-0 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[1]}px)` }}
      >
        <TwinklingStars />
      </div>
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[2]}px) scale(1.1)` }}
      />

      {/* Main Content */}
      <div className="container max-w-5xl mx-auto px-6 pt-20 pb-8 relative z-10 text-center">
        {/* Overline */}
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in">
          <span className="h-px w-12 bg-gradient-primary" />
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
            AI-Native Execution Consulting
          </span>
          <span className="h-px w-12 bg-gradient-primary" />
        </div>

        {/* Headline */}
        <h1 className="font-display text-hero-lg mb-4 animate-blur-in">
          <span className="block text-foreground">
            {language === 'de' ? 'Von €2M auf €100M ARR' : 'From €2M to €100M ARR'}
          </span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'in 18-30 Monaten.' : 'in 18-30 months.'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? '4 Scaling-Typen. 4 Geschwindigkeiten. Welcher bist du?'
            : '4 scaling types. 4 speeds. Which one are you?'
          }
        </p>

        {/* Inline Chart */}
        <div className="animate-slide-up max-w-4xl mx-auto overflow-hidden" style={{ animationDelay: '0.3s' }}>
          <ResponsiveContainer width="100%" height={isMobile ? 200 : 250}>
            <LineChart data={heroChartData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
              {/* SVG filter for glow effect */}
              <defs>
                {Object.entries(curveColors).map(([key, color]) => (
                  <filter key={key} id={`glow-${key}`}>
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                ))}
              </defs>
              <XAxis
                dataKey="month"
                stroke="hsl(240 5% 45% / 0.4)"
                tick={{ fontSize: 10, fill: 'hsl(240 5% 45% / 0.6)' }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `${v}mo`}
              />
              <YAxis
                stroke="hsl(240 5% 45% / 0.4)"
                tick={{ fontSize: 10, fill: 'hsl(240 5% 45% / 0.6)' }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `€${v}M`}
                domain={[0, 110]}
                ticks={[0, 25, 50, 75, 100]}
              />
              <ReferenceLine
                y={100}
                stroke="hsl(240 5% 45% / 0.25)"
                strokeDasharray="5 5"
              />
              <Line type="monotone" dataKey="traditional" stroke={curveColors.traditional} strokeWidth={2.5} dot={false} filter="url(#glow-traditional)" />
              <Line type="monotone" dataKey="aiPowered" stroke={curveColors.aiPowered} strokeWidth={2.5} dot={false} filter="url(#glow-aiPowered)" />
              <Line type="monotone" dataKey="aiEnabled" stroke={curveColors.aiEnabled} strokeWidth={3} dot={false} filter="url(#glow-aiEnabled)" />
              <Line type="monotone" dataKey="aiNative" stroke={curveColors.aiNative} strokeWidth={3} dot={false} filter="url(#glow-aiNative)" />
            </LineChart>
          </ResponsiveContainer>

          {/* Legend Chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            {legendItems.map((item) => (
              <div key={item.key} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-card/10 backdrop-blur-sm border border-border/20">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs font-medium text-foreground/80">{item.label}</span>
                <span className="text-xs text-muted-foreground">({item.sublabel})</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-slide-up mt-8" style={{ animationDelay: '0.5s' }}>
          <Button
            size="lg"
            onClick={scrollToGrowthCurve}
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
          >
            {language === 'de' ? 'Interaktiv vergleichen' : 'Compare interactively'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-fade-in cursor-pointer"
        style={{ animationDelay: '1s' }}
      >
        <span className="text-xs uppercase tracking-widest">
          {language === 'de' ? 'Mehr erfahren' : 'Learn More'}
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroWithChart;
