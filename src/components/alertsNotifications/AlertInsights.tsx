import React from 'react';
import { FileText, AlertTriangle, ArrowRight } from 'lucide-react';

const insights = [
  {
    title: 'Issue Summary',
    description: 'Clear description of detected problems',
    status: 'Active'
  },
  {
    title: 'Impact Assessment',
    description: 'Potential risks and consequences',
    status: 'Warning'
  }
];

export default function AlertInsights() {
  return (
    <div className="bg-emerald-900/30 p-8 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-2xl font-bold text-white mb-6">Comprehensive Insights</h2>
      
      <div className="space-y-6">
        {insights.map((insight, index) => (
          <div key={index} className="bg-emerald-900/40 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-medium">{insight.title}</h3>
              <span className={`px-3 py-1 rounded-full text-sm ${
                insight.status === 'Active' 
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {insight.status}
              </span>
            </div>
            <p className="text-emerald-100/70 text-sm mb-4">{insight.description}</p>
            <button className="text-emerald-400 hover:text-emerald-300 text-sm flex items-center gap-2">
              View Details <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}

        <div className="bg-emerald-900/40 rounded-lg p-4">
          <h3 className="text-white font-medium mb-4">Recent Alerts</h3>
          <div className="h-48 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-100/60">
            [Alert Timeline Visualization]
          </div>
        </div>
      </div>
    </div>
  );
}