import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Calendar, Clock, Zap, Heart, Lightbulb, Target, Users, Sparkles, Quote, X, Smile, Eye, Rocket, Brain, Star, ChevronRight, Linkedin, BookOpen, Globe, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TwinklingStars from "@/components/TwinklingStars";
import { useLanguage } from "@/contexts/LanguageContext";

const ML = () => {
  const { t } = useLanguage();
  const [selectedBooking, setSelectedBooking] = useState<'30min' | '60min'>('30min');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [popupBookingType, setPopupBookingType] = useState<'30min' | '60min'>('30min');

  const testimonials = [
    { quote: t('ml.testimonial1'), author: t('ml.testimonial1.author'), initial: 'K', color: 'bg-accent' },
    { quote: t('ml.testimonial2'), author: t('ml.testimonial2.author'), initial: 'M', color: 'bg-primary' },
    { quote: t('ml.testimonial3'), author: t('ml.testimonial3.author'), initial: 'S', color: 'bg-purple-500' },
    { quote: t('ml.testimonial4'), author: t('ml.testimonial4.author'), initial: 'A', color: 'bg-green-500' },
    { quote: t('ml.testimonial5'), author: t('ml.testimonial5.author'), initial: 'T', color: 'bg-accent' },
    { quote: t('ml.testimonial6'), author: t('ml.testimonial6.author'), initial: 'L', color: 'bg-primary' },
    { quote: t('ml.testimonial7'), author: t('ml.testimonial7.author'), initial: 'R', color: 'bg-purple-500' },
    { quote: t('ml.testimonial8'), author: t('ml.testimonial8.author'), initial: 'D', color: 'bg-green-500' },
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
    { letter: "E", title: t('ml.principle.e2.title'), desc: t('ml.principle.e2.desc') }
  ];

  const cantTolerate = [
    { title: t('ml.section7.item1.title'), desc: t('ml.section7.item1.text') },
    { title: t('ml.section7.item2.title'), desc: t('ml.section7.item2.text') },
    { title: t('ml.section7.item3.title'), desc: t('ml.section7.item3.text') },
    { title: t('ml.section7.item4.title'), desc: t('ml.section7.item4.text') },
    { title: t('ml.section7.item5.title'), desc: t('ml.section7.item5.text') }
  ];

  const joyItems = [
    { title: t('ml.section8.joy1.title'), text: t('ml.section8.joy1.text'), icon: Sparkles, color: 'text-accent' },
    { title: t('ml.section8.joy2.title'), text: t('ml.section8.joy2.text'), icon: Heart, color: 'text-primary' },
    { title: t('ml.section8.joy3.title'), text: t('ml.section8.joy3.text'), icon: Target, color: 'text-green-500' },
  ];

  const filloutUrl = selectedBooking === '30min'
    ? 'https://scalingx.fillout.com/t/fvUsJguCaVus'
    : 'https://scalingx.fillout.com/t/wMcijwFXM1us';

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <TwinklingStars />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen flex items-center px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Portrait */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <img
                src="/images/ml-hero.png"
                alt="Michel Lindenberg"
                className="w-80 h-80 md:w-96 md:h-96 object-cover object-top rounded-3xl border-2 border-primary/30 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              {t('ml.hero.badge')}
            </span>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('ml.hero.headline')}
              </span>
            </h1>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <span className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm">
                <Check className="w-4 h-4 text-accent" />
                {t('ml.hero.value1')}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm">
                <Check className="w-4 h-4 text-accent" />
                {t('ml.hero.value2')}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm">
                <Check className="w-4 h-4 text-accent" />
                {t('ml.hero.value3')}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm">
                <Check className="w-4 h-4 text-accent" />
                {t('ml.hero.value4')}
              </span>
            </div>

            {/* Booking Selection - Desktop only */}
            <div className="hidden lg:block">
              <p className="text-sm text-muted-foreground mb-3">{t('ml.booking.select')}</p>
              <div className="flex gap-4">
                <Button
                  onClick={() => setSelectedBooking('30min')}
                  className={`flex-1 ${selectedBooking === '30min'
                    ? 'bg-gradient-to-r from-accent to-accent/80 text-accent-foreground shadow-lg shadow-accent/25'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  <Clock className="w-4 h-4 mr-2" />
                  {t('ml.booking.30min')}
                </Button>
                <Button
                  onClick={() => setSelectedBooking('60min')}
                  variant="outline"
                  className={`flex-1 ${selectedBooking === '60min'
                    ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 border-0'
                    : 'border-primary/50 text-primary hover:bg-primary/10'
                  }`}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {t('ml.booking.60min')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING FILLOUT SECTION - FULL WIDTH */}
      <section id="booking" className="relative z-10 py-12">
        {/* Booking Selection - Mobile only */}
        <div className="lg:hidden mb-6 px-4">
          <p className="text-sm text-muted-foreground mb-3 text-center">{t('ml.booking.select')}</p>
          <div className="flex gap-4 max-w-md mx-auto">
            <Button
              onClick={() => setSelectedBooking('30min')}
              className={`flex-1 ${selectedBooking === '30min'
                ? 'bg-gradient-to-r from-accent to-accent/80 text-accent-foreground shadow-lg shadow-accent/25'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Clock className="w-4 h-4 mr-2" />
              {t('ml.booking.30min')}
            </Button>
            <Button
              onClick={() => setSelectedBooking('60min')}
              variant="outline"
              className={`flex-1 ${selectedBooking === '60min'
                ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 border-0'
                : 'border-primary/50 text-primary hover:bg-primary/10'
              }`}
            >
              <Calendar className="w-4 h-4 mr-2" />
              {t('ml.booking.60min')}
            </Button>
          </div>
        </div>

        {/* Full Width Fillout iframe */}
        <div className="w-full">
          <iframe
            src={filloutUrl}
            className="w-full h-[600px] border-0"
            title="Booking Form"
          />
        </div>
      </section>

      {/* SECTION 1: RENAISSANCE THINKING */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('ml.section1.title')}
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-foreground leading-relaxed font-sans">
                <strong>{t('ml.section1.intro')}</strong>
              </p>
              <p className="text-muted-foreground font-sans">{t('ml.section1.text1')}</p>
              <p className="text-muted-foreground font-sans">{t('ml.section1.text2')}</p>
              <p className="text-muted-foreground font-sans">{t('ml.section1.text3')}</p>

              <div className="pt-6">
                <p className="text-accent font-semibold text-lg mb-4">{t('ml.section1.superpower')}</p>
                <ul className="space-y-2 text-foreground font-sans">
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
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    {t('ml.section1.skill4')}
                  </li>
                </ul>
              </div>
            </div>

            {/* Speaking Image */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-primary/30">
              <img
                src="/images/ml-speaking.png"
                alt="Michel Lindenberg speaking on stage"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: LEADERSHIP IS LOVE */}
      <section className="relative z-10 py-24 px-4 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                {t('ml.section2.title')}
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Workshop Image */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-accent/30">
              <img
                src="/images/ml-workshop.png"
                alt="Michel Lindenberg in workshop with team"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground font-sans">{t('ml.section2.intro')}</p>
              <p className="text-xl text-foreground font-medium font-sans">{t('ml.section2.key')}</p>

              <div className="grid gap-6 pt-4">
                <Card className="bg-card border-accent/30 p-6">
                  <h3 className="text-accent font-semibold mb-2 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    {t('ml.section2.drive1.title')}
                  </h3>
                  <p className="text-muted-foreground font-sans">{t('ml.section2.drive1.text')}</p>
                </Card>

                <Card className="bg-card border-primary/30 p-6">
                  <h3 className="text-primary font-semibold mb-2 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    {t('ml.section2.drive2.title')}
                  </h3>
                  <p className="text-muted-foreground font-sans">{t('ml.section2.drive2.text')}</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EQUATIONS */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
              <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto font-sans text-center">
                <p>{t('ml.section3.formula1.text1')}</p>
                <p>{t('ml.section3.formula1.text2')}</p>
              </div>
            </Card>

            {/* Formula 2 */}
            <Card className="bg-card border-primary/30 p-8">
              <div className="text-center mb-6">
                <p className="text-2xl md:text-3xl font-mono font-bold text-primary">
                  {t('ml.section3.formula2')}
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto font-sans text-center">
                <p>{t('ml.section3.formula2.text1')}</p>
                <p>{t('ml.section3.formula2.text2')}</p>
              </div>
            </Card>

            {/* Formula 3 */}
            <Card className="bg-card border-accent/30 p-8">
              <div className="text-center mb-6">
                <p className="text-2xl md:text-3xl font-mono font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  {t('ml.section3.formula3')}
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto font-sans text-center">
                <p>{t('ml.section3.formula3.text1')}</p>
                <p>{t('ml.section3.formula3.text2')}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRICEPLAQE */}
      <section className="relative z-10 py-24 px-4 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                {t('ml.section4.title')}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg font-sans">{t('ml.section4.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {principles.map((principle, index) => (
              <Card key={index} className="bg-card border-border p-5 hover:border-accent/50 transition-colors">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                    {principle.letter}
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">{principle.title}</h3>
                    <p className="text-muted-foreground text-sm font-sans">{principle.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: JOURNEY */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('ml.section5.title')}
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-accent/50">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
                <h3 className="text-accent font-semibold text-lg mb-2">{t('ml.section5.origin.title')}</h3>
                <p className="text-muted-foreground font-sans">{t('ml.section5.origin.text')}</p>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/50">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-primary font-semibold text-lg mb-2">{t('ml.section5.evolution.title')}</h3>
                <p className="text-muted-foreground font-sans">{t('ml.section5.evolution.text')}</p>
              </div>

              <div className="relative pl-8 border-l-2 border-accent/50">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
                <h3 className="text-accent font-semibold text-lg mb-2">{t('ml.section5.breakthrough.title')}</h3>
                <p className="text-muted-foreground font-sans">{t('ml.section5.breakthrough.text')}</p>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/50">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                <h3 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold text-lg mb-2">{t('ml.section5.now.title')}</h3>
                <p className="text-muted-foreground font-sans">{t('ml.section5.now.text')}</p>
              </div>
            </div>

            {/* Contemplating Image */}
            <div className="space-y-6">
              <div className="aspect-square rounded-2xl overflow-hidden border border-primary/30">
                <img
                  src="/images/ml-contemplating.png"
                  alt="Michel Lindenberg contemplating"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <Card className="bg-card border-accent/30 p-6">
                <h4 className="text-accent font-semibold mb-4">{t('ml.section5.vision.title')}</h4>
                <ul className="space-y-2 text-foreground font-sans">
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
                <p className="text-muted-foreground mt-4 text-sm italic font-sans">{t('ml.section5.visionText')}</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="relative z-10 py-24 px-4 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                {t('ml.section6.title')}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border p-6 hover:border-accent/30 transition-colors">
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                    {testimonial.initial}
                  </div>
                  <div className="flex-1">
                    <Quote className="w-6 h-6 text-accent/50 mb-2" />
                    <p className="text-muted-foreground italic font-sans mb-3">{testimonial.quote}</p>
                    <p className="text-foreground text-sm font-medium">{testimonial.author}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: WHAT I DON'T STAND FOR */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-destructive">
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
                <p className="text-muted-foreground text-sm font-sans">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: WHAT BRINGS ME JOY */}
      <section className="relative z-10 py-24 px-4 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                {t('ml.section8.title')}
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {joyItems.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground font-sans">{item.text}</p>
                  </div>
                </div>
              ))}

              <Card className="bg-gradient-to-br from-accent/20 to-primary/20 border-accent/30 p-6 mt-8">
                <p className="text-xl text-foreground font-semibold mb-2">{t('ml.section8.motto')}</p>
                <p className="text-muted-foreground font-sans">{t('ml.section8.mottoText')}</p>
              </Card>
            </div>

            {/* Joy Image */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-accent/30">
              <img
                src="/images/ml-joy.png"
                alt="Michel Lindenberg expressing joy"
                className="w-full h-full object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: MY VISION */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('ml.section9.title')}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-primary/30 p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{t('ml.section9.vision1.title')}</h3>
              <p className="text-muted-foreground font-sans">{t('ml.section9.vision1.text')}</p>
            </Card>

            <Card className="bg-card border-accent/30 p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/20 flex items-center justify-center">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{t('ml.section9.vision2.title')}</h3>
              <p className="text-muted-foreground font-sans">{t('ml.section9.vision2.text')}</p>
            </Card>

            <Card className="bg-card border-purple-500/30 p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{t('ml.section9.vision3.title')}</h3>
              <p className="text-muted-foreground font-sans">{t('ml.section9.vision3.text')}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="relative z-10 py-24 px-4 bg-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              {t('ml.closing.title')}
            </span>
            <br />
            <span className="text-foreground">{t('ml.closing.together')}</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-sans">
            {t('ml.closing.text')}
          </p>

          {/* Closeup Portrait */}
          <div className="max-w-md mx-auto mb-12">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-accent/40 shadow-2xl shadow-accent/20">
              <img
                src="/images/ml-closeup.png"
                alt="Michel Lindenberg - Closeup Portrait"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Booking Selection in Closing */}
          <div className="mb-12">
            <p className="text-sm text-muted-foreground mb-3">{t('ml.booking.select')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  setPopupBookingType('30min');
                  setIsBookingOpen(true);
                }}
                className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground px-10 py-7 text-xl rounded-2xl shadow-lg shadow-accent/25"
              >
                <Calendar className="w-6 h-6 mr-3" />
                {t('ml.booking.30min')}
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              <Button
                onClick={() => {
                  setPopupBookingType('60min');
                  setIsBookingOpen(true);
                }}
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 px-10 py-7 text-xl rounded-2xl"
              >
                <Clock className="w-6 h-6 mr-3" />
                {t('ml.booking.60min')}
              </Button>
            </div>
          </div>

          {/* Booking Popup Dialog */}
          <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
            <DialogContent className="w-[700px] max-w-[95vw] h-[700px] max-h-[90vh] p-0 overflow-hidden flex flex-col">
              <DialogHeader className="p-4 pb-0 shrink-0">
                <DialogTitle className="text-lg font-semibold">
                  {popupBookingType === '30min' ? t('ml.booking.30min') : t('ml.booking.60min')}
                </DialogTitle>
              </DialogHeader>
              <div className="flex-1 overflow-hidden p-4 pt-2">
                <iframe
                  key={popupBookingType}
                  src={popupBookingType === '30min'
                    ? 'https://scalingx.fillout.com/t/fvUsJguCaVus'
                    : 'https://scalingx.fillout.com/t/wMcijwFXM1us'
                  }
                  className="w-full h-full border-0 rounded-lg"
                  title={popupBookingType === '30min' ? '30 Min Sync Call Booking' : '60 Min Deep Dive Booking'}
                />
              </div>
            </DialogContent>
          </Dialog>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
            <a href="/" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Globe className="w-5 h-5" />
              {t('ml.closing.cta.work')}
            </a>
            <a href="https://www.amazon.de/dp/B0FP8XK375" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <BookOpen className="w-5 h-5" />
              {t('ml.closing.cta.book')}
            </a>
            <a href="https://www.linkedin.com/in/michellason" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <Linkedin className="w-5 h-5" />
              {t('ml.closing.cta.linkedin')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ML;
