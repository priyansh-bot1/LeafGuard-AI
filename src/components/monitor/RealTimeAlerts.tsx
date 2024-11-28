import React from 'react';
import { AlertTriangle, Bell, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const alerts = [
  {
    priority: 'high',
    message: 'Disease outbreak detected in Section A',
    time: '5m ago'
  },
  {
    priority : 'medium',
    message : 'Nutrient level abnormality in Section B', 
    time : '1hr ago'
  },
  {
    priority: 'low',
    message: 'Apple Scab Season in Section C',
    time: 'Now'
  }
];

export default function RealTimeAlerts() {
  return (
    <div className="bg-emerald-900/30 rounded-xl p-6 backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-4">Real-Time Alerts</h2>
      
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`flex items-start justify-between p-4 rounded-lg ${
              alert.priority === 'high' 
                ? 'bg-red-900/20 border border-red-700/20' 
                : alert.priority == 'medium'
                ? 'bg-yellow-900/20 border border-yellow-700/20'
                : 'bg-blue-900/20 border border-blue-700/20'
            }`}
          >
            <div className="flex items-start gap-3">
              {alert.priority === 'high' ? (
                <AlertTriangle className="w-5 h-5 text-red-400 mt-1" />
              ) : alert.priority == 'medium' ? (
                <Bell className="w-5 h-5 text-yellow-400 mt-1" />
              ) : (
                <Info className="w-5 h-5 text-blue-400 mt-1" />
              )}
              <div>
                <p className="text-white font-medium">{alert.message}</p>
                <p className="text-sm text-emerald-100/60">{alert.time}</p>
              </div>
            </div>
            <Link to="/alert-details">
            <button className="text-sm text-emerald-400 hover:text-emerald-300">
              View Details
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}