import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pollQuestions = [
  {
    id: 'music',
    title: "What's your rhythm?",
    options: ['EDM / Techno', 'Bollywood', 'Hip-Hop / RnB']
  },
  {
    id: 'drink',
    title: 'Your poison of choice?',
    options: ['Cocktails', 'Mocktails', 'Straight Up']
  },
  {
    id: 'vibe',
    title: 'What vibe are you bringing?',
    options: ['Wild & Crazy', 'Aesthetic & Chill', 'Social Butterfly']
  },
  {
    id: 'attendance',
    title: 'Are you joining the pulse?',
    options: ['100% Yes', 'Maybe', 'FOMO later']
  }
];

export default function PollSection() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId, option) => {
    if (!submitted) {
      setAnswers(prev => ({ ...prev, [questionId]: option }));
    }
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === pollQuestions.length) {
      setSubmitted(true);
    }
  };

  return (
    <section id="poll" className="py-32 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-dark-800/80"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto glass p-8 md:p-16 rounded-[3rem] border-2 border-white/5 relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-neon-pink/10 rounded-full blur-[60px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-neon-blue/10 rounded-full blur-[60px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative z-10"
          >
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-6">
              Shape The <span className="font-noir text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple italic">Noir</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-neon-pink to-neon-purple mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
              We want to build this night around you. Drop your preferences below and define the darkness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 relative z-10">
            {pollQuestions.map((q, idx) => (
              <motion.div 
                key={q.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.15, duration: 0.8, type: "spring" }}
                className="flex flex-col gap-4"
              >
                <h4 className="font-display font-bold text-2xl text-white mb-2 tracking-tight">{q.title}</h4>
                <div className="flex flex-col gap-3">
                  {q.options.map((opt) => {
                    const isSelected = answers[q.id] === opt;
                    return (
                      <motion.button
                        whileHover={!submitted ? { scale: 1.02, x: 5 } : {}}
                        whileTap={!submitted ? { scale: 0.98 } : {}}
                        key={opt}
                        onClick={() => handleSelect(q.id, opt)}
                        disabled={submitted}
                        className={`group relative text-left px-6 py-4 rounded-2xl transition-all duration-300 font-medium overflow-hidden ${
                          isSelected 
                            ? 'bg-white/10 text-white border-transparent' 
                            : 'glass border border-white/5 text-white/50 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {isSelected && (
                          <motion.div 
                            layoutId={`poll-glow-${q.id}`}
                            className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 border border-neon-pink/50 rounded-2xl pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          ></motion.div>
                        )}
                        <div className="flex justify-between items-center relative z-10">
                          <span className="text-lg">{opt}</span>
                          <AnimatePresence>
                            {submitted && isSelected && (
                              <motion.span 
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-sm font-bold bg-white text-dark-900 px-3 py-1 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                              >
                                VOTED
                              </motion.span>
                            )}
                            {submitted && !isSelected && (
                              <motion.span 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-sm opacity-40 font-mono"
                              >
                                {(Math.random() * 30 + 10).toFixed(0)}%
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center relative z-10"
          >
            {!submitted ? (
              <motion.button 
                whileHover={Object.keys(answers).length === pollQuestions.length ? { scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.4)" } : {}}
                whileTap={Object.keys(answers).length === pollQuestions.length ? { scale: 0.95 } : {}}
                onClick={handleSubmit}
                disabled={Object.keys(answers).length < pollQuestions.length}
                className="px-12 py-5 rounded-full font-black text-xl tracking-widest uppercase transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed bg-white text-dark-900"
              >
                {Object.keys(answers).length < pollQuestions.length 
                  ? 'Complete To Submit' 
                  : 'Lock My Vibe'}
              </motion.button>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="px-10 py-5 rounded-full glass border-2 border-neon-green text-neon-green font-bold text-xl inline-flex items-center gap-3 shadow-[0_0_20px_rgba(57,255,20,0.2)]"
              >
                <div className="w-8 h-8 rounded-full bg-neon-green text-dark-900 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                Preferences Locked.
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
