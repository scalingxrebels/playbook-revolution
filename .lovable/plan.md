

# Implementierungskonzept: Client Ticker auf einer Zeile

## Ziel

Den Client Ticker so umgestalten, dass "Who we have worked with" links steht und der Ticker daneben scrollt, wobei die Einträge hinter dem Label verschwinden (Fade-Effekt).

## Aktuelle Struktur

```
┌────────────────────────────────────────────────────────┐
│ Who we have worked with                                │  ← Zeile 1
├────────────────────────────────────────────────────────┤
│ ← Pigtie • truth • KODE® • FILADOS • 2p Team • ...     │  ← Zeile 2
└────────────────────────────────────────────────────────┘
```

## Neue Struktur

```
┌────────────────────────────────────────────────────────┐
│ Who we have worked with  ← Pigtie • truth • KODE® ... │  ← Eine Zeile
│                         ↑                              │
│                    Fade-Mask                           │
└────────────────────────────────────────────────────────┘
```

## Technische Umsetzung

### Datei: `src/pages/Cases.tsx` (Zeilen 60-81)

**Vorher:**
```tsx
{/* Client Ticker */}
<div className="relative z-10 border-y border-border py-4 bg-background/50">
  <div className="container max-w-7xl mx-auto px-4 mb-2">
    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      {language === 'de' ? 'Mit wem wir gearbeitet haben' : 'Who we have worked with'}
    </span>
  </div>
  <div className="overflow-hidden">
    <div className="flex animate-marquee whitespace-nowrap">
      ...
    </div>
  </div>
</div>
```

**Nachher:**
```tsx
{/* Client Ticker - Single Line */}
<div className="relative z-10 border-y border-border py-4 bg-background/50">
  <div className="container max-w-7xl mx-auto px-4">
    <div className="flex items-center gap-6">
      {/* Static Label */}
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground whitespace-nowrap flex-shrink-0 relative z-10 bg-background/50 pr-4">
        {language === 'de' ? 'Mit wem wir gearbeitet haben' : 'Who we have worked with'}
      </span>
      
      {/* Scrolling Ticker with Left Fade */}
      <div className="relative flex-1 overflow-hidden">
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background/50 to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 px-4">
              {clientNames.map((name, idx) => (
                <span key={`${i}-${idx}`} className="text-sm font-medium text-muted-foreground/60 flex items-center gap-6">
                  <span className="w-1 h-1 rounded-full bg-primary/40" />
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
```

## Kernprinzipien

1. **Flexbox Layout**: Label und Ticker nebeneinander mit `flex items-center`
2. **Label fixiert**: `flex-shrink-0` verhindert Schrumpfen des Labels
3. **Fade-Mask**: CSS-Gradient überlagert den Ticker links für den "Verschwindeeffekt"
4. **Background Match**: Label hat gleichen Hintergrund wie Container für nahtlosen Übergang

## Zusammenfassung

| Datei | Änderung |
|-------|----------|
| `src/pages/Cases.tsx` | Ticker-Struktur auf einzeilig umbauen (Zeilen 60-81) |

