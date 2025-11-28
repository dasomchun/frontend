import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    "Responsive Design Methodology",
    "Component-Based Architecture",
    "Performance Optimization",
    "Modern TypeScript Standards"
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
             <div className="absolute top-0 left-0 w-full h-full bg-slate-100 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
             <img 
              src="https://picsum.photos/600/700?random=2" 
              alt="About Us" 
              className="rounded-2xl shadow-lg w-full object-cover h-[500px]"
             />
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="text-blue-600 font-bold uppercase tracking-wide text-sm mb-2">About Us</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              We Create Digital Experiences That Resonate
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our team of dedicated engineers and designers work tirelessly to bring your vision to life. We believe in clean code, sustainable design, and user-centric interfaces that drive engagement and growth.
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2 group">
              Learn more about our team 
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;