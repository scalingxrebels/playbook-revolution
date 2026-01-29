
# Plan: Konsistentes Filter-Layout fur Playbooks

## Ubersicht

Das Filter-Layout wird an das Solutions-Design angepasst, mit einem neuen 2-Zeilen-Layout:
- **Zeile 1-2**: Need-for-Action und Impact (volle Breite, zentriert)
- **Zeile 3**: Timeframe, Capability, Capacity (nebeneinander, kompakter)

---

## Vergleich: Vorher vs. Nachher

### Vorher (aktuell)

```text
┌─────────────────────────────────────────────────────────────┐
│ [Icon] Need-for-Action:                                     │
│ [All] [Revenue not growing] [Product not scaling] ...       │
│                                                             │
│ [Icon] Impact:                                              │
│ [All] [Reduce costs] [Increase revenue] ...                 │
│                                                             │
│ [Icon] Timeframe:                                           │
│ [All] [Quick Win] [Mid-Term] [Long-Term] ...                │
│                                                             │
│ [Icon] Capability:                                          │
│ [All] [Limited] [Moderate] [Focused]                        │
│                                                             │
│ [Icon] Capacity:                                            │
│ [All] [Firefighting] [Goal-oriented] [Transformation-ready] │
└─────────────────────────────────────────────────────────────┘
```

### Nachher (neu)

```text
                    [Icon] Need-for-Action:
    [All] [Revenue not growing] [Product not scaling] ...
                    (volle Breite, zentriert)

                        [Icon] Impact:
        [All] [Reduce costs] [Increase revenue] ...
                    (volle Breite, zentriert)

┌─────────────────┬─────────────────┬─────────────────┐
│   [Clock]       │   [Gauge]       │   [Users]       │
│   Timeframe:    │   Capability:   │   Capacity:     │
│ [All][Quick]... │ [All][Limited]  │ [All][Fire...]  │
└─────────────────┴─────────────────┴─────────────────┘
              (3 Filter nebeneinander, kompakt)
```

---

## Technische Anderungen

### 1. Neue Komponente: `PlaybookFilterRowCentered.tsx`

Fur Need-for-Action und Impact - basierend auf dem Solutions-Pattern:

```typescript
// Zentriertes Layout wie ChallengeTabNavigation
<div className="w-full">
  <div className="flex items-center justify-center gap-2 mb-3">
    <Icon className="w-4 h-4 text-muted-foreground" />
    <span className="text-sm font-medium text-muted-foreground">
      {label}
    </span>
  </div>
  <div className="flex flex-wrap gap-2 justify-center">
    {/* Pills */}
  </div>
</div>
```

### 2. Neue Komponente: `PlaybookFilterRowCompact.tsx`

Fur Timeframe, Capability, Capacity - kompaktere Variante:

```typescript
// Kompaktes Layout fur 3-Spalten-Grid
<div className="space-y-2">
  <div className="flex items-center justify-center gap-1.5">
    <Icon className="w-3.5 h-3.5 text-muted-foreground" />
    <span className="text-xs font-medium text-muted-foreground">
      {label}
    </span>
  </div>
  <div className="flex flex-wrap gap-1.5 justify-center">
    {/* Kleinere Pills: text-xs, px-2 py-1 */}
  </div>
</div>
```

### 3. Anpassung: `PlaybookFilterPanel.tsx`

Neues Layout mit 2 Sections:

```typescript
<div className="space-y-6">
  {/* Full-Width Section: Need-for-Action + Impact */}
  <div className="space-y-6">
    <PlaybookFilterRowCentered ... />  {/* Need-for-Action */}
    <PlaybookFilterRowCentered ... />  {/* Impact */}
  </div>
  
  {/* Compact Section: Timeframe + Capability + Capacity */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border/50">
    <PlaybookFilterRowCompact ... />  {/* Timeframe */}
    <PlaybookFilterRowCompact ... />  {/* Capability */}
    <PlaybookFilterRowCompact ... />  {/* Capacity */}
  </div>
</div>
```

### 4. Anpassung: `PlaybookLibrary.tsx`

Container-Styling anpassen:

```typescript
// Vorher: Box um alle Filter
<div className="mb-8 p-6 bg-card/50 border border-border rounded-xl">

// Nachher: Kein Container, wie Solutions-Seite
<div className="mb-8 space-y-6">
```

---

## Design-Details

### Full-Width Filter (Need-for-Action, Impact)

| Eigenschaft | Wert |
|-------------|------|
| Label | Zentriert uber Pills |
| Icon | 4x4, text-muted-foreground |
| Pills | px-3 py-1.5, text-sm, rounded-full |
| Ausrichtung | justify-center, flex-wrap |

### Compact Filter (Timeframe, Capability, Capacity)

| Eigenschaft | Wert |
|-------------|------|
| Label | Zentriert, kleiner (text-xs) |
| Icon | 3.5x3.5, text-muted-foreground |
| Pills | px-2 py-1, text-xs, rounded-full |
| Grid | 3 Spalten auf Desktop, 1 auf Mobile |

---

## Dateien

| Datei | Aktion |
|-------|--------|
| `src/components/playbooks/PlaybookFilterRowCentered.tsx` | Neu erstellen |
| `src/components/playbooks/PlaybookFilterRowCompact.tsx` | Neu erstellen |
| `src/components/playbooks/PlaybookFilterPanel.tsx` | Refactoren |
| `src/components/playbooks/PlaybookFilterRow.tsx` | Kann entfernt werden (nach Migration) |
| `src/components/PlaybookLibrary.tsx` | Container-Styling anpassen |

---

## Responsive Verhalten

| Breakpoint | Full-Width Filter | Compact Filter |
|------------|-------------------|----------------|
| Mobile | Volle Breite, wrap | Vertikal gestapelt |
| Tablet | Volle Breite, wrap | 3 Spalten |
| Desktop | Volle Breite, wrap | 3 Spalten |
