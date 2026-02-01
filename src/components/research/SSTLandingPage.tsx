import React from 'react';
import { SSTPageData } from '@/data/research/types';
import {
  ResearchHeroSection,
  ResearchBottleneckDistributionSection,
  ResearchSSTCapabilitiesSection,
  ResearchSSTEvidenceSection,
  ResearchBottleneckPrincipleSection,
  ResearchBusinessDimensionsSection,
  ResearchBottleneckCaseStudiesSection,
  ResearchImplicationsSection,
  ResearchDownloadSection,
  ResearchFinalCTASection,
} from './sections';

interface SSTLandingPageProps {
  data: SSTPageData;
}

const SSTLandingPage: React.FC<SSTLandingPageProps> = ({ data }) => {
  return (
    <main>
      <ResearchHeroSection data={data.hero} />
      <ResearchBottleneckDistributionSection data={data.bottleneckDistribution} />
      <ResearchSSTCapabilitiesSection data={data.capabilities} />
      <ResearchSSTEvidenceSection data={data.evidence} />
      <ResearchBottleneckPrincipleSection data={data.bottleneckPrinciple} />
      {data.businessDimensions && <ResearchBusinessDimensionsSection data={data.businessDimensions} />}
      <ResearchBottleneckCaseStudiesSection data={data.caseStudies} />
      <ResearchImplicationsSection data={data.implications} />
      <ResearchDownloadSection data={data.download} />
      <ResearchFinalCTASection data={data.finalCta} />
    </main>
  );
};

export default SSTLandingPage;
