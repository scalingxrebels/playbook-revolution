
# Plan: Florians Bild ersetzen

## Übersicht

Das hochgeladene Bild für Florian Metzger wird in das Projekt kopiert und ersetzt das bestehende Bild.

---

## Technische Änderung

### Datei-Operation

| Aktion | Quelle | Ziel |
|--------|--------|------|
| Kopieren | `user-uploads://Florian.png` | `public/images/team-florian.png` |

Das neue Bild überschreibt die bestehende Datei. Da der Pfad in `About.tsx` bereits auf `/images/team-florian.png` zeigt, sind keine Code-Änderungen erforderlich.

---

## Betroffene Dateien

| Datei | Änderung |
|-------|----------|
| `public/images/team-florian.png` | Wird durch neues Bild ersetzt |

---

## Ergebnis

Nach der Änderung wird das neue professionelle Portrait von Florian auf der About-Seite angezeigt.
