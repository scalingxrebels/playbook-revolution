import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Download, Calendar, TrendingUp, Quote, Lightbulb, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import TwinklingStars from '@/components/TwinklingStars';
import { getCaseStudyBySlug, ClientCaseStudy } from '@/data/cases';

const CaseDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  
  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;
  
  if (!caseStudy) {
    return <Navigate to="/cases" replace />;
  }

  const t = (text: { en: string; de: string }) => language === 'de' ? text.de : text.en;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* SECTION 1: HERO */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-background" />
        <TwinklingStars />
        
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          {/* Back Link */}
          <Link 
            to="/cases" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'de' ? 'Zurück zu Cases' : 'Back to Cases'}
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">{caseStudy.stage}</Badge>
            <Badge variant="outline">{caseStudy.industry}</Badge>
            <Badge variant="muted">{caseStudy.timeline}</Badge>
          </div>

          {/* Headline */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t(caseStudy.headline)}
          </h1>

          {/* Challenge */}
          <p className="text-lg text-muted-foreground mb-8">
            {t(caseStudy.challenge)}
          </p>

          {/* Hero Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {caseStudy.heroMetrics.map((metric, idx) => (
              <Card key={idx} className="p-4 text-center bg-card/50 backdrop-blur border-primary/20">
                <p className="text-2xl md:text-3xl font-bold text-primary">{metric.impact}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{metric.label}</p>
                <p className="text-[10px] text-muted-foreground/70 mt-1">
                  {metric.before} → {metric.after}
                </p>
              </Card>
            ))}
          </div>

          {/* Investment & ROI Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 p-4 bg-muted/30 rounded-xl mb-6">
            <span className="text-sm">
              <span className="text-muted-foreground">{language === 'de' ? 'Investment:' : 'Investment:'}</span>{' '}
              <span className="font-semibold">{caseStudy.investment}</span>
            </span>
            <span className="text-sm flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              <span className="text-muted-foreground">ROI:</span>{' '}
              <span className="font-semibold text-emerald-500">{caseStudy.roi}</span>
            </span>
            <span className="text-sm">
              <span className="text-muted-foreground">{language === 'de' ? 'Dauer:' : 'Timeline:'}</span>{' '}
              <span className="font-semibold">{caseStudy.timeline}</span>
            </span>
          </div>

          {/* Download CTA */}
          {caseStudy.downloadUrl && (
            <div className="flex justify-center">
              <Button asChild variant="outline" size="lg">
                <a href={caseStudy.downloadUrl} download>
                  <Download className="w-5 h-5 mr-2" />
                  {language === 'de' ? 'Case Study PDF herunterladen' : 'Download Case Study PDF'}
                </a>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 2: THE SITUATION */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-mono text-primary">2</span>
            {language === 'de' ? 'Die Situation' : 'The Situation'}
          </h2>

          {/* The Company */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 text-primary">
              {language === 'de' ? 'Das Unternehmen' : 'The Company'}
            </h3>
            <p className="text-muted-foreground">{t(caseStudy.companyDescription)}</p>
          </div>

          {/* The Crisis Story */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 text-primary">
              {language === 'de' ? 'Die Krise' : 'The Crisis'}
            </h3>
            <Card className="p-6 bg-card/50 border-l-4 border-l-orange-500">
              <p className="text-foreground whitespace-pre-line leading-relaxed">
                {t(caseStudy.crisisStory)}
              </p>
            </Card>
          </div>

          {/* The Problem */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 text-primary">
              {language === 'de' ? 'Das Problem' : 'The Problem'}
            </h3>
            <p className="text-muted-foreground mb-4">{t(caseStudy.problemDescription)}</p>
            
            <div className="space-y-4">
              {caseStudy.brokenAreas.map((area, idx) => (
                <Card key={idx} className="p-4 bg-card/50">
                  <h4 className="font-semibold mb-2">{idx + 1}. {t(area.area)}</h4>
                  <ul className="space-y-1">
                    {area.symptoms.map((symptom, sIdx) => (
                      <li key={sIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        {t(symptom)}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Situation Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {caseStudy.situationMetrics.map((metric, idx) => (
              <div key={idx} className="text-center p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                <p className="text-lg font-bold text-red-500">{metric.before}</p>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE DID */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-mono text-primary">3</span>
            {language === 'de' ? 'Was wir gemacht haben' : 'What We Did'}
          </h2>

          {/* The Approach */}
          <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
            <p className="text-foreground">{t(caseStudy.approach)}</p>
          </Card>

          {/* Timeline Visual */}
          <div className="flex items-center justify-between mb-8 p-4 bg-muted/30 rounded-xl">
            {caseStudy.phases.map((phase, idx) => (
              <React.Fragment key={idx}>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-2 mx-auto">
                    {idx + 1}
                  </div>
                  <p className="text-xs font-medium">{t(phase.name)}</p>
                  <p className="text-[10px] text-muted-foreground">{phase.timeline}</p>
                </div>
                {idx < caseStudy.phases.length - 1 && (
                  <div className="flex-1 h-0.5 bg-primary/30 mx-2" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Phases Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {caseStudy.phases.map((phase, idx) => (
              <AccordionItem key={idx} value={`phase-${idx}`} className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-mono text-primary">
                      {idx + 1}
                    </span>
                    <span className="font-semibold">{t(phase.name)}</span>
                    <Badge variant="muted" className="text-xs">{phase.timeline}</Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-6">
                  {phase.actions.map((action, aIdx) => (
                    <div key={aIdx} className="pl-4 border-l-2 border-primary/30">
                      <h4 className="font-semibold mb-2">{t(action.name)}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{t(action.description)}</p>
                      
                      <div className="mb-3">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          {language === 'de' ? 'Deliverables:' : 'What we built:'}
                        </p>
                        <ul className="space-y-1">
                          {action.deliverables.map((d, dIdx) => (
                            <li key={dIdx} className="text-sm flex items-center gap-2">
                              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                              {t(d)}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3 bg-primary/5 rounded-lg">
                        <p className="text-xs font-semibold text-primary mb-1">
                          {language === 'de' ? 'Warum das wichtig war:' : 'Why this mattered:'}
                        </p>
                        <p className="text-sm text-muted-foreground">{t(action.whyItMattered)}</p>
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 4: THE RESULTS */}
      <section className="py-16 bg-emerald-500/5">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-sm font-mono text-emerald-500">4</span>
            {language === 'de' ? 'Die Ergebnisse' : 'The Results'}
          </h2>

          <p className="text-center text-lg text-muted-foreground mb-8">
            {caseStudy.timeline.toUpperCase()} {language === 'de' ? 'SPÄTER' : 'LATER'}
          </p>

          {/* Result Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {caseStudy.resultMetrics.map((metric, idx) => (
              <Card key={idx} className="p-4 text-center bg-card border-emerald-500/20">
                <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                <p className="text-sm text-muted-foreground/70 line-through">{metric.before}</p>
                <p className="text-2xl font-bold text-emerald-500">{metric.after}</p>
                <Badge variant="secondary" className="mt-2 bg-emerald-500/10 text-emerald-500">
                  {metric.impact}
                </Badge>
              </Card>
            ))}
          </div>

          {/* ROI Calculation */}
          <Card className="p-6 mb-8 bg-card border-emerald-500/20">
            <h3 className="text-lg font-semibold mb-4">ROI {language === 'de' ? 'Berechnung' : 'Calculation'}</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center mb-4">
              <div>
                <p className="text-sm text-muted-foreground">{language === 'de' ? 'Investment' : 'Investment'}</p>
                <p className="text-2xl font-bold">{caseStudy.roiCalculation.investment}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{language === 'de' ? 'Return' : 'Return'}</p>
                <p className="text-2xl font-bold text-emerald-500">{caseStudy.roiCalculation.returnValue}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">ROI</p>
                <p className="text-3xl font-bold text-emerald-500">{caseStudy.roiCalculation.roi}</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              {caseStudy.roiCalculation.breakdown.map((item, idx) => (
                <p key={idx}>• {t(item)}</p>
              ))}
            </div>
          </Card>

          {/* CEO Quote */}
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <Quote className="w-8 h-8 text-primary/50 mb-4" />
            <blockquote className="text-lg font-medium mb-4 italic">
              {t(caseStudy.ceoQuote)}
            </blockquote>
            <p className="text-sm text-muted-foreground">
              — CEO, {caseStudy.stage} {caseStudy.industry} ({language === 'de' ? 'anonymisiert' : 'anonymized'})
            </p>
            <p className="text-sm text-muted-foreground/70 mt-2">
              {t(caseStudy.quoteContext)}
            </p>
          </Card>
        </div>
      </section>

      {/* SECTION 5: KEY LESSONS */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-sm font-mono text-amber-500">5</span>
            {language === 'de' ? 'Wichtigste Learnings' : 'Key Lessons'}
          </h2>

          <div className="space-y-6">
            {caseStudy.lessons.map((lesson, idx) => (
              <Card key={idx} className="p-6 bg-card/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{t(lesson.title)}</h3>
                    
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        {language === 'de' ? 'Was wir gelernt haben:' : 'What we learned:'}
                      </p>
                      <p className="text-sm text-muted-foreground">{t(lesson.whatWeLearned)}</p>
                    </div>

                    <div className="p-3 bg-amber-500/10 rounded-lg mb-3">
                      <p className="text-xs font-semibold text-amber-500 mb-1">
                        {language === 'de' ? 'Key Insight:' : 'Key Insight:'}
                      </p>
                      <p className="text-sm font-medium">{t(lesson.keyInsight)}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        {language === 'de' ? 'Was wir anders machen würden:' : 'What we\'d do differently:'}
                      </p>
                      <p className="text-sm text-muted-foreground">{t(lesson.whatWedDoDifferently)}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: NEXT STEPS / CTA */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-4">
            {language === 'de' ? 'Bereit für ähnliche Ergebnisse?' : 'Want similar results?'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {language === 'de'
              ? 'Wir helfen SaaS-Unternehmen (Series A-C), ihre Wachstumsblocker zu finden und zu beheben.'
              : 'We help SaaS companies (Series A-C) find and fix their growth blockers.'}
          </p>

          {/* What to Expect */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
            <Card className="p-4 bg-card/50">
              <span className="text-2xl font-bold text-primary">1</span>
              <p className="text-sm font-medium mt-1">Inflection Call</p>
              <p className="text-xs text-muted-foreground">30 {language === 'de' ? 'Min, kostenlos' : 'min, free'}</p>
            </Card>
            <Card className="p-4 bg-card/50">
              <span className="text-2xl font-bold text-primary">2</span>
              <p className="text-sm font-medium mt-1">Sprint</p>
              <p className="text-xs text-muted-foreground">4-12 {language === 'de' ? 'Wochen' : 'weeks'}</p>
            </Card>
            <Card className="p-4 bg-card/50">
              <span className="text-2xl font-bold text-primary">3</span>
              <p className="text-sm font-medium mt-1">{language === 'de' ? 'Ergebnisse' : 'Results'}</p>
              <p className="text-xs text-muted-foreground">3-5x ROI</p>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground shadow-brutal-sm"
              onClick={() => window.open('https://cal.com/scalingx/inflection-call', '_blank')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              {language === 'de' ? 'Inflection Call buchen' : 'Book Inflection Call'}
            </Button>
            
            {caseStudy.downloadUrl && (
              <Button variant="outline" size="lg" asChild>
                <a href={caseStudy.downloadUrl} download>
                  <Download className="w-5 h-5 mr-2" />
                  {language === 'de' ? 'PDF herunterladen' : 'Download PDF'}
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseDetail;
