
# Plan: Portfolio Excellence Playbook v3.0 Synchronisation

## Analyse der Inkonsistenzen

### Kritische Probleme (ENTFERNEN laut Briefing v3.0)

| Aktuell | Briefing v3.0 | Status |
|---------|---------------|--------|
| θ_index Framework | Portfolio Maturity | ÄNDERN |
| θ_index Score: 0.35 → 0.72 | AI Maturity: Level 1 → Level 2 | ÄNDERN |
| θ_index Score: 0.42 → 0.81 | AI Maturity: Level 1 → Level 3 | ÄNDERN |
| "scored on θ_index" | "scored on Portfolio Maturity" | ÄNDERN |
| 4 Capabilities × 8 Dimensions × 3 AI Maturity Levels | Strategy, Setup, Execution, Operationalization | ÄNDERN |

---

## Betroffene Stellen

### 1. Kachel: `src/data/playbooks.ts` (Zeilen 478-511)

**Aktuelle Description (Zeile 486-487):**
Enthält alte 5-Komponenten-Namen (Portfolio Assessment & Scoring, Portfolio Transformation & Value Creation, etc.)

**Briefing v3.0 Teaser:**
5 neue Komponenten: Assessment, Prioritization, Playbook, Execution, Measurement

---

### 2. Landing Page: `src/data/playbooks/content/portfolio-excellence.ts`

#### θ_index Referenzen (KRITISCH - 10+ Stellen entfernen):

| Zeile | Aktuell | Briefing v3.0 |
|-------|---------|---------------|
| 83-84 | "Portfolio Assessment & Scoring (θ_INDEX)" | "Portfolio Assessment" |
| 86-87 | "θ_index framework (4 Capabilities × 8 Dimensions × 3 AI Maturity Levels)" | "4 capabilities (Strategy, Setup, Execution, Operationalization)" |
| 94 | "θ_index Framework (4 Capabilities × 8 Dimensions...)" | "4 capabilities framework" |
| 201 | "Score all portfolio companies with θ_index" | "Score with Portfolio Maturity" |
| 236-237 | "score with θ_index, prioritize" | "score with Portfolio Maturity" |
| 240 | "θ_index scores for all companies" | "Portfolio Maturity scores" |
| 300 | "θ_index Score: 0.35 → 0.72" | "AI Maturity: Level 1 → Level 2" |
| 320 | "θ_index Score: 0.42 → 0.81" | "AI Maturity: Level 1 → Level 3" |
| 357 | "θ_index scoring for all companies" | "Portfolio Maturity scoring" |

#### FRAMEWORK STRUKTUR (Zeilen 77-193):

**Aktuelles Framework (5 Components):**
1. Portfolio Assessment & Scoring (θ_INDEX)
2. Portfolio Transformation & Value Creation
3. Portfolio Operations & Synergies
4. Portfolio Intelligence & Reporting
5. AI-Powered Portfolio Excellence

**Briefing v3.0 Framework (5 Components):**
1. Portfolio Assessment (2-4 Weeks)
2. Company Prioritization (1-2 Weeks)
3. Transformation Playbook (2-4 Weeks)
4. Coordinated Execution (90 days per company)
5. Progress Measurement (Ongoing)

#### Case Studies Metriken (Zeilen 287-342):

**Case Study 1 (Series A-B VC):**
- ENTFERNEN: "θ_index Score: 0.35 → 0.72"
- HINZUFÜGEN: "Portfolio Maturity: Low → Medium"
- HINZUFÜGEN: "AI Maturity: Level 1 → Level 2"

**Case Study 2 (Series B-C PE):**
- ENTFERNEN: "θ_index Score: 0.42 → 0.81"
- HINZUFÜGEN: "Portfolio Maturity: Low → High"
- HINZUFÜGEN: "AI Maturity: Level 1 → Level 3"

#### Solutions Connection - Preise anpassen (Zeilen 344-393):

