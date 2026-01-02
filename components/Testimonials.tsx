'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Zap, Activity, TrendingDown } from 'lucide-react';

const PerformanceProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

    const element = document.getElementById('results');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? transformations.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === transformations.length - 1 ? 0 : currentIndex + 1);
  };
  const transformations = [
  {
    id: 1,
    name: "Rohit Verma",
    role: "Software Engineer",
    content:
      "I dropped body fat without losing strength. My energy, sleep, and focus improved drastically within 12 weeks.",
    beforeImage:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
    afterImage:
      "https://images.unsplash.com/photo-1594737625785-c9c89b47f7c1",
    avatar:
      "https://randomuser.me/api/portraits/men/32.jpg",
    stats: {
      fatChange: "-8.4%",
      muscleGain: "+4.2 kg",
      ageChange: "-6 yrs",
    },
  },
  {
    id: 2,
    name: "Aditi Sharma",
    role: "Fitness Enthusiast",
    content:
      "The metabolic conditioning protocols reshaped my physique completely. I feel lighter, faster, and stronger.",
    beforeImage:
      "https://images.unsplash.com/photo-1549576490-b0b4831ef60a",
    afterImage:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883",
    avatar:
      "https://randomuser.me/api/portraits/women/44.jpg",
    stats: {
      fatChange: "-10.1%",
      muscleGain: "+3.1 kg",
      ageChange: "-8 yrs",
    },
  },
  {
    id: 3,
    name: "Karan Malhotra",
    role: "Former Athlete",
    content:
      "This program restored my mobility and power. I’m lifting heavier now than I did in my early twenties.",
    beforeImage:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    afterImage:
      "https://images.unsplash.com/photo-1596357395104-ba989e72b5b4",
    avatar:
      "https://randomuser.me/api/portraits/men/55.jpg",
    stats: {
      fatChange: "-6.2%",
      muscleGain: "+5.4 kg",
      ageChange: "-5 yrs",
    },
  },
];


  return (
    <section id="results" className="py-20 md:py-32 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1DB954]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap size={16} className="text-[#1DB954]" fill="#1DB954" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#1DB954] font-black">Bio-Metrics Proof</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
            Member <span className="italic font-light text-gray-500">Transformations.</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {transformations.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 px-2">
                  <div className={`bg-white/[0.02] rounded-[3rem] border border-white/5 p-6 md:p-12 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}>
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      
                      {/* Left: Transformation Visuals */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative group overflow-hidden rounded-[2rem]">
                          <img src={item.beforeImage} alt="Before" className="w-full aspect-[3/4] object-cover grayscale" />
                          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-black uppercase text-white">Before</div>
                        </div>
                        <div className="relative group overflow-hidden rounded-[2rem] border-2 border-[#1DB954]/30">
                          <img src={item.afterImage} alt="After" className="w-full aspect-[3/4] object-cover" />
                          <div className="absolute top-4 left-4 bg-[#1DB954] px-3 py-1 rounded-full text-[8px] font-black uppercase text-[#0F0F0F]">Week 12</div>
                        </div>
                      </div>

                      {/* Right: Data & Quote */}
                      <div className="flex flex-col">
                        <div className="flex gap-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="text-[#1DB954] fill-[#1DB954]" />
                          ))}
                        </div>

                        <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8 tracking-tight">
                          "{item.content}"
                        </blockquote>

                        {/* Metric Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-10">
                          <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                            <TrendingDown size={18} className="text-[#1DB954] mb-2" />
                            <p className="text-[10px] text-gray-500 uppercase font-black">Body Fat</p>
                            <p className="text-xl font-bold text-white">{item.stats.fatChange}</p>
                          </div>
                          <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                            <Activity size={18} className="text-[#1DB954] mb-2" />
                            <p className="text-[10px] text-gray-500 uppercase font-black">Lean Muscle</p>
                            <p className="text-xl font-bold text-white">{item.stats.muscleGain}</p>
                          </div>
                          <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                            <Zap size={18} className="text-[#1DB954] mb-2" />
                            <p className="text-[10px] text-gray-500 uppercase font-black">Metabolic Age</p>
                            <p className="text-xl font-bold text-white">{item.stats.ageChange}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <img src={item.avatar} className="w-12 h-12 rounded-full object-cover" alt={item.name} />
                          <div>
                            <p className="text-white font-bold">{item.name}</p>
                            <p className="text-gray-500 text-xs uppercase tracking-widest">{item.role}</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 px-4">
            <div className="flex gap-4">
              <button onClick={goToPrevious} className="p-4 border border-white/10 rounded-full text-white hover:bg-[#1DB954] hover:text-black transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={goToNext} className="p-4 border border-white/10 rounded-full text-white hover:bg-[#1DB954] hover:text-black transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="flex space-x-3">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 rounded-full transition-all duration-500 ${index === currentIndex ? 'bg-[#1DB954] w-10' : 'bg-white/10 w-4'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceProof;