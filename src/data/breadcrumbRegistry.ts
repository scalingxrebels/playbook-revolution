/**
 * Centralized breadcrumb paths for structured data (BreadcrumbList JSON-LD).
 * Used by PageSEO to auto-inject BreadcrumbSchema.
 */

interface BreadcrumbItem {
  name: string;
  path: string;
}

export const breadcrumbRegistry: Record<string, BreadcrumbItem[]> = {
  // =========================================================================
  // SOLUTIONS HUB
  // =========================================================================
  '/solutions': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
  ],

  // POWER-UPS
  '/solutions/power-up/cac-crisis': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Power Up', path: '/solutions/power-up' },
    { name: 'CAC Crisis Sprint', path: '/solutions/power-up/cac-crisis' },
  ],
  '/solutions/power-up/growth-momentum': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Power Up', path: '/solutions/power-up' },
    { name: 'Growth Momentum Sprint', path: '/solutions/power-up/growth-momentum' },
  ],
  '/solutions/power-up/pricing-power': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Power Up', path: '/solutions/power-up' },
    { name: 'Pricing Power Sprint', path: '/solutions/power-up/pricing-power' },
  ],
  '/solutions/power-up/nrr-engine': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Power Up', path: '/solutions/power-up' },
    { name: 'NRR Engine Sprint', path: '/solutions/power-up/nrr-engine' },
  ],
  '/solutions/power-up/scaling-velocity': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Power Up', path: '/solutions/power-up' },
    { name: 'Scaling Velocity Sprint', path: '/solutions/power-up/scaling-velocity' },
  ],
  '/solutions/power-up/ai-quick-wins': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Power Up', path: '/solutions/power-up' },
    { name: 'AI Quick Wins Sprint', path: '/solutions/power-up/ai-quick-wins' },
  ],
  '/solutions/power-up/board-readiness': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Power Up', path: '/solutions/power-up' },
    { name: 'Board Readiness Sprint', path: '/solutions/power-up/board-readiness' },
  ],
  '/solutions/power-up/portfolio-performance': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Power Up', path: '/solutions/power-up' },
    { name: 'Portfolio Performance Sprint', path: '/solutions/power-up/portfolio-performance' },
  ],
  '/solutions/power-up/custom-sprint': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Power Up', path: '/solutions/power-up' },
    { name: 'Custom Sprint', path: '/solutions/power-up/custom-sprint' },
  ],

  // BOOSTS
  '/solutions/boost/efficient-hypergrowth': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Boost', path: '/solutions/boost' },
    { name: 'Efficient Hypergrowth', path: '/solutions/boost/efficient-hypergrowth' },
  ],
  '/solutions/boost/growth-engine': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Boost', path: '/solutions/boost' },
    { name: 'Growth Engine', path: '/solutions/boost/growth-engine' },
  ],
  '/solutions/boost/pricing-dominance': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Boost', path: '/solutions/boost' },
    { name: 'Pricing Dominance', path: '/solutions/boost/pricing-dominance' },
  ],
  '/solutions/boost/nrr-machine': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Boost', path: '/solutions/boost' },
    { name: 'NRR Machine', path: '/solutions/boost/nrr-machine' },
  ],
  '/solutions/boost/scaling-os': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Boost', path: '/solutions/boost' },
    { name: 'Scaling OS', path: '/solutions/boost/scaling-os' },
  ],
  '/solutions/boost/ai-maturity': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Boost', path: '/solutions/boost' },
    { name: 'AI Maturity', path: '/solutions/boost/ai-maturity' },
  ],
  '/solutions/boost/board-excellence': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Boost', path: '/solutions/boost' },
    { name: 'Board Excellence', path: '/solutions/boost/board-excellence' },
  ],
  '/solutions/boost/portfolio-value': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Boost', path: '/solutions/boost' },
    { name: 'Portfolio Value', path: '/solutions/boost/portfolio-value' },
  ],
  '/solutions/boost/custom-program': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Boost', path: '/solutions/boost' },
    { name: 'Custom Program', path: '/solutions/boost/custom-program' },
  ],

  // ACCELERATES
  '/solutions/accelerate/hypergrowth': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Accelerate', path: '/solutions/accelerate' },
    { name: 'Hypergrowth', path: '/solutions/accelerate/hypergrowth' },
  ],
  '/solutions/accelerate/sustainable-growth': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Accelerate', path: '/solutions/accelerate' },
    { name: 'Sustainable Growth', path: '/solutions/accelerate/sustainable-growth' },
  ],
  '/solutions/accelerate/exit-readiness': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Accelerate', path: '/solutions/accelerate' },
    { name: 'Exit Readiness', path: '/solutions/accelerate/exit-readiness' },
  ],
  '/solutions/accelerate/ai-native-scaling': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Accelerate', path: '/solutions/accelerate' },
    { name: 'AI-Native Scaling', path: '/solutions/accelerate/ai-native-scaling' },
  ],
  '/solutions/accelerate/portfolio-transformation': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Accelerate', path: '/solutions/accelerate' },
    { name: 'Portfolio Transformation', path: '/solutions/accelerate/portfolio-transformation' },
  ],

  // DECISION SUPPORT
  '/solutions/vc-dd-simulation': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'VC Due Diligence Simulation', path: '/solutions/vc-dd-simulation' },
  ],
  '/solutions/gtm-effectiveness-review': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'GTM Effectiveness Review', path: '/solutions/gtm-effectiveness-review' },
  ],
  '/solutions/pricing-packaging-review': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Pricing & Packaging Review', path: '/solutions/pricing-packaging-review' },
  ],
  '/solutions/scaling-readiness-assessment': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Scaling Readiness Assessment', path: '/solutions/scaling-readiness-assessment' },
  ],
  '/solutions/ai-maturity-assessment': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'AI Maturity Assessment', path: '/solutions/ai-maturity-assessment' },
  ],
  '/solutions/investor-readiness-pitch-deck-check': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Investor Readiness & Pitch Deck Check', path: '/solutions/investor-readiness-pitch-deck-check' },
  ],
  '/solutions/portfolio-assessment': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Portfolio Assessment', path: '/solutions/portfolio-assessment' },
  ],
  '/solutions/custom-analysis-report': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Custom Analysis Report', path: '/solutions/custom-analysis-report' },
  ],
  '/solutions/strategic-advisory': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Strategic Advisory', path: '/solutions/strategic-advisory' },
  ],
  '/solutions/workshop': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Workshop', path: '/solutions/workshop' },
  ],
  '/solutions/keynote': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Keynote', path: '/solutions/keynote' },
  ],
  '/solutions/expert-session': [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Expert Session', path: '/solutions/expert-session' },
  ],

  // =========================================================================
  // PLAYBOOKS
  // =========================================================================
  '/playbooks': [
    { name: 'Home', path: '/' },
    { name: 'Playbooks', path: '/playbooks' },
  ],
  '/playbooks/ai-native-scaling': [
    { name: 'Home', path: '/' },
    { name: 'Playbooks', path: '/playbooks' },
    { name: 'AI-Native Scaling', path: '/playbooks/ai-native-scaling' },
  ],
  '/playbooks/growth-engines': [
    { name: 'Home', path: '/' },
    { name: 'Playbooks', path: '/playbooks' },
    { name: 'Growth Engines', path: '/playbooks/growth-engines' },
  ],
  '/playbooks/operating-systems': [
    { name: 'Home', path: '/' },
    { name: 'Playbooks', path: '/playbooks' },
    { name: 'Operating Systems', path: '/playbooks/operating-systems' },
  ],
  '/playbooks/board-governance': [
    { name: 'Home', path: '/' },
    { name: 'Playbooks', path: '/playbooks' },
    { name: 'Board & Governance', path: '/playbooks/board-governance' },
  ],
  '/playbooks/portfolio-transformation': [
    { name: 'Home', path: '/' },
    { name: 'Playbooks', path: '/playbooks' },
    { name: 'Portfolio Transformation', path: '/playbooks/portfolio-transformation' },
  ],
  '/playbooks/strategic-capabilities': [
    { name: 'Home', path: '/' },
    { name: 'Playbooks', path: '/playbooks' },
    { name: 'Strategic Capabilities', path: '/playbooks/strategic-capabilities' },
  ],
  '/playbooks/growth-engines/gtm-revenue': [
    { name: 'Home', path: '/' },
    { name: 'Playbooks', path: '/playbooks' },
    { name: 'Growth Engines', path: '/playbooks/growth-engines' },
    { name: 'GTM & Revenue', path: '/playbooks/growth-engines/gtm-revenue' },
  ],
  '/playbooks/growth-engines/product': [
    { name: 'Home', path: '/' },
    { name: 'Playbooks', path: '/playbooks' },
    { name: 'Growth Engines', path: '/playbooks/growth-engines' },
    { name: 'Product', path: '/playbooks/growth-engines/product' },
  ],
  '/playbooks/growth-engines/customer-success': [
    { name: 'Home', path: '/' },
    { name: 'Playbooks', path: '/playbooks' },
    { name: 'Growth Engines', path: '/playbooks/growth-engines' },
    { name: 'Customer Success', path: '/playbooks/growth-engines/customer-success' },
  ],
  '/playbooks/operating-systems/operations': [
    { name: 'Home', path: '/' },
    { name: 'Playbooks', path: '/playbooks' },
    { name: 'Operating Systems', path: '/playbooks/operating-systems' },
    { name: 'Operations', path: '/playbooks/operating-systems/operations' },
  ],
  '/playbooks/operating-systems/finance': [
    { name: 'Home', path: '/' },
    { name: 'Playbooks', path: '/playbooks' },
    { name: 'Operating Systems', path: '/playbooks/operating-systems' },
    { name: 'Finance', path: '/playbooks/operating-systems/finance' },
  ],
  '/playbooks/operating-systems/talent': [
    { name: 'Home', path: '/' },
    { name: 'Playbooks', path: '/playbooks' },
    { name: 'Operating Systems', path: '/playbooks/operating-systems' },
    { name: 'Talent', path: '/playbooks/operating-systems/talent' },
  ],
  '/playbooks/operating-systems/data-tech': [
    { name: 'Home', path: '/' },
    { name: 'Playbooks', path: '/playbooks' },
    { name: 'Operating Systems', path: '/playbooks/operating-systems' },
    { name: 'Data & Tech', path: '/playbooks/operating-systems/data-tech' },
  ],
  '/playbooks/board-governance/strategic': [
    { name: 'Home', path: '/' },
    { name: 'Playbooks', path: '/playbooks' },
    { name: 'Board & Governance', path: '/playbooks/board-governance' },
    { name: 'Strategic Governance', path: '/playbooks/board-governance/strategic' },
  ],
  '/playbooks/board-governance/operational': [
    { name: 'Home', path: '/' },
    { name: 'Playbooks', path: '/playbooks' },
    { name: 'Board & Governance', path: '/playbooks/board-governance' },
    { name: 'Operational Governance', path: '/playbooks/board-governance/operational' },
  ],
  '/playbooks/board-governance/exit-ma': [
    { name: 'Home', path: '/' },
    { name: 'Playbooks', path: '/playbooks' },
    { name: 'Board & Governance', path: '/playbooks/board-governance' },
    { name: 'Exit & M&A', path: '/playbooks/board-governance/exit-ma' },
  ],
  '/playbooks/portfolio/excellence': [
    { name: 'Home', path: '/' },
    { name: 'Playbooks', path: '/playbooks' },
    { name: 'Portfolio Transformation', path: '/playbooks/portfolio-transformation' },
    { name: 'Portfolio Excellence', path: '/playbooks/portfolio/excellence' },
  ],

  // =========================================================================
  // EXPERTISE / RESEARCH
  // =========================================================================
  '/expertise': [
    { name: 'Home', path: '/' },
    { name: 'Expertise', path: '/expertise' },
  ],
  '/expertise/amf': [
    { name: 'Home', path: '/' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Adaptive Maturity Framework', path: '/expertise/amf' },
  ],
  '/expertise/anst': [
    { name: 'Home', path: '/' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'AI-Native Scaling Theory', path: '/expertise/anst' },
  ],
  '/expertise/sst': [
    { name: 'Home', path: '/' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Superlinear Scaling Theory', path: '/expertise/sst' },
  ],
  '/expertise/unified-framework': [
    { name: 'Home', path: '/' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Unified Framework', path: '/expertise/unified-framework' },
  ],

  // =========================================================================
  // CASES
  // =========================================================================
  '/cases': [
    { name: 'Home', path: '/' },
    { name: 'Case Studies', path: '/cases' },
  ],

  // =========================================================================
  // ABOUT & TEAM
  // =========================================================================
  '/about': [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ],
  '/ml': [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Michel Lason', path: '/ml' },
  ],
  '/ah': [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Alban Halili', path: '/ah' },
  ],
  '/fm': [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Florian Metzger', path: '/fm' },
  ],

  // =========================================================================
  // COMMUNITY & TOOLS
  // =========================================================================
  '/insights': [
    { name: 'Home', path: '/' },
    { name: 'Insights', path: '/insights' },
  ],
  '/community': [
    { name: 'Home', path: '/' },
    { name: 'Community', path: '/community' },
  ],
  '/book/fix-growth': [
    { name: 'Home', path: '/' },
    { name: 'Fix Growth. Scale Faster.', path: '/book/fix-growth' },
  ],
  '/glossar': [
    { name: 'Home', path: '/' },
    { name: 'Glossar', path: '/glossar' },
  ],
};
