
# Plan: Portfolio Transformation Playbook v3.0 Synchronisation

## Analyse der Inkonsistenzen

### Kritische Probleme (ENTFERNEN laut Briefing v3.0)

| Aktuell | Briefing v3.0 | Status |
|---------|---------------|--------|
| θ_index 0.28 → 0.72 | AI Maturity: Level 1 → Level 2/3 | ÄNDERN |
| θ_index 0.35 → 0.85 | AI Maturity: Level 1 → Level 3 | ÄNDERN |
| θ_index 0.42 → 0.92 | AI Maturity: Level 1 → Level 3 | ÄNDERN |
| "Achieve θ_index 0.8-1.0" | "Achieve AI-Native Maturity (Level 3)" | ÄNDERN |
| "scored on θ_index" | "Portfolio Maturity scoring" | ÄNDERN |
| EXPERTISE-Tone | PLAYBOOKS-Tone (Praktisch/Helpful) | ÄNDERN |

---

## Betroffene Dateien

### 1. Kachel: `src/data/playbooks.ts` (Zeilen 411-442)

**Aktuelle Titel:**
```
'AI-Native Portfolio Transformation Playbook'
```

**Briefing v3.0 Titel:**
```
'Portfolio Transformation Playbook'
```

**Bottleneck Tags:**
- Aktuell: `['strategy', 'setup', 'execution-focus', 'operationalization']`
- Briefing: "Portfolio Performance" (aber dieses Tag existiert nicht im Filter-System)
- **Entscheidung:** Behalte aktuelle Tags, da "Portfolio Performance" kein gültiger Filter-Wert ist

---

### 2. Landing Page: `src/data/playbooks/content/portfolio-transformation.ts`

#### θ_index Referenzen (KRITISCH - ALLE ENTFERNEN):

| Zeile | Aktuell | Briefing v3.0 |
|-------|---------|---------------|
| 186 | "Achieve θ_index 0.8-1.0" | "Achieve AI-Native Maturity (Level 3)" |
| 222-223 | "scored on θ_index, performance, potential" | "scored on Portfolio Maturity" |
| 272-273 | "θ_index 0.28 → 0.72" | "AI Maturity: Level 1 → Level 2" |
| 290-291 | "θ_index 0.35 → 0.85" | "AI Maturity: Level 1 → Level 3" |
| 307-309 | "θ_index 0.42 → 0.92" | "AI Maturity: Level 1 → Level 3" |

#### HERO Section (Zeilen 8-29):

**Aktuell:**
- Title: "AI-Native Portfolio Transformation Playbook"
- Badge: "Portfolio Transformation · Domain Playbook"

**Briefing v3.0:**
- Title: "Portfolio Transformation Playbook"
- Badge: Beibehalten (Domain Playbook korrekt)

#### SUMMARY Section (Zeilen 30-51):

**Aktuell (Why It Matters):**
```
"Portfolio Transformation is MULTIPLICATIVE (not additive). 
Portfolio Value = Portfolio Excellence × AI × Scale."
```

**Briefing v3.0:** 
Formel entfernen, praktischere Sprache:
```
"Portfolio Transformation requires systematic approach across all companies.
Single company improvements don't scale—portfolio-wide transformation does."
```

#### FRAMEWORK Section (Zeilen 72-189):

**Aktuelles Framework (5 Components):**
1. Portfolio Intelligence & Analytics
2. Value Creation Playbooks
3. Operating Partner System
4. Portfolio Governance
5. AI-Powered Portfolio Operations

**Briefing v3.0 Framework (5 Pillars):**
1. Portfolio Assessment
2. Transformation Roadmap
3. Systematic Execution
4. AI Integration
5. Portfolio Optimization

**Empfehlung:** Framework-Struktur aktualisieren auf Briefing v3.0 Pillars

#### ROADMAP Section (Zeilen 210-256):

**Aktuell (Zeile 222-223):**
```
"Portfolio Assessment (All companies scored on θ_index, performance, potential)"
```

**Briefing v3.0:**
```
"Portfolio Assessment (All companies scored on Portfolio Maturity)"
```

#### CASE STUDIES Section (Zeilen 258-319):

**Case Study 1 (Series A-B VC Firm):**
- Aktuell: "θ_index 0.28 → 0.72"
- Briefing: "AI Maturity: Level 1 → Level 2"
- Portfolio Maturity: "Low → Medium"

