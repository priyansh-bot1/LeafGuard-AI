import React from 'react';
import { TreeDeciduous, Target, AlertCircle } from 'lucide-react';

const diagnostics = [
  {
    label: 'Affected Area',
    value: 'Lower branches of apple trees',
    icon: <Target className="w-5 h-5" />
  },
  {
    label: 'Affected Trees',
    value: 'Apple Trees #23, #24, #27',
    icon: <TreeDeciduous className="w-5 h-5" />
  },
  {
    label: 'Symptoms',
    value: 'Discolored leaves, unusual spots',
    icon: <AlertCircle className="w-5 h-5" />
  }
];

export default function DiagnosticsPanel() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-lg font-semibold text-white mb-6">Detailed Diagnostics</h2>
      
      <div className="space-y-4">
        {diagnostics.map((item, index) => (
          <div 
            key={index}
            className="flex items-start gap-3 bg-emerald-900/40 p-4 rounded-lg"
          >
            <div className="text-emerald-400">
              {item.icon}
            </div>
            <div>
              <h3 className="text-emerald-100/80 font-medium mb-1">{item.label}</h3>
              <p className="text-emerald-100/60">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}