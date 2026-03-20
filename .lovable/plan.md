

## Plan: Hero Badge von Amber Pill auf Gradient Badge umstellen

### Datei: `src/pages/RevenueArchitectureSystem.tsx`

### Änderungen

**2 Stellen** — beide Amber Badges ersetzen:

1. **Hero Badge (Zeile 105–108):** 
   - `className` von custom Amber-Styling auf `variant="gradient"` umstellen
   - Icon von `Zap` auf `Layers` (wie im Bild: gestapelte Quadrate)
   - Text auf: `Guided Build · 6 Wochen · Founding Cohort`

2. **Apply-Form Badge (Zeile 1127–1130):**
   - Gleiche Änderung: `variant="gradient"`, `Layers`-Icon, gleicher Text

### Import
- `Layers` aus `lucide-react` ergänzen (falls nicht vorhanden), `Zap` prüfen ob noch anderweitig genutzt

