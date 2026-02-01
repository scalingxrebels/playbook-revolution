

# Plan: "Book a Call" Button unter "Who We've Worked With"

## Ziel
Ein prominenter CTA-Button unter der Kunden-Sektion in der finalen Homepage-Section.

## Änderung

**Datei:** `src/components/homepage/FinalCTAOptimized.tsx`

### Was wird hinzugefügt:

Nach dem Clients-Container (Zeile 165, nach dem schließenden `</div>` der flex-wrap):

```typescript
// Import hinzufügen
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

// Button nach clients flex-wrap
<div className="mt-6 text-center">
  <Button 
    size="lg"
    className="bg-gradient-accent text-accent-foreground shadow-accent-glow"
    onClick={() => window.open('https://calendly.com/michel-scalingx/inflection-call', '_blank')}
  >
    <Phone className="mr-2 w-4 h-4" />
    {language === 'de' ? 'Jetzt Call buchen' : 'Book a Call'}
  </Button>
</div>
```

### Struktur nach Änderung:

```text
Clients Section (mt-6 p-6 rounded-xl)
├── Label: "Who We've Worked With"
├── Client Chips (flex-wrap)
└── Book a Call Button (NEU) ← centered, gradient style
```

### Styling:
- `bg-gradient-accent` für Premium-Look (konsistent mit Hero CTAs)
- `shadow-accent-glow` für Aufmerksamkeit
- `size="lg"` für gute Sichtbarkeit
- Zentriert unter den Client-Chips

### Link:
- Calendly Inflection Call (wie in CaseCTA und SolutionCTA)

