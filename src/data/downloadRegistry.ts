/**
 * Download Registry - Central registry for all downloadable assets
 * 
 * This file contains metadata for all 45 downloadable assets:
 * - 18 Playbooks
 * - 14 Case Studies
 * - 4 Research/Expertise Documents
 * - 8 Decision Support Samples
 * - 1 Book
 */

export type AssetType = 'playbook' | 'case' | 'research' | 'sample' | 'book';

export interface DownloadAsset {
  id: string;           // Unique asset ID (format: {type}-{slug})
  type: AssetType;
  slug: string;
  titleEn: string;
  titleDe: string;
  fileName: string;
  filePath: string;
  requiresEmail: boolean;
  isAvailable: boolean;
  category?: string;    // Optional grouping for filtering
}

// ============================================================================
// PLAYBOOKS (18)
// ============================================================================

export const playbookAssets: DownloadAsset[] = [
  // Master Playbook (Level 1)
  {
    id: 'playbook-ai-native-scaling',
    type: 'playbook',
    slug: 'ai-native-scaling',
    titleEn: 'AI-Native Scaling Playbook',
    titleDe: 'AI-Native Scaling Playbook',
    fileName: 'ai-native-scaling-playbook.pdf',
    filePath: '/downloads/ai-native-scaling-playbook.pdf',
    requiresEmail: true,
    isAvailable: true,
    category: 'master',
  },
  // Domain Playbooks (Level 2)
  {
    id: 'playbook-growth-engines',
    type: 'playbook',
    slug: 'growth-engines',
    titleEn: 'Growth Engines Playbook',
    titleDe: 'Growth Engines Playbook',
    fileName: 'growth-engines-playbook.pdf',
    filePath: '/downloads/playbooks/growth-engines-playbook.pdf',
    requiresEmail: true,
    isAvailable: true,
    category: 'domain',
  },
  {
    id: 'playbook-operating-systems',
    type: 'playbook',
    slug: 'operating-systems',
    titleEn: 'Operating Systems Playbook',
    titleDe: 'Operating Systems Playbook',
    fileName: 'operating-systems-playbook.pdf',
    filePath: '/downloads/playbooks/operating-systems-playbook.pdf',
    requiresEmail: true,
    isAvailable: true,
    category: 'domain',
  },
  {
    id: 'playbook-board-governance',
    type: 'playbook',
    slug: 'board-governance',
    titleEn: 'Board & Governance Playbook',
    titleDe: 'Board & Governance Playbook',
    fileName: 'board-governance-playbook.pdf',
    filePath: '/downloads/playbooks/board-governance-playbook.pdf',
    requiresEmail: true,
    isAvailable: true,
    category: 'domain',
  },
  {
    id: 'playbook-portfolio-transformation',
    type: 'playbook',
    slug: 'portfolio-transformation',
    titleEn: 'Portfolio Transformation Playbook',
    titleDe: 'Portfolio Transformation Playbook',
    fileName: 'portfolio-transformation-playbook.pdf',
    filePath: '/downloads/playbooks/portfolio-transformation-playbook.pdf',
    requiresEmail: true,
    isAvailable: true,
    category: 'domain',
  },
  {
    id: 'playbook-strategic-capabilities',
    type: 'playbook',
    slug: 'strategic-capabilities',
    titleEn: 'Strategic Capabilities Playbook',
    titleDe: 'Strategic Capabilities Playbook',
    fileName: 'strategic-capabilities-playbook.pdf',
    filePath: '/downloads/playbooks/strategic-capabilities-playbook.pdf',
    requiresEmail: true,
    isAvailable: true,
    category: 'domain',
  },
  // Sub-Playbooks (Level 3) - Growth Engines
  {
    id: 'playbook-gtm-revenue',
    type: 'playbook',
    slug: 'gtm-revenue',
    titleEn: 'GTM & Revenue Playbook',
    titleDe: 'GTM & Revenue Playbook',
    fileName: 'gtm-revenue-playbook.pdf',
    filePath: '/downloads/playbooks/gtm-revenue-playbook.pdf',
    requiresEmail: true,
    isAvailable: true,
    category: 'growth-engines',
  },
  {
    id: 'playbook-product',
    type: 'playbook',
    slug: 'product',
    titleEn: 'Product Playbook',
    titleDe: 'Product Playbook',
    fileName: 'product-playbook.pdf',
    filePath: '/downloads/playbooks/product-playbook.pdf',
    requiresEmail: true,
    isAvailable: true,
    category: 'growth-engines',
  },
  {
    id: 'playbook-customer-success',
    type: 'playbook',
    slug: 'customer-success',
    titleEn: 'Customer Success Playbook',
    titleDe: 'Customer Success Playbook',
    fileName: 'customer-success-playbook.pdf',
    filePath: '/downloads/playbooks/customer-success-playbook.pdf',
    requiresEmail: true,
    isAvailable: true,
    category: 'growth-engines',
  },
  // Sub-Playbooks (Level 3) - Operating Systems
  {
    id: 'playbook-operations',
    type: 'playbook',
    slug: 'operations',
    titleEn: 'Operations Playbook',
    titleDe: 'Operations Playbook',
    fileName: 'operations-playbook.pdf',
    filePath: '/downloads/playbooks/operations-playbook.pdf',
    requiresEmail: true,
    isAvailable: true,
    category: 'operating-systems',
  },
  {
    id: 'playbook-finance',
    type: 'playbook',
    slug: 'finance',
    titleEn: 'Finance Playbook',
    titleDe: 'Finance Playbook',
    fileName: 'finance-playbook.pdf',
    filePath: '/downloads/playbooks/finance-playbook.pdf',
    requiresEmail: true,
    isAvailable: true,
    category: 'operating-systems',
  },
  {
    id: 'playbook-talent',
    type: 'playbook',
    slug: 'talent',
    titleEn: 'Talent Playbook',
    titleDe: 'Talent Playbook',
    fileName: 'talent-playbook.pdf',
    filePath: '/downloads/playbooks/talent-playbook.pdf',
    requiresEmail: true,
    isAvailable: true,
    category: 'operating-systems',
  },
  {
    id: 'playbook-data-tech',
    type: 'playbook',
    slug: 'data-tech',
    titleEn: 'Data & Tech Playbook',
    titleDe: 'Data & Tech Playbook',
    fileName: 'data-tech-playbook.pdf',
    filePath: '/downloads/playbooks/data-tech-playbook.pdf',
    requiresEmail: true,
    isAvailable: true,
    category: 'operating-systems',
  },
  // Sub-Playbooks (Level 3) - Board & Governance
  {
    id: 'playbook-strategic-governance',
    type: 'playbook',
    slug: 'strategic-governance',
    titleEn: 'Strategic Governance Playbook',
    titleDe: 'Strategic Governance Playbook',
    fileName: 'strategic-governance-playbook.pdf',
    filePath: '/downloads/playbooks/strategic-governance-playbook.pdf',
    requiresEmail: true,
    isAvailable: true,
    category: 'board-governance',
  },
  {
    id: 'playbook-operational-governance',
    type: 'playbook',
    slug: 'operational-governance',
    titleEn: 'Operational Governance Playbook',
    titleDe: 'Operational Governance Playbook',
    fileName: 'operational-governance-playbook.pdf',
    filePath: '/downloads/playbooks/operational-governance-playbook.pdf',
    requiresEmail: true,
    isAvailable: true,
    category: 'board-governance',
  },
  {
    id: 'playbook-exit-ma',
    type: 'playbook',
    slug: 'exit-ma',
    titleEn: 'Exit & M&A Playbook',
    titleDe: 'Exit & M&A Playbook',
    fileName: 'exit-ma-playbook.pdf',
    filePath: '/downloads/playbooks/exit-ma-playbook.pdf',
    requiresEmail: true,
    isAvailable: true,
    category: 'board-governance',
  },
  // Sub-Playbooks (Level 3) - Portfolio Transformation
  {
    id: 'playbook-portfolio-excellence',
    type: 'playbook',
    slug: 'portfolio-excellence',
    titleEn: 'Portfolio Excellence Playbook',
    titleDe: 'Portfolio Excellence Playbook',
    fileName: 'portfolio-excellence-playbook.pdf',
    filePath: '/downloads/playbooks/portfolio-excellence-playbook.pdf',
    requiresEmail: true,
    isAvailable: true,
    category: 'portfolio-transformation',
  },
];

