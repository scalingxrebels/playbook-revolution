
# Mapping-Vorschlag: Broken Links Fix

## Übersicht der Broken Links

| Link | Verwendet in | Problem |
|------|--------------|---------|
| `/solutions/assessment` | 8 Playbooks | Route existiert nicht |
| `/solutions/accelerate` | 9 Playbooks | Nur Sub-Routes existieren |
| `/solutions/power-up/governance-sprint` | 1 Playbook | Route existiert nicht |
| `/solutions/boost/governance-excellence` | 1 Playbook | Route existiert nicht |

---

## Decision Support Solutions (Verfügbar)

| ID | Solution | Route |
|----|----------|-------|
| 3 | GTM Effectiveness Review | `/solutions/gtm-effectiveness-review` |
| 4 | Pricing & Packaging Review | `/solutions/pricing-packaging-review` |
| 5 | Scaling Readiness Assessment | `/solutions/scaling-readiness-assessment` |
| 6 | AI Maturity Assessment | `/solutions/ai-maturity-assessment` |
| 7 | Investor-Readiness Pitch Deck Check | `/solutions/investor-readiness-pitch-deck-check` |
| 8 | VC Due Diligence Simulation | `/solutions/vc-dd-simulation` |
| 9 | Portfolio Assessment | `/solutions/portfolio-assessment` |
| 10 | Custom Analysis & Report | `/solutions/custom-analysis-report` |

---

## Accelerate Solutions (Verfügbar)

| Solution | Route |
|----------|-------|
| Accelerate Hypergrowth | `/solutions/accelerate/hypergrowth` |
| Accelerate Sustainable Growth | `/solutions/accelerate/sustainable-growth` |
| Accelerate AI-Native Scaling | `/solutions/accelerate/ai-native-scaling` |
| Accelerate Exit Readiness | `/solutions/accelerate/exit-readiness` |
| Accelerate Portfolio Transformation | `/solutions/accelerate/portfolio-transformation` |

---

## Mapping-Vorschlag: Assessment Links

| Playbook | Aktueller Link | Neuer Link | Begründung |
|----------|----------------|------------|------------|
| **GTM/Revenue** | `/solutions/assessment` | `/solutions/gtm-effectiveness-review` | GTM/Revenue Fokus |
| **Product** | `/solutions/assessment` | `/solutions/scaling-readiness-assessment` | Product Development = Execution Capability |
| **Customer Success** | `/solutions/assessment` | `/solutions/gtm-effectiveness-review` | CS ist Teil des Revenue Engine |
| **Operations** | `/solutions/assessment` | `/solutions/scaling-readiness-assessment` | Operations = Execution Excellence |
| **Finance** | `/solutions/assessment` | `/solutions/custom-analysis-report` | Finance-spezifische Analyse |
| **Talent** | `/solutions/assessment` | `/solutions/scaling-readiness-assessment` | Talent = Setup/Execution Capability |
| **Data/Tech** | `/solutions/assessment` | `/solutions/ai-maturity-assessment` | Tech/AI Infrastruktur Fokus |
| **Strategic Governance** | `/solutions/assessment` | `/solutions/investor-readiness-pitch-deck-check` | Board/Investor Readiness |
| **Operational Governance** | `/solutions/assessment` | `/solutions/scaling-readiness-assessment` | Operations Excellence |

---

## Mapping-Vorschlag: Accelerate Links

| Playbook | Aktueller Link | Neuer Link | Begründung |
|----------|----------------|------------|------------|
| **GTM/Revenue** | `/solutions/accelerate` | `/solutions/accelerate/hypergrowth` | Revenue Growth Fokus |
| **Product** | `/solutions/accelerate` | `/solutions/accelerate/ai-native-scaling` | AI-Native Product |
| **Customer Success** | `/solutions/accelerate` | `/solutions/accelerate/sustainable-growth` | NRR/Retention = Sustainable |
| **Operations** | `/solutions/accelerate` | `/solutions/accelerate/hypergrowth` | Scaling Operations |
| **Finance** | `/solutions/accelerate` | `/solutions/accelerate/exit-readiness` | Financial Excellence für Exit |
| **Talent** | `/solutions/accelerate` | `/solutions/accelerate/hypergrowth` | Scaling Team |
| **Data/Tech** | `/solutions/accelerate` | `/solutions/accelerate/ai-native-scaling` | AI Infrastructure |
| **Strategic Governance** | `/solutions/accelerate` | `/solutions/accelerate/exit-readiness` | Board Excellence für Exit |
| **Operational Governance** | `/solutions/accelerate` | `/solutions/accelerate/hypergrowth` | Operations at Scale |

---

## Mapping-Vorschlag: Power Up / Boost Links

| Playbook | Broken Link | Lösung |
|----------|-------------|--------|
| **Operational Governance** | `/solutions/power-up/governance-sprint` | `/solutions/power-up/board-readiness` oder generisch `/solutions` |
| **Operational Governance** | `/solutions/boost/governance-excellence` | `/solutions/boost/board-excellence` oder generisch `/solutions` |

**Alternative:** Falls keine passenden Power Up/Boost Landing Pages existieren, auf die Solutions Hub Seite (`/solutions`) verlinken mit Filter-Parameter.

---

## Zusammenfassung der Änderungen

| Datei | Assessment Link | Accelerate Link | Sonstige |
|-------|-----------------|-----------------|----------|
| `gtm-revenue.ts` | GTM Effectiveness Review | Hypergrowth | - |
| `product.ts` | Scaling Readiness | AI-Native Scaling | - |
| `customer-success.ts` | GTM Effectiveness Review | Sustainable Growth | - |
| `operations.ts` | Scaling Readiness | Hypergrowth | - |
| `finance.ts` | Custom Analysis | Exit Readiness | - |
| `talent.ts` | Scaling Readiness | Hypergrowth | - |
| `data-tech.ts` | AI Maturity | AI-Native Scaling | - |
| `strategic-governance.ts` | Investor Readiness | Exit Readiness | - |
| `operational-governance.ts` | Scaling Readiness | Hypergrowth | Power Up/Boost fix |

**Gesamt:** 9 Dateien, ~27 Link-Updates

---

## Offene Fragen

1. **Power Up/Boost für Governance:** Sollen wir auf `/solutions` (Hub) verlinken oder neue Landing Pages erstellen?
2. **Custom Analysis für Finance:** Ist Custom Analysis das richtige Mapping oder gibt es ein besseres?
3. **Accelerate Mapping:** Sind die vorgeschlagenen Accelerate-Zuordnungen korrekt?
