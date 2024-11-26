import React from 'react';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

const alerts = [
  {
    type: 'high',
    message: 'Nutrient Deficiency',
    location: 'Section A2',
    priority: 'High',
    action: 'View Details'
  },
  {
    type: 'medium',
    message: 'Irregular Growth',
    location: 'Section B2',
    priority: 'Medium',
    action: 'View Details'
  },
  {
    type: 'low',
    message: 'Poor Production',
    location: 'Section C1',
    priority: 'Low',
    action: 'View Details'
  }
];

export default function ActiveAlerts() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-6">Active Alerts</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-emerald-100/80 text-sm text-left">
              <th className="pb-4">Alert Type</th>
              <th className="pb-4">Location</th>
              <th className="pb-4">Priority</th>
              <th className="pb-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert, index) => (
              <tr key={index} className="border-t border-emerald-800/20">
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    {alert.type === 'high' ? (
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    ) : alert.type === 'medium' ? (
                      <AlertCircle className="w-5 h-5 text-yellow-400" />
                    ) : (
                      <Info className="w-5 h-5 text-blue-400" />
                    )}
                    <span className="text-emerald-100/80">{alert.message}</span>
                  </div>
                </td>
                <td className="py-4 text-emerald-100/80">{alert.location}</td>
                <td className="py-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    alert.type === 'high'
                      ? 'bg-red-500/20 text-red-400'
                      : alert.type === 'medium'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {alert.priority}
                  </span>
                </td>
                <td className="py-4">
                  <button className="text-emerald-400 hover:text-emerald-300 text-sm">
                    {alert.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}