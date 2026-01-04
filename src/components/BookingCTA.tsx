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
      title: { de: 'Bottleneck-Diagnose', en: 'Bottleneck Diagnosis' },
      desc: { de: 'Identifiziere deinen C_min in 15 Minuten', en: 'Identify your C_min in 15 minutes' },
    },
    {
      icon: Zap,
      title: { de: 'θ_index Bestimmung', en: 'θ_index Assessment' },
      desc: { de: 'Erfahre deinen AI-Maturity Level', en: 'Learn your AI-Maturity Level' },
    },
    {
      icon: Users,
      title: { de: 'Individueller Aktionsplan', en: 'Custom Action Plan' },
      desc: { de: 'Konkrete nächste Schritte für dich', en: 'Concrete next steps for you' },
    },
  ];

  if (submitted) {
    return (
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center p-12 rounded-3xl bg-accent/10 border border-accent/30">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              {language === 'de' ? 'Anfrage erhalten!' : 'Request Received!'}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {language === 'de'
                ? 'Wir melden uns innerhalb von 24 Stunden bei dir mit einem Terminvorschlag.'
                : 'We\'ll get back to you within 24 hours with a meeting proposal.'}
            </p>
            <p className="text-sm text-muted-foreground">
              {language === 'de'
                ? 'In der Zwischenzeit: Nutze den LASR.io Scorecard oben, um deinen θ_index zu ermitteln.'
                : 'In the meantime: Use the LASR.io Scorecard above to determine your θ_index.'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                {language === 'de' ? 'Kostenlos & Unverbindlich' : 'Free & No Obligation'}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
                {language === 'de' ? 'Diagnose-Gespräch buchen' : 'Book Diagnosis Call'}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'de'
                ? '30 Minuten. Kein Sales-Pitch. Nur Klarheit über deinen Bottleneck.'
                : '30 minutes. No sales pitch. Just clarity about your bottleneck.'}
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
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border">
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
              <div className="p-6 rounded-xl bg-muted/30 border border-border">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">250K+</div>
                    <div className="text-xs text-muted-foreground">{language === 'de' ? 'Wörter Forschung' : 'Words of Research'}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">n=22</div>
                    <div className="text-xs text-muted-foreground">{language === 'de' ? 'Analysierte Unternehmen' : 'Companies Analyzed'}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">R²=0.76</div>
                    <div className="text-xs text-muted-foreground">{language === 'de' ? 'Prognose-Genauigkeit' : 'Prediction Accuracy'}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">85%</div>
                    <div className="text-xs text-muted-foreground">{language === 'de' ? 'Erfolgsrate Model 1' : 'Success Rate Model 1'}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 rounded-3xl bg-card/50 border border-border backdrop-blur-sm">
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
                      {language === 'de' ? 'Unternehmen' : 'Company'} *
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
                      ARR ({language === 'de' ? 'ungefähr' : 'approx.'})
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
                    {language === 'de' ? 'Größte Herausforderung' : 'Biggest Challenge'}
                  </label>
                  <Textarea
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    placeholder={language === 'de' 
                      ? 'z.B. "CAC steigt, Team wächst aber Output sinkt, Board macht Druck..."'
                      : 'e.g. "CAC is rising, team is growing but output is declining, board is pushing..."'}
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Calendar className="w-5 h-5 mr-2" />
                  {language === 'de' ? 'Diagnose-Call anfragen' : 'Request Diagnosis Call'}
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
