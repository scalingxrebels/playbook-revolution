import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('growth-engines/gtm-revenue')!;

export const gtmRevenueData: PlaybookPageData = {
  meta,
  
  // ==========================================================================
  // SECTION 1: HERO
  // ==========================================================================
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "GTM · Growth Engines", de: "GTM · Growth Engines" },
    title: "GTM/Revenue Playbook",
    subtitle: { 
      en: "How to build a revenue engine that scales with AI", 
      de: "Wie du eine Revenue Engine aufbaust, die mit AI skaliert" 
    },
    description: { 
      en: "Traditional GTM is broken. Companies hire more salespeople, spend more on ads, and still see CAC rising and win rates falling. AI-native companies use a different playbook. They leverage the 7-lever framework to reduce CAC by 50%, increase win rates by 100%, and scale revenue 3-5x faster than traditional companies.", 
      de: "Traditionelles GTM ist kaputt. Unternehmen stellen mehr Vertriebler ein, geben mehr für Ads aus und sehen trotzdem steigende CAC und sinkende Win Rates. AI-native Unternehmen nutzen ein anderes Playbook. Sie nutzen das 7-Hebel-Framework, um CAC um 50% zu senken, Win Rates um 100% zu steigern und Revenue 3-5x schneller zu skalieren."
    },
    trustBadges: [
      { en: "~2,400 Words", de: "~2.400 Wörter" },
      { en: "3 Case Studies", de: "3 Fallstudien" },
      { en: "90-Day Roadmap", de: "90-Tage Roadmap" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "/downloads/gtm-revenue-playbook.pdf",
    assetId: "playbook-gtm-revenue",
    gradient: "from-orange-500 to-amber-500"
  },

  // ==========================================================================
  // SECTION 2: SUMMARY (Problem/Why/Solution Cards)
  // ==========================================================================
  summary: {
    problem: { 
      title: { en: "The Problem", de: "Das Problem" }, 
      text: { 
        en: "Most Series B/C companies struggle with CAC inflation and declining win rates. Revenue growth slows from 100% → 30% as you scale from €10M → €50M ARR. The traditional playbook (hire more reps, increase ad spend) doesn't work anymore.", 
        de: "Die meisten Series B/C Unternehmen kämpfen mit CAC-Inflation und sinkenden Win Rates. Das Revenue-Wachstum verlangsamt sich von 100% auf 30%, während du von €10M auf €50M ARR skalierst. Das traditionelle Playbook (mehr Reps einstellen, mehr Ads schalten) funktioniert nicht mehr."
      } 
    },
    whyItMatters: { 
      title: { en: "Why It Matters", de: "Warum es wichtig ist" }, 
      text: { 
        en: "This isn't just a sales problem—it's a strategic bottleneck. Without a scalable revenue engine, you can't reach your next funding milestone. Investors notice. Boards ask questions. Growth stalls.", 
        de: "Das ist nicht nur ein Sales-Problem – es ist ein strategischer Engpass. Ohne eine skalierbare Revenue Engine erreichst du deinen nächsten Funding-Meilenstein nicht. Investoren merken es. Boards stellen Fragen. Wachstum stagniert."
      } 
    },
    solution: { 
      title: { en: "The Solution", de: "Die Lösung" }, 
      text: { 
        en: "AI-native companies solve this differently. They use the 7-lever GTM framework (ICP Clarity, Outbound, Inbound, Partners, Pricing, Sales Process, PLG) to reduce CAC by 50% and increase win rates by 100%. This playbook shows you how.", 
        de: "AI-native Unternehmen lösen das anders. Sie nutzen das 7-Hebel GTM-Framework (ICP Clarity, Outbound, Inbound, Partner, Pricing, Sales Process, PLG), um CAC um 50% zu senken und Win Rates um 100% zu steigern. Dieses Playbook zeigt dir wie."
      } 
    }
  },

  // ==========================================================================
  // SECTION 3: THE PROBLEM
  // ==========================================================================
  problem: { 
    title: { en: "Why Traditional GTM is Broken", de: "Warum traditionelles GTM kaputt ist" }, 
    subtitle: { en: "The symptoms holding you back", de: "Die Symptome, die dich zurückhalten" }, 
    bullets: [
      { text: { en: "CAC Rising: Traditional companies see CAC increase 20-40% YoY while efficiency drops", de: "CAC steigt: Traditionelle Unternehmen sehen CAC-Anstieg von 20-40% YoY während Effizienz sinkt" }, icon: "TrendingUp" },
      { text: { en: "Win Rates Falling: Average win rate is 15-25% (vs. 40-60% for AI-native companies)", de: "Win Rates sinken: Durchschnittliche Win Rate 15-25% (vs. 40-60% bei AI-native Unternehmen)" }, icon: "Target" },
      { text: { en: "Sales Cycles Lengthening: 6-12 months deal cycles (vs. 2-4 months for AI-native)", de: "Sales Cycles verlängern sich: 6-12 Monate Deal-Zyklen (vs. 2-4 Monate bei AI-native)" }, icon: "Clock" },
      { text: { en: "Revenue Per Employee Stagnant: €150k-€250k (vs. €1M-€4.6M for AI-native)", de: "Revenue Per Employee stagniert: €150k-€250k (vs. €1M-€4.6M bei AI-native)" }, icon: "Users" }
    ], 
    metrics: [
      { label: { en: "CAC Increase YoY", de: "CAC-Anstieg YoY" }, value: "+40%", trend: "up" },
      { label: { en: "Win Rate (Traditional)", de: "Win Rate (Traditionell)" }, value: "15-25%", trend: "down" },
      { label: { en: "Sales Cycle Length", de: "Sales Cycle Länge" }, value: "6-12 mo", trend: "up" },
      { label: { en: "Revenue/Employee", de: "Revenue/Mitarbeiter" }, value: "€150k", trend: "down" }
    ]
  },

  // ==========================================================================
  // SECTION 4: THE 7-LEVER FRAMEWORK
  // ==========================================================================
  framework: { 
    title: { en: "The 7-Lever Framework", de: "Das 7-Hebel-Framework" }, 
    subtitle: { en: "How AI-native companies build revenue engines that scale", de: "Wie AI-native Unternehmen Revenue Engines bauen, die skalieren" }, 
    items: [
      {
        id: "icp",
        icon: "Crosshair",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        title: { en: "Lever 1: ICP Clarity & Positioning", de: "Hebel 1: ICP Clarity & Positioning" },
        subtitle: { en: "Define your ideal customer profile with precision", de: "Definiere dein Ideal Customer Profile mit Präzision" },
        description: { 
          en: "50% of sales time is wasted on wrong prospects. AI-powered ICP discovery identifies high-value segments automatically using firmographics, technographics, and psychographics.", 
          de: "50% der Sales-Zeit wird für falsche Prospects verschwendet. AI-gestützte ICP Discovery identifiziert High-Value Segmente automatisch anhand von Firmographics, Technographics und Psychographics." 
        },
        metrics: [
          { label: { en: "CAC Reduction", de: "CAC-Reduktion" }, value: "-30-50%" },
          { label: { en: "Win Rate Increase", de: "Win Rate Steigerung" }, value: "+50-100%" }
        ],
        actions: [
          { en: "Firmographics Analysis (Industry, Size, Revenue, Location)", de: "Firmographics Analyse (Branche, Größe, Umsatz, Standort)" },
          { en: "Technographics Mapping (Tech Stack, Tools, Integrations)", de: "Technographics Mapping (Tech Stack, Tools, Integrationen)" },
          { en: "Psychographics Profiling (Pain Points, Goals, Buying Behavior)", de: "Psychographics Profiling (Pain Points, Ziele, Kaufverhalten)" },
          { en: "Positioning Canvas (Value Prop, Differentiation, Messaging)", de: "Positioning Canvas (Value Prop, Differenzierung, Messaging)" },
          { en: "AI-Powered ICP Discovery (Pattern Recognition, Predictive Scoring)", de: "AI-gestützte ICP Discovery (Pattern Recognition, Predictive Scoring)" }
        ]
      },
      {
        id: "outbound",
        icon: "Send",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        title: { en: "Lever 2: Outbound Sales Excellence", de: "Hebel 2: Outbound Sales Excellence" },
        subtitle: { en: "Proactive prospecting and account-based selling", de: "Proaktives Prospecting und Account-Based Selling" },
        description: { 
          en: "Inbound alone won't get you to €100M. AI-powered SDR process with multi-channel sequencing enables personalization at scale without losing authenticity.", 
          de: "Inbound allein bringt dich nicht auf €100M. AI-gestützter SDR-Prozess mit Multi-Channel-Sequencing ermöglicht Personalisierung in Scale ohne Authentizitätsverlust." 
        },
        metrics: [
          { label: { en: "Pipeline Increase", de: "Pipeline-Steigerung" }, value: "+100-300%" },
          { label: { en: "Sales Cycle Reduction", de: "Sales Cycle Reduktion" }, value: "-30-50%" }
        ],
        actions: [
          { en: "Outbound Strategy (ABM, Territory Planning, Sequencing)", de: "Outbound Strategy (ABM, Territory Planning, Sequencing)" },
          { en: "Prospecting Framework (Lead Gen, Qualification, BANT)", de: "Prospecting Framework (Lead Gen, Qualifizierung, BANT)" },
          { en: "Outreach Sequences (Email, LinkedIn, Phone, Multi-Channel)", de: "Outreach Sequences (Email, LinkedIn, Phone, Multi-Channel)" },
          { en: "Sales Playbook (Discovery, Demo, Objection Handling, Closing)", de: "Sales Playbook (Discovery, Demo, Einwandbehandlung, Closing)" },
          { en: "AI SDRs (Automated Prospecting, Personalization, Follow-up)", de: "AI SDRs (Automatisiertes Prospecting, Personalisierung, Follow-up)" }
        ]
      },
      {
        id: "inbound",
        icon: "Magnet",
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        title: { en: "Lever 3: Inbound Marketing Mastery", de: "Hebel 3: Inbound Marketing Mastery" },
        subtitle: { en: "Attract, nurture, and convert leads at scale", de: "Leads anziehen, pflegen und konvertieren in Scale" },
        description: { 
          en: "Inbound leads have 50% higher win rates. AI-powered content engine generates SEO-optimized content at scale while maintaining quality and brand voice.", 
          de: "Inbound Leads haben 50% höhere Win Rates. AI-gestützte Content Engine generiert SEO-optimierte Inhalte in Scale bei gleichbleibender Qualität und Brand Voice." 
        },
        metrics: [
          { label: { en: "Inbound Leads", de: "Inbound Leads" }, value: "+200-500%" },
          { label: { en: "Conversion Rate", de: "Conversion Rate" }, value: "+50-100%" }
        ],
        actions: [
          { en: "Content Strategy (SEO, Blog, Whitepapers, Case Studies)", de: "Content Strategy (SEO, Blog, Whitepapers, Case Studies)" },
          { en: "Demand Generation (Paid Ads, Social Media, Webinars)", de: "Demand Generation (Paid Ads, Social Media, Webinars)" },
          { en: "Lead Nurturing (Email Campaigns, Marketing Automation)", de: "Lead Nurturing (Email Campaigns, Marketing Automation)" },
          { en: "Conversion Optimization (Landing Pages, CTAs, A/B Testing)", de: "Conversion Optimization (Landing Pages, CTAs, A/B Testing)" },
          { en: "AI-Powered Marketing (Content Gen, Ad Optimization, Lead Scoring)", de: "AI-gestütztes Marketing (Content Gen, Ad Optimization, Lead Scoring)" }
        ]
      },
      {
        id: "partners",
        icon: "Handshake",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        title: { en: "Lever 4: Channel Partner Strategy", de: "Hebel 4: Channel Partner Strategy" },
        subtitle: { en: "Leverage partners to expand reach and revenue", de: "Partner nutzen um Reichweite und Revenue zu erweitern" },
        description: { 
          en: "Partners can drive 30-50% of revenue. Build an ecosystem of resellers, technology partners, and integration partners that multiply your reach.", 
          de: "Partner können 30-50% des Revenue ausmachen. Baue ein Ökosystem aus Resellern, Technologie-Partnern und Integrations-Partnern, das deine Reichweite multipliziert." 
        },
        metrics: [
          { label: { en: "Partner Revenue Share", de: "Partner Revenue Anteil" }, value: "+30-50%" },
          { label: { en: "CAC Reduction", de: "CAC-Reduktion" }, value: "-20-40%" }
        ],
        actions: [
          { en: "Partner Ecosystem Design (Resellers, Integrations, Affiliates)", de: "Partner Ecosystem Design (Reseller, Integrationen, Affiliates)" },
          { en: "Partner Recruitment (Ideal Partner Profile, Onboarding)", de: "Partner Recruitment (Ideal Partner Profile, Onboarding)" },
          { en: "Partner Enablement (Training, Co-Marketing, Sales Support)", de: "Partner Enablement (Training, Co-Marketing, Sales Support)" },
          { en: "Partner Management (Performance Tracking, Incentives, Governance)", de: "Partner Management (Performance Tracking, Incentives, Governance)" },
          { en: "AI-Powered Partner Intelligence (Partner Scoring, Opportunity Matching)", de: "AI-gestützte Partner Intelligence (Partner Scoring, Opportunity Matching)" }
        ]
      },
      {
        id: "pricing",
        icon: "DollarSign",
        color: "text-rose-500",
        bgColor: "bg-rose-500/10",
        title: { en: "Lever 5: Pricing Optimization", de: "Hebel 5: Pricing Optimization" },
        subtitle: { en: "Find the optimal price point for maximum revenue", de: "Finde den optimalen Preispunkt für maximalen Umsatz" },
        description: { 
          en: "1% price increase = 10% profit increase. Value-based pricing with AI-powered dynamic pricing and deal scoring maximizes revenue capture.", 
          de: "1% Preiserhöhung = 10% Gewinnsteigerung. Wertbasierte Preisgestaltung mit AI-gestütztem Dynamic Pricing und Deal Scoring maximiert die Revenue-Erfassung." 
        },
        metrics: [
          { label: { en: "Revenue Increase", de: "Revenue-Steigerung" }, value: "+20-40%" },
          { label: { en: "Gross Margin", de: "Gross Margin" }, value: "+10-20pp" }
        ],
        actions: [
          { en: "Pricing Strategy (Value-Based, Cost-Plus, Competitive)", de: "Pricing Strategy (Value-Based, Cost-Plus, Competitive)" },
          { en: "Pricing Models (Subscription, Usage-Based, Freemium, Enterprise)", de: "Pricing Models (Subscription, Usage-Based, Freemium, Enterprise)" },
          { en: "Price Testing (A/B Tests, Willingness-to-Pay, Elasticity)", de: "Price Testing (A/B Tests, Willingness-to-Pay, Elasticity)" },
          { en: "Discount Strategy (Volume Discounts, Annual Prepay, Multi-Year)", de: "Discount Strategy (Volume Discounts, Annual Prepay, Multi-Year)" },
          { en: "AI-Powered Pricing (Dynamic Pricing, Deal Scoring, Revenue Optimization)", de: "AI-gestütztes Pricing (Dynamic Pricing, Deal Scoring, Revenue Optimization)" }
        ]
      },
      {
        id: "sales-process",
        icon: "Settings",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
        title: { en: "Lever 6: Sales Process Excellence", de: "Hebel 6: Sales Process Excellence" },
        subtitle: { en: "Standardize and optimize your sales process", de: "Standardisiere und optimiere deinen Sales Prozess" },
        description: { 
          en: "Repeatable process = predictable revenue. Every rep follows the same winning playbook with AI-powered forecasting and next-best-action recommendations.", 
          de: "Wiederholbarer Prozess = vorhersagbare Revenue. Jeder Rep folgt dem gleichen Winning Playbook mit AI-gestütztem Forecasting und Next-Best-Action Empfehlungen." 
        },
        metrics: [
          { label: { en: "Win Rate Increase", de: "Win Rate Steigerung" }, value: "+50-100%" },
          { label: { en: "Sales Cycle Reduction", de: "Sales Cycle Reduktion" }, value: "-30-50%" }
        ],
        actions: [
          { en: "Sales Process Design (Stages, Exit Criteria, Playbooks)", de: "Sales Process Design (Stages, Exit Criteria, Playbooks)" },
          { en: "Pipeline Management (Forecasting, Deal Reviews, Win/Loss)", de: "Pipeline Management (Forecasting, Deal Reviews, Win/Loss)" },
          { en: "Sales Enablement (Training, Content, Tools, Coaching)", de: "Sales Enablement (Training, Content, Tools, Coaching)" },
          { en: "CRM Excellence (Salesforce/HubSpot Setup, Data Quality, Automation)", de: "CRM Excellence (Salesforce/HubSpot Setup, Data Quality, Automation)" },
          { en: "AI-Powered Sales Ops (Forecasting, Deal Scoring, Next Best Action)", de: "AI-gestützte Sales Ops (Forecasting, Deal Scoring, Next Best Action)" }
        ]
      },
      {
        id: "plg",
        icon: "Rocket",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        title: { en: "Lever 7: PLG Injection", de: "Hebel 7: PLG Injection" },
        subtitle: { en: "Let the product sell itself (self-service + sales-assist)", de: "Lass das Produkt sich selbst verkaufen (Self-Service + Sales-Assist)" },
        description: { 
          en: "PLG companies grow 2-3x faster than sales-led. Freemium, viral loops, and PQL scoring create a hybrid motion that reduces CAC by 50-70%.", 
          de: "PLG-Unternehmen wachsen 2-3x schneller als Sales-Led. Freemium, virale Loops und PQL Scoring schaffen eine Hybrid-Motion, die CAC um 50-70% reduziert." 
        },
        metrics: [
          { label: { en: "CAC Reduction", de: "CAC-Reduktion" }, value: "-50-70%" },
          { label: { en: "Time-to-Revenue", de: "Time-to-Revenue" }, value: "-60-80%" }
        ],
        actions: [
          { en: "PLG Strategy (Self-Service, Viral Loops, Time-to-Value)", de: "PLG Strategy (Self-Service, Virale Loops, Time-to-Value)" },
          { en: "Freemium Model Design (Free Tier, Feature Gating, Upgrade Path)", de: "Freemium Model Design (Free Tier, Feature Gating, Upgrade Path)" },
          { en: "Product-Qualified Leads (PQL Scoring, Usage Triggers, Sales Handoff)", de: "Product-Qualified Leads (PQL Scoring, Usage Triggers, Sales Handoff)" },
          { en: "Hybrid GTM Motion (PLG → Sales-Assist, Sales-Led → PLG)", de: "Hybrid GTM Motion (PLG → Sales-Assist, Sales-Led → PLG)" },
          { en: "AI-Powered PLG (Usage Analytics, Churn Prediction, Expansion Triggers)", de: "AI-gestütztes PLG (Usage Analytics, Churn Prediction, Expansion Triggers)" }
        ]
      }
    ]
  },

  // ==========================================================================
  // BEST PRACTICES (optional, can be empty)
  // ==========================================================================
  bestPractices: { 
    title: { en: "Best Practices", de: "Best Practices" }, 
    categories: []
  },

  // ==========================================================================
  // SECTION 5: 90-DAY IMPLEMENTATION ROADMAP
  // ==========================================================================
  roadmap: { 
    title: { en: "How to Implement", de: "So setzt du es um" }, 
    subtitle: { en: "90-Day Implementation Roadmap", de: "90-Tage Implementierungs-Roadmap" }, 
    phases: [
      {
        phase: 1,
        title: { en: "Strategy", de: "Strategy" },
        timeline: { en: "Week 1-2", de: "Woche 1-2" },
        focus: { en: "Define ICP, validate with data, align team", de: "ICP definieren, mit Daten validieren, Team ausrichten" },
        deliverables: [
          { en: "ICP Profile (1-page document with 5 dimensions)", de: "ICP Profil (1-Seiter mit 5 Dimensionen)" },
          { en: "Positioning Statement (Value Prop + Differentiation)", de: "Positioning Statement (Value Prop + Differenzierung)" },
          { en: "GTM Strategy Deck (5-page presentation)", de: "GTM Strategy Deck (5-Seiten Präsentation)" },
          { en: "Success Metrics Dashboard (Looker/Tableau setup)", de: "Success Metrics Dashboard (Looker/Tableau Setup)" }
        ],
        gradient: "from-violet-500 to-purple-500"
      },
      {
        phase: 2,
        title: { en: "Setup", de: "Setup" },
        timeline: { en: "Week 3-4", de: "Woche 3-4" },
        focus: { en: "Build sales playbook, set up CRM, train team", de: "Sales Playbook bauen, CRM einrichten, Team trainieren" },
        deliverables: [
          { en: "Sales Playbook (10-page document with 7 stages)", de: "Sales Playbook (10-Seiter mit 7 Stages)" },
          { en: "CRM Setup (Salesforce/HubSpot configuration)", de: "CRM Setup (Salesforce/HubSpot Konfiguration)" },
          { en: "Outbound Sequences (Email, LinkedIn, Phone templates)", de: "Outbound Sequences (Email, LinkedIn, Phone Templates)" },
          { en: "Training Materials (Slides, Videos, Checklists)", de: "Training Materials (Slides, Videos, Checklisten)" }
        ],
        gradient: "from-blue-500 to-cyan-500"
      },
      {
        phase: 3,
        title: { en: "Execution", de: "Execution" },
        timeline: { en: "Week 5-12", de: "Woche 5-12" },
        focus: { en: "Launch outbound, test messaging, optimize conversion", de: "Outbound starten, Messaging testen, Conversion optimieren" },
        deliverables: [
          { en: "100+ Outbound Touches/Week (Email + LinkedIn + Call)", de: "100+ Outbound Touches/Woche (Email + LinkedIn + Call)" },
          { en: "10+ Qualified Meetings/Week (ICP-fit prospects)", de: "10+ Qualifizierte Meetings/Woche (ICP-fit Prospects)" },
          { en: "3-5 Deals in Pipeline (per month)", de: "3-5 Deals in Pipeline (pro Monat)" },
          { en: "Conversion Rate Tracking (Weekly optimization cycles)", de: "Conversion Rate Tracking (Wöchentliche Optimierungszyklen)" }
        ],
        gradient: "from-emerald-500 to-green-500"
      }
    ]
  },

  // ==========================================================================
  // SECTION 6: CASE STUDIES (3 anonymized)
  // ==========================================================================
  caseStudies: { 
    title: { en: "Real-World Results", de: "Echte Ergebnisse" }, 
    subtitle: { en: "How 3 companies transformed their GTM with the 7-lever framework", de: "Wie 3 Unternehmen ihr GTM mit dem 7-Hebel-Framework transformiert haben" }, 
    cases: [
      {
        company: { en: "Series A SaaS Company (€5M → €25M ARR)", de: "Series A SaaS Unternehmen (€5M → €25M ARR)" },
        problem: { en: "CAC rising 40% YoY, win rate falling to 12%, sales cycle extending to 120 days", de: "CAC stieg 40% YoY, Win Rate fiel auf 12%, Sales Cycle verlängerte sich auf 120 Tage" },
        solution: { en: "Applied Lever 1 (ICP Clarity), Lever 2 (Outbound Excellence), Lever 5 (Pricing Optimization), and Lever 6 (Sales Process Excellence)", de: "Hebel 1 (ICP Clarity), Hebel 2 (Outbound Excellence), Hebel 5 (Pricing Optimization) und Hebel 6 (Sales Process Excellence) angewendet" },
        results: [
          { metric: { en: "ARR", de: "ARR" }, before: "€5M", after: "€25M", change: "+400%" },
          { metric: { en: "CAC", de: "CAC" }, before: "€8,000", after: "€3,200", change: "-60%" },
          { metric: { en: "Win Rate", de: "Win Rate" }, before: "12%", after: "45%", change: "+275%" },
          { metric: { en: "Sales Cycle", de: "Sales Cycle" }, before: "120 days", after: "45 days", change: "-63%" }
        ],
        timeline: { en: "12 months | Power Up + Boost", de: "12 Monate | Power Up + Boost" }
      },
      {
        company: { en: "Series B SaaS Company (€15M → €60M ARR)", de: "Series B SaaS Unternehmen (€15M → €60M ARR)" },
        problem: { en: "Inbound leads plateauing at 500/month, need new growth channels to reach Series C targets", de: "Inbound Leads stagnierten bei 500/Monat, neue Wachstumskanäle für Series C Ziele nötig" },
        solution: { en: "Applied Lever 3 (Inbound Mastery), Lever 4 (Partner Strategy), Lever 7 (PLG Injection), and Lever 6 (Hybrid GTM Motion)", de: "Hebel 3 (Inbound Mastery), Hebel 4 (Partner Strategy), Hebel 7 (PLG Injection) und Hebel 6 (Hybrid GTM Motion) angewendet" },
        results: [
          { metric: { en: "ARR", de: "ARR" }, before: "€15M", after: "€60M", change: "+300%" },
          { metric: { en: "Inbound Leads", de: "Inbound Leads" }, before: "500/mo", after: "5,000/mo", change: "+900%" },
          { metric: { en: "Partner Revenue", de: "Partner Revenue" }, before: "€0", after: "€18M", change: "30% of total" },
          { metric: { en: "Freemium Users", de: "Freemium User" }, before: "0", after: "50,000", change: "8% PQL conversion" }
        ],
        timeline: { en: "18 months | Boost + Accelerate", de: "18 Monate | Boost + Accelerate" }
      },
      {
        company: { en: "Series C Company (€30M → €100M ARR)", de: "Series C Unternehmen (€30M → €100M ARR)" },
        problem: { en: "Need to reach €100M ARR for IPO readiness, current growth trajectory insufficient", de: "€100M ARR für IPO-Bereitschaft nötig, aktuelle Wachstumskurve reicht nicht" },
        solution: { en: "Comprehensive GTM transformation applying all 7 levers with focus on Enterprise sales motion + partner ecosystem + AI-native GTM stack", de: "Umfassende GTM-Transformation mit allen 7 Hebeln, Fokus auf Enterprise Sales Motion + Partner Ecosystem + AI-native GTM Stack" },
        results: [
          { metric: { en: "ARR", de: "ARR" }, before: "€30M", after: "€100M", change: "+233%" },
          { metric: { en: "Enterprise Deals", de: "Enterprise Deals" }, before: "15%", after: "45%", change: "+30pp revenue share" },
          { metric: { en: "Partner Revenue", de: "Partner Revenue" }, before: "€3M", after: "€30M", change: "30% of total" },
          { metric: { en: "Rule of 40", de: "Rule of 40" }, before: "25%", after: "65%", change: "+40pp" }
        ],
        timeline: { en: "24 months | Accelerate (2 phases)", de: "24 Monate | Accelerate (2 Phasen)" }
      }
    ]
  },

  // ==========================================================================
  // SECTION 7: SOLUTIONS CONNECTION
  // ==========================================================================
  solutionsConnection: { 
    title: { en: "Ready to Execute?", de: "Bereit zur Umsetzung?" }, 
    subtitle: { en: "Choose the right engagement model for your timeline and budget", de: "Wähle das richtige Engagement-Modell für deinen Zeitplan und Budget" }, 
    items: [
      {
        type: "assessment",
        name: { en: "GTM Assessment", de: "GTM Assessment" },
        duration: { en: "2-3 Days", de: "2-3 Tage" },
        price: { en: "€2.5K-€10K", de: "€2.5K-€10K" },
        outcome: { en: "Full GTM maturity report + 90-day roadmap", de: "Vollständiger GTM Maturity Report + 90-Tage Roadmap" },
        cta: { en: "Book Assessment", de: "Assessment buchen" },
        link: "/solutions/gtm-effectiveness-review",
        icon: "ClipboardCheck",
        color: "bg-emerald-500/10 text-emerald-500"
      },
      {
        type: "power-up",
        name: { en: "Power Up: CAC Crisis Averted", de: "Power Up: CAC Krise abgewendet" },
        duration: { en: "30 Days", de: "30 Tage" },
        price: { en: "€23.6K-€45.9K", de: "€23.6K-€45.9K" },
        outcome: { en: "CAC -40-60%, Win Rate +20-100%", de: "CAC -40-60%, Win Rate +20-100%" },
        cta: { en: "Start Power Up", de: "Power Up starten" },
        link: "/solutions/power-up/cac-crisis",
        icon: "Zap",
        color: "bg-orange-500/10 text-orange-500"
      },
      {
        type: "boost",
        name: { en: "Boost: Growth Engine", de: "Boost: Growth Engine" },
        duration: { en: "90 Days", de: "90 Tage" },
        price: { en: "€60K-€78K", de: "€60K-€78K" },
        outcome: { en: "Revenue +30-50%, CAC -50-70%", de: "Revenue +30-50%, CAC -50-70%" },
        cta: { en: "Start Boost", de: "Boost starten" },
        link: "/solutions/boost/growth-engine",
        icon: "Rocket",
        color: "bg-blue-500/10 text-blue-500"
      },
      {
        type: "accelerate",
        name: { en: "Accelerate: AI-Native GTM", de: "Accelerate: AI-Native GTM" },
        duration: { en: "12 Months", de: "12 Monate" },
        price: { en: "€153K", de: "€153K" },
        outcome: { en: "Full GTM transformation, AI Maturity Level 3", de: "Vollständige GTM Transformation, AI Maturity Level 3" },
        cta: { en: "Start Accelerate", de: "Accelerate starten" },
        link: "/solutions/accelerate/hypergrowth",
        icon: "TrendingUp",
        color: "bg-violet-500/10 text-violet-500"
      }
    ]
  },

  // ==========================================================================
  // SECTION 8: WHO THIS IS FOR
  // ==========================================================================
  whoThisIsFor: { 
    title: { en: "Who Should Use This Playbook?", de: "Für wen ist dieses Playbook?" }, 
    subtitle: { en: "Ideal for B2B SaaS companies €5M-€100M ARR", de: "Ideal für B2B SaaS Unternehmen €5M-€100M ARR" }, 
    icp: { en: "Series A-C B2B SaaS companies scaling from €5M to €100M ARR who need a scalable GTM engine", de: "Series A-C B2B SaaS Unternehmen, die von €5M auf €100M ARR skalieren und eine skalierbare GTM Engine brauchen" }, 
    personas: [
      { 
        icon: "User", 
        role: { en: "CEO", de: "CEO" }, 
        pain: { en: "Need scalable GTM engine, not more headcount", de: "Brauche skalierbare GTM Engine, nicht mehr Headcount" }, 
        outcome: { en: "3-5x revenue growth with same team size", de: "3-5x Revenue Wachstum mit gleichem Team" }, 
        color: "violet" 
      },
      { 
        icon: "Target", 
        role: { en: "CMO/CRO", de: "CMO/CRO" }, 
        pain: { en: "Responsible for revenue growth and CAC efficiency", de: "Verantwortlich für Revenue Wachstum und CAC Effizienz" }, 
        outcome: { en: "50% CAC reduction, 100% win rate increase", de: "50% CAC Reduktion, 100% Win Rate Steigerung" }, 
        color: "blue" 
      },
      { 
        icon: "Users", 
        role: { en: "VP Sales", de: "VP Sales" }, 
        pain: { en: "Need repeatable sales process and better win rates", de: "Brauche wiederholbaren Sales Prozess und bessere Win Rates" }, 
        outcome: { en: "Standardized playbook, predictable pipeline", de: "Standardisiertes Playbook, vorhersagbare Pipeline" }, 
        color: "green" 
      },
      { 
        icon: "Megaphone", 
        role: { en: "VP Marketing", de: "VP Marketing" }, 
        pain: { en: "Need more qualified leads at lower cost per lead", de: "Brauche mehr qualifizierte Leads zu geringeren Kosten" }, 
        outcome: { en: "5x inbound leads, 50% lower CPL", de: "5x Inbound Leads, 50% niedrigere CPL" }, 
        color: "amber" 
      }
    ]
  },

  // ==========================================================================
  // SECTION 9: FINAL CTA
  // ==========================================================================
  finalCta: { 
    headline: { en: "Get Started Today", de: "Starte heute" }, 
    subline: { en: "Transform your GTM with the 7-lever framework", de: "Transformiere dein GTM mit dem 7-Hebel-Framework" }, 
    trustSignals: [
      { en: "50-page playbook with templates", de: "50-Seiten Playbook mit Templates" },
      { en: "3 real-world case studies", de: "3 echte Fallstudien" },
      { en: "90-day implementation roadmap", de: "90-Tage Implementierungs-Roadmap" }
    ], 
    bookingUrl: "https://scalingx.fillout.com/inflection-call", 
    downloadUrl: "/downloads/gtm-revenue-playbook.pdf" 
  }
};
