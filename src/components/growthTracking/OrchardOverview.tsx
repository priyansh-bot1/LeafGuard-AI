import React from 'react';
import { Leaf, TrendingUp, AlertCircle } from 'lucide-react';

const metrics = [
  {
    icon: <Leaf className="w-5 h-5" />,
    label: 'Overall Health',
    value: '92%',
    trend: '+2.3%',
    color: 'text-emerald-400'
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    label: 'Growth Rate',
    value: '+4.5%',
    trend: 'vs. last month',
    color: 'text-blue-400'
  },
  {
    icon: <AlertCircle className="w-5 h-5" />,
    label: 'Active Alerts',
    value: '2',
    trend: 'Requires attention',
    color: 'text-yellow-400'
  }
];

export default function OrchardOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
          <p className="text-sm text-emerald-100/70">{metric.trend}</p>
        </div>
      ))}
    </div>
  );
}