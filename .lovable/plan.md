

# Plan: Operating Systems Playbook v3.0 Synchronisation

## Analyse der Inkonsistenzen

### Kritische Probleme (ENTFERNEN laut Briefing v3.0)

| Aktuell | Briefing v3.0 | Status |
|---------|---------------|--------|
| θ_index 0.35 → 0.78 | AI Maturity: Level 1 → Level 2 | ÄNDERN |
| θ_index 0.42 → 0.85 | AI Maturity: Level 1 → Level 3 | ÄNDERN |
| θ_index 0.55 → 0.92 | AI Maturity: Level 1 → Level 3 | ÄNDERN |
| "Efficiency = Operations × Finance × Talent × Data/Tech × AI" | Entfernen (zu wissenschaftlich) | ÄNDERN |
| "MULTIPLICATIVE (not additive)" | Praktischer Ton | ÄNDERN |
| "AI-Native Operating Systems Playbook" | "Operating Systems Playbook" | ÄNDERN |

---

## Betroffene Stellen

### 1. Kachel: `src/data/playbooks.ts` (Zeilen 545-579)

**Aktuelle Title (Zeilen 549-551):**
```
'AI-Native Operating Systems Playbook'
```

**Briefing v3.0 Title:**
```
'Operating Systems Playbook'
```

**Description:** Bereits gut aligniert mit Briefing - keine Änderung nötig

---

### 2. Landing Page: `src/data/playbooks/content/operating-systems.ts`

#### θ_index Referenzen (KRITISCH - 3 Stellen entfernen):

| Zeile | Aktuell | Briefing v3.0 |
|-------|---------|---------------|
| 232 | "θ_index 0.35 → 0.78" | "AI Maturity: Level 1 → Level 2" |
| 244 | "θ_index 0.42 → 0.85" | "AI Maturity: Level 1 → Level 3" |
| 256 | "θ_index 0.55 → 0.92" | "AI Maturity: Level 1 → Level 3" |

#### Multiplikative Formeln (KRITISCH - 4 Stellen entfernen):

| Zeile | Aktuell | Briefing v3.0 |
|-------|---------|---------------|
| 17-18 | "(Operations × Finance × Talent × Data/Tech × AI)" | Entfernen aus Beschreibung |
| 41 | "Operating Systems are MULTIPLICATIVE (not additive)" | Praktischer Text ohne Formel |
| 48 | "Ops × Finance × Talent × Data/Tech × AI" | Entfernen |
| 74-76 | "Efficiency = Operations × Finance × Talent × Data/Tech × AI" | "A systematic approach to transform Operations, Finance, Talent, and Data/Tech" |

#### HERO Section (Zeilen 8-29):

**Aktuell:**
- Title: "AI-Native Operating Systems Playbook"
- Description enthält: "Operating Systems Framework (Operations × Finance × Talent × Data/Tech × AI)"

**Briefing v3.0:**
- Title: "Operating Systems Playbook"
- Keine multiplikativen Formeln, praktischer Ton

#### SUMMARY Section (Zeilen 30-51):

**Aktuell (whyItMatters, Zeile 41):**
```
"Operating Systems are MULTIPLICATIVE (not additive). 
Weakness in any system creates a bottleneck that limits overall efficiency and scaling velocity."
```

**Briefing v3.0:**
Keine Formel, praktischer Ton:
```
"Operations, Finance, Talent, and Data/Tech must work together as one integrated system. 
A weak system becomes a bottleneck for the entire operating infrastructure."
```

**Aktuell (solution, Zeile 48):**
```
"The Operating Systems Framework (Ops × Finance × Talent × Data/Tech × AI) enables 
2-5x efficiency gains and scaling without linear headcount growth."
```

**Briefing v3.0:**
```
"The Operating Systems Framework: Build all 4 systems (Operations, Finance, Talent, Data/Tech) 
systematically with AI integration at each level."
```

#### FRAMEWORK Section (Zeilen 72-77):

**Aktueller Subtitle:**
```
"How AI-native companies build operating systems that scale superlinearly: 
Efficiency = Operations × Finance × Talent × Data/Tech × AI"
```

**Briefing v3.0 Subtitle:**
```
"A systematic approach to transform Operations, Finance, Talent, and Data/Tech"
```

#### CASE STUDIES Section (Zeilen 225-265):

**Case Study 1 (Zeile 232):**
- ENTFERNEN: "θ_index 0.35 → 0.78"
- ERSETZEN DURCH: "AI Maturity: Level 1 → Level 2"

**Case Study 2 (Zeile 244):**
- ENTFERNEN: "θ_index 0.42 → 0.85"
- ERSETZEN DURCH: "AI Maturity: Level 1 → Level 3"

**Case Study 3 (Zeile 256):**
- ENTFERNEN: "θ_index 0.55 → 0.92"
- ERSETZEN DURCH: "AI Maturity: Level 1 → Level 3"

#### SOLUTIONS CONNECTION Section (Zeilen 267-293):

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
| 549-551 | Title: "AI-Native Operating Systems Playbook" → "Operating Systems Playbook" |

### Datei 2: `src/data/playbooks/content/operating-systems.ts`
| Section | Änderungen |
|---------|------------|
| Hero (8-29) | Title anpassen, multiplikative Formel aus Description entfernen |
| Summary (30-51) | whyItMatters + solution: Formeln entfernen, praktischer Ton |
| Framework (72-77) | Subtitle: Formel → praktische Beschreibung |
| Case Studies (232, 244, 256) | 3× θ_index → AI Maturity Levels |
| Solutions (267-293) | 4 neue Items (Assessment, Power Up, Boost, Accelerate) |

---

## Terminologie-Mapping (durchgängig anwenden)

| Alt (ENTFERNEN) | Neu (VERWENDEN) |
|-----------------|-----------------|
| θ_index | AI Maturity Level |
| θ_index 0.35-0.40 | Level 1 (AI-Powered) |
| θ_index 0.55-0.78 | Level 2 (AI-Enhanced) |
| θ_index 0.85-0.92+ | Level 3 (AI-Native) |
| "Efficiency = Operations × Finance × Talent × Data/Tech × AI" | Entfernen |
| "MULTIPLICATIVE (not additive)" | Entfernen |
| "AI-Native Operating Systems Playbook" | "Operating Systems Playbook" |
| C₂, C₄ | Setup, Operationalization |

---

## Geschätzter Umfang

| Aspekt | Details |
|--------|---------|
| **Dateien** | 2 (playbooks.ts, operating-systems.ts) |
| **θ_index Stellen** | 3 (Case Studies) |
| **Formel-Stellen** | 4 (Hero, Summary, Framework) |
| **Title-Update** | 2 (Kachel + Hero) |
| **Solutions-Update** | +2 neue Items (Assessment, Accelerate) |
| **Kritikalität** | Mittel (Tone-Shift + Terminologie) |

---

## Nächste Schritte

1. **Kachel aktualisieren** (`playbooks.ts`, Zeilen 549-551) - Title ändern
2. **Hero Section** (`operating-systems.ts`, Zeilen 8-29) - Title + Description anpassen
3. **Summary Section** (Zeilen 30-51) - whyItMatters + solution: Formeln entfernen
4. **Framework Subtitle** (Zeilen 74-77) - Formel → praktische Beschreibung
5. **Case Studies** (Zeilen 232, 244, 256) - θ_index → AI Maturity Levels
6. **Solutions Connection** (Zeilen 267-293) - 4 Tiers gemäß Briefing hinzufügen

