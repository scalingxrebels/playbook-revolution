
# Plan: Footer-Beschreibungstext aktualisieren

## Übersicht

Der Beschreibungstext unter dem Logo im Footer wird mit dem neuen, zweizeiligen Text aktualisiert.

---

## Aktuelle Situation

**Zeilen 49-53** enthalten den aktuellen Text:

| Sprache | Aktueller Text |
|---------|----------------|
| Deutsch | "Wir liefern Systeme und schaffen Impact. Wachstum sollte kein Kampf sein, es sollte System haben." |
| Englisch | "We deliver systems and create impact. Growth shouldn't be a struggle, it should have a system." |

---

## Neuer Text

**Zeile 1:**
> "VC/PE-backed startups (Series A-D) scale faster with AI-Native Scaling and systems that deliver measurable outcomes."

**Zeile 2:**
> "Growth shouldn't be a struggle. It should be a system."

---

## Technische Umsetzung

### Datei: `src/components/Footer.tsx`

**Zeilen 49-53** werden angepasst:

Der Text wird in zwei separate `<p>` Elemente aufgeteilt für bessere Lesbarkeit:

```tsx
<p className="text-editorial text-muted-foreground max-w-md editorial-border mb-2">
  {language === 'de' 
    ? 'VC/PE-unterstützte Startups (Series A-D) skalieren schneller mit AI-Native Scaling und Systemen, die messbare Ergebnisse liefern.'
    : 'VC/PE-backed startups (Series A-D) scale faster with AI-Native Scaling and systems that deliver measurable outcomes.'}
</p>
<p className="text-editorial text-muted-foreground max-w-md font-medium mb-4">
  {language === 'de' 
    ? 'Wachstum sollte kein Kampf sein. Es sollte ein System sein.'
    : "Growth shouldn't be a struggle. It should be a system."}
</p>
```

### Texte (DE/EN):

| Zeile | Englisch | Deutsch |
|-------|----------|---------|
| 1 | "VC/PE-backed startups (Series A-D) scale faster with AI-Native Scaling and systems that deliver measurable outcomes." | "VC/PE-unterstützte Startups (Series A-D) skalieren schneller mit AI-Native Scaling und Systemen, die messbare Ergebnisse liefern." |
| 2 | "Growth shouldn't be a struggle. It should be a system." | "Wachstum sollte kein Kampf sein. Es sollte ein System sein." |

---

## Betroffene Datei

| Datei | Änderung |
|-------|----------|
| `src/components/Footer.tsx` | Zeilen 49-53: Beschreibungstext ersetzen und in 2 Absätze aufteilen |

---

## Ergebnis

Der Footer zeigt nun den neuen, zielgruppenspezifischen Text der klar kommuniziert, für wen ScalingX arbeitet (VC/PE-backed Startups Series A-D) – mit dem prägnanten Slogan in einer separaten Zeile für mehr Wirkung.
