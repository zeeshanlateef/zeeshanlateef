// Centralized Project Data Source for Zeeshan Lateef Portfolio
// Total 56 Projects (9 Featured Homepage Projects + 47 Explorer Projects)

export const projectsData = [
  // ==========================================
  // HOMEPAGE FEATURED PROJECTS (9)
  // ==========================================
  {
    title: 'HRMS (Human Resource Management System)',
    description: 'Lightweight HRMS application to manage employee records, attendance tracking, and CRUD operations with validation and unique ID handling.',
    techStack: ['MERN'],
    thumbnail: '/assets/project-images/hrms.PNG',
    liveLink: 'https://hrms-lite-orpin-delta.vercel.app/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: true,
    order: 1
  },
  {
    title: 'Inventory & Order Management System',
    description: 'Full-stack Inventory Management System for managing products, customers, orders, and stock with automated inventory updates and FastAPI REST APIs.',
    techStack: ['React.js', 'Python', 'FastAPI', 'PostgreSQL'],
    thumbnail: '/assets/project-images/inventory-app.PNG',
    liveLink: 'https://inventory-mgmt-system-mu.vercel.app/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: true,
    order: 2
  },
  {
    title: 'E-Commerce Website',
    description: 'Full-stack e-commerce platform with product catalogs, shopping cart, checkout, PhonePe Payment Gateway integration, and admin management panel.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Payment Gateway'],
    thumbnail: '/assets/project-images/dr-ayura.PNG',
    liveLink: 'https://drayury.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: true,
    order: 3
  },
  {
    title: 'Split Expense Management System',
    description: 'Web application for managing shared expenses and balances. Track group expenses, view net balances between members, and log settlements.',
    techStack: ['MERN'],
    thumbnail: '/assets/project-images/split-app.PNG',
    liveLink: 'https://split-app-delta.vercel.app/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: true,
    order: 4
  },
  {
    title: 'White Feature Cab',
    description: 'Premium car rental and transfer booking portal featuring dynamic route selection, fleet cataloging, customizable travel parameters, and bookings.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/white-feather.PNG',
    liveLink: 'https://cabscoaches.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: true,
    order: 5
  },
  {
    title: 'Sol Cones',
    description: 'Responsive business portal showcasing Sol Cones industrial product lines with interactive catalog displays and inquiry forms.',
    techStack: ['PHP', 'Laravel', 'MySQL'],
    thumbnail: '/assets/project-images/sol-cones.PNG',
    liveLink: 'https://solcones.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: true,
    order: 6
  },
  {
    title: 'Sol Maximus',
    description: 'Modern, optimized web portal for solar power solutions featuring solar savings estimation widgets and high-performance layouts.',
    techStack: ['PHP', 'Laravel', 'MySQL'],
    thumbnail: '/assets/project-images/sol-maximus.PNG',
    liveLink: 'https://solmaximus.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: true,
    order: 7
  },
  {
    title: 'WetooMedia Foundation',
    description: 'Clean portal for the WetooMedia nonprofit organization supporting dynamic campaign listings, galleries, forms, and payment gateway donations.',
    techStack: ['MERN', 'Payment Gateway'],
    thumbnail: '/assets/project-images/we-too-media.PNG',
    liveLink: 'https://www.wetoomedia.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: true,
    order: 8
  },
  {
    title: 'Sohan Rai Public School',
    description: 'Educational institution portal featuring student admissions enrollment tracking, academic event calendars, and interactive galleries.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/sohan-rai.PNG',
    liveLink: 'https://sohanraipublicschool.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: true,
    order: 9
  },

  // ==========================================
  // REMAINING PROJECTS IN PROJECTS PAGE (47)
  // ==========================================
  {
    title: 'MarkImpex',
    description: 'Robust Laravel-based corporate ERP application designed to manage imports, exports, client records, and transaction ledgers.',
    techStack: ['PHP', 'Laravel', 'MySQL'],
    thumbnail: '/assets/project-images/themarkimpex.PNG',
    liveLink: 'https://awsdemo.co.in/markimpex-laravel/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Laravel / PHP',
    featured: false,
    order: 10
  },
  {
    title: 'Ecocarz',
    description: 'Eco-friendly automobile dealership portal listing catalog filters, vehicle specifications, and query capture details.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/eco-carwash.PNG',
    liveLink: 'https://ecocarz.in/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 11
  },
  {
    title: 'Baotijara',
    description: 'Commercial trading and product catalog portal matching vendors with consumers with responsive layout structures.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/baotijara.PNG',
    liveLink: 'https://baotijara.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 12
  },
  {
    title: 'Markaz E Libas',
    description: 'Online boutique fashion e-commerce store with product categorization, cart management, and payment gateway integration.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Payment Gateway'],
    thumbnail: '/assets/project-images/markaz-libas.PNG',
    liveLink: 'https://markazelibas.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: false,
    order: 13
  },
  {
    title: 'Arcot Blocks',
    description: 'Industrial concrete block manufacturer directory displaying product catalogs, technical specs sheets, and quote forms.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/arcot-block.PNG',
    liveLink: 'https://arcotblocks.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 14
  },
  {
    title: 'Rawad Med Wisdom',
    description: 'Medical education and resource hub platform displaying training schedules, course directories, and online registration.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/rawad-medwisdom.PNG',
    liveLink: 'https://www.rawadmedwisdom.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 15
  },
  {
    title: 'Islamic Libas',
    description: 'Core PHP e-commerce platform offering cultural attire with product filtering, cart checkout, and payment gateway.',
    techStack: ['PHP', 'MySQL', 'Payment Gateway'],
    thumbnail: '/assets/project-images/islamic-libas.PNG',
    liveLink: 'http://islamiclibas.in/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: false,
    order: 16
  },
  {
    title: 'Travel Craft',
    description: 'International travel agency portal listing package itineraries, flight details, booking calendars, and inquiry widgets.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/travel-craft.PNG',
    liveLink: 'https://travelcraftintl.ae/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 17
  },
  {
    title: '35 Frames',
    description: 'Photography and videography studio directory indexing event galleries, catalog filters, and contact bookings.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://35frames.in/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 18
  },
  {
    title: 'Stay N Meet',
    description: 'Hotel room reservation and co-working booking space portal with dynamic availability checks and property highlights.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/staynmeet.PNG',
    liveLink: 'https://staynmeet.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 19
  },
  {
    title: 'Rezelia Health Care',
    description: 'Healthcare & pharmaceutical directory listing medical formulations, product catalogs, and distributor contact details.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/rezelia-healthcare.PNG',
    liveLink: 'https://rezeliahealthcare.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 20
  },
  {
    title: 'Core Trust',
    description: 'Corporate advisory and financial trust portal displaying audit services, consultancy packages, and compliance forms.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/core-trust.PNG',
    liveLink: 'https://coretrustuae.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 21
  },
  {
    title: 'Cobme',
    description: 'Medical accreditation council board platform displaying verification registries, news feeds, and application forms.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/cobme.PNG',
    liveLink: 'https://cobme.org/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 22
  },
  {
    title: 'NIBHM Academy',
    description: 'Hotel management institute web portal providing course curricula, academic schedules, and student registration forms.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/nibhm.PNG',
    liveLink: 'https://www.nibhm.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 23
  },
  {
    title: 'Orbit Star Services',
    description: 'Maintenance services scheduling and facility management tracker displaying package details and reservation grids.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/orbit-star.PNG',
    liveLink: 'https://orbitstarservices.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 24
  },
  {
    title: 'Akognos Life Sciences',
    description: 'Life sciences product directory indexing medical inventory catalogues, research brochures, and sample queries.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/akognos.PNG',
    liveLink: 'https://www.akognoslifesciences.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 25
  },
  {
    title: 'Innovate Connecta',
    description: 'Full-stack business innovation hub connecting technology entrepreneurs, enterprise clients, and digital services.',
    techStack: ['MERN'],
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://innovateconnecta.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: false,
    order: 26
  },
  {
    title: 'Al Sahil Media Event',
    description: 'Corporate media and live event management portal showcasing event portfolios, stage setups, and inquiry forms.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/alsahil-media-event.PNG',
    liveLink: 'https://alsahilmediaevent.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 27
  },
  {
    title: 'Sulaiman Khateeb',
    description: 'Personal branding and literary collection portfolio indexing publications, event schedules, biography, and archives.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/sulaiman-khateeb.PNG',
    liveLink: 'https://sulaimankhateeb.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 28
  },
  {
    title: 'Serene Designs',
    description: 'Interior architecture studio portfolio presenting project showcases, design concepts, and client consultations.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/serene-design.PNG',
    liveLink: 'https://www.serenedesigns.org/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 29
  },
  {
    title: 'Fast Flight Help',
    description: 'Aviation assistance and travel resolution portal for managing booking help, flight inquiries, and customer support.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/fastflighthelp.PNG',
    liveLink: 'https://fastflighthelp.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 30
  },
  {
    title: 'BK Handicrafts',
    description: 'Artisanal crafts e-commerce directory listing wooden products, price catalogs, shipping rates, and order inquiries.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/bkhandicraft.PNG',
    liveLink: 'https://bkhandicrafts.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 31
  },
  {
    title: 'Whats Holding You',
    description: 'Therapy and personal growth consultation platform featuring session bookings, counselor profiles, and payment gateway.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Payment Gateway'],
    thumbnail: '/assets/project-images/whatsholdingyou.PNG',
    liveLink: 'https://whatsholdingyou.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: false,
    order: 32
  },
  {
    title: 'Falah Global School',
    description: 'Educational institute web portal featuring academic programs, admissions criteria, student updates, and events.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/falahglobalschool.PNG',
    liveLink: 'https://www.falahglobalinstitute.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 33
  },
  {
    title: 'Alco Awareness',
    description: 'Public health awareness portal offering educational guides, regional recovery directories, and counseling hotlines.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
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
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/jet-connecxons.PNG',
    liveLink: 'https://jetconnecxons.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 35
  },
  {
    title: 'Job Circuit',
    description: 'Career recruitment portal connecting job seekers with open roles across technology and administrative sectors.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/job-circuit.PNG',
    liveLink: 'https://job-circuit.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 36
  },
  {
    title: 'Savvy Trading',
    description: 'Trading consulting and market insight dashboard displaying asset indices, technical indicator sheets, and scheduling.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/savvy-trading.PNG',
    liveLink: 'https://savvytrading.in/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 37
  },
  {
    title: 'Suvidha Attestation',
    description: 'Document apostille and legal attestation consultancy portal displaying service procedures and trackable inquiries.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://suvidhaattestation.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 38
  },
  {
    title: 'Zavian Overseas',
    description: 'Global manpower recruitment agency portal displaying overseas visa requirements, job listings, and applicant registration.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/zavian.PNG',
    liveLink: 'https://zavianoverseas.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 39
  },
  {
    title: 'Indian Craft Construction',
    description: 'Architectural construction portal showcasing structural projects, engineering capabilities, and project portfolios.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/indian-craft.png',
    liveLink: 'https://indiancraftconstruction.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 40
  },
  {
    title: 'Avains Engineering',
    description: 'Industrial engineering and heavy equipment solution portal listing technical specs, services, and client work.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/avains-engineering.png',
    liveLink: 'https://avainsengineering.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 41
  },
  {
    title: 'Asayan Construction',
    description: 'Civil engineering and contracting portal featuring commercial building projects, equipment, and contact forms.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/asayan-construction.png',
    liveLink: 'https://asayanconstruction.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 42
  },
  {
    title: 'Standard Sales Corporation',
    description: 'Industrial goods distribution directory indexing hardware items, catalog specs, and quote request forms.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://standardsalescorporation.co.in/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 43
  },
  {
    title: 'Al Sahil Media Event',
    description: 'Corporate media and live event management portal showcasing event portfolios, stage setups, and inquiry forms.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/alsahil-media-event.PNG',
    liveLink: 'https://www.alsahilmediaevent.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 44
  },
  {
    title: 'Bal Gyan Niketan Ganga School',
    description: 'School management platform featuring student enrollment tracking, fee notifications, and administrative controls.',
    techStack: ['PHP', 'Laravel', 'MySQL'],
    thumbnail: '/assets/project-images/bal-gyan-niketan.png',
    liveLink: 'https://www.bgnbasta.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: false,
    order: 45
  },
  {
    title: 'Teach Tech Testing Centre',
    description: 'Technical examination and certification portal featuring online test booking, candidate results, and verification.',
    techStack: ['MERN'],
    thumbnail: '/assets/project-images/teach-tech.png',
    liveLink: 'https://teachtech.co.in/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: false,
    order: 46
  },
  {
    title: 'Gada Welfare Association',
    description: 'Community welfare association platform with member registration, donation campaigns, and event announcements.',
    techStack: ['PHP', 'Laravel', 'MySQL'],
    thumbnail: '/assets/project-images/gada-welfare.png',
    liveLink: 'https://gwadelhi.org/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: false,
    order: 47
  },
  {
    title: 'Volvo Coaches',
    description: 'Intercity bus fleet management and reservation portal featuring seat availability, schedules, and route maps.',
    techStack: ['PHP', 'Laravel', 'MySQL'],
    thumbnail: '/assets/project-images/volvo-coaches.PNG',
    liveLink: 'https://volvocoaches.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: false,
    order: 48
  },
  {
    title: 'Nexarth Infra Pvt. Ltd.',
    description: 'Infrastructure and urban development web portal showcasing ongoing land projects, site plans, and inquiry logs.',
    techStack: ['PHP', 'Laravel', 'MySQL'],
    thumbnail: '/assets/project-images/nexarth.png',
    liveLink: 'https://nexarthinfra.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: false,
    order: 49
  },
  {
    title: 'Iqra Foundation',
    description: 'Educational & charitable trust portal with student scholarship applications, campaign management, and donations.',
    techStack: ['PHP', 'Laravel', 'MySQL'],
    thumbnail: '/assets/project-images/iqra-foundation-ifeee.png',
    liveLink: 'https://ifeee.org/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: false,
    order: 50
  },
  {
    title: 'Aarna MEP',
    description: 'Mechanical, Electrical & Plumbing (MEP) engineering showcase featuring project portfolios, specs, and inquiries.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/aarna-enterprises.png',
    liveLink: 'https://aarnamep.com/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 51
  },
  {
    title: 'SNAJ Organization',
    description: 'Social enterprise & charitable association web application supporting volunteer registration and community relief.',
    techStack: ['PHP', 'Laravel', 'MySQL'],
    thumbnail: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://snaj.org.in/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: false,
    order: 52
  },
  {
    title: 'Medwisdom Life Science',
    description: 'Healthcare & pharmaceutical product directory featuring formulation lists, distributor admin panel, and queries.',
    techStack: ['PHP', 'Laravel', 'MySQL'],
    thumbnail: '/assets/project-images/medwisdom.png',
    liveLink: 'https://www.medwisdom.in/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: false,
    order: 53
  },
  {
    title: 'Ummah Helping Hand',
    description: 'Nonprofit humanitarian welfare portal featuring aid campaign management, donor tracking, and impact reports.',
    techStack: ['PHP', 'Laravel', 'MySQL'],
    thumbnail: '/assets/project-images/ummah-helping-hand.png',
    liveLink: 'https://www.ummahhh.org/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Full Stack',
    featured: false,
    order: 54
  },
  {
    title: 'Alco Awareness',
    description: 'Health and wellness initiative portal sharing educational resources, counseling helplines, and recovery directories.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1508847154043-be12a62861c1?w=600&auto=format&fit=crop&q=60',
    liveLink: 'https://alcoawareness.in/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 55
  },
  {
    title: 'Metal Craft',
    description: 'Metal fabrication & custom steel craftsmanship showcase displaying product galleries, specs, and quotation forms.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    thumbnail: '/assets/project-images/metal-craft.png',
    liveLink: 'https://metal-craft.in/',
    githubLink: 'https://github.com/zeeshanlateef',
    category: 'Frontend',
    featured: false,
    order: 56
  }
];
