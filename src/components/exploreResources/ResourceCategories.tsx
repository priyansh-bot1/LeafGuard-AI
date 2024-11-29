import React from 'react';
import { BookOpen, FileText, Users, Newspaper, Video } from 'lucide-react';

const categories = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Articles Library',
    description: 'In-depth articles on orchard management and disease prevention'
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Case Studies',
    description: 'Real-world examples of successful implementation'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Community & Expert Insights',
    description: 'Learn from experienced growers and industry experts'
  },
  {
    icon: <Newspaper className="w-6 h-6" />,
    title: 'Interactive Tools',
    description: 'Hands-on tools for better decision making'
  },
  {
    icon: <Newspaper className="w-6 h-6" />,
    title: 'Best Practices',
    description: 'Guidelines for optimal orchard management'
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: 'Video Guides',
    description: 'Step-by-step visual tutorials and demonstrations'
  }
];

export default function ResourceCategories() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Resource Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20 hover:bg-emerald-900/40 transition-all cursor-pointer"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/20 text-emerald-400 mb-4">
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
            <p className="text-emerald-100/70">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}