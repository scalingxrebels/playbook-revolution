import { 
  Rocket, Users, Settings, Workflow, Cpu, 
  Shield, TrendingUp, LineChart, Award,
  Brain, Building, Layers, Target, Briefcase
} from 'lucide-react';
import React from 'react';
import type { ImpactTag, BottleneckTag, RoleTag } from './playbookFilters';

export interface Playbook {
  id: string;
  title: { en: string; de: string };
  description: { en: string; de: string };
  outcomes: { en: string[]; de: string[] };
  caseStudies: string[];
  icon: React.ReactNode;
  gradient: string;
  // 3-Filter Tags
  impact: ImpactTag[];
  bottleneck: BottleneckTag[];
  role: RoleTag[];
}

export const playbooks: Playbook[] = [];
