import React from 'react';
import { AlertTriangle, TrendingUp } from 'lucide-react';

const riskFactors = [
  { factor: 'High humidity forecast for next week', level: 'High' },
  { factor: 'Soil moisture above optimal levels', level: 'Moderate' }
];

export default function RiskAssessment() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Risk Assessment</h2>
        <TrendingUp className="w-5 h-5 text-emerald-400" />
      </div>

      <div className="space-y-4">
        {riskFactors.map((risk, index) => (
          <div key={index} className="flex items-start gap-3 bg-emerald-900/40 p-4 rounded-lg">
            <AlertTriangle className={`w-5 h-5 flex-shrink-0 ${
              risk.level === 'High' ? 'text-red-400' : 'text-yellow-400'
            }`} />
            <div>
              <p className="text-emerald-100/80">{risk.factor}</p>
              <span className={`text-sm ${
                risk.level === 'High' ? 'text-red-400' : 'text-yellow-400'
              }`}>
                {risk.level} Risk
              </span>
            </div>
          </div>
        ))}

        <div className="mt-6">
          <h3 className="text-white font-medium mb-4">Disease Spread Prediction</h3>
          <div className="h-48 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-100/60">
            [Spread Prediction Chart]
          </div>
        </div>
      </div>
    </div>
  );
}