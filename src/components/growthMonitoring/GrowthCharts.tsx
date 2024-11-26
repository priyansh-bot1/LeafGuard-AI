import React from 'react';
import { LineChart, Maximize2, ArrowUpRight } from 'lucide-react';

const charts = [
  {
    title: 'Canopy Size',
    description: 'Average canopy growth trends'
  },
  {
    title: 'Average Fruit Size',
    description: 'Fruit development progression'
  },
  {
    title: 'Trunk Diameter',
    description: 'Tree growth measurements'
  }
];

export default function GrowthCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {charts.map((chart, index) => (
        <div 
          key={index}
          className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-white font-medium mb-1">{chart.title}</h3>
              <p className="text-sm text-emerald-100/60">{chart.description}</p>
            </div>
            <LineChart className="w-5 h-5 text-emerald-400" />
          </div>
          
          <div className="relative">
            <div className="h-48 bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-100/60">
              [Growth Chart Visualization]
            </div>
            <button className="absolute top-2 right-2 p-1 bg-emerald-900/60 hover:bg-emerald-900/80 rounded-md text-emerald-400">
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-emerald-100/60">Last 30 days</span>
            <div className="flex items-center gap-1 text-emerald-400">
              <ArrowUpRight className="w-4 h-4" />
              <span>8.2%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}