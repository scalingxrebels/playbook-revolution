import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface MechanismFlowDiagramProps {
  activeM?: 'M1' | 'M2' | 'M3' | 'M4';
}

const MechanismFlowDiagram: React.FC<MechanismFlowDiagramProps> = ({ activeM }) => {
  const { language } = useLanguage();

  const mechanisms = [
    { id: 'M1', labelDe: 'Hypothesen-Maschine', labelEn: 'Hypothesis Engine' },
    { id: 'M2', labelDe: 'Übersetzungskompetenz', labelEn: 'Translation Competence' },
    { id: 'M3', labelDe: 'Funktionierende Synthese', labelEn: 'Functioning Synthesis' },
  ];

  return (
    <div className="max-w-md mx-auto">
      {/* M1 → M2 → M3 row */}
      <div className="flex items-center justify-center gap-3 mb-6">
        {mechanisms.map((m, i) => (
          <React.Fragment key={m.id}>
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                  activeM === m.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-primary/40 text-primary/60 bg-transparent'
                }`}
              >
                {m.id}
              </div>
              <span className="text-[10px] text-muted-foreground text-center leading-tight max-w-[80px]">
                {language === 'de' ? m.labelDe : m.labelEn}
              </span>
            </div>
            {i < 2 && (
              <div className="text-primary/40 text-lg font-bold mt-[-16px]">→</div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* M4 multiplier bar */}
      <div className="relative">
        <div className="flex items-center gap-2">
          <div
            className={`flex-1 h-1 border-t-2 border-b-2 ${
              activeM === 'M4' ? 'border-amber-500' : 'border-amber-500/40'
            }`}
          />
          <div
            className={`px-3 py-1 text-xs font-bold border-2 ${
              activeM === 'M4'
                ? 'bg-amber-500 text-black border-amber-500'
                : 'border-amber-500/40 text-amber-500/60 bg-transparent'
            }`}
          >
            M4
          </div>
          <div
            className={`flex-1 h-1 border-t-2 border-b-2 ${
              activeM === 'M4' ? 'border-amber-500' : 'border-amber-500/40'
            }`}
          />
        </div>
        <p className="text-[10px] text-amber-500/60 text-center mt-1.5">
          {language === 'de' ? 'Multiplier auf M1, M2 und M3' : 'Multiplier on M1, M2 and M3'}
        </p>
      </div>
    </div>
  );
};

export default MechanismFlowDiagram;
