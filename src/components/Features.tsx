import React from 'react';
import { Shield, Eye, Activity, Bell, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    title: "Protect Your Orchard",
    description: "Early detection of diseases to protect your valuable crops",
    path: "/protect-orchard"
  },
  {
    icon: <Eye className="w-6 h-6 text-emerald-400" />,
    title: "Real-time Monitoring",
    description: "Continuous monitoring of leaf health with instant alerts",
    path: "/real-time-monitoring"
  },
  {
    icon: <Activity className="w-6 h-6 text-emerald-400" />,
    title: "Disease Analysis",
    description: "Accurate diagnosis of Black Rot, Cedar Rust, and Apple Scab",
    path: "/disease-analysis"
  },
  {
    icon: <Bell className="w-6 h-6 text-emerald-400" />,
    title: "Growth Tracking",
    description: "Monitor healthy growth patterns and development",
    path: "/growth-tracking"
  },
  {
    icon: <Leaf className="w-6 h-6 text-emerald-400" />,
    title: "Leaf Health Map",
    description: "Visual health indicators with color-coded analysis",
    path: "/leaf-health-map"
  }
];

export default function Features() {
  const navigate = useNavigate();

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-emerald-900/20 backdrop-blur-sm p-6 rounded-lg border border-emerald-800/20 hover:bg-emerald-900/30 transition-all duration-300 cursor-pointer"
              onClick={() => feature.path && navigate(feature.path)}
            >
              <div className="inline-block p-3 bg-emerald-900/30 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-emerald-100/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}