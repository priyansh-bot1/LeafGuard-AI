import React from 'react';
import { Smartphone, Laptop, Tablet } from 'lucide-react';

const devices = [
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: 'Mobile Access',
    description: 'Monitor alerts on-the-go with our mobile app'
  },
  {
    icon: <Laptop className="w-5 h-5" />,
    title: 'Desktop Dashboard',
    description: 'Comprehensive analysis and management tools'
  },
  {
    icon: <Tablet className="w-5 h-5" />,
    title: 'Tablet Optimization',
    description: 'Perfect for field inspections and quick updates'
  }
];

export default function DeviceIntegration() {
  return (
    <div className="bg-emerald-900/30 p-8 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-2xl font-bold text-white mb-6">Seamless Integration</h2>
      
      <div className="space-y-6">
        {devices.map((device, index) => (
          <div key={index} className="flex items-start gap-4 bg-emerald-900/40 p-4 rounded-lg">
            <div className="text-emerald-400">{device.icon}</div>
            <div>
              <h3 className="text-white font-medium mb-1">{device.title}</h3>
              <p className="text-emerald-100/70 text-sm">{device.description}</p>
            </div>
          </div>
        ))}

        <button className="w-full px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
          Download Mobile App
        </button>
      </div>
    </div>
  );
}