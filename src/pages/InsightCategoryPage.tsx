import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SharedHero from '@/components/shared/SharedHero';
import InsightsGrid from '@/components/insights/InsightsGrid';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContentVisibilityContext } from '@/contexts/ContentVisibilityContext';
import { sampleInsights, insightCategoryTiles, InsightArticle } from '@/data/insights';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Phone } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/seo';

const InsightCategoryPage: React.FC = () => {
  const location = useLocation();
  const categorySlug = location.pathname.split('/').pop();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { isHidden } = useContentVisibilityContext();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  const category = insightCategoryTiles.find(c => c.id === categorySlug);

  const categoryArticles = useMemo(() => {
    if (!category) return [];
    return sampleInsights.filter(
      i => i.type === 'article' && i.category === category.id && !isHidden('insight', i.slug, i.hidden)
    ) as InsightArticle[];
  }, [category, isHidden]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <Button onClick={() => navigate('/insights')}>Back to Insights</Button>
        </div>
      </div>
    );
  }

  const hero = category.hero;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <BreadcrumbSchema
        items={[
          { name: 'Insights', path: '/insights' },
          { name: language === 'de' ? category.labelDe : category.labelEn, path: category.route },
        ]}
      />

      {/* Hero */}
      <SharedHero
        overlineEn={hero.overlineEn}
        overlineDe={hero.overlineDe}
        headlineLine1En={hero.h1En}
        headlineLine1De={hero.h1De}
        subheadlineEn={hero.sublineEn}
        subheadlineDe={hero.sublineDe}
      >
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/insights" className="hover:text-foreground transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            {language === 'de' ? 'Alle Insights' : 'All Insights'}
          </Link>
          <span>→</span>
          <span className="text-foreground font-medium">{language === 'de' ? category.labelDe : category.labelEn}</span>
        </div>
      </SharedHero>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-6">
          <span className="block text-sm font-semibold uppercase tracking-widest text-accent text-center mb-4">
            {categoryArticles.length} {language === 'de' ? 'Artikel' : 'Articles'}
          </span>
          <InsightsGrid articles={categoryArticles} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container max-w-3xl mx-auto px-6 relative z-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            {language === 'de' ? 'Von der Theorie zur Praxis' : 'From theory to practice'}
          </p>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? (
              <>Wie wir das in der <span className="italic text-gradient">Praxis einsetzen.</span></>
            ) : (
              <>How we apply this <span className="italic text-gradient">in practice.</span></>
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
              onClick={() => navigate(`/solutions/${category.id === 'portfolio' ? 'translating-strategy' : category.id}`)}
            >
              {language === 'de' ? `${category.labelDe}-Solutions ansehen` : `View ${category.labelEn} Solutions`}
              <ArrowRight className="ml-2 w-5 h-5" />
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
        source={`insights-${category.id}`}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};

export default InsightCategoryPage;
