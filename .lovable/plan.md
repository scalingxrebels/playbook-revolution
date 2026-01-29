

# Plan: GTM/Revenue Playbook v2.0 - Implementierung

## Konfiguration (basierend auf deinen Angaben)

| Parameter | Wert |
|-----------|------|
| PDF Download | Lokale Datei: `/downloads/gtm-revenue-playbook.pdf` |
| Call Booking | `https://scalingx.fillout.com/inflection-call` |
| Alte URL | Kein Support (404) |

---

## Änderungen

### 1. `src/data/playbooks.ts`
- `slug`: `'gtm-revenue'` → `'growth-engines/gtm-revenue'`
- Beschreibungen aktualisieren für 7-Hebel-Framework
- Case Studies mit ARR-Metriken

### 2. `src/App.tsx` (Zeile 145)
```typescript
// Neu:
<Route path="/playbooks/growth-engines/gtm-revenue" element={<PlaybookGtmRevenue />} />
```

### 3. `src/pages/PlaybookGtmRevenue.tsx` (Komplett neu)

**8 Sektionen:**

1. **Hero** - Deep Space Background, CTAs:
   - "Download Playbook (PDF)" → `/downloads/gtm-revenue-playbook.pdf`
   - "Book 30-Min Call" → `https://scalingx.fillout.com/inflection-call`

2. **Problem** - 4 Metriken (CAC steigt, Win Rate sinkt, Sales Cycle wächst, Revenue/Employee stagniert)

3. **Solution** - 7-Hebel-Framework mit Accordion:
   - ICP Clarity
   - Outbound Engine
   - Inbound Machine
   - Partner Leverage
   - Pricing Power
   - Sales Process
   - PLG Motion

4. **Case Studies** - 3 anonymisierte Cases (Series A/B/C mit ARR-Wachstum)

5. **Implementation** - 90-Tage-Roadmap (Diagnose → Design → Deploy)

6. **Solutions Connection** - Power Up + Boost Cards mit Links

7. **Who It's For** - 4 Personas (CEO, CRO, COO, Investor)

8. **Next Steps** - 3 CTAs

**Technisch:**
- Bilingual (EN/DE) mit `useLanguage()` Hook
- Bestehende UI-Komponenten: `Accordion`, `Card`, `TwinklingStars`
- Navigation + Footer

