import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-black tracking-tighter text-white break-words">
          MEHFIL <span className="text-gradient font-noir">NOIR</span> '26
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {['About', 'Vibe', 'Poll', 'Pricing'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-neon-blue transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-pink group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-2 rounded-full font-semibold transition-all hover:border-neon-pink hover:shadow-[0_0_15px_rgba(255,0,127,0.5)]">
            Join the Vibe
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass border-t border-white/10 mt-4 px-6 py-6 flex flex-col gap-6"
        >
          {['About', 'Vibe', 'Poll', 'Pricing'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-lg font-medium">
              {item}
            </a>
          ))}
          <button className="bg-gradient-to-r from-neon-blue to-neon-purple px-6 py-3 rounded-full font-bold w-full mt-2">
            Join the Vibe
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
