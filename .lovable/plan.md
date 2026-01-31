
# Onboarding-Tipp für Cases Hub

## Aufgabe
Erstelle eine `CaseOnboardingHint.tsx` Komponente analog zu den bestehenden Hints für Solutions und Playbooks.

## Bestehendes Pattern (aus FilterOnboardingHint.tsx)

```typescript
// Struktur:
- useState für isDismissed (mit localStorage)
- useState für isAnimatingOut (fade-out Animation)
- handleDismiss Funktion mit 200ms Delay
- Lightbulb Icon + Text + X-Button
- localStorage Key für Persistenz
```

## Neue Komponente

### Datei
`src/components/cases/CaseOnboardingHint.tsx`

### Inhalt

```typescript
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
```

## Integration in CaseFilterSection.tsx

Einfügen nach dem Search-Block und vor den Filter Rows:

```tsx
// Import hinzufügen
import CaseOnboardingHint from './CaseOnboardingHint';

// Nach Zeile 159 (nach Search-Block) einfügen:
<div className="mb-6">
  <CaseOnboardingHint />
</div>
```

## LocalStorage Key
`cases-filter-hint-dismissed` (konsistent mit `solutions-filter-hint-dismissed` und `playbook-filter-hint-dismissed`)

## Ergebnis
- Identisches Design wie Solutions und Playbooks
- Bilingualer Text (DE/EN)
- Persistente Dismissal via localStorage
- Fade-out Animation beim Schließen
