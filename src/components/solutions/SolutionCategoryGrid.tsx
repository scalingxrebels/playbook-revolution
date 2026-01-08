import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { solutionCategories, formatPrice } from '@/data/solutions';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import SolutionPlaybookLink from '@/components/SolutionPlaybookLink';

const SolutionCategoryGrid: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <section id="solution-categories" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 noise opacity-20" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? '6 Kategorien' : '6 Categories'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? 'Wähle deine Kategorie' : 'Choose Your Category'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Jede Kategorie bietet unterschiedliche Engagement-Formate für verschiedene Needs.'
              : 'Each category offers different engagement formats for different needs.'
            }
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionCategories.map((category, index) => {
            const Icon = category.icon;
            const priceLabel = formatPrice(category.pricingMin, category.pricingMax, category.pricingUnit);
            
            return (
              <div 
                key={category.id}
                onClick={() => navigate(`/solutions/${category.id}`)}
                className="group relative bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary 
                           p-8 transition-all duration-300 cursor-pointer
                           hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal
                           animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Pricing Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-accent text-primary-foreground 
                                px-3 py-1.5 text-sm font-bold shadow-brutal-sm">
                  {priceLabel}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary/20 
                                flex items-center justify-center mb-6 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-sans text-xl font-bold text-foreground mb-2">
                  {language === 'de' ? category.titleDe : category.titleEn}
                </h3>

                {/* Purpose */}
                <p className="text-muted-foreground mb-4">
                  {language === 'de' ? category.purposeDe : category.purposeEn}
                </p>

                {/* Playbook Links */}
                <SolutionPlaybookLink 
                  playbooks={category.playbooks} 
                  maxVisible={2}
                  className="mb-6"
                />

                {/* Programs Count */}
                <div className="text-xs text-muted-foreground mb-4">
                  {category.programs.length} {language === 'de' ? 'Programme verfügbar' : 'programs available'}
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  size="sm"
                  className="shadow-brutal-sm hover-brutal group/btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/solutions/${category.id}`);
                  }}
                >
                  {language === 'de' ? 'Details ansehen' : 'View Details'}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>

                {/* Hover Glow */}
                <div className="absolute inset-0 shadow-glow opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionCategoryGrid;
