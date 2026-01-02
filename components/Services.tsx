'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, Microscope, Instagram, Award } from 'lucide-react';

const Trainers = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('trainers');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

   const trainers = [
  {
    id: 1,
    name: "Dr. Marcus Chen",
    specialization: "Metabolic Optimization",
    experience: "12",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800",
    bio: "Former Olympic sports scientist specializing in mitochondrial health and VO2 max efficiency protocols for executive athletes.",
    certs: ["PhD Physiology", "CSCS", "ISSN"]
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    specialization: "Biomechanics & Recovery",
    experience: "8",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8d110?auto=format&fit=crop&q=80&w=800",
    bio: "Focuses on corrective exercise and neuro-muscular adaptation to eliminate chronic pain and enhance functional range of motion.",
    certs: ["DPT", "NASM-CES", "FMS"]
  },
  {
    id: 3,
    name: "David 'Jax' Brooks",
    specialization: "Hybrid Strength Lab",
    experience: "10",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80&w=800",
    bio: "Master of high-density hypertrophy and explosive power. Architect of the 'Bulletproof Executive' strength protocol.",
    certs: ["CSCS", "USAW-L2", "PN-L2"]
  }
];
  return (
    <section id="trainers" className="py-20 md:py-32 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background Glow - Bio-Vitality Green */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-[#1DB954]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <Microscope size={16} className="text-[#1DB954]" />
            <span className="text-[#1DB954] uppercase tracking-[0.4em] text-[10px] md:text-xs font-black">Elite Faculty</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-[0.9]">
            Performance <br /> Architects<span className="text-[#1DB954]">.</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl text-base md:text-lg leading-relaxed opacity-80">
            Our specialists don't just coach—they engineer. From Olympic-level physiology 
            to neuro-muscular adaptation, meet the minds behind your transformation.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={trainer.id}
              className={`group relative bg-white/[0.02] rounded-[2.5rem] border border-white/5 hover:border-[#1DB954]/30 transition-all duration-700 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Image Header */}
              <div className="relative h-[320px] overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-80" />
                
                {/* Social Floating Badge */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                   <div className="w-10 h-10 rounded-full bg-[#1DB954] flex items-center justify-center text-[#0F0F0F] cursor-pointer hover:bg-white">
                      <Instagram size={18} />
                   </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <div className="flex items-center gap-2 mb-3">
                  <Award size={14} className="text-[#1DB954]" />
                  <span className="text-[10px] font-black text-[#1DB954] uppercase tracking-widest">
                    {trainer.specialization}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {trainer.name}
                </h3>
                
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">
                  {trainer.experience} Yrs Professional Practice
                </p>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-2">
                  {trainer.bio}
                </p>

                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                  <div className="flex -space-x-2">
                    {/* Tiny certification icons or badges */}
                    <div className="w-6 h-6 rounded-full bg-white/10 border border-[#0F0F0F] flex items-center justify-center text-[8px] font-bold">CSCS</div>
                    <div className="w-6 h-6 rounded-full bg-white/10 border border-[#0F0F0F] flex items-center justify-center text-[8px] font-bold">PN1</div>
                  </div>
                  <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-black text-white group-hover:text-[#1DB954] transition-all">
                    View Protocol <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic CTA */}
        <div className="mt-20 md:mt-32 relative rounded-[3rem] overflow-hidden border border-white/5 group bg-[#161616]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
                Not sure who fits <span className="text-[#1DB954] italic font-light">your goals?</span>
              </h3>
              <p className="text-gray-400 max-w-lg text-sm md:text-base">
                Take our 2-minute Bio-Performance Quiz. We’ll match you with the 
                perfect Architect based on your metabolic profile and objectives.
              </p>
            </div>

            <button
              className="w-full lg:w-auto px-10 py-5 bg-[#1DB954] text-[#0F0F0F] font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_10px_30px_rgba(29,185,84,0.2)]"
            >
              Start Matching Quiz
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;