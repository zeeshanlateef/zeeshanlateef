import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import Preloader from './components/Preloader';
import { WhatsappIcon } from './components/SocialIcons';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-dark-bg text-gray-100 selection:bg-primary/30 selection:text-white">
      {/* Premium Loader Overlay */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader finishLoading={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Background Noise Texture */}
      <div className="noise-bg" />

      {/* Main Navigation Headers */}
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </main>

      {/* Floating WhatsApp Widget */}
      <motion.a
        href="https://wa.me/919572306596"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isLoading ? { opacity: 0 } : { opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 flex items-center group cursor-pointer"
        title="Chat on WhatsApp"
      >
        {/* Attractive chat bubble tag that popups alongside icon ONLY on hover */}
        <span className="mr-0 max-w-0 opacity-0 overflow-hidden group-hover:mr-3 group-hover:max-w-[180px] group-hover:opacity-100 group-hover:px-4 group-hover:py-2 bg-[#090911]/95 border border-emerald-500/20 group-hover:border-emerald-500/40 text-emerald-400 text-[10px] font-bold tracking-wider rounded-xl shadow-2xl flex items-center gap-2 transition-all duration-500 ease-out pointer-events-none select-none whitespace-nowrap">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          CHAT ON WHATSAPP
        </span>

        {/* WhatsApp Icon Circle */}
        <div className="h-14 w-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.45)] transition-all duration-300 relative shrink-0">
          <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/20 animate-ping" style={{ animationDuration: '2.5s' }} />
          <WhatsappIcon className="w-6 h-6 relative z-10" />
        </div>
      </motion.a>

      <Footer />
    </div>
  );
}

export default App;
