import React from 'react';
import { AlertTriangle, History } from 'lucide-react';

interface AlertHeaderProps {
  severity: string;
  type: string;
  timestamp: string;
}

export default function AlertHeader({ severity, type, timestamp }: AlertHeaderProps) {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0" />
          <div>
            <h1 className="text-xl font-semibold text-white">
              {severity} Severity Alert: {type}
            </h1>
            <p className="text-emerald-100/60 text-sm">
              Detected on {timestamp}
            </p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
            Take Action
          </button>
          <button className="px-4 py-2 flex items-center gap-2 bg-emerald-900/40 hover:bg-emerald-900/60 text-white rounded-md transition-all">
            <History className="w-4 h-4" />
            View History
          </button>
        </div>
      </div>
    </div>
  );
}