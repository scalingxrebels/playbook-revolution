

## Briefing-Prüfung: D08 v10.9 vs. Live-LP

Delta-Analyse gegen den aktuellen Code in `src/pages/RevenueArchitectureSystem.tsx`.

---

### Sektions-Reihenfolge

```text
BRIEFING v10.9                 LIVE LP                          Status
──────────────────              ──────────────────               ──────
S1  Hero                        HeroSection                      ⚠️
S2  VSL                         VSLSection                       ⚠️
S3  Problem-Reframe             ProblemReframeSection             ⚠️
S4  Was du baust (5 Layer)      DeliverablesSection               ⚠️
S5  22 Deliverables             —                                ❌ FEHLT
S6  6 Sessions                  ProgramSection (combined S6+S7)  ⚠️
S7  Format & Umfang             (in ProgramSection)              ⚠️
S8  ICP-Filter                  ICPQualificationSection          ⚠️
S9  Pricing                     PricingSection                   ⚠️
S10 Vertrauen                   PreCohortProofSection            ⚠️
S11 Michel Lason                CredibilitySection               ⚠️
S12 FAQ + Apply-Form            FAQSection + ApplyFormSection     ⚠️ (wrong order)
S13 Warteliste                  LeadCaptureSection               ⚠️
—                               FoundingFrameSection (S8 alt)    ❌ ENTFERNEN
—                               NoRiskSection (S9 alt)           ❌ ENTFERNEN (merged into S10)
—                               ApplicationProcessSection        ❌ ENTFERNEN
```

**Neue Reihenfolge lt. v10.9:**
Hero → VSL → Problem-Reframe → Was du baust → 22 Deliverables (NEU) → 6 Sessions → Format → ICP-Filter → Pricing → Vertrauen → Michel → FAQ + Apply → Warteliste

**Zu entfernen:** FoundingFrameSection, NoRiskSection, ApplicationProcessSection (Inhalte teilweise migriert in andere Sektionen)

---

### Detaillierte Abweichungen

