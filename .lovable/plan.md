

# Plan: Sample-PDF für "Read Sample" Button

## Übersicht

| Element | Details |
|---------|---------|
| Datei | `01_Why_Startups_Fail_How_to_Scale_Smarter_2025-04-12.pdf` |
| Ziel | `public/downloads/fix-growth-sample.pdf` |
| Button | "Read Sample" / "Leseprobe" im Hero-Bereich |

---

## Änderungen

### 1. PDF-Datei kopieren

Das hochgeladene Sample-PDF wird in den `public/downloads/` Ordner kopiert:

```
user-uploads://01_Why_Startups_Fail_How_to_Scale_Smarter_2025-04-12.pdf
→ public/downloads/fix-growth-sample.pdf
```

### 2. Button-Link in `FixGrowthBook.tsx` aktualisieren

**Zeile 157** - Aktuell:
```typescript
onClick={() => window.open(`${AMAZON_URL}#reader`, '_blank')}
```

**Neu:**
```typescript
onClick={() => window.open('/downloads/fix-growth-sample.pdf', '_blank')}
```

---

## Ergebnis

- Der "Read Sample" / "Leseprobe" Button öffnet das PDF direkt im Browser
- Benutzer können die 29-seitige Leseprobe lesen ohne Amazon zu verlassen
- PDF wird im neuen Tab geöffnet

