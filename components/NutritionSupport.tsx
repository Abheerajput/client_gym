'use client';

import React from 'react';
import { Apple, Pill, Smartphone, MessageSquare, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';

const NutritionSupport = () => {
  const pillars = [
    {
      title: "Precision Nutrition",
      desc: "Macro-nutrient protocols tailored to your metabolic baseline and blood-work results.",
      icon: <Apple className="text-[#1DB954]" size={24} />,
      tags: ["Bio-Individual", "Chef-Prepared Options"]
    },
    {
      title: "Supplement Strategy",
      desc: "Evidence-based supplement stacks designed to optimize cognitive focus and cellular recovery.",
      icon: <Pill className="text-[#1DB954]" size={24} />,
      tags: ["Stack Optimization", "Quality Audited"]
    },
    {
      title: "24/7 Digital Concierge",
      desc: "Direct access to your Lead Architect via our private member app for real-time adjustments.",
      icon: <MessageSquare className="text-[#1DB954]" size={24} />,
      tags: ["WhatsApp Integration", "Instant Feedback"]
    }
  ];

  return (
    <section id="nutrition" className="py-24 md:py-32 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck size={18} className="text-[#1DB954]" />
              <span className="text-xs uppercase font-black tracking-[0.4em] text-gray-400">Total Optimization</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-8">
              The <span className="italic font-light text-gray-500">Invisible</span> <br /> Training.
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl">
              Physical exertion is only 30% of the equation. Our ecosystem manages your 
              biological variables 24/7, ensuring your recovery and nutrition match 
              the intensity of your performance.
            </p>

            <div className="space-y-8">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="group flex gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#1DB954]/30 transition-all">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#1DB954]/10 flex items-center justify-center group-hover:bg-[#1DB954] group-hover:text-black transition-all">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{pillar.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{pillar.desc}</p>
                    <div className="flex gap-2">
                      {pillar.tags.map(tag => (
                        <span key={tag} className="text-[8px] font-black uppercase tracking-widest text-[#1DB954] bg-[#1DB954]/5 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Dashboard Representation */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#1DB954]/10 blur-[100px] rounded-full" />
            
            <div className="relative bg-[#111] border border-white/10 rounded-[40px] p-8 shadow-2xl overflow-hidden">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Member Portal</p>
                  <h5 className="text-white font-bold">Daily Vitality Score</h5>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#1DB954] flex items-center justify-center text-black font-black">
                  94
                </div>
              </div>

              {/* Progress Chart Mockup */}
              
              <div className="space-y-6 mt-8">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Zap size={16} className="text-[#1DB954]" />
                    <span className="text-sm font-medium text-gray-300">Glycemic Response</span>
                  </div>
                  <span className="text-[#1DB954] font-bold text-sm">Stable</span>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Smartphone size={16} className="text-[#1DB954]" />
                    <span className="text-sm font-medium text-gray-300">Coach Message</span>
                  </div>
                  <span className="text-xs text-gray-500">2m ago</span>
                </div>
                
                <div className="pt-4">
                   <button className="w-full py-4 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#1DB954] transition-colors">
                     Download Member App <ArrowUpRight size={14} />
                   </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NutritionSupport;