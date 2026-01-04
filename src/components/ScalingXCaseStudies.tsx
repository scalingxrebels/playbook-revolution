import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Rocket, 
  Settings, 
  Trophy,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

interface CaseStudy {
  id: string;
  category: {
    en: string;
    de: string;
  };
  metric: string;
  description: {
    en: string;
    de: string;
  };
  details: {
    en: string;
    de: string;
  };
  icon: React.ElementType;
  color: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'revenue',
    category: { en: 'REVENUE ACCELERATION', de: 'REVENUE ACCELERATION' },
    metric: '+425k€',
    description: { en: 'New ARR in 6 months', de: 'Neuer ARR in 6 Monaten' },
    details: {
      en: 'Development of a scalable GTM-Engine for a B2B-SaaS-Startup in expansion phase, achieving rapid revenue growth with a young sales team.',
      de: 'Entwicklung einer skalierbaren GTM-Engine für ein B2B-SaaS-Startup in der Expansionsphase, wodurch mit einem jungen Vertriebsteam ein rasantes Umsatzwachstum erzielt wurde.'
    },
    icon: TrendingUp,
    color: 'text-chart-1'
  },
  {
    id: 'growth',
    category: { en: 'SUSTAINABLE GROWTH', de: 'SUSTAINABLE GROWTH' },
    metric: '46% CAGR',
    description: { en: 'ARR Growth Rate Post Series B', de: 'ARR Growth Rate Post Series B' },
    details: {
      en: 'Scaling B2B-SaaS from €3.6M to €7.7M in 24 months through GTM redesign and AI prototype introduction, increasing market share by +2 percentage points.',
      de: 'Skalierung von B2B-SaaS von 3,6 Mio. € auf 7,7 Mio. € in 24 Monaten durch Neugestaltung der Markteinführungsstrategie und Einführung eines KI-Prototyps, Steigerung des Marktanteils um +2 Prozentpunkte.'
    },
    icon: Rocket,
    color: 'text-chart-2'
  },
  {
    id: 'operations',
    category: { en: 'SCALING OPERATIONS', de: 'SCALING OPERATIONS' },
    metric: '+48%',
    description: { en: 'Efficiency increase (ARR/FTE)', de: 'Effizienzsteigerung (ARR/FTE)' },
    details: {
      en: 'Implemented scaling strategies that increased efficiency and cost discipline while ensuring profitability in a high-burn SaaS model.',
      de: 'Skalierungsstrategien umgesetzt, die die Effizienz und Kostendisziplin erhöhten und gleichzeitig die Rentabilität in einem SaaS-Modell mit hohem Kapitalverbrauch sicherstellten.'
    },
    icon: Settings,
    color: 'text-chart-3'
  },
  {
    id: 'valuation',
    category: { en: 'VALUATION GROWTH', de: 'VALUATION GROWTH' },
    metric: '1.53x',
    description: { en: 'Higher valuation in 15 months', de: 'Höhere Valuation in 15 Mte.' },
    details: {
      en: 'Exit-readiness for PE-funded B2B productivity SaaS platform. Transition from expansive growth to capital-efficient scaling from 50 to 101 FTEs.',
      de: 'Exit-Bereitschaft für eine PE-finanzierte B2B-Produktivitäts-SaaS-Plattform. Umstellung von expansivem Wachstum auf kapitaleffiziente Skalierung von 50 auf 101 Vollzeitmitarbeiter.'
    },
    icon: Trophy,
    color: 'text-accent'
  }
];

const ScalingXCaseStudies: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-accent text-accent">
            {language === 'de' ? 'Echte Ergebnisse' : 'Real Results'}
          </Badge>
          
          <h2 className="font-display text-4xl md:text-5xl italic">
            {language === 'de' 
              ? 'Echter Impact. Schnell.' 
              : 'Real Impact. Fast.'
            }
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Einige Beispiele aus unserer Arbeit'
              : 'Some examples from our work'
            }
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="border-2 border-border bg-card p-8 hover:border-accent transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <Badge variant="secondary" className="text-xs tracking-wider">
                  {study.category[language as 'en' | 'de']}
                </Badge>
                <study.icon className={`w-8 h-8 ${study.color} group-hover:scale-110 transition-transform`} />
              </div>
              
              {/* Metric */}
              <div className="mb-4">
                <div className={`text-5xl md:text-6xl font-bold ${study.color}`}>
                  {study.metric}
                </div>
                <div className="text-lg text-muted-foreground mt-2">
                  {study.description[language as 'en' | 'de']}
                </div>
              </div>
              
              {/* Details */}
              <p className="text-sm text-muted-foreground border-t border-border pt-4">
                {study.details[language as 'en' | 'de']}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-2 border-border bg-card p-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground">25</div>
            <div className="text-sm text-muted-foreground mt-1">
              {language === 'de' ? 'Revenue Mandate' : 'Revenue Mandates'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground">44</div>
            <div className="text-sm text-muted-foreground mt-1">
              {language === 'de' ? 'Growth Mandate' : 'Growth Mandates'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground">42</div>
            <div className="text-sm text-muted-foreground mt-1">
              {language === 'de' ? 'Operations Mandate' : 'Operations Mandates'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground">29</div>
            <div className="text-sm text-muted-foreground mt-1">
              {language === 'de' ? 'Valuation Mandate' : 'Valuation Mandates'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScalingXCaseStudies;
