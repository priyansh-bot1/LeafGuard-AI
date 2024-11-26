import React from 'react';
import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

export default function ExampleUseCase() {
  return (
    <div className="bg-emerald-900/30 p-8 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-2xl font-bold text-white mb-8">Example Use Case</h2>
      
      <div className="space-y-6">
        <div className="bg-yellow-900/20 border border-yellow-700/20 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Early-Stage Black Rot Detection</h3>
              <p className="text-emerald-100/70 mb-4">
                Alert received for unusual yellowing patterns detected in Section A, indicating possible
                early-stage Black Rot infection.
              </p>
              <div className="flex items-center gap-2 text-yellow-400 text-sm">
                Severity: Moderate
              </div>
            </div>
          </div>
        </div>

        <div className="bg-emerald-900/40 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Action Taken</h3>
              <p className="text-emerald-100/70">
                Applied recommended fungicide treatment to affected trees and scheduled follow-up monitoring.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all flex items-center gap-2">
            Try Demo Alert
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}