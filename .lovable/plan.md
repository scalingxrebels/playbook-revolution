

# Case Detail Landing Pages: Hero Stats, Nummerierung & CTA

## Analyse

### 1. Hero Stats (aktuell 4, gewünscht 3)
**Datei:** `src/pages/CaseDetail.tsx` (Zeilen 68-78)

Aktuell werden alle 4 `heroMetrics` angezeigt. Die wichtigsten 3 aus Zielgruppen-Perspektive (CEO/Entscheider) sollten selektiert werden - typischerweise:
- Revenue/ARR Impact
- Effizienz-Metrik (CAC, Conversion, etc.)
- ROI/Zeitbezogene Metrik

### 2. Nummerierung (Sektion 2 startet mit "2")
Aktuelle Nummerierung ist unlogisch:
| Sektion | Aktuell | Sollte sein |
|---------|---------|-------------|
| The Situation | 2 | 1 |
| What We Did | 3 | 2 |
| The Results | 4 | 3 |
| Key Lessons | 5 | 4 |
| Related Solutions | 6 | 5 |
| Next Steps | - | 6 |

### 3. CTA inkonsistent mit anderen Seiten
Aktueller CTA (Zeilen 432-483) ist ein einfacher Gradient ohne Deep Space Design.

**Standard-CTA Pattern** (aus Playbooks/Research):
- Deep Space Background mit 3-Layer Parallax
- TwinklingStars Animation
- Gradient Badge mit Sparkles Icon
- Trust Signals als Badges mit Checkmarks
- Zwei CTAs: Primary (Gradient) + Secondary (Outline)
- Stats Row am Ende

## Lösung

### A. Hero: Nur 3 Stats anzeigen (slice)

```tsx
// Zeile 68-78: Nur die ersten 3 Metriken anzeigen
<div className="grid grid-cols-3 gap-4 mb-8">
  {caseStudy.heroMetrics.slice(0, 3).map((metric, idx) => (
    // ...
  ))}
</div>
```

### B. Nummerierung korrigieren

| Datei | Zeile | Änderung |
|-------|-------|----------|
| CaseDetail.tsx | 115 | `>2<` → `>1<` |
| CaseDetail.tsx | 179 | `>3<` → `>2<` |
| CaseDetail.tsx | 258 | `>4<` → `>3<` |
| CaseDetail.tsx | 324 | `>5<` → `>4<` |
| CaseDetail.tsx | 371 | `>6<` → `>5<` |

### C. CTA komplett ersetzen (Deep Space Pattern)

Neuer CTA (Zeilen 432-483) basierend auf PlaybookFinalCTASection:

```tsx
{/* SECTION 6: FINAL CTA - Deep Space Design */}
<section className="relative py-24 md:py-32 overflow-hidden">
  {/* Deep Space Background */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
  <TwinklingStars />
  
  {/* Radial Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
  
  <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
    {/* Badge */}
    <Badge variant="gradient" className="mb-8">
      <Sparkles className="w-4 h-4 mr-2" />
      {language === 'de' ? 'Bereit für ähnliche Ergebnisse?' : 'Ready for Similar Results?'}
    </Badge>
    
    {/* Headline */}
    <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white">
      {language === 'de' ? 'Ähnliche Transformation für Ihr Unternehmen?' : 'Similar Transformation for Your Company?'}
    </h2>
    
    {/* Subline */}
    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
      {language === 'de'
        ? 'Wir helfen SaaS-Unternehmen, ihre Wachstumsblocker zu finden und systematisch zu beheben.'
        : 'We help SaaS companies find and systematically fix their growth blockers.'}
    </p>
    
    {/* Trust Signals */}
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {[
        { en: '30 min, free', de: '30 Min, kostenlos' },
        { en: 'No commitment', de: 'Unverbindlich' },
        { en: 'Concrete next steps', de: 'Konkrete nächste Schritte' },
      ].map((signal, i) => (
        <Badge key={i} variant="secondary" className="gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90">
          <CheckCircle2 className="w-3 h-3 text-green-400" />
          {language === 'de' ? signal.de : signal.en}
        </Badge>
      ))}
    </div>
    
    {/* CTAs */}
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Button 
        size="xl" 
        className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 uppercase tracking-wide shadow-accent-glow"
        onClick={() => window.open('https://cal.com/scalingx/inflection-call', '_blank')}
      >
        {language === 'de' ? 'Inflection Call buchen' : 'Book Inflection Call'}
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
      {caseStudy.downloadUrl && (
        <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10" asChild>
          <a href={caseStudy.downloadUrl} download>
            <Download className="w-4 h-4 mr-2" />
            {language === 'de' ? 'Case Study PDF' : 'Case Study PDF'}
          </a>
        </Button>
      )}
    </div>
    
    {/* Stats Row */}
    <div className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/10">
      {[
        { value: '80+', label: language === 'de' ? 'Unternehmen skaliert' : 'Companies Scaled' },
        { value: '€2.5B+', label: language === 'de' ? 'Valuation managed' : 'Valuation Managed' },
        { value: '92%', label: language === 'de' ? 'Erfolgsrate' : 'Success Rate' },
      ].map((stat, i) => (
        <div key={i} className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
          <p className="text-sm text-gray-400">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

## Technische Details

### Neue Imports
```tsx
import { Sparkles, CheckCircle2 } from 'lucide-react';
```

### Geänderte Dateien

| Datei | Änderung |
|-------|----------|
| `src/pages/CaseDetail.tsx` | Hero: `.slice(0, 3)`, Nummerierung 1-5, neuer Deep Space CTA |

## Ergebnis

- Hero zeigt nur die 3 wichtigsten Metriken
- Logische Nummerierung 1-5 für alle Sektionen
- CTA visuell konsistent mit Solutions, Playbooks und Expertise
- Trust Signals und Stats entsprechen dem Brand-Standard (80+/€2.5B+/92%)

