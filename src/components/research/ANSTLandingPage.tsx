import React from 'react';
import { ANSTPageData } from '@/data/research/types';
import {
  ResearchHeroSection,
  ResearchProblemSection,
  ResearchCapabilitiesSection,
  ResearchEvidenceSection,
  ResearchFormulaSection,
  ResearchBusinessDimensionsSection,
  ResearchCaseStudiesSection,
  ResearchImplicationsSection,
  ResearchDownloadSection,
  ResearchFinalCTASection,
} from './sections';

interface ANSTLandingPageProps {
  data: ANSTPageData;
}

const ANSTLandingPage: React.FC<ANSTLandingPageProps> = ({ data }) => {
  return (
    <main>
      <ResearchHeroSection data={data.hero} researchType="anst" />
      <ResearchProblemSection data={data.problem} />
      <ResearchCapabilitiesSection data={data.solution} />
      <ResearchEvidenceSection data={data.evidence} />
      <ResearchFormulaSection data={data.formula} />
      {data.businessDimensions && <ResearchBusinessDimensionsSection data={data.businessDimensions} />}
      <ResearchCaseStudiesSection data={data.caseStudies} />
      <ResearchImplicationsSection data={data.implications} />
      <ResearchDownloadSection data={data.download} researchType="anst" />
      <ResearchFinalCTASection data={data.finalCta} researchType="anst" />
    </main>
  );
};

export default ANSTLandingPage;
