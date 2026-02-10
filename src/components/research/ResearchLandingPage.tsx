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
  researchType?: 'amf' | 'anst' | 'sst' | 'unified';
}

const ResearchLandingPage: React.FC<ResearchLandingPageProps> = ({ data, researchType = 'amf' }) => {
  return (
    <main>
      <ResearchHeroSection data={data.hero} researchType={researchType} />
      <ResearchWhyItMattersSection data={data.whyItMatters} />
      <ResearchThreeLevelsSection data={data.threeLevels} />
      <ResearchMeasurementSection data={data.measurement} />
      <ResearchFindingsSection data={data.findings} />
      <ResearchCaseStudiesSection data={data.caseStudies} />
      <ResearchImplicationsSection data={data.implications} />
      <ResearchDownloadSection data={data.download} researchType={researchType} />
      <ResearchFinalCTASection data={data.finalCta} researchType={researchType} />
    </main>
  );
};

export default ResearchLandingPage;
