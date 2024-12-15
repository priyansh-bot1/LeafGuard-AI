import React from 'react';

const stats = [
  { value: '15K+', label: 'Orchards Protected' },
  { value: '95%', label: 'Detection Accuracy' },
  { value: '30%', label: 'Yield Improvement' },
  { value: '24/7', label: 'Monitoring' }
];

export default function Stats() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-emerald-900/30 p-8 rounded-xl backdrop-blur-sm border border-emerald-800/20">
            <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
            <div className="text-emerald-100/80 text-sm md:text-base">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}