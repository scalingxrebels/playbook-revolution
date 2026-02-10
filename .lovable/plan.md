

# Calendly → FilloutBookingModal Migration (verbleibende 14 Dateien)

## Zusammenfassung

Es gibt noch **175 Calendly-Links** in **14 Dateien** (12 Pages + 2 Data-Dateien), die alle auf das `FilloutBookingModal` mit `www.cal.scalingx.io` umgestellt werden müssen.

---

## Mapping: Calendly-Slug → Fillout formSlug

| Calendly-URL | Fillout formSlug |
|---|---|
| `calendly.com/michel-scalingx/30min` | `inflection-call` |
| `calendly.com/michel-scalingx/expert-session` | `expert-session` |
| `calendly.com/michel-scalingx/workshop` | `inflection-call` |
| `calendly.com/michel-scalingx/keynote` | `inflection-call` |
| `calendly.com/michel-scalingx/boost` | `inflection-call` |
| `calendly.com/michel-scalingx/ai-assessment` | `inflection-call` |
| `calendly.com/michel-scalingx/scaling-assessment` | `inflection-call` |
| `calendly.com/michel-scalingx/portfolio-assessment` | `inflection-call` |
| `calendly.com/michel-scalingx/custom-analysis` | `inflection-call` |
| `calendly.com/michel-scalingx/pitch-deck-check` | `inflection-call` |
| `calendly.com/michel-scalingx/vc-dd-simulation` | `inflection-call` |
| `calendly.com/scalingx/strategy` | `inflection-call` |
| `calendly.com/scalingx/strategy-call` | `inflection-call` |
| `calendly.com/michel-scalingx/gtm-review` | `inflection-call` |
| `calendly.com/michel-scalingx/pricing-review` | `inflection-call` |

Alle spezifischen Calendly-Slugs (workshop, keynote, ai-assessment, etc.) werden auf `inflection-call` gemappt, da es keine eigenen Fillout-Formulare dafür gibt. Ausnahme: `expert-session` hat ein eigenes Formular.

---

## Betroffene Dateien

### Pages (12 Dateien) -- Calendly window.open / a-href → FilloutBookingModal

| # | Datei | Anzahl Links | Calendly-Typ |
|---|---|---|---|
| 1 | `src/pages/Workshop.tsx` | 3 | workshop → inflection-call |
| 2 | `src/pages/Keynote.tsx` | 3 | keynote → inflection-call |
| 3 | `src/pages/CustomAnalysisReport.tsx` | 6 | custom-analysis + 30min → inflection-call |
| 4 | `src/pages/PortfolioAssessment.tsx` | 5 | portfolio-assessment + 30min → inflection-call |
| 5 | `src/pages/AIMaturityAssessment.tsx` | 2 | ai-assessment → inflection-call |
| 6 | `src/pages/InvestorReadinessPitchDeckCheck.tsx` | ~8 | pitch-deck-check + 30min → inflection-call |
| 7 | `src/pages/VCDueDiligenceSimulation.tsx` | ~8 | vc-dd-simulation + 30min → inflection-call |
| 8 | `src/pages/ScalingReadinessAssessment.tsx` | 2 | scaling-assessment → inflection-call |
| 9 | `src/pages/BoostCustomProgram.tsx` | 1 | boost → inflection-call |
| 10 | `src/pages/BoostAIMaturity.tsx` | 1 | ai-assessment → inflection-call |
| 11 | `src/pages/PowerUpAIQuickWins.tsx` | 1 | expert-session → expert-session |
| 12 | `src/pages/GTMEffectivenessReview.tsx` | ~6 | gtm-review + 30min → inflection-call |
| 13 | `src/pages/PricingPackagingReview.tsx` | ~6 | pricing-review + 30min → inflection-call |

### Data-Dateien (2 Dateien) -- href-Strings in Daten

| # | Datei | Anzahl Links |
|---|---|---|
| 14 | `src/data/research/amf.ts` | 2 | 
| 15 | `src/data/research/unified-framework.ts` | 6 |

---

## Technisches Vorgehen pro Page-Datei

Jede betroffene Page bekommt:

1. **Import hinzufügen**: `FilloutBookingModal` + `useState`
2. **State hinzufügen**: `const [isBookingOpen, setIsBookingOpen] = useState(false);`
3. **Alle Calendly-Links ersetzen**: `window.open(calendly...)` bzw. `<a href="calendly...">` wird zu `onClick={() => setIsBookingOpen(true)}`
4. **Modal im JSX einfügen**: `<FilloutBookingModal formSlug="inflection-call" source="page-name" isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />`

Fuer Seiten mit **zwei verschiedenen** Formular-Typen (z.B. PowerUpAIQuickWins mit expert-session) wird ein zweiter State angelegt.

### Fuer Data-Dateien

Die `href`-Werte werden auf `https://www.cal.scalingx.io/inflection-call` aktualisiert. Diese werden von den Research-Komponenten als Links gerendert (kein Modal noetig, da die Research-Sections die Links direkt als `<a>` Tags verwenden).

---

## Hinweis

Da dies eine grosse Anzahl an Dateien betrifft (15 Dateien), wird die Implementierung in Batches erfolgen, um Fehler zu minimieren. Die `server.fillout.com/embed/v1/` Script-Referenzen in den Power-Up/Boost-Seiten bleiben bestehen, da diese fuer die Fillout-Embed-Komponente (nicht Calendly) benoetigt werden.

