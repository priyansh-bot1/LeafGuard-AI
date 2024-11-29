import React from 'react';
import { ChevronDown } from 'lucide-react';

const questions = [
  {
    question: 'Getting Started',
    answer: 'Learn about initial setup and configuration requirements.'
  },
  {
    question: 'Using Key Features',
    answer: 'Discover how to use core features effectively.'
  },
  {
    question: 'Troubleshooting',
    answer: 'Find solutions to common technical issues.'
  }
];

export default function FAQ() {
  return (
    <div className="bg-emerald-900/30 p-8 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-2xl font-bold text-white mb-6">Looking for answers?</h2>
      
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div 
            key={index}
            className="bg-emerald-900/40 p-4 rounded-lg"
          >
            <button className="flex items-center justify-between w-full text-left">
              <span className="text-white font-medium">{item.question}</span>
              <ChevronDown className="w-5 h-5 text-emerald-400" />
            </button>
            <p className="mt-2 text-emerald-100/70">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}