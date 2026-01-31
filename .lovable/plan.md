
# Implementierungsplan: Playbook v3.0 Assessment-Mapping

## Übersicht

Alle 8 verbleibenden Playbooks werden auf v3.0 synchronisiert mit korrektem Assessment-Mapping zu den bestehenden Decision Support Solutions.

---

## Decision Support Solutions (Mapping-Referenz)

| ID | Solution | Preis | Route |
|----|----------|-------|-------|
| 3 | GTM Effectiveness Review | €3.9K-€5.9K | `/solutions/gtm-effectiveness-review` |
| 4 | Pricing & Packaging Review | €3.9K-€5.9K | `/solutions/pricing-packaging-review` |
| 5 | Scaling Readiness Assessment | €3.9K-€5.9K | `/solutions/scaling-readiness-assessment` |
| 6 | AI Maturity Assessment | €3.9K-€5.9K | `/solutions/ai-maturity-assessment` |
| 7 | Investor-Readiness Pitch Deck Check | €1.9K-€2.5K | `/solutions/investor-readiness-pitch-deck-check` |
| 8 | VC Due Diligence Simulation | €5.9K | `/solutions/vc-dd-simulation` |
| 9 | Portfolio Assessment | €3.9K-€5.9K | `/solutions/portfolio-assessment` |
| 10 | Custom Analysis & Report | €3.9K-€5.9K | `/solutions/custom-analysis-report` |

---

## Playbook-zu-Assessment Mapping

| Playbook | Assessment-Mapping | Begründung |
|----------|-------------------|------------|
| AI-Native Scaling | AI Maturity Assessment | AI-Transformation Fokus |
| Strategic Capabilities | Scaling Readiness Assessment | Strategy + Execution Capabilities |
| Growth Engines | GTM Effectiveness Review | GTM/Revenue Engine Fokus |
| Operating Systems | Scaling Readiness Assessment | Operations Excellence Fokus |
| Board Governance | Investor-Readiness Pitch Deck Check | Board Confidence Fokus |
| Exit/M&A | VC Due Diligence Simulation | Exit Readiness Fokus |
| Portfolio Transformation | Portfolio Assessment | VC/PE Portfolio Fokus |
| Portfolio Excellence | Portfolio Assessment | VC/PE Portfolio Fokus |

---

## Implementierung pro Playbook

### 1. AI-Native Scaling (`ai-native-scaling.ts`)

**Status:** 3 Items (Power Up, Boost, Accelerate) - Assessment fehlt

**Änderung:** Neues Assessment-Item am Anfang einfügen

```text
Assessment hinzufügen:
- type: "assessment"
- name: "AI Maturity Assessment"
- duration: "3-5 Days"
- price: "€3.9K-€5.9K"
- outcome: "Full AI maturity assessment (8 dimensions), AI Maturity Level scoring, 90-day roadmap"
- cta: "Book Assessment"
- link: "/solutions/ai-maturity-assessment"
- icon: "ClipboardCheck"
- color: "bg-emerald-500/10 text-emerald-500"

Existing Items aktualisieren:
- Power Up color: "bg-orange-500/10 text-orange-500"
- Boost color: "bg-blue-500/10 text-blue-500"
- Accelerate color: "bg-violet-500/10 text-violet-500"
```

---

### 2. Strategic Capabilities (`strategic-capabilities.ts`)

**Status:** 2 Items (Power Up, Boost) - Assessment und Accelerate fehlen

**Änderung:** Assessment vorne, Accelerate hinten einfügen

