
# Plan: GTM/Revenue Playbook v2.0 - Vollständige Implementierung

## Status: Vorherige Änderungen nicht persistiert
Alle drei Dateien sind noch im ursprünglichen Zustand. Die Implementierung muss komplett neu erfolgen.

---

## Änderung 1: `src/data/playbooks.ts`

**Zeile 23**: `slug` ändern
```typescript
// Alt:
slug: 'gtm-revenue',

// Neu:
slug: 'growth-engines/gtm-revenue',
```

**Zeilen 28-46**: Description, Outcomes und Case Studies für 7-Hebel-Framework aktualisieren

---

## Änderung 2: `src/App.tsx`

**Zeile 145**: Route-Pfad ändern
```typescript
// Alt:
<Route path="/playbooks/gtm-revenue" element={<PlaybookGtmRevenue />} />

// Neu:
<Route path="/playbooks/growth-engines/gtm-revenue" element={<PlaybookGtmRevenue />} />
```

---

## Änderung 3: `src/pages/PlaybookGtmRevenue.tsx`

Kompletter Umbau auf v2-Struktur mit 8 Sektionen:

### Hero-Sektion CTAs (aktuell Zeilen 122-140)
```typescript
// Alt:
onClick={() => window.open('https://calendly.com/michel-scalingx/inflection-call', '_blank')}
onClick={() => scrollToSection('executive-summary')}

// Neu:
onClick={() => window.open('https://scalingx.fillout.com/inflection-call', '_blank')}
onClick={() => window.open('/downloads/gtm-revenue-playbook.pdf', '_blank')}
```

### Framework-Sektion (aktuell 3-Komponenten)
Umbau auf **7-Hebel-Framework mit Accordion**:
1. ICP Clarity
2. Outbound Engine  
3. Inbound Machine
4. Partner Leverage
5. Pricing Power
6. Sales Process
7. PLG Motion

### Neue Sektionen hinzufügen:
- Solutions Connection (Links zu Power Up/Boost)
- Who It's For (4 Personas)
- Next Steps (3 CTAs)

---

## Technische Details

**Vorhandene Komponenten nutzen:**
- `Accordion, AccordionItem, AccordionTrigger, AccordionContent` aus `@/components/ui/accordion`
- `Card, CardContent` aus `@/components/ui/card`
- `TwinklingStars`, `Navigation`, `Footer`

**Asset-Hinweis:**
PDF-Datei `public/downloads/gtm-revenue-playbook.pdf` muss vorhanden sein (oder hochgeladen werden).

---

## Erwartetes Ergebnis

- `/playbooks` → "Learn More" führt auf `/playbooks/growth-engines/gtm-revenue`
- `/playbooks/gtm-revenue` → 404 (NotFound)
- Download-Button → `/downloads/gtm-revenue-playbook.pdf`
- Booking-Button → `https://scalingx.fillout.com/inflection-call`
- Bilingual DE/EN funktioniert durchgängig
