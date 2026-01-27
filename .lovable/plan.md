
# Plan: Emojis durch Lucide Icons ersetzen

## Übersicht

Die drei Emoji-Symbole in der "Our Mission" / "Why We Exist" Sektion werden durch passende Lucide Icons ersetzt.

---

## Aktuelle Situation

| Position | Aktuell | Titel |
|----------|---------|-------|
| Zeile 528 | 🎯 (Emoji) | Execution-First |
| Zeile 535 | ⚡ (Emoji) | Speed Matters |
| Zeile 542 | 🤝 (Emoji) | Partnership |

---

## Vorgeschlagene Änderungen

| Aktuell | Neu (Lucide Icon) | Begründung |
|---------|-------------------|------------|
| 🎯 | `Target` | Passt perfekt zu "Execution-First" – Fokus auf Ziel |
| ⚡ | `Zap` | Symbol für Geschwindigkeit und Energie |
| 🤝 | `Handshake` | Professionelles Symbol für Partnerschaft |

---

## Technische Umsetzung

### 1. Import erweitern (Zeile 9-12)

`Handshake` und `Zap` zum bestehenden Import hinzufügen. `Target` ist bereits importiert.

### 2. HTML-Struktur ändern (Zeilen 527-547)

Die `<span>` Elemente mit Emojis werden durch Icon-Container ersetzt:

```text
Vorher:
<span className="text-3xl mb-2 block">🎯</span>

Nachher:
<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2 mx-auto">
  <Target className="w-6 h-6 text-primary" />
</div>
```

Das gleiche Muster wird für alle drei Icons angewendet, um ein konsistentes Design mit den anderen Sektionen (Values, Approach) zu gewährleisten.

---

## Betroffene Datei

| Datei | Änderungen |
|-------|------------|
| `src/pages/About.tsx` | Import erweitern + 3 Emoji-Spans durch Icon-Container ersetzen |

---

## Ergebnis

Die Mission-Sektion wird ein professionelleres, konsistentes Aussehen haben, das zu den anderen Sektionen der Seite passt – mit sauberen Lucide Icons statt Emojis.
