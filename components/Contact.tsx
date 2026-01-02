'use client';

import React, { useState } from 'react';
import { Clock, Filter, ChevronRight, Calendar } from 'lucide-react';

const scheduleData = {
  Monday: [
    { time: "06:00 AM", name: "Hybrid Strength", coach: "Jax Brooks", category: "Performance", intensity: "High" },
    { time: "08:30 AM", name: "Functional Flow", coach: "Sarah Jenkins", category: "Mobility", intensity: "Low" },
    { time: "12:00 PM", name: "Metabolic Burn", coach: "Dr. Marcus Chen", category: "Fat Loss", intensity: "Extreme" },
    { time: "05:30 PM", name: "Hybrid Strength", coach: "Jax Brooks", category: "Performance", intensity: "High" },
    { time: "07:00 PM", name: "Recovery Suite", coach: "Specialist Team", category: "Recovery", intensity: "Rest" },
  ],
  Tuesday: [
    { time: "06:30 AM", name: "Metabolic Burn", coach: "Dr. Marcus Chen", category: "Fat Loss", intensity: "Extreme" },
    { time: "09:00 AM", name: "Hybrid Strength", coach: "Jax Brooks", category: "Performance", intensity: "High" },
    { time: "05:00 PM", name: "Functional Flow", coach: "Sarah Jenkins", category: "Mobility", intensity: "Low" },
    { time: "06:30 PM", name: "Metabolic Burn", coach: "Dr. Marcus Chen", category: "Fat Loss", intensity: "Extreme" },
  ],
  // ... more days can be added following this pattern
} as const;

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('Monday');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <section id="schedule" className="py-24 md:py-32 bg-[#0F0F0F] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4 text-[#1DB954]">
              <Calendar size={18} />
              <span className="text-xs uppercase font-black tracking-[0.4em]">Live Timetable</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              Weekly <br />
              <span className="italic font-light text-gray-500">Optimization.</span>
            </h2>
          </div>
          
          {/* Day Selector - Scrollable on Mobile */}
          <div className="flex overflow-x-auto pb-4 md:pb-0 gap-2 w-full md:w-auto no-scrollbar">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeDay === day 
                  ? 'bg-[#1DB954] text-[#0F0F0F]' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Table */}
        <div className="bg-[#161616] border border-white/5 rounded-[40px] overflow-hidden">
          <div className="hidden md:grid grid-cols-5 p-8 border-b border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
            <div>Time</div>
            <div>Protocol</div>
            <div>Lead Architect</div>
            <div>Focus</div>
            <div className="text-right">Action</div>
          </div>

          <div className="divide-y divide-white/5">
            {scheduleData[activeDay as keyof typeof scheduleData]?.map((slot, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-5 p-8 items-center hover:bg-white/[0.02] transition-colors group"
              >
                {/* Time */}
                <div className="flex items-center gap-3 mb-4 md:mb-0">
                  <Clock size={16} className="text-[#1DB954]" />
                  <span className="text-xl font-bold text-white tracking-tight">{slot.time}</span>
                </div>

                {/* Protocol Name */}
                <div className="mb-4 md:mb-0">
                  <h4 className="text-lg font-bold text-white group-hover:text-[#1DB954] transition-colors">
                    {slot.name}
                  </h4>
                  <div className="md:hidden flex items-center gap-2 mt-1">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">{slot.coach}</span>
                  </div>
                </div>

                {/* Coach (Desktop) */}
                <div className="hidden md:block text-sm text-gray-400 font-medium">
                  {slot.coach}
                </div>

                {/* Focus Badge */}
                <div className="mb-6 md:mb-0">
                  <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border ${
                    slot.intensity === 'Extreme' 
                    ? 'border-red-500/50 text-red-500 bg-red-500/10' 
                    : 'border-[#1DB954]/50 text-[#1DB954] bg-[#1DB954]/10'
                  }`}>
                    {slot.category} • {slot.intensity}
                  </span>
                </div>

                {/* Action */}
                <div className="text-left md:text-right">
                  <button className="flex items-center gap-2 ml-auto md:ml-auto group/btn">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                      Reserve Slot
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                      <ChevronRight size={18} />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-white/[0.02] rounded-3xl border border-dashed border-white/10">
          <p className="text-gray-500 text-sm italic">
            * Private 1-on-1 Bio-Assessment sessions are booked separately via the Member Portal.
          </p>
          <div className="flex items-center gap-4">
             <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#161616] bg-gray-800" />
                ))}
             </div>
             <p className="text-xs font-bold text-white">12 Slots remaining for {activeDay}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Schedule;