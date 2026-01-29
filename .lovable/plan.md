
# Plan: 4-Filter-System Redesign fur Playbooks (Michel's Definition)

## Zusammenfassung der Anderungen

Das aktuelle 5-Filter-System muss komplett auf das neue 4-Filter-System umgestellt werden:

| Aktuell (5 Filter) | Neu (4 Filter) |
|-------------------|----------------|
| Need-for-Action | Need-for-Action (angepasste Optionen) |
| Impact (Reduce costs, Increase revenue, etc.) | Impact (Growth Engines, Operating Systems, etc.) |
| Timeframe | **ENTFERNT** |
| Capability | **ENTFERNT** |
| Capacity | **ENTFERNT** |
| - | Bottleneck (NEU) |
| - | Role (NEU) |

---

## Detaillierte Anderungen

### 1. Filter-Definitionen (`src/data/playbookFilters.ts`)

**ENTFERNEN:**
- `TimeframeTag` Typ
- `CapabilityTag` Typ
- `CapacityTag` Typ
- `timeframeFilter` Definition
- `capabilityFilter` Definition
- `capacityFilter` Definition

**ANPASSEN:**

```typescript
// Need-for-Action: Optionen anpassen
export type NeedForActionTag = 
  | 'revenue-not-growing'
  | 'product-not-scaling'
  | 'customers-churning'
  | 'operations-chaotic'
  | 'costs-too-high'        // NEU (ersetzt pricing-not-working)
  | 'need-ai-transformation' // ANGEPASST
  | 'board-wants-results'
  | 'portfolio-underperforming';

// Impact: Komplett neue Optionen
export type ImpactTag = 
  | 'growth-engines'
  | 'operating-systems'
  | 'board-governance'
  | 'portfolio'
  | 'strategic-capabilities';
```

**NEU HINZUFUGEN:**

```typescript
// Bottleneck: Ersetzt C1-C4 mit verstandlichen Begriffen
export type BottleneckTag = 
  | 'strategy'
  | 'setup'
  | 'execution-focus'
  | 'operationalization';

// Role: Single-Select Filter
export type RoleTag = 
  | 'ceo'
  | 'cmo-cro'
  | 'coo'
  | 'cfo'
  | 'cto'
  | 'cpo'
  | 'vc-board';
```

**Neue ActiveFilters:**

```typescript
export interface ActiveFilters {
  needForAction: NeedForActionTag | 'all';
  impact: ImpactTag | 'all';
  bottleneck: BottleneckTag | 'none';  // Default: none
  role: RoleTag | 'all';
}
```

---

### 2. Playbook-Daten (`src/data/playbooks.ts`)

**STRUKTUR ANDERN:**

```typescript
export interface Playbook {
  id: string;
  title: { en: string; de: string };
  description: { en: string; de: string };
  outcomes: { en: string[]; de: string[] };
  caseStudies: string[];
  icon: React.ReactNode;
  gradient: string;
  
  // NEUE FILTER-TAGS (ersetzen alte)
  needForAction: NeedForActionTag[];
  impact: ImpactTag[];
  bottleneck: BottleneckTag[];
  role: RoleTag[];
  
  // Legacy-Felder entfernen oder behalten fur Referenz
  dimension?: string;
  capabilities?: string[];
  stage?: string;
  duration?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
}
```

**PLAYBOOKS REDUZIEREN:** Von 22 auf 12 Playbooks gemass Briefing:

1. AI-Native Scaling Playbook (Mutter)
2. GTM/Revenue Playbook
3. Product Playbook
4. Customer Success Playbook
5. Operations Playbook
6. Finance Playbook
7. Talent Playbook
8. Data/Tech Playbook
9. Strategic Governance Playbook
10. Operational Governance Playbook
11. Exit and M&A Playbook
12. Portfolio Excellence Playbook
13. Strategic Capabilities Playbook (optional, als 12. oder 13.)

---

### 3. Filter-Komponenten

**PlaybookFilterPanel.tsx:**

```text
Neues Layout:

┌─────────────────────────────────────────────────────────────┐
│              [AlertCircle] What's your challenge?            │
│   [All] [Revenue not growing] [Product not scaling] ...    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   [Target] Which area?                       │
│  [All] [Growth Engines] [Operating Systems] [Board] ...    │
└─────────────────────────────────────────────────────────────┘

┌───────────────────────────┬─────────────────────────────────┐
│  [Gauge] What's your      │     [User] Who are you?         │
│  bottleneck?              │                                 │
│  [None][Strategy][Setup]  │  [All][CEO][CMO/CRO][COO]...   │
│  [Execution][Operational] │                                 │
└───────────────────────────┴─────────────────────────────────┘
          (2 Filter nebeneinander, kompakt)
```

