
# Plan: 5-Filter-System fur die Playbook-Seite

## Ubersicht

Refactoring der Playbook-Navigation von 4 technischen Filtern (Dimension, Capability, Stage, Difficulty) zu **5 User-zentrierten Filtern**, die auf Bedurfnisse, Ziele und Reife-Level fokussieren.

---

## Aktuelle Situation

### Vorhandene Filter
| Filter | Optionen | Problem |
|--------|----------|---------|
| Dimension | GTM, Operations, Technology, Organization, Governance, Capital | Zu technisch |
| Capability | C1, C2, C3, C4 | Nicht verstandlich |
| Stage | Foundation, Growth, Scale | Unklar |
| Difficulty | Beginner, Intermediate, Advanced | Begrenzt hilfreich |

### Neue Filter (aus Briefing)
| Filter | Icon | Optionen |
|--------|------|----------|
| Need-for-Action | AlertCircle | Revenue not growing, Product not scaling, Pricing not working, etc. |
| Impact | Target | Reduce costs, Increase revenue, Improve margins, etc. |
| Timeframe | Clock | Quick Win (4-8w), Mid-Term (8-12w), Long-Term (12-24w), Transformation (6-12mo) |
| Capability | Gauge | Limited, Moderate, Focused |
| Capacity | Users | Firefighting, Goal-oriented, Transformation-ready |

---

## Architektur

### Neue Datenstruktur

```text
src/data/
  playbooks.ts              (NEU - ausgelagerte Playbook-Daten)
  playbookFilters.ts        (NEU - Filter-Definitionen)

src/components/playbooks/
  PlaybookFilterPanel.tsx   (NEU - Alle 5 Filter)
  PlaybookOnboardingHint.tsx(NEU - Onboarding Hint)
  PlaybookCard.tsx          (NEU - ausgelagerte Card)
  PlaybookModal.tsx         (NEU - ausgelagerte Modal)
```

---

## Section 1: Onboarding-Hint

### Komponente: `PlaybookOnboardingHint.tsx`

Basierend auf dem existierenden `FilterOnboardingHint.tsx` Pattern:

- **localStorage-Key**: `playbook-filter-hint-dismissed`
- **Position**: Unter den Filtern, uber den Ergebnissen

### Copy (bilingual)

**EN**: "Quick Tip: Answer 3-5 questions to find your perfect playbook."
**DE**: "Tipp: Beantworte 3-5 Fragen, um dein passendes Playbook zu finden."

---

## Section 2: Die 5 Filter

### Filter-Komponente: `PlaybookFilterPanel.tsx`

**Layout**:
- Jeder Filter als horizontale Pill-Row mit Label und Icon
- Alle Filter Single-Select (Default: "All")
- Klickbare Buttons statt Dropdowns

### Filter 1: Need-for-Action

```text
Icon: AlertCircle
Options:
- All
- Revenue not growing
- Product not scaling
- Pricing not working
- Customers churning
- Operations chaotic
- AI transformation needed
- Board wants results
- Portfolio underperforming
```

### Filter 2: Impact

```text
Icon: Target
Options:
- All
- Reduce costs
- Increase revenue
- Improve margins
- Retain customers
- Scale operations
- Accelerate product
- Raise capital
- Transform organization
```

### Filter 3: Timeframe

```text
Icon: Clock
Options:
- All
- Quick Win (4-8 weeks)
- Mid-Term (8-12 weeks)
- Long-Term (12-24 weeks)
- Transformation (6-12 months)
```

### Filter 4: Capability

```text
Icon: Gauge
Options:
- All
- Limited
- Moderate
- Focused
```

### Filter 5: Capacity

```text
Icon: Users
Options:
- All
- Firefighting
- Goal-oriented
- Transformation-ready
```

---

## Datenmodell-Erweiterung

### Playbook Interface (erweitert)

```typescript
interface Playbook {
  // Existierende Felder bleiben
  id: string;
  title: { en: string; de: string };
  // ...

  // NEUE Filter-Tags
  needForAction: NeedForActionTag[];
  impact: ImpactTag[];
  timeframe: TimeframeTag;
  capability: CapabilityTag;
  capacity: CapacityTag;
}
```

### Filter-Tags Typen

```typescript
type NeedForActionTag = 
  | 'revenue-not-growing'
  | 'product-not-scaling'
  | 'pricing-not-working'
  | 'customers-churning'
  | 'operations-chaotic'
  | 'ai-transformation'
  | 'board-wants-results'
  | 'portfolio-underperforming';

type ImpactTag = 
  | 'reduce-costs'
  | 'increase-revenue'
  | 'improve-margins'
  | 'retain-customers'
  | 'scale-operations'
  | 'accelerate-product'
  | 'raise-capital'
  | 'transform-organization';

type TimeframeTag = 
  | 'quick-win'      // 4-8 weeks
  | 'mid-term'       // 8-12 weeks
  | 'long-term'      // 12-24 weeks
  | 'transformation'; // 6-12 months

type CapabilityTag = 
  | 'limited'
  | 'moderate'
  | 'focused';

type CapacityTag = 
  | 'firefighting'
  | 'goal-oriented'
  | 'transformation-ready';
```

---

## Mapping der existierenden Playbooks

### Beispiel-Mapping

