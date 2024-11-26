import React from 'react';
import { Apple, Bell, Leaf, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: <Apple className="w-6 h-6" />,
    title: "Disease Identification",
    description: "Early detection system for common plant diseases using advanced AI",
    path: "/disease-identification"
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Alerts & Notifications",
    description: "Real-time alerts when potential issues are detected in your orchard",
    path: "/alerts-notifications"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Health Analysis",
    description: "Comprehensive health reports with actionable insights",
    path: "/health-analysis"
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Growth Monitoring",
    description: "Track and analyze growth patterns for optimal yield"
  }
];

export default function ProtectOrchard() {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-b from-emerald-900/20 to-[#003025]" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 right-0 h-[28rem] bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013')] bg-cover bg-center opacity-20" />
        
        <div className="relative container mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Protect Your Orchard
          </h1>
          <p className="text-xl text-emerald-100/80 mb-8 max-w-2xl">
            Monitor and protect your plants with early disease detection. Our advanced AI system helps you maintain optimal orchard health.
          </p>
          <button 
            onClick={() => navigate('/protect-trees')}
            className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all"
          >
            Protect Your Trees
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-emerald-900/20 backdrop-blur-sm p-8 rounded-xl border border-emerald-800/20 hover:bg-emerald-900/30 transition-all duration-300 cursor-pointer"
              onClick={() => feature.path && navigate(feature.path)}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/20 text-emerald-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-emerald-100/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-emerald-900/40 to-emerald-800/40 rounded-2xl p-12 text-center backdrop-blur-sm border border-emerald-700/20">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to protect your orchard?
          </h2>
          <p className="text-emerald-100/80 mb-8 max-w-2xl mx-auto">
            Join thousands of orchard owners who trust LeafGuard AI for their plant protection needs.
          </p>
          <button 
            onClick={() => navigate('/protect-trees')}
            className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}