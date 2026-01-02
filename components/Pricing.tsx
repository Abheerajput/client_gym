'use client';

import React from 'react';
import { Check, Zap, ShieldCheck, ArrowRight, Activity, TrendingUp } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Monthly",
      tagline: "Total Flexibility",
      price: "199",
      period: "Month",
      features: [
        "All Performance Protocols",
        "Biometric Baseline Scan",
        "Locker & Recovery Suite",
        "Member Training App"
      ],
      highlight: false
    },
    {
      name: "Yearly",
      tagline: "The Peak Protocol",
      price: "149",
      period: "Month",
      features: [
        "All Monthly Features",
        "25% Annual Savings",
        "Quarterly Blood-Panel Review",
        "Priority Class Booking",
        "Complimentary Guest Passes"
      ],
      highlight: true,
      note: "Billed Annually"
    },
    {
      name: "Quarterly",
      tagline: "Performance Cycle",
      price: "175",
      period: "Month",
      features: [
        "All Monthly Features",
        "Monthly VO2 Max Testing",
        "Nutrition Foundation Plan",
        "Recovery Suite Priority"
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#0F0F0F] relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', fontSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp size={16} className="text-[#1DB954]" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-400 font-black">Investment</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            Commit to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DB954] to-emerald-200 italic">Evolution.</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`relative p-8 md:p-12 rounded-[40px] border transition-all duration-500 flex flex-col ${
                plan.highlight 
                ? 'bg-[#161616] border-[#1DB954] scale-105 z-20 shadow-[0_30px_60px_rgba(0,0,0,0.5)]' 
                : 'bg-white/5 border-white/10 hover:border-white/20 z-10'
              } ${plan.name === 'Yearly' ? 'order-first md:order-none' : ''}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1DB954] text-[#0F0F0F] px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
                  Optimal Value
                </div>
              )}

              <div className="mb-8">
                <p className="text-[#1DB954] text-[10px] font-black uppercase tracking-widest mb-2">{plan.tagline}</p>
                <h3 className="text-3xl font-bold text-white mb-6">{plan.name}</h3>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-white text-6xl font-black">${plan.price}</span>
                  <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">/ {plan.period}</span>
                </div>
                {plan.note && <p className="text-gray-500 text-[9px] uppercase mt-2 font-bold tracking-tighter">{plan.note}</p>}
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check size={14} className="text-[#1DB954] mt-1 shrink-0" strokeWidth={3} />
                    <span className="text-gray-300 text-sm font-medium leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${
                plan.highlight 
                ? 'bg-[#1DB954] text-[#0F0F0F] hover:shadow-[0_0_30px_rgba(29,185,84,0.4)]' 
                : 'bg-white text-[#0F0F0F] hover:bg-[#1DB954]'
              }`}>
                Join The Lab <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Corporate Trust Banner */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale contrast-125">
          <p className="w-full text-center text-xs uppercase font-black tracking-[0.3em] text-gray-500 mb-4">Optimizing Teams At</p>
          <div className="h-6 w-24 bg-white/20 rounded"></div> {/* Placeholder for Brand Logo */}
          <div className="h-6 w-32 bg-white/20 rounded"></div>
          <div className="h-6 w-28 bg-white/20 rounded"></div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;