| Playbook | Need | Impact | Timeframe | Capability | Capacity |
|----------|------|--------|-----------|------------|----------|
| AI-Native GTM: Sales-Led | revenue-not-growing | increase-revenue | mid-term | moderate | goal-oriented |
| Ops Automation Foundation | operations-chaotic | reduce-costs | quick-win | limited | firefighting |
| AI Board Governance | board-wants-results | transform-organization | quick-win | focused | transformation-ready |

---

## Filterlogik

### Match-Score Berechnung

```typescript
function calculateMatchScore(playbook: Playbook, filters: ActiveFilters): number {
  let score = 0;
  
  // Need-for-Action: +30 Punkte bei Match
  if (filters.needForAction === 'all' || playbook.needForAction.includes(filters.needForAction)) {
    score += 30;
  }
  
  // Impact: +25 Punkte bei Match
  if (filters.impact === 'all' || playbook.impact.includes(filters.impact)) {
    score += 25;
  }
  
  // Timeframe: +20 Punkte bei Match
  if (filters.timeframe === 'all' || playbook.timeframe === filters.timeframe) {
    score += 20;
  }
  
  // Capability: +15 Punkte bei Match
  if (filters.capability === 'all' || playbook.capability === filters.capability) {
    score += 15;
  }
  
  // Capacity: +10 Punkte bei Match
  if (filters.capacity === 'all' || playbook.capacity === filters.capacity) {
    score += 10;
  }
  
  return score;
}
```

### Sortierung

Ergebnisse werden nach Match-Score absteigend sortiert.

---

## UI/UX Design

### Filter-Section Layout

```text
+------------------------------------------------------------------+
|                    [Search Playbooks...]                          |
+------------------------------------------------------------------+

+------------------------------------------------------------------+
|  Quick Tip: Answer 3-5 questions to find your perfect playbook [X]|
+------------------------------------------------------------------+

[AlertCircle] Need-for-Action:
[All] [Revenue not growing] [Product not scaling] [Pricing not working] ...

[Target] Impact:
[All] [Reduce costs] [Increase revenue] [Improve margins] ...

[Clock] Timeframe:
[All] [Quick Win (4-8w)] [Mid-Term (8-12w)] [Long-Term (12-24w)] ...

[Gauge] Capability:
[All] [Limited] [Moderate] [Focused]

[Users] Capacity:
[All] [Firefighting] [Goal-oriented] [Transformation-ready]

                    Showing 12 of 22 playbooks
```

### Button States

- **Default/Inactive**: `bg-card border border-border`
- **Active**: `bg-primary/20 text-primary border-primary/30`
- **Hover**: `border-primary/50`

---

## Dateien und Anderungen

| Datei | Aktion | Beschreibung |
|-------|--------|--------------|
| `src/data/playbookFilters.ts` | Neu | Filter-Definitionen und Typen |
| `src/data/playbooks.ts` | Neu | Ausgelagerte Playbook-Daten mit neuen Tags |
| `src/components/playbooks/PlaybookOnboardingHint.tsx` | Neu | Onboarding Hint |
| `src/components/playbooks/PlaybookFilterRow.tsx` | Neu | Einzelne Filter-Row |
| `src/components/playbooks/PlaybookFilterPanel.tsx` | Neu | Container fur alle 5 Filter |
| `src/components/playbooks/PlaybookCard.tsx` | Neu | Ausgelagerte Card-Komponente |
| `src/components/playbooks/PlaybookModal.tsx` | Neu | Ausgelagerte Modal-Komponente |
| `src/components/PlaybookLibrary.tsx` | Refactor | Neue Filter integrieren, alte entfernen |

---

## Technische Details

### URL-Parameter Support

```typescript
// Sync filters mit URL
const [searchParams, setSearchParams] = useSearchParams();

useEffect(() => {
  const params = new URLSearchParams();
  if (needFilter !== 'all') params.set('need', needFilter);
  if (impactFilter !== 'all') params.set('impact', impactFilter);
  if (timeframeFilter !== 'all') params.set('timeframe', timeframeFilter);
  if (capabilityFilter !== 'all') params.set('capability', capabilityFilter);
  if (capacityFilter !== 'all') params.set('capacity', capacityFilter);
  setSearchParams(params, { replace: true });
}, [filters]);
```

### localStorage fur Onboarding-Hint

```typescript
const [isDismissed] = useState(() => {
  return localStorage.getItem('playbook-filter-hint-dismissed') === 'true';
});
```

---

## Erfolgsmetriken (aus Briefing)

| Metrik | Ziel |
|--------|------|
| Filter Usage | 60-80% der User nutzen mindestens 3 Filter |
| Conversion | 8-12% der User klicken auf Playbook-CTA |
| Match Quality | User finden passendes Playbook in <2 Minuten |

---

## Implementierungs-Reihenfolge

1. **Phase 1: Daten-Layer**
   - `playbookFilters.ts` erstellen (Typen + Filter-Definitionen)
   - `playbooks.ts` erstellen (Playbooks mit neuen Tags)

2. **Phase 2: Komponenten**
   - `PlaybookOnboardingHint.tsx` erstellen
   - `PlaybookFilterRow.tsx` erstellen
   - `PlaybookFilterPanel.tsx` erstellen
   - `PlaybookCard.tsx` auslagern
   - `PlaybookModal.tsx` auslagern

3. **Phase 3: Integration**
   - `PlaybookLibrary.tsx` refactoren
   - URL-Sync implementieren
   - Match-Score-Sortierung hinzufugen

4. **Phase 4: Testing**
   - Filter-Kombinationen testen
   - Responsive Verhalten prufen
   - localStorage-Persistenz verifizieren
