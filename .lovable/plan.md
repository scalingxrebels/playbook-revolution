

## Plan: Expertise Hub + Spokes Design-Overhaul

### Kernprobleme

1. **Kein Parallax** — Home nutzt `useParallaxLayers` mit animierten Transforms, Expertise hat statische Backgrounds
2. **Keine staggered Animations** — Cards erscheinen ohne Verzögerung, kein Reveal-Effekt
3. **MechanismFlowDiagram ist primitiv** — winzige Kreise mit Text-Pfeilen, wirkt amateurhaft
4. **Falsche Opacities** — `opacity-30` statt `opacity-40` auf Mesh, keine Gradient-Layer
5. **Fehlende Gradient-Backgrounds** — Home wechselt zwischen `from-background to-secondary/30` und umgekehrt, Expertise hat überall das gleiche flache Pattern
6. **Header-Spacing inkonsistent** — Hub SectionHeader hat `mb-6` ohne Sub-Text (sollte `mb-12`), doppeltes Spacing durch `mt-12` auf Grids

### Änderungen

**1. `MechanismFlowDiagram.tsx` — komplett neu**

Statt winziger Kreise mit `→` Text: Vollbreite architektonische Darstellung (max-w-2xl):
- M1, M2, M3 als grosse Cards/Blocks in einer horizontalen Reihe, verbunden durch SVG-Pfeile (Electric Blue)
- Jeder Block zeigt Nummer + Kurzname + 1-Zeiler
- M4 als breiter Amber-Block darunter über die volle Breite, mit doppelter Border (══ Effekt), SVG-Linien die nach oben zu allen drei M-Blocks zeigen
- Responsive: auf Mobile 1-spaltig vertikal
- Statt `max-w-md`: `max-w-2xl`

**2. `ExpertiseHub.tsx` — Home-Pattern übernehmen**

Jede Section bekommt eigene Parallax-Layer wie Home:
- `useParallaxLayers` mit `speeds: [0.05, 0.12]` pro Section
- Gradient-Backgrounds alternierend: `from-background to-secondary/30` / `from-secondary/30 to-background`
- Mesh-Opacity von `opacity-30` auf `opacity-40`
- SectionHeader: `mb-6` → `mb-12` wenn kein Sub-Text
- Cards bekommen staggered entry: `transitionDelay: ${(i + 2) * 100}ms` + `useScrollAnimation`
- Entfernung der redundanten `mt-12` auf Grids (Header hat bereits `mb-12`)
- Comparison Table bekommt eigenen scroll-reveal mit Delay

**3. `ExpertiseSpoke.tsx` — gleiche Patterns**

- Section-Wrapper bekommt Parallax-Layer + Gradient-Backgrounds
- Cards in Section 3 (Was es NICHT ist) und Section 4 (Wie es funktioniert) bekommen staggered animations
- Case-Card in Section 6 bekommt scroll-reveal
- Mesh-Opacity `opacity-30` → `opacity-40`

### Betroffene Dateien

| Datei | Änderung |
|---|---|
| `MechanismFlowDiagram.tsx` | Kompletter Redesign — architektonische Blocks statt Miniatur-Kreise |
| `ExpertiseHub.tsx` | Parallax, Gradients, Stagger-Animations, Spacing-Fixes |
| `ExpertiseSpoke.tsx` | Parallax, Gradients, Stagger-Animations |

3 Dateien. Keine Daten- oder Strukturänderungen. Rein visuelles Upgrade.

