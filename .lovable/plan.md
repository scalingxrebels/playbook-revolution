

# Plan: VC DD Simulation Duration-Anpassung (1-2 Weeks → 3-5 Days)

## Übersicht

Die Duration muss an zwei Stellen von "1-2 Weeks" auf "3-5 Days" geändert werden:
1. **Kachel** in `solutionTiles.ts` (ID 8)
2. **Landing Page** in `VCDueDiligenceSimulation.tsx`

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (Zeilen 362-363)

| Feld | Aktuell | Neu |
|------|---------|-----|
| solutionEn | "...in 1-2 weeks (8 dimensions)..." | "...in 3-5 days (8 dimensions)..." |
| solutionDe | "...in 1-2 Wochen (8 Dimensionen)..." | "...in 3-5 Tagen (8 Dimensionen)..." |

---

## 2. Landing Page Updates in VCDueDiligenceSimulation.tsx

### 2.1 Hero Section - Badge (Zeile 121)
- **Aktuell:** `Decision Support · 1-2 Weeks · €5.9K`
- **Neu:** `Decision Support · 3-5 Days · €5.9K`

### 2.2 Hero Section - Trust Badges (Zeile 65)
- **Aktuell:** `1-2 Weeks (Fast Turnaround)` / `1-2 Wochen (Schnelle Lieferung)`
- **Neu:** `3-5 Days (Fast Turnaround)` / `3-5 Tage (Schnelle Lieferung)`

### 2.3 Hero Section - Subheadline (Zeilen 135-136)
- **Aktuell:** `...in 1-2 weeks...` / `...in 1-2 Wochen...`
- **Neu:** `...in 3-5 days...` / `...in 3-5 Tagen...`

### 2.4 Solution Section - Differentiators (Zeile 346)
- **Aktuell:** `Fast turnaround (1-2 weeks, not 4-6 weeks)`
- **Neu:** `Fast turnaround (3-5 days, not 4-6 weeks)`

### 2.5 Outcome Section - Headline (Zeile 527)
- **Aktuell:** `Typical Outcomes (1-2 Weeks)` / `Typische Ergebnisse (1-2 Wochen)`
- **Neu:** `Typical Outcomes (3-5 Days)` / `Typische Ergebnisse (3-5 Tage)`

### 2.6 Process Section - Quality Guarantee (Zeile 612)
- **Aktuell:** `Fast turnaround (1-2 weeks, not 4-6 weeks)`
- **Neu:** `Fast turnaround (3-5 days, not 4-6 weeks)`

### 2.7 Process Section - Pricing Card (Zeile 672)
- **Aktuell:** `1-2 weeks turnaround`
- **Neu:** `3-5 days turnaround`

### 2.8 Final CTA Section - Steps (Zeile 807)
- **Aktuell:** `...30-40 pages, 1-2 weeks` / `...30-40 Seiten, 1-2 Wochen`
- **Neu:** `...30-40 pages, 3-5 days` / `...30-40 Seiten, 3-5 Tage`

### 2.9 Final CTA Section - FAQ (Zeile 811)
- **Aktuell:** `1-2 weeks (from document sharing...)` / `1-2 Wochen (vom Dokumenten-Sharing...)`
- **Neu:** `3-5 days (from document sharing...)` / `3-5 Tage (vom Dokumenten-Sharing...)`

---

## Zusammenfassung

| Datei | Anzahl Änderungen |
|-------|-------------------|
| `src/data/solutionTiles.ts` | 2 (solutionEn, solutionDe) |
| `src/pages/VCDueDiligenceSimulation.tsx` | 9 Stellen (alle "1-2 weeks/Wochen" Erwähnungen) |

**Konsistenz mit GTM Effectiveness Review:** Nach dieser Änderung haben beide Decision Support Pages die gleiche Duration von 3-5 Days.

