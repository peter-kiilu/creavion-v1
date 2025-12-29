import React from 'react';

const projects = [1, 2, 3, 4];

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-cyan-400 font-bold tracking-wider text-sm uppercase">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Selected Work</h2>
          </div>
          <button className="text-white border-b border-indigo-500 pb-1 hover:text-indigo-400 transition">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((item) => (
            <div key={item} className="group relative overflow-hidden rounded-2xl aspect-video bg-slate-800 border border-slate-700 cursor-pointer">
              {/* Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-medium">
                [Project Preview Image]
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
                <span className="text-cyan-400 text-sm font-bold mb-2 uppercase tracking-wider">Video Editing</span>
                <h3 className="text-2xl font-bold text-white">Brand Campaign {item}</h3>
                <p className="text-slate-300 text-sm mt-2 line-clamp-2">
                  Delivered creative digital content aligned with brand identity.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;