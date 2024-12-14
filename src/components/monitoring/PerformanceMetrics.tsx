import React from 'react';
import HeatmapChart from './charts/HeatmapChart';
import BarChart from './charts/BarChart';
import LineChart from './charts/LineChart';

export default function PerformanceMetrics() {
  return (
    <div className="bg-emerald-900/30 rounded-xl p-8 backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-2xl font-semibold text-white mb-8">Advanced Performance Metrics</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-emerald-900/40 rounded-lg p-6">
          <BarChart />
        </div>

        <div className="bg-emerald-900/40 rounded-lg p-6">
          <LineChart />
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-emerald-900/40 rounded-lg p-6">
          <HeatmapChart />
        </div>
      </div>
    </div>
  );
}