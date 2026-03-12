import React from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { InsightArticle, getCategoryBadgeColor, getCategoryById } from '@/data/insights';
import InsightReactions from './InsightReactions';

interface InsightArticleCardProps {
  article: InsightArticle;
  index: number;
  featured?: boolean;
}

const InsightArticleCard: React.FC<InsightArticleCardProps> = ({ article, index, featured }) => {
  const { language } = useLanguage();
  const category = getCategoryById(article.category);
  const badgeColor = getCategoryBadgeColor(article.category);

  return (
    <Card
      className={cn(
        'group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in cursor-pointer',
        featured && 'md:col-span-2 lg:col-span-3'
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className={cn('p-6', featured && 'md:p-8')}>
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className={cn('px-2.5 py-0.5 text-xs font-medium rounded-full', badgeColor)}>
            {category ? (language === 'de' ? category.label.de : category.label.en) : article.category}
          </span>
        </div>

        {/* Title */}
        <h3 className={cn(
          'font-display font-bold text-foreground group-hover:text-primary transition-colors mb-3',
          featured ? 'text-xl md:text-2xl' : 'text-lg'
        )}>
          {language === 'de' ? article.title.de : article.title.en}
        </h3>

        {/* Teaser */}
        {featured && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {language === 'de' ? article.teaser.de : article.teaser.en}
          </p>
        )}

        {/* Meta */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <span>{article.author}</span>
          <span>·</span>
          <span>{article.readingTime} min {language === 'de' ? 'lesen' : 'read'}</span>
        </div>

        {/* Reactions */}
        <div className="border-t border-border/50 pt-3">
          <InsightReactions
            insightId={article.id}
            reactions={article.reactions}
            size="sm"
          />
        </div>
      </div>
    </Card>
  );
};

export default InsightArticleCard;
