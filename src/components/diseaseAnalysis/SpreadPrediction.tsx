import React from 'react';
import { TrendingUp, AlertTriangle } from 'lucide-react';

export default function SpreadPrediction() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Spread Prediction</h2>
        <TrendingUp className="w-5 h-5 text-emerald-400" />
      </div>

      <div className="mb-6">
        <div className="text-sm text-emerald-100/80 mb-2">Predicted spread in next 7 days:</div>
        <div className="text-3xl font-bold text-red-400">+25%</div>
      </div>

      <div className="bg-yellow-900/20 p-4 rounded-lg mb-6 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
        <div className="text-sm text-yellow-100/80">
          High-risk period approaching. Increased humidity forecasted for next week.
        </div>
      </div>

      <button className="w-full px-4 py-2 bg-purple-500 hover:bg-purple-400 text-white rounded-md transition-all">
        Run Simulation
      </button>
    </div>
  );
}