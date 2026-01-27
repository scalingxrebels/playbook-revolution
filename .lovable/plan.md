

# Plan: Neue "Die Formel" Section erstellen

## Übersicht

Eine neue Section "Die Formel" wird nach "How It Works" eingefügt. Sie folgt dem gleichen Design-Pattern wie "SolutionOptimized.tsx". Der CTA-Button wird von "How It Works" in diese neue Section verschoben.

---

## Struktur der neuen Section

```text
┌─────────────────────────────────────────┐
│  OVERLINE: "Die Formel für Hypergrowth" │
│  HEADLINE: Formel groß formatiert       │
│  SUBHEADLINE: Erklärung                 │
│  3 COMPONENT CARDS (Grid 1×3)           │
│  CTA BUTTON                             │
└─────────────────────────────────────────┘
```

---

## Änderungen

### 1. Neue Datei erstellen: `src/components/homepage/FormulaOptimized.tsx`

**Inhalte:**

| Element | Deutsch | Englisch |
|---------|---------|----------|
| Overline | Die Formel für Hypergrowth | The Formula for Hypergrowth |
| Headline Zeile 1 | Growth Engines × Scaling Systems × AI | Growth Engines × Scaling Systems × AI |
| Headline Zeile 2 | = Scaling Success | = Scaling Success |
| Subheadline | Drei Komponenten müssen zusammenspielen. Wenn eine fehlt, funktioniert die Formel nicht. | Three components must work together. If one is missing, the formula doesn't work. |

**Component Cards (3 Stück):**

| # | Icon | Titel | Beschreibung | Details | Warning |
|---|------|-------|--------------|---------|---------|
| 1 | Rocket | Growth Engines | Alles, was Wachstum antreibt. | • Kundengewinnung (Sales & Marketing)<br>• Produktentwicklung (Features, die Kunden lieben)<br>• Kundenbindung (Retention & Expansion) | Ohne Growth Engines: Kein Umsatzwachstum |
| 2 | Cpu | Scaling Systems | Alles, was dein Unternehmen am Laufen hält. | • Prozesse & Operations (Wie läuft der Laden?)<br>• Finanzen & Kapital (Wie lange reicht das Geld?)<br>• Team & Governance (Wer macht was? Wer entscheidet?) | Ohne Scaling Systems: Chaos wächst schneller als Umsatz |
| 3 | Zap | AI als Multiplikator | AI verstärkt beides – Growth Engines und Scaling Systems. | • 10-30x schnellere Prozesse<br>• 2-4x bessere Profitabilität<br>• Von 72 Monaten auf 13 Monate zu €100M ARR | Ohne AI: Du bist 4x langsamer als Competitors |

**CTA-Button (von How It Works verschoben):**
- DE: "Finde deine Schwachstelle (kostenlos)"
- EN: "Find Your Weakness (free)"
- Scrollt zu #roi-calculator

---

### 2. Datei bearbeiten: `src/components/homepage/HowItWorksOptimized.tsx`

**Entfernen (Zeilen 136-146):**
- Der gesamte CTA-Block wird entfernt:
```tsx
{/* CTA */}
<div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
  <Button ...>
    ...
  </Button>
</div>
```

**Auch entfernen:**
- `scrollToCalculator` Funktion (Zeilen 58-60)
- `Button` und `ArrowRight` aus Imports (Zeile 3-4)

---

### 3. Datei bearbeiten: `src/pages/Index.tsx`

**Import hinzufügen:**
```tsx
import FormulaOptimized from '@/components/homepage/FormulaOptimized';
```

**Section einfügen nach HowItWorksOptimized (nach Zeile 33):**
```tsx
{/* SECTION 5: DIE FORMEL (50vh) */}
<FormulaOptimized />
```

**Kommentare anpassen:**
- SECTION 5 wird "DIE FORMEL"
- SECTION 6 wird "PROOF & VALIDATION"
- SECTION 7 wird "ROI CALCULATOR"
- SECTION 8 wird "FINAL CTA"

---

## Design-Details (wie SolutionOptimized)

| Element | Wert |
|---------|------|
| Section Höhe | `min-h-[50vh]` |
| Padding | `py-24 lg:py-32` |
| Container | `max-w-6xl mx-auto px-6` |
| Background | `bg-mesh` mit Parallax |
| Grid | `grid md:grid-cols-3 gap-8` |
| Card Border | `border-2 border-primary/30 hover:border-primary` |
| Card Padding | `p-8` |
| Overline | `text-sm font-semibold uppercase tracking-widest text-accent` |
| H2 | `font-display text-display-md text-foreground` |
| Scroll Animation | `useScrollAnimation({ threshold: 0.1 })` |

---

## Betroffene Dateien

| Datei | Aktion |
|-------|--------|
| `src/components/homepage/FormulaOptimized.tsx` | NEU erstellen |
| `src/components/homepage/HowItWorksOptimized.tsx` | CTA entfernen, Imports bereinigen |
| `src/pages/Index.tsx` | Import + Section einfügen |

