import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SharedHero from '@/components/shared/SharedHero';
import SolutionTileGrid from '@/components/solutions/SolutionTileGrid';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContentVisibilityContext } from '@/contexts/ContentVisibilityContext';
import { solutionTiles } from '@/data/solutionTiles';
import { solutionCategories, categoryMapping, CategoryId } from '@/data/solutionCategoryData';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Phone, Check } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/seo';

const SolutionCategoryLanding: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { isHidden } = useContentVisibilityContext();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  const category = solutionCategories.find(c => c.id === categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <Button onClick={() => navigate('/solutions')}>Back to Solutions</Button>
        </div>
      </div>
    );
  }

  // Filter tiles by category (primary or secondary)
  const categoryTiles = useMemo(() => {
    return solutionTiles.filter(tile => {
      if (isHidden('solution', tile.slug, tile.hidden)) return false;
      const mapping = categoryMapping[tile.slug];
      if (!mapping) return false;
      return mapping.category === category.id || mapping.categorySecondary === category.id;
    });
  }, [category.id, isHidden]);

  const Icon = category.icon;
  const hero = category.hero;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <BreadcrumbSchema
        items={[
          { name: 'Solutions', url: '/solutions' },
          { name: language === 'de' ? category.labelDe : category.labelEn, url: category.route },
        ]}
      />

      {/* SECTION 1 — Hero */}
      <SharedHero
        overlineEn={hero.overlineEn}
        overlineDe={hero.overlineDe}
        headlineLine1En={hero.h1En.split('\n')[0]}
        headlineLine1De={hero.h1De.split('\n')[0]}
        headlineLine2En={hero.h1En.split('\n')[1]}
        headlineLine2De={hero.h1De.split('\n')[1]}
        subheadlineEn={hero.sublineEn}
        subheadlineDe={hero.sublineDe}
        stats={hero.stats.map(s => ({
          value: s.value,
          label: { en: s.labelEn, de: s.labelDe },
          color: 'primary' as const,
        }))}
      >
        {/* Breadcrumb in hero */}
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/solutions" className="hover:text-foreground transition-colors">Solutions</Link>
          <span>→</span>
          <span className="text-foreground font-medium">{language === 'de' ? category.labelDe : category.labelEn}</span>
        </div>
      </SharedHero>

      {/* SECTION 2 — Für wen */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" />
        <div className="container max-w-5xl mx-auto px-4 md:px-6 relative z-10">
          <span className="block text-sm font-semibold uppercase tracking-widest text-accent text-center mb-4">
            {language === 'de' ? 'Für wen' : 'For whom'}
          </span>
          <h2 className="font-display text-display-md text-foreground text-center mb-12">
            {language === 'de' ? (
              <>Das ist deine Situation <span className="italic text-gradient">wenn...</span></>
            ) : (
              <>This is your situation <span className="italic text-gradient">when...</span></>
            )}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category.situations.map((sit, idx) => (
              <div key={idx} className="bg-card border-2 border-border p-6">
                <p className="text-foreground font-medium">
                  {language === 'de' ? sit.titleDe : sit.titleEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Solutions Grid */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <span className="block text-sm font-semibold uppercase tracking-widest text-accent text-center mb-4">
            {language === 'de' ? 'Solutions in dieser Kategorie' : 'Solutions in this category'}
          </span>
          <h2 className="font-display text-display-md text-foreground text-center mb-12">
            {categoryTiles.length} Solutions.{' '}
            <span className="italic text-gradient">
              {language === 'de' ? 'Eine ist deine.' : 'One is yours.'}
            </span>
          </h2>
          <SolutionTileGrid tiles={categoryTiles} maxVisible={50} />
        </div>
      </section>

      {/* SECTION 4 — Wie es funktioniert */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" />
        <div className="container max-w-3xl mx-auto px-4 md:px-6 relative z-10">
          <span className="block text-sm font-semibold uppercase tracking-widest text-accent text-center mb-4">
            {language === 'de' ? 'Unser Ansatz' : 'Our approach'}
          </span>
          <h2 className="font-display text-display-md text-foreground text-center mb-6">
            {language === 'de' ? category.mechanism.titleDe : category.mechanism.titleEn}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-8">
            {language === 'de' ? category.mechanism.bodyDe : category.mechanism.bodyEn}
          </p>
          <div className="text-center">
            <Link to="/expertise" className="text-sm text-primary hover:underline inline-flex items-center gap-1.5">
              {language === 'de' ? 'Mehr über unseren Ansatz' : 'More about our approach'}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Cases */}
      {category.cases.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto px-4 md:px-6">
            <span className="block text-sm font-semibold uppercase tracking-widest text-accent text-center mb-4">
              {language === 'de' ? 'Beweis' : 'Proof'}
            </span>
            <h2 className="font-display text-display-md text-foreground text-center mb-12">
              {language === 'de' ? (
                <>Was <span className="italic text-gradient">möglich ist.</span></>
              ) : (
                <>What\'s <span className="italic text-gradient">possible.</span></>
              )}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.cases.map((c, idx) => (
                <div key={idx} className="bg-card border-2 border-border p-6">
                  <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                    {language === 'de' ? c.tagDe : c.tagEn}
                  </span>
                  <p className="text-foreground font-medium mt-2 mb-4">
                    {language === 'de' ? c.outcomeDe : c.outcomeEn}
                  </p>
                  {c.caseUrl && (
                    <Link to={c.caseUrl} className="text-sm text-primary hover:underline inline-flex items-center gap-1.5">
                      {language === 'de' ? 'Case lesen' : 'Read case'}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 6 — CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container max-w-3xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? (
              <>Bereit — oder noch <span className="italic text-gradient">Fragen?</span></>
            ) : (
              <>Ready — or still have <span className="italic text-gradient">questions?</span></>
            )}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              size="xl"
              className="shadow-brutal hover-brutal group"
              onClick={() => setIsBookingModalOpen(true)}
            >
              <Phone className="mr-2 w-5 h-5" />
              {language === 'de' ? 'Gespräch buchen' : 'Book a Call'}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              onClick={() => navigate('/solutions')}
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              {language === 'de' ? 'Alle Solutions ansehen' : 'View all Solutions'}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            {language === 'de' ? '30 Min · Kein Pitch · Direkt mit Michel' : '30 min · No pitch · Directly with Michel'}
          </p>
        </div>
      </section>

      <Footer />

      <FilloutBookingModal
        formSlug="inflection-call"
        source={`solutions-${category.id}`}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};

export default SolutionCategoryLanding;
