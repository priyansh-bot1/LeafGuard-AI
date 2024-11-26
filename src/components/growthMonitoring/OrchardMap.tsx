import React from 'react';
import { Map, Layers, ZoomIn, ZoomOut } from 'lucide-react';

export default function OrchardMap() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white mb-1">Orchard Health Map</h2>
          <p className="text-sm text-emerald-100/60">Interactive visualization of growth patterns</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 bg-emerald-900/40 hover:bg-emerald-900/60 rounded-md text-emerald-400">
            <Layers className="w-5 h-5" />
          </button>
          <button className="p-2 bg-emerald-900/40 hover:bg-emerald-900/60 rounded-md text-emerald-400">
            <Map className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="h-96 bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-100/60">
          [Interactive Orchard Map]
        </div>
        
        <div className="absolute right-4 top-4 flex flex-col gap-2">
          <button className="p-2 bg-emerald-900/60 hover:bg-emerald-900/80 text-white rounded-md backdrop-blur-sm">
            <ZoomIn className="w-5 h-5" />
          </button>
          <button className="p-2 bg-emerald-900/60 hover:bg-emerald-900/80 text-white rounded-md backdrop-blur-sm">
            <ZoomOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}