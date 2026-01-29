
# Plan: GTM/Revenue Playbook v2.0 - Implementierung

## Übersicht
Drei Dateien müssen angepasst werden, um das Playbook von v1 auf v2 zu aktualisieren.

---

## Änderung 1: `src/data/playbooks.ts`

**Zeile 23**: Slug ändern
```typescript
slug: 'growth-engines/gtm-revenue',
```

**Zeilen 28-46**: Description und Outcomes auf 7-Hebel-Framework aktualisieren

---

## Änderung 2: `src/App.tsx`

**Zeile 145**: Route-Pfad ändern
```typescript
<Route path="/playbooks/growth-engines/gtm-revenue" element={<PlaybookGtmRevenue />} />
```

---

## Änderung 3: `src/pages/PlaybookGtmRevenue.tsx`

Kompletter Umbau der 1084-Zeilen-Datei auf v2:

### Hero CTAs
- Download: `/downloads/gtm-revenue-playbook.pdf`
- Booking: `https://scalingx.fillout.com/inflection-call`

### 7-Hebel-Framework (Accordion)
1. ICP Clarity
2. Outbound Engine
3. Inbound Machine
4. Partner Leverage
5. Pricing Power
6. Sales Process
7. PLG Motion

### Neue Sektionen
- Case Studies (Series A/B/C mit ARR)
- 90-Tage-Roadmap
- Solutions Connection (Power Up/Boost)
- Who It's For (4 Personas)
- Next Steps (3 CTAs)

---

## Technische Details

- Bilingual (EN/DE) via `useLanguage()`
- Bestehende Komponenten: `Accordion`, `Card`, `TwinklingStars`
- PDF muss unter `public/downloads/gtm-revenue-playbook.pdf` existieren

---

## Erwartetes Ergebnis

- `/playbooks` → "Learn More" führt auf `/playbooks/growth-engines/gtm-revenue`
- `/playbooks/gtm-revenue` → 404 (NotFound)
- Download-Button → PDF öffnen
- Booking-Button → Fillout öffnen
