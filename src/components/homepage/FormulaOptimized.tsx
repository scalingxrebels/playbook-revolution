import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, ArrowRightLeft, Settings, Cpu, Check, X } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallax } from '@/hooks/useParallax';

const mechanisms = [
  {
    id: 'M1',
    icon: Eye,
    titleEn: 'Hypothesis Engine',
    titleDe: 'Hypothesen-Maschine',
    descEn: 'We find the right lever — before others even ask the question.',
    descDe: 'Wir finden den richtigen Hebel — bevor andere überhaupt die Frage stellen.',
    color: 'primary',
  },
  {
    id: 'M2',
    icon: ArrowRightLeft,
    titleEn: 'Translation Competence',
    titleDe: 'Übersetzungskompetenz',
    descEn: 'We translate strategy into the right target system — so it actually works.',
    descDe: 'Wir übersetzen Strategie in das richtige Zielsystem — so dass sie tatsächlich wirkt.',
    color: 'primary',
  },
  {
    id: 'M3',
    icon: Settings,
    titleEn: 'Functioning Synthesis',
    titleDe: 'Funktionierende Synthese',
    descEn: 'We build systems that hold — complete, without compromise.',
    descDe: 'Wir bauen Systeme die tragen — vollständig, ohne Kompromiss.',
    color: 'primary',
  },
  {
    id: 'M4',
    icon: Cpu,
    titleEn: 'AI Orchestration',
    titleDe: 'AI Orchestration',
    descEn: 'Not a feature. A multiplier on M1–M3. Makes everything faster, sharper, deeper.',
    descDe: 'Nicht als Feature. Als Multiplier auf M1–M3. Macht alles schneller, schärfer, tiefer.',
    color: 'accent',
  },
];

const comparisonDe = {
  header: ['', 'McKinsey & Co.', 'Freelancer', 'Internes Team', 'ScalingX'],
  rows: [
    { label: 'M1 — Hypothesen', values: ['check', 'x', 'x', 'check'] },
    { label: 'M2 — Übersetzung', values: ['x', 'x', 'half', 'check'] },
    { label: 'M3 — Synthese', values: ['x', 'half', 'half', 'check'] },
    { label: 'M4 — AI Orchestration', values: ['x', 'x', 'x', 'check'] },
    { label: 'Speed', values: ['x', 'half', 'x', 'check'] },
  ],
};

const comparisonEn = {
  header: ['', 'McKinsey & Co.', 'Freelancer', 'Internal Team', 'ScalingX'],
  rows: [
    { label: 'M1 — Hypotheses', values: ['check', 'x', 'x', 'check'] },
    { label: 'M2 — Translation', values: ['x', 'x', 'half', 'check'] },
    { label: 'M3 — Synthesis', values: ['x', 'half', 'half', 'check'] },
    { label: 'M4 — AI Orchestration', values: ['x', 'x', 'x', 'check'] },
    { label: 'Speed', values: ['x', 'half', 'x', 'check'] },
  ],
};

const ValueIcon = ({ value }: { value: string }) => {
  if (value === 'check') return <Check className="w-5 h-5 text-accent mx-auto" />;
  if (value === 'half') return <span className="text-muted-foreground text-sm mx-auto block text-center">~</span>;
  return <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />;
};

const FormulaOptimized: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const parallax = useParallax({ speed: 0.25, direction: 'down' });
  const comparison = language === 'de' ? comparisonDe : comparisonEn;

  const scrollToCalculator = () => {
    document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="formula"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Background with Parallax */}
      <div 
        ref={parallax.ref as React.RefObject<HTMLDivElement>}
        className="absolute inset-0 bg-mesh transition-transform duration-100"
        style={{ transform: `translateY(${parallax.offset * 0.5}px) scale(1.1)` }}
      />
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Die Formel für Hypergrowth' : 'The Formula for Hypergrowth'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-4">
            <span className="block">M1 × M2 × M3 × M4</span>
            <span className="block text-primary">= Hypergrowth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Vier Winning Mechanisms müssen zusammenspielen. Wenn einer fehlt, funktioniert die Formel nicht.' 
              : 'Four Winning Mechanisms must work together. If one is missing, the formula doesn\'t work.'
            }
          </p>
        </div>

        {/* Mechanism Cards — 2×2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {mechanisms.map((item, index) => {
            const Icon = item.icon;
            const isAccent = item.color === 'accent';
            return (
              <div 
                key={item.id}
                className={`group relative bg-card border-2 ${isAccent ? 'border-accent/30 hover:border-accent' : 'border-primary/30 hover:border-primary'} p-8 transition-all duration-400 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg ${isAccent ? 'bg-accent/10 group-hover:bg-accent/20' : 'bg-primary/10 group-hover:bg-primary/20'} flex items-center justify-center mb-5 transition-colors`}>
                  <Icon className={`w-6 h-6 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                </div>
                <span className={`text-xs font-semibold uppercase tracking-widest ${isAccent ? 'text-accent/70' : 'text-primary/70'} mb-1 block`}>
                  {item.id}
                </span>
                <h3 className="font-sans text-xl font-bold text-foreground mb-3">
                  {language === 'de' ? item.titleDe : item.titleEn}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'de' ? item.descDe : item.descEn}
                </p>
                <div className={`absolute inset-0 ${isAccent ? 'shadow-accent-glow' : 'shadow-glow'} opacity-0 group-hover:opacity-50 transition-opacity pointer-events-none`} />
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="font-display text-2xl text-foreground text-center mb-8">
            {language === 'de' ? 'Warum nicht McKinsey, Freelancer oder intern?' : 'Why not McKinsey, freelancers, or in-house?'}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {comparison.header.map((h, i) => (
                    <th 
                      key={i} 
                      className={`py-3 px-4 text-sm font-semibold text-left ${i === 0 ? 'text-muted-foreground' : ''} ${i === comparison.header.length - 1 ? 'text-accent' : 'text-foreground'} border-b border-border/50`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, ri) => (
                  <tr key={ri} className="border-b border-border/30">
                    <td className="py-3 px-4 text-sm font-medium text-foreground">{row.label}</td>
                    {row.values.map((v, vi) => (
                      <td key={vi} className={`py-3 px-4 ${vi === row.values.length - 1 ? 'bg-accent/5' : ''}`}>
                        <ValueIcon value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            variant="outline"
            size="lg"
            onClick={scrollToCalculator}
            className="border-2 border-foreground/20 hover:border-foreground/40 font-semibold px-8 py-6"
          >
            {language === 'de' ? 'Deine Roadmap zu Hypergrowth' : 'Your Roadmap to Hypergrowth'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FormulaOptimized;
