import React from 'react';
import {
  ResearchHeroSection,
  ResearchImplicationsSection,
  ResearchDownloadSection,
  ResearchFinalCTASection
} from './sections';
import ResearchWhyFourFormulasSection from './sections/ResearchWhyFourFormulasSection';
import ResearchFourFormulasSection from './sections/ResearchFourFormulasSection';
import ResearchFrameworkFlowSection from './sections/ResearchFrameworkFlowSection';
import ResearchPracticalApplicationSection from './sections/ResearchPracticalApplicationSection';
import ResearchUnifiedCaseStudySection from './sections/ResearchUnifiedCaseStudySection';
import type { UnifiedFrameworkPageData } from '@/data/research/types';

interface UnifiedFrameworkLandingPageProps {
  data: UnifiedFrameworkPageData;
}

const UnifiedFrameworkLandingPage: React.FC<UnifiedFrameworkLandingPageProps> = ({ data }) => {
  return (
    <main className="min-h-screen">
      <ResearchHeroSection data={data.hero} />
      <ResearchWhyFourFormulasSection data={data.whyFourFormulas} />
      <ResearchFourFormulasSection data={data.fourFormulas} />
      <ResearchFrameworkFlowSection data={data.frameworkFlow} />
      <ResearchPracticalApplicationSection data={data.practicalApplication} />
      <ResearchUnifiedCaseStudySection data={data.unifiedCaseStudy} />
      <ResearchImplicationsSection data={data.implications} />
      <ResearchDownloadSection data={data.download} />
      <ResearchFinalCTASection data={data.finalCta} />
    </main>
  );
};

export default UnifiedFrameworkLandingPage;
