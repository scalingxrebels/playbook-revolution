import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Briefcase, CheckCircle2 } from 'lucide-react';
import SharedHero from '@/components/shared/SharedHero';
import { clientCases, ClientCase } from '@/data/cases';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const casesStats = [
  { value: '22+', label: { en: 'Transformations', de: 'Transformationen' }, color: 'primary' as const },
  { value: '8.3x', label: { en: 'Avg ROI', de: 'Ø ROI' }, color: 'accent' as const },
  { value: '€2.1B', label: { en: 'Value Created', de: 'Wert geschaffen' }, color: 'primary' as const },
  { value: '94%', label: { en: 'Success Rate', de: 'Erfolgsrate' }, color: 'accent' as const },
];

const clientNames = [
  'Pigtie', 'the beautiful unleashed truth', 'KODE®', 'FILADOS', '2p Team',
  'Microsoft Surface', 'XING e-Recruiting', 'Lexware', 'Haufe Group', 'smapOne',
  'SBB E-Business', 'Swarovski', 'local.ch', 'BWK Group', 'DBA', 'Burda Media',
  'START', 'Elba', 'Semigator', 'Umantis', 'Sage', 'LifiMax', 'BeQueen', 'BonGusto'
];

interface CaseDetailModalProps {
  caseStudy: ClientCase | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CaseDetailModal: React.FC<CaseDetailModalProps> = ({ caseStudy, open, onOpenChange }) => {
  const { language } = useLanguage();
  
  if (!caseStudy) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <Badge variant="secondary">{caseStudy.industry}</Badge>
            {caseStudy.stage && (
              <Badge variant="outline">{caseStudy.stage}</Badge>
            )}
          </div>
          <DialogTitle className="text-2xl">{caseStudy.company}</DialogTitle>
          <DialogDescription className="text-base">
            {language === 'de' ? 'Anonymisiertes Kundenprojekt' : 'Anonymized Client Project'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Challenge */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              {language === 'de' ? 'Herausforderung' : 'Challenge'}
            </h4>
            <p className="text-foreground">
              {caseStudy.challenge[language as 'de' | 'en']}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              {language === 'de' ? 'Lösung' : 'Solution'}
            </h4>
            <p className="text-foreground">
              {caseStudy.solution[language as 'de' | 'en']}
            </p>
          </div>

          {/* Result Highlight */}
          <div className={`p-4 rounded-xl bg-gradient-to-r ${caseStudy.gradient} text-white`}>
            <CheckCircle2 className="w-5 h-5 mb-2" />
            <p className="font-semibold">
              {caseStudy.result[language as 'de' | 'en']}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-3">
            {caseStudy.metrics.map((metric, idx) => (
              <div key={idx} className="text-center p-3 bg-muted/50 rounded-lg">
                <p className="text-2xl font-bold text-primary">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          {caseStudy.timeline && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{language === 'de' ? 'Projektdauer:' : 'Project Duration:'} {caseStudy.timeline}</span>
            </div>
          )}

          {/* Playbooks */}
          {caseStudy.playbooks && caseStudy.playbooks.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {language === 'de' ? 'Eingesetzte Playbooks' : 'Playbooks Applied'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {caseStudy.playbooks.map((playbook) => (
                  <Badge key={playbook} variant="outline" className="capitalize">
                    {playbook.replace('-', ' ')}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="pt-4 border-t">
            <Button 
              className="w-full bg-primary text-primary-foreground"
              onClick={() => {
                onOpenChange(false);
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Briefcase className="w-4 h-4 mr-2" />
              {language === 'de' ? 'Ähnliches Projekt besprechen' : 'Discuss Similar Project'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Cases: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCase, setSelectedCase] = useState<ClientCase | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCaseClick = (caseStudy: ClientCase) => {
    setSelectedCase(caseStudy);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <SharedHero
        overlineEn="Expertise × Speed = Impact"
        overlineDe="Expertise × Speed = Impact"
        headlineLine1En="Transformations,"
        headlineLine1De="Transformationen,"
        headlineLine2En="not theories"
        headlineLine2De="nicht Theorien"
        subheadlineEn="Real results from companies that made the leap from linear to superlinear growth."
        subheadlineDe="Echte Ergebnisse von Unternehmen, die den Sprung von linearem zu superlinearem Wachstum geschafft haben."
        stats={casesStats}
      />

      {/* Client Ticker */}
      <div className="relative z-10 border-y border-border py-4 bg-background/50">
        <div className="container max-w-7xl mx-auto px-4 mb-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {language === 'de' ? 'Mit wem wir gearbeitet haben' : 'Who we have worked with'}
          </span>
        </div>
        <div className="overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-6 px-4">
                {clientNames.map((name, idx) => (
                  <span key={`${i}-${idx}`} className="text-sm font-medium text-muted-foreground/60 flex items-center gap-6">
                    <span className="w-1 h-1 rounded-full bg-primary/40" />
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <main className="pt-6 md:pt-8 pb-20">
        <div className="container max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientCases.map((study) => (
              <Card 
                key={study.id}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 cursor-pointer"
                onClick={() => handleCaseClick(study)}
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
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {study.challenge[language as 'de' | 'en'].split('.')[0]}.
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

                  <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                    {language === 'de' ? 'Details ansehen' : 'View Details'}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
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

      <CaseDetailModal 
        caseStudy={selectedCase} 
        open={modalOpen} 
        onOpenChange={setModalOpen} 
      />

      <Footer />
    </div>
  );
};

export default Cases;
