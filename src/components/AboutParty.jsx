import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutParty() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

  return (
    <section id="about" ref={containerRef} className="py-32 relative z-10 overflow-hidden">
      {/* Dynamic Background */}
      <motion.div style={{ y: y1 }} className="absolute -left-20 top-20 w-[40vw] h-[40vw] rounded-full border-[10px] border-neon-purple/10 blur-xl pointer-events-none"></motion.div>
      <motion.div style={{ y: y2 }} className="absolute -right-20 bottom-0 w-[30vw] h-[30vw] rounded-full border-[5px] border-neon-blue/10 blur-xl pointer-events-none"></motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          <div className="w-full md:w-1/2 relative group perspective-1000">
            <motion.div 
              initial={{ rotateX: 20, rotateY: -20, opacity: 0 }}
              whileInView={{ rotateX: 0, rotateY: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden glass border-2 border-white/5 shadow-2xl shadow-neon-pink/10"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-dark-900/80 via-transparent to-neon-purple/20 mix-blend-overlay z-10 pointer-events-none"></div>
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 10, ease: "linear" }}
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Party Crowd" 
                className="w-full h-full object-cover filter contrast-125 saturate-50"
              />
              
              {/* Floating sticker */}
              <motion.div 
                animate={{ y: [0, -10, 0], rotate: [12, 15, 12] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-4 md:-right-8 z-20 bg-neon-yellow text-dark-900 font-black px-8 py-3 rounded-full shadow-[0_0_30px_rgba(204,255,0,0.3)] border-2 border-dark-900 text-2xl uppercase tracking-widest"
              >
                Est. 2026
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.h2 
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                className="text-5xl md:text-7xl font-noir font-black uppercase mb-8 tracking-widest leading-none drop-shadow-lg"
              >
                Enter The <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple italic pr-4">Noir</span> Dimension
              </motion.h2>
              
              <motion.div variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }} className="space-y-6 text-xl text-white/70 font-light border-l-4 border-neon-blue pl-6 ml-2">
                <p>
                  Forget everything about basic college parties. We are transforming the night into a massive, immersive music and dance festival experience.
                </p>
                <p className="text-white/50 text-lg">
                  High-energy beats, crafted drinks, immersive social zones, and an exclusive crowd. This is where Dehradun's finest come to lose themselves in the rhythm.
                </p>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="mt-12 flex flex-wrap gap-6">
                <motion.div whileHover={{ scale: 1.05 }} className="glass px-8 py-6 rounded-2xl border border-white/10 text-center relative overflow-hidden group w-full sm:w-auto flex-grow">
                  <div className="absolute inset-0 bg-neon-blue/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="block text-4xl font-black text-neon-blue relative z-10 group-hover:text-white transition-colors">100+</span>
                  <span className="text-sm text-white/50 uppercase tracking-widest relative z-10 group-hover:text-white/80 transition-colors">Expected</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="glass px-8 py-6 rounded-2xl border border-white/10 text-center relative overflow-hidden group w-full sm:w-auto flex-grow">
                  <div className="absolute inset-0 bg-neon-purple/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="block text-4xl font-black text-neon-purple relative z-10 group-hover:text-white transition-colors">8 Hrs</span>
                  <span className="text-sm text-white/50 uppercase tracking-widest relative z-10 group-hover:text-white/80 transition-colors">Non-stop</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