// ============================================================================
// CASE STUDIES (14)
// ============================================================================

export const caseStudyAssets: DownloadAsset[] = [
  {
    id: 'case-cac-crisis-turnaround',
    type: 'case',
    slug: 'cac-crisis-turnaround',
    titleEn: 'CAC Crisis Turnaround',
    titleDe: 'CAC-Krise Turnaround',
    fileName: 'cac-crisis-turnaround.pdf',
    filePath: '/downloads/cases/cac-crisis-turnaround.pdf',
    requiresEmail: true,
    isAvailable: true,
  },
  {
    id: 'case-nrr-machine-breakthrough',
    type: 'case',
    slug: 'nrr-machine-breakthrough',
    titleEn: 'NRR Machine Breakthrough',
    titleDe: 'NRR Machine Durchbruch',
    fileName: 'nrr-machine-breakthrough.pdf',
    filePath: '/downloads/cases/nrr-machine-breakthrough.pdf',
    requiresEmail: true,
    isAvailable: true,
  },
  {
    id: 'case-partner-channel-transformed',
    type: 'case',
    slug: 'partner-channel-transformed',
    titleEn: 'Partner Channel Transformed',
    titleDe: 'Partner Channel Transformation',
    fileName: 'partner-channel-transformed.pdf',
    filePath: '/downloads/cases/partner-channel-transformed.pdf',
    requiresEmail: true,
    isAvailable: true,
  },
  {
    id: 'case-pricing-redesigned',
    type: 'case',
    slug: 'pricing-redesigned',
    titleEn: 'Pricing Redesigned',
    titleDe: 'Pricing Neugestaltung',
    fileName: 'pricing-redesigned.pdf',
    filePath: '/downloads/cases/pricing-redesigned.pdf',
    requiresEmail: true,
    isAvailable: true,
  },
  {
    id: 'case-strategic-transformation-market-leadership',
    type: 'case',
    slug: 'strategic-transformation-market-leadership',
    titleEn: 'Strategic Transformation to Market Leadership',
    titleDe: 'Strategische Transformation zur Marktführerschaft',
    fileName: 'strategic-transformation-market-leadership.pdf',
    filePath: '/downloads/cases/strategic-transformation-market-leadership.pdf',
    requiresEmail: true,
    isAvailable: true,
  },
  {
    id: 'case-stage-transition-series-b-ready',
    type: 'case',
    slug: 'stage-transition-series-b-ready',
    titleEn: 'Stage Transition: Series B Ready',
    titleDe: 'Stage Transition: Series B Ready',
    fileName: 'stage-transition-series-b-ready.pdf',
    filePath: '/downloads/cases/stage-transition-series-b-ready.pdf',
    requiresEmail: true,
    isAvailable: true,
  },
  {
    id: 'case-exit-readiness-achieved',
    type: 'case',
    slug: 'exit-readiness-achieved',
    titleEn: 'Exit Readiness Achieved',
    titleDe: 'Exit Readiness erreicht',
    fileName: 'exit-readiness-achieved.pdf',
    filePath: '/downloads/cases/exit-readiness-achieved.pdf',
    requiresEmail: true,
    isAvailable: true,
  },
  {
    id: 'case-vision-2030-strategy-workshop',
    type: 'case',
    slug: 'vision-2030-strategy-workshop',
    titleEn: 'Vision 2030 Strategy Workshop',
    titleDe: 'Vision 2030 Strategie-Workshop',
    fileName: 'vision-2030-strategy-workshop.pdf',
    filePath: '/downloads/cases/vision-2030-strategy-workshop.pdf',
    requiresEmail: true,
    isAvailable: true,
  },
  {
    id: 'case-saas-transition-accelerated',
    type: 'case',
    slug: 'saas-transition-accelerated',
    titleEn: 'SaaS Transition Accelerated',
    titleDe: 'SaaS Transition beschleunigt',
    fileName: 'saas-transition-accelerated.pdf',
    filePath: '/downloads/cases/saas-transition-accelerated.pdf',
    requiresEmail: true,
    isAvailable: true,
  },
  {
    id: 'case-strategic-transformation-ma-integration',
    type: 'case',
    slug: 'strategic-transformation-ma-integration',
    titleEn: 'Strategic Transformation: M&A Integration',
    titleDe: 'Strategische Transformation: M&A Integration',
    fileName: 'strategic-transformation-ma-integration.pdf',
    filePath: '/downloads/cases/strategic-transformation-ma-integration.pdf',
    requiresEmail: true,
    isAvailable: true,
  },
  {
    id: 'case-diagnostic-led-acquisition-scaled',
    type: 'case',
    slug: 'diagnostic-led-acquisition-scaled',
    titleEn: 'Diagnostic-Led Acquisition Scaled',
    titleDe: 'Diagnostic-Led Acquisition skaliert',
    fileName: 'diagnostic-led-acquisition-scaled.pdf',
    filePath: '/downloads/cases/diagnostic-led-acquisition-scaled.pdf',
    requiresEmail: true,
    isAvailable: true,
  },
  {
    id: 'case-board-readiness-series-b-secured',
    type: 'case',
    slug: 'board-readiness-series-b-secured',
    titleEn: 'Board Readiness: Series B Secured',
    titleDe: 'Board Readiness: Series B gesichert',
    fileName: 'board-readiness-series-b-secured.pdf',
    filePath: '/downloads/cases/board-readiness-series-b-secured.pdf',
    requiresEmail: true,
    isAvailable: true,
  },
  {
    id: 'case-leadership-program-scaled',
    type: 'case',
    slug: 'leadership-program-scaled',
    titleEn: 'Leadership Program Scaled',
    titleDe: 'Leadership Programm skaliert',
    fileName: 'leadership-program-scaled.pdf',
    filePath: '/downloads/cases/leadership-program-scaled.pdf',
    requiresEmail: true,
    isAvailable: true,
  },
  {
    id: 'case-new-market-segment-entry',
    type: 'case',
    slug: 'new-market-segment-entry',
    titleEn: 'New Market Segment Entry',
    titleDe: 'Neuer Marktsegment-Eintritt',
    fileName: 'new-market-segment-entry.pdf',
    filePath: '/downloads/cases/new-market-segment-entry.pdf',
    requiresEmail: true,
    isAvailable: true,
  },
];

