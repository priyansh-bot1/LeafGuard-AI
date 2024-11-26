import React from 'react';
import { Sprout, DollarSign } from 'lucide-react';

const recommendations = {
  actions: ['Apply fungicide treatment within 24 hours', 'Prune affected branches in Zone B'],
  resources: {
    laborHours: 24,
    materialCost: 1200,
    estimatedSavings: 3500
  }
};

export default function TreatmentRecommendations() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Treatment Recommendations</h2>
        <Sprout className="w-5 h-5 text-emerald-400" />
      </div>

      <div className="space-y-6">
        {/* Recommended Actions */}
        <div>
          <h3 className="text-white font-medium mb-3">Recommended Action Plan</h3>
          <div className="space-y-2">
            {recommendations.actions.map((action, index) => (
              <div key={index} className="flex items-center gap-2 bg-emerald-900/40 p-3 rounded-lg">
                <span className="text-emerald-100/80">{action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Resource Optimization */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-emerald-900/40 p-4 rounded-lg">
            <div className="text-emerald-100/80 mb-2">Labor Hours</div>
            <div className="text-2xl font-bold text-white">
              {recommendations.resources.laborHours}
            </div>
          </div>
          <div className="bg-emerald-900/40 p-4 rounded-lg">
            <div className="text-emerald-100/80 mb-2">Material Cost</div>
            <div className="text-2xl font-bold text-white">
              ${recommendations.resources.materialCost}
            </div>
          </div>
          <div className="bg-emerald-900/40 p-4 rounded-lg">
            <div className="text-emerald-100/80 mb-2">Est. Savings</div>
            <div className="text-2xl font-bold text-emerald-400">
              ${recommendations.resources.estimatedSavings}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}