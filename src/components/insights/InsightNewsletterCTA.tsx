import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

const InsightNewsletterCTA: React.FC = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success(language === 'de' ? 'Vielen Dank! Bitte bestätige deine E-Mail.' : 'Thank you! Please confirm your email.');
    setEmail('');
  };

  return (
    <div className="col-span-full my-4">
      <div className="bg-card border-2 border-border rounded-lg p-8 text-center shadow-brutal-sm">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Mail className="w-5 h-5 text-accent" />
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Weekly Insights
          </span>
        </div>
        <h3 className="font-display text-xl font-bold text-foreground mb-2">
          {language === 'de'
            ? 'Weekly Insights — direkt ins Postfach'
            : 'Weekly Insights — straight to your inbox'}
        </h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
          {language === 'de'
            ? 'Die besten Artikel, Frameworks und Events aus dem AI-Native Scaling Ökosystem. 1x pro Woche. Kostenlos. Jederzeit abmeldbar.'
            : 'The best articles, frameworks and events from the AI-native scaling ecosystem. Once a week. Free. Unsubscribe anytime.'}
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm mx-auto">
          <Input
            type="email"
            placeholder={language === 'de' ? 'E-Mail eingeben' : 'Enter your email'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button type="submit" className="bg-gradient-primary text-primary-foreground shadow-brutal-sm hover-brutal">
            {language === 'de' ? 'Abonnieren' : 'Subscribe'}
            <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default InsightNewsletterCTA;
