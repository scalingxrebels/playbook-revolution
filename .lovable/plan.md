

## Design-Prüfung: RAS Landing Page

### Gefundene Probleme

#### 1. Stage Directions (sichtbar als Text gerendert)

**Zeile 223–225 (VSL):** `"Bewusst klein: Tiefenanalyse statt Massenerhebung."` — Das ist ein redaktioneller Kommentar zur Datenmethodik, kein kundengerichteter Text. Sollte entfernt werden.

**Zeile 614–617 (ICP-Filter):** `"Wer links steht, filtert sich selbst heraus — bevor er das Formular sieht. Das ist Absicht."` — Der letzte Satz "Das ist Absicht." ist eine Stage Direction. Der erste Satz ist grenzwertig, aber "Das ist Absicht." muss raus.

#### 2. Doppeltes "Format"-Label (Zeile 495–504)

Die Sektion hat ein Section-Label `Format` (Zeile 495–497) UND innerhalb der Format-Box nochmal `Format` als Label (Zeile 504). Eines davon muss weg — das innere Label in der Box entfernen.

#### 3. Hero Badge Position

Der Badge ist aktuell zentriert (Zeile 105). Das Briefing sagt "Amber Pill · oben rechts". Im zentrierten Hero-Layout ist zentriert allerdings konsistent mit allen anderen LPs. Kein Fix nötig, es sei denn du willst es explizit rechts.

---

### Fixes (alle in `src/pages/RevenueArchitectureSystem.tsx`)

1. **Zeile 223–225:** Die italic Zeile `"Bewusst klein: Tiefenanalyse statt Massenerhebung."` entfernen
2. **Zeile 614–617:** Closing-Text kürzen — `"Das ist Absicht."` entfernen, nur den ersten Satz behalten
3. **Zeile 504:** Das doppelte `Format`-Label innerhalb der Format-Box entfernen

