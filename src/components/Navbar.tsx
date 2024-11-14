import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'Monitor', path: '/monitor' },
  { name: 'Results', path: '/results' }
];

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-[#003025]/50 backdrop-blur-md z-50 border-b border-emerald-900/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
            <Leaf className="h-6 w-6 text-emerald-400" /> 
            <span className="text-xl font-bold text-white">
              LeafGuard <text className="text-xl font-bold text-emerald-400"> AI </text>
            </span>
        </Link>
          
        <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-emerald-100/80 hover:text-emerald-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button className="px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all" onClick={() => window.location.href = '/get-started'}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}