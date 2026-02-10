import React from 'react';
import {
  ResearchHeroSection,
  ResearchBusinessDimensionsSection,
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
      <ResearchHeroSection data={data.hero} researchType="unified" />
      <ResearchWhyFourFormulasSection data={data.whyFourFormulas} />
      <ResearchFourFormulasSection data={data.fourFormulas} />
      <ResearchFrameworkFlowSection data={data.frameworkFlow} />
      <ResearchPracticalApplicationSection data={data.practicalApplication} />
      {data.businessDimensions && <ResearchBusinessDimensionsSection data={data.businessDimensions} />}
      <ResearchUnifiedCaseStudySection data={data.unifiedCaseStudy} />
      <ResearchImplicationsSection data={data.implications} />
      <ResearchDownloadSection data={data.download} researchType="unified" />
      <ResearchFinalCTASection data={data.finalCta} researchType="unified" />
    </main>
  );
};

export default UnifiedFrameworkLandingPage;
