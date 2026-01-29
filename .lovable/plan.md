

# Plan: Phase 2 - 7-Lever Accordion und Personas

## Analyse der aktuellen Struktur

Die `PlaybookGtmRevenue.tsx` hat 8 Sektionen:
1. Hero (Zeilen 43-169) - CTAs bereits aktualisiert
2. Executive Summary (Zeilen 174-237)
3. **Framework** (Zeilen 242-393) - MUSS ERSETZT WERDEN
4. Best Practices (Zeilen 398-545)
5. Implementation (Zeilen 550-724)
6. Case Studies (Zeilen 729-866)
7. Related Solutions (Zeilen 871-977) - Entspricht bereits "Solutions Connection"
8. Final CTA (Zeilen 983-1065) - CTAs bereits aktualisiert

---

## Änderung 2.1: Framework-Sektion ersetzen (Zeilen 242-393)

Die aktuelle 3-Komponenten-Struktur wird durch ein **7-Lever Accordion** ersetzt:

### Neue 7 Hebel:
| # | Hebel | Farbe | Inhalt |
|---|-------|-------|--------|
| 1 | ICP Clarity | violet | Zielgruppendefinition, Buyer Personas, TAM/SAM/SOM |
| 2 | Outbound Engine | blue | SDR-Prozess, Sequencing, AI-gestützte Personalisierung |
| 3 | Inbound Machine | emerald | Content Strategy, SEO, Lead Magnets |
| 4 | Partner Leverage | amber | Channel Partner, Tech Partner, Integration Ecosystem |
| 5 | Pricing Power | rose | Value-Based Pricing, Packaging, Upsell Paths |
| 6 | Sales Process | cyan | Discovery, Demo, Proposal, Negotiation, Close |
| 7 | PLG Motion | purple | Freemium, Trial, Self-Serve, Expansion Triggers |

### Technische Umsetzung:
- Import `Accordion, AccordionItem, AccordionTrigger, AccordionContent` aus `@/components/ui/accordion`
- Jeder Hebel als `AccordionItem` mit:
  - Icon + Titel im Trigger
  - Beschreibung + Key Metrics + Action Items im Content
- Bilingual (DE/EN) wie bestehende Sektionen

---

## Änderung 2.2: "Who It's For" Sektion hinzufügen

Neue Sektion zwischen Case Studies und Related Solutions (nach Zeile 866):

### 4 Personas:
| Persona | Pain Point | Outcome |
|---------|-----------|---------|
| CEO/Founder | "Wachstum stagniert trotz mehr Headcount" | Klare GTM-Strategie |
| CMO/CRO | "CAC explodiert, Win Rate sinkt" | Messbare Pipeline |
| COO | "Prozesse sind nicht skalierbar" | RevOps-Fundament |
| VC/Board | "Portfolio-Company braucht GTM-Fix" | Schnelle Turnaround-Signale |

---

## Technische Details

### Imports hinzufügen (Zeile 1-38):
```typescript
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
```

### Bestehende Struktur beibehalten:
- `useLanguage()` für Bilingual
- `useScrollAnimation()` für Animations
- Gleiche Card/Badge-Komponenten

---

## Implementierungsschritte

1. **Schritt A**: Import für Accordion hinzufügen (Zeile ~1-38)
2. **Schritt B**: FrameworkSection komplett ersetzen (Zeilen 242-393)
3. **Schritt C**: WhoItsForSection nach CaseStudiesSection einfügen (nach Zeile 866)
4. **Schritt D**: Main Component um neue Section erweitern (Zeile ~1081)

---

## Erwartetes Ergebnis

- Framework zeigt jetzt 7 Hebel als Accordion statt 3 Komponenten-Cards
- Neue "Who It's For" Sektion mit 4 Personas
- Bestehende Sektionen (Best Practices, Implementation, Case Studies, Related Solutions) bleiben unverändert
- Alle CTAs zeigen auf Fillout/PDF (bereits erledigt)

