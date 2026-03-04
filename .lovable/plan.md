

# Add Growth Curve Section to Main Homepage

## What
Import and place the existing `GrowthCurveOptimized` component into `src/pages/Index.tsx`, between **ProofOptimized** (Section 6) and **ROICalculatorOptimized** (Section 7).

## Why no further changes needed
The `GrowthCurveOptimized` component already follows the same patterns as other homepage sections:
- `useScrollAnimation` with staggered delays
- `useLanguage()` for bilingual content
- CSS variables (`hsl(var(--muted-foreground))`, `bg-background`, `text-foreground`)
- `container max-w-6xl mx-auto px-6` layout
- Badge + title + subtitle header structure
- `rounded-3xl`, `backdrop-blur-sm`, `border-border/50` card styling

## File Changed
- **Edit** `src/pages/Index.tsx` -- add import + place component (2 lines added)

