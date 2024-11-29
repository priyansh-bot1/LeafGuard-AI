import React from 'react';
import { Activity, Bell, LineChart, Users } from 'lucide-react';

const features = [
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Real-Time Monitoring',
    description: '24/7 monitoring of your orchard health with instant alerts'
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: 'Smart Notifications',
    description: 'Get alerts when potential issues are detected'
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: 'Advanced Analytics',
    description: "Deep insights into your orchard's health trends"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Team Collaboration',
    description: 'Share insights and coordinate responses with your team'
  }
];

export default function PlanFeatures() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-6">Key Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-emerald-900/40 p-6 rounded-lg"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/20 text-emerald-400 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
            <p className="text-emerald-100/70">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}