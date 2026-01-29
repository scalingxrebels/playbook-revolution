import React, { useState } from 'react';
import { Lightbulb, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const PlaybookOnboardingHint: React.FC = () => {
  const { language } = useLanguage();
  const [isDismissed, setIsDismissed] = useState(() => {
    return localStorage.getItem('playbook-filter-hint-dismissed') === 'true';
  });
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleDismiss = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      localStorage.setItem('playbook-filter-hint-dismissed', 'true');
      setIsDismissed(true);
    }, 200);
  };

  if (isDismissed) return null;

  const text = {
    de: {
      label: 'Tipp:',
      message: 'Beantworte 3-5 Fragen, um dein passendes Playbook zu finden.',
    },
    en: {
      label: 'Quick Tip:',
      message: 'Answer 3-5 questions to find your perfect playbook.',
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

export default PlaybookOnboardingHint;
