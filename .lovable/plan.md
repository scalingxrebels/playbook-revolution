

# Case-Kacheln Verbesserung: Executive Summary & Stat-Korrektur

## Probleme

### 1. Beschreibung zeigt nur Metriken statt Executive Summary
**Aktuell:** Die Beschreibung zeigt `result`-Feld (z.B. "Leads +1,000-1,500%, Conversion +50-75%...")
**Gewünscht:** Zielgruppen-gerechte 2-Zeilen Executive Summary

### 2. Erster Stat "+1,000-1,500%" zu lang
**Aktuell:** `impact: '+1,000-1,500%'` - passt nicht gut in die kleine Box
**Gewünscht:** Kürzere Darstellung wie `'10-15x'`

## Lösung

### A. Neues Feld für Kachel-Beschreibung

Ein neues optionales Feld `cardSummary` in `ClientCaseStudy` hinzufügen:

**Datei:** `src/data/cases/types.ts`
```typescript
// Nach 'result: BilingualText;'
cardSummary?: BilingualText; // Executive Summary für Kacheln (2 Zeilen)
```

### B. CaseCard anpassen

**Datei:** `src/components/cases/CaseCard.tsx`
```typescript
// Vorher:
const description = language === 'de' ? caseStudy.result.de : caseStudy.result.en;

// Nachher:
const description = caseStudy.cardSummary 
  ? (language === 'de' ? caseStudy.cardSummary.de : caseStudy.cardSummary.en)
  : (language === 'de' ? caseStudy.result.de : caseStudy.result.en);
```

### C. Case Study Daten aktualisieren

**Datei:** `src/data/cases/caseStudies.ts`

Für Case "Diagnostic-Led Acquisition Scaled" (Zeile ~4183):

```typescript
// Stat korrigieren (Zeile 4183):
heroMetrics: [
  { label: 'Leads/Qtr', before: '3-4', after: '40-60', impact: '10-15x' }, // Statt '+1,000-1,500%'
  ...
]

// Neue cardSummary hinzufügen (nach result):
cardSummary: {
  en: 'Transformed founder-dependent consulting firm into scalable growth engine with AI-powered diagnostics and systematic value ladder.',
  de: 'Gründer-abhängige Beratungsfirma in skalierbare Growth Engine transformiert durch AI-gestützte Diagnostik und systematische Value Ladder.'
},
```

### D. Alle Case Studies updaten

Für jede Case Study eine passende `cardSummary` erstellen - zielgruppen-gerecht, CEO-freundlich, auf 2 Zeilen optimiert.

## Zusammenfassung

| Datei | Änderung |
|-------|----------|
| `src/data/cases/types.ts` | Neues Feld `cardSummary?: BilingualText` |
| `src/components/cases/CaseCard.tsx` | `cardSummary` mit Fallback auf `result` |
| `src/data/cases/caseStudies.ts` | `cardSummary` + Stat-Korrektur für alle Cases |

