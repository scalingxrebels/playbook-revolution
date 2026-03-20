## Briefing-Prüfung: D08 v10.7 vs. Live-LP

Ich habe das Briefing D08 v10.7 gegen den aktuellen Code (`src/pages/RevenueArchitectureSystem.tsx`) abgeglichen. Hier die vollständige Delta-Analyse.

---

### Legende

- ✅ = stimmt überein
- ⚠️ = teilweise abweichend
- ❌ = fehlt komplett oder stark abweichend

---

### 1. Sektions-Reihenfolge

```text
BRIEFING v10.7                LIVE LP
─────────────────              ─────────────────
S1  Hero                       Hero              ✅
S2  VSL                        VSL               ⚠️
S3  Problem-Reframe            —                 ❌ FEHLT
S4  Was du baust (5 Layer)     Deliverables      ⚠️ (kein 5-Layer-Block)
S5  ICP-Qualifikation          —                 ❌ FEHLT
S6  Programm                   Program           ⚠️
S7  Format & Umfang            (in Program)      ⚠️ (zusammengelegt)
S8  Founding Cohort            FoundingFrame     ✅
S9  Kein Risiko                —                 ❌ FEHLT (nur in Pricing)
S10 Credibility                PreCohortProof    ⚠️
S11 Wer das gebaut hat         Credibility       ⚠️
S12 Pricing                    Pricing           ⚠️
S13 Bewerbungsprozess          ApplicationProc.  ⚠️
S14 Apply-Form (Fillout)       —                 ❌ FEHLT
S15 Lead Magnet / Warteliste   LeadCapture       ⚠️
S16 FAQ                        FAQ               ⚠️
—                              CohortStartCard   (nicht im Briefing)
```

---

### 2. Inhaltliche Abweichungen im Detail

#### S1 Hero — ⚠️


| Element          | Briefing                                                                                                     | Live                                                                                       | Status | &nbsp; |
| ---------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------ | ------ |
| Badge            | "Guided Build · 6 Wochen · Founding Cohort"                                                                  | "Guided Build · 6 Wochen · Founding Cohort"                                                | ✅      | &nbsp; |
| Headline         | "Dein CAC steigt. Deine Conversion sinkt." +"Du hast kein Revenue-System." (zweizeilig)                      | "Dein CAC steigt. Deine Conversion sinkt." + "Du hast Taktiken. Kein System." (zweizeilig) | ⚠️     | &nbsp; |
| Subline          | "The Revenue Architecture System — 6 Wochen. 22 Deliverables. Vollständiges Revenue System. Live aufgebaut." | "In 6 Wochen baust du das Revenue System..."                                               | ⚠️     | &nbsp; |
| CTA              | "Early Access sichern →"                                                                                     | "Early Access sichern →"                                                                   | ✅      | &nbsp; |
| Trust Micro-Copy | "Session-1-Guarantee · Founding-Preis nur Cohort 1 · Kein Commitment vor dem Gespräch"                       | Matches                                                                                    | ✅      | &nbsp; |


#### S2 VSL — ⚠️


| Element           | Briefing                                                                                      | Live                                                      | Status |
| ----------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------ |
| Headline          | "Warum dein CAC steigt — und warum du es nicht mit mehr Taktiken löst"                        | "Warum dein CAC-Problem kein Kanal-Problem ist"           | ❌ P0   |
| Video-Laufzeit    | "4 Min"                                                                                       | "4–5 Minuten"                                             | ⚠️     |
| Safety-Net Line 1 | "Die meisten B2B-SaaS-Teams optimieren Einzelteile — und wundern sich, warum der CAC steigt." | "Die meisten B2B-SaaS-Teams lösen das falsche Problem..." | ⚠️     |
| Proof-Statement   | "22–58% CAC-Reduktion"                                                                        | "signifikant reduziertem CAC"                             | ❌ P1   |


#### S3 Problem-Reframe — ❌ FEHLT

Komplette neue Sektion mit "Warum mehr Taktiken das Problem nicht lösen", Bullet-Liste (Ads, CRM, Content, SDR), systemische Erklärung, ICP→Value Stack→Entry Layer→Messaging→Revenue OS→Traffic-Kette.

#### S4 Was du baust — ⚠️

- ❌ 5-Layer-Block fehlt komplett (Layer 1–5 mit Beschreibungen)
- ✅ 3 Outcome-Kacheln vorhanden und korrekt
- ✅ Closing-Line "22 fertige Revenue-Bausteine" vorhanden
- ❌ CTA "Early Access sichern →" fehlt am Ende

#### S5 ICP-Qualifikation — ❌ FEHLT

Komplette neue Sektion "Für wen das Programm gebaut ist" mit ✓/✗ Listen.

#### S6/S7 Programm + Format — ⚠️

