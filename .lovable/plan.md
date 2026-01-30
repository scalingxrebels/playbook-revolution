
# Plan: Expertise Page v1.1 Redesign

## Übersicht

Die Expertise-Seite muss gemäß Briefing v1.1 komplett neu strukturiert werden. Der Hero bleibt unverändert, aber die folgenden Sections werden überarbeitet:

---

## Teil 1: Neue Sektionen hinzufügen (4 FEHLEND)

### 1.1 Section 2: "Why This Matters" (NEU)

**Position:** Nach Hero, vor Research-Kacheln

**Layout:** 2-Spalten (Text links, Stats rechts)

**Inhalt:**
```
Headline: "Most Scaling Advice is Anecdotal. Ours is Systematic."

Linke Spalte (Text):
Traditional scaling advice comes from:
❌ War stories (what worked for one company)
❌ Best practices (copied from successful companies)
❌ Consultant opinions (based on experience, not data)

Our approach:
✅ Systematic analysis (n=22 AI-native companies)
✅ Pattern recognition (what works across companies)
✅ Frameworks (Strategy, Setup, Execution, Operationalization)

The result: A unified theory of AI-native scaling.

Rechte Spalte (4 Stats):
• 22 companies analyzed
• 3 frameworks developed
• 250,000+ words documented
• Openly shared
```

---

### 1.2 Section 4: "Applied Research" (NEU)

**Position:** Nach Case Studies

**Layout:** 2-Spalten (Text links, 4 Playbook-Kacheln rechts)

**Inhalt:**
```
Headline: "Want to Apply This Research?"

Linke Spalte:
"Our research is the foundation. Our playbooks show you how to execute."

Rechte Spalte (4 Playbook-Kacheln):
1. AI-Native Growth Engines → /playbooks/growth-engines
2. AI-Native Operating Systems → /playbooks/operating-systems
3. AI-Native Governance → /playbooks/board-governance
4. AI-Native Portfolio Transformation → /playbooks/portfolio-transformation

CTA: "Explore All Playbooks →" → /playbooks
```

---

### 1.3 Section 5: "Our Expertise" (NEU)

**Position:** Nach Applied Research

**Layout:** 3-Spalten Team-Kacheln (zentriert)

**Inhalt:**
```
Headline: "Who's Behind This Research?"
Subheadline: "This research was conducted by the ScalingX Hypergrowth team..."

3 Team Cards:
1. Michel Lason - Lead Researcher (18+ years, Ex-Haufe)
2. Alban Halili - Empirical Analysis (GTM & Revenue Expert)
3. Florian Metzger - Theoretical Framework (AI Architect)

CTA: "Meet the Full Team →" → /about
```

---

### 1.4 Section 6: "Download Research" (NEU)

**Position:** Nach Team Section

**Layout:** 4 Download-Kacheln im Grid

**Inhalt:**
```
Headline: "Get the Complete Research"
Subheadline: "Download our research papers (Executive Summaries)"

4 Download Cards:
1. AI Maturity Framework (3,000 words)
2. AI-Native Scaling Theory (3,000 words)
3. Bottleneck Framework (3,000 words)
4. The Unified Framework (3,000 words)

CTA: "Download All Research →"
```

---

## Teil 2: Daten-Korrekturen (KRITISCH)

### 2.1 CaseStudyComparisonTable.tsx (Zeilen 26-34)

| Company | Feld | Alt | Neu |
|---------|------|-----|-----|
| Cursor | valuation | $29.3B | $400M |
| Cursor | valuationNum | 29.3 | 0.4 |
| Cursor | revenue | $1B+ | $100M |
| Cursor | revenueNum | 1000 | 100 |
| Cursor | growth | 293x/2y | 40x/2y |
| Cursor | thetaIndex | 0.92 | 0.90 |
| Perplexity | revenue | $500M+ | $200M+ |
| Perplexity | revenueNum | 500 | 200 |
| Perplexity | thetaIndex | 0.88 | 0.85 |
| Midjourney | revenue | $500M | $492M |
| Midjourney | revenueNum | 500 | 492 |
| Midjourney | thetaIndex | 0.85 | 0.88 |

