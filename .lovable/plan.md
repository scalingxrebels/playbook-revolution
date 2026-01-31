

# Plan: Board & Governance Playbook v3.0 Synchronisation

## Analyse der Inkonsistenzen

### Kritische Probleme (ENTFERNEN laut Briefing v3.0)

| Aktuell | Briefing v3.0 | Status |
|---------|---------------|--------|
| θ_index 0.32 → 0.75 | AI Maturity: Level 1 → Level 2 | ÄNDERN |
| θ_index 0.45 → 0.88 | AI Maturity: Level 1 → Level 3 | ÄNDERN |
| θ_index 0.58 → 0.95 | AI Maturity: Level 1 → Level 3 | ÄNDERN |
| "Board Effectiveness = Strategic Governance × Operational Governance × Exit/M&A × AI" | Entfernen (zu wissenschaftlich) | ÄNDERN |
| "MULTIPLICATIVE (not additive)" | Praktischer Ton | ÄNDERN |
| "AI-Native Board & Governance Playbook" | "Board & Governance Playbook" | ÄNDERN |

---

## Betroffene Stellen

### 1. Kachel: `src/data/playbooks.ts` (Zeilen 373-406)

**Aktuelle Title (Zeilen 376-379):**
```typescript
'AI-Native Board & Governance Playbook'
```

**Briefing v3.0 Title:**
```
'Board & Governance Playbook'
```

**Description:** Bereits gut aligniert mit Briefing - keine Änderung nötig

---

### 2. Landing Page: `src/data/playbooks/content/board-governance.ts`

#### θ_index Referenzen (KRITISCH - 3 Stellen entfernen):

| Zeile | Aktuell | Briefing v3.0 |
|-------|---------|---------------|
| 273-274 | "θ_index 0.32 → 0.75" | "AI Maturity: Level 1 → Level 2" |
| 305-306 | "θ_index 0.45 → 0.88" | "AI Maturity: Level 1 → Level 3" |
| 337-338 | "θ_index 0.58 → 0.95" | "AI Maturity: Level 1 → Level 3" |

#### Multiplikative Formeln (KRITISCH - 4 Stellen entfernen):

| Zeile | Aktuell | Briefing v3.0 |
|-------|---------|---------------|
| 17 | "(Strategic Governance × Operational Governance × Exit/M&A × AI)" | Entfernen aus Beschreibung |
| 41 | "Board & Governance is MULTIPLICATIVE (not additive)" | Praktischer Text ohne Formel |
| 48 | "Board Effectiveness = Strategic Governance × Operational Governance × Exit/M&A × AI" | Entfernen |
| 99 | "Board Effectiveness = Strategic Governance × Operational Governance × Exit/M&A × AI" | "A systematic approach to transform Strategic Governance, Operational Governance, and Exit/M&A" |

#### HERO Section (Zeilen 8-29):

**Aktuell:**
- Title: "AI-Native Board & Governance Playbook"
- Description enthält: "Board & Governance Framework (Strategic Governance × Operational Governance × Exit/M&A × AI)"

**Briefing v3.0:**
- Title: "Board & Governance Playbook"
- Keine multiplikativen Formeln, praktischer Ton

#### SUMMARY Section (Zeilen 30-51):

**Aktuell (whyItMatters, Zeile 41):**
```
"Board & Governance is MULTIPLICATIVE (not additive). 
Weak strategic governance × strong operational = bottleneck."
```

**Briefing v3.0:**
```
"Strategic Governance, Operational Governance, and Exit/M&A must work together as one integrated system. 
A weak system becomes a bottleneck for the entire governance infrastructure."
```

**Aktuell (solution, Zeile 48):**
```
"Board Effectiveness = Strategic Governance × Operational Governance × Exit/M&A × AI"
```

**Briefing v3.0:**
```
"The Board & Governance Framework: Build all 3 systems (Strategic Governance, Operational Governance, Exit/M&A) 
systematically with AI integration at each level."
```

#### FRAMEWORK Section (Zeilen 96-101):

**Aktueller Subtitle:**
```
"Board Effectiveness = Strategic Governance × Operational Governance × Exit/M&A × AI"
```

