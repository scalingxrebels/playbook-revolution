import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { InsightEvent, getCategoryBadgeColor, getCategoryById } from '@/data/insights';

interface InsightEventCardProps {
  event: InsightEvent;
  index: number;
  featured?: boolean;
}

const eventTypeLabels: Record<string, { en: string; de: string }> = {
  'webinar': { en: 'Webinar', de: 'Webinar' },
  'live-qa': { en: 'Live Q&A', de: 'Live Q&A' },
  'workshop': { en: 'Workshop', de: 'Workshop' },
  'keynote': { en: 'Keynote', de: 'Keynote' },
};

const InsightEventCard: React.FC<InsightEventCardProps> = ({ event, index, featured }) => {
  const { language } = useLanguage();
  const category = getCategoryById(event.category);
  const badgeColor = getCategoryBadgeColor(event.category);
  const typeLabel = eventTypeLabels[event.eventType] || { en: event.eventType, de: event.eventType };

  return (
    <Card
      className={cn(
        'group overflow-hidden border-2 border-accent/30 hover:border-accent/60 transition-all duration-300 hover:shadow-lg animate-fade-in',
        featured && 'md:col-span-2 lg:col-span-3'
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className={cn('p-6', featured && 'md:p-8')}>
        {/* Type + Category */}
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-bold rounded-full bg-accent/10 text-accent uppercase tracking-wider">
            <Calendar className="w-3 h-3" />
            {event.isUpcoming ? (language === 'de' ? 'Live Event' : 'Live Event') : (language === 'de' ? 'Vergangen' : 'Past')}
          </span>
          <span className={cn('px-2.5 py-0.5 text-xs font-medium rounded-full', badgeColor)}>
            {category ? (language === 'de' ? category.label.de : category.label.en) : event.category}
          </span>
        </div>

        {/* Type Label */}
        <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-1">
          {language === 'de' ? typeLabel.de : typeLabel.en}
        </p>

        {/* Title */}
        <h3 className={cn(
          'font-display font-bold text-foreground group-hover:text-accent transition-colors mb-3',
          featured ? 'text-xl md:text-2xl' : 'text-lg'
        )}>
          {language === 'de' ? event.title.de : event.title.en}
        </h3>

        {/* Date/Time */}
        <p className="text-sm text-muted-foreground mb-2">
          {event.date} · {event.time} · Online
        </p>

        {/* Speaker + Price */}
        <p className="text-sm text-muted-foreground mb-4">
          {event.speaker} · {event.isFree ? (language === 'de' ? 'Kostenlos' : 'Free') : ''}
        </p>

        {/* Capacity */}
        {event.isUpcoming && event.registrations > 0 && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
              <span>{event.registrations} {language === 'de' ? 'angemeldet' : 'registered'}</span>
              <span>{event.capacity} {language === 'de' ? 'Plätze' : 'spots'}</span>
            </div>
            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-accent rounded-full transition-all"
                style={{ width: `${Math.min(100, (event.registrations / event.capacity) * 100)}%` }}
              />
            </div>
          </div>
        )}

        {/* CTA */}
        {event.isUpcoming && (
          <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 group/btn">
            {language === 'de' ? 'Jetzt anmelden' : 'Register Now'}
            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        )}
      </div>
    </Card>
  );
};

export default InsightEventCard;
