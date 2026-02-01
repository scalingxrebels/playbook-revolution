

# Plan: Glossar Update v2.0 (AI-Native Scaling Framework)

## Übersicht

Das Glossar wird von einer einfachen Begriffsliste zu einem vollständigen Framework-Reference erweitert.

| Bereich | Aktuell (v1.0) | Neu (v2.0) | Status |
|---------|----------------|------------|--------|
| 4 Core Capabilities | Basis-Cards | Erweitert mit Details | Update |
| 8 Business Dimensions | Nicht vorhanden | D₁-D₈ Tabelle | NEU |
| AI Maturity Score | Nur Erwähnung | Levels + 6 Dimensionen | NEU |
| Bottleneck Principle | Einfacher Alert | Formel + Beispiel | Erweitern |
| 3 Intervention Models | Nicht vorhanden | Model 1-3 Cards | NEU |
| Empirical Evidence | Nicht vorhanden | Key Findings Tabelle | NEU |
| Terms & Translations | 7 Einträge | 25+ Einträge | Erweitern |

## Neue Seitenstruktur

```text
/glossar
├── Header (Back Button + Title + Intro)
├── SECTION 1: The Core Idea (bestehend, erweitern)
│   ├── The Problem (bestehend)
│   ├── The Solution: 4 Capabilities (bestehend, erweitern)
│   └── The Result (bestehend, Vergleichstabelle)
├── SECTION 2: The 8 Business Dimensions (NEU)
│   └── D₁-D₈ Tabelle mit Beschreibungen
├── SECTION 3: AI Maturity Score (NEU)
│   ├── Die 4 AI Maturity Levels (Tabelle)
│   └── Die 6 AI Maturity Dimensionen
├── SECTION 4: The Bottleneck Principle (erweitern)
│   ├── Formel: S = min(C₁-C₄) × θ
│   └── Beispiel mit Berechnung
├── SECTION 5: The 3 Intervention Models (NEU)
│   ├── Model 1: Bottleneck Resolution (8-12 weeks)
│   ├── Model 2: Stage Transition (90 days)
│   └── Model 3: Level Transition (6-24 months)
├── SECTION 6: Empirical Evidence (NEU)
│   └── Key Findings Tabelle (n=22, r=-0.89)
└── SECTION 7: Terms & Translations (erweitern)
    └── 25+ Einträge (vs. 7 aktuell)
```

## Detaillierte Änderungen

### 1. Neue Datenstrukturen hinzufügen

```typescript
// 8 Business Dimensions (D₁-D₈)
const dimensions = [
  { id: 'D₁', name: 'GTM', description: 'Sales, Marketing, Partnerships' },
  { id: 'D₂', name: 'Product', description: 'Development, Roadmap, AI features' },
  { id: 'D₃', name: 'Customer Success', description: 'Onboarding, Support, Retention' },
  { id: 'D₄', name: 'Operations', description: 'Business Ops, Processes, Tools' },
  { id: 'D₅', name: 'Finance', description: 'FP&A, Reporting, Investor Relations' },
  { id: 'D₆', name: 'Talent', description: 'Hiring, Culture, Performance' },
  { id: 'D₇', name: 'Data/Tech', description: 'Data Infrastructure, AI Tools' },
  { id: 'D₈', name: 'Governance', description: 'Board, Compliance, Risk' },
];

// 4 AI Maturity Levels
const maturityLevels = [
  { level: 0, name: 'Traditional', score: '0-20%', timeToARR: '84 months', arrPerEmployee: '€150K' },
  { level: 1, name: 'AI-Powered', score: '20-50%', timeToARR: '48 months', arrPerEmployee: '€250K' },
  { level: 2, name: 'AI-Enabled', score: '50-80%', timeToARR: '24 months', arrPerEmployee: '€600K' },
  { level: 3, name: 'AI-Native', score: '80-100%', timeToARR: '18 months', arrPerEmployee: '€1.2M' },
];

// 6 AI Maturity Dimensions
const maturityDimensions = [
  { name: 'Strategy', weight: '20%', questions: [...] },
  { name: 'Architecture', weight: '15%', questions: [...] },
  { name: 'Workflow', weight: '25%', questions: [...] },
  { name: 'Data', weight: '15%', questions: [...] },
  { name: 'Talent', weight: '15%', questions: [...] },
  { name: 'Adoption', weight: '10%', questions: [...] },
];

// 3 Intervention Models
const interventionModels = [
  { 
    name: 'Bottleneck Resolution', 
    timeline: '8-12 weeks', 
    investment: '€80K-€180K',
    roi: '5-8x',
    target: 'Series A-C, €2M-€50M ARR'
  },
  { 
    name: 'Stage Transition', 
    timeline: '90 days', 
    investment: '€150K-€300K',
    roi: '8-12x',
    target: 'Series B-C, €10M-€100M ARR'
  },
  { 
    name: 'Level Transition', 
    timeline: '6-24 months', 
    investment: '€1.2M-€5M',
    roi: '10-17x',
    target: 'Series B-D, €20M-€200M ARR'
  },
];
```

