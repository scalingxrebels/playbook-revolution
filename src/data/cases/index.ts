// Case Study Data - Centralized exports

// Types
export * from './types';

// Research Cases (Real AI-Native Companies)
export { researchCases, getResearchCaseById, homepageFeaturedCases } from './research';

// Client Cases (Legacy - Anonymized ScalingX Projects)
export { clientCases, getClientCaseById } from './clients';

// Full Case Studies (Story-First Format)
export { 
  caseStudies, 
  getCaseStudyBySlug, 
  getCaseStudyById as getFullCaseStudyById,
  getCaseStudiesByChallenge,
  getCaseStudiesByIndustry
} from './caseStudies';

// Filter Definitions
export { 
  challengeFilters, 
  industryFilters, 
  stageFilters, 
  timelineFilters,
  type CaseFilterOption 
} from './caseFilters';
