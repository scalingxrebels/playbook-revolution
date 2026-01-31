

# Implementierungsplan: Technische Begriffe durch CEO-freundliche Sprache ersetzen

## Übersicht

Wir ersetzen wissenschaftliche/technische Begriffe (θ_index, C_min, C₁-C₄) durch business-freundliche Sprache in **Solutions** und **Solution Landing Pages**.

---

## Ersetzungs-Mapping

| Technischer Begriff | CEO-freundlicher Ersatz | Kontext |
|---------------------|------------------------|---------|
| `θ_index` | **AI Maturity Score** | Messwerte, Metriken |
| `θ_index 0.3` | **AI Maturity Score 30%** | Konkrete Werte (0-1 → 0-100%) |
| `C_min` | **#1 Blocker** / **Größte Schwachstelle** | Engpass-Diagnose |
| `C₁` | **Strategy** | Capability-Bereich |
| `C₂` | **Setup** | Capability-Bereich |
| `C₃` | **Execution** | Capability-Bereich |
| `C₄` | **Operationalization** | Capability-Bereich |

---

## Scope-Definition

### In Scope (Solutions & Landing Pages)
| Datei | Änderungen | Priorität |
|-------|------------|-----------|
| `src/data/solutionTiles.ts` | ~15 Ersetzungen | HOCH |
| `src/pages/AIMaturityAssessment.tsx` | ~40 Ersetzungen | HOCH |
| `src/pages/BoostAIMaturity.tsx` | ~25 Ersetzungen | HOCH |
| `src/pages/PowerUpAIQuickWins.tsx` | ~15 Ersetzungen | HOCH |
| `src/pages/PortfolioAssessment.tsx` | ~10 Ersetzungen | MITTEL |
| `src/pages/CustomAnalysisReport.tsx` | ~8 Ersetzungen | MITTEL |
| `src/pages/Workshop.tsx` | ~5 Ersetzungen | MITTEL |
| `src/pages/Keynote.tsx` | ~5 Ersetzungen | MITTEL |

### Explizit ausgeschlossen (Research Pages)
- `src/pages/ExpertiseAMF.tsx` - Wissenschaftlicher Kontext
- `src/pages/ExpertiseSST.tsx` - Wissenschaftlicher Kontext
- `src/pages/ExpertiseANST.tsx` - Wissenschaftlicher Kontext
- `src/components/research/*` - Research-Bereich

---

## Detaillierte Änderungen

### 1. solutionTiles.ts (Priorität: HOCH)

**ID 1 - Inflection Call:**
```text
Vorher: "we identify your C_min (minimum capability bottleneck)"
Nachher: "we identify your #1 Blocker (biggest capability gap)"

Vorher: "Bottleneck diagnosis (C_min identification)"
Nachher: "Bottleneck diagnosis (#1 Blocker identification)"
```

**ID 6 - AI Maturity Assessment:**
```text
Vorher: "Your θ_index is 0.3 (Level 1: AI-Powered)"
Nachher: "Your AI Maturity Score is 30% (Level 1: AI-Powered)"

Vorher: "θ_index Roadmap +50-150%"
Nachher: "AI Maturity Roadmap +50-150%"
```

**ID 9 - Portfolio Assessment:**
```text
Vorher: "Portfolio θ_index Clarity"
Nachher: "Portfolio AI Maturity Clarity"
```

**ID 16 - Power Up AI Quick Wins:**
```text
Vorher: "θ_index +0.2-0.3"
Nachher: "AI Maturity +20-30%"
```

**ID 25 - Boost AI Maturity:**
```text
Vorher: "θ_index +0.3-0.5"
Nachher: "AI Maturity +30-50%"
```

### 2. AIMaturityAssessment.tsx (Priorität: HOCH)

**Hero Section:**
```text
Vorher: "θ_index Roadmap +50-150%"
Nachher: "AI Maturity Roadmap +50-150%"
```

**Problem Section:**
```text
Vorher: "Dein θ_index ist 0.3 (Level 1: AI-Powered)"
Nachher: "Dein AI Maturity Score ist 30% (Level 1: AI-Powered)"

Vorher: "Niedriger θ_index"
Nachher: "Niedriger AI Maturity Score"
```

**Metrics & Deliverables:**
```text
Vorher: "θ_index Score (0-1)"
Nachher: "AI Maturity Score (0-100%)"

Vorher: "θ_index Roadmap +50-150%"
Nachher: "AI Maturity Roadmap +50-150%"
```

### 3. BoostAIMaturity.tsx (Priorität: HOCH)

**Hero Stats:**
```text
Vorher: { value: '+0.3-0.5', label: 'θ_index' }
Nachher: { value: '+30-50%', label: 'AI Maturity Score' }
```

**Problem Section:**
```text
Vorher: "θ_index 0.3 (Level 1: AI-Powered)"
Nachher: "AI Maturity Score 30% (Level 1: AI-Powered)"
```

**Solution Section (C₁-C₄ → Strategy/Setup/Execution/Operationalization):**
```text
Vorher: "AI Strategy (C₁)"
Nachher: "AI Strategy"

Vorher: "AI Setup (C₂)"
Nachher: "AI Setup"

Vorher: "AI Execution (C₃)"
Nachher: "AI Execution"

Vorher: "AI Operationalization (C₄)"
Nachher: "AI Operationalization"
```

**Phase Descriptions:**
```text
Vorher: "θ_index Assessment: What's your AI maturity?"
Nachher: "AI Maturity Assessment: What's your current level?"
```

### 4. PowerUpAIQuickWins.tsx (Priorität: HOCH)

**Hero Stats:**
```text
Vorher: { sublabel: 'θ_index' }
Nachher: { sublabel: 'AI Maturity Score' }
```

**Problem/Symptoms:**
```text
Vorher: "θ_index 0.3 (benchmark: 0.7+)"
Nachher: "AI Maturity Score 30% (benchmark: 70%+)"
```

**Process Steps:**
```text
Vorher: "θ_index baseline, 0-1 scale"
Nachher: "AI Maturity baseline, 0-100% scale"
```

---

## Implementierungs-Reihenfolge

| Phase | Dateien | Geschätzter Aufwand |
|-------|---------|---------------------|
| **1** | `solutionTiles.ts` | ~15 Änderungen |
| **2** | `AIMaturityAssessment.tsx` | ~40 Änderungen |
| **3** | `BoostAIMaturity.tsx` | ~25 Änderungen |
| **4** | `PowerUpAIQuickWins.tsx` | ~15 Änderungen |
| **5** | Weitere Landing Pages | ~25 Änderungen |

**Gesamt:** ~120 Ersetzungen in 8+ Dateien

---

## Qualitätssicherung

Nach der Implementierung:
1. Alle Solution-Kacheln im Hub prüfen
2. AI Maturity Assessment Landing Page testen
3. Boost AI Maturity Landing Page testen
4. Power Up AI Quick Wins Landing Page testen
5. Sicherstellen, dass Research-Pages unverändert bleiben

---

## Hinweise

- **0-1 Skala → Prozent-Skala:** θ_index 0.3 wird zu "AI Maturity Score 30%"
- **C₁-C₄ Mapping:** Strategy, Setup, Execution, Operationalization (NICHT GTM/Revenue/Finance!)
- **Konsistenz:** Alle Metriken folgen dem gleichen Muster
- **Research ausgeschlossen:** ExpertiseAMF, ExpertiseSST, ExpertiseANST behalten wissenschaftliche Notation

