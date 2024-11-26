import React from 'react';
import OverviewMetrics from '../components/growthMonitoring/OverviewMetrics';
import GrowthCharts from '../components/growthMonitoring/GrowthCharts';
import OrchardMap from '../components/growthMonitoring/OrchardMap';
import ActiveAlerts from '../components/growthMonitoring/ActiveAlerts';
import Recommendations from '../components/growthMonitoring/Recommendations';

export default function GrowthMonitoring() {
  return (
    <div className="pt-20 min-h-screen bg-[#003025]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-white">Growth Monitoring</h1>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
              Export Report
            </button>
            <button className="px-4 py-2 bg-emerald-900/40 hover:bg-emerald-900/60 text-white rounded-md transition-all">
              Settings
            </button>
          </div>
        </div>

        <div className="space-y-8">
          <OverviewMetrics />
          <GrowthCharts />
          <OrchardMap />
          <ActiveAlerts />
          <Recommendations />
        </div>
      </div>
    </div>
  );
}