import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltCard from '../components/TiltCard';
import { GithubIcon } from '../components/SocialIcons';
import ParticleBackground from '../components/ParticleBackground';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [projects] = useState(projectsData);
  const [failedImages, setFailedImages] = useState({});

  const handleImageError = (projectTitle) => {
    setFailedImages(prev => ({
      ...prev,
      [projectTitle]: true
    }));
  };

  const getInitials = (title) => {
    return title
      .split(' ')
      .map(word => word[0])
      .join('')
      .slice(0, 3)
      .toUpperCase();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const featuredProjects = projects.filter(p => p.featured);
  const displayProjects = featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 9);

  return (
    <section id="projects" className="py-16 relative overflow-hidden bg-[#05050a] border-b border-white/5">
      <ParticleBackground />
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
            Featured <span className="title-gradient">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayProjects.map((project, idx) => {
            const isImageFailed = failedImages[project.title] || !project.thumbnail;

            return (
              <motion.div key={idx} variants={cardVariants}>
                <TiltCard className="flex flex-col h-full group">
                  {/* Thumbnail Container */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/5 bg-neutral-900">
                    <a
                      href={project.liveLink || project.githubLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full flex items-center justify-center cursor-pointer"
                    >
                      {isImageFailed ? (
                        <div className="w-full h-full bg-[#0d0d15] flex flex-col items-center justify-center p-6 text-center">
                          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-display font-bold text-xl text-primary mb-2 shadow-md">
                            {getInitials(project.title)}
                          </div>
                          <span className="text-gray-400 text-[10px] tracking-wider uppercase font-semibold">
                            {project.category || 'Web Application'}
                          </span>
                        </div>
                      ) : (
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          onError={() => handleImageError(project.title)}
                          loading="lazy"
                          decoding="async"
                          width="600"
                          height="337"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </a>

                    {/* Category Badge Overlay (High Contrast & Visible) */}
                    <div className="category-badge absolute top-4 left-4 bg-slate-900/90 text-white px-3.5 py-1.5 rounded-lg border border-slate-700 text-[11px] font-bold tracking-wide pointer-events-none shadow-lg">
                      {project.category || 'Featured'}
                    </div>

                    {/* Action Overlay on Hover */}
                    <div
                      onClick={(e) => {
                        if (e.target.closest('.action-btn')) return;
                        window.open(project.liveLink || project.githubLink, '_blank', 'noopener,noreferrer');
                      }}
                      className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 cursor-pointer"
                    >
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`View ${project.title} Source Code on GitHub`}
                          className="action-btn p-3 bg-white/10 border border-white/15 hover:bg-primary hover:text-black rounded-full transition-all duration-300 text-white"
                          title="GitHub Source Code"
                        >
                          <GithubIcon className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Visit ${project.title} Live Website`}
                          className="action-btn p-3 bg-white/10 border border-white/15 hover:bg-secondary hover:text-white rounded-full transition-all duration-300 text-white"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <a
                        href={project.liveLink || project.githubLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block cursor-pointer"
                      >
                        <h3 className="text-lg font-display font-bold text-white mb-2.5 group-hover:text-primary transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                      </a>
                      <p className="text-gray-400 text-xs leading-relaxed mb-6 font-sans line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="tech-badge px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-semibold tracking-wide uppercase text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Explore More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <Link
            to="/projects"
            className="px-8 py-4 bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(0,210,255,0.15)] hover:scale-105 transition-all duration-300 flex items-center gap-2.5 group"
          >
            Explore More Projects (30+)
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
