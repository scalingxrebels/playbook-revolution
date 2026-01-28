

# Plan: "SCALING SUCCESS" durch "HYPERGROWTH" ersetzen

## Fundstellen

Es gibt **2 Dateien** mit "SCALING SUCCESS", die geändert werden müssen:

### 1. Footer.tsx (Zeile 47)
**Aktuell:**
```
GROWTH ENGINES × SCALING SYSTEMS × AI = SCALING SUCCESS
```
**Neu:**
```
GROWTH ENGINES × SCALING SYSTEMS × AI = HYPERGROWTH
```

### 2. FormulaOptimized.tsx (Zeilen 79-80)
**Aktuell:**
```tsx
<span className="block">Growth Engines × Scaling Systems × AI</span>
<span className="block text-primary">= Scaling Success</span>
```
**Neu:**
```tsx
<span className="block">Growth Engines × Scaling Systems × AI</span>
<span className="block text-primary">= Hypergrowth</span>
```

## Nicht geändert

- **SolutionHero.tsx**: Bereits "Hypergrowth"
- **LanguageContext.tsx**: Bereits "Hypergrowth"
- **ThreePillarsModel.tsx**: Zeigt nur die Formel ohne Ergebnis
- **ThetaIndexAssessment.tsx / ResearchHub.tsx**: Verwenden "scaling success" in Kleinbuchstaben als Teil von Sätzen (keine Formel)

## Zusammenfassung

| Datei | Änderung |
|-------|----------|
| `src/components/Footer.tsx` | Zeile 47: SCALING SUCCESS → HYPERGROWTH |
| `src/components/homepage/FormulaOptimized.tsx` | Zeile 80: Scaling Success → Hypergrowth |

