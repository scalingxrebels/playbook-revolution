import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface MechanismFlowDiagramProps {
  activeM?: 'M1' | 'M2' | 'M3' | 'M4';
}

const mechanisms = [
  { id: 'M1', labelDe: 'Hypothesen-Maschine', labelEn: 'Hypothesis Engine', lineDe: 'Wir finden den Hebel — bevor wir handeln.', lineEn: 'We find the lever — before we act.' },
  { id: 'M2', labelDe: 'Übersetzungskompetenz', labelEn: 'Translation Competence', lineDe: 'Strategie die nicht übersetzt wird, ist Meinung.', lineEn: 'Strategy that isn\'t translated is opinion.' },
  { id: 'M3', labelDe: 'Funktionierende Synthese', labelEn: 'Functioning Synthesis', lineDe: 'Es funktioniert wirklich — nicht auf dem Slide Deck.', lineEn: 'It actually works — not just on the slide deck.' },
];

const MechanismFlowDiagram: React.FC<MechanismFlowDiagramProps> = ({ activeM }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="max-w-2xl mx-auto">
      {/* M1 → M2 → M3 blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {mechanisms.map((m, i) => (
          <div
            key={m.id}
            className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div
              className={`p-5 border-2 bg-card transition-all ${
                activeM === m.id
                  ? 'border-primary shadow-glow'
                  : 'border-border'
              }`}
            >
              <span className={`text-xs font-bold tracking-wider block mb-2 ${
                activeM === m.id ? 'text-primary' : 'text-primary/60'
              }`}>
                {m.id}
              </span>
              <h4 className="font-display text-sm font-bold text-foreground mb-1.5">
                {language === 'de' ? m.labelDe : m.labelEn}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {language === 'de' ? m.lineDe : m.lineEn}
              </p>
            </div>

            {/* Arrow connector (desktop only) */}
            {i < 2 && (
              <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity={0.5} />
                </svg>
              </div>
            )}

            {/* Arrow connector (mobile - vertical) */}
            {i < 2 && (
              <div className="flex md:hidden justify-center py-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2V14M8 14L3 9M8 14L13 9" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity={0.5} />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* M4 Multiplier bar */}
      <div
        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ transitionDelay: '500ms' }}
      >
        {/* Connection lines from M4 up to all 3 blocks */}
        <div className="hidden md:flex justify-around px-12 h-4">
          {[0, 1, 2].map((i) => (
            <svg key={i} width="2" height="16" viewBox="0 0 2 16" className="opacity-40">
              <line x1="1" y1="0" x2="1" y2="16" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
            </svg>
          ))}
        </div>

        <div
          className={`p-5 border-4 transition-all ${
            activeM === 'M4'
              ? 'border-amber-500 bg-amber-500/10 shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]'
              : 'border-amber-500/30 bg-card'
          }`}
        >
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <span className={`text-xs font-bold tracking-wider ${activeM === 'M4' ? 'text-amber-500' : 'text-amber-500/60'}`}>
                M4
              </span>
              <h4 className="font-display text-sm font-bold text-foreground">
                AI Orchestration
              </h4>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider px-3 py-1 border-2 border-amber-500/30 text-amber-500/80">
              {language === 'de' ? 'Multiplier auf M1–M3' : 'Multiplier on M1–M3'}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {language === 'de'
              ? 'Nicht der vierte Mechanismus. Der Verstärker auf die ersten drei.'
              : 'Not the fourth mechanism. The amplifier on the first three.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MechanismFlowDiagram;
