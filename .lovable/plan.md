

## Fix: Buch-Link auf korrekte URL zeigen

### Problem
Der "Fix Growth. Scale Faster." Link in Section 7 (Z.540) zeigt auf `/insights` statt `/fix-growth-book`.

### Änderung
`src/pages/ML.tsx` Z.540: `to="/insights"` → `to="/fix-growth-book"`

1 Datei, 1 Zeile.

