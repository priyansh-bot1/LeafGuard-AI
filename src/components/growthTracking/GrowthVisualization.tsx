import React from 'react';
import { LineChart } from 'lucide-react';

export default function GrowthVisualization() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Growth Visualization</h2>
        <LineChart className="w-5 h-5 text-emerald-400" />
      </div>

      <div className="h-64 bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-100/60 mb-4">
        Interactive Growth Chart Visualization
      </div>

      <div className="flex justify-end">
        <button className="px-4 py-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
          View Detailed Report →
        </button>
      </div>
    </div>
  );
}