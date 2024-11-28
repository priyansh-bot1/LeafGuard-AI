import React from 'react';
import { LineChart, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function HistoricalData() {
  return (
    <div className="bg-emerald-900/30 rounded-xl p-6 backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-6">Historical Data Tracking</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-emerald-100/80">Disease Trends (2024)</h3>
            <LineChart className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="h-48 bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-100/60">
            [Line Graph]
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-emerald-100/80">Treatment Effectiveness</h3>
            <BarChart2 className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="h-48 bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-100/60">
            [Bar Chart]
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-emerald-100/80 mb-4">Seasonal Disease Map</h3>
        <div className="h-64 bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-100/60 mb-4">
          [Interactive Seasonal Map]
        </div>
        <Link to="/historical-analysis">
        <button className="text-emerald-400 hover:text-emerald-300 text-sm">
          View Detailed Historical Analysis
        </button>
        </Link>
      </div>
    </div>
  );
}