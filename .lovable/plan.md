
# Implementierungskonzept: Case Study Kachel-Beschreibungen harmonisieren

## Ist-Analyse: Alle 8 Case Studies

Die `CaseCard.tsx` zeigt als Teaser den **ersten Satz** des `challenge`-Feldes. Hier ist der aktuelle Stand:

| # | Slug | Headline | Challenge-Teaser (1. Satz) | Status |
|---|------|----------|---------------------------|--------|
| 1 | `cac-crisis-turnaround` | "CAC Crisis Averted -> Back to Growth" | "CAC exploded from €5k to €12k in 6 months." | OK - klar, metrisch |
| 2 | `nrr-machine-breakthrough` | "NRR Stuck at 105% -> Broke Through to 142%" | "NRR stuck at 105% for 18 months." | KURZ - fehlt Kontext |
| 3 | `partner-channel-transformed-scalable-growth` | "Partner Channel Transformed -> Scalable Growth Accelerated" | "A nationwide network of 1,000 partners generated high activity but low yield—9,819 monthly contacts produced just 344 SQLs over 6 months." | REFERENZ |
| 4 | `pricing-redesigned-scalable-growth` | "Pricing Redesigned -> Scalable Growth Unlocked" | "High-margin business with 61% EBITDA—but growth capped by 27 fragmented products, outdated pricing, and no recurring revenue." | OK - vollstaendig |
| 5 | `new-market-segment-entry` | "New Market Segment Entry -> Scalable Revenue Engine" | "€1.3M in bespoke projects with 26 customers." | KURZ - fehlt "So what?" |
| 6 | `strategic-transformation-market-leadership` | "Strategic Transformation to Market Leadership" | "Growth slowing from 150% to 80% YoY, NRR declining below 100%, organizational chaos with 50+ meetings/week." | OK - Multi-Metrik |
| 7 | `exit-readiness-achieved` | "Exit Readiness Achieved -> Series C Ready" | "Rule of 40 at 18.2%, ARR per FTE at €64.9k, Board Confidence at 40-50%." | KURZ - fehlt "So what?" |
| 8 | `stage-transition-series-b-ready` | "Stage Transition Mastered -> Series B Ready" | "Stuck at €5M ARR, board demanded €25M ARR in 12 months—or no Series B." | OK - dramatisch |

---

## Referenz-Muster (Partner Channel Transformed)

Der ideale Teaser folgt dem Muster:

```
[Spezifische Situation] + [Problem/Gap] + [Metriken als Beweis]
```

Beispiel:
> "A nationwide network of 1,000 partners generated high activity but low yield—9,819 monthly contacts produced just 344 SQLs over 6 months."

**Warum gut:**
- Kontext (1,000 Partner)
- Problem (high activity, low yield)
- Metriken (9,819 contacts, 344 SQLs)
- Zeitrahmen (6 months)

---

## Anpassungen erforderlich

### Case 2: NRR Machine Breakthrough
**Aktuell:**
> "NRR stuck at 105% for 18 months."

**Neu:**
> "NRR stuck at 105% for 18 months despite product improvements—investors demanded 130%+ before the next round, but nothing was working."

### Case 5: New Market Segment Entry
**Aktuell:**
> "€1.3M in bespoke projects with 26 customers."

**Neu:**
> "€1.3M in bespoke projects with 26 customers—no scalability, no flywheel effect, and €10M+ potential left untapped."

### Case 7: Exit Readiness Achieved
**Aktuell:**
> "Rule of 40 at 18.2%, ARR per FTE at €64.9k, Board Confidence at 40-50%."

**Neu:**
> "Rule of 40 at 18.2%, ARR per FTE at €64.9k, Board Confidence at 40-50%—neither Series C nor strategic exit was possible without transformation."

---

## Technische Aenderungen

### Datei: `src/data/cases/caseStudies.ts`

**Case 2 (Zeile 365-368):**
```typescript
// VORHER
challenge: {
  en: 'NRR stuck at 105% for 18 months. Churn at 8%. Investors wanted 130%+ before next round.',
  de: 'NRR seit 18 Monaten bei 105% festgefahren. Churn bei 8%. Investoren wollten 130%+ vor der nächsten Runde.'
},

// NACHHER
challenge: {
  en: 'NRR stuck at 105% for 18 months despite product improvements—investors demanded 130%+ before the next round, but nothing was working.',
  de: 'NRR seit 18 Monaten bei 105% festgefahren trotz Produktverbesserungen—Investoren forderten 130%+ vor der nächsten Runde, aber nichts funktionierte.'
},
```

**Case 5 (Zeile 1467-1470):**
```typescript
// VORHER
challenge: {
  en: '€1.3M in bespoke projects with 26 customers. No scalability, no flywheel effect. Leadership knew there was €10M+ potential—but no system to capture it.',
  de: '€1.3M in maßgeschneiderten Projekten mit 26 Kunden. Keine Skalierbarkeit, kein Flywheel-Effekt. Die Führung wusste, es gibt €10M+ Potenzial—aber kein System, es zu nutzen.'
},

// NACHHER
challenge: {
  en: '€1.3M in bespoke projects with 26 customers—no scalability, no flywheel effect, and €10M+ potential left untapped without a systematic GTM engine.',
  de: '€1.3M in maßgeschneiderten Projekten mit 26 Kunden—keine Skalierbarkeit, kein Flywheel-Effekt, und €10M+ Potenzial ungenutzt ohne systematische GTM-Engine.'
},
```

**Case 7 (Zeile 2338-2341):**
```typescript
// VORHER
challenge: {
  en: 'Rule of 40 at 18.2%, ARR per FTE at €64.9k, Board Confidence at 40-50%. Neither Series C nor strategic exit was possible.',
  de: 'Rule of 40 bei 18.2%, ARR pro FTE bei €64.9k, Board Confidence bei 40-50%. Weder Series C noch strategischer Exit waren möglich.'
},

// NACHHER
challenge: {
  en: 'Rule of 40 at 18.2%, ARR per FTE at €64.9k, Board Confidence at 40-50%—neither Series C nor strategic exit was possible without a complete transformation.',
  de: 'Rule of 40 bei 18.2%, ARR pro FTE bei €64.9k, Board Confidence bei 40-50%—weder Series C noch strategischer Exit waren ohne komplette Transformation möglich.'
},
```

---

## Zusammenfassung

| Datei | Aenderung | Zeilen |
|-------|-----------|--------|
| `src/data/cases/caseStudies.ts` | Case 2 challenge verbessern | 365-368 |
| `src/data/cases/caseStudies.ts` | Case 5 challenge verbessern | 1467-1470 |
| `src/data/cases/caseStudies.ts` | Case 7 challenge verbessern | 2338-2341 |

---

## Ergebnis nach Implementation

Alle 8 Case Studies folgen dann dem konsistenten Muster:

- Spezifische Metriken im ersten Satz
- Klarer Problem-Kontext ("but", "despite", "—")
- Selbsterklaerend ohne Landing Page lesen zu muessen
- Dramatik/Urgenz ("demanded", "nothing was working", "left untapped")
