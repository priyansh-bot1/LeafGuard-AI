import React from 'react';
import { Upload, Search, FileText } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="w-8 h-8" />,
    title: '1. Upload Images',
    description: 'Upload high-resolution images of apple leaves through our platform'
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: '2. AI Analysis',
    description: 'Our AI scans images using proprietary recognition algorithms'
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: '3. Detailed Diagnosis',
    description: 'Receive categorized results with visual indicators'
  }
];

export default function HowItWorks() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-white mb-12">How It Works</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-emerald-900/30 p-8 rounded-xl backdrop-blur-sm border border-emerald-800/20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 mb-6">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {step.title}
            </h3>
            <p className="text-emerald-100/70">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}