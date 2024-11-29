import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function PlanCalculator() {
  const [orchardSize, setOrchardSize] = useState('small');
  const [monitoringFrequency, setMonitoringFrequency] = useState('daily');

  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-6 h-6 text-emerald-400" />
        <h2 className="text-xl font-semibold text-white">Plan Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-emerald-100/80 mb-2">Orchard Size</label>
          <select 
            value={orchardSize}
            onChange={(e) => setOrchardSize(e.target.value)}
            className="w-full bg-emerald-900/40 border border-emerald-800/20 rounded-lg px-4 py-2 text-white"
          >
            <option value="small">Small (1-5 acres)</option>
            <option value="medium">Medium (6-20 acres)</option>
            <option value="large">Large (20+ acres)</option>
          </select>
        </div>

        <div>
          <label className="block text-emerald-100/80 mb-2">Monitoring Frequency</label>
          <select
            value={monitoringFrequency}
            onChange={(e) => setMonitoringFrequency(e.target.value)}
            className="w-full bg-emerald-900/40 border border-emerald-800/20 rounded-lg px-4 py-2 text-white"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>

      <button className="mt-6 px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
        Calculate Recommended Plan
      </button>
    </div>
  );
}