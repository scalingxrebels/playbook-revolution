

# S4 "Das ist kein Kanal-Problem" — Redundanz mit S2 auflösen

## Problem

Zwei Sektionen transportieren dieselbe Kernbotschaft:

- **S2 Video** (Zeile 208): Headline "Warum dein CAC-Problem kein Kanal-Problem ist"
- **S4 Problem Reframe** (Zeile 370): Headline "Das ist kein Kanal-Problem."

S2 sagt bereits: "Das ist kein Kanal-Problem — hier ist das Video, das es erklärt." S4 wiederholt dieselbe Aussage nochmal mit Vergleichstabelle. Das ist inhaltlich redundant.

## Briefing-Abgleich

Laut Briefing-Struktur (D08 v10.2, 13 Sektionen) ist S4 als **"Problem Reframe"** definiert — die Sektion, die das Problem neu einrahmt. Das Video in S2 macht aber bereits genau das: Es reframed "CAC-Problem" als "kein Kanal-Problem". S4 doppelt das nur textlich nach.

Die Briefing-Logik sieht den Flow so:
- S2 = Video (zeigt das Problem)
- S3 = Was du baust (Deliverables)
- S4 = Problem Reframe (vertieft das "Warum")

## Lösung

**S4 Headline ändern**, damit sie nicht dieselbe Aussage wiederholt, sondern das Reframe vertieft. Die Vergleichstabelle (Kanal optimieren → ICP-Architektur etc.) ist guter Content — nur die Headline ist das Problem.

### Änderung

**Aktuelle Headline (Zeile 370):**
- DE: "Das ist kein Kanal-Problem."
- EN: "This Is Not a Channel Problem."

**Neue Headline:**
- DE: "Warum mehr Budget das Problem nicht löst."
- EN: "Why More Budget Won't Fix the Problem."

Das verschiebt den Fokus: S2 sagt "kein Kanal-Problem", S4 vertieft mit "und mehr Budget hilft auch nicht — hier ist was wirklich fehlt" + Vergleichstabelle.

### Technisch

- **Datei:** `src/pages/RevenueArchitectureSystem.tsx`
- **Zeile 370:** Headline-Text ersetzen
- 1 Zeile, 1 Datei

