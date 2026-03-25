

## Briefing-Check: Landing Page v2.0 vs. aktuelle IndexV2

### Ergebnis: Das ist eine komplett neue Seite — kein Update der IndexV2

Die v2.0 hat eine grundlegend andere Architektur, anderen Content und eine andere Conversion-Strategie als die aktuelle IndexV2. Die bestehenden Komponenten können nicht wiederverwendet werden.

---

### Vergleich: Was ändert sich

```text
AKTUELL (IndexV2)                    BRIEFING v2.0
─────────────────────────────────    ─────────────────────────────────
Navigation ✅                        Keine Navigation ❌
HeroWithChart (ARR-Chart)            Hero + Video-Embed (90s)
ProblemOptimized (3 Cards)           Schmerz (Prosa, emotional)
SolutionOptimized (3 Cards)          —
HowItWorksOptimized (4 Areas)        —
FormulaOptimized (GE×SS×AI)          —
ProofOptimized (Midjourney etc.)     Proof (3 anonyme Cases)
GrowthCurveOptimized (Interaktiv)    —
ROICalculatorOptimized               —
FinalCTAOptimized (Form+Benefits)    Final CTA (nur Kalender)
—                                    Reframe (Zone 3) NEU
—                                    Lösung: Finden/Bauen/Umsetzen NEU
—                                    Founder Michel Lason (Zone 5B) NEU
—                                    Für wen / Nicht für wen (Zone 6) NEU
Footer ✅                            Kein Footer ❌
```

### Was gebaut werden muss (7 neue Sektionen)

| Zone | Komponente | Status |
|------|-----------|--------|
| 1 | `FunnelHero` — Headline, Subline, Video-Embed, CTA, Micro-Copy | **Neu** |
| 2 | `FunnelPain` — Emotionaler Schmerz-Text (Prosa, keine Cards) | **Neu** |
| 3 | `FunnelReframe` — Strategie ≠ Engpass, AI-Multiplier | **Neu** |
| 4 | `FunnelSolution` — 3-Step (Finden/Bauen/Umsetzen) | **Neu** |
| 5 | `FunnelProof` — 3 anonyme Cases mit Quotes/Zahlen | **Neu** |
| 5B | `FunnelFounder` — Michel Lason Bio + Foto | **Neu** |
| 6 | `FunnelQualification` — Für wen / Nicht für wen | **Neu** |
| 7 | `FunnelCTA` — Headline + Kalender-Embed (Fillout) | **Neu** |

### Design-Entscheidungen

1. **Keine Navigation, kein Footer** — reiner Conversion-Funnel, eine Aktion
2. **Video-Embed** — Platzhalter mit Play-Button (Video-URL muss noch geliefert werden)
3. **CTA-Buttons** — öffnen `FilloutBookingModal` mit `formSlug="inflection-call"` und `source="funnel-v2"`
4. **Kalender in Zone 7** — `FilloutEmbed` mit `formId="inflection-call"`, `domain="cal.scalingx.io"`
5. **Styling** — Deep Space Design Pattern (Dark Section, Parallax, Grid), konsistent mit bestehendem Design-System
6. **Nur Deutsch** — Briefing ist rein deutsch, EN-Fallbacks trotzdem eingebaut

### Technische Umsetzung

- **Neue Seite:** `src/pages/FunnelV2.tsx` (oder IndexV2 ersetzen — muss geklärt werden)
- **7-8 neue Komponenten** unter `src/components/funnel/`
- **Route:** Noch zu klären — eigene Route (z.B. `/go`) oder IndexV2 ersetzen?
- **Keine neuen Dependencies** — nutzt bestehende UI-Komponenten, FilloutEmbed, FilloutBookingModal

### Offene Fragen

1. **Route:** Soll die neue Seite die IndexV2 ersetzen oder unter einer eigenen URL leben (z.B. `/go`, `/call`)?
2. **Video-URL:** Welche Video-URL soll eingebettet werden? YouTube/Vimeo/selbstgehostet?
3. **Michel Lason Foto:** Welches Bild soll verwendet werden? Gibt es eine URL?
4. **Kalender-Widget:** Soll Zone 7 den `inflection-call` Fillout-Slug nutzen?

