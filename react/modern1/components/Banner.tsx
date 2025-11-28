import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Banner: React.FC = () => {
  return (
    <section id="home" className="relative pt-20 pb-32 overflow-hidden bg-slate-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-[500px] h-[500px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              Modern React Architecture
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Build Faster with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Smart Design</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              We provide the best architectural foundation for your next big web project. Responsive, scalable, and visually stunning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#about" className="px-8 py-3.5 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2">
                Explore More <ArrowRight size={18} />
              </a>
              <button className="px-8 py-3.5 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm flex items-center gap-2">
                <PlayCircle size={18} /> Watch Demo
              </button>
            </div>
          </div>
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://picsum.photos/800/600?random=1" 
                alt="Modern Workspace" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://picsum.photos/40/40?random=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">1k+ Clients</p>
                  <p className="text-xs text-slate-500">Trusted globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;