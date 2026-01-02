'use client';

import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube, ArrowUp, Zap } from 'lucide-react';

const FinalFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { title: "Performance", links: ["Protocols", "Architects", "Schedule", "Pricing"] },
    { title: "Ecosystem", links: ["Nutrition", "Recovery", "The App", "Assessment"] },
    { title: "Corporate", links: ["Team Training", "Partnerships", "Press", "Careers"] }
  ];

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top: Branding & Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          
          {/* Brand Identity */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#1DB954] rounded flex items-center justify-center">
                <Zap size={18} className="text-black" fill="currentColor" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">Vitality Lab</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-8">
              Engineering human potential through biometrics, elite coaching, and 
              uncompromising recovery protocols.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-[#1DB954] transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Sections */}
          {navLinks.map((section, idx) => (
            <div key={idx} className="col-span-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1DB954] mb-6">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-500 text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Back to Top (Desktop) */}
          <div className="col-span-1 flex flex-col items-end justify-start">
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-all"
            >
              Back to Top
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1DB954] group-hover:bg-[#1DB954] group-hover:text-black transition-all">
                <ArrowUp size={16} />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom: Legal & Small Print */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest text-center md:text-left">
            © 2026 Vitality Performance Lab. Engineered for Excellence.
          </div>
          
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">System Functional</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FinalFooter;