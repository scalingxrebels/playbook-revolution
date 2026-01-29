

# Plan: GTM/Revenue Playbook v2.0 - Implementierung

## Übersicht

Drei Dateien müssen geändert werden:

| Datei | Aktion | Zeilen |
|-------|--------|--------|
| `src/data/playbooks.ts` | Bearbeiten | ~15 Zeilen |
| `src/App.tsx` | Bearbeiten | 1 Zeile |
| `src/pages/PlaybookGtmRevenue.tsx` | Komplett neu | ~900 Zeilen |

---

## Schritt 1: Playbook-Daten aktualisieren

**Datei:** `src/data/playbooks.ts`

**Änderungen:**
- `slug`: `'gtm-revenue'` → `'growth-engines/gtm-revenue'`
- `description.en`: Neuer Text mit 7-Hebel-Framework
- `description.de`: Deutsche Version
- `outcomes`: Aktualisiert für 7 Hebel
- `caseStudies`: 3 anonymisierte mit ARR-Metriken

---

## Schritt 2: Routing aktualisieren

**Datei:** `src/App.tsx` (Zeile 145)

```typescript
// Alt:
<Route path="/playbooks/gtm-revenue" element={<PlaybookGtmRevenue />} />

// Neu:
<Route path="/playbooks/growth-engines/gtm-revenue" element={<PlaybookGtmRevenue />} />
```

---

## Schritt 3: Landing Page komplett neu schreiben

**Datei:** `src/pages/PlaybookGtmRevenue.tsx`

**8 Sektionen gemäss Briefing:**

1. **Hero** - Deep Space Background, 2 CTAs (Download PDF, Book Call)
2. **Problem** - 4 Metriken (CAC, Win Rate, Sales Cycle, Revenue/Employee)
3. **Solution** - 7-Hebel-Framework mit Accordion UI
4. **Case Studies** - 3 anonymisierte Cases (Series A/B/C)
5. **Implementation** - 90-Tage-Roadmap (3 Phasen)
6. **Solutions Connection** - Power Up + Boost Cards
7. **Who It's For** - 4 Personas
8. **Next Steps** - 3 CTAs

**Technische Details:**
- Bilingual (EN/DE) mit `useLanguage()` Hook
- Accordion für 7 Hebel
- TwinklingStars + Parallax für Hero
- Cards mit Badges für Case Studies
- Links zu `/solutions/power-up/cac-crisis` und Boost

