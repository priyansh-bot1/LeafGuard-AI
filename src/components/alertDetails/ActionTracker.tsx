import React from 'react';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

const actions = [
  {
    action: 'Apply Fungicide',
    status: 'completed',
    date: 'March 15, 2025'
  },
  {
    action: 'Isolate Infected Trees',
    status: 'in-progress',
    date: 'March 16, 2025'
  },
  {
    action: 'Monitor Soil Moisture',
    status: 'not-started',
    date: '-'
  }
];

export default function ActionTracker() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-lg font-semibold text-white mb-6">Action Tracker</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-emerald-100/80 text-sm text-left">
              <th className="pb-4">Action</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {actions.map((item, index) => (
              <tr key={index} className="border-t border-emerald-800/20">
                <td className="py-4 text-emerald-100/80">{item.action}</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    {item.status === 'completed' ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-400">Completed</span>
                      </>
                    ) : item.status === 'in-progress' ? (
                      <>
                        <Clock className="w-5 h-5 text-yellow-400" />
                        <span className="text-yellow-400">In Progress</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-red-400" />
                        <span className="text-red-400">Not Started</span>
                      </>
                    )}
                  </div>
                </td>
                <td className="py-4 text-emerald-100/60">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}