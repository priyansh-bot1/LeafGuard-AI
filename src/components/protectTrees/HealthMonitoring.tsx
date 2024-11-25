import React from 'react';
import { LineChart, Leaf, TrendingUp } from 'lucide-react';

const metrics = [
  { label: 'Disease Detection Rate', value: '95%' },
  { label: 'Early Warning Success', value: '89%' },
  { label: 'Treatment Effectiveness', value: '92%' }
];

export default function HealthMonitoring() {
  return (
    <div className="mb-20">
      <div className="bg-emerald-900/30 rounded-xl p-8 backdrop-blur-sm border border-emerald-800/20">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 mb-6">
              <Leaf className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Advanced Health Monitoring
            </h2>
            <p className="text-emerald-100/80 mb-8">
              Our AI-powered system continuously monitors your orchard's health, 
              providing real-time insights and early warning signals for potential issues.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-emerald-900/40 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-emerald-100/70">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-emerald-900/40 rounded-lg p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-white">Health Trends</h3>
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="h-64 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-100/60">
                [Health Monitoring Chart]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}