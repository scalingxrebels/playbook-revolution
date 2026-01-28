import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TwinklingStars from "@/components/TwinklingStars";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChevronRight,
  TrendingUp,
  Zap,
  Settings,
  Users,
  Lightbulb,
  BarChart3,
  Clock,
  FileText,
  Shield,
  Calendar,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";

const ScalingReadinessAssessment = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      // Hero
      breadcrumb: ["Solutions", "Scaling Readiness Assessment"],
      badge: "Decision Support · 3-5 Days · €3.9K-€5.9K",
      headline: "Expert Scaling Assessment—In 3-5 Days",
      subheadline: "Get expert analysis of your scaling readiness in 3-5 days. Typical outcomes: Scaling Clarity +85%, Capability Roadmap C₁-C₄ +30-50%, Decision Velocity +50-100%—with board-ready report.",
      stats: [
        { label: "Scaling Clarity", value: "+85%", sublabel: "Typical range" },
        { label: "Capability Roadmap", value: "+30-50%", sublabel: "Typical range" },
        { label: "Decision Velocity", value: "+50-100%", sublabel: "Typical range" }
      ],
      primaryCta: "Request Assessment (€3.9K)",
      secondaryCta: "See How It Works",
      trustBadges: [
        { icon: Clock, text: "3-5 Days (Fast Turnaround)" },
        { icon: FileText, text: "Board-Ready Report (20-30 Pages)" },
        { icon: Shield, text: "Expert Analysis (McKinsey-Level)" }
      ],

      // Problem
      problemHeadline: "You're Growing Fast—But Scaling Is Broken",
      problemIntro: "Your headcount is 150 (grew from 50 in 12 months). Your meetings increased 300% (from 10/week to 40/week). Your decision velocity dropped 50% (from 2 days to 7 days). And worst of all—you don't know if the problem is execution, setup, coordination, or culture.",
      problemCost: "The cost is mounting. Every quarter without scaling clarity:",
      problemCostItems: [
        "Meetings keep increasing (40/week → 60/week → 80/week)",
        "Decision velocity keeps dropping (7d → 10d → 14d)",
        "Operational debt keeps rising (manual processes, broken systems)",
        "Growth stalls (150% → 100% → 50%)"
      ],
      symptoms: [
        { icon: Calendar, title: "Meetings explosion", text: "40-60 meetings/week (benchmark: 10-15 for AI-native)" },
        { icon: Clock, title: "Decision paralysis", text: "7-14 days decision latency (benchmark: 1-3 days for AI-native)" },
        { icon: Settings, title: "Operational debt", text: "Manual processes, broken systems, no automation" },
        { icon: TrendingUp, title: "No scaling clarity", text: "Don't know if problem is execution, setup, coordination, or culture" },
        { icon: BarChart3, title: "Growth stalled", text: "150% → 80% YoY growth" }
      ],
      realCostHeadline: "The real cost:",
      realCostItems: [
        { title: "Destroys productivity", text: "(meetings +300%, decision velocity -50%)" },
        { title: "Limits growth potential", text: "(can't scale broken operations)" },
        { title: "Weakens board confidence", text: "(board losing trust in execution)" },
        { title: "Increases down-round risk", text: "(can't raise at higher valuation)" }
      ],
      problemConclusion: "You've tried the obvious fixes: hiring ops leaders, implementing tools, running retrospectives. But nothing is working. Because the problem isn't *one* process—it's your entire scaling capability. You need expert analysis.",
      problemCta: "You need scaling clarity. Fast.",

      // Solution
      solutionHeadline: "How Scaling Readiness Assessment Works",
      solutionSubheadline: "We don't just analyze metrics. We conduct expert scaling analysis—from McKinsey-level perspective—so you know exactly what to fix first.",
      processTitle: "The Scaling Readiness Assessment Process (3-5 Days):",
      day1Title: "DAY 1-2: DATA COLLECTION & CAPABILITY ANALYSIS",
      day1Intro: "We analyze your scaling readiness across 4 core capabilities:",
      capabilities: [
        {
          id: "C₁",
          title: "Execution",
          icon: Zap,
          items: [
            "Execution velocity (how fast do you ship?)",
            "Execution quality (how good is your output?)",
            "Execution consistency (how repeatable is your process?)",
            "Execution bottlenecks (where are you stuck?)"
          ]
        },
        {
          id: "C₂",
          title: "Setup",
          icon: Settings,
          items: [
            "Systems & tools (do you have the right stack?)",
            "Processes & playbooks (are they documented?)",
            "Data & metrics (do you track the right things?)",
            "Infrastructure (is it scalable?)"
          ]
        },
        {
          id: "C₃",
          title: "Coordination",
          icon: Users,
          items: [
            "Meeting efficiency (are meetings productive?)",
            "Decision velocity (how fast do you decide?)",
            "Cross-functional alignment (do teams work together?)",
            "Communication quality (is information flowing?)"
          ]
        },
        {
          id: "C₄",
          title: "Culture",
          icon: Lightbulb,
          items: [
            "Values & behaviors (are they lived?)",
            "Talent density (do you have A-players?)",
            "Learning velocity (how fast do you improve?)",
            "Change readiness (can you adapt?)"
          ]
        }
      ],
      day1Output: "Output: Scaling Readiness Report (20-30 pages, board-ready)",
      day3Title: "DAY 3-5: 90-DAY SCALING ROADMAP (OPTIONAL +€2K)",
      day3Intro: "We create your 90-day scaling roadmap:",
      day3Items: [
        "Priority Matrix: Which capabilities to fix first (impact × effort)",
        "90-Day Action Plan: Step-by-step plan to improve C₁-C₄ (week-by-week)",
        "Quick Wins: What to fix in first 30 days (meetings, decision velocity, automation)",
        "Long-Term Strategy: What to fix in 90 days (systems, processes, culture)"
      ],
      day3Output: "Output: 90-Day Scaling Roadmap (10-15 pages, actionable)",
      differentiators: [
        "Expert analysis (McKinsey-level quality, not just data dump)",
        "4 capabilities (execution, setup, coordination, culture)",
        "Board-ready report (20-30 pages, investor-grade quality)",
        "Fast turnaround (3-5 days, not 2-4 weeks)"
      ],

      // Outcome
      outcomeHeadline: "Typical Outcomes (3-5 Days)",
      outcomeSubheadline: "These are real results from companies like yours (Series A-B, €5M-€30M ARR).",
      metrics: [
        {
          title: "SCALING CLARITY +85%",
          meaning: "Your scaling clarity increases by 85%.",
          before: "Scaling Clarity = Low (don't know what to fix)",
          after: "Scaling Clarity = High (clear roadmap, priorities clear)",
          impact: 'From "scaling chaos" to "scaling clarity"',
          why: "We analyze 4 capabilities—which increases scaling clarity by 85% through expert analysis and priority setting."
        },
        {
          title: "CAPABILITY ROADMAP +30-50%",
          meaning: "Your capability roadmap shows 30-50% potential improvement.",
          before: "C₁-C₄ Scores = 40-60% (low capability maturity)",
          after: "C₁-C₄ Roadmap = 70-90% (clear 30-50% improvement path)",
          impact: 'From "capability gaps" to "capability roadmap"',
          why: "We identify capability gaps—which creates 30-50% capability roadmap through execution improvement, setup optimization, coordination enhancement, and culture building."
        },
        {
          title: "DECISION VELOCITY +50-100%",
          meaning: "Your decision velocity roadmap shows 50-100% potential increase.",
          before: "Decision Velocity = 7-14 days (slow, unclear)",
          after: "Decision Velocity Roadmap = 3-7 days (clear 50-100% improvement path)",
          impact: 'From "decision paralysis" to "decision velocity"',
          why: "We identify decision bottlenecks—which creates 50-100% decision velocity roadmap through meeting reduction, decision framework, and coordination improvement."
        }
      ],
      realExampleTitle: "REAL EXAMPLE:",
      realExample: {
        company: "Series A SaaS, €15M ARR, 120 employees",
        challenge: "Meetings 50/week, Decision Velocity 10 days, Operational Debt high, Scaling Clarity low",
        problems: "Broken execution (no playbooks), weak setup (manual processes), poor coordination (meeting chaos), unclear culture (values not lived)",
        transformation: "Scaling Readiness Assessment (3-5 days, 4 capabilities analyzed)",
        outcome: "Scaling Clarity +90% (low → high), Capability Roadmap +40% (C₁-C₄: 45% → 85% target), Decision Velocity Roadmap +70% (10d → 3d target), Meetings Roadmap -60% (50/week → 20/week target)"
      },
      outcomeCtaText: "Get your scaling-ready report in 3-5 days. Know exactly what to fix first.",

      // Process
      processHeadline: "The Scaling Readiness Assessment Process",
      processSubheadline: "Transparent timeline. Clear deliverables. Expert-grade quality.",
      phase1Title: "DAY 1-2: DATA COLLECTION & CAPABILITY ANALYSIS",
      phase1WhatWeDo: [
        "Request data (org data, process data, metrics data, etc.)",
        "Analyze 4 capabilities (execution, setup, coordination, culture)",
        "Identify capability gaps (what's broken?)",
        "Create Scaling Readiness Report (20-30 pages)"
      ],
      phase1WhatYouGet: [
        "Scaling Readiness Report (20-30 pages, board-ready)",
        "Capability Gap Analysis (C₁-C₄ scores + bottlenecks)",
        "Priority Matrix (which capabilities to fix first)",
        "Expert Recommendations (5-10 key actions)"
      ],
      phase1TimeCommitment: "2-4 hours (data sharing, Q&A)",
      phase2Title: "DAY 3-5: 90-DAY SCALING ROADMAP (OPTIONAL +€2K)",
      phase2WhatWeDo: [
        "Create 90-day scaling roadmap (week-by-week action plan)",
        "Identify quick wins (what to fix in first 30 days)",
        "Design long-term strategy (what to fix in 90 days)",
        "Prepare implementation guide (how to execute)"
      ],
      phase2WhatYouGet: [
        "90-Day Scaling Roadmap (10-15 pages, actionable)",
        "Quick Wins List (first 30 days)",
        "Long-Term Strategy (90 days)",
        "Implementation Guide (how to execute)"
      ],
      phase2TimeCommitment: "1-2 hours (roadmap review, Q&A)",
      pricingTitle: "PRICING:",
      pricingBase: {
        title: "Base Package (€3.9K):",
        items: [
          "Scaling Readiness Report (20-30 pages)",
          "4 Capabilities analyzed (C₁-C₄)",
          "Expert recommendations",
          "3-5 days turnaround"
        ]
      },
      pricingBridge: {
        title: "+ Execution Bridge (€2K):",
        items: [
          "90-Day Scaling Roadmap (week-by-week)",
          "Quick Wins List (first 30 days)",
          "Implementation Guide (how to execute)",
          "Team Training (how to implement)"
        ]
      },
      pricingTotal: "Total Investment: €3.9K (Base) or €5.9K (Base + Execution)",
      qualityTitle: "QUALITY GUARANTEE:",
      qualityItems: [
        "Expert-grade quality (McKinsey-level analysis)",
        "4 capabilities analyzed (comprehensive scaling assessment)",
        "Fast turnaround (3-5 days, not 2-4 weeks)",
        "Reference calls available (talk to CEOs who've used this)"
      ],

      // Qualification
      qualificationHeadline: "Is This Right for You?",
      qualificationSubheadline: "Scaling Readiness Assessment works best for companies in this situation.",
      goodFitTitle: "THIS IS A GOOD FIT IF:",
      goodFit: [
        {
          title: "You have scaling problems but don't know what to fix first",
          items: [
            "Your meetings increased 300% (10/week → 40/week)",
            "Your decision velocity dropped 50% (2d → 7d)",
            "Your operational debt is high (manual processes, broken systems)",
            "You don't know if problem is execution, setup, coordination, or culture"
          ]
        },
        {
          title: "You need expert scaling analysis (not hands-on implementation)",
          items: [
            "Do you need expert analysis? (not hands-on implementation?)",
            "Do you need board-ready report? (not just data dump?)",
            "Do you need clear priorities? (which capability to fix first?)",
            "Do you need 90-day roadmap? (actionable plan?)"
          ]
        },
        {
          title: "You're Series A-B, €5M-€30M ARR",
          items: [
            "You've raised Series A-B",
            "You have revenue (€5M-€30M ARR)",
            "You have a team (50-200 people)"
          ]
        },
        {
          title: "You need fast turnaround (3-5 days, not 2-4 weeks)",
          items: [
            "You need results in 3-5 days (not 2-4 weeks)",
            "You're willing to share data (org data, process data, metrics data)",
            "You'll commit 2-4 hours for data sharing + Q&A"
          ]
        },
        {
          title: "You have budget (€3.9K-€5.9K)",
          items: [
            "You can invest €3.9K (Base) or €5.9K (Base + Execution)",
            "ROI is 10-30x (based on productivity improvement and growth acceleration)"
          ]
        }
      ],
      notFitTitle: "THIS IS NOT A GOOD FIT IF:",
      notFit: [
        {
          title: "You need hands-on scaling implementation (not just analysis)",
          text: "If you need hands-on implementation (not just analysis), Scaling Assessment is not enough.",
          recommendation: "Better fit: Power Up: Scaling Velocity (30 days, €23.6K) or Boost: Scaling OS (90 days, €60K-€78K)"
        },
        {
          title: "You already know what to fix (just need execution)",
          text: "If you already know which capability to fix, you don't need analysis.",
          recommendation: "Better fit: Power Up: Scaling Velocity (30 days, €23.6K) for fast execution"
        },
        {
          title: "You need full scaling transformation (not just assessment)",
          text: "If you need full scaling transformation (not just assessment), Scaling Assessment is not enough.",
          recommendation: "Better fit: Boost: Scaling OS (90 days, €60K-€78K) or Accelerate: Sustainable Growth (12 months, €153K)"
        }
      ],
      qualificationCta: "Not sure if this is the right fit? Book a free 30-min Inflection Call. We'll assess your scaling and recommend the best path forward.",

      // Final CTA
      ctaHeadline: "Ready to Get Scaling Clarity?",
      ctaSubheadline: "Here's what happens next.",
      step1Title: "STEP 1: REQUEST SCALING ASSESSMENT (€3.9K)",
      step1Text: "Click the button below to request your Scaling Readiness Assessment:",
      step1Items: [
        "We'll send you a data checklist (what we need)",
        "You share data (2-4 hours)",
        "We analyze your scaling (4 capabilities)",
        "You get Scaling Readiness Report (20-30 pages, 3-5 days)"
      ],
      step1Cta: "Know exactly what to fix first.",
      step2Title: "STEP 2: DECIDE IF YOU NEED EXECUTION BRIDGE (+€2K)",
      step2Text: "After receiving your Scaling Readiness Report, you can add:",
      step2Items: [
        "90-Day Scaling Roadmap (week-by-week action plan)",
        "Quick Wins List (first 30 days)",
        "Implementation Guide (how to execute)",
        "Team Training (how to implement)"
      ],
      step2Cta: "You decide. No pressure.",
      altTitle: "ALTERNATIVE: START WITH AN INFLECTION CALL (FREE)",
      altText: "Not sure if you need scaling assessment? Start with a free call:",
      altCallTitle: "Inflection Call (30 min, FREE)",
      altCallItems: [
        "Assess your scaling (meetings, decision velocity, operational debt?)",
        "Identify capability gaps (C₁-C₄ bottlenecks?)",
        "Get recommendation (Scaling assessment, Power Up, or Boost)"
      ],
      altCta: "Book Free Inflection Call",
      faq: [
        {
          q: "How long does scaling assessment take?",
          a: "3-5 days (from data sharing to Scaling Readiness Report)"
        },
        {
          q: "What's the investment?",
          a: "€3.9K (Base) or €5.9K (Base + Execution Bridge)"
        },
        {
          q: "What data do you need?",
          a: "Org data (headcount, structure, roles), process data (playbooks, workflows), metrics data (meetings, decision velocity, productivity), culture data (values, behaviors, engagement)"
        },
        {
          q: "Can I talk to a reference?",
          a: "Yes. We'll connect you with a CEO who's used Scaling Assessment (same stage, same challenge)."
        },
        {
          q: "What's the ROI?",
          a: "Typical ROI is 10-30x (based on productivity improvement and growth acceleration)."
        },
        {
          q: "How is this different from hiring a consultant?",
          a: "Consultants take 2-4 weeks and cost €20K-€50K. We deliver in 3-5 days for €3.9K-€5.9K with McKinsey-level quality."
        }
      ],
      finalCta: "Request Assessment (€3.9K)",
      finalSubtext: "Still have questions? Email us at team@scalingx.io or book a call."
    },
    de: {
      // Hero
      breadcrumb: ["Solutions", "Scaling Readiness Assessment"],
      badge: "Decision Support · 3-5 Tage · €3.9K-€5.9K",
      headline: "Experten-Scaling-Assessment—In 3-5 Tagen",
      subheadline: "Erhalte eine Expertenanalyse deiner Scaling Readiness in 3-5 Tagen. Typische Ergebnisse: Scaling Clarity +85%, Capability Roadmap C₁-C₄ +30-50%, Decision Velocity +50-100%—mit Board-Ready Report.",
      stats: [
        { label: "Scaling Clarity", value: "+85%", sublabel: "Typischer Bereich" },
        { label: "Capability Roadmap", value: "+30-50%", sublabel: "Typischer Bereich" },
        { label: "Decision Velocity", value: "+50-100%", sublabel: "Typischer Bereich" }
      ],
      primaryCta: "Assessment anfragen (€3.9K)",
      secondaryCta: "So funktioniert's",
      trustBadges: [
        { icon: Clock, text: "3-5 Tage (Schnelle Bearbeitung)" },
        { icon: FileText, text: "Board-Ready Report (20-30 Seiten)" },
        { icon: Shield, text: "Experten-Analyse (McKinsey-Level)" }
      ],

      // Problem
      problemHeadline: "Du wächst schnell—aber das Skalieren ist kaputt",
      problemIntro: "Deine Mitarbeiterzahl ist 150 (von 50 in 12 Monaten gewachsen). Deine Meetings haben sich um 300% erhöht (von 10/Woche auf 40/Woche). Deine Decision Velocity ist um 50% gesunken (von 2 Tagen auf 7 Tage). Und das Schlimmste—du weißt nicht, ob das Problem bei Execution, Setup, Coordination oder Culture liegt.",
      problemCost: "Die Kosten steigen. Jedes Quartal ohne Scaling Clarity:",
      problemCostItems: [
        "Meetings nehmen weiter zu (40/Woche → 60/Woche → 80/Woche)",
        "Decision Velocity sinkt weiter (7d → 10d → 14d)",
        "Operational Debt steigt weiter (manuelle Prozesse, kaputte Systeme)",
        "Wachstum stagniert (150% → 100% → 50%)"
      ],
      symptoms: [
        { icon: Calendar, title: "Meeting-Explosion", text: "40-60 Meetings/Woche (Benchmark: 10-15 für AI-native)" },
        { icon: Clock, title: "Decision Paralysis", text: "7-14 Tage Entscheidungslatenz (Benchmark: 1-3 Tage für AI-native)" },
        { icon: Settings, title: "Operational Debt", text: "Manuelle Prozesse, kaputte Systeme, keine Automatisierung" },
        { icon: TrendingUp, title: "Keine Scaling Clarity", text: "Weißt nicht, ob Problem bei Execution, Setup, Coordination oder Culture liegt" },
        { icon: BarChart3, title: "Wachstum stagniert", text: "150% → 80% YoY Wachstum" }
      ],
      realCostHeadline: "Die wahren Kosten:",
      realCostItems: [
        { title: "Zerstört Produktivität", text: "(Meetings +300%, Decision Velocity -50%)" },
        { title: "Begrenzt Wachstumspotential", text: "(kann kaputte Operations nicht skalieren)" },
        { title: "Schwächt Board-Vertrauen", text: "(Board verliert Vertrauen in Execution)" },
        { title: "Erhöht Down-Round-Risiko", text: "(kann nicht zu höherer Bewertung raisen)" }
      ],
      problemConclusion: "Du hast die offensichtlichen Fixes versucht: Ops-Leader eingestellt, Tools implementiert, Retrospektiven durchgeführt. Aber nichts funktioniert. Weil das Problem nicht *ein* Prozess ist—es ist deine gesamte Scaling Capability. Du brauchst Expertenanalyse.",
      problemCta: "Du brauchst Scaling Clarity. Schnell.",

      // Solution
      solutionHeadline: "So funktioniert das Scaling Readiness Assessment",
      solutionSubheadline: "Wir analysieren nicht nur Metriken. Wir führen eine Experten-Scaling-Analyse durch—aus McKinsey-Level-Perspektive—damit du genau weißt, was du zuerst fixen sollst.",
      processTitle: "Der Scaling Readiness Assessment Prozess (3-5 Tage):",
      day1Title: "TAG 1-2: DATENSAMMLUNG & CAPABILITY-ANALYSE",
      day1Intro: "Wir analysieren deine Scaling Readiness über 4 Core Capabilities:",
      capabilities: [
        {
          id: "C₁",
          title: "Execution",
          icon: Zap,
          items: [
            "Execution Velocity (wie schnell lieferst du?)",
            "Execution Quality (wie gut ist dein Output?)",
            "Execution Consistency (wie wiederholbar ist dein Prozess?)",
            "Execution Bottlenecks (wo steckst du fest?)"
          ]
        },
        {
          id: "C₂",
          title: "Setup",
          icon: Settings,
          items: [
            "Systeme & Tools (hast du den richtigen Stack?)",
            "Prozesse & Playbooks (sind sie dokumentiert?)",
            "Daten & Metriken (trackst du die richtigen Dinge?)",
            "Infrastruktur (ist sie skalierbar?)"
          ]
        },
        {
          id: "C₃",
          title: "Coordination",
          icon: Users,
          items: [
            "Meeting-Effizienz (sind Meetings produktiv?)",
            "Decision Velocity (wie schnell entscheidest du?)",
            "Cross-funktionales Alignment (arbeiten Teams zusammen?)",
            "Kommunikationsqualität (fließen Informationen?)"
          ]
        },
        {
          id: "C₄",
          title: "Culture",
          icon: Lightbulb,
          items: [
            "Werte & Verhaltensweisen (werden sie gelebt?)",
            "Talent Density (hast du A-Player?)",
            "Learning Velocity (wie schnell verbesserst du dich?)",
            "Change Readiness (kannst du dich anpassen?)"
          ]
        }
      ],
      day1Output: "Output: Scaling Readiness Report (20-30 Seiten, board-ready)",
      day3Title: "TAG 3-5: 90-TAGE SCALING ROADMAP (OPTIONAL +€2K)",
      day3Intro: "Wir erstellen deine 90-Tage Scaling Roadmap:",
      day3Items: [
        "Priority Matrix: Welche Capabilities zuerst fixen (Impact × Effort)",
        "90-Tage Action Plan: Schritt-für-Schritt-Plan zur Verbesserung von C₁-C₄ (Woche für Woche)",
        "Quick Wins: Was in den ersten 30 Tagen fixen (Meetings, Decision Velocity, Automation)",
        "Langfristige Strategie: Was in 90 Tagen fixen (Systeme, Prozesse, Culture)"
      ],
      day3Output: "Output: 90-Tage Scaling Roadmap (10-15 Seiten, actionable)",
      differentiators: [
        "Experten-Analyse (McKinsey-Level-Qualität, nicht nur Data Dump)",
        "4 Capabilities (Execution, Setup, Coordination, Culture)",
        "Board-Ready Report (20-30 Seiten, Investor-Grade-Qualität)",
        "Schnelle Bearbeitung (3-5 Tage, nicht 2-4 Wochen)"
      ],

      // Outcome
      outcomeHeadline: "Typische Ergebnisse (3-5 Tage)",
      outcomeSubheadline: "Dies sind echte Ergebnisse von Unternehmen wie deinem (Series A-B, €5M-€30M ARR).",
      metrics: [
        {
          title: "SCALING CLARITY +85%",
          meaning: "Deine Scaling Clarity steigt um 85%.",
          before: "Scaling Clarity = Niedrig (weiß nicht, was zu fixen ist)",
          after: "Scaling Clarity = Hoch (klare Roadmap, Prioritäten klar)",
          impact: 'Von „Scaling Chaos" zu „Scaling Clarity"',
          why: "Wir analysieren 4 Capabilities—was die Scaling Clarity durch Expertenanalyse und Prioritätensetzung um 85% erhöht."
        },
        {
          title: "CAPABILITY ROADMAP +30-50%",
          meaning: "Deine Capability Roadmap zeigt 30-50% Verbesserungspotential.",
          before: "C₁-C₄ Scores = 40-60% (niedrige Capability-Reife)",
          after: "C₁-C₄ Roadmap = 70-90% (klarer 30-50% Verbesserungspfad)",
          impact: 'Von „Capability Gaps" zu „Capability Roadmap"',
          why: "Wir identifizieren Capability Gaps—was eine 30-50% Capability Roadmap durch Execution-Verbesserung, Setup-Optimierung, Coordination-Enhancement und Culture-Building erstellt."
        },
        {
          title: "DECISION VELOCITY +50-100%",
          meaning: "Deine Decision Velocity Roadmap zeigt 50-100% Steigerungspotential.",
          before: "Decision Velocity = 7-14 Tage (langsam, unklar)",
          after: "Decision Velocity Roadmap = 3-7 Tage (klarer 50-100% Verbesserungspfad)",
          impact: 'Von „Decision Paralysis" zu „Decision Velocity"',
          why: "Wir identifizieren Decision Bottlenecks—was eine 50-100% Decision Velocity Roadmap durch Meeting-Reduktion, Decision Framework und Coordination-Verbesserung erstellt."
        }
      ],
      realExampleTitle: "ECHTES BEISPIEL:",
      realExample: {
        company: "Series A SaaS, €15M ARR, 120 Mitarbeiter",
        challenge: "Meetings 50/Woche, Decision Velocity 10 Tage, Operational Debt hoch, Scaling Clarity niedrig",
        problems: "Kaputte Execution (keine Playbooks), schwaches Setup (manuelle Prozesse), schlechte Coordination (Meeting-Chaos), unklare Culture (Werte werden nicht gelebt)",
        transformation: "Scaling Readiness Assessment (3-5 Tage, 4 Capabilities analysiert)",
        outcome: "Scaling Clarity +90% (niedrig → hoch), Capability Roadmap +40% (C₁-C₄: 45% → 85% Ziel), Decision Velocity Roadmap +70% (10d → 3d Ziel), Meetings Roadmap -60% (50/Woche → 20/Woche Ziel)"
      },
      outcomeCtaText: "Erhalte deinen Scaling-Ready Report in 3-5 Tagen. Wisse genau, was du zuerst fixen sollst.",

      // Process
      processHeadline: "Der Scaling Readiness Assessment Prozess",
      processSubheadline: "Transparente Timeline. Klare Deliverables. Experten-Grade-Qualität.",
      phase1Title: "TAG 1-2: DATENSAMMLUNG & CAPABILITY-ANALYSE",
      phase1WhatWeDo: [
        "Daten anfordern (Org-Daten, Prozess-Daten, Metriken-Daten, etc.)",
        "4 Capabilities analysieren (Execution, Setup, Coordination, Culture)",
        "Capability Gaps identifizieren (was ist kaputt?)",
        "Scaling Readiness Report erstellen (20-30 Seiten)"
      ],
      phase1WhatYouGet: [
        "Scaling Readiness Report (20-30 Seiten, board-ready)",
        "Capability Gap Analysis (C₁-C₄ Scores + Bottlenecks)",
        "Priority Matrix (welche Capabilities zuerst fixen)",
        "Experten-Empfehlungen (5-10 Schlüsselaktionen)"
      ],
      phase1TimeCommitment: "2-4 Stunden (Daten teilen, Q&A)",
      phase2Title: "TAG 3-5: 90-TAGE SCALING ROADMAP (OPTIONAL +€2K)",
      phase2WhatWeDo: [
        "90-Tage Scaling Roadmap erstellen (Woche-für-Woche Action Plan)",
        "Quick Wins identifizieren (was in den ersten 30 Tagen fixen)",
        "Langfristige Strategie designen (was in 90 Tagen fixen)",
        "Implementation Guide vorbereiten (wie umsetzen)"
      ],
      phase2WhatYouGet: [
        "90-Tage Scaling Roadmap (10-15 Seiten, actionable)",
        "Quick Wins Liste (erste 30 Tage)",
        "Langfristige Strategie (90 Tage)",
        "Implementation Guide (wie umsetzen)"
      ],
      phase2TimeCommitment: "1-2 Stunden (Roadmap Review, Q&A)",
      pricingTitle: "PRICING:",
      pricingBase: {
        title: "Base Package (€3.9K):",
        items: [
          "Scaling Readiness Report (20-30 Seiten)",
          "4 Capabilities analysiert (C₁-C₄)",
          "Experten-Empfehlungen",
          "3-5 Tage Bearbeitungszeit"
        ]
      },
      pricingBridge: {
        title: "+ Execution Bridge (€2K):",
        items: [
          "90-Tage Scaling Roadmap (Woche für Woche)",
          "Quick Wins Liste (erste 30 Tage)",
          "Implementation Guide (wie umsetzen)",
          "Team Training (wie implementieren)"
        ]
      },
      pricingTotal: "Gesamtinvestition: €3.9K (Base) oder €5.9K (Base + Execution)",
      qualityTitle: "QUALITÄTSGARANTIE:",
      qualityItems: [
        "Experten-Grade-Qualität (McKinsey-Level-Analyse)",
        "4 Capabilities analysiert (umfassendes Scaling Assessment)",
        "Schnelle Bearbeitung (3-5 Tage, nicht 2-4 Wochen)",
        "Referenz-Calls verfügbar (sprich mit CEOs, die das genutzt haben)"
      ],

      // Qualification
      qualificationHeadline: "Ist das richtig für dich?",
      qualificationSubheadline: "Scaling Readiness Assessment funktioniert am besten für Unternehmen in dieser Situation.",
      goodFitTitle: "DAS PASST GUT, WENN:",
      goodFit: [
        {
          title: "Du hast Scaling-Probleme, aber weißt nicht, was du zuerst fixen sollst",
          items: [
            "Deine Meetings haben sich um 300% erhöht (10/Woche → 40/Woche)",
            "Deine Decision Velocity ist um 50% gesunken (2d → 7d)",
            "Dein Operational Debt ist hoch (manuelle Prozesse, kaputte Systeme)",
            "Du weißt nicht, ob das Problem bei Execution, Setup, Coordination oder Culture liegt"
          ]
        },
        {
          title: "Du brauchst Experten-Scaling-Analyse (keine Hands-on-Implementierung)",
          items: [
            "Brauchst du Expertenanalyse? (keine Hands-on-Implementierung?)",
            "Brauchst du einen Board-Ready Report? (nicht nur Data Dump?)",
            "Brauchst du klare Prioritäten? (welche Capability zuerst fixen?)",
            "Brauchst du eine 90-Tage Roadmap? (actionable Plan?)"
          ]
        },
        {
          title: "Du bist Series A-B, €5M-€30M ARR",
          items: [
            "Du hast Series A-B geraised",
            "Du hast Revenue (€5M-€30M ARR)",
            "Du hast ein Team (50-200 Leute)"
          ]
        },
        {
          title: "Du brauchst schnelle Bearbeitung (3-5 Tage, nicht 2-4 Wochen)",
          items: [
            "Du brauchst Ergebnisse in 3-5 Tagen (nicht 2-4 Wochen)",
            "Du bist bereit, Daten zu teilen (Org-Daten, Prozess-Daten, Metriken-Daten)",
            "Du wirst 2-4 Stunden für Daten teilen + Q&A committen"
          ]
        },
        {
          title: "Du hast Budget (€3.9K-€5.9K)",
          items: [
            "Du kannst €3.9K (Base) oder €5.9K (Base + Execution) investieren",
            "ROI ist 10-30x (basierend auf Produktivitätsverbesserung und Wachstumsbeschleunigung)"
          ]
        }
      ],
      notFitTitle: "DAS PASST NICHT, WENN:",
      notFit: [
        {
          title: "Du brauchst Hands-on-Scaling-Implementierung (nicht nur Analyse)",
          text: "Wenn du Hands-on-Implementierung brauchst (nicht nur Analyse), reicht Scaling Assessment nicht.",
          recommendation: "Bessere Option: Power Up: Scaling Velocity (30 Tage, €23.6K) oder Boost: Scaling OS (90 Tage, €60K-€78K)"
        },
        {
          title: "Du weißt bereits, was du fixen sollst (brauchst nur Execution)",
          text: "Wenn du bereits weißt, welche Capability zu fixen ist, brauchst du keine Analyse.",
          recommendation: "Bessere Option: Power Up: Scaling Velocity (30 Tage, €23.6K) für schnelle Execution"
        },
        {
          title: "Du brauchst eine vollständige Scaling-Transformation (nicht nur Assessment)",
          text: "Wenn du eine vollständige Scaling-Transformation brauchst (nicht nur Assessment), reicht Scaling Assessment nicht.",
          recommendation: "Bessere Option: Boost: Scaling OS (90 Tage, €60K-€78K) oder Accelerate: Sustainable Growth (12 Monate, €153K)"
        }
      ],
      qualificationCta: "Nicht sicher, ob das richtig passt? Buche einen kostenlosen 30-min Inflection Call. Wir bewerten dein Scaling und empfehlen den besten Weg.",

      // Final CTA
      ctaHeadline: "Bereit für Scaling Clarity?",
      ctaSubheadline: "So geht's weiter.",
      step1Title: "SCHRITT 1: SCALING ASSESSMENT ANFRAGEN (€3.9K)",
      step1Text: "Klicke den Button unten, um dein Scaling Readiness Assessment anzufragen:",
      step1Items: [
        "Wir senden dir eine Daten-Checkliste (was wir brauchen)",
        "Du teilst Daten (2-4 Stunden)",
        "Wir analysieren dein Scaling (4 Capabilities)",
        "Du erhältst den Scaling Readiness Report (20-30 Seiten, 3-5 Tage)"
      ],
      step1Cta: "Wisse genau, was du zuerst fixen sollst.",
      step2Title: "SCHRITT 2: ENTSCHEIDE, OB DU EXECUTION BRIDGE BRAUCHST (+€2K)",
      step2Text: "Nach Erhalt deines Scaling Readiness Reports kannst du hinzufügen:",
      step2Items: [
        "90-Tage Scaling Roadmap (Woche-für-Woche Action Plan)",
        "Quick Wins Liste (erste 30 Tage)",
        "Implementation Guide (wie umsetzen)",
        "Team Training (wie implementieren)"
      ],
      step2Cta: "Du entscheidest. Kein Druck.",
      altTitle: "ALTERNATIVE: STARTE MIT EINEM INFLECTION CALL (KOSTENLOS)",
      altText: "Nicht sicher, ob du ein Scaling Assessment brauchst? Starte mit einem kostenlosen Call:",
      altCallTitle: "Inflection Call (30 min, KOSTENLOS)",
      altCallItems: [
        "Bewerte dein Scaling (Meetings, Decision Velocity, Operational Debt?)",
        "Identifiziere Capability Gaps (C₁-C₄ Bottlenecks?)",
        "Erhalte Empfehlung (Scaling Assessment, Power Up, oder Boost)"
      ],
      altCta: "Kostenlosen Inflection Call buchen",
      faq: [
        {
          q: "Wie lange dauert das Scaling Assessment?",
          a: "3-5 Tage (vom Daten teilen bis zum Scaling Readiness Report)"
        },
        {
          q: "Was ist die Investition?",
          a: "€3.9K (Base) oder €5.9K (Base + Execution Bridge)"
        },
        {
          q: "Welche Daten braucht ihr?",
          a: "Org-Daten (Mitarbeiterzahl, Struktur, Rollen), Prozess-Daten (Playbooks, Workflows), Metriken-Daten (Meetings, Decision Velocity, Produktivität), Culture-Daten (Werte, Verhaltensweisen, Engagement)"
        },
        {
          q: "Kann ich mit einer Referenz sprechen?",
          a: "Ja. Wir verbinden dich mit einem CEO, der Scaling Assessment genutzt hat (gleiche Phase, gleiche Challenge)."
        },
        {
          q: "Was ist der ROI?",
          a: "Typischer ROI ist 10-30x (basierend auf Produktivitätsverbesserung und Wachstumsbeschleunigung)."
        },
        {
          q: "Wie unterscheidet sich das vom Hiring eines Consultants?",
          a: "Consultants brauchen 2-4 Wochen und kosten €20K-€50K. Wir liefern in 3-5 Tagen für €3.9K-€5.9K mit McKinsey-Level-Qualität."
        }
      ],
      finalCta: "Assessment anfragen (€3.9K)",
      finalSubtext: "Noch Fragen? Schreib uns an team@scalingx.io oder buche einen Call."
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <TwinklingStars />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/solutions" className="hover:text-primary transition-colors">
              {t.breadcrumb[0]}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{t.breadcrumb[1]}</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <BarChart3 className="w-4 h-4" />
            {t.badge}
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
            {t.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl">
            {t.subheadline}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl">
            {t.stats.map((stat, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button size="xl" className="group" asChild>
              <a href="https://calendly.com/michel-scalingx/scaling-assessment" target="_blank" rel="noopener noreferrer">
                {t.primaryCta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#solution">{t.secondaryCta}</a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            {t.trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <badge.icon className="w-5 h-5 text-primary" />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.problemHeadline}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">{t.problemIntro}</p>

          <p className="text-lg font-semibold mb-4">{t.problemCost}</p>
          <ul className="list-disc list-inside text-muted-foreground mb-10 space-y-2 max-w-2xl">
            {t.problemCostItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-6">{language === 'en' ? 'The symptoms you\'re seeing:' : 'Die Symptome, die du siehst:'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {t.symptoms.map((symptom, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-destructive/10">
                    <symptom.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <h4 className="font-semibold">{symptom.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{symptom.text}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4">{t.realCostHeadline}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-3xl">
            {t.realCostItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">{item.title}</span>
                  <span className="text-muted-foreground"> {item.text}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground mb-6 max-w-3xl">{t.problemConclusion}</p>
          <p className="text-xl font-bold text-primary">{t.problemCta}</p>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section id="solution" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.solutionHeadline}</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">{t.solutionSubheadline}</p>

          <h3 className="text-xl font-semibold mb-8">{t.processTitle}</h3>
          <div className="bg-card border border-border rounded-2xl p-8 mb-8">
            <h4 className="text-lg font-bold text-primary mb-4">{t.day1Title}</h4>
            <p className="text-muted-foreground mb-6">{t.day1Intro}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {t.capabilities.map((cap, index) => (
                <div key={index} className="bg-muted/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <cap.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-primary font-semibold">{cap.id}</span>
                      <h5 className="font-bold">{cap.title}</h5>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {cap.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="font-semibold text-primary">{t.day1Output}</p>
          </div>

          <div className="bg-card border border-primary/30 rounded-2xl p-8 mb-8">
            <h4 className="text-lg font-bold text-primary mb-4">{t.day3Title}</h4>
            <p className="text-muted-foreground mb-4">{t.day3Intro}</p>
            <ul className="space-y-3 mb-6">
              {t.day3Items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-semibold text-primary">{t.day3Output}</p>
          </div>

          <h4 className="text-lg font-semibold mb-4">{language === 'en' ? 'What makes this different:' : 'Was das unterscheidet:'}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {t.differentiators.map((diff, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>{diff}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOME SECTION */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.outcomeHeadline}</h2>
          <p className="text-lg text-muted-foreground mb-10">{t.outcomeSubheadline}</p>

          <div className="space-y-8 mb-12">
            {t.metrics.map((metric, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary mb-4">{metric.title}</h3>
                <p className="text-muted-foreground mb-4"><strong>{language === 'en' ? 'What this means:' : 'Was das bedeutet:'}</strong> {metric.meaning}</p>
                <div className="bg-muted/50 rounded-xl p-4 mb-4">
                  <p className="text-sm"><strong>{language === 'en' ? 'Before:' : 'Vorher:'}</strong> {metric.before}</p>
                  <p className="text-sm"><strong>{language === 'en' ? 'After:' : 'Nachher:'}</strong> {metric.after}</p>
                  <p className="text-sm"><strong>Impact:</strong> {metric.impact}</p>
                </div>
                <p className="text-sm text-muted-foreground"><strong>{language === 'en' ? 'Why this happens:' : 'Warum das passiert:'}</strong> {metric.why}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-4">{t.realExampleTitle}</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Company:</strong> {t.realExample.company}</p>
              <p><strong>Challenge:</strong> {t.realExample.challenge}</p>
              <p><strong>{language === 'en' ? 'Scaling Problems:' : 'Scaling-Probleme:'}</strong> {t.realExample.problems}</p>
              <p><strong>Transformation:</strong> {t.realExample.transformation}</p>
              <p><strong>Outcome:</strong> {t.realExample.outcome}</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">{t.outcomeCtaText}</p>
            <Button size="lg" asChild>
              <a href="https://calendly.com/michel-scalingx/scaling-assessment" target="_blank" rel="noopener noreferrer">
                {t.primaryCta}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.processHeadline}</h2>
          <p className="text-lg text-muted-foreground mb-10">{t.processSubheadline}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-lg font-bold text-primary mb-6">{t.phase1Title}</h3>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">{language === 'en' ? 'What we do:' : 'Was wir tun:'}</h4>
                <ul className="space-y-2">
                  {t.phase1WhatWeDo.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">{language === 'en' ? 'What you get:' : 'Was du erhältst:'}</h4>
                <ul className="space-y-2">
                  {t.phase1WhatYouGet.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>{language === 'en' ? 'Time commitment (your team):' : 'Zeitaufwand (dein Team):'}</strong> {t.phase1TimeCommitment}
              </p>
            </div>

            <div className="bg-card border border-primary/30 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-primary mb-6">{t.phase2Title}</h3>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">{language === 'en' ? 'What we do:' : 'Was wir tun:'}</h4>
                <ul className="space-y-2">
                  {t.phase2WhatWeDo.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">{language === 'en' ? 'What you get:' : 'Was du erhältst:'}</h4>
                <ul className="space-y-2">
                  {t.phase2WhatYouGet.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>{language === 'en' ? 'Time commitment (your team):' : 'Zeitaufwand (dein Team):'}</strong> {t.phase2TimeCommitment}
              </p>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-muted/50 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-6">{t.pricingTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-3">{t.pricingBase.title}</h4>
                <ul className="space-y-2">
                  {t.pricingBase.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">{t.pricingBridge.title}</h4>
                <ul className="space-y-2">
                  {t.pricingBridge.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="font-bold text-lg">{t.pricingTotal}</p>
          </div>

          {/* Quality Guarantee */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">{t.qualityTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.qualityItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUALIFICATION SECTION */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.qualificationHeadline}</h2>
          <p className="text-lg text-muted-foreground mb-10">{t.qualificationSubheadline}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Good Fit */}
            <div className="bg-card border border-primary/30 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">{t.goodFitTitle}</h3>
              </div>
              <div className="space-y-6">
                {t.goodFit.map((fit, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-2">{index + 1}. {fit.title}</h4>
                    <ul className="space-y-1">
                      {fit.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Not Fit */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <XCircle className="w-6 h-6 text-destructive" />
                <h3 className="text-xl font-bold">{t.notFitTitle}</h3>
              </div>
              <div className="space-y-6">
                {t.notFit.map((fit, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-2">{index + 1}. {fit.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{fit.text}</p>
                    <p className="text-sm font-medium text-primary">{fit.recommendation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground">{t.qualificationCta}</p>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t.ctaHeadline}</h2>
          <p className="text-lg text-muted-foreground mb-10 text-center">{t.ctaSubheadline}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-primary mb-4">{t.step1Title}</h3>
              <p className="text-muted-foreground mb-4">{t.step1Text}</p>
              <ul className="space-y-2 mb-6">
                {t.step1Items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-semibold mb-4">{t.step1Cta}</p>
              <Button size="lg" className="w-full" asChild>
                <a href="https://calendly.com/michel-scalingx/scaling-assessment" target="_blank" rel="noopener noreferrer">
                  {t.primaryCta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Step 2 */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-lg font-bold mb-4">{t.step2Title}</h3>
              <p className="text-muted-foreground mb-4">{t.step2Text}</p>
              <ul className="space-y-2 mb-6">
                {t.step2Items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-semibold text-muted-foreground">{t.step2Cta}</p>
            </div>
          </div>

          {/* Alternative */}
          <div className="bg-muted/50 rounded-2xl p-8 mb-12 max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-bold mb-4">{t.altTitle}</h3>
            <p className="text-muted-foreground mb-4">{t.altText}</p>
            <h4 className="font-semibold mb-3">{t.altCallTitle}</h4>
            <ul className="space-y-2 mb-6 text-left inline-block">
              {t.altCallItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div>
              <Button variant="outline" size="lg" asChild>
                <a href="https://calendly.com/michel-scalingx/inflection-call" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-4 h-4" />
                  {t.altCta}
                </a>
              </Button>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-center">FAQ</h3>
            <Accordion type="single" collapsible className="w-full">
              {t.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-12">
            <Button size="xl" className="group" asChild>
              <a href="https://calendly.com/michel-scalingx/scaling-assessment" target="_blank" rel="noopener noreferrer">
                {t.finalCta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">{t.finalSubtext}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScalingReadinessAssessment;
