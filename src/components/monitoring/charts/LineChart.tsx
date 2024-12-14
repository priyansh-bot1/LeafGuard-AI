import React from 'react';
import { LineChart as LineChartIcon, Circle } from 'lucide-react';

// Mock data for health trends
const healthData = [
  { month: 'Jan', value: 85 },
  { month: 'Feb', value: 82 },
  { month: 'Mar', value: 88 },
  { month: 'Apr', value: 85 },
  { month: 'May', value: 90 },
  { month: 'Jun', value: 87 },
];

export default function LineChart() {
  const maxValue = Math.max(...healthData.map(d => d.value));
  const minValue = Math.min(...healthData.map(d => d.value));
  const range = maxValue - minValue;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-white">Health Progression</h3>
        <LineChartIcon className="w-5 h-5 text-emerald-400" />
      </div>

      <div className="relative h-48">
        <div className="absolute inset-0 flex items-end justify-between">
          {healthData.map((point, index) => {
            const height = ((point.value - minValue) / range) * 100;
            return (
              <div 
                key={index}
                className="relative flex flex-col items-center"
                style={{ height: '100%' }}
              >
                <div 
                  className="absolute bottom-0 w-2 bg-emerald-500/40 rounded-t-full transition-all duration-500"
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Circle className="w-2 h-2 text-emerald-400 fill-emerald-400" />
                  </div>
                </div>
                <div className="absolute bottom-0 transform -translate-y-6 text-emerald-100/60 text-sm">
                  {point.month}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex justify-between text-sm text-emerald-100/60">
        <div>Lowest: {minValue}%</div>
        <div>Average: {Math.round(healthData.reduce((acc, curr) => acc + curr.value, 0) / healthData.length)}%</div>
        <div>Highest: {maxValue}%</div>
      </div>
    </div>
  );
}