import React from 'react';
import { BarChart2, LineChart } from 'lucide-react';

export default function PerformanceMetrics() {
  return (
    <div className="bg-emerald-900/30 rounded-xl p-8 backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-2xl font-semibold text-white mb-8">Advanced Performance Metrics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Disease Incidence Trends */}
        <div className="bg-emerald-900/40 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <BarChart2 className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg font-medium text-white">Disease Incidence Trends</h3>
          </div>
          <div className="h-64 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-100/60">
            [Bar Chart Visualization]
          </div>
        </div>

        {/* Disease Progression */}
        <div className="bg-emerald-900/40 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <LineChart className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg font-medium text-white">Disease Progression</h3>
          </div>
          <div className="h-64 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-100/60">
            [Line Graph Visualization]
          </div>
        </div>
      </div>
    </div>
  );
}