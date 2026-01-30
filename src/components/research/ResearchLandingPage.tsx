import React from 'react';
import { AMFPageData } from '@/data/research/types';
import {
  ResearchHeroSection,
  ResearchWhyItMattersSection,
  ResearchThreeLevelsSection,
  ResearchMeasurementSection,
  ResearchFindingsSection,
  ResearchCaseStudiesSection,
  ResearchImplicationsSection,
  ResearchDownloadSection,
  ResearchFinalCTASection,
} from './sections';

interface ResearchLandingPageProps {
  data: AMFPageData;
}

const ResearchLandingPage: React.FC<ResearchLandingPageProps> = ({ data }) => {
  return (
    <main>
      <ResearchHeroSection data={data.hero} />
      <ResearchWhyItMattersSection data={data.whyItMatters} />
      <ResearchThreeLevelsSection data={data.threeLevels} />
      <ResearchMeasurementSection data={data.measurement} />
      <ResearchFindingsSection data={data.findings} />
      <ResearchCaseStudiesSection data={data.caseStudies} />
      <ResearchImplicationsSection data={data.implications} />
      <ResearchDownloadSection data={data.download} />
      <ResearchFinalCTASection data={data.finalCta} />
    </main>
  );
};

export default ResearchLandingPage;
