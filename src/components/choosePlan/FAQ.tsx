import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What can I change my plan later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
  },
  {
    question: 'What kind of support do I get?',
    answer: 'All plans include basic email support. Professional and Enterprise plans include priority support with faster response times.'
  },
  {
    question: 'How accurate is the disease detection?',
    answer: 'Our AI-powered disease detection has a 95% accuracy rate, based on extensive testing across different orchard types and conditions.'
  }
];

export default function FAQ() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-emerald-900/40 p-4 rounded-lg"
          >
            <button className="flex items-center justify-between w-full text-left">
              <span className="text-white font-medium">{faq.question}</span>
              <ChevronDown className="w-5 h-5 text-emerald-400" />
            </button>
            <p className="mt-2 text-emerald-100/70">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}