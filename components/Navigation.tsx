'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Youtube, Facebook, Activity, ChevronRight, User } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const GREEN = "#1DB954";
  const DARK = "#0F0F0F";

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#method', label: 'The Method' },
    { href: '#programs', label: 'Programs' },
    { href: '#recovery', label: 'Recovery' },
    { href: '#membership', label: 'Membership' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-[100] font-sans">
      {/* 1. CLEAN UTILITY BAR */}
      <div className={`hidden md:flex justify-between px-12 py-2 bg-[#161616] border-b border-white/5 transition-all duration-500 ${isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
         <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-pulse"></div>
            <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase font-bold">Live Performance Tracking Available</span>
         </div>
         <div className="flex gap-6 text-gray-400 uppercase text-[9px] tracking-[0.2em] font-black">
            <span className="hover:text-[#1DB954] cursor-pointer flex items-center gap-2 transition-colors">
              <User size={12} /> Member Portal
            </span>
            <span className="hover:text-[#1DB954] cursor-pointer transition-colors">Locations</span>
         </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <div 
        className={`w-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0F0F0F]/90 backdrop-blur-xl py-3 border-b border-[#1DB954]/20' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* BRAND/LOGO */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <div className="relative w-10 h-10 bg-[#1DB954] rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-300">
              <Activity size={24} className="text-[#0F0F0F]" strokeWidth={3} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-none">VITAL<span className="text-[#1DB954]">LAB</span></span>
              <span className="text-[8px] tracking-[0.3em] text-gray-500 font-black uppercase mt-1">Bio-Performance</span>
            </div>
          </div>

          {/* CENTER LINKS (Modern Minimalist) */}
          <div className="hidden lg:flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-6 py-2 text-[10px] uppercase font-black tracking-widest text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* RIGHT SIDE ACTION */}
          <div className="flex items-center gap-6">
            <button 
              className="hidden md:flex items-center gap-3 bg-white text-black px-7 py-3 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-[#1DB954] hover:text-white transition-all group"
            >
              Consultation
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 text-white hover:text-[#1DB954] transition-colors"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE MENU (Full Screen Vitality Overlay) */}
      <div className={`fixed inset-0 z-[110] transition-all duration-700 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="absolute inset-0 bg-[#0F0F0F] p-8 flex flex-col">
          <div className="flex justify-between items-center mb-16">
             <div className="flex items-center gap-3">
                <Activity size={32} className="text-[#1DB954]" />
                <span className="text-2xl font-bold text-white tracking-tighter">VITAL<span className="text-[#1DB954]">LAB</span></span>
             </div>
             <button onClick={() => setIsMenuOpen(false)} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white">
               <X size={32} />
             </button>
          </div>
          
          <div className="flex flex-col gap-8">
            {navItems.map((item, i) => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-5xl font-bold tracking-tighter text-white hover:text-[#1DB954] transition-all flex items-center justify-between group"
              >
                {item.label}
                <ChevronRight size={32} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </div>

          <div className="mt-auto space-y-6">
            <button className="w-full bg-[#1DB954] text-[#0F0F0F] py-6 rounded-2xl font-black uppercase tracking-widest text-sm shadow-[0_20px_40px_rgba(29,185,84,0.2)]">
              Claim Initial Assessment
            </button>
            <div className="flex gap-8 justify-center opacity-40">
              <Instagram size={20} className="text-white" />
              <Youtube size={20} className="text-white" />
              <Facebook size={20} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;