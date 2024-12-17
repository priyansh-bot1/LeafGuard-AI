import React from 'react';
import { Github, Facebook, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github className="w-5 h-5" />,
    url: 'https://github.com/ALGOREX-PH',
    color: 'hover:bg-gray-700'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    url: 'https://www.linkedin.com/in/algorexph/',
    color: 'hover:bg-blue-600'
  },
  {
    name: 'Facebook',
    icon: <Facebook className="w-5 h-5" />,
    url: 'https://www.facebook.com/debbie.meer/',
    color: 'hover:bg-blue-500'
  }
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 bg-emerald-900/40 ${link.color} text-white rounded-lg transition-all hover:scale-110 backdrop-blur-sm border border-emerald-800/20`}
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}