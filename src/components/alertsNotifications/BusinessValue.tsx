import React from 'react';
import { Shield, Target, Leaf } from 'lucide-react';

const benefits = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Proactive Protection',
    description: 'Detect and address issues before they escalate'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Resource Optimization',
    description: "Focus resources where they're needed most"
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: 'Sustainable Practices',
    description: 'Support eco-friendly orchard management'
  }
];

export default function BusinessValue() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Business Value</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-emerald-900/30 p-8 rounded-xl backdrop-blur-sm border border-emerald-800/20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 mb-6">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {benefit.title}
            </h3>
            <p className="text-emerald-100/70">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}