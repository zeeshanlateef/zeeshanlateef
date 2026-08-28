import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ finishLoading }) => {
  useEffect(() => {
    // Automatically trigger page reveal after 3 seconds for a relaxed, premium experience
    const timer = setTimeout(() => {
      finishLoading();
    }, 3000);

    return () => clearTimeout(timer);
  }, [finishLoading]);

  // Name splitting for letter-by-letter stagger animations
  const nameLetters = "Zeeshan Lateef".split("");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: {
      y: '-100%',
      opacity: 0,
      transition: {
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1], // premium custom cubic-bezier (exact CSS easeInOutQuint)
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.8,
      filter: 'blur(10px)'
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        delay: i * 0.08, // Stagger letter by letter
      }
    })
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: '160px', 
      opacity: 1, 
      transition: { duration: 1, delay: 1.2, ease: "easeInOut" } 
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, delay: 1.4, ease: "easeOut" } 
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 w-full h-full bg-[#05050a] z-50 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Noise overlay */}
      <div className="noise-bg" />



      <div className="text-center relative z-10 flex flex-col items-center select-none">
        
        {/* Animated letter-by-letter Name */}
        <div className="flex flex-wrap items-center justify-center font-display text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-white">
          {/* Animated opening brace */}
          <motion.span
            initial={{ opacity: 0, x: -20, rotate: -45 }}
            animate={{ opacity: 0.5, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-primary mr-3"
          >
            &lt;
          </motion.span>

          {/* Staggered Name Letters */}
          {nameLetters.map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className={char === " " ? "w-4" : "inline-block text-white tracking-tight"}
              style={{ textShadow: char !== " " ? '0 0 20px rgba(255,255,255,0.1)' : 'none' }}
            >
              {char}
            </motion.span>
          ))}

          {/* Animated closing brace */}
          <motion.span
            initial={{ opacity: 0, x: 20, rotate: 45 }}
            animate={{ opacity: 0.5, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-primary ml-3"
          >
            /&gt;
          </motion.span>
        </div>

        {/* Short, professional status text */}
        <div className="overflow-hidden h-6 flex items-center justify-center mb-6">
          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="text-[9px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold"
          >
            Full Stack Software Developer / Software Engineer
          </motion.p>
        </div>

        {/* Minimal loading bar */}
        <motion.div 
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          className="h-[1px] bg-white/5 rounded-full overflow-hidden relative"
        >
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{
              duration: 2.2,
              repeat: 0,
              ease: "easeInOut"
            }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-primary to-secondary"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
