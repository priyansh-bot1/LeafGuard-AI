import React from 'react';
import TimeSeriesAnalysis from '../components/historicalAnalysis/TimeSeriesAnalysis';
import ComparisonTools from '../components/historicalAnalysis/ComparisonTools';
import EffectivenessMetrics from '../components/historicalAnalysis/EffectivenessMetrics';
import SeasonalInsights from '../components/historicalAnalysis/SeasonalInsights';
import AdvancedFiltering from '../components/historicalAnalysis/AdvancedFiltering';

export default function HistoricalAnalysis() {
  return (
    <div className="pt-20 min-h-screen bg-[#003025]">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">
          Historical Data Tracking: Detailed Analysis
        </h1>

        <div className="space-y-8">
          <TimeSeriesAnalysis />
          <ComparisonTools />
          <EffectivenessMetrics />
          <SeasonalInsights />
          <AdvancedFiltering />
        </div>
      </div>
    </div>
  );
}