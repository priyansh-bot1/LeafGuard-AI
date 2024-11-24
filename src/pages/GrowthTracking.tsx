import React from 'react';
import OrchardOverview from '../components/growthTracking/OrchardOverview';
import GrowthVisualization from '../components/growthTracking/GrowthVisualization';
import RecoveryInsights from '../components/growthTracking/RecoveryInsights';
import DevelopmentMilestones from '../components/growthTracking/DevelopmentMilestones';
import SeasonalTrends from '../components/growthTracking/SeasonalTrends';
import ComparativeAnalysis from '../components/growthTracking/ComparativeAnalysis';

export default function GrowthTracking() {
  return (
    <div className="pt-20 min-h-screen bg-[#003025]">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Growth Tracking</h1>
        
        <OrchardOverview />
        <GrowthVisualization />
        <RecoveryInsights />
        <DevelopmentMilestones />
        <SeasonalTrends />
        <ComparativeAnalysis />
      </div>
    </div>
  );
}