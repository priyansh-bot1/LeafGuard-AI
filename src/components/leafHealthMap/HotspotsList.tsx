import React from 'react';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

const hotspots = [
  {
    type: 'high',
    message: 'High risk of Cedar Rust in NorthEast sector',
    icon: <AlertTriangle className="w-5 h-5" />
  },
  {
    type: 'medium',
    message: 'Growth slowing detected in South sector',
    icon: <AlertCircle className="w-5 h-5" />
  },
  {
    type: 'low',
    message: 'Scheduled treatment due for West sector next week',
    icon: <Info className="w-5 h-5" />
  }
];

export default function HotspotsList() {
  return (
    <div className="bg-emerald-900/30 rounded-xl p-6 backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-4">Hotspots & Alerts</h2>
      
      <div className="space-y-4">
        {hotspots.map((hotspot, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 p-4 rounded-lg ${
              hotspot.type === 'high' 
                ? 'bg-red-900/20 border border-red-700/20' 
                : hotspot.type === 'medium'
                ? 'bg-yellow-900/20 border border-yellow-700/20'
                : 'bg-blue-900/20 border border-blue-700/20'
            }`}
          >
            <div className={
              hotspot.type === 'high'
                ? 'text-red-400'
                : hotspot.type === 'medium'
                ? 'text-yellow-400'
                : 'text-blue-400'
            }>
              {hotspot.icon}
            </div>
            <span className="text-emerald-100/80">{hotspot.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}