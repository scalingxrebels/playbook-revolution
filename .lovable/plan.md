
Kurzdiagnose:
- `https://scalingx.io/favicon.ico` liefert aktuell noch das Lovable-Standard-Icon (Herz).
- In `index.html` wird `favicon.ico` zuerst referenziert (`rel="icon" sizes="any"`), dadurch greifen Browser häufig genau diese Datei.
- Favicons werden zusätzlich sehr aggressiv gecacht (Browser + PWA), deshalb bleibt ein falsches Icon oft sichtbar.

Umsetzungsplan:

1) Neues Brand-Icon als zentrale Datei ablegen
- Quelle: `user-uploads://X_SX_300px_300ppi-2.png`
- Ziel: `public/favicon-sx.png` (neuer Dateiname = sauberes Cache-Busting)

2) Head-Links in `index.html` auf neue Datei umstellen
- Entfernen: `<link rel="icon" href="/favicon.ico" sizes="any" />`
- Setzen:
  - `rel="icon" type="image/png" sizes="32x32" href="/favicon-sx.png"`
  - `rel="shortcut icon" href="/favicon-sx.png"`
  - `rel="apple-touch-icon" sizes="180x180" href="/favicon-sx.png"`

3) Manifest konsistent machen
- `public/site.webmanifest`:
  - Icons (192/512) auf `/favicon-sx.png` umstellen

4) PWA-Konfiguration angleichen
- `vite.config.ts`:
  - `includeAssets`: `favicon.ico` entfernen, `favicon-sx.png` hinzufügen
  - `manifest.icons`: alle `src` auf `/favicon-sx.png` setzen
- So landet das richtige Icon auch im PWA-Precache.

5) Fallback-/Cache-Risiko minimieren
- Optional zusätzlich: `public/favicon.ico` ersetzen (falls echtes `.ico` vorliegt).
- Ohne echtes `.ico` reicht in der Praxis meist `shortcut icon` auf PNG + neue Dateinamenstrategie.

Validierung:
- Hard Reload und neuen Tab öffnen.
- Prüfen:
  - `https://scalingx.io/favicon-sx.png`
  - `https://scalingx.io/site.webmanifest`
  - Tab-Favicon auf Desktop und Homescreen-Icon mobil.
- Wenn lokal noch alt: Service Worker unregister + Browser-Cache löschen.
