import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowLeft, ExternalLink, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltCard from '../components/TiltCard';
import { GithubIcon } from '../components/SocialIcons';
import ParticleBackground from '../components/ParticleBackground';

// Full fallback list of 39 projects with Unsplash topic images
const fallbackProjects = [
  // FEATURED HOMEPAGE PROJECTS (9)
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
  },

  // DEDICATED EXPLORER PAGE ONLY PROJECTS (30)
  {
    title: 'MarkImpex',
    description: 'A robust Laravel-based corporate ERP application designed to manage imports, exports, client records, and transaction ledgers.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://awsdemo.co.in/markimpex-laravel/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Laravel / PHP',
    featured: false,
    order: 10
  },
  {
    title: 'Ecocarz',
    description: 'An eco-friendly automobile dealership landing portal listing catalog filters, vehicle specifications, and query capture details.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://ecocarz.in/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 11
  },
  {
    title: 'Baotijara',
    description: 'Premium e-commerce portal matching vendors with consumers, featuring cart structures, payment redirects, and product directories.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS'],
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://baotijara.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Laravel / PHP',
    featured: false,
    order: 12
  },
  {
    title: 'Markaz E Libas',
    description: 'Online catalog for boutique fashion lines. Integrates product categorization, image zoom, responsive filters, and quote submissions.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS'],
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://markazelibas.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Laravel / PHP',
    featured: false,
    order: 13
  },
  {
    title: 'Arcot Blocks',
    description: 'Industrial concrete block manufacturer directory displaying product catalogs, technical specs sheets, and quote forms.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://arcotblocks.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 14
  },
  {
    title: 'Rawad Med Wisdom',
    description: 'A medical education and resource hub portal. Displays course directories, training schedules, and online registration models.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://www.rawadmedwisdom.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Laravel / PHP',
    featured: false,
    order: 15
  },
  {
    title: 'Islamic Libas',
    description: 'E-commerce platform offering premium cultural attire. Features product catalog indexing, cart management, and local checkout modules.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=60',
    liveLink: 'http://islamiclibas.in/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Laravel / PHP',
    featured: false,
    order: 16
  },
  {
    title: 'Travel Craft',
    description: 'Tourism and holiday planning portal listing package itineraries, flight details, booking calendars, and inquiry widgets.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    thumbnail: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://travelcraftintl.ae/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 17
  },
  {
    title: '35 Frames',
    description: 'A premium photography and videography studio directory indexing event galleries, catalog filters, and contact bookings.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://35frames.in/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 18
  },
  {
    title: 'Stay N Meet',
    description: 'Hotel room reservation and co-working booking space portal with dynamic availability check and payment integration.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS'],
    thumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://staynmeet.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Laravel / PHP',
    featured: false,
    order: 19
  },
  {
    title: 'Rezelia Health Care',
    description: 'Pharmaceutical directory displaying healthcare lists, medical categories, dynamic filters, and distributor contacts.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://rezeliahealthcare.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 20
  },
  {
    title: 'Core Trust',
    description: 'A corporate trust and financial services portal listing audit information, service categories, and compliance forms.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    thumbnail: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://coretrustuae.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 21
  },
  {
    title: 'COBME',
    description: 'Medical certification and credential checking boards. Features candidate search tracking and registration logs.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS'],
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://cobme.org/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Laravel / PHP',
    featured: false,
    order: 22
  },
  {
    title: 'NIBHM',
    description: 'Hotel and hospitality management academy portal. Logs courses list, application registration forms, and news grids.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://www.nibhm.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 23
  },
  {
    title: 'Orbit Star Services',
    description: 'Maintenance services scheduling and facility management tracker displaying package details and reservation grids.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://orbitstarservices.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 24
  },
  {
    title: 'Akognos Life Sciences',
    description: 'Premium life sciences product directory indexing medical inventory catalogues, research brochures, and sample queries.',
    techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    thumbnail: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://www.akognoslifesciences.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: false,
    order: 25
  },
  {
    title: 'Innovate',
    description: 'Bespoke corporate template engineered for modern design agencies. Showcases visual portfolios and smooth page scrolls.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Framer Motion'],
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=60',
    liveLink: '#0',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 26
  },
  {
    title: 'Al Sahil Media Event',
    description: 'Corporate media events catalog indexing video portfolios, visual categories, seat scheduling, and customer inquiries.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://alsahilmediaevent.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 27
  },
  {
    title: 'Sulaiman Khateeb',
    description: 'A personal portfolio page for an artist/writer. Showcases literary archives, publication dates, and speaking events.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://sulaimankhateeb.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 28
  },
  {
    title: 'Serene Designs',
    description: 'Interior architecture catalog displaying home layout grids, design themes, room sizes, and consultant booking.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://www.serenedesigns.org/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 29
  },
  {
    title: 'Fast Flight Help',
    description: 'A flight assistance and ticketing resolution portal. Helps users manage delayed flights claims, routing, and refunds.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://fastflighthelp.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Laravel / PHP',
    featured: false,
    order: 30
  },
  {
    title: 'BK Handicrafts',
    description: 'Artisanal crafts e-commerce directory listing wooden products, price catalogs, shipping rates, and email billing.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://bkhandicrafts.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 31
  },
  {
    title: 'Whats Holding You',
    description: 'Mental health and therapy consultation portal. Integrates counseling lists, booking sessions, and discussion boards.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS'],
    thumbnail: 'https://images.unsplash.com/photo-1527137341206-1a2ab8144b56?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://whatsholdingyou.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Laravel / PHP',
    featured: false,
    order: 32
  },
  {
    title: 'Falah Global School',
    description: 'International school registry. Tracks student enrollment databases, fee records, grade reports, and course calendars.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://www.falahglobalinstitute.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Laravel / PHP',
    featured: false,
    order: 33
  },
  {
    title: 'Alco Awareness',
    description: 'Awareness portal providing health guides, regional recovery directories, dynamic support hotlines, and counseling boards.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1508847154043-be12a62861c1?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://alcoawareness.in/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 34
  },
  {
    title: 'Jet Connections',
    description: 'Luxury private jet booking scheduler displaying flight range details, booking catalogs, and passenger controls.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    thumbnail: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://jetconnecxons.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 35
  },
  {
    title: 'Job Circuit',
    description: 'Full stack recruitment board matching job applicants with employers. Features resume uploads, application filters, and matching indexes.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://job-circuit.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: false,
    order: 36
  },
  {
    title: 'Savvy Trading',
    description: 'Trading consulting and market dashboard displaying asset indices, technical indicator sheets, and scheduling calls.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://savvytrading.in/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 37
  },
  {
    title: 'Suvidha',
    description: 'Municipal utility catalog providing contact listings, request filings, tax schedules, and administrative query trackers.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    thumbnail: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&auto=format&fit=crop&q=60',
    liveLink: '#0',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 38
  },
  {
    title: 'Zavian Overseas',
    description: 'Global manpower recruitment agency portal displaying overseas visa requirements, job listings, and applicant registration.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS'],
    thumbnail: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://zavianoverseas.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Laravel / PHP',
    featured: false,
    order: 39
  }
];

