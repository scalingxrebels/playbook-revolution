
# Plan: Schriftgröße der Beschreibungstexte verkleinern

## Übersicht

Die beiden Beschreibungstexte im Footer-Header werden von `text-editorial` auf `text-sm` geändert, um eine kleinere, passendere Schriftgröße zu erhalten.

---

## Aktuelle Situation

**Zeilen 49 und 54** verwenden `text-editorial`:

```tsx
<p className="text-editorial text-muted-foreground max-w-md editorial-border mb-2">
  ...VC/PE-backed startups...
</p>
<p className="text-editorial text-muted-foreground max-w-md font-medium mb-4">
  ...Growth shouldn't be a struggle...
</p>
```

---

## Technische Umsetzung

### Datei: `src/components/Footer.tsx`

| Zeile | Änderung |
|-------|----------|
| 49 | `text-editorial` → `text-sm` (und `editorial-border` entfernen) |
| 54 | `text-editorial` → `text-sm` |

### Vorher/Nachher:

**Zeile 49 (vorher):**
```tsx
<p className="text-editorial text-muted-foreground max-w-md editorial-border mb-2">
```

**Zeile 49 (nachher):**
```tsx
<p className="text-sm text-muted-foreground max-w-md mb-2">
```

**Zeile 54 (vorher):**
```tsx
<p className="text-editorial text-muted-foreground max-w-md font-medium mb-4">
```

**Zeile 54 (nachher):**
```tsx
<p className="text-sm text-muted-foreground max-w-md font-medium mb-4">
```

---

## Ergebnis

Die Beschreibungstexte werden in einer kleineren Schriftgröße (`text-sm` = 14px) dargestellt, was besser zur kompakten Struktur des Footers passt.
