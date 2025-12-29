import React from 'react';
import { Check } from 'lucide-react';
import { PACKAGES } from '../constants';

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Investment Packages</h2>
      <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">Choose the perfect plan to grow your digital presence.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PACKAGES.map((pkg, index) => (
          <div key={index} className={`flex flex-col relative p-6 rounded-2xl border transition-all duration-300 ${index === 0 ? 'bg-slate-800 border-indigo-500 shadow-xl shadow-indigo-500/10' : 'bg-slate-900 border-slate-800 hover:border-slate-600'}`}>
            {index === 0 && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
            
            <h3 className="text-lg font-bold text-white mb-2">{pkg.title}</h3>
            <div className="text-2xl font-bold text-cyan-400 mb-6">{pkg.price}</div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {pkg.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <Check size={16} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-tight">{feat}</span>
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-3 rounded-lg font-bold text-sm transition ${index === 0 ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'}`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;