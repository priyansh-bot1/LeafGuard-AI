import React from 'react';
import { Upload, Search, LineChart, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="w-6 h-6" />,
    title: 'Upload Image',
    description: 'Select a leaf photo or use our sample images'
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'AI Analysis',
    description: 'Our model scans for disease markers'
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: 'Get Results',
    description: 'Receive detailed health analysis and recommendations'
  }
];

export default function DemoWalkthrough() {
  return (
    <div className="bg-emerald-900/30 rounded-xl p-8 backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-2xl font-semibold text-white mb-8">How It Works</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="bg-emerald-900/40 rounded-lg p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/20 text-emerald-400 mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
              <p className="text-emerald-100/70">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ArrowRight className="w-6 h-6 text-emerald-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}