import React from 'react';
import { DollarSign, Sprout, LineChart } from 'lucide-react';

const benefits = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Reduce Operational Costs',
    description: 'Save on labor and treatment costs through early detection and targeted interventions'
  },
  {
    icon: <Sprout className="w-6 h-6" />,
    title: 'Improve Yield Quality',
    description: 'Maintain healthier trees that produce better quality fruit'
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: 'Increase Productivity',
    description: 'Optimize resources and maximize orchard output through data-driven decisions'
  }
];

export default function BusinessValue() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-white mb-12">
        Business Value
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-emerald-900/30 p-8 rounded-xl backdrop-blur-sm border border-emerald-800/20"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/20 text-emerald-400 mb-6">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
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