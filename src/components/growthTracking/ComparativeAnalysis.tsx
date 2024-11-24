import React from 'react';
import { TrendingUp } from 'lucide-react';

const metrics = [
  {
    label: 'Sectional Performance',
    value: '92%',
    benchmark: '78%',
    color: 'bg-orange-500'
  },
  {
    label: 'Growth Rate',
    value: '73%',
    benchmark: '65%',
    color: 'bg-blue-500'
  },
  {
    label: 'Industry Benchmark',
    value: '85%',
    benchmark: '80%',
    color: 'bg-emerald-500'
  }
];

export default function ComparativeAnalysis() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Comparative Analysis</h2>
        <TrendingUp className="w-5 h-5 text-emerald-400" />
      </div>

      <div className="space-y-6">
        {metrics.map((metric, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm text-emerald-100/80 mb-2">
              <span>{metric.label}</span>
              <span>{metric.value}</span>
            </div>
            <div className="w-full bg-emerald-900/40 rounded-full h-2">
              <div 
                className={`${metric.color} h-2 rounded-full`}
                style={{ width: metric.value }}
              />
            </div>
            <div className="text-right text-sm text-emerald-100/60 mt-1">
              Benchmark: {metric.benchmark}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}