// ============================================================================
// RESEARCH / EXPERTISE (4)
// ============================================================================

export const researchAssets: DownloadAsset[] = [
  {
    id: 'research-amf',
    type: 'research',
    slug: 'amf',
    titleEn: 'AI Maturity Framework (AMF)',
    titleDe: 'AI Maturity Framework (AMF)',
    fileName: 'amf-executive-summary.pdf',
    filePath: '/downloads/research/amf-executive-summary.pdf',
    requiresEmail: true,
    isAvailable: true,
  },
  {
    id: 'research-anst',
    type: 'research',
    slug: 'anst',
    titleEn: 'AI-Native Scaling Theory (ANST)',
    titleDe: 'AI-Native Scaling Theorie (ANST)',
    fileName: 'anst-executive-summary.pdf',
    filePath: '/downloads/research/anst-executive-summary.pdf',
    requiresEmail: true,
    isAvailable: true,
  },
  {
    id: 'research-sst',
    type: 'research',
    slug: 'sst',
    titleEn: 'Scaling Stack Theory (SST)',
    titleDe: 'Scaling Stack Theorie (SST)',
    fileName: 'sst-executive-summary.pdf',
    filePath: '/downloads/research/sst-executive-summary.pdf',
    requiresEmail: true,
    isAvailable: true,
  },
  {
    id: 'research-unified',
    type: 'research',
    slug: 'unified',
    titleEn: 'Unified Framework Architecture',
    titleDe: 'Unified Framework Architektur',
    fileName: 'architecture-v4.5.1.pdf',
    filePath: '/downloads/research/architecture-v4.5.1.pdf',
    requiresEmail: true,
    isAvailable: true,
  },
];

