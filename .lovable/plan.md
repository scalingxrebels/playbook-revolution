
# Plan: "Who We've Worked With" Bereich hinzufügen

## Übersicht

Unter dem bestehenden Stats-Grid in der FinalCTAOptimized-Komponente wird ein neuer Bereich eingefügt, der die Referenzkunden im gleichen visuellen Stil anzeigt.

---

## Unternehmensliste

Die folgenden 21 Unternehmen werden angezeigt:

> Pigtie, the beautiful unleashed truth, KODE®, FILADOS, 2p Team, Microsoft, XING e-Recruiting, Lexware, Haufe Group, smapOne, SBB E-Business, Swarovski, local.ch, BWK Group, DBA, Burda Media, START, Elba, Semigator, Umantis, Sage

---

## Technische Umsetzung

### Datei: `src/components/homepage/FinalCTAOptimized.tsx`

**1. Clients-Array hinzufügen (nach Zeile 53):**

```tsx
const clients = [
  'Pigtie', 'the beautiful unleashed truth', 'KODE®', 'FILADOS', 
  '2p Team', 'Microsoft', 'XING e-Recruiting', 'Lexware', 
  'Haufe Group', 'smapOne', 'SBB E-Business', 'Swarovski', 
  'local.ch', 'BWK Group', 'DBA', 'Burda Media', 
  'START', 'Elba', 'Semigator', 'Umantis', 'Sage'
];
```

**2. Neuer Bereich nach dem Stats-Grid (nach Zeile 141):**

```tsx
{/* Clients Section */}
<div className="mt-6 p-6 rounded-xl bg-muted/30 border-2 border-border">
  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 text-center">
    {language === 'de' ? 'Mit wem wir gearbeitet haben' : 'Who We\'ve Worked With'}
  </p>
  <div className="flex flex-wrap justify-center gap-2">
    {clients.map((client, index) => (
      <span 
        key={index}
        className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-background/50 border border-border"
      >
        {client}
      </span>
    ))}
  </div>
</div>
```

---

## Visuelles Design

| Element | Stil |
|---------|------|
| Container | Gleicher Stil wie Stats-Grid (`bg-muted/30`, `border-2 border-border`, `rounded-xl`) |
| Überschrift | Uppercase, klein, zentriert (`text-xs`, `tracking-widest`) |
| Client-Chips | Kleine Tags mit Hintergrund und Border (`text-xs`, `rounded-full`) |
| Layout | Flex-Wrap für automatische Anordnung |

---

## Betroffene Datei

| Datei | Änderungen |
|-------|------------|
| `src/components/homepage/FinalCTAOptimized.tsx` | Clients-Array + neuer JSX-Block für Kundenreferenzen |

---

## Ergebnis

Unter den Stats erscheint ein visuell konsistenter Bereich mit allen Referenzkunden als kompakte Chips, die automatisch umbrechen und so auf allen Bildschirmgrößen gut dargestellt werden.
