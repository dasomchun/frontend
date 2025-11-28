import React from 'react';
import { Code2, Smartphone, BarChart3, Globe, Shield, Zap } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with React, TypeScript, and Node.js for scalable performance.',
    icon: <Code2 className="w-8 h-8 text-white" />,
  },
  {
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile apps that provide seamless user experiences on iOS and Android.',
    icon: <Smartphone className="w-8 h-8 text-white" />,
  },
  {
    title: 'Data Analytics',
    description: 'Transform your raw data into actionable insights with our advanced dashboard solutions.',
    icon: <BarChart3 className="w-8 h-8 text-white" />,
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your visibility on search engines and drive organic traffic to your platform.',
    icon: <Globe className="w-8 h-8 text-white" />,
  },
  {
    title: 'Cyber Security',
    description: 'Protect your digital assets with enterprise-grade security protocols and audits.',
    icon: <Shield className="w-8 h-8 text-white" />,
  },
  {
    title: 'Cloud Services',
    description: 'Reliable cloud infrastructure setup and management for 99.9% uptime guarantees.',
    icon: <Zap className="w-8 h-8 text-white" />,
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section id="service" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-blue-600 font-bold uppercase tracking-wide text-sm mb-2">Our Services</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Offer</h2>
          <p className="text-slate-600 text-lg">
            Comprehensive digital solutions tailored to your business needs. We handle the tech so you can focus on growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
                Learn Details <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;