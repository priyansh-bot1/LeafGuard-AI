import React from 'react';
import { 
  BarChart2, 
  AlertTriangle, 
  Map, 
  Download, 
  FileSpreadsheet, 
  Share2,
  Bell,
  Thermometer,
  Activity,
  Eye
} from 'lucide-react';

// Mock data for demonstration
const healthStatus = {
  healthy: 75,
  diseased: 25,
  diseases: {
    blackRot: 15,
    cedarRust: 10
  }
};

const riskLevels = [
  { level: 'High', color: 'bg-red-500', count: 3 },
  { level: 'Moderate', color: 'bg-yellow-500', count: 7 },
  { level: 'Low', color: 'bg-green-500', count: 15 }
];

export default function Results() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Dashboard Snapshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Tree Health Status */}
          <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
            <h3 className="text-lg font-semibold text-white mb-4">Tree Health Status</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-emerald-100/80 mb-1">
                  <span>Healthy Trees</span>
                  <span>{healthStatus.healthy}%</span>
                </div>
                <div className="w-full bg-emerald-900/40 rounded-full h-2">
                  <div 
                    className="bg-emerald-500 h-2 rounded-full" 
                    style={{ width: `${healthStatus.healthy}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-emerald-100/80 mb-1">
                  <span>Diseased Trees</span>
                  <span>{healthStatus.diseased}%</span>
                </div>
                <div className="w-full bg-emerald-900/40 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full" 
                    style={{ width: `${healthStatus.diseased}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Disease Prevalence */}
          <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
            <h3 className="text-lg font-semibold text-white mb-4">Disease Prevalence</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-emerald-100/80 mb-1">
                  <span>Black Rot</span>
                  <span>{healthStatus.diseases.blackRot}%</span>
                </div>
                <div className="w-full bg-emerald-900/40 rounded-full h-2">
                  <div 
                    className="bg-yellow-500 h-2 rounded-full" 
                    style={{ width: `${healthStatus.diseases.blackRot}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-emerald-100/80 mb-1">
                  <span>Cedar Rust</span>
                  <span>{healthStatus.diseases.cedarRust}%</span>
                </div>
                <div className="w-full bg-emerald-900/40 rounded-full h-2">
                  <div 
                    className="bg-orange-500 h-2 rounded-full" 
                    style={{ width: `${healthStatus.diseases.cedarRust}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Treatment Urgency */}
          <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
            <h3 className="text-lg font-semibold text-white mb-4">Treatment Urgency</h3>
            <div className="space-y-3">
              {riskLevels.map((risk, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${risk.color}`} />
                  <span className="text-emerald-100/80 text-sm">{risk.level}</span>
                  <span className="text-emerald-100/60 text-sm ml-auto">{risk.count} areas</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disease-Specific Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Disease Analysis</h3>
              <Activity className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="h-64 bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-100/60">
              [Disease Analysis Chart]
            </div>
          </div>

          <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Risk Zones</h3>
              <Map className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="h-64 bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-100/60">
              [Interactive Risk Zone Map]
            </div>
          </div>
        </div>

        {/* Export Options */}
        <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20 mb-8">
          <h3 className="text-lg font-semibold text-white mb-6">Export & Share Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
              <Download className="w-4 h-4" />
              Export as PDF
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
              <FileSpreadsheet className="w-4 h-4" />
              Export as Excel
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
              <Share2 className="w-4 h-4" />
              Share Report
            </button>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Interactive Orchard Map</h3>
              <Eye className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="h-64 bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-100/60">
              [Real-Time Orchard Health Map]
            </div>
          </div>

          <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Custom Alerts & Notifications</h3>
              <Bell className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-yellow-900/40 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-100/80">Set threshold-based alerts</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-900/40 rounded-lg">
                <Thermometer className="w-5 h-5 text-blue-400" />
                <span className="text-blue-100/80">Environmental factor integration</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-red-900/40 rounded-lg">
                <BarChart2 className="w-5 h-5 text-red-400" />
                <span className="text-red-100/80">Environmental factor integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}