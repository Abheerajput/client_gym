"use client";

import React, { useEffect, useRef } from "react";
import { 
  HeartPulse, 
  Activity, 
  Zap, 
  Clock, 
  Leaf, 
  MoveRight,
  ShieldCheck,
  TrendingUp,
  Dumbbell,
  Timer
} from 'lucide-react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Added a new Statistics Ticker Component for credibility
const StatsTicker = () => {
  const stats = [
    { label: "Active Members", value: "1,200+" },
    { label: "Success Rate", value: "98%" },
    { label: "Expert Coaches", value: "15" },
    { label: "Wellness Hours", value: "24/7" },
  ];

  return (
    <div className="border-y border-white/5 bg-[#0F0F0F] py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center md:text-left reveal-up">
            <p className="text-[#1DB954] text-3xl md:text-4xl font-black italic">{stat.value}</p>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-bold mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-up", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0F0F0F] py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3 reveal-up">
              <div className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse"></div>
              <span className="text-[#1DB954] text-xs font-black uppercase tracking-[0.3em]">Total Wellness</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight reveal-up">
              Functional <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DB954] to-emerald-200">
                Performance.
              </span>
            </h2>
          </div>
          <div className="reveal-up">
            <p className="text-gray-400 text-lg max-w-md leading-relaxed border-l-2 border-[#1DB954] pl-6">
              More than just lifting weights. We focus on longevity, mobility, and nutrition to build a body that performs as good as it looks.
            </p>
          </div>
        </div>

        {/* --- MAIN BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="reveal-up md:col-span-2 relative group overflow-hidden rounded-3xl bg-[#161616] p-10 h-[400px] flex flex-col justify-between border border-white/5">
             <div className="relative z-10">
                <div className="w-14 h-14 bg-[#1DB954]/10 rounded-2xl flex items-center justify-center mb-6">
                    <Activity className="text-[#1DB954]" size={30} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 italic">Movement-First Coaching</h3>
                <p className="text-gray-400 max-w-sm leading-relaxed">Specialized functional patterns designed for real-world strength and injury prevention. We don't just build muscle; we build capability.</p>
             </div>
             <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438" 
              className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-20 grayscale group-hover:opacity-40 transition-opacity duration-700"
              alt="Functional Training"
             />
          </div>

          <div className="reveal-up bg-[#1DB954] rounded-3xl p-10 flex flex-col justify-between group cursor-pointer hover:shadow-[0_20px_40px_rgba(29,185,84,0.15)] transition-all duration-500">
            <Leaf className="text-[#0F0F0F] group-hover:scale-110 transition-transform" size={40} />
            <div>
                <h4 className="text-[#0F0F0F] font-black uppercase tracking-tight text-2xl mb-2">Fuel & Rehab</h4>
                <p className="text-[#0F0F0F]/80 text-sm font-medium">Custom nutrition plans and sports therapy to keep you in the game longer.</p>
            </div>
          </div>

          {/* New Highlight: Longevity Science */}
          <div className="reveal-up bg-[#161616] rounded-3xl p-10 border border-white/5 flex flex-col justify-center items-center text-center group">
            <TrendingUp className="text-[#1DB954] mb-4 group-hover:translate-y-[-5px] transition-transform" size={32} />
            <h4 className="text-white font-bold text-xl mb-2">Longevity Focused</h4>
            <p className="text-gray-500 text-sm">Data-driven training to increase your health-span and metabolic efficiency.</p>
          </div>

          <div className="reveal-up bg-[#161616] rounded-3xl p-10 border border-white/5 hover:border-[#1DB954]/50 transition-all group">
            <Clock className="text-[#1DB954] mb-6 group-hover:rotate-12 transition-transform" size={32} />
            <h4 className="text-white font-bold text-xl mb-2">Flexible Schedule</h4>
            <p className="text-gray-500 text-sm italic">Train around your life. Our doors and support systems are open 24/7.</p>
          </div>

          <div className="reveal-up bg-[#161616] rounded-3xl p-10 border border-white/5 group">
             <HeartPulse className="text-[#1DB954] mb-6" size={32} />
             <h4 className="text-white font-bold text-xl mb-2">Heart Health</h4>
             <p className="text-gray-500 text-sm">Advanced cardio protocols to optimize VO2 max and recovery heart rate.</p>
          </div>

          <div className="reveal-up md:col-span-3 bg-[#161616] rounded-3xl p-10 border border-white/5 flex flex-col md:flex-row items-center gap-8 group">
            <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="text-[#1DB954]" size={20} />
                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Medical Grade Facilities</span>
                </div>
                <h4 className="text-white font-bold text-3xl">Expert-Led Recovery Lab</h4>
                <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">Access to percussion therapy, mobility assessments, and certified physical therapists. We treat recovery with the same intensity as training.</p>
                <div className="flex gap-4 pt-2">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-400 font-bold uppercase tracking-widest">Cryotherapy</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-400 font-bold uppercase tracking-widest">Dry Needling</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-400 font-bold uppercase tracking-widest">Compression</span>
                </div>
            </div>
            <button className="whitespace-nowrap bg-white text-black px-10 py-5 rounded-full font-black uppercase tracking-widest text-[11px] flex items-center gap-3 hover:bg-[#1DB954] hover:text-white transition-all duration-300">
                Book Initial Consult <MoveRight size={18} />
            </button>
          </div>
        </div>

        {/* --- STATS TICKER --- */}
        <StatsTicker />

        {/* --- SECONDARY CONTENT: THE PROCESS --- */}
        <div className="mt-32 grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal-up relative">
                <div className="absolute -top-10 -left-10 text-[15rem] font-black text-white/5 leading-none select-none">01</div>
                <h3 className="text-4xl font-black text-white uppercase italic relative z-10 mb-6">Our Roadmap <br/>To Your Success</h3>
                <div className="space-y-8 relative z-10">
                    <div className="flex gap-6">
                        <div className="w-12 h-12 shrink-0 rounded-full border border-[#1DB954] flex items-center justify-center text-[#1DB954] font-bold">1</div>
                        <div>
                            <h5 className="text-white font-bold mb-1">Assessment</h5>
                            <p className="text-gray-500 text-sm">Comprehensive mobility and metabolic testing to find your baseline.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-12 h-12 shrink-0 rounded-full border border-[#1DB954] flex items-center justify-center text-[#1DB954] font-bold">2</div>
                        <div>
                            <h5 className="text-white font-bold mb-1">Customization</h5>
                            <p className="text-gray-500 text-sm">Bespoke training and nutrition plans built for your specific DNA.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-12 h-12 shrink-0 rounded-full border border-[#1DB954] flex items-center justify-center text-[#1DB954] font-bold">3</div>
                        <div>
                            <h5 className="text-white font-bold mb-1">Evolution</h5>
                            <p className="text-gray-500 text-sm">Monthly re-assessments to ensure you never hit a plateau.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="reveal-up bg-[#1DB954]/5 border border-[#1DB954]/20 rounded-3xl p-12 space-y-6">
                <Timer className="text-[#1DB954]" size={40} />
                <h4 className="text-3xl font-bold text-white tracking-tight">Ready to stop guessing?</h4>
                <p className="text-gray-400 leading-relaxed">Join 1,200+ individuals who have traded generic workouts for functional longevity. Your journey starts with a single mobility scan.</p>
                <div className="pt-4">
                    <input type="email" placeholder="Enter your email" className="w-full bg-[#0F0F0F] border border-white/10 rounded-full px-6 py-4 text-white text-sm mb-4 focus:outline-none focus:border-[#1DB954] transition-colors" />
                    <button className="w-full bg-[#1DB954] text-[#0F0F0F] font-black uppercase tracking-widest py-4 rounded-full text-sm">Get Started Today</button>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}