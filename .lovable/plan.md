

# Plan: Hero & Problem Section Feedback-Umsetzung (korrigiert)

## Änderung 1: Hero Subheadline

### Datei: `src/components/homepage/HeroOptimized.tsx`

**Zeilen 77-82 ändern:**

```tsx
// VORHER:
<p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
  {language === 'de' 
    ? '3-5x schneller wachsen. 2-4x bessere Profitabilität. Mit Systemen, die skalieren – nicht brechen.'
    : '3-5x faster growth. 2-4x better profitability. With systems that scale – not break.'
  }
</p>

// NACHHER:
<p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
  {language === 'de' 
    ? <>3-5x schneller wachsen. 2-4x bessere Unit Economics.<br />Mit Systemen, die skalieren und nicht brechen.</>
    : <>3-5x faster growth. 2-4x better profitability.<br />With systems that scale and don't break.</>
  }
</p>
```

**Änderungen im Detail:**
- DE: "Profitabilität" → "Unit Economics"
- DE: "die skalieren – nicht brechen" → "die skalieren und nicht brechen"
- EN: "scale – not break" → "scale and don't break"
- Beide: Zeilenumbruch mit `<br />` nach den Metriken

---

## Änderung 2: Problem Cards Stats

### Datei: `src/components/homepage/ProblemOptimized.tsx`

**Zeilen 7-35 ändern (problems Array):**

| Card | Vorher | Nachher |
|------|--------|---------|
| Card 1 | `stat: '1'` | `stat: 'Growth Plateau'` |
| Card 2 | `stat: '2x Team = 4x'` | `stat: 'Coordination Costs'` |
| Card 3 | `stat: '4x'` | `stat: 'Falling Behind'` (großes B) |

---

## Betroffene Dateien

| Datei | Änderung |
|-------|----------|
| `src/components/homepage/HeroOptimized.tsx` | Subheadline mit Unit Economics, Zeilenumbruch, "und nicht brechen" |
| `src/components/homepage/ProblemOptimized.tsx` | Stats: "Growth Plateau", "Coordination Costs", "Falling Behind" |

## Visuelles Ergebnis

**Hero Subheadline (DE):**
```
3-5x schneller wachsen. 2-4x bessere Unit Economics.
Mit Systemen, die skalieren und nicht brechen.
```

**Hero Subheadline (EN):**
```
3-5x faster growth. 2-4x better profitability.
With systems that scale and don't break.
```

**Problem Cards Badges:**
```
[Growth Plateau] [Coordination Costs] [Falling Behind]
```

