'use client';

import React from 'react';
import { Github, Linkedin, Twitter, Instagram, ArrowUp, Heart } from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const navHeight = 80;
      const targetPosition = (element as HTMLElement).offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const footerLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              {personalInfo.tagline}
            </p>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Passionate about creating exceptional web experiences with modern technologies. 
              Always learning, always building, always improving.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-white transition-colors duration-200 block"
              >
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-gray-400 hover:text-white transition-colors duration-200 block"
              >
                {personalInfo.phone}
              </a>
              <p className="text-gray-400">
                {personalInfo.location}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
              >
                <Github size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
              >
                <Linkedin size={20} />
              </a>
              {/* <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
              >
                <Twitter size={20} />
              </a> */}
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center text-gray-400 text-sm mb-4 sm:mb-0">
              <p>© {currentYear} {personalInfo.name}. Made with</p>
              <Heart size={16} className="mx-2 text-red-400 fill-current" />
              <p>using Next.js & Tailwind CSS</p>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
            >
              <span className="mr-2 text-sm">Back to top</span>
              <ArrowUp 
                size={20} 
                className="group-hover:-translate-y-1 transition-transform duration-200" 
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;