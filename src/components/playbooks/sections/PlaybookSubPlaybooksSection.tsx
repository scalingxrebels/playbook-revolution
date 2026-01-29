import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { icons, ArrowRight } from 'lucide-react';
import type { PlaybookSubPlaybooksSection as SubData, BilingualText } from '@/data/playbooks/types';

interface Props {
  data: SubData;
}

const PlaybookSubPlaybooksSection: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();
  const t = (text: BilingualText) => text[language];

  const getIcon = (name: string) => {
    const Icon = icons[name as keyof typeof icons];
    return Icon || icons.Book;
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t(data.title)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(data.subtitle)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <Link key={item.id} to={`/playbooks/${item.slug}`}>
                <Card className="border-2 h-full hover:border-primary/50 hover:shadow-lg transition-all group">
                  <CardContent className="p-6">
                    <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {t(item.title)}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t(item.teaser)}
                    </p>
                    <div className="flex items-center text-sm text-primary font-medium">
                      {language === 'de' ? 'Mehr erfahren' : 'Learn more'}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
