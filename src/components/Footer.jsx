import React from 'react';
import { Camera, MessageCircle, Music, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-dark-900 border-t border-white/10 pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-5xl font-display font-black uppercase mb-4 tracking-tighter">
              MEHFIL <span className="font-noir text-gradient">NOIR</span> '26
            </h2>
            <p className="text-white/60 text-lg max-w-md">
              Where the night begins. The most anticipated after-party in Dehradun. Bold, funky, and slightly edgy.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-6">Explore</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#about" className="text-white/60 hover:text-neon-pink transition-colors">The Vibe</a></li>
              <li><a href="#highlights" className="text-white/60 hover:text-neon-blue transition-colors">Lineup</a></li>
              <li><a href="#pricing" className="text-white/60 hover:text-neon-purple transition-colors">Tickets</a></li>
              <li><a href="#safety" className="text-white/60 hover:text-neon-green transition-colors">Guidelines</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-neon-pink/20 hover:border-neon-pink transition-all hover:-translate-y-1">
                <Camera size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-neon-blue/20 hover:border-neon-blue transition-all hover:-translate-y-1">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-neon-purple/20 hover:border-neon-purple transition-all hover:-translate-y-1">
                <Music size={20} />
              </a>
            </div>
            <p className="mt-6 text-white/50 text-sm">
              hello@mehfilnoir26.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Mehfil Noir. All vibes reserved.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-sm font-medium">
            <Sparkles size={16} className="text-neon-pink" />
            Built for the vibe of '26
          </div>
        </div>
      </div>
    </footer>
  );
}
