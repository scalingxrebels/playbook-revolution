

# Implementierungsplan: Glossar-Seite für Fachbegriffe

## Übersicht

Erstellung einer neuen Glossar-Seite (`/glossar`) mit einer Tabelle, die technische Begriffe und ihre CEO-freundlichen Ersetzungen dokumentiert.

---

## Neue Seite: `src/pages/Glossar.tsx`

### Struktur

Die Seite folgt dem bestehenden Pattern (wie Impressum/Datenschutz):
- Navigation
- Hero-Bereich mit Titel
- Tabelle mit den Begriffen
- Footer

### Glossar-Tabelle

| Technischer Begriff | CEO-freundlicher Ersatz | Kontext |
|---------------------|------------------------|---------|
| θ_index | AI Maturity Score | Messwerte, Metriken |
| θ_index 0.3 | AI Maturity Score 30% | Konkrete Werte (0-1 → 0-100%) |
| C_min | #1 Blocker / Größte Schwachstelle | Engpass-Diagnose |
| C₁ | Strategy | Capability-Bereich |
| C₂ | Setup | Capability-Bereich |
| C₃ | Execution | Capability-Bereich |
| C₄ | Operationalization | Capability-Bereich |

---

## Technische Details

### 1. Neue Datei erstellen
**Pfad:** `src/pages/Glossar.tsx`

```text
- Navigation + Footer (wie andere Seiten)
- Titel: "Glossar" / "Glossary"
- Kurze Einleitung zur Erklärung
- Responsive Tabelle mit shadcn/ui Table-Komponente
- Zweisprachig (DE/EN) via LanguageContext
```

### 2. Route hinzufügen
**Datei:** `src/App.tsx`

```text
Neue Route: /glossar → Glossar
```

### 3. Optional: Footer-Link
Falls gewünscht, kann ein Link im Footer hinzugefügt werden (neben Impressum, Datenschutz, AGB).

---

## Design

- Verwendet bestehende `Table`-Komponenten aus `src/components/ui/table.tsx`
- Dark-Mode kompatibel
- Mobile-responsive (horizontales Scrolling bei kleinen Bildschirmen)
- Konsistentes Styling mit anderen Legal-Seiten

---

## Dateien

| Aktion | Datei |
|--------|-------|
| **Neu** | `src/pages/Glossar.tsx` |
| **Bearbeiten** | `src/App.tsx` (Route hinzufügen) |
| **Optional** | `src/components/Footer.tsx` (Link hinzufügen) |

