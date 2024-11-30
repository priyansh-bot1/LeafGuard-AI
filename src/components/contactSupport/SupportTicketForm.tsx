import React from 'react';
import { Upload } from 'lucide-react';

export default function SupportTicketForm() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-6">Submit a Support Ticket</h2>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-emerald-100/80 mb-2">Name</label>
            <input
              type="text"
              className="w-full bg-emerald-900/40 border border-emerald-800/20 rounded-lg px-4 py-2 text-white"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-emerald-100/80 mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-emerald-900/40 border border-emerald-800/20 rounded-lg px-4 py-2 text-white"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-emerald-100/80 mb-2">Subject</label>
          <input
            type="text"
            className="w-full bg-emerald-900/40 border border-emerald-800/20 rounded-lg px-4 py-2 text-white"
            placeholder="Brief description of your issue"
          />
        </div>

        <div>
          <label className="block text-emerald-100/80 mb-2">Priority</label>
          <select className="w-full bg-emerald-900/40 border border-emerald-800/20 rounded-lg px-4 py-2 text-white">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label className="block text-emerald-100/80 mb-2">Message</label>
          <textarea
            className="w-full bg-emerald-900/40 border border-emerald-800/20 rounded-lg px-4 py-2 text-white h-32"
            placeholder="Describe your issue in detail"
          />
        </div>

        <div>
          <label className="block text-emerald-100/80 mb-2">Attachment</label>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-emerald-900/40 hover:bg-emerald-900/60 text-white rounded-md transition-all flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Choose File
            </button>
            <span className="text-emerald-100/60 text-sm">No file chosen</span>
          </div>
        </div>

        <button className="px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
          Submit Ticket
        </button>
      </form>
    </div>
  );
}