

## Solutions Page v1.0 — Refactoring Plan

### Status Quo vs. Briefing

The current `/solutions` page has: Hero → Filter Section (Search + Challenges + Types) → Tile Grid → CTA.
The briefing wants: Hero → Featured (7 curated) → Category Navigation (6 tiles) → Full Filter Grid → Fallback CTA.
Plus 6 new category landing pages at `/solutions/[category-slug]`.

---

### Data Layer Changes

**1. Extend `SolutionTile` interface** in `src/data/solutionTiles.ts`:
- Add `category: CategoryId` (primary)
- Add `categorySecondary?: CategoryId` (for dual-mapped solutions)
- Add new type `CategoryId = 'insights-and-levers' | 'growth-engines' | 'scaling-systems' | 'ai-orchestration' | 'translating-strategy' | 'tools'`
- Update all 46 solution entries with their `category` (and `categorySecondary` for 7 dual-mapped ones)
- Update `featured` flags: set `true` on the 7 specified solutions (inflection-call, strategic-advisory, revenue-architecture-system, maxxeed, fix-growth-scale-faster, power-up-ai-quick-wins, power-up-growth)

**2. New category data** — add `solutionCategories` array with the 6 categories (id, labels, descriptions, icons, solution count, route, mechanism reference, case data, "für wen" cards).

---

### Hub Page (`/solutions`) — 5 Sections

**Section 1 — Hero** (update existing `SolutionHero`):
- Overline: `WIE WIR ARBEITEN · SERIES A–B · DACH`
- H1: `Finde die richtige Lösung für deine Growth Challenge.`
- Subline: `15-80x Ø ROI. 92% Erfolgsrate. 46 Solutions. Eine ist deine.`
- Stats: 9 Challenges | 46 Solutions | 15-80x Ø ROI | 92% Erfolgsrate
- No CTA in hero

**Section 2 — Featured** (new component `SolutionFeatured.tsx`):
- Overline + H2 + Subline (design like Home sections: centered, `text-display-md`, `mb-12`)
- Grid: renders all tiles where `featured === true`, 3+2+2 layout on desktop
- Each card: Badge (type + timeframe), Title, 1-sentence copy, "→ Details ansehen" link
- Copy for each of the 7 featured solutions as specified in briefing

**Section 3 — Category Navigation** (new component `SolutionCategoryNav.tsx`):
- Overline + H2 (centered, design-consistent)
- 2×3 grid on desktop, 1-col mobile
- Each tile: Icon, name, headline, "Für wen", solution count, "→ Kategorie entdecken" link
- Links to `/solutions/[category-slug]`

**Section 4 — All Solutions Filter Grid** (adapt existing):
- Keep current filter logic (Challenge tabs + Type chips + Search)
- Add 3rd filter row: Category chips (new `SolutionCategoryChips` component)
- Update headline/subline per briefing
- Add filter hint text under search

**Section 5 — Fallback CTA** (update existing `SolutionCTA`):
- Headline: "Nicht sicher welche Situation deine ist?"
- Body + primary CTA + micro-copy per briefing

---

### Category Pages — Template

**New template component** `SolutionCategoryPage.tsx` with 6 sections:
1. Hero (SharedHero with breadcrumb, category-specific copy/stats)
2. "Für wen" (3 situation cards)
3. Solutions Grid (filtered by category, reuse `SolutionTileGrid`)
4. "Wie es funktioniert" (mechanism explanation M1-M4)
5. Cases (1-2 anonymized results)
6. CTA (dual buttons: book call + back to /solutions)

**New data file** `src/data/solutionCategoryPages.ts` with all 6 category configs (hero copy, für-wen cards, mechanism text, cases).

**Routing**: The existing `SolutionCategory` page at `/solutions/:category` currently reads from `src/data/solutions.ts`. Replace it with the new template that reads from the new category data, or add specific routes for the 6 new slugs above the catch-all.

---

### Design Consistency (Home / AI-Native standard)

- Section headers: Overline (`text-sm font-semibold uppercase tracking-widest text-accent`) + H2 (`text-display-md text-center`) + `mb-12` spacing
- Cards: `bg-card border-2 border-border hover:border-primary/50`, sharp corners, no `rounded-xl`
- Category tiles: larger, gradient bg, Icon 32px
- Grid patterns: `opacity-20`
- Theme-responsive (no `dark-section` except Hero)
- Filter buttons: outlined default, filled active (accent/primary)

---

### Route Changes in `App.tsx`

Add 6 explicit routes before the existing `/:category` catch-all:
```
/solutions/insights-and-levers
/solutions/growth-engines
/solutions/scaling-systems
/solutions/ai-orchestration
/solutions/translating-strategy
/solutions/tools
```

---

### Implementation Order (8 steps)

1. Extend `SolutionTile` type + add `category`/`categorySecondary` to all 46 entries + update `featured` flags
2. Create category data file with 6 category configs
3. Build `SolutionFeatured.tsx` (Section 2)
4. Build `SolutionCategoryNav.tsx` (Section 3)
5. Add category filter chips to Section 4
6. Update Hero copy + CTA copy
7. Build `SolutionCategoryPage.tsx` template + wire 6 routes
8. Design pass: ensure all new components match Home/AI-Native visual standards

### Scope
- ~6 new components, 1 new data file, updates to 3-4 existing files
- solutionTiles.ts gets 46× `category` field additions
- No database changes needed (categories are in code, `featured` already exists in tile data)

