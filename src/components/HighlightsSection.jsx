import React from 'react';
import { motion } from 'framer-motion';
import { Music, Zap, GlassWater, Sparkles, Users, Coffee } from 'lucide-react';

const highlights = [
  { icon: Music, title: 'Live DJ Sets', desc: 'EDM, Hip-Hop & Bollywood bangers.', color: 'text-neon-pink', bg: 'hover:bg-neon-pink/10', border: 'hover:border-neon-pink', glow: 'shadow-[0_0_30px_rgba(255,0,127,0)] hover:shadow-[0_0_30px_rgba(255,0,127,0.3)]' },
  { icon: Zap, title: 'Massive Dance Floor', desc: 'State of the art sound and lighting.', color: 'text-neon-blue', bg: 'hover:bg-neon-blue/10', border: 'hover:border-neon-blue', glow: 'shadow-[0_0_30px_rgba(0,240,255,0)] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]' },
  { icon: GlassWater, title: 'Crafted Drinks', desc: 'Premium cocktails and mocktails.', color: 'text-neon-purple', bg: 'hover:bg-neon-purple/10', border: 'hover:border-neon-purple', glow: 'shadow-[0_0_30px_rgba(183,33,255,0)] hover:shadow-[0_0_30px_rgba(183,33,255,0.3)]' },
  { icon: Sparkles, title: 'Themed Decor', desc: 'Immersive neon-drenched environment.', color: 'text-neon-yellow', bg: 'hover:bg-neon-yellow/10', border: 'hover:border-neon-yellow', glow: 'shadow-[0_0_30px_rgba(204,255,0,0)] hover:shadow-[0_0_30px_rgba(204,255,0,0.3)]' },
  { icon: Users, title: 'Social Games', desc: 'Icebreakers to meet the whole crowd.', color: 'text-neon-green', bg: 'hover:bg-neon-green/10', border: 'hover:border-neon-green', glow: 'shadow-[0_0_30px_rgba(57,255,20,0)] hover:shadow-[0_0_30px_rgba(57,255,20,0.3)]' },
  { icon: Coffee, title: 'Chill Zones', desc: 'Relax and vibe when you need a break.', color: 'text-white', bg: 'hover:bg-white/10', border: 'hover:border-white', glow: 'shadow-[0_0_30px_rgba(255,255,255,0)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]' },
];

export default function HighlightsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section id="highlights" className="py-32 relative z-10 bg-dark-900 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-dark-800 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-noir font-black uppercase tracking-widest mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neon-blue italic">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
            Everything you need for an unforgettable night. We've curated every detail.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div 
                key={index} 
                variants={item}
                whileHover={{ y: -15, scale: 1.02 }}
                className={`group glass p-10 rounded-[2rem] border-2 border-white/5 transition-all duration-500 ease-out cursor-default ${highlight.bg} ${highlight.border} ${highlight.glow} relative overflow-hidden`}
              >
                {/* Backdrop radial glow on hover */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                
                <div className={`w-16 h-16 rounded-2xl glass flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-lg relative z-10`}>
                  <Icon className={highlight.color} size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 tracking-tight relative z-10 group-hover:text-white transition-colors">{highlight.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed relative z-10 group-hover:text-white/80 transition-colors">{highlight.desc}</p>
                
                {/* Decorative corner lines */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-transparent group-hover:border-white/20 rounded-tr-[2rem] transition-colors duration-500 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-transparent group-hover:border-white/20 rounded-bl-[2rem] transition-colors duration-500 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
