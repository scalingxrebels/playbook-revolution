
# Plan: DealDeskr.io Kachel harmonisieren

## Analyse

Die DealDeskr.io-Kachel ist bereits gut integriert. Es gibt nur eine kleine Inkonsistenz:

| Feld | Aktuell | Andere Tools | Korrektur |
|------|---------|--------------|-----------|
| `secondaryCtaEn` | `Learn More` | `Learn more` | → `Learn more` |

## Änderung

**Datei:** `src/data/solutionTiles.ts` (Zeile 1526)

```typescript
// Aktuell:
secondaryCtaEn: 'Learn More',

// Korrigiert:
secondaryCtaEn: 'Learn more',
```

## Begründung

- **primaryCtaAction: 'external'** ist korrekt, da DealDeskr.io eine externe SaaS-Plattform ist (nicht wie interne Tools mit `'open-tool'`)
- Alle anderen Felder sind bereits konsistent mit den übrigen Kacheln
- Die Groß-/Kleinschreibung sollte einheitlich sein: `Learn more` (sentence case) wie bei den anderen Tools

## Zusammenfassung

| Datei | Änderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Zeile 1526: `secondaryCtaEn` von `'Learn More'` auf `'Learn more'` ändern |
