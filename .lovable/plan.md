
# Client Ticker für Cases-Seite

## Übersicht
Ein nahtloser Endlos-Ticker mit Kundennamen unter dem Hero der `/cases`-Seite, basierend auf dem bestehenden Marquee-Pattern aus `HeroSection.tsx`.

## Design-Konzept

```text
┌─────────────────────────────────────────────────────────────────┐
│                         SHARED HERO                              │
│         "Transformations, not theories"                          │
│                        Stats Grid                                │
└─────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────┐
│  "Who we have worked with"                                       │
│  ──────────────────────────────────────────────────────────────  │
│  • Pigtie • Microsoft • XING • Lexware • Haufe Group • ...  →→→  │
└─────────────────────────────────────────────────────────────────┘
```

## Technische Details

### Zu bearbeitende Datei
`src/pages/Cases.tsx`

### Kundenliste (24 Namen × 5 Wiederholungen = 120 Einträge)
Pigtie, the beautiful unleashed truth, KODE®, FILADOS, 2p Team, Microsoft Surface, XING e-Recruiting, Lexware, Haufe Group, smapOne, SBB E-Business, Swarovski, local.ch, BWK Group, DBA, Burda Media, START, Elba, Semigator, Umantis, Sage, LifiMax, BeQueen, BonGusto

### Implementierung

1. **Ticker-Section** direkt nach `<SharedHero />` einfügen
2. **Styling** übernommen von `HeroSection.tsx`:
   - `animate-marquee` CSS-Klasse (bereits in `index.css`)
   - Border oben/unten für visuelle Trennung
   - `text-muted-foreground/50` für subtile Darstellung
   - Dot-Separator zwischen Namen

### Code-Struktur

```tsx
{/* Client Ticker */}
<div className="relative z-10 border-y border-border py-4 bg-background/50">
  <div className="container max-w-7xl mx-auto px-4 mb-2">
    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      Who we have worked with
    </span>
  </div>
  <div className="overflow-hidden">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center gap-6 px-4">
          {clientNames.map((name) => (
            <span className="text-sm font-medium text-muted-foreground/60 flex items-center gap-6">
              <span className="w-1 h-1 rounded-full bg-primary/40" />
              {name}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
</div>
```

## Visuelles Ergebnis
- Subtiler, professioneller Look
- Nahtlose Endlos-Animation (30s Zyklus)
- Konsistent mit bestehendem Deep-Space Design
- Mobile-responsive durch `whitespace-nowrap` und `overflow-hidden`
