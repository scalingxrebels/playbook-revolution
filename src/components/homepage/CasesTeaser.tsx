import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const cases = {
  de: [
    {
      context: 'Series B SaaS · €15M ARR · DACH',
      metric: 'CAC von €12k auf €5k in 90 Tagen.',
      insight: 'Der Engpass war nicht das Budget — es war die fehlende Hypothesen-Maschine.',
    },
    {
      context: 'Series A · €8M ARR · B2B SaaS',
      metric: 'ARR +53% in 17 Monaten. Rule of 40: von 11 auf 29.6.',
      insight: 'Drei Mechanismen. Einer war nicht gebaut.',
    },
    {
      context: 'Series B · Pre-Exit',
      metric: 'ARR per FTE +48%. Series C ready in 17 Monaten.',
      insight: 'Die Lücke war zwischen Strategie und Ops.',
    },
  ],
  en: [
    {
      context: 'Series B SaaS · €15M ARR · DACH',
      metric: 'CAC from €12k to €5k in 90 days.',
      insight: 'The bottleneck wasn\'t budget — it was the missing hypothesis engine.',
    },
    {
      context: 'Series A · €8M ARR · B2B SaaS',
      metric: 'ARR +53% in 17 months. Rule of 40: from 11 to 29.6.',
      insight: 'Three mechanisms. One wasn\'t built.',
    },
    {
      context: 'Series B · Pre-Exit',
      metric: 'ARR per FTE +48%. Series C ready in 17 months.',
      insight: 'The gap was between strategy and ops.',
    },
  ],
};

const CasesTeaser: React.FC = () => {
  const { language } = useLanguage();
  const items = cases[language] || cases.de;

  return (
    <section className="py-24 md:py-32 bg-background noise">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Overline */}
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4">
          {language === 'de' ? 'ERGEBNISSE AUS DER PRAXIS' : 'REAL-WORLD RESULTS'}
        </p>

        {/* Headline */}
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight">
          {language === 'de' ? (
            <>Was passiert wenn<br />der Hebel stimmt.</>
          ) : (
            <>What happens when<br />the lever is right.</>
          )}
        </h2>

        {/* Subline */}
        <p className="text-muted-foreground text-lg mb-12">
          {language === 'de' ? 'Anonymisierte Ergebnisse. Gleiche Methode.' : 'Anonymized results. Same method.'}
        </p>

        {/* Case Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {items.map((c, i) => (
            <div
              key={i}
              className="bg-card/50 border border-border/50 p-8 flex flex-col"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                {c.context}
              </p>
              <p className="text-foreground font-bold text-lg mb-4 leading-snug">
                {c.metric}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
                {c.insight}
              </p>
            </div>
          ))}
        </div>

        {/* Link to all cases */}
        <Link
          to="/cases"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary hover:gap-3 transition-all"
        >
          {language === 'de' ? 'Alle Cases ansehen' : 'View all cases'}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default CasesTeaser;
