
# Plan: Strategic Capabilities Playbook v3.0 Synchronisation

## Analyse der Inkonsistenzen

### Kritische Probleme (ENTFERNEN laut Briefing v3.0)

| Aktuell | Briefing v3.0 | Status |
|---------|---------------|--------|
| C₁, C₂, C₃, C₄ | Strategy, Setup, Execution, Operationalization | ÄNDERN |
| θ_index | AI Maturity Level (Level 1-3) | ÄNDERN |
| C_min | "Capability Bottleneck" / "lowest maturity capability" | ÄNDERN |
| Formeln (S = E × ...) | ENTFERNEN | ÄNDERN |
| EXPERTISE-Tone | PLAYBOOKS-Tone (praktisch/hilfreich) | ÄNDERN |

---

## Betroffene Dateien

### 1. Kachel: `src/data/playbooks.ts` (Zeilen 581-613)

**Aktuelle Description:**
```
"...used by AI-native companies to improve θ_index from 0.35 to 0.75+..."
```

**Briefing v3.0 Teaser:**
```
How to improve the 4 core capabilities that drive AI-native scaling.

Learn the practical framework (Strategy, Setup, Execution, Operationalization) 
used by AI-native companies to reach AI-Native Maturity (Level 3) and achieve 
3-5x faster scaling.

Includes implementation guides, capability assessment tools, and real-world 
case studies from Series A-C companies.
```

**Outcomes (aktuell vs. neu):**
| Aktuell | Briefing v3.0 |
|---------|---------------|
| θ_index improvement from 0.35 to 0.75+ | Reach AI-Native Maturity (Level 3) |
| Capability bottleneck (C_min) identification | Capability bottleneck identification |
| 90-day implementation roadmap | 90-day implementation roadmap |

---

### 2. Landing Page: `src/data/playbooks/content/strategic-capabilities.ts`

#### Section-by-Section Änderungen:

**HERO (Zeilen 8-29):**
- Badge: "Strategic Capabilities · Domain Playbook" → "Strategic Capabilities · Standalone Playbook"
- Description: Entferne C_min, θ_index, Formeln
- Trust Badges: "θ_index Framework" → "4 Capabilities Framework" oder "AI Maturity Levels"

**SUMMARY (Zeilen 30-51):**
| Feld | Aktuell | Briefing v3.0 |
|------|---------|---------------|
| Problem | "C_min < 0.5, θ_index 0.35" | "Low capability maturity, no AI integration" |
| Why It Matters | "S = E × (C₁^1.5...)" Formel | "Capabilities are multiplicative" (keine Formel) |
| Solution | "θ_index 0.75+" | "AI-Native Maturity (Level 3)" |

**PROBLEM SECTION (Zeilen 53-70):**
- Ersetze alle C_min, θ_index Referenzen
- Neue 3 Pain Points aus Briefing:
  1. Low Capability Maturity
  2. Capability Bottlenecks
  3. No AI Maturity Roadmap

**FRAMEWORK SECTION (Zeilen 72-189):**
- Aktuell: 5 Components mit C₁-C₄ Referenzen
- Neu: 5 Components ohne technische Variablen
  1. Capability Assessment
  2. Bottleneck Identification
  3. Improvement Roadmap
  4. AI Integration Plan
  5. Progress Measurement

**BEST PRACTICES (Zeilen 191-215):**
- Entferne "θ_index Framework Deep Dive"
- Entferne C₁-C₄ Referenzen
- Neu: "4 Capabilities Overview" mit praktischen Definitionen

**ROADMAP (Zeilen 217-263):**
- Entferne θ_index, C_min Referenzen
- Fokus auf praktische Deliverables

**CASE STUDIES (Zeilen 265-326):**
- Ersetze θ_index Werte durch AI Maturity Levels
- Ersetze C₂ durch "Setup capability"
- Anonymisierte Cases beibehalten, aber Metriken anpassen

**SOLUTIONS CONNECTION (Zeilen 328-363):**
- Entferne θ_index Referenzen
- "Capability Assessment" statt "θ_index assessment"

**WHO THIS IS FOR (Zeilen 365-404):**
- Entferne θ_index Referenzen
- Fokus auf "AI-Native Maturity (Level 3)"

**FINAL CTA (Zeilen 406-420):**
- Trust Signals: "θ_index Framework (4×8 Matrix)" → "4 Capabilities × AI Maturity Levels"

---

## Zusammenfassung der Änderungen

### Datei 1: `src/data/playbooks.ts`
| Zeilen | Änderung |
|--------|----------|
| 587-589 | Description ohne θ_index |
| 591-603 | Outcomes ohne θ_index, C_min |
| 605 | Case Studies ohne θ_index |
| 608-610 | Impact/Bottleneck/Role Tags prüfen |

### Datei 2: `src/data/playbooks/content/strategic-capabilities.ts`
| Section | Änderungen |
|---------|------------|
| Hero | Badge, Description, Trust Badges |
| Summary | Problem/Why/Solution Cards |
| Problem | 3 Pain Points + Metrics |
| Framework | 5 Components ohne C₁-C₄ |
| Best Practices | Ohne θ_index Deep Dive |
| Roadmap | Ohne θ_index, C_min |
| Case Studies | AI Maturity statt θ_index |
| Solutions | Capability Assessment statt θ_index |
| Personas | Ohne θ_index |
| Final CTA | Trust Signals anpassen |

---

## Terminologie-Mapping (durchgängig anwenden)

| Alt (ENTFERNEN) | Neu (VERWENDEN) |
|-----------------|-----------------|
| C₁ | Strategy |
| C₂ | Setup |
| C₃ | Execution |
| C₄ | Operationalization |
| θ_index | AI Maturity Level |
| θ_index 0.35 | Level 1 (AI-Powered) |
| θ_index 0.55 | Level 2 (AI-Enhanced) |
| θ_index 0.75+ | Level 3 (AI-Native) |
| C_min | Bottleneck capability / lowest maturity |
| C_min < 0.5 | Low capability maturity |
| C_min > 0.7 | High capability maturity |

---

## Geschätzter Umfang

| Aspekt | Details |
|--------|---------|
| **Dateien** | 2 (playbooks.ts, strategic-capabilities.ts) |
| **Zeilen** | ~500+ Zeilen Änderungen |
| **Kritikalität** | Hoch (Tone-Shift + Terminologie) |
| **Priorität** | Kachel zuerst, dann Landing Page |

---

## Nächste Schritte

1. **Kachel aktualisieren** (`playbooks.ts`, Zeilen 581-613)
2. **Hero Section** (`strategic-capabilities.ts`, Zeilen 8-29)
3. **Summary Section** (Zeilen 30-51)
4. **Problem Section** (Zeilen 53-70)
5. **Framework Section** (Zeilen 72-189) - größte Änderung
6. **Remaining Sections** (Best Practices, Roadmap, Case Studies, etc.)
