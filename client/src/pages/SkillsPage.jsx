import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, Layout, Server, Database, Wrench, Code2, Cpu, Zap, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import TiltCard from '../components/TiltCard';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <Layout className="w-6 h-6 text-primary" />,
    badgeColor: 'border-primary/30 text-primary bg-primary/10',
    description: 'Creating clean, responsive, and easy-to-use interfaces using modern JavaScript and CSS.',
    skills: [
      { name: 'React.js', description: 'Hooks, state management, reusable components, and React Router.', icon: '⚡' },
      { name: 'JavaScript (ES6+)', description: 'Async/await, DOM updates, array methods, and modern ES syntax.', icon: '💻' },
      { name: 'HTML5 & CSS3', description: 'Semantic tags, flexbox layout, CSS grid, and responsive styling.', icon: '🎨' },
      { name: 'Tailwind CSS', description: 'Utility classes, custom themes, and fast responsive styling.', icon: '🌊' },
      { name: 'Bootstrap', description: 'Responsive layouts, grid systems, and rapid UI styling.', icon: '📦' },
      { name: 'Responsive UI Design', description: 'Ensuring websites look great on smartphones, tablets, and desktops.', icon: '📱' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: <Server className="w-6 h-6 text-secondary" />,
    badgeColor: 'border-secondary/30 text-secondary bg-secondary/10',
    description: 'Developing server-side logic, database interactions, and REST APIs.',
    skills: [
      { name: 'PHP', description: 'Object-oriented PHP scripting, form handling, and backend logic.', icon: '🐘' },
      { name: 'Laravel', description: 'Eloquent ORM, authentication, route controllers, and blade/API setups.', icon: '🔥' },
      { name: 'Node.js & Express', description: 'Building lightweight JavaScript backend APIs and middleware.', icon: '🟢' },
      { name: 'FastAPI (Python)', description: 'Creating fast, clean REST endpoints using Python.', icon: '🚀' },
      { name: 'REST APIs', description: 'Designing JSON endpoints, standard request status codes, and error handling.', icon: '📡' },
    ]
  },
  {
    id: 'database',
    title: 'Databases & Storage',
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    description: 'Structuring database tables, organizing data, and writing efficient queries.',
    skills: [
      { name: 'MySQL', description: 'Table schemas, relational joins, primary keys, and query execution.', icon: '🐬' },
      { name: 'MongoDB', description: 'NoSQL collections, document structures, and JSON storage.', icon: '🍃' },
      { name: 'PostgreSQL', description: 'Relational data modeling, table constraints, and SQL queries.', icon: '🐘' },
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Workflows',
    icon: <Wrench className="w-6 h-6 text-amber-400" />,
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    description: 'Tools I use for version control, testing, container setups, and AI-assisted workflows.',
    skills: [
      { name: 'Git & GitHub', description: 'Code commits, feature branching, pull requests, and code history.', icon: '🐙' },
      { name: 'Vibe Coding / AI Tools', description: 'Leveraging AI code assistants for fast prototyping, debugging, and iteration.', icon: '🤖' },
      { name: 'Docker', description: 'Basic container configurations and local development setups.', icon: '🐳' },
      { name: 'Postman', description: 'Testing API routes, inspecting request bodies, and validating responses.', icon: '🚀' },
      { name: 'VS Code & Antigravity', description: 'Keyboard shortcuts, extensions, linting, and rapid debugging.', icon: '🛠️' },
    ]
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: <Code2 className="w-6 h-6 text-rose-400" />,
    badgeColor: 'border-rose-500/30 text-rose-400 bg-rose-500/10',
    description: 'Core languages I have mastered and use across frontend, backend, and scripts.',
    skills: [
      { name: 'JavaScript', description: 'Frontend interactive logic and Node.js backend execution.', icon: 'JS' },
      { name: 'PHP', description: 'Server-side web scripting and Laravel applications.', icon: 'PHP' },
      { name: 'Python', description: 'Backend scripts, data structures, and FastAPI endpoints.', icon: 'PY' },
      { name: 'C / C++', description: 'Data structures, algorithms, and core programming fundamentals.', icon: 'C++' },
    ]
  }
];

const StrengthsList = [
  {
    title: 'Clean & Readable Code',
    desc: 'I keep code modular and self-explanatory, making it easy for teammates to read, maintain, and expand.',
    icon: <Layers className="w-5 h-5 text-primary" />
  },
  {
    title: 'Fast & Smart Workflows',
    desc: 'Combining developer experience with AI coding tools to complete features faster while keeping code quality high.',
    icon: <Zap className="w-5 h-5 text-amber-400" />
  },
  {
    title: 'Reliable API Integration',
    desc: 'Connecting React frontends with Laravel or Node backends smoothly, ensuring proper data validation and error handling.',
    icon: <Cpu className="w-5 h-5 text-secondary" />
  },
  {
    title: 'Responsive & Smooth Performance',
    desc: 'Building layouts that load fast, look sharp on mobile devices, and deliver smooth interactions.',
    icon: <Sparkles className="w-5 h-5 text-emerald-400" />
  }
];

const SkillsPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <div className="pt-28 pb-20 relative animated-bg min-h-screen">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Back Navigation */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-primary transition-colors glass-panel px-4 py-2 rounded-full border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 glass-panel rounded-full text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/5 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            My Technical Stack
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white mb-4"
          >
            Skills & <span className="title-gradient">Technologies</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed"
          >
            A breakdown of the programming languages, frameworks, database tools, and workflows I use to build full-stack web applications.
          </motion.p>
        </div>

        {/* Filter Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-14"
        >
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-primary text-black shadow-[0_0_20px_rgba(0,210,255,0.4)] scale-105'
                : 'glass-panel text-gray-300 hover:text-white hover:border-primary/40 border border-white/10'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeTab === cat.id
                  ? 'bg-primary text-black shadow-[0_0_20px_rgba(0,210,255,0.4)] scale-105'
                  : 'glass-panel text-gray-300 hover:text-white hover:border-primary/40 border border-white/10'
              }`}
            >
              {cat.title.split(' ')[0]}
            </button>
          ))}
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="space-y-12 mb-20">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Category Banner */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 glass-panel rounded-xl border border-white/10">
                      {category.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-bold text-white">{category.title}</h2>
                      <p className="text-xs text-gray-400 font-sans mt-0.5">{category.description}</p>
                    </div>
                  </div>
                  <span className={`self-start sm:self-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${category.badgeColor}`}>
                    {category.skills.length} Technologies
                  </span>
                </div>

                {/* 3D Skill Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, idx) => (
                    <TiltCard key={idx} className="p-6 h-full flex flex-col justify-between group">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xl p-2 bg-white/5 rounded-lg border border-white/5">{skill.icon}</span>
                          <h3 className="text-lg font-display font-bold text-white group-hover:text-primary transition-colors">
                            {skill.name}
                          </h3>
                        </div>
                        <p className="text-xs text-gray-300 font-sans leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* How I Work Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-3">
              How I <span className="title-gradient">Approach Coding</span>
            </h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              Principles I follow every day to build good software that users enjoy and developers can maintain easily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {StrengthsList.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 flex items-start gap-4"
              >
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Footer Card */}
        <div className="glass-panel p-10 rounded-3xl border border-white/10 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl font-display font-bold text-white">Need a Full Stack Developer for Your Project?</h2>
            <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
              I am open for full-time developer roles, Laravel backend projects, and React frontend work.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="btn-primary-custom px-8 py-3.5 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer shadow-md flex items-center gap-2"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                className="px-8 py-3.5 border border-white/15 text-white font-bold rounded-full hover:bg-white/5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                See My Projects
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SkillsPage;
