import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, Calendar, Clock, Zap, Target, Users, 
  Sparkles, Quote, TrendingUp, BarChart3, Briefcase, 
  Award, CheckCircle, Building2, Rocket, Brain, Star, 
  ChevronRight, Linkedin, Globe, Factory, Lightbulb,
  Bot, Cog, Monitor, BookOpen, ExternalLink
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import FilloutBookingModal from "@/components/forms/FilloutBookingModal";

const STORAGE_KEY = 'scalingx_utm_params';

function buildEmbedUrl(formSlug: string, source: string): string {
  const baseUrl = `https://www.cal.scalingx.io/${formSlug}`;
  const params = new URLSearchParams();
  
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const utmParams = JSON.parse(stored);
      if (utmParams.utm_source) params.set('utm_source', utmParams.utm_source);
      if (utmParams.utm_medium) params.set('utm_medium', utmParams.utm_medium);
      if (utmParams.utm_campaign) params.set('utm_campaign', utmParams.utm_campaign);
      if (utmParams.utm_content) params.set('utm_content', utmParams.utm_content);
      if (utmParams.utm_term) params.set('utm_term', utmParams.utm_term);
    }
  } catch (e) {
    console.warn('Failed to read UTM params:', e);
  }
  
  params.set('source', source);
  const queryString = params.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

