import React from 'react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="font-bold text-xl tracking-tight text-white">{COMPANY_INFO.name}</span>
          <p className="text-sm text-slate-500 mt-2">Powered by Creativity </p>
        </div>
        <div className="flex gap-8 text-sm text-slate-500">
           <a href="#" className="hover:text-cyan-400 transition">Instagram</a>
           <a href="#" className="hover:text-cyan-400 transition">LinkedIn</a>
           <a href="#" className="hover:text-cyan-400 transition">Twitter</a>
           <p>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;