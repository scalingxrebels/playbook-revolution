

# CTA-Sektion Angleichung: Expertise → Solutions/Cases Pattern

## Aktuelle Situation (ResearchHub.tsx, Zeilen 611-664)

Die Expertise-Seite verwendet eine veraltete CTA-Struktur:
- Einfacher `bg-background` ohne visuelle Tiefe
- Headline ohne `text-gradient` Styling
- Button ohne Calendly-Link und Phone-Icon
- Keine Trust-Signals (Unverbindlich, 30 Min, etc.)
- Feature-Liste statt cleaner CTA

## Ziel-Design (identisch zu SolutionCTA/CaseCTA)

```text
+----------------------------------------------------------+
|  [Gradient Background + Noise + Decorative Blur]         |
|                                                          |
|         Ready to apply                                   |
|         the research?           <- italic text-gradient  |
|                                                          |
|  "Book a free Inflection Call. We'll identify your       |
|   bottleneck in 30 minutes..."                           |
|                                                          |
|  [Phone] Kostenlosen Inflection Call buchen [->]         |
|                                                          |
|  [✓] Unverbindlich  [✓] 30 Min  [✓] Konkrete Schritte   |
+----------------------------------------------------------+
```

## Technische Anderungen

### Datei: `src/components/ResearchHub.tsx`

**Zeilen 611-664 ersetzen mit:**

```tsx
{/* Section 7: Final CTA - Aligned with Solutions/Cases */}
<section 
  ref={ctaRef as React.RefObject<HTMLElement>}
  className={`py-24 lg:py-32 relative overflow-hidden transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
>
  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
  <div className="absolute inset-0 noise opacity-30" />
  
  {/* Decorative */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
  
  <div className="container max-w-4xl mx-auto px-6 relative z-10">
    <div className="text-center">
      {/* Headline */}
      <h2 className="font-display text-display-md text-foreground mb-6">
        {language === 'de' ? (
          <>
            Bereit, die Forschung
            <span className="block italic text-gradient">anzuwenden?</span>
          </>
        ) : (
          <>
            Ready to apply
            <span className="block italic text-gradient">the research?</span>
          </>
        )}
      </h2>
      
      {/* Subline */}
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
        {language === 'de' 
          ? 'Buche einen kostenlosen Inflection Call. Wir identifizieren deinen Engpass in 30 Minuten und empfehlen den richtigen Weg.'
          : 'Book a free Inflection Call. We\'ll identify your bottleneck in 30 minutes and recommend the right path.'
        }
      </p>
      
      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <Button 
          size="xl" 
          className="shadow-brutal hover-brutal group"
          onClick={() => window.open('https://calendly.com/michel-scalingx/inflection-call', '_blank')}
        >
          <Phone className="mr-2 w-5 h-5" />
          {language === 'de' ? 'Kostenlosen Inflection Call buchen' : 'Book Free Inflection Call'}
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      
      {/* Trust Signal */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Check className="w-4 h-4 text-accent" />
          {language === 'de' ? 'Unverbindlich' : 'No commitment'}
        </span>
        <span className="flex items-center gap-1.5">
          <Check className="w-4 h-4 text-accent" />
          {language === 'de' ? '30 Minuten' : '30 minutes'}
        </span>
        <span className="flex items-center gap-1.5">
          <Check className="w-4 h-4 text-accent" />
          {language === 'de' ? 'Konkrete nachste Schritte' : 'Concrete next steps'}
        </span>
      </div>
    </div>
  </div>
</section>
```

### Imports hinzufugen (falls nicht vorhanden)

Prufen ob `Phone`, `Check`, `ArrowRight` bereits importiert sind. Falls nicht:

```tsx
import { Phone, Check, ArrowRight } from 'lucide-react';
```

## Zusammenfassung

| Datei | Anderung |
|-------|----------|
| `src/components/ResearchHub.tsx` | CTA-Sektion (Zeilen 611-664) ersetzen |

**Ergebnis:** Alle drei Hub-Seiten (Solutions, Cases, Expertise) haben nun identische CTA-Sektionen mit:
- Gradient Background + Noise + Decorative Blur
- Headline mit italic `text-gradient` Span
- Calendly-Button mit Phone-Icon
- 3 Trust-Signals

