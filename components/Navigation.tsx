'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { socialLinks, personalInfo } from '@/lib/data';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const targetPosition = (element as HTMLElement).offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('#home')}
              className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              {personalInfo.name.split(' ').map(name => name[0]).join('')}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github size={20} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            {/* <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-blue-400 transition-colors">
              <Twitter size={20} />
            </a> */}
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-pink-600 transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="px-5 py-3 border-t border-gray-100">
            <div className="flex items-center space-x-4">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github size={20} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              {/* <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a> */}
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;