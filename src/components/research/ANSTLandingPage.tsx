import React from 'react';
import { ANSTPageData } from '@/data/research/types';
import {
  ResearchHeroSection,
  ResearchProblemSection,
  ResearchCapabilitiesSection,
  ResearchEvidenceSection,
  ResearchFormulaSection,
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
      <ResearchHeroSection data={data.hero} />
      <ResearchProblemSection data={data.problem} />
      <ResearchCapabilitiesSection data={data.solution} />
      <ResearchEvidenceSection data={data.evidence} />
      <ResearchFormulaSection data={data.formula} />
      <ResearchCaseStudiesSection data={data.caseStudies} />
      <ResearchImplicationsSection data={data.implications} />
      <ResearchDownloadSection data={data.download} />
      <ResearchFinalCTASection data={data.finalCta} />
    </main>
  );
};

export default ANSTLandingPage;
