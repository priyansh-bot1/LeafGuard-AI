import React from 'react';
import { Map } from 'lucide-react';

export default function GeographicMapping() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Geographic Mapping</h2>
        <Map className="w-5 h-5 text-emerald-400" />
      </div>
      
      <div className="h-48 bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-100/60 mb-4">
        Interactive Map Placeholder
      </div>

      <button className="w-full px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
        View Full Map
      </button>
    </div>
  );
}