'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import { personalInfo, skills, timeline } from '@/lib/data';

const About = () => {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const skillsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === skillsRef.current) {
              skills.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleSkills(prev => [...prev, index]);
                }, index * 200);
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
    if (timelineRef.current) observer.observe(timelineRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developer with a strong foundation in modern web technologies 
            and a commitment to creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Bio Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="mr-3 text-blue-600" size={20} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="mr-3 text-blue-600" size={20} />
                  <span>Available for new projects</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="mr-3 text-blue-600" size={20} />
                  <span>1+ years of experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div ref={skillsRef}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: visibleSkills.includes(index) ? `${skill.level}%` : '0%',
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div ref={timelineRef}>
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Experience & Education</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-gray-300"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-medium text-blue-600 mb-2">{item.year}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 font-medium mb-3">{item.company}</p>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;