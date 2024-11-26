import React from 'react';
import { Settings, Sliders, Clock } from 'lucide-react';

const settings = [
  {
    icon: <Settings className="w-5 h-5" />,
    title: 'Custom Thresholds',
    description: 'Define specific alert triggers based on your orchard conditions'
  },
  {
    icon: <Sliders className="w-5 h-5" />,
    title: 'Sensitivity Levels',
    description: 'Adjust detection sensitivity for different disease types'
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Schedule Control',
    description: 'Set monitoring schedules that work for your operation'
  }
];

export default function AlertSettings() {
  return (
    <div className="bg-emerald-900/30 p-8 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-2xl font-bold text-white mb-6">Tailored Alert Settings</h2>
      
      <div className="space-y-6">
        {settings.map((setting, index) => (
          <div key={index} className="flex items-start gap-4 bg-emerald-900/40 p-4 rounded-lg">
            <div className="text-emerald-400">{setting.icon}</div>
            <div>
              <h3 className="text-white font-medium mb-1">{setting.title}</h3>
              <p className="text-emerald-100/70 text-sm">{setting.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}