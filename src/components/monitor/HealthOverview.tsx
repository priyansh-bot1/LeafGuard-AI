import React from 'react';
import { Activity, Thermometer, Wind } from 'lucide-react';

export default function HealthOverview() {
  return (
    <div className="bg-emerald-900/30 rounded-xl p-6 backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-6">Health Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-emerald-900/40 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-emerald-100/80">Orchard Health Score</h3>
            <Activity className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="text-4xl font-bold text-white mb-2">85%</div>
          <p className="text-sm text-emerald-100/60">2% increase from last week</p>
        </div>
        
        <div className="bg-emerald-900/40 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-emerald-100/80">Disease Prevalence</h3>
            <Thermometer className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="h-24 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-100/60">
            [Heat Map Visualization]
          </div>
        </div>
        
        <div className="bg-emerald-900/40 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-emerald-100/80">Environmental Stress</h3>
            <Wind className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="h-24 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-100/60">
            [Status Chart]
          </div>
        </div>
      </div>
      
      <div className="bg-emerald-900/40 rounded-lg p-4">
        <h3 className="text-emerald-100/80 mb-4">Geospatial Health Map</h3>
        <div className="h-64 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-100/60">
          [Interactive Orchard Map]
        </div>
      </div>
    </div>
  );
}