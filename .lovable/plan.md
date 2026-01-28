

# Plan: Breadcrumb-Logik korrigieren

## Übersicht

Die Breadcrumb-Navigation auf der Landing Page muss den Kachel-Titel als Seitennamen verwenden.

---

## Änderungen

| Aktuell | Neu |
|---------|-----|
| Home > Solutions > Power Up > CAC Crisis | Solutions > Power Up Predictable Acquisition |

---

## Betroffene Datei

**`src/pages/PowerUpCACCrisis.tsx`** – Zeilen 104-126

### Aktuelle Breadcrumb-Struktur
```tsx
<Breadcrumb className="justify-center mb-6 animate-fade-in">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/" className="text-muted-foreground hover:text-foreground">
        Home
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/solutions" className="text-muted-foreground hover:text-foreground">
        Solutions
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <span className="text-muted-foreground">Power Up</span>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <span className="text-foreground font-medium">CAC Crisis</span>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Neue Breadcrumb-Struktur
```tsx
<Breadcrumb className="justify-center mb-6 animate-fade-in">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/solutions" className="text-muted-foreground hover:text-foreground">
        Solutions
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <span className="text-foreground font-medium">Power Up Predictable Acquisition</span>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

---

## Logik für alle Landing Pages

Die Breadcrumb folgt dem Schema:

```text
Solutions > [Kachel-Titel]
```

### Beispiele

| Kachel-Titel | Breadcrumb |
|--------------|------------|
| Power Up: Predictable Acquisition | Solutions > Power Up Predictable Acquisition |
| Power Up: Hypergrowth Unlocked | Solutions > Power Up Hypergrowth Unlocked |
| Boost: Board Readiness | Solutions > Boost Board Readiness |
| LASR.io Assessment | Solutions > LASR.io Assessment |

**Hinweis:** Der Doppelpunkt ":" aus dem Kachel-Titel wird im Breadcrumb weggelassen für bessere Lesbarkeit.

