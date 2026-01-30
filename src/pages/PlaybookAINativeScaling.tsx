import React from 'react';
import PlaybookLandingPage from '@/components/playbooks/PlaybookLandingPage';
import { aiNativeScalingData } from '@/data/playbooks/content/ai-native-scaling';

const PlaybookAINativeScaling: React.FC = () => {
  return <PlaybookLandingPage data={aiNativeScalingData} />;
};

export default PlaybookAINativeScaling;
