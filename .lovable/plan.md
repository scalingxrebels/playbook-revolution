

# Design-Konsistenz: RAS vs. andere Solution Landing Pages

## Identifizierte Abweichungen

### 1. Hero Background: Deep Navy statt Standard Deep Space
**RAS:** `from-[hsl(var(--deep-navy))] via-[hsl(222,40%,8%)] to-[hsl(222,30%,12%)]`
**Standard (Boost/Accelerate):** `from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]`

Die RAS-Seite nutzt eine eigene Navy-Palette im Hero, während alle anderen Solution Pages den einheitlichen Deep Space Gradient verwenden. Gleiches gilt für S4 (Problem Reframe), S6 (Program), S8 (Credibility), S9 (Pricing), S12 (Apply).

**Fix:** Hero und alle dark-sections auf Standard Deep Space umstellen.

### 2. Hero Badge: Custom Amber-Span statt `<Badge variant="gradient">`
**RAS (Zeile 114):** Handgeschriebener `<span>` mit `bg-accent/15 border-accent/40 text-accent rounded-full` (amber/orange Farbschema — siehe Bild 1)
**Standard:** `<Badge variant="gradient">` mit Icon (lila-pink Gradient — siehe Bild 2)

**Fix:** Amber Urgency Badge durch `<Badge variant="gradient">` ersetzen:
```
<Badge variant="gradient" className="mb-8 animate-fade-in">
  <Layers className="w-4 h-4 mr-2" />
  GUIDED BUILD · 6 WOCHEN · FOUNDING COHORT
</Badge>
```

### 3. Hero Stats fehlen
**Standard:** 3 Stat-Cards unter der Subheadline (`bg-card/50 backdrop-blur-sm border-2`)
**RAS:** Keine Stat-Cards im Hero.

**Fix:** Keine — RAS ist ein anderes Produktformat (Guided Build vs. Consulting), Hero Stats mit ARR/CAC passen hier nicht. Bewusste Abweichung.

### 4. Section Header Badge-Stil inkonsistent
**RAS:** Nutzt `<span>` mit `text-sm font-semibold uppercase tracking-widest` (plain text badges)
**Standard Premium Pages:** Nutzen `<Badge variant="gradient">` oder Pill-Badges mit Icon

Die RAS-Section-Headers (S2 "Video", S3 "Was du baust", S6 "Das Programm", S8 "Wer das gebaut hat", S9 "Pricing") verwenden den Homepage-Stil statt des Premium-Landing-Page-Stils.

**Fix:** Keine zwingende Änderung — die RAS-Page nutzt bewusst den minimalistischeren Stil, da sie bereits sehr viele Sektionen hat. Optional als Verbesserung.

### 5. S13 Waitlist Background-Farbe
**RAS (Zeile 1313):** `style={{ backgroundColor: 'hsl(222, 40%, 14%)' }}` — das ist **nicht** `#0D1F3C`
**Briefing:** `#0D1F3C`

`#0D1F3C` = `hsl(213, 67%, 14%)`. Aktuell ist es `hsl(222, 40%, 14%)` — leicht anderer Farbton.

**Fix:** `backgroundColor` auf `#0D1F3C` ändern.

---

## Umsetzungsplan

| # | Änderung | Zeilen |
|---|----------|--------|
| 1 | Hero Background → Standard Deep Space (`#0A0A0F` Palette) | 79 |
| 2 | Dark Sections (S4, S6, S8, S9, S12) ebenfalls auf Standard Deep Space | 375, 595, 772, 914, 1197 |
| 3 | Hero Badge → `<Badge variant="gradient">` mit Layers-Icon und "GUIDED BUILD · 6 WOCHEN · FOUNDING COHORT" | 113–118 |
| 4 | S13 Background → `#0D1F3C` | 1313 |

4 Dateien-Änderungen, alle in `src/pages/RevenueArchitectureSystem.tsx`.

