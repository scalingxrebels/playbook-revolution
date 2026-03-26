

## Plan: Winning Mechanisms M1–M4 korrigieren

### Zwei Dateien betroffen

---

### 1. `src/components/homepage/HomeMechanisms.tsx` — Grid-Inhalte ersetzen

Ersetze die 4 Mechanismen-Daten (Zeilen 7–40) durch die korrekten M1–M4:

| # | Titel DE | Titel EN | Beschreibung DE | Beschreibung EN | Icon |
|---|---|---|---|---|---|
| M1 | Hypothesen-Maschine | Hypothesis Engine | Wir finden den richtigen Hebel — bevor andere überhaupt die Frage stellen. | We find the right lever — before others even ask the question. | Eye (bleibt) |
| M2 | Übersetzungskompetenz | Translation Competence | Wir übersetzen Strategie in das richtige Zielsystem — so dass sie tatsächlich wirkt. | We translate strategy into the right target system — so it actually works. | ArrowRightLeft (neu) |
| M3 | Funktionierende Synthese | Functioning Synthesis | Wir bauen Systeme die tragen — vollständig, ohne Kompromiss. | We build systems that hold — complete, without compromise. | Settings (bleibt) |
| M4 | AI Orchestration | AI Orchestration | Nicht als Feature. Als Multiplier auf M1–M3. Macht alles schneller, schärfer, tiefer. | Not a feature. A multiplier on M1–M3. Makes everything faster, sharper, deeper. | Cpu (bleibt) |

Links: alle vorerst auf `/expertise` (da es um Methodik geht, nicht Leistungsbereiche).

---

### 2. `src/components/homepage/FormulaOptimized.tsx` — Vergleichstabelle existiert nicht

Die FormulaOptimized hat aktuell **keine Vergleichstabelle** (McKinsey vs. Freelancer vs. Intern vs. Wir). Sie zeigt 3 Cards: Growth Engines, Scaling Systems, AI als Multiplikator.

**Optionen:**
- **A)** FormulaOptimized so lassen — sie erklärt den USP auf ihre eigene Weise (Growth Engines × Scaling Systems × AI = Hypergrowth). Die Vergleichstabelle aus dem Briefing wurde nie gebaut.
- **B)** FormulaOptimized anpassen: Die 3 Cards durch M1–M4-aligned Content ersetzen UND die Vergleichstabelle (McKinsey/Freelancer/Intern/Wir × M1–M4 + Speed) hinzufügen.

**Empfehlung:** Option B — damit Section 3 (Grid) und Section 4 (Formel) konsistent die gleiche M1–M4-Sprache sprechen.

Falls Option B: Die Formel-Headline bleibt "Die Formel für Hypergrowth", aber die 3 Cards werden zu 4 (M1–M4) und die Vergleichstabelle wird unterhalb ergänzt.

