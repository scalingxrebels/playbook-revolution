

## Plan: "Das Programm" Sektion an altes Design anpassen

### Datei: `src/pages/RevenueArchitectureSystem.tsx` — SessionsSection (Zeilen 431–474)

### Änderungen

Die aktuelle Session-Darstellung zeigt `S1`–`S6` mit Deliverable-Codes (D01 · D02 · D03). Das Bild zeigt ein anderes Format:

**Neues Card-Design pro Woche:**
- Label: `WOCHE 1` statt `S1` (orange, uppercase tracking)
- Titel: Bold, z.B. "Strategische Grundlagen"
- Topic-Badges: Outline-Badges in Violet/Primary statt Deliverable-Codes (z.B. "Marktanalyse", "Challenge-Solution-Matrix", "ICP-Profil")
- Outcome: Italic muted text mit Pfeil, z.B. "→ Du weißt, in welchem Markt du spielst und wen du ansprichst."

**Daten (aus dem Bild):**

| Woche | Titel (DE) | Badges | Outcome |
|-------|-----------|--------|---------|
| 1 | Strategische Grundlagen | Marktanalyse, Challenge-Solution-Matrix, ICP-Profil | Du weißt, in welchem Markt du spielst und wen du ansprichst. |
| 2 | Value Stack & Growth Engine | Customer Journey, Value Stack, Growth Engine Architecture | Du weißt, wie dein ICP kauft — und welcher Funnel-Typ passt. |
| 3 | Entry Layer & Persuasion | Channel Playbook, Entry Layer Blueprint, Persuasion Blueprint | Dein Funnel-Eingang steht. Landing Pages und Forms sind live. |
| 4 | Messaging & Funnel-Abschluss | Email Sequencing, Asset Stack, Funnel Blueprint | Dein Funnel konvertiert. Email-Sequenzen laufen. Assets stehen. |
| 5 | Revenue Operating System | Revenue System Architecture, Data Flow, Automation Priorities, Tech Stack Map, Revenue Report | Marketing, Sales und CS arbeiten in einer Logik. |
| 6 | Traffic Activation | SEO, SEA, GEO, Earned Media, Content Flywheel | Dein System bekommt skalierbaren Traffic. Phase II startet. |

**Styling:**
- 3×2 Grid bleibt (`grid md:grid-cols-2 lg:grid-cols-3`)
- Cards: Dark background mit Border (`bg-card/10 border border-border/50 p-6`)
- Badges: Small outline-style pills in primary/violet color
- Outcome-Text: Italic, muted-foreground, mit "→" Prefix

**Englische Übersetzungen** werden analog mitgeführt.

