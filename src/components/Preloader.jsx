import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      document.body.style.overflow = 'unset';
      onComplete();
    }, 4000); // 4 seconds total
    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-dark-900 flex items-center justify-center flex-col origin-bottom"
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="relative flex flex-col items-center">
        
        {/* Loading text */}
        <motion.div
           initial={{ opacity: 0, letterSpacing: "5px" }}
           animate={{ opacity: 1, letterSpacing: "15px" }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="text-white/40 font-display text-xs uppercase mb-8 ml-[15px]"
        >
          Initializing Vibe
        </motion.div>
        
        {/* Masked text reveal: MEHFIL */}
        <div className="flex overflow-hidden relative leading-none mb-2">
          <motion.div
            initial={{ y: "100%", rotate: 5, opacity: 0 }}
            animate={{ y: "0%", rotate: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="text-6xl md:text-8xl font-display font-black text-white"
          >
            MEHFIL
          </motion.div>
        </div>
        
        {/* Masked text reveal: NOIR */}
        <div className="flex overflow-hidden relative leading-none">
          <motion.div
            initial={{ y: "-100%", rotate: -5, opacity: 0 }}
            animate={{ y: "0%", rotate: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
            className="text-6xl md:text-8xl font-noir font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink p-2 drop-shadow-[0_0_15px_rgba(183,33,255,0.4)]"
          >
            NOIR
          </motion.div>
        </div>

        {/* Slashing line effect across the text */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-0 h-[3px] bg-neon-blue shadow-[0_0_30px_rgba(0,240,255,1)] origin-center"
          initial={{ width: "0%", x: "-50%", y: "-50%", rotate: -15 }}
          animate={{ width: "150%" }}
          transition={{ duration: 1, delay: 1.8, ease: "easeInOut" }}
        />

        {/* Progress bar loader */}
        <div className="absolute -bottom-24 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-neon-pink shadow-[0_0_10px_rgba(255,0,127,1)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
          />
        </div>
        
      </div>
    </motion.div>
  );
}
