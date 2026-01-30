import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('growth-engines/customer-success')!;

export const customerSuccessData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "CS · Growth Engines", de: "CS · Growth Engines" },
    title: "Customer Success Playbook",
    subtitle: { 
      en: "How to build customer success that scales with AI", 
      de: "Wie du Customer Success aufbaust, das mit AI skaliert" 
    },
    description: { 
      en: "Traditional customer success is reactive. Companies hire more CSMs, manually track health scores, and still see churn rising and NRR falling. AI-native companies use a different playbook. They leverage the 5-component framework to reduce churn by 60%, increase NRR by 30-50pp, and scale customer success to thousands of customers with small teams.", 
      de: "Traditionelles Customer Success ist reaktiv. Unternehmen stellen mehr CSMs ein, tracken Health Scores manuell und sehen trotzdem steigenden Churn und fallende NRR. AI-native Unternehmen nutzen ein anderes Playbook. Sie nutzen das 5-Komponenten-Framework, um Churn um 60% zu senken, NRR um 30-50pp zu steigern und Customer Success auf tausende Kunden mit kleinen Teams zu skalieren."
    },
    trustBadges: [
      { en: "~3,000 Words", de: "~3.000 Wörter" },
      { en: "3 Case Studies", de: "3 Fallstudien" },
      { en: "90-Day Roadmap", de: "90-Tage Roadmap" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "/downloads/customer-success-playbook.pdf",
    gradient: "from-pink-500 to-rose-500"
  },
  summary: {
    problem: { 
      title: { en: "Problem", de: "Problem" }, 
      text: { en: "Churn rising to 20-30%, NRR falling below 100%, CSMs overwhelmed with manual tasks", de: "Churn steigt auf 20-30%, NRR fällt unter 100%, CSMs überlastet mit manuellen Aufgaben" } 
    },
    whyItMatters: { 
      title: { en: "Why It Matters", de: "Warum es wichtig ist" }, 
      text: { en: "CS is the growth engine most companies ignore. 5-10x cheaper to retain than acquire.", de: "CS ist der Wachstumsmotor, den die meisten Unternehmen ignorieren. 5-10x günstiger zu behalten als zu akquirieren." } 
    },
    solution: { 
      title: { en: "Solution", de: "Lösung" }, 
      text: { en: "5-component framework: Onboarding Excellence, Health Scoring, Retention Loops, Expansion Playbooks, AI-Powered CS Operations", de: "5-Komponenten-Framework: Onboarding Excellence, Health Scoring, Retention Loops, Expansion Playbooks, AI-Powered CS Operations" } 
    }
  },
  problem: {
    title: { en: "Why Traditional Customer Success is Broken", de: "Warum traditionelles Customer Success kaputt ist" },
    subtitle: { en: "The symptoms holding you back", de: "Die Symptome, die dich zurückhalten" },
    bullets: [
      { text: { en: "Churn Rising: Traditional companies see churn increase to 20-30% annually", de: "Churn steigt: Traditionelle Unternehmen sehen Churn-Anstieg auf 20-30% jährlich" } },
      { text: { en: "NRR Falling: Average NRR is 90-100% (vs. 120-150% for AI-native)", de: "NRR fällt: Durchschnittliche NRR ist 90-100% (vs. 120-150% bei AI-native)" } },
      { text: { en: "Manual Health Scores: CSMs spend 50% of time on admin (vs. 10% for AI-native)", de: "Manuelle Health Scores: CSMs verbringen 50% der Zeit mit Admin (vs. 10% bei AI-native)" } },
      { text: { en: "Reactive CS: Problems discovered too late (vs. 90-day early warning for AI-native)", de: "Reaktives CS: Probleme zu spät entdeckt (vs. 90-Tage Frühwarnung bei AI-native)" } }
    ],
    metrics: [
      { label: { en: "Annual Churn", de: "Jährlicher Churn" }, value: "20-30%", trend: "up" },
      { label: { en: "NRR (Traditional)", de: "NRR (Traditionell)" }, value: "90-100%", trend: "down" },
      { label: { en: "CSM Admin Time", de: "CSM Admin-Zeit" }, value: "50%", trend: "up" },
      { label: { en: "Early Warning", de: "Frühwarnung" }, value: "0 days", trend: "down" }
    ]
  },
  framework: {
    title: { en: "The 5-Component Framework", de: "Das 5-Komponenten-Framework" },
    subtitle: { en: "How AI-native companies build customer success that scales", de: "Wie AI-native Unternehmen Customer Success bauen, das skaliert" },
    items: [
      {
        id: "onboarding",
        icon: "Rocket",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        title: { en: "Onboarding Excellence", de: "Onboarding Excellence" },
        subtitle: { en: "Get customers to 'Aha Moment' in <7 days", de: "Bringe Kunden in <7 Tagen zum 'Aha Moment'" },
        description: { en: "40-60% of customers churn before activation. AI-powered onboarding identifies optimal paths automatically.", de: "40-60% der Kunden churnen vor der Aktivierung. AI-gestütztes Onboarding identifiziert optimale Pfade automatisch." },
        metrics: [
          { label: { en: "Activation Rate", de: "Aktivierungsrate" }, value: "+50-100%" },
          { label: { en: "Time-to-Value", de: "Time-to-Value" }, value: "-60-80%" }
        ],
        actions: [
          { en: "Customer Journey Mapping", de: "Customer Journey Mapping" },
          { en: "Welcome Email Sequences", de: "Welcome E-Mail Sequenzen" },
          { en: "In-App Guidance", de: "In-App Guidance" },
          { en: "Success Milestones", de: "Success Milestones" },
          { en: "AI-Powered Onboarding Paths", de: "AI-Powered Onboarding Pfade" }
        ]
      },
      {
        id: "health-scoring",
        icon: "Activity",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        title: { en: "Health Scoring & Churn Prediction", de: "Health Scoring & Churn Prediction" },
        subtitle: { en: "AI-powered health scores with 90-day early warning", de: "AI-gestützte Health Scores mit 90-Tage Frühwarnung" },
        description: { en: "Reactive CS = too late to save customers. 30-50 signals, weighted scoring, ML-based churn prediction.", de: "Reaktives CS = zu spät um Kunden zu retten. 30-50 Signale, gewichtetes Scoring, ML-basierte Churn Prediction." },
        metrics: [
          { label: { en: "Churn Reduction", de: "Churn-Reduktion" }, value: "-40-60%" },
          { label: { en: "Early Warning", de: "Frühwarnung" }, value: "+90 days" }
        ],
        actions: [
          { en: "Health Score Design (30-50 Signals)", de: "Health Score Design (30-50 Signale)" },
          { en: "Product Usage Tracking", de: "Product Usage Tracking" },
          { en: "Engagement Monitoring", de: "Engagement Monitoring" },
          { en: "Churn Prediction Model", de: "Churn Prediction Model" },
          { en: "Automated Alert System", de: "Automatisiertes Alert-System" }
        ]
      },
      {
        id: "retention",
        icon: "RefreshCw",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        title: { en: "Retention Loops", de: "Retention Loops" },
        subtitle: { en: "Automated engagement campaigns to prevent churn", de: "Automatisierte Engagement-Kampagnen zur Churn-Prävention" },
        description: { en: "Manual outreach doesn't scale. Trigger-based automation for usage drops, NPS detractors, support tickets.", de: "Manuelle Outreach skaliert nicht. Trigger-basierte Automation für Usage Drops, NPS Detractors, Support Tickets." },
        metrics: [
          { label: { en: "Churn Reduction", de: "Churn-Reduktion" }, value: "-50-70%" },
          { label: { en: "CSM Productivity", de: "CSM Produktivität" }, value: "+200-400%" }
        ],
        actions: [
          { en: "Usage Drop Loop", de: "Usage Drop Loop" },
          { en: "NPS Detractor Loop", de: "NPS Detractor Loop" },
          { en: "Support Ticket Escalation", de: "Support Ticket Eskalation" },
          { en: "Renewal Risk Loop", de: "Renewal Risk Loop" },
          { en: "Win-Back Campaigns", de: "Win-Back Kampagnen" }
        ]
      },
      {
        id: "expansion",
        icon: "TrendingUp",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        title: { en: "Expansion Playbooks", de: "Expansion Playbooks" },
        subtitle: { en: "Systematic upsell/cross-sell approach", de: "Systematischer Upsell/Cross-Sell Ansatz" },
        description: { en: "Expansion = 3-5x cheaper than new logo acquisition. Usage triggers, propensity scoring, dynamic offers.", de: "Expansion = 3-5x günstiger als Neukundenakquise. Usage Triggers, Propensity Scoring, Dynamic Offers." },
        metrics: [
          { label: { en: "NRR Increase", de: "NRR-Steigerung" }, value: "+30-50pp" },
          { label: { en: "Expansion Rate", de: "Expansion Rate" }, value: "+100-400%" }
        ],
        actions: [
          { en: "Usage Threshold Triggers", de: "Usage Threshold Triggers" },
          { en: "Feature Request Upsell", de: "Feature Request Upsell" },
          { en: "Team Growth Detection", de: "Team Growth Detection" },
          { en: "Success Milestone Expansion", de: "Success Milestone Expansion" },
          { en: "AI Propensity Scoring", de: "AI Propensity Scoring" }
        ]
      },
      {
        id: "ai-cs",
        icon: "Sparkles",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        title: { en: "AI-Powered CS Operations", de: "AI-Powered CS Operations" },
        subtitle: { en: "AI agents that execute CS workflows autonomously", de: "AI Agents, die CS Workflows autonom ausführen" },
        description: { en: "Automation = rules-based, AI = intelligent + adaptive. 15+ AI agents for support, health scoring, onboarding, expansion.", de: "Automation = regelbasiert, AI = intelligent + adaptiv. 15+ AI Agents für Support, Health Scoring, Onboarding, Expansion." },
        metrics: [
          { label: { en: "CSM Productivity", de: "CSM Produktivität" }, value: "+300-500%" },
          { label: { en: "Cost per Customer", de: "Kosten pro Kunde" }, value: "-70-90%" }
        ],
        actions: [
          { en: "AI Customer Support (Chatbots)", de: "AI Customer Support (Chatbots)" },
          { en: "AI Health Scoring", de: "AI Health Scoring" },
          { en: "AI Onboarding Paths", de: "AI Onboarding Pfade" },
          { en: "AI Expansion Intelligence", de: "AI Expansion Intelligence" },
          { en: "AI QBR Preparation", de: "AI QBR Vorbereitung" }
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
        focus: { en: "Define CS strategy, design health score", de: "CS-Strategie definieren, Health Score designen" },
        deliverables: [
          { en: "CS Strategy Document", de: "CS-Strategie Dokument" },
          { en: "Health Score Design (30-50 signals)", de: "Health Score Design (30-50 Signale)" },
          { en: "Retention Loop Map", de: "Retention Loop Map" },
          { en: "Expansion Playbook Framework", de: "Expansion Playbook Framework" }
        ],
        gradient: "from-violet-500 to-purple-500"
      },
      {
        phase: 2,
        title: { en: "Setup", de: "Setup" },
        timeline: { en: "Week 3-4", de: "Woche 3-4" },
        focus: { en: "Build health score, set up automation, deploy AI", de: "Health Score bauen, Automation aufsetzen, AI deployen" },
        deliverables: [
          { en: "Health Score Model (Live)", de: "Health Score Model (Live)" },
          { en: "Retention Loops (Automated)", de: "Retention Loops (Automatisiert)" },
          { en: "3-5 AI Agents Deployed", de: "3-5 AI Agents Deployed" },
          { en: "CS Training Materials", de: "CS Training Materialien" }
        ],
        gradient: "from-blue-500 to-cyan-500"
      },
      {
        phase: 3,
        title: { en: "Execution", de: "Execution" },
        timeline: { en: "Week 5-8", de: "Woche 5-8" },
        focus: { en: "Launch retention loops, test expansion, optimize AI", de: "Retention Loops launchen, Expansion testen, AI optimieren" },
        deliverables: [
          { en: "5+ Retention Loops Live", de: "5+ Retention Loops Live" },
          { en: "10+ Expansion Conversations/Week", de: "10+ Expansion Gespräche/Woche" },
          { en: "AI Agents in Production", de: "AI Agents in Produktion" },
          { en: "Churn Dashboard Live", de: "Churn Dashboard Live" }
        ],
        gradient: "from-emerald-500 to-green-500"
      }
    ]
  },
  caseStudies: {
    title: { en: "Real-World Results", de: "Echte Ergebnisse" },
    subtitle: { en: "How 3 companies transformed their customer success with the 5-component framework", de: "Wie 3 Unternehmen ihr Customer Success mit dem 5-Komponenten-Framework transformiert haben" },
    cases: [
      {
        company: { en: "Series A SaaS Company", de: "Series A SaaS Unternehmen" },
        problem: { en: "Churn rising to 20%, NRR falling to 95%", de: "Churn stieg auf 20%, NRR fiel auf 95%" },
        solution: { en: "Applied all 5 components with focus on Health Scoring + AI Agents", de: "Alle 5 Komponenten angewendet mit Fokus auf Health Scoring + AI Agents" },
        results: [
          { metric: { en: "Churn", de: "Churn" }, before: "20%", after: "8%", change: "-60%" },
          { metric: { en: "NRR", de: "NRR" }, before: "95%", after: "125%", change: "+30pp" },
          { metric: { en: "Time-to-Value", de: "Time-to-Value" }, before: "30 days", after: "3 days", change: "-90%" },
          { metric: { en: "Expansion Rate", de: "Expansion Rate" }, before: "15%", after: "45%", change: "+200%" }
        ],
        timeline: { en: "12 months | Power Up + Boost", de: "12 Monate | Power Up + Boost" }
      },
      {
        company: { en: "Series B SaaS Company", de: "Series B SaaS Unternehmen" },
        problem: { en: "NRR stagnant at 100%, no expansion revenue", de: "NRR stagniert bei 100%, keine Expansion Revenue" },
        solution: { en: "Focus on Expansion Playbooks + Propensity Scoring + 10 AI Agents", de: "Fokus auf Expansion Playbooks + Propensity Scoring + 10 AI Agents" },
        results: [
          { metric: { en: "NRR", de: "NRR" }, before: "100%", after: "135%", change: "+35pp" },
          { metric: { en: "Expansion Revenue", de: "Expansion Revenue" }, before: "€0", after: "€7M", change: "+35%" },
          { metric: { en: "Churn", de: "Churn" }, before: "15%", after: "7%", change: "-53%" },
          { metric: { en: "CSM:Customer Ratio", de: "CSM:Kunden Ratio" }, before: "1:50", after: "1:150", change: "+200%" }
        ],
        timeline: { en: "18 months | Boost + Accelerate", de: "18 Monate | Boost + Accelerate" }
      },
      {
        company: { en: "Series C Company", de: "Series C Unternehmen" },
        problem: { en: "Need to scale CS from 1,000 to 10,000 customers", de: "Müssen CS von 1.000 auf 10.000 Kunden skalieren" },
        solution: { en: "Full 5-component implementation with 15+ AI agents", de: "Vollständige 5-Komponenten-Implementierung mit 15+ AI Agents" },
        results: [
          { metric: { en: "Customers", de: "Kunden" }, before: "1,000", after: "10,000", change: "+900%" },
          { metric: { en: "CSM Team", de: "CSM Team" }, before: "20", after: "30", change: "+50%" },
          { metric: { en: "NRR", de: "NRR" }, before: "110%", after: "145%", change: "+35pp" },
          { metric: { en: "CS Cost/Customer", de: "CS Kosten/Kunde" }, before: "€500", after: "€50", change: "-90%" }
        ],
        timeline: { en: "24 months | Accelerate x2", de: "24 Monate | Accelerate x2" }
      }
    ]
  },
  solutionsConnection: {
    title: { en: "Ready to Execute?", de: "Bereit zur Umsetzung?" },
    subtitle: { en: "Choose the right engagement model for your timeline and budget", de: "Wähle das richtige Engagement-Modell für deinen Zeitplan und Budget" },
    items: [
      {
        type: "power-up",
        name: { en: "Power Up: NRR Engine", de: "Power Up: NRR Engine" },
        duration: { en: "30 Days", de: "30 Tage" },
        price: { en: "From €23.6K", de: "Ab €23.6K" },
        outcome: { en: "Churn -40-60%, CSM Productivity +200-400%", de: "Churn -40-60%, CSM Produktivität +200-400%" },
        cta: { en: "Start Power Up", de: "Power Up starten" },
        link: "/solutions/power-up/nrr-engine",
        icon: "Zap",
        color: "orange"
      },
      {
        type: "boost",
        name: { en: "Boost: NRR Machine", de: "Boost: NRR Machine" },
        duration: { en: "90 Days", de: "90 Tage" },
        price: { en: "€60K-€78K", de: "€60K-€78K" },
        outcome: { en: "Churn -60-80%, NRR +30-50pp", de: "Churn -60-80%, NRR +30-50pp" },
        cta: { en: "Start Boost", de: "Boost starten" },
        link: "/solutions/boost/nrr-machine",
        icon: "Rocket",
        color: "blue"
      }
    ]
  },
  whoThisIsFor: {
    title: { en: "Who Should Use This Playbook?", de: "Für wen ist dieses Playbook?" },
    subtitle: { en: "Ideal for B2B SaaS companies €5M-€100M ARR", de: "Ideal für B2B SaaS Unternehmen €5M-€100M ARR" },
    icp: { en: "Series A-C B2B SaaS companies scaling customer success", de: "Series A-C B2B SaaS Unternehmen, die Customer Success skalieren" },
    personas: [
      { icon: "User", role: { en: "CEO", de: "CEO" }, pain: { en: "Need scalable CS, not just more CSMs", de: "Brauche skalierbares CS, nicht nur mehr CSMs" }, outcome: { en: "10x customer scale with 1.5x team", de: "10x Kundenskalierung mit 1,5x Team" }, color: "violet" },
      { icon: "Settings", role: { en: "COO", de: "COO" }, pain: { en: "Responsible for operational excellence", de: "Verantwortlich für operative Exzellenz" }, outcome: { en: "90% CS cost reduction per customer", de: "90% CS Kostenreduktion pro Kunde" }, color: "blue" },
      { icon: "Heart", role: { en: "VP CS", de: "VP CS" }, pain: { en: "Need to reduce churn and increase NRR", de: "Muss Churn reduzieren und NRR steigern" }, outcome: { en: "60% churn reduction, 35pp NRR growth", de: "60% Churn-Reduktion, 35pp NRR-Wachstum" }, color: "pink" },
      { icon: "Cog", role: { en: "CS Ops", de: "CS Ops" }, pain: { en: "Need to automate retention and expansion", de: "Muss Retention und Expansion automatisieren" }, outcome: { en: "80% automated CS workflows", de: "80% automatisierte CS Workflows" }, color: "amber" }
    ]
  },
  finalCta: {
    headline: { en: "Get Started Today", de: "Starte heute" },
    subline: { en: "Transform your customer success with the 5-component framework", de: "Transformiere dein Customer Success mit dem 5-Komponenten-Framework" },
    trustSignals: [
      { en: "50-page playbook with templates", de: "50-Seiten Playbook mit Templates" },
      { en: "3 real-world case studies", de: "3 echte Fallstudien" },
      { en: "90-day implementation roadmap", de: "90-Tage Implementierungs-Roadmap" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "/downloads/customer-success-playbook.pdf"
  }
};
