import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', href: '/#contact' },
];

const resumeUrl = "/assets/resume-zeeshanlateef.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const handleResumeClick = () => {
    const downloadAnchor = document.createElement('a');
    downloadAnchor.href = resumeUrl;
    downloadAnchor.setAttribute('download', 'resume-zeeshanlateef.pdf');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
  };

  const handleNavClick = (e, link) => {
    // Allow native browser behavior for new tab (Ctrl, Cmd, Shift, or middle click)
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1) {
      return;
    }
    e.preventDefault();
    setIsOpen(false);

    if (link.path) {
      navigate(link.path);
      window.scrollTo(0, 0);
    } else {
      const targetId = link.href.includes('#') ? `#${link.href.split('#')[1]}` : link.href;
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const target = document.querySelector(targetId);
          if (target) {
            const offset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 150);
      } else {
        const target = document.querySelector(targetId);
        if (target) {
          const offset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname === '/') {
        const sections = navLinks.filter(l => l.href).map(link => {
          const targetId = link.href.includes('#') ? `#${link.href.split('#')[1]}` : link.href;
          return document.querySelector(targetId);
        });
        const scrollPosition = window.scrollY + 120;
        let currentSection = '';

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          if (section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              const href = navLinks.filter(l => l.href)[i].href;
              currentSection = href.includes('#') ? href.split('#')[1] : href.slice(1);
              break;
            }
          }
        }
        setActiveSection(currentSection);
      } else if (location.pathname === '/about') {
        setActiveSection('about');
      } else if (location.pathname === '/projects') {
        setActiveSection('projects');
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'glass-nav py-4 shadow-2xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            to="/"
            onClick={(e) => {
              if (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1) return;
              e.preventDefault();
              if (location.pathname !== '/') {
                navigate('/');
                window.scrollTo(0, 0);
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="font-display text-lg sm:text-xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity flex items-center gap-1.5"
          >
            <span className="text-primary">&lt;</span>
            <span>Zeeshan Lateef</span>
            <span className="text-primary">/&gt;</span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = link.path 
                ? location.pathname === link.path 
                : activeSection === link.href.slice(1);

              return (
                <a
                  key={link.name}
                  href={link.path || link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`text-base font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full glass-panel border border-white/10 hover:border-primary/50 text-gray-300 hover:text-primary transition-all duration-300 flex items-center justify-center cursor-pointer"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeClick}
              className="resume-btn px-4 py-2 text-sm font-semibold tracking-wide uppercase border border-white/10 rounded-full hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center gap-1"
            >
              Resume
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger & Theme Toggle Trigger */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full glass-panel border border-white/10 text-gray-300 hover:text-primary transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-0 w-full h-[calc(100vh-68px)] bg-dark-bg/95 backdrop-blur-2xl z-30 flex flex-col justify-between p-8 border-t border-white/5 md:hidden"
          >
            <nav className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => {
                const isActive = link.path 
                  ? location.pathname === link.path 
                  : activeSection === link.href.slice(1);

                return (
                  <a
                    key={link.name}
                    href={link.path || link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`text-2xl font-display font-medium block ${
                      isActive
                        ? 'text-primary font-bold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col space-y-6 pb-12"
            >
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeClick}
                className="resume-btn w-full py-4 text-center text-sm font-semibold tracking-wide uppercase bg-primary text-black rounded-full hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Open & Download Resume
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-center space-x-6">
                <a
                  href="https://github.com/zeeshanlateef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/zeeshanlateef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
