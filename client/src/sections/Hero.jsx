import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon, MailIcon, AnimatedSocial } from '../components/SocialIcons';
import ParticleBackground from '../components/ParticleBackground';
import Typewriter from '../components/Typewriter';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 15
      }
    }
  };

  const scrollToSection = (e, id) => {
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

  const handleResumeClick = (e) => {
    const downloadAnchor = document.createElement('a');
    downloadAnchor.href = "/assets/resume-zeeshanlateef.pdf";
    downloadAnchor.setAttribute('download', 'resume-zeeshanlateef.pdf');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden animated-bg"
    >
      {/* 3D Canvas Particle Background */}
      <ParticleBackground />

      {/* Hero Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[300px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-8 sm:py-12 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-7"
        >
          {/* Executive Availability Status Tag */}
          <motion.div
            variants={itemVariants}
            className="px-4 py-1.5 glass-panel rounded-full text-xs font-semibold uppercase tracking-wider border border-white/10 bg-white/5 transition-all duration-300 flex items-center gap-2.5 shadow-sm"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-gray-300 font-medium">Available for Opportunities</span>
          </motion.div>

          {/* Main Name Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Hi, I'm{' '}
            <span className="title-gradient font-extrabold">
              Zeeshan Lateef
            </span>
          </motion.h1>

          {/* Typewriter Tagline with Baseline Alignment */}
          <motion.div
            variants={itemVariants}
            className="text-lg sm:text-2xl md:text-3xl font-display font-medium text-gray-200 flex flex-wrap items-baseline justify-center text-center gap-1.5 leading-snug py-1"
          >
            <span className="text-gray-400 font-normal">I am a</span>
            <Typewriter phrases={[
              "Full Stack Developer",
              "PHP / Laravel Developer",
              "React Developer",
              "Vibe Coding Specialist",
              "MERN Stack Engineer",
              "Computer Science Engineer"
            ]} />
          </motion.div>

          {/* Professional Bio Paragraph */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-300 font-sans leading-relaxed font-normal"
          >
            Building scalable, high-performance web applications with clean, maintainable code. Specializing in PHP/Laravel backend architectures, React frontends, and RESTful APIs using modern tech stacks.
          </motion.p>

          {/* Priority Call to Actions (CTAs) - Priority #1 Resume */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none pt-4"
          >
            {/* Priority #1: Download Resume */}
            <a
              href="/assets/resume-zeeshanlateef.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeClick}
              className="btn-primary-custom w-full sm:w-auto px-8 py-3.5 rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-lg"
            >
              <FileText className="w-4.5 h-4.5 shrink-0 group-hover:rotate-6 transition-transform" />
              Download Resume
            </a>

            {/* Priority #2: View Portfolio */}
            <a
              href="/#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="w-full sm:w-auto px-8 py-3.5 glass-panel border border-white/15 text-white hover:border-primary/50 hover:bg-primary/10 text-sm sm:text-base font-semibold rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Priority #3: Contact Me */}
            <a
              href="/#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full sm:w-auto px-6 py-3.5 text-gray-300 hover:text-white text-sm sm:text-base font-medium rounded-full hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-1.5"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-6"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
