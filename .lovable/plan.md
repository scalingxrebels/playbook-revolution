

# Plan: Research Section Kacheln überarbeiten

## Analyse

**Aktueller Stand:**
- 5 Research Papers mit expandierbarem Inhalt
- Komplexe Datenstruktur (wordCount, citations, downloads, keyFindings, methodology)
- md:grid-cols-2 Layout (2 Spalten)
- Klick öffnet Details inline

**Gewünschter Stand (aus Briefing):**
- 4 Kacheln mit direkten Links
- Neue Struktur: Title, Tagline, Description, Key Insight, Stats, CTA mit Link
- 2×2 Grid mit Hover-Glow
- Section Headline: "Our Research" + Subheadline

---

## Änderungen

### 1. Interface neu definieren

```typescript
interface ResearchCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  titleDe: string;
  tagline: string;
  taglineDe: string;
  description: string;
  descriptionDe: string;
  keyInsight: string;
  keyInsightDe: string;
  stats: string;
  ctaText: string;
  ctaTextDe: string;
  link: string;
}
```

### 2. Daten auf 4 Kacheln reduzieren

| # | ID | Title | Link |
|---|-----|-------|------|
| 1 | amf | AI Maturity Framework | `/expertise/amf` |
| 2 | anst | AI-Native Scaling Theory | `/expertise/anst` |
| 3 | bottleneck | Bottleneck Framework | `/tools/bottleneck-diagnosis` |
| 4 | architecture | The Unified Framework | `/expertise/architecture` |

### 3. Kachel-Inhalte (aus Briefing)

**Kachel 1 - AI Maturity Framework:**
- Icon: DNA (lucide-react)
- Tagline: "The Three Levels of AI Maturity"
- Description: "We analyzed how 22 companies use AI and found 3 distinct levels..."
- Key Insight: "AI Maturity predicts Time to €100M ARR"
- Stats: "n=22 companies | 3 levels | 6 dimensions"

**Kachel 2 - AI-Native Scaling Theory:**
- Icon: Rocket
- Tagline: "Why AI-Native Companies Scale 8.2x Faster"
- Description: "We studied 22 AI-native companies to understand..."
- Key Insight: "Scaling success = 4 Capabilities × AI Multiplier"
- Stats: "n=22 companies | 8-18 months to €100M | 4 capabilities"

**Kachel 3 - Bottleneck Framework:**
- Icon: Target
- Tagline: "What's Blocking Your Growth?"
- Description: "We found that 36% of scaling bottlenecks are in Setup..."
- Key Insight: "Your weakest capability determines your growth"
- Stats: "4 capabilities | 8 dimensions | 0-1 scoring"

**Kachel 4 - The Unified Framework:**
- Icon: Building2
- Tagline: "How It All Fits Together"
- Description: "We integrated AI Maturity, Scaling Theory, and Bottleneck Framework..."
- Key Insight: "One framework, three perspectives"
- Stats: "3 frameworks unified | 250,000+ words"

### 4. Section Headline hinzufügen

```typescript
<div className="text-center mb-10">
  <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Research</h2>
  <p className="text-muted-foreground text-lg">
    Four frameworks that explain AI-native scaling
  </p>
</div>
```

### 5. Kachel-Design anpassen

- Hover-Glow: `hover:shadow-[0_0_30px_rgba(var(--accent),0.15)]`
- Entfernen: Expandable Content, Tabs, Version Badge
- Hinzufügen: Key Insight Box (💡), Stats Row (📊), direkter CTA-Link

### 6. Kachel-Layout (JSX-Struktur)

```text
┌─────────────────────────────────┐
│ [Icon]                          │
│ Title (H3)                      │
│ Tagline (small, muted)          │
│                                 │
│ Description (2-3 Sätze)         │
│                                 │
│ 💡 Key Insight                  │
│ 📊 Stats                        │
│                                 │
│ [CTA Button →]                  │
└─────────────────────────────────┘
```

---

## Datei-Änderungen

| Datei | Änderung |
|-------|----------|
| `src/components/ResearchHub.tsx` | Interface, Daten, Rendering komplett überarbeiten |

---

## Ergebnis

- 4 klar strukturierte Kacheln statt 5 expandierbare Papers
- Direktlinks zu den Framework-Seiten und Tools
- Section Headline "Our Research" + Subheadline
- Konsistentes Hover-Glow-Design
- Bilingual (DE/EN) für alle Texte