const categories = ['All', 'Full Stack', 'Laravel / PHP', 'Frontend', 'Backend'];

const AllProjects = () => {
  const [projects] = useState(fallbackProjects);
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
    // Exclude featured homepage projects to show only remaining standard projects
    if (project.featured) return false;

    const matchesCategory = selectedCategory === 'All' || 
      project.category.toLowerCase().includes(selectedCategory.toLowerCase().split(' / ')[0]) ||
      (selectedCategory === 'Laravel / PHP' && (project.category.toLowerCase().includes('laravel') || project.category.toLowerCase() === 'php'));

    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
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
                    ? 'bg-gradient-to-r from-primary to-secondary text-black border-transparent shadow-[0_0_15px_rgba(0,210,255,0.2)]'
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
                    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/5 bg-neutral-900 flex items-center justify-center">
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
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}

                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/5 text-[11px] font-semibold text-gray-300">
                        {project.category}
                      </div>

                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 border border-white/15 hover:bg-primary hover:text-black rounded-full transition-all duration-300 text-white"
                          >
                            <GithubIcon className="w-5 h-5" />
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 border border-white/15 hover:bg-secondary hover:text-white rounded-full transition-all duration-300 text-white"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-lg font-display font-bold text-white mb-2.5 group-hover:text-primary transition-colors line-clamp-1">
                          {project.title}
                        </h3>
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
