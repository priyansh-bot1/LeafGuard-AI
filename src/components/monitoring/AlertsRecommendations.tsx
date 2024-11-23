import React from 'react';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

const alerts = [
  {
    type: 'critical',
    icon: <AlertTriangle className="w-5 h-5" />,
    title: 'Critical Alert: Black Rot Detected',
    description: 'Immediate fungicide application recommended. Click for detailed action steps.',
    action: 'View Details'
  },
  {
    type: 'warning',
    icon: <AlertCircle className="w-5 h-5" />,
    title: 'Moderate Alert: Cedar Rust Signs',
    description: 'Monitor closely and prepare for preventive measures. View recommended actions.',
    action: 'View Details'
  },
  {
    type: 'info',
    icon: <Info className="w-5 h-5" />,
    title: 'Weather Advisory',
    description: 'High humidity forecasted. Increased disease risk in the next 48 hours.',
    action: 'View Forecast'
  }
];

export default function AlertsRecommendations() {
  return (
    <div className="bg-emerald-900/30 rounded-xl p-8 backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-2xl font-semibold text-white mb-6">Instant Alerts & Recommendations</h2>
      
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`rounded-lg p-6 ${
              alert.type === 'critical'
                ? 'bg-red-900/20 border border-red-700/20'
                : alert.type === 'warning'
                ? 'bg-yellow-900/20 border border-yellow-700/20'
                : 'bg-blue-900/20 border border-blue-700/20'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`${
                alert.type === 'critical'
                  ? 'text-red-400'
                  : alert.type === 'warning'
                  ? 'text-yellow-400'
                  : 'text-blue-400'
              }`}>
                {alert.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-medium text-white mb-2">{alert.title}</h3>
                <p className="text-emerald-100/70 mb-4">{alert.description}</p>
                <button className={`text-sm ${
                  alert.type === 'critical'
                    ? 'text-red-400 hover:text-red-300'
                    : alert.type === 'warning'
                    ? 'text-yellow-400 hover:text-yellow-300'
                    : 'text-blue-400 hover:text-blue-300'
                } transition-colors`}>
                  {alert.action} →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}