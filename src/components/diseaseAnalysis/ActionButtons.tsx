import React from 'react';
import { FileText, BookOpen, HelpCircle } from 'lucide-react';

const actions = [
  {
    icon: <FileText className="w-5 h-5" />,
    label: 'Generate Report',
    color: 'bg-blue-500 hover:bg-blue-400'
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    label: 'Learn More',
    color: 'bg-purple-500 hover:bg-purple-400'
  },
  {
    icon: <HelpCircle className="w-5 h-5" />,
    label: 'Request Assistance',
    color: 'bg-orange-500 hover:bg-orange-400'
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