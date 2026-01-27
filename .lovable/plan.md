

# Plan: Solution Tiles Mapping-Korrektur & Solution Type Bereinigung

## Übersicht

Diese Korrektur behebt mehrere Mapping-Fehler in den Solution Tiles und entfernt den Solution Type "Portfolio & Investment Decisions". Die Analyse hat folgende Probleme identifiziert:

---

## Teil 1: Identifizierte Fehler

### 1.1 Solution Type "Portfolio" muss entfernt werden
**Aktueller Stand:** Der Solution Type `portfolio` existiert in Zeile 69
```tsx
{ id: 'portfolio', labelEn: 'Portfolio & Investment Decisions', labelDe: 'Portfolio & Investment Decisions' }
```

**Betroffene Kacheln mit `solutionType: 'portfolio'`:**
- ID 9: Portfolio Assessment → muss zu `decision-support`
- ID 18: Power Up: Portfolio Quick Win → muss zu `transformation`
- ID 27: Boost: Portfolio Lift → muss zu `transformation`
- ID 33: Accelerate: Portfolio Excellence → muss zu `transformation`

### 1.2 VC Due Diligence Simulation (ID 8) - Falsches Pricing
**Aktueller Stand (Zeile 359):**
```tsx
price: '€5.9K-€3.9K', // FALSCH - Reihenfolge verdreht
addOnPricing: {
  base: '€5.9K',      // FALSCH
  bridge: '€3.9K'     // FALSCH
}
```

**Korrektur:**
```tsx
price: '€3.9K-€5.9K',
addOnPricing: {
  base: '€3.9K',
  bridge: '€5.9K'
}
```

### 1.3 Challenge-Mapping Fehler

| ID | Kachel | Aktuelles Mapping | Soll-Mapping |
|----|--------|-------------------|--------------|
| 3 | GTM Effectiveness Review | `['cac-crisis', 'growth-stalled']` | `['cac-crisis']` nur |
| 5 | Scaling Readiness Assessment | `['scaling-chaos']` | muss ID 8 sein, nicht ID 5 |
| 6 | AI Maturity Assessment | `['ai-transformation']` | ✅ Korrekt (aber ist ID 6, soll ID 9 sein lt. Briefing) |
| 7 | Pitch Deck Check | `['board-pressure']` | ✅ Korrekt (aber ist ID 7, soll ID 6 sein lt. Briefing) |
| 8 | VC DD Simulation | `['board-pressure']` | ✅ Korrekt (aber ist ID 8, soll ID 7 sein lt. Briefing) |
| 29 | Accelerate: Hypergrowth | `['cac-crisis', 'growth-stalled']` | `['cac-crisis']` nur |
| 30 | Accelerate: Sustainable Growth | `['growth-stalled', 'scaling-chaos']` | `['growth-stalled']` nur |
| 31 | Accelerate: AI-Native | `['ai-transformation', 'scaling-chaos']` | `['customer-success-broken']` (CS Engine) |
| 32 | Accelerate: Exit-Readiness | `['board-pressure']` | `['scaling-chaos']` (Operating System) |
| 33 | Accelerate: Portfolio Excellence | `['portfolio-performance']` | `['ai-transformation']` (AI-Native Transition) |
| 38 | lasr.io | `['orientation', 'scaling-chaos']` | `'universal'` (alle Challenges) |

---

## Teil 2: ID-Struktur Analyse

### Fehlende/Fehlzugeordnete IDs laut Briefing:

| Briefing ID | Name lt. Briefing | Aktuelle ID in Code | Problem |
|-------------|-------------------|---------------------|---------|
| 3 | GTM Effectiveness Review | 3 | ✅ Match |
| 4 | Pricing & Packaging Review | 4 | ✅ Match |
| 5 | Portfolio Assessment | 9 | ❌ Sollte ID 5 sein |
| 6 | Investor-Readiness Pitch Deck Check | 7 | ❌ Sollte ID 6 sein |
| 7 | VC Due Diligence Simulation | 8 | ❌ Sollte ID 7 sein |
| 8 | Scaling Readiness Assessment | 5 | ❌ Sollte ID 8 sein |
| 9 | AI Maturity Assessment | 6 | ❌ Sollte ID 9 sein |

**Empfehlung:** Die IDs sind aktuell nicht konsistent mit dem Briefing. Da das aber nur für menschliche Referenz wichtig ist und nicht für die Funktionalität, können wir:
- **Option A:** IDs korrigieren (größerer Aufwand)
- **Option B:** Nur Mapping korrigieren (empfohlen)

---

## Teil 3: Detaillierte Änderungen

### Datei: `src/data/solutionTiles.ts`

#### 3.1 SolutionTypeId Type bereinigen (Zeile 4)
```tsx
// VORHER:
export type SolutionTypeId = 'all' | 'insights' | 'decision-support' | 'tools' | 'transformation' | 'advisory' | 'keynote' | 'portfolio';

// NACHHER:
export type SolutionTypeId = 'all' | 'insights' | 'decision-support' | 'tools' | 'transformation' | 'advisory' | 'keynote';
```

#### 3.2 solutionTypes Array bereinigen (Zeile 61-70)
Entferne Zeile 69:
```tsx
{ id: 'portfolio', labelEn: 'Portfolio & Investment Decisions', labelDe: 'Portfolio & Investment Decisions' }
```

#### 3.3 Kachel ID 9 (Portfolio Assessment) → Decision Support (Zeile 396)
```tsx
// VORHER:
solutionType: 'portfolio',

// NACHHER:
solutionType: 'decision-support',
```

