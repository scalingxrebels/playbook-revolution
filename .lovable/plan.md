

# Plan: Vergleichstabelle "Das Buch im Vergleich" hinzufügen

## Übersicht

Eine neue Sektion wird auf der Fix Growth Landing Page eingefügt, die das Buch mit anderen bekannten Scaling-Büchern vergleicht.

| Element | Details |
|---------|---------|
| Position | Nach der SolutionSection, vor WhatsInsideSection |
| Neue Komponente | `ComparisonTableSection` |
| Darstellung | Responsive Tabelle mit Progress-Bars |

---

## Daten aus dem Screenshot

### 7 Bücher im Vergleich

| Buch | Autor | Fokus | Speed | Kapitaleffizienz | Umsetzungstiefe | Org-Fokus | Fazit |
|------|-------|-------|-------|-----------------|-----------------|-----------|-------|
| Fix Growth. Scale Faster. | Michel Lason | Execution Gap in GTM, Ops & Valuation | 100% | 100% | 100% | 80% | Execution Gap closed |
| Scaling Up | Verne Harnish | Struktur & Rhythmus | 40% | 80% | 80% | 60% | Too slow, too rigid |
| Blitzscaling | Reid Hoffman | Geschwindigkeit > Effizienz | 100% | 20% | 40% | 40% | Burn fast, win big |
| Traction | Gino Wickman | EOS + Struktur für kleine Teams | 40% | 80% | 40% | 60% | Clarity, lack of business focus |
| Pinnacle | Steve Preada/Greg Cleary | EOS + Leadership + Kultur | 40% | 80% | 60% | 80% | Culture, too little GTM |
| Scaling People | Claire Hughes Johnson | People- & Culture-Scale | 60% | 80% | 60% | 100% | People first, no GTM & business |
| Scaling Through Chaos | Dominic Jacquesson | Teamstruktur durch Wachstumsphasen | 60% | 80% | 40% | 100% | Roles, not revenue & valuation |

---

## Änderung in `src/pages/FixGrowthBook.tsx`

### 1. Neue Sektion: `ComparisonTableSection` (nach Zeile 418)

```typescript
// ============================================================================
// SECTION 3b: BOOK COMPARISON
// ============================================================================
const ComparisonTableSection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const books = [
    {
      title: 'Fix Growth. Scale Faster.',
      author: 'Michel Lason',
      focus: { 
        en: 'Execution Gap in GTM, Ops & Valuation', 
        de: 'Execution Gap in GTM, Ops & Valuation' 
      },
      scores: { speed: 100, capitalEfficiency: 100, implementationDepth: 100, orgFocus: 80 },
      conclusion: { en: 'Execution Gap closed', de: 'Execution Gap closed' },
      highlight: true,
    },
    {
      title: 'Scaling Up',
      author: 'Verne Harnish',
      focus: { en: 'Structure & Rhythm', de: 'Struktur & Rhythmus' },
      scores: { speed: 40, capitalEfficiency: 80, implementationDepth: 80, orgFocus: 60 },
      conclusion: { en: 'Too slow, too rigid', de: 'Too slow, too rigid' },
    },
    // ... weitere Bücher
  ];

  // Responsive Tabelle mit Progress-Bars
};
```

### 2. Sektionsreihenfolge aktualisieren (Zeile 707-714)

```typescript
<main>
  <HeroSection />
  <ProblemSection />
  <SolutionSection />
  <ComparisonTableSection />  {/* NEU */}
  <WhatsInsideSection />
  <AuthorSection />
  <ProofSection />
  <FinalCTASection />
</main>
```

---

## Design-Details

### Progress-Bars
- Schräge Streifen (diagonal stripes) wie im Original
- Primärfarbe für die Balken
- Prozentanzeige auf dem Balken

### Responsive Verhalten
- Desktop: Volle Tabelle mit allen Spalten
- Mobile: Horizontales Scrollen oder Card-Layout

### Styling
- Konsistent mit dem bestehenden Design-System
- Hervorhebung für "Fix Growth" Zeile (erste Zeile)
- Fazit-Spalte mit Pfeil-Icon (→)

---

## Erwartetes Ergebnis

- Neue Sektion "Das Buch im Vergleich" / "The Book Compared"
- Zeigt 7 Bücher im direkten Vergleich
- 4 Bewertungskategorien mit visuellen Progress-Bars
- Fix Growth als Spitzenreiter hervorgehoben
- Bilingual DE/EN

