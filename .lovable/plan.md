

## Plan: M1–M4 korrigieren + Vergleichstabelle als neue Sektion

### 3 Änderungen

---

### 1. `src/components/homepage/HomeMechanisms.tsx` — Grid-Daten ersetzen

Ersetze die 4 Mechanismen (Zeilen 7–40) durch die korrekten M1–M4:

| # | Icon | Titel DE | Beschreibung DE | Link |
|---|---|---|---|---|
| M1 | Eye | Hypothesen-Maschine | Wir finden den richtigen Hebel — bevor andere überhaupt die Frage stellen. | /expertise |
| M2 | ArrowRightLeft (neu importieren) | Übersetzungskompetenz | Wir übersetzen Strategie in das richtige Zielsystem — so dass sie tatsächlich wirkt. | /expertise |
| M3 | Settings | Funktionierende Synthese | Wir bauen Systeme die tragen — vollständig, ohne Kompromiss. | /expertise |
| M4 | Cpu | AI Orchestration | Nicht als Feature. Als Multiplier auf M1–M3. Macht alles schneller, schärfer, tiefer. | /expertise |

EN-Texte analog. M4 Beschreibung EN: "Not a feature. A multiplier on M1–M3. Makes everything faster, sharper, deeper."

---

### 2. `src/components/homepage/HomeComparison.tsx` — Neue Komponente

Neue Sektion unterhalb von HomeMechanisms mit der Vergleichstabelle aus dem Briefing:

```text
OVERLINE: UNSER USP
H2: Warum wir.
SUBLINE: Nicht einer der vier Mechanismen allein. Die Kombination.

FORMEL-BADGE: EXPERTISE × SPEED = IMPACT

TABELLE (5 Zeilen × 5 Spalten):
                        McKinsey    Freelancer    Intern    Wir
M1 Hypothesen-Maschine     ✅           ⚠️           ❌       ✅
M2 Übersetzungskompetenz   ✅           ⚠️           ⚠️       ✅
M3 Funktionierende Synthese ❌          ⚠️           ✅       ✅
M4 AI Orchestration         ❌          ❌           ❌       ✅
Speed (30 Tage)             ❌          ⚠️           ❌       ✅
```

Styling: Gleiche Section-Struktur wie HomeMechanisms (container, max-w-5xl, scroll-animation). Tabelle mit `bg-card/50 border border-border/50 backdrop-blur-sm rounded-xl`. "Wir"-Spalte visuell hervorgehoben (accent color). ✅ = grün, ⚠️ = gelb/amber, ❌ = rot/muted.

---

### 3. `src/pages/Index.tsx` — Neue Sektion einfügen

Zwischen HomeMechanisms und FormulaOptimized einfügen:

```text
Section 3: HomeMechanisms
Section 3.5 (NEU): HomeComparison  ← hier
Section 4: FormulaOptimized (unverändert)
```

FormulaOptimized bleibt komplett so wie sie ist.

