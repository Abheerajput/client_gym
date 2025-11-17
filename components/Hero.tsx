'use client';

import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail, Eye } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const fullText = personalInfo.tagline;

  useEffect(() => {
    setIsVisible(true);
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const navHeight = 80;
      const targetPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="space-y-4">
              <p className="text-blue-600 font-medium text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                {personalInfo.name}
              </h1>
              <div className="h-16">
                <p className="text-xl md:text-2xl text-gray-600 font-light">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              {personalInfo.bio.substring(0, 150)}...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('#portfolio')}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Eye className="mr-2" size={20} />
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center px-8 py-4 bg-transparent text-gray-800 font-semibold border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
              >
                <Mail className="mr-2" size={20} />
                Contact Me
              </button>
            </div>

            <div className="pt-4">
              <a
                href={personalInfo.resume}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                <Download className="mr-2" size={18} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-8 ring-white">
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-10 animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="text-gray-500 hover:text-gray-700 transition-colors" size={32} />
      </button>
    </section>
  );
};

export default Hero;