import React from 'react';
import { CheckCircle } from 'lucide-react';

const recommendations = [
  {
    text: 'Increase potassium levels in Section A2 to address nutrient deficiency',
    status: 'pending'
  },
  {
    text: 'Apply irrigation schedule to Section B2 to optimize water usage',
    status: 'pending'
  },
  {
    text: 'Apply organic particles to Section C1 to control pest infestation',
    status: 'pending'
  }
];

export default function Recommendations() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-6">Recommendations</h2>

      <div className="space-y-4">
        {recommendations.map((recommendation, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 bg-emerald-900/40 p-4 rounded-lg"
          >
            <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <span className="text-emerald-100/80">{recommendation.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}