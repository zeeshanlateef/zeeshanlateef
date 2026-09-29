import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const seoData = {
  '/': {
    title: 'Zeeshan Lateef | Zeeshan Lateef Portfolio | Full Stack Developer',
    description: 'Official Zeeshan Lateef Portfolio — Zeeshan Developer & Full Stack Software Developer with 2+ years of experience in PHP, Laravel, React.js, Node.js, MySQL, and Vibe Coding.',
    keywords: 'Zeeshan Lateef Portfolio, Zeeshan Lateef, Zeeshan Developer, Zeeshan Full Stack Developer, Zeeshan Lateef Software Developer, Full Stack Developer, Software Developer, PHP Developer, Laravel Developer, React Developer, Vibe Coding, MERN Stack, Delhi Developer'
  },
  '/about': {
    title: 'About Zeeshan Lateef | Full Stack Developer Profile',
    description: 'Learn more about Zeeshan Lateef — Full Stack Software Developer with 2+ years of experience in PHP, Laravel, React.js, and MySQL.',
    keywords: 'Zeeshan Lateef, About Zeeshan Lateef, Zeeshan Developer, Full Stack Developer, Laravel Engineer, Computer Science Graduate'
  },
  '/skills': {
    title: 'Skills & Tech Stack | Zeeshan Lateef',
    description: 'Technical skills, programming languages, backend frameworks, and tools used by Zeeshan Lateef including React.js, PHP, Laravel, MySQL, and Tailwind CSS.',
    keywords: 'Zeeshan Lateef Skills, Technical Stack, PHP, Laravel, React.js, JavaScript, MySQL, Tailwind CSS, Web Development'
  },
  '/experience': {
    title: 'Work Experience | Zeeshan Lateef',
    description: 'Professional work history of Zeeshan Lateef as a Full Stack & Frontend Developer at Ahmad Web Solutions, Abtus World, and Zynextro Software.',
    keywords: 'Zeeshan Lateef Experience, Work History, Software Engineer Jobs, Full Stack Developer Delhi, Laravel Developer Experience'
  },
  '/projects': {
    title: 'Projects & Work | Zeeshan Lateef',
    description: 'Explore full-stack web applications, Laravel portals, and React.js web apps created by Zeeshan Lateef.',
    keywords: 'Zeeshan Lateef Projects, Web App Portfolio, Laravel Applications, React Projects, Full Stack Portfolio'
  },
  '/contact': {
    title: 'Contact Zeeshan Lateef | Get In Touch',
    description: 'Get in touch with Zeeshan Lateef for full-stack web development projects, freelance opportunities, or software engineering positions.',
    keywords: 'Contact Zeeshan Lateef, Hire Zeeshan Lateef, Developer Contact, Delhi Software Engineer, Email Zeeshan'
  }
};

const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const data = seoData[pathname] || seoData['/'];
    
    // Update Page Title
    document.title = data.title;

    // Helper to update meta content
    const updateMeta = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute(attribute, value);
      }
    };

    updateMeta('meta[name="description"]', 'content', data.description);
    updateMeta('meta[name="keywords"]', 'content', data.keywords);
    updateMeta('meta[property="og:title"]', 'content', data.title);
    updateMeta('meta[property="og:description"]', 'content', data.description);
    updateMeta('meta[property="twitter:title"]', 'content', data.title);
    updateMeta('meta[property="twitter:description"]', 'content', data.description);
  }, [pathname]);

  return null;
};

export default SEO;
