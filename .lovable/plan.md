

# Analyse: Strategic Capabilities (C₁-C₄) Playbook (Ebene 2) v2.0 vs. Aktueller Stand

## Zusammenfassung

Das Briefing v2.0 spezifiziert das **EBENE 2 DOMAIN PLAYBOOK: Strategic Capabilities (C₁-C₄)** mit **1 Sub-Playbook Connection**. Der aktuelle Code-Stand zeigt:

1. **Kachel VORHANDEN** - Strategic Capabilities Domain Playbook EXISTS in `src/data/playbooks.ts` (Zeilen 507-538)
2. **Kachel-Metadaten VORHANDEN** in `src/data/playbooks/index.ts` (ID 6) - Jedoch Role nur `['ceo']` statt breiter
3. **Content VOLLSTÄNDIG** in `src/data/playbooks/content/strategic-capabilities.ts` (~421 Zeilen mit vollständigem bilingualem Inhalt)
4. **Route VORHANDEN** - `/playbooks/strategic-capabilities` in `App.tsx` (Zeile 171)
5. **Page-Komponente VORHANDEN** - `PlaybookStrategicCapabilities.tsx` existiert
6. **Sub-Playbook REGISTRIERT** - ID 18 (Strategic Capabilities Deep Dive) in index.ts

**STATUS: 95% KOMPLETT** - Nur geringfügige Anpassungen erforderlich

---

## Teil 1: KACHEL (Overview Page)

### Aktueller Stand vs. Briefing

| Element | Briefing | Aktuell (Legacy) | Aktuell (index.ts ID 6) | Status |
|---------|----------|------------------|-------------------------|--------|
| **Icon** | `Target` (32px) | `Target` | `Target` | ✅ OK |
| **Headline** | "Strategic Capabilities (C₁-C₄) Playbook" | "Strategic Capabilities Playbook" | "Strategic Capabilities Playbook" | ⚠️ (C₁-C₄) FEHLT |
| **Badges Area** | Strategic Capabilities | `['strategic-capabilities']` | `['strategic-capabilities']` | ✅ OK |
| **Badges Bottleneck** | Strategy, Setup, Execution, Operationalization | alle 4 vorhanden | alle 4 vorhanden | ✅ OK |
| **Badges Role** | CEO, All | `['ceo']` | `['ceo']` | ⚠️ UNVOLLSTÄNDIG |
| **Teaser** | 54 Wörter, C₁-C₄ Framework | 5-component framework | ✅ gut | ✅ OK |
| **Gradient** | from-red-500 to-rose-500 | from-red-500 to-rose-500 | from-red-500 to-rose-500 | ✅ OK |

---

## Teil 2: LANDING PAGE

### Aktueller Stand vs. Briefing

| Section | Briefing | Aktuell | Status |
|---------|----------|---------|--------|
| **Hero** | Badge: "Strategic Capabilities · Domain Playbook" | "Strategic Capabilities · Meta-Playbook" | ⚠️ Badge anpassen |
| **Summary** | Problem/Why/Solution Cards | ✅ Vollständig | ✅ OK |
| **Problem** | 4 Bullets + Metrics | ✅ 4 Bullets + 4 Metrics | ✅ OK |
| **Framework** | 4 Capabilities (C₁-C₄) + AI | ✅ 5 Komponenten Framework | ✅ OK |
| **Roadmap** | 90-Day (3 Phasen) | ✅ 3 Phasen | ✅ OK |
| **Case Studies** | 3 anonymisiert | ✅ 3 Cases (Series A/B/C) | ✅ OK |
| **Solutions Connection** | Power Up + Boost | ✅ Scaling Velocity + Scaling OS | ✅ OK |
| **Personas** | 4 (CEO, C-Level, Board, All) | ✅ 4 Personas | ✅ OK |
| **Final CTA** | Download + Book Call | ✅ Vollständig | ✅ OK |
| **Sub-Playbooks Section** | 1 Sub-Playbook verlinkt | ❌ FEHLT | 🔴 HINZUFÜGEN |

---

## Teil 3: Erforderliche Änderungen

### 3.1 Title Update (Optional)

**Dateien:** `src/data/playbooks.ts` + `src/data/playbooks/index.ts`

Die (C₁-C₄) Notation im Titel ist optional aber würde das Framework klarer kommunizieren:

```typescript
// Aktuell:
title: { en: 'Strategic Capabilities Playbook', de: 'Strategic Capabilities Playbook' }

// Briefing empfiehlt:
title: { en: 'Strategic Capabilities (C₁-C₄) Playbook', de: 'Strategic Capabilities (C₁-C₄) Playbook' }
```

**Empfehlung:** Behalten wie ist - "Strategic Capabilities Playbook" ist kürzer und prägnanter. Die C₁-C₄ Details sind im Content ausführlich beschrieben.