**Case Study 2 (Series B-C VC Firm):**
- Aktuell: "θ_index 0.35 → 0.85"
- Briefing: "AI Maturity: Level 1 → Level 3"
- Portfolio Maturity: "Low → High"

**Case Study 3 (PE Firm 30 Companies):**
- Aktuell: "θ_index 0.42 → 0.92"
- Briefing: "AI Maturity: Level 1 → Level 3"
- Portfolio Maturity: "Low → High"

#### SOLUTIONS CONNECTION Section (Zeilen 321-361):

**Aktuelle Preise vs. Briefing v3.0:**

| Tier | Aktuell | Briefing v3.0 | Aktion |
|------|---------|---------------|--------|
| Assessment | - | €10K-€25K | NEU HINZUFÜGEN |
| Power Up | €23.6K | €50K-€150K (Quick Fix) | AKTUALISIEREN |
| Boost | €200K-€500K | €200K-€500K (Transformation) | OK |
| Accelerate | €360K-€720K | €350K-€720K (AI-Native) | LEICHT ANPASSEN |

**Empfehlung:** Solution Tiers gemäß Briefing aktualisieren:
1. Portfolio Assessment (€10K-€25K, 2-4 Wochen)
2. Portfolio Quick Fix (€50K-€150K, 6 Monate)
3. Portfolio Transformation (€200K-€500K, 12-18 Monate)
4. AI-Native Portfolio (€350K-€720K, 24 Monate)

---

## Zusammenfassung der Änderungen

### Datei 1: `src/data/playbooks.ts`
| Zeilen | Änderung |
|--------|----------|
| 413-415 | Title: "AI-Native Portfolio Transformation Playbook" → "Portfolio Transformation Playbook" |
| 417-419 | Description bereits gut, nur Title-Anpassung |

### Datei 2: `src/data/playbooks/content/portfolio-transformation.ts`
| Section | Änderungen |
|---------|------------|
| Hero (8-29) | Title, Description anpassen (θ_index entfernen) |
| Summary (30-51) | Formel entfernen, praktische Sprache |
| Framework (72-189) | 5 Pillars statt 5 Components, θ_index entfernen (Zeile 186) |
| Roadmap (210-256) | θ_index entfernen (Zeile 222-223) |
| Case Studies (258-319) | θ_index → AI Maturity Levels (3 Stellen) |
| Solutions (321-361) | 4 Tiers gemäß Briefing aktualisieren |

---

## Terminologie-Mapping (durchgängig anwenden)

| Alt (ENTFERNEN) | Neu (VERWENDEN) |
|-----------------|-----------------|
| θ_index | AI Maturity Level |
| θ_index 0.28-0.40 | Level 1 (AI-Powered) |
| θ_index 0.50-0.70 | Level 2 (AI-Enhanced) |
| θ_index 0.75-0.92+ | Level 3 (AI-Native) |
| "scored on θ_index" | "scored on Portfolio Maturity" |
| "Achieve θ_index 0.8-1.0" | "Achieve AI-Native Maturity (Level 3)" |
| "Portfolio Value = X × Y × Z" Formel | Entfernen |

---

## Geschätzter Umfang

| Aspekt | Details |
|--------|---------|
| **Dateien** | 2 (playbooks.ts, portfolio-transformation.ts) |
| **θ_index Stellen** | 5 (alle entfernen) |
| **Framework-Update** | 5 Pillars statt 5 Components |
| **Solutions-Update** | 4 Tiers gemäß Briefing |
| **Kritikalität** | Hoch (Tone-Shift + Terminologie) |

---

## Nächste Schritte

1. **Kachel aktualisieren** (`playbooks.ts`, Zeilen 411-442) - Title ändern
2. **Hero Section** (`portfolio-transformation.ts`, Zeilen 8-29)
3. **Summary Section** (Zeilen 30-51) - Formel entfernen
4. **Framework Section** (Zeilen 72-189) - θ_index Zeile 186 entfernen
5. **Roadmap Section** (Zeilen 210-256) - θ_index Zeile 222-223 entfernen
6. **Case Studies** (Zeilen 258-319) - 3× θ_index → AI Maturity Level
7. **Solutions Connection** (Zeilen 321-361) - 4 Tiers gemäß Briefing
