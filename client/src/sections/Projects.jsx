import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltCard from '../components/TiltCard';
import { GithubIcon } from '../components/SocialIcons';
import ParticleBackground from '../components/ParticleBackground';

// Featured homepage fallback projects (9) with Unsplash topic images
const fallbackProjects = [
  {
    title: 'HRMS (Human Resource Management System)',
    description: 'Developed a lightweight HRMS application to manage employee records and attendance. Implemented employee CRUD operations with validation and unique ID handling. Built attendance tracking with date and status management.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://hrms-lite-orpin-delta.vercel.app/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: true,
    order: 1
  },
  {
    title: 'Inventory & Order Management System',
    description: 'Developed full-stack Inventory Management System for managing products, customers, orders, and stock. Built a responsive React frontend with dashboard insights and order management features. Developed FastAPI-based REST APIs with PostgreSQL integration and automated inventory updates.',
    techStack: ['React.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'REST API'],
    thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://inventory-mgmt-system-mu.vercel.app/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: true,
    order: 2
  },
  {
    title: 'E-Commerce Website',
    description: 'Developed a full-stack e-commerce platform using PHP, Laravel, Blade, and MySQL. Built cart, checkout, Buy Now, and order management features. Integrated PhonePe Payment Gateway for secure payments. Developed Admin Panel for products, customers, orders, and inventory.',
    techStack: ['PHP', 'Laravel', 'Blade', 'MySQL', 'Bootstrap', 'JavaScript'],
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://drayury.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Laravel / PHP',
    featured: true,
    order: 3
  },
  {
    title: 'Split Expense Management System (Splitwise Clone)',
    description: 'Built a web application for managing shared expenses and balances. Track shared group expenses, view detailed net balances between members, and log settlements.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://split-app-delta.vercel.app/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: true,
    order: 4
  },
  {
    title: 'White Feature Cab',
    description: 'A premium car rental and transfer booking portal. Features dynamic route selector, fleet cataloging, customizable travel parameters, and instant contact booking details.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    thumbnail: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://cabscoaches.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Laravel / PHP',
    featured: true,
    order: 5
  },
  {
    title: 'Sol Cones',
    description: 'A responsive and polished business portal showcasing Sol Cones products. Optimized layouts for cross-device compatibility, featuring interactive catalog displays.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1590483736622-39da8af7ff8f?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://solcones.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: true,
    order: 6
  },
  {
    title: 'Sol Maximus',
    description: 'A modern, optimized web portal for solar power solutions. Features solar savings estimation widgets, premium dark layout systems, and fast loading performance.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    thumbnail: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://solmaximus.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: true,
    order: 7
  },
  {
    title: 'WetooMedia Foundation',
    description: 'A clean, premium portal for the WetooMedia nonprofit organization. Supports dynamic campaign listings, media galleries, contact forms, and animated UI cards.',
    techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
    thumbnail: 'https://images.unsplash.com/photo-1460518451285-97b6ba32ee61?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://www.wetoomedia.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: true,
    order: 8
  },
  {
    title: 'Sohan Rai Public School',
    description: 'An educational institution portal. Features student admissions enrollment tracking, academic event calendars, contact directories, and interactive galleries.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://sohanraipublicschool.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: true,
    order: 9
  }
];

const Projects = () => {
  const [projects] = useState(fallbackProjects);
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

  // Filter projects to show only featured ones on homepage
  const featuredProjects = projects.filter(p => p.featured);
  const displayProjects = featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 9);

  return (
    <section id="projects" className="py-16 relative overflow-hidden animated-bg border-b border-white/5">
      {/* 3D Canvas Particle Background */}
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

        {/* Projects Grid - 3 Columns */}
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
                  {/* Thumbnail / Image Container */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/5 bg-neutral-900">
                    <a
                      href={project.liveLink || project.githubLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full flex items-center justify-center cursor-pointer"
                    >
                      {isImageFailed ? (
                        /* High Quality Solid Placeholder */
                        <div className="w-full h-full bg-[#0d0d15] flex flex-col items-center justify-center p-6 text-center">
                          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-display font-bold text-xl text-gradient-purple mb-2 shadow-md">
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
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </a>

                    {/* Category Label Overlay */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/5 text-[11px] font-semibold text-gray-300 pointer-events-none">
                      {project.category || 'Featured'}
                    </div>

                    {/* Action Overlay on Hover */}
                    <div
                      onClick={(e) => {
                        if (e.target.closest('.action-btn')) return;
                        window.open(project.liveLink || project.githubLink, '_blank', 'noopener,noreferrer');
                      }}
                      className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 cursor-pointer"
                    >
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
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
                            className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[9px] font-semibold tracking-wide uppercase text-gray-400"
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
