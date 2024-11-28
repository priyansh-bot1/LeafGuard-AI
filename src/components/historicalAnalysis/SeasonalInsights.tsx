import React from 'react';
import { Sun, Cloud, Snowflake, Leaf } from 'lucide-react';

export default function SeasonalInsights() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-6">Seasonal Insights</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-emerald-100/80 font-medium">Seasonal Trend Mapping</h3>
            <div className="flex gap-2">
              <Sun className="w-5 h-5 text-emerald-400" />
              <Cloud className="w-5 h-5 text-emerald-400" />
              <Snowflake className="w-5 h-5 text-emerald-400" />
              <Leaf className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
          <div className="h-48 bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-100/60">
            [Seasonal Trend Chart]
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-emerald-100/80 font-medium">Growth Rate Variability</h3>
          </div>
          <div className="h-48 bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-100/60">
            [Growth Variability Chart]
          </div>
        </div>
      </div>
    </div>
  );
}