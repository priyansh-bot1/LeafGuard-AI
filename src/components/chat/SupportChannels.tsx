import React from 'react';
import { Mail, Phone, MessageSquare, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

const channels = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email Support',
    description: 'Submit your detailed inquiry, and a support agent will respond within 24 hours.',
    action: 'Send Email',
    link: 'mailto:support@leafguard.ai'
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone Support',
    description: 'Call us during business hours for immediate assistance with complex issues.',
    action: 'Call Now',
    link: 'tel:+1234567890'
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Live Chat',
    description: 'Chat with a support agent now for instant answers to your questions.',
    action: 'Start Chat',
    link: '/start-chat'
  },
  {
    icon: <Ticket className="w-6 h-6" />,
    title: 'Support Ticket',
    description: 'Submit a detailed ticket for complex issues that require investigation.',
    action: 'Create Ticket',
    link: '#ticket-form'
  }
];

export default function SupportChannels() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {channels.map((channel, index) => (
        <div
          key={index}
          className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/20 text-emerald-400 mb-4">
            {channel.icon}
          </div>
          <h3 className="text-lg font-medium text-white mb-2">{channel.title}</h3>
          <p className="text-emerald-100/70 mb-4">{channel.description}</p>
          {channel.title === 'Live Chat' ? (
            <Link
              to={channel.link}
              className="inline-block px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all"
            >
              {channel.action}
            </Link>
          ) : (
            <a
              href={channel.link}
              className="inline-block px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all"
            >
              {channel.action}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}