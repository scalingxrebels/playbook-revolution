

# Plan: "Book a Call" Button Konsistent mit Final CTAs

## Aktueller Status

Der aktuelle Button in `FinalCTAOptimized.tsx`:
```typescript
<Button 
  size="lg"  // ← zu klein
  className="bg-gradient-accent text-accent-foreground shadow-accent-glow"
>
  <Phone className="mr-2 w-4 h-4" />
  {language === 'de' ? 'Jetzt Call buchen' : 'Book a Call'}
</Button>
```

## Referenz: Playbook Final CTA Button (das Pattern)

```typescript
<Button 
  size="xl" 
  className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
>
  {language === 'de' ? 'Kostenloses Gespräch buchen' : 'Book Free Call'}
  <ArrowRight className="w-5 h-5 ml-2" />
</Button>
```

## Änderung

**Datei:** `src/components/homepage/FinalCTAOptimized.tsx`

### Was sich ändert:

| Attribut | Aktuell | Neu |
|----------|---------|-----|
| `size` | `lg` | `xl` |
| `className` | Basic gradient | Full premium pattern |
| Icon | Phone only | Phone + ArrowRight |
| Text | Kurz | Vollständig wie bei Playbooks |
| Styling | Minimal | `font-bold uppercase tracking-wide` |

### Neuer Code (Zeile 170-181):

```typescript
{/* Book a Call Button - Outside the tile */}
<div className="mt-6 text-center">
  <Button 
    size="xl"
    className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400 group"
    onClick={() => window.open('https://calendly.com/michel-scalingx/inflection-call', '_blank')}
  >
    <Phone className="mr-2 w-5 h-5" />
    {language === 'de' ? 'Kostenlosen Call buchen' : 'Book Free Call'}
    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </Button>
</div>
```

### Import hinzufügen:

```typescript
import { ArrowRight } from 'lucide-react';  // Bereits vorhanden? Prüfen
```

## Ergebnis

- Konsistent mit Playbook/Research Final CTA Buttons
- Premium-Styling: Bold, Uppercase, Tracking
- Hover-Effekte: opacity + shadow-glow + ArrowRight-Animation
- Größere Präsenz durch `size="xl"` und `px-10 py-7`

