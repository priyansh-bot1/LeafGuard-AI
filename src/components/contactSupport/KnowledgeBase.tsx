import React from 'react';
import { BookOpen, Phone, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Basic Guide',
    link: '/explore-resources'
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: 'Troubleshooting',
    link: '/explore-resources'
  },
  {
    icon: <HelpCircle className="w-5 h-5" />,
    title: 'FAQs',
    link: '/explore-resources'
  }
];

export default function KnowledgeBase() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-6">Knowledge Base</h2>
      <p className="text-emerald-100/70 mb-6">
        Need help now? Browse our Knowledge Base for quick answers before reaching out to support.
      </p>
      
      <div className="flex flex-wrap gap-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.link}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-900/40 hover:bg-emerald-900/60 text-white rounded-md transition-all"
          >
            {category.icon}
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
}