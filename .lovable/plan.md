
# Plan: Kombinierte Sortierung mit `ebene` + `sortOrder`

## Konzept

Die Sortierung wird wie folgt priorisiert:
1. **Primär:** `ebene` Property (aufsteigend: 1 → 2 → 3)
2. **Sekundär:** `sortOrder` Property (aufsteigend innerhalb jeder Ebene)
3. **Tertiär:** `matchScore` (absteigend, für Filter-Relevanz)
4. **Fallback:** Alphabetisch nach Titel

## Änderungen

### 1. Interface erweitern (`src/data/playbooks.ts`)

```typescript
export interface Playbook {
  // ... existing properties
  ebene: 1 | 2 | 3;      // NEU: Hierarchie-Ebene
  sortOrder: number;      // NEU: Reihenfolge innerhalb der Ebene
}
```

### 2. Playbooks mit Properties versehen (`src/data/playbooks.ts`)

| ID | Playbook | Ebene | sortOrder |
|----|----------|-------|-----------|
| ai-native-scaling | AI-Native Scaling | 1 | 1 |
| growth-engines | Growth Engines | 2 | 1 |
| operating-systems | Operating Systems | 2 | 2 |
| board-governance | Board & Governance | 2 | 3 |
| portfolio-transformation | Portfolio Transformation | 2 | 4 |
| strategic-capabilities | Strategic Capabilities | 2 | 5 |
| gtm-revenue | GTM/Revenue | 3 | 1 |
| product | Product | 3 | 2 |
| customer-success | Customer Success | 3 | 3 |
| operations | Operations | 3 | 4 |
| finance | Finance | 3 | 5 |
| talent | Talent | 3 | 6 |
| data-tech | Data/Tech | 3 | 7 |
| strategic-governance | Strategic Governance | 3 | 8 |
| operational-governance | Operational Governance | 3 | 9 |
| exit-ma | Exit/M&A | 3 | 10 |
| portfolio-excellence | Portfolio Excellence | 3 | 11 |

### 3. Sortierlogik anpassen (`src/components/playbooks/usePlaybookFilters.ts`)

```typescript
// Neue Sortierung (Zeilen 113-118)
withScores.sort((a, b) => {
  // 1. Primär: ebene aufsteigend (1 → 2 → 3)
  if (a.ebene !== b.ebene) {
    return a.ebene - b.ebene;
  }
  // 2. Sekundär: sortOrder aufsteigend innerhalb der Ebene
  if (a.sortOrder !== b.sortOrder) {
    return a.sortOrder - b.sortOrder;
  }
  // 3. Tertiär: matchScore absteigend (Filter-Relevanz)
  if (b.matchScore !== a.matchScore) {
    return b.matchScore - a.matchScore;
  }
  // 4. Fallback: alphabetisch
  return a.title[language].localeCompare(b.title[language]);
});
```

## Ergebnis

Die Playbooks werden in folgender Reihenfolge angezeigt:

```text
EBENE 1:
├── 1. AI-Native Scaling Playbook (Mutter)

EBENE 2:
├── 2. AI-Native Growth Engines
├── 3. AI-Native Operating Systems
├── 4. AI-Native Board & Governance
├── 5. AI-Native Portfolio Transformation
├── 6. Strategic Capabilities

EBENE 3:
├── 7. GTM/Revenue
├── 8. Product
├── 9. Customer Success
├── 10. Operations
├── 11. Finance
├── 12. Talent
├── 13. Data/Tech
├── 14. Strategic Governance
├── 15. Operational Governance
├── 16. Exit/M&A
├── 17. Portfolio Excellence
```

## Technische Details

| Datei | Änderung | Zeilen |
|-------|----------|--------|
| `src/data/playbooks.ts` | Interface + 17 Playbooks erweitern | ~40 Zeilen |
| `src/components/playbooks/usePlaybookFilters.ts` | Sortierlogik anpassen | ~15 Zeilen |

## Vorteile dieser Lösung

- **Flexibel:** `sortOrder` kann jederzeit angepasst werden
- **Hierarchisch:** `ebene` respektiert die 3-Ebenen-Struktur
- **Erweiterbar:** Neue Playbooks können einfach einsortiert werden
- **Filter-kompatibel:** `matchScore` bleibt als tertiäre Sortierung erhalten
