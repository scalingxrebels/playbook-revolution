
# Cases Filter Section - Design-Konsistenz-Fixes

## Ziel
Die CaseFilterSection soll visuell konsistent mit Solutions und Playbooks sein.

## Identifizierte Inkonsistenzen

### 1. Section Padding
- **Ist**: `py-6`
- **Soll**: `py-6 md:py-8` (wie Solutions/Playbooks)

### 2. Results Count Layout
- **Ist**: Links/Rechts verteilt mit `justify-between`
- **Soll**: Zentriert (wie Solutions/Playbooks)

### 3. Filter Button Border Radius
- **Ist**: `rounded-md`
- **Soll**: `rounded-full` (wie Solutions/Playbooks)

### 4. Inactive Button Styling
- **Ist**: `bg-muted/50 text-muted-foreground`
- **Soll**: `bg-card border border-border text-muted-foreground hover:bg-muted hover:text-foreground hover:border-primary/50`

### 5. Filter Label Layout
- **Ist**: Links-ausgerichtete Labels mit `min-w-[80px]` und `:`
- **Soll**: Zentrierte Labels mit Icon (wie ChallengeTabNavigation)

## Implementierungsplan

### Zu bearbeitende Datei
`src/components/cases/CaseFilterSection.tsx`

### Änderungen

1. **Section Padding anpassen**
```tsx
// Zeile 73
<section className="bg-muted/30 border-y border-border py-6 md:py-8">
```

2. **FilterRow Komponente umstrukturieren** - Von horizontalem zu zentriertem Layout:
```tsx
const FilterRow = ({ label, icon, options, selected, onChange }) => {
  const Icon = iconMap[label]; // AlertCircle, Briefcase, etc.
  
  return (
    <div className="w-full">
      {/* Centered Label with Icon */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">
          {label}
        </span>
      </div>

      {/* Centered Pills */}
      <div className="flex flex-wrap gap-2 justify-center">
        {options.map((option) => (
          <button
            className={cn(
              'px-3 py-1.5 text-sm rounded-full transition-all duration-200 border',
              selected === option.id
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-card border-border text-muted-foreground hover:bg-muted hover:text-foreground hover:border-primary/50'
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
```

3. **Filter Layout ändern** - Ähnlich wie Playbooks mit voller Breite für Challenge und 2-Spalten für Industry/Stage:
```tsx
<div className="space-y-6">
  {/* Full Width: Challenge */}
  <FilterRow label="Challenge" icon="AlertCircle" ... />
  
  {/* 2-Column Grid: Industry + Stage */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border/50">
    <FilterRowCompact label="Industry" ... />
    <FilterRowCompact label="Stage" ... />
  </div>
</div>
```

4. **Results Count zentrieren**:
```tsx
<div className="text-center mt-6">
  <p className="text-sm text-muted-foreground">
    {`Showing ${filteredCount} of ${totalCount} cases`}
  </p>
</div>
```

5. **Clear Filters Button** als separates Element unter dem Grid (wie Solutions mit Active Filter Display)

## Ergebnis
Nach der Implementierung wird die Cases-Seite das gleiche visuelle Pattern wie Solutions und Playbooks haben:
- Zentrierte Filter-Labels mit Icons
- Rounded-full Buttons
- Konsistentes Hover-Verhalten
- Responsive 2-Spalten-Layout für sekundäre Filter
