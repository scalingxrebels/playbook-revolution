

# Domain-Migration: scalingx.fillout.com → www.cal.scalingx.io

## Zusammenfassung

Alle Fillout-Formular-URLs werden von `https://scalingx.fillout.com/` auf `https://www.cal.scalingx.io/` umgestellt. Die Parameter-Struktur bleibt identisch.

---

## Betroffene Dateien (4 zentrale URL-Builder + 18 Playbook-Daten + 1 Homepage)

### Zentrale URL-Builder (hier werden die Base-URLs definiert)

| Datei | Aktuelle URL | Neue URL |
|-------|-------------|----------|
| `src/components/forms/FilloutBookingModal.tsx` (Zeile 38) | `https://scalingx.fillout.com/${formSlug}` | `https://www.cal.scalingx.io/${formSlug}` |
| `src/components/forms/FilloutDownloadModal.tsx` (Zeile 19) | `https://scalingx.fillout.com/download` | `https://www.cal.scalingx.io/download` |
| `src/hooks/useFilloutUrl.ts` (Zeile 13) | `https://scalingx.fillout.com/${formSlug}` | `https://www.cal.scalingx.io/${formSlug}` |
| `src/pages/ML.tsx` (Zeile 13) | `https://scalingx.fillout.com/${formSlug}` | `https://www.cal.scalingx.io/${formSlug}` |
| `src/pages/AH.tsx` (Zeile 19) | `https://scalingx.fillout.com/${formSlug}` | `https://www.cal.scalingx.io/${formSlug}` |
| `src/pages/FM.tsx` (Zeile 12) | `https://scalingx.fillout.com/${formSlug}` | `https://www.cal.scalingx.io/${formSlug}` |
| `src/components/homepage/FinalCTAOptimized.tsx` (Zeile 224) | `https://scalingx.fillout.com/inquiry` | `https://www.cal.scalingx.io/inquiry` |

### Playbook-Daten (bookingUrl in allen 18 Content-Dateien)

Alle Dateien in `src/data/playbooks/content/` enthalten `bookingUrl: "https://scalingx.fillout.com/inflection-call"` -- wird jeweils auf `https://www.cal.scalingx.io/inflection-call` geandert.

Betroffene Dateien:
- ai-native-scaling.ts, board-governance.ts, customer-success.ts, data-tech.ts, exit-ma.ts, finance.ts, growth-engines.ts, gtm-revenue.ts, operating-systems.ts, operational-governance.ts, operations.ts, portfolio-excellence.ts, portfolio-transformation.ts, product.ts, strategic-capabilities.ts, strategic-governance.ts, talent.ts

### PostMessage-Listener (FilloutDownloadModal)

Die `event.origin.includes('fillout.com')` Pruefung in `FilloutDownloadModal.tsx` (Zeile 88) muss auf `cal.scalingx.io` erweitert werden, damit die automatische PDF-Download-Erkennung weiterhin funktioniert.

---

## Ergebnis

- Alle Formulare (Booking, Download, Inquiry, Embed) nutzen die neue Domain
- UTM-Parameter und Source-Tracking bleiben identisch
- PostMessage-Listener erkennt auch die neue Domain
- Keine sichtbare Anderung fur Endnutzer (ausser der neuen Domain in der Adressleiste des iframes)

