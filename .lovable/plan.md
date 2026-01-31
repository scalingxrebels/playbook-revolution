

# Plan: Case Study 9 "Strategic Transformation → M&A Integration Success" löschen

## Übersicht

Vollständige Entfernung der Case Study 9 aus dem System.

## Änderungen

### 1. `src/data/cases/caseStudies.ts`

**Aktion:** Kompletten Case Study 9 Eintrag löschen (~470 Zeilen)

- ID: `strategic-transformation-ma-integration`
- Slug: `strategic-transformation-ma-integration`

### 2. `src/data/solutionTiles.ts`

**Aktion:** Bidirektionale Links entfernen/zurücksetzen

| Solution | Zeile | Änderung |
|----------|-------|----------|
| Accelerate: Sustainable Growth (ID 30) | ~1149 | `secondaryCtaUrl` zurücksetzen auf vorherigen Wert |
| Boost: Custom Program (ID 28) | ~1077 | `secondaryCtaUrl` zurücksetzen auf vorherigen Wert |

## Ergebnis

- Case Study 9 wird aus dem Cases Hub entfernt
- `/cases/strategic-transformation-ma-integration` führt zu 404
- Keine verwaisten Links zu dieser Case Study

