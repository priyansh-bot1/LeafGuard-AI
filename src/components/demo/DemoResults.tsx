import React from 'react';
import { Activity, AlertTriangle, CheckCircle } from 'lucide-react';

interface DemoResultsProps {
  prediction: string | null;
  confidence?: number;
}

export default function DemoResults({ prediction, confidence = 95 }: DemoResultsProps) {
  const getStatusColor = (prediction: string) => {
    switch(prediction) {
      case 'Healthy':
        return 'text-emerald-400';
      case 'Apple Scab':
      case 'Black Rot':
      case 'Cedar Apple Rust':
        return 'text-yellow-400';
      default:
        return 'text-emerald-100/80';
    }
  };

  const getIcon = (prediction: string) => {
    switch(prediction) {
      case 'Healthy':
        return <CheckCircle className="w-6 h-6 text-emerald-400" />;
      case 'Apple Scab':
      case 'Black Rot':
      case 'Cedar Apple Rust':
        return <AlertTriangle className="w-6 h-6 text-yellow-400" />;
      default:
        return <Activity className="w-6 h-6 text-emerald-400" />;
    }
  };

  if (!prediction) return null;

  return (
    <div className="bg-emerald-900/30 p-4 rounded-lg space-y-4">
      <div className="flex items-start gap-3">
        {getIcon(prediction)}
        <div>
          <h4 className="text-white font-medium mb-1">Analysis Result</h4>
          <p className={`text-lg font-semibold ${getStatusColor(prediction)}`}>
            {prediction}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-emerald-100/80">Confidence Score</span>
          <span className="text-emerald-400">{confidence}%</span>
        </div>
        <div className="w-full bg-emerald-900/30 rounded-full h-2">
          <div 
            className="bg-emerald-400 h-2 rounded-full" 
            style={{ width: `${confidence}%` }} 
          />
        </div>
      </div>

      {prediction !== 'Healthy' && (
        <div className="bg-yellow-900/20 border border-yellow-700/20 rounded-lg p-3 text-sm">
          <p className="text-yellow-100/80">
            Recommended Action: Contact your agricultural expert for treatment options.
          </p>
        </div>
      )}
    </div>
  );
}