| Aktuell | Briefing v3.0 | Aktion |
|---------|---------------|--------|
| Portfolio Assessment: €50K-€150K | €10K-€25K | AKTUALISIEREN |
| Portfolio Transformation: €360K-€720K | €200K-€500K | AKTUALISIEREN |
| Portfolio Excellence: €50K-€200K/year | - | ERSETZEN DURCH Quick Fix |
| - | Portfolio Quick Fix: €50K-€150K | HINZUFÜGEN |
| - | AI-Native Portfolio: €350K-€720K | HINZUFÜGEN |

**Briefing v3.0 Solution Tiers (4 Tiers):**
1. Portfolio Assessment (€10K-€25K, 2-4 Weeks)
2. Portfolio Quick Fix (€50K-€150K, 6 Months)
3. Portfolio Transformation (€200K-€500K, 12-18 Months)
4. AI-Native Portfolio (€350K-€720K, 24 Months)

#### Best Practices (Zeilen 195-222):

- Zeile 201: "Score all portfolio companies with θ_index" → "Score with Portfolio Maturity"

#### Roadmap (Zeilen 224-279):

- Zeile 236-237: "score with θ_index" → "score with Portfolio Maturity"
- Zeile 240: "θ_index scores" → "Portfolio Maturity scores"

---

## Zusammenfassung der Änderungen

### Datei 1: `src/data/playbooks.ts`
| Zeilen | Änderung |
|--------|----------|
| 486-487 | Description: 5 Komponenten-Namen aktualisieren |

### Datei 2: `src/data/playbooks/content/portfolio-excellence.ts`
| Section | Änderungen |
|---------|------------|
| Hero (8-28) | Subtitle und Description anpassen |
| Summary (29-51) | Solution: 5 Components neu benennen |
| Framework (71-193) | KOMPLETT NEU: 5 neue Components gemäß Briefing |
| Best Practices (195-222) | θ_index → Portfolio Maturity |
| Roadmap (224-279) | θ_index → Portfolio Maturity |
| Case Studies (281-342) | θ_index → AI Maturity Levels |
| Solutions Connection (344-393) | 4 neue Solution Tiers |

---

## Terminologie-Mapping (durchgängig anwenden)

| Alt (ENTFERNEN) | Neu (VERWENDEN) |
|-----------------|-----------------|
| θ_index | Portfolio Maturity |
| θ_index Framework | 4 Capabilities (Strategy, Setup, Execution, Operationalization) |
| θ_index Score 0.35 | Level 1 (AI-Powered) |
| θ_index Score 0.55-0.72 | Level 2 (AI-Enhanced) |
| θ_index Score 0.80+ | Level 3 (AI-Native) |
| 4 Capabilities × 8 Dimensions × 3 AI Maturity Levels | 4 capabilities (Strategy, Setup, Execution, Operationalization) |
| Portfolio Assessment & Scoring (θ_INDEX) | Portfolio Assessment |

---

## Geschätzter Umfang

| Aspekt | Details |
|--------|---------|
| **Dateien** | 2 (playbooks.ts, portfolio-excellence.ts) |
| **θ_index Stellen** | 10+ (alle entfernen) |
| **Framework-Update** | 5 neue Components (komplett neu) |
| **Solutions-Update** | 4 neue Tiers (Preise + Namen) |
| **Case Studies** | 2 Metriken ersetzen |
| **Kritikalität** | Hoch (Tone-Shift + Framework-Wechsel) |

---

## Nächste Schritte

1. **Kachel aktualisieren** (`playbooks.ts`, Zeilen 478-511) - Description anpassen
2. **Hero + Summary** (`portfolio-excellence.ts`) - Framework-Namen aktualisieren
3. **Framework Section** (Zeilen 71-193) - KOMPLETT NEUES 5-Component Framework
4. **Best Practices** (Zeilen 195-222) - θ_index entfernen
5. **Roadmap** (Zeilen 224-279) - θ_index entfernen
6. **Case Studies** (Zeilen 281-342) - θ_index → AI Maturity Levels
7. **Solutions Connection** (Zeilen 344-393) - 4 neue Tiers gemäß Briefing
