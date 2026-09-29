import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Briefcase, Calendar, MapPin, Building2, CheckCircle2, Award, Download, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import TiltCard from '../components/TiltCard';

const detailedExperiences = [
  {
    role: 'Full Stack Developer',
    company: 'Ahmad Web Solutions',
    period: 'Sep 2025 – Present',
    location: 'Delhi, India',
    type: 'Full-Time',
    status: 'Current Role',
    description: 'Working as a full-stack developer building dynamic web applications and custom portals for clients using PHP, Laravel, React.js, and MySQL.',
    responsibilities: [
      'Built and maintained full-stack web applications using PHP, Laravel, React.js, and MySQL.',
      'Designed REST APIs and integrated them with React frontend components.',
      'Optimized MySQL database queries and table structures to make pages load faster.',
      'Fixed bugs, improved code organization, and maintained live client websites.',
      'Used modern developer tools and AI assistants to speed up daily feature updates.'
    ],
    techStack: ['PHP', 'Laravel', 'React.js', 'MySQL', 'REST APIs', 'Tailwind CSS', 'Git'],
    achievements: [
      'Developed custom admin dashboards and client portals.',
      'Improved database query speed and application load times.'
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'Abtus World',
    period: 'Jul 2024 – Aug 2025',
    location: 'Delhi, India',
    type: 'Full-Time',
    status: 'Completed',
    description: 'Focused on developing responsive, easy-to-navigate user interfaces and connecting client-side forms with backend services.',
    responsibilities: [
      'Built responsive web interfaces using React.js, JavaScript (ES6+), HTML5, CSS3, and Bootstrap.',
      'Connected frontend forms and components with REST APIs for real-time data display.',
      'Fixed cross-browser styling issues and improved mobile layout responsiveness.',
      'Worked closely with design files to turn ideas into clean React components.',
      'Managed state across components using React Context API.'
    ],
    techStack: ['React.js', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Bootstrap', 'REST APIs', 'Git'],
    achievements: [
      'Delivered multiple client websites with clean mobile layouts.',
      'Improved page speed and mobile usability across production projects.'
    ]
  },
  {
    role: 'Frontend Developer Trainee',
    company: 'Zynextro Software',
    period: 'Dec 2023 – Jun 2024',
    location: 'Noida, India',
    type: 'Trainee',
    status: 'Completed',
    description: 'Practical hands-on training in frontend web development, component building, and team git workflows.',
    responsibilities: [
      'Assisted senior developers in building responsive website layouts using HTML, CSS, JavaScript, and React.js.',
      'Created reusable UI components and written simple, clean code.',
      'Participated in daily testing, UI bug fixing, and layout adjustments.',
      'Gained practical experience with Git version control and pull request workflows.'
    ],
    techStack: ['JavaScript', 'React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Git'],
    achievements: [
      'Grew from trainee to active project contributor.',
      'Built component libraries used across company projects.'
    ]
  }
];

const WorkPrinciples = [
  {
    title: 'Clean & Easy-to-Maintain Code',
    desc: 'Writing clean code with clear folder structure so projects stay simple to update and bug-free.',
    icon: <CheckCircle2 className="w-5 h-5 text-primary" />
  },
  {
    title: 'Fast & Reliable Delivery',
    desc: 'Working efficiently to turn ideas into working features without missing deadlines.',
    icon: <Sparkles className="w-5 h-5 text-amber-400" />
  },
  {
    title: 'Good Team Communication',
    desc: 'Collaborating clearly with designers, backend developers, and team leads to keep projects moving forward smoothly.',
    icon: <Building2 className="w-5 h-5 text-secondary" />
  }
];

const ExperiencePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleResumeClick = () => {
    const downloadAnchor = document.createElement('a');
    downloadAnchor.href = "/assets/resume-zeeshanlateef.pdf";
    downloadAnchor.setAttribute('download', 'resume-zeeshanlateef.pdf');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
  };

  return (
    <div className="pt-28 pb-20 relative animated-bg min-h-screen">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Navigation / Back Button */}
        <div className="mb-8 flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-primary transition-colors glass-panel px-4 py-2 rounded-full border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <button
            onClick={handleResumeClick}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-primary transition-colors glass-panel px-4 py-2 rounded-full border border-white/10 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Download Resume
          </button>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 glass-panel rounded-full text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/5 mb-4"
          >
            <Award className="w-3.5 h-3.5" />
            2+ Years Work History
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white mb-4"
          >
            Work <span className="title-gradient">Experience</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed"
          >
            My professional journey as a Full Stack and Frontend Developer across software companies in Delhi & Noida.
          </motion.p>
        </div>

        {/* Career Timeline Section */}
        <div className="space-y-12 mb-20">
          {detailedExperiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TiltCard className="p-8 relative overflow-hidden group">
                {/* Header Info */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                        {exp.status}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1.5 font-sans">
                        <Calendar className="w-3.5 h-3.5 text-secondary" />
                        {exp.period}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-primary transition-colors">
                      {exp.role}
                    </h2>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-gray-300 mt-1">
                      <span className="flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-primary" />
                        {exp.company}
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="flex items-center gap-1.5 font-normal text-gray-400">
                        <MapPin className="w-3.5 h-3.5 text-secondary" />
                        {exp.location}
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="text-xs text-gray-400 font-normal">{exp.type}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleResumeClick}
                    className="self-start lg:self-center px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-semibold text-gray-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                  >
                    <FileText className="w-3.5 h-3.5 text-primary" />
                    Download Resume PDF
                  </button>
                </div>

                {/* Description & Responsibilities */}
                <div className="py-6 space-y-4">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider pt-2">
                    Key Work Responsibilities:
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-300 font-sans">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 leading-relaxed p-2.5 rounded-lg bg-white/5 border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements & Tech Stack */}
                <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">Technologies Used</span>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-lg border border-white/10 font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:max-w-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">Key Accomplishments</span>
                    <ul className="space-y-1 text-xs text-gray-300">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Work Ethics */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-white mb-3">
              My Work <span className="title-gradient">Values</span>
            </h2>
            <p className="text-sm text-gray-400 max-w-xl mx-auto">
              How I like to work when joining software engineering teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WorkPrinciples.map((item, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 w-fit">
                  {item.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="glass-panel p-10 rounded-3xl border border-white/10 text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-display font-bold text-white">Looking to Hire a Full Stack Developer?</h2>
          <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
            I am available for full-time positions, Laravel projects, and React frontend contracts.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="btn-primary-custom px-8 py-3.5 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer shadow-md flex items-center gap-2"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={handleResumeClick}
              className="px-8 py-3.5 border border-white/15 text-white font-bold rounded-full hover:bg-white/5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExperiencePage;
