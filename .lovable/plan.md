

## Plan: Badge-Styling auf Home-Standard vereinheitlichen

### Ist-Zustand

| Seite | Unterschiede zu Home |
|---|---|
| **Home** (Referenz) | `px-4 py-1.5 · text-xs · uppercase · tracking-[0.25em] · border border-accent/30 · rounded-full · bg-card · shadow-brutal-sm` |
| **About** | `px-6 py-2 · text-sm · kein uppercase · tracking-wider · border-2 border-accent/40 · eckig · bg-accent/10 · font-mono · kein shadow` |
| **Expertise** | `px-5 py-2.5 · text-sm · kein uppercase · tracking-wider · border-2 border-accent/40 · eckig · bg-accent/10 · kein shadow` |

### Fix

Beide Badges auf exakt dieselben Klassen wie Home setzen:

```
inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-accent border border-accent/30 rounded-full bg-card shadow-brutal-sm
```

### Dateien

| Datei | Zeile | Änderung |
|---|---|---|
| `src/pages/About.tsx` | Z.236 | Badge-Klassen ersetzen |
| `src/components/expertise/ExpertiseHub.tsx` | Z.97 | Badge-Klassen ersetzen |

2 Dateien, je 1 Zeile.