### 3.2 Badge Update (Hero Section)

**Datei:** `src/data/playbooks/content/strategic-capabilities.ts`

```typescript
// Aktuell (Zeile 10):
badge: { en: "Strategic Capabilities · Meta-Playbook", de: "Strategic Capabilities · Meta-Playbook" }

// Ändern zu:
badge: { en: "Strategic Capabilities · Domain Playbook", de: "Strategic Capabilities · Domain Playbook" }
```

### 3.3 Sub-Playbooks Section HINZUFÜGEN

**Datei:** `src/data/playbooks/content/strategic-capabilities.ts`

Da dies ein Ebene 2 Playbook ist (meta.ebene === 2), sollte eine `subPlaybooks` Section hinzugefügt werden:

```typescript
subPlaybooks: {
  title: { 
    en: "Deep Dive Playbook", 
    de: "Deep Dive Playbook" 
  },
  subtitle: { 
    en: "Master each of the 4 capabilities (C₁-C₄) in depth", 
    de: "Meistere jede der 4 Capabilities (C₁-C₄) im Detail" 
  },
  items: [
    {
      id: 18,
      slug: 'strategic-capabilities/deep-dive',
      title: { 
        en: "Strategic Capabilities Deep Dive", 
        de: "Strategic Capabilities Deep Dive" 
      },
      teaser: { 
        en: "Detailed frameworks, assessment tools, and implementation guides for mastering C₁ Strategy, C₂ Setup, C₃ Execution, and C₄ Operationalization.", 
        de: "Detaillierte Frameworks, Assessment-Tools und Implementierungsguides für C₁ Strategie, C₂ Setup, C₃ Execution und C₄ Operationalisierung." 
      },
      icon: "Target",
      color: "bg-red-500/10 text-red-500"
    }
  ]
}
```

---

## Zusammenfassung der Änderungen

| Datei | Aktion | Priorität | Aufwand |
|-------|--------|-----------|---------|
| `src/data/playbooks/content/strategic-capabilities.ts` | Badge von "Meta-Playbook" zu "Domain Playbook" ändern | Mittel | ~2 Zeilen |
| `src/data/playbooks/content/strategic-capabilities.ts` | `subPlaybooks` Section hinzufügen | Hoch | ~25 Zeilen |

**Gesamtaufwand:** ~30 Zeilen Änderungen

---

## Technische Notizen

1. **FÜNFTES Ebene 2 Domain Playbook** (Strategic Capabilities) - FAST FERTIG
2. **Strategic Capabilities Framework** bereits vollständig implementiert:
   - 5-Komponenten: Assessment, Development, Integration, Optimization, AI-Powered Excellence
   - θ_index Framework (4 Capabilities × 8 Dimensionen)
   - Multiplikative Formel: S = E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ_index
3. **1 Sub-Playbook verlinkt**:
   - Strategic Capabilities Deep Dive (ID 18, slug: strategic-capabilities/deep-dive)
   - Content-Datei existiert als Skelett (`strategic-capabilities-deep-dive.ts`)
4. **Bilingual Content** (EN/DE) bereits vollständig in allen Sections
5. **Solutions Connection** verlinkt auf:
   - Scaling Velocity (Power Up, €23.6K)
   - Scaling OS (Boost, €60K-€78K)
6. **Icon**: Target
7. **Gradient**: from-red-500 to-rose-500 (Strategic Capabilities-Theme)

---

## Erwartetes Ergebnis nach Änderungen

Nach den Minor Updates:
- `/playbooks` Übersichtsseite zeigt Domain Playbook-Kachel für Strategic Capabilities ✅ (bereits OK)
- Strategic Capabilities Kachel zeigt **θ_index Framework Teaser** ✅ (bereits OK)
- "Learn More" Link führt zu `/playbooks/strategic-capabilities` ✅ (bereits OK)
- Landing Page zeigt alle 9 Sections mit vollständigem bilingualen Content ✅ (bereits OK)
- **Section 9 (Sub-Playbooks)** zeigt Card für Strategic Capabilities Deep Dive ⚠️ (HINZUFÜGEN)
- Badge zeigt "Domain Playbook" statt "Meta-Playbook" ⚠️ (KORRIGIEREN)
- **LETZTES Ebene 2 Playbook komplett** (5/5 Domain Playbooks)

---

## Status: ALLE 5 DOMAIN PLAYBOOKS

| ID | Playbook | Status |
|----|----------|--------|
| 2 | Growth Engines | ✅ Komplett |
| 3 | Operating Systems | ✅ Komplett |
| 4 | Board & Governance | ✅ Komplett |
| 5 | Portfolio Transformation | ✅ Komplett |
| 6 | Strategic Capabilities | ⚠️ 95% (Minor Updates nötig) |

