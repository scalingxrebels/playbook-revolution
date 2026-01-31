
# Implementierungsplan: Notion Farbkorrektur + Konsistenzprüfung

## Problem

In der `CaseStudyComparisonTable` (Compare all companies) hat Notion die Farbe `#171717` (fast schwarz). Im Dark Mode ist diese Farbe auf dunklem Hintergrund unsichtbar - sowohl der farbige Punkt als auch der θ_index Wert.

## Analyse der bestehenden Farbkonzepte

| Komponente | Notion Farbe | Dark Mode Lösung |
|------------|--------------|------------------|
| `ScalingXCaseStudies.tsx` | `#171717` | `darkColor: '#E5E5E5'` |
| `GrowthTimelineVisualization.tsx` | `#171717` | `darkColor: '#E5E5E5'` |
| `CaseStudy.tsx` | `#171717` | Keine (Problem!) |
| `CaseStudyComparisonTable.tsx` | `#171717` | Keine (Problem!) |

## Lösung

### Datei: `src/components/CaseStudyComparisonTable.tsx`

**1. Theme-Context importieren:**
```typescript
import { useTheme } from '@/contexts/ThemeContext';
```

**2. CompanyData Interface erweitern:**
```typescript
interface CompanyData {
  // ...existing properties
  darkColor?: string;  // Optional für Theme-Awareness
}
```

**3. Notion Eintrag aktualisieren:**
```typescript
{ 
  name: 'Notion', 
  // ...andere Properties
  color: '#171717', 
  darkColor: '#E5E5E5',  // NEU
  // ...
}
```

**4. Theme-Hook in Komponente verwenden:**
```typescript
const CaseStudyComparisonTable = () => {
  const { theme } = useTheme();
  // ...
  
  // Helper-Funktion für korrekte Farbe
  const getCompanyColor = (company: CompanyData) => {
    return theme === 'dark' && company.darkColor 
      ? company.darkColor 
      : company.color;
  };
```

**5. Farbe dynamisch anwenden (Zeile 111-114 und 127-131):**
```typescript
// Farbiger Punkt
<div 
  className="w-2 h-2 rounded-full" 
  style={{ backgroundColor: getCompanyColor(company) }}
/>

// θ_index Wert
<span 
  className="font-bold"
  style={{ color: getCompanyColor(company) }}
>
  {company.thetaIndex}
</span>
```

---

## Ergebnis

| Modus | Notion Farbe |
|-------|--------------|
| Light Mode | `#171717` (schwarz) - gut lesbar auf hellem Hintergrund |
| Dark Mode | `#E5E5E5` (hellgrau) - gut lesbar auf dunklem Hintergrund |

---

## Dateien

| Aktion | Datei |
|--------|-------|
| **Bearbeiten** | `src/components/CaseStudyComparisonTable.tsx` |
