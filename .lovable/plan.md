

## Analyse: Above-the-Fold Vergleich

### Ist-Zustand

```text
PAGE         HERO HEIGHT       CTA IM FOLD?    BADGE?      SCROLL-CHEVRON
─────────────────────────────────────────────────────────────────────────
Home         min-h-screen      ✅ Ja           ✅ Ja       ✅ bottom-8
Solutions    min-h-[85vh]      ❌ Nein         ❌ Nein     ✅ bottom-8
Playbooks    min-h-[85vh]      ❌ Nein         ❌ Nein     ✅ bottom-8
Insights     min-h-[85vh]      ✅ Ja (CTAs)    ❌ Nein     ✅ bottom-8
Cases        min-h-[85vh]      ❌ Nein         ❌ Nein     ✅ bottom-8
Expertise    min-h-[85vh]      ✅ Ja (Badge)   ✅ Ja       ✅ bottom-8
```

### Kernunterschied

Home nutzt `min-h-screen` (100vh = 1008px auf deinem Viewport). Alle anderen Seiten nutzen `SharedHero` mit `min-h-[85vh]` (~857px). Das sind **~150px weniger** — genug, damit bei Solutions und Playbooks die Stats teilweise abgeschnitten werden und kein CTA sichtbar ist.

Home hat ausserdem einen grossen Gradient-CTA-Button ("Kostenloses Gespräch buchen") und ein Badge ("Für CEOs...") — beides fehlt bei den meisten anderen Seiten.

### Empfehlung

Soll ich `SharedHero` auf `min-h-screen` hochziehen, damit alle Seiten die gleiche Above-the-Fold-Grenze haben wie Home? Das wäre eine 1-Zeilen-Änderung in `SharedHero.tsx`.

Oder soll der Unterschied (85vh vs 100vh) bewusst beibehalten werden, weil die Sub-Pages weniger Content im Hero haben als Home?

