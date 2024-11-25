import React from 'react';
import { ZoomIn, ZoomOut, Layers } from 'lucide-react';

export default function MapView() {
  return (
    <div className="bg-emerald-900/30 rounded-xl p-6 backdrop-blur-sm border border-emerald-800/20">
      <div className="relative">
        <div className="h-[400px] bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-100/60">
          [Interactive Map View]
        </div>
        
        {/* Map Controls */}
        <div className="absolute right-4 top-4 flex flex-col gap-2">
          <button className="p-2 bg-emerald-900/60 hover:bg-emerald-900/80 text-white rounded-md backdrop-blur-sm transition-all">
            <ZoomIn className="w-5 h-5" />
          </button>
          <button className="p-2 bg-emerald-900/60 hover:bg-emerald-900/80 text-white rounded-md backdrop-blur-sm transition-all">
            <ZoomOut className="w-5 h-5" />
          </button>
          <button className="p-2 bg-emerald-900/60 hover:bg-emerald-900/80 text-white rounded-md backdrop-blur-sm transition-all">
            <Layers className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}