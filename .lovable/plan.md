

# Plan: Button außerhalb der Clients-Kachel verschieben

## Problem
Der Button wurde innerhalb der "Who We've Worked With" Kachel eingefügt (Zeile 168-178). Er soll aber **unterhalb** der Kachel stehen.

## Änderung

**Datei:** `src/components/homepage/FinalCTAOptimized.tsx`

### Aktuelle Struktur (falsch):
```
Clients Section (div mit border)
├── Label: "Who We've Worked With"
├── Client Chips
└── Book a Call Button  ← FALSCH: innerhalb der Kachel
```

### Gewünschte Struktur:
```
Clients Section (div mit border)
├── Label: "Who We've Worked With"
└── Client Chips

Book a Call Button  ← RICHTIG: außerhalb, darunter
```

### Technische Umsetzung:

1. **Zeile 167-178 entfernen** (Button aus der Clients-Kachel)
2. **Nach Zeile 179** (nach dem schließenden `</div>` der Clients Section) den Button einfügen:

```typescript
{/* Clients Section */}
<div className="mt-6 p-6 rounded-xl bg-muted/30 border-2 border-border">
  <p className="...">Who We've Worked With</p>
  <div className="flex flex-wrap ...">
    {clients.map(...)}
  </div>
</div>  {/* ← Clients Section ENDE */}

{/* Book a Call Button - NEU: AUSSERHALB der Kachel */}
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

## Ergebnis
- Button steht als eigenständiges Element unter der Clients-Kachel
- Mehr Sichtbarkeit durch Separation
- Klarere visuelle Hierarchie

