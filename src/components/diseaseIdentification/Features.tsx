import React from 'react';
import { Target, Zap, Lock, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Exceptional Accuracy',
    description: 'Powered by AI models trained on thousands of disease samples'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Speed & Efficiency',
    description: 'Get instant diagnoses, reducing delays in decision-making'
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Data Security',
    description: 'Your images and data are securely stored and protected'
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: 'Continuous Updates',
    description: 'Stay ahead with regular AI model improvements'
  }
];

export default function Features() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-white mb-12">Features at a Glance</h2>
      
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