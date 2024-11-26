import React from 'react';
import { BarChart2, TrendingUp } from 'lucide-react';

export default function PerformanceMetrics() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Performance Metrics</h2>
        <BarChart2 className="w-5 h-5 text-emerald-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Health Trend Analysis */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-medium">Health Trend Analysis</h3>
            <TrendingUp className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="h-48 bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-100/60">
            [Health Trend Chart]
          </div>
        </div>

        {/* ROI Metrics */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-medium">ROI Metrics</h3>
            <BarChart2 className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="h-48 bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-100/60">
            [ROI Analysis Chart]
          </div>
        </div>
      </div>
    </div>
  );
}