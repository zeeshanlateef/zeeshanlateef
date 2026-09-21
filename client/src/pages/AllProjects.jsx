import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowLeft, ExternalLink, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltCard from '../components/TiltCard';
import { GithubIcon } from '../components/SocialIcons';
import ParticleBackground from '../components/ParticleBackground';
import { projectsData } from '../data/projectsData';

const categories = ['All', 'Featured', 'Full Stack', 'Laravel / PHP', 'Frontend'];

const AllProjects = () => {
  const [projects] = useState(projectsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [failedImages, setFailedImages] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageError = (projectTitle) => {
    setFailedImages(prev => ({ ...prev, [projectTitle]: true }));
  };

  const getInitials = (title) => {
    return title.split(' ').map(word => word[0]).join('').slice(0, 3).toUpperCase();
  };

  const filteredProjects = projects.filter((project) => {
    const cleanQuery = searchQuery.trim().toLowerCase();

    // Multi-word intelligent search matching
    let matchesSearch = true;
    if (cleanQuery) {
      const searchTokens = cleanQuery.split(/\s+/);
      const searchableText = [
        project.title,
        project.description,
        project.category,
        ...project.techStack,
        project.liveLink
      ].join(' ').toLowerCase();

      matchesSearch = searchTokens.every(token => searchableText.includes(token));
    }

    // Category tab filter matching
    let matchesCategory = false;
    if (selectedCategory === 'All') {
      matchesCategory = true;
    } else if (selectedCategory === 'Featured') {
      matchesCategory = project.featured === true;
    } else if (selectedCategory === 'Laravel / PHP') {
      matchesCategory =
        project.category.toLowerCase().includes('laravel') ||
        project.category.toLowerCase().includes('php') ||
        project.techStack.some((tech) => tech.toLowerCase().includes('laravel') || tech.toLowerCase().includes('php'));
    } else {
      matchesCategory = project.category.toLowerCase() === selectedCategory.toLowerCase();
    }

    // When searching, return all relevant results across entire portfolio
    if (cleanQuery.length > 0) {
      return matchesSearch;
    }

    return matchesCategory;
  });

  return (
    <div className="relative min-h-screen bg-dark-bg text-gray-100 selection:bg-primary/30 selection:text-white pt-28 pb-20">
      <ParticleBackground />
      <div className="noise-bg" />



      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Homepage
        </Link>

        {/* Section Heading */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-4 tracking-tight">
            Projects <span className="title-gradient">Showcase</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl font-sans leading-relaxed">
            A comprehensive list of web applications, custom CRM boards, inventory systems, and backend integrations.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch lg:items-center mb-12">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4.5 py-2.5 text-xs font-semibold rounded-xl tracking-wide uppercase border transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-primary text-black border-transparent shadow-[0_0_15px_rgba(0,210,255,0.2)]'
                    : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/10 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative max-w-md w-full">
            <span className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none text-gray-500">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search by title, tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(0,210,255,0.05)] transition-all duration-300 text-sm font-sans"
            />
          </div>
        </div>

        {/* Results Counter */}
        <p className="text-gray-500 text-xs uppercase tracking-widest mb-6">
          Showing {filteredProjects.length} of {projects.length} Projects
        </p>

        {/* Grid layout - 3 columns */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => {
              const isImageFailed = failedImages[project.title] || !project.thumbnail;

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.4) }}
                >
                  <TiltCard className="flex flex-col h-full group">
                    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/5 bg-neutral-900">
                      <a
                        href={project.liveLink || project.githubLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full flex items-center justify-center cursor-pointer"
                      >
                        {isImageFailed ? (
                          <div className="w-full h-full bg-[#0d0d15] flex flex-col items-center justify-center p-6 text-center">
                            <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-display font-bold text-xl text-gradient-purple mb-2 shadow-md">
                              {getInitials(project.title)}
                            </div>
                            <span className="text-gray-400 text-[10px] tracking-wider uppercase font-semibold text-center leading-snug px-2">
                              {project.category}
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

                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/5 text-[11px] font-semibold text-gray-300 pointer-events-none">
                        {project.category}
                      </div>

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
                            aria-label={`View ${project.title} Source Code on GitHub`}
                            className="action-btn p-3 bg-white/10 border border-white/15 hover:bg-primary hover:text-black rounded-full transition-all duration-300 text-white"
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
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

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
          </div>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/5">
            <Globe className="w-12 h-12 text-gray-500 mx-auto mb-4 animate-pulse" />
            <p className="text-gray-400 font-medium">No projects found matching search filters.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 text-xs font-semibold text-primary underline hover:text-secondary uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
