import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h4 className="text-blue-400 font-bold uppercase tracking-wide text-sm mb-2">Get in Touch</h4>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Talk About Your Project</h2>
              <p className="text-slate-400 leading-relaxed">
                We are always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-1">Email Us</h5>
                  <p className="text-slate-400">hello@modernweb.com</p>
                  <p className="text-slate-400">support@modernweb.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 text-blue-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-1">Call Us</h5>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                  <p className="text-slate-400">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-1">Visit Us</h5>
                  <p className="text-slate-400">123 Tech Avenue, Silicon Valley,</p>
                  <p className="text-slate-400">CA 94025, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white text-slate-900 p-8 md:p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Project Discussion" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;