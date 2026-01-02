"use client";

import React, { useEffect, useRef } from "react";
import { MoveRight, Play, Activity, ShieldCheck, Zap, Leaf, ArrowDown } from 'lucide-react';
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // 1. Initial Set
      gsap.set(".reveal-item", { y: 60, opacity: 0 });
      gsap.set(visualRef.current, { 
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", 
        scale: 1.1, 
        opacity: 0 
      });

      // 2. Main Entrance
      tl.to(visualRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.inOut"
      })
      .to(".reveal-item", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
      }, "-=0.8")
      .from(".stats-badge", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      }, "-=0.5")
      .from(".ticker-item", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.1
      }, "-=1");

      // 3. Floating Animations
      gsap.to(".floating-card", {
        y: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 4. Infinite Ticker Animation
      gsap.to(".ticker-content", {
        xPercent: -50,
        duration: 20,
        repeat: -1,
        ease: "linear"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen pt-24 flex flex-col items-center justify-center overflow-hidden bg-[#0F0F0F] px-6"
    >
      {/* Background Decorative Element: Large Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
        <h2 className="text-[25vw] font-black text-white leading-none tracking-tighter">VITAL</h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-8">
          <div className="space-y-6">
            <div className="reveal-item flex items-center gap-3">
              <div className="w-10 h-[2px] bg-[#1DB954]" />
              <span className="text-[#1DB954] text-xs font-black uppercase tracking-[0.4em]">Life in Motion</span>
            </div>
            
            <h1 className="reveal-item text-6xl md:text-8xl font-bold text-white tracking-tight leading-[0.95]">
              Optimize Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DB954] to-emerald-300">
                Vitality.
              </span>
            </h1>

            <p className="reveal-item text-gray-400 text-lg md:text-xl max-w-md font-medium leading-relaxed">
              Functional training meets science-backed nutrition. Build a body that performs with energy and recovers with ease.
            </p>
          </div>

          <div className="reveal-item flex flex-col sm:flex-row items-center gap-5">
            <button className="group w-full sm:w-auto px-10 py-5 bg-[#1DB954] text-[#0F0F0F] font-black uppercase tracking-widest text-xs rounded-full hover:shadow-[0_0_30px_rgba(29,185,84,0.3)] transition-all flex items-center justify-center gap-3">
              Start Your Journey <MoveRight size={18} />
            </button>
            
            <button className="w-full sm:w-auto px-10 py-5 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-3">
              <Play size={14} fill="white" />
              Watch Process
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-white/5">
             <div className="stats-badge flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Activity size={18} className="text-[#1DB954]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-bold">100%</span>
                  <span className="text-gray-500 text-[9px] uppercase tracking-widest">Data Driven</span>
                </div>
             </div>
             <div className="stats-badge flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Leaf size={18} className="text-[#1DB954]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-bold">Bio-Fuel</span>
                  <span className="text-gray-500 text-[9px] uppercase tracking-widest">Nutrition</span>
                </div>
             </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          <div 
            ref={visualRef} 
            className="relative aspect-square md:aspect-[4/5] w-full max-w-lg mx-auto overflow-hidden rounded-[40px] shadow-2xl border border-white/5"
          >
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438" 
              alt="Athlete"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-60" />
          </div>
          
          <div className="floating-card absolute -bottom-6 -right-4 md:right-0 bg-white p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-[#1DB954] flex items-center justify-center">
                <Zap size={24} className="text-white" fill="white" />
             </div>
             <div>
                <p className="text-[#0F0F0F] text-2xl font-black leading-none">94%</p>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Recovery Rate</p>
             </div>
          </div>
        </div>
      </div>

      {/* FOOTER TICKER: Partner Brands / Tech */}
      <div className="w-full border-t border-white/5 pt-10 pb-6 overflow-hidden">
        <div className="ticker-content flex whitespace-nowrap gap-20 items-center opacity-30">
          {[1,2].map((group) => (
            <div key={group} className="flex gap-20 items-center uppercase font-black tracking-[0.4em] text-white text-sm italic">
              <span className="ticker-item">WHOOP</span>
              <span className="ticker-item text-[#1DB954]">●</span>
              <span className="ticker-item">HYPERICE</span>
              <span className="ticker-item text-[#1DB954]">●</span>
              <span className="ticker-item">ROGUE</span>
              <span className="ticker-item text-[#1DB954]">●</span>
              <span className="ticker-item">THERAGUN</span>
              <span className="ticker-item text-[#1DB954]">●</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
        <span className="text-[8px] uppercase font-black tracking-widest text-white">Scroll</span>
        <ArrowDown size={14} className="text-[#1DB954] animate-bounce" />
      </div>
    </section>
  );
}