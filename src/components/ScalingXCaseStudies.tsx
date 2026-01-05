import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { 
  TrendingUp, 
  Rocket, 
  Settings, 
  Trophy,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Users,
  Building2,
  Target,
  Lightbulb,
  Quote,
  Calendar
} from 'lucide-react';

interface CaseStudyDetail {
  id: string;
  category: { en: string; de: string };
  metric: string;
  description: { en: string; de: string };
  details: { en: string; de: string };
  icon: React.ElementType;
  color: string;
  // Extended details
  timeline: string;
  teamSize: string;
  industry: { en: string; de: string };
  challenge: { en: string; de: string };
  approach: { en: string[]; de: string[] };
  results: { metric: string; value: string; change: string }[];
  keyLearnings: { en: string[]; de: string[] };
  testimonial?: { 
    quote: { en: string; de: string }; 
    author: string; 
    role: { en: string; de: string };
    company: string;
  };
}

const caseStudies: CaseStudyDetail[] = [
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
    color: 'text-chart-1',
    timeline: '6 months',
    teamSize: '12 → 18 FTEs',
    industry: { en: 'B2B SaaS / HR-Tech', de: 'B2B SaaS / HR-Tech' },
    challenge: {
      en: 'Young sales team with inconsistent pipeline, no repeatable sales motion, founder-led sales hitting ceiling.',
      de: 'Junges Vertriebsteam mit inkonsistenter Pipeline, keine wiederholbare Verkaufsbewegung, vom Gründer geführter Vertrieb stößt an Grenzen.'
    },
    approach: {
      en: [
        'Designed and implemented ICP-based lead scoring system',
        'Built structured sales playbook with 12 battle cards',
        'Introduced weekly pipeline reviews with AI-powered forecasting',
        'Established SDR/AE handoff protocols'
      ],
      de: [
        'ICP-basiertes Lead-Scoring-System entworfen und implementiert',
        'Strukturiertes Sales-Playbook mit 12 Battle Cards erstellt',
        'Wöchentliche Pipeline-Reviews mit KI-gestützter Prognose eingeführt',
        'SDR/AE-Übergabeprotokolle etabliert'
      ]
    },
    results: [
      { metric: 'New ARR', value: '+425k€', change: '+340%' },
      { metric: 'Win Rate', value: '34%', change: '+12pp' },
      { metric: 'Sales Cycle', value: '28 days', change: '-40%' },
      { metric: 'Pipeline Coverage', value: '4.2x', change: '+180%' }
    ],
    keyLearnings: {
      en: [
        'Early-stage teams need structure before scale',
        'ICP clarity drives 3x better conversion',
        'Weekly cadence creates accountability culture'
      ],
      de: [
        'Teams in der Frühphase brauchen Struktur vor Skalierung',
        'ICP-Klarheit führt zu 3x besserer Konversion',
        'Wöchentliche Kadenz schafft Verantwortungskultur'
      ]
    },
    testimonial: {
      quote: {
        en: 'ScalingX transformed our chaotic sales process into a predictable revenue engine. The ROI was visible within 8 weeks.',
        de: 'ScalingX hat unseren chaotischen Vertriebsprozess in eine vorhersehbare Revenue-Engine verwandelt. Der ROI war innerhalb von 8 Wochen sichtbar.'
      },
      author: 'Thomas M.',
      role: { en: 'CEO & Co-Founder', de: 'CEO & Co-Founder' },
      company: 'HR-Tech Startup'
    }
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
    color: 'text-chart-2',
    timeline: '24 months',
    teamSize: '35 → 62 FTEs',
    industry: { en: 'B2B SaaS / Productivity', de: 'B2B SaaS / Produktivität' },
    challenge: {
      en: 'Post-Series B growth stagnation, increasing CAC, product-market fit questions in enterprise segment.',
      de: 'Wachstumsstagnation nach Series B, steigender CAC, Fragen zur Produkt-Markt-Passung im Enterprise-Segment.'
    },
    approach: {
      en: [
        'Complete GTM motion redesign with segment-specific strategies',
        'Introduced AI-powered features to increase product stickiness',
        'Built customer success function from scratch',
        'Implemented land-and-expand playbook for enterprise'
      ],
      de: [
        'Komplette Neugestaltung der GTM-Strategie mit segmentspezifischen Ansätzen',
        'KI-gestützte Features zur Erhöhung der Produktbindung eingeführt',
        'Customer Success Funktion von Grund auf aufgebaut',
        'Land-and-Expand-Playbook für Enterprise implementiert'
      ]
    },
    results: [
      { metric: 'ARR', value: '€7.7M', change: '+114%' },
      { metric: 'NRR', value: '118%', change: '+23pp' },
      { metric: 'Market Share', value: '8.2%', change: '+2pp' },
      { metric: 'Enterprise %', value: '42%', change: '+28pp' }
    ],
    keyLearnings: {
      en: [
        'Post-funding growth requires systematic execution',
        'AI features drive expansion revenue',
        'Enterprise requires dedicated motion'
      ],
      de: [
        'Wachstum nach Finanzierung erfordert systematische Umsetzung',
        'KI-Features treiben Expansion Revenue',
        'Enterprise erfordert dedizierte Strategie'
      ]
    },
    testimonial: {
      quote: {
        en: 'They didn\'t just consult – they embedded with our team and built the systems we needed to scale sustainably.',
        de: 'Sie haben nicht nur beraten – sie haben sich in unser Team integriert und die Systeme aufgebaut, die wir für nachhaltiges Wachstum brauchten.'
      },
      author: 'Sarah K.',
      role: { en: 'COO', de: 'COO' },
      company: 'Productivity SaaS'
    }
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
    color: 'text-chart-3',
    timeline: '12 months',
    teamSize: '78 → 71 FTEs',
    industry: { en: 'B2B SaaS / FinTech', de: 'B2B SaaS / FinTech' },
    challenge: {
      en: 'High burn rate, declining unit economics, board pressure for path to profitability without sacrificing growth.',
      de: 'Hohe Burn Rate, sinkende Unit Economics, Druck des Boards für Weg zur Profitabilität ohne Wachstumseinbußen.'
    },
    approach: {
      en: [
        'Comprehensive operations audit across all functions',
        'AI-powered automation of repetitive processes',
        'Restructured teams around value streams',
        'Implemented OKR system with efficiency metrics'
      ],
      de: [
        'Umfassendes Operations-Audit über alle Funktionen',
        'KI-gestützte Automatisierung repetitiver Prozesse',
        'Teams um Wertströme herum umstrukturiert',
        'OKR-System mit Effizienzmetriken implementiert'
      ]
    },
    results: [
      { metric: 'ARR/FTE', value: '€108k', change: '+48%' },
      { metric: 'Burn Multiple', value: '1.2x', change: '-58%' },
      { metric: 'CAC Payback', value: '14 mo', change: '-6 mo' },
      { metric: 'Gross Margin', value: '78%', change: '+8pp' }
    ],
    keyLearnings: {
      en: [
        'Efficiency and growth are not mutually exclusive',
        'AI automation delivers 10x ROI on process optimization',
        'Right-sizing enables sustainable scaling'
      ],
      de: [
        'Effizienz und Wachstum schließen sich nicht aus',
        'KI-Automatisierung liefert 10x ROI bei Prozessoptimierung',
        'Richtige Größe ermöglicht nachhaltiges Skalieren'
      ]
    },
    testimonial: {
      quote: {
        en: 'We went from burning cash to being operationally profitable while maintaining 40%+ growth. That\'s the ScalingX difference.',
        de: 'Wir sind von Cash-Burning zu operativer Profitabilität übergegangen und haben dabei 40%+ Wachstum beibehalten. Das ist der ScalingX-Unterschied.'
      },
      author: 'Michael R.',
      role: { en: 'CFO', de: 'CFO' },
      company: 'FinTech SaaS'
    }
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
    color: 'text-accent',
    timeline: '15 months',
    teamSize: '50 → 101 FTEs',
    industry: { en: 'B2B SaaS / Enterprise', de: 'B2B SaaS / Enterprise' },
    challenge: {
      en: 'PE investors demanding exit-readiness, inconsistent metrics, need to demonstrate sustainable growth trajectory.',
      de: 'PE-Investoren fordern Exit-Bereitschaft, inkonsistente Metriken, Notwendigkeit nachhaltiger Wachstumstrajektorie.'
    },
    approach: {
      en: [
        'Built investor-grade reporting and KPI dashboards',
        'Standardized all operational processes',
        'Implemented Rule of 40 optimization framework',
        'Prepared data room and due diligence materials'
      ],
      de: [
        'Investor-gerechtes Reporting und KPI-Dashboards aufgebaut',
        'Alle operativen Prozesse standardisiert',
        'Rule of 40 Optimierungs-Framework implementiert',
        'Data Room und Due-Diligence-Materialien vorbereitet'
      ]
    },
    results: [
      { metric: 'Valuation', value: '€45M', change: '+53%' },
      { metric: 'Rule of 40', value: '52%', change: '+18pp' },
      { metric: 'Revenue Quality', value: 'A', change: 'C→A' },
      { metric: 'Exit Readiness', value: '94%', change: '+41pp' }
    ],
    keyLearnings: {
      en: [
        'Exit preparation should start 18-24 months before',
        'Metrics hygiene directly impacts valuation multiples',
        'Operational excellence is the best exit strategy'
      ],
      de: [
        'Exit-Vorbereitung sollte 18-24 Monate vorher beginnen',
        'Metrik-Hygiene beeinflusst direkt Bewertungsmultiples',
        'Operative Exzellenz ist die beste Exit-Strategie'
      ]
    },
    testimonial: {
      quote: {
        en: 'ScalingX prepared us for a successful exit in record time. The valuation uplift alone paid for the engagement 10x over.',
        de: 'ScalingX hat uns in Rekordzeit auf einen erfolgreichen Exit vorbereitet. Allein die Wertsteigerung hat das Engagement 10x refinanziert.'
      },
      author: 'Dr. Klaus W.',
      role: { en: 'CEO', de: 'CEO' },
      company: 'Enterprise SaaS'
    }
  }
];

