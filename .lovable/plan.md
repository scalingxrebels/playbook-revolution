

## Plan: Fix — Text überlappt Button in "Gespräch buchen" Karte

### Problem

In der "Book a call"-Karte (prominent card) in `HomeWorkWithUs.tsx` läuft der Beschreibungstext über den CTA-Button. Die Ursache: `flex-1` auf dem Beschreibungstext (Z.110) füllt den verfügbaren Raum, aber der Button hat kein `mt-auto` und der CTA-Text "KOSTENLOSES GESPRÄCH BUCHEN" (uppercase durch Button-Basis) ist lang.

### Fix in `src/pages/homepage/HomeWorkWithUs.tsx`

1. **Z.110**: Beschreibung `flex-1` beibehalten (sorgt dafür, dass die nicht-prominenten Karten gleich hoch sind)
2. **Z.113-120**: Button-Container mit `mt-auto` wrappen, damit der Button immer am unteren Rand sitzt und nie vom Text überlappt wird
3. **Z.121-125**: Gleiches für den Nicht-prominent-CTA-Link

Konkret: den CTA-Block (sowohl Button als auch span) in ein `<div className="mt-auto">` wrappen, damit er immer am Kartenboden bleibt — unabhängig von der Textlänge.

### Datei

| Datei | Änderung |
|---|---|
| `src/components/homepage/HomeWorkWithUs.tsx` | Z.113-126: CTA-Block in `mt-auto` Container wrappen |

1 Datei, 1 Stelle.

