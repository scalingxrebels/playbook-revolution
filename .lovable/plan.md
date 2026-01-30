
# Plan: Notion-Kachel Dark Mode + Animation Fix

## Übersicht

Es gibt zwei separate Probleme zu beheben:

1. **Notion-Kachel**: Die Farbe `#171717` ist im Dark Mode nicht lesbar
2. **Animation**: Die Cards bleiben nach der Animation unsichtbar wegen fehlendem `animation-fill-mode: forwards`

---

## Problem 1: Notion Dark Mode Lesbarkeit

### Ursache
Die Notion Case Study verwendet `color: '#171717'` (fast Schwarz). Diese Farbe wird verwendet für:
- Icon-Farbe
- θ-Badge Text und Background
- Headline-Metrik (z.B. "$10B")

Im Dark Mode ist der Card-Hintergrund dunkel, daher sind diese Elemente kaum sichtbar.

### Lösung: Theme-Aware Color für Notion

**Datei:** `src/components/ScalingXCaseStudies.tsx`

**Zeile 313 ändern:**
```typescript
// ALT:
color: '#171717',

// NEU:
color: 'var(--notion-color, #171717)',
darkColor: '#E5E5E5',  // Helles Grau für Dark Mode
```

**BESSER - Direkte Lösung ohne CSS-Variable:**

Da nur Notion dieses Problem hat, können wir eine bedingte Farbe basierend auf dem Theme verwenden:

```typescript
// In der caseStudies Array (Zeile 310-354):
{
  id: 'notion',
  name: 'Notion',
  icon: FileText,
  color: '#171717',
  lightColor: '#171717',  // NEU: Explizite Light Mode Farbe
  darkColor: '#E5E5E5',   // NEU: Explizite Dark Mode Farbe
  // ... rest bleibt gleich
}
```

**Dann im Rendering (Zeilen 445-497):**

Wir müssen den `useTheme` Hook importieren und die Farbe dynamisch setzen:

```typescript
import { useTheme } from '@/contexts/ThemeContext';

// Im Component:
const { theme } = useTheme();

// In der map-Funktion:
const studyColor = study.darkColor && theme === 'dark' 
  ? study.darkColor 
  : study.color;
```

---

## Problem 2: Animation funktioniert nicht

### Ursache
Die Animation in Tailwind:
```css
animation: "fade-in": "fade-in 0.5s ease-out"
```

Das Element startet mit `opacity: 0` (className) und animiert zu `opacity: 1`, aber weil kein `animation-fill-mode: forwards` in der Tailwind-Definition ist, springt die Opazität nach der Animation zurück auf 0.

Der inline-style `animationFillMode: 'forwards'` wird überschrieben von der Tailwind-Klasse.

### Lösung A: Tailwind Config anpassen

**Datei:** `tailwind.config.ts`

**Zeile 153 ändern:**
```typescript
// ALT:
"fade-in": "fade-in 0.5s ease-out",

// NEU:
"fade-in": "fade-in 0.5s ease-out forwards",
```

### Lösung B: Alternativ - CSS-Utility-Klasse verwenden

Falls wir die globale Animation nicht ändern wollen:

**Datei:** `src/index.css`

```css
.animate-fade-in-forwards {
  animation: fade-in 0.5s ease-out forwards;
}
```

Dann im Component `animate-fade-in-forwards` statt `animate-fade-in opacity-0` verwenden.

---

## Empfohlene Implementierung

| Datei | Änderung |
|-------|----------|
| `src/components/ScalingXCaseStudies.tsx` | Theme-Hook importieren, `darkColor` zu Notion hinzufügen, dynamische Farbauswahl |
| `tailwind.config.ts` | `forwards` zu `fade-in` Animation hinzufügen |

---

## Erwartetes Ergebnis

| Problem | Vorher | Nachher |
|---------|--------|---------|
| Notion Dark Mode | Schwarzer Text auf dunklem Hintergrund | Heller Text (#E5E5E5) auf dunklem Hintergrund |
| Animation | Cards bleiben unsichtbar | Cards werden eingeblendet und bleiben sichtbar |

---

## Technische Details

### CaseStudy Interface erweitern
```typescript
interface CaseStudy {
  // ... existing
  color: string;
  darkColor?: string;  // NEU: Optional für Kacheln, die im Dark Mode andere Farbe brauchen
}
```

### Dynamische Farblogik
```typescript
const studyColor = (theme === 'dark' && study.darkColor) 
  ? study.darkColor 
  : study.color;

// Verwendung in:
// - style={{ color: studyColor }}
// - style={{ backgroundColor: `${studyColor}20` }}
// - style={{ backgroundColor: `${studyColor}15` }}
```
