import React, { useState } from 'react';
import { Lightbulb, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const CaseOnboardingHint: React.FC = () => {
  const { language } = useLanguage();
  const [isDismissed, setIsDismissed] = useState(() => {
    return localStorage.getItem('cases-filter-hint-dismissed') === 'true';
  });
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleDismiss = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      localStorage.setItem('cases-filter-hint-dismissed', 'true');
      setIsDismissed(true);
    }, 200);
  };

  if (isDismissed) return null;

  const text = {
    de: {
      label: 'Tipp:',
      message: 'Filtere nach Challenge, Branche oder Phase – oder kombiniere alle drei für präzise Ergebnisse.',
    },
    en: {
      label: 'Tip:',
      message: 'Filter by Challenge, Industry or Stage – or combine all three for precise results.',
    },
  };

  const t = text[language];

  return (
    <div
      className={cn(
        'flex items-start gap-3 px-4 py-3 rounded-lg bg-primary/5 border border-primary/20 max-w-xl mx-auto transition-all duration-200',
        isAnimatingOut && 'opacity-0 scale-95'
      )}
    >
      <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
      <p className="text-sm text-foreground/80 flex-1">
        <span className="font-semibold text-foreground">{t.label}</span>{' '}
        {t.message}
      </p>
      <button
        onClick={handleDismiss}
        className="text-muted-foreground hover:text-foreground transition-colors shrink-0 p-0.5 rounded hover:bg-muted/50"
        aria-label={language === 'de' ? 'Hinweis schließen' : 'Dismiss hint'}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default CaseOnboardingHint;
