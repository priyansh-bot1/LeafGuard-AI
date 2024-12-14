import React from 'react';
import { FileText, BookOpen, HelpCircle } from 'lucide-react';

const actions = [
  {
    icon: <FileText className="w-5 h-5" />,
    label: 'Generate Report',
    color: 'bg-emerald-500 hover:bg-emerald-400'
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    label: 'Learn More',
    color: 'bg-emerald-500 hover:bg-emerald-400'
  },
  {
    icon: <HelpCircle className="w-5 h-5" />,
    label: 'Request Assistance',
    color: 'bg-emerald-500 hover:bg-emerald-400'
  }
];

export default function ActionButtons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {actions.map((action, index) => (
        <button
          key={index}
          className={`${action.color} px-4 py-3 rounded-md text-white transition-all flex items-center justify-center gap-2`}
        >
          {action.icon}
          {action.label}
        </button>
      ))}
    </div>
  );
}