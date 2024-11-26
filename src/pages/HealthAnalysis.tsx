import React from 'react';
import HealthOverview from '../components/healthAnalysis/HealthOverview';
import DiseaseSummary from '../components/healthAnalysis/DiseaseSummary';
import RiskAssessment from '../components/healthAnalysis/RiskAssessment';
import TreatmentRecommendations from '../components/healthAnalysis/TreatmentRecommendations';
import PerformanceMetrics from '../components/healthAnalysis/PerformanceMetrics';

export default function HealthAnalysis() {
  return (
    <div className="pt-20 min-h-screen bg-[#003025]">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-white mb-8">Health Analysis</h1>
        
        <div className="space-y-8">
          <HealthOverview />
          <DiseaseSummary />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RiskAssessment />
            <TreatmentRecommendations />
          </div>
          <PerformanceMetrics />
        </div>
      </div>
    </div>
  );
}