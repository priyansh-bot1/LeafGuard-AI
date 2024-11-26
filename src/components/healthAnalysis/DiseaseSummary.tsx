import React from 'react';
import { Map } from 'lucide-react';

const diseases = [
  { name: 'Black Rot', severity: 'High', affected: '15%' },
  { name: 'Cedar Rust', severity: 'Moderate', affected: '8%' }
];

export default function DiseaseSummary() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Disease Summary</h2>
        <Map className="w-5 h-5 text-emerald-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Disease List */}
        <div className="space-y-4">
          {diseases.map((disease, index) => (
            <div key={index} className="bg-emerald-900/40 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-medium">{disease.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  disease.severity === 'High' 
                    ? 'bg-red-500/20 text-red-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {disease.severity}
                </span>
              </div>
              <p className="text-emerald-100/60 text-sm">
                Affected Area: {disease.affected}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Map */}
        <div className="bg-emerald-900/40 rounded-lg p-4">
          <h3 className="text-white font-medium mb-4">Disease Distribution Map</h3>
          <div className="h-48 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-100/60">
            [Interactive Disease Map]
          </div>
        </div>
      </div>
    </div>
  );
}