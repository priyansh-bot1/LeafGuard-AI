import React from 'react';
import { Info } from 'lucide-react';

const diseases = [
  {
    name: 'Apple Scab',
    type: 'Fungal disease affecting leaves and fruit',
    stage: 'Initial',
    risk: 'High risk'
  },
  {
    name: 'Fire Blight',
    type: 'Bacterial disease affecting branches and fruit',
    stage: 'Advanced',
    risk: 'Moderate risk'
  }
];

export default function DiseaseProfiles() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Disease Profiles</h2>
        <Info className="w-5 h-5 text-emerald-400" />
      </div>

      <div className="space-y-4 mb-6">
        {diseases.map((disease, index) => (
          <div key={index} className="bg-emerald-900/40 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-white mb-2">{disease.name}</h3>
            <p className="text-sm text-emerald-100/70 mb-2">{disease.type}</p>
            <div className="flex justify-between text-sm">
              <span className="text-emerald-100/60">Stage: {disease.stage}</span>
              <span className="text-yellow-400">{disease.risk}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full px-4 py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded-md transition-all">
        View All Profiles
      </button>
    </div>
  );
}