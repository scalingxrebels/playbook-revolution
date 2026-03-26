

## Plan: ML Page — 3 Fixes (Foto, CTA im Hero, zweites Foto)

### 1. Hero-Foto: `rounded-full` → `rounded-2xl` (rund beschnitten = quadratisch mit Rundung)

Das Briefing sagt "400×400px, rund beschnitten" — aber der User will explizit "quadratisch mit abgerundeten Ecken, nicht rund".

**Z.221**: `rounded-full` → `rounded-2xl`

### 2. CTA im Hero hinzufügen

Das Briefing sagt "KEIN CTA im Hero" — aber der User will den CTA sowohl im Hero als auch am Ende. Nach dem Formula Badge (Z.273) einen CTA-Button einfügen, identisch zum HomeHero-Pattern:

```text
Button: bg-gradient-accent, shadow-accent-glow, "Kostenloses Gespräch buchen"
Micro-copy: "30 Minuten · Kein Pitch · Direkt mit Michel"
```

### 3. Zweites Foto in Section 3 (Die Story)

Nach dem Timeline-Block (Z.339, nach `</div>` des space-y-8) das Speaking-Foto einfügen:

```text
/images/ml-speaking.png
max-w-lg mx-auto mt-12 rounded-2xl border-2 border-primary/30
scroll-reveal Animation wie die Timeline-Cards
```

### Dateien

| Datei | Änderung |
|---|---|
| `src/pages/ML.tsx` | Z.221: rounded-full → rounded-2xl; nach Z.273: CTA-Button; nach Z.339: zweites Foto |

1 Datei, 3 Stellen.

