

# Plan: Power Up AI Quick Wins - Landing Page + Kachel-Update

## Briefing Review

### URL-Korrektur erforderlich

Das Briefing gibt `/solutions/power-up-ai-quick-wins` an, aber gemäß etabliertem Pattern sollte die URL lauten:

**Korrekt:** `/solutions/power-up/ai-quick-wins`

### Metriken-Alignment: Kachel vs. Briefing

| Metrik | Aktuelle Kachel (ID 16) | Briefing | Empfehlung |
|--------|-------------------------|----------|------------|
| AI Use Cases | 1-2 deployed | 3-5 Implemented | Briefing übernehmen |
| Productivity/Speed | +20-40% | +30-50% Operations Speed | Briefing übernehmen |
| theta_index | +0.1-0.2 | +0.2-0.3 | Briefing übernehmen |
| Duration | 30 days | 4-6 weeks | Briefing übernehmen |

Die Kachel-Metriken sind konservativer als das Briefing - wir aktualisieren auf die Briefing-Werte.

### Headline-Diskrepanz

Das Briefing verwendet "AI Laggard -> AI-Powered in 30 Days" als H1, aber die Duration ist "4-6 Weeks". Empfehlung: Headline anpassen zu **"AI Laggard -> AI-Powered"** (ohne Zeitangabe, da 4-6 Wochen im Badge steht).

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 16, Zeilen 644-677)

| Feld | Aktuell | Neu |
|------|---------|-----|
| slug | power-up-ai | power-up-ai-quick-wins |
| solutionEn | "...in 30 days: ... 1-2 AI use-cases..." | "...in 4-6 weeks... 3-5 AI use cases..." |
| solutionDe | "...in 30 Tagen: ... 1-2 AI Use-Cases..." | "...in 4-6 Wochen... 3-5 AI Use Cases..." |
| deliverablesEn | [1-2 use cases, +20-40%, +0.1-0.2] | [3-5 AI Use Cases, +30-50% Operations Speed, +0.2-0.3 theta_index] |
| deliverablesDe | (entsprechend) | (entsprechend) |
| primaryCtaEn | Start Transformation | More About AI Quick Wins |
| primaryCtaDe | Transformation starten | Mehr uber AI Quick Wins |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/power-up/ai-quick-wins |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const PowerUpAIQuickWins = lazy(() => import("./pages/PowerUpAIQuickWins"));

// Route:
<Route path="/solutions/power-up/ai-quick-wins" element={<PowerUpAIQuickWins />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/PowerUpAIQuickWins.tsx`

Struktur analog zu `PowerUpScalingVelocity.tsx` mit 7 Sektionen:

### Section 1: Hero
- **Breadcrumb:** `Solutions > Power Up AI Quick Wins`
- **Badge:** `Power Up . 4-6 Weeks . From EUR23.6K`
- **Headline:** `AI Laggard -> AI-Powered`
- **Subheadline:** Get your first AI wins in 4-6 weeks...
- **Stats:** AI Maturity +0.2-0.3 (theta_index) | 3-5 AI Use Cases Implemented | Operations Speed +30-50%
- **Trust Badges:** Outcome-Based Risk Sharing, 4-6 Week Sprint, Reference Calls Available

### Section 2: Problem
- **Headline:** `You're Falling Behind on AI`
- **Symptome:**
  - Low AI maturity: theta_index 0.3 (benchmark: 0.7+)
  - No AI use cases: 0 implemented (benchmark: 10+)
  - No AI tools: 0 deployed (benchmark: 5+)
  - Competitor gap: 3-5x slower than AI-native competitors
  - Board pressure: "When will we be AI-native?"

### Section 3: Solution
- **Headline:** `How We Deliver Your First AI Wins`
- **3-Phasen-Ansatz:**
  - Week 1-2: Identify (AI Maturity Assessment, Operations Analysis, Quick Win Identification, Tool Selection)
  - Week 2-4: Implement (3-5 AI use cases live in production - lead scoring, support, content, analysis, automation)
  - Week 4-6: Measure & Scale

### Section 4: Impact/Outcome
- **Metrics:**
  - theta_index +0.2-0.3 (Beispiel: 0.3 -> 0.5-0.6)
  - 3-5 AI Use Cases Implemented (live in production, not POC)
  - Operations Speed +30-50% (Beispiel: 5+ hours/day freed up)
- **Real Example:** Series B SaaS, EUR25M ARR, theta_index +0.3, 5 AI use cases live, Operations Speed +45%

### Section 5: Process (How We Work)
- Week-by-Week Breakdown
- Time Commitment (8-12h, 12-16h, 6-8h)
- Outcome-Based Risk Sharing Details
- Primary Metrics: theta_index (AI Maturity), AI Use Cases Implemented (#), Operations Speed (%)

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - AI maturity is low (theta_index < 0.5)
  - Competitors are 3-5x faster with AI
  - Series A-D, EUR10M-EUR50M ARR
  - Budget: EUR23.6K
- **Not a Fit:**
  - Already AI-native (theta_index > 0.7)
  - Needs full AI transformation (-> Boost/Accelerate)
  - Just wants AI strategy deck

### Section 7: Final CTA
- **Headline:** `Ready to Get Your First AI Wins?`
- **Primary CTA:** Book Free Inflection Call (30 min)
- **Secondary:** Expert Session: AI Strategy (EUR490-EUR890)
- **FAQ:** Duration, Investment, Risk Sharing, References (CTOs), ROI, AI Tools (OpenAI, Anthropic, custom models, no-code tools)

---

## Technische Details

### Komponenten-Wiederverwendung
Die neue Landing Page verwendet die gleichen Patterns wie die anderen Power Up Pages:
- `TwinklingStars` fur Hero-Hintergrund
- `useParallaxLayers` fur Parallax-Effekte
- `useScrollAnimation` fur Scroll-basierte Animationen
- `Accordion` fur FAQ-Bereich
- Bilingual (DE/EN) mit `useLanguage`

### Spezifische Icons fur AI Quick Wins
- `Zap` - Speed/Quick Wins
- `Bot` oder `Sparkles` - AI/ML
- `BarChart3` - Metrics/theta_index
- `Layers` - Use Cases
- `TrendingUp` - Operations Speed
- `Target` - Lead Scoring
- `MessageCircle` - Customer Support
- `FileText` - Content Generation
- `Search` - Data Analysis
- `Settings` - Workflow Automation

### Dateistruktur
```text
src/
  App.tsx                          # Neue Route hinzufugen
  data/
    solutionTiles.ts             # Kachel-Metriken + CTA aktualisieren
  pages/
    PowerUpCACCrisis.tsx         # Referenz
    PowerUpGrowthMomentum.tsx    # Referenz
    PowerUpPricingPower.tsx      # Referenz
    PowerUpNRREngine.tsx         # Referenz
    PowerUpScalingVelocity.tsx   # Referenz
    PowerUpAIQuickWins.tsx       # NEU
```

### URL-Pattern
Gemass etablierter Logik: `/solutions/power-up/ai-quick-wins` (nicht `/solutions/power-up-ai-quick-wins`)

### Breadcrumb-Pattern
```tsx
<BreadcrumbList>
  <BreadcrumbItem>
    <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <span className="text-foreground font-medium">Power Up AI Quick Wins</span>
  </BreadcrumbItem>
</BreadcrumbList>
```

---

## Zusammenfassung der Anderungen

| Datei | Anderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 16: Slug + Metriken + CTA + Duration aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import |
| `src/pages/PowerUpAIQuickWins.tsx` | Neue Datei (7 Sektionen) |