---

### 2.2 GrowthTimelineVisualization.tsx (Zeilen 28-43)

**Cursor Timeline komplett ersetzen:**
```typescript
// ALT (FALSCH - erfundene Daten):
{ year: 2025, value: 9.9, label: '$9.9B', milestone: 'Series C' },
{ year: 2025.5, value: 29.3, label: '$29.3B', milestone: 'Series D' },

// NEU (KORREKT):
{ year: 2024, value: 0.4, label: '$400M', milestone: 'Series B (Aug 2024)' },
```

**Perplexity Timeline korrigieren:**
- 2024: $500M → $200M (estimated)
- 2025: $9B bleibt

**Midjourney hinzufügen:** Falls nicht im Chart, hinzufügen mit Revenue statt Valuation

---

### 2.3 ScalingXCaseStudies.tsx

**Cursor (Zeilen 82-126):**
```typescript
headline: { metric: '$400M', label: { en: 'Valuation Aug 2024', de: 'Bewertung Aug 2024' } },
secondaryMetrics: [
  { value: '$100M', label: { en: 'ARR 2024', de: 'ARR 2024' } },
  { value: '60', label: { en: 'Employees', de: 'Mitarbeiter' } },
  { value: '$1.67M', label: { en: 'ARR/Employee', de: 'ARR/Mitarbeiter' } },
],
thetaIndex: { overall: 0.90, ... },
growthTimeline: [
  { year: '2022', value: '$0', label: 'Founded' },
  { year: '2024', value: '$400M', label: 'Series B' },
],
```

**Perplexity (Zeilen 127-170):**
```typescript
secondaryMetrics: [
  { value: '780M', label: { en: 'Queries/Month', de: 'Anfragen/Monat' } },
  { value: '$200M+', label: { en: 'Revenue (est.)', de: 'Umsatz (est.)' } },
  { value: '80-100', label: { en: 'Employees', de: 'Mitarbeiter' } },
],
thetaIndex: { overall: 0.85, ... },
```

**Midjourney (Zeilen 36-81):**
```typescript
headline: { metric: '$492M', label: { en: 'Revenue 2025', de: 'Umsatz 2025' } },
thetaIndex: { overall: 0.88, ... },
secondaryMetrics: [
  ...
  { value: '107', label: { en: 'Employees', de: 'Mitarbeiter' } },
],
```

**keyInsights.capitalEfficiency (Zeilen 386-397):**
```typescript
{ company: 'Cursor', highlight: '$100M ARR with 60 employees (most efficient per employee)' },
{ company: 'Perplexity', highlight: '$200M+ revenue, $9B valuation' },
```

---

## Teil 3: Section entfernen

### 3.1 Executive Summary entfernen

Die aktuelle "Executive Summary" Card (Zeilen 212-267 in ResearchHub.tsx) mit C₁-C₄, θ-Symbol ist **NICHT im Briefing v1.1** und sollte entfernt werden.

---

## Teil 4: Datei-Änderungen Zusammenfassung

| Datei | Aktion |
|-------|--------|
| `src/components/ResearchHub.tsx` | Section 2, 4, 5, 6 hinzufügen; Executive Summary entfernen |
| `src/components/CaseStudyComparisonTable.tsx` | Cursor, Perplexity, Midjourney Daten korrigieren |
| `src/components/GrowthTimelineVisualization.tsx` | Cursor Timeline korrigieren (keine $29.3B!) |
| `src/components/ScalingXCaseStudies.tsx` | Cursor, Perplexity, Midjourney Daten korrigieren |

---

## Teil 5: Erwartetes Ergebnis

Nach der Implementierung:

1. **7 Sections gemäß Briefing** (Hero + 6 Content Sections)
2. **Korrekte Company-Daten** (Cursor: $400M, nicht $29.3B!)
3. **Neue Sections:** Why This Matters, Applied Research, Team Teaser, Download Research
4. **Entfernt:** Executive Summary mit C₁-C₄ (nicht im Briefing)
5. **Verbessert:** Final CTA mit korrektem Wording
