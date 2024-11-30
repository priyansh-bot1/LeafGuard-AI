import React from 'react';
import { Clock } from 'lucide-react';

export default function SupportHours() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <div className="flex items-center gap-3 mb-4">
        <Clock className="w-6 h-6 text-emerald-400" />
        <h2 className="text-xl font-semibold text-white">Support Hours</h2>
      </div>
      
      <p className="text-emerald-100/70">
        Monday - Friday, 9:00 AM - 5:00 PM (EST). Please note, we are closed on major holidays.
      </p>
    </div>
  );
}