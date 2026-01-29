import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import type { RoadmapPhase, BilingualText } from '@/data/playbooks/types';

interface Props {
  data: {
    title: BilingualText;
    subtitle: BilingualText;
    phases: RoadmapPhase[];
  };
}

const PlaybookRoadmapSection: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();
  const t = (text: BilingualText) => text[language];

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

        <div className="grid md:grid-cols-3 gap-6">
          {data.phases.map((phase) => (
            <Card key={phase.phase} className={`border-2 ${phase.gradient} relative overflow-hidden`}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {phase.phase}
                  </span>
                  <div>
                    <h3 className="font-bold">{t(phase.title)}</h3>
                    <p className="text-xs text-muted-foreground">{t(phase.timeline)}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{t(phase.focus)}</p>

                <ul className="space-y-2">
                  {phase.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{t(del)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaybookRoadmapSection;