const AH = () => {
  const { t, language } = useLanguage();
  const [selectedBooking, setSelectedBooking] = useState<'30min' | '60min'>('30min');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [popupBookingType, setPopupBookingType] = useState<'30min' | '60min'>('30min');

  // Career Journey Data
  const careerSteps = [
    { 
      period: "2010-2013", 
      title: language === 'de' ? "Service Excellence Foundation" : "Service Excellence Foundation",
      desc: language === 'de' ? "Ausbildung in einem 4-Sterne Hotel mit Fokus auf Kundenservice und operative Exzellenz" : "Training in a 4-star hotel with focus on customer service and operational excellence",
      learning: "Customer-Centric Thinking"
    },
    { 
      period: "2013-2018", 
      title: language === 'de' ? "Gastronomie Leadership" : "Gastronomy Leadership",
      desc: language === 'de' ? "Führung eines Restaurantteams mit voller operativer Verantwortung" : "Leading a restaurant team with full operational responsibility",
      learning: "Team Management & Operations"
    },
    { 
      period: "2018-2020", 
      title: language === 'de' ? "Executive Search Expertise" : "Executive Search Expertise",
      desc: language === 'de' ? "35 erfolgreiche Executive Placements | €2,8M Placement Value" : "35 successful executive placements | €2.8M placement value",
      learning: "High-Level Networking & Complex Sales Cycles"
    },
    { 
      period: "2019-2020", 
      title: language === 'de' ? "Enterprise PPC & Data-Driven Optimization" : "Enterprise PPC & Data-Driven Optimization",
      desc: language === 'de' ? "28% ROAS-Verbesserung | 15% CTR-Steigerung" : "28% ROAS improvement | 15% CTR increase",
      learning: "Analytics & Performance Optimization"
    },
    { 
      period: "2020-2023", 
      title: language === 'de' ? "Performance Marketing Leadership" : "Performance Marketing Leadership",
      desc: language === 'de' ? "42% Umsatzsteigerung über 3 Jahre | 35 neue Kundenbeziehungen" : "42% revenue increase over 3 years | 35 new client relationships",
      learning: "Team Building & Skalierung"
    },
    { 
      period: "2023-2024", 
      title: language === 'de' ? "B2B Sales Strategy & Industrial Growth" : "B2B Sales Strategy & Industrial Growth",
      desc: language === 'de' ? "62 Neukunden | €1,2M Pipeline | 100% Retention" : "62 new clients | €1.2M pipeline | 100% retention",
      learning: "Rapid Sales Execution"
    },
    { 
      period: "2024-2025", 
      title: language === 'de' ? "Enterprise Solutions & Digital Transformation" : "Enterprise Solutions & Digital Transformation",
      desc: language === 'de' ? "28% Umsatzwachstum | Team 6→12 | 7 neue Partnerschaften" : "28% revenue growth | Team 6→12 | 7 new partnerships",
      learning: "C-Level Leadership & Strategic Partnerships"
    },
    { 
      period: language === 'de' ? "2025-heute" : "2025-now",
      title: language === 'de' ? "Hypergrowth & Skalierung" : "Hypergrowth & Scaling",
      desc: language === 'de' ? "Expertise × Speed = Impact – Systeme für nachhaltiges Wachstum" : "Expertise × Speed = Impact – Systems for sustainable growth",
      learning: "Hypergrowth Frameworks & Scaling Systems"
    },
  ];

  // Track Record Stats
  const trackRecord = [
    { value: "€2.5 Mrd+", label: language === 'de' ? "Bewertungsvolumen betreut" : "Valuation volume managed" },
    { value: "60+", label: language === 'de' ? "Unternehmen transformiert" : "Companies transformed" },
    { value: "Ø 32%", label: language === 'de' ? "EBITDA-Verbesserung" : "EBITDA improvement" },
    { value: "140+", label: language === 'de' ? "Engagements abgeschlossen" : "Engagements completed" },
  ];

  // Customer Results
  const customerResults = [
    { 
      type: language === 'de' ? "PE-Portfolio-Unternehmen" : "PE Portfolio Companies",
      result: language === 'de' ? "Exit-Bewertungen um 2.1x gesteigert" : "Exit valuations increased by 2.1x",
      detail: language === 'de' ? "Durchschnitt über 8 Transaktionen" : "Average across 8 transactions",
      icon: Building2
    },
    { 
      type: language === 'de' ? "Mittelständische Fertigung" : "Mid-Market Manufacturing",
      result: language === 'de' ? "Sales-Zyklen um 40% verkürzt" : "Sales cycles reduced by 40%",
      detail: language === 'de' ? "Bei Unternehmen mit €20-50M Umsatz" : "For companies with €20-50M revenue",
      icon: Factory
    },
    { 
      type: language === 'de' ? "B2B-Dienstleister" : "B2B Service Providers",
      result: language === 'de' ? "Pipeline-Wachstum von +45%" : "Pipeline growth of +45%",
      detail: language === 'de' ? "Innerhalb der ersten 90 Tage" : "Within the first 90 days",
      icon: Briefcase
    },
    { 
      type: language === 'de' ? "Tech-Unternehmen" : "Tech Companies",
      result: language === 'de' ? "ARR pro Mitarbeiter verdoppelt" : "ARR per employee doubled",
      detail: language === 'de' ? "Durch Prozessautomatisierung und AI-Integration" : "Through process automation and AI integration",
      icon: Rocket
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: language === 'de' ? "Mittelständler - Fertigung & Maschinenbau" : "Mid-Market - Manufacturing & Engineering",
      situation: language === 'de' ? "Familienunternehmen mit €35M Umsatz stand vor PE-Übernahme, aber EBITDA-Marge unter Branchenschnitt" : "Family business with €35M revenue facing PE acquisition, but EBITDA margin below industry average",
      problem: language === 'de' ? "Vertrieb war reaktiv, keine klare Preisstruktur, Margen erodierten durch Einzelfertigung" : "Sales was reactive, no clear pricing structure, margins eroding through custom manufacturing",
      solution: language === 'de' ? "12-Wochen Execution Programm: Pricing-Architektur neu aufgebaut, Vertriebsprozess standardisiert, Key-Account-Management eingeführt" : "12-week execution program: Rebuilt pricing architecture, standardized sales process, implemented key account management",
      results: ["34% EBITDA", "2.4x Multiple"],
      quote: language === 'de' ? "Die PE-Gesellschaft hat unseren Wert um €12M höher bewertet als erwartet. Die Investition in Alban hat sich 40-fach ausgezahlt." : "The PE firm valued us €12M higher than expected. The investment in Alban paid off 40x.",
      author: language === 'de' ? "Geschäftsführer, Maschinenbau-Mittelständler, Bayern" : "CEO, Mid-Market Manufacturing, Bavaria"
    },
    {
      title: language === 'de' ? "PE-Portfolio - Business Services" : "PE Portfolio - Business Services",
      situation: language === 'de' ? "PE-geführtes Unternehmen (€28M Umsatz) verfehlte seine 100-Tage-Ziele nach Übernahme" : "PE-backed company (€28M revenue) missed its 100-day targets after acquisition",
      problem: language === 'de' ? "Sales-Team demotiviert, keine Dashboards, Management-Reporting dauerte 3 Wochen" : "Sales team demotivated, no dashboards, management reporting took 3 weeks",
      solution: language === 'de' ? "90-Tage Turnaround: Management-KPIs definiert, wöchentliches Reporting eingeführt, Sales-Incentive-System redesigned" : "90-day turnaround: Defined management KPIs, implemented weekly reporting, redesigned sales incentive system",
      results: ["87%", language === 'de' ? "schnellere Reportings" : "faster reporting", "+45%", language === 'de' ? "Pipeline-Wachstum" : "pipeline growth"],
      quote: language === 'de' ? "Endlich haben wir Transparenz. Unsere PE-Partner bekommen jetzt jeden Montag die Zahlen, nicht mehr nach 3 Wochen." : "Finally we have transparency. Our PE partners now get the numbers every Monday, not after 3 weeks.",
      author: language === 'de' ? "CFO, PE-Portfolio-Unternehmen, NRW" : "CFO, PE Portfolio Company, NRW"
    },
    {
      title: language === 'de' ? "Exit-Vorbereitung - IT-Dienstleistungen" : "Exit Preparation - IT Services",
      situation: language === 'de' ? "Gründer wollte in 18 Monaten verkaufen, aber Unternehmen war nicht due-diligence-ready" : "Founder wanted to sell in 18 months, but company wasn't due-diligence-ready",
      problem: language === 'de' ? "Kundenabhängigkeit bei 3 Großkunden, keine dokumentierten Prozesse, Gründer im Tagesgeschäft gefangen" : "Customer dependency on 3 large clients, no documented processes, founder trapped in daily operations",
      solution: language === 'de' ? "6-Monate Exit-Readiness-Programm: Kundenportfolio diversifiziert, SOPs erstellt, Management-Ebene aufgebaut" : "6-month exit-readiness program: Diversified customer portfolio, created SOPs, built management layer",
      results: ["14", language === 'de' ? "Monate bis Exit" : "months to exit", "2.8x", language === 'de' ? "höherer Verkaufspreis" : "higher sale price"],
      quote: language === 'de' ? "Ohne Alban hätte ich 3 Jahre gebraucht und die Hälfte bekommen. Er hat mich exit-ready gemacht." : "Without Alban, it would have taken me 3 years and I would have gotten half. He made me exit-ready.",
      author: language === 'de' ? "Gründer & Ex-CEO, IT-Dienstleister, Stuttgart" : "Founder & Ex-CEO, IT Service Provider, Stuttgart"
    },
  ];

  // Expertise Areas
  const expertiseAreas = [
    {
      title: "Revenue Acceleration Expert",
      skills: ["Strategic Sales Leadership", "Enterprise Account Management", "Revenue Growth Strategies", "Sales Process Optimization", "Sales Team Building", "Deal Structuring", "Pricing Strategy", "Revenue Architecture", "Win Rate Optimization", "Pipeline Quality", "ASP Optimization", "Discount Management"],
      icon: TrendingUp,
      color: "primary"
    },
    {
      title: "Growth Strategy & Execution",
      skills: ["Growth Acceleration", "GTM Strategy", "Demand Generation", "Customer Retention & Expansion", "Market Expansion", "Product-Led Growth", "Channel Partnerships", "Net Revenue Retention", "Customer Lifetime Value", "Expansion Playbooks", "CAC Optimization", "NRR Improvement"],
      icon: Rocket,
      color: "accent"
    },
    {
      title: "Operations & Scaling Expert",
      skills: ["Process Optimization", "RevOps Automation", "Organization Design", "Team Scaling", "Performance Management", "Technology Integration", "Cross-Functional Alignment", "Execution Velocity", "Operational Excellence", "Scalable Systems", "CRM Optimization", "Workflow Automation"],
      icon: Cog,
      color: "primary"
    },
    {
      title: language === 'de' ? "KI & Künstliche Intelligenz" : "AI & Artificial Intelligence",
      skills: ["GPT-5", "Claude 4", "Gemini 3", "Mistral", "LLaMA 3", "Perplexity", "Chatbots", "Prompt Engineering", language === 'de' ? "AI-gestützte Automatisierung" : "AI-powered Automation", "Business Applications", language === 'de' ? "AI-Lösungen bauen" : "Building AI Solutions", "AI-Integration"],
      icon: Brain,
      color: "accent"
    },
    {
      title: "Automation & Integration",
      skills: ["n8n", "RPA", "API Integration", "Zapier", "Make", "Custom Automation", "Workflow Optimization", "System Integration", "Process Automation", "Lead Scoring Automation", "Sales Automation", "Revenue Tracking"],
      icon: Bot,
      color: "primary"
    },
    {
      title: "Digital Transformation & Innovation",
      skills: [language === 'de' ? "Digitale Transformation" : "Digital Transformation", language === 'de' ? "AI-Lösungen" : "AI Solutions", "Automation Strategy", "Technology Stack Optimization", "Innovation Management", "Future-Ready Systems", "Scalable Infrastructure", "Execution Speed", "Competitive Advantage", "Enterprise Systems"],
      icon: Monitor,
      color: "accent"
    },
  ];

  // Portfolio Projects
  const projects = [
    { name: "Pitch Perfect AI", desc: language === 'de' ? "KI-gestützte Sales-Optimierung für bessere Pitches und höhere Abschlussraten." : "AI-powered sales optimization for better pitches and higher close rates.", framework: "P07 Win Rate Optimization", tags: ["AI", "Sales", "GPT-5"] },
    { name: "Sales Compass", desc: language === 'de' ? "Intelligentes Sales-Management-Tool für datengetriebene Vertriebsentscheidungen." : "Intelligent sales management tool for data-driven sales decisions.", framework: "P01 Sales Funnel Optimization", tags: ["Dashboard", "Analytics", "CRM"] },
    { name: "Brave Leader Funnel", desc: language === 'de' ? "Vollautomatisierter Sales-Funnel für Leadership-Coaching." : "Fully automated sales funnel for leadership coaching.", framework: "U01 Demand Generation", tags: ["Funnel", "Automation", "Conversion"] },
    { name: "Viciana Med Gateway", desc: language === 'de' ? "Healthcare Digital Transformation Platform mit automatisierten Workflows." : "Healthcare digital transformation platform with automated workflows.", framework: "S02 Technology Stack Optimization", tags: ["Healthcare", "Workflow", "B2B"] },
    { name: "Webinar Flow Wizard", desc: language === 'de' ? "End-to-End Webinar-Automation: Registrierung, Reminder, Follow-ups." : "End-to-end webinar automation: registration, reminders, follow-ups.", framework: "S01 RevOps Automation", tags: ["Events", "n8n", "Automation"] },
    { name: "PflegeLeicht Connect", desc: language === 'de' ? "Digitale Pflegekoordination mit KI-gestützter Terminplanung." : "Digital care coordination with AI-powered scheduling.", framework: "U04 Customer Retention", tags: ["Healthcare", "AI", "Platform"] },
    { name: "HR Onboarding Automation", desc: language === 'de' ? "Automatisierter Onboarding-Prozess für neue Mitarbeiter." : "Automated onboarding process for new employees.", framework: "S03 Team Scaling", tags: ["HR", "Automation", "Workflow"] },
    { name: "Smart Appointment Scheduler", desc: language === 'de' ? "KI-gestützte Terminplanung mit automatischer Verfügbarkeitsprüfung." : "AI-powered scheduling with automatic availability checking.", framework: "S01 RevOps Automation", tags: ["Scheduling", "AI", "Automation"] },
    { name: "Email Outreach Automation", desc: language === 'de' ? "Personalisierte Cold-Email-Kampagnen mit KI-generiertem Content." : "Personalized cold email campaigns with AI-generated content.", framework: "U01 Demand Generation", tags: ["Email", "AI", "Marketing"] },
    { name: "Voice AI Sales Assistant", desc: language === 'de' ? "KI-Telefonassistent für Erstgespräche und Qualifizierung." : "AI phone assistant for initial calls and qualification.", framework: "P01 Sales Execution", tags: ["Voice AI", "Sales", "Automation"] },
    { name: "Revenue Analytics Platform", desc: language === 'de' ? "Echtzeit-Dashboard für Umsatzanalyse und Forecasting." : "Real-time dashboard for revenue analysis and forecasting.", framework: "V02 KPI Dashboard", tags: ["Analytics", "Dashboard", "BI"] },
    { name: "Customer Success Automation", desc: language === 'de' ? "Automatisierte Kundenbindung mit Churn-Prediction." : "Automated customer retention with churn prediction.", framework: "U04 Customer Retention", tags: ["CS", "AI", "Retention"] },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Michael K.",
      role: language === 'de' ? "CEO, Performance Marketing Agentur" : "CEO, Performance Marketing Agency",
      quote: language === 'de' ? "Mit seinem Revenue Acceleration Framework haben wir in 6 Monaten 35% mehr Umsatz erreicht. Das war nicht nur eine Verbesserung – das war eine Transformation unserer gesamten Sales-Organisation." : "With his Revenue Acceleration Framework, we achieved 35% more revenue in 6 months. That wasn't just an improvement – it was a transformation of our entire sales organization.",
      result: "+35% Umsatz"
    },
    {
      name: "Sarah M.",
      role: language === 'de' ? "Founder, Tech Startup" : "Founder, Tech Startup",
      quote: language === 'de' ? "Seine Fähigkeit, Execution Gaps zu identifizieren, ist beeindruckend. Er hat uns geholfen, unser Team von 6 auf 12 zu skalieren, ohne die Qualität zu verlieren." : "His ability to identify execution gaps is impressive. He helped us scale our team from 6 to 12 without losing quality.",
      result: "Team 2x skaliert"
    },
    {
      name: "Thomas B.",
      role: language === 'de' ? "VP Sales, Enterprise Company" : "VP Sales, Enterprise Company",
      quote: language === 'de' ? "Wir haben unseren Sales-Zyklus um 40% reduziert. Das ist nicht nur eine Verbesserung – das ist ein Game-Changer für unser Unternehmen." : "We reduced our sales cycle by 40%. That's not just an improvement – it's a game-changer for our company.",
      result: "-40% Sales-Zyklus"
    },
    {
      name: "Lisa R.",
      role: language === 'de' ? "CEO, HR-Services" : "CEO, HR Services",
      quote: language === 'de' ? "Er hat uns investor-ready gemacht. Mit seinem Framework konnten wir 62 Neukunden in nur 3 Monaten gewinnen und eine €1,2M Pipeline aufbauen." : "He made us investor-ready. With his framework, we won 62 new clients in just 3 months and built a €1.2M pipeline.",
      result: language === 'de' ? "62 Neukunden in 3 Mo." : "62 new clients in 3 mo."
    },
  ];

  // Certifications
  const activeCertifications = [
    { name: "Google Ads Search Certification", issuer: "Google", issued: language === 'de' ? "Dezember 2025" : "December 2025", expires: language === 'de' ? "Dezember 2026" : "December 2026", id: "169409491" },
    { name: "AI-Powered Shopping Ads Certification", issuer: "Google", issued: language === 'de' ? "Dezember 2025" : "December 2025", expires: language === 'de' ? "Dezember 2026" : "December 2026", id: "169408411" },
  ];

  const completedCertifications = [
    "Salesforce Certified Administrator - Salesforce (2022)",
    "HubSpot Sales Certified - HubSpot (2023)",
    "LinkedIn Sales Navigator Certified - LinkedIn (2023)",
    "UiPath RPA Developer - UiPath (2023)",
    "IHK Führungskräfte-Seminar - IHK (2020)",
    "Change Management Zertifikat - Zertifiziert (2021)",
    "Verhandlungsführung für Professionals - Zertifiziert (2019)",
  ];

  // Build embed URL with UTM + source
  const filloutUrl = useMemo(() => {
    const slug = selectedBooking === '30min' ? 'ah-sync' : 'ah-deep-dive';
    return buildEmbedUrl(slug, 'team-ah');
  }, [selectedBooking]);

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
                src="/images/team-alban.png" 
                alt="Alban Halili - Revenue Acceleration & Exit-Readiness Expert"
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
                Revenue Acceleration & Exit-Readiness Expert
              </span>
              <span className="h-px w-12 bg-gradient-primary" />
            </div>
            
            <h1 className="text-section font-display font-bold">
              <span className="text-gradient">
                {language === 'de' ? 'Ihr Unternehmen stagniert. Ich mache es exit-ready.' : 'Your company is stagnating. I make it exit-ready.'}
              </span>
            </h1>
            
            <div className="space-y-3 text-body-lg text-muted-foreground">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-accent flex-shrink-0" />
                {language === 'de' ? 'Execution Gap schließen' : 'Close the Execution Gap'}
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
                +30% EBITDA-Marge
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-accent flex-shrink-0" />
                +40% Sales Velocity
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-primary flex-shrink-0" />
                {language === 'de' ? '60+ Unternehmen transformiert' : '60+ companies transformed'}
              </div>
            </div>

            {/* Booking Selection - Desktop only */}
            <div className="hidden md:block space-y-4">
              <p className="text-sm text-muted-foreground">{language === 'de' ? 'Wähle eine Buchungsoption:' : 'Select a booking option:'}</p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => setSelectedBooking('30min')} 
                  className={`flex-1 ${selectedBooking === '30min' ? 'bg-gradient-accent text-white shadow-lg shadow-accent/25' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
                >
                  <Clock className="w-4 h-4 mr-2" />
                  30 Min Sync Call
                </Button>
                <Button 
                  onClick={() => setSelectedBooking('60min')} 
                  className={`flex-1 ${selectedBooking === '60min' ? 'bg-gradient-primary text-primary-foreground shadow-lg shadow-primary/25' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  60 Min Deep Dive
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
            <p className="text-sm text-muted-foreground text-center">{language === 'de' ? 'Wähle eine Buchungsoption:' : 'Select a booking option:'}</p>
            <div className="flex gap-4">
              <Button 
                onClick={() => setSelectedBooking('30min')} 
                className={`flex-1 ${selectedBooking === '30min' ? 'bg-gradient-accent text-white shadow-lg shadow-accent/25' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
              >
                <Clock className="w-4 h-4 mr-2" />
                30 Min
              </Button>
              <Button 
                onClick={() => setSelectedBooking('60min')} 
                className={`flex-1 ${selectedBooking === '60min' ? 'bg-gradient-primary text-primary-foreground shadow-lg shadow-primary/25' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
              >
                <Calendar className="w-4 h-4 mr-2" />
                60 Min
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

      {/* SECTION 1: MAIN PROMISE & TRACK RECORD */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient">
                {language === 'de' ? 'Track Record: Was ich für meine Kunden erreicht habe' : 'Track Record: What I Achieved for My Clients'}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'de' ? 'Keine Theorie. Keine PowerPoints. Messbare Ergebnisse aus über 10 Jahren Execution.' : 'No theory. No PowerPoints. Measurable results from over 10 years of execution.'}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {trackRecord.map((stat, index) => (
              <Card key={index} className="bg-card border-accent/30 p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>

          {/* Main Promise Text */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-foreground leading-relaxed">
                <strong>{language === 'de' ? 'Ich schließe den Execution Gap zwischen Strategie und Ergebnis' : 'I close the Execution Gap between strategy and results'}</strong> – {language === 'de' ? 'für Mittelständler, die von PE-Investoren auf die nächste Stufe gehoben werden.' : 'for mid-market companies being elevated to the next level by PE investors.'}
              </p>
              <p className="text-muted-foreground">
                {language === 'de' ? 'Als externer Execution Partner optimiere ich Umsatzarchitektur, Vertriebseffizienz und Bewertungstreiber für Unternehmen mit 20 bis 50 Millionen Euro Umsatz.' : 'As an external Execution Partner, I optimize revenue architecture, sales efficiency and valuation drivers for companies with €20-50 million in revenue.'}
              </p>
              
              <Card className="bg-card border-primary/30 p-6">
                <Quote className="w-8 h-8 text-primary/50 mb-4" />
                <p className="text-foreground italic">
                  "{language === 'de' ? 'Ich liefere keine Strategiepapiere. Ich baue die Systeme, die Ihr Unternehmen exit-ready machen.' : "I don't deliver strategy papers. I build the systems that make your company exit-ready."}"
                </p>
              </Card>
            </div>

            <Card className="bg-card border-accent/30 p-6">
              <h3 className="text-accent font-semibold text-lg mb-4">{language === 'de' ? 'Meine 360°-Erfahrung:' : 'My 360° Experience:'}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-primary" />
                  Hospitality & Service Excellence
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-primary" />
                  Enterprise Sales & Executive Search
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-primary" />
                  Performance Marketing & Analytics
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-primary" />
                  Digital Transformation & AI
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 italic">
                {language === 'de' ? 'Diese Kombination ermöglicht mir, Execution Bottlenecks zu identifizieren, die andere übersehen.' : 'This combination allows me to identify execution bottlenecks that others overlook.'}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 2: CAREER JOURNEY */}
      <section className="relative z-10 py-24 px-4 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient-sunset">
                {language === 'de' ? 'Karriere Journey: Jeder Schritt war strategisch geplant' : 'Career Journey: Every Step Was Strategically Planned'}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === 'de' ? 'Eine Reise durch verschiedene Branchen und Rollen – jede mit einem klaren Lernziel.' : 'A journey through different industries and roles – each with a clear learning objective.'}
            </p>
          </div>

          <div className="space-y-6">
            {careerSteps.map((step, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-accent/50">
                <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${index === careerSteps.length - 1 ? 'bg-gradient-sunset' : index % 2 === 0 ? 'bg-accent' : 'bg-primary'}`}></div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <div>
                    <span className="text-xs font-mono text-muted-foreground">{step.period}</span>
                    <h3 className={`font-semibold text-lg ${index % 2 === 0 ? 'text-accent' : 'text-primary'}`}>{step.title}</h3>
                  </div>
                  <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    {step.learning}
                  </span>
                </div>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: RESULTS BY CUSTOMER TYPE */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient">
                {language === 'de' ? 'Ergebnisse nach Kundentyp' : 'Results by Customer Type'}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {customerResults.map((result, index) => (
              <Card key={index} className="bg-card border-border p-6 hover:border-accent/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <result.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">{result.type}</h3>
                    <p className="text-accent font-bold text-lg">{result.result}</p>
                    <p className="text-muted-foreground text-sm">{result.detail}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CASE STUDIES */}
      <section className="relative z-10 py-24 px-4 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient-sunset">
                {language === 'de' ? 'Referenzen: So arbeite ich mit Mittelständlern zusammen' : 'References: How I Work with Mid-Market Companies'}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === 'de' ? 'Echte Ergebnisse. Anonymisierte Fallstudien aus meiner Arbeit mit PE-gestützten Unternehmen.' : 'Real results. Anonymized case studies from my work with PE-backed companies.'}
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((cs, index) => (
              <Card key={index} className="bg-card border-border p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">{cs.title}</h3>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Situation</p>
                    <p className="text-sm text-foreground">{cs.situation}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{language === 'de' ? 'Das Problem' : 'The Problem'}</p>
                    <p className="text-sm text-foreground">{cs.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{language === 'de' ? 'Meine Lösung' : 'My Solution'}</p>
                    <p className="text-sm text-foreground">{cs.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  {cs.results.map((r, i) => (
                    <span key={i} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                      {r}
                    </span>
                  ))}
                </div>

                <div className="border-t border-border pt-6">
                  <Quote className="w-6 h-6 text-accent/50 mb-2" />
                  <p className="text-muted-foreground italic mb-2">"{cs.quote}"</p>
                  <p className="text-sm text-accent">— {cs.author}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: EXPERTISE */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient">
                {language === 'de' ? 'Expertise: Meine Fähigkeiten' : 'Expertise: My Skills'}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === 'de' ? 'Basierend auf über 140 Projekten und 169 Kunden. Eine Kombination aus KI Expertise, Automatisierung, Vertriebserfahrung und Leadership.' : 'Based on over 140 projects and 169 clients. A combination of AI expertise, automation, sales experience and leadership.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className={`bg-card border-${area.color}/30 p-6 hover:border-${area.color}/50 transition-colors`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-${area.color}/20 flex items-center justify-center`}>
                    <area.icon className={`w-5 h-5 text-${area.color}`} />
                  </div>
                  <h3 className="text-foreground font-semibold">{area.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1">
                  {area.skills.map((skill, i) => (
                    <span key={i} className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PORTFOLIO */}
      <section className="relative z-10 py-24 px-4 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient-sunset">
                {language === 'de' ? 'Portfolio: Meine Projekte & Lösungen' : 'Portfolio: My Projects & Solutions'}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              AI & Automation {language === 'de' ? 'fokussiert – jedes Projekt basiert auf dem ScalingX Framework' : 'focused – every project is based on the ScalingX Framework'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border p-6 hover:border-accent/30 transition-colors">
                <h3 className="text-foreground font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.desc}</p>
                <p className="text-xs text-accent mb-3">{project.framework}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient">
                {language === 'de' ? 'Testimonials: Was meine Kunden über mich sagen' : 'Testimonials: What My Clients Say About Me'}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === 'de' ? 'Echte Ergebnisse von echten Kunden aus über 140 Engagements' : 'Real results from real clients across 140+ engagements'}
            </p>
            <p className="text-sm text-accent mt-2">
              {language === 'de' ? 'Bekannte Kunden: Microsoft | XING | Lexware | Haufe | Telefónica | Google | DAX-30 | UiPath' : 'Notable clients: Microsoft | XING | Lexware | Haufe | Telefónica | Google | DAX-30 | UiPath'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border p-6 hover:border-accent/30 transition-colors">
                <Quote className="w-8 h-8 text-accent/50 mb-4" />
                <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                    {testimonial.result}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CERTIFICATIONS */}
      <section className="relative z-10 py-24 px-4 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section font-display font-bold mb-6">
              <span className="text-gradient-sunset">
                {language === 'de' ? 'Zertifizierungen & Qualifikationen' : 'Certifications & Qualifications'}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === 'de' ? 'Verifizierte Expertise durch offizielle Zertifizierungen und Weiterbildungen.' : 'Verified expertise through official certifications and continuing education.'}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Active Certifications */}
            <div>
              <h3 className="text-accent font-semibold text-lg mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                {language === 'de' ? 'Gültige Zertifizierungen' : 'Active Certifications'}
              </h3>
              <div className="space-y-4">
                {activeCertifications.map((cert, index) => (
                  <Card key={index} className="bg-card border-accent/30 p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-foreground font-semibold">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {language === 'de' ? 'Ausgestellt' : 'Issued'}: {cert.issued} | {language === 'de' ? 'Gültig bis' : 'Expires'}: {cert.expires}
                        </p>
                        <p className="text-xs text-accent mt-1">ID: {cert.id}</p>
                      </div>
                      <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Completed Certifications */}
            <div>
              <h3 className="text-primary font-semibold text-lg mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" />
                {language === 'de' ? 'Abgeschlossene Zertifizierungen' : 'Completed Certifications'}
              </h3>
              <Card className="bg-card border-border p-4">
                <ul className="space-y-2">
                  {completedCertifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="w-3 h-3 text-primary" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
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
                src="/images/team-alban.png" 
                alt="Alban Halili - Closeup Portrait" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 10%' }}
              />
            </div>

            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-section font-display font-bold">
                <span className="text-gradient">{language === 'de' ? 'Bereit für Exit-Readiness?' : 'Ready for Exit-Readiness?'}</span>
              </h2>
              <p className="text-2xl text-accent font-semibold">{language === 'de' ? 'Machen wir Ihr Unternehmen exit-ready.' : "Let's make your company exit-ready."}</p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {language === 'de' 
                  ? 'Ich arbeite mit Mittelständlern und PE-Portfolio-Unternehmen, die messbare Ergebnisse wollen. Keine Theorie. Keine endlosen Meetings. Nur Execution und Impact.'
                  : "I work with mid-market and PE portfolio companies that want measurable results. No theory. No endless meetings. Just execution and impact."}
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
                  30 Min Sync Call
                </Button>
                <Button 
                  onClick={() => {
                    setPopupBookingType('60min');
                    setIsBookingOpen(true);
                  }}
                  className="bg-gradient-primary text-primary-foreground shadow-lg shadow-primary/25"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  60 Min Deep Dive
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <a 
                  href="/" 
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  {language === 'de' ? 'Mehr über ScalingX' : 'More about ScalingX'}
                </a>
                <a 
                  href="https://www.linkedin.com/in/albanhalili/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER QUOTES */}
      <section className="relative z-10 py-12 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground italic">
            <span>"{language === 'de' ? 'Execution schlägt Strategie.' : 'Execution beats strategy.'}"</span>
            <span className="hidden md:inline">•</span>
            <span>"Expertise × Speed = Impact"</span>
            <span className="hidden md:inline">•</span>
            <span>"{language === 'de' ? 'Exit-ready in 90 Tagen.' : 'Exit-ready in 90 days.'}"</span>
          </div>
        </div>
      </section>

      <Footer />

      {/* Booking Modal */}
      <FilloutBookingModal
        formSlug={popupBookingType === '30min' ? 'ah-sync' : 'ah-deep-dive'}
        source="team-ah"
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        title={popupBookingType === '30min' ? '30 Min Sync Call' : '60 Min Deep Dive'}
      />
    </div>
  );
};

export default AH;
