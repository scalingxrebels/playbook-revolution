import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { PlaybookPageData } from '@/data/playbooks/types';
import {
  PlaybookHeroSection,
  PlaybookSummarySection,
  PlaybookProblemSection,
  PlaybookFrameworkSection,
  PlaybookRoadmapSection,
  PlaybookCaseStudiesSection,
  PlaybookSolutionsSection,
  PlaybookPersonasSection,
  PlaybookFinalCTASection,
  PlaybookSubPlaybooksSection,
} from './sections/index';

interface Props {
  data: PlaybookPageData;
}

const PlaybookLandingPage: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Section 1: Hero */}
      <PlaybookHeroSection data={data.hero} />
      
      {/* Section 2: Summary (Problem/Why/Solution cards) */}
      <PlaybookSummarySection data={data.summary} />
      
      {/* Section 3: Problem Deep-Dive */}
      <PlaybookProblemSection data={data.problem} />
      
      {/* Section 4: Framework/Solution */}
      <PlaybookFrameworkSection data={data.framework} />
      
      {/* Section 5: Implementation Roadmap */}
      <PlaybookRoadmapSection data={data.roadmap} />
      
      {/* Section 6: Case Studies */}
      <PlaybookCaseStudiesSection data={data.caseStudies} />
      
      {/* Section 7: Solutions Connection (Power Up/Boost/Accelerate) */}
      <PlaybookSolutionsSection data={data.solutionsConnection} />
      
      {/* Section 8: Who This Is For */}
      <PlaybookPersonasSection data={data.whoThisIsFor} />
      
      {/* Section 9: Sub-Playbooks (only for Ebene 2) */}
      {data.subPlaybooks && data.meta.ebene === 2 && (
        <PlaybookSubPlaybooksSection data={data.subPlaybooks} />
      )}
      
      {/* Section 10: Final CTA */}
      <PlaybookFinalCTASection data={data.finalCta} />
      
      <Footer />
    </div>
  );
};

export default PlaybookLandingPage;
