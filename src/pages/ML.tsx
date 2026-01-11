import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Calendar, Clock, Zap, Heart, Lightbulb, Target, Users, Sparkles, Quote, X, Smile, Eye, Rocket, Brain, Star, ChevronRight, Linkedin, BookOpen, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const ML = () => {
  const { t } = useLanguage();
  const [selectedBooking, setSelectedBooking] = useState<'30min' | '60min'>('30min');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [popupBookingType, setPopupBookingType] = useState<'30min' | '60min'>('30min');

  const testimonials = [
    t('ml.testimonial1'), t('ml.testimonial2'), t('ml.testimonial3'), t('ml.testimonial4'),
    t('ml.testimonial5'), t('ml.testimonial6'), t('ml.testimonial7'), t('ml.testimonial8')
  ];

  const principles = [
    { letter: "P", title: t('ml.principle.p.title'), desc: t('ml.principle.p.desc') },
    { letter: "R", title: t('ml.principle.r.title'), desc: t('ml.principle.r.desc') },
    { letter: "I", title: t('ml.principle.i.title'), desc: t('ml.principle.i.desc') },
    { letter: "C", title: t('ml.principle.c.title'), desc: t('ml.principle.c.desc') },
    { letter: "E", title: t('ml.principle.e1.title'), desc: t('ml.principle.e1.desc') },
    { letter: "P", title: t('ml.principle.p2.title'), desc: t('ml.principle.p2.desc') },
    { letter: "L", title: t('ml.principle.l.title'), desc: t('ml.principle.l.desc') },
    { letter: "A", title: t('ml.principle.a.title'), desc: t('ml.principle.a.desc') },
    { letter: "Q", title: t('ml.principle.q.title'), desc: t('ml.principle.q.desc') },
    { letter: "E", title: t('ml.principle.e2.title'), desc: t('ml.principle.e2.desc') },
  ];

  const cantTolerate = [
    { title: t('ml.section7.item1.title'), desc: t('ml.section7.item1.text') },
    { title: t('ml.section7.item2.title'), desc: t('ml.section7.item2.text') },
    { title: t('ml.section7.item3.title'), desc: t('ml.section7.item3.text') },
    { title: t('ml.section7.item4.title'), desc: t('ml.section7.item4.text') },
    { title: t('ml.section7.item5.title'), desc: t('ml.section7.item5.text') },
  ];

  const filloutUrl = selectedBooking === '30min' 
    ? 'https://scalingx.fillout.com/t/fvUsJguCaVus' 
    : 'https://scalingx.fillout.com/t/wMcijwFXM1us';

  const popupFilloutUrl = popupBookingType === '30min'
    ? 'https://scalingx.fillout.com/t/fvUsJguCaVus'
    : 'https://scalingx.fillout.com/t/wMcijwFXM1us';

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent) / 0.12) 0%, transparent 70%)', animationDelay: '2s' }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)', animationDelay: '4s' }}
        />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Portrait */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md w-full">
              <img 
                src="/images/ml-hero.png" 
                alt="Michel Lason - AI-Native Renaissance Leader" 
                className="w-full h-full object-cover rounded-3xl border-2 border-accent/30 shadow-accent-glow"
                style={{ objectPosition: 'center 10%' }}
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-accent rounded-2xl blur-2xl opacity-40" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-8 order-2 lg:order-2">
            {/* Overline - consistent with homepage */}
            <div className="flex items-center gap-4 mb-8 animate-fade-in">
              <span className="h-px w-12 bg-gradient-primary" />
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
                {t('ml.hero.badge')}
              </span>
              <span className="h-px w-12 bg-gradient-primary" />
            </div>
            
            <h1 className="text-section font-display font-bold">
              <span className="text-gradient">
                {t('ml.hero.headline')}
              </span>
            </h1>
            
            <div className="space-y-3 text-body-lg text-muted-foreground">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-accent flex-shrink-0" />
                {t('ml.hero.value1')}
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                {t('ml.hero.value2')}
              </div>
              <div className="flex items-center gap-3">
                <Brain className="w-5 h-5 text-accent flex-shrink-0" />
                {t('ml.hero.value3')}
              </div>
              <div className="flex items-center gap-3">
                <Smile className="w-5 h-5 text-primary flex-shrink-0" />
                {t('ml.hero.value4')}
              </div>
            </div>

            {/* Booking Selection - Desktop only */}
            <div className="hidden md:block space-y-4">
              <p className="text-sm text-muted-foreground">{t('ml.booking.select')}</p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => setSelectedBooking('30min')} 
                  className={`flex-1 ${selectedBooking === '30min' ? 'bg-gradient-accent text-white shadow-lg shadow-accent/25' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
                >
                  <Clock className="w-4 h-4 mr-2" />
                  {t('ml.booking.30min')}
                </Button>
                <Button 
                  onClick={() => setSelectedBooking('60min')} 
                  className={`flex-1 ${selectedBooking === '60min' ? 'bg-gradient-primary text-primary-foreground shadow-lg shadow-primary/25' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {t('ml.booking.60min')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING FILLOUT SECTION */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Booking Selection - Mobile only */}
          <div className="md:hidden space-y-4 mb-8">
            <p className="text-sm text-muted-foreground text-center">{t('ml.booking.select')}</p>
            <div className="flex gap-4">
              <Button 
                onClick={() => setSelectedBooking('30min')} 
                className={`flex-1 ${selectedBooking === '30min' ? 'bg-gradient-accent text-white shadow-lg shadow-accent/25' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
              >
                <Clock className="w-4 h-4 mr-2" />
                {t('ml.booking.30min')}
              </Button>
              <Button 
                onClick={() => setSelectedBooking('60min')} 
                className={`flex-1 ${selectedBooking === '60min' ? 'bg-gradient-primary text-primary-foreground shadow-lg shadow-primary/25' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
              >
                <Calendar className="w-4 h-4 mr-2" />
                {t('ml.booking.60min')}
              </Button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border bg-card">
            <iframe 
              src={filloutUrl}
              className="w-full h-[600px]"
              title="Booking Calendar"
            />
          </div>
        </div>
      </section>

      {/* SECTION 1: WHO I AM */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient">
                {t('ml.section1.title')}
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-foreground leading-relaxed">
                <strong>{t('ml.section1.intro')}</strong>
              </p>
              <p className="text-muted-foreground">{t('ml.section1.text1')}</p>
              <p className="text-muted-foreground">{t('ml.section1.text2')}</p>
              <p className="text-muted-foreground">{t('ml.section1.text3')}</p>
              
              <div className="pt-6">
                <p className="text-accent font-semibold text-lg mb-4">{t('ml.section1.superpower')}</p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    {t('ml.section1.skill1')}
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    {t('ml.section1.skill2')}
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    {t('ml.section1.skill3')}
                  </li>
                </ul>
              </div>

              <Card className="bg-card border-accent/30 p-6 mt-6">
                <p className="text-muted-foreground">
                  <strong className="text-accent">{t('ml.section1.why')}</strong><br />
                  {t('ml.section1.whyAnswer')}
                </p>
              </Card>
            </div>

            {/* Speaking Image */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-primary/30">
              <img 
                src="/images/ml-speaking.png" 
                alt="Michel Lason speaking on stage" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT DRIVES ME */}
      <section className="relative z-10 py-24 px-4 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient-sunset">
                {t('ml.section2.title')}
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Workshop Image */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-accent/30">
              <img 
                src="/images/ml-workshop.png" 
                alt="Michel Lason in workshop with team" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">{t('ml.section2.intro')}</p>
              <p className="text-xl text-foreground font-medium">{t('ml.section2.key')}</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>{t('ml.section2.condition1')}</li>
                <li>{t('ml.section2.condition2')}</li>
                <li>{t('ml.section2.condition3')}</li>
              </ul>
              <p className="text-accent font-semibold">{t('ml.section2.definition')}</p>

              <div className="grid gap-6 pt-6">
                <Card className="bg-card border-accent/30 p-6">
                  <h3 className="text-accent font-semibold mb-2 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    {t('ml.section2.drive1.title')}
                  </h3>
                  <p className="text-muted-foreground">{t('ml.section2.drive1.text')}</p>
                </Card>

                <Card className="bg-card border-primary/30 p-6">
                  <h3 className="text-primary font-semibold mb-2 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    {t('ml.section2.drive2.title')}
                  </h3>
                  <p className="text-muted-foreground">{t('ml.section2.drive2.text')}</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MY FORMULAS */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient">
                {t('ml.section3.title')}
              </span>
            </h2>
          </div>

          <div className="grid gap-8">
            {/* Formula 1 */}
            <Card className="bg-card border-accent/30 p-8">
              <div className="text-center mb-6">
                <p className="text-2xl md:text-3xl font-mono font-bold text-accent">
                  {t('ml.section3.formula1')}
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto">
                <p>{t('ml.section3.formula1.text1')}</p>
                <p>{t('ml.section3.formula1.text2')}</p>
                <p className="italic">{t('ml.section3.formula1.text3')}</p>
                <p className="text-foreground font-semibold">{t('ml.section3.formula1.result')}</p>
              </div>
            </Card>

            {/* Formula 2 */}
            <Card className="bg-card border-primary/30 p-8">
              <div className="text-center mb-6">
                <p className="text-2xl md:text-3xl font-mono font-bold text-primary">
                  {t('ml.section3.formula2')}
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto">
                <p>{t('ml.section3.formula2.text1')}</p>
                <p>{t('ml.section3.formula2.text2')}</p>
                <p className="text-primary font-semibold">{t('ml.section3.formula2.result')}</p>
              </div>
            </Card>

            {/* Formula 3 */}
            <Card className="bg-card border-accent/30 p-8">
              <div className="text-center mb-6">
                <p className="text-2xl md:text-3xl font-mono font-bold text-gradient-sunset">
                  {t('ml.section3.formula3')}
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto">
                <p>{t('ml.section3.formula3.text1')}</p>
                <p>{t('ml.section3.formula3.text2')}</p>
                <p className="text-accent font-semibold">{t('ml.section3.formula3.result')}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4: MY PRINCIPLES (PRICEPLAQE) */}
      <section className="relative z-10 py-24 px-4 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-4">
              <span className="text-gradient-sunset">
                {t('ml.section4.title')}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">{t('ml.section4.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {principles.map((principle, index) => (
              <Card key={index} className="bg-card border-border p-5 hover:border-accent/50 transition-colors">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-sunset flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {principle.letter}
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">{principle.title}</h3>
                    <p className="text-muted-foreground text-sm">{principle.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: MY JOURNEY */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient">
                {t('ml.section5.title')}
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-accent/50">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
                <h3 className="text-accent font-semibold text-lg mb-2">{t('ml.section5.origin.title')}</h3>
                <p className="text-muted-foreground">{t('ml.section5.origin.text')}</p>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/50">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-primary font-semibold text-lg mb-2">{t('ml.section5.evolution.title')}</h3>
                <p className="text-muted-foreground">{t('ml.section5.evolution.text')}</p>
              </div>

              <div className="relative pl-8 border-l-2 border-accent/50">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
                <h3 className="text-accent font-semibold text-lg mb-2">{t('ml.section5.breakthrough.title')}</h3>
                <p className="text-muted-foreground">{t('ml.section5.breakthrough.text')}</p>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/50">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-sunset"></div>
                <h3 className="text-gradient-sunset font-semibold text-lg mb-2">{t('ml.section5.now.title')}</h3>
                <p className="text-muted-foreground">{t('ml.section5.now.text')}</p>
              </div>
            </div>

            {/* Contemplating Image */}
            <div className="space-y-6">
              <div className="aspect-square rounded-2xl overflow-hidden border border-primary/30">
                <img 
                  src="/images/ml-contemplating.png" 
                  alt="Michel Lason contemplating" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <Card className="bg-card border-accent/30 p-6">
                <h4 className="text-accent font-semibold mb-4">{t('ml.section5.vision.title')}</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-accent" />
                    {t('ml.section5.vision1')}
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-accent" />
                    {t('ml.section5.vision2')}
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-accent" />
                    {t('ml.section5.vision3')}
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4 text-sm italic">{t('ml.section5.visionText')}</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHAT PEOPLE SAY */}
      <section className="relative z-10 py-24 px-4 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient-sunset">
                {t('ml.section6.title')}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((quote, index) => (
              <Card key={index} className="bg-card border-border p-6 hover:border-accent/30 transition-colors">
                <Quote className="w-8 h-8 text-accent/50 mb-4" />
                <p className="text-muted-foreground italic">"{quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: WHAT I CAN'T TOLERATE */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6 text-destructive">
              {t('ml.section7.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cantTolerate.map((item, index) => (
              <Card key={index} className="bg-card border-destructive/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="text-destructive font-semibold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: WHAT BRINGS ME JOY */}
      <section className="relative z-10 py-24 px-4 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient-sunset">
                {t('ml.section8.title')}
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Smile className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">{t('ml.section8.joyLabel')} 1</h3>
                  <p className="text-muted-foreground">{t('ml.section8.joy1')}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">{t('ml.section8.joyLabel')} 2</h3>
                  <p className="text-muted-foreground">{t('ml.section8.joy2')}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">{t('ml.section8.joyLabel')} 3</h3>
                  <p className="text-muted-foreground whitespace-pre-line">{t('ml.section8.joy3')}</p>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-accent/20 to-primary/20 border-accent/30 p-6 mt-8">
                <p className="text-xl text-foreground font-semibold mb-2">{t('ml.section8.motto')}</p>
                <p className="text-muted-foreground">{t('ml.section8.mottoText')}</p>
              </Card>
            </div>

            {/* Joy Image */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-accent/30">
              <img 
                src="/images/ml-joy.png" 
                alt="Michel Lason expressing joy" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: MY VISION */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient">
                {t('ml.section9.title')}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-primary/30 p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{t('ml.section9.vision1.title')}</h3>
              <p className="text-muted-foreground text-sm">{t('ml.section9.vision1.text')}</p>
            </Card>

            <Card className="bg-card border-accent/30 p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{t('ml.section9.vision2.title')}</h3>
              <p className="text-muted-foreground text-sm">{t('ml.section9.vision2.text')}</p>
            </Card>

            <Card className="bg-card border-primary/30 p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-sunset flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{t('ml.section9.vision3.title')}</h3>
              <p className="text-muted-foreground text-sm">{t('ml.section9.vision3.text')}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="relative z-10 py-24 px-4 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Closeup Image */}
            <div className="aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-accent/30 shadow-accent-glow">
              <img 
                src="/images/ml-closeup.png" 
                alt="Michel Lason - Closeup Portrait" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 10%' }}
              />
            </div>

            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-section font-display font-bold">
                <span className="text-gradient">{t('ml.closing.title')}</span>
              </h2>
              <p className="text-2xl text-accent font-semibold">{t('ml.closing.together')}</p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('ml.closing.text')}
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => {
                    setPopupBookingType('30min');
                    setIsBookingOpen(true);
                  }}
                  className="bg-gradient-accent text-white shadow-lg shadow-accent/25"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  {t('ml.booking.30min')}
                </Button>
                <Button 
                  onClick={() => {
                    setPopupBookingType('60min');
                    setIsBookingOpen(true);
                  }}
                  className="bg-gradient-primary text-primary-foreground shadow-lg shadow-primary/25"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {t('ml.booking.60min')}
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <a 
                  href="/" 
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  {t('ml.closing.cta.work')}
                </a>
                <a 
                  href="https://www.amazon.de/dp/B0F2G7VT2F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  {t('ml.closing.cta.book')}
                </a>
                <a 
                  href="https://www.linkedin.com/in/michellindenberg/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  {t('ml.closing.cta.linkedin')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ML FOOTER QUOTES */}
      <section className="relative z-10 py-12 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground italic">
            <span>{t('ml.footer.quote1')}</span>
            <span className="hidden md:inline">•</span>
            <span>{t('ml.footer.quote2')}</span>
            <span className="hidden md:inline">•</span>
            <span>{t('ml.footer.quote3')}</span>
          </div>
        </div>
      </section>

      <Footer />

      {/* Booking Dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-center">
              {popupBookingType === '30min' ? t('ml.booking.30min') : t('ml.booking.60min')}
            </DialogTitle>
          </DialogHeader>
          <div className="rounded-xl overflow-hidden">
            <iframe 
              src={popupFilloutUrl}
              className="w-full h-[600px]"
              title="Booking Calendar"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ML;
