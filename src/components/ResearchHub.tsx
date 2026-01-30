import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScalingXCaseStudies from '@/components/ScalingXCaseStudies';
import SharedHero from '@/components/shared/SharedHero';
import { Link } from 'react-router-dom';
import { 
  Dna, Rocket, Target, Building2, 
  Lightbulb, BarChart3, ChevronRight
} from 'lucide-react';

interface ResearchCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  titleDe: string;
  tagline: string;
  taglineDe: string;
  description: string;
  descriptionDe: string;
  keyInsight: string;
  keyInsightDe: string;
  stats: string;
  ctaText: string;
  ctaTextDe: string;
  link: string;
}

const researchCards: ResearchCard[] = [
  {
    id: 'amf',
    icon: <Dna className="w-6 h-6" />,
    title: 'AI Maturity Framework',
    titleDe: 'AI Maturity Framework',
    tagline: 'The Three Levels of AI Maturity',
    taglineDe: 'Die drei Stufen der AI-Reife',
    description: 'We analyzed how 22 companies use AI and found 3 distinct levels: AI-Powered (tools), AI-Enabled (workflows), AI-Native (architecture). Companies at Level 3 scale 8.2x faster.',
    descriptionDe: 'Wir haben analysiert, wie 22 Unternehmen AI nutzen und 3 verschiedene Stufen gefunden: AI-Powered (Tools), AI-Enabled (Workflows), AI-Native (Architektur). Unternehmen auf Level 3 skalieren 8.2x schneller.',
    keyInsight: 'AI Maturity predicts Time to €100M ARR',
    keyInsightDe: 'AI-Reife sagt Zeit bis €100M ARR voraus',
    stats: 'n=22 companies | 3 levels | 6 dimensions',
    ctaText: 'Read Research',
    ctaTextDe: 'Forschung lesen',
    link: '/expertise/amf'
  },
  {
    id: 'anst',
    icon: <Rocket className="w-6 h-6" />,
    title: 'AI-Native Scaling Theory',
    titleDe: 'AI-Native Scaling Theory',
    tagline: 'Why AI-Native Companies Scale 8.2x Faster',
    taglineDe: 'Warum AI-Native Unternehmen 8.2x schneller skalieren',
    description: 'We studied 22 AI-native companies to understand why they reach €100M ARR in 8-18 months (vs. 60-84 months for traditional startups). The answer: Strategy × Setup × Execution × Operationalization × AI Maturity.',
    descriptionDe: 'Wir haben 22 AI-native Unternehmen untersucht, um zu verstehen, warum sie €100M ARR in 8-18 Monaten erreichen (vs. 60-84 Monate für traditionelle Startups). Die Antwort: Strategy × Setup × Execution × Operationalization × AI Maturity.',
    keyInsight: 'Scaling success = 4 Capabilities × AI Multiplier',
    keyInsightDe: 'Scaling-Erfolg = 4 Capabilities × AI Multiplier',
    stats: 'n=22 companies | 8-18 months to €100M | 4 capabilities',
    ctaText: 'Read Research',
    ctaTextDe: 'Forschung lesen',
    link: '/expertise/anst'
  },
  {
    id: 'bottleneck',
    icon: <Target className="w-6 h-6" />,
    title: 'Bottleneck Framework',
    titleDe: 'Bottleneck Framework',
    tagline: "What's Blocking Your Growth?",
    taglineDe: 'Was blockiert dein Wachstum?',
    description: 'We found that 36% of scaling bottlenecks are in Setup (org structure, systems), 23% in Strategy, 18% in Execution, 23% in Operationalization. Fix the bottleneck, unlock growth.',
    descriptionDe: 'Wir haben festgestellt, dass 36% der Scaling-Engpässe im Setup (Org-Struktur, Systeme) liegen, 23% in Strategy, 18% in Execution, 23% in Operationalization. Behebe den Engpass, entfessle Wachstum.',
    keyInsight: 'Your weakest capability determines your growth',
    keyInsightDe: 'Deine schwächste Capability bestimmt dein Wachstum',
    stats: '4 capabilities | 8 dimensions | 0-1 scoring',
    ctaText: 'Diagnose Your Bottleneck',
    ctaTextDe: 'Diagnose deinen Engpass',
    link: '/tools/bottleneck-diagnosis'
  },
  {
    id: 'architecture',
    icon: <Building2 className="w-6 h-6" />,
    title: 'The Unified Framework',
    titleDe: 'Das Unified Framework',
    tagline: 'How It All Fits Together',
    taglineDe: 'Wie alles zusammenpasst',
    description: 'We integrated AI Maturity, Scaling Theory, and Bottleneck Framework into one unified system. Use it to diagnose your current state, identify bottlenecks, and plan your transformation.',
    descriptionDe: 'Wir haben AI Maturity, Scaling Theory und Bottleneck Framework in ein einheitliches System integriert. Nutze es, um deinen aktuellen Stand zu diagnostizieren, Engpässe zu identifizieren und deine Transformation zu planen.',
    keyInsight: 'One framework, three perspectives',
    keyInsightDe: 'Ein Framework, drei Perspektiven',
    stats: '3 frameworks unified | 250,000+ words',
    ctaText: 'Explore Framework',
    ctaTextDe: 'Framework erkunden',
    link: '/expertise/architecture'
  }
];

