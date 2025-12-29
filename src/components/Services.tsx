import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We help brands communicate clearly through strategic content and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div key={index} className="group p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500/50 hover:bg-slate-800 transition duration-300">
              <div className="w-14 h-14 bg-slate-950 border border-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white text-indigo-400 transition-all duration-300 shadow-lg">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;