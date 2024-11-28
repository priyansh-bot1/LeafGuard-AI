import React from 'react';
import { Activity, TrendingUp, Target } from 'lucide-react';

const metrics = [
  {
    label: 'Impact Analysis',
    value: '85%',
    subtext: 'Recovery Rate',
    icon: <Activity className="w-5 h-5" />
  },
  {
    label: 'Recovery Metrics',
    value: '92%',
    subtext: 'Treatment Success',
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    label: 'Health Score',
    value: '8.5',
    subtext: 'Out of 10',
    icon: <Target className="w-5 h-5" />
  }
];

export default function EffectivenessMetrics() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-6">Effectiveness Metrics</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <div 
            key={index}
            className="bg-emerald-900/40 p-6 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-emerald-400">{metric.icon}</div>
              <h3 className="text-emerald-100/80 font-medium">{metric.label}</h3>
            </div>
            <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
            <p className="text-emerald-100/60 text-sm">{metric.subtext}</p>
          </div>
        ))}
      </div>
    </div>
  );
}