#### 3.4 Kachel ID 18 (Power Up: Portfolio) → Transformation (Zeile 716)
```tsx
// VORHER:
solutionType: 'portfolio',

// NACHHER:
solutionType: 'transformation',
```

#### 3.5 Kachel ID 27 (Boost: Portfolio) → Transformation (Zeile 1026)
```tsx
// VORHER:
solutionType: 'portfolio',

// NACHHER:
solutionType: 'transformation',
```

#### 3.6 Kachel ID 33 (Accelerate: Portfolio) → Transformation (Zeile 1234)
```tsx
// VORHER:
solutionType: 'portfolio',

// NACHHER:
solutionType: 'transformation',
```

#### 3.7 Kachel ID 8 (VC DD Simulation) Pricing korrigieren (Zeilen 359, 388-391)
```tsx
// VORHER:
price: '€5.9K-€3.9K',
// ...
addOnPricing: {
  base: '€5.9K',
  bridge: '€3.9K'
}

// NACHHER:
price: '€3.9K-€5.9K',
// ...
addOnPricing: {
  base: '€3.9K',
  bridge: '€5.9K'
}
```

#### 3.8 Kachel ID 38 (lasr.io) → Universal Challenges (Zeile 1385)
```tsx
// VORHER:
challenges: ['orientation', 'scaling-chaos'],

// NACHHER:
challenges: 'universal',
```

#### 3.9 Challenge-Mappings korrigieren

**ID 3 (GTM Review):** Zeile 163
```tsx
// VORHER:
challenges: ['cac-crisis', 'growth-stalled'],
// NACHHER:
challenges: ['cac-crisis'],
```

**ID 29 (Accelerate: Hypergrowth):** Zeile 1100
```tsx
// VORHER:
challenges: ['cac-crisis', 'growth-stalled'],
// NACHHER:
challenges: ['cac-crisis'],
```

**ID 30 (Accelerate: Sustainable Growth):** Zeile 1134
```tsx
// VORHER:
challenges: ['growth-stalled', 'scaling-chaos'],
// NACHHER:
challenges: ['growth-stalled'],
```

**Accelerate Tiles Umstrukturierung:**
Die Accelerate-Kacheln haben aktuell ein anderes Mapping als im Briefing:
- ID 31 ist aktuell "AI-Native" → Soll "CS Engine" sein für `customer-success-broken`
- ID 32 ist aktuell "Exit-Readiness" → Soll "Operating System" sein für `scaling-chaos`
- ID 33 ist aktuell "Portfolio Excellence" → Soll "AI-Native Transition" sein für `ai-transformation`

**Empfehlung:** Da die Accelerate-Kacheln inhaltlich unterschiedlich sind, müssen wir entweder:
1. Die Challenge-Zuordnung ändern (schnell)
2. Neue Kacheln erstellen (aufwendig)

---

## Teil 4: Fehlende Kacheln

Nach Analyse sind **keine Kacheln fehlend**, aber die Struktur weicht vom Briefing ab:

| Briefing-Anforderung | Status |
|----------------------|--------|
| Accelerate - CS Engine | ❌ Existiert nicht als eigene Kachel |
| Accelerate - Operating System | ❌ Existiert nicht (ID 32 ist Exit-Readiness) |
| Accelerate - AI-Native Transition | ID 31 vorhanden, aber falsch gemapped |

---

## Teil 5: Zusammenfassung der Änderungen

| Änderung | Zeilen | Beschreibung |
|----------|--------|--------------|
| Type bereinigen | 4 | `'portfolio'` aus SolutionTypeId entfernen |
| solutionTypes Array | 69 | Portfolio-Eintrag entfernen |
| ID 9 Portfolio Assessment | 396 | `solutionType: 'decision-support'` |
| ID 18 Power Up Portfolio | 716 | `solutionType: 'transformation'` |
| ID 27 Boost Portfolio | 1026 | `solutionType: 'transformation'` |
| ID 33 Accelerate Portfolio | 1234 | `solutionType: 'transformation'` |
| ID 8 VC DD Pricing | 359, 388-391 | Pricing-Reihenfolge korrigieren |
| ID 38 lasr.io | 1385 | `challenges: 'universal'` |
| ID 3 GTM Review | 163 | `challenges: ['cac-crisis']` |
| ID 29 Accelerate Hypergrowth | 1100 | `challenges: ['cac-crisis']` |
| ID 30 Accelerate Sustainable | 1134 | `challenges: ['growth-stalled']` |

---

## Offene Fragen an dich

1. **Accelerate-Kacheln:** Sollen ID 31/32/33 inhaltlich umbenannt werden (zu CS Engine, Operating System, AI-Native Transition), oder nur das Challenge-Mapping angepasst werden?

2. **ID-Neustrukturierung:** Sollen die Kachel-IDs gemäß Briefing (3, 4, 5, 6, 7, 8, 9...) neu nummeriert werden? Das hätte keine funktionale Auswirkung, würde aber die menschliche Referenz erleichtern.

3. **Growth Stalled:** Dein Briefing zeigt, dass Growth Stalled keine Decision Support-Kachel hat (nur Power Up, Boost, Accelerate). Ist das beabsichtigt?

---

## Betroffene Dateien

| Datei | Aktion |
|-------|--------|
| `src/data/solutionTiles.ts` | Umfangreiche Mapping-Korrekturen |

