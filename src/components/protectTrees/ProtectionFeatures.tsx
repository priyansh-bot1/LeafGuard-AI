import React from 'react';
import { Shield, Search, Activity, AlertTriangle } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Early Disease Detection',
    description: 'Identify diseases before they spread using advanced AI technology'
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Comprehensive Analysis',
    description: 'In-depth health reports with actionable insights'
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Real-time Monitoring',
    description: 'Continuous surveillance of orchard health status'
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: 'Instant Alerts',
    description: 'Immediate notifications for potential health issues'
  }
];

export default function ProtectionFeatures() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-white mb-12">
        Comprehensive Protection Features
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/20 text-emerald-400 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-emerald-100/70">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}