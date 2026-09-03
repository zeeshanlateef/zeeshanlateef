import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Code2, Server, Terminal, Sparkles, GraduationCap, Briefcase, CheckCircle2, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';

const AboutDetails = () => {
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
            Software Engineer Profile
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white mb-4"
          >
            About <span className="title-gradient">Zeeshan Lateef</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed"
          >
            Full Stack Developer & Computer Science Engineer specializing in PHP/Laravel, React.js, MySQL, and modern Vibe Coding developer practices.
          </motion.p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16 relative">
          
          {/* Left Profile Container (Natural Scroll, Non-Sticky) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Custom Profile Box */}
            <div className="relative overflow-hidden glass-panel rounded-2xl border border-white/5 transition-all duration-300 hover:border-primary/70 hover:shadow-[0_0_12px_rgba(0,210,255,0.25)] p-8 text-center flex flex-col items-center">
              
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-primary/30 mb-6 shadow-2xl group">
                <img
                  src="/assets/profile.jpg"
                  alt="Zeeshan Lateef"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-primary items-center justify-center text-black font-bold text-4xl">
                  ZL
                </div>
              </div>

              <h2 className="text-2xl font-display font-bold text-white mb-1">Zeeshan Lateef</h2>
              <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                Full Stack Developer | Software Developer
              </p>

              <div className="w-full border-t border-white/10 pt-4 space-y-3 text-left text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>Delhi, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <a href="mailto:zeeshanlateef2016@gmail.com" className="hover:text-primary transition-colors truncate">
                    zeeshanlateef2016@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <a href="tel:+919572306596" className="hover:text-primary transition-colors">
                    +91 9572306596
                  </a>
                </div>
              </div>

              <button
                onClick={handleResumeClick}
                className="btn-primary-custom w-full mt-6 py-3.5 px-4 rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <FileText className="w-4 h-4" />
                Download Resume PDF
              </button>
            </div>
          </div>

          {/* Right Column: Scrollable Content Stream (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Professional Summary */}
            <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                <Code2 className="w-6 h-6 text-primary" />
                Professional Profile Summary
              </h2>
              
              <p className="text-gray-300 font-sans leading-relaxed text-sm sm:text-base">
                I am a **Full Stack Software Developer** with 2+ years of hands-on experience building scalable web applications. My core technical expertise spans full-stack PHP (Laravel) architectures, React.js frontend applications, Node.js REST services, and MySQL database engineering.
              </p>

              <p className="text-gray-300 font-sans leading-relaxed text-sm sm:text-base">
                I prioritize writing clean, modular, and maintainable code. Incorporating **Vibe Coding** workflows (leveraging modern developer tooling and agentic AI assistants), I accelerate prototype-to-production deployment cycles while maintaining high standards for security, speed, and cross-browser responsiveness.
              </p>
            </div>

            {/* Core Specializations Tags */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                Core Technical Specializations
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Full Stack Developer', 'PHP / Laravel', 'React.js', 'Vibe Coding', 'MySQL & REST APIs', 'MERN Stack', 'B.Tech CSE'].map((role, idx) => (
                  <span
                    key={idx}
                    className="tech-badge px-3.5 py-1.5 bg-white/5 text-gray-300 rounded-lg text-xs border border-white/10 font-semibold"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Work History */}
            <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-6">
              <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-primary" />
                Work Experience History
              </h2>

              <div className="space-y-8 relative border-l-2 border-primary/30 pl-6 ml-2">
                {/* Role 1 */}
                <div className="relative space-y-2">
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary" />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-white">Full Stack Developer</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">Sep 2025 – Present</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-300">Ahmad Web Solutions • Delhi, India</p>
                  <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-300 pt-1 leading-relaxed">
                    <li>Developed full-stack web applications using PHP, Laravel, React.js, and MySQL.</li>
                    <li>Designed and integrated RESTful APIs with frontend services for dynamic data rendering.</li>
                    <li>Optimized SQL queries, resolved critical bugs, and enhanced overall application performance.</li>
                  </ul>
                </div>

                {/* Role 2 */}
                <div className="relative space-y-2">
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-secondary" />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-white">Frontend Developer</h3>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold">Jul 2024 – Aug 2025</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-300">Abtus World • Delhi, India</p>
                  <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-300 pt-1 leading-relaxed">
                    <li>Engineered responsive, accessible web interfaces using React.js, HTML5, CSS3, Bootstrap, and JavaScript.</li>
                    <li>Integrated client-side components with REST APIs for seamless data management.</li>
                    <li>Enhanced website performance, mobile responsiveness, and cross-browser stability.</li>
                  </ul>
                </div>

                {/* Role 3 */}
                <div className="relative space-y-2">
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-gray-400" />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-white">Frontend Developer Trainee</h3>
                    <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs font-semibold">Dec 2023 – Jun 2024</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-300">Zynextro Software • Noida, India</p>
                  <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-300 pt-1 leading-relaxed">
                    <li>Assisted in building responsive frontend layouts using React.js, JavaScript, and Bootstrap.</li>
                    <li>Built modular UI components and collaborated with senior developers on production client projects.</li>
                    <li>Participated in daily debugging, manual testing, and UI refinements.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Skills Grid */}
            <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-6">
              <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                <Server className="w-6 h-6 text-primary" />
                Technical Competencies & Matrix
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/5">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Frontend Engineering
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, Context API, Responsive UI Design.
                  </p>
                </div>

                <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/5">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Backend & Database
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    PHP (Laravel), Node.js (Express), Python (FastAPI), MySQL, MongoDB, PostgreSQL, REST APIs.
                  </p>
                </div>

                <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/5">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Vibe Coding & Tools
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Git, GitHub, Docker, Postman, Antigravity IDE, Prompt Engineering & Rapid Prototyping.
                  </p>
                </div>

                <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/5">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Languages & Core
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    JavaScript, PHP, Python, C / C++, Object-Oriented Programming (OOP), Data Structures & Algorithms.
                  </p>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education Qualification
              </h2>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Bachelor of Technology (B.Tech) in Computer Science & Engineering</h3>
                <p className="text-sm font-medium text-gray-300">Maulana Azad College of Engineering & Technology</p>
                <div className="flex flex-wrap items-center justify-between text-xs text-gray-400 pt-3 border-t border-white/10">
                  <span>Academic Session: 2019 – 2023</span>
                  <span className="text-primary font-bold text-sm">CGPA: 8.22 / 10</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Call to Action */}
        <div className="glass-panel p-10 rounded-3xl border border-white/10 text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-display font-bold text-white">Let's Connect & Build</h2>
          <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
            Open for full-stack engineering opportunities, Laravel development, or React frontend positions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/#contact"
              className="btn-primary-custom px-8 py-3.5 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer shadow-md"
            >
              Contact Me
            </Link>
            <button
              onClick={handleResumeClick}
              className="px-8 py-3.5 border border-white/15 text-white font-bold rounded-full hover:bg-white/5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutDetails;
