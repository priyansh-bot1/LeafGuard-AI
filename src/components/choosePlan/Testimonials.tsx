import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "LeafGuard has transformed how we manage our orchard. The AI detection is incredibly accurate.",
    author: "Sarah Johnson",
    role: "Orchard Manager",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013"
  },
  {
    quote: "The real-time alerts have saved us countless times from potential disease outbreaks.",
    author: "Michael Chen",
    role: "Farm Owner",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-6">What others say about us</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-emerald-900/40 p-6 rounded-lg"
          >
            <Quote className="w-8 h-8 text-emerald-400 mb-4" />
            <p className="text-emerald-100/80 mb-6">"{testimonial.quote}"</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="text-white font-medium">{testimonial.author}</div>
                <div className="text-emerald-100/60 text-sm">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}