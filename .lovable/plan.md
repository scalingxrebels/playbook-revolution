

## Fix: Featured-Subline Text ändern

### Änderung

`src/components/solutions/SolutionFeatured.tsx` Z.44-45:
- DE: `Händisch kuratiert. Aktuell: ${featuredTiles.length} Solutions.` → `Kuratiert für CEOs. ${featuredTiles.length} Solutions.`
- EN: `Hand-curated. Currently: ${featuredTiles.length} solutions.` → `Curated for CEOs. ${featuredTiles.length} solutions.`

1 Datei, 2 Strings. Dynamische Zählung bleibt erhalten.

