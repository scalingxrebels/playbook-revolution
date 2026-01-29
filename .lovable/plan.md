
# Plan: Maxxeed Breadcrumb korrigieren

## Problem

Die aktuelle Breadcrumb auf der Maxxeed Landing Page zeigt:

| Aktuell | Korrekt (laut Pattern) |
|---------|------------------------|
| Home > Tools > Maxxeed | Solutions > Maxxeed |

## Standard-Pattern

Gemaess dem Solution Landing Page Breadcrumb Pattern soll das vereinfachte zwei-Level-Format verwendet werden:
**"Solutions > [Tile Title]"**

## Aenderung in `src/pages/Maxxeed.tsx`

### Zeilen 115-133: Breadcrumb-Struktur

```typescript
// Aktuell (3-Level):
<BreadcrumbItem>
  <BreadcrumbLink href="/">Home</BreadcrumbLink>
</BreadcrumbItem>
<BreadcrumbSeparator />
<BreadcrumbItem>
  <BreadcrumbLink href="/solutions">Tools</BreadcrumbLink>
</BreadcrumbItem>
<BreadcrumbSeparator />
<BreadcrumbItem>
  <span>Maxxeed</span>
</BreadcrumbItem>

// Neu (2-Level Pattern):
<BreadcrumbItem>
  <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
</BreadcrumbItem>
<BreadcrumbSeparator />
<BreadcrumbItem>
  <span>Maxxeed</span>
</BreadcrumbItem>
```

## Technische Details

- Entferne den "Home"-Eintrag komplett
- Aendere "Tools" zu "Solutions" 
- Behalte den Link zu `/solutions`
- Behalte "Maxxeed" als aktuelle Seite

## Ergebnis

Die Breadcrumb zeigt korrekt: **Solutions > Maxxeed**

Dies folgt dem etablierten Pattern aller anderen Solution Landing Pages (Power Up, Boost, Accelerate, Decision Support, etc.).
