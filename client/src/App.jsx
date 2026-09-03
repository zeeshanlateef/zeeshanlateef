import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import AboutDetails from './pages/AboutDetails';
import Preloader from './components/Preloader';
import SEO from './components/SEO';
import { WhatsappIcon } from './components/SocialIcons';
import { ThemeProvider } from './context/ThemeContext';

// Helper component to reset scroll position on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <SEO />
      <ScrollToTop />
      <div className="relative min-h-screen bg-dark-bg text-gray-100 selection:bg-primary/30 selection:text-white transition-colors duration-300">
        {/* Premium Loader Overlay */}
        <AnimatePresence mode="wait">
          {isLoading && (
            <Preloader finishLoading={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {/* Background Noise Texture */}
        <div className="noise-bg" />

        {/* Main Navigation Header */}
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutDetails />} />
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
        </main>

        {/* Floating WhatsApp Widget */}
        <motion.a
          href="https://wa.me/919572306596"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isLoading ? { opacity: 0 } : { opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={
            isLoading
              ? { duration: 0 }
              : {
                  opacity: { delay: 0.5, duration: 0.3 },
                  scale: { delay: 0.5, type: 'spring' },
                  y: {
                    repeat: Infinity,
                    duration: 2.5,
                    ease: 'easeInOut',
                  }
                }
          }
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-40 flex items-center cursor-pointer select-none group"
          title="Chat on WhatsApp"
        >
          {/* Attention-Seeking Chat Bubble */}
          <span className="mr-0 max-w-0 opacity-0 overflow-hidden group-hover:mr-3 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:px-4 group-hover:py-2 bg-[#090911]/95 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold tracking-widest rounded-xl shadow-[0_0_15px_rgba(37,211,102,0.15)] flex items-center gap-2 whitespace-nowrap transition-all duration-500 ease-out pointer-events-none select-none font-display">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Chat on WhatsApp
          </span>

          {/* WhatsApp Icon Circle */}
          <div className="h-14 w-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_#25D366] hover:shadow-[0_0_30px_#25D366] transition-all duration-300 relative shrink-0">
            <span className="absolute -inset-2 rounded-full bg-[#25D366]/30 animate-ping" style={{ animationDuration: '2s' }} />
            <WhatsappIcon className="w-6 h-6 relative z-10" />
          </div>
        </motion.a>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
