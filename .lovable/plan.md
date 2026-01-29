
# Plan: GTM/Revenue Playbook v2.0 - Komplette Überarbeitung

## Zusammenfassung der Änderungen

Das Briefing erfordert eine umfassende Überarbeitung:
- **Alt:** 3-Komponenten-Framework (ICP Clarity + Sales Motion + RevOps)
- **Neu:** 7-Hebel-Framework (ICP Clarity, Outbound Sales, Inbound Marketing, Channel Partners, Pricing, Sales Process, PLG)
- **URL-Änderung:** `/playbooks/gtm-revenue` → `/playbooks/growth-engines/gtm-revenue`

---

## Teil 1: Kachel-Daten aktualisieren

### Datei: `src/data/playbooks.ts`

**Änderungen:**
| Feld | Alt | Neu |
|------|-----|-----|
| slug | `gtm-revenue` | `growth-engines/gtm-revenue` |
| description (en) | 3-component framework... | 7-lever framework (ICP Clarity, Outbound Sales, Inbound Marketing, Channel Partners, Pricing, Sales Process, PLG)... |
| description (de) | 3-Komponenten-Framework... | 7-Hebel-Framework... |
| outcomes | 4 Items (90-day roadmap) | Aktualisierte Outcomes passend zum 7-Hebel-Framework |
| caseStudies | 3 unspezifische | 3 anonymisierte mit ARR-Entwicklung |
| bottleneck | `['strategy', 'execution-focus']` | `['strategy', 'execution-focus']` (bleibt) |

**Neuer Teaser-Text (EN):**
```
How to build a revenue engine that scales with AI.

Learn the 7-lever framework (ICP Clarity, Outbound Sales, Inbound Marketing, 
Channel Partners, Pricing, Sales Process, PLG) used by AI-native companies 
to reduce CAC by 50% and increase win rates by 100%.

Includes best practices, implementation guide, and real-world case studies 
from Series A-C companies.
```

---

## Teil 2: PlaybookCard anpassen

### Datei: `src/components/playbooks/PlaybookCard.tsx`

**Kleine Anpassungen:**
- Link-Pfad verwendet bereits `playbook.slug` dynamisch - funktioniert automatisch mit neuem Slug
- Beschreibung wird automatisch aus `playbook.description` gezogen
- Keine strukturellen Änderungen nötig

---

## Teil 3: Routing aktualisieren

### Datei: `src/App.tsx`

**Änderung:**
```typescript
// Alt:
<Route path="/playbooks/gtm-revenue" element={<PlaybookGtmRevenue />} />

// Neu:
<Route path="/playbooks/growth-engines/gtm-revenue" element={<PlaybookGtmRevenue />} />
```

---

## Teil 4: Landing Page komplett neu schreiben

### Datei: `src/pages/PlaybookGtmRevenue.tsx` (Kompletter Rewrite)

**Aktuelle Struktur (Alt - 1084 Zeilen):**
1. Hero (3-Komponenten)
2. Executive Summary
3. Framework (3 Komponenten)
4. Best Practices
5. Implementation (4 Phasen)
6. Case Studies (3 unspezifisch)
7. Resources
8. Final CTA

**Neue Struktur (8 Sektionen laut Briefing):**

### Section 1: HERO
- Headline: "GTM/Revenue Playbook"
- Subheadline: "How to build a revenue engine that scales with AI"
- Beschreibung: Traditional GTM is broken... (95 Wörter)
- Primary CTA: "Download Playbook (PDF)"
- Secondary CTA: "Book 30-Min Call"

### Section 2: THE PROBLEM
- Headline: "Why Traditional GTM is Broken"
- 4 Bullet Points mit Metriken:
  - CAC Rising: +20-40% YoY
  - Win Rates Falling: 15-25% vs 40-60%
  - Sales Cycles: 6-12 months vs 2-4 months
  - Revenue Per Employee: €150k-€250k vs €1M-€4.6M
- Visual: Comparison Charts

### Section 3: THE SOLUTION (7 Hebel)
- Headline: "The 7-Lever Framework"
- Subheadline: "How AI-native companies build revenue engines that scale"
- UI: Accordion oder Tabs für die 7 Hebel:
  1. ICP Clarity & Positioning (CAC -30-50%, Win Rate +50-100%)
  2. Outbound Sales Excellence (Pipeline +100-300%, Sales Cycle -30-50%)
  3. Inbound Marketing Mastery (Inbound Leads +200-500%)
  4. Channel Partner Strategy (Revenue +30-50% from partners)
  5. Pricing Optimization (Revenue +20-40%, Margin +10-20pp)
  6. Sales Process Excellence (Win Rate +50-100%)
  7. PLG Injection (CAC -50-70%, Time-to-Revenue -60-80%)

