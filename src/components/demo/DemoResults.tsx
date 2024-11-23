import React from 'react';
import { Activity, AlertTriangle, CheckCircle } from 'lucide-react';

export default function DemoResults() {
  return (
    <div className="bg-emerald-900/30 rounded-xl p-8 backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-2xl font-semibold text-white mb-6">Analysis Results</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Health Status */}
        <div className="bg-emerald-900/40 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg font-medium text-white">Health Status</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-emerald-100/80">Confidence Score</span>
              <span className="text-emerald-400">95%</span>
            </div>
            <div className="w-full bg-emerald-900/30 rounded-full h-2">
              <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '95%' }} />
            </div>
          </div>
        </div>

        {/* Disease Detection */}
        <div className="bg-emerald-900/40 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-400" />
            <h3 className="text-lg font-medium text-white">Disease Detection</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <span className="text-emerald-100/80">Black Rot</span>
              <span className="text-yellow-400">Detected</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-emerald-100/80">Cedar Rust</span>
              <span className="text-emerald-100/60">Not Detected</span>
            </li>
          </ul>
        </div>

        {/* Recommendations */}
        <div className="bg-emerald-900/40 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg font-medium text-white">Recommendations</h3>
          </div>
          <ul className="space-y-3 text-sm text-emerald-100/80">
            <li>• Apply fungicide treatment within 24 hours</li>
            <li>• Monitor surrounding trees for spread</li>
            <li>• Schedule follow-up scan in 7 days</li>
          </ul>
        </div>
      </div>
    </div>
  );
}