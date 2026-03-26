import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const clientNames = [
  'Pigtie', 'the beautiful unleashed truth', 'KODE®', 'FILADOS', '2p Team',
  'Microsoft Surface', 'XING e-Recruiting', 'Lexware', 'Haufe Group', 'smapOne',
  'SBB E-Business', 'Swarovski', 'local.ch', 'BWK Group', 'DBA', 'Burda Media',
  'START', 'Elba', 'Semigator', 'Umantis', 'Sage', 'LifiMax', 'BeQueen', 'BonGusto'
];

const ClientTicker: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="relative z-10 border-y border-border py-4 bg-background/50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground whitespace-nowrap flex-shrink-0 relative z-10 bg-background/50 pr-4">
            {language === 'de' ? 'Mit wem wir gearbeitet haben' : 'Who we have worked with'}
          </span>
          <div className="relative flex-1 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background/50 to-transparent z-10 pointer-events-none" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-6 px-4">
                  {clientNames.map((name, idx) => (
                    <span key={`${i}-${idx}`} className="text-sm font-medium text-muted-foreground/60 flex items-center gap-6">
                      <span className="w-1 h-1 rounded-full bg-primary/40" />
                      {name}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTicker;
