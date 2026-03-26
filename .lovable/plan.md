

## Fix: Nur Überschriften zentrieren, nicht den gesamten Content

### Problem
In allen 6 Sektionen wurde `text-center` auf den äusseren Container-`div` gesetzt. Das zentriert alles — Card-Texte, Paragraphen, Tabellen-Labels, Bio-Text.

### Lösung
`text-center` vom Container entfernen und stattdessen nur auf die Header-Elemente (Overline, h2, Subtitle-p) setzen.

### Änderungen in 6 Dateien

| Datei | Zeile | Container `text-center` entfernen | Header `text-center` hinzufügen |
|---|---|---|---|
| `HomeShift.tsx` | 47 | Ja | Overline (Z.48) + h2 (Z.55) bereits zentriert via Container — einzeln setzen |
| `HomeMechanisms.tsx` | 71 | Ja | Overline (Z.73), h2 (Z.81), p (Z.94) |
| `HomeComparison.tsx` | 57 | Ja | Overline (Z.59), h2 (Z.67), p (Z.76), Badge-div (Z.88) |
| `HomeCases.tsx` | 96 | Ja | Overline (Z.97), h2 (Z.104), p (Z.116) |
| `HomeWorkWithUs.tsx` | 63 | Ja | Overline (Z.64), h2 (Z.71) |
| `HomeTeam.tsx` | 32 | Ja | Overline (Z.34), h2 (Z.41) |

Jedes Header-Element bekommt individuell `text-center`. Card-Inhalte, Bio-Texte, Paragraphen und Tabellen bleiben linksbündig (Standard).

### Kein inhaltlicher Eingriff
Nur CSS-Klassen werden verschoben — keine Texte, Links oder Strukturen ändern sich.

