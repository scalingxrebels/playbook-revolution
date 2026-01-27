
# Plan: Mission-Statement ersetzen

## Übersicht

Das bestehende Mission-Statement wird durch den neuen, ausführlicheren Text mit Zitat ersetzt.

---

## Aktuelle Situation

**Zeilen 519-524** enthalten das aktuelle Statement:

| Sprache | Aktueller Text |
|---------|----------------|
| Deutsch | "100 Unternehmen bis 2030 zu €100M ARR durch AI-Native Transformation verhelfen" |
| Englisch | "Help 100 companies reach €100M ARR by 2030 through AI-Native Transformation" |

---

## Neuer Text

**Hauptaussage:**
> "We believe the next generation of European unicorns will be AI-native. Our goal is to help existing scale-ups make this transition – before their competitors do."

**Zitat:**
> "The question is not if AI will transform your business, but who will lead that transformation."

---

## Technische Umsetzung

### Datei: `src/pages/About.tsx`

**Zeilen 519-524** werden angepasst:

1. Der Haupttext wird in ein `<p>` Element gesetzt
2. Das Zitat wird als separates, stilisiertes Element darunter hinzugefügt (kursiv, mit Anführungszeichen)
3. Deutsche Übersetzung wird ebenfalls aktualisiert

### Vorgeschlagene Struktur:

```text
<p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
  [Haupttext DE/EN]
</p>
<p className="text-xl md:text-2xl font-display font-bold text-primary max-w-3xl mx-auto italic">
  "[Zitat DE/EN]"
</p>
```

### Texte (DE/EN):

| Element | Englisch | Deutsch |
|---------|----------|---------|
| Haupttext | "We believe the next generation of European unicorns will be AI-native. Our goal is to help existing scale-ups make this transition – before their competitors do." | "Wir glauben, die nächste Generation europäischer Unicorns wird AI-native sein. Unser Ziel ist es, bestehenden Scale-ups bei dieser Transformation zu helfen – bevor es ihre Wettbewerber tun." |
| Zitat | "The question is not if AI will transform your business, but who will lead that transformation." | "Die Frage ist nicht, ob KI Ihr Unternehmen transformieren wird, sondern wer diese Transformation anführen wird." |

---

## Betroffene Datei

| Datei | Änderung |
|-------|----------|
| `src/pages/About.tsx` | Zeilen 519-524: Mission-Statement Text ersetzen und Zitat hinzufügen |

---

## Ergebnis

Die Mission-Sektion wird mit dem neuen, strategisch ausgerichteten Statement aktualisiert, das die Vision von ScalingX klarer kommuniziert – mit einem kraftvollen Zitat als Abschluss.
