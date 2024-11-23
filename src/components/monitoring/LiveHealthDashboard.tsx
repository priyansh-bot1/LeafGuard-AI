import React from 'react';
import { Leaf, AlertTriangle, Trees } from 'lucide-react';

const metrics = [
  {
    icon: <Leaf className="w-6 h-6" />,
    label: 'Healthy Leaf Percentage',
    value: '87%',
    bgColor: 'bg-emerald-500/20',
    textColor: 'text-emerald-400'
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    label: 'Infected Trees',
    value: '23',
    bgColor: 'bg-yellow-500/20',
    textColor: 'text-yellow-400'
  },
  {
    icon: <Trees className="w-6 h-6" />,
    label: 'Total Trees Monitored',
    value: '1,245',
    bgColor: 'bg-blue-500/20',
    textColor: 'text-blue-400'
  }
];

export default function LiveHealthDashboard() {
  return (
    <div className="bg-emerald-900/30 rounded-xl p-8 backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-2xl font-semibold text-white mb-8">Live Health Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={`${metric.bgColor} rounded-lg p-6 border border-${metric.textColor}/20`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`${metric.textColor}`}>{metric.icon}</div>
              <h3 className="text-lg font-medium text-white">{metric.label}</h3>
            </div>
            <div className="text-3xl font-bold text-white">{metric.value}</div>
          </div>
        ))}
      </div>

      {/* Regional Heatmap */}
      <div className="bg-emerald-900/40 rounded-lg p-6">
        <h3 className="text-lg font-medium text-white mb-4">Regional Heatmap</h3>
        <div className="h-64 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-100/60">
          [Interactive Heatmap Visualization]
        </div>
      </div>
    </div>
  );
}