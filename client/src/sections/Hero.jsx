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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const scrollToSection = (e, id) => {
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

  const handleResumeClick = () => {
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
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* 3D Canvas Particle Background */}
      <ParticleBackground />



      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-8"
        >
          {/* Welcome Tag */}
          <motion.div
            variants={itemVariants}
            className="px-4 py-1.5 glass-panel rounded-full text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            Available for Opportunities
          </motion.div>

          {/* Name Header */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-tight"
          >
            Hi, I'm{' '}
            <span className="title-gradient font-extrabold">
              Zeeshan Lateef
            </span>
          </motion.h1>

          {/* Tagline/Typewriter */}
          <motion.div
            variants={itemVariants}
            className="text-lg sm:text-2xl md:text-3xl font-display font-medium text-gray-300"
          >
            I am a <Typewriter phrases={[
              "Computer Science Engineer",
              "B.Tech from CSE",
              "Software Developer",
              "Full Stack Developer",
              "MERN Developer",
              "Php/Laravel Developer"
            ]} />
          </motion.div>

          {/* Short Bio Tagline */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 font-sans leading-relaxed"
          >
            Building scalable, high-performance web applications with clean, maintainable code. Focused on crafting premium user interfaces and solid REST API architectures.
          </motion.p>

          {/* Call to Actions (CTAs) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none px-4 sm:px-0"
          >
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white hover:border-white/20 hover:bg-white/5 font-semibold rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Contact Me
            </a>

            <a
              href="/assets/resume-zeeshanlateef.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeClick}
              className="w-full sm:w-auto px-8 py-4 border border-primary/20 text-primary hover:border-primary/40 hover:bg-primary/5 font-semibold rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </motion.div>

          {/* Animated Hover Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
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
