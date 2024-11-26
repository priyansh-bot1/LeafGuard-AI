import React from 'react';
import { TrendingUp, AlertTriangle, Scale } from 'lucide-react';

const metrics = [
  {
    label: 'Orchard Health Score',
    value: '87%',
    trend: '2% increase from last week',
    icon: <TrendingUp className="w-5 h-5 text-emerald-400" />
  },
  {
    label: 'Predicted Yield',
    value: '12.5 tons',
    trend: 'per hectare',
    icon: <Scale className="w-5 h-5 text-emerald-400" />
  },
  {
    label: 'Active Alerts',
    value: '3',
    trend: 'High priority',
    icon: <AlertTriangle className="w-5 h-5 text-yellow-400" />
  }
];

export default function OverviewMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <div 
          key={index}
          className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-emerald-100/80">{metric.label}</span>
            {metric.icon}
          </div>
          <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
          <p className="text-sm text-emerald-100/60">{metric.trend}</p>
        </div>
      ))}
    </div>
  );
}