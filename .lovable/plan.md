

# Favicon-Optimierung — Vollständige Umsetzung

## Problem

Die `index.html` hat nur eine einzige Favicon-Zeile:
```html
<link rel="icon" type="image/png" href="/favicon.png" />
```

Es fehlen:
1. **`apple-touch-icon`** — iOS/Safari zeigt kein ScalingX-Icon
2. **Multiple Sizes** (16x16, 32x32, 192x192, 512x512) — Google bevorzugt größere Icons
3. **`site.webmanifest`** — PWA/Chrome-Standard für Icons
4. **`favicon.ico` Fallback** — Die Datei existiert, ist aber nicht verlinkt (ältere Browser)
5. **`theme-color` Meta-Tag** — Fehlt komplett

Google zeigt oft das Lovable-Favicon, weil es entweder gecacht ist oder der Crawler das Icon nicht korrekt auflösen kann ohne `site.webmanifest`.

## Umsetzung

### 1. `index.html` — Vollständige Favicon-Tags

Ersetze die einzelne Favicon-Zeile durch den kompletten Satz:

```html
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
<link rel="manifest" href="/site.webmanifest" />
<meta name="theme-color" content="#0a0118" />
```

### 2. `public/site.webmanifest` — Neu erstellen

```json
{
  "name": "ScalingX",
  "short_name": "ScalingX",
  "icons": [
    { "src": "/favicon.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/favicon.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "#0a0118",
  "background_color": "#0a0118",
  "display": "standalone"
}
```

### Dateien

| Aktion | Datei |
|---|---|
| Edit | `index.html` (Favicon-Block erweitern) |
| Neu | `public/site.webmanifest` |

Keine Page-Änderungen nötig — das Favicon wird global über `index.html` gesteuert und gilt für alle Routen.

**Hinweis**: Damit Google das neue Favicon übernimmt, muss nach dem Deploy ggf. in der Google Search Console ein Re-Crawl angestoßen werden. Das alte Lovable-Favicon kann bis zu 2-4 Wochen im Cache bleiben.

