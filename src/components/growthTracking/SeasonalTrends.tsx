import React from 'react';
import { BarChart2 } from 'lucide-react';

const yearlyData = [
  { year: '2025', growth: '2.0%', yield: '14,225 kg' },
  { year: '2024', growth: '2.1%', yield: '14,500 kg' },
  { year: '2023', growth: '2.2%', yield: '15,000 kg' }
];

export default function SeasonalTrends() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Seasonal Trends</h2>
        <BarChart2 className="w-5 h-5 text-emerald-400" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-emerald-100/80 text-sm">
              <th className="text-left pb-4">Year</th>
              <th className="text-left pb-4">Growth Rate</th>
              <th className="text-left pb-4">Projected Yield</th>
            </tr>
          </thead>
          <tbody className="text-emerald-100/70">
            {yearlyData.map((data, index) => (
              <tr key={index} className="border-t border-emerald-800/20">
                <td className="py-3">{data.year}</td>
                <td className="py-3">{data.growth}</td>
                <td className="py-3">{data.yield}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}