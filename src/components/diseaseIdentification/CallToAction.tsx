import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-emerald-900/40 to-emerald-800/40 rounded-2xl p-12 text-center backdrop-blur-sm border border-emerald-700/20">
      <h2 className="text-3xl font-bold text-white mb-6">
        Protect Your Orchards Today!
      </h2>
      <p className="text-emerald-100/80 mb-8 max-w-2xl mx-auto">
        Upload your first set of leaf images for free and experience the power of LeafGuard AI. 
        Transform the way you manage your crops—save time, cut costs, and maximize your yields.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all inline-flex items-center gap-2">
          Get Started Now
          <ArrowRight className="w-4 h-4" />
        </button>
        <button className="px-8 py-3 bg-emerald-900/30 hover:bg-emerald-900/40 text-white rounded-md backdrop-blur-sm transition-all border border-emerald-700/30">
          Learn More
        </button>
      </div>
    </div>
  );
}