

# Fix: "www." Prefix aus allen cal.scalingx.io URLs entfernen

## Problem

Alle Fillout-Booking- und Formular-URLs verwenden `https://www.cal.scalingx.io/...`, aber die korrekte Domain ist `https://cal.scalingx.io/...` (ohne `www`). Dadurch funktionieren aktuell keine Booking- oder Download-Formulare.

## Loesung

Globales Suchen-und-Ersetzen in allen 26 betroffenen Dateien:

`https://www.cal.scalingx.io/` wird zu `https://cal.scalingx.io/`

## Betroffene Dateien (26)

**Zentrale Utility-Dateien (2):**
- `src/hooks/useFilloutUrl.ts` -- buildFilloutUrl baseUrl
- `src/components/forms/FilloutBookingModal.tsx` -- buildFilloutUrl baseUrl

**Seiten mit Embed-URLs (3):**
- `src/pages/ML.tsx`
- `src/pages/FM.tsx`
- `src/pages/AH.tsx`

**Homepage (1):**
- `src/components/homepage/FinalCTAOptimized.tsx`

**Playbook Content-Dateien (17):**
- Alle Dateien in `src/data/playbooks/content/` (bookingUrl-Felder)

**Research Data-Dateien (2):**
- `src/data/research/amf.ts`
- `src/data/research/unified-framework.ts`

**Download-Modal (1):**
- `src/components/forms/FilloutDownloadModal.tsx`

## Aenderung

Identisch in jeder Datei -- reiner String-Replace:

```text
Vorher:  https://www.cal.scalingx.io/
Nachher: https://cal.scalingx.io/
```

Keine Logik-Aenderungen, keine neuen Props, keine strukturellen Anpassungen.
