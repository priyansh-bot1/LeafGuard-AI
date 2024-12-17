import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/home' },
  { name: 'Features', path: '/features' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Support', path: '/support' }
];

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/debbie.meer/', label: 'Facebook' },
  { icon: <Twitter className="w-5 h-5" />, href: 'https://www.facebook.com/debbie.meer/', label: 'Twitter' },
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/algorexph/', label: 'LinkedIn' },
  { icon: <Instagram className="w-5 h-5" />, href: 'https://www.facebook.com/debbie.meer/', label: 'Instagram' }
];

export default function Footer() {
  return (
    <footer className="bg-[#002820]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">About LeafGuard AI</h3>
            <p className="text-emerald-100/70 text-sm">
              Empowering orchards with advanced AI technology for disease management
              and healthier crops.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-emerald-100/70 hover:text-emerald-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-emerald-100/70 text-sm">
                Email: support@leafguardai.com
              </p>
              <p className="text-emerald-100/70 text-sm">
                Phone: (555) 123-4567
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-emerald-100/70 hover:text-emerald-400 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-emerald-900/50 mt-12 pt-8">
          <p className="text-center text-emerald-100/70 text-sm">
            © {new Date().getFullYear()} LeafGuard AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}