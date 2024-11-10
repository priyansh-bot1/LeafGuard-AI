import React from 'react';
import { Leaf } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-[#003025]/50 backdrop-blur-md z-50 border-b border-emerald-900/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Leaf className="h-6 w-6 text-emerald-400" /> 
            <span className="text-xl font-bold text-white">
              LeafGuard <text className="text-xl font-bold text-emerald-400"> AI </text>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Features', 'Monitor', 'Results'].map((item) => (
              <a key={item} href={item === 'Features' ? '/features' : item === 'Home' ? '/home' : '#'} className="text-emerald-100/80 hover:text-emerald-400 transition-colors">
                {item}
              </a>
            ))}
          </div>

          <button className="px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}