

# Expertise Breadcrumb: Anpassung an Playbooks/Solutions Pattern

## Aktuelle Situation

**Expertise (3-Ebenen):**
```
Home → Expertise → AI Maturity Framework
```

**Playbooks/Solutions (2-Ebenen):**
```
Playbooks → Growth Engines
Solutions → Power Up CAC Crisis
```

## Änderung

### Datei: `src/components/research/sections/ResearchHeroSection.tsx`

**Aktuell (Zeilen 64-82):**
```tsx
<Breadcrumb className="justify-center mb-6 animate-fade-in">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/" className="text-muted-foreground hover:text-foreground">
        {data.breadcrumb.home[language]}
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/expertise" className="text-muted-foreground hover:text-foreground">
        {data.breadcrumb.parent[language]}
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <span className="text-foreground font-medium">{data.breadcrumb.current[language]}</span>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

**Neu (2-Ebenen Pattern):**
```tsx
<Breadcrumb className="justify-center mb-6 animate-fade-in">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/expertise" className="text-muted-foreground hover:text-foreground">
        {data.breadcrumb.parent[language]}
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <span className="text-foreground font-medium">{data.breadcrumb.current[language]}</span>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## Ergebnis

| Seite | Vorher | Nachher |
|-------|--------|---------|
| AMF | Home → Expertise → AI Maturity Framework | Expertise → AI Maturity Framework |
| ANST | Home → Expertise → AI-Native Scaling Theory | Expertise → AI-Native Scaling Theory |
| SST | Home → Expertise → Scaling Stack Theory | Expertise → Scaling Stack Theory |
| Unified | Home → Expertise → Unified Framework | Expertise → Unified Framework |

## Geänderte Dateien

| Datei | Änderung |
|-------|----------|
| `src/components/research/sections/ResearchHeroSection.tsx` | Home-Link + Separator entfernen |

