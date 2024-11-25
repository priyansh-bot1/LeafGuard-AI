import React from 'react';
import { Calendar, Database, FileText, Bell } from 'lucide-react';

const actions = [
  {
    icon: <Calendar className="w-5 h-5" />,
    label: 'Schedule Treatment',
    color: 'bg-emerald-500 hover:bg-emerald-400'
  },
  {
    icon: <Database className="w-5 h-5" />,
    label: 'Update Data',
    color: 'bg-blue-500 hover:bg-blue-400'
  },
  {
    icon: <FileText className="w-5 h-5" />,
    label: 'Generate Report',
    color: 'bg-purple-500 hover:bg-purple-400'
  },
  {
    icon: <Bell className="w-5 h-5" />,
    label: 'Set Custom Alert',
    color: 'bg-yellow-500 hover:bg-yellow-400'
  }
];

export default function QuickActions() {
  return (
    <div className="bg-emerald-900/30 rounded-xl p-6 backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
    </div>
  );
}