### 2. Erweiterte Terms & Translations (25+ Einträge)

Neue Einträge hinzufügen:
- D₁-D₈ (8 Business Dimensions)
- S (Scaling Success)
- min(C₁-C₄) (Weakest Capability)
- Level 0-3 (AI Maturity Levels)
- Model 1-3 (Intervention Models)
- AMF, ANST, SST, META (Research Documents)

### 3. Neue Sections implementieren

#### Section 2: 8 Business Dimensions

```typescript
<section className="mb-16">
  <h2>Die 8 Business Dimensionen (D₁-D₈)</h2>
  <p>4 Capabilities × 8 Dimensionen = 32 Capability-Bereiche</p>
  <Table>
    {dimensions.map(d => (
      <TableRow>
        <TableCell>{d.id}</TableCell>
        <TableCell>{d.name}</TableCell>
        <TableCell>{d.description}</TableCell>
      </TableRow>
    ))}
  </Table>
</section>
```

#### Section 3: AI Maturity Score

```typescript
<section className="mb-16">
  <h2>AI Maturity Score (θ)</h2>
  <p>Misst, wie tief AI in deinem Business verankert ist (0-100%)</p>
  
  {/* Maturity Levels Table */}
  <Table>
    <TableHeader>Level | Score | Time to €100M | ARR/Employee</TableHeader>
    {maturityLevels.map(level => <TableRow>...</TableRow>)}
  </Table>
  
  {/* 6 Dimensions */}
  <h3>Die 6 AI Maturity Dimensionen</h3>
  {maturityDimensions.map(dim => <Card>...</Card>)}
</section>
```

#### Section 4: Bottleneck Principle (erweitert)

Ersetze den einfachen Alert durch:

```typescript
<section className="mb-16">
  <h2>Das Engpass-Prinzip</h2>
  
  {/* Formel */}
  <div className="formula-box">
    <code>Scaling Success = min(C₁, C₂, C₃, C₄) × AI Maturity Score</code>
  </div>
  
  {/* Beispiel */}
  <div className="example-box">
    <h4>Beispiel:</h4>
    <pre>
    Company A:
    ├── Strategy (C₁): 0.8 (strong)
    ├── Setup (C₂): 0.4 ← #1 BLOCKER
    ├── Execution (C₃): 0.7
    ├── Operationalization (C₄): 0.6
    ├── AI Maturity Score: 0.5
    └── Scaling Success: 0.4 × 0.5 = 0.20
    
    → Fixing C₂ from 0.4 to 0.75 = +88% Scaling Success
    </pre>
  </div>
  
  {/* Comparison Table */}
  <Table>
    Approach | Impact | Timeline
    Improve all by 10% | +10% | 12-18 months
    Fix #1 blocker | +88% | 8-12 weeks
  </Table>
</section>
```

