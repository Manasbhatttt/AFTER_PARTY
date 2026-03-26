import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TeaserSection() {
  const targetDate = new Date('2026-04-15T23:59:59').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: '20',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-40 relative z-10 overflow-hidden bg-dark-900 border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-neon-purple/10 rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        >
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block px-8 py-3 glass rounded-full border border-red-500/50 mb-10 font-bold tracking-[0.3em] uppercase text-xs text-red-400 bg-red-500/10 shadow-[0_0_20px_rgba(239,68,68,0.2)]"
          >
            Classified Intel
          </motion.div>
          
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-noir font-black uppercase tracking-widest mb-10 leading-none drop-shadow-2xl">
            Location <br className="hidden md:block"/> Dropping <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30 italic">Soon</span>
          </h2>
          
          <p className="text-2xl text-white/50 font-light max-w-3xl mx-auto mb-16 leading-relaxed">
            Date & time reveal incoming. Turn on notifications and join the waitlist to receive the encrypted coordinates first.
          </p>
          
          <div className="flex justify-center flex-wrap gap-4 md:gap-6">
            <motion.div whileHover={{ y: -10 }} className="w-20 md:w-32 h-28 md:h-40 glass flex flex-col items-center justify-center rounded-2xl md:rounded-[2rem] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 w-full h-1 bg-neon-pink group-hover:h-full transition-all duration-500 opacity-20 z-0"></div>
              <span className="text-4xl md:text-6xl font-display font-black relative z-10">{timeLeft.days}</span>
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase mt-2 md:mt-4 text-white/50 relative z-10 group-hover:text-white transition-colors">Days</span>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="w-20 md:w-32 h-28 md:h-40 glass flex flex-col items-center justify-center rounded-2xl md:rounded-[2rem] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 w-full h-1 bg-neon-purple group-hover:h-full transition-all duration-500 opacity-20 z-0"></div>
              <span className="text-4xl md:text-6xl font-display font-black relative z-10">{timeLeft.hours}</span>
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase mt-2 md:mt-4 text-white/50 relative z-10 group-hover:text-white transition-colors">Hours</span>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="w-20 md:w-32 h-28 md:h-40 glass flex flex-col items-center justify-center rounded-2xl md:rounded-[2rem] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 w-full h-1 bg-neon-blue group-hover:h-full transition-all duration-500 opacity-20 z-0"></div>
              <span className="text-4xl md:text-6xl font-display font-black relative z-10">{timeLeft.minutes}</span>
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase mt-2 md:mt-4 text-white/50 relative z-10 group-hover:text-white transition-colors">Mins</span>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="w-20 md:w-32 h-28 md:h-40 glass flex flex-col items-center justify-center rounded-2xl md:rounded-[2rem] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 w-full h-1 bg-white group-hover:h-full transition-all duration-500 opacity-20 z-0"></div>
              <span className="text-4xl md:text-6xl font-display font-black relative z-10">{timeLeft.seconds}</span>
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase mt-2 md:mt-4 text-white/50 relative z-10 group-hover:text-white transition-colors">Secs</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
