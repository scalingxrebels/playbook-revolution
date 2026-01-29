import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { icons, ArrowRight, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { PlaybookSubPlaybooksSection as SubData, BilingualText } from '@/data/playbooks/types';

interface Props {
  data: SubData;
}

const PlaybookSubPlaybooksSection: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();
  const t = (text: BilingualText) => text[language];
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getIcon = (name: string) => {
    const Icon = icons[name as keyof typeof icons];
    return Icon || icons.Book;
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background"
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wide">
              {language === 'de' ? 'Vertiefung' : 'Deep Dives'}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t(data.title)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(data.subtitle)}
          </p>
        </div>

        {/* Sub-Playbook Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <Link 
                key={item.id} 
                to={`/playbooks/${item.slug}`}
                className={`block transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <Card className="group border-2 h-full bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* Gradient top bar on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg" />
                  
                  <CardContent className="p-6">
                    {/* Icon with scale animation */}
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    {/* Badge */}
                    <Badge variant="outline" className="mb-3 text-xs">
                      {language === 'de' ? 'Sub-Playbook' : 'Sub-Playbook'}
                    </Badge>
                    
                    {/* Title */}
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {t(item.title)}
                    </h3>
                    
                    {/* Teaser */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {t(item.teaser)}
                    </p>
                    
                    {/* CTA with arrow animation */}
                    <div className="flex items-center text-sm text-primary font-medium">
                      {language === 'de' ? 'Mehr erfahren' : 'Learn more'}
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlaybookSubPlaybooksSection;
