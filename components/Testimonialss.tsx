'use client';

import React, { useState } from 'react';
import { Play, Star, Quote, CheckCircle2, ArrowRight } from 'lucide-react';

const Testimonialss = () => {
  const [activeVideo, setActiveVideo] = useState(false);

  const reviews = [
    {
      name: "Alex Sterling",
      role: "Founder, Sterling Cap",
      text: "The Lab isn't just a gym; it's an ROI on my health. My focus during board meetings has tripled since starting the protocol.",
      platform: "Google"
    },
    {
      name: "Dr. Sarah Vogt",
      role: "Surgeon",
      text: "As a physician, I'm picky about science. The biometric tracking here is more accurate than most clinics I've seen.",
      platform: "Google"
    }
  ];

  return (
    <section id="community" className="py-24 md:py-32 bg-[#0F0F0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Cinematic Video Testimonial */}
          <div className="relative group">
            <div className="relative aspect-[16/9] md:aspect-square overflow-hidden rounded-[40px] border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2158?auto=format&fit=crop&q=80&w=1200" 
                alt="Member Experience" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-50"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <button 
                  onClick={() => setActiveVideo(true)}
                  className="w-24 h-24 rounded-full bg-[#1DB954] flex items-center justify-center text-[#0F0F0F] hover:scale-110 hover:bg-white transition-all duration-300 shadow-[0_0_50px_rgba(29,185,84,0.3)]"
                >
                  <Play size={32} fill="currentColor" />
                </button>
                <p className="mt-6 text-xs font-black uppercase tracking-[0.4em] text-white">Watch Member Story</p>
              </div>

              {/* Float Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1DB954] flex items-center justify-center text-black font-bold italic">“</div>
                  <p className="text-white text-sm italic font-medium">"I reversed my biological age by 7 years in 6 months."</p>
                </div>
              </div>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#1DB954]/20 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Right: Google Reviews & Trust Signals */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <Star size={16} className="text-[#1DB954]" fill="#1DB954" />
              <span className="text-xs uppercase font-black tracking-[0.4em] text-gray-400">Verified Results</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-8">
              Don’t take our <br /> word for it. <span className="italic font-light text-gray-500">Take theirs.</span>
            </h2>

            <div className="space-y-6 mb-12">
              {reviews.map((review, i) => (
                <div key={i} className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-[#1DB954] fill-[#1DB954]" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold text-sm">{review.name}</h4>
                      <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">{review.role}</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" className="w-3" alt="Google" />
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Review</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Trust Bar */}
            <div className="flex items-center gap-6 p-6 border-t border-white/5">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-white">4.9</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-amber-400 fill-amber-400" />)}
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">142+ Member Reviews</p>
              </div>
              <div className="h-10 w-[1px] bg-white/10" />
              <button className="flex items-center gap-2 text-[#1DB954] text-[10px] font-black uppercase tracking-[0.2em] hover:text-white transition-colors">
                View All Testimonials <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal Placeholder (Optional logic) */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 animate-in fade-in duration-300">
           <button onClick={() => setActiveVideo(false)} className="absolute top-10 right-10 text-white font-black uppercase tracking-widest">Close [X]</button>
           <div className="w-full max-w-4xl aspect-video bg-white/10 rounded-2xl flex items-center justify-center">
             <p className="text-[#1DB954] font-black uppercase tracking-widest animate-pulse italic">Loading Protocol Story...</p>
           </div>
        </div>
      )}
    </section>
  );
};

export default Testimonialss;