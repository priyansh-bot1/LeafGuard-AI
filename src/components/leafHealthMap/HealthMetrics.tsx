import React from 'react';
import { Activity, AlertTriangle, Leaf } from 'lucide-react';

const metrics = [
  {
    label: 'Overall Health',
    value: '85%',
    subtext: 'Healthy trees',
    icon: <Leaf className="w-5 h-5" />,
    color: 'text-emerald-400'
  },
  {
    label: 'At Risk',
    value: '12%',
    subtext: 'Trees requiring attention',
    icon: <AlertTriangle className="w-5 h-5" />,
    color: 'text-yellow-400'
  },
  {
    label: 'Diseased',
    value: '3%',
    subtext: 'Trees needing immediate care',
    icon: <Activity className="w-5 h-5" />,
    color: 'text-red-400'
  }
];

export default function HealthMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <div 
          key={index}
          className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={metric.color}>{metric.icon}</div>
            <h2 className="text-lg font-medium text-white">{metric.label}</h2>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
          <p className="text-sm text-emerald-100/70">{metric.subtext}</p>
        </div>
      ))}
    </div>
  );
}