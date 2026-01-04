import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ArrowUp, MessageSquare, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunityTestimonials: React.FC = () => {
  const { language } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'CEO @ TechScale',
      company: 'TechScale',
      avatar: 'SC',
      quote: {
        en: 'The AI-Native GTM playbook helped us cut our CAC by 62% in just 3 months. The community support was invaluable.',
        de: 'Das AI-Native GTM Playbook half uns, unsere CAC in nur 3 Monaten um 62% zu senken. Der Community-Support war unbezahlbar.'
      },
      upvotes: 247,
      metric: '-62% CAC',
      gradient: 'from-primary to-accent',
    },
    {
      id: 2,
      name: 'Marcus Weber',
      role: 'COO @ Flowify',
      company: 'Flowify',
      avatar: 'MW',
      quote: {
        en: 'We implemented the Operations playbook and now handle 4x the volume with the same team. Game changer.',
        de: 'Wir haben das Operations Playbook implementiert und bearbeiten jetzt das 4-fache Volumen mit dem gleichen Team. Game Changer.'
      },
      upvotes: 189,
      metric: '4x Throughput',
      gradient: 'from-accent to-primary',
    },
    {
      id: 3,
      name: 'Lisa Park',
      role: 'Head of Growth @ Nexus AI',
      company: 'Nexus AI',
      avatar: 'LP',
      quote: {
        en: 'The θ_index assessment revealed blind spots we never knew existed. Our scaling velocity increased 3x.',
        de: 'Das θ_index Assessment enthüllte Blindspots, von denen wir nie wussten. Unsere Scaling-Velocity stieg um das 3-fache.'
      },
      upvotes: 312,
      metric: '3x Velocity',
      gradient: 'from-neon-green to-primary',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Founder @ AI Labs',
      company: 'AI Labs',
      avatar: 'DK',
      quote: {
        en: 'From €2M to €15M ARR in 18 months using the playbooks here. The case studies alone are worth it.',
        de: 'Von €2M auf €15M ARR in 18 Monaten mit den Playbooks hier. Allein die Case Studies sind es wert.'
      },
      upvotes: 428,
      metric: '€2M → €15M ARR',
      gradient: 'from-primary to-neon-green',
    },
  ];

  const stats = [
    { value: '2,500+', label: { en: 'Community Members', de: 'Community-Mitglieder' } },
    { value: '150+', label: { en: 'Active Discussions', de: 'Aktive Diskussionen' } },
    { value: '€500M+', label: { en: 'Combined ARR', de: 'Kombinierter ARR' } },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-muted/30">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/50 text-accent">
            <Users className="w-3 h-3 mr-1" />
            {language === 'en' ? 'Join the Community' : 'Werde Teil der Community'}
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-serif italic mb-6">
            {language === 'en' ? 'What Founders' : 'Was Gründer'}{' '}
            <span className="text-gradient-accent">{language === 'en' ? 'Are Saying' : 'sagen'}</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Real results from founders who implemented our playbooks and scaled faster than ever.'
              : 'Echte Ergebnisse von Gründern, die unsere Playbooks implementiert und schneller als je zuvor skaliert haben.'
            }
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label[language as 'en' | 'de']}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-card border-2 border-border hover:border-primary/50 shadow-brutal-sm hover:shadow-brutal transition-all duration-300 p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`} />
              
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.avatar}
                  </div>
                  
                  {/* Info */}
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Metric Badge */}
                <Badge className="bg-accent/10 text-accent border-accent/30">
                  {testimonial.metric}
                </Badge>
              </div>
              
              {/* Quote */}
              <blockquote className="text-foreground mb-6 italic">
                "{testimonial.quote[language as 'en' | 'de']}"
              </blockquote>
              
              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                {/* Upvotes */}
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ArrowUp className="w-4 h-4" />
                  <span className="font-semibold">{testimonial.upvotes}</span>
                </button>
                
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/community">
            <Button 
              size="lg" 
              className="bg-foreground text-background font-bold shadow-brutal hover-brutal gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              {language === 'en' ? 'Join the Community' : 'Community beitreten'}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunityTestimonials;