#### S1 Hero — ⚠️ 5 Änderungen
| Element | Briefing v10.9 | Live | Status |
|---------|---------------|------|--------|
| Badge | "⚡ Founding Cohort · Limitierte Plätze" (Amber Pill) | "Guided Build · 6 Wochen · Founding Cohort" (gradient) | ❌ |
| H1 Zeile 2 | "Du hast kein Revenue-System." → **"Weil nichts davon systematisch zusammenhängt."** | "Du hast kein Revenue-System." | ❌ P0 |
| H1 Zeile 3 Styling | Electric Blue (#3B82F6) — visuelle Absetzung | text-gradient animate-gradient | ❌ P0 |
| Subline | "The Revenue Architecture System: 6 Wochen. 22 Deliverables. Dein vollständiges Revenue System — gebaut, nicht erklärt." | enthält ™, "Live aufgebaut" statt "gebaut, nicht erklärt" | ❌ P0 |
| Micro-Copy unter CTA | "Kostenlos bewerben · 2 Minuten" | Trust-Signals (Session-1-Guarantee etc.) | ❌ |
| Secondary CTA | "Mehr erfahren ↓" | "Erst Video ansehen" | ⚠️ |
| Trust signals | entfernt (nur Micro-Copy) | 3 trust signals vorhanden | ❌ |

#### S2 VSL — ⚠️ 3 Änderungen
| Element | Briefing v10.9 | Live | Status |
|---------|---------------|------|--------|
| Headline | "Du hast neue Kanäle getestet. Neue Botschaften. Neue Segmente. Warum greift trotzdem nichts systematisch?" | "Warum dein CAC steigt — und warum du es nicht mit mehr Taktiken löst" | ❌ P0 |
| Video-Länge | "8–12 Min" | "4 Min" | ❌ |
| Safety-Net | 4 Bullet-Punkte mit →-Pfeilen + Rahmung "Bewusst klein: Tiefenanalyse statt Massenerhebung" | 3 Fließtext-Absätze, enthält ™ | ❌ |

#### S3 Problem-Reframe — ⚠️ 2 Änderungen
| Element | Briefing v10.9 | Live | Status |
|---------|---------------|------|--------|
| Headline | "Du drehst an Stellschrauben. Das System bleibt kaputt." | "Warum mehr Taktiken das Problem nicht lösen" | ❌ |
| Body | Neuer, kürzerer Text ohne Bullet-Liste, endet mit "Das ist kein Taktik-Problem. Das ist ein Architektur-Problem." | Bullet-Liste (Ads, CRM, Content, SDR) + ICP-Kette + Closing mit ™ | ❌ |

#### S4 Was du baust — ⚠️ Umfangreiche Änderungen
| Element | Briefing v10.9 | Live | Status |
|---------|---------------|------|--------|
| Headline | "The Revenue Architecture System / 5 Layer. Einer baut auf dem anderen auf." | "Was du in 6 Wochen baust" | ❌ |
| Layer-Namen | Layer 2 = "Value Stack & Messaging", Layer 4 = "Funnel & Nurture" | Layer 2 = "Value Stack", Layer 4 = "Revenue OS" | ❌ |
| Layer-Beschreibungen | Neue "Was fehlt"-Spalte (Käufer-Übersetzung) | Nur eine Beschreibung pro Layer | ❌ |
| Closing | "Alle 5 Layer. In 6 Wochen. Als fertige Deliverables — nicht als Theorie." | "22 fertige Revenue-Bausteine. In 6 Wochen. Live aufgebaut." | ❌ |
| Outcome-Kacheln | ENTFERNT in v10.9 (ersetzt durch separate S5) | 3 Kacheln vorhanden | ❌ |

#### S5 22 Deliverables — ❌ FEHLT KOMPLETT
Neue eigenständige Sektion mit:
- Headline: "22 Deliverables. Einsatzbereit nach Session 6."
- Subline: "Kein leeres Template. Kein Workbook. Für dein Business gebaut."
- 2-spaltige Deliverable-Liste (D01–D22) gruppiert nach Sessions
- Closing: "22 fertige Revenue-Bausteine. Dein System — gebaut nach Session 6."

#### S6 6 Sessions — ⚠️
| Element | Briefing v10.9 | Live | Status |
|---------|---------------|------|--------|
| Headline | "6 Sessions. 6 Wochen. Ein System." | "6 Wochen. Strukturiert. Geführt. Live." | ❌ |
| Format | Tabelle: Session / Thema / Deliverables (D01–D22 Referenzen) | Karten mit Wochen + Outcomes | ⚠️ |
| Session 3 | "Entry Layer & Persuasion → D08 · D09a · D09b" | "Channel Playbook, Entry Layer Blueprint, Persuasion Blueprint" | ⚠️ |

#### S7 Format & Umfang — ⚠️
| Element | Briefing v10.9 | Live | Status |
|---------|---------------|------|--------|
| Headline | "Was dich das kostet — an Zeit." | "Was das konkret bedeutet" | ❌ |
| Format | Tree-Struktur mit ├── und NICHT-Liste (✗ Webinar-Modus etc.) | Einfache Checkbox-Liste | ❌ |
| Expert Sessions | "1:1 Expert Sessions je nach Tier" | "3× Expert Sessions à 1h (1:1 mit Michel)" | ❌ |
| Gesamtzeit | "ca. 6–7h pro Woche · 6 Wochen" | nicht explizit | ❌ |

#### S8 ICP-Filter — ⚠️ Text-Abweichungen
| Element | Briefing v10.9 | Live | Status |
|---------|---------------|------|--------|
| Headline | "Für wen es passt — und für wen nicht." | "Für wen das Programm gebaut ist" | ❌ |
| Für-dich Items | "Founder, CEO, VP Growth/Marketing" + "Du willst ein System — kein Template" + "Tech-enabled Services (B2B)" | "Du hast ein GTM-Team..." + "Du willst ein System — keine weiteren Empfehlungen" + "Du kannst 4h pro Woche..." | ❌ |
| Nicht-für-dich | "Wer ein Rezept sucht, kein System" + "Wer keine 6–7h/Woche investieren kann" + "Wer Garantien ohne Einsatz erwartet" | "Du suchst ein Kurs-Zertifikat..." + "Du willst Theorie — nicht bauen" | ❌ |
| Closing | "Wer links steht, filtert sich selbst heraus..." | fehlt | ❌ |

#### S9 Pricing — ⚠️ Umfangreiche Änderungen
| Element | Briefing v10.9 | Live | Status |
|---------|---------------|------|--------|
| Trust-Bridge VOR Pricing | "Das Programm kostet einen Bruchteil..." (neuer Text ohne Slides-Vergleich) | Trust-Bridge NACH Pricing innerhalb der Sektion | ❌ |
| VIP Preis | **€14.900** (Cohort 2: €16.900) | €12.900 (Cohort 2: €14.900) | ❌ P0 |
| Standard Features | **1× Expert Session (1h)** | 1× Expert-Session 1:1 | ✅ |
| Plus Features | **2× Expert Sessions (1h)** | 3× Expert-Sessions 1:1 | ❌ P0 |
| VIP Features | **4× Expert Sessions (1h)** + 1:1 Review jede Woche + Async direkt mit Michel | 6× Expert-Sessions + System-Audit + 30-Tage-Follow-up | ❌ P0 |
| Tabellen-Struktur | Neue Spalten: 1:1 Review, Peer Group, Async-Feedback | Feature-Liste pro Tier | ⚠️ |
| Sweet-Spot-Frame (Plus) | Neuer konkreter Text (wann Expert Sessions stattfinden) | fehlt | ❌ P1 |
| VIP-Frame | Neuer konkreter Text (für wen, Geschwindigkeit) | fehlt | ❌ P1 |
| Reforge-Anker | "Reforge kostet €2.000–€3.500..." | fehlt | ❌ |
| Ratenzahlung | "Ratenzahlung auf Anfrage möglich. Expert Session (€890) wird auf Programmpreis angerechnet." | "3× monatliche Raten..." | ❌ |
| Pricing-Trust-Bridge NACH Tabelle | "Der Founding-Preis gilt für Cohort 1..." | fehlt (Trust-Bridge ist Session-1-Guarantee) | ❌ |
| Section-Label | "Pricing" (kein "Angebot für Cohort 1") | "Angebot für Cohort 1" | ⚠️ |

#### S10 Vertrauen — ⚠️ Umstrukturierung
| Element | Briefing v10.9 | Live | Status |
|---------|---------------|------|--------|
| Headline | "Warum du es riskieren kannst." | "Warum das funktioniert" | ❌ |
| Kachel 1 | **Referenzen:** Logos [Microsoft] [XING] [Haufe] [smapOne] → 19 Jahre → 140+ → n=22 | "Revenue-Systeme von Microsoft über Haufe Group bis smapOne" (Text, keine Logos) | ❌ |
| Kachel 2 | **Session-1-Guarantee** "Du entscheidest — nicht wir." | "Growth Engine Framework" (22 Bausteine) | ❌ |
| Kachel 3 | **Kleine Kohorte** emotionaler Text | "Session-1-Guarantee" | ❌ |
| Micro-Copy | "Referenzen auf Anfrage." | fehlt | ❌ |

#### S11 Michel — ⚠️
| Element | Briefing v10.9 | Live | Status |
|---------|---------------|------|--------|
| Headline | "Wer das gebaut hat." | "Wer das gebaut hat — und warum" | ⚠️ |
| Body | Komplett neuer Text mit "Ich bin kein Framework-Guy" Differenzierung + emotionale Brücke | Alter Text mit 3 Absätzen | ❌ P1 |
| Quotes | ENTFERNT in v10.9 | 3 Quotes vorhanden | ❌ |
| ™ | Kein ™ | "The Revenue Architecture System™" | ❌ |

#### S12 FAQ + Apply — ⚠️ Zusammenlegung + neue Reihenfolge
- **Briefing:** FAQ kommt ZUERST, dann Apply-Form direkt darunter (kein Momentum-Verlust)
- **Live:** FAQ ist letzte Sektion, Apply-Form ist separat davor → **umgekehrte Reihenfolge**
- FAQ-Headline: "Die wichtigsten Fragen." statt "FAQ"
- FAQ: 6 neue Fragen (komplett andere als v10.7) — z.B. "Wann startet Cohort 1?" mit Nachfrage-vor-Angebot-Antwort
- Apply-Form: Quiz-Style 4-Schritte statt klassisches Formular
- Badge: "⚡ Founding Cohort · Limitierte Plätze" wiederholt
- Headline: "Bereit?" statt "Jetzt bewerben"
- Subline: "Kostenlos bewerben. Michel meldet sich innerhalb von 48h persönlich."
- Submit-CTA: "Bewerbung absenden →" statt "Bewerbung einreichen"
- DSGVO-Hinweis fehlt in Live
- Bewerbungsprozess als 3-Schritte-Micro (①②③) statt separate Sektion
- Thank-You-State: neuer Text + Cal-Link

#### S13 Warteliste — ⚠️ 4 Änderungen
| Element | Briefing v10.9 | Live | Status |
|---------|---------------|------|--------|
| Headline | "Cohort 1 ist nicht der richtige Zeitpunkt für dich?" | "Erfahre als Erste/r, wenn Cohort 2 öffnet." | ❌ |
| Body | 3 konkrete Vorteile (Founding-Preis-Garantie, persönliche Benachrichtigung, Vorrang) + "Cohort 2 wird kleiner sein" | PDF-Download + Warteliste | ❌ P1 |
| Formular | Vorname + E-Mail (2 Felder) | Nur E-Mail (1 Feld) | ❌ |
| Micro-Copy | "Kein Spam. Nur relevante Updates — persönlich von Michel." | fehlt | ❌ |
| PDF-Download | ENTFERNT — reine Warteliste | PDF "Das Revenue System" als Download | ❌ |

---

### Zusammenfassung: Was zu tun ist

**Sektionen entfernen (3):**
- FoundingFrameSection (Founding Cohort — Inhalte in Pricing integriert)
- NoRiskSection (in S10 Vertrauen integriert)
- ApplicationProcessSection (als 3-Schritte-Micro in S12b integriert)

**Neue Sektion erstellen (1):**
- S5: 22 Deliverables (eigenständige Sektion mit D01–D22 Liste)

**Sektionen umstrukturieren (2):**
- S12: FAQ + Apply-Form zusammenlegen (FAQ zuerst, Apply-Form direkt darunter)
- S13: Warteliste komplett umschreiben (keine PDF mehr, 2 Felder, 3 Vorteile)

**Text-Updates in fast allen Sektionen (~50+ Einzeländerungen):**
- Alle ™ entfernen
- Kein Starttermin kommunizieren (L1239 "Start Ende April 2026" entfernen)
- Hero: H1 Zeile 3, Subline, Badge, Micro-Copy
- VSL: Headline, Länge, Safety-Net-Format
- Problem-Reframe: Headline + Body komplett neu
- Was du baust: Layer-Namen, Beschreibungen, Käufer-Übersetzung, Outcome-Kacheln entfernen
- Sessions: Headline, D-Referenzen
- Format: Headline, Tree-Struktur, NICHT-Liste
- ICP: Headline, Items, Closing
- Pricing: VIP-Preis €14.900, Plus 2× Expert Sessions, VIP 4× Expert Sessions, neue Features-Struktur, Sweet-Spot/VIP-Frames, Reforge-Anker, Trust-Bridges
- Vertrauen: komplett neue 3 Kacheln (Referenzen mit Logos, Session-1-Guarantee, Kleine Kohorte)
- Michel: neuer Body-Text mit Differenzierung, Quotes entfernen
- FAQ: 6 neue Fragen
- Apply-Form: Quiz-Style, neue Felder, Badge, DSGVO, 3-Schritte-Micro

### Datei
- `src/pages/RevenueArchitectureSystem.tsx` — komplette Überarbeitung

### Empfohlenes Vorgehen
Aufgrund der Menge an Änderungen (3 Sektionen entfernen, 1 neue, ~50 Text-Edits, Reihenfolge ändern) empfehle ich eine schrittweise Implementierung in 3 Phasen:

1. **Struktur:** Sektionen entfernen/erstellen, Reihenfolge anpassen
2. **Pricing + Hero (P0):** VIP-Preis, Expert Sessions, Hero H1/Subline/Badge
3. **Alle Text-Updates:** VSL, Problem-Reframe, Layers, ICP, Vertrauen, Michel, FAQ, Apply, Warteliste

