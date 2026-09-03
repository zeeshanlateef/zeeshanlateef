import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const seoData = {
  '/': {
    title: 'Zeeshan Lateef | Zeeshan Lateef Portfolio | Full Stack Developer',
    description: 'Official Zeeshan Lateef Portfolio — Zeeshan Developer & Full Stack Software Developer with 2+ years of experience in PHP, Laravel, React.js, Node.js, MySQL, and Vibe Coding.',
    keywords: 'Zeeshan Lateef Portfolio, Zeeshan Lateef, Zeeshan Developer, Zeeshan Full Stack Developer, Zeeshan Lateef Software Developer, Full Stack Developer, Software Developer, PHP Developer, Laravel Developer, React Developer, Vibe Coding, MERN Stack, Delhi Developer'
  },
  '/about': {
    title: 'About Zeeshan Lateef | Zeeshan Developer Profile & Experience',
    description: 'Official Zeeshan Lateef Profile — Full Stack Developer & Computer Science Engineer with experience at Ahmad Web Solutions, Abtus World, and Zynextro Software.',
    keywords: 'Zeeshan Lateef, Zeeshan Lateef Portfolio, About Zeeshan Lateef, Zeeshan Developer, Full Stack Developer Profile, Laravel Software Engineer, B.Tech CSE CGPA 8.22'
  },
  '/projects': {
    title: 'Zeeshan Lateef Portfolio Projects | Zeeshan Developer Applications',
    description: 'Explore 30+ full stack web applications, Laravel portals, React.js frontends, and REST API systems built by Zeeshan Lateef.',
    keywords: 'Zeeshan Lateef Portfolio, Zeeshan Lateef Projects, Zeeshan Developer Projects, HRMS Lite, Laravel E-Commerce, React Projects, Inventory Management System, FastAPI Python, Full Stack Applications'
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