**Anderungen:**
- Need-for-Action: Volle Breite, zentriert (Label: "What's your challenge?")
- Impact: Volle Breite, zentriert (Label: "Which area?")
- Bottleneck + Role: 2-Spalten-Grid (statt 3)

---

### 4. Filter-Hook (`usePlaybookFilters.ts`)

**Anderungen:**
- URL-Parameter anpassen: `need`, `impact`, `bottleneck`, `role`
- Match-Score-Gewichtung anpassen
- Bottleneck-Filter hat Default "none" statt "all"

**Neue Gewichtung:**

```typescript
export const FILTER_WEIGHTS = {
  needForAction: 30,
  impact: 30,
  bottleneck: 25,
  role: 15,
} as const;
```

---

### 5. Icon-Map erweitern

In `PlaybookFilterRowCentered.tsx` und `PlaybookFilterRowCompact.tsx`:

```typescript
import { AlertCircle, Target, Gauge, User, Briefcase } from 'lucide-react';

const iconMap = {
  AlertCircle,
  Target,
  Gauge,       // Bottleneck
  User,        // Role
  Briefcase,   // Alternative fur Role
};
```

---

## Dateien und Aktionen

| Datei | Aktion |
|-------|--------|
| `src/data/playbookFilters.ts` | Komplett uberarbeiten (neue Typen, Filter) |
| `src/data/playbooks.ts` | Playbooks auf 12 reduzieren, neue Tags |
| `src/components/playbooks/PlaybookFilterPanel.tsx` | Layout auf 2+2 anpassen |
| `src/components/playbooks/PlaybookFilterRowCentered.tsx` | Icon-Map erweitern |
| `src/components/playbooks/PlaybookFilterRowCompact.tsx` | Icon-Map erweitern |
| `src/components/playbooks/usePlaybookFilters.ts` | 4-Filter-Logik |
| `src/components/PlaybookLibrary.tsx` | Stats anpassen (12 Playbooks, 4 Filter) |

---

## Mapping-Tabelle (aus Briefing)

| Playbook | Need-for-Action | Impact | Bottleneck | Role |
|----------|-----------------|--------|------------|------|
| AI-Native Scaling | all | all | all | ceo, all |
| GTM/Revenue | revenue-not-growing | growth-engines | strategy, execution-focus | ceo, cmo-cro |
| Product | product-not-scaling, revenue-not-growing | growth-engines | execution-focus | ceo, cpo, cto |
| Customer Success | customers-churning | growth-engines | execution-focus | ceo, cmo-cro |
| Operations | operations-chaotic | operating-systems | setup, operationalization | ceo, coo |
| Finance | costs-too-high, operations-chaotic | operating-systems | setup, operationalization | ceo, cfo, coo |
| Talent | operations-chaotic | operating-systems | setup | ceo, coo |
| Data/Tech | product-not-scaling, operations-chaotic | operating-systems | operationalization | ceo, cto, coo |
| Strategic Governance | board-wants-results | board-governance | strategy | ceo, vc-board |
| Operational Governance | operations-chaotic, board-wants-results | board-governance | operationalization | ceo, coo, vc-board |
| Exit and M&A | board-wants-results | board-governance | strategy | ceo, cfo, vc-board |
| Portfolio Excellence | portfolio-underperforming | portfolio | strategy, operationalization | vc-board |
| Strategic Capabilities | need-ai-transformation, all | strategic-capabilities | strategy, setup, execution-focus, operationalization | ceo, all |

---

## Implementierungs-Reihenfolge

1. **Phase 1: Daten-Layer**
   - `playbookFilters.ts` komplett uberarbeiten
   - Neue Typen und Filter-Definitionen

2. **Phase 2: Playbook-Daten**
   - `playbooks.ts` auf 12 Playbooks reduzieren
   - Neue Filter-Tags zuweisen

3. **Phase 3: Komponenten**
   - `PlaybookFilterPanel.tsx` auf 2+2 Layout
   - Icon-Maps erweitern
   - Filter-Hook anpassen

4. **Phase 4: Integration**
   - `PlaybookLibrary.tsx` Stats aktualisieren
   - URL-Parameter testen

---

## Bilinguale Labels (aus Briefing)

| Filter | Label EN | Label DE |
|--------|----------|----------|
| Need-for-Action | What's your challenge? | Was ist deine Herausforderung? |
| Impact | Which area? | Welcher Bereich? |
| Bottleneck | What's your bottleneck? | Was ist dein Engpass? |
| Role | Who are you? | Wer bist du? |

---

## Wichtige Hinweise

1. **Bottleneck Default**: "None" statt "All" - zeigt alle Playbooks ohne Bottleneck-Filter
2. **Role ist Single-Select**: Nur eine Rolle gleichzeitig wahlbar
3. **Impact komplett neu**: Keine Uberschneidung mit alten Optionen
4. **12 Playbooks statt 22**: Fokus auf die Kern-Playbooks aus dem Briefing
