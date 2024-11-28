import React from 'react';
import AlertHeader from '../components/alertDetails/AlertHeader';
import DiagnosticsPanel from '../components/alertDetails/DiagnosticsPanel';
import ActionPanel from '../components/alertDetails/ActionPanel';
import ActionTracker from '../components/alertDetails/ActionTracker';

export default function AlertDetails() {
  return (
    <div className="pt-20 min-h-screen bg-[#003025]">
      <div className="container mx-auto px-6 py-8">
        <div className="space-y-6">
          <AlertHeader 
            severity="High"
            type="Fungal Infection"
            timestamp="March 15, 2025 at 10:23 AM"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DiagnosticsPanel />
            <ActionPanel />
          </div>

          <ActionTracker />
        </div>
      </div>
    </div>
  );
}