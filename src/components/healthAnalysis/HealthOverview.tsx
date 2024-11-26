import React from 'react';
import { Activity, AlertCircle } from 'lucide-react';

export default function HealthOverview() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-6">Orchard Health Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Health Index Score */}
        <div className="bg-emerald-900/40 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-emerald-100/80">Health Index Score</span>
            <Activity className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="text-4xl font-bold text-white mb-1">85%</div>
          <p className="text-sm text-emerald-100/60">+2.3% from last week</p>
        </div>

        {/* Active Diseases */}
        <div className="bg-emerald-900/40 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-emerald-100/80">Active Diseases</span>
            <AlertCircle className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="text-4xl font-bold text-white mb-1">2</div>
          <p className="text-sm text-emerald-100/60">Requiring attention</p>
        </div>

        {/* Risk Level */}
        <div className="bg-emerald-900/40 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-emerald-100/80">Risk Level</span>
            <div className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
              Moderate
            </div>
          </div>
          <div className="text-4xl font-bold text-white mb-1">Medium</div>
          <p className="text-sm text-emerald-100/60">Based on current factors</p>
        </div>
      </div>
    </div>
  );
}