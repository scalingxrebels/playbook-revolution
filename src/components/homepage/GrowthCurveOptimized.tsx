import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { TrendingUp } from 'lucide-react';

// Smooth S-curve data — each curve reaches 100 at its time_to_100m
const growthData = [
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

const scalingTypes = [
  {
    id: 'traditional',
    color: '#9CA3AF',
    en: { label: 'Traditional', level: 'Level 0', time: '72 months', arrEmp: '€200K', growth: '50%', desc: 'No AI, manual processes' },
    de: { label: 'Traditional', level: 'Level 0', time: '72 Monate', arrEmp: '€200K', growth: '50%', desc: 'Kein AI, manuelle Prozesse' },
  },
  {
    id: 'aiPowered',
    color: '#F59E0B',
    en: { label: 'AI-Powered', level: 'Level 1', time: '54 months', arrEmp: '€350K', growth: '100%', desc: 'AI as tool (ChatGPT, Copilot)' },
    de: { label: 'AI-Powered', level: 'Level 1', time: '54 Monate', arrEmp: '€350K', growth: '100%', desc: 'AI als Werkzeug (ChatGPT, Copilot)' },
  },
  {
    id: 'aiEnabled',
    color: '#3B82F6',
    en: { label: 'AI-Enabled', level: 'Level 2', time: '30 months', arrEmp: '€900K', growth: '200%', desc: 'AI in workflows (AI SDRs, automation)' },
    de: { label: 'AI-Enabled', level: 'Level 2', time: '30 Monate', arrEmp: '€900K', growth: '200%', desc: 'AI in Workflows (AI SDRs, Automatisierung)' },
  },
  {
    id: 'aiNative',
    color: '#10B981',
    en: { label: 'AI-Native', level: 'Level 3', time: '13 months', arrEmp: '€2M', growth: '250%', desc: 'Product IS AI (Midjourney, Cursor)' },
    de: { label: 'AI-Native', level: 'Level 3', time: '13 Monate', arrEmp: '€2M', growth: '250%', desc: 'Produkt IST AI (Midjourney, Cursor)' },
  },
];

const translations = {
  en: {
    badge: 'Growth Curve Comparison',
    title: 'How Fast Can You Scale to €100M ARR?',
    subtitle: 'Compare 4 AI maturity levels based on validated research (n=62 companies)',
    time: 'Time',
    arrEmp: 'ARR/Emp',
    growth: 'Growth',
    source: 'Source: AMF v4.5.1 (n=62) • ANST v4.5.3 (n=22) • r=0.89, p≈3×10⁻⁸',
    learnMore: 'Learn more →',
  },
  de: {
    badge: 'Growth Curve Vergleich',
    title: 'Wie schnell kannst du auf €100M ARR skalieren?',
    subtitle: 'Vergleiche 4 AI-Reifegrade basierend auf validierter Forschung (n=62 Unternehmen)',
    time: 'Zeit',
    arrEmp: 'ARR/MA',
    growth: 'Wachstum',
    source: 'Quelle: AMF v4.5.1 (n=62) • ANST v4.5.3 (n=22) • r=0.89, p≈3×10⁻⁸',
    learnMore: 'Mehr erfahren →',
  },
};

const GrowthCurveOptimized: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const isMobile = useIsMobile();
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeTypes, setActiveTypes] = useState<string[]>(['traditional', 'aiNative']);

  const toggleType = (typeId: string) => {
    setActiveTypes(prev =>
      prev.includes(typeId) ? prev.filter(id => id !== typeId) : [...prev, typeId]
    );
  };

  return (
    <section
      id="growth-curve-section"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-20 md:py-28 bg-background"
    >
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t.badge}</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Chart */}
        <div className={`mb-10 p-6 rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <ResponsiveContainer width="100%" height={isMobile ? 300 : 400}>
            <LineChart data={growthData} margin={{ top: 10, right: 50, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border/30" />
              <XAxis
                dataKey="month"
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
                tickFormatter={(v) => `${v}mo`}
                label={{ value: language === 'de' ? 'Monate' : 'Months', position: 'insideBottom', offset: -2, fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
                tickFormatter={(v) => `€${v}M`}
                domain={[0, 110]}
                ticks={[0, 25, 50, 75, 100]}
                label={{ value: 'ARR (€M)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              />
              <ReferenceLine
                y={100}
                stroke="hsl(var(--muted-foreground) / 0.3)"
                strokeDasharray="5 5"
                label={{ value: '€100M ARR', position: 'insideTopRight', fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '12px',
                  color: 'hsl(var(--foreground))',
                  fontSize: 12,
                }}
                formatter={(value: number, name: string) => {
                  const type = scalingTypes.find(t => t.id === name);
                  const label = type ? type[language].label : name;
                  return [`€${value}M`, label];
                }}
                labelFormatter={(label) => `${language === 'de' ? 'Monat' : 'Month'} ${label}`}
              />
              {scalingTypes.map(type =>
                activeTypes.includes(type.id) ? (
                  <Line
                    key={type.id}
                    type="monotone"
                    dataKey={type.id}
                    stroke={type.color}
                    strokeWidth={3}
                    dot={false}
                    name={type.id}
                    animationDuration={800}
                  />
                ) : null
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Toggle Buttons */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {scalingTypes.map(type => {
            const isActive = activeTypes.includes(type.id);
            const info = type[language];
            return (
              <button
                key={type.id}
                onClick={() => toggleType(type.id)}
                className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left cursor-pointer ${
                  isActive
                    ? 'shadow-lg scale-[1.03]'
                    : 'border-border/50 opacity-50 hover:opacity-75'
                }`}
                style={{
                  borderColor: isActive ? type.color : undefined,
                  backgroundColor: isActive ? `${type.color}12` : undefined,
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: type.color }} />
                  <div>
                    <div className="font-semibold text-sm text-foreground">{info.label}</div>
                    <div className="text-xs text-muted-foreground">{info.level}</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground space-y-0.5">
                  <div><strong>{t.time}:</strong> {info.time}</div>
                  <div><strong>{t.arrEmp}:</strong> {info.arrEmp}</div>
                  <div><strong>{t.growth}:</strong> {info.growth} YoY</div>
                </div>
                <div className="mt-2 text-xs text-muted-foreground/70">{info.desc}</div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className={`p-4 rounded-2xl bg-muted/30 border border-border/30 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm text-muted-foreground text-center">
            <strong>{t.source.split('•')[0]}</strong>
            {t.source.split('•').slice(1).map((part, i) => (
              <span key={i}> • {part}</span>
            ))}
            {' '}
            <a href="/expertise" className="text-primary hover:underline ml-1">{t.learnMore}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GrowthCurveOptimized;
