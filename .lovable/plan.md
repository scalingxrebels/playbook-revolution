

# Fix: Chart overflow on /expertise/anst

## Problem
The Recharts LineChart in `ResearchProblemSection.tsx` overflows its container horizontally. The Y-axis label ("Revenue (€M)" / "Umsatz (€M)") and the ReferenceLine label ("€100M ARR" positioned at `right`) extend beyond the right boundary.

## Solution
Two changes in `ResearchProblemSection.tsx`:

1. **Add `overflow-hidden`** to the chart's parent `div` (line 112) to clip any overflow
2. **Increase right margin** on the `LineChart` from `30` to `50` to give the "€100M ARR" reference label enough space
3. **Move ReferenceLine label** from `position: 'right'` to `position: 'insideTopRight'` so it stays inside the chart area

## Affected File
- `src/components/research/sections/ResearchProblemSection.tsx` (3 small edits)

