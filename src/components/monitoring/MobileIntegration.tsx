import React from 'react';
import { Smartphone, Download } from 'lucide-react';

export default function MobileIntegration() {
  return (
    <div className="bg-emerald-900/30 rounded-xl p-8 backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-2xl font-semibold text-white mb-8">Mobile Integration</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-lg">
          <p className="text-emerald-100/80 mb-6">
            Stay updated on-the-go with our mobile app. Get real-time alerts, view dashboards, and manage your orchard from anywhere.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-900 text-white rounded-md transition-all">
              <Download className="w-5 h-5" />
              App Store
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
              <Download className="w-5 h-5" />
              Google Play
            </button>
          </div>
        </div>
        
        <div className="flex-shrink-0">
          <Smartphone className="w-32 h-32 text-emerald-400" />
        </div>
      </div>
    </div>
  );
}