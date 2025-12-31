import React from 'react';
import { PORTFOLIO_PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-cyan-400 font-bold tracking-wider text-sm uppercase">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Selected Work</h2>
            <p className="text-slate-400 mt-2 max-w-xl">
              [cite_start]A selection of our creative work across social media, promotional design, and video content[cite: 62].
            </p>
          </div>
          <button className="text-white border-b border-indigo-500 pb-1 hover:text-indigo-400 transition">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl aspect-video bg-slate-800 border border-slate-700 cursor-pointer">
              
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
                <span className="text-cyan-400 text-sm font-bold mb-2 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-slate-300 text-sm mt-2 line-clamp-2">
                  {project.description}
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