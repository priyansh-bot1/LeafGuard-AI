import React from 'react';
import { Users, MessageSquare } from 'lucide-react';

export default function CommunityInsights() {
  return (
    <div className="bg-emerald-900/30 p-8 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-2xl font-bold text-white mb-6">Community & Expert Insights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-emerald-900/40 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg font-medium text-white">Join the Community</h3>
          </div>
          <p className="text-emerald-100/70 mb-4">
            Connect with fellow growers, share experiences, and learn from the community.
          </p>
          <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
            Join Discussion
          </button>
        </div>

        <div className="bg-emerald-900/40 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg font-medium text-white">Expert Support</h3>
          </div>
          <p className="text-emerald-100/70 mb-4">
            Get advice from agricultural experts and AI specialists.
          </p>
          <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
            Contact Experts
          </button>
        </div>
      </div>
    </div>
  );
}