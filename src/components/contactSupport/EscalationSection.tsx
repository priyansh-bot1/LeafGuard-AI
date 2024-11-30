import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function EscalationSection() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-4">Need to Escalate?</h2>
      
      <p className="text-emerald-100/70 mb-4">
        If you are not satisfied with your resolution, click here to escalate to a senior agent.
      </p>
      
      <button className="px-6 py-2 bg-red-500 hover:bg-red-400 text-white rounded-md transition-all flex items-center gap-2">
        <ArrowUpRight className="w-4 h-4" />
        Escalate Issue
      </button>
    </div>
  );
}