import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

import heroImage from '../assets/hero.jpg'; 

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[80px] -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            {COMPANY_INFO.tagline}
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight mb-6">
            We help brands <br />
            communicate <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">creatively.</span>
          </h1>
          
          <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
            {COMPANY_INFO.intro}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2">
              Start a Project <ArrowRight size={18} />
            </a>
            <a href="#work" className="px-8 py-4 bg-slate-900 border border-slate-700 text-white rounded-full font-medium hover:border-slate-500 transition text-center">
              View Portfolio
            </a>
          </div>
        </div>

        <div className="relative">
          {/* Main Image Container */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group">
            
            {/* 2. THE IMAGE IS RENDERED HERE */}
            <img 
              src={heroImage} 
              alt="Agency Workspace" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
            />
            
            {/* Dark Gradient Overlay (Makes text readable) */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10"></div>

            {/* Optional Play Button (Centered) */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 transition">
                    <Play size={32} className="text-white fill-white ml-1" />
                </div>
            </div>
            
            {/* Floating Card (Positioned on top of the image) */}
            <div className="absolute bottom-6 left-6 right-6 z-20 bg-slate-950/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl flex items-center justify-between shadow-xl">
              <div>
                <p className="text-slate-200 font-bold">Creative Driven</p>
                <p className="text-slate-400 text-xs">Strategy & Design</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                98%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;