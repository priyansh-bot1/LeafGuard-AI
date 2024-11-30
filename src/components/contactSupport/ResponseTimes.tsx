import React from 'react';
import { Clock, Mail, Phone, MessageSquare, Ticket } from 'lucide-react';

const responseTimes = [
  {
    icon: <Mail className="w-5 h-5" />,
    channel: 'Email',
    time: 'Expect a response within 24-48 hours'
  },
  {
    icon: <Phone className="w-5 h-5" />,
    channel: 'Phone',
    time: 'For agents are busy, expect a wait of 2-5 minutes'
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    channel: 'Live Chat',
    time: 'Instant responses from our support team (during business hours)'
  },
  {
    icon: <Ticket className="w-5 h-5" />,
    channel: 'Support Ticket',
    time: 'Tickets are typically resolved within 2-3 business days'
  }
];

export default function ResponseTimes() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <div className="flex items-center gap-3 mb-6">
        <Clock className="w-6 h-6 text-emerald-400" />
        <h2 className="text-xl font-semibold text-white">Expected Response Times</h2>
      </div>
      
      <div className="space-y-4">
        {responseTimes.map((item, index) => (
          <div 
            key={index}
            className="flex items-center gap-4 bg-emerald-900/40 p-4 rounded-lg"
          >
            <div className="text-emerald-400">{item.icon}</div>
            <div>
              <span className="text-white font-medium">{item.channel}:</span>
              <span className="text-emerald-100/70 ml-2">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}