#### Section 5: Intervention Models

```typescript
<section className="mb-16">
  <h2>Die 3 Interventionsmodelle</h2>
  <div className="grid md:grid-cols-3 gap-4">
    {interventionModels.map(model => (
      <Card>
        <CardHeader>
          <CardTitle>{model.name}</CardTitle>
          <Badge>{model.timeline}</Badge>
        </CardHeader>
        <CardContent>
          <p>Investment: {model.investment}</p>
          <p>ROI: {model.roi}</p>
          <p>Target: {model.target}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</section>
```

#### Section 6: Empirical Evidence

```typescript
<section className="mb-16">
  <h2>Empirische Evidenz</h2>
  <div className="research-box">
    <p>n=22 AI-native Companies (2021-2025)</p>
    <p>r=-0.89, p&lt;0.001</p>
  </div>
  <Table>
    Finding | Data | Source
    AI Maturity predicts velocity | r=-0.89 | ANST v4.5.3
    Bottlenecks limit success | r=-0.76 | SST v4.5.1
    Level 3 scales 8.2x faster | 18 vs 84 months | ANST v4.5.3
  </Table>
</section>
```

### 4. Neue Icons importieren

```typescript
import { 
  Target, Settings, Zap, BarChart3, AlertTriangle, Sparkles, ArrowLeft,
  // NEU:
  TrendingUp, Layers, Clock, DollarSign, Users, Database, Shield, Briefcase,
  Calculator, FlaskConical, Gauge
} from 'lucide-react';
```

### 5. Results Section erweitern

Ersetze die einfachen Badges durch eine Vergleichstabelle:

```typescript
<Table>
  <TableHeader>
    Metric | Traditional | AI-Native | Improvement
  </TableHeader>
  <TableBody>
    <TableRow>Time to €100M | 8-12 years | 18-24 months | 8.2x faster</TableRow>
    <TableRow>ARR/Employee | €150K-€200K | €750K-€5M | 5-30x higher</TableRow>
    <TableRow>Coordination Cost | O(n²) | O(n) | -90%</TableRow>
  </TableBody>
</Table>
```

## Technische Implementierung

### Datei-Änderungen

| Datei | Aktion | Zeilen (geschätzt) |
|-------|--------|-------------------|
| `src/pages/Glossar.tsx` | Erweitern | ~350 → ~650 Zeilen |

### Neue Komponenten (optional)

Falls die Seite zu lang wird, können Sections als separate Komponenten extrahiert werden:

```text
src/components/glossary/
├── GlossaryDimensions.tsx
├── GlossaryMaturityLevels.tsx
├── GlossaryBottleneckPrinciple.tsx
├── GlossaryInterventionModels.tsx
└── GlossaryEvidence.tsx
```

## Implementierungsreihenfolge

1. **Datenstrukturen** - dimensions, maturityLevels, maturityDimensions, interventionModels, erweiterte glossaryEntries
2. **Icons importieren** - Neue Lucide Icons
3. **Section 2** - 8 Business Dimensions (D₁-D₈)
4. **Section 3** - AI Maturity Score mit Levels und 6 Dimensionen
5. **Section 4** - Bottleneck Principle erweitern (Formel + Beispiel)
6. **Section 5** - 3 Intervention Models
7. **Section 6** - Empirical Evidence
8. **Section 7** - Terms & Translations erweitern (25+ Einträge)
9. **Section 1** - Results Section als Vergleichstabelle aktualisieren

## Ergebnis

Nach der Implementierung:
- Vollständiges AI-Native Scaling Framework dokumentiert
- 8 Dimensionen (D₁-D₈) erklärt
- AI Maturity Levels (0-3) mit konkreten Metriken
- 6 AI Maturity Dimensionen
- Bottleneck Principle mit Formel und Beispiel
- 3 Intervention Models mit Investment/ROI
- Empirische Evidenz (n=22, r=-0.89)
- 25+ Terms & Translations

