import React from 'react';
import DiseaseBreakdown from '../components/diseaseAnalysis/DiseaseBreakdown';
import GeographicMapping from '../components/diseaseAnalysis/GeographicMapping';
import SpreadPrediction from '../components/diseaseAnalysis/SpreadPrediction';
import DiseaseProfiles from '../components/diseaseAnalysis/DiseaseProfiles';
import TreatmentRecommendations from '../components/diseaseAnalysis/TreatmentRecommendations';
import ActionButtons from '../components/diseaseAnalysis/ActionButtons';

export default function DiseaseAnalysis() {
  return (
    <div className="pt-20 min-h-screen bg-[#003025]">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Disease Analysis</h1>
        
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <DiseaseBreakdown />
          <GeographicMapping />
          <SpreadPrediction />
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <DiseaseProfiles />
          <TreatmentRecommendations />
        </div>

        {/* Action Buttons */}
        <ActionButtons />
      </div>
    </div>
  );
}