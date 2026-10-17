import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const CtaBanner = ({
  heading = "Let's Connect & Build Together",
  primaryBtnText = "Contact Me",
  primaryBtnLink = "/contact",
  showSecondary = true,
  secondaryBtnText = "Download Resume",
  secondaryBtnLink,
  className = "mt-16 sm:mt-20",
}) => {
  const handleResumeClick = () => {
    if (secondaryBtnLink) return;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.href = "/assets/resume-zeeshanlateef.pdf";
    downloadAnchor.setAttribute('download', 'resume-zeeshanlateef.pdf');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`w-full ${className}`}
    >
      <div className="relative w-full rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 px-5 sm:px-8 py-3.5 sm:py-4 overflow-hidden shadow-2xl bg-[#090911]/80 backdrop-blur-xl group">
        {/* Ambient background glows */}
        <div className="absolute -right-8 -bottom-8 w-44 h-28 bg-primary/10 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/20 transition-all duration-500" />
        <div className="absolute -left-8 -top-8 w-44 h-28 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 min-h-[52px]">
          {/* Left Side: 4 to 5 words heading only */}
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
            <h2 className="text-base sm:text-lg lg:text-xl font-display font-bold text-white tracking-tight whitespace-nowrap">
              {heading}
            </h2>
          </div>

          {/* Right Side: Button(s) taking minimum height */}
          <div className="flex flex-wrap items-center gap-3 shrink-0 self-end sm:self-auto w-full sm:w-auto justify-end">
            <Link
              to={primaryBtnLink}
              className="btn-primary-custom px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-md shrink-0"
            >
              <span>{primaryBtnText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {showSecondary && (
              secondaryBtnLink ? (
                <Link
                  to={secondaryBtnLink}
                  className="px-4 sm:px-5 py-2.5 border border-white/15 hover:border-white/30 text-white font-medium text-xs sm:text-sm rounded-full hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <FileText className="w-3.5 h-3.5 text-primary" />
                  <span>{secondaryBtnText}</span>
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={handleResumeClick}
                  className="px-4 sm:px-5 py-2.5 border border-white/15 hover:border-white/30 text-white font-medium text-xs sm:text-sm rounded-full hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <FileText className="w-3.5 h-3.5 text-primary" />
                  <span>{secondaryBtnText}</span>
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CtaBanner;