### Section 4: CASE STUDIES (3 Anonymisiert)
- Headline: "Real-World Results"
- 3 detaillierte Case Studies:
  1. **Series A SaaS** (€5M → €25M ARR) - Marketing Tech
  2. **Series B SaaS** (€15M → €60M ARR) - Sales Tech
  3. **Series C Company** (€30M → €100M ARR) - Data/Analytics
- Jede Case Study mit: Challenge, Solution Applied, Results, Key Takeaway, Timeline, Investment

### Section 5: IMPLEMENTATION GUIDE
- Headline: "How to Implement (90-Day Roadmap)"
- 3 Phasen statt 4:
  - Phase 1: Strategy (Week 1-2)
  - Phase 2: Setup (Week 3-4)
  - Phase 3: Execution (Week 5-8)
- Tools & Templates pro Phase

### Section 6: SOLUTIONS CONNECTION (NEU)
- Headline: "Ready to Execute? Here's How We Can Help"
- Subheadline: "Choose the right engagement model"
- 2 Solution Cards:
  1. **Power Up - CAC Crisis** (30 Tage, €23.6K)
     - Outcome: CAC -40-60%, Win Rate +20-100%
     - CTAs: "Start Power Up" + "Learn More"
  2. **Boost - GTM Transformation** (90 Tage, €60K-€78K)
     - Outcome: Revenue +30-50%, CAC -50-70%
     - CTAs: "Start Boost" + "Learn More"
- Tertiary CTA: "Book Free Call" für Unentschlossene

### Section 7: WHO IT'S FOR
- Headline: "Who Should Use This Playbook?"
- 4 Personas mit Icons:
  - CEOs: Scalable GTM engine
  - CMOs/CROs: Revenue growth & CAC efficiency
  - VP Sales: Repeatable sales process
  - VP Marketing: Qualified leads at lower cost

### Section 8: NEXT STEPS
- Headline: "Get Started Today"
- 3 CTAs:
  1. Download Playbook (PDF) - Primary
  2. Book 30-Min Call - Secondary
  3. Explore Solutions - Tertiary

---

## Technische Details

### Komponenten-Struktur

```text
PlaybookGtmRevenue.tsx
├── HeroSection (Deep Space Background)
├── ProblemSection (4 Metrics + Charts)
├── SevenLeverSection (Accordion/Tabs)
├── CaseStudiesSection (3 Cards mit Metriken)
├── ImplementationSection (3-Phasen Timeline)
├── SolutionsConnectionSection (Power Up + Boost Cards)
├── WhoItsForSection (4 Persona Cards)
└── NextStepsSection (3 CTAs)
```

### Zu verwendende UI-Komponenten
- `Accordion` (für 7 Hebel) - bereits vorhanden
- `Card` + `Badge` für Case Studies
- `Button` mit verschiedenen Variants
- `TwinklingStars` + Parallax für Hero
- `useScrollAnimation` für Section-Animationen

### Bilinguale Unterstützung
- Alle Texte mit `{ en: '...', de: '...' }` Struktur
- `useLanguage()` Hook für Sprachauswahl

---

## Datei-Übersicht

| Datei | Aktion | Beschreibung |
|-------|--------|--------------|
| `src/data/playbooks.ts` | Bearbeiten | Slug, Description, Outcomes aktualisieren |
| `src/App.tsx` | Bearbeiten | Route von `/playbooks/gtm-revenue` zu `/playbooks/growth-engines/gtm-revenue` |
| `src/pages/PlaybookGtmRevenue.tsx` | Komplett neu | 8 Sektionen gemäss Briefing (~800-1000 Zeilen) |

---

## Geschätzte Komplexität

- **Kachel-Daten:** Niedrig (Text-Updates)
- **Routing:** Niedrig (1 Zeile)
- **Landing Page:** Hoch (Kompletter Rewrite mit 8 Sektionen, 7 Hebeln, 3 Case Studies)

**Gesamtaufwand:** Hoch - Komplette Überarbeitung der Landing Page mit neuem Framework
