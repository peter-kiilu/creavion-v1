import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle scroll to top explicitly
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // The path to your file in the 'public' folder
  const cvPath = "/cv.pdf"; 

  return (
    <nav className="fixed w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section - Clickable */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#" 
              onClick={scrollToTop} 
              className="flex items-center gap-2 group cursor-pointer"
              aria-label="Back to Home"
            >
              {/* Logo Icon with Hover Glow */}
              <div className="h-8 w-8 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-lg shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/50 group-hover:scale-105 transition-all duration-300"></div> 
              
              {/* Company Name with Hover Color Change */}
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-indigo-100 transition-colors">
                {COMPANY_INFO.name}
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Services', 'Work', 'Packages', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-slate-300 hover:text-white hover:scale-105 transition-all"
              >
                {item}
              </a>
            ))}
            
            {/* DOWNLOAD BUTTON (Desktop) */}
            <a 
              href={cvPath}
              download="Creavion_Media_CV.pdf" // The name the file will have when downloaded
              className="bg-white text-slate-900 px-5 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-indigo-50 transition-colors shadow-lg shadow-white/10 text-sm cursor-pointer"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:text-indigo-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 absolute w-full left-0 shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {['Services', 'Work', 'Packages', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                {item}
              </a>
            ))}
            
            {/* DOWNLOAD BUTTON (Mobile) */}
            <a 
              href={cvPath}
              download="Creavion_Media_CV.pdf"
              className="w-full mt-4 bg-indigo-600 text-white px-3 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-indigo-500 transition-colors cursor-pointer"
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;