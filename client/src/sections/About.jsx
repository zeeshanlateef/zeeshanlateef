import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Heart, GraduationCap } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const About = () => {
  const [imgError, setImgError] = useState(false);

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const profileVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#08080f] border-b border-white/5">


      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            About <span className="title-gradient">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        {/* 2-Column Grid (Stretched for Equal Height) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Profile Card Column (5 cols) */}
          <motion.div
            variants={profileVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 flex"
          >
            <TiltCard className="p-8 text-center flex flex-col items-center justify-center w-full h-full">
              {/* Profile Image Container */}
              <div className="relative w-56 h-56 rounded-2xl overflow-hidden border-2 border-primary/20 mb-6 shadow-xl group">
                {imgError ? (
                  <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-black font-display font-bold text-5xl select-none">
                    ZL
                  </div>
                ) : (
                  <img
                    src="/assets/profile.jpg"
                    alt="Zeeshan Lateef"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-1">Zeeshan Lateef</h3>
              <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-4">Full Stack Software Developer / Software Engineer</p>
              
              <div className="w-full border-t border-white/5 my-4 pt-4 flex flex-col space-y-3 text-left px-2">
                <div className="flex items-center text-gray-400 text-sm gap-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>Delhi, India</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm gap-3">
                  <Calendar className="w-4 h-4 text-primary shrink-0" />
                  <span>2+ Years Experience</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm gap-3">
                  <Heart className="w-4 h-4 text-primary shrink-0" />
                  <span>Passionate about Clean Code</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Description & Education Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            {/* Bio Details */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl border border-white/5 flex-grow flex flex-col justify-center"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-4">Professional Overview</h3>
              <p className="text-gray-400 leading-relaxed font-sans mb-4">
                I am a Full Stack Developer with 2+ years of experience building scalable, high-performance web applications. My expertise spans across modern frontend technologies like React.js and robust backend frameworks including PHP (Laravel), Node.js (Express), and FastAPI (Python).
              </p>
              <p className="text-gray-400 leading-relaxed font-sans">
                Throughout my career, I've developed REST APIs, dynamic CRM portals, and e-commerce systems with focus on security, speed, and responsive, user-friendly layouts. I am passionate about writing clean, maintainable, and well-structured code that solves real-world challenges.
              </p>
            </motion.div>

            {/* Education Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300 w-full"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-display font-bold text-white">Education</h4>
              </div>
              <div className="font-sans">
                <p className="text-white font-bold text-base md:text-lg mb-1.5">B.Tech in Computer Science & Engineering</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  Maulana Azad College of Engineering & Technology
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 font-medium pt-3 border-t border-white/5">
                  <span>Period: 2019 – 2023</span>
                  <span className="font-semibold text-primary">CGPA: 8.22 / 10</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
