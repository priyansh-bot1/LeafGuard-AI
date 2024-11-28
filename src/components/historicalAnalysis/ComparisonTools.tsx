import React from 'react';
import { ArrowLeftRight } from 'lucide-react';

export default function ComparisonTools() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-6">Comparison Tools</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-emerald-100/80 font-medium">Cross-Sections Comparison</h3>
            <select className="bg-emerald-900/40 text-emerald-100/80 border border-emerald-800/20 rounded-md px-3 py-2">
              <option>Central Section</option>
              <option>North Section</option>
              <option>South Section</option>
            </select>
          </div>
          <div className="h-48 bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-100/60">
            [Section Analysis Chart]
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-emerald-100/80 font-medium">Cross-Pattern Comparison</h3>
            <select className="bg-emerald-900/40 text-emerald-100/80 border border-emerald-800/20 rounded-md px-3 py-2">
              <option>North Section</option>
              <option>South Section</option>
              <option>Central Section</option>
            </select>
          </div>
          <div className="h-48 bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-100/60">
            [Pattern Analysis Chart]
          </div>
        </div>
      </div>
    </div>
  );
}