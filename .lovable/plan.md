

# Plan: Expert Session Landing Page + Kachel-Update

## Zusammenfassung

Die Expert Session Landing Page wird erstellt mit 7 Sektionen und 9 Session-Typen. Die Kachel wird aktualisiert mit outcome-fokussierten Texten und dem Link zur LP unter dem Secondary CTA.

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 2, Zeilen 121-153)

| Feld | Aktuell | Neu |
|------|---------|-----|
| problemEn | "You need tactical guidance on a specific challenge..." | "You have a specific challenge—CAC, growth, pricing, retention, operations, scaling, AI, deck, portfolio—but you don't need a full program. You need expert guidance. Fast." |
| problemDe | (entsprechend) | "Du hast eine spezifische Herausforderung—CAC, Growth, Pricing, Retention, Operations, Scaling, AI, Deck, Portfolio—aber du brauchst kein volles Programm. Du brauchst Experten-Guidance. Schnell." |
| solutionEn | "45 or 90-minute deep-dive..." | "Get expert guidance in 45-90 minutes. Choose from 9 session types. Walk away with 3-5 actionable initiatives and a 90-day roadmap. ROI: 3-5x typical." |
| solutionDe | (entsprechend) | "Erhalte Experten-Guidance in 45-90 Minuten. Wähle aus 9 Session-Typen. Gehe mit 3-5 umsetzbaren Initiativen und einer 90-Tage-Roadmap. ROI: 3-5x typisch." |
| deliverablesEn | [Expert analysis, Action plan, 90-day roadmap] | [Expert Guidance: 45-90 Min, Action Plan: 3-5 Initiatives, ROI: 3-5x Typical] |
| deliverablesDe | (entsprechend) | [Experten-Guidance: 45-90 Min, Aktionsplan: 3-5 Initiativen, ROI: 3-5x Typisch] |
| impactEn | "Walk away with a clear action plan..." | "Get expert guidance in 45-90 minutes. Walk away with 3-5 actionable initiatives and a 90-day roadmap. Predict 3-5x ROI from time saved and clarity gained." |
| impactDe | (entsprechend) | "Erhalte Experten-Guidance in 45-90 Minuten. Gehe mit 3-5 umsetzbaren Initiativen und einer 90-Tage-Roadmap. Prognostiziere 3-5x ROI durch Zeitersparnis und gewonnene Klarheit." |
| primaryCtaAction | book-call | **bleibt book-call** |
| primaryCtaUrl | Calendly-Link | **bleibt Calendly-Link** |
| secondaryCtaEn | See topics | More About Expert Session |
| secondaryCtaDe | Themen ansehen | Mehr ueber Expert Session |
| secondaryCtaUrl | /expertise | /solutions/expert-session |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

- Zeile 64: Neuer Lazy Import hinzufuegen
- Zeile 138: Neue Route hinzufuegen (nach Keynote, vor catch-all)

```tsx
const ExpertSession = lazy(() => import("./pages/ExpertSession"));

<Route path="/solutions/expert-session" element={<ExpertSession />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/ExpertSession.tsx`

### Section 1: Hero
- **Breadcrumb:** `Solutions > Expert Session`
- **Badge:** `Training & Enablement · 45-90 Min · €490-€890`
- **Headline:** `Expert Deep Dive—In 45-90 Minutes`
- **Subheadline:** Get expert guidance on your specific challenge...
- **Stats:** Expert Guidance 45-90 Min | Action Plan 3-5 Actions | ROI 3-5x
- **CTAs:** Book Session (€490) + See Session Types
- **Trust Badges:** Fast Guidance (45-90 Min), 1-on-1 Expert (Personalized), Actionable Roadmap (90-Day Plan)

### Section 2: Problem
- **Headline:** `You Need Expert Guidance—But Not a Full Program`
- **Symptome:**
  - Specific challenge: You have one clear problem (not everything is broken)
  - Need expert perspective: Internal team lacks expertise
  - Fast guidance needed: Don't have time for 30-90 day programs
  - Actionable plan missing: Need concrete next steps
  - Budget constraints: Can't invest €23.6K-€153K

### Section 3: Solution (9 Session Types)
- **Headline:** `9 Expert Session Types—Choose Your Focus`
- **9 Session Types (Accordion):**
  1. CAC Optimization
  2. Growth Momentum
  3. Pricing Strategy
  4. Retention Excellence
  5. Operations Excellence
  6. Scaling Velocity
  7. AI Transformation
  8. Investor-Readiness
  9. Portfolio Performance

### Section 4: Outcome
- **Metrics:** Expert Guidance (45-90 Min), Action Plan (3-5 Actions), ROI 3-5x
- **Real Examples:** CAC Optimization, AI Transformation, Portfolio Performance

### Section 5: Process (How We Work)
- **Pre-Session (1-2 Days Before):** Questionnaire, materials review
- **Session Day (45-90 Min):** Expert deep dive, tactical analysis, action plan
- **Post-Session (1-2 Days After):** Action plan PDF, 90-day roadmap, recording
- **Pricing:** 45-Min €490 | 90-Min €890

### Section 6: Qualification (Who It's For)
- **Good Fit:** Specific challenge, need expert perspective, Series A-B or VC/PE, fast guidance, budget €490-€890
- **Not a Fit:** Need hands-on implementation, everything is broken, need full transformation

### Section 7: Final CTA
- **Headline:** `Ready to Get Expert Guidance?`
- **Primary CTA:** Book Session (€490)
- **Steps:** Choose Session Type, Choose Duration
- **Secondary:** Book Free Inflection Call
- **FAQ:** 8 Fragen

---

## Technische Details

### Design Pattern (harmonisiert mit Keynote/Workshop)
- Hero: Deep Space Background + Parallax + Zentriertes Layout
- Breadcrumb: Komponente (nicht manuell)
- Badge: variant="gradient"
- Typography: text-hero-lg, text-body-lg
- Animations: animate-blur-in, animate-slide-up, animate-fade-in
- Stats Cards: border-2 border-border
- Scroll Indicator: ChevronDown mit animate-bounce

### Icons fuer 9 Session Types
| Session Type | Icon |
|-------------|------|
| CAC Optimization | TrendingUp |
| Growth Momentum | Rocket |
| Pricing Strategy | DollarSign |
| Retention Excellence | HeartHandshake |
| Operations Excellence | Settings |
| Scaling Velocity | Zap |
| AI Transformation | Brain |
| Investor-Readiness | PresentationChart |
| Portfolio Performance | Building2 |

### Komponenten
- `TwinklingStars`, `useParallaxLayers`, `Breadcrumb`, `Badge`, `Accordion`
- Bilingual (DE/EN) mit `useLanguage`

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 2: Problem/Solution/Deliverables/Impact aktualisieren + secondaryCtaUrl auf /solutions/expert-session setzen |
| `src/App.tsx` | Neuer Lazy Import + Neue Route |
| `src/pages/ExpertSession.tsx` | Neue Datei (7 Sektionen) mit 9 Session Types Framework |

