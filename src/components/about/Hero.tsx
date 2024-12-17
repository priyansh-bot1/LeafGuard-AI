import React from 'react';

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-b from-emerald-900/20 to-[#003025]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-[28rem] bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013')] bg-cover bg-center opacity-20" />
      
      <div className="relative container mx-auto px-6 py-24">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Revolutionizing Orchard Management
        </h1>
        <p className="text-lg md:text-xl text-emerald-100/80 mb-8 max-w-3xl">
          At LeafGuard AI, we're transforming agriculture through cutting-edge artificial intelligence 
          and a deep commitment to sustainable farming practices.
        </p>
      </div>
    </div>
  );
}