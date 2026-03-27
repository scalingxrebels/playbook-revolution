

## Plan: /insights Redesign nach Solutions-Muster

### Ansatz

Die bestehende /insights-Seite wird nach dem exakten Muster der /solutions-Seite umgebaut: SharedHero, Featured Section, CategoryNav (6 Kacheln), Filter-Grid mit Category-Chips, und CTA. Alle bestehenden Design-Tokens bleiben erhalten (League Spartan, DM Sans, bg-card, text-gradient, shadow-brutal, etc.).

---

### Architektur (spiegelt Solutions)

```text
/insights (Hub Page)
├── S1 — Hero (SharedHero, Briefing-Copy, keine CTAs)
├── S2 — Category Navigation (6 Kacheln, 3×2 Grid — wie SolutionCategoryNav)
├── S3 — Featured Article (1 grosser, wie SolutionFeatured)
├── S4 — Artikel-Grid mit Category-Chips + ?category= URL-State
└── S5 — Weicher CTA (wie SolutionCTA, Briefing-Copy)
```

---

### Schritt 1: Daten aktualisieren

**`src/data/insights.ts`**
- Kategorien 8 → 6 (Solutions-aligned): `insights-and-levers`, `growth-engines`, `scaling-systems`, `ai-orchestration`, `translating-strategy`, `portfolio`
- Neue `insightCategoryTiles`-Datenstruktur (analog `solutionCategories`): id, labelEn/De, headlineEn/De, bodyEn/De, route, icon, accentColor
- AI Orchestration bekommt `text-amber-500` als Akzent, alle anderen `text-primary`
- Sample-Artikel re-taggen auf neue Kategorien
- Events und Case Studies bleiben im Type-System, werden aber auf der Hub-Page nicht gerendert

### Schritt 2: Hub-Page Komponenten

| Datei | Art | Vorlage |
|---|---|---|
| `src/components/insights/InsightsHero.tsx` | Anpassen | SharedHero ohne CTAs, Briefing-Copy |
| `src/components/insights/InsightsCategoryNav.tsx` | **Neu** | Kopie von `SolutionCategoryNav` — 6 Kacheln mit icon, headline, body, Artikel-Count, Arrow-Link |
| `src/components/insights/InsightsFeatured.tsx` | **Neu** | Kopie von `SolutionFeatured` — 1 Featured Article (border-left Akzent statt Card) |
| `src/components/insights/InsightsFilterSection.tsx` | Refactor | Tabs entfernen → nur Category-Chips (6+All), gleicher Chip-Style wie Solutions |
| `src/components/insights/InsightsGrid.tsx` | Refactor | Nur Articles rendern, kein Datum zeigen |
| `src/components/insights/InsightArticleCard.tsx` | Refactor | Footer: Lesezeit + "Artikel lesen →", kein Datum |
| `src/components/insights/InsightsCTA.tsx` | Anpassen | Briefing-Copy (weicher Ton), + Ghost-Button "Solutions ansehen" → /solutions |
| `src/pages/Insights.tsx` | Refactor | 5-Section Architektur, `useSearchParams` für `?category=` |

### Schritt 3: Kategorie-Seiten

| Datei | Art | Vorlage |
|---|---|---|
| `src/pages/InsightCategoryPage.tsx` | **Neu** | Kopie von `SolutionCategoryLanding` — SharedHero + gefiltertes Grid + CTA mit Solutions-Link |
| `src/App.tsx` | Routes | 6 neue Routes: `/insights/insights-and-levers`, `/insights/growth-engines`, etc. → `InsightCategoryPage` |

---

### Design-Entscheidungen

- **Exakte Tokens wie Solutions**: `bg-card border-2 border-border`, `bg-mesh opacity-40`, `bg-grid-pattern`, `text-display-md`, `italic text-gradient`, `shadow-brutal-sm`, `useScrollAnimation`
- **Kacheln**: `bg-card border-2 border-border hover:border-primary/50 p-6` (wie `SolutionCategoryNav`)
- **AI Orchestration**: `text-amber-500` statt `text-primary` (Multiplier-Signal)
- **Keine hardcoded Hex-Farben** — alles über Theme-Tokens
- **Artikel-Detail-Seiten**: Phase 2 (kein Body-Content vorhanden)

### Dateien-Übersicht

| Datei | Art |
|---|---|
| `src/data/insights.ts` | Refactor |
| `src/components/insights/InsightsHero.tsx` | Anpassen |
| `src/components/insights/InsightsCategoryNav.tsx` | **Neu** |
| `src/components/insights/InsightsFeatured.tsx` | **Neu** |
| `src/components/insights/InsightsFilterSection.tsx` | Refactor |
| `src/components/insights/InsightsGrid.tsx` | Refactor |
| `src/components/insights/InsightArticleCard.tsx` | Refactor |
| `src/components/insights/InsightsCTA.tsx` | Anpassen |
| `src/pages/Insights.tsx` | Refactor |
| `src/pages/InsightCategoryPage.tsx` | **Neu** |
| `src/App.tsx` | Routes hinzufügen |

11 Dateien (3 neu, 8 geändert). Umsetzung in 2-3 Schritten wegen Umfang.

