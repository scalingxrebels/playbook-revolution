

# Plan: Pigtie Texte aktualisieren

## Änderungen

| Element | Aktuell | Neu |
|---------|---------|-----|
| Subtitle | "AI-Powered Sales Intelligence" | "The Agentic OS for Personal Finance." |
| Beschreibung (EN) | "Helping B2B sales teams identify high-intent buyers and accelerate deal velocity with AI-powered insights." | "Empowering individuals with AI-driven financial guidance, and enabling banks to better serve their customers." |
| Beschreibung (DE) | "Hilft B2B Sales Teams, High-Intent Buyer zu identifizieren und Deal Velocity mit KI-gestützten Insights zu beschleunigen." | "Unterstützt Menschen mit KI-gesteuerter Finanzberatung und ermöglicht Banken, ihre Kunden besser zu bedienen." |

---

## Betroffene Datei

**`src/pages/About.tsx`** – Zeilen 499, 503-506

### Zeile 499 (Subtitle)
```tsx
// Aktuell:
<p className="text-sm text-muted-foreground">AI-Powered Sales Intelligence</p>

// Neu:
<p className="text-sm text-muted-foreground">The Agentic OS for Personal Finance.</p>
```

### Zeilen 502-506 (Beschreibung)
```tsx
// Aktuell:
<p className="text-sm text-muted-foreground mb-4">
  {lang === 'de' 
    ? 'Hilft B2B Sales Teams, High-Intent Buyer zu identifizieren und Deal Velocity mit KI-gestützten Insights zu beschleunigen.'
    : 'Helping B2B sales teams identify high-intent buyers and accelerate deal velocity with AI-powered insights.'
  }
</p>

// Neu:
<p className="text-sm text-muted-foreground mb-4">
  {lang === 'de' 
    ? 'Unterstützt Menschen mit KI-gesteuerter Finanzberatung und ermöglicht Banken, ihre Kunden besser zu bedienen.'
    : 'Empowering individuals with AI-driven financial guidance, and enabling banks to better serve their customers.'
  }
</p>
```

---

## Hinweis

Die deutsche Übersetzung wird ebenfalls angepasst, damit beide Sprachen konsistent sind.

