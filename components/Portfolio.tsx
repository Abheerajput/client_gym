'use client';

import React, { useEffect, useRef } from 'react';
import {
  Activity,
  ArrowRight,
  Zap,
  Target,
  Dumbbell,
  Flame,
  Globe,
  MoveUpRight,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Programs = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Training Programs Data
  const trainingPrograms = [
    {
      id: 1,
      title: 'Hybrid Strength',
      category: 'Performance',
      description:
        'Elite level powerlifting meets functional hypertrophy. Designed to build raw power and a bulletproof physique.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
      icon: <Dumbbell size={24} />,
    },
    {
      id: 2,
      title: 'Metabolic Burn',
      category: 'Fat Loss',
      description:
        'High-intensity metabolic conditioning (MetCon) designed to torch calories and improve VO2 max.',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2',
      icon: <Flame size={24} />,
    },
    {
      id: 3,
      title: 'Functional Flow',
      category: 'Mobility',
      description:
        'Advanced yoga and corrective exercise to enhance range of motion and accelerate recovery cycles.',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5',
      icon: <Activity size={24} />,
    },
    {
      id: 4,
      title: 'Personal Coaching',
      category: '1-on-1',
      description:
        'Bespoke 1-on-1 programming tailored to your specific biomechanics and performance goals.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      icon: <Target size={24} />,
    },
    {
      id: 5,
      title: 'Digital Athlete',
      category: 'Online',
      description:
        'Remote programming and nutrition protocols delivered via our elite performance app.',
      image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d',
      icon: <Globe size={24} />,
    },
    {
      id: 6,
      title: 'Athletic Conditioning',
      category: 'Sports',
      description:
        'Explosive speed, agility, and endurance protocols built for athletes who demand peak on-field performance.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a',
      icon: <Zap size={24} />,
    },
  ];

  // GSAP Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.program-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="programs"
      className="py-24 md:py-32 bg-[#0F0F0F] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4 text-[#1DB954]">
              <Zap size={18} fill="#1DB954" />
              <span className="text-xs uppercase font-black tracking-[0.4em]">
                Training Protocols
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9]">
              Specialized <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DB954] to-emerald-200">
                Programs.
              </span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg max-w-sm leading-relaxed border-l border-white/10 pl-6 mb-2">
            Scientifically backed methodologies designed for longevity and
            explosive results.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {trainingPrograms.map((program, index) => {
            const isLarge = index % 3 === 0;

            return (
              <div
                key={program.id}
                className={`program-card group relative overflow-hidden rounded-[32px] bg-[#161616] border border-white/5 h-[500px] ${
                  isLarge ? 'lg:col-span-7' : 'lg:col-span-5'
                }`}
              >
                {/* Background */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-[#1DB954] rounded-2xl flex items-center justify-center text-[#0F0F0F]">
                      {program.icon}
                    </div>

                    <span className="bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                      {program.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 italic group-hover:text-[#1DB954] transition-colors">
                      {program.title}
                    </h3>

                    <p className="text-gray-400 text-sm md:text-base max-w-md mb-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {program.description}
                    </p>

                    <button className="flex items-center gap-3 text-white text-[11px] font-black uppercase tracking-[0.2em] group/btn">
                      Explore Program
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-[#1DB954] group-hover/btn:border-[#1DB954] transition-all">
                        <ArrowRight
                          size={14}
                          className="group-hover/btn:text-[#0F0F0F]"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 px-10 py-5 rounded-full transition-all group">
            <span className="text-xs font-black uppercase tracking-widest">
              Compare All Protocols
            </span>
            <MoveUpRight
              size={18}
              className="text-[#1DB954] group-hover:rotate-45 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
