import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Calendar, Mail, ArrowRight, CheckCircle, 
  Building2, Users, Target, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const BookingCTA = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    arr: '',
    challenge: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const benefits = [
    {
      icon: Target,
      title: { de: 'Schwachstelle identifizieren', en: 'Identify Weakness' },
      desc: { de: 'Wir finden heraus, welcher Bereich dich bremst – in 15 Minuten', en: 'We find out which area is slowing you down – in 15 minutes' },
    },
    {
      icon: Zap,
      title: { de: 'Reifegrad bestimmen', en: 'Determine Maturity' },
      desc: { de: 'Wo stehst du? Traditional, AI-Powered, AI-Enabled oder AI-Native?', en: 'Where are you? Traditional, AI-Powered, AI-Enabled or AI-Native?' },
    },
    {
      icon: Users,
      title: { de: 'Konkreter Aktionsplan', en: 'Concrete Action Plan' },
      desc: { de: '3 konkrete nächste Schritte, die du sofort umsetzen kannst', en: '3 concrete next steps you can implement immediately' },
    },
  ];

  if (submitted) {
    return (
      <section id="booking-form" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center p-12 rounded-3xl bg-accent/10 border-2 border-accent/30">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              {language === 'de' ? 'Anfrage erhalten!' : 'Request Received!'}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {language === 'de'
                ? 'Wir melden uns innerhalb von 24 Stunden bei dir mit einem Terminvorschlag.'
                : 'We\'ll get back to you within 24 hours with a meeting proposal.'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking-form" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            {/* Overline */}
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
              {language === 'de' ? 'Gespräch buchen' : 'Book a Call'}
            </span>
            
            {/* Badge with Urgency */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  {language === 'de' ? 'Kostenlos & Unverbindlich' : 'Free & No Obligation'}
                </span>
              </span>
              <span className="w-px h-4 bg-accent/30" />
              <span className="text-sm font-medium text-destructive">
                {language === 'de' ? 'Nur 10 Plätze pro Monat' : 'Only 10 spots per month'}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
                {language === 'de' 
                  ? 'Gespräch buchen – bevor deine Competitors schneller werden' 
                  : 'Book a Call – Before Your Competitors Get Faster'}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'de'
                ? '30 Minuten. Kein Verkaufsgespräch. Nur Klarheit über deine größte Schwachstelle. Wer jetzt startet, hat 10-100x Vorteil. Wer wartet, verliert.'
                : '30 minutes. No sales pitch. Just clarity about your biggest weakness. Those who start now have a 10-100x advantage. Those who wait, lose.'}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold mb-8">
                {language === 'de' ? 'Was du bekommst:' : 'What you\'ll get:'}
              </h3>
              
              <div className="space-y-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border-2 border-border hover:border-primary/50 transition-all duration-200">
                    <div className="p-3 rounded-xl bg-accent/10">
                      <benefit.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{benefit.title[language]}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.desc[language]}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Signals */}
              <div className="p-6 rounded-xl bg-muted/30 border-2 border-border">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">250K+</div>
                    <div className="text-xs text-muted-foreground">{language === 'de' ? 'Wörter Forschung' : 'Words of Research'}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">22</div>
                    <div className="text-xs text-muted-foreground">{language === 'de' ? 'Analysierte Unternehmen' : 'Companies Analyzed'}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">✓</div>
                    <div className="text-xs text-muted-foreground">{language === 'de' ? 'Wissenschaftlich validiert' : 'Scientifically Validated'}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">10-100x</div>
                    <div className="text-xs text-muted-foreground">{language === 'de' ? 'First Mover Advantage' : 'First Mover Advantage'}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 rounded-3xl bg-card/50 border-2 border-border backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'de' ? 'Name' : 'Name'} *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Max Mustermann"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="max@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Building2 className="w-4 h-4 inline mr-1" />
                      {language === 'de' ? 'Firma' : 'Company'} *
                    </label>
                    <Input
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company GmbH"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'de' ? 'Umsatz' : 'Revenue'}
                    </label>
                    <select
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      value={formData.arr}
                      onChange={(e) => setFormData({ ...formData, arr: e.target.value })}
                    >
                      <option value="">{language === 'de' ? 'Bitte wählen' : 'Please select'}</option>
                      <option value="0-1M">€0 - €1M</option>
                      <option value="1-5M">€1M - €5M</option>
                      <option value="5-10M">€5M - €10M</option>
                      <option value="10-30M">€10M - €30M</option>
                      <option value="30-100M">€30M - €100M</option>
                      <option value="100M+">€100M+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'de' ? 'Größte Herausforderung' : 'Biggest Challenge'} ({language === 'de' ? 'optional' : 'optional'})
                  </label>
                  <Textarea
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    placeholder={language === 'de' 
                      ? 'z.B. "Unser Team wächst, aber der Output sinkt. Meetings dauern ewig..."'
                      : 'e.g. "Our team is growing but output is declining. Meetings take forever..."'}
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Calendar className="w-5 h-5 mr-2" />
                  {language === 'de' ? 'Gespräch anfragen' : 'Request Call'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  {language === 'de'
                    ? 'Mit dem Absenden akzeptierst du unsere Datenschutzbestimmungen. Wir antworten innerhalb von 24h.'
                    : 'By submitting, you accept our privacy policy. We\'ll respond within 24h.'}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
