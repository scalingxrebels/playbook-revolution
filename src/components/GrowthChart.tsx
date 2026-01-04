import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingUp, Zap, ArrowRight } from 'lucide-react';

const GrowthChart = () => {
  const { language } = useLanguage();
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimationProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 30);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Linear growth: y = x
  // Superlinear growth: y = x^1.8
  const generatePoints = (type: 'linear' | 'superlinear') => {
    const points = [];
    for (let x = 0; x <= 100; x += 2) {
      const progress = Math.min(x, animationProgress);
      let y;
      if (type === 'linear') {
        y = progress * 0.6; // Linear: slow growth
      } else {
        y = Math.pow(progress / 100, 1.8) * 100; // Superlinear: exponential
      }
      points.push({ x: x * 3.5, y: 200 - (y * 1.8) });
    }
    return points;
  };

  const linearPoints = generatePoints('linear');
  const superlinearPoints = generatePoints('superlinear');

  const pathFromPoints = (points: { x: number; y: number }[]) => {
    return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  };

  const milestones = [
    { x: 87.5, label: '€10M', months: { linear: '36', super: '8' } },
    { x: 175, label: '€50M', months: { linear: '60', super: '14' } },
    { x: 262.5, label: '€100M', months: { linear: '84', super: '18' } },
    { x: 350, label: '€500M', months: { linear: '120+', super: '36' } },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {language === 'de' ? 'Wachstumskurven' : 'Growth Curves'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {language === 'de' ? 'Linear vs. Superlinear' : 'Linear vs. Superlinear'}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de' 
              ? 'Warum Level 3 Unternehmen in 18 Monaten erreichen, was andere in 7 Jahren nicht schaffen'
              : 'Why Level 3 companies achieve in 18 months what others can\'t in 7 years'}
          </p>
        </div>

        {/* Chart */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="p-8 rounded-3xl bg-card/50 border border-border backdrop-blur-sm">
            <svg viewBox="0 0 400 250" className="w-full h-auto">
              {/* Grid lines */}
              <defs>
                <linearGradient id="superlinearGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" />
                </linearGradient>
              </defs>
              
              {/* Horizontal grid lines */}
              {[0, 50, 100, 150, 200].map((y) => (
                <line key={y} x1="40" y1={y} x2="380" y2={y} stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4" />
              ))}
              
              {/* Vertical grid lines with milestone labels */}
              {milestones.map((m) => (
                <g key={m.x}>
                  <line x1={m.x + 40} y1="0" x2={m.x + 40} y2="200" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4" />
                  <text x={m.x + 40} y="220" textAnchor="middle" className="text-[10px] fill-muted-foreground">{m.label}</text>
                </g>
              ))}
              
              {/* Y-axis label */}
              <text x="15" y="100" textAnchor="middle" transform="rotate(-90, 15, 100)" className="text-[10px] fill-muted-foreground">
                ARR
              </text>
              
              {/* X-axis label */}
              <text x="210" y="245" textAnchor="middle" className="text-[10px] fill-muted-foreground">
                {language === 'de' ? 'Zeit (Monate)' : 'Time (Months)'}
              </text>

              {/* Linear growth line */}
              <path
                d={pathFromPoints(linearPoints.map(p => ({ x: p.x + 40, y: p.y })))}
                fill="none"
                stroke="hsl(var(--muted-foreground))"
                strokeWidth="2"
                strokeDasharray="8 4"
                opacity="0.5"
              />
              
              {/* Superlinear growth line */}
              <path
                d={pathFromPoints(superlinearPoints.map(p => ({ x: p.x + 40, y: p.y })))}
                fill="none"
                stroke="url(#superlinearGradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              
              {/* Current position indicators */}
              {animationProgress >= 100 && (
                <>
                  <circle cx={linearPoints[linearPoints.length - 1].x + 40} cy={linearPoints[linearPoints.length - 1].y} r="6" fill="hsl(var(--muted-foreground))" opacity="0.5" />
                  <circle cx={superlinearPoints[superlinearPoints.length - 1].x + 40} cy={superlinearPoints[superlinearPoints.length - 1].y} r="8" fill="hsl(var(--primary))" className="animate-pulse" />
                </>
              )}
            </svg>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-8 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-muted-foreground opacity-50" style={{ borderStyle: 'dashed' }} />
                <span className="text-sm text-muted-foreground">
                  {language === 'de' ? 'Level 1: Linear (84 Monate zu €100M)' : 'Level 1: Linear (84 months to €100M)'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
                <span className="text-sm font-medium">
                  {language === 'de' ? 'Level 3: Superlinear (18 Monate zu €100M)' : 'Level 3: Superlinear (18 months to €100M)'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Time Comparison */}
        <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {milestones.map((m) => (
            <div key={m.label} className="p-4 rounded-2xl bg-card/50 border border-border text-center">
              <div className="text-2xl font-bold text-primary mb-1">{m.label}</div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <span className="text-muted-foreground line-through">{m.months.linear}mo</span>
                <ArrowRight className="w-4 h-4 text-accent" />
                <span className="font-bold text-accent">{m.months.super}mo</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {Math.round((parseInt(m.months.linear) / parseInt(m.months.super)) * 10) / 10}x {language === 'de' ? 'schneller' : 'faster'}
              </div>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center">
          <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            {language === 'de' ? 'Der entscheidende Unterschied' : 'The Critical Difference'}
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            {language === 'de'
              ? 'Level 1 Unternehmen skalieren mit O(n²) Koordinationskosten. Level 3 mit O(n log n). Das bedeutet: Je größer Sie werden, desto schneller werden Sie – nicht langsamer.'
              : 'Level 1 companies scale with O(n²) coordination costs. Level 3 with O(n log n). This means: The bigger you get, the faster you become – not slower.'}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <div className="text-lg font-mono font-bold text-red-400 mb-1">O(n²)</div>
              <div className="text-sm text-muted-foreground">
                {language === 'de' ? '100 Leute = 4,950 Verbindungen' : '100 people = 4,950 connections'}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <div className="text-lg font-mono font-bold text-emerald-400 mb-1">O(n log n)</div>
              <div className="text-sm text-muted-foreground">
                {language === 'de' ? '100 Leute = 664 Verbindungen' : '100 people = 664 connections'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthChart;
