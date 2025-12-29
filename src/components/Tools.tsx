import React from 'react';
import { TOOLS } from '../constants';

const Tools: React.FC = () => {
  return (
    <section className="py-12 border-y border-slate-900 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">Tools We Master</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {TOOLS.map((tool) => (
                <span key={tool} className="text-xl font-bold text-slate-400 hover:text-white cursor-default transition">{tool}</span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;