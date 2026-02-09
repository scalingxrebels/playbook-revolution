import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ThetaIndexRadial from '@/components/ThetaIndexRadial';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowLeft, ArrowRight, TrendingUp, Users, Zap, Target, 
  Calendar, User, Sparkles, ExternalLink, CheckCircle2
} from 'lucide-react';
import { researchCases, getResearchCaseById } from '@/data/cases';

const CaseStudyPage = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  const caseStudy = getResearchCaseById(id || '');
  const currentIndex = researchCases.findIndex(cs => cs.id === id);
  const prevStudy = currentIndex > 0 ? researchCases[currentIndex - 1] : null;
  const nextStudy = currentIndex < researchCases.length - 1 ? researchCases[currentIndex + 1] : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'Case Study Not Found' : 'Case Study nicht gefunden'}
          </h1>
          <Link to="/expertise">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === 'en' ? 'Back to Expertise' : 'Zurück zu Expertise'}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = caseStudy.icon;

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{ background: `radial-gradient(circle at 30% 30%, ${caseStudy.color}, transparent 60%)` }}
        />
        <div className="container mx-auto px-6 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/expertise" className="hover:text-primary transition-colors">
              {language === 'en' ? 'Expertise' : 'Expertise'}
            </Link>
            <span>/</span>
            <span className="text-foreground">{caseStudy.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Company Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${caseStudy.color}20` }}
                >
                  <Icon className="w-8 h-8" style={{ color: caseStudy.color }} />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-display font-bold">{caseStudy.name}</h1>
                  <p className="text-muted-foreground">{caseStudy.focus[language as 'en' | 'de']}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>{language === 'en' ? 'Founded' : 'Gegründet'} {caseStudy.founded}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span>{caseStudy.founder}</span>
                </div>
                {caseStudy.dataSource && (
                  <Badge variant="outline" className="text-xs">
                    {language === 'en' ? 'Source' : 'Quelle'}: {caseStudy.dataSource}
                  </Badge>
                )}
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                {caseStudy.description[language as 'en' | 'de']}
              </p>

              {/* Headline Metric */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 mb-6">
                <p className="text-5xl md:text-6xl font-display font-bold text-primary">
                  {caseStudy.headline.metric}
                </p>
                <p className="text-muted-foreground">
                  {caseStudy.headline.label[language as 'en' | 'de']}
                </p>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-3 gap-4">
                {caseStudy.secondaryMetrics.map((metric, idx) => (
                  <div key={idx} className="text-center p-4 rounded-xl bg-muted/50">
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">
                      {metric.label[language as 'en' | 'de']}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Theta Index */}
            <div className="lg:sticky lg:top-24">
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    {language === 'en' ? 'AI-Native Scaling Index' : 'AI-Native Skalierungs-Index'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <ThetaIndexRadial
                    overall={caseStudy.thetaIndex.overall}
                    c1={caseStudy.thetaIndex.c1}
                    c2={caseStudy.thetaIndex.c2}
                    c3={caseStudy.thetaIndex.c3}
                    c4={caseStudy.thetaIndex.c4}
                  />
                  <div className="mt-6 space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">C1: Strategy</span>
                      <span>{caseStudy.thetaLabels.c1[language as 'en' | 'de']}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">C2: GTM</span>
                      <span>{caseStudy.thetaLabels.c2[language as 'en' | 'de']}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">C3: Execution</span>
                      <span>{caseStudy.thetaLabels.c3[language as 'en' | 'de']}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">C4: Capital</span>
                      <span>{caseStudy.thetaLabels.c4[language as 'en' | 'de']}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-display font-bold mb-8">
            {language === 'en' ? 'Growth Timeline' : 'Wachstums-Timeline'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {caseStudy.growthTimeline.map((item, idx) => (
              <div 
                key={idx}
                className="relative p-6 rounded-xl bg-background border border-border"
              >
                <p className="text-sm text-muted-foreground mb-2">{item.year}</p>
                <p className="text-3xl font-bold">{item.value}</p>
                {item.label && (
                  <Badge variant="secondary" className="mt-2">
                    {item.label}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-display font-bold mb-8">
            {language === 'en' ? 'Key Metrics' : 'Schlüssel-Metriken'}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {caseStudy.keyMetrics.map((metric, idx) => {
              const MetricIcon = metric.icon;
              return (
                <Card key={idx} className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MetricIcon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {metric.label[language as 'en' | 'de']}
                    </span>
                  </div>
                  <p className="text-3xl font-bold">{metric.value}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">
                {language === 'en' ? 'Key Learnings' : 'Wichtige Erkenntnisse'}
              </h2>
              <div className="space-y-4">
                {caseStudy.learnings[language as 'en' | 'de'].map((learning, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>{learning}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">
                {language === 'en' ? 'Strategic Insights' : 'Strategische Einsichten'}
              </h2>
              <div className="space-y-4">
                {caseStudy.strategicInsights[language as 'en' | 'de'].map((insight, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>{insight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {prevStudy ? (
              <Link to={`/case-study/${prevStudy.id}`} className="group">
                <Button variant="ghost" className="gap-2">
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  {prevStudy.name}
                </Button>
              </Link>
            ) : <div />}
            
            <Button onClick={openBookingModal} className="bg-primary text-primary-foreground">
              {language === 'en' ? 'Apply These Learnings' : 'Diese Erkenntnisse anwenden'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            
            {nextStudy ? (
              <Link to={`/case-study/${nextStudy.id}`} className="group">
                <Button variant="ghost" className="gap-2">
                  {nextStudy.name}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      <FilloutBookingModal
        formSlug="inflection-call"
        source="case-study"
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default CaseStudyPage;
