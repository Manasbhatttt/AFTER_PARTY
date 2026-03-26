import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutParty from './components/AboutParty';
import HighlightsSection from './components/HighlightsSection';
import PollSection from './components/PollSection';
import PricingSection from './components/PricingSection';
import TeaserSection from './components/TeaserSection';
import SafetySection from './components/SafetySection';
import PreRegisterSection from './components/PreRegisterSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen font-sans selection:bg-neon-pink selection:text-white relative bg-dark-900 text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div 
            key="main"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="relative z-10 w-full"
          >
            {/* Dynamic abstract shapes for background */}
            <div className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-neon-purple/10 blur-3xl pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="fixed bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-neon-blue/10 blur-3xl pointer-events-none z-0 transform translate-x-1/2 translate-y-1/2"></div>

            <Navbar />
            <main>
              <HeroSection />
              <AboutParty />
              <HighlightsSection />
              <PollSection />
              <PricingSection />
              <TeaserSection />
              <SafetySection />
              <PreRegisterSection />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
