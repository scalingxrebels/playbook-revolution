import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Calendar, Clock, Zap, Heart, Lightbulb, Target, Users, Sparkles, Quote, X, Smile, Eye, Rocket, Brain, Star, ChevronRight, Linkedin, Mail, Globe, Shield, BookOpen, Compass, Palette, HandHeart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FM = () => {
  const [selectedBooking, setSelectedBooking] = useState<'30min' | '60min'>('30min');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [popupBookingType, setPopupBookingType] = useState<'30min' | '60min'>('30min');

  const buildPrinciples = [
    { letter: "B", title: "Boldness", desc: "Dare to challenge the status quo and ask \"What if?\". True progress lies beyond the comfort zone." },
    { letter: "U", title: "User-Centricity", desc: "The user is the hero of our story. Every decision, every feature, every strategy must serve their needs and improve their lives." },
    { letter: "I", title: "Integrity", desc: "Do the right thing, always. Trust is the currency of all meaningful relationships, and it's built on a foundation of honesty and transparency." },
    { letter: "L", title: "Learning", desc: "Stay curious, stay humble. Every interaction is an opportunity to learn, and every setback is a lesson in disguise." },
    { letter: "D", title: "Drive", desc: "Passion and perseverance are the fuels that turn vision into reality. I bring a relentless drive to every project I undertake." },
  ];

  const journeySteps = [
    { 
      phase: "Foundation", 
      title: "The Human Factor", 
      text: "My academic journey began with Business Psychology, where I built a deep understanding of the human drivers behind decisions, behaviors, and systems. This is the bedrock of my human-centered approach.",
      color: "accent"
    },
    { 
      phase: "Exploration", 
      title: "Learning the Ropes", 
      text: "Early experiences at companies like MAHLE and MTU, followed by a comprehensive trainee program at Haufe Group, gave me a 360-degree view of the corporate world and solidified my skills in business development and sales.",
      color: "primary"
    },
    { 
      phase: "Specialization", 
      title: "Mastering Innovation", 
      text: "I pursued my passion for building new things by earning Master's degrees in Innovation & Entrepreneurship from two of Europe's top business schools, Bocconi and Católica Lisbon. This is where I honed my craft in venture capital, lean startup methodologies, and strategic innovation.",
      color: "accent"
    },
    { 
      phase: "Application", 
      title: "Architecting the Future", 
      text: "Today, as a Venture Architect at ScalingX, I'm in my element. I'm actively developing new SaaS business ideas, defining MVP functionalities, and building the positioning and content structures for the ventures of tomorrow. This role, combined with my Design Thinking certification from the Hasso Plattner Institute, allows me to live my passion every day.",
      color: "primary"
    },
  ];

  const standFor = [
    { title: "Pragmatic Solutions", desc: "I believe in finding the most direct path to a solution, without getting lost in unnecessary complexity." },
    { title: "Creative Problem-Solving", desc: "I thrive on untangling complex challenges and finding elegant, effective solutions." },
    { title: "Customer Obsession", desc: "I am dedicated to understanding and serving the customer above all else." },
    { title: "Clear Communication", desc: "I believe in open, honest, and respectful communication across all levels of an organization." },
    { title: "Strong Perseverance", desc: "I have the grit and determination to see challenging projects through to completion." },
  ];

  const dontStandFor = [
    { title: "Innovation Theatre", desc: "Pursuing innovation for the sake of trends without a clear focus on creating real value." },
    { title: "Analysis Paralysis", desc: "Getting stuck in endless analysis instead of taking action and learning from real-world feedback." },
    { title: "Ignoring the User", desc: "Building products or services based on internal assumptions rather than genuine user needs." },
    { title: "Siloed Thinking", desc: "Working in isolation and failing to leverage the collective intelligence of the team." },
    { title: "Change Resistance", desc: "Clinging to the old ways of doing things in the face of new evidence and a changing world." },
  ];

  const equations = [
    {
      formula: "Empathy × Creativity = Innovation",
      text1: "True innovation doesn't start with technology; it starts with a deep, authentic understanding of human needs, pains, and desires.",
      text2: "By combining this empathetic foundation with creative problem-solving, we can design solutions that truly resonate and create lasting value.",
      color: "accent"
    },
    {
      formula: "Strategy × Execution = Growth",
      text1: "A brilliant strategy is a beautiful thing, but it's worthless without relentless, intelligent execution.",
      text2: "I bridge the gap between the whiteboard and the real world, ensuring that visionary ideas are translated into tangible results and sustainable growth.",
      color: "primary"
    },
    {
      formula: "Curiosity × Adaptability = Resilience",
      text1: "In a world of constant change, the ability to learn, unlearn, and relearn is the ultimate competitive advantage.",
      text2: "I cultivate a mindset of perpetual curiosity and embrace adaptability, allowing me to navigate uncertainty and turn challenges into opportunities.",
      color: "accent"
    },
  ];

  const futureVision = [
    {
      title: "Human-Centered AI",
      text: "Leveraging artificial intelligence to solve real human problems and create experiences that are not just smart, but also intuitive and empathetic.",
      icon: Brain,
      color: "primary"
    },
    {
      title: "Sustainable Ventures",
      text: "Building businesses that are not only profitable but also sustainable, ethical, and a positive force in the world.",
      icon: Heart,
      color: "accent"
    },
    {
      title: "Empowered Teams",
      text: "Creating environments where people are empowered to do their best work, to grow their skills, and to find meaning and purpose in their contributions.",
      icon: Users,
      color: "primary"
    },
  ];

  const filloutUrl = selectedBooking === '30min' 
    ? 'https://scalingx.fillout.com/t/fm-30min' 
    : 'https://scalingx.fillout.com/t/fm-60min';

  const popupFilloutUrl = popupBookingType === '30min'
    ? 'https://scalingx.fillout.com/t/fm-30min'
    : 'https://scalingx.fillout.com/t/fm-60min';

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
                src="/images/team-florian.png" 
                alt="Florian Metzger - Architect of Growth & Human-Centered Innovation"
                className="w-full h-full object-cover rounded-3xl border-2 border-accent/30 shadow-accent-glow"
                style={{ objectPosition: 'center 10%' }}
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-accent rounded-2xl blur-2xl opacity-40" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-8 order-2 lg:order-2">
            {/* Overline */}
            <div className="flex items-center gap-4 mb-8 animate-fade-in">
              <span className="h-px w-12 bg-gradient-primary" />
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
                Architect of Growth & Human-Centered Innovation
              </span>
              <span className="h-px w-12 bg-gradient-primary" />
            </div>
            
            <h1 className="text-section font-display font-bold">
              <span className="text-gradient">
                I build bridges between human needs and business success.
              </span>
            </h1>
            
            <div className="space-y-3 text-body-lg text-muted-foreground">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-accent flex-shrink-0" />
                With empathy that uncovers real problems.
              </div>
              <div className="flex items-center gap-3">
                <Lightbulb className="w-5 h-5 text-primary flex-shrink-0" />
                With creativity that designs valuable solutions.
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-accent flex-shrink-0" />
                With strategy that creates sustainable growth.
              </div>
              <div className="flex items-center gap-3">
                <Rocket className="w-5 h-5 text-primary flex-shrink-0" />
                With a passion for building what's next.
              </div>
            </div>

            {/* Booking Selection - Desktop only */}
            <div className="hidden md:block space-y-4">
              <p className="text-sm text-muted-foreground">Select a booking option:</p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => setSelectedBooking('30min')} 
                  className={`flex-1 ${selectedBooking === '30min' ? 'bg-gradient-accent text-white shadow-lg shadow-accent/25' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
                >
                  <Clock className="w-4 h-4 mr-2" />
                  30 Min Intro Call
                </Button>
                <Button 
                  onClick={() => setSelectedBooking('60min')} 
                  className={`flex-1 ${selectedBooking === '60min' ? 'bg-gradient-primary text-primary-foreground shadow-lg shadow-primary/25' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  60 Min Strategy Session
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
            <p className="text-sm text-muted-foreground text-center">Select a booking option:</p>
            <div className="flex gap-4">
              <Button 
                onClick={() => setSelectedBooking('30min')} 
                className={`flex-1 ${selectedBooking === '30min' ? 'bg-gradient-accent text-white shadow-lg shadow-accent/25' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
              >
                <Clock className="w-4 h-4 mr-2" />
                30 Min Intro
              </Button>
              <Button 
                onClick={() => setSelectedBooking('60min')} 
                className={`flex-1 ${selectedBooking === '60min' ? 'bg-gradient-primary text-primary-foreground shadow-lg shadow-primary/25' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
              >
                <Calendar className="w-4 h-4 mr-2" />
                60 Min Strategy
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

      {/* SECTION 1: A PSYCHOLOGIST'S MIND */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient">
                A Psychologist's Mind in a Builder's World
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-foreground leading-relaxed">
                <strong>I'm not just a business developer. I'm a student of human behavior, obsessed with finding the 'why' behind the 'what'.</strong>
              </p>
              <p className="text-muted-foreground">
                My background in business psychology is my secret weapon. It allows me to see the world through the eyes of the customer, to understand their unspoken needs and motivations.
              </p>
              <p className="text-muted-foreground">
                I connect the dots between psychology, technology, and business to create solutions that are not only viable and feasible but, most importantly, desirable and valuable to people.
              </p>
              <p className="text-accent font-semibold text-lg">
                My passion lies in the dynamic space between a creative spark and a thriving business model. This is where I operate best: turning insights into action and ideas into impact.
              </p>
            </div>

            {/* Placeholder for workshop image */}
            <Card className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/20 border-accent/30 flex items-center justify-center">
              <div className="text-center p-8">
                <Brain className="w-16 h-16 text-accent mx-auto mb-4" />
                <p className="text-muted-foreground">Psychology × Technology × Business</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 2: COLLABORATION */}
      <section className="relative z-10 py-24 px-4 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient-sunset">
                Collaboration is the Engine of Innovation
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
              My experience in diverse, international teams—from Milan to Lisbon—has taught me one fundamental truth: the most groundbreaking ideas are not born in isolation. They emerge from a symphony of different perspectives, a fusion of diverse talents, and a shared commitment to a common goal.
            </p>
            
            <p className="text-xl text-foreground font-medium text-center">That's why I believe in:</p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-accent/30 p-6">
                <h3 className="text-accent font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Radical Collaboration
                </h3>
                <p className="text-muted-foreground text-sm">Breaking down silos and fostering an environment where every voice is heard and valued.</p>
              </Card>

              <Card className="bg-card border-primary/30 p-6">
                <h3 className="text-primary font-semibold mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Psychological Safety
                </h3>
                <p className="text-muted-foreground text-sm">Creating a space where people feel safe to take creative risks, to challenge the status quo, and to fail forward.</p>
              </Card>

              <Card className="bg-card border-accent/30 p-6">
                <h3 className="text-accent font-semibold mb-2 flex items-center gap-2">
                  <Compass className="w-5 h-5" />
                  Leading with Questions
                </h3>
                <p className="text-muted-foreground text-sm">Guiding teams to discover their own answers and unlock their collective intelligence.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE EQUATIONS */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient">
                The Equations That Drive My Work
              </span>
            </h2>
          </div>

          <div className="grid gap-8">
            {equations.map((eq, index) => (
              <Card key={index} className={`bg-card border-${eq.color}/30 p-8`}>
                <div className="text-center mb-6">
                  <p className={`text-2xl md:text-3xl font-mono font-bold text-${eq.color}`}>
                    {eq.formula}
                  </p>
                </div>
                <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto">
                  <p>{eq.text1}</p>
                  <p>{eq.text2}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: BUILD PRINCIPLES */}
      <section className="relative z-10 py-24 px-4 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-4">
              <span className="text-gradient-sunset">
                My BUILD Principles
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">The five principles that guide my actions and decisions.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {buildPrinciples.map((principle, index) => (
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
                My Journey: From Understanding People to Building Ventures
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {journeySteps.map((step, index) => (
              <div key={index} className={`relative pl-8 border-l-2 border-${step.color}/50`}>
                <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full bg-${step.color}`}></div>
                <div className="mb-2">
                  <span className={`text-xs uppercase tracking-wider text-${step.color} font-medium`}>{step.phase}</span>
                </div>
                <h3 className={`text-${step.color} font-semibold text-lg mb-2`}>{step.title}</h3>
                <p className="text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHAT I STAND FOR */}
      <section className="relative z-10 py-24 px-4 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient-sunset">
                What I Stand For
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standFor.map((item, index) => (
              <Card key={index} className="bg-card border-accent/30 p-6 hover:border-accent/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Star className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-foreground font-semibold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: WHAT I DON'T STAND FOR */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6 text-destructive">
              What I DON'T Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dontStandFor.map((item, index) => (
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

      {/* SECTION 8: WHAT MAKES ME SHINE */}
      <section className="relative z-10 py-24 px-4 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient-sunset">
                What Makes Me Shine
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
                  <h3 className="text-foreground font-semibold mb-1">Moment of Joy 1</h3>
                  <p className="text-muted-foreground">The 'Aha!' moment in a user interview when a deep, unmet need is finally uncovered.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">Moment of Joy 2</h3>
                  <p className="text-muted-foreground">Witnessing a cross-functional team rally around a shared vision and bring a new idea to life.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">Moment of Joy 3</h3>
                  <p className="text-muted-foreground">Seeing a product or service I helped build make a real, positive impact on someone's life.</p>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-accent/20 to-primary/20 border-accent/30 p-6 mt-8">
                <p className="text-xl text-foreground font-semibold mb-2">My Motto</p>
                <p className="text-muted-foreground italic">"My passion lies in the development of creative solutions, the realisation of strategic growth projects and the development of new business models."</p>
              </Card>
            </div>

            {/* Vision Card */}
            <Card className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30 flex items-center justify-center">
              <div className="text-center p-8">
                <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Insights → Action → Impact</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 9: THE FUTURE I'M BUILDING */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient">
                The Future I'm Building
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {futureVision.map((vision, index) => (
              <Card key={index} className={`bg-card border-${vision.color}/30 p-6 text-center`}>
                <div className={`w-16 h-16 rounded-2xl bg-${vision.color}/20 flex items-center justify-center mx-auto mb-4`}>
                  <vision.icon className={`w-8 h-8 text-${vision.color}`} />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2">{vision.title}</h3>
                <p className="text-muted-foreground text-sm">{vision.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="relative z-10 py-24 px-4 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Portrait */}
            <div className="aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-accent/30 shadow-accent-glow">
              <img 
                src="/images/team-florian.png" 
                alt="Florian Metzger - Portrait" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 10%' }}
              />
            </div>

            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-section font-display font-bold">
                <span className="text-gradient">Let's build the future.</span>
              </h2>
              <p className="text-2xl text-accent font-semibold">Together.</p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I partner with ambitious founders, innovative companies, and passionate teams who are driven to solve meaningful problems. If you're ready to turn your vision into reality, let's talk.
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
                  30 Min Intro Call
                </Button>
                <Button 
                  onClick={() => {
                    setPopupBookingType('60min');
                    setIsBookingOpen(true);
                  }}
                  className="bg-gradient-primary text-primary-foreground shadow-lg shadow-primary/25"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  60 Min Strategy Session
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <a 
                  href="https://www.linkedin.com/in/florian-metzger/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
                <a 
                  href="mailto:florian@scalingx.com"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email Florian
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FM FOOTER QUOTES */}
      <section className="relative z-10 py-12 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground italic">
            <span>"Empathy × Creativity = Innovation"</span>
            <span className="hidden md:inline">•</span>
            <span>"Strategy × Execution = Growth"</span>
            <span className="hidden md:inline">•</span>
            <span>"Curiosity × Adaptability = Resilience"</span>
          </div>
        </div>
      </section>

      <Footer />

      {/* Booking Dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-center">
              {popupBookingType === '30min' ? '30 Min Intro Call' : '60 Min Strategy Session'}
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

export default FM;