// ============================================================================
// DECISION SUPPORT SAMPLES (8)
// ============================================================================

export const sampleAssets: DownloadAsset[] = [
  {
    id: 'sample-gtm-effectiveness',
    type: 'sample',
    slug: 'gtm-effectiveness',
    titleEn: 'GTM Effectiveness Review Sample',
    titleDe: 'GTM Effectiveness Review Muster',
    fileName: 'gtm-effectiveness-sample.pdf',
    filePath: '/downloads/samples/gtm-effectiveness-sample.pdf',
    requiresEmail: true,
    isAvailable: false,
  },
  {
    id: 'sample-pricing-packaging',
    type: 'sample',
    slug: 'pricing-packaging',
    titleEn: 'Pricing & Packaging Review Sample',
    titleDe: 'Pricing & Packaging Review Muster',
    fileName: 'pricing-packaging-sample.pdf',
    filePath: '/downloads/samples/pricing-packaging-sample.pdf',
    requiresEmail: true,
    isAvailable: false,
  },
  {
    id: 'sample-scaling-readiness',
    type: 'sample',
    slug: 'scaling-readiness',
    titleEn: 'Scaling Readiness Assessment Sample',
    titleDe: 'Scaling Readiness Assessment Muster',
    fileName: 'scaling-readiness-sample.pdf',
    filePath: '/downloads/samples/scaling-readiness-sample.pdf',
    requiresEmail: true,
    isAvailable: false,
  },
  {
    id: 'sample-ai-maturity',
    type: 'sample',
    slug: 'ai-maturity',
    titleEn: 'AI Maturity Assessment Sample',
    titleDe: 'AI Maturity Assessment Muster',
    fileName: 'ai-maturity-sample.pdf',
    filePath: '/downloads/samples/ai-maturity-sample.pdf',
    requiresEmail: true,
    isAvailable: false,
  },
  {
    id: 'sample-pitch-deck-check',
    type: 'sample',
    slug: 'pitch-deck-check',
    titleEn: 'Investor-Readiness Pitch Deck Check Sample',
    titleDe: 'Investor-Readiness Pitch Deck Check Muster',
    fileName: 'pitch-deck-check-sample.pdf',
    filePath: '/downloads/samples/pitch-deck-check-sample.pdf',
    requiresEmail: true,
    isAvailable: false,
  },
  {
    id: 'sample-vc-dd-simulation',
    type: 'sample',
    slug: 'vc-dd-simulation',
    titleEn: 'VC Due Diligence Simulation Sample',
    titleDe: 'VC Due Diligence Simulation Muster',
    fileName: 'vc-dd-simulation-sample.pdf',
    filePath: '/downloads/samples/vc-dd-simulation-sample.pdf',
    requiresEmail: true,
    isAvailable: false,
  },
  {
    id: 'sample-portfolio-assessment',
    type: 'sample',
    slug: 'portfolio-assessment',
    titleEn: 'Portfolio Assessment Sample',
    titleDe: 'Portfolio Assessment Muster',
    fileName: 'portfolio-assessment-sample.pdf',
    filePath: '/downloads/samples/portfolio-assessment-sample.pdf',
    requiresEmail: true,
    isAvailable: false,
  },
  {
    id: 'sample-custom-analysis',
    type: 'sample',
    slug: 'custom-analysis',
    titleEn: 'Custom Analysis & Report Sample',
    titleDe: 'Custom Analysis & Report Muster',
    fileName: 'custom-analysis-sample.pdf',
    filePath: '/downloads/samples/custom-analysis-sample.pdf',
    requiresEmail: true,
    isAvailable: false,
  },
];

