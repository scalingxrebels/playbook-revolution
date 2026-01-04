import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: {
    en: string;
    de: string;
  };
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'stephan',
    name: 'Stephan Coester',
    role: 'Managing Director',
    company: 'KODE®',
    quote: {
      en: 'Michel Lason from ScalingX Hypergrowth used his experience from start-ups and scale-ups to guide us through an extremely effective strategy process. The project was inspiring, challenging and structured – the result: a clear vision for 2030, a robust roadmap and concrete MOALs for 2025. Unreserved recommendation!',
      de: 'Michel Lason von ScalingX Hypergrowth nutzte seine Erfahrungen aus Start-ups und Scale-ups, um uns durch einen äußerst effektiven Strategieprozess zu führen. Das Projekt war inspirierend, herausfordernd und strukturiert – das Ergebnis: eine klare Vision für 2030, ein belastbarer Fahrplan und konkrete MOALs für 2025. Uneingeschränkte Empfehlung!'
    }
  },
  {
    id: 'clemens',
    name: 'Dr. Clemens Pirker',
    role: 'Director Global CRM and Advanced Analytics',
    company: 'Swarovski',
    quote: {
      en: 'We would like to thank Michel Lason and his team for their intelligent and structured approach to evaluating the growth area. The inclusive approach helped us implement the results effectively.',
      de: 'Wir möchten Michel Lason und seinem Team für ihren intelligenten und strukturierten Ansatz bei der Bewertung des Wachstumsbereichs danken. Der integrative Ansatz hat uns dabei geholfen, die Ergebnisse effektiv umzusetzen.'
    }
  },
  {
    id: 'holger',
    name: 'Holger Kreißl',
    role: 'Head of AI Research',
    company: 'smapOne',
    quote: {
      en: 'Hypergrowth is relentless - anyone who loses momentum in this phase risks everything. Michel Lason has experienced how difficult it is to take people, teams and entire organizations to the next level in the shortest possible time. I was able to work with him at the time and saw first-hand how much clarity and focus he brings to such situations.',
      de: 'Hypergrowth ist gnadenlos - wer in dieser Phase Momentum verliert, riskiert alles. Michel Lason hat erlebt, wie schwer es ist, in kürzester Zeit Menschen, Teams und ganze Organisationen auf das nächste Level zu bringen. Ich durfte damals mit ihm zusammenarbeiten und habe aus erster Hand gesehen, wie viel Klarheit und Fokus er in solche Situationen bringt.'
    }
  },
  {
    id: 'philipp',
    name: 'Philipp Möller',
    role: 'Global Account Director',
    company: 'Orange Business',
    quote: {
      en: 'Michel offers an excellent guide here, regardless of what maturity status you are in with your company. Since I know Michel very well and also the stories behind the guide, I know that they are based on (also known to me) best practices.',
      de: 'Michel bietet hier einen hervorragenden Leitfaden ganz gleich in welchen Maturity Status man mit seinem Unternehmen steckt. Da ich Michel sehr gut kenne und auch die Stories hinter der Anleitung, weiß ich dass sie aus (auch u.a. mir bekannten) best practices basieren.'
    }
  }
];

const ScalingXTestimonials: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-accent text-accent">
            {language === 'de' ? 'Kundenstimmen' : 'Testimonials'}
          </Badge>
          
          <h2 className="font-display text-4xl md:text-5xl italic">
            {language === 'de' 
              ? 'Was unsere Kunden sagen' 
              : 'What our clients say'
            }
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="border-2 border-border bg-card p-8 hover:border-accent transition-colors group relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20 group-hover:text-accent/40 transition-colors" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Quote Text */}
              <blockquote className="text-foreground mb-6 italic leading-relaxed">
                "{testimonial.quote[language as 'en' | 'de']}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScalingXTestimonials;
