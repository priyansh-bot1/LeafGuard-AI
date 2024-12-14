import React from 'react';
import { Map, ZoomIn, ZoomOut } from 'lucide-react';

// Mock data for the heatmap
const heatmapData = [
  { section: 'A1', value: 85, color: 'bg-emerald-500/40' },
  { section: 'A2', value: 65, color: 'bg-yellow-500/40' },
  { section: 'A3', value: 45, color: 'bg-red-500/40' },
  { section: 'B1', value: 75, color: 'bg-emerald-500/40' },
  { section: 'B2', value: 55, color: 'bg-yellow-500/40' },
  { section: 'B3', value: 90, color: 'bg-emerald-500/40' },
];

export default function HeatmapChart() {
  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-white">Disease Distribution Heatmap</h3>
        <Map className="w-5 h-5 text-emerald-400" />
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-4">
        {heatmapData.map((cell, index) => (
          <div key={index} className={`${cell.color} p-4 rounded-lg`}>
            <div className="text-white font-medium mb-1">Section {cell.section}</div>
            <div className="text-emerald-100/80 text-sm">{cell.value}% Health</div>
          </div>
        ))}
      </div>

      <div className="absolute right-2 top-12 flex flex-col gap-2">
        <button className="p-2 bg-emerald-900/60 hover:bg-emerald-900/80 text-white rounded-md backdrop-blur-sm">
          <ZoomIn className="w-4 h-4" />
        </button>
        <button className="p-2 bg-emerald-900/60 hover:bg-emerald-900/80 text-white rounded-md backdrop-blur-sm">
          <ZoomOut className="w-4 h-4" />
        </button>
      </div>

      <div className="flex justify-between text-sm text-emerald-100/60 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-500/40 rounded-full"></div>
          <span>Healthy (75-100%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-500/40 rounded-full"></div>
          <span>Warning (50-74%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500/40 rounded-full"></div>
          <span>Critical (&lt;50%)</span>
        </div>
      </div>
    </div>
  );
}