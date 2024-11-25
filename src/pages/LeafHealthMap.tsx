import React from 'react';
import MapView from '../components/leafHealthMap/MapView';
import HealthMetrics from '../components/leafHealthMap/HealthMetrics';
import HotspotsList from '../components/leafHealthMap/HotspotsList';
import QuickActions from '../components/leafHealthMap/QuickActions';

export default function LeafHealthMap() {
  return (
    <div className="pt-20 min-h-screen bg-[#003025]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">Leaf Health Map</h1>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-md transition-all">
              Capture
            </button>
            <button className="px-4 py-2 bg-purple-500 hover:bg-purple-400 text-white rounded-md transition-all">
              AI Analysis
            </button>
            <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
              Export
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <MapView />
          <HealthMetrics />
          <HotspotsList />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}