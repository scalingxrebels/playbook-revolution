
# Plan: Filter 1 "Need-for-Action" entfernen

## Ubersicht

Das Playbook-Filter-System wird von 4 auf **3 Filter** reduziert:

| Aktuell (4 Filter) | Neu (3 Filter) |
|-------------------|----------------|
| ~~Need-for-Action (What's your challenge?)~~ | **ENTFERNT** |
| Impact (Which area?) | Impact (Which area?) |
| Bottleneck (What's your bottleneck?) | Bottleneck (What's your bottleneck?) |
| Role (Who are you?) | Role (Who are you?) |

---

## Neues Layout

```text
┌─────────────────────────────────────────────────────────────┐
│                   [Target] Which area?                       │
│  [All] [Growth Engines] [Operating Systems] [Board] ...    │
│               (volle Breite, zentriert)                      │
└─────────────────────────────────────────────────────────────┘

┌───────────────────────────┬─────────────────────────────────┐
│  [Gauge] What's your      │     [User] Who are you?         │
│  bottleneck?              │                                 │
│  [None][Strategy][Setup]  │  [All][CEO][CMO/CRO][COO]...   │
│  [Execution][Operational] │                                 │
└───────────────────────────┴─────────────────────────────────┘
          (2 Filter nebeneinander, kompakt)
```

---

## Technische Anderungen

### 1. `src/data/playbookFilters.ts`

**ENTFERNEN:**
- `NeedForActionTag` Typ-Definition
- `needForActionFilter` Konstante
- `needForAction` aus `ActiveFilters` Interface
- `needForAction` aus `defaultFilters`
- `needForAction` aus `FILTER_WEIGHTS`

**Neue Gewichtung (angepasst auf 100%):**

```typescript
export const FILTER_WEIGHTS = {
  impact: 45,      // war 30, jetzt erhöht
  bottleneck: 35,  // war 25, jetzt erhöht
  role: 20,        // war 15, jetzt erhöht
} as const;
```

**Neues ActiveFilters Interface:**

```typescript
export interface ActiveFilters {
  impact: ImpactTag | 'all';
  bottleneck: BottleneckTag | 'none';
  role: RoleTag | 'all';
}
```

---

### 2. `src/data/playbooks.ts`

**ENTFERNEN aus Playbook Interface:**
- `needForAction: NeedForActionTag[]`

**ENTFERNEN aus allen 13 Playbooks:**
- Die `needForAction`-Arrays werden komplett entfernt

---

### 3. `src/components/playbooks/usePlaybookFilters.ts`

**ANPASSEN:**
- URL-Parameter `need` entfernen
- `needForAction` aus Filter-State entfernen
- Match-Score-Berechnung anpassen (ohne needForAction)

---

### 4. `src/components/playbooks/PlaybookFilterPanel.tsx`

**LAYOUT ANDERN:**
- Nur noch 1 volle-Breite-Filter: Impact (Which area?)
- 2 kompakte Filter: Bottleneck + Role

```typescript
<div className="space-y-6">
  {/* Full-Width Section: Nur Impact */}
  <PlaybookFilterRowCentered ... />  {/* Impact */}
  
  {/* Compact Section: Bottleneck + Role */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border/50">
    <PlaybookFilterRowCompact ... />  {/* Bottleneck */}
    <PlaybookFilterRowCompact ... />  {/* Role */}
  </div>
</div>
```

---

### 5. `src/components/PlaybookLibrary.tsx`

**STATS ANPASSEN:**
- Von "4 Filters" auf "3 Filters"

---

## Dateien und Aktionen

| Datei | Aktion |
|-------|--------|
| `src/data/playbookFilters.ts` | NeedForAction entfernen, Gewichtung anpassen |
| `src/data/playbooks.ts` | needForAction aus Interface und allen Playbooks entfernen |
| `src/components/playbooks/usePlaybookFilters.ts` | Filter-Logik anpassen |
| `src/components/playbooks/PlaybookFilterPanel.tsx` | Layout auf 1+2 anpassen |
| `src/components/PlaybookLibrary.tsx` | Stats aktualisieren (3 Filter) |

---

## URL-Parameter (nach Anderung)

| Parameter | Beschreibung |
|-----------|--------------|
| ~~`need`~~ | **ENTFERNT** |
| `impact` | Bereich-Filter |
| `bottleneck` | Engpass-Filter |
| `role` | Rollen-Filter |

