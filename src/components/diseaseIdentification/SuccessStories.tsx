import React from 'react';
import { Quote } from 'lucide-react';

const stories = [
  {
    name: 'John Doe',
    location: 'Apple Orchard, Washington State',
    quote: 'LeafGuard AI was a game-changer for us—it pinpointed the problem right away and saved us time and money!',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013'
  },
  {
    name: 'Jane Smith',
    location: 'Sustainable Orchard, New York',
    quote: 'Using targeted treatments recommended by LeafGuard AI, we improved both our crop health and our environmental footprint.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013'
  }
];

export default function SuccessStories() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-white mb-12">Success Stories</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-emerald-900/30 p-8 rounded-xl backdrop-blur-sm border border-emerald-800/20"
          >
            <Quote className="w-8 h-8 text-emerald-400 mb-6" />
            <p className="text-emerald-100/80 text-lg mb-6">"{story.quote}"</p>
            <div className="flex items-center gap-4">
              <img
                src={story.image}
                alt={story.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-white font-medium">{story.name}</h3>
                <p className="text-emerald-100/60 text-sm">{story.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}