import React from 'react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ThreeLevelsData } from '@/data/research/types';
import { Target, Zap, Layers } from 'lucide-react';

interface ResearchThreeLevelsSectionProps {
  data: ThreeLevelsData;
}

const levelIcons = {
  1: Zap,
  2: Layers,
  3: Target,
};

const levelColorClasses = {
  amber: {
    border: 'border-amber-500/50',
    borderLeft: 'border-l-amber-500',
    bg: 'bg-amber-500/10',
    text: 'text-amber-500',
    badge: 'border-amber-500/50 text-amber-500',
    hover: 'hover:bg-amber-500/5',
  },
  blue: {
    border: 'border-blue-500/50',
    borderLeft: 'border-l-blue-500',
    bg: 'bg-blue-500/10',
    text: 'text-blue-500',
    badge: 'border-blue-500/50 text-blue-500',
    hover: 'hover:bg-blue-500/5',
  },
  emerald: {
    border: 'border-emerald-500/50',
    borderLeft: 'border-l-emerald-500',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-500',
    badge: 'border-emerald-500/50 text-emerald-500',
    hover: 'hover:bg-emerald-500/5',
  },
};

const ResearchThreeLevelsSection: React.FC<ResearchThreeLevelsSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Layers className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wide">
              {language === 'de' ? 'Das Framework' : 'The Framework'}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {data.headline[language]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {data.subheadline[language]}
          </p>
        </div>

        {/* Level Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {data.levels.map((level, index) => {
            const Icon = levelIcons[level.level];
            const colors = levelColorClasses[level.color];
            
            return (
              <div
                key={level.level}
                className={`relative p-6 rounded-2xl border-2 border-l-4 ${colors.border} ${colors.borderLeft} bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${colors.hover}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Level Badge */}
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className={colors.badge}>
                    Level {level.level}
                  </Badge>
                  {level.level === 3 && (
                    <Badge className="bg-emerald-500 text-white">
                      Target
                    </Badge>
                  )}
                </div>

                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${colors.bg}`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{level.name[language]}</h3>
                    <p className="text-sm text-muted-foreground">{level.tagline[language]}</p>
                  </div>
                </div>

                {/* What it looks like */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">
                    {language === 'en' ? 'What it looks like:' : 'Wie es aussieht:'}
                  </h4>
                  <ul className="space-y-1">
                    {level.whatItLooksLike.map((item, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className={colors.text}>•</span>
                        {item[language]}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What we observed */}
                <div className="mb-6 p-4 rounded-lg bg-muted/50">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">
                    {language === 'en' ? 'What we observed:' : 'Was wir beobachteten:'}
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>{level.whatWeObserved.productivity[language]}</li>
                    <li>{level.whatWeObserved.timeToRevenue[language]}</li>
                    <li className="font-medium">{level.whatWeObserved.revenuePerEmployee[language]}</li>
                  </ul>
                </div>

                {/* Example */}
                <div className="text-sm">
                  <span className="text-muted-foreground">
                    {language === 'en' ? 'Example: ' : 'Beispiel: '}
                  </span>
                  <span className="font-medium">{level.example[language]}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                {data.comparisonTable.headers.map((header, i) => (
                  <th 
                    key={i} 
                    className={`py-3 px-4 text-left font-semibold ${i === 0 ? '' : 'text-center'}`}
                  >
                    {header[language]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.comparisonTable.rows.map((row, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium">{row.dimension[language]}</td>
                  <td className="py-3 px-4 text-center text-amber-500">{row.level1[language]}</td>
                  <td className="py-3 px-4 text-center text-blue-500">{row.level2[language]}</td>
                  <td className="py-3 px-4 text-center text-emerald-500 font-medium">{row.level3[language]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-6 italic">
          {language === 'en' 
            ? 'Note: Revenue/employee figures are observed correlations, not determinants.'
            : 'Hinweis: Umsatz/Mitarbeiter-Zahlen sind beobachtete Korrelationen, keine Determinanten.'
          }
        </p>
      </div>
    </section>
  );
};

export default ResearchThreeLevelsSection;
