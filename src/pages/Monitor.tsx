import React from 'react';
import RealTimeAlerts from '../components/monitor/RealTimeAlerts';
import HealthOverview from '../components/monitor/HealthOverview';
import HistoricalData from '../components/monitor/HistoricalData';

export default function Monitor() {
  return (
    <div className="pt-20 min-h-screen bg-[#003025]">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-white mb-8">Orchard Monitor</h1>
        
        <div className="space-y-6">
          <RealTimeAlerts />
          <HealthOverview />
          <HistoricalData />
        </div>
      </div>
    </div>
  );
}