import React from 'react';
import { Layers, BookOpen, Target } from 'lucide-react';

const steps = [
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'Step-by-Step Setup',
    description: 'Intuitive process for account creation and essential configurations.'
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Customized Learning',
    description: 'Multimedia resources tailored to your experience level.'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Personalized Recommendations',
    description: 'Fine-tune configurations based on your unique orchard needs.'
  }
];

export default function OnboardingSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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
  );
}