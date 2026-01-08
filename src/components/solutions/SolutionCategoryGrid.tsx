import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { solutionCategories, problemTags, formatPrice } from '@/data/solutions';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import SolutionPlaybookLink from '@/components/SolutionPlaybookLink';
import { cn } from '@/lib/utils';

interface SolutionCategoryGridProps {
  activeTag?: string | null;
}

const SolutionCategoryGrid: React.FC<SolutionCategoryGridProps> = ({ activeTag }) => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  // Filter categories based on active tag
  const filteredCategories = activeTag 
    ? solutionCategories.filter(cat => {
        const tag = problemTags.find(t => t.id === activeTag);
        return tag?.solutionCategories.includes(cat.id);
      })
    : solutionCategories;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredCategories.map((category, index) => {
        const Icon = category.icon;
        const priceLabel = formatPrice(category.pricingMin, category.pricingMax, category.pricingUnit);
        
        return (
          <div 
            key={category.id}
            onClick={() => navigate(`/solutions/${category.id}`)}
            className={cn(
              "group relative bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary",
              "p-8 transition-all duration-300 cursor-pointer",
              "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal",
              "animate-slide-up"
            )}
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
            <p className="text-muted-foreground mb-2">
              {language === 'de' ? category.purposeDe : category.purposeEn}
            </p>

            {/* Impact Line - Concrete, measurable outcomes */}
            <div className="flex items-start gap-2 text-sm text-foreground/80 mb-4">
              <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <p>{language === 'de' ? category.impactDe : category.impactEn}</p>
            </div>

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
  );
};

export default SolutionCategoryGrid;
