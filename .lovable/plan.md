

## Plan: Light Mode Kontrast und Design auf AI-Native Niveau bringen

### Analyse — Was in Light Mode schlecht aussieht

AI-Native Sektionen nutzen stärkere Kontraste, farbige Borders und höhere Opacities. Home-Sektionen wirken im Light Mode "ausgewaschen".

```text
ELEMENT                    AI-NATIVE                    HOME (IST)
──────────────────────────────────────────────────────────────────────
Card Borders              border-primary/30             border-border (grau)
Card Hover Border         hover:border-primary          hover:border-accent/50
Grid Pattern Opacity      opacity-20                    opacity-10
Table Header BG           bg-muted/30 (sichtbar)        bg-white/5 (unsichtbar)
Table Border              border-2 border-border        border-border/50 (schwach)
Partner Cards BG          —                             bg-card/10 (unsichtbar)
Partner Cards Border      —                             border-border/40 (schwach)
h2 Color                  text-foreground (explizit)    erbt (funktioniert, aber...)
Comparison Badge          —                             rounded-full (inkonsistent)
```

### 7 Fixes in 5 Dateien

**1. HomeMechanisms.tsx — Card-Borders stärker**
- Z.113: `border-border` → `border-border hover:border-primary/50 hover:shadow-glow`
- Z.69: `opacity-15` → `opacity-20`

**2. HomeCases.tsx — Card-Borders stärker**
- Z.133: `border-border` → `border-border hover:border-primary/50`
- Z.94: `opacity-10` → `opacity-20`

**3. HomeComparison.tsx — Tabelle sichtbar machen**
- Z.101: `border-border/50` → `border-border` (volle Border-Stärke)
- Z.108: `bg-white/5` → `bg-muted/30` (Table Header sichtbar in Light Mode)
- Z.91: `rounded-full` vom Badge entfernen (konsistent mit sharp corners)
- Z.57: `opacity-10` → `opacity-20`

**4. HomeTeam.tsx — Partner-Cards sichtbar machen**
- Z.97 + Z.118: `bg-card/10` → `bg-card` und `border-border/40` → `border-border`
- Z.30: `opacity-10` → `opacity-20`

**5. HomeShift.tsx — Grid-Opacity angleichen**
- Z.45: `opacity-10` → `opacity-20`

**6. HomeWorkWithUs.tsx — Grid-Opacity angleichen**
- Z.61: `opacity-10` → `opacity-20`

### Zusammenfassung
- 6 Dateien, rein CSS-Klassen-Änderungen
- Kein inhaltlicher Eingriff
- Fokus: Kontrast in Light Mode deutlich verbessern durch stärkere Borders, sichtbare Backgrounds, höhere Grid-Opacity

