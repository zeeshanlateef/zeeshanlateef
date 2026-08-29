import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const resumeUrl = "https://drive.google.com/file/d/1yZ8CXRFflC5JA8XKPOJvwh33MiG6QuhG/view?usp=sharing";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  const handleResumeClick = () => {
    const downloadUrl = "https://drive.google.com/uc?export=download&id=1yZ8CXRFflC5JA8XKPOJvwh33MiG6QuhG";
    let iframe = document.getElementById('resume-download-iframe');
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'resume-download-iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }
    iframe.src = downloadUrl;
  };

  // Smooth scroll handler with route check
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== '/') {
      // Redirect to home page first, then scroll
      navigate('/');
      setTimeout(() => {
        const target = document.querySelector(href);
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
      // On homepage, scroll directly
      const target = document.querySelector(href);
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
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scroll spy logic (only active on homepage)
      if (location.pathname === '/') {
        const sections = navLinks.map(link => document.querySelector(link.href));
        const scrollPosition = window.scrollY + 120;

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          if (section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(navLinks[i].href.slice(1));
              break;
            }
          }
        }
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
            onClick={(e) => handleScrollTo(e, '#home')}
            className="font-display text-lg sm:text-xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity flex items-center gap-1.5"
          >
            <span className="text-primary">&lt;</span>
            <span>Zeeshan Lateef</span>
            <span className="text-primary">/&gt;</span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  activeSection === link.href.slice(1)
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Action Button & Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeClick}
              className="px-4 py-2 text-xs font-semibold tracking-wide uppercase border border-white/10 rounded-full hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center gap-1"
            >
              Resume
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburguer Trigger */}
          <div className="flex md:hidden">
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
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`text-2xl font-display font-medium block ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
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
                className="w-full py-4 text-center text-sm font-semibold tracking-wide uppercase bg-primary text-black rounded-full hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-300"
              >
                Open & Download Resume
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
