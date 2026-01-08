import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { solutionCategories } from '@/data/solutions';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Check, Phone, Clock, Shield } from 'lucide-react';
import SolutionPlaybookLink from '@/components/SolutionPlaybookLink';

const SolutionCategoryContent: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const solution = solutionCategories.find(s => s.id === category);
  
  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <Button onClick={() => navigate('/solutions')}>Back to Solutions</Button>
        </div>
      </div>
    );
  }

  const Icon = solution.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh" />
          <div className="absolute inset-0 noise opacity-30" />
          
          <div className="container max-w-5xl mx-auto px-6 relative z-10">
            {/* Back Link */}
            <Link 
              to="/solutions" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'de' ? 'Alle Solutions' : 'All Solutions'}
            </Link>
            
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="font-display text-display-md tracking-tight mb-2">
                  {language === 'de' ? solution.titleDe : solution.titleEn}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {language === 'de' ? solution.purposeDe : solution.purposeEn}
                </p>
              </div>
            </div>
            
            {/* Description + Playbooks */}
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
              {language === 'de' ? solution.descriptionDe : solution.descriptionEn}
            </p>
            <SolutionPlaybookLink playbooks={solution.playbooks} maxVisible={5} />
          </div>
        </section>

        {/* Programs */}
        <section className="py-24 lg:py-32 bg-muted/30">
          <div className="container max-w-6xl mx-auto px-6">
            <h2 className="font-display text-display-sm mb-12 text-center">
              {language === 'de' ? 'Programme' : 'Programs'}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solution.programs.map((program, idx) => (
                <div 
                  key={program.id}
                  className="bg-card border-2 border-border hover:border-primary p-8 transition-all hover:-translate-y-1 hover:shadow-brutal"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{program.timeline}</span>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-2">
                    {language === 'de' ? program.nameDe : program.nameEn}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {language === 'de' ? program.whatDe : program.whatEn}
                  </p>
                  
                  <div className="font-mono text-2xl text-primary font-bold mb-6">
                    {program.pricing}
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {(language === 'de' ? program.deliverablesDe : program.deliverablesEn).map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground border-t border-border pt-4">
                    <Shield className="w-4 h-4" />
                    {language === 'de' ? program.guaranteeDe : program.guaranteeEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof Points */}
        <section className="py-24 lg:py-32">
          <div className="container max-w-4xl mx-auto px-6">
            <h2 className="font-display text-display-sm mb-12 text-center">
              {language === 'de' ? 'Ergebnisse' : 'Results'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {solution.proofPoints.map((proof, idx) => (
                <div key={idx} className="text-center p-6 border-2 border-primary/20 bg-card/50">
                  <div className="font-mono text-4xl text-primary font-bold mb-2">
                    {proof.value}
                  </div>
                  <div className="font-semibold mb-1">
                    {language === 'de' ? proof.metricDe : proof.metricEn}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'de' ? proof.descriptionDe : proof.descriptionEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-display-sm mb-6">
              {language === 'de' ? 'Bereit zu starten?' : 'Ready to Start?'}
            </h2>
            <p className="text-muted-foreground mb-8">
              {language === 'de' 
                ? 'Lass uns besprechen, welches Programm am besten zu dir passt.'
                : 'Let\'s discuss which program fits you best.'
              }
            </p>
            <Button 
              size="xl" 
              className="shadow-brutal hover-brutal"
              onClick={() => window.open('https://calendly.com/scalingx', '_blank')}
            >
              <Phone className="mr-2 w-5 h-5" />
              {language === 'de' ? 'Gespräch buchen' : 'Book a Call'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const SolutionCategory: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SolutionCategoryContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default SolutionCategory;
