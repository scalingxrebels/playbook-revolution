

# Fix: AI-Native Scaling Playbook Pfad korrigieren

## Problem

In `src/data/downloadRegistry.ts` (Zeile 40) ist der falsche Pfad eingetragen:

```typescript
// AKTUELL (FALSCH):
filePath: '/downloads/ai-native-scaling-playbook.pdf',

// KORREKT:
filePath: '/downloads/playbooks/ai-native-scaling-playbook.pdf',
```

Das PDF liegt tatsächlich unter `public/downloads/playbooks/ai-native-scaling-playbook.pdf`.

---

## Lösung

**Datei:** `src/data/downloadRegistry.ts`

**Zeile 40 ändern:**

| Zeile | Alt | Neu |
|-------|-----|-----|
| 40 | `filePath: '/downloads/ai-native-scaling-playbook.pdf',` | `filePath: '/downloads/playbooks/ai-native-scaling-playbook.pdf',` |

---

## Auswirkung

Nach der Korrektur wird die `Download_URL`, die an Fillout übergeben wird, korrekt sein:

**Vorher (falsch):**
```
Download_URL=https://scalingx.com/downloads/ai-native-scaling-playbook.pdf
```

**Nachher (korrekt):**
```
Download_URL=https://scalingx.com/downloads/playbooks/ai-native-scaling-playbook.pdf
```

---

## Zusammenfassung

| Datei | Änderung |
|-------|----------|
| `src/data/downloadRegistry.ts` | Zeile 40: Pfad von `/downloads/` zu `/downloads/playbooks/` korrigieren |