// ============================================================================
// BOOK (1)
// ============================================================================

export const bookAssets: DownloadAsset[] = [
  {
    id: 'book-fix-growth',
    type: 'book',
    slug: 'fix-growth',
    titleEn: 'Fix Growth. Scale Faster. (Sample)',
    titleDe: 'Fix Growth. Scale Faster. (Leseprobe)',
    fileName: 'fix-growth-sample.pdf',
    filePath: '/downloads/fix-growth-sample.pdf',
    requiresEmail: false,  // Free sample, no email required
    isAvailable: true,
  },
];

// ============================================================================
// COMBINED REGISTRY
// ============================================================================

export const downloadRegistry: DownloadAsset[] = [
  ...playbookAssets,
  ...caseStudyAssets,
  ...researchAssets,
  ...sampleAssets,
  ...bookAssets,
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get asset by ID
 */
export function getAssetById(id: string): DownloadAsset | undefined {
  return downloadRegistry.find(asset => asset.id === id);
}

/**
 * Get asset by slug and type
 */
export function getAssetBySlug(slug: string, type?: AssetType): DownloadAsset | undefined {
  if (type) {
    return downloadRegistry.find(asset => asset.slug === slug && asset.type === type);
  }
  return downloadRegistry.find(asset => asset.slug === slug);
}

/**
 * Get all assets of a specific type
 */
export function getAssetsByType(type: AssetType): DownloadAsset[] {
  return downloadRegistry.filter(asset => asset.type === type);
}

/**
 * Get all available assets
 */
export function getAvailableAssets(): DownloadAsset[] {
  return downloadRegistry.filter(asset => asset.isAvailable);
}

/**
 * Get all assets that require email
 */
export function getGatedAssets(): DownloadAsset[] {
  return downloadRegistry.filter(asset => asset.requiresEmail);
}

/**
 * Check if an asset is available for download
 */
export function isAssetAvailable(id: string): boolean {
  const asset = getAssetById(id);
  return asset?.isAvailable ?? false;
}

/**
 * Get download URL for an asset (returns undefined if not available)
 */
export function getAssetDownloadUrl(id: string): string | undefined {
  const asset = getAssetById(id);
  if (asset?.isAvailable) {
    return asset.filePath;
  }
  return undefined;
}

// ============================================================================
// STATISTICS
// ============================================================================

export const registryStats = {
  total: downloadRegistry.length,
  playbooks: playbookAssets.length,
  caseStudies: caseStudyAssets.length,
  research: researchAssets.length,
  samples: sampleAssets.length,
  books: bookAssets.length,
  available: downloadRegistry.filter(a => a.isAvailable).length,
  pending: downloadRegistry.filter(a => !a.isAvailable).length,
};
