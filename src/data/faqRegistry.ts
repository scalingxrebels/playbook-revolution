/**
 * Centralized FAQ data registry for all Solutions pages.
 * Used by PageSEO to auto-inject FAQSchema JSON-LD.
 * Data extracted from Qualification sections (Good Fit / Not Fit).
 */

interface FAQEntry {
  question: string;
  answer: string;
}

export const faqRegistry: Record<string, FAQEntry[]> = {
  // =========================================================================
  // POWER-UPS
  // =========================================================================
  '/solutions/power-up/cac-crisis': [
    {
      question: 'Who is the CAC Crisis Sprint for?',
      answer: 'Series A-C SaaS companies (€2M-€50M ARR) whose CAC increased 100-150% in the last 6-12 months, with LTV/CAC below 3x, and a funding round in 3-12 months. You need at least 90 days of CRM data and 30+ opportunities per month.',
    },
    {
      question: 'How fast can the CAC Crisis Sprint reduce my CAC?',
      answer: 'The Power Up Sprint delivers results in 4-6 weeks: CAC reduction of 20-40%, win rate improvement of 30-50%, and sales cycle reduction of up to 50%. You get immediate quick wins plus a 90-day roadmap.',
    },
    {
      question: 'What data do I need for the CAC Crisis Sprint?',
      answer: 'You need 90 days of CRM data (Salesforce, HubSpot, Pipedrive), 90 days of marketing spend data by channel, minimum 30 opportunities per month, and minimum €50K ACV or a clear sales motion.',
    },
    {
      question: 'When is the CAC Crisis Sprint NOT the right solution?',
      answer: 'It is not suitable if you are pre-Product-Market Fit, have multiple crises at once (you need a Boost instead), have no urgency, or have insufficient data (less than 90 days CRM history).',
    },
  ],
  '/solutions/power-up/growth-momentum': [
    {
      question: 'Who is the Growth Momentum Sprint for?',
      answer: 'Series A-C SaaS companies with stagnating growth who need to identify their top 3 growth levers and create an action plan in 2-4 weeks.',
    },
    {
      question: 'What results can I expect from the Growth Momentum Sprint?',
      answer: 'You get a clear diagnosis of growth blockers, identification of 3-5 high-impact growth levers, and an actionable 90-day growth roadmap. Typical outcomes: pipeline +30-50%, growth rate reacceleration.',
    },
    {
      question: 'How long does the Growth Momentum Sprint take?',
      answer: 'The sprint runs 2-4 weeks depending on complexity. Week 1-2: Diagnosis and data analysis. Week 3-4: Strategy design and roadmap delivery.',
    },
  ],
  '/solutions/power-up/pricing-power': [
    {
      question: 'Who is the Pricing Power Sprint for?',
      answer: 'SaaS companies (Series A-D) with pricing based on cost-plus or competitor benchmarks, low ARPU relative to value delivered, or who have not updated pricing in 12+ months.',
    },
    {
      question: 'What results does the Pricing Power Sprint deliver?',
      answer: 'ARPU increase of 20-40% through AI-native pricing architecture, willingness-to-pay analysis, new packaging design, and a migration strategy. All within 2-4 weeks.',
    },
    {
      question: 'Will changing pricing upset existing customers?',
      answer: 'The sprint includes a grandfathering and migration strategy specifically designed to protect existing customer relationships while capturing more value from new customers and upsells.',
    },
  ],
  '/solutions/power-up/nrr-engine': [
    {
      question: 'Who is the NRR Engine Sprint for?',
      answer: 'SaaS companies with NRR below 100% who want to reach 110-130% through systematic churn analysis, expansion playbook, and customer success optimization in 2-4 weeks.',
    },
    {
      question: 'What is a good Net Revenue Retention rate?',
      answer: 'Top-quartile SaaS companies achieve NRR of 120-140%. Below 100% means you are shrinking from existing customers. The NRR Engine Sprint targets 110-130% as a realistic improvement.',
    },
  ],
  '/solutions/power-up/scaling-velocity': [
    {
      question: 'Who is the Scaling Velocity Sprint for?',
      answer: 'SaaS companies that feel they should be growing faster but cannot identify the bottleneck. The sprint provides a bottleneck analysis, system audit, and 90-day roadmap in 2-4 weeks.',
    },
    {
      question: 'What does a Scaling Velocity Sprint include?',
      answer: 'A comprehensive bottleneck analysis across all scaling dimensions, system audit of your operating infrastructure, and a prioritized 90-day roadmap for faster growth.',
    },
  ],
  '/solutions/power-up/ai-quick-wins': [
    {
      question: 'Who is the AI Quick Wins Sprint for?',
      answer: 'SaaS companies that want to identify and implement AI quick wins in 2-4 weeks. You get an AI maturity assessment plus 5-10 immediately deployable AI use cases.',
    },
    {
      question: 'Do I need AI expertise to benefit from the AI Quick Wins Sprint?',
      answer: 'No. The sprint is designed for companies at AI Maturity Level 1-2 who want practical, immediately implementable AI use cases — not theoretical frameworks.',
    },
  ],
  '/solutions/power-up/board-readiness': [
    {
      question: 'Who is the Board Readiness Sprint for?',
      answer: 'CEOs and founders of Series A-D companies who need investor-grade board materials: board deck, KPI dashboard, and reporting framework in 2-4 weeks.',
    },
    {
      question: 'What deliverables does the Board Readiness Sprint include?',
      answer: 'A professional board deck template, KPI dashboard with the right metrics for your stage, reporting framework, and meeting cadence recommendation. All investor-grade quality.',
    },
  ],
  '/solutions/power-up/portfolio-performance': [
    {
      question: 'Who is the Portfolio Performance Sprint for?',
      answer: 'VCs and PE funds who want to diagnose their top and bottom portfolio performers and create a quick-win action plan in 2-4 weeks.',
    },
    {
      question: 'What does the Portfolio Performance Sprint analyze?',
      answer: 'The sprint analyzes portfolio company performance across growth metrics, unit economics, operational efficiency, and scaling readiness to identify improvement opportunities.',
    },
  ],

  // =========================================================================
  // BOOSTS
  // =========================================================================
  '/solutions/boost/efficient-hypergrowth': [
    {
      question: 'Who is the Efficient Hypergrowth Boost for?',
      answer: 'Series A-C SaaS companies (€3M-€30M ARR) growing 50-100% YoY who want to reach 200%+ while maintaining positive unit economics. Requires a proven product and initial PMF.',
    },
    {
      question: 'What results does the Efficient Hypergrowth Boost deliver?',
      answer: 'Typical outcomes: CAC reduction of 40%, win rate doubling, Rule of 40 improvement of +30pp, and ARR growth acceleration from 100% to 200%+ YoY — all within 6-12 weeks.',
    },
    {
      question: 'How is a Boost different from a Power Up?',
      answer: 'A Power Up (2-4 weeks) solves one specific bottleneck. A Boost (6-12 weeks) transforms an entire system — e.g., your complete GTM motion, pricing architecture, or operating system.',
    },
  ],
  '/solutions/boost/growth-engine': [
    {
      question: 'Who is the Growth Engine Boost for?',
      answer: 'SaaS companies that need to build a systematic revenue engine: GTM motion, sales playbook, and RevOps stack. Ideal for companies with pipeline below €5M or inconsistent deal flow.',
    },
    {
      question: 'What results does the Growth Engine Boost deliver?',
      answer: 'Pipeline growth of 50-100%, win rate improvement of 30-50%, sales cycle reduction, and a fully documented sales playbook — all within 6-12 weeks.',
    },
  ],
  '/solutions/boost/pricing-dominance': [
    {
      question: 'Who is the Pricing Dominance Boost for?',
      answer: 'SaaS companies ready for a complete pricing transformation: from cost-plus to value-based pricing. Ideal for companies leaving significant money on the table with their current packaging.',
    },
    {
      question: 'What results does the Pricing Dominance Boost deliver?',
      answer: 'ARPU increase of 30-60%, NRR improvement of +10-20pp, and a fully redesigned pricing and packaging architecture within 6-12 weeks.',
    },
  ],
  '/solutions/boost/nrr-machine': [
    {
      question: 'Who is the NRR Machine Boost for?',
      answer: 'SaaS companies with NRR below 100% who want to build a systematic retention and expansion engine. Includes churn prevention, expansion revenue, and customer success playbook.',
    },
    {
      question: 'What NRR can I realistically achieve?',
      answer: 'The NRR Machine Boost targets NRR of 120%+ within 6-12 weeks through systematic churn prevention, expansion triggers, and customer success optimization.',
    },
  ],
  '/solutions/boost/scaling-os': [
    {
      question: 'Who is the Scaling OS Boost for?',
      answer: 'SaaS companies experiencing coordination chaos as they scale. The boost implements a Scaling Operating System: coordination cost -50%, decision velocity +200% within 6-12 weeks.',
    },
    {
      question: 'What is a Scaling Operating System?',
      answer: 'A Scaling OS is the infrastructure that enables a company to grow without proportionally increasing complexity. It includes decision frameworks, meeting cadences, OKR systems, and automation.',
    },
  ],
  '/solutions/boost/ai-maturity': [
    {
      question: 'Who is the AI Maturity Boost for?',
      answer: 'SaaS companies at AI Maturity Level 1-2 who want to reach Level 3-4 in 6-12 weeks. Includes AI use case implementation, AI agent deployment, and team enablement.',
    },
    {
      question: 'What AI Maturity levels exist?',
      answer: 'Level 1: Manual (no AI). Level 2: AI-Augmented (AI assists humans). Level 3: AI-Powered (AI drives core processes). Level 4: AI-Native (AI is the operating system). Most companies are at Level 1-2.',
    },
  ],
  '/solutions/boost/board-excellence': [
    {
      question: 'Who is the Board Excellence Boost for?',
      answer: 'Series A-D companies transitioning from reactive to strategic board governance. Ideal if your board meetings are operational report-outs instead of strategic discussions.',
    },
    {
      question: 'What does the Board Excellence Boost deliver?',
      answer: 'A complete board governance system: strategic board agenda, committee structure, investor reporting framework, and decision-making protocols. Investor confidence +80% within 6-12 weeks.',
    },
  ],
  '/solutions/boost/portfolio-value': [
    {
      question: 'Who is the Portfolio Value Boost for?',
      answer: 'VCs and PE funds who want to systematically increase portfolio value by 20-30% in 6-12 weeks through structured value creation programs.',
    },
  ],

  // =========================================================================
  // ACCELERATES
  // =========================================================================
  '/solutions/accelerate/hypergrowth': [
    {
      question: 'Who is Accelerate Hypergrowth for?',
      answer: 'Series A-C SaaS companies (€5M-€30M ARR) ready for full-stack scaling transformation: Growth Engines + Operating System + AI — achieving €50M+ ARR in 3-6 months.',
    },
    {
      question: 'How is Accelerate different from Boost?',
      answer: 'A Boost transforms one system (6-12 weeks). Accelerate is a full-stack scaling transformation (3-6 months) covering growth engines, operating systems, and AI-native capabilities simultaneously.',
    },
    {
      question: 'What results does Accelerate Hypergrowth deliver?',
      answer: 'Time to €100M ARR reduction of 85-91% (from 60-84 months to 8-18 months), CAC reduction of 60-80%, ARR growth acceleration from 100-150% to 300-500% YoY.',
    },
  ],
  '/solutions/accelerate/sustainable-growth': [
    {
      question: 'Who is Accelerate Sustainable Growth for?',
      answer: 'SaaS companies that want to build lasting growth with positive unit economics in 3-6 months. Rule of 40 improvement of +30pp, burn multiple below 1.5x.',
    },
    {
      question: 'What is the difference between hypergrowth and sustainable growth?',
      answer: 'Hypergrowth maximizes speed (300-500% YoY). Sustainable growth optimizes for efficiency: positive unit economics, Rule of 40 compliance, and long-term compounding — growing 100-200% YoY profitably.',
    },
  ],
  '/solutions/accelerate/exit-readiness': [
    {
      question: 'Who is Accelerate Exit Readiness for?',
      answer: 'SaaS companies planning an exit (M&A or IPO) in 6-18 months who want to maximize valuation by 20-50% through systematic exit preparation in 3-6 months.',
    },
    {
      question: 'What does exit readiness preparation include?',
      answer: 'Data room preparation, financial model optimization, growth story narrative, due diligence preparation, and valuation optimization across all dimensions investors evaluate.',
    },
  ],
  '/solutions/accelerate/ai-native-scaling': [
    {
      question: 'Who is Accelerate AI-Native Scaling for?',
      answer: 'SaaS companies ready for full AI-native transformation: from AI-augmented to AI-native operations. Revenue per employee 3-5x, coordination cost -70% in 3-6 months.',
    },
    {
      question: 'What does AI-native scaling mean?',
      answer: 'AI-native means AI is not just a tool but the operating system of your company. AI agents handle core processes, decisions are AI-augmented, and the company scales without proportionally adding headcount.',
    },
  ],
  '/solutions/accelerate/portfolio-transformation': [
    {
      question: 'Who is Accelerate Portfolio Transformation for?',
      answer: 'VC and PE funds who want systematic portfolio-wide transformation in 3-6 months. Portfolio value increase of 30-50%, TVPI improvement through structured value creation.',
    },
  ],

  // =========================================================================
  // DECISION SUPPORT / ASSESSMENTS
  // =========================================================================
  '/solutions/vc-dd-simulation': [
    {
      question: 'What is a VC Due Diligence Simulation?',
      answer: 'A simulated due diligence process that reveals gaps in your company before real investors find them. Covers financials, product, team, market, technology, and governance in 3-5 days.',
    },
    {
      question: 'Who should do a VC DD Simulation?',
      answer: 'Any SaaS company planning a fundraise in the next 3-12 months. The simulation identifies and fixes gaps that could reduce your valuation or kill a deal.',
    },
  ],
  '/solutions/gtm-effectiveness-review': [
    {
      question: 'What is a GTM Effectiveness Review?',
      answer: 'An expert analysis of your Go-to-Market effectiveness across ICP clarity, sales motion, channel strategy, and revenue architecture. Delivered in 3-5 days with actionable recommendations.',
    },
    {
      question: 'What results does the GTM Effectiveness Review deliver?',
      answer: 'GTM clarity improvement of 80%, decision velocity increase of 50-100%, and a CAC reduction roadmap targeting 30-50%. Board-ready report included.',
    },
  ],
  '/solutions/pricing-packaging-review': [
    {
      question: 'What is a Pricing & Packaging Review?',
      answer: 'An expert analysis of your current pricing and packaging in 3-5 days. Includes willingness-to-pay analysis, competitive benchmarking, and specific pricing recommendations.',
    },
    {
      question: 'What results does the Pricing Review deliver?',
      answer: 'ARPU improvement potential of 20-40%, conversion optimization of 15-30%, and a board-ready pricing report with specific implementation recommendations.',
    },
  ],
  '/solutions/scaling-readiness-assessment': [
    {
      question: 'What is a Scaling Readiness Assessment?',
      answer: 'A comprehensive assessment of your company\'s readiness to scale across 12 dimensions: product, GTM, operations, finance, talent, tech, governance, and more. Delivered in 3-5 days.',
    },
    {
      question: 'Who needs a Scaling Readiness Assessment?',
      answer: 'Any SaaS company at an inflection point — pre-Series A through Series D — that needs clarity on what to fix before scaling. The assessment identifies your top 3 bottlenecks.',
    },
  ],
  '/solutions/ai-maturity-assessment': [
    {
      question: 'What is an AI Maturity Assessment?',
      answer: 'A measurement of your company\'s AI maturity across 8 dimensions in 3-5 days. Produces an AI Maturity Score, identifies quick wins, and delivers a 90-day AI transformation roadmap.',
    },
    {
      question: 'What AI Maturity Level are most SaaS companies at?',
      answer: 'Most SaaS companies are at Level 1 (Manual) or Level 2 (AI-Augmented). Only 5-10% have reached Level 3 (AI-Powered) or Level 4 (AI-Native). The assessment shows exactly where you stand.',
    },
  ],
  '/solutions/investor-readiness-pitch-deck-check': [
    {
      question: 'What is an Investor Readiness & Pitch Deck Check?',
      answer: 'A comprehensive review of your pitch deck and investor readiness across 10 dimensions and 50+ checkpoints in 3-5 days. Increases fundraising success rate by 40-60%.',
    },
    {
      question: 'When should I do a Pitch Deck Check?',
      answer: 'Ideally 2-3 months before starting your fundraise. This gives you time to fix gaps and optimize your narrative based on the assessment results.',
    },
  ],
  '/solutions/portfolio-assessment': [
    {
      question: 'What is a Portfolio Assessment?',
      answer: 'A systematic analysis of a VC or PE portfolio across 6 dimensions in 5-7 days. Identifies top performers, underperformers, and specific value creation opportunities.',
    },
    {
      question: 'What does the Portfolio Assessment deliver?',
      answer: 'A portfolio scorecard, individual company assessments, identification of value creation opportunities, and a prioritized action plan. Portfolio value improvement potential of 20-30%.',
    },
  ],
  '/solutions/custom-analysis-report': [
    {
      question: 'What is a Custom Analysis Report?',
      answer: 'A tailored expert analysis on your specific challenge with a board-ready report in 3-7 days. Choose from 7 analysis types or define a custom scope.',
    },
  ],

  // =========================================================================
  // ENABLEMENT
  // =========================================================================
  '/solutions/strategic-advisory': [
    {
      question: 'What is Strategic Advisory?',
      answer: 'Long-term strategic counsel for CEOs and boards of Series A-D SaaS companies. A C-level sparring partner for critical scaling decisions, fundraising, and market positioning.',
    },
    {
      question: 'How is Strategic Advisory different from consulting?',
      answer: 'Strategic Advisory is an ongoing relationship (monthly retainer) focused on critical decisions, not project-based deliverables. You get a sparring partner, not a team of consultants.',
    },
  ],
  '/solutions/workshop': [
    {
      question: 'What ScalingX workshops are available?',
      answer: 'Interactive scaling workshops on GTM strategy, pricing optimization, AI-native scaling, board governance, and more. Available as half-day or full-day format for teams and leadership.',
    },
  ],
  '/solutions/keynote': [
    {
      question: 'What keynote topics does ScalingX offer?',
      answer: 'Keynotes on AI-Native Scaling, Efficient Hypergrowth, Pricing Strategy, Customer Success at Scale, and Board Governance. Michel Lason as keynote speaker for events and conferences.',
    },
  ],
  '/solutions/expert-session': [
    {
      question: 'What is an Expert Session?',
      answer: 'A 60-90 minute 1:1 session with a ScalingX expert on your specific scaling challenge. You get immediate clarity and an actionable plan. 9 deep-dive topics available.',
    },
  ],
};
