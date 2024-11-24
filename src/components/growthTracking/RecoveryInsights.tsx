import React from 'react';
import { Activity } from 'lucide-react';

const treatments = [
  {
    name: 'Anti-Rust Treatment',
    progress: 75,
    status: 'Active'
  },
  {
    name: 'Apple Scab Treatment',
    progress: 92,
    status: 'Completing'
  }
];

export default function RecoveryInsights() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Recovery Insights</h2>
        <Activity className="w-5 h-5 text-emerald-400" />
      </div>

      <div className="space-y-6">
        {treatments.map((treatment, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm text-emerald-100/80 mb-2">
              <span>{treatment.name}</span>
              <span>{treatment.status}</span>
            </div>
            <div className="w-full bg-emerald-900/40 rounded-full h-2">
              <div 
                className="bg-emerald-500 h-2 rounded-full"
                style={{ width: `${treatment.progress}%` }}
              />
            </div>
            <div className="text-right text-sm text-emerald-100/60 mt-1">
              {treatment.progress}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}