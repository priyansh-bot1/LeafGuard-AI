import React from 'react';
import AlertSettings from '../components/alertsNotifications/AlertSettings';
import NotificationChannels from '../components/alertsNotifications/NotificationChannels';
import AlertInsights from '../components/alertsNotifications/AlertInsights';
import DeviceIntegration from '../components/alertsNotifications/DeviceIntegration';
import BusinessValue from '../components/alertsNotifications/BusinessValue';
import ExampleUseCase from '../components/alertsNotifications/ExampleUseCase';

export default function AlertsNotifications() {
  return (
    <div className="pt-20 min-h-screen bg-[#003025]">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-b from-emerald-900/20 to-[#003025]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[28rem] bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013')] bg-cover bg-center opacity-20" />
        
        <div className="relative container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Orchard's Health, Always Within Reach
          </h1>
          <p className="text-xl text-emerald-100/80 mb-8 max-w-3xl mx-auto">
            LeafGuard AI takes the guesswork out of orchard management by providing real-time alerts 
            whenever potential issues are detected.
          </p>
          <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
            Get Started
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AlertSettings />
            <NotificationChannels />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AlertInsights />
            <DeviceIntegration />
          </div>
          <BusinessValue />
          <ExampleUseCase />
        </div>
      </div>
    </div>
  );
}