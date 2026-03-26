

## Briefing-Abgleich: Solutions Page v1.0

### ✅ Korrekt umgesetzt

| Element | Status |
|---|---|
| Hub-Struktur: Hero → Featured → CategoryNav → Filter Grid → CTA | ✅ |
| 7 Featured Solutions (richtige Slugs + Copy) | ✅ |
| 6 Kategorien mit vollständigem Mapping aller 46 Solutions | ✅ |
| 7 Dual-Mapped Solutions (categorySecondary) | ✅ |
| Category Landing Template mit 6 Sektionen | ✅ |
| Hero Copy (Overline, H1, Subline, Stats) — Hub + alle 6 Kategorien | ✅ |
| "Für wen" Cards — alle 6 Kategorien | ✅ |
| Mechanismus-Texte (M1–M4) — alle 6 Kategorien | ✅ |
| Cases pro Kategorie | ✅ |
| CTA Hub: "Nicht sicher welche Situation deine ist?" | ✅ |
| CTA Kategorie: Dual Buttons (Gespräch + zurück) | ✅ |
| Filter-Hint Text unter Suche | ✅ |
| 3 Filter-Ebenen (Challenge + Type + Kategorie) | ✅ |
| Breadcrumb auf Kategorie-Seiten | ✅ |
| 6 explizite Routen in App.tsx | ✅ |
| Featured-Sortierung im Grid (featured zuerst) | ✅ |
| Results Counter ("Zeige X von 46") | ✅ |

---

### ❌ Abweichungen / Bugs

| # | Problem | Briefing sagt | Code macht | Datei |
|---|---|---|---|---|
| 1 | **Kategorie-Nav Headline falsch** | 6 Kategorien → "Sechs" | "Fünf Situationen. Fünf Wege." | `SolutionCategoryNav.tsx` Z.23 |
| 2 | **maxVisible zu niedrig** | "Zeige alle 46 Solutions" (Default) | `maxVisible={12}` — zeigt nur 12 | `Solutions.tsx` Z.229 |
| 3 | **JSX Escape-Bug** | `What's possible.` | `What\'s` (Backslash wird gerendert) | `SolutionCategoryLanding.tsx` Z.165 |
| 4 | **Featured Badge `rounded-full`** | Sharp corners (Design-Standard) | `rounded-full` auf Badge | `SolutionFeatured.tsx` Z.69 |
| 5 | **Search Input `rounded-xl`** | Sharp corners (Design-Standard) | `rounded-xl` | `Solutions.tsx` Z.128 |
| 6 | **Filter Container `rounded-lg`** | Sharp corners (Design-Standard) | `rounded-lg` | `Solutions.tsx` Z.119 |
| 7 | **Filter Hint `rounded-lg`** | Sharp corners (Design-Standard) | `rounded-lg` | `FilterOnboardingHint.tsx` Z.39 |
| 8 | **CTA Button-Text** | "Kostenloses Gespräch buchen" | "Kostenlosen Inflection Call buchen" | `SolutionCTA.tsx` Z.53 |
| 9 | **Section 4 Stats fehlen** | "9 Challenges \| 46 Solutions \| 15-80x Ø ROI \| 92% Erfolgsrate" als Stats-Leiste | Nur als Fliesstext im Absatz | `Solutions.tsx` Z.112-116 |
| 10 | **Hub Section 4 Subline fehlt** | "Finde die richtige Lösung für deine Growth Challenge" als separate Zeile | Nicht vorhanden | `Solutions.tsx` |

---

### Plan: 10 Fixes

**1. `SolutionCategoryNav.tsx`** — "Fünf" → "Sechs" (DE) / "Five" → "Six" (EN)

**2. `Solutions.tsx` Z.229** — `maxVisible={12}` → `maxVisible={50}` (alle sichtbar)

**3. `SolutionCategoryLanding.tsx` Z.165** — `What\'s` → `What's` (normales Apostroph in JSX)

**4. `SolutionFeatured.tsx` Z.69** — `rounded-full` entfernen vom Badge

**5. `Solutions.tsx` Z.128** — `rounded-xl` entfernen vom Search Input

**6. `Solutions.tsx` Z.119** — `rounded-lg` entfernen vom Filter Container

**7. `FilterOnboardingHint.tsx` Z.39** — `rounded-lg` entfernen

**8. `SolutionCTA.tsx` Z.53** — "Kostenlosen Inflection Call buchen" → "Kostenloses Gespräch buchen" / EN: "Book Free Inflection Call" → "Book a free call"

**9. `Solutions.tsx`** — Stats-Leiste (4 Zahlen) unter Section 4 Headline einfügen, wie im Hero-Stil

**10. `Solutions.tsx`** — Subline "Finde die richtige Lösung für deine Growth Challenge" als eigene Zeile nach H2 einfügen

Rein Copy- und CSS-Fixes, keine strukturellen Änderungen. 5 Dateien betroffen.

