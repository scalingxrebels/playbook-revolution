export interface SEOData {
  title: { de: string; en: string };
  description: { de: string; en: string };
  ogImage?: string;
}

export const seoRegistry: Record<string, SEOData> = {
  // =========================================================================
  // HOMEPAGE
  // =========================================================================
  '/': {
    title: {
      de: 'ScalingX — AI-Native Scaling von €2M auf €100M ARR',
      en: 'ScalingX — AI-Native Scaling from €2M to €100M ARR',
    },
    description: {
      de: 'Series A-D SaaS-Unternehmen skalieren 3-5x schneller. Forschungsbasierte Methodik aus 22 AI-nativen Unternehmen. 80+ Unternehmen skaliert, €2,5Mrd+ Bewertung.',
      en: 'Series A-D SaaS companies scale 3-5x faster. Research-backed methodology from 22 AI-native companies. 80+ companies scaled, €2.5B+ valuation.',
    },
    ogImage: '/images/og/scalingx-default.png',
  },

  // =========================================================================
  // SOLUTIONS HUB
  // =========================================================================
  '/solutions': {
    title: {
      de: 'Solutions — Scaling-Lösungen für SaaS A-D | ScalingX',
      en: 'Solutions — Scaling Solutions for SaaS A-D | ScalingX',
    },
    description: {
      de: '40+ Scaling-Lösungen: Power-Ups (2-4 Wochen), Boosts (6-12 Wochen), Accelerates (3-6 Monate). CAC -40%, NRR +15pp, Rule of 40 +30pp.',
      en: '40+ scaling solutions: Power-Ups (2-4 weeks), Boosts (6-12 weeks), Accelerates (3-6 months). CAC -40%, NRR +15pp, Rule of 40 +30pp.',
    },
    ogImage: '/images/og/solutions.png',
  },

  // =========================================================================
  // POWER-UPS (2-4 Wochen)
  // =========================================================================
  '/solutions/power-up/cac-crisis': {
    title: {
      de: 'CAC Crisis Sprint — CAC in 14 Tagen senken | ScalingX',
      en: 'CAC Crisis Sprint — Reduce CAC in 14 Days | ScalingX',
    },
    description: {
      de: 'Dein CAC ist über €5K? Der CAC Crisis Sprint senkt Kundenakquisitionskosten um 20-40% in 2 Wochen. Sofortige Quick Wins + 90-Tage-Roadmap.',
      en: 'CAC over €5K? The CAC Crisis Sprint reduces customer acquisition cost by 20-40% in 2 weeks. Immediate quick wins + 90-day roadmap.',
    },
  },
  '/solutions/power-up/growth-momentum': {
    title: {
      de: 'Growth Momentum Sprint — Wachstum reaktivieren | ScalingX',
      en: 'Growth Momentum Sprint — Reactivate Growth | ScalingX',
    },
    description: {
      de: 'Wachstum stagniert? Der Growth Momentum Sprint identifiziert deine Top-3-Wachstumshebel und liefert einen Aktionsplan in 2-4 Wochen.',
      en: 'Growth stalled? The Growth Momentum Sprint identifies your top 3 growth levers and delivers an action plan in 2-4 weeks.',
    },
  },
  '/solutions/power-up/pricing-power': {
    title: {
      de: 'Pricing Power Sprint — Pricing optimieren | ScalingX',
      en: 'Pricing Power Sprint — Optimize Pricing | ScalingX',
    },
    description: {
      de: 'Pricing-Optimierung in 2-4 Wochen. ARPU +20-40% durch AI-native Pricing-Architektur. Willingness-to-Pay-Analyse + neues Packaging.',
      en: 'Pricing optimization in 2-4 weeks. ARPU +20-40% through AI-native pricing architecture. Willingness-to-pay analysis + new packaging.',
    },
  },
  '/solutions/power-up/nrr-engine': {
    title: {
      de: 'NRR Engine Sprint — Net Revenue Retention steigern | ScalingX',
      en: 'NRR Engine Sprint — Boost Net Revenue Retention | ScalingX',
    },
    description: {
      de: 'NRR unter 100%? Der NRR Engine Sprint bringt deine Net Revenue Retention in 2-4 Wochen auf 110-130%. Churn-Analyse + Expansion-Playbook.',
      en: 'NRR below 100%? The NRR Engine Sprint gets your net revenue retention to 110-130% in 2-4 weeks. Churn analysis + expansion playbook.',
    },
  },
  '/solutions/power-up/scaling-velocity': {
    title: {
      de: 'Scaling Velocity Sprint — Skalierungsgeschwindigkeit | ScalingX',
      en: 'Scaling Velocity Sprint — Accelerate Scaling | ScalingX',
    },
    description: {
      de: 'Dein Scaling-Tempo erhöhen in 2-4 Wochen. Bottleneck-Analyse + System-Audit + 90-Tage-Roadmap für schnelleres Wachstum.',
      en: 'Increase your scaling velocity in 2-4 weeks. Bottleneck analysis + system audit + 90-day roadmap for faster growth.',
    },
  },
  '/solutions/power-up/ai-quick-wins': {
    title: {
      de: 'AI Quick Wins Sprint — AI-Potenziale heben | ScalingX',
      en: 'AI Quick Wins Sprint — Unlock AI Potential | ScalingX',
    },
    description: {
      de: 'AI Quick Wins in 2-4 Wochen identifizieren und umsetzen. AI Maturity Assessment + 5-10 sofort implementierbare AI Use Cases.',
      en: 'Identify and implement AI quick wins in 2-4 weeks. AI maturity assessment + 5-10 immediately deployable AI use cases.',
    },
  },
  '/solutions/power-up/board-readiness': {
    title: {
      de: 'Board Readiness Sprint — Board-Unterlagen | ScalingX',
      en: 'Board Readiness Sprint — Board Materials | ScalingX',
    },
    description: {
      de: 'Board-Ready in 2-4 Wochen. Board Deck, KPI Dashboard, Reporting Framework. Investor-Grade Qualität für Series A-D.',
      en: 'Board-ready in 2-4 weeks. Board deck, KPI dashboard, reporting framework. Investor-grade quality for Series A-D.',
    },
  },
  '/solutions/power-up/portfolio-performance': {
    title: {
      de: 'Portfolio Performance Sprint — VC-Portfolio | ScalingX',
      en: 'Portfolio Performance Sprint — VC Portfolio | ScalingX',
    },
    description: {
      de: 'Portfolio-Performance in 2-4 Wochen steigern. Diagnose der Top-/Bottom-Performer + Quick-Win-Aktionsplan für VCs und PEs.',
      en: 'Boost portfolio performance in 2-4 weeks. Diagnose top/bottom performers + quick-win action plan for VCs and PEs.',
    },
  },
  '/solutions/power-up/custom-sprint': {
    title: {
      de: 'Custom Sprint — Maßgeschneiderter Sprint | ScalingX',
      en: 'Custom Sprint — Tailored Sprint | ScalingX',
    },
    description: {
      de: 'Dein individueller Scaling-Sprint in 2-4 Wochen. Wir analysieren deine spezifische Herausforderung und liefern einen maßgeschneiderten Aktionsplan.',
      en: 'Your individual scaling sprint in 2-4 weeks. We analyze your specific challenge and deliver a tailored action plan.',
    },
  },

  // =========================================================================
  // BOOSTS (6-12 Wochen)
  // =========================================================================
  '/solutions/boost/efficient-hypergrowth': {
    title: {
      de: 'Efficient Hypergrowth — Effizient skalieren | ScalingX',
      en: 'Efficient Hypergrowth — Scale Efficiently | ScalingX',
    },
    description: {
      de: 'Von 100% auf 200%+ YoY Wachstum bei positiver Unit Economics. CAC -40%, Win Rate +100%, Rule of 40 +30pp in 6-12 Wochen.',
      en: 'From 100% to 200%+ YoY growth with positive unit economics. CAC -40%, win rate +100%, Rule of 40 +30pp in 6-12 weeks.',
    },
  },
  '/solutions/boost/growth-engine': {
    title: {
      de: 'Growth Engine Boost — Revenue-Maschine bauen | ScalingX',
      en: 'Growth Engine Boost — Build Revenue Machine | ScalingX',
    },
    description: {
      de: 'Revenue-System in 6-12 Wochen aufbauen. GTM Motion + Sales Playbook + RevOps Stack. Pipeline +50-100%.',
      en: 'Build revenue system in 6-12 weeks. GTM motion + sales playbook + RevOps stack. Pipeline +50-100%.',
    },
  },
  '/solutions/boost/pricing-dominance': {
    title: {
      de: 'Pricing Dominance — Preismacht aufbauen | ScalingX',
      en: 'Pricing Dominance — Build Pricing Power | ScalingX',
    },
    description: {
      de: 'Vollständige Pricing-Transformation in 6-12 Wochen. ARPU +30-60%, NRR +10-20pp. Von Cost-Plus zu Value-Based Pricing.',
      en: 'Complete pricing transformation in 6-12 weeks. ARPU +30-60%, NRR +10-20pp. From cost-plus to value-based pricing.',
    },
  },
  '/solutions/boost/nrr-machine': {
    title: {
      de: 'NRR Machine — Net Revenue Retention System | ScalingX',
      en: 'NRR Machine — Net Revenue Retention System | ScalingX',
    },
    description: {
      de: 'NRR-System von 90% auf 120%+ in 6-12 Wochen. Churn Prevention + Expansion Revenue + Customer Success Playbook.',
      en: 'NRR system from 90% to 120%+ in 6-12 weeks. Churn prevention + expansion revenue + customer success playbook.',
    },
  },
  '/solutions/boost/scaling-os': {
    title: {
      de: 'Scaling OS — Operating System aufbauen | ScalingX',
      en: 'Scaling OS — Build Operating System | ScalingX',
    },
    description: {
      de: 'Scaling Operating System in 6-12 Wochen implementieren. Coordination Cost -50%, Decision Velocity +200%. Von Chaos zu System.',
      en: 'Implement Scaling OS in 6-12 weeks. Coordination cost -50%, decision velocity +200%. From chaos to system.',
    },
  },
  '/solutions/boost/ai-maturity': {
    title: {
      de: 'AI Maturity Boost — AI-Reifegrad steigern | ScalingX',
      en: 'AI Maturity Boost — Increase AI Maturity | ScalingX',
    },
    description: {
      de: 'AI Maturity von Level 1-2 auf Level 3-4 in 6-12 Wochen. AI Use Cases implementieren + AI Agents + Team-Enablement.',
      en: 'AI maturity from Level 1-2 to Level 3-4 in 6-12 weeks. Implement AI use cases + AI agents + team enablement.',
    },
  },
  '/solutions/boost/board-excellence': {
    title: {
      de: 'Board Excellence — Board Governance System | ScalingX',
      en: 'Board Excellence — Board Governance System | ScalingX',
    },
    description: {
      de: 'Board Governance System in 6-12 Wochen aufbauen. Von reaktiver zu strategischer Board-Arbeit. Investor Confidence +80%.',
      en: 'Build board governance system in 6-12 weeks. From reactive to strategic board work. Investor confidence +80%.',
    },
  },
  '/solutions/boost/portfolio-value': {
    title: {
      de: 'Portfolio Value Boost — Portfolio-Wert steigern | ScalingX',
      en: 'Portfolio Value Boost — Increase Portfolio Value | ScalingX',
    },
    description: {
      de: 'Portfolio-Wert um 20-30% steigern in 6-12 Wochen. Systematische Value Creation für VCs und PE-Fonds.',
      en: 'Increase portfolio value by 20-30% in 6-12 weeks. Systematic value creation for VCs and PE funds.',
    },
  },
  '/solutions/boost/custom-program': {
    title: {
      de: 'Custom Boost Programm — Maßgeschneidert | ScalingX',
      en: 'Custom Boost Program — Tailored | ScalingX',
    },
    description: {
      de: 'Dein maßgeschneidertes 6-12 Wochen Programm. Wir designen ein Boost-Programm für deine spezifische Scaling-Herausforderung.',
      en: 'Your tailored 6-12 week program. We design a boost program for your specific scaling challenge.',
    },
  },

  // =========================================================================
  // ACCELERATES (3-6 Monate)
  // =========================================================================
  '/solutions/accelerate/hypergrowth': {
    title: {
      de: 'Accelerate Hypergrowth — Hyperwachstum | ScalingX',
      en: 'Accelerate Hypergrowth — Achieve Hypergrowth | ScalingX',
    },
    description: {
      de: 'Von €5M auf €50M+ ARR in 3-6 Monaten beschleunigen. Full-Stack Scaling mit Growth Engines + Operating System + AI.',
      en: 'Accelerate from €5M to €50M+ ARR in 3-6 months. Full-stack scaling with growth engines + operating system + AI.',
    },
  },
  '/solutions/accelerate/sustainable-growth': {
    title: {
      de: 'Sustainable Growth — Nachhaltiges Wachstum | ScalingX',
      en: 'Sustainable Growth — Build Lasting Growth | ScalingX',
    },
    description: {
      de: 'Nachhaltiges Wachstum bei positiver Unit Economics in 3-6 Monaten aufbauen. Rule of 40 +30pp, Burn Multiple <1.5x.',
      en: 'Build sustainable growth with positive unit economics in 3-6 months. Rule of 40 +30pp, burn multiple <1.5x.',
    },
  },
  '/solutions/accelerate/exit-readiness': {
    title: {
      de: 'Exit Readiness — Exit-Vorbereitung | ScalingX',
      en: 'Exit Readiness — Prepare for Exit | ScalingX',
    },
    description: {
      de: 'Exit-Readiness in 3-6 Monaten erreichen. Data Room, Financial Model, Growth Story, Due Diligence Preparation. Bewertung +20-50%.',
      en: 'Achieve exit readiness in 3-6 months. Data room, financial model, growth story, due diligence preparation. Valuation +20-50%.',
    },
  },
  '/solutions/accelerate/ai-native-scaling': {
    title: {
      de: 'AI-Native Scaling — AI-nativ skalieren | ScalingX',
      en: 'AI-Native Scaling — Scale AI-Natively | ScalingX',
    },
    description: {
      de: 'AI-Native Transformation in 3-6 Monaten. Von AI-Augmented zu AI-Native. Revenue per Employee 3-5x, Coordination Cost -70%.',
      en: 'AI-native transformation in 3-6 months. From AI-augmented to AI-native. Revenue per employee 3-5x, coordination cost -70%.',
    },
  },
  '/solutions/accelerate/portfolio-transformation': {
    title: {
      de: 'Portfolio Transformation — VC/PE Portfolio | ScalingX',
      en: 'Portfolio Transformation — VC/PE Portfolio | ScalingX',
    },
    description: {
      de: 'Systematische Portfolio-Transformation in 3-6 Monaten. Portfolio-Wert +30-50%, TVPI-Verbesserung für VCs und PE-Fonds.',
      en: 'Systematic portfolio transformation in 3-6 months. Portfolio value +30-50%, TVPI improvement for VCs and PE funds.',
    },
  },

  // =========================================================================
  // DECISION SUPPORT
  // =========================================================================
  '/solutions/vc-dd-simulation': {
    title: {
      de: 'VC Due Diligence Simulation — DD-Test | ScalingX',
      en: 'VC Due Diligence Simulation — DD Test | ScalingX',
    },
    description: {
      de: 'Wie bestehst du die VC Due Diligence? Simuliere den DD-Prozess in 3-5 Tagen. Lücken finden, bevor Investoren sie finden.',
      en: 'How will you pass VC due diligence? Simulate the DD process in 3-5 days. Find gaps before investors find them.',
    },
  },
  '/solutions/gtm-effectiveness-review': {
    title: {
      de: 'GTM Effectiveness Review — GTM-Analyse | ScalingX',
      en: 'GTM Effectiveness Review — GTM Analysis | ScalingX',
    },
    description: {
      de: 'Expert-Analyse deiner GTM-Effektivität in 3-5 Tagen. GTM Clarity +80%, Decision Velocity +50-100%, CAC Reduction Roadmap 30-50%.',
      en: 'Expert analysis of your GTM effectiveness in 3-5 days. GTM clarity +80%, decision velocity +50-100%, CAC reduction roadmap 30-50%.',
    },
  },
  '/solutions/pricing-packaging-review': {
    title: {
      de: 'Pricing & Packaging Review — Preisanalyse | ScalingX',
      en: 'Pricing & Packaging Review — Price Analysis | ScalingX',
    },
    description: {
      de: 'Expert-Analyse deines Pricing & Packaging in 3-5 Tagen. ARPU +20-40%, Conversion +15-30%. Board-Ready Report.',
      en: 'Expert analysis of your pricing & packaging in 3-5 days. ARPU +20-40%, conversion +15-30%. Board-ready report.',
    },
  },
  '/solutions/scaling-readiness-assessment': {
    title: {
      de: 'Scaling Readiness Assessment — Skalierungsreife | ScalingX',
      en: 'Scaling Readiness Assessment — Scaling Maturity | ScalingX',
    },
    description: {
      de: 'Wie skalierungsreif ist dein Unternehmen? Assessment über 12 Dimensionen in 3-5 Tagen. Board-Ready Scaling Readiness Report.',
      en: 'How ready is your company to scale? Assessment across 12 dimensions in 3-5 days. Board-ready scaling readiness report.',
    },
  },
  '/solutions/ai-maturity-assessment': {
    title: {
      de: 'AI Maturity Assessment — AI-Reifegrad messen | ScalingX',
      en: 'AI Maturity Assessment — Measure AI Maturity | ScalingX',
    },
    description: {
      de: 'AI-Reifegrad über 8 Dimensionen messen in 3-5 Tagen. AI Maturity Score + 90-Tage AI Transformation Roadmap. Board-Ready Report.',
      en: 'Measure AI maturity across 8 dimensions in 3-5 days. AI maturity score + 90-day AI transformation roadmap. Board-ready report.',
    },
  },
  '/solutions/investor-readiness-pitch-deck-check': {
    title: {
      de: 'Investor Readiness & Pitch Deck Check | ScalingX',
      en: 'Investor Readiness & Pitch Deck Check | ScalingX',
    },
    description: {
      de: 'Pitch Deck und Investor Readiness in 3-5 Tagen prüfen. 10 Dimensionen, 50+ Checkpoints. Fundraising Success Rate +40-60%.',
      en: 'Check pitch deck and investor readiness in 3-5 days. 10 dimensions, 50+ checkpoints. Fundraising success rate +40-60%.',
    },
  },
  '/solutions/portfolio-assessment': {
    title: {
      de: 'Portfolio Assessment — VC/PE Portfolio-Analyse | ScalingX',
      en: 'Portfolio Assessment — VC/PE Portfolio Analysis | ScalingX',
    },
    description: {
      de: 'Systematische Portfolio-Analyse über 6 Dimensionen in 5-7 Tagen. Portfolio-Wert +20-30%, Underperformer identifizieren.',
      en: 'Systematic portfolio analysis across 6 dimensions in 5-7 days. Portfolio value +20-30%, identify underperformers.',
    },
  },
  '/solutions/custom-analysis-report': {
    title: {
      de: 'Custom Analysis & Report — Maßgeschneidert | ScalingX',
      en: 'Custom Analysis & Report — Tailored | ScalingX',
    },
    description: {
      de: 'Maßgeschneiderte Analyse und Board-Ready Report in 3-7 Tagen. 7 Analyse-Typen verfügbar. Expert-Level Qualität.',
      en: 'Tailored analysis and board-ready report in 3-7 days. 7 analysis types available. Expert-level quality.',
    },
  },

  // =========================================================================
  // STRATEGIC ADVISORY & EVENTS
  // =========================================================================
  '/solutions/strategic-advisory': {
    title: {
      de: 'Strategic Advisory — Strategische Beratung | ScalingX',
      en: 'Strategic Advisory — Strategic Counsel | ScalingX',
    },
    description: {
      de: 'Langfristige strategische Beratung für CEOs und Boards von Series A-D SaaS-Unternehmen. Sparring Partner auf C-Level.',
      en: 'Long-term strategic advisory for CEOs and boards of Series A-D SaaS companies. C-level sparring partner.',
    },
  },
  '/solutions/workshop': {
    title: {
      de: 'Workshop — Scaling Workshop buchen | ScalingX',
      en: 'Workshop — Book Scaling Workshop | ScalingX',
    },
    description: {
      de: 'Interaktiver Scaling-Workshop für Teams und Leadership. Themen: GTM, Pricing, AI, Board Governance. Halbtag oder Ganztag.',
      en: 'Interactive scaling workshop for teams and leadership. Topics: GTM, pricing, AI, board governance. Half-day or full-day.',
    },
  },
  '/solutions/keynote': {
    title: {
      de: 'Keynote — Keynote Speaker buchen | ScalingX',
      en: 'Keynote — Book Keynote Speaker | ScalingX',
    },
    description: {
      de: 'Keynote zu AI-Native Scaling, Hypergrowth, Board Governance. Michel Lason als Keynote Speaker für Events und Konferenzen.',
      en: 'Keynote on AI-native scaling, hypergrowth, board governance. Michel Lason as keynote speaker for events and conferences.',
    },
  },
  '/solutions/expert-session': {
    title: {
      de: 'Expert Session — 1:1 Experten-Session | ScalingX',
      en: 'Expert Session — 1:1 Expert Session | ScalingX',
    },
    description: {
      de: '60-90 Minuten 1:1 Expert Session zu deiner Scaling-Herausforderung. Sofortige Klarheit + Aktionsplan.',
      en: '60-90 minute 1:1 expert session on your scaling challenge. Immediate clarity + action plan.',
    },
  },

  // =========================================================================
  // PLAYBOOKS HUB
  // =========================================================================
  '/playbooks': {
    title: {
      de: 'Playbooks — Battle-tested Scaling Frameworks | ScalingX',
      en: 'Playbooks — Battle-tested Scaling Frameworks | ScalingX',
    },
    description: {
      de: '17 Playbooks für AI-Native Scaling: GTM, Revenue, Product, Operations, Finance, Talent, Board Governance, Portfolio.',
      en: '17 playbooks for AI-native scaling: GTM, revenue, product, operations, finance, talent, board governance, portfolio.',
    },
    ogImage: '/images/og/playbooks.png',
  },

  // =========================================================================
  // PLAYBOOK CATEGORIES
  // =========================================================================
  '/playbooks/growth-engines': {
    title: {
      de: 'Growth Engines Playbooks — Revenue & GTM | ScalingX',
      en: 'Growth Engines Playbooks — Revenue & GTM | ScalingX',
    },
    description: {
      de: 'Playbooks für GTM, Revenue, Product und Customer Success. Wie du systematisch Growth Engines baust.',
      en: 'Playbooks for GTM, revenue, product and customer success. How to systematically build growth engines.',
    },
  },
  '/playbooks/operating-systems': {
    title: {
      de: 'Operating Systems Playbooks — Ops & Finance | ScalingX',
      en: 'Operating Systems Playbooks — Ops & Finance | ScalingX',
    },
    description: {
      de: 'Playbooks für Operations, Finance, Talent und Data/Tech. Wie du Scaling Operating Systems baust.',
      en: 'Playbooks for operations, finance, talent and data/tech. How to build scaling operating systems.',
    },
  },
  '/playbooks/board-governance': {
    title: {
      de: 'Board Governance Playbooks — Strategic & Operational | ScalingX',
      en: 'Board Governance Playbooks — Strategic & Operational | ScalingX',
    },
    description: {
      de: 'Playbooks für Strategic Governance, Operational Governance und Exit/M&A. Wie du Board Excellence erreichst.',
      en: 'Playbooks for strategic governance, operational governance and exit/M&A. How to achieve board excellence.',
    },
  },
  '/playbooks/strategic-capabilities': {
    title: {
      de: 'Strategic Capabilities Playbook | ScalingX',
      en: 'Strategic Capabilities Playbook | ScalingX',
    },
    description: {
      de: 'Strategische Fähigkeiten systematisch aufbauen. Capability Mapping + Gap Analysis + Aufbau-Roadmap.',
      en: 'Systematically build strategic capabilities. Capability mapping + gap analysis + build roadmap.',
    },
  },
  '/playbooks/portfolio-transformation': {
    title: {
      de: 'Portfolio Transformation Playbook — VC/PE | ScalingX',
      en: 'Portfolio Transformation Playbook — VC/PE | ScalingX',
    },
    description: {
      de: 'Systematische Portfolio-Transformation für VCs und PE-Fonds. Value Creation Framework + Performance Management.',
      en: 'Systematic portfolio transformation for VCs and PE funds. Value creation framework + performance management.',
    },
  },
  '/playbooks/ai-native-scaling': {
    title: {
      de: 'AI-Native Scaling Playbook — AI-nativ skalieren | ScalingX',
      en: 'AI-Native Scaling Playbook — Scale AI-Natively | ScalingX',
    },
    description: {
      de: 'Das Playbook für AI-Native Scaling. Von AI-Augmented zu AI-Native. Revenue per Employee 3-5x, Coordination Cost -70%.',
      en: 'The playbook for AI-native scaling. From AI-augmented to AI-native. Revenue per employee 3-5x, coordination cost -70%.',
    },
  },

  // =========================================================================
  // INDIVIDUAL PLAYBOOKS
  // =========================================================================
  '/playbooks/growth-engines/gtm-revenue': {
    title: {
      de: 'GTM & Revenue Playbook — Go-to-Market | ScalingX',
      en: 'GTM & Revenue Playbook — Go-to-Market | ScalingX',
    },
    description: {
      de: 'Das GTM & Revenue Playbook: ICP-Definition, Sales Motion, Channel Strategy, Revenue Architecture für Series A-D.',
      en: 'The GTM & revenue playbook: ICP definition, sales motion, channel strategy, revenue architecture for Series A-D.',
    },
  },
  '/playbooks/growth-engines/product': {
    title: {
      de: 'Product Playbook — Product-Led Scaling | ScalingX',
      en: 'Product Playbook — Product-Led Scaling | ScalingX',
    },
    description: {
      de: 'Product-Led Scaling: PLG Motion, Feature Prioritization, Product-Market Fit Expansion, Product Analytics.',
      en: 'Product-led scaling: PLG motion, feature prioritization, product-market fit expansion, product analytics.',
    },
  },
  '/playbooks/growth-engines/customer-success': {
    title: {
      de: 'Customer Success Playbook — NRR steigern | ScalingX',
      en: 'Customer Success Playbook — Boost NRR | ScalingX',
    },
    description: {
      de: 'Customer Success systematisieren: Onboarding, Health Scoring, Expansion, Churn Prevention. NRR auf 120%+.',
      en: 'Systematize customer success: onboarding, health scoring, expansion, churn prevention. NRR to 120%+.',
    },
  },
  '/playbooks/operating-systems/operations': {
    title: {
      de: 'Operations Playbook — Scaling Operations | ScalingX',
      en: 'Operations Playbook — Scaling Operations | ScalingX',
    },
    description: {
      de: 'Operations systematisieren: Process Architecture, Automation, Quality Management, Scaling Infrastructure.',
      en: 'Systematize operations: process architecture, automation, quality management, scaling infrastructure.',
    },
  },
  '/playbooks/operating-systems/finance': {
    title: {
      de: 'Finance Playbook — SaaS Finance System | ScalingX',
      en: 'Finance Playbook — SaaS Finance System | ScalingX',
    },
    description: {
      de: 'SaaS Finance System: Unit Economics, Financial Planning, Investor Reporting, Cash Management für Series A-D.',
      en: 'SaaS finance system: unit economics, financial planning, investor reporting, cash management for Series A-D.',
    },
  },
  '/playbooks/operating-systems/talent': {
    title: {
      de: 'Talent Playbook — Scaling-Team aufbauen | ScalingX',
      en: 'Talent Playbook — Build Scaling Team | ScalingX',
    },
    description: {
      de: 'Talent Playbook: Hiring, Onboarding, Performance Management, Culture at Scale. Die richtigen Leute für Hypergrowth.',
      en: 'Talent playbook: hiring, onboarding, performance management, culture at scale. The right people for hypergrowth.',
    },
  },
  '/playbooks/operating-systems/data-tech': {
    title: {
      de: 'Data & Tech Playbook — Tech Stack skalieren | ScalingX',
      en: 'Data & Tech Playbook — Scale Tech Stack | ScalingX',
    },
    description: {
      de: 'Data & Tech Stack für Scaling: Architecture, Data Infrastructure, AI/ML Stack, DevOps, Security.',
      en: 'Data & tech stack for scaling: architecture, data infrastructure, AI/ML stack, DevOps, security.',
    },
  },
  '/playbooks/board-governance/strategic': {
    title: {
      de: 'Strategic Governance Playbook — Board-Strategie | ScalingX',
      en: 'Strategic Governance Playbook — Board Strategy | ScalingX',
    },
    description: {
      de: 'Strategic Board Governance: Strategische Planung, Board Composition, Committee Structure, Shareholder Management.',
      en: 'Strategic board governance: strategic planning, board composition, committee structure, shareholder management.',
    },
  },
  '/playbooks/board-governance/operational': {
    title: {
      de: 'Operational Governance Playbook — Board-Ops | ScalingX',
      en: 'Operational Governance Playbook — Board Ops | ScalingX',
    },
    description: {
      de: 'Operational Board Governance: Board Meetings, Reporting, Decision Frameworks, Risk Management.',
      en: 'Operational board governance: board meetings, reporting, decision frameworks, risk management.',
    },
  },
  '/playbooks/board-governance/exit-ma': {
    title: {
      de: 'Exit & M&A Playbook — Exit-Vorbereitung | ScalingX',
      en: 'Exit & M&A Playbook — Exit Preparation | ScalingX',
    },
    description: {
      de: 'Exit & M&A Playbook: Exit Readiness, Due Diligence Prep, Valuation Optimization, Deal Process.',
      en: 'Exit & M&A playbook: exit readiness, due diligence prep, valuation optimization, deal process.',
    },
  },
  '/playbooks/portfolio/excellence': {
    title: {
      de: 'Portfolio Excellence Playbook — VC/PE | ScalingX',
      en: 'Portfolio Excellence Playbook — VC/PE | ScalingX',
    },
    description: {
      de: 'Portfolio Excellence: Value Creation, Performance Management, Portfolio Construction, LP Reporting.',
      en: 'Portfolio excellence: value creation, performance management, portfolio construction, LP reporting.',
    },
  },

  // =========================================================================
  // EXPERTISE
  // =========================================================================
  '/expertise': {
    title: {
      de: 'Expertise — ScalingX Hypergrowth',
      en: 'Expertise — ScalingX Hypergrowth',
    },
    description: {
      de: 'Vier Mechanismen. Kombiniert mit Speed. Das ist warum es funktioniert.',
      en: 'Four mechanisms. Combined with speed. That\'s why it works.',
    },
    ogImage: '/images/og/expertise.png',
  },
  '/expertise/hypothesen-maschine': {
    title: {
      de: 'M1 — Die Hypothesen-Maschine · ScalingX Expertise',
      en: 'M1 — The Hypothesis Engine · ScalingX Expertise',
    },
    description: {
      de: 'Wir kommen in jedes Gespräch mit einer Theorie — bevor das Gespräch beginnt.',
      en: 'We enter every conversation with a theory — before the conversation begins.',
    },
  },
  '/expertise/uebersetzungskompetenz': {
    title: {
      de: 'M2 — Übersetzungskompetenz · ScalingX Expertise',
      en: 'M2 — Translation Competence · ScalingX Expertise',
    },
    description: {
      de: 'Strategie die nicht übersetzt wird, ist Meinung.',
      en: 'Strategy that isn\'t translated is opinion.',
    },
  },
  '/expertise/funktionierende-synthese': {
    title: {
      de: 'M3 — Funktionierende Synthese · ScalingX Expertise',
      en: 'M3 — Functioning Synthesis · ScalingX Expertise',
    },
    description: {
      de: 'Konzept × operative Realität = es funktioniert wirklich.',
      en: 'Concept × operational reality = it actually works.',
    },
  },
  '/expertise/ai-orchestration': {
    title: {
      de: 'M4 — AI Orchestration als struktureller Vorteil · ScalingX Expertise',
      en: 'M4 — AI Orchestration as Structural Advantage · ScalingX Expertise',
    },
    description: {
      de: 'M4 ist kein vierter Mechanismus. Es ist der Verstärker auf M1, M2 und M3.',
      en: 'M4 is not a fourth mechanism. It\'s the amplifier on M1, M2 and M3.',
    },
  },

  // =========================================================================
  // CASES
  // =========================================================================
  '/cases': {
    title: {
      de: 'Case Studies — 80+ Unternehmen skaliert | ScalingX',
      en: 'Case Studies — 80+ Companies Scaled | ScalingX',
    },
    description: {
      de: 'Echte Ergebnisse: CAC -58%, Rule of 40 +30pp, NRR 120%+. Case Studies von Series A-D SaaS-Unternehmen.',
      en: 'Real results: CAC -58%, Rule of 40 +30pp, NRR 120%+. Case studies from Series A-D SaaS companies.',
    },
    ogImage: '/images/og/cases.png',
  },

  // =========================================================================
  // ABOUT & TEAM
  // =========================================================================
  '/about': {
    title: {
      de: 'Über ScalingX — Expertise × Speed = Impact',
      en: 'About ScalingX — Expertise × Speed = Impact',
    },
    description: {
      de: 'Das Team hinter ScalingX: Michel Lason, Alban Halili, Florian Metzger. 80+ Unternehmen, 140+ Mandate, €2,5Mrd+ Bewertung.',
      en: 'The team behind ScalingX: Michel Lason, Alban Halili, Florian Metzger. 80+ companies, 140+ engagements, €2.5B+ valuation.',
    },
    ogImage: '/images/og/about.png',
  },
  '/ml': {
    title: {
      de: 'Michel Lason — Founder & CEO ScalingX',
      en: 'Michel Lason — Founder & CEO ScalingX',
    },
    description: {
      de: '18 Jahre Startups skalieren. Ex-Berater (Microsoft, XING), SaaS Executive (€1,3M → €13,7M ARR). Autor "Fix Growth. Scale Faster."',
      en: '18 years scaling startups. Ex-consultant (Microsoft, XING), SaaS executive (€1.3M → €13.7M ARR). Author "Fix Growth. Scale Faster."',
    },
  },
  '/ah': {
    title: {
      de: 'Alban Halili — Partner ScalingX',
      en: 'Alban Halili — Partner ScalingX',
    },
    description: {
      de: '10+ Jahre B2B Sales skalieren. Ex-CSO Elba (€8,5M ARR), Enterprise Sales Telefónica. AI Agents & Automation.',
      en: '10+ years scaling B2B sales. Ex-CSO Elba (€8.5M ARR), enterprise sales Telefónica. AI agents & automation.',
    },
  },
  '/fm': {
    title: {
      de: 'Florian Metzger — Partner ScalingX',
      en: 'Florian Metzger — Partner ScalingX',
    },
    description: {
      de: '4+ Jahre SaaS-Businesses aufbauen. Design Thinking (HPI), RevOps, GTM Engineering, Marketing Automation.',
      en: '4+ years building SaaS businesses. Design Thinking (HPI), RevOps, GTM engineering, marketing automation.',
    },
  },

  // =========================================================================
  // INSIGHTS
  // =========================================================================
  '/insights': {
    title: {
      de: 'Insights — Artikel, Events & Case Studies | ScalingX',
      en: 'Insights — Articles, Events & Case Studies | ScalingX',
    },
    description: {
      de: 'Operator-Grade Insights für Founder und Revenue Leader. Execution-first Artikel, Live Events und Case Studies. AI-native, DACH-fokussiert, Series A–C.',
      en: 'Operator-grade insights for founders and revenue leaders. Execution-first articles, live events and case studies. AI-native, DACH-focused, Series A–C.',
    },
  },

  // =========================================================================
  // COMMUNITY (legacy)
  // =========================================================================
  '/community': {
    title: {
      de: 'Community — Scaling-Experten vernetzen | ScalingX',
      en: 'Community — Connect with Scaling Experts | ScalingX',
    },
    description: {
      de: 'Die ScalingX Community: Vernetze dich mit Gründern, VCs und Scaling-Experten. Events, Masterclasses, Peer Groups.',
      en: 'The ScalingX community: connect with founders, VCs and scaling experts. Events, masterclasses, peer groups.',
    },
  },

  // =========================================================================
  // TOOLS & BOOK
  // =========================================================================
  '/tools/maxxeed': {
    title: {
      de: 'Maxxeed — AI-Native Scaling Tool | ScalingX',
      en: 'Maxxeed — AI-Native Scaling Tool | ScalingX',
    },
    description: {
      de: 'Maxxeed: Das AI-Native Scaling Tool für Series A-D. Diagnostik, Playbooks, AI Agents in einer Plattform.',
      en: 'Maxxeed: the AI-native scaling tool for Series A-D. Diagnostics, playbooks, AI agents in one platform.',
    },
  },
  '/book/fix-growth': {
    title: {
      de: 'Fix Growth. Scale Faster. — Das Buch | ScalingX',
      en: 'Fix Growth. Scale Faster. — The Book | ScalingX',
    },
    description: {
      de: 'Fix Growth. Scale Faster. von Michel Lason. Das Standardwerk für AI-Native Scaling von €2M auf €100M ARR.',
      en: 'Fix Growth. Scale Faster. by Michel Lason. The definitive guide to AI-native scaling from €2M to €100M ARR.',
    },
  },

  // =========================================================================
  // GLOSSAR
  // =========================================================================
  '/glossar': {
    title: {
      de: 'Glossar — Scaling & SaaS Begriffe erklärt | ScalingX',
      en: 'Glossary — Scaling & SaaS Terms Explained | ScalingX',
    },
    description: {
      de: 'Alle wichtigen Scaling- und SaaS-Begriffe erklärt: ARR, CAC, NRR, Rule of 40, AI-Native, LTV/CAC und mehr.',
      en: 'All important scaling and SaaS terms explained: ARR, CAC, NRR, Rule of 40, AI-native, LTV/CAC and more.',
    },
  },

  // =========================================================================
  // LEGAL
  // =========================================================================
  '/impressum': {
    title: {
      de: 'Impressum | ScalingX',
      en: 'Legal Notice | ScalingX',
    },
    description: {
      de: 'Impressum und rechtliche Informationen der ScalingX GmbH.',
      en: 'Legal notice and company information for ScalingX GmbH.',
    },
  },
  '/datenschutz': {
    title: {
      de: 'Datenschutzerklärung | ScalingX',
      en: 'Privacy Policy | ScalingX',
    },
    description: {
      de: 'Datenschutzerklärung der ScalingX GmbH. Informationen zur Verarbeitung personenbezogener Daten.',
      en: 'Privacy policy of ScalingX GmbH. Information on processing of personal data.',
    },
  },
  '/agb': {
    title: {
      de: 'AGB — Allgemeine Geschäftsbedingungen | ScalingX',
      en: 'Terms & Conditions | ScalingX',
    },
    description: {
      de: 'Allgemeine Geschäftsbedingungen der ScalingX GmbH.',
      en: 'Terms and conditions of ScalingX GmbH.',
    },
  },

  // =========================================================================
  // GTM STACK MAP 2026
  // =========================================================================
  '/solutions/gtm-stack-map': {
    title: {
      de: 'GTM Stack Map 2026 — Kostenlos für B2B SaaS Teams | ScalingX',
      en: 'GTM Stack Map 2026 — Free for B2B SaaS Teams | ScalingX',
    },
    description: {
      de: 'Die vollständige Übersicht aller GTM-Tools 2026. Kategorisiert nach Funnel-Layer. Kostenlos.',
      en: 'The complete overview of all GTM tools 2026. Categorized by funnel layer. Free.',
    },
    ogImage: '/images/og/solutions.png',
  },
};