```text
Assessment hinzufügen:
- type: "assessment"
- name: "Scaling Readiness Assessment"
- duration: "3-5 Days"
- price: "€3.9K-€5.9K"
- outcome: "Full capability assessment (Strategy, Setup, Execution, Operationalization), bottleneck identification, 90-day roadmap"
- cta: "Book Assessment"
- link: "/solutions/scaling-readiness-assessment"
- icon: "ClipboardCheck"
- color: "bg-emerald-500/10 text-emerald-500"

Accelerate hinzufügen:
- type: "accelerate"
- name: "AI-Native Capabilities"
- duration: "12 Months"
- price: "€153K"
- outcome: "Full capability transformation, all 4 capabilities × AI Maturity Level 3, 3-5x scaling velocity"
- cta: "Start Accelerate"
- link: "/solutions/accelerate"
- icon: "TrendingUp"
- color: "bg-violet-500/10 text-violet-500"

Existing Items aktualisieren:
- Power Up name: "Capability Sprint"
- Power Up price: "€23.6K-€45.9K"
- Power Up color: "bg-orange-500/10 text-orange-500"
- Boost name: "Capability Excellence"
- Boost color: "bg-blue-500/10 text-blue-500"
```

---

### 3. Growth Engines (`growth-engines.ts`)

**Status:** 4 Items vorhanden, aber Assessment hat type "power-up" statt "assessment"

**Änderung:** Type korrigieren, Link aktualisieren, Color-Format

```text
Item 1 korrigieren:
- type: "power-up" → "assessment"
- name: "GTM Effectiveness Review" (behalten)
- link: "/solutions/assessment" → "/solutions/gtm-effectiveness-review"
- color: "emerald" → "bg-emerald-500/10 text-emerald-500"

Remaining Items color-Format:
- Power Up color: "orange" → "bg-orange-500/10 text-orange-500"
- Boost color: "blue" → "bg-blue-500/10 text-blue-500"
- Accelerate color: "violet" → "bg-violet-500/10 text-violet-500"
```

---

### 4. Operating Systems (`operating-systems.ts`)

**Status:** 4 Items vorhanden, aber Assessment hat type "power-up" statt "assessment"

**Änderung:** Type korrigieren, Link aktualisieren, Color-Format

```text
Item 1 korrigieren:
- type: "power-up" → "assessment"
- name: "Scaling Readiness Assessment"
- link: "/solutions/assessment" → "/solutions/scaling-readiness-assessment"
- color: "green" → "bg-emerald-500/10 text-emerald-500"

Remaining Items color-Format:
- Power Up color: "orange" → "bg-orange-500/10 text-orange-500"
- Boost color: "blue" → "bg-blue-500/10 text-blue-500"
- Accelerate color: "purple" → "bg-violet-500/10 text-violet-500"
```

---

### 5. Board Governance (`board-governance.ts`)

**Status:** 4 Items vorhanden, aber Assessment hat type "power-up" statt "assessment"

**Änderung:** Type korrigieren, Link aktualisieren, Color-Format

```text
Item 1 korrigieren:
- type: "power-up" → "assessment"
- name: "Board Readiness Check"
- link: "/solutions/assessment" → "/solutions/investor-readiness-pitch-deck-check"
- price: "€2.5K-€10K" → "€1.9K-€2.5K" (Pitch Deck Check Preis)
- color: "cyan" → "bg-emerald-500/10 text-emerald-500"

Remaining Items color-Format:
- Power Up color: "orange" → "bg-orange-500/10 text-orange-500"
- Boost color: "purple" → "bg-blue-500/10 text-blue-500"
- Accelerate color: "emerald" → "bg-violet-500/10 text-violet-500"
```

---

### 6. Exit/M&A (`exit-ma.ts`)

**Status:** 4 Items vorhanden, Assessment hat bereits type "assessment" (korrekt)

**Änderung:** Link aktualisieren, Color-Format anpassen

```text
Item 1 korrigieren:
- link: "/solutions/assessment" → "/solutions/vc-dd-simulation"
- color: "green" → "bg-emerald-500/10 text-emerald-500"

Remaining Items color-Format:
- Power Up color: "amber" → "bg-orange-500/10 text-orange-500"
- Boost color: "orange" → "bg-blue-500/10 text-blue-500"
- Accelerate color: "violet" → "bg-violet-500/10 text-violet-500"
```

---

### 7. Portfolio Transformation (`portfolio-transformation.ts`)

