import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10 sm:p-14 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div>
                <h2 className="text-3xl font-bold mb-6">Let's work together</h2>
                <p className="text-indigo-200 mb-10 text-lg leading-relaxed">
                Ready to build a strong digital presence? [cite: 90] Reach out to us today for a free consultation.
                </p>
                
                <div className="space-y-8">
                <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center border border-white/10 text-cyan-400">
                    <Mail size={22} />
                    </div>
                    <div>
                    <p className="text-sm text-indigo-200">Email us</p>
                    <p className="font-medium text-lg">{COMPANY_INFO.email}</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center border border-white/10 text-cyan-400">
                    <Phone size={22} />
                    </div>
                    <div>
                    <p className="text-sm text-indigo-200">Phone/WhatsApp</p>
                    <p className="font-medium text-lg">{COMPANY_INFO.phone}</p>
                    </div>
                </div>
                </div>
            </div>
            
            <div className="mt-12">
               <div className="flex gap-4">
                  {/* Social placeholders */}
                  <div className="w-10 h-10 bg-white/5 rounded-full hover:bg-cyan-500 transition cursor-pointer"></div>
                  <div className="w-10 h-10 bg-white/5 rounded-full hover:bg-cyan-500 transition cursor-pointer"></div>
               </div>
            </div>
          </div>
          
          <div className="bg-slate-950 p-10 sm:p-14 border-l border-slate-800">
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-white transition" placeholder="John Doe" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Phone</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-white transition" placeholder="+254..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-white transition" placeholder="name@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-white transition resize-none" placeholder="Tell us about your project"></textarea>
              </div>
              
              <button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-indigo-500/25 transition flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;