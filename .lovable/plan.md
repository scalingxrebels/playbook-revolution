

# Button-Textfarbe in Dark-Section Fix

## Problem-Analyse

Der Hero-CTA Button verwendet:
```tsx
className="bg-gradient-accent text-accent-foreground..."
```

In der `.dark-section` CSS-Klasse:
```css
--accent-foreground: 0 0% 5%; /* Fast schwarz - FALSCH! */
```

## Lösung

Die Variable `--accent-foreground` muss in `.dark-section` auf einen hellen Wert gesetzt werden, da Accent-Buttons auf dem dunklen Hero-Hintergrund hellen Text benötigen.

### Änderung in `src/index.css`

**Zeile 147 anpassen:**

| Variable | Aktuell (falsch) | Neu (korrekt) |
|----------|------------------|---------------|
| `--accent-foreground` | `0 0% 5%` (schwarz) | `0 0% 100%` (weiß) |

### Code-Änderung

```css
/* Zeile 146-147 in .dark-section */
--accent: 24 100% 58%;
--accent-foreground: 0 0% 100%;  /* Geändert von 0 0% 5% */
```

## Warum das passiert ist

Die `.dark-section` wurde als Kopie der `.dark` Variablen erstellt. Im Dark Mode ist `--accent-foreground` dunkel, weil Accent-Elemente normalerweise helle Hintergründe haben. Aber im Hero-Kontext mit Gradient-Buttons brauchen wir hellen Text.

## Betroffene Dateien

| Datei | Änderung |
|-------|----------|
| `src/index.css` | `--accent-foreground` in `.dark-section` auf `0 0% 100%` ändern |

## Ergebnis

- Gradient-Buttons im Hero zeigen weißen Text
- Alle anderen `.dark-section` Elemente bleiben unverändert
- Konsistenz mit dem visuellen Design