**Status:** 4 Items vorhanden, aber Assessment hat type "power-up" statt "assessment"

**Spezialfall:** Portfolio hat eigene Pricing-Struktur (€10K-€25K)

**Änderung:** Type korrigieren, Color-Format anpassen

```text
Item 1 korrigieren:
- type: "power-up" → "assessment"
- name: "Portfolio Assessment" (behalten)
- price: "€10K-€25K" (behalten - Portfolio-spezifisch)
- link: "/solutions/portfolio-assessment" (behalten)
- color: "blue" → "bg-emerald-500/10 text-emerald-500"

Remaining Items color-Format:
- Power Up color: "orange" → "bg-orange-500/10 text-orange-500"
- Boost color: "purple" → "bg-blue-500/10 text-blue-500"
- Accelerate color: "violet" → "bg-violet-500/10 text-violet-500"
```

---

### 8. Portfolio Excellence (`portfolio-excellence.ts`)

**Status:** 4 Items vorhanden, aber Assessment hat type "power-up" statt "assessment"

**Spezialfall:** Portfolio hat eigene Pricing-Struktur (€10K-€25K)

**Änderung:** Type korrigieren, Color-Format anpassen

```text
Item 1 korrigieren:
- type: "power-up" → "assessment"
- name: "Portfolio Assessment" (behalten)
- price: "€10K-€25K" (behalten - Portfolio-spezifisch)
- link: "/solutions/portfolio-assessment" (behalten)
- color: "cyan" → "bg-emerald-500/10 text-emerald-500"

Remaining Items color-Format:
- Boost (Quick Fix) color: "green" → "bg-orange-500/10 text-orange-500"
- Accelerate (Transformation) color: "purple" → "bg-blue-500/10 text-blue-500"
- Accelerate (AI-Native) color: "pink" → "bg-violet-500/10 text-violet-500"
```

---

## Zusammenfassung

| Playbook | Dateien | Änderungen |
|----------|---------|------------|
| AI-Native Scaling | `ai-native-scaling.ts` | +1 Item (Assessment), 3 Color-Updates |
| Strategic Capabilities | `strategic-capabilities.ts` | +2 Items (Assessment, Accelerate), 2 Updates |
| Growth Engines | `growth-engines.ts` | Type-Fix, Link-Update, 4 Color-Updates |
| Operating Systems | `operating-systems.ts` | Type-Fix, Link-Update, 4 Color-Updates |
| Board Governance | `board-governance.ts` | Type-Fix, Link-Update, Price-Update, 4 Color-Updates |
| Exit/M&A | `exit-ma.ts` | Link-Update, 4 Color-Updates |
| Portfolio Transformation | `portfolio-transformation.ts` | Type-Fix, 4 Color-Updates |
| Portfolio Excellence | `portfolio-excellence.ts` | Type-Fix, 4 Color-Updates |

**Gesamt:** 8 Dateien, ca. 40 Änderungen

---

## Implementierungsreihenfolge

Aufgrund der Micro-Batch-Constraint empfehle ich folgende Reihenfolge:

1. **AI-Native Scaling** (Master Playbook, höchste Priorität)
2. **Strategic Capabilities** (Meta-Playbook)
3. **Growth Engines** (Domain Playbook)
4. **Operating Systems** (Domain Playbook)
5. **Board Governance** (Domain Playbook)
6. **Exit/M&A** (Sub-Playbook)
7. **Portfolio Transformation** (Domain Playbook)
8. **Portfolio Excellence** (Sub-Playbook)

---

## Technische Hinweise

- Alle `color` Werte werden auf Tailwind Utility Strings umgestellt (z.B. `bg-emerald-500/10 text-emerald-500`)
- Assessment-Type verwendet immer `type: "assessment"` (nicht "power-up")
- Links verweisen auf die entsprechenden Decision Support Landing Pages
- Portfolio-Playbooks behalten ihre spezielle Pricing-Struktur (€10K-€25K)
