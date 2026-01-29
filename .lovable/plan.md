

# Plan: CTA-Sektion aus Container herauslösen

## Problem

| Aspekt | Solutions Hub (korrekt) | Playbooks (aktuell) |
|--------|-------------------------|---------------------|
| CTA Position | Eigenständige `<section>` außerhalb Container | Eingebettet in `max-w-7xl` Container |
| Struktur | `<SolutionCTA />` vor `<Footer />` | CTA innerhalb `<div className="max-w-7xl ...">` |
| Margin-Hack | Nicht nötig | Nutzt `-mx-6 px-6` zum "Ausbrechen" |

## Lösung

Die CTA-Sektion aus dem `max-w-7xl` Container herausnehmen und als eigenständige `<section>` positionieren.

### Aktuelle Struktur (PlaybookLibrary.tsx)

```text
<section className="pb-20 ...">           ← Hauptsektion
  <SharedHero ... />
  
  <div className="max-w-7xl mx-auto ..."> ← Container
    {/* Search, Filter, Grid, Empty State */}
    
    <section className="mt-20 ... -mx-6 px-6">  ← CTA EINGEBETTET!
      {/* CTA Inhalt */}
    </section>
  </div>                                  ← Container Ende
  
  <PlaybookModal ... />
</section>
```

### Neue Struktur (wie Solutions)

```text
<>                                        ← Fragment
  <section className="pb-20 ...">         ← Hauptsektion
    <SharedHero ... />
    
    <div className="max-w-7xl mx-auto ..."> ← Container
      {/* Search, Filter, Grid, Empty State */}
    </div>                                ← Container Ende (OHNE CTA)
    
    <PlaybookModal ... />
  </section>
  
  <section className="py-24 lg:py-32 ...">  ← CTA EIGENSTÄNDIG!
    {/* CTA Inhalt */}
  </section>
</>
```

---

## Änderungen in PlaybookLibrary.tsx

1. **CTA-Sektion aus Container entfernen** (Zeilen 130-194)
2. **CTA nach dem Hauptcontainer positionieren**, aber noch innerhalb der Komponente
3. **Margin-Hack entfernen** (`-mx-6 px-6` und `mt-20`)
4. **Standard-Padding** wie bei SolutionCTA (`py-24 lg:py-32`)

---

## Visueller Vergleich

### Vorher (Playbooks)
```text
┌────────────────────────────────────────┐
│ max-w-7xl Container                    │
│ ┌────────────────────────────────────┐ │
│ │ Search, Filter, Grid               │ │
│ └────────────────────────────────────┘ │
│ ┌────────────────────────────────────┐ │
│ │ CTA (mit -mx-6 Hack)               │ │  ← Eingebettet
│ └────────────────────────────────────┘ │
└────────────────────────────────────────┘
```

### Nachher (wie Solutions)
```text
┌────────────────────────────────────────┐
│ max-w-7xl Container                    │
│ ┌────────────────────────────────────┐ │
│ │ Search, Filter, Grid               │ │
│ └────────────────────────────────────┘ │
└────────────────────────────────────────┘
┌────────────────────────────────────────┐
│ CTA Section (volle Breite)             │  ← Eigenständig
│ ┌──────────────────────────┐           │
│ │ max-w-4xl Content        │           │
│ └──────────────────────────┘           │
└────────────────────────────────────────┘
```

---

## Datei

| Datei | Änderung |
|-------|----------|
| `src/components/PlaybookLibrary.tsx` | CTA aus Container herausnehmen, Struktur anpassen |

