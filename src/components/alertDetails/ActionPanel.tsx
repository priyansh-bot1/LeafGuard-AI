import React from 'react';
import { Sprout, Shield, Droplets } from 'lucide-react';

const actions = [
  {
    label: 'Apply Fungicide',
    description: 'Use organic fungicide on affected areas',
    icon: <Sprout className="w-5 h-5" />
  },
  {
    label: 'Isolate Infected Trees',
    description: 'Prevent spread to healthy trees',
    icon: <Shield className="w-5 h-5" />
  },
  {
    label: 'Monitor Soil Moisture',
    description: 'Maintain optimal moisture levels',
    icon: <Droplets className="w-5 h-5" />
  }
];

export default function ActionPanel() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-lg font-semibold text-white mb-6">Recommended Actions</h2>
      
      <div className="space-y-4">
        {actions.map((action, index) => (
          <div 
            key={index}
            className="flex items-start gap-3 bg-emerald-900/40 p-4 rounded-lg"
          >
            <div className="text-emerald-400">
              {action.icon}
            </div>
            <div>
              <h3 className="text-emerald-100/80 font-medium mb-1">{action.label}</h3>
              <p className="text-emerald-100/60">{action.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}