const ScalingXCaseStudies: React.FC = () => {
  const { language } = useLanguage();
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyDetail | null>(null);

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
              onClick={() => setSelectedStudy(study)}
              className="border-2 border-border bg-card p-8 hover:border-accent transition-all duration-300 group cursor-pointer"
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
              <p className="text-sm text-muted-foreground border-t border-border pt-4 mb-4">
                {study.details[language as 'en' | 'de']}
              </p>

              {/* View Details Link */}
              <div className="flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                {language === 'de' ? 'Details ansehen' : 'View Details'}
                <ArrowUpRight className="w-4 h-4" />
              </div>
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

      {/* Detail Dialog */}
      <Dialog open={!!selectedStudy} onOpenChange={() => setSelectedStudy(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedStudy && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-xs tracking-wider">
                    {selectedStudy.category[language as 'en' | 'de']}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {selectedStudy.industry[language as 'en' | 'de']}
                  </Badge>
                </div>
                <DialogTitle className="text-3xl md:text-4xl font-display">
                  <span className={selectedStudy.color}>{selectedStudy.metric}</span>
                  <span className="text-muted-foreground text-xl ml-3">
                    {selectedStudy.description[language as 'en' | 'de']}
                  </span>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-8 mt-6">
                {/* Meta Info */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        {language === 'de' ? 'Zeitraum' : 'Timeline'}
                      </div>
                      <div className="font-semibold">{selectedStudy.timeline}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        {language === 'de' ? 'Team' : 'Team Size'}
                      </div>
                      <div className="font-semibold">{selectedStudy.teamSize}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Building2 className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        {language === 'de' ? 'Branche' : 'Industry'}
                      </div>
                      <div className="font-semibold text-sm">{selectedStudy.industry[language as 'en' | 'de']}</div>
                    </div>
                  </div>
                </div>

                {/* Challenge */}
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-semibold mb-3">
                    <Target className="w-5 h-5 text-destructive" />
                    {language === 'de' ? 'Herausforderung' : 'Challenge'}
                  </h4>
                  <p className="text-muted-foreground">
                    {selectedStudy.challenge[language as 'en' | 'de']}
                  </p>
                </div>

                {/* Approach */}
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-semibold mb-3">
                    <Settings className="w-5 h-5 text-accent" />
                    {language === 'de' ? 'Ansatz' : 'Approach'}
                  </h4>
                  <ul className="space-y-2">
                    {selectedStudy.approach[language as 'en' | 'de'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-chart-2 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-semibold mb-4">
                    <TrendingUp className="w-5 h-5 text-chart-1" />
                    {language === 'de' ? 'Ergebnisse' : 'Results'}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedStudy.results.map((result, i) => (
                      <div key={i} className="p-4 border border-border rounded-lg text-center">
                        <div className="text-2xl font-bold text-foreground">{result.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{result.metric}</div>
                        <Badge variant="outline" className="mt-2 text-chart-2 border-chart-2">
                          {result.change}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Learnings */}
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-semibold mb-3">
                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                    {language === 'de' ? 'Key Learnings' : 'Key Learnings'}
                  </h4>
                  <ul className="space-y-2">
                    {selectedStudy.keyLearnings[language as 'en' | 'de'].map((learning, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-accent font-bold">{i + 1}.</span>
                        <span className="text-muted-foreground">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                {selectedStudy.testimonial && (
                  <div className="bg-muted/30 border border-border rounded-lg p-6">
                    <Quote className="w-8 h-8 text-accent/50 mb-4" />
                    <blockquote className="text-lg italic text-foreground mb-4">
                      "{selectedStudy.testimonial.quote[language as 'en' | 'de']}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-bold">
                          {selectedStudy.testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold">{selectedStudy.testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">
                          {selectedStudy.testimonial.role[language as 'en' | 'de']} @ {selectedStudy.testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                  <Button 
                    className="flex-1"
                    onClick={() => {
                      setSelectedStudy(null);
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    {language === 'de' ? 'Beratungsgespräch buchen' : 'Book Consultation'}
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedStudy(null)}>
                    {language === 'de' ? 'Schließen' : 'Close'}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ScalingXCaseStudies;
