import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { InsightArticle, getCategoryBadgeColor, getCategoryById, getCategoryAccentClass } from '@/data/insights';
import { ArrowRight } from 'lucide-react';

interface InsightArticleCardProps {
  article: InsightArticle;
  index: number;
}

const InsightArticleCard: React.FC<InsightArticleCardProps> = ({ article, index }) => {
  const { language } = useLanguage();
  const category = getCategoryById(article.category);
  const badgeColor = getCategoryBadgeColor(article.category);
  const accentClass = getCategoryAccentClass(article.category);

  return (
    <button
      className="group text-left bg-card border-2 border-border hover:border-primary/50 p-5 transition-all duration-500 hover:-translate-y-0.5 flex flex-col animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Category Badge */}
      <span className={cn('inline-block text-[10px] font-semibold uppercase tracking-[0.12em] px-2 py-0.5 mb-3 w-fit', badgeColor)}>
        {category ? (language === 'de' ? category.label.de : category.label.en) : article.category}
      </span>

      {/* Title */}
      <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 flex-grow leading-snug">
        {language === 'de' ? article.title.de : article.title.en}
      </h3>

      {/* Teaser */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {language === 'de' ? article.teaser.de : article.teaser.en}
      </p>

      {/* Footer: reading time + CTA */}
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs text-muted-foreground/70">
          {article.readingTime} min {language === 'de' ? 'Lesezeit' : 'read'}
        </span>
        <span className={`inline-flex items-center gap-1 text-xs font-medium ${accentClass} group-hover:gap-2 transition-all`}>
          {language === 'de' ? 'Artikel lesen' : 'Read article'}
          <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </button>
  );
};

export default InsightArticleCard;