const researchStats = [
  { 
    value: '250,000+', 
    label: { en: 'Words', de: 'Wörter' }, 
    sublabel: { en: 'of research', de: 'Forschung' },
    color: 'primary' as const 
  },
  { 
    value: '22+', 
    label: { en: 'AI-Native Companies', de: 'AI-Native Unternehmen' }, 
    sublabel: { en: 'analyzed', de: 'analysiert' },
    color: 'accent' as const 
  },
  { 
    value: '3', 
    label: { en: 'Frameworks', de: 'Frameworks' }, 
    sublabel: { en: 'developed', de: 'entwickelt' },
    color: 'primary' as const 
  },
  { 
    value: 'OPEN SOURCE', 
    label: { en: 'Collaborative', de: 'Kollaborativ' }, 
    sublabel: { en: 'not-peer-reviewed (yet)', de: 'noch nicht peer-reviewed' },
    color: 'accent' as const 
  },
];

const ResearchHub: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      {/* Hero - Standalone */}
      <SharedHero
        overlineEn="Expertise × Speed = Impact"
        overlineDe="Expertise × Speed = Impact"
        headlineLine1En="The Science Behind"
        headlineLine1De="Die Wissenschaft hinter"
        headlineLine2En="AI-Native Scaling"
        headlineLine2De="AI-Native Scaling"
        subheadlineEn="We analyzed 22 AI-native companies (Midjourney, Perplexity, Cursor, etc.) to understand why they scale 8.2x faster than traditional startups. Here's what we found."
        subheadlineDe="Wir haben 22 AI-native Unternehmen (Midjourney, Perplexity, Cursor, etc.) analysiert, um zu verstehen, warum sie 8.2x schneller skalieren als traditionelle Startups. Das haben wir herausgefunden."
        stats={researchStats}
      />

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container max-w-7xl mx-auto px-6">
          
          {/* Section Headline */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              {language === 'de' ? 'Unsere Forschung' : 'Our Research'}
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === 'de' 
                ? 'Vier Frameworks, die AI-native Scaling erklären'
                : 'Four frameworks that explain AI-native scaling'}
            </p>
          </div>

          {/* 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {researchCards.map(card => (
              <Card 
                key={card.id}
                className="p-6 glass border-border/50 hover:border-accent/50 hover:shadow-[0_0_30px_hsl(var(--accent)/0.15)] transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center text-accent-foreground flex-shrink-0">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">
                        {language === 'de' ? card.titleDe : card.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'de' ? card.taglineDe : card.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {language === 'de' ? card.descriptionDe : card.description}
                  </p>

                  {/* Key Insight */}
                  <div className="flex items-start gap-2 mb-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <Lightbulb className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">
                      {language === 'de' ? card.keyInsightDe : card.keyInsight}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>{card.stats}</span>
                  </div>

                  {/* CTA */}
                  <Link to={card.link}>
                    <Button className="w-full bg-gradient-accent hover:opacity-90 group">
                      {language === 'de' ? card.ctaTextDe : card.ctaText}
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Executive Summary Section */}
          <Card className="p-8 glass border-accent/20 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">
                {language === 'de' ? 'Executive Summary' : 'Executive Summary'}
              </h2>
              <p className="text-muted-foreground">
                {language === 'de' 
                  ? 'Die wichtigsten Erkenntnisse aus 250,000+ Wörtern Forschung'
                  : 'The key insights from 250,000+ words of research'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">C₁-C₄</span>
                </div>
                <h3 className="font-bold mb-2">{language === 'de' ? '4 Capabilities' : '4 Capabilities'}</h3>
                <p className="text-sm text-muted-foreground">
                  Strategy, Setup, Execution, Operationalization
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">8D</span>
                </div>
                <h3 className="font-bold mb-2">{language === 'de' ? '8 Dimensionen' : '8 Dimensions'}</h3>
                <p className="text-sm text-muted-foreground">
                  GTM, Product, Ops, Finance, Talent, Tech, Data, Culture
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">θ</span>
                </div>
                <h3 className="font-bold mb-2">θ_index</h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'de' 
                    ? 'AI-Maturity Score mit r=0.89 Prädiktivität'
                    : 'AI-Maturity score with r=0.89 predictivity'}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">L3</span>
                </div>
                <h3 className="font-bold mb-2">{language === 'de' ? '3 Levels' : '3 Levels'}</h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'de' 
                    ? 'Linear → Sublinear → Superlinear'
                    : 'Linear → Sublinear → Superlinear'}
                </p>
              </div>
            </div>
          </Card>

          {/* Case Studies Section */}
          <div id="cases" className="scroll-mt-24">
            <ScalingXCaseStudies />
          </div>

          {/* CTA Section */}
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">
              {language === 'de' ? 'Möchtest du die Forschung anwenden?' : 'Want to Apply the Research?'}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {language === 'de' 
                ? 'Buche einen Diagnose-Call, um deine θ_index zu berechnen und einen personalisierten Scaling-Plan zu erhalten.'
                : 'Book a diagnostic call to calculate your θ_index and get a personalized scaling plan.'}
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-gradient-accent hover:opacity-90">
                {language === 'de' ? 'Diagnose-Call buchen' : 'Book Diagnostic Call'}
              </Button>
              <Button size="lg" variant="outline">
                {language === 'de' ? 'Alle Papers herunterladen' : 'Download All Papers'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchHub;
