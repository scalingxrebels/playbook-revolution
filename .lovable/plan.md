
# Plan: GTM/Revenue Playbook v2.0 - Inkrementelle Implementierung

## Problem-Analyse
Die bisherigen Versuche scheiterten beim kompletten Rewrite der 1084-Zeilen-Datei. Dieser Plan nutzt stattdessen gezielte Zeilenänderungen (`lov-line-replace`).

---

## Phase 1: Routing & Data (kleine Dateien - sicher)

### Änderung 1.1: `src/data/playbooks.ts` (Zeile 23)
```typescript
slug: 'growth-engines/gtm-revenue',
```

### Änderung 1.2: `src/App.tsx` (Zeile 145)
```typescript
<Route path="/playbooks/growth-engines/gtm-revenue" element={<PlaybookGtmRevenue />} />
```

---

## Phase 2: PlaybookGtmRevenue.tsx - Gezielte Zeilenänderungen

Statt kompletten Rewrite: Einzelne Sektionen nacheinander anpassen.

### Änderung 2.1: Hero CTAs (Zeilen ~122-140)
- Calendly -> Fillout URL
- Scroll-to-section -> PDF Download

### Änderung 2.2: Framework-Sektion umbauen
- 3-Komponenten-Framework entfernen
- 7-Hebel-Accordion einfügen (ICP, Outbound, Inbound, Partners, Pricing, Sales, PLG)

### Änderung 2.3: Neue Sektionen am Ende hinzufügen
- Solutions Connection
- Who It's For
- Next Steps

---

## Technische Vorgehensweise

1. **Erst die kleinen Dateien ändern** (playbooks.ts, App.tsx)
2. **Dann PlaybookGtmRevenue.tsx in 3-4 separaten Schritten**:
   - Schritt A: Hero-CTAs anpassen
   - Schritt B: Framework-Sektion ersetzen  
   - Schritt C: Neue Sektionen hinzufügen
   - Schritt D: Aufräumen (ungenutzte Importe, alte Sektionen)

---

## Erwartetes Ergebnis

Identisch wie vorher:
- `/playbooks` -> "Learn More" führt auf `/playbooks/growth-engines/gtm-revenue`
- `/playbooks/gtm-revenue` -> 404
- Download -> PDF
- Booking -> Fillout

---

## Vorteil dieser Methode

- Kleinere, atomare Änderungen = geringeres Fehlerrisiko
- Bei Fehlern leichter zu debuggen
- Keine 1000+ Zeilen auf einmal übertragen
