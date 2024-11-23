import React from 'react';
import { Target, Clock, Users } from 'lucide-react';

const metrics = [
  {
    icon: <Target className="w-6 h-6" />,
    value: '95%',
    label: 'Detection Accuracy',
    description: 'Consistently accurate disease identification'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    value: '< 2s',
    label: 'Processing Time',
    description: 'Fast and efficient analysis'
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: '10k+',
    label: 'Active Users',
    description: 'Trusted by farmers worldwide'
  }
];

export default function DemoMetrics() {
  return (
    <div className="bg-emerald-900/30 rounded-xl p-8 backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-2xl font-semibold text-white mb-8">Impact & Performance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-emerald-900/40 rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/20 text-emerald-400 mb-4">
              {metric.icon}
            </div>
            <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
            <div className="text-lg font-medium text-emerald-400 mb-2">{metric.label}</div>
            <p className="text-emerald-100/70">{metric.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}