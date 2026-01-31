

# Button-Harmonisierung: Keynote, Workshop & ExpertSession

## Ziel

Die drei "Enablement"-Seiten (Keynote, Workshop, ExpertSession) auf das Premium-Gradient-Button-Pattern umstellen, damit alle Hero-CTAs konsistent sind.

## Änderungen

### Aktuelles Pattern (inkonsistent)

```tsx
<Button size="lg" className="text-lg px-8">
  {buttonText}
  <ArrowRight className="ml-2 h-5 w-5" />
</Button>
```

### Neues Pattern (Premium Gradient)

```tsx
<Button
  size="xl"
  className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
>
  {buttonText}
  <ArrowRight className="w-5 h-5 ml-2" />
</Button>
```

## Betroffene Dateien

| Datei | Änderung |
|-------|----------|
| `src/pages/Keynote.tsx` | Hero-CTA Button auf Premium-Gradient umstellen |
| `src/pages/Workshop.tsx` | Hero-CTA Button auf Premium-Gradient umstellen |
| `src/pages/ExpertSession.tsx` | Hero-CTA Button auf Premium-Gradient umstellen |

## Ergebnis

- Alle Landing Pages mit dark-section Heroes nutzen identisches Button-Styling
- Konsistente visuelle Hierarchie über alle Premium-Seiten
- Verbesserte Conversion durch auffälligere CTAs

