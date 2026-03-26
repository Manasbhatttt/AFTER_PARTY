import React from 'react';
import { motion } from 'framer-motion';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 relative z-10 perspective-1000">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-5xl md:text-7xl font-noir font-black uppercase tracking-widest mb-6 drop-shadow-lg"
          >
            Access <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink italic pr-4">Passes</span>
          </motion.h2>
          <div className="w-16 h-1 bg-white mx-auto mb-6 rounded-full opacity-50"></div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-white/50 font-light max-w-xl mx-auto"
          >
            Early bird offers dropping soon. Limited capacity. Secure your spot before it's too late.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto perspective-1000">
          {/* Girls Pass */}
          <motion.div 
            initial={{ opacity: 0, rotateY: 30, x: -100 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, type: "spring" }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 p-1 rounded-[2.5rem] relative group cursor-pointer shadow-xl border border-white/5 hover:border-neon-pink/50 transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-pink via-transparent to-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-[2.5rem]"></div>
            <div className="h-full w-full rounded-[2.5rem] p-12 flex flex-col relative z-10 bg-dark-900/80">
              <div className="absolute top-0 right-10 w-24 h-48 bg-neon-pink/20 rounded-b-full blur-2xl pointer-events-none"></div>
              
              <div className="mb-12 relative z-10">
                <span className="inline-block px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest border-2 border-neon-pink text-neon-pink mb-6 shadow-[0_0_15px_rgba(255,0,127,0.3)]">Phase 1</span>
                <h3 className="text-4xl md:text-5xl font-display font-black mb-4 tracking-tight">Girls Entry</h3>
                <p className="text-white/60 text-lg leading-relaxed">Exclusive access, cover charge included, and a premium welcome drink to start the night right.</p>
              </div>
              <div className="mt-auto relative z-10">
                <div className="text-6xl md:text-7xl font-noir font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">₹XXX</div>
                <motion.a 
                  href="#pre-register"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full block text-center py-5 rounded-2xl font-black text-lg tracking-wider uppercase border border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,127,0.5)]"
                >
                  Join Waitlist
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Boys Pass */}
          <motion.div 
            initial={{ opacity: 0, rotateY: -30, x: 100 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, type: "spring", delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 p-1 rounded-[2.5rem] relative group cursor-pointer shadow-xl border border-white/5 hover:border-neon-blue/50 transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue via-transparent to-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-[2.5rem]"></div>
            <div className="h-full w-full rounded-[2.5rem] p-12 flex flex-col relative z-10 bg-dark-900/80">
              <div className="absolute top-0 right-10 w-24 h-48 bg-neon-blue/20 rounded-b-full blur-2xl pointer-events-none"></div>

              <div className="mb-12 relative z-10">
                <span className="inline-block px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest border-2 border-neon-blue text-neon-blue mb-6 shadow-[0_0_15px_rgba(0,240,255,0.3)]">Phase 1</span>
                <h3 className="text-4xl md:text-5xl font-display font-black mb-4 tracking-tight">Boys Entry</h3>
                <p className="text-white/60 text-lg leading-relaxed">Access to the Noir dimension. Includes cover charge and welcome drink. Profile verification required.</p>
              </div>
              <div className="mt-auto relative z-10">
                <div className="text-6xl md:text-7xl font-noir font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">₹XXX</div>
                <motion.a 
                  href="#pre-register"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full block text-center py-5 rounded-2xl font-black text-lg tracking-wider uppercase border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-900 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                >
                  Join Waitlist
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
