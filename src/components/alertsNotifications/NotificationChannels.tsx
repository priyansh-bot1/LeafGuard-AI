import React from 'react';
import { Mail, MessageSquare, Bell } from 'lucide-react';

const channels = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: 'Email Alerts',
    description: 'Detailed reports and insights delivered to your inbox'
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: 'SMS Notifications',
    description: 'Instant updates for urgent issues requiring immediate attention'
  },
  {
    icon: <Bell className="w-5 h-5" />,
    title: 'Push Notifications',
    description: 'Real-time alerts through the LeafGuard mobile app'
  }
];

export default function NotificationChannels() {
  return (
    <div className="bg-emerald-900/30 p-8 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-2xl font-bold text-white mb-6">Multi-Channel Notifications</h2>
      
      <div className="space-y-6">
        {channels.map((channel, index) => (
          <div key={index} className="flex items-start gap-4 bg-emerald-900/40 p-4 rounded-lg">
            <div className="text-emerald-400">{channel.icon}</div>
            <div>
              <h3 className="text-white font-medium mb-1">{channel.title}</h3>
              <p className="text-emerald-100/70 text-sm">{channel.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}