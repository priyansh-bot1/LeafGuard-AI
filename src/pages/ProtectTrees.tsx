import React from 'react';
import { Shield, Leaf, Bell, LineChart } from 'lucide-react';
import ProtectionFeatures from '../components/protectTrees/ProtectionFeatures';
import HealthMonitoring from '../components/protectTrees/HealthMonitoring';
import BusinessValue from '../components/protectTrees/BusinessValue';
import CallToAction from '../components/protectTrees/CallToAction';

export default function ProtectTrees() {
  return (
    <div className="pt-20 min-h-screen bg-[#003025]">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-b from-emerald-900/20 to-[#003025]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[28rem] bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013')] bg-cover bg-center opacity-20" />
        
        <div className="relative container mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Protect Your Trees with LeafGuard AI
          </h1>
          <p className="text-xl text-emerald-100/80 mb-8 max-w-3xl">
            Ensure the health of your orchard with cutting-edge disease detection technology. 
            Monitor, prevent, and optimize your yield through early detection and proactive management.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <ProtectionFeatures />
        <HealthMonitoring />
        <BusinessValue />
        <CallToAction />
      </div>
    </div>
  );
}