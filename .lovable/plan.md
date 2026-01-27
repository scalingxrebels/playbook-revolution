
# Plan: Emoji-Symbole durch Lucide-Icons ersetzen

## Übersicht

Die drei Case Study-Karten in der "Proof"-Sektion verwenden aktuell Emoji-Symbole. Diese werden durch passende Lucide-Icons ersetzt für ein konsistenteres, professionelleres Design.

---

## Aktuelle Situation

| Unternehmen | Aktuelles Symbol | Beschreibung |
|-------------|------------------|--------------|
| Midjourney | 🎨 | Emoji Palette |
| Cursor | 💻 | Emoji Laptop |
| Perplexity | 🔍 | Emoji Lupe |

---

## Neue Lucide-Icons

| Unternehmen | Lucide-Icon | Begründung |
|-------------|-------------|------------|
| Midjourney | `Palette` | AI Bildgenerierung → Künstlerische Palette |
| Cursor | `Code` | AI Code Editor → Code-Symbol |
| Perplexity | `Search` | AI Suche → Such-Symbol |

---

## Technische Umsetzung

### Datei: `src/components/homepage/ProofOptimized.tsx`

**1. Import erweitern (Zeile 4):**

```tsx
import { ArrowRight, ExternalLink, CheckCircle, Palette, Code, Search } from 'lucide-react';
```

**2. Datenstruktur anpassen (Zeilen 8-57):**

Das `logo`-Feld wird von einem String-Emoji zu einer React-Komponente geändert:

```tsx
const caseStudies = [
  {
    name: 'Midjourney',
    industry: { en: 'AI Image Generation', de: 'AI Bildgenerierung' },
    Icon: Palette,
    // ... rest bleibt gleich
  },
  {
    name: 'Cursor',
    industry: { en: 'AI Code Editor', de: 'AI Code Editor' },
    Icon: Code,
    // ... rest bleibt gleich
  },
  {
    name: 'Perplexity',
    industry: { en: 'AI Search', de: 'AI Suche' },
    Icon: Search,
    // ... rest bleibt gleich
  },
];
```

**3. Rendering anpassen (Zeile 133):**

Von:
```tsx
<span className="text-4xl">{study.logo}</span>
```

Zu:
```tsx
<study.Icon className="w-10 h-10 text-primary" />
```

---

## Betroffene Datei

| Datei | Änderungen |
|-------|------------|
| `src/components/homepage/ProofOptimized.tsx` | Import erweitern, `logo` → `Icon` in Daten, Rendering aktualisieren |

---

## Ergebnis

Die Case Study-Karten zeigen nun einheitliche Lucide-Icons statt Emojis, was ein professionelleres und konsistenteres Erscheinungsbild mit dem Rest der Website gewährleistet.
