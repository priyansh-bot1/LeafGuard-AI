import React from 'react';
import { ChevronRight } from 'lucide-react';

const diseases = [
  { name: 'Apple Scab', severity: 'Severe', level: 80 },
  { name: 'Fire Blight', severity: 'Moderate', level: 45 },
  { name: 'Powdery Mildew', severity: 'Low', level: 20 }
];

export default function DiseaseBreakdown() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-6">Disease Breakdown</h2>
      
      <div className="space-y-4">
        {diseases.map((disease, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm text-emerald-100/80 mb-2">
              <span>{disease.name}</span>
              <span className={`
                ${disease.severity === 'Severe' ? 'text-red-400' : 
                  disease.severity === 'Moderate' ? 'text-yellow-400' : 
                  'text-emerald-400'}
              `}>
                {disease.severity}
              </span>
            </div>
            <div className="w-full bg-emerald-900/40 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  disease.severity === 'Severe' ? 'bg-red-500' :
                  disease.severity === 'Moderate' ? 'bg-yellow-500' :
                  'bg-emerald-500'
                }`}
                style={{ width: `${disease.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all flex items-center justify-center gap-2">
        View Detailed Report
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}