**Briefing v3.0 Subtitle:**
```
"A systematic approach to transform Strategic Governance, Operational Governance, and Exit/M&A"
```

#### CASE STUDIES Section (Zeilen 265-362):

**Case Study 1 (Zeilen 273-274):**
- ENTFERNEN: "θ_index 0.32 → 0.75"
- ERSETZEN DURCH: "AI Maturity: Level 1 → Level 2"

**Case Study 2 (Zeilen 305-306):**
- ENTFERNEN: "θ_index 0.45 → 0.88"
- ERSETZEN DURCH: "AI Maturity: Level 1 → Level 3"

**Case Study 3 (Zeilen 337-338):**
- ENTFERNEN: "θ_index 0.58 → 0.95"
- ERSETZEN DURCH: "AI Maturity: Level 1 → Level 3"

#### SOLUTIONS CONNECTION Section (Zeilen 364-399):

**Aktuell:** Nur 2 Items (Power Up €23.6K, Boost €60K-€78K)

**Briefing v3.0:** 4 Items:
1. Comprehensive Assessment (€2.5K-€10K, 2-3 Days)
2. Power Up (€23.6K-€45.9K, 30 Days)
3. Boost (€60K-€78K, 90 Days)
4. Accelerate (€153K, 12 Months)

---

## Zusammenfassung der Änderungen

### Datei 1: `src/data/playbooks.ts`
| Zeilen | Änderung |
|--------|----------|
| 376-379 | Title: "AI-Native Board & Governance Playbook" → "Board & Governance Playbook" |

### Datei 2: `src/data/playbooks/content/board-governance.ts`
| Section | Änderungen |
|---------|------------|
| Hero (8-29) | Title anpassen, multiplikative Formel aus Description entfernen |
| Summary (30-51) | whyItMatters + solution: Formeln entfernen, praktischer Ton |
| Framework (96-101) | Subtitle: Formel → praktische Beschreibung |
| Case Studies (273-274, 305-306, 337-338) | 3× θ_index → AI Maturity Levels |
| Solutions Connection (364-399) | 4 neue Items (Assessment, Power Up, Boost, Accelerate) |

---

## Terminologie-Mapping (durchgängig anwenden)

| Alt (ENTFERNEN) | Neu (VERWENDEN) |
|-----------------|-----------------|
| θ_index | AI Maturity Level |
| θ_index 0.32-0.40 | Level 1 (AI-Powered) |
| θ_index 0.55-0.75 | Level 2 (AI-Enhanced) |
| θ_index 0.88-0.95+ | Level 3 (AI-Native) |
| "Board Effectiveness = Strategic × Operational × Exit × AI" | Entfernen |
| "MULTIPLICATIVE (not additive)" | Entfernen |
| "AI-Native Board & Governance Playbook" | "Board & Governance Playbook" |
| C₁, C₄ | Strategy, Operationalization |

---

## Geschätzter Umfang

| Aspekt | Details |
|--------|---------|
| **Dateien** | 2 (playbooks.ts, board-governance.ts) |
| **θ_index Stellen** | 3 (Case Studies) |
| **Formel-Stellen** | 4 (Hero, Summary, Framework) |
| **Title-Update** | 2 (Kachel + Hero) |
| **Solutions-Update** | +2 neue Items (Assessment, Accelerate) |
| **Kritikalität** | Mittel (Tone-Shift + Terminologie) |

---

## Implementierungsschritte

1. **Kachel aktualisieren** (`playbooks.ts`, Zeilen 376-379) - Title ändern
2. **Hero Section** (`board-governance.ts`, Zeilen 8-29) - Title + Description anpassen
3. **Summary Section** (Zeilen 30-51) - whyItMatters + solution: Formeln entfernen
4. **Framework Subtitle** (Zeilen 96-101) - Formel → praktische Beschreibung
5. **Case Studies** (Zeilen 273-274, 305-306, 337-338) - θ_index → AI Maturity Levels
6. **Solutions Connection** (Zeilen 364-399) - 4 Tiers gemäß Briefing hinzufügen
7. **Plan.md aktualisieren** - Board & Governance als abgeschlossen markieren

