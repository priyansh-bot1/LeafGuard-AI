import React from 'react';
import { Play, Settings, Database, Activity } from 'lucide-react';

const tutorials = [
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Basic Setup & Configuration',
    description: 'Learn how to set up and configure LeafGuard AI for your orchard'
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Data Management',
    description: 'Master the tools for managing and analyzing your orchard data'
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Advanced Features',
    description: 'Explore advanced monitoring and analysis capabilities'
  }
];

export default function TutorialVideos() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Tutorial Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tutorials.map((tutorial, index) => (
          <div
            key={index}
            className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20 group hover:bg-emerald-900/40 transition-all"
          >
            <div className="relative h-48 bg-emerald-900/40 rounded-lg mb-4 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="w-12 h-12 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="text-emerald-400">{tutorial.icon}</div>
              <h3 className="text-lg font-medium text-white">{tutorial.title}</h3>
            </div>
            <p className="text-emerald-100/70">{tutorial.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}