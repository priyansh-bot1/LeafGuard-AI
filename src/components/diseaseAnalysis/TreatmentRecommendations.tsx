import React from 'react';
import { Sprout, Scissors, Wind } from 'lucide-react';

const treatments = [
  {
    icon: <Sprout className="w-5 h-5" />,
    action: 'Apply copper fungicide',
    details: 'For Apple Scab control, apply every 7-10 days'
  },
  {
    icon: <Scissors className="w-5 h-5" />,
    action: 'Prune affected branches',
    details: 'Remove Fire Blight infection areas, sterilize tools between cuts'
  },
  {
    icon: <Wind className="w-5 h-5" />,
    action: 'Improve air circulation',
    details: 'Thin fruit canopy to reduce humidity and disease spread'
  }
];

export default function TreatmentRecommendations() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-6">Treatment Recommendations</h2>

      <div className="space-y-4 mb-6">
        {treatments.map((treatment, index) => (
          <div key={index} className="flex items-start gap-4 bg-emerald-900/40 p-4 rounded-lg">
            <div className="text-emerald-400">{treatment.icon}</div>
            <div>
              <h3 className="text-white font-medium mb-1">{treatment.action}</h3>
              <p className="text-sm text-emerald-100/70">{treatment.details}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
        Get Detailed Treatment Plan
      </button>
    </div>
  );
}