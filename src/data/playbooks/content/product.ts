import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('growth-engines/product')!;

export const productData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "Product · Growth Engines", de: "Product · Growth Engines" },
    title: "Product Playbook",
    subtitle: { 
      en: "How to build products that scale with AI", 
      de: "Wie du Produkte baust, die mit AI skalieren" 
    },
    description: { 
      en: "Traditional product development is too slow. Companies spend months building features nobody wants, ship quarterly instead of weekly, and struggle to achieve product-market fit. AI-native companies use a different playbook. They leverage the 5-component framework to ship 10x faster, achieve product-market fit in weeks (not years), and scale products to millions of users with small teams.", 
      de: "Traditionelle Produktentwicklung ist zu langsam. Unternehmen verbringen Monate damit, Features zu bauen, die niemand will, shippen quartalsweise statt wöchentlich und kämpfen um Product-Market Fit. AI-native Unternehmen nutzen ein anderes Playbook. Sie nutzen das 5-Komponenten-Framework, um 10x schneller zu shippen, Product-Market Fit in Wochen statt Jahren zu erreichen und Produkte mit kleinen Teams auf Millionen von Nutzern zu skalieren."
    },
    trustBadges: [
      { en: "~2,800 Words", de: "~2.800 Wörter" },
      { en: "3 Case Studies", de: "3 Fallstudien" },
      { en: "90-Day Roadmap", de: "90-Tage Roadmap" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "/downloads/product-playbook.pdf",
    gradient: "from-green-500 to-teal-500"
  },
  summary: {
    problem: { 
      title: { en: "The Problem", de: "Das Problem" }, 
      text: { en: "Traditional companies ship quarterly, build features nobody uses, and take 12-24 months to achieve PMF. 70% of features are never/rarely used.", de: "Traditionelle Unternehmen shippen quartalsweise, bauen Features die niemand nutzt und brauchen 12-24 Monate für PMF. 70% der Features werden nie/selten genutzt." } 
    },
    whyItMatters: { 
      title: { en: "Why It Matters", de: "Warum es zählt" }, 
      text: { en: "Speed is the ultimate competitive advantage. AI-native companies ship 10x faster, achieve PMF in weeks, and scale with smaller teams.", de: "Speed ist der ultimative Wettbewerbsvorteil. AI-native Unternehmen shippen 10x schneller, erreichen PMF in Wochen und skalieren mit kleineren Teams." } 
    },
    solution: { 
      title: { en: "The Solution", de: "Die Lösung" }, 
      text: { en: "The 5-component framework: PLG Architecture, Shipping Velocity, Feature Quality, Product Analytics, and AI-Powered Development.", de: "Das 5-Komponenten-Framework: PLG Architektur, Shipping Velocity, Feature Quality, Product Analytics und AI-Powered Development." } 
    }
  },
  problem: {
    title: { en: "Why Traditional Product Development is Broken", de: "Warum traditionelle Produktentwicklung kaputt ist" },
    subtitle: { en: "The symptoms holding you back", de: "Die Symptome, die dich zurückhalten" },
    bullets: [
      { text: { en: "Shipping Too Slow: Traditional companies ship quarterly (vs. weekly for AI-native)", de: "Zu langsames Shipping: Traditionelle Unternehmen shippen quartalsweise (vs. wöchentlich bei AI-native)" } },
      { text: { en: "Building Wrong Features: 70% of features are rarely/never used", de: "Falsche Features gebaut: 70% der Features werden selten/nie genutzt" } },
      { text: { en: "PMF Takes Too Long: 12-24 months to PMF (vs. 3-6 months for AI-native)", de: "PMF dauert zu lange: 12-24 Monate bis PMF (vs. 3-6 Monate bei AI-native)" } },
      { text: { en: "Technical Debt Growing: 30-50% of engineering time spent on debt (vs. 10-20% for AI-native)", de: "Technical Debt wächst: 30-50% der Engineering-Zeit für Debt (vs. 10-20% bei AI-native)" } }
    ],
    metrics: [
      { label: { en: "Shipping Cadence", de: "Shipping-Kadenz" }, value: "Quarterly", trend: "down" as const },
      { label: { en: "Feature Waste", de: "Feature-Verschwendung" }, value: "70%", trend: "up" as const },
      { label: { en: "Time to PMF", de: "Zeit bis PMF" }, value: "12-24 mo", trend: "up" as const },
      { label: { en: "Technical Debt", de: "Technical Debt" }, value: "30-50%", trend: "up" as const }
    ]
  },
  framework: {
    title: { en: "The 5-Component Framework", de: "Das 5-Komponenten-Framework" },
    subtitle: { en: "How AI-native companies build products that scale", de: "Wie AI-native Unternehmen Produkte bauen, die skalieren" },
    items: [
      {
        id: "plg",
        icon: "Rocket",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        title: { en: "Product-Led Growth Architecture", de: "Product-Led Growth Architektur" },
        subtitle: { en: "5 Principles: Time-to-Value, Self-Service, Viral Loops, Usage-Based Monetization, Product Analytics", de: "5 Prinzipien: Time-to-Value, Self-Service, Viral Loops, Usage-Based Monetization, Product Analytics" },
        description: { en: "Get users to 'Aha Moment' in <5 minutes. 40-60% of users churn before activation. AI-powered onboarding identifies optimal paths automatically.", de: "Bringe Nutzer in <5 Minuten zum 'Aha Moment'. 40-60% der Nutzer churnen vor der Aktivierung. AI-gestütztes Onboarding identifiziert optimale Pfade automatisch." },
        metrics: [
          { label: { en: "Activation Rate", de: "Aktivierungsrate" }, value: "+50-100%" },
          { label: { en: "CAC Reduction", de: "CAC-Reduktion" }, value: "-50-70%" }
        ],
        actions: [
          { en: "Onboarding Flow Design (3-5 steps max)", de: "Onboarding Flow Design (max. 3-5 Schritte)" },
          { en: "In-App Guidance & Tooltips", de: "In-App Guidance & Tooltips" },
          { en: "Viral Loop Mechanics", de: "Viral Loop Mechaniken" },
          { en: "Usage-Based Monetization", de: "Usage-Based Monetization" },
          { en: "AI-Powered Onboarding", de: "AI-Powered Onboarding" }
        ]
      },
      {
        id: "velocity",
        icon: "Zap",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        title: { en: "Shipping Velocity Acceleration", de: "Shipping Velocity Acceleration" },
        subtitle: { en: "Ship 10x faster: Weekly vs. Quarterly releases", de: "10x schneller shippen: Wöchentlich vs. Quartalsweise Releases" },
        description: { en: "Speed = competitive advantage. Weekly releases, feature flags, A/B testing, and AI copilots transform your development velocity.", de: "Speed = Wettbewerbsvorteil. Wöchentliche Releases, Feature Flags, A/B Testing und AI Copilots transformieren deine Development Velocity." },
        metrics: [
          { label: { en: "Shipping Velocity", de: "Shipping Velocity" }, value: "+300-500%" },
          { label: { en: "Time-to-Market", de: "Time-to-Market" }, value: "-60-80%" }
        ],
        actions: [
          { en: "Weekly/Bi-Weekly Releases", de: "Wöchentliche/Bi-Wöchentliche Releases" },
          { en: "Feature Flags (LaunchDarkly/Flagsmith)", de: "Feature Flags (LaunchDarkly/Flagsmith)" },
          { en: "A/B Testing Framework", de: "A/B Testing Framework" },
          { en: "Automated CI/CD Pipeline", de: "Automatisierte CI/CD Pipeline" },
          { en: "AI Copilots (GitHub Copilot, Cursor)", de: "AI Copilots (GitHub Copilot, Cursor)" }
        ]
      },
      {
        id: "quality",
        icon: "Shield",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        title: { en: "Feature Quality & Technical Debt Management", de: "Feature Quality & Technical Debt Management" },
        subtitle: { en: "Build quality, manage debt systematically with the 20% rule", de: "Qualität bauen, Debt systematisch managen mit der 20%-Regel" },
        description: { en: "Quality = retention, debt = velocity killer. 20% time rule for debt paydown, 80%+ test coverage, AI-powered code review.", de: "Qualität = Retention, Debt = Velocity-Killer. 20%-Zeit-Regel für Debt-Abbau, 80%+ Test Coverage, AI-powered Code Review." },
        metrics: [
          { label: { en: "Bug Rate", de: "Bug Rate" }, value: "-50-70%" },
          { label: { en: "Technical Debt", de: "Technical Debt" }, value: "-30-50%" }
        ],
        actions: [
          { en: "Code Reviews (2+ engineers per PR)", de: "Code Reviews (2+ Engineers pro PR)" },
          { en: "Automated Testing (80%+ coverage)", de: "Automatisiertes Testing (80%+ Coverage)" },
          { en: "Performance Monitoring", de: "Performance Monitoring" },
          { en: "20% Debt Paydown Rule", de: "20% Debt Paydown Regel" },
          { en: "AI Code Review & Suggestions", de: "AI Code Review & Suggestions" }
        ]
      },
      {
        id: "analytics",
        icon: "BarChart3",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        title: { en: "Product Analytics & Feedback Loops", de: "Product Analytics & Feedback Loops" },
        subtitle: { en: "Measure everything, learn fast, iterate continuously", de: "Alles messen, schnell lernen, kontinuierlich iterieren" },
        description: { en: "Data-driven product = 3-5x faster PMF. Track activation, retention, feature adoption. AI-powered insights for predictive analytics.", de: "Datengetriebenes Produkt = 3-5x schnellerer PMF. Tracke Aktivierung, Retention, Feature Adoption. AI-powered Insights für Predictive Analytics." },
        metrics: [
          { label: { en: "PMF Time", de: "PMF Zeit" }, value: "-50-70%" },
          { label: { en: "Feature Success Rate", de: "Feature Success Rate" }, value: "+100-200%" }
        ],
        actions: [
          { en: "Analytics Setup (Mixpanel/Amplitude)", de: "Analytics Setup (Mixpanel/Amplitude)" },
          { en: "Cohort Analysis", de: "Kohorten-Analyse" },
          { en: "Funnel Analysis", de: "Funnel-Analyse" },
          { en: "User Research & Interviews", de: "User Research & Interviews" },
          { en: "AI-Powered Predictive Insights", de: "AI-Powered Predictive Insights" }
        ]
      },
      {
        id: "ai-dev",
        icon: "Sparkles",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        title: { en: "AI-Powered Product Development", de: "AI-Powered Product Development" },
        subtitle: { en: "Use AI to build products 10x faster with code copilots", de: "Nutze AI, um Produkte 10x schneller mit Code Copilots zu bauen" },
        description: { en: "AI = 10x productivity boost. Code copilots, test generation, AI-powered features, and predictive analytics transform development.", de: "AI = 10x Produktivitäts-Boost. Code Copilots, Test-Generierung, AI-Powered Features und Predictive Analytics transformieren die Entwicklung." },
        metrics: [
          { label: { en: "Development Velocity", de: "Development Velocity" }, value: "+300-500%" },
          { label: { en: "Feature Quality", de: "Feature Quality" }, value: "+50-100%" }
        ],
        actions: [
          { en: "GitHub Copilot / Cursor Integration", de: "GitHub Copilot / Cursor Integration" },
          { en: "AI Test Generation", de: "AI Test-Generierung" },
          { en: "AI-Powered UX & Personalization", de: "AI-Powered UX & Personalisierung" },
          { en: "Predictive Analytics & Recommendations", de: "Predictive Analytics & Empfehlungen" },
          { en: "AI Governance & Quality Control", de: "AI Governance & Qualitätskontrolle" }
        ]
      }
    ]
  },
  bestPractices: { 
    title: { en: "Best Practices", de: "Best Practices" }, 
    categories: [] 
  },
  roadmap: {
    title: { en: "How to Implement (90-Day Roadmap)", de: "Wie implementieren (90-Tage Roadmap)" },
    subtitle: { en: "From strategy to execution in 12 weeks", de: "Von Strategie zu Execution in 12 Wochen" },
    phases: [
      {
        phase: 1,
        title: { en: "Strategy", de: "Strategie" },
        timeline: { en: "Week 1-2", de: "Woche 1-2" },
        focus: { en: "Define product vision, prioritize features, establish PLG strategy", de: "Produktvision definieren, Features priorisieren, PLG-Strategie etablieren" },
        deliverables: [
          { en: "Product Vision Document (1-page)", de: "Produktvisions-Dokument (1-Seite)" },
          { en: "Feature Roadmap (3-6 months)", de: "Feature Roadmap (3-6 Monate)" },
          { en: "PLG Strategy Deck (5-page)", de: "PLG Strategy Deck (5-Seiten)" },
          { en: "Success Metrics Dashboard", de: "Success Metrics Dashboard" }
        ],
        gradient: "from-violet-500 to-purple-500"
      },
      {
        phase: 2,
        title: { en: "Setup", de: "Setup" },
        timeline: { en: "Week 3-4", de: "Woche 3-4" },
        focus: { en: "Set up analytics, CI/CD pipeline, AI tools, feature flags", de: "Analytics, CI/CD Pipeline, AI Tools, Feature Flags aufsetzen" },
        deliverables: [
          { en: "Product Analytics (Mixpanel/Amplitude)", de: "Product Analytics (Mixpanel/Amplitude)" },
          { en: "CI/CD Pipeline (GitHub Actions/CircleCI)", de: "CI/CD Pipeline (GitHub Actions/CircleCI)" },
          { en: "AI Copilots (GitHub Copilot/Cursor)", de: "AI Copilots (GitHub Copilot/Cursor)" },
          { en: "Feature Flags (LaunchDarkly/Flagsmith)", de: "Feature Flags (LaunchDarkly/Flagsmith)" }
        ],
        gradient: "from-blue-500 to-cyan-500"
      },
      {
        phase: 3,
        title: { en: "Execution", de: "Execution" },
        timeline: { en: "Week 5-8", de: "Woche 5-8" },
        focus: { en: "Ship weekly, measure everything, iterate based on data", de: "Wöchentlich shippen, alles messen, datenbasiert iterieren" },
        deliverables: [
          { en: "4+ Weekly Releases", de: "4+ Wöchentliche Releases" },
          { en: "Feature Adoption Tracking Dashboard", de: "Feature Adoption Tracking Dashboard" },
          { en: "User Feedback Loop (Surveys, Interviews)", de: "User Feedback Loop (Umfragen, Interviews)" },
          { en: "A/B Testing Playbook", de: "A/B Testing Playbook" }
        ],
        gradient: "from-emerald-500 to-green-500"
      }
    ]
  },
  caseStudies: {
    title: { en: "Real-World Results", de: "Echte Ergebnisse" },
    subtitle: { en: "How 3 companies transformed their product development with the 5-component framework", de: "Wie 3 Unternehmen ihre Produktentwicklung mit dem 5-Komponenten-Framework transformiert haben" },
    cases: [
      {
        company: { en: "Series A SaaS Company", de: "Series A SaaS Unternehmen" },
        problem: { en: "12 months to PMF, slow shipping velocity (quarterly releases)", de: "12 Monate bis PMF, langsame Shipping Velocity (quartalsweise Releases)" },
        solution: { en: "Applied Component 1 (PLG Architecture), Component 2 (Shipping Velocity), Component 4 (Product Analytics), Component 5 (AI-Powered Development)", de: "Komponente 1 (PLG Architektur), Komponente 2 (Shipping Velocity), Komponente 4 (Product Analytics), Komponente 5 (AI-Powered Development) angewendet" },
        results: [
          { metric: { en: "Time to PMF", de: "Zeit bis PMF" }, before: "12 months", after: "3 months", change: "-75%" },
          { metric: { en: "Shipping Velocity", de: "Shipping Velocity" }, before: "Quarterly", after: "Weekly", change: "+12x" },
          { metric: { en: "Activation Rate", de: "Aktivierungsrate" }, before: "25%", after: "65%", change: "+160%" },
          { metric: { en: "Feature Success Rate", de: "Feature Success Rate" }, before: "30%", after: "80%", change: "+167%" }
        ],
        timeline: { en: "6 months | Power Up + Boost", de: "6 Monate | Power Up + Boost" }
      },
      {
        company: { en: "Series B SaaS Company", de: "Series B SaaS Unternehmen" },
        problem: { en: "Slow shipping (quarterly releases), high technical debt (40% of engineering time)", de: "Langsames Shipping (quartalsweise Releases), hohe Technical Debt (40% der Engineering-Zeit)" },
        solution: { en: "Applied Component 2 (Shipping Velocity), Component 3 (Feature Quality & Debt Management), Component 5 (AI-Powered Development)", de: "Komponente 2 (Shipping Velocity), Komponente 3 (Feature Quality & Debt Management), Komponente 5 (AI-Powered Development) angewendet" },
        results: [
          { metric: { en: "Shipping Velocity", de: "Shipping Velocity" }, before: "Quarterly", after: "Weekly", change: "+12x" },
          { metric: { en: "Technical Debt", de: "Technical Debt" }, before: "40%", after: "15%", change: "-63%" },
          { metric: { en: "Bug Rate", de: "Bug Rate" }, before: "50/release", after: "5/release", change: "-90%" },
          { metric: { en: "Feature Adoption", de: "Feature Adoption" }, before: "Baseline", after: "+150%", change: "+150%" }
        ],
        timeline: { en: "12 months | Boost + Accelerate", de: "12 Monate | Boost + Accelerate" }
      },
      {
        company: { en: "Series C Company", de: "Series C Unternehmen" },
        problem: { en: "Need to reach 1M users for IPO readiness, CAC too high", de: "Müssen 1M Nutzer für IPO-Bereitschaft erreichen, CAC zu hoch" },
        solution: { en: "Applied all 5 components with focus on PLG Architecture and viral loops for user acquisition", de: "Alle 5 Komponenten angewendet mit Fokus auf PLG Architektur und Viral Loops für User Acquisition" },
        results: [
          { metric: { en: "Users", de: "Nutzer" }, before: "50k", after: "1M", change: "+1,900%" },
          { metric: { en: "Freemium Conversion", de: "Freemium Conversion" }, before: "3%", after: "8%", change: "+167%" },
          { metric: { en: "K-Factor (Virality)", de: "K-Factor (Viralität)" }, before: "0.5", after: "1.8", change: "+260%" },
          { metric: { en: "CAC", de: "CAC" }, before: "€500", after: "€50", change: "-90%" }
        ],
        timeline: { en: "18 months | Accelerate + Extension", de: "18 Monate | Accelerate + Extension" }
      }
    ]
  },
  solutionsConnection: {
    title: { en: "Ready to Execute?", de: "Bereit zur Umsetzung?" },
    subtitle: { en: "Choose the right engagement model for your timeline and budget", de: "Wähle das richtige Engagement-Modell für deinen Zeitplan und Budget" },
    items: [
      {
        type: "assessment",
        name: { en: "Product Assessment", de: "Product Assessment" },
        duration: { en: "2-3 Days", de: "2-3 Tage" },
        price: { en: "€2.5K-€10K", de: "€2.5K-€10K" },
        outcome: { en: "Full product maturity report + 90-day roadmap", de: "Vollständiger Product Maturity Report + 90-Tage Roadmap" },
        cta: { en: "Book Assessment", de: "Assessment buchen" },
        link: "/solutions/scaling-readiness-assessment",
        icon: "ClipboardCheck",
        color: "bg-emerald-500/10 text-emerald-500"
      },
      {
        type: "power-up",
        name: { en: "Product Sprint", de: "Product Sprint" },
        duration: { en: "30 Days", de: "30 Tage" },
        price: { en: "€23.6K-€45.9K", de: "€23.6K-€45.9K" },
        outcome: { en: "Shipping Velocity +200-400%, Feature Success Rate +50-100%", de: "Shipping Velocity +200-400%, Feature Success Rate +50-100%" },
        cta: { en: "Start Power Up", de: "Power Up starten" },
        link: "/solutions/power-up/scaling-velocity",
        icon: "Zap",
        color: "bg-green-500/10 text-green-500"
      },
      {
        type: "boost",
        name: { en: "Product Excellence", de: "Product Excellence" },
        duration: { en: "90 Days", de: "90 Tage" },
        price: { en: "€60K-€78K", de: "€60K-€78K" },
        outcome: { en: "PMF in 3-6 months, Shipping Velocity +500-1000%", de: "PMF in 3-6 Monaten, Shipping Velocity +500-1000%" },
        cta: { en: "Start Boost", de: "Boost starten" },
        link: "/solutions/boost/growth-engine",
        icon: "Rocket",
        color: "bg-blue-500/10 text-blue-500"
      },
      {
        type: "accelerate",
        name: { en: "AI-Native Product", de: "AI-Native Product" },
        duration: { en: "12 Months", de: "12 Monate" },
        price: { en: "€153K", de: "€153K" },
        outcome: { en: "Full product transformation, AI Maturity Level 3, 3-5x velocity", de: "Vollständige Product Transformation, AI Maturity Level 3, 3-5x Velocity" },
        cta: { en: "Start Accelerate", de: "Accelerate starten" },
        link: "/solutions/accelerate/ai-native-scaling",
        icon: "TrendingUp",
        color: "bg-violet-500/10 text-violet-500"
      }
    ]
  },
  whoThisIsFor: {
    title: { en: "Who Should Use This Playbook?", de: "Für wen ist dieses Playbook?" },
    subtitle: { en: "Ideal for B2B SaaS companies €3M-€100M ARR scaling product from MVP to scale", de: "Ideal für B2B SaaS Unternehmen €3M-€100M ARR, die Produkt von MVP zu Scale skalieren" },
    icp: { en: "Series A-C B2B SaaS companies looking to accelerate product development and achieve PMF faster", de: "Series A-C B2B SaaS Unternehmen, die Produktentwicklung beschleunigen und PMF schneller erreichen wollen" },
    personas: [
      { icon: "User", role: { en: "CEO", de: "CEO" }, pain: { en: "Need product that scales, not just more features", de: "Brauche Produkt das skaliert, nicht nur mehr Features" }, outcome: { en: "10x faster shipping, PMF in weeks not months", de: "10x schnelleres Shipping, PMF in Wochen statt Monaten" }, color: "violet" },
      { icon: "Rocket", role: { en: "CPO", de: "CPO" }, pain: { en: "Responsible for product velocity and PMF achievement", de: "Verantwortlich für Product Velocity und PMF-Erreichung" }, outcome: { en: "Weekly releases, 80%+ feature success rate", de: "Wöchentliche Releases, 80%+ Feature Success Rate" }, color: "green" },
      { icon: "Code", role: { en: "CTO", de: "CTO" }, pain: { en: "Need to ship faster without sacrificing quality", de: "Muss schneller shippen ohne Qualitätsverlust" }, outcome: { en: "AI copilots, 80% test coverage, <15% technical debt", de: "AI Copilots, 80% Test Coverage, <15% Technical Debt" }, color: "blue" },
      { icon: "Users", role: { en: "VP Engineering", de: "VP Engineering" }, pain: { en: "Need to reduce technical debt and increase velocity", de: "Muss Technical Debt reduzieren und Velocity steigern" }, outcome: { en: "10x velocity increase, 63% debt reduction", de: "10x Velocity-Steigerung, 63% Debt-Reduktion" }, color: "amber" }
    ]
  },
  finalCta: {
    headline: { en: "Get Started Today", de: "Starte heute" },
    subline: { en: "Transform your product development with the 5-component framework", de: "Transformiere deine Produktentwicklung mit dem 5-Komponenten-Framework" },
    trustSignals: [
      { en: "50-page playbook with templates", de: "50-Seiten Playbook mit Templates" },
      { en: "3 real-world case studies", de: "3 echte Fallstudien" },
      { en: "90-day implementation roadmap", de: "90-Tage Implementierungs-Roadmap" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "/downloads/product-playbook.pdf"
  }
};
