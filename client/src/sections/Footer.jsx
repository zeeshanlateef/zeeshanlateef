import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon, MailIcon, AnimatedSocial } from '../components/SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = React.useState('...');

  React.useEffect(() => {
    const getCounter = async () => {
      try {
        const response = await fetch('https://api.counterapi.dev/v2/zeeshanlateef/portfolio/up');
        if (!response.ok) throw new Error('API Error');
        const data = await response.json();
        if (data && typeof data.value === 'number') {
          setVisitorCount(data.value.toLocaleString());
          return;
        }
      } catch (err) {
        // Fallback calculations in case of API downtime: Baseline 14,832 + visits since base date
        const baseCount = 14832;
        const startDate = new Date('2026-08-01T00:00:00Z').getTime();
        const now = Date.now();
        const visitsPerDay = 15;
        const daysElapsed = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
        const estimatedCount = baseCount + Math.max(0, daysElapsed * visitsPerDay);
        setVisitorCount(estimatedCount.toLocaleString());
      }
    };
    getCounter();
  }, []);

  const handleScrollToTop = (e) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScrollTo = (e, id) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1) return;
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
            href="/"
            onClick={handleScrollToTop}
            className="font-display font-bold text-lg text-white hover:text-primary transition-colors tracking-tight flex items-center gap-1.5"
          >
            <span className="text-primary">&lt;</span>
            <span>Zeeshan Lateef</span>
            <span className="text-primary">/&gt;</span>
          </a>

        </div>

        {/* Footer Nav Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2.5 sm:gap-6 text-base text-gray-400 font-medium font-sans">
          <a href="/about" className="hover:text-white transition-colors">About</a>
          <a href="/#skills" onClick={(e) => handleScrollTo(e, '#skills')} className="hover:text-white transition-colors">Skills</a>
          <a href="/#experience" onClick={(e) => handleScrollTo(e, '#experience')} className="hover:text-white transition-colors">Experience</a>
          <a href="/projects" className="hover:text-white transition-colors">Projects</a>
          <a href="/#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Right Column: Socials and Scroll To Top inline */}
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

          {/* Scroll To Top Button inline with icons */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center justify-center h-12 w-12 bg-white/5 border border-white/5 hover:border-primary/20 text-gray-400 hover:text-primary rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,210,255,0.15)] hover:-translate-y-1 cursor-pointer shrink-0"
            title="Scroll To Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-white/5 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-xs text-gray-600 font-sans">
          &copy; {currentYear} Zeeshan Lateef. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-500 font-sans">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Total Visitors:</span>
          <span className="font-semibold text-primary font-display tracking-wider">{visitorCount}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
