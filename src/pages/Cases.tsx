import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  challenge: { de: string; en: string };
  result: { de: string; en: string };
  metrics: { label: string; value: string }[];
  gradient: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'techscale-ai',
    company: 'TechScale AI',
    industry: 'B2B SaaS',
    challenge: { 
      de: 'Stagnation bei €15M ARR trotz Product-Market Fit',
      en: 'Stagnation at €15M ARR despite Product-Market Fit'
    },
    result: {
      de: '3.2x ARR in 18 Monaten durch AI-native GTM',
      en: '3.2x ARR in 18 months through AI-native GTM'
    },
    metrics: [
      { label: 'ARR Growth', value: '3.2x' },
      { label: 'Time to Result', value: '18 Mo' },
      { label: 'Team Size', value: '+12%' }
    ],
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    id: 'dataflow-systems',
    company: 'DataFlow Systems',
    industry: 'Enterprise Software',
    challenge: {
      de: 'Linear wachsende Kosten bei Skalierung',
      en: 'Linearly growing costs during scaling'
    },
    result: {
      de: '67% Kostenreduktion durch AI Operations',
      en: '67% cost reduction through AI Operations'
    },
    metrics: [
      { label: 'Cost Reduction', value: '67%' },
      { label: 'Efficiency', value: '+340%' },
      { label: 'ROI', value: '12x' }
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'scaleup-ventures',
    company: 'ScaleUp Ventures',
    industry: 'FinTech',
    challenge: {
      de: 'Bottleneck in der Product Development Pipeline',
      en: 'Bottleneck in the product development pipeline'
    },
    result: {
      de: '5x schnellere Feature Velocity mit AI-augmented Teams',
      en: '5x faster feature velocity with AI-augmented teams'
    },
    metrics: [
      { label: 'Feature Velocity', value: '5x' },
      { label: 'Time to Market', value: '-70%' },
      { label: 'Quality Score', value: '+45%' }
    ],
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'growth-dynamics',
    company: 'Growth Dynamics',
    industry: 'MarTech',
    challenge: {
      de: 'Ineffiziente Sales Cycles trotz starkem Produkt',
      en: 'Inefficient sales cycles despite strong product'
    },
    result: {
      de: 'Sales Cycle von 90 auf 21 Tage reduziert',
      en: 'Sales cycle reduced from 90 to 21 days'
    },
    metrics: [
      { label: 'Sales Cycle', value: '-77%' },
      { label: 'Win Rate', value: '+89%' },
      { label: 'Deal Size', value: '+34%' }
    ],
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    id: 'nexgen-analytics',
    company: 'NexGen Analytics',
    industry: 'Data & Analytics',
    challenge: {
      de: 'Skalierung des Customer Success bei Enterprise Kunden',
      en: 'Scaling customer success with enterprise clients'
    },
    result: {
      de: 'NRR von 105% auf 142% gesteigert',
      en: 'NRR increased from 105% to 142%'
    },
    metrics: [
      { label: 'NRR', value: '142%' },
      { label: 'Churn', value: '-62%' },
      { label: 'Expansion', value: '+180%' }
    ],
    gradient: 'from-rose-500 to-pink-500'
  }
];

const Cases: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              {language === 'de' ? 'Case Studies' : 'Case Studies'}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              {language === 'de' ? 'Transformationen,' : 'Transformations,'}
              <span className="block text-primary italic">
                {language === 'de' ? 'nicht Theorien' : 'not theories'}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {language === 'de'
                ? 'Echte Ergebnisse von Unternehmen, die den Sprung von linearem zu superlinearem Wachstum geschafft haben.'
                : 'Real results from companies that made the leap from linear to superlinear growth.'}
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <Card className="p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">22+</p>
              <p className="text-sm text-muted-foreground">
                {language === 'de' ? 'Transformationen' : 'Transformations'}
              </p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">8.3x</p>
              <p className="text-sm text-muted-foreground">
                {language === 'de' ? 'Ø ROI' : 'Avg ROI'}
              </p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">€2.1B</p>
              <p className="text-sm text-muted-foreground">
                {language === 'de' ? 'Wert geschaffen' : 'Value Created'}
              </p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">94%</p>
              <p className="text-sm text-muted-foreground">
                {language === 'de' ? 'Erfolgsrate' : 'Success Rate'}
              </p>
            </Card>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Card 
                key={study.id}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50"
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${study.gradient}`} />
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{study.company}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {study.industry}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        {language === 'de' ? 'Challenge' : 'Challenge'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {study.challenge[language as 'de' | 'en']}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        {language === 'de' ? 'Ergebnis' : 'Result'}
                      </p>
                      <p className="text-sm font-medium">
                        {study.result[language as 'de' | 'en']}
                      </p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center p-2 bg-muted/50 rounded-lg">
                        <p className="text-lg font-bold text-primary">{metric.value}</p>
                        <p className="text-xs text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <Link to={`/case-study/${study.id}`}>
                    <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                      {language === 'de' ? 'Case Study lesen' : 'Read Case Study'}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                {language === 'de' 
                  ? 'Bereit für Ihre Transformation?' 
                  : 'Ready for your transformation?'}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                {language === 'de'
                  ? 'Lassen Sie uns analysieren, wie wir Ihr Unternehmen auf superlineares Wachstum vorbereiten können.'
                  : 'Let us analyze how we can prepare your company for superlinear growth.'}
              </p>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground shadow-brutal-sm hover-brutal"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {language === 'de' ? 'Erstgespräch buchen' : 'Book Initial Call'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cases;
