import React from 'react';
import { Leaf } from 'lucide-react';

export default function Mission() {
  return (
    <div className="container mx-auto px-6 pb-20">
      <div className="bg-gradient-to-r from-emerald-900/40 to-emerald-800/40 rounded-2xl p-6 md:p-12 text-center backdrop-blur-sm border border-emerald-700/20">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 mb-6">
          <Leaf className="w-8 h-8" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Our Mission
        </h2>
        <p className="text-base md:text-lg text-emerald-100/80 mb-8 max-w-3xl mx-auto">
          To revolutionize orchard management through AI-driven solutions that enhance crop health, 
          maximize yields, and promote sustainable farming practices. We believe in empowering farmers 
          with technology that makes precision agriculture accessible and effective.
        </p>
        <button className="px-6 md:px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
          Join Our Mission
        </button>
      </div>
    </div>
  );
}