import React from 'react';
import { HelpCircle, Settings, Zap } from 'lucide-react';

const faqs = [
  {
    icon: <Settings className="w-5 h-5" />,
    question: 'How do I set up irrigation schedules?',
    description: 'Learn how to optimize your orchard\'s watering routine.'
  },
  {
    icon: <Zap className="w-5 h-5" />,
    question: 'Troubleshooting sensor connectivity issues',
    description: 'Steps to resolve common sensor connection problems.'
  },
  {
    icon: <HelpCircle className="w-5 h-5" />,
    question: 'Understanding your subscription benefits',
    description: 'Explore the features available in your current plan.'
  }
];

export default function SuggestedFAQs() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-6">Suggested FAQs</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <button
            key={index}
            className="w-full text-left bg-emerald-900/40 p-4 rounded-lg hover:bg-emerald-900/60 transition-all group"
          >
            <div className="flex items-start gap-3">
              <div className="text-emerald-400 group-hover:text-emerald-300">
                {faq.icon}
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">{faq.question}</h3>
                <p className="text-sm text-emerald-100/60">{faq.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}