

# Plan: CTA-Button in "Die Formel" Section anpassen

## Übersicht

Der CTA-Button in der Formula-Section wird farblich an den Proof-Section-Button angepasst (Outline-Variante) und erhält neuen Text.

---

## Änderung

### Datei: `src/components/homepage/FormulaOptimized.tsx`

**Zeilen 137-144 ersetzen:**

| Element | Vorher | Nachher |
|---------|--------|---------|
| Variant | (kein variant, custom classes) | `variant="outline"` |
| className | `bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 py-6 shadow-brutal hover-brutal` | `border-2 border-foreground/20 hover:border-foreground/40 font-semibold px-8 py-6` |
| Text DE | "Finde deine Schwachstelle (kostenlos)" | "Deine Roadmap zu Hypergrowth" |
| Text EN | "Find Your Weakness (free)" | "Your Roadmap to Hypergrowth" |

**Neuer Code:**

```tsx
<Button 
  variant="outline"
  size="lg"
  onClick={scrollToCalculator}
  className="border-2 border-foreground/20 hover:border-foreground/40 font-semibold px-8 py-6"
>
  {language === 'de' ? 'Deine Roadmap zu Hypergrowth' : 'Your Roadmap to Hypergrowth'}
  <ArrowRight className="w-5 h-5 ml-2" />
</Button>
```

---

## Betroffene Datei

| Datei | Änderung |
|-------|----------|
| `src/components/homepage/FormulaOptimized.tsx` | Button-Styling und Text (Zeilen 137-144) |

