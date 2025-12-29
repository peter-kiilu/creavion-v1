import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl opacity-20 blur-lg"></div>
             <div className="relative grid grid-cols-2 gap-4">
               {/* Placeholders for "Professional portrait" and "Behind-the-scenes" [cite: 20] */}
               <div className="aspect-square bg-slate-800 rounded-2xl border border-slate-700"></div>
               <div className="aspect-square bg-slate-900 rounded-2xl border border-slate-800 mt-8"></div>
             </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Creavion Media is built on <span className="text-indigo-400 font-medium">creativity, consistency, and results.</span> We work with businesses 
                to develop strong digital presence through well-planned content.
              </p>
              <p>
                Our approach combines creative design with digital performance to ensure every project delivers value.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Creative-driven execution', 'Professional standards', 'Brand-focused content', 'Results-oriented strategy'].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                  <span className="text-sm font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;