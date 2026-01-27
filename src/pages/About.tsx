import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Linkedin, Twitter, Mail, Target, Zap, Users, Globe } from 'lucide-react';
import SharedHero from '@/components/shared/SharedHero';

interface TeamMember {
  name: string;
  role: { de: string; en: string };
  bio: { de: string; en: string };
  image: string;
  linkedin?: string;
  twitter?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Florian Heinrichs',
    role: { de: 'Managing Partner', en: 'Managing Partner' },
    bio: {
      de: '15+ Jahre Erfahrung in Scaling, Ex-McKinsey, 3 Exits. Fokus: AI-native GTM und Capital Strategy.',
      en: '15+ years scaling experience, Ex-McKinsey, 3 exits. Focus: AI-native GTM and Capital Strategy.'
    },
    image: '/images/team-florian.png',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Alban Cortes',
    role: { de: 'Partner', en: 'Partner' },
    bio: {
      de: 'Serial Entrepreneur, 2 AI-First Startups gegründet. Fokus: Product-Led Growth und AI Operations.',
      en: 'Serial Entrepreneur, founded 2 AI-first startups. Focus: Product-Led Growth and AI Operations.'
    },
    image: '/images/team-alban.png',
    linkedin: '#'
  },
  {
    name: 'Michel Weis',
    role: { de: 'Partner', en: 'Partner' },
    bio: {
      de: 'Ex-Google, Ex-Stripe. Deep Tech Background. Fokus: Technical Due Diligence und AI Architecture.',
      en: 'Ex-Google, Ex-Stripe. Deep tech background. Focus: Technical Due Diligence and AI Architecture.'
    },
    image: '/images/team-michel.png',
    linkedin: '#',
    twitter: '#'
  }
];

const values = [
  {
    icon: Target,
    title: { de: 'Ergebnisorientiert', en: 'Results-Driven' },
    description: {
      de: 'Wir messen uns an konkreten Outcomes, nicht an Aktivitäten.',
      en: 'We measure ourselves by concrete outcomes, not activities.'
    }
  },
  {
    icon: Zap,
    title: { de: 'AI-Native', en: 'AI-Native' },
    description: {
      de: 'Wir praktizieren, was wir predigen – AI ist in allem was wir tun.',
      en: 'We practice what we preach – AI is in everything we do.'
    }
  },
  {
    icon: Users,
    title: { de: 'Skin in the Game', en: 'Skin in the Game' },
    description: {
      de: 'Wir investieren neben unseren Kunden und teilen das Risiko.',
      en: 'We invest alongside our clients and share the risk.'
    }
  },
  {
    icon: Globe,
    title: { de: 'Global Mindset', en: 'Global Mindset' },
    description: {
      de: 'European roots, global perspective – wir denken in Weltmärkten.',
      en: 'European roots, global perspective – we think in world markets.'
    }
  }
];

const About: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <SharedHero
        overlineEn="Expertise × Speed = Impact"
        overlineDe="Expertise × Speed = Impact"
        headlineLine1En="We are"
        headlineLine1De="Wir sind"
        headlineLine2En="ScalingX"
        headlineLine2De="ScalingX"
        subheadlineEn="A team of operators, investors, and AI experts with one mission: Preparing European scale-ups for superlinear growth."
        subheadlineDe="Ein Team von Operators, Investoren und AI-Experten mit einer Mission: Europäische Scale-ups auf superlineares Wachstum vorbereiten."
      />
      
      <main className="pt-6 md:pt-8 pb-20">
        <div className="container max-w-7xl mx-auto px-4">

          {/* Mission Statement */}
          <Card className="p-8 md:p-12 mb-20 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                {language === 'de' ? 'Unsere Mission' : 'Our Mission'}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {language === 'de'
                  ? 'Wir glauben, dass die nächste Generation europäischer Unicorns AI-native sein wird. Unser Ziel ist es, bestehende Scale-ups dabei zu unterstützen, diesen Wandel zu vollziehen – bevor es ihre Wettbewerber tun.'
                  : 'We believe the next generation of European unicorns will be AI-native. Our goal is to help existing scale-ups make this transition – before their competitors do.'}
              </p>
              <blockquote className="border-l-4 border-primary pl-6 text-xl font-display italic">
                "{language === 'de' 
                  ? 'Die Frage ist nicht ob AI Ihr Business transformiert, sondern wer diese Transformation anführt.'
                  : 'The question is not if AI will transform your business, but who will lead that transformation.'}"
              </blockquote>
            </div>
          </Card>

          {/* Team Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-display font-bold mb-8">
              {language === 'de' ? 'Das Team' : 'The Team'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.name} className="overflow-hidden group">
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-3">
                      {member.linkedin && (
                        <a href={member.linkedin} className="p-2 bg-background/80 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.twitter && (
                        <a href={member.twitter} className="p-2 bg-background/80 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-3">
                      {member.role[language as 'de' | 'en']}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.bio[language as 'de' | 'en']}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-display font-bold mb-8">
              {language === 'de' ? 'Unsere Werte' : 'Our Values'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <Card key={idx} className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {value.title[language as 'de' | 'en']}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description[language as 'de' | 'en']}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* Stats */}
          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">
                  {language === 'de' ? 'Jahre kombinierte Erfahrung' : 'Years Combined Experience'}
                </p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">€500M+</p>
                <p className="text-sm text-muted-foreground">
                  {language === 'de' ? 'Investiert & beraten' : 'Invested & Advised'}
                </p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">7</p>
                <p className="text-sm text-muted-foreground">
                  {language === 'de' ? 'Successful Exits' : 'Successful Exits'}
                </p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">3</p>
                <p className="text-sm text-muted-foreground">
                  {language === 'de' ? 'Unicorns mitaufgebaut' : 'Unicorns Co-built'}
                </p>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <Card className="p-8 md:p-12 bg-card border-border">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                {language === 'de' ? 'Let\'s talk' : 'Let\'s talk'}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                {language === 'de'
                  ? 'Bereit für ein Gespräch darüber, wie wir Ihr Unternehmen transformieren können?'
                  : 'Ready for a conversation about how we can transform your company?'}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground shadow-brutal-sm hover-brutal"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {language === 'de' ? 'Call buchen' : 'Book a Call'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  hello@scalingx.com
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
