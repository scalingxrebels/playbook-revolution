
# Plan: GTM/Revenue Playbook v3.0 Synchronisation

## Analyse-Ergebnis

### Status: Bereits weitgehend v3.0-konform

| Element | Status | Details |
|---------|--------|---------|
| Kachel-Title | OK | "GTM/Revenue Playbook" |
| Hero Section | OK | Keine Formeln, praktischer Ton |
| Summary Section | OK | Keine Formeln, praktischer Ton |
| Framework Section | OK | 7-Lever Framework korrekt |
| Case Studies | OK | Keine θ_index Referenzen |
| Solutions Connection | ÄNDERN | Nur 2 Items, Briefing fordert 4 |

---

## Einzige Änderung erforderlich

### Solutions Connection Section (Zeilen 358-385)

**Aktuell:** 2 Items
1. Power Up: CAC Crisis Averted (€23.6K, 30 Days)
2. Boost: Growth Engine (€60K-€78K, 90 Days)

**Briefing v3.0:** 4 Items
1. **Comprehensive Assessment** (€2.5K-€10K, 2-3 Days) - NEU
2. Power Up (€23.6K-€45.9K, 30 Days)
3. Boost (€60K-€78K, 90 Days)
4. **Accelerate** (€153K, 12 Months) - NEU

---

## Implementierungsdetails

### Datei: `src/data/playbooks/content/gtm-revenue.ts`

| Zeilen | Änderung |
|--------|----------|
| 361-384 | `items` Array erweitern von 2 auf 4 Items |

### Neue Items hinzufügen:

```yaml
ITEM 1 (NEU): Comprehensive Assessment
├── type: "assessment" (oder "power-up" mit Assessment-Styling)
├── name: "GTM Assessment"
├── duration: "2-3 Days"
├── price: "€2.5K-€10K"
├── outcome: "Full GTM maturity report + 90-day roadmap"
├── cta: "Book Assessment"
├── link: "/solutions/assessment"
├── icon: "ClipboardCheck"
└── color: "green"

ITEM 4 (NEU): Accelerate
├── type: "accelerate"
├── name: "Accelerate: AI-Native GTM"
├── duration: "12 Months"
├── price: "€153K"
├── outcome: "Full GTM transformation, AI Maturity Level 3"
├── cta: "Start Accelerate"
├── link: "/solutions/accelerate"
├── icon: "TrendingUp"
└── color: "violet"
```

---

## Zusammenfassung

| Aspekt | Details |
|--------|---------|
| **Dateien** | 1 (gtm-revenue.ts) |
| **θ_index Stellen** | 0 (bereits entfernt) |
| **Formel-Stellen** | 0 (bereits entfernt) |
| **Title-Update** | 0 (bereits korrekt) |
| **Solutions-Update** | +2 neue Items |
| **Kritikalität** | Niedrig (nur Solutions erweitern) |

---

## Hinweis zur Typ-Kompatibilität

Die aktuelle `SolutionConnectionItem` TypeScript-Definition unterstützt nur die Typen:
- `'power-up'`
- `'boost'`
- `'accelerate'`

Für das Assessment-Item muss entweder:
1. Der Typ `'assessment'` zur TypeScript-Definition hinzugefügt werden, ODER
2. Das Assessment als `'power-up'` mit angepasstem Styling umgesetzt werden

---

## Nächste Schritte

1. **Solutions Connection erweitern** (`gtm-revenue.ts`, Zeilen 361-384)
   - Assessment Item hinzufügen (Position 1)
   - Accelerate Item hinzufügen (Position 4)
2. **Optional:** TypeScript-Definition prüfen für `'assessment'` Typ
3. **Plan.md aktualisieren** - GTM/Revenue als Ebene 3 Playbook tracken
