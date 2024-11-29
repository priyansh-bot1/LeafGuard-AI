import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-b from-emerald-900/20 to-[#003025]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-[28rem] bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013')] bg-cover bg-center opacity-20" />
      
      <div className="relative container mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Unlock the Full Potential of LeafGuard AI
        </h1>
        <p className="text-xl text-emerald-100/80 mb-8 max-w-3xl">
          Explore our comprehensive resources designed to help you maximize the benefits 
          of LeafGuard AI and improve your orchard management strategies.
        </p>
        
        <div className="max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full bg-emerald-900/40 border border-emerald-800/20 rounded-lg px-4 py-3 pl-12 text-white placeholder-emerald-100/60"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-400 w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}