- ✅ 6-Wochen-Übersicht korrekt
- ✅ Closing-Quote vorhanden
- ⚠️ Format-Box: "Async-Support zwischen den Sessions" vs. Briefing "ca. 2–3h Async-Arbeit zwischen den Sessions (Schätzung)"
- ⚠️ Kein separater Format-Headline "Was das konkret bedeutet"

#### S9 Kein Risiko — ❌ FEHLT als eigenständige Sektion

- Risk Reversal existiert nur innerhalb Pricing
- ❌ Trust-Bridge-Text fehlt: "Das Programm kostet einen Bruchteil..."

#### S10 Credibility (= PreCohortProofSection) — ⚠️

- ❌ "140+ operative Engagements" fehlt in Tile 1

#### S11 Wer das gebaut hat (= CredibilitySection) — ⚠️

- ❌ Bio-Absatz 3 (L622): "Kanal-Optimierung ohne Systemfundament" → soll sein "Stellschrauben drehen ohne Systemfundament"
- ❌ Quote 1 (L549): "den Kanal optimiert" → soll sein "einzelne Teile optimiert"

#### S12 Pricing — ⚠️

- ⚠️ Label sagt "Pricing" statt "Angebot für Cohort 1"; Headline sagt "Angebot für Cohort 1" statt "Dein Investment."
- ✅ Tiers, Preise, Features korrekt
- ❌ Pricing-Trust-Bridge steht innerhalb Pricing — Briefing will sie VOR Pricing

#### S13 Bewerbungsprozess — ⚠️

- ❌ Headline fehlt: "Vier Schritte. Kein Verkaufsgespräch."
- ❌ Section-Label fehlt: "Wie die Bewerbung funktioniert"
- ⚠️ Step 3 Text: fehlt "Kein Pitch — eine gemeinsame Entscheidung"
- ❌ Note "Start Ende April 2026" fehlt unter den Schritten

#### S14 Apply-Form — ❌ FEHLT

Komplett neue Sektion:

- Fillout-Embed mit 8 Formularfeldern (als Platzhalter)
- "Lieber direkt sprechen?" → Cal-Modal `ml-sync`
- Label "Bereit, mehr zu erfahren?", Headline "Jetzt bewerben"

#### S15 Lead Magnet / Warteliste — ⚠️

- ❌ Label soll "Noch nicht bereit?" sein (live: kein Label)
- ❌ Headline soll "Erfahre als Erste/r, wenn Cohort 2 öffnet." sein (live: "Bereit, mehr zu erfahren?")
- ❌ P0: E-Mail-Link `michel@scalingx.com` (L987) muss durch Cal-Modal-Link ersetzt werden
- ⚠️ Download-Note: "Stellschrauben zu drehen" statt "Taktiken zu stapeln" — beides weicht ab

#### S16 FAQ — ⚠️

- ❌ FAQ #8 fehlt: "Was ist der Unterschied zu klassischem Consulting?"
- ⚠️ Antworten #1, #2 weichen textlich ab
- ⚠️ FAQ #6: Live sagt "Company Cohort / [team@scalingx.io](mailto:team@scalingx.io)", Briefing sagt "Enterprise-Option auf Anfrage. Details im Gespräch."
- ⚠️ FAQ #7: Live sagt "Details im Gespräch nach der Bewerbung", Briefing sagt nur "Details klären wir im Gespräch."

#### CohortStartCard — nicht im Briefing

Existiert in der Live-LP, hat kein Äquivalent im Briefing. Kann ggf. entfernt oder in S8/S13 integriert werden.

---

### 3. Zusammenfassung der P0-Änderungen (aus v10.7 Changelog)


| #                                   | Status                                                 |
| ----------------------------------- | ------------------------------------------------------ |
| 1. "Kanal-Problem" überall ersetzen | ❌ Noch 3 Vorkommen (VSL-Headline, Bio-Absatz, Quote 1) |
| 2. CTA = "Early Access sichern"     | ✅ Umgesetzt                                            |
| 3. E-Mail → Cal-Modal ml-sync       | ❌ L987 noch `michel@scalingx.com`                      |
| 4. Fillout-Formular als Apply-Form  | ❌ S14 fehlt komplett                                   |


---

### 4. Empfohlenes Vorgehen

Die Abweichungen sind umfangreich — es geht nicht um einzelne Text-Edits, sondern um **4 fehlende Sektionen, eine veränderte Reihenfolge und ca. 20+ Textänderungen**.

Soll ich einen konkreten Implementierungsplan erstellen, der die LP schrittweise auf v10.7 bringt? Vorgeschlagene Reihenfolge:

1. **P0-Fixes** (3 "Kanal-Problem"-Stellen, E-Mail→Cal-Modal, Fillout-Embed S14)
2. **Fehlende Sektionen** (S3 Problem-Reframe, S5 ICP-Qualifikation, S9 Kein Risiko, S14 Apply-Form)
3. **Sektions-Reihenfolge** an Briefing anpassen
4. **Textanpassungen** (Hero-Headline, VSL, Credibility, FAQ etc.)