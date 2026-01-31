
# Plan: Growth Engines Playbook v3.0 Synchronisation

## Analyse der Inkonsistenzen

### Kritische Probleme (ENTFERNEN laut Briefing v3.0)

| Aktuell | Briefing v3.0 | Status |
|---------|---------------|--------|
| θ_index 0.42 → 0.85 | AI Maturity: Level 1 → Level 3 | ÄNDERN |
| θ_index 0.55 → 0.92 | AI Maturity: Level 1 → Level 3 | ÄNDERN |
| "Hypergrowth = GTM × Product × CS × AI" Formel | Entfernen (zu wissenschaftlich) | ÄNDERN |
| "MULTIPLICATIVE (not additive)" | Praktischer Ton | ÄNDERN |
| "AI-Native Growth Engines Playbook" | "Growth Engines Playbook" | ÄNDERN |

---

## Betroffene Stellen

### 1. Kachel: `src/data/playbooks.ts` (Zeilen 512-545)

**Aktuelle Title:**
```
'AI-Native Growth Engines Playbook'
```

**Briefing v3.0 Title:**
```
'Growth Engines Playbook'
```

**Description:** 
- Aktuell bereits gut aligniert mit Briefing
- Nur Title-Änderung erforderlich

---

### 2. Landing Page: `src/data/playbooks/content/growth-engines.ts`

#### θ_index Referenzen (KRITISCH - 2 Stellen entfernen):

| Zeile | Aktuell | Briefing v3.0 |
|-------|---------|---------------|
| 264-265 | "Full AI-native transformation (θ_index 0.42 → 0.85)" | "AI Maturity: Level 1 → Level 3" |
| 282-283 | "AI across all dimensions (θ_index 0.55 → 0.92)" | "AI Maturity: Level 1 → Level 3" |

#### Multiplikative Formeln (KRITISCH - 4 Stellen entfernen):

| Zeile | Aktuell | Briefing v3.0 |
|-------|---------|---------------|
| 17-18 | "(GTM/Revenue × Product × Customer Success × AI)" | Entfernen aus Beschreibung |
| 41 | "Growth Engines are MULTIPLICATIVE (not additive)" | Praktischer Text ohne Formel |
| 48 | "Hypergrowth = GTM × Product × Customer Success × AI" | Entfernen |
| 74-76 | "Hypergrowth = GTM/Revenue × Product × Customer Success × AI" | "A systematic approach to transform GTM, Product, and Customer Success" |

#### HERO Section (Zeilen 8-29):

**Aktuell:**
- Title: "AI-Native Growth Engines Playbook"
- Description enthält: "Growth Engines Framework (GTM/Revenue × Product × Customer Success × AI)"

**Briefing v3.0:**
- Title: "Growth Engines Playbook"
- Keine multiplikativen Formeln, praktischer Ton

#### SUMMARY Section (Zeilen 30-51):

**Aktuell (whyItMatters):**
```
"Growth Engines are MULTIPLICATIVE (not additive). 
Weak GTM × Strong Product × Strong CS = Bottleneck. You need all three firing."
```

**Briefing v3.0:**
Keine Formel, praktischer Ton:
```
"GTM, Product, and Customer Success must work together as one integrated system. 
A weak engine becomes a bottleneck for the entire growth system."
```

**Aktuell (solution):**
```
"The Growth Engines Framework: Hypergrowth = GTM × Product × Customer Success × AI"
```

**Briefing v3.0:**
```
"The Growth Engines Framework: Build all 3 engines (GTM, Product, CS) systematically 
with AI integration at each level."
```

#### FRAMEWORK Section (Zeilen 72-152):

**Aktueller Subtitle:**
```
"Hypergrowth = GTM/Revenue × Product × Customer Success × AI"
```

**Briefing v3.0 Subtitle:**
```
"A systematic approach to transform GTM, Product, and Customer Success"
```

#### CASE STUDIES Section (Zeilen 232-293):

**Case Study 2 (Zeile 264-265):**
- ENTFERNEN: "Full AI-native transformation (θ_index 0.42 → 0.85)"
- ERSETZEN DURCH: "AI Maturity: Level 1 → Level 3"

**Case Study 3 (Zeile 282-283):**
- ENTFERNEN: "AI across all dimensions (θ_index 0.55 → 0.92)"
- ERSETZEN DURCH: "AI Maturity: Level 1 → Level 3"

#### SOLUTIONS CONNECTION Section (Zeilen 295-325):

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
| 516-517 | Title: "AI-Native Growth Engines Playbook" → "Growth Engines Playbook" |

### Datei 2: `src/data/playbooks/content/growth-engines.ts`
| Section | Änderungen |
|---------|------------|
| Hero (8-29) | Title anpassen, multiplikative Formel aus Description entfernen |
| Summary (30-51) | whyItMatters + solution: Formeln entfernen, praktischer Ton |
| Framework (72-152) | Subtitle: Formel → praktische Beschreibung |
| Case Studies (232-293) | 2× θ_index → AI Maturity Levels |
| Solutions (295-325) | 4 neue Items (Assessment, Power Up, Boost, Accelerate) |

---

## Terminologie-Mapping (durchgängig anwenden)

| Alt (ENTFERNEN) | Neu (VERWENDEN) |
|-----------------|-----------------|
| θ_index | AI Maturity Level |
| θ_index 0.42 | Level 1 (AI-Powered) |
| θ_index 0.55-0.72 | Level 2 (AI-Enhanced) |
| θ_index 0.85-0.92+ | Level 3 (AI-Native) |
| "Hypergrowth = GTM × Product × CS × AI" | Entfernen |
| "MULTIPLICATIVE (not additive)" | Entfernen |
| "AI-Native Growth Engines Playbook" | "Growth Engines Playbook" |
| C₁, C₃ | Strategy, Execution |

---

## Geschätzter Umfang

| Aspekt | Details |
|--------|---------|
| **Dateien** | 2 (playbooks.ts, growth-engines.ts) |
| **θ_index Stellen** | 2 (Case Studies) |
| **Formel-Stellen** | 4 (Hero, Summary, Framework) |
| **Title-Update** | 2 (Kachel + Hero) |
| **Solutions-Update** | +2 neue Items (Assessment, Accelerate) |
| **Kritikalität** | Mittel (Tone-Shift + Terminologie) |

---

## Nächste Schritte

1. **Kachel aktualisieren** (`playbooks.ts`, Zeilen 516-517) - Title ändern
2. **Hero Section** (`growth-engines.ts`, Zeilen 8-29) - Title + Description anpassen
3. **Summary Section** (Zeilen 30-51) - whyItMatters + solution: Formeln entfernen
4. **Framework Subtitle** (Zeilen 74-76) - Formel → praktische Beschreibung
5. **Case Studies** (Zeilen 264-265, 282-283) - θ_index → AI Maturity Levels
6. **Solutions Connection** (Zeilen 295-325) - 4 Tiers gemäß Briefing hinzufügen
