import React from 'react';
import { Filter, Download, Share2 } from 'lucide-react';

export default function AdvancedFiltering() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Advanced Filtering</h2>
        <div className="flex gap-3">
          <button className="px-4 py-2 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
            <Download className="w-4 h-4" />
            Export Data
          </button>
          <button className="px-4 py-2 flex items-center gap-2 bg-emerald-900/40 hover:bg-emerald-900/60 text-white rounded-md transition-all">
            <Share2 className="w-4 h-4" />
            Share Report
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <button className="px-4 py-2 bg-emerald-900/40 hover:bg-emerald-900/60 text-white rounded-md transition-all">
          All Sections
        </button>
        <button className="px-4 py-2 bg-emerald-900/40 hover:bg-emerald-900/60 text-white rounded-md transition-all">
          All Tree Varieties
        </button>
        <button className="px-4 py-2 bg-emerald-900/40 hover:bg-emerald-900/60 text-white rounded-md transition-all">
          All Conditions
        </button>
        <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
          Apply Filter
        </button>
      </div>

      <div className="h-64 bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-100/60">
        [Filtered Data Visualization]
      </div>
    </div>
  );
}