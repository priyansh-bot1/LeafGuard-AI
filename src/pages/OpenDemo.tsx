import React from 'react';
import DemoUploader from '../components/demo/DemoUploader';
import DemoResults from '../components/demo/DemoResults';
import DemoWalkthrough from '../components/demo/DemoWalkthrough';
import DemoMetrics from '../components/demo/DemoMetrics';
import { ArrowRight } from 'lucide-react';

export default function OpenDemo() {
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
            Experience LeafGuard AI's Revolutionary Disease Detection
          </h1>
          <p className="text-xl text-emerald-100/80 mb-8 max-w-3xl mx-auto">
            Upload a leaf image or try our demo samples to see how LeafGuard AI instantly detects and diagnoses plant diseases.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Interactive Demo Section */}
        <div className="mb-20">
          <DemoUploader />
          <DemoResults />
        </div>

        {/* Guided Walkthrough */}
        <div className="mb-20">
          <DemoWalkthrough />
        </div>

        {/* Metrics and Impact */}
        <div className="mb-20">
          <DemoMetrics />
        </div>

        {/* CTA Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Crop Management?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all inline-flex items-center gap-2">
              Schedule Live Demo
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 bg-emerald-900/30 hover:bg-emerald-900/40 text-white rounded-md backdrop-blur-sm transition-all border border-emerald-700/30">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}