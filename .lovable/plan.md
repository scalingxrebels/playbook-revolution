
# Plan: Florians Rolle im Footer aktualisieren

## Übersicht

Die Rollenbezeichnung von Florian Metzger im Footer-Team-Bereich wird von "Venture Architect" zu "Partner" geändert.

---

## Technische Umsetzung

### Datei: `src/components/Footer.tsx`

**Zeile 32** im `team` Array wird angepasst:

| Vorher | Nachher |
|--------|---------|
| `{ name: 'Florian Metzger', role: 'RevOps. GTM. Venture Architect.' }` | `{ name: 'Florian Metzger', role: 'RevOps. GTM. Partner.' }` |

---

## Kontext

Das Team-Array (Zeilen 28-33) zeigt aktuell:

```text
Michel Lason    → Strategy. Scaling. Impact.
Alban Halili    → Growth. AI Solutions. Automation.
Florian Metzger → RevOps. GTM. Venture Architect.  ← wird geändert
```

Nach der Änderung:

```text
Michel Lason    → Strategy. Scaling. Impact.
Alban Halili    → Growth. AI Solutions. Automation.
Florian Metzger → RevOps. GTM. Partner.  ← neu
```

---

## Ergebnis

Florian Metzger wird im Footer mit der aktualisierten Rolle "RevOps. GTM. Partner." angezeigt, analog zur Darstellung der anderen Teammitglieder.
