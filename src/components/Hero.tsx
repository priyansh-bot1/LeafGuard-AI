import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-[72vh] flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            LeafGuard{' '}
            <span className="text-emerald-400">
              AI
            </span>
          </h1>
          <p className="text-xl text-emerald-100/80 mb-8 leading-relaxed">
            The smart way to detect and diagnose leaf diseases. Our AI-powered system helps
            protect your orchard with real-time monitoring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to = "/get-started">
            <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
              Get Started Free
            </button>
            </Link>
            <Link to = "/open-demo">
            <button className="px-8 py-3 bg-emerald-900/30 hover:bg-emerald-900/40 text-white rounded-md backdrop-blur-sm transition-all border border-emerald-700/30">
              Open Demo
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}