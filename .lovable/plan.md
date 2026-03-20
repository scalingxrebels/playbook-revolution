

## Plan: Format-Sektion Redesign

### Datei: `src/pages/RevenueArchitectureSystem.tsx` — Zeilen 491–536

### Problem
Die aktuelle Format-Sektion wirkt technisch/trocken (Monospace-Tree-Struktur `├──`, `└──`) und fällt visuell aus dem Premium-Design der restlichen LP heraus. Die "Nicht dies / Sondern das"-Box unten ist zu klein und unauffällig.

### Neues Design

**Layout:** 3-spaltig (lg:grid-cols-3) statt single-column, konsistent mit Sessions-Grid.

**Karte 1 — Live Sessions:**
- Icon: `Users` (Lucide)
- Titel: "6 Live Sessions"
- Detail: "4h · online · max. 12 Teilnehmer"
- Subtle accent border left

**Karte 2 — Async Work:**
- Icon: `Clock` (Lucide)
- Titel: "Async-Arbeit"
- Detail: "2–3h pro Woche zwischen den Sessions"

**Karte 3 — Peer Review & Expert:**
- Icon: `MessageSquare` (Lucide)
- Titel: "Peer Review & Expert"
- Detail: "Strukturiertes Feedback in jeder Session. 1:1 Expert Sessions je nach Tier."

**Gesamt-Zusammenfassung:** Zentriert unter dem Grid, bold: "ca. 6–7h pro Woche · 6 Wochen"

**Differenzierung (darunter):** Horizontal 3-col row mit ✗/✗/✓ Items statt gestackter Box — gleiche Items wie bisher, aber als gleichberechtigte Chips/Cols.

### Styling
- Cards: `bg-card/10 backdrop-blur-sm border border-border/50 p-6` (wie Sessions-Cards)
- Icons: `text-accent w-8 h-8 mb-4`
- Dark section background bleibt (Deep Space gradient)
- Hover: `hover:border-primary/30 transition-all`

### Imports
- `Users`, `Clock`, `MessageSquare` aus lucide-react hinzufügen (falls nicht vorhanden)

