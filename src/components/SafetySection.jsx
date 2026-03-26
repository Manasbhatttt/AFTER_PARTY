import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Eye, Headphones } from 'lucide-react';

const safetyFeatures = [
  { icon: UserCheck, title: 'Profile Verification', desc: 'Strict guestlist and ID checks to ensure an exclusive crowd.' },
  { icon: ShieldCheck, title: 'Secure Environment', desc: 'Professional bouncers and elite crowd management team.' },
  { icon: Eye, title: 'Zero Tolerance', desc: 'Safe spaces created with zero tolerance for misbehavior or harassment.' },
  { icon: Headphones, title: 'Responsible Service', desc: 'Trained bartenders promoting safe and sensible drinking habits.' },
];

export default function SafetySection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="safety" className="py-32 relative z-10 bg-dark-800/80 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-display font-black uppercase tracking-tighter mb-6"
          >
            Safe <span className="text-neon-green">Space</span> Guarantee
          </motion.h2>
          <div className="w-16 h-1 bg-neon-green mx-auto mb-6 rounded-full opacity-50 shadow-[0_0_10px_rgba(57,255,20,0.5)]"></div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Your vibe is our ultimate priority. We take security seriously so you can let go and completely lose yourself in the music.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {safetyFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={idx}
                variants={item}
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-[2rem] border border-white/5 text-center flex flex-col items-center group hover:border-neon-green/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 w-full h-[2px] bg-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(57,255,20,1)]"></div>
                <div className="w-20 h-20 rounded-full glass mb-8 flex items-center justify-center text-neon-green group-hover:scale-110 group-hover:bg-neon-green/10 transition-all duration-300 shadow-[0_0_15px_rgba(57,255,20,0.1)] group-hover:shadow-[0_0_25px_rgba(57,255,20,0.3)]">
                  <Icon size={36} />
                </div>
                <h4 className="font-display font-bold text-2xl mb-4 text-white/90 group-hover:text-white transition-colors">{feature.title}</h4>
                <p className="text-white/50 text-base leading-relaxed group-hover:text-white/70 transition-colors">{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
