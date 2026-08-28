import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon, MailIcon, AnimatedSocial } from '../components/SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-black/40 py-12 overflow-hidden">
      {/* Background glow blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50vw] h-[15vw] glow-spot bg-primary/5 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand / Name */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <a
            href="#home"
            onClick={handleScrollToTop}
            className="font-display font-bold text-lg text-white hover:text-primary transition-colors tracking-tight flex items-center gap-1.5"
          >
            <span className="text-primary">&lt;</span>
            <span>Zeeshan Lateef</span>
            <span className="text-primary">/&gt;</span>
          </a>

        </div>

        {/* Footer Nav Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 font-medium font-sans">
          <a href="#home" onClick={handleScrollToTop} className="hover:text-white transition-colors">Home</a>
          <a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="hover:text-white transition-colors">About</a>
          <a href="#skills" onClick={(e) => handleScrollTo(e, '#skills')} className="hover:text-white transition-colors">Skills</a>
          <a href="#experience" onClick={(e) => handleScrollTo(e, '#experience')} className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" onClick={(e) => handleScrollTo(e, '#projects')} className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Right Column: Socials and Scroll To Top */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Animated Hover Social Icons */}
          <div className="flex items-center gap-3">
            <AnimatedSocial
              href="https://github.com/zeeshanlateef"
              icon={GithubIcon}
              label="GitHub"
              colorClass="hover:border-white/30 hover:text-white hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            />
            <AnimatedSocial
              href="https://linkedin.com/in/zeeshanlateef"
              icon={LinkedinIcon}
              label="LinkedIn"
              colorClass="hover:border-blue-400/30 hover:text-blue-400 hover:bg-blue-400/5 hover:shadow-[0_0_15px_rgba(96,165,250,0.15)]"
            />
            <AnimatedSocial
              href="https://wa.me/919572306596"
              icon={WhatsappIcon}
              label="WhatsApp"
              colorClass="hover:border-emerald-400/30 hover:text-emerald-400 hover:bg-emerald-400/5 hover:shadow-[0_0_15px_rgba(52,211,153,0.15)]"
            />
            <AnimatedSocial
              href="mailto:zeeshanlateef2016@gmail.com"
              icon={MailIcon}
              label="Email"
              colorClass="hover:border-purple-400/30 hover:text-purple-400 hover:bg-purple-400/5 hover:shadow-[0_0_15px_rgba(192,132,252,0.15)]"
            />
          </div>

          {/* Scroll To Top Button */}
          <button
            onClick={handleScrollToTop}
            className="p-3 bg-white/5 border border-white/5 hover:border-primary/20 text-gray-400 hover:text-primary rounded-xl transition-all duration-300 hover:-translate-y-1"
            title="Scroll To Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-white/5 relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <p className="text-xs text-gray-600 font-sans">
          &copy; {currentYear} Zeeshan Lateef. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
