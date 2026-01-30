

# Plan: Growth Timeline Farbkonsistenz + Animation-Fix

## Übersicht

Die Growth Timeline Animation hat zwei Probleme:
1. **Notion-Farbe inkonsistent**: Timeline verwendet `#A855F7`, Kacheln verwenden `#171717/#E5E5E5`
2. **Animation wackelt**: Die Kurven interpolieren falsch und animieren kontinuierlich statt smooth einzublenden

---

## Problem 1: Farbinkonsistenz bei Notion

### Aktuelle Situation

| Component | Notion Farbe |
|-----------|--------------|
| ScalingXCaseStudies (Kacheln) | `#171717` (Light) / `#E5E5E5` (Dark) |
| GrowthTimelineVisualization | `#A855F7` (Lila - FALSCH!) |

### Lösung

**Datei:** `src/components/GrowthTimelineVisualization.tsx`

**Zeile 98-103 ändern:**
```typescript
// ALT:
{
  id: 'notion',
  name: 'Notion',
  icon: FileText,
  color: '#A855F7',  // FALSCH - Lila statt Notion-Schwarz
  ...
}

// NEU:
{
  id: 'notion',
  name: 'Notion',
  icon: FileText,
  color: '#171717',
  darkColor: '#E5E5E5',  // NEU für Dark Mode Konsistenz
  ...
}
```

### Theme-Aware Color im Rendering

Import hinzufügen und dynamische Farbauswahl implementieren:

```typescript
import { useTheme } from '@/contexts/ThemeContext';

// Im Component:
const { theme } = useTheme();

// Im Rendering:
const companyColor = (theme === 'dark' && company.darkColor) 
  ? company.darkColor 
  : company.color;
```

---

## Problem 2: Animation wackelt

### Ursache

Die aktuelle Animation hat mehrere Probleme:

1. **Interpolation bei jedem Frame**: Die Datenpunkte werden mit `animationProgress` multipliziert, was die Y-Werte kontinuierlich ändert
2. **Halbe Jahresschritte**: `year += 0.5` erzeugt künstliche Zwischenpunkte
3. **Kein stabiler Endzustand**: Die Kurven "zittern" während der Animation

### Aktuelle Logik (Zeilen 167-189)

```typescript
for (let year = minYear; year <= maxYear; year += 0.5) {
  // ... interpoliert values * animationProgress
}
```

Das führt zu:
- Kurven ändern kontinuierlich ihre Form
- Keine flüssige "Wachstums"-Animation
- Milestone-Punkte wackeln

### Lösung: Stroke-dashoffset Animation

Statt die Datenwerte zu animieren, verwenden wir die bewährte SVG-Technik:

1. **Vollständige Kurve rendern** (ohne animationProgress auf Y-Werte)
2. **Kurve via strokeDasharray/strokeDashoffset einblenden**
3. **Milestone-Punkte sequentiell einblenden**

### Implementation

**Schritt 1: Timeline-Daten ohne Animation-Multiplikator**

```typescript
// ALT (wackelt):
point[company.id] = dataPoint.value * animationProgress;

// NEU (stabil):
point[company.id] = dataPoint.value;
```

**Schritt 2: CSS-basierte Stroke-Animation**

```typescript
<Line
  key={company.id}
  type="monotone"
  dataKey={company.id}
  stroke={companyColor}
  strokeWidth={3}
  dot={false}
  strokeDasharray="2000"
  strokeDashoffset={2000 * (1 - animationProgress)}
  style={{
    transition: 'stroke-dashoffset 0.1s linear'
  }}
/>
```

**Schritt 3: Milestone-Punkte mit Delay**

```typescript
{company.data
  .filter(d => d.milestone)
  .map((d, i) => {
    const pointProgress = (d.year - minYear) / (maxYear - minYear);
    const isVisible = animationProgress >= pointProgress;
    
    return (
      <ReferenceDot
        key={`${company.id}-${i}`}
        x={d.year}
        y={d.value}
        r={isVisible ? 8 : 0}
        fill={companyColor}
        stroke="hsl(var(--background))"
        strokeWidth={2}
        style={{ transition: 'r 0.3s ease-out' }}
      />
    );
  })
}
```

---

## Zusammenfassung der Änderungen

| Datei | Änderung |
|-------|----------|
| `src/components/GrowthTimelineVisualization.tsx` | Notion-Farbe korrigieren, Theme-Hook, Stroke-Animation statt Value-Animation |

---

## Erwartetes Ergebnis

| Problem | Vorher | Nachher |
|---------|--------|---------|
| Notion-Farbe | Lila (`#A855F7`) | Schwarz/Weiß konsistent mit Kacheln |
| Animation | Kurven wackeln, Werte ändern sich | Smooth Stroke-Reveal von links nach rechts |
| Milestones | Wackeln mit Kurve | Erscheinen sequentiell wenn Kurve sie erreicht |

---

## Technische Details

### strokeDasharray/strokeDashoffset Technik

Diese Standard-SVG-Animationstechnik:
- `strokeDasharray="2000"` - Linie besteht aus einem 2000px Strich
- `strokeDashoffset="2000"` - Offset versteckt die gesamte Linie
- `strokeDashoffset="0"` - Offset 0 zeigt die gesamte Linie
- Animation von 2000 → 0 "zeichnet" die Linie

### Vorteile

1. **Keine Y-Wert-Änderungen** - Kurvenform bleibt stabil
2. **GPU-beschleunigt** - CSS-Transition auf stroke-dashoffset
3. **Natürlicher Look** - Linie "wächst" von links nach rechts
4. **Performance** - Keine kontinuierliche State-Updates nötig

