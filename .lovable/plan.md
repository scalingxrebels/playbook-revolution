
# Plan: Echte Harmonisierung der Homepage Sections

## Identifizierte Inkonsistenzen (Dein Feedback bestätigt)

| Section | Problem | Lösung |
|---------|---------|--------|
| **How It Works** | Subheadline (`text-editorial`) zu groß – bricht das Muster anderer Sections | Subheadline entfernen oder auf `text-muted-foreground` verkleinern |
| **Proof** | H2 zweifarbig (`text-muted-foreground` + `text-gradient`) – inkonsistent | Auf einheitliche `text-foreground` ändern oder bewusst als "Highlight-Section" kennzeichnen |
| **ROI Calculator** | Badges statt Overline, andere H2-Klassen, andere Subheadline-Größe | Auf Standard-Header-Pattern umstellen |

---

## Einheitliches Header-Pattern (Referenz: Problem + Solution Sections)

```text
┌─────────────────────────────────────────────────────────────┐
│  OVERLINE                                                   │
│  text-sm font-semibold uppercase tracking-widest            │
│  Farbe: je nach Semantik (destructive/accent/primary)       │
├─────────────────────────────────────────────────────────────┤
│  HEADLINE (H2)                                              │
│  font-display text-display-md text-foreground mb-6          │
├─────────────────────────────────────────────────────────────┤
│  OPTIONAL: Trust-Badge (wie bei Proof)                      │
│  Kein großer Subheadline-Text                               │
└─────────────────────────────────────────────────────────────┘
```

**Wichtig:** Problem und Solution haben **keine** Subheadline unter der H2. How It Works sollte das auch nicht haben.

---

## Detaillierte Änderungen

### 1. HowItWorksOptimized.tsx

**Zeilen 84-89 entfernen oder stark verkleinern:**

```tsx
// VORHER (Zeile 84-89):
<p className="text-editorial text-muted-foreground max-w-3xl mx-auto">
  {language === 'de'
    ? 'Erfolgreiche Startups exzellieren...'
    : 'Successful startups excel...'
  }
</p>

// NACHHER (entfernen ODER verkleinern):
// Option A: Komplett entfernen (wie Problem/Solution)
// Option B: Verkleinern auf text-sm:
<p className="text-sm text-muted-foreground max-w-2xl mx-auto">
  {language === 'de'
    ? 'Erfolgreiche Startups exzellieren...'
    : 'Successful startups excel...'
  }
</p>
```

---

### 2. ProofOptimized.tsx

**Zeilen 85-98 – H2 vereinheitlichen:**

```tsx
// VORHER (Zeile 85-98):
<h2 className="font-display text-display-md text-foreground mb-6">
  <span className="block text-muted-foreground">
    {language === 'de' ? 'Traditionell: 500...' : 'Traditional: 500...'}
  </span>
  <span className="block text-gradient">
    {language === 'de' ? 'AI-Native: 40...' : 'AI-Native: 40...'}
  </span>
</h2>

// NACHHER – Zwei Optionen:

// Option A: Einheitliche Farbe (wie andere Sections)
<h2 className="font-display text-display-md text-foreground mb-6">
  {language === 'de' 
    ? 'Von 500 auf 40 Mitarbeiter bei €200M ARR' 
    : 'From 500 to 40 employees at €200M ARR'
  }
</h2>

// Option B: Before/After mit Kontrast aber subtiler
<h2 className="font-display text-display-md mb-6">
  <span className="block text-foreground/60 line-through">
    {language === 'de' ? 'Traditionell: 500 Mitarbeiter' : 'Traditional: 500 employees'}
  </span>
  <span className="block text-foreground">
    {language === 'de' ? 'AI-Native: 40 Mitarbeiter für €200M ARR' : 'AI-Native: 40 employees for €200M ARR'}
  </span>
</h2>
```

---

### 3. ROICalculatorOptimized.tsx

**Zeilen 236-261 – Header komplett umstrukturieren:**

```tsx
// VORHER (Zeile 242-261):
<div className="flex flex-wrap items-center justify-center gap-3 mb-4">
  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
    <Calculator className="w-4 h-4" />
    {t.badge}
  </span>
  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
    {language === 'de' ? '2 von 3 Ergebnissen garantiert' : '2 of 3 results guaranteed'}
  </span>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
  ...
</h2>
<p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
  ...
</p>

// NACHHER (Standard-Pattern):
<span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
  {t.badge}
</span>
<h2 className="font-display text-display-md text-foreground mb-6">
  {language === 'de' 
    ? 'Wie schnell kannst du auf €100M skalieren?' 
    : 'How fast can you scale to €100M?'}
</h2>
{/* Trust-Badge darunter (optional, wie bei Proof) */}
<div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border px-4 py-2 rounded-lg mb-6">
  <CheckCircle className="w-4 h-4 text-accent" />
  <span className="text-sm text-muted-foreground">
    {language === 'de' ? '2 von 3 Ergebnissen garantiert' : '2 of 3 results guaranteed'}
  </span>
</div>
```

---

## Überblick der Änderungen

| Datei | Änderung | Zeilen |
|-------|----------|--------|
| `HowItWorksOptimized.tsx` | Subheadline entfernen oder auf `text-sm` verkleinern | 84-89 |
| `ProofOptimized.tsx` | H2 auf einheitliche Farbe ändern (Option wählen) | 85-98 |
| `ROICalculatorOptimized.tsx` | Header komplett auf Standard-Pattern umbauen | 242-261 |

---

## Ergebnis nach Harmonisierung

Alle Sections folgen dann diesem Muster:

```text
[Overline: text-sm uppercase tracking-widest]
[H2: font-display text-display-md text-foreground]
[Optional: Trust-Badge in Card-Style]
[Content Cards/Grid]
[CTA Button]
```

---

## Technische Notizen

- **Keine weiteren Änderungen** an Card-Borders, Badge-Positionen oder Padding nötig (die sind bereits konsistent)
- **Fokus liegt auf Header-Pattern** – das ist der sichtbare "rote Faden", der fehlt
- **Semantische Farben** bleiben erhalten: `destructive` für Problem, `accent` für Solution/Proof, `primary` für How It Works
