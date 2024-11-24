import React from 'react';
import { Sprout, Flower, Apple } from 'lucide-react';

const milestones = [
  {
    icon: <Sprout className="w-5 h-5" />,
    stage: 'Budding',
    date: 'Started on April 15, 2023',
    status: 'complete'
  },
  {
    icon: <Flower className="w-5 h-5" />,
    stage: 'Flowering & Pollination',
    date: 'Started on May 1, 2023 - 85% complete',
    status: 'in-progress'
  },
  {
    icon: <Apple className="w-5 h-5" />,
    stage: 'Fruit Bearing',
    date: 'Expected to start June 15, 2023',
    status: 'upcoming'
  }
];

export default function DevelopmentMilestones() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20 mb-8">
      <h2 className="text-xl font-semibold text-white mb-6">Development Milestones</h2>

      <div className="space-y-6">
        {milestones.map((milestone, index) => (
          <div 
            key={index}
            className="flex items-start gap-4"
          >
            <div className={`
              p-2 rounded-lg ${
                milestone.status === 'complete' ? 'bg-emerald-500/20 text-emerald-400' :
                milestone.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-blue-500/20 text-blue-400'
              }
            `}>
              {milestone.icon}
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-1">{milestone.stage}</h3>
              <p className="text-sm text-emerald-100/70">{milestone.date}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
        Set Growth Alert
      </button>
    </div>
  );
}