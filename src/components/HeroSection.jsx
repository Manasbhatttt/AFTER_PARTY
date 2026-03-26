import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function HeroSection() {
  const compRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.hero-bg-element', {
        y: '30vh',
        ease: 'none',
        scrollTrigger: {
          trigger: compRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, compRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={compRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Parallax Elements */}
      <div className="hero-bg-element absolute top-[20%] right-[10%] w-64 h-64 rounded-full border border-neon-pink/30 blur-[2px] opacity-50 pointer-events-none"></div>
      <div className="hero-bg-element absolute bottom-[10%] left-[5%] w-96 h-96 rounded-full bg-neon-blue/5 blur-[50px] pointer-events-none"></div>
      
      {/* Decorative Stickers/Shapes */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] left-[15%] w-24 h-24 hidden md:block opacity-70"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-neon-yellow fill-current">
          <polygon points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-6 px-4 py-1 rounded-full border border-white/20 glass text-sm font-semibold tracking-widest uppercase"
        >
          Dehradun's Biggest College After-Party
        </motion.div>
        
        <div className="relative inline-block mt-4 mb-12 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0px" }}
            animate={{ opacity: 1, letterSpacing: "min(4vw, 20px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-display font-black uppercase text-white/80 z-20 ml-[20px]" 
          >
            MEHFIL
          </motion.div>

          <motion.div className="flex justify-center text-transparent bg-clip-text bg-gradient-to-b from-white via-neon-purple to-neon-pink font-noir font-black text-[5rem] sm:text-[8rem] md:text-[12rem] xl:text-[14rem] leading-none -mt-2 md:-mt-6 relative z-10 drop-shadow-[0_0_20px_rgba(183,33,255,0.5)]">
            {"NOIR".split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 100, rotateY: 90, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.4 + index * 0.15, type: "spring", stiffness: 100 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
            className="absolute -bottom-6 md:-bottom-10 right-0 md:-right-16 text-neon-yellow font-display font-bold text-xl md:text-4xl px-3 py-1 md:px-6 md:py-2 border-2 border-neon-yellow rounded-full rotate-[-15deg] glass shadow-[0_0_20px_rgba(204,255,0,0.4)]"
          >
            '26
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/80 max-w-2xl font-light mb-10"
        >
          Where the night begins. The ultimate fusion of music, vibes, and energy.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a href="#pre-register" className="px-8 py-4 bg-neon-pink text-white rounded-full font-bold text-lg hover:bg-white hover:text-dark-900 transition-all shadow-[0_0_20px_rgba(255,0,127,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:-translate-y-1 inline-block text-center">
            Join the Vibe
          </a>
          <button className="px-8 py-4 glass border border-white/20 rounded-full font-bold text-lg hover:border-neon-blue hover:text-neon-blue transition-all hover:-translate-y-1">
            Watch Teaser
          </button>
        </motion.div>
      </div>

      {/* Image collage placeholder for bottom/sides */}
      <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-dark-900 to-transparent z-0"></div>
    </section>
  );
}
