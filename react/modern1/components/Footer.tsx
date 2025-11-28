import React from 'react';
import { Hexagon, Twitter, Facebook, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Hexagon size={24} fill="currentColor" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">ModernWeb</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Creating digital masterpieces that drive growth and engagement. We are your partners in digital transformation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#service" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-blue-500 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">App Design</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Cloud Hosting</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe to our newsletter to get latest updates.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white focus:border-blue-600 focus:outline-none transition-colors"
              />
              <button className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} ModernWeb. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>in React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;