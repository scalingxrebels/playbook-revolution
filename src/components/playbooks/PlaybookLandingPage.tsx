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
  PlaybookDimensionsSection,
  PlaybookMaturitySection,
} from './sections/index';
import PlaybookSoftCTASection from './sections/PlaybookSoftCTASection';

const GrowthCurveOptimized = React.lazy(() => import('@/components/homepage/GrowthCurveOptimized'));

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
      
      {/* Section 4: Framework/Solution (4 Core Capabilities) */}
      <PlaybookFrameworkSection data={data.framework} />

      {/* Section 4b: Growth Curve (only for Ebene 1 Master Playbook) */}
      {data.meta.ebene === 1 && (
        <React.Suspense fallback={null}>
          <GrowthCurveOptimized />
        </React.Suspense>
      )}
      
      {/* Section 5: 8 Dimensions (only for Ebene 1 Master Playbook) */}
      {data.dimensions && data.meta.ebene === 1 && (
        <PlaybookDimensionsSection data={data.dimensions} />
      )}
      
      {/* Section 6: AI Maturity Levels (only for Ebene 1 Master Playbook) */}
      {data.maturityLevels && data.meta.ebene === 1 && (
        <PlaybookMaturitySection data={data.maturityLevels} />
      )}
      
      {/* Section 7: Domain Playbooks / Sub-Playbooks (for Ebene 1 + 2) */}
      {data.subPlaybooks && (data.meta.ebene === 1 || data.meta.ebene === 2) && (
        <PlaybookSubPlaybooksSection data={data.subPlaybooks} />
      )}
      
      {/* Section 8: Implementation Roadmap */}
      <PlaybookRoadmapSection data={data.roadmap} />
      
      {/* Section 9: Case Studies */}
      <PlaybookCaseStudiesSection data={data.caseStudies} />
      
      {/* Section 10: Who This Is For */}
      <PlaybookPersonasSection data={data.whoThisIsFor} />
      
      {/* Section 11: Solutions Connection (hidden for Ebene 1 — replaced by Soft-CTA) */}
      {data.meta.ebene !== 1 && (
        <PlaybookSolutionsSection data={data.solutionsConnection} />
      )}

      {/* Section 11b: Soft-CTA (only for Ebene 1 Master Playbook) */}
      {data.meta.ebene === 1 && (
        <PlaybookSoftCTASection />
      )}
      
      {/* Section 12: Final CTA */}
      <PlaybookFinalCTASection data={data.finalCta} playbookSlug={data.meta.slug} />
      
      <Footer />
    </div>
  );
};

export default PlaybookLandingPage;
