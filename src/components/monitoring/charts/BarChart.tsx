import React from 'react';
import { BarChart2 } from 'lucide-react';

// Mock data for disease incidence
const diseaseData = [
  { disease: 'Black Rot', count: 45, color: 'bg-red-500/40' },
  { disease: 'Cedar Rust', count: 30, color: 'bg-yellow-500/40' },
  { disease: 'Apple Scab', count: 25, color: 'bg-orange-500/40' },
];

export default function BarChart() {
  const maxCount = Math.max(...diseaseData.map(d => d.count));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-white">Disease Incidence Trends</h3>
        <BarChart2 className="w-5 h-5 text-emerald-400" />
      </div>

      <div className="space-y-4">
        {diseaseData.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm text-emerald-100/80 mb-1">
              <span>{item.disease}</span>
              <span>{item.count} cases</span>
            </div>
            <div className="w-full bg-emerald-900/40 rounded-full h-3">
              <div 
                className={`${item.color} h-3 rounded-full transition-all duration-500`}
                style={{ width: `${(item.count / maxCount) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-emerald-800/20">
        <div className="text-sm text-emerald-100/60">
          Total Cases: {diseaseData.reduce((acc, curr) => acc + curr.count, 0)}
        </div>
      </div>
    </div>
  );
}