import React from 'react';
import { BookOpen, HeadphonesIcon, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Knowledge Base',
    description: 'Access our extensive library of articles and FAQs.',
    action: 'Explore Resources',
    link: '/explore-resources'
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    title: 'Customer Support',
    description: 'Get help from our dedicated support team.',
    action: 'Contact Support',
    link: '/contact-support'
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Live Chat',
    description: 'Real-time assistance for immediate help.',
    action: 'Start Chat',
    link: '#'
  }
];

export default function SupportResources() {
  return (
    <div className="mb-20">
      <h2 className="text-2xl font-bold text-white mb-12 text-center">
        Comprehensive Support & Resources
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-emerald-900/30 p-8 rounded-xl backdrop-blur-sm border border-emerald-800/20"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/20 text-emerald-400 mb-6">
              {resource.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {resource.title}
            </h3>
            <p className="text-emerald-100/70 mb-6">
              {resource.description}
            </p>
            <Link
              to={resource.link}
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              {resource.action} →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}