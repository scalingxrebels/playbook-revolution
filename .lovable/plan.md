

## Plan: Overline im HomeHero an SharedHero-Stil anpassen

**Datei:** `src/components/homepage/HomeHero.tsx`, Zeile 57

Die SharedHero (Solutions, Playbooks, etc.) nutzt `text-sm` + `text-accent`. Die HomeHero nutzt `text-xs` + `text-muted-foreground`.

**Änderung:**
```
text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground
```
wird zu:
```
text-sm font-medium uppercase tracking-[0.3em] text-accent
```

Nur 2 CSS-Klassen ändern sich — alles andere bleibt identisch.

