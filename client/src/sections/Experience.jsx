import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Ahmad Web Solutions',
    period: 'Sep 2025 – Present',
    location: 'Delhi, India',
    bullets: [
      'Developed full-stack web applications using PHP, Laravel, React.js, and MySQL.',
      'Built REST APIs and integrated frontend with backend services.',
      'Fixed bugs and optimized application performance.'
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'Abtus World',
    period: 'Jul 2024 – Aug 2025',
    location: 'Delhi, India',
    bullets: [
      'Developed responsive and modern web interfaces using HTML5, CSS3, Bootstrap, JavaScript, and React.js.',
      'Integrated frontend applications with REST APIs and backend services for dynamic data management.',
      'Improved website responsiveness, cross-browser compatibility, and UI performance.'
    ]
  },
  {
    role: 'Frontend Developer Trainee',
    company: 'Zynextro Software',
    period: 'Dec 2023 – Jun 2024',
    location: 'Noida, India',
    bullets: [
      'Assisted in developing responsive websites using HTML, CSS, Bootstrap, JavaScript, and React.js.',
      'Built reusable UI components and collaborated with senior developers on client projects.',
      'Participated in debugging, testing, and UI enhancement for production applications.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 relative overflow-hidden bg-[#08080f] border-b border-white/5">


      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Work <span className="title-gradient">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical central timeline line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[2px] bg-primary/20 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-primary/20 -translate-x-1/2 md:hidden" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-stretch md:justify-between relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline bullet indicator */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-8 h-8 rounded-full bg-dark-bg border-2 border-secondary flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(155,81,224,0.4)]">
                    <Briefcase className="w-3.5 h-3.5 text-primary" />
                  </div>

                  {/* Left / Right Card placeholder for alignment */}
                  <div className="w-full md:w-[45%] hidden md:block" />

                  {/* Experience Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
                    className="w-full md:w-[45%] pl-10 md:pl-0"
                  >
                    <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.02)] transition-all duration-300">
                      {/* Card Header */}
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        {exp.period}
                      </span>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-white mt-1 mb-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-medium text-gray-300 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span>{exp.company}</span>
                        <span className="text-white/20 hidden sm:inline">•</span>
                        <span className="text-gray-400 font-normal flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-secondary" />
                          {exp.location}
                        </span>
                      </h4>

                      {/* Bullet list */}
                      <ul className="mt-6 space-y-3 font-sans text-sm text-gray-400">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
