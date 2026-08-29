import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Wrench, Languages, Code2 } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Layout className="w-5 h-5 text-primary" />,
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'JavaScript (ES6+)', 'React.js'],
    glowColor: 'hover:shadow-[0_0_30px_rgba(0,210,255,0.15)]'
  },
  {
    title: 'Backend Development',
    icon: <Server className="w-5 h-5 text-secondary" />,
    skills: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'FastAPI'],
    glowColor: 'hover:shadow-[0_0_30px_rgba(155,81,224,0.15)]'
  },
  {
    title: 'Databases & Storage',
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
    glowColor: 'hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]'
  },
  {
    title: 'Tools & Ecosystem',
    icon: <Wrench className="w-5 h-5 text-amber-400" />,
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code'],
    glowColor: 'hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]'
  },
  {
    title: 'Programming Languages',
    icon: <Code2 className="w-5 h-5 text-rose-400" />,
    skills: ['JavaScript', 'PHP', 'Python', 'C / C++'],
    glowColor: 'hover:shadow-[0_0_30px_rgba(251,113,133,0.15)]'
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills" className="py-16 relative overflow-hidden bg-[#05050a] border-b border-white/5">


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
            Technical <span className="title-gradient">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        {/* Skill Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <TiltCard className="p-6 h-full flex flex-col justify-between">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2.5 bg-white/5 border border-white/5 rounded-xl">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-display font-bold text-white tracking-wide">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3.5 py-2 text-xs font-medium text-gray-300 bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Accent line at the bottom */}
                <div className="w-full h-[2px] bg-white/10 mt-8 rounded-full" />
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
