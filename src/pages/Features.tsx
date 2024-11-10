import React from 'react';
import { Microscope, Bell, Brain, ArrowRight, Leaf, Activity, BarChart3 } from 'lucide-react';

export default function Features() {
  return (
    <div className="pt-20 bg-[#003025]">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-b from-emerald-900/20 to-[#003025]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[28rem] bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013')] bg-cover bg-center opacity-20" />
        
        <div className="relative container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enhancing Crop Health and Yield Through Smart, Scalable Disease Detection
          </h1>
          <p className="text-xl text-emerald-100/80 mb-8 max-w-3xl mx-auto">
            Transform your orchard management with LeafGuard AI's intelligent features, focusing on real-world challenges in crop health, productivity, and proactive disease management.
          </p>
        </div>
      </div>

      {/* Main Features */}
      <div className="container mx-auto px-6 py-20">
        {/* Disease Detection Section */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 mb-6">
                <Microscope className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Disease Detection & Classification
              </h2>
              <p className="text-emerald-100/80 mb-6">
                Our powerful deep-learning model is trained on thousands of images to recognize and classify Black Rot, Cedar Rust, and Apple Scabs—the most common and destructive apple leaf diseases.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-emerald-100/80">Identifies disease markers at both micro and macro levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-emerald-100/80">Captures early signs often missed by the naked eye</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-emerald-100/80">Enables early treatment and minimizes disease spread</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="bg-emerald-900/30 rounded-2xl p-8 backdrop-blur-sm border border-emerald-800/20">
                <img 
                  src="https://images.unsplash.com/photo-1635176502606-de9f27e6833d?q=80&w=2070" 
                  alt="AI Disease Detection" 
                  className="rounded-lg w-full h-64 object-cover mb-6"
                />
                <h3 className="text-xl font-semibold text-white mb-3">AI Disease Detection Visualization</h3>
                <p className="text-emerald-100/70">Real-time visualization of disease detection and classification process.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real-Time Monitoring Section */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 mb-6">
                <Activity className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Continuous Real-Time Monitoring
              </h2>
              <p className="text-emerald-100/80 mb-6">
                Our 24/7 monitoring system consistently analyzes new images to assess crop health across your entire orchard, providing immediate alerts and insights.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Bell className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-emerald-100/80">Automated alerts and notifications for immediate response</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-emerald-100/80">Comprehensive monitoring insights for overall crop health</span>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-emerald-100/80">Efficient resource allocation by targeting specific affected areas</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="bg-emerald-900/30 rounded-2xl p-8 backdrop-blur-sm border border-emerald-800/20">
                <img 
                  src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2069" 
                  alt="Real-Time Monitoring Dashboard" 
                  className="rounded-lg w-full h-64 object-cover mb-6"
                />
                <h3 className="text-xl font-semibold text-white mb-3">Real-Time Monitoring Dashboard</h3>
                <p className="text-emerald-100/70">Live monitoring and analysis of orchard health status.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Disease Analysis Section */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 mb-6">
                <Brain className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Advanced Disease Analysis & Forecasting
              </h2>
              <p className="text-emerald-100/80 mb-6">
                Transform raw data into actionable insights with our comprehensive disease analysis module, enabling proactive orchard management.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-emerald-100/80">Impact and spread analysis for prioritizing actions</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-emerald-100/80">Customized treatment recommendations and best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-emerald-100/80">Forecasting future disease risks for proactive management</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="bg-emerald-900/30 rounded-2xl p-8 backdrop-blur-sm border border-emerald-800/20">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070" 
                  alt="Disease Forecasting" 
                  className="rounded-lg w-full h-64 object-cover mb-6"
                />
                <h3 className="text-xl font-semibold text-white mb-3">Disease Forecasting Graph</h3>
                <p className="text-emerald-100/70">Predictive analytics for disease outbreak prevention.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to transform your orchard management?
          </h2>
          <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
            Get Started with LeafGuard AI
          </button>
        </div>
      </div>
    </div>
  );
}