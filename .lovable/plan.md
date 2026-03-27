

## Plan: Favicon-Problem beheben

### Ursache

`public/favicon.ico` existiert und enthält vermutlich das Lovable-Standard-Icon. Chrome fordert automatisch `/favicon.ico` an und zeigt dieses statt `favicon-sx.png`.

Zusätzlich existiert `public/favicon.png` — unklar ob das ScalingX oder ebenfalls Lovable ist.

### Lösung

1. **`public/favicon.ico` löschen** — das ist die Hauptursache
2. **`public/favicon.png` löschen** (falls nicht gebraucht, vermeidet Verwirrung)
3. **PWA-Manifest prüfen** — `site.webmanifest` und `vite.config.ts` verweisen bereits korrekt auf `favicon-sx.png`