

# Plan: Quellen-Integration für Company-Daten

## Übersicht

Das Briefing v1.1 erfordert explizite **Data Source** Angaben bei jeder Company. Diese fehlen aktuell komplett in der Implementierung.

---

## Teil 1: Datenstruktur erweitern

### 1.1 ScalingXCaseStudies.tsx - Interface erweitern

**Zeile 14-34**: `CaseStudy` Interface erweitern:

```typescript
interface CaseStudy {
  // ... existing fields
  dataSource?: string; // NEU: Quellen-Angabe
}
```

### 1.2 Quellen zu jeder Company hinzufügen

**caseStudies Array (Zeilen 36-346)**:

| Company | Neue `dataSource` |
|---------|-------------------|
| Midjourney | "ANST v4.5.3, AMF v4.5.1" |
| Cursor | "AMF v4.1, ANST v4.1, TechCrunch (Aug 2024)" |
| Perplexity | "AMF v4.1, ANST v4.1" |
| OpenAI | "Public data (TechCrunch, OpenAI announcements)" |
| Stripe | "Public data (Stripe financial reports)" |
| Figma | "Public data (Figma announcements)" |
| Notion | "Public data (Notion announcements)" |

---

## Teil 2: CaseStudyComparisonTable.tsx - Quellen hinzufügen

### 2.1 Interface erweitern (Zeile 14-24)

```typescript
interface CompanyData {
  // ... existing fields
  dataSource: string; // NEU
}
```

### 2.2 Daten aktualisieren (Zeilen 26-34)

```typescript
const companies: CompanyData[] = [
  { name: 'OpenAI', ..., dataSource: 'Public data' },
  { name: 'Cursor', ..., dataSource: 'AMF v4.1, TechCrunch' },
  { name: 'Stripe', ..., dataSource: 'Public data' },
  { name: 'Midjourney', ..., dataSource: 'ANST v4.5.3' },
  { name: 'Figma', ..., dataSource: 'Public data' },
  { name: 'Perplexity', ..., dataSource: 'AMF v4.1' },
  { name: 'Notion', ..., dataSource: 'Public data' },
];
```

### 2.3 Tabelle erweitern - neue Spalte "Source"

Nach θ_index eine neue Spalte hinzufügen:

```tsx
<TableHead>Source</TableHead>
...
<TableCell className="text-xs text-muted-foreground">{company.dataSource}</TableCell>
```

---

## Teil 3: UI-Anpassungen

### 3.1 Company Cards in ScalingXCaseStudies.tsx

Im Modal-Dialog für jede Case Study die Quelle anzeigen:

```tsx
{/* Data Source (am Ende der Card) */}
{study.dataSource && (
  <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border/30">
    📊 {language === 'de' ? 'Quelle' : 'Source'}: {study.dataSource}
  </p>
)}
```

### 3.2 Growth Timeline - Tooltip mit Quelle

In `GrowthTimelineVisualization.tsx` die Milestones mit Quellen-Info erweitern (optional).

---

## Teil 4: Zusammenfassung der Änderungen

| Datei | Aktion |
|-------|--------|
| `src/components/ScalingXCaseStudies.tsx` | Interface erweitern, 7× dataSource hinzufügen, UI-Anzeige |
| `src/components/CaseStudyComparisonTable.tsx` | Interface erweitern, 7× dataSource hinzufügen, neue Tabellenspalte |

---

## Erwartetes Ergebnis

1. **Jede Company hat eine Quellen-Angabe** gemäß Briefing v1.1
2. **Vergleichstabelle zeigt "Source" Spalte** für Transparenz
3. **Case Study Modals zeigen Quelle** am unteren Rand
4. **Wissenschaftliche Glaubwürdigkeit** durch klare Referenzen

