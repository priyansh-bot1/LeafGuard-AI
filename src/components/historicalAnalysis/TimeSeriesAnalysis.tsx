import React from 'react';
import { LineChart, Calendar, Filter } from 'lucide-react';

export default function TimeSeriesAnalysis() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Time-Series Analysis</h2>
        <div className="flex gap-3">
          <button className="p-2 bg-emerald-900/40 hover:bg-emerald-900/60 rounded-md text-emerald-400 transition-all">
            <Calendar className="w-5 h-5" />
          </button>
          <button className="p-2 bg-emerald-900/40 hover:bg-emerald-900/60 rounded-md text-emerald-400 transition-all">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
          Disease Prevalence
        </button>
        <button className="px-4 py-2 bg-emerald-900/40 hover:bg-emerald-900/60 text-white rounded-md transition-all">
          Growth Rate
        </button>
        <button className="px-4 py-2 bg-emerald-900/40 hover:bg-emerald-900/60 text-white rounded-md transition-all">
          Apply Filter
        </button>
      </div>

      <div className="h-80 bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-100/60">
        [Interactive Time Series Chart]
      </div>
